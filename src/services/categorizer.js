/**
 * Topic Categorization Engine for ADM-201 Exam Questions
 * 
 * HEURISTIC METHODOLOGY & LIMITATIONS:
 * 
 * 1. Approach:
 *    The engine evaluates the normalized text of the question, options, and explanation against 
 *    weighted domain-specific keyword dictionaries for each of the 8 official ADM-201 topics.
 *    Each dictionary term has an associated weight (higher for distinctive terms like 'case escalation',
 *    'flow builder', 'agentforce'; moderate for shared terms like 'field', 'user').
 * 
 * 2. Scoring & Conflict Resolution:
 *    - Word boundary regular expressions prevent false substring matches (e.g. matching 'case' inside 'showcase').
 *    - The category with the highest aggregate score is assigned.
 *    - If multiple categories tie, priority ordering based on blueprint volume resolves the tie.
 *    - Fallback: Defaults to 'config_setup' if no keywords match.
 * 
 * 3. Known Limitations:
 *    - Questions that bridge multiple topics (e.g., "A Flow that creates a Case and assigns a Task")
 *      are assigned based on highest keyword density.
 *    - Plain-text questions lacking technical vocabulary may default to general configuration.
 */

import { TOPIC_CATEGORIES } from '../constants/examConfig.js';

export const TOPIC_KEYWORDS = {
  [TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id]: [
    { term: 'company profile', weight: 4 },
    { term: 'company information', weight: 4 },
    { term: 'locale', weight: 4 },
    { term: 'fiscal year', weight: 4 },
    { term: 'custom fiscal', weight: 4 },
    { term: 'business hours', weight: 4 },
    { term: 'holidays', weight: 3 },
    { term: 'user management', weight: 4 },
    { term: 'user record', weight: 4 },
    { term: 'active user', weight: 4 },
    { term: 'deactivate user', weight: 4 },
    { term: 'freeze user', weight: 4 },
    { term: 'login hours', weight: 4 },
    { term: 'login ip ranges', weight: 4 },
    { term: 'ip range', weight: 3 },
    { term: 'network access', weight: 4 },
    { term: 'password policy', weight: 4 },
    { term: 'password policies', weight: 4 },
    { term: 'session settings', weight: 4 },
    { term: 'profile', weight: 3 },
    { term: 'standard profile', weight: 4 },
    { term: 'custom profile', weight: 4 },
    { term: 'system administrator', weight: 3 },
    { term: 'permission set', weight: 4 },
    { term: 'permission set group', weight: 4 },
    { term: 'org-wide default', weight: 4 },
    { term: 'org-wide sharing', weight: 4 },
    { term: 'organization-wide default', weight: 4 },
    { term: 'owd', weight: 4 },
    { term: 'sharing rule', weight: 4 },
    { term: 'role hierarchy', weight: 4 },
    { term: 'public group', weight: 3 },
    { term: 'manual sharing', weight: 4 },
    { term: 'login history', weight: 4 },
    { term: 'setup audit trail', weight: 4 },
    { term: 'health check', weight: 4 },
    { term: 'license', weight: 3 },
    { term: 'user license', weight: 4 },
    { term: 'feature license', weight: 4 },
    { term: 'multi-currency', weight: 4 },
    { term: 'advanced currency management', weight: 4 },
    { term: 'currency', weight: 2 },
    { term: 'ui settings', weight: 3 },
    { term: 'user interface settings', weight: 4 },
    { term: 'search settings', weight: 3 },
    { term: 'app menu', weight: 3 },
    { term: 'my domain', weight: 4 },
  ],

  [TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id]: [
    { term: 'custom object', weight: 4 },
    { term: 'standard object', weight: 4 },
    { term: 'custom field', weight: 4 },
    { term: 'formula field', weight: 4 },
    { term: 'roll-up summary', weight: 5 },
    { term: 'master-detail', weight: 5 },
    { term: 'lookup relationship', weight: 4 },
    { term: 'junction object', weight: 5 },
    { term: 'many-to-many', weight: 4 },
    { term: 'external lookup', weight: 4 },
    { term: 'cross-object formula', weight: 4 },
    { term: 'picklist', weight: 3 },
    { term: 'multi-select picklist', weight: 4 },
    { term: 'dependent picklist', weight: 4 },
    { term: 'controlling field', weight: 4 },
    { term: 'global value set', weight: 4 },
    { term: 'page layout', weight: 4 },
    { term: 'lightning app builder', weight: 5 },
    { term: 'record page', weight: 4 },
    { term: 'app page', weight: 3 },
    { term: 'home page', weight: 3 },
    { term: 'dynamic forms', weight: 5 },
    { term: 'dynamic actions', weight: 5 },
    { term: 'component visibility', weight: 4 },
    { term: 'conditional visibility', weight: 4 },
    { term: 'compact layout', weight: 4 },
    { term: 'search layout', weight: 4 },
    { term: 'record type', weight: 4 },
    { term: 'field-level security', weight: 4 },
    { term: 'fls', weight: 3 },
    { term: 'quick action', weight: 3 },
    { term: 'custom button', weight: 3 },
    { term: 'custom link', weight: 3 },
    { term: 'validation rule', weight: 4 },
  ],

  [TOPIC_CATEGORIES.AUTOMATION.id]: [
    { term: 'flow', weight: 3 },
    { term: 'flow builder', weight: 5 },
    { term: 'screen flow', weight: 5 },
    { term: 'record-triggered flow', weight: 5 },
    { term: 'scheduled flow', weight: 5 },
    { term: 'autolaunched flow', weight: 5 },
    { term: 'subflow', weight: 4 },
    { term: 'fast field updates', weight: 4 },
    { term: 'after-save flow', weight: 4 },
    { term: 'assignment element', weight: 4 },
    { term: 'decision element', weight: 4 },
    { term: 'loop element', weight: 4 },
    { term: 'get records', weight: 4 },
    { term: 'create records', weight: 4 },
    { term: 'update records', weight: 4 },
    { term: 'delete records', weight: 4 },
    { term: 'approval process', weight: 5 },
    { term: 'approval step', weight: 4 },
    { term: 'entry criteria', weight: 3 },
    { term: 'initial submission action', weight: 4 },
    { term: 'final approval action', weight: 4 },
    { term: 'process builder', weight: 4 },
    { term: 'workflow rule', weight: 4 },
    { term: 'workflow action', weight: 4 },
    { term: 'field update', weight: 3 },
    { term: 'email alert', weight: 3 },
    { term: 'outbound message', weight: 4 },
    { term: 'time-dependent workflow', weight: 4 },
    { term: 'time-based workflow', weight: 4 },
    { term: 'automation', weight: 3 },
  ],

  [TOPIC_CATEGORIES.DATA_ANALYTICS.id]: [
    { term: 'report', weight: 3 },
    { term: 'report type', weight: 4 },
    { term: 'custom report type', weight: 4 },
    { term: 'tabular report', weight: 4 },
    { term: 'summary report', weight: 4 },
    { term: 'matrix report', weight: 4 },
    { term: 'joined report', weight: 4 },
    { term: 'report builder', weight: 4 },
    { term: 'cross filter', weight: 4 },
    { term: 'bucket field', weight: 5 },
    { term: 'summary formula', weight: 4 },
    { term: 'row-level formula', weight: 4 },
    { term: 'dashboard', weight: 4 },
    { term: 'dashboard component', weight: 4 },
    { term: 'dynamic dashboard', weight: 5 },
    { term: 'running user', weight: 4 },
    { term: 'dashboard filter', weight: 4 },
    { term: 'data loader', weight: 5 },
    { term: 'import wizard', weight: 4 },
    { term: 'data import wizard', weight: 5 },
    { term: 'data export service', weight: 5 },
    { term: 'weekly export', weight: 4 },
    { term: 'mass delete', weight: 4 },
    { term: 'mass transfer', weight: 4 },
    { term: 'duplicate management', weight: 4 },
    { term: 'matching rule', weight: 4 },
    { term: 'duplicate rule', weight: 4 },
    { term: 'upsert', weight: 4 },
    { term: 'recycle bin', weight: 3 },
    { term: 'data storage', weight: 3 },
  ],

  [TOPIC_CATEGORIES.SALES_MARKETING.id]: [
    { term: 'lead', weight: 3 },
    { term: 'lead conversion', weight: 5 },
    { term: 'lead qualification', weight: 4 },
    { term: 'lead assignment rule', weight: 4 },
    { term: 'web-to-lead', weight: 5 },
    { term: 'lead process', weight: 4 },
    { term: 'campaign', weight: 4 },
    { term: 'campaign member', weight: 4 },
    { term: 'campaign hierarchy', weight: 4 },
    { term: 'campaign roi', weight: 4 },
    { term: 'opportunity', weight: 3 },
    { term: 'opportunity stage', weight: 4 },
    { term: 'sales process', weight: 4 },
    { term: 'forecast', weight: 4 },
    { term: 'forecasting', weight: 4 },
    { term: 'collaborative forecast', weight: 4 },
    { term: 'opportunity split', weight: 4 },
    { term: 'product', weight: 3 },
    { term: 'price book', weight: 4 },
    { term: 'standard price book', weight: 4 },
    { term: 'custom price book', weight: 4 },
    { term: 'price book entry', weight: 4 },
    { term: 'quote', weight: 4 },
    { term: 'quote sync', weight: 5 },
    { term: 'order', weight: 3 },
    { term: 'contract', weight: 3 },
    { term: 'sales cloud', weight: 4 },
  ],

  [TOPIC_CATEGORIES.SERVICE_SUPPORT.id]: [
    { term: 'case', weight: 3 },
    { term: 'case reason', weight: 4 },
    { term: 'case status', weight: 4 },
    { term: 'support process', weight: 4 },
    { term: 'web-to-case', weight: 5 },
    { term: 'email-to-case', weight: 5 },
    { term: 'case assignment rule', weight: 4 },
    { term: 'case escalation rule', weight: 5 },
    { term: 'escalation rule', weight: 5 },
    { term: 'auto-response rule', weight: 3 },
    { term: 'case team', weight: 4 },
    { term: 'case comment', weight: 3 },
    { term: 'solution', weight: 3 },
    { term: 'knowledge', weight: 4 },
    { term: 'knowledge base', weight: 4 },
    { term: 'article', weight: 3 },
    { term: 'data category', weight: 4 },
    { term: 'entitlement', weight: 5 },
    { term: 'service contract', weight: 4 },
    { term: 'milestone', weight: 4 },
    { term: 'service cloud', weight: 4 },
    { term: 'omni-channel', weight: 5 },
    { term: 'macro', weight: 4 },
    { term: 'quick text', weight: 4 },
    { term: 'service console', weight: 4 },
  ],

  [TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id]: [
    { term: 'chatter', weight: 4 },
    { term: 'chatter feed', weight: 4 },
    { term: 'chatter group', weight: 4 },
    { term: 'unlisted group', weight: 4 },
    { term: 'chatter free', weight: 4 },
    { term: 'feed tracking', weight: 4 },
    { term: 'task', weight: 3 },
    { term: 'recurring task', weight: 5 },
    { term: 'event', weight: 3 },
    { term: 'activity timeline', weight: 4 },
    { term: 'calendar', weight: 3 },
    { term: 'public calendar', weight: 4 },
    { term: 'salesforce inbox', weight: 4 },
    { term: 'outlook integration', weight: 4 },
    { term: 'gmail integration', weight: 4 },
    { term: 'salesforce mobile app', weight: 5 },
    { term: 'mobile navigation', weight: 5 },
    { term: 'salesforce files', weight: 4 },
    { term: 'content library', weight: 4 },
    { term: 'notes', weight: 3 },
    { term: 'enhanced notes', weight: 4 },
  ],

  [TOPIC_CATEGORIES.AGENTFORCE_AI.id]: [
    { term: 'agentforce', weight: 6 },
    { term: 'agent force', weight: 6 },
    { term: 'einstein agent', weight: 6 },
    { term: 'einstein copilot', weight: 6 },
    { term: 'copilot', weight: 4 },
    { term: 'prompt builder', weight: 6 },
    { term: 'prompt template', weight: 6 },
    { term: 'einstein trust layer', weight: 6 },
    { term: 'trust layer', weight: 5 },
    { term: 'generative ai', weight: 5 },
    { term: 'reasoning engine', weight: 5 },
    { term: 'atlas reasoning', weight: 5 },
    { term: 'agent action', weight: 5 },
    { term: 'model playground', weight: 5 },
    { term: 'data cloud grounding', weight: 5 },
    { term: 'ground with data', weight: 5 },
  ],
};

/**
 * Categorizes a single question based on keyword scoring.
 * 
 * @param {Object} questionObj - { question, options, explanation }
 * @returns {string} topicCategoryId - One of the 8 category IDs
 */
export function categorizeQuestion(questionObj) {
  const combinedText = [
    questionObj.question || '',
    (questionObj.options || []).map(o => o.text || o).join(' '),
    questionObj.explanation || '',
  ].join(' ').toLowerCase();

  const scores = {};
  for (const catId of Object.keys(TOPIC_KEYWORDS)) {
    scores[catId] = 0;
  }

  for (const [catId, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    for (const { term, weight } of keywords) {
      // Regex with word boundaries for precision
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
      const matches = combinedText.match(regex);
      if (matches) {
        scores[catId] += matches.length * weight;
      }
    }
  }

  // Find category with highest score
  let bestCategory = TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id;
  let maxScore = -1;

  for (const [catId, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestCategory = catId;
    }
  }

  // If no keywords matched (score === 0), perform intelligent fallback
  if (maxScore === 0) {
    if (combinedText.includes('flow') || combinedText.includes('trigger')) {
      return TOPIC_CATEGORIES.AUTOMATION.id;
    }
    if (combinedText.includes('report') || combinedText.includes('data')) {
      return TOPIC_CATEGORIES.DATA_ANALYTICS.id;
    }
    if (combinedText.includes('case') || combinedText.includes('support')) {
      return TOPIC_CATEGORIES.SERVICE_SUPPORT.id;
    }
    if (combinedText.includes('opportunity') || combinedText.includes('lead')) {
      return TOPIC_CATEGORIES.SALES_MARKETING.id;
    }
    if (combinedText.includes('object') || combinedText.includes('field') || combinedText.includes('layout')) {
      return TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id;
    }
    return TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id;
  }

  return bestCategory;
}
