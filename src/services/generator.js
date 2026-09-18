/**
 * High-fidelity ADM-201 Question Generator & Fallback Bank
 * 
 * Auto-generates realistic ADM-201 questions if an uploaded file lacks sufficient 
 * questions in any of the 8 blueprint categories.
 */

import { TOPIC_CATEGORIES } from '../constants/examConfig.js';

export const FALLBACK_QUESTION_BANK = {
  [TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id]: [
    {
      question: "An administrator needs to restrict access to Salesforce so users can only log in from the corporate office IP address range. Where should this be configured?",
      options: [
        { letter: "A", text: "Trusted IP Ranges in Network Access" },
        { letter: "B", text: "Login IP Ranges on individual User Profiles" },
        { letter: "C", text: "Session Settings in Setup" },
        { letter: "D", text: "Company Information Profile" }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "Login IP Ranges specified on a user Profile strictly restrict logins to only those IP addresses; attempts from other IPs are denied. In contrast, Network Access Trusted IP Ranges merely bypass two-factor verification codes rather than blocking login.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question: "Universal Containers has hired a seasonal contractor who requires temporary access to Salesforce for three months. What should the administrator do when the contract expires?",
      options: [
        { letter: "A", text: "Delete the contractor's user record." },
        { letter: "B", text: "Deactivate the contractor's user record." },
        { letter: "C", text: "Change the contractor's profile to Inactive." },
        { letter: "D", text: "Lock the contractor's user record in Password Policies." }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "User records in Salesforce cannot be deleted in order to preserve historical audit trails and record history. Deactivating the user record revokes access immediately and releases the user license.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    }
  ],

  [TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id]: [
    {
      question: "An administrator wants to calculate the total value of all approved invoices related to an Account record. What type of field should be created on the Account object?",
      options: [
        { letter: "A", text: "Formula Field with SUM function" },
        { letter: "B", text: "Roll-Up Summary Field with filter criteria" },
        { letter: "C", text: "Cross-object formula field" },
        { letter: "D", text: "Auto-number summary field" }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "Roll-Up Summary fields are available on the master side of a Master-Detail relationship to calculate SUM, MIN, MAX, or COUNT of child records, with optional filter criteria.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question: "Which two capabilities are provided by Dynamic Forms in Lightning App Builder? (Choose two.)",
      options: [
        { letter: "A", text: "Place individual fields anywhere on a Lightning record page without adding them to traditional page layouts." },
        { letter: "B", text: "Automatically convert currency fields into multiple international denominations." },
        { letter: "C", text: "Configure component and field visibility rules based on record criteria or user permissions." },
        { letter: "D", text: "Generate custom Apex triggers directly from the Lightning page canvas." }
      ],
      correctLetters: ["A", "C"],
      rawAnswer: "A, C",
      explanation: "Dynamic Forms allow administrators to break record details into individual fields and sections, position them anywhere on Lightning record pages, and apply granular visibility rules.",
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    }
  ],

  [TOPIC_CATEGORIES.AUTOMATION.id]: [
    {
      question: "When a new High Priority Case is created, an administrator needs to automatically send an email alert to the Tier 2 Support Queue manager and update the Case Status to 'Under Review'. Which tool should the administrator use?",
      options: [
        { letter: "A", text: "Record-Triggered Flow" },
        { letter: "B", text: "Process Builder" },
        { letter: "C", text: "Workflow Rule with Outbound Messaging" },
        { letter: "D", text: "Escalation Rule only" }
      ],
      correctLetters: ["A"],
      rawAnswer: "A",
      explanation: "Record-Triggered Flows are Salesforce's primary declarative automation tool for handling record updates, email alerts, and complex business logic upon record creation or update.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question: "An administrator needs an automated process to collect feedback from customers via a guided step-by-step wizard. What type of Flow should be created?",
      options: [
        { letter: "A", text: "Screen Flow" },
        { letter: "B", text: "Autolaunched Flow" },
        { letter: "C", text: "Record-Triggered Flow" },
        { letter: "D", text: "Platform Event-Triggered Flow" }
      ],
      correctLetters: ["A"],
      rawAnswer: "A",
      explanation: "Screen Flows provide an interactive user interface to guide users or external respondents through multi-step forms and processes.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    }
  ],

  [TOPIC_CATEGORIES.DATA_ANALYTICS.id]: [
    {
      question: "A sales manager wants to view a dashboard component that shows data specific to each individual logged-in user viewing it. How should the administrator configure this dashboard?",
      options: [
        { letter: "A", text: "Create separate dashboard clones for every sales representative." },
        { letter: "B", text: "Configure the dashboard to 'View Dashboard As: The dashboard viewer' (Dynamic Dashboard)." },
        { letter: "C", text: "Set the dashboard running user to the System Administrator." },
        { letter: "D", text: "Use scheduled report subscriptions." }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "Dynamic Dashboards ('View Dashboard As: The dashboard viewer') dynamically render data according to the viewing user's security and role hierarchy permissions.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question: "An administrator needs to insert 80,000 new Contact records and prevent duplicate entries based on email address. Which tool is best suited?",
      options: [
        { letter: "A", text: "Data Import Wizard" },
        { letter: "B", text: "Data Loader" },
        { letter: "C", text: "Mass Transfer Tool" },
        { letter: "D", text: "Import from CSV in List View" }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "Data Loader supports up to 5,000,000 records (Data Import Wizard is limited to 50,000 records). Data Loader with matching rules or external IDs is ideal for large datasets.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    }
  ],

  [TOPIC_CATEGORIES.SALES_MARKETING.id]: [
    {
      question: "What happens to related activities when a Lead is converted into an Account, Contact, and Opportunity in Salesforce?",
      options: [
        { letter: "A", text: "Activities are permanently deleted upon conversion." },
        { letter: "B", text: "Open and completed activities are attached to the newly created Account, Contact, and Opportunity." },
        { letter: "C", text: "Activities remain only on the deleted lead archive." },
        { letter: "D", text: "Only completed tasks are transferred; open tasks are canceled." }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "During Lead conversion, open tasks and completed activity history from the lead are attached to the newly created Account, Contact, and Opportunity records.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    }
  ],

  [TOPIC_CATEGORIES.SERVICE_SUPPORT.id]: [
    {
      question: "Cloud Kicks wants customer support inquiries submitted via their public website to automatically generate cases and send an immediate confirmation email to the submitter. Which two features should the administrator configure? (Choose two.)",
      options: [
        { letter: "A", text: "Web-to-Case" },
        { letter: "B", text: "Case Auto-Response Rules" },
        { letter: "C", text: "Case Escalation Rules" },
        { letter: "D", text: "Omni-Channel Supervisor" }
      ],
      correctLetters: ["A", "B"],
      rawAnswer: "A, B",
      explanation: "Web-to-Case captures case inquiries directly from website forms, and Case Auto-Response Rules send automated email confirmations to customers based on specified criteria.",
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    }
  ],

  [TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id]: [
    {
      question: "A sales director wants sales reps to see real-time updates directly in their feed whenever an Opportunity amount changes by more than $10,000 or the Stage changes. What feature should be enabled?",
      options: [
        { letter: "A", text: "Feed Tracking on Opportunity object" },
        { letter: "B", text: "Chatter Unlisted Groups" },
        { letter: "C", text: "Salesforce Inbox notifications" },
        { letter: "D", text: "Dynamic Activity Timelines" }
      ],
      correctLetters: ["A"],
      rawAnswer: "A",
      explanation: "Feed Tracking allows administrators to track changes to up to 20 fields per object, automatically posting updates to the record's Chatter feed when values change.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    }
  ],

  [TOPIC_CATEGORIES.AGENTFORCE_AI.id]: [
    {
      question: "An administrator is configuring an Agentforce Service Agent to assist customers with order status lookups. Which component connects the Agent's reasoning engine to Salesforce CRM data and actions safely?",
      options: [
        { letter: "A", text: "Agent Topics and Action Flows" },
        { letter: "B", text: "Hardcoded SOQL Triggers" },
        { letter: "C", text: "Process Builder definitions" },
        { letter: "D", text: "Standard Workflow Rules" }
      ],
      correctLetters: ["A"],
      rawAnswer: "A",
      explanation: "Agentforce agents utilize Topics and Actions (such as autolaunched flows or Apex actions) to classify intent and execute discrete CRM tasks securely within the Einstein Trust Layer.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question: "Which layer in Salesforce Einstein ensures customer data is masked, toxicity is filtered, and proprietary company data is never retained by third-party Large Language Model (LLM) providers?",
      options: [
        { letter: "A", text: "Einstein Trust Layer" },
        { letter: "B", text: "Salesforce Shield Platform Encryption only" },
        { letter: "C", text: "Dynamic Forms Security Filter" },
        { letter: "D", text: "Data Masking Wizard" }
      ],
      correctLetters: ["A"],
      rawAnswer: "A",
      explanation: "The Einstein Trust Layer provides enterprise data protection including data masking, zero data retention agreements with foundation model providers, and toxicity detection.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question: "An administrator needs to create a reusable generative AI prompt template in Prompt Builder that includes merge fields from an Account record and its related Open Opportunities. What prompt template type should be selected?",
      options: [
        { letter: "A", text: "Field Generation Prompt Template" },
        { letter: "B", text: "Flex Prompt Template" },
        { letter: "C", text: "Record Summary Prompt Template" },
        { letter: "D", text: "Flow Autolaunched Template" }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "Flex Prompt Templates in Prompt Builder allow administrators to define multiple input resources (such as an Account record along with related Opportunity collections) to construct dynamic contextual prompts.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question: "What is the primary role of the Atlas Reasoning Engine within Salesforce Agentforce?",
      options: [
        { letter: "A", text: "It compiles Apex code directly into native browser WebAssembly." },
        { letter: "B", text: "It autonomously evaluates user requests, determines the sequence of actions, and queries CRM data to complete tasks." },
        { letter: "C", text: "It replaces the Salesforce standard relational database with a vector index." },
        { letter: "D", text: "It executes batch Apex jobs during non-business hours." }
      ],
      correctLetters: ["B"],
      rawAnswer: "B",
      explanation: "The Atlas Reasoning Engine is the brain behind Agentforce that reasons over intent, formulates multi-step execution plans, executes relevant actions/flows, and evaluates outputs.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question: "Which feature allows an administrator to ground an Agentforce Prompt Template with real-time enterprise data and unified customer profiles without ETL duplication?",
      options: [
        { letter: "A", text: "Salesforce Data Cloud Grounding" },
        { letter: "B", text: "Classic Data Loader Export" },
        { letter: "C", text: "Static Custom Metadata Types" },
        { letter: "D", text: "Weekly Data Export Service" }
      ],
      correctLetters: ["A"],
      rawAnswer: "A",
      explanation: "Data Cloud Grounding directly enriches generative AI prompt templates with harmonized, real-time enterprise data from Data Cloud.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: "generated",
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    }
  ]
};

/**
 * Ensures sufficient questions are available for each category according to target counts.
 * Backfills any shortfall with generated questions tagged source: 'generated'.
 * 
 * @param {Array} parsedQuestions - Array of parsed questions from the uploaded file
 * @param {Array} topicList - Array of TOPIC_CATEGORIES definitions
 * @returns {Object} { examPool: Array(60), categoryBreakdown: Object }
 */
export function buildBalancedExamSet(parsedQuestions, topicList) {
  const categoryPools = {};
  const breakdown = {};

  // Group file questions by category
  for (const topic of topicList) {
    categoryPools[topic.id] = {
      fileQuestions: [],
      generatedQuestions: [],
    };
  }

  for (const q of parsedQuestions) {
    const catId = q.categoryId || TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id;
    if (categoryPools[catId]) {
      categoryPools[catId].fileQuestions.push(q);
    } else {
      categoryPools[TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id].fileQuestions.push(q);
    }
  }

  const selectedQuestions = [];

  for (const topic of topicList) {
    const catId = topic.id;
    const targetCount = topic.targetCount;
    const pool = categoryPools[catId];
    
    // Shuffle available file questions
    const shuffledFile = [...pool.fileQuestions].sort(() => 0.5 - Math.random());
    const filePicked = shuffledFile.slice(0, targetCount);
    
    let genPicked = [];
    const shortfall = targetCount - filePicked.length;
    
    if (shortfall > 0) {
      // Need to backfill
      const fallbacks = FALLBACK_QUESTION_BANK[catId] || [];
      const shuffledFallbacks = [...fallbacks].sort(() => 0.5 - Math.random());
      
      for (let i = 0; i < shortfall; i++) {
        const base = shuffledFallbacks[i % shuffledFallbacks.length] || {
          question: `[Generated] Which feature in Salesforce is recommended for configuring standard ${topic.name} requirements?`,
          options: [
            { letter: "A", text: "Standard Setup and Declarative App Builder" },
            { letter: "B", text: "Direct SQL Database Queries" },
            { letter: "C", text: "Custom Javascript on Classic Pages" },
            { letter: "D", text: "Manual Data Synchronization" }
          ],
          correctLetters: ["A"],
          rawAnswer: "A",
          explanation: "Salesforce emphasizes declarative point-and-click tools in Setup to handle administrative requirements.",
          isMultiSelect: false,
          requiredSelectionCount: 1,
          source: "generated",
          categoryId: catId,
        };
        
        genPicked.push({
          ...base,
          id: `q_gen_${catId}_${i}_${Math.random().toString(36).substr(2, 6)}`,
          source: 'generated',
        });
      }
    }

    const combinedCategorySelection = [...filePicked, ...genPicked];
    selectedQuestions.push(...combinedCategorySelection);

    breakdown[catId] = {
      categoryId: catId,
      name: topic.name,
      targetCount,
      fileCount: filePicked.length,
      generatedCount: genPicked.length,
      totalCount: combinedCategorySelection.length,
      totalFileAvailable: pool.fileQuestions.length,
    };
  }

  // Shuffle final 60 questions so categories are realistic and interspersed
  const finalizedExamSet = selectedQuestions.sort(() => 0.5 - Math.random());

  return {
    examQuestions: finalizedExamSet,
    breakdown,
  };
}
