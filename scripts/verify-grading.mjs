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
import {
  deriveAnswerKey,
  cleanAnswerText,
} from '../src/services/answerKey.js';
import { gradeExamSession } from '../src/services/grader.js';
import { buildBalancedExamSet } from '../src/services/generator.js';
import { TOPIC_LIST } from '../src/constants/examConfig.js';

let failures = 0;
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}`);
  if (!ok)
    console.log(
      `      expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
    );
}

/* ------------------------------------------------------------------ */
console.log('\n1) Answer-key derivation\n');

const serviceOptions = [
  {
    letter: 'A',
    text: 'Import the shipment data nightly with Data Loader.',
  },
  {
    letter: 'B',
    text: 'Use external objects and add a custom tab to the Support App for support agents.',
  },
  {
    letter: 'C',
    text: 'Create a custom object and a flow that copies the data.',
  },
  { letter: 'D', text: 'Give agents a login to the ERP system.' },
];

check(
  'single answer whose text contains the word "a" -> B only (old parser said A,B)',
  deriveAnswerKey(
    'B. Use external objects and add a custom tab to the Support App for support agents.',
    serviceOptions,
    'What should the administrator do?',
  ).correctLetters,
  ['B'],
);

const searchOptions = [
  { letter: 'A', text: 'Ask the user to check the Recycle Bin.' },
  {
    letter: 'B',
    text: 'Search the Recent Records component on the homepage.',
  },
  { letter: 'C', text: 'Restore the records from a weekly export.' },
  { letter: 'D', text: 'Find them in the global search results.' },
];

check(
  'two answers written as "B. text, D. text" -> B,D',
  deriveAnswerKey(
    'B. Search the Recent Records component on the homepage, D. Find them in the global search results.',
    searchOptions,
    'Which two places? (Choose two.)',
  ).correctLetters,
  ['B', 'D'],
);

const plainOptions = [
  { letter: 'A', text: 'Opportunities' },
  { letter: 'B', text: 'Knowledge' },
  { letter: 'C', text: 'Entitlements' },
  { letter: 'D', text: 'Campaigns' },
  { letter: 'E', text: 'All of the above' },
];

check(
  'comma list "B,C" -> B,C',
  deriveAnswerKey('B,C', plainOptions, '').correctLetters,
  ['B', 'C'],
);
check(
  'spaced list "A, C" -> A,C',
  deriveAnswerKey('A, C', plainOptions, '').correctLetters,
  ['A', 'C'],
);
check(
  'word list "B AND C" -> B,C',
  deriveAnswerKey('B AND C', plainOptions, '').correctLetters,
  ['B', 'C'],
);
check(
  'single letter "B" -> B',
  deriveAnswerKey('B', plainOptions, '').correctLetters,
  ['B'],
);
check(
  'letter + option text "E. All of the above" -> E',
  deriveAnswerKey('E. All of the above', plainOptions, '')
    .correctLetters,
  ['E'],
);
check(
  'plain text answer "All of the above" -> E',
  deriveAnswerKey('All of the above', plainOptions, '')
    .correctLetters,
  ['E'],
);

// "Answer: A True" / "Answer: C Profile" — a letter, a space, then the option
// text with no dot. Only an exact text match confirms it.
const trueFalseOptions = [
  { letter: 'A', text: 'True' },
  { letter: 'B', text: 'False' },
];
check(
  'letter, space, option text "A True" -> A',
  deriveAnswerKey('A True', trueFalseOptions, '').correctLetters,
  ['A'],
);
check(
  'letter, space, option text "C Profile" -> C',
  deriveAnswerKey(
    'C Profile',
    [
      { letter: 'A', text: 'Role' },
      { letter: 'B', text: 'Chatter feed' },
      { letter: 'C', text: 'Profile' },
      { letter: 'D', text: 'Company Profile' },
    ],
    '',
  ).correctLetters,
  ['C'],
);
// A letter followed by prose that matches no option is a last-resort guess.
// It is still used, but flagged so the results screen can warn about it.
const proseAnswer = deriveAnswerKey(
  'A user must first enable the feature',
  trueFalseOptions,
  '',
);
check(
  'prose after a letter falls back to the leading letter',
  proseAnswer.correctLetters,
  ['A'],
);
check(
  'that fallback is flagged low confidence',
  proseAnswer.confidence,
  'low',
);
check(
  'that fallback carries a warning for the results screen',
  Boolean(proseAnswer.warning),
  true,
);

/* ------------------------------------------------------------------ */
console.log(
  '\n2) End-to-end parse and grade (multi-answer question)\n',
);

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
check(
  'single-answer is not flagged multi-select',
  single.isMultiSelect,
  false,
);
check(
  'explanation not swallowed into the answer',
  single.rawAnswer.includes('Salesforce Connect'),
  false,
);

check('multi-answer key', multi.correctLetters, ['A', 'B']);
check('multi-answer flagged multi-select', multi.isMultiSelect, true);
check(
  'multi-answer requires 2 selections',
  multi.requiredSelectionCount,
  2,
);

const grade = (answers) =>
  gradeExamSession(parsed, answers).rawCorrectCount;

check(
  'exact match in a different order (B,A) is CORRECT',
  grade({ [multi.id]: ['B', 'A'] }),
  1,
);
check(
  'lower-case submission ("a","b") is CORRECT',
  grade({ [multi.id]: ['a', 'b'] }),
  1,
);
check(
  'partial answer (A only) is INCORRECT',
  grade({ [multi.id]: ['A'] }),
  0,
);
check(
  'wrong pair (A,C) is INCORRECT',
  grade({ [multi.id]: ['A', 'C'] }),
  0,
);
check('no answer is INCORRECT', grade({}), 0);
check(
  'both questions answered correctly',
  grade({ [single.id]: ['B'], [multi.id]: ['A', 'B'] }),
  2,
);

const partialResult = gradeExamSession(parsed, {
  [single.id]: ['B'],
  [multi.id]: ['A'],
});
const detail = partialResult.incorrectQuestions.find(
  (r) => r.id === multi.id,
);
check(
  'the multi-answer question is listed under incorrect',
  Boolean(detail),
  true,
);
check(
  'the single-answer question is listed under correct',
  partialResult.correctQuestions[0].id,
  single.id,
);
check(
  'results show the submitted answer',
  detail.userAnswerDetails.map((d) => d.letter),
  ['A'],
);
check(
  'results show the full correct answer',
  detail.correctAnswerDetails.map((d) => d.letter),
  ['A', 'B'],
);
check(
  'results quote the file answer line',
  detail.sourceAnswerLine.startsWith('A. Web-to-Case'),
  true,
);
check(
  'results include the explanation',
  detail.explanation.includes('Web-to-Case captures'),
  true,
);

/* ------------------------------------------------------------------ */
console.log('\n2b) Source formats that used to be graded wrong\n');

// Every answer line below is written exactly the way it appears in the
// uploaded Admin-201 files. Q41 deliberately has no space after "41." and Q42
// deliberately uses the "Certified Correct Answer:" label.
const trickyFile = `
40. If a user has public read-only access to records they do not own, the following are true.

A. The user can view the record but not edit it
B. The user can view and delete the record, but not edit it
C. The user can change the owner of the record
D. The user can search for the record
E. The user can report on the record
Answer: ADE
Why: Public Read-Only allows viewing, searching and reporting, but not editing, deleting or transferring.
Timestamp: May 1, 2023, 6:36 p.m.

41.Which of the following can be used to create a back up of data from Salesforce?

A. Weekly Data Export
B. Data Loader
C. Change Sets
D. Reports
E. Sandbox refresh
Answer: A, B, D (Weekly Data Export, Data Loader, Reports)
Why: These three extract record data. Change sets move metadata and a sandbox refresh is not a backup.

42. Northern Trail Outfitters has a custom quick action on Account that creates a new Case.
How should an administrator make the quick action available on the Salesforce mobile app?

A. Include the action in the Salesforce Mobile Navigation menu.
B. Create a custom Lightning App with the action.
C. Add the Salesforce Mobile and Lightning Experience action to the page layout.
D. Modify compact Case page layout to include the action.
#t June 20, 2024, 12:45 a.m.
Certified Correct Answer: C. Add the Salesforce Mobile and Lightning Experience action to the page layout.
Trainer Explanation & Concept: A quick action only appears in the mobile action bar once it is added to the Salesforce Mobile and Lightning Experience Actions section of the page layout.

43. What needs to be specified to schedule a Report?

A. The report folder
B. The running user
C. The dashboard component
D. The frequency and time frame
Answer: B and D.
Why: A scheduled report runs as a specific running user on a defined frequency.

44. Which of the following settings affect how Date fields are displayed?

A. Locale
B. Language
C. Time Zone
D. Currency
Answer:

45. A user has been locked out after several failed login attempts.

Which two ways should the administrator help the user log in? (Choose two.)

A. Log in as the user to unlock the user and reset the password.
B. Reset password on the user's record detail page.
C. Use the unlock button on the user's record detail page.
D. Reset the password policies to allow the user to login.

Answer(s):
B. Reset password on the user's record detail page.
C. Use the unlock button on the user's record detail page.

Explanation: An administrator can unlock the user directly or reset the password from the user's record detail page.

46. Custom Summary Formulas can run calculations on custom formula fields.

A. True
B. False
Answer: ATrue
Why: Custom Summary Formulas may reference custom formula fields that return numeric values.
`;

const tricky = parseQuestionsFromText(trickyFile);
const byStart = (prefix) =>
  tricky.find((q) => q.question.startsWith(prefix));

check(
  'a question header with no space after the number still starts a new question',
  tricky.length,
  7,
);

const runTogether = byStart('If a user has public read-only');
check(
  'run-together letters "ADE" -> A,D,E (used to be A)',
  runTogether.correctLetters,
  ['A', 'D', 'E'],
);
check(
  'the next question no longer overwrites this answer',
  runTogether.rawAnswer,
  'ADE',
);

const withNote = byStart('Which of the following can be used to');
check(
  'letters followed by a note "A, B, D (…)" -> A,B,D (used to be A)',
  withNote.correctLetters,
  ['A', 'B', 'D'],
);
check(
  'a merged question keeps its own five options',
  withNote.options.length,
  5,
);

const certified = byStart('Northern Trail Outfitters');
check(
  '"Certified Correct Answer: C. …" is read -> C (used to be A)',
  certified.correctLetters,
  ['C'],
);
check(
  '"Trainer Explanation & Concept:" is captured as the explanation',
  certified.explanation.startsWith('A quick action only appears'),
  true,
);
check(
  'the "#t <date>" footer is not glued onto an option',
  certified.options[3].text,
  'Modify compact Case page layout to include the action.',
);

const andForm = byStart('What needs to be specified');
check(
  '"B and D." -> B,D (used to be D only)',
  andForm.correctLetters,
  ['B', 'D'],
);
check(
  '"B and D." is flagged as a multi-select question',
  andForm.isMultiSelect,
  true,
);

const blank = byStart('Which of the following settings affect');
check(
  'an unreadable answer is marked ungradable instead of defaulting to A',
  blank.isGradable,
  false,
);
check(
  'an ungradable question is kept out of the exam',
  buildBalancedExamSet([blank], TOPIC_LIST).examQuestions.some(
    (q) => q.id === blank.id,
  ),
  false,
);

const belowLabel = byStart('A user has been locked out');
check(
  'a bare "Answer(s):" reads the answer from the lines below it -> B,C',
  belowLabel.correctLetters,
  ['B', 'C'],
);
check(
  'those answer lines are not mistaken for the explanation',
  belowLabel.explanation.startsWith('An administrator can unlock'),
  true,
);
check(
  'the question still keeps all four of its own options',
  belowLabel.options.length,
  4,
);

const glued = byStart('Custom Summary Formulas');
check(
  'a letter typed onto its option text "ATrue" -> A',
  glued.correctLetters,
  ['A'],
);

// End-to-end: answer these exactly the way the file states and score 4 / 4.
const trickyGraded = gradeExamSession(
  tricky.filter((q) => q.isGradable),
  {
    [runTogether.id]: ['E', 'A', 'D'], // out of order and complete
    [withNote.id]: ['a', 'd', 'b'], // lower case and out of order
    [certified.id]: ['C'],
    [andForm.id]: ['D', 'B'],
    [belowLabel.id]: ['C', 'B'],
    [glued.id]: ['A'],
  },
);
check(
  'answering exactly what the file states scores 6 / 6',
  trickyGraded.rawCorrectCount,
  6,
);
check(
  'nothing is listed as incorrect',
  trickyGraded.incorrectQuestions.length,
  0,
);
check(
  'dropping one letter of a multi-answer question is still incorrect',
  gradeExamSession(
    tricky.filter((q) => q.isGradable),
    {
      [runTogether.id]: ['A', 'D'],
    },
  ).rawCorrectCount,
  0,
);

/* ------------------------------------------------------------------ */
console.log('\n3) Real source files\n');

for (const file of ['Admin-201 Topic 1.md', 'Admin-201 Topic 2.md']) {
  if (!fs.existsSync(file)) {
    console.log(`SKIP  ${file} not found`);
    continue;
  }
  const questions = parseQuestionsFromText(
    fs.readFileSync(file, 'utf8'),
  );
  let suspicious = 0;
  for (const q of questions) {
    const raw = cleanAnswerText(q.rawAnswer);
    const singleLetterStart =
      /^[A-H][\.\)\:]\s+\S/.test(raw) || /^[A-H]$/.test(raw);
    const hintsMulti =
      /choose\s+(two|three|2|3)|select\s+(all|two|three|\d)|which\s+two/i.test(
        q.question,
      );
    const looksLikeLetterList =
      /^[A-H]\.?(?:\s*(?:,|;|&|\/|\+|and|or)?\s*[A-H]\.?)+[\.\s]*$/i.test(
        raw,
      );
    if (
      singleLetterStart &&
      !looksLikeLetterList &&
      q.correctLetters.length > 1 &&
      !hintsMulti
    )
      suspicious++;
  }
  console.log(
    `      ${file}: ${questions.length} questions parsed, ${suspicious} still read as multi-answer without cause, ${questions.filter((q) => q.isGradable === false).length} unreadable answers excluded from the exam`,
  );
  if (suspicious > 0) failures++;
}

/* ------------------------------------------------------------------ */
console.log(
  '\n4) Fallback generation when a section has no file questions\n',
);

const { examQuestions, breakdown } = buildBalancedExamSet(
  [],
  TOPIC_LIST,
);
check(
  'a full 60-question exam is still built from zero file questions',
  examQuestions.length,
  60,
);

for (const topic of TOPIC_LIST) {
  const section = breakdown[topic.id];
  check(
    `section "${topic.name}" filled to target`,
    section.totalCount,
    topic.targetCount,
  );
}

const texts = examQuestions.map((q) => q.question);
check(
  'no duplicated generated question',
  new Set(texts).size,
  texts.length,
);

const malformed = examQuestions.filter(
  (q) =>
    !q.question ||
    !Array.isArray(q.options) ||
    q.options.length < 2 ||
    !q.correctLetters.length ||
    !q.explanation,
);
check(
  'every generated question has options, an answer and an explanation',
  malformed.length,
  0,
);

/* ------------------------------------------------------------------ */
console.log(
  failures === 0
    ? '\nAll checks passed.\n'
    : `\n${failures} check(s) failed.\n`,
);
process.exit(failures === 0 ? 0 : 1);
