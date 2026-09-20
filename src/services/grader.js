/**
 * Deterministic Grading Engine for ADM-201 Exam Simulator
 *
 * Before comparing, every question's answer key is re-derived from the raw "Answer:"
 * text captured from the source file, so grading is always checked twice against
 * what the file actually says.
 */

import { EXAM_CONFIG, TOPIC_LIST } from '../constants/examConfig.js';
import {
  normalizeLetters,
  answerSetsMatch,
  verifyQuestionKey,
} from './answerKey.js';

function describeLetters(letters, options) {
  return normalizeLetters(letters).map((letter) => {
    const option = (options || []).find(
      (o) => String(o.letter).toUpperCase() === letter,
    );
    return {
      letter,
      text: option ? option.text : '(option not found)',
    };
  });
}

export function gradeExamSession(examQuestions, userAnswers) {
  let rawCorrectCount = 0;
  const incorrectQuestions = [];
  const correctQuestions = [];
  const generatedQuestions = [];

  const categoryStats = {};
  for (const topic of TOPIC_LIST) {
    categoryStats[topic.id] = {
      id: topic.id,
      name: topic.name,
      total: 0,
      correct: 0,
      percentage: 0,
    };
  }

  examQuestions.forEach((q, index) => {
    const qId = q.id;
    const userSelected = normalizeLetters(userAnswers[qId] || []); // e.g. ['A'] or ['A', 'C']

    // Second pass over the file's stated answer, independent of parse time.
    const verification = verifyQuestionKey(q);
    const correctSelected = verification.correctLetters;

    // All-or-nothing set comparison: order and case are irrelevant, the full set is required.
    const isCorrect = answerSetsMatch(userSelected, correctSelected);

    const resultRecord = {
      examIndex: index + 1,
      id: q.id,
      question: q.question,
      options: q.options,
      userAnswers: userSelected,
      userAnswerString:
        userSelected.length > 0
          ? userSelected.join(', ')
          : 'No answer provided',
      userAnswerDetails: describeLetters(userSelected, q.options),
      correctLetters: correctSelected,
      correctAnswerString: correctSelected.join(', '),
      correctAnswerDetails: describeLetters(
        correctSelected,
        q.options,
      ),
      sourceAnswerLine: q.rawAnswer || '',
      answerKeyConfidence: verification.confidence,
      answerKeyMismatch: verification.mismatch,
      answerKeyWarning:
        verification.warning ||
        (q.answerKeyMeta && q.answerKeyMeta.warning) ||
        null,
      explanation: q.explanation || 'No explanation available.',
      categoryId: q.categoryId,
      source: q.source || 'file',
      isCorrect,
    };

    const catId = q.categoryId;
    if (categoryStats[catId]) {
      categoryStats[catId].total += 1;
      if (isCorrect) categoryStats[catId].correct += 1;
    }

    if (isCorrect) {
      rawCorrectCount += 1;
      correctQuestions.push(resultRecord);
    } else {
      incorrectQuestions.push(resultRecord);
    }

    if (q.source === 'generated') {
      generatedQuestions.push(resultRecord);
    }
  });

  // Calculate category percentages
  for (const catId of Object.keys(categoryStats)) {
    const stat = categoryStats[catId];
    stat.percentage =
      stat.total > 0
        ? Math.round((stat.correct / stat.total) * 100)
        : 0;
  }

  const totalQuestions =
    examQuestions.length || EXAM_CONFIG.TOTAL_QUESTIONS;
  const scorePercent = Number(
    ((rawCorrectCount / totalQuestions) * 100).toFixed(1),
  );
  const isPassed = scorePercent >= EXAM_CONFIG.PASSING_SCORE_PERCENT;

  return {
    scorePercent,
    rawCorrectCount,
    totalQuestions,
    isPassed,
    passingThresholdPercent: EXAM_CONFIG.PASSING_SCORE_PERCENT,
    minPassingCount: EXAM_CONFIG.MIN_PASSING_SCORE,
    incorrectQuestions,
    correctQuestions,
    generatedQuestions,
    categoryStats: Object.values(categoryStats),
  };
}
