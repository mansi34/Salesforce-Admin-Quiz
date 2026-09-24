/**
 * Crash-safe persistence for an exam session.
 *
 * A browser reload can happen without the user asking for one (OS sleep + tab
 * discard, memory saver, dev-server restart). Without this, every reload wipes
 * the in-memory React state and throws the candidate back to question 1.
 */

import { EXAM_STATES } from '../constants/examConfig.js';

const SESSION_KEY = 'adm201:exam-session:v1';
const POOL_KEY = 'adm201:question-pool:v1';

const RESUMABLE_STATES = new Set([
  EXAM_STATES.CONFIRMED,
  EXAM_STATES.IN_PROGRESS,
  EXAM_STATES.PAUSED,
  EXAM_STATES.COMPLETED,
]);

function getStore() {
  try {
    return window.localStorage;
  } catch {
    // Storage can be blocked entirely (private mode, cookies disabled).
    return null;
  }
}

function isUsableSnapshot(snapshot) {
  return (
    !!snapshot &&
    RESUMABLE_STATES.has(snapshot.examState) &&
    Array.isArray(snapshot.examQuestions) &&
    snapshot.examQuestions.length > 0
  );
}

export function saveExamSession(snapshot) {
  const store = getStore();
  if (!store) return;
  try {
    store.setItem(SESSION_KEY, JSON.stringify(snapshot));
  } catch (err) {
    console.warn('[exam] Could not save the exam session.', err);
  }
}

export function loadExamSession() {
  const store = getStore();
  if (!store) return null;
  try {
    const raw = store.getItem(SESSION_KEY);
    if (!raw) return null;
    const snapshot = JSON.parse(raw);
    return isUsableSnapshot(snapshot) ? snapshot : null;
  } catch {
    return null;
  }
}

export function clearExamSession() {
  const store = getStore();
  if (!store) return;
  try {
    store.removeItem(SESSION_KEY);
    store.removeItem(POOL_KEY);
  } catch {
    /* nothing useful to do if storage refuses */
  }
}

/**
 * The full question pool is stored under its own key: it can be several MB and
 * only changes when a new file is parsed, so it must not be re-serialised on
 * every answer click. Best effort only — a pool that exceeds the storage quota
 * is dropped rather than breaking the exam itself.
 */
export function saveQuestionPool(questions) {
  const store = getStore();
  if (!store) return;
  try {
    store.setItem(POOL_KEY, JSON.stringify(questions));
  } catch {
    try {
      store.removeItem(POOL_KEY);
    } catch {
      /* ignore */
    }
  }
}

export function loadQuestionPool() {
  const store = getStore();
  if (!store) return [];
  try {
    const raw = store.getItem(POOL_KEY);
    if (!raw) return [];
    const pool = JSON.parse(raw);
    return Array.isArray(pool) ? pool : [];
  } catch {
    return [];
  }
}
