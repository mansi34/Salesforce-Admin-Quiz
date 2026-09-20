/**
 * Verification for answer parsing and grading.
 *
 * Run from the repo root:  node scripts/verify-grading.mjs
 *
 * Checks, in order:
 *  1. Answer-key derivation for the exact answer formats that used to be misread.
 *  2. End-to-end parse + grade for a MULTI-ANSWER question.
 *  3. Real source files: how many single-answer questions are still read as multi-answer.
 *  4. Fallback generation: every exam section is filled, with no repeated question.
 */

import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parseQuestionsFromText } from '../src/services/parser.js';
import { deriveAnswerKey, cleanAnswerText } from '../src/services/answerKey.js';
import { gradeExamSession } from '../src/services/grader.js';
import { buildBalancedExamSet } from '../src/services/generator.js';
import { TOPIC_LIST } from '../src/constants/examConfig.js';

let failures = 0;
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}`);
  if (!ok) console.log(`      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

/* ------------------------------------------------------------------ */
console.log('\n1) Answer-key derivation\n');

const serviceOptions = [
  { letter: 'A', text: 'Import the shipment data nightly with Data Loader.' },
  { letter: 'B', text: 'Use external objects and add a custom tab to the Support App for support agents.' },
  { letter: 'C', text: 'Create a custom object and a flow that copies the data.' },
  { letter: 'D', text: 'Give agents a login to the ERP system.' },
];

check(
  'single answer whose text contains the word "a" -> B only (old parser said A,B)',
  deriveAnswerKey('B. Use external objects and add a custom tab to the Support App for support agents.', serviceOptions, 'What should the administrator do?').correctLetters,
  ['B']
);

const searchOptions = [
  { letter: 'A', text: 'Ask the user to check the Recycle Bin.' },
  { letter: 'B', text: 'Search the Recent Records component on the homepage.' },
  { letter: 'C', text: 'Restore the records from a weekly export.' },
  { letter: 'D', text: 'Find them in the global search results.' },
];

check(
  'two answers written as "B. text, D. text" -> B,D',
  deriveAnswerKey('B. Search the Recent Records component on the homepage, D. Find them in the global search results.', searchOptions, 'Which two places? (Choose two.)').correctLetters,
  ['B', 'D']
);

const plainOptions = [
  { letter: 'A', text: 'Opportunities' },
  { letter: 'B', text: 'Knowledge' },
  { letter: 'C', text: 'Entitlements' },
  { letter: 'D', text: 'Campaigns' },
  { letter: 'E', text: 'All of the above' },
];

check('comma list "B,C" -> B,C', deriveAnswerKey('B,C', plainOptions, '').correctLetters, ['B', 'C']);
check('spaced list "A, C" -> A,C', deriveAnswerKey('A, C', plainOptions, '').correctLetters, ['A', 'C']);
check('word list "B AND C" -> B,C', deriveAnswerKey('B AND C', plainOptions, '').correctLetters, ['B', 'C']);
check('single letter "B" -> B', deriveAnswerKey('B', plainOptions, '').correctLetters, ['B']);
check('letter + option text "E. All of the above" -> E', deriveAnswerKey('E. All of the above', plainOptions, '').correctLetters, ['E']);
check('plain text answer "All of the above" -> E', deriveAnswerKey('All of the above', plainOptions, '').correctLetters, ['E']);

/* ------------------------------------------------------------------ */
console.log('\n2) End-to-end parse and grade (multi-answer question)\n');

const sampleFile = `
12. A support team needs read-only access to shipment data stored in an ERP system. What should the administrator do?

A. Import the shipment data nightly with Data Loader.
B. Use external objects and add a custom tab to the Support App for support agents.
C. Create a custom object and a flow that copies the data.
D. Give agents a login to the ERP system.
Answer: B. Use external objects and add a custom tab to the Support App for support agents.
Why B is Correct: Salesforce Connect exposes external data as external objects in real time without copying it into Salesforce.

13. Which two features should the administrator configure to capture website enquiries as cases and email an immediate confirmation? (Choose two.)

A. Web-to-Case
B. Case Auto-Response Rules
C. Case Escalation Rules
D. Omni-Channel Supervisor
Answer(s): A. Web-to-Case, B. Case Auto-Response Rules
Why: Web-to-Case captures the enquiry and auto-response rules send the confirmation email.
`;

const parsed = parseQuestionsFromText(sampleFile);
check('both questions parsed', parsed.length, 2);

const [single, multi] = parsed;
check('single-answer key', single.correctLetters, ['B']);
check('single-answer is not flagged multi-select', single.isMultiSelect, false);
check('explanation not swallowed into the answer', single.rawAnswer.includes('Salesforce Connect'), false);

check('multi-answer key', multi.correctLetters, ['A', 'B']);
check('multi-answer flagged multi-select', multi.isMultiSelect, true);
check('multi-answer requires 2 selections', multi.requiredSelectionCount, 2);

const grade = (answers) => gradeExamSession(parsed, answers).rawCorrectCount;

check('exact match in a different order (B,A) is CORRECT', grade({ [multi.id]: ['B', 'A'] }), 1);
check('lower-case submission ("a","b") is CORRECT', grade({ [multi.id]: ['a', 'b'] }), 1);
check('partial answer (A only) is INCORRECT', grade({ [multi.id]: ['A'] }), 0);
check('wrong pair (A,C) is INCORRECT', grade({ [multi.id]: ['A', 'C'] }), 0);
check('no answer is INCORRECT', grade({}), 0);
check('both questions answered correctly', grade({ [single.id]: ['B'], [multi.id]: ['A', 'B'] }), 2);

const partialResult = gradeExamSession(parsed, { [single.id]: ['B'], [multi.id]: ['A'] });
const detail = partialResult.incorrectQuestions.find((r) => r.id === multi.id);
check('the multi-answer question is listed under incorrect', Boolean(detail), true);
check('the single-answer question is listed under correct', partialResult.correctQuestions[0].id, single.id);
check('results show the submitted answer', detail.userAnswerDetails.map((d) => d.letter), ['A']);
check('results show the full correct answer', detail.correctAnswerDetails.map((d) => d.letter), ['A', 'B']);
check('results quote the file answer line', detail.sourceAnswerLine.startsWith('A. Web-to-Case'), true);
check('results include the explanation', detail.explanation.includes('Web-to-Case captures'), true);

/* ------------------------------------------------------------------ */
console.log('\n3) Real source files\n');

for (const file of ['Admin-201 Topic 1.md', 'Admin-201 Topic 2.md']) {
  if (!fs.existsSync(file)) {
    console.log(`SKIP  ${file} not found`);
    continue;
  }
  const questions = parseQuestionsFromText(fs.readFileSync(file, 'utf8'));
  let suspicious = 0;
  for (const q of questions) {
    const raw = cleanAnswerText(q.rawAnswer);
    const singleLetterStart = /^[A-H][\.\)\:]\s+\S/.test(raw) || /^[A-H]$/.test(raw);
    const hintsMulti = /choose\s+(two|three|2|3)|select\s+(all|two|three|\d)|which\s+two/i.test(q.question);
    const looksLikeLetterList = /^[A-H]\.?(?:\s*(?:,|;|&|\/|\+|and|or)?\s*[A-H]\.?)+[\.\s]*$/i.test(raw);
    if (singleLetterStart && !looksLikeLetterList && q.correctLetters.length > 1 && !hintsMulti) suspicious++;
  }
  console.log(`      ${file}: ${questions.length} questions parsed, ${suspicious} still read as multi-answer without cause`);
  if (suspicious > 0) failures++;
}

/* ------------------------------------------------------------------ */
console.log('\n4) Fallback generation when a section has no file questions\n');

const { examQuestions, breakdown } = buildBalancedExamSet([], TOPIC_LIST);
check('a full 60-question exam is still built from zero file questions', examQuestions.length, 60);

for (const topic of TOPIC_LIST) {
  const section = breakdown[topic.id];
  check(`section "${topic.name}" filled to target`, section.totalCount, topic.targetCount);
}

const texts = examQuestions.map((q) => q.question);
check('no duplicated generated question', new Set(texts).size, texts.length);

const malformed = examQuestions.filter(
  (q) => !q.question || !Array.isArray(q.options) || q.options.length < 2 || !q.correctLetters.length || !q.explanation
);
check('every generated question has options, an answer and an explanation', malformed.length, 0);

/* ------------------------------------------------------------------ */
console.log(failures === 0 ? '\nAll checks passed.\n' : `\n${failures} check(s) failed.\n`);
process.exit(failures === 0 ? 0 : 1);
