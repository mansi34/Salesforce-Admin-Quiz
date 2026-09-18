import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { EXAM_CONFIG, EXAM_STATES, TOPIC_LIST } from '../constants/examConfig.js';
import { parseQuestionsAsync } from '../services/parser.js';
import { buildBalancedExamSet } from '../services/generator.js';
import { gradeExamSession } from '../services/grader.js';

const ExamContext = createContext(null);

export function ExamProvider({ children }) {
  const [examState, setExamState] = useState(EXAM_STATES.NOT_STARTED);
  const [isParsing, setIsParsing] = useState(false);
  const [parseProgress, setParseProgress] = useState(0);
  const [parseError, setParseError] = useState(null);

  // File questions pool & active exam set
  const [allParsedQuestions, setAllParsedQuestions] = useState([]);
  const [examQuestions, setExamQuestions] = useState([]);
  const [categoryBreakdown, setCategoryBreakdown] = useState({});

  // Active exam session state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: ['A', 'C'] }
  const [timeRemaining, setTimeRemaining] = useState(EXAM_CONFIG.TIME_LIMIT_SECONDS);
  const [pauseUsed, setPauseUsed] = useState(false);
  const [examResults, setExamResults] = useState(null);

  // Timer interval ref
  const timerRef = useRef(null);

  // Handle countdown timer
  useEffect(() => {
    if (examState === EXAM_STATES.IN_PROGRESS) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            // Auto-submit on expiration
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [examState]);

  // Load and parse file content
  const loadFileContent = useCallback(async (rawText, fileName = 'Uploaded File') => {
    try {
      setIsParsing(true);
      setParseProgress(20);
      setParseError(null);

      const parsed = await parseQuestionsAsync(rawText, (p) => setParseProgress(p));
      
      if (!parsed || parsed.length === 0) {
        throw new Error("Unable to parse valid questions. Please ensure the file matches the expected question/answer format.");
      }

      setAllParsedQuestions(parsed);

      // Build balanced 60-question set
      const { examQuestions: balancedSet, breakdown } = buildBalancedExamSet(parsed, TOPIC_LIST);

      setExamQuestions(balancedSet);
      setCategoryBreakdown(breakdown);
      setUserAnswers({});
      setCurrentQuestionIndex(0);
      setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
      setPauseUsed(false);
      setExamResults(null);

      setExamState(EXAM_STATES.CONFIRMED);
    } catch (err) {
      console.error(err);
      setParseError(err.message || "Failed to parse file.");
    } finally {
      setIsParsing(false);
      setParseProgress(0);
    }
  }, []);

  // Confirm start of exam
  const confirmAndStartExam = useCallback(() => {
    if (examQuestions.length === 0) return;
    setExamState(EXAM_STATES.IN_PROGRESS);
  }, [examQuestions]);

  // Record option selection for current question
  const selectOption = useCallback((questionId, optionLetter, isMultiSelect) => {
    setUserAnswers((prev) => {
      const currentSelected = prev[questionId] || [];
      let nextSelected;

      if (isMultiSelect) {
        if (currentSelected.includes(optionLetter)) {
          nextSelected = currentSelected.filter((l) => l !== optionLetter);
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
  }, []);

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
    setPauseUsed(true);
    setExamState(EXAM_STATES.PAUSED);
  }, [pauseUsed, examState]);

  // Resume exam from paused state
  const resumeExam = useCallback(() => {
    if (examState === EXAM_STATES.PAUSED) {
      setExamState(EXAM_STATES.IN_PROGRESS);
    }
  }, [examState]);

  // Deterministic final submission & grading
  const finalizeExamSubmission = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const results = gradeExamSession(examQuestions, userAnswers);
    setExamResults(results);
    setExamState(EXAM_STATES.COMPLETED);
  }, [examQuestions, userAnswers]);

  const handleAutoSubmit = useCallback(() => {
    finalizeExamSubmission();
  }, [finalizeExamSubmission]);

  // Reset exam for new attempt
  const restartExamWithSamePool = useCallback(() => {
    const { examQuestions: newSet, breakdown } = buildBalancedExamSet(allParsedQuestions, TOPIC_LIST);
    setExamQuestions(newSet);
    setCategoryBreakdown(breakdown);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
    setPauseUsed(false);
    setExamResults(null);
    setExamState(EXAM_STATES.CONFIRMED);
  }, [allParsedQuestions]);

  const resetToUploadScreen = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setExamState(EXAM_STATES.NOT_STARTED);
    setExamQuestions([]);
    setAllParsedQuestions([]);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(EXAM_CONFIG.TIME_LIMIT_SECONDS);
    setPauseUsed(false);
    setExamResults(null);
  }, []);

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

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return context;
}
