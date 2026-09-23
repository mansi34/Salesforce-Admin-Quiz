/**
 * Answer Key Derivation & Verification
 * -------------------------------------------------------------
 * The "Answer:" line written in the source file is the SINGLE SOURCE OF TRUTH.
 *
 * This module turns that raw line into a validated set of option letters using
 * ordered strategies, strongest evidence first:
 *
 *   1. letter+text   "B. Search the Recent Records..."      -> high confidence
 *                    (the text after the letter must actually match that option)
 *   2. letter-list   "B" / "B,C" / "A and C" / "A. B. C."   -> high confidence
 *   3. text-only     "All of the above" / "True"            -> medium confidence
 *   4. letter-scan   last resort, UPPERCASE letters only    -> low confidence
 *
 * Strategy 4 is uppercase-only and limited to the head of the answer line, which
 * is what prevents the old bug where the English word "a" (as in "create a report")
 * was read as option A.
 */

const VALID_LETTER = /^[A-H]$/;
const CONNECTOR_WORDS = new Set([
  'and',
  'or',
  'plus',
  'also',
  '&',
  '+',
  ',',
]);

export function normalizeLetters(letters) {
  if (!Array.isArray(letters)) return [];
  const unique = new Set();
  for (const raw of letters) {
    if (typeof raw !== 'string') continue;
    const letter = raw.trim().toUpperCase();
    if (VALID_LETTER.test(letter)) unique.add(letter);
  }
  return Array.from(unique).sort();
}

/** Order-insensitive, case-insensitive set equality. An empty submission never matches. */
export function answerSetsMatch(submitted, correct) {
  const a = normalizeLetters(submitted);
  const b = normalizeLetters(correct);
  if (a.length === 0 || a.length !== b.length) return false;
  return a.every((letter, i) => letter === b[i]);
}

export function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** Strips editorial noise that is not part of the stated answer. */
export function cleanAnswerText(raw) {
  return String(raw || '')
    .replace(/https?:\/\/\S+/gi, ' ')
    .replace(/\(\s*(?:note|hint|source|ref)\b[^)]*\)?/gi, ' ')
    .replace(/\bTimestamp\s*:.*$/i, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const COUNT_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5 };

/** Reads "(Choose two)", "Select 2.", "Which three..." from the question text. */
export function detectRequiredCount(questionText) {
  const text = String(questionText || '');
  const explicit = text.match(
    /\b(?:choose|select|pick)\s+(one|two|three|four|five|[1-5])\b/i,
  );
  if (explicit) {
    const token = explicit[1].toLowerCase();
    return COUNT_WORDS[token] || Number(token) || null;
  }
  const implied = text.match(/\bwhich\s+(two|three|four)\b/i);
  if (implied) return COUNT_WORDS[implied[1].toLowerCase()] || null;
  return null;
}

/**
 * Removes rationale or a bracketed note written on the same line as the answer,
 * e.g. "A, B, D (Weekly Data Export, Data Loader)" or "A, D Why: ..." -> "A, D".
 */
function stripTrailingProse(cleaned) {
  return String(cleaned || '')
    .replace(
      /\s+(?:why|explanation|rationale|reason|because|note)\b.*$/i,
      ' ',
    )
    .replace(/\([^)]*\)?/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Expands an uppercase run of option letters written without separators,
 * e.g. "ADE" -> ['A','D','E']. Returns null when the token is not such a run.
 */
function expandCompactRun(token, validLetters, options) {
  const bare = String(token)
    .replace(/[^A-Za-z]/g, '')
    .toUpperCase();
  if (bare.length < 2 || bare.length > 8) return null;
  const letters = bare.split('');
  if (new Set(letters).size !== letters.length) return null;
  if (!letters.every((l) => validLetters.has(l))) return null;
  // Never treat a run as letters when an option is literally spelled that way.
  const asText = normalizeText(bare);
  if (options.some((o) => normalizeText(o.text) === asText))
    return null;
  return letters;
}

/** Strategy 1: the whole answer is nothing but option letters and separators. */
function parseLetterList(cleaned, validLetters, options) {
  const body = stripTrailingProse(cleaned)
    .replace(/[\.\s]+$/, '')
    .trim();
  if (!body) return [];

  // "." is a separator too, so "C.d" reads as C and D.
  const tokens = body
    .split(/\s*(?:,|;|&|\+|\/|\.|\band\b|\bor\b)\s*|\s+/i)
    .filter(Boolean);
  if (tokens.length === 0) return [];

  const letters = [];
  for (const token of tokens) {
    const letter = token
      .replace(/[\.\)\:\]\[\(]/g, '')
      .trim()
      .toUpperCase();

    if (VALID_LETTER.test(letter)) {
      if (validLetters.has(letter)) letters.push(letter);
      continue;
    }

    const run =
      tokens.length === 1
        ? expandCompactRun(token, validLetters, options)
        : null;
    if (run) {
      letters.push(...run);
      continue;
    }

    return []; // not a pure letter list
  }
  return letters;
}

/**
 * Strategy 2: "B. <option B text>, D. <option D text>".
 * A letter only counts when the text behind it really belongs to that option
 * (or, for a letter followed by punctuation, when nothing but a connector
 * follows it, as in "B. AND C. ...").
 *
 * @returns {{letters: string[], textMatched: boolean}} textMatched is true only
 * when at least one letter was confirmed by comparing real option text, which
 * is what makes this strategy stronger than a plain letter list.
 */
function parseLetterWithOptionText(cleaned, options, hintedCount) {
  const optionText = new Map(
    options.map((o) => [
      String(o.letter).toUpperCase(),
      normalizeText(o.text),
    ]),
  );

  const markerRegex =
    /(?:^|[\s,;&\/]|\band\s+|\bor\s+)\(?([A-H])([\.\):\-]|\s)\s*/g;
  const markers = [];
  let match;
  while ((match = markerRegex.exec(cleaned)) !== null) {
    markers.push({
      letter: match[1].toUpperCase(),
      punctuated: /[\.\):\-]/.test(match[2]),
      labelStart: match.index,
      textStart: markerRegex.lastIndex,
    });
  }
  if (markers.length === 0)
    return { letters: [], textMatched: false };

  const confirmed = [];
  const unconfirmed = [];
  let textMatched = false;

  for (let i = 0; i < markers.length; i++) {
    const end =
      i + 1 < markers.length
        ? markers[i + 1].labelStart
        : cleaned.length;
    const segment = normalizeText(
      cleaned.slice(markers[i].textStart, end),
    );
    const expected = optionText.get(markers[i].letter);
    if (expected === undefined) continue;

    // "B. AND C. ..." -> B is followed only by a connector, still a stated answer.
    // A letter separated by a bare space proves nothing on its own, so it is
    // only accepted when its text matches, keeping prose like "A user..." out.
    if (!segment || CONNECTOR_WORDS.has(segment)) {
      if (markers[i].punctuated) confirmed.push(markers[i].letter);
      continue;
    }

    const compareLength = Math.min(
      segment.length,
      expected.length,
      40,
    );
    const matchesOptionText =
      segment === expected ||
      (compareLength >= 3 &&
        segment.slice(0, compareLength) ===
          expected.slice(0, compareLength));

    if (matchesOptionText) {
      confirmed.push(markers[i].letter);
      textMatched = true;
    } else if (markers[i].punctuated) {
      unconfirmed.push(markers[i].letter);
    }
  }

  // The question demands N answers and we verified fewer: recover the remaining
  // letters from the markers we saw but could not text-match.
  if (
    hintedCount &&
    confirmed.length > 0 &&
    confirmed.length < hintedCount
  ) {
    for (const letter of unconfirmed) {
      if (confirmed.length >= hintedCount) break;
      if (!confirmed.includes(letter)) confirmed.push(letter);
    }
  }

  return { letters: confirmed, textMatched };
}

/** Strategy 3: the answer is written as plain text, e.g. "All of the above". */
function parseByOptionTextOnly(cleaned, options) {
  const answer = normalizeText(cleaned);
  if (!answer || answer.length < 2) return [];
  const hits = options
    .filter((o) => normalizeText(o.text) === answer)
    .map((o) => String(o.letter).toUpperCase());
  return hits.slice(0, 1);
}

/**
 * Strategy 3b: the letter is typed straight onto its option text with no
 * separator, e.g. "ATrue" where option A reads "True". The remainder must equal
 * that option exactly, so prose such as "A user must..." is never matched.
 */
function parseGluedLetterAndText(cleaned, options) {
  const match = String(cleaned)
    .trim()
    .match(/^\(?([A-H])\)?\s*(.+)$/);
  if (!match) return [];
  const letter = match[1].toUpperCase();
  const option = options.find(
    (o) => String(o.letter).toUpperCase() === letter,
  );
  if (!option) return [];
  return normalizeText(match[2]) === normalizeText(option.text)
    ? [letter]
    : [];
}

/** Strategy 4: last resort. UPPERCASE letters only, head of the line only. */
function scanLeadingLetters(cleaned, validLetters) {
  const head = cleaned.slice(0, 60);
  const found = [];
  const regex = /\b([A-H])\b(?=$|[\s.,;:)\]\/&+-])/g;
  let match;
  while ((match = regex.exec(head)) !== null) {
    const letter = match[1];
    if (validLetters.has(letter) && !found.includes(letter))
      found.push(letter);
  }
  return found;
}

/**
 * Derives the answer key for one question from its raw "Answer:" text.
 *
 * @returns {{correctLetters: string[], method: string, confidence: 'high'|'medium'|'low'|'none',
 *            hintedCount: number|null, requiredSelectionCount: number, isMultiSelect: boolean,
 *            warning: string|null}}
 */
export function deriveAnswerKey(
  rawAnswer,
  options,
  questionText = '',
) {
  const safeOptions = Array.isArray(options) ? options : [];
  const validLetters = new Set(
    safeOptions.map((o) => String(o.letter).toUpperCase()),
  );
  const cleaned = cleanAnswerText(rawAnswer);
  const hintedCount = detectRequiredCount(questionText);

  let letters = [];
  let method = 'none';
  let confidence = 'none';

  const withText = parseLetterWithOptionText(
    cleaned,
    safeOptions,
    hintedCount,
  );
  const letterList = parseLetterList(
    cleaned,
    validLetters,
    safeOptions,
  );

  // Real option text behind a letter is the strongest evidence. Without it,
  // a plain letter list wins, so "B and D." stays B and D instead of just D.
  if (withText.textMatched && withText.letters.length > 0) {
    letters = withText.letters;
    method = 'letter+option-text';
    confidence = 'high';
  } else if (letterList.length > 0) {
    letters = letterList;
    method = 'letter-list';
    confidence = 'high';
  } else if (withText.letters.length > 0) {
    letters = withText.letters;
    method = 'letter-marker';
    confidence = 'high';
  }

  if (letters.length === 0) {
    const textOnly = parseByOptionTextOnly(cleaned, safeOptions);
    if (textOnly.length > 0) {
      letters = textOnly;
      method = 'option-text';
      confidence = 'medium';
    }
  }

  if (letters.length === 0) {
    const glued = parseGluedLetterAndText(cleaned, safeOptions);
    if (glued.length > 0) {
      letters = glued;
      method = 'letter+option-text';
      confidence = 'high';
    }
  }

  if (letters.length === 0) {
    const scanned = scanLeadingLetters(cleaned, validLetters);
    if (scanned.length > 0) {
      letters = scanned;
      method = 'letter-scan';
      confidence = 'low';
    }
  }

  letters = normalizeLetters(letters).filter((l) =>
    validLetters.has(l),
  );

  // Guessing an answer would mark a correct submission wrong, so an unreadable
  // answer makes the question ungradable and it is kept out of the exam instead.
  if (letters.length === 0) {
    return {
      correctLetters: [],
      method: 'unreadable',
      confidence: 'none',
      hintedCount,
      requiredSelectionCount: hintedCount || 1,
      isMultiSelect: (hintedCount || 1) > 1,
      isGradable: false,
      warning:
        'No answer could be read from the source file for this question, so it was left out of the exam.',
    };
  }

  let warning = null;
  if (hintedCount && hintedCount !== letters.length) {
    warning = `The question asks for ${hintedCount} answer(s) but the file states ${letters.length}. The file was used.`;
  } else if (confidence === 'low') {
    // Surfaced on the results screen next to the quoted answer line, so an
    // ambiguously written answer can be checked rather than silently trusted.
    warning =
      'The answer line for this question is ambiguous, so the key was read from the letters at the start of it. Check the quoted line above.';
  }

  return {
    correctLetters: letters,
    method,
    confidence,
    hintedCount,
    // The on-screen instruction always mirrors the key, so a question can never
    // ask for more selections than the key accepts.
    requiredSelectionCount: letters.length,
    isMultiSelect: letters.length > 1,
    isGradable: true,
    warning,
  };
}

/**
 * Second, independent check performed at grading time: re-reads the key straight
 * from the question's stored raw answer line and compares it with the key that
 * was stored at parse time. The file always wins.
 */
export function verifyQuestionKey(question) {
  const stored = normalizeLetters(
    question && question.correctLetters,
  );

  if (
    !question ||
    !question.rawAnswer ||
    !Array.isArray(question.options)
  ) {
    return {
      correctLetters: stored,
      rechecked: false,
      mismatch: false,
      confidence: 'none',
      method: 'stored',
    };
  }

  const derived = deriveAnswerKey(
    question.rawAnswer,
    question.options,
    question.question,
  );
  const mismatch = !answerSetsMatch(stored, derived.correctLetters);

  // Only override the stored key when the re-derivation is confident.
  const useDerived =
    mismatch &&
    (derived.confidence === 'high' || stored.length === 0);

  return {
    correctLetters: useDerived ? derived.correctLetters : stored,
    rechecked: true,
    mismatch,
    confidence: derived.confidence,
    method: derived.method,
    warning: derived.warning,
  };
}
