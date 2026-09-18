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
 * 1. Numbering: `1. `, `1) `, `Question 1: `, `## 1. `
 * 2. Option Prefixes: `A. `, `a. `, `A) `, `[A] `, `A: `
 * 3. Answer Markers: `Answer: `, `Answer(s): `, `Correct Answer: `, `ANS: `
 * 4. Multi-value Answers: `Answer: A, B`, `Answer: A,C`, `Answer(s): A. text, B. text`
 * 5. Explanations: `Why: `, `Explanation: `, `Rationale: `, `Note: `
 * 6. Metadata cleanup: Automatically ignores `Timestamp: ...` and external video/link promotional footers.
 */

import { categorizeQuestion } from './categorizer.js';

export function parseQuestionsFromText(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    return [];
  }

  // Normalize line endings
  const cleanText = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Split content into question blocks
  // Questions typically start with number followed by dot/parenthesis at start of line
  // or markdown header "## 1." or "Question 1"
  const lines = cleanText.split('\n');
  const blocks = [];
  let currentBlockLines = [];

  const questionHeaderRegex = /^(\s*#{1,4}\s*)?(\bQuestion\s+)?(\d+)[\.\)\:]\s+/i;

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
  const lines = blockText.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length < 2) return null;

  let questionText = '';
  const options = [];
  let rawAnswer = '';
  let explanation = '';
  let state = 'QUESTION'; // 'QUESTION' | 'OPTIONS' | 'ANSWER' | 'EXPLANATION'

  const optionRegex = /^([A-H])[\.\)\:\s\]]\s*(.*)$/i;
  const answerRegex = /^(?:Answer(?:\(s\))?|Correct Answer|ANS)\s*[:\-]\s*(.*)$/i;
  const explanationRegex = /^(?:Why|Explanation|Rationale|Notes?)\s*[:\-]\s*(.*)$/i;
  const timestampRegex = /^Timestamp\s*:/i;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (timestampRegex.test(line)) {
      continue;
    }

    if (answerRegex.test(line)) {
      state = 'ANSWER';
      const match = line.match(answerRegex);
      rawAnswer = match ? match[1].trim() : '';
      continue;
    }

    if (explanationRegex.test(line)) {
      state = 'EXPLANATION';
      const match = line.match(explanationRegex);
      explanation = match ? match[1].trim() : '';
      continue;
    }

    if (state === 'QUESTION') {
      if (optionRegex.test(line)) {
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
      if (optionRegex.test(line)) {
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
      if (explanationRegex.test(line)) {
        state = 'EXPLANATION';
        const match = line.match(explanationRegex);
        explanation = match ? match[1].trim() : '';
      } else {
        rawAnswer += ' ' + line;
      }
    } else if (state === 'EXPLANATION') {
      explanation += (explanation ? ' ' : '') + line;
    }
  }

  // Clean leading question number from questionText
  const cleanQuestion = questionText.replace(/^(\s*#{1,4}\s*)?(\bQuestion\s+)?(\d+)[\.\)\:]\s*/i, '').trim();

  if (!cleanQuestion || options.length < 2) {
    return null;
  }

  // Extract correct option letters
  // Handles: "B", "B,C", "A, C", "A. Text, D. Text"
  const correctLetters = extractCorrectLetters(rawAnswer, options);

  if (correctLetters.length === 0) {
    // If no answer found, default to first option so app does not break
    correctLetters.push(options[0].letter);
  }

  // Determine if multi-select
  const isMultiSelect = correctLetters.length > 1 || 
    /\(choose\s+(two|three|2|3)\)/i.test(cleanQuestion) || 
    /\(select\s+(all|two|three|2|3)\)/i.test(cleanQuestion);

  return {
    id: `q_file_${defaultIndex}_${Math.random().toString(36).substr(2, 6)}`,
    originalNumber: defaultIndex,
    question: cleanQuestion,
    options,
    correctLetters,
    rawAnswer,
    explanation: explanation.trim() || 'No specific explanation provided in source.',
    isMultiSelect,
    requiredSelectionCount: correctLetters.length > 1 ? correctLetters.length : (/\(choose\s+three|3\)/i.test(cleanQuestion) ? 3 : (/\(choose\s+two|2\)/i.test(cleanQuestion) ? 2 : 1)),
    source: 'file',
  };
}

/**
 * Parses raw answer string to find matched option letters.
 */
function extractCorrectLetters(rawAnswer, options) {
  if (!rawAnswer) return [];
  const found = new Set();

  const validLetters = new Set(options.map(o => o.letter.toUpperCase()));

  // Pattern 1: Find capital letters followed by comma, dot, or end of word
  const matches = rawAnswer.match(/\b[A-H]\b/gi);
  if (matches) {
    for (const m of matches) {
      const letter = m.toUpperCase();
      if (validLetters.has(letter)) {
        found.add(letter);
      }
    }
  }

  // Pattern 2: If nothing found, check "A,B,C" without spaces
  if (found.size === 0) {
    const chars = rawAnswer.replace(/[^A-Ha-h]/g, '').toUpperCase().split('');
    for (const c of chars) {
      if (validLetters.has(c)) {
        found.add(c);
      }
    }
  }

  return Array.from(found).sort();
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
