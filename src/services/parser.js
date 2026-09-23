/**
 * Markdown & Plain Text Question Parser for ADM-201 Dumps
 *
 * EXPECTED INPUT SCHEMA:
 * -------------------------------------------------------------
 * The parser expects plain-text or markdown format questions with the following general structure:
 *
 * [Question Number]. [Question Text] [(Optional: Choose two/three)]
 *
 * A. [Option Text]
 * B. [Option Text]
 * C. [Option Text]
 * D. [Option Text]
 *
 * Answer: [Option Letter(s), e.g. B or A,C or Answer(s): A. Description, B. Description]
 * Why: [Detailed Explanation Text] (or Explanation: [Text])
 *
 * FORMATTING TOLERANCES SUPPORTED:
 * 1. Numbering: `1. `, `1) `, `1.No space`, `Question 1: `, `## 1. `
 * 2. Option Prefixes: `A. `, `a. `, `A) `, `[A] `, `A: ` (a separator after the letter is required,
 *    so ordinary prose such as "A user needs..." is never mistaken for an option)
 * 3. Answer Markers: `Answer: `, `Answer(s): `, `Correct Answer: `, `ANS: `,
 *    `Certified Correct Answer: `, `**Answer:** `
 * 4. Multi-value Answers: `Answer: A, B`, `Answer: A,C`, `Answer: ADE`, `Answer: B and D.`,
 *    `Answer: A, B, D (note)`, `Answer(s): A. Description, B. Description`
 * 5. Explanations: `Why: `, `Explanation: `, `Rationale: `, `Note: `, `Trainer Explanation & Concept: `,
 *    and free-form headings such as `Why B is Correct:` (these end the answer line
 *    instead of being absorbed into it)
 * 6. Metadata cleanup: Automatically ignores `Timestamp: ...`, `# Dec. 4, 2025, 3:41 p.m.` footers
 *    and external video/link promotional footers.
 * 7. A question whose answer cannot be read is flagged `isGradable: false` and is left out of the
 *    exam rather than being graded against a guessed answer.
 */

import { categorizeQuestion } from './categorizer.js';
import { deriveAnswerKey } from './answerKey.js';

export function parseQuestionsFromText(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    return [];
  }

  // Normalize line endings
  const cleanText = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  // Split content into question blocks
  // Questions typically start with number followed by dot/parenthesis at start of line
  // or markdown header "## 1." or "Question 1"
  const lines = cleanText.split('\n');
  const blocks = [];
  let currentBlockLines = [];

  // A question header may omit the space after the number ("121.Which action..."),
  // so a letter directly after the separator also starts a new question. A digit
  // never does, which keeps values such as "1.5" out.
  const questionHeaderRegex =
    /^(?:\s*#{1,4}\s*)?(?:\bQuestion\s+)?(\d{1,4})\s*[\.\)\:](?:\s+|(?=[A-Za-z"'(\[]))/i;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (questionHeaderRegex.test(line)) {
      if (currentBlockLines.length > 0) {
        blocks.push(currentBlockLines.join('\n'));
        currentBlockLines = [];
      }
    }
    currentBlockLines.push(line);
  }

  if (currentBlockLines.length > 0) {
    blocks.push(currentBlockLines.join('\n'));
  }

  const parsedQuestions = [];

  for (let bIndex = 0; bIndex < blocks.length; bIndex++) {
    const block = blocks[bIndex].trim();
    if (!block) continue;

    const parsed = parseSingleBlock(block, bIndex + 1);
    if (parsed) {
      // Categorize question
      const categoryId = categorizeQuestion(parsed);
      parsed.categoryId = categoryId;
      parsedQuestions.push(parsed);
    }
  }

  return parsedQuestions;
}

/**
 * Parses an individual question text block into a structured Question object.
 */
function parseSingleBlock(blockText, defaultIndex) {
  const lines = blockText
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return null;

  let questionText = '';
  const options = [];
  let rawAnswer = '';
  let explanation = '';
  let answerLocked = false; // the first real answer line wins
  let collectingAnswerLines = false; // "Answer(s):" alone, answer is on the lines below
  let state = 'QUESTION'; // 'QUESTION' | 'OPTIONS' | 'ANSWER' | 'EXPLANATION'

  // A separator after the option letter is mandatory: "A. text", "A) text", "[A] text", "A: text".
  const optionRegex = /^[\(\[]?([A-H])[\.\)\:\-\]]\s*(.+)$/i;
  const latinAbbrevRegex = /^(?:e\.g\.|i\.e\.)/i;
  // Tolerates "Answer:", "Answer(s):", "ANS:", "**Answer:**" and labelled
  // variants such as "Certified Correct Answer:".
  const answerRegex =
    /^\**\s*(?:(?:certified|verified|official|final|actual)\s+)?(?:correct\s+)?(?:answer(?:\(s\))?|ans)\s*\**\s*[:\-\u2013]\s*(.*)$/i;
  // Tolerates "Why:", "Explanation:" and labelled variants such as
  // "Trainer Explanation & Concept:".
  const explanationRegex =
    /^\**\s*(?:(?:trainer|instructor|detailed|full)\s+)?(?:why|explanation|rationale|notes?)(?:\s*&\s*concept)?\s*\**\s*[:\-\u2013]\s*(.*)$/i;
  // Once the answer line has been read, headings like "Why B is Correct:" also end it.
  const looseExplanationRegex =
    /^(?:Why|Explanation|Rationale|Reason|Notes?|Correct)\b[^:\n]{0,80}[:\-]\s*(.*)$/i;
  // A genuine continuation of a multi-letter answer, e.g. a line holding only "and C".
  const answerContinuationRegex =
    /^(?:and|or|[,;&\/+])?\s*[A-H](?:\s*(?:,|;|&|\/|\+|and|or)\s*[A-H])*[\.\,]?$/i;
  const timestampRegex = /^#*\s*t?\s*Timestamp\s*[:\-]/i;
  // Bare date footers such as "# Dec. 4, 2025, 3:41 p.m." or "#t June 20, 2024".
  const bareDateRegex =
    /^#+\s*t?\s*(?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?\s+\d{1,2}\s*,\s*\d{4}/i;

  const isOptionLine = (text) =>
    optionRegex.test(text) && !latinAbbrevRegex.test(text);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (timestampRegex.test(line) || bareDateRegex.test(line)) {
      continue;
    }

    if (answerRegex.test(line)) {
      // When two questions end up glued into one block, a later "Answer:" line
      // must never replace the answer that belongs to this question.
      if (answerLocked) {
        state = 'EXPLANATION';
        continue;
      }
      state = 'ANSWER';
      const match = line.match(answerRegex);
      rawAnswer = match ? match[1].trim() : '';
      collectingAnswerLines = !rawAnswer;
      if (rawAnswer) answerLocked = true;
      continue;
    }

    if (explanationRegex.test(line)) {
      state = 'EXPLANATION';
      const match = line.match(explanationRegex);
      explanation = match ? match[1].trim() : '';
      continue;
    }

    if (state === 'QUESTION') {
      if (isOptionLine(line)) {
        state = 'OPTIONS';
        const match = line.match(optionRegex);
        options.push({
          letter: match[1].toUpperCase(),
          text: match[2].trim(),
        });
      } else {
        questionText += (questionText ? ' ' : '') + line;
      }
    } else if (state === 'OPTIONS') {
      if (isOptionLine(line)) {
        const match = line.match(optionRegex);
        options.push({
          letter: match[1].toUpperCase(),
          text: match[2].trim(),
        });
      } else if (state !== 'ANSWER' && state !== 'EXPLANATION') {
        // Multi-line option text
        if (options.length > 0) {
          options[options.length - 1].text += ' ' + line;
        }
      }
    } else if (state === 'ANSWER') {
      if (looseExplanationRegex.test(line)) {
        collectingAnswerLines = false;
        state = 'EXPLANATION';
        const match = line.match(looseExplanationRegex);
        explanation = match ? match[1].trim() : '';
      } else if (collectingAnswerLines && isOptionLine(line)) {
        // "Answer(s):" was empty, so these "B. <text>" lines are the answer.
        rawAnswer += (rawAnswer ? ', ' : '') + line;
        answerLocked = true;
      } else if (answerContinuationRegex.test(line)) {
        rawAnswer += ' ' + line;
        if (rawAnswer.trim()) answerLocked = true;
      } else {
        // Anything else after the answer line is rationale, never part of the key.
        collectingAnswerLines = false;
        state = 'EXPLANATION';
        explanation += (explanation ? ' ' : '') + line;
      }
    } else if (state === 'EXPLANATION') {
      explanation += (explanation ? ' ' : '') + line;
    }
  }

  // Clean leading question number from questionText
  const cleanQuestion = questionText
    .replace(/^(\s*#{1,4}\s*)?(\bQuestion\s+)?(\d+)[\.\)\:]\s*/i, '')
    .trim();

  if (!cleanQuestion || options.length < 2) {
    return null;
  }

  // Derive the answer key from the file's stated answer (single source of truth).
  const cleanedRawAnswer = rawAnswer.trim();
  const answerKey = deriveAnswerKey(
    cleanedRawAnswer,
    options,
    cleanQuestion,
  );

  return {
    id: `q_file_${defaultIndex}_${Math.random().toString(36).substr(2, 6)}`,
    originalNumber: defaultIndex,
    question: cleanQuestion,
    options,
    correctLetters: answerKey.correctLetters,
    rawAnswer: cleanedRawAnswer,
    explanation:
      explanation.trim() ||
      'No specific explanation provided in source.',
    isMultiSelect: answerKey.isMultiSelect,
    requiredSelectionCount: answerKey.requiredSelectionCount,
    isGradable: answerKey.isGradable !== false,
    answerKeyMeta: {
      method: answerKey.method,
      confidence: answerKey.confidence,
      hintedCount: answerKey.hintedCount,
      warning: answerKey.warning,
    },
    source: 'file',
  };
}

/**
 * Async chunked parser to prevent UI freezing on large (~1400+ question) files.
 */
export async function parseQuestionsAsync(rawText, onProgress) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const parsed = parseQuestionsFromText(rawText);
      if (onProgress) onProgress(100);
      resolve(parsed);
    }, 10);
  });
}
