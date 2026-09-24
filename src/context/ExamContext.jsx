import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  EXAM_CONFIG,
  EXAM_STATES,
  TOPIC_LIST,
} from '../constants/examConfig.js';
import { parseQuestionsAsync } from '../services/parser.js';
import { buildBalancedExamSet } from '../services/generator.js';
import { gradeExamSession } from '../services/grader.js';
import {
  loadExamSession,
  saveExamSession,
  clearExamSession,
  loadQuestionPool,
  saveQuestionPool,
} from '../services/sessionPersistence.js';

const ExamContext = createContext(null);

function secondsUntil(deadlineTs) {
  return Math.max(0, Math.ceil((deadlineTs - Date.now()) / 1000));
}

export function ExamProvider({ children }) {
  // Picked up once on mount: anything left behind by an unwanted page reload.
  const [restored] = useState(loadExamSession);

  const [examState, setExamState] = useState(
    () => restored?.examState ?? EXAM_STATES.NOT_STARTED,
  );
  const [isParsing, setIsParsing] = useState(false);
  const [parseProgress, setParseProgress] = useState(0);
  const [parseError, setParseError] = useState(null);

  // File questions pool & active exam set
  const [allParsedQuestions, setAllParsedQuestions] = useState(() =>
    restored ? loadQuestionPool() : [],
  );
  const [examQuestions, setExamQuestions] = useState(
    () => restored?.examQuestions ?? [],
  );
  const [categoryBreakdown, setCategoryBreakdown] = useState(
    () => restored?.categoryBreakdown ?? {},
  );

  // Active exam session state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    () => restored?.currentQuestionIndex ?? 0,
  );
  const [userAnswers, setUserAnswers] = useState(
    () => restored?.userAnswers ?? {},
  ); // { [qId]: ['A', 'C'] }
  const [timeRemaining, setTimeRemaining] = useState(() => {
    if (restored?.deadlineTs != null)
      return secondsUntil(restored.deadlineTs);
    return restored?.timeRemaining ?? EXAM_CONFIG.TIME_LIMIT_SECONDS;
  });
  // Epoch ms at which the clock runs out; null whenever the clock is stopped.
  // Tracking the deadline instead of counting ticks keeps the countdown honest
  // across laptop sleep and page reloads, where intervals simply stop firing.
  const [deadlineTs, setDeadlineTs] = useState(
    () => restored?.deadlineTs ?? null,
  );
  const [pauseUsed, setPauseUsed] = useState(
    () => restored?.pauseUsed ?? false,
  );
  const [examResults, setExamResults] = useState(
    () => restored?.examResults ?? null,
  );

  // Timer interval ref
  const timerRef = useRef(null);

  // The countdown's auto-submit closure is created once, when the exam starts.
  // Reading the live answers through refs stops it grading an empty snapshot.
  const userAnswersRef = useRef(restored?.userAnswers ?? {});
  const examQuestionsRef = useRef(restored?.examQuestions ?? []);
  const hasSubmittedRef = useRef(
    restored?.examState === EXAM_STATES.COMPLETED,
  );
  const timeRemainingRef = useRef(timeRemaining);

  useEffect(() => {
    userAnswersRef.current = userAnswers;
  }, [userAnswers]);

  useEffect(() => {
    examQuestionsRef.current = examQuestions;
  }, [examQuestions]);

  // Must stay above the persistence effect so a saved snapshot never carries a
  // stale frozen clock value.
  useEffect(() => {
    timeRemainingRef.current = timeRemaining;
  }, [timeRemaining]);

  // Handle countdown timer
  useEffect(() => {
    if (examState !== EXAM_STATES.IN_PROGRESS || deadlineTs == null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return undefined;
    }

    const tick = () => {
      const remaining = secondsUntil(deadlineTs);
      setTimeRemaining(remaining);
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        // Auto-submit on expiration
        handleAutoSubmit();
      }
    };

    tick(); // catch up immediately after a wake-up or a reload
    timerRef.current = setInterval(tick, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [examState, deadlineTs]);

  // Persist the session so an unwanted reload can resume it. timeRemaining is
  // deliberately not a dependency: while the clock runs, deadlineTs already
  // describes it, and re-serialising every second would be wasteful.
  useEffect(() => {
    if (examState === EXAM_STATES.NOT_STARTED) {
      clearExamSession();
      return;
    }
    saveExamSession({
      examState,
      examQuestions,
      categoryBreakdown,
      currentQuestionIndex,
      userAnswers,
      timeRemaining: timeRemainingRef.current,
      deadlineTs,
      pauseUsed,
      examResults,
    });
  }, [
    examState,
    examQuestions,
    categoryBreakdown,
    currentQuestionIndex,
    userAnswers,
    deadlineTs,
    pauseUsed,
    examResults,
  ]);

  // Load and parse file content
  const loadFileContent = useCallback(
    async (rawText, fileName = 'Uploaded File') => {
      try {
        setIsParsing(true);
        setParseProgress(20);
        setParseError(null);

        const parsed = await parseQuestionsAsync(rawText, (p) =>
          setParseProgress(p),
        );

        if (!parsed || parsed.length === 0) {
          throw new Error(
            'Unable to parse valid questions. Please ensure the file matches the expected question/answer format.',
          );
        }

        setAllParsedQuestions(parsed);
        saveQuestionPool(parsed);

        // Build balanced 60-question set
        const { examQuestions: balancedSet, breakdown } =
          buildBalancedExamSet(parsed, TOPIC_LIST);

        setExamQuestions(balancedSet);
        setCategoryBreakdown(breakdown);
        setUserAnswers({});
        userAnswersRef.current = {};
        hasSubmittedRef.current = false;
        setCurrentQuestionIndex(0);
        setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
        setDeadlineTs(null);
        setPauseUsed(false);
        setExamResults(null);

        setExamState(EXAM_STATES.CONFIRMED);
      } catch (err) {
        console.error(err);
        setParseError(err.message || 'Failed to parse file.');
      } finally {
        setIsParsing(false);
        setParseProgress(0);
      }
    },
    [],
  );

  // Confirm start of exam
  const confirmAndStartExam = useCallback(() => {
    if (examQuestions.length === 0) return;
    setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
    setDeadlineTs(Date.now() + EXAM_CONFIG.TIME_LIMIT_SECONDS * 1000);
    setExamState(EXAM_STATES.IN_PROGRESS);
  }, [examQuestions]);

  // Record option selection for current question
  const selectOption = useCallback(
    (questionId, optionLetter, isMultiSelect) => {
      setUserAnswers((prev) => {
        const currentSelected = prev[questionId] || [];
        let nextSelected;

        if (isMultiSelect) {
          if (currentSelected.includes(optionLetter)) {
            nextSelected = currentSelected.filter(
              (l) => l !== optionLetter,
            );
          } else {
            nextSelected = [...currentSelected, optionLetter].sort();
          }
        } else {
          // Single select (radio behavior)
          nextSelected = [optionLetter];
        }

        return {
          ...prev,
          [questionId]: nextSelected,
        };
      });
    },
    [],
  );

  // Navigate to next question or submit if last
  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Final submission
      finalizeExamSubmission();
    }
  }, [currentQuestionIndex, examQuestions.length, userAnswers]);

  // Pause exam (exactly one pause allowed globally)
  const pauseExam = useCallback(() => {
    if (pauseUsed || examState !== EXAM_STATES.IN_PROGRESS) return;
    if (deadlineTs != null)
      setTimeRemaining(secondsUntil(deadlineTs));
    setDeadlineTs(null); // stops the clock
    setPauseUsed(true);
    setExamState(EXAM_STATES.PAUSED);
  }, [pauseUsed, examState, deadlineTs]);

  // Resume exam from paused state
  const resumeExam = useCallback(() => {
    if (examState === EXAM_STATES.PAUSED) {
      setDeadlineTs(Date.now() + timeRemainingRef.current * 1000);
      setExamState(EXAM_STATES.IN_PROGRESS);
    }
  }, [examState]);

  // Deterministic final submission & grading
  const finalizeExamSubmission = useCallback(() => {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    setDeadlineTs(null);
    const results = gradeExamSession(
      examQuestionsRef.current,
      userAnswersRef.current,
    );
    setExamResults(results);
    setExamState(EXAM_STATES.COMPLETED);
  }, []);

  const handleAutoSubmit = useCallback(() => {
    finalizeExamSubmission();
  }, [finalizeExamSubmission]);

  const resetToUploadScreen = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    clearExamSession();
    setExamState(EXAM_STATES.NOT_STARTED);
    setExamQuestions([]);
    setAllParsedQuestions([]);
    setUserAnswers({});
    userAnswersRef.current = {};
    hasSubmittedRef.current = false;
    setCurrentQuestionIndex(0);
    setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
    setDeadlineTs(null);
    setPauseUsed(false);
    setExamResults(null);
  }, []);

  // Reset exam for new attempt
  const restartExamWithSamePool = useCallback(() => {
    if (allParsedQuestions.length === 0) {
      // Pool was too large to persist, so a reload left nothing to resample from.
      resetToUploadScreen();
      return;
    }
    const { examQuestions: newSet, breakdown } = buildBalancedExamSet(
      allParsedQuestions,
      TOPIC_LIST,
    );
    setExamQuestions(newSet);
    setCategoryBreakdown(breakdown);
    setUserAnswers({});
    userAnswersRef.current = {};
    hasSubmittedRef.current = false;
    setCurrentQuestionIndex(0);
    setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
    setDeadlineTs(null);
    setPauseUsed(false);
    setExamResults(null);
    setExamState(EXAM_STATES.CONFIRMED);
  }, [allParsedQuestions, resetToUploadScreen]);

  const value = {
    examState,
    isParsing,
    parseProgress,
    parseError,
    allParsedQuestions,
    examQuestions,
    categoryBreakdown,
    currentQuestionIndex,
    userAnswers,
    timeRemaining,
    pauseUsed,
    examResults,
    loadFileContent,
    confirmAndStartExam,
    selectOption,
    goToNextQuestion,
    pauseExam,
    resumeExam,
    finalizeExamSubmission,
    restartExamWithSamePool,
    resetToUploadScreen,
  };

  return (
    <ExamContext.Provider value={value}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
}
