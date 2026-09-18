/**
 * Salesforce Certified Administrator (ADM-201) Blueprint Constants & Rules
 */

export const EXAM_CONFIG = {
  TOTAL_QUESTIONS: 60,
  TIME_LIMIT_MINUTES: 105,
  TIME_LIMIT_SECONDS: 105 * 60, // 6300 seconds
  PASSING_SCORE_PERCENT: 65,
  MIN_PASSING_SCORE: Math.ceil(60 * 0.65), // 39 questions
  MAX_ALLOWED_PAUSES: 1,
};

export const EXAM_STATES = {
  NOT_STARTED: 'not-started',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in-progress',
  PAUSED: 'paused',
  COMPLETED: 'completed',
};

export const TOPIC_CATEGORIES = {
  CONFIGURATION_AND_SETUP: {
    id: 'config_setup',
    name: 'Configuration and Setup',
    weightPercent: 15,
    targetCount: 9,
    description: 'Company settings, user management, security controls, and UI configuration.',
  },
  OBJECT_MANAGER_APP_BUILDER: {
    id: 'object_manager',
    name: 'Object Manager and Lightning App Builder',
    weightPercent: 15,
    targetCount: 9,
    description: 'Standard/custom objects, relationships, fields, page layouts, and Lightning pages.',
  },
  AUTOMATION: {
    id: 'automation',
    name: 'Automation',
    weightPercent: 15,
    targetCount: 9,
    description: 'Flow Builder, Approval Processes, Workflow rules, and automated record operations.',
  },
  DATA_ANALYTICS: {
    id: 'data_analytics',
    name: 'Data and Analytics Management',
    weightPercent: 17,
    targetCount: 10,
    description: 'Reports, dashboards, report types, Data Loader, Import Wizard, and data quality.',
  },
  SALES_MARKETING: {
    id: 'sales_marketing',
    name: 'Sales and Marketing Applications',
    weightPercent: 10,
    targetCount: 6,
    description: 'Leads, Opportunities, Sales Processes, Products, Price Books, Campaigns, and Quotes.',
  },
  SERVICE_SUPPORT: {
    id: 'service_support',
    name: 'Service and Support Applications',
    weightPercent: 10,
    targetCount: 6,
    description: 'Cases, Support Processes, Case Routing/Escalation, Knowledge, and Entitlements.',
  },
  PRODUCTIVITY_COLLABORATION: {
    id: 'productivity_collab',
    name: 'Productivity and Collaboration',
    weightPercent: 10,
    targetCount: 6,
    description: 'Chatter, Activities, Tasks, Events, Files, and Salesforce Mobile app navigation.',
  },
  AGENTFORCE_AI: {
    id: 'agentforce',
    name: 'Agentforce',
    weightPercent: 8,
    targetCount: 5, // 9 + 9 + 9 + 10 + 6 + 6 + 6 + 5 = 60 total
    description: 'Generative AI, Agentforce agents, prompt templates, trust layer, and autonomous actions.',
  },
};

export const TOPIC_LIST = Object.values(TOPIC_CATEGORIES);
