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
      question:
        'An administrator needs to restrict access to Salesforce so users can only log in from the corporate office IP address range. Where should this be configured?',
      options: [
        { letter: 'A', text: 'Trusted IP Ranges in Network Access' },
        {
          letter: 'B',
          text: 'Login IP Ranges on individual User Profiles',
        },
        { letter: 'C', text: 'Session Settings in Setup' },
        { letter: 'D', text: 'Company Information Profile' },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'Login IP Ranges specified on a user Profile strictly restrict logins to only those IP addresses; attempts from other IPs are denied. In contrast, Network Access Trusted IP Ranges merely bypass two-factor verification codes rather than blocking login.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        'Universal Containers has hired a seasonal contractor who requires temporary access to Salesforce for three months. What should the administrator do when the contract expires?',
      options: [
        { letter: 'A', text: "Delete the contractor's user record." },
        {
          letter: 'B',
          text: "Deactivate the contractor's user record.",
        },
        {
          letter: 'C',
          text: "Change the contractor's profile to Inactive.",
        },
        {
          letter: 'D',
          text: "Lock the contractor's user record in Password Policies.",
        },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'User records in Salesforce cannot be deleted in order to preserve historical audit trails and record history. Deactivating the user record revokes access immediately and releases the user license.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        "Five users on the Sales User profile need the 'Manage Public List Views' permission, but the other 200 users on that profile must not receive it. What should the administrator do?",
      options: [
        {
          letter: 'A',
          text: 'Clone the Sales User profile and move the five users to the clone.',
        },
        {
          letter: 'B',
          text: 'Assign a permission set containing the permission to the five users.',
        },
        {
          letter: 'C',
          text: 'Enable the permission on the Sales User profile.',
        },
        {
          letter: 'D',
          text: 'Create a sharing rule for the five users.',
        },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'Permission sets extend access to individual users without changing their profile or creating profile sprawl. Profiles should stay broad; permission sets handle the exceptions.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        'A manager requests that contract staff be prevented from logging in outside 8:00 AM to 6:00 PM. Where should the administrator configure this?',
      options: [
        {
          letter: 'A',
          text: 'Login Hours on the contract staff profile',
        },
        { letter: 'B', text: 'Business Hours in Setup' },
        { letter: 'C', text: 'Session Settings timeout value' },
        { letter: 'D', text: 'A validation rule on the User object' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Login Hours are set per profile and block logins outside the defined window. Business Hours drive case escalation and entitlement timing, not login access.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        'An employee is locked in a dispute and IT wants to block their access immediately while keeping their license assigned for a short investigation. What should the administrator do?',
      options: [
        { letter: 'A', text: 'Freeze the user record.' },
        { letter: 'B', text: 'Deactivate the user record.' },
        { letter: 'C', text: 'Delete the user record.' },
        { letter: 'D', text: "Reset the user's password." },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Freezing a user blocks login instantly but does not release the license, which is ideal for a temporary hold. Deactivation releases the license and can require reassignment of records in some automation.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        'Which two statements about Permission Set Groups are correct? (Choose two.)',
      options: [
        {
          letter: 'A',
          text: 'They bundle several permission sets so access can be assigned by job function.',
        },
        {
          letter: 'B',
          text: 'A muting permission set can remove specific permissions granted inside the group.',
        },
        {
          letter: 'C',
          text: 'They replace the need for a user to have a profile.',
        },
        {
          letter: 'D',
          text: 'They can only contain one permission set at a time.',
        },
      ],
      correctLetters: ['A', 'B'],
      rawAnswer: 'A, B',
      explanation:
        'Permission Set Groups combine permission sets into a role-based bundle, and muting permission sets selectively suppress permissions inside that bundle. Every user still requires exactly one profile.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        'The organization-wide default for Opportunity is Private, yet sales managers must see the opportunities owned by their team members. What is the standard way to achieve this?',
      options: [
        {
          letter: 'A',
          text: 'Grant Access Using Hierarchies with managers placed above their team in the role hierarchy.',
        },
        {
          letter: 'B',
          text: 'Give every manager the Modify All Data permission.',
        },
        {
          letter: 'C',
          text: 'Change the organization-wide default to Public Read/Write.',
        },
        {
          letter: 'D',
          text: 'Ask each representative to share records manually.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'The role hierarchy automatically grants users access to records owned by people below them, which is the least-privilege way to give managers visibility without opening the whole org.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        "Which two actions stop a field from appearing on a user's record detail page? (Choose two.)",
      options: [
        {
          letter: 'A',
          text: "Set Field-Level Security to not visible for that user's profile.",
        },
        {
          letter: 'B',
          text: 'Remove the field from the page layout assigned to that user.',
        },
        {
          letter: 'C',
          text: 'Create a validation rule referencing the field.',
        },
        {
          letter: 'D',
          text: "Delete the field's record type picklist values.",
        },
      ],
      correctLetters: ['A', 'B'],
      rawAnswer: 'A, B',
      explanation:
        'Field-Level Security removes access to the field everywhere, including reports and the API. Removing the field from the page layout only hides it from that layout. Validation rules and record types do not control field visibility.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
    {
      question:
        'A regional team leader should be able to create and edit users for their own business unit only, without full administrator rights. Which feature supports this?',
      options: [
        { letter: 'A', text: 'Delegated Administration' },
        { letter: 'B', text: 'The Modify All Data permission' },
        { letter: 'C', text: 'A public group with manual sharing' },
        {
          letter: 'D',
          text: 'A permission set with View Setup and Configuration only',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Delegated Administration lets specified users manage users in selected roles and assign a limited list of profiles, without granting full administrative access to the org.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id,
    },
  ],

  [TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id]: [
    {
      question:
        'An administrator wants to calculate the total value of all approved invoices related to an Account record. What type of field should be created on the Account object?',
      options: [
        { letter: 'A', text: 'Formula Field with SUM function' },
        {
          letter: 'B',
          text: 'Roll-Up Summary Field with filter criteria',
        },
        { letter: 'C', text: 'Cross-object formula field' },
        { letter: 'D', text: 'Auto-number summary field' },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'Roll-Up Summary fields are available on the master side of a Master-Detail relationship to calculate SUM, MIN, MAX, or COUNT of child records, with optional filter criteria.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'Which two capabilities are provided by Dynamic Forms in Lightning App Builder? (Choose two.)',
      options: [
        {
          letter: 'A',
          text: 'Place individual fields anywhere on a Lightning record page without adding them to traditional page layouts.',
        },
        {
          letter: 'B',
          text: 'Automatically convert currency fields into multiple international denominations.',
        },
        {
          letter: 'C',
          text: 'Configure component and field visibility rules based on record criteria or user permissions.',
        },
        {
          letter: 'D',
          text: 'Generate custom Apex triggers directly from the Lightning page canvas.',
        },
      ],
      correctLetters: ['A', 'C'],
      rawAnswer: 'A, C',
      explanation:
        'Dynamic Forms allow administrators to break record details into individual fields and sections, position them anywhere on Lightning record pages, and apply granular visibility rules.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'What happens to child records when the parent record of a master-detail relationship is deleted?',
      options: [
        { letter: 'A', text: 'The child records are also deleted.' },
        {
          letter: 'B',
          text: 'The child records remain with an empty parent field.',
        },
        {
          letter: 'C',
          text: 'The deletion is blocked until children are reassigned.',
        },
        {
          letter: 'D',
          text: 'The child records are converted into standalone records.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Master-detail relationships are ownership relationships: deleting the master cascades the delete to all detail records. A lookup relationship, by contrast, can leave the child in place.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'Which two custom field types can be marked as an External ID? (Choose two.)',
      options: [
        { letter: 'A', text: 'Text' },
        { letter: 'B', text: 'Picklist' },
        { letter: 'C', text: 'Email' },
        { letter: 'D', text: 'Long Text Area' },
      ],
      correctLetters: ['A', 'C'],
      rawAnswer: 'A, C',
      explanation:
        'External IDs are supported on Text, Number, Email, and Auto Number fields. They store a unique record identifier from an outside system and are used as the match key during upserts.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'Support agents and sales representatives must see different picklist values and a different layout on the same Case object. What should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'Two record types, each with its own picklist value set and page layout assignment.',
        },
        { letter: 'B', text: 'Two separate custom objects.' },
        {
          letter: 'C',
          text: 'Field-Level Security on the picklist field.',
        },
        { letter: 'D', text: 'A validation rule for each profile.' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Record types control which picklist values are available and which page layout a profile sees for each business process, all on the same object.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'An administrator wants to convert an existing lookup relationship field into a master-detail relationship. What must be true before the conversion can succeed?',
      options: [
        {
          letter: 'A',
          text: 'Every child record must have a value in the lookup field.',
        },
        {
          letter: 'B',
          text: 'The child object must have no page layouts.',
        },
        {
          letter: 'C',
          text: 'The lookup field must be marked as an External ID.',
        },
        {
          letter: 'D',
          text: 'All child records must be owned by the same user.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'A detail record cannot exist without a master, so the lookup field must be populated on every existing child record before the field type can be changed.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'Which fields are displayed in the highlights panel at the top of a Lightning record page?',
      options: [
        {
          letter: 'A',
          text: "The fields defined in the object's compact layout.",
        },
        {
          letter: 'B',
          text: 'The first five fields of the page layout.',
        },
        { letter: 'C', text: 'All required fields on the object.' },
        {
          letter: 'D',
          text: 'The fields selected in the search layout.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Compact layouts drive the highlights panel on record pages and the key fields shown in the Salesforce mobile app and in hover previews.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'A custom object must track a total number of related child records, but the relationship between them is a lookup. What must the administrator change to create a roll-up summary field?',
      options: [
        {
          letter: 'A',
          text: 'Convert the lookup relationship to a master-detail relationship.',
        },
        {
          letter: 'B',
          text: 'Mark the lookup field as required on the page layout.',
        },
        {
          letter: 'C',
          text: 'Create a cross-object formula field instead of changing anything.',
        },
        {
          letter: 'D',
          text: 'Enable field history tracking on the child object.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Standard roll-up summary fields are only available on the master side of a master-detail relationship. Lookup relationships require a different approach, such as a flow or a declarative rollup tool.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
    {
      question:
        'An administrator wants to see and edit the relationships and fields of several custom objects on a single visual canvas. Which tool should be used?',
      options: [
        { letter: 'A', text: 'Schema Builder' },
        { letter: 'B', text: 'Lightning App Builder' },
        { letter: 'C', text: 'Data Loader' },
        { letter: 'D', text: 'Object Manager list view' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Schema Builder provides a drag-and-drop entity relationship diagram of the data model where objects, fields, and relationships can be viewed and created.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.OBJECT_MANAGER_APP_BUILDER.id,
    },
  ],

  [TOPIC_CATEGORIES.AUTOMATION.id]: [
    {
      question:
        "When a new High Priority Case is created, an administrator needs to automatically send an email alert to the Tier 2 Support Queue manager and update the Case Status to 'Under Review'. Which tool should the administrator use?",
      options: [
        { letter: 'A', text: 'Record-Triggered Flow' },
        { letter: 'B', text: 'Process Builder' },
        {
          letter: 'C',
          text: 'Workflow Rule with Outbound Messaging',
        },
        { letter: 'D', text: 'Escalation Rule only' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        "Record-Triggered Flows are Salesforce's primary declarative automation tool for handling record updates, email alerts, and complex business logic upon record creation or update.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'An administrator needs an automated process to collect feedback from customers via a guided step-by-step wizard. What type of Flow should be created?',
      options: [
        { letter: 'A', text: 'Screen Flow' },
        { letter: 'B', text: 'Autolaunched Flow' },
        { letter: 'C', text: 'Record-Triggered Flow' },
        { letter: 'D', text: 'Platform Event-Triggered Flow' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Screen Flows provide an interactive user interface to guide users or external respondents through multi-step forms and processes.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'In an approval process, where should an administrator configure an action that runs only after the last approver grants approval?',
      options: [
        { letter: 'A', text: 'Final Approval Actions' },
        { letter: 'B', text: 'Initial Submission Actions' },
        { letter: 'C', text: 'Final Rejection Actions' },
        { letter: 'D', text: 'Recall Actions' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Final Approval Actions execute once every required approval step is complete, and are typically used to update a status field, unlock the record, or send a notification.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'An administrator must update a field on all Opportunities that have been open for more than 30 days, every night at 1:00 AM. Which automation should be used?',
      options: [
        { letter: 'A', text: 'Schedule-Triggered Flow' },
        { letter: 'B', text: 'Screen Flow' },
        { letter: 'C', text: 'Record-Triggered Flow' },
        { letter: 'D', text: 'Approval Process' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Schedule-Triggered Flows run at a set time and frequency against a defined set of records, which is exactly the pattern for nightly batch updates.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'Which record-triggered flow configuration is the most efficient way to update a field on the same record that triggered the flow?',
      options: [
        {
          letter: 'A',
          text: 'A fast field update flow that runs before the record is saved.',
        },
        {
          letter: 'B',
          text: 'An after-save flow with an Update Records element.',
        },
        {
          letter: 'C',
          text: 'A scheduled path that runs one minute later.',
        },
        {
          letter: 'D',
          text: 'An autolaunched flow called from a workflow rule.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'A before-save (fast field update) flow changes values while the record is still in memory, avoiding a second save operation and performing far faster than after-save updates.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'An automation must email the account owner when a Case is escalated. What must exist before the email action can be configured?',
      options: [
        { letter: 'A', text: 'An email template' },
        { letter: 'B', text: 'An email-to-case routing address' },
        { letter: 'C', text: 'A public group of recipients' },
        { letter: 'D', text: 'A Chatter group for the account team' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Email alerts and Send Email actions require an existing email template that defines the subject and body of the outbound message.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'Users report an unhelpful error when a flow that calls an external action fails. What should the administrator add to the flow?',
      options: [
        {
          letter: 'A',
          text: 'A fault path with a friendly screen or error notification.',
        },
        {
          letter: 'B',
          text: 'A second copy of the flow as a backup.',
        },
        {
          letter: 'C',
          text: 'A validation rule on the target object.',
        },
        { letter: 'D', text: 'A debug log filter for every user.' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Fault paths catch errors from flow elements and let the administrator display a clear message, log the failure, or route the record for manual handling.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'Which two legacy automation tools has Salesforce retired in favour of Flow Builder for new automation? (Choose two.)',
      options: [
        { letter: 'A', text: 'Workflow Rules' },
        { letter: 'B', text: 'Process Builder' },
        { letter: 'C', text: 'Approval Processes' },
        { letter: 'D', text: 'Assignment Rules' },
      ],
      correctLetters: ['A', 'B'],
      rawAnswer: 'A, B',
      explanation:
        'Workflow Rules and Process Builder can no longer be created in new orgs and should be migrated to Flow. Approval Processes and Assignment Rules remain fully supported.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
    {
      question:
        'While a record is pending approval in an approval process, what happens to the record by default?',
      options: [
        {
          letter: 'A',
          text: 'The record is locked so only approvers and administrators can edit it.',
        },
        {
          letter: 'B',
          text: 'The record becomes read-only for every user including administrators.',
        },
        {
          letter: 'C',
          text: 'The record is deleted and recreated after approval.',
        },
        {
          letter: 'D',
          text: 'The record owner is changed to the approver.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Submitting a record for approval locks it by default, which preserves the values the approver is reviewing. Administrators and designated approvers can still edit it.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AUTOMATION.id,
    },
  ],

  [TOPIC_CATEGORIES.DATA_ANALYTICS.id]: [
    {
      question:
        'A sales manager wants to view a dashboard component that shows data specific to each individual logged-in user viewing it. How should the administrator configure this dashboard?',
      options: [
        {
          letter: 'A',
          text: 'Create separate dashboard clones for every sales representative.',
        },
        {
          letter: 'B',
          text: "Configure the dashboard to 'View Dashboard As: The dashboard viewer' (Dynamic Dashboard).",
        },
        {
          letter: 'C',
          text: 'Set the dashboard running user to the System Administrator.',
        },
        { letter: 'D', text: 'Use scheduled report subscriptions.' },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        "Dynamic Dashboards ('View Dashboard As: The dashboard viewer') dynamically render data according to the viewing user's security and role hierarchy permissions.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'An administrator needs to insert 80,000 new Contact records and prevent duplicate entries based on email address. Which tool is best suited?',
      options: [
        { letter: 'A', text: 'Data Import Wizard' },
        { letter: 'B', text: 'Data Loader' },
        { letter: 'C', text: 'Mass Transfer Tool' },
        { letter: 'D', text: 'Import from CSV in List View' },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'Data Loader supports up to 5,000,000 records (Data Import Wizard is limited to 50,000 records). Data Loader with matching rules or external IDs is ideal for large datasets.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'A manager wants a single report that shows Opportunities and Cases for the same Accounts side by side in separate blocks. Which report format is required?',
      options: [
        { letter: 'A', text: 'Joined' },
        { letter: 'B', text: 'Summary' },
        { letter: 'C', text: 'Matrix' },
        { letter: 'D', text: 'Tabular' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Joined reports contain multiple blocks, each with its own report type, filters, and columns, allowing different objects to be compared in one report.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'An administrator needs to group Opportunity amounts into Small, Medium, and Large bands inside one report, without creating a new field. What should be used?',
      options: [
        { letter: 'A', text: 'A bucket column' },
        { letter: 'B', text: 'A formula field on Opportunity' },
        { letter: 'C', text: 'A cross filter' },
        { letter: 'D', text: 'A report type change' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Bucket columns categorise report data into custom ranges or groups directly inside the report, with no schema change required.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'A report must list all Accounts, including those that have no related Contacts. How should the administrator build it?',
      options: [
        {
          letter: 'A',
          text: "Create a custom report type using 'Accounts with or without Contacts'.",
        },
        {
          letter: 'B',
          text: "Use the standard 'Accounts with Contacts' report type.",
        },
        { letter: 'C', text: 'Add a cross filter for Contacts.' },
        {
          letter: 'D',
          text: 'Export all Accounts and merge them in a spreadsheet.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        "Custom report types let the administrator choose whether related records are required ('with') or optional ('with or without'), which is the only way to include parents that have no children.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'Which report feature shows Accounts that do NOT have any related open Opportunities?',
      options: [
        {
          letter: 'A',
          text: "A cross filter set to 'without Opportunities'",
        },
        { letter: 'B', text: 'A bucket column' },
        { letter: 'C', text: 'A row-level formula' },
        { letter: 'D', text: 'A dashboard filter' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        "Cross filters filter a report by the presence or absence of related child records, for example 'Accounts without Opportunities'.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'Which two features help prevent duplicate Lead records from being saved? (Choose two.)',
      options: [
        { letter: 'A', text: 'Matching rules' },
        { letter: 'B', text: 'Duplicate rules' },
        { letter: 'C', text: 'Assignment rules' },
        { letter: 'D', text: 'Escalation rules' },
      ],
      correctLetters: ['A', 'B'],
      rawAnswer: 'A, B',
      explanation:
        'A matching rule defines how Salesforce identifies a potential duplicate, and a duplicate rule decides what happens when a match is found: allow with an alert, or block the save.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'A user deleted 200 Contact records by mistake this morning. What should the administrator tell them?',
      options: [
        {
          letter: 'A',
          text: 'The records can be restored from the Recycle Bin, which retains deleted records for 15 days.',
        },
        {
          letter: 'B',
          text: 'The records are gone permanently and must be re-imported.',
        },
        {
          letter: 'C',
          text: 'Only Salesforce Support can restore deleted records.',
        },
        {
          letter: 'D',
          text: 'The records will reappear automatically after the next weekly export.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Deleted records stay in the Recycle Bin for 15 days and can be undeleted by the user or the administrator before they are purged.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'An administrator must import 2,000 Leads from a marketing event and have them routed by the active lead assignment rule. Which tool is the best choice?',
      options: [
        { letter: 'A', text: 'Data Import Wizard' },
        { letter: 'B', text: 'Data Loader' },
        { letter: 'C', text: 'Weekly Data Export' },
        { letter: 'D', text: 'Mass Transfer Records' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'The Data Import Wizard handles up to 50,000 records, supports Leads, and can trigger the active assignment rule during the import. Data Loader does not offer that option in the user interface.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
    {
      question:
        'A director wants a report emailed to them every Monday morning without logging in. What should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'A report subscription with a weekly schedule',
        },
        { letter: 'B', text: 'A dashboard refresh schedule' },
        { letter: 'C', text: 'A weekly data export' },
        {
          letter: 'D',
          text: 'An email alert from a record-triggered flow',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        "Report subscriptions deliver the report results by email on a defined schedule, optionally with conditions, and respect the running user's access.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.DATA_ANALYTICS.id,
    },
  ],

  [TOPIC_CATEGORIES.SALES_MARKETING.id]: [
    {
      question:
        'What happens to related activities when a Lead is converted into an Account, Contact, and Opportunity in Salesforce?',
      options: [
        {
          letter: 'A',
          text: 'Activities are permanently deleted upon conversion.',
        },
        {
          letter: 'B',
          text: 'Open and completed activities are attached to the newly created Account, Contact, and Opportunity.',
        },
        {
          letter: 'C',
          text: 'Activities remain only on the deleted lead archive.',
        },
        {
          letter: 'D',
          text: 'Only completed tasks are transferred; open tasks are canceled.',
        },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'During Lead conversion, open tasks and completed activity history from the lead are attached to the newly created Account, Contact, and Opportunity records.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    },
    {
      question:
        'A new product has been created but sales users cannot add it to an Opportunity. What is the most likely cause?',
      options: [
        {
          letter: 'A',
          text: 'The product has no entry in an active price book that the user can access.',
        },
        { letter: 'B', text: 'The product record type is missing.' },
        {
          letter: 'C',
          text: 'The Opportunity is in a closed stage.',
        },
        {
          letter: 'D',
          text: "The product was not shared with the user's role.",
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'A product must have a standard price and be listed in an active price book before it can be added as an Opportunity Product.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    },
    {
      question:
        'Two sales teams need different Opportunity stages. What combination should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'A sales process for each team, each linked to its own Opportunity record type.',
        },
        { letter: 'B', text: 'Two custom Opportunity objects.' },
        {
          letter: 'C',
          text: 'A validation rule per team that blocks the wrong stages.',
        },
        { letter: 'D', text: 'Two dashboards filtered by team.' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Sales processes define which stage picklist values are available, and each sales process is assigned to a record type that is then assigned to the relevant profiles.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    },
    {
      question:
        'A marketing manager wants to track whether invitees registered, attended, or cancelled for a webinar campaign. What should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'A campaign member status set with the required values.',
        },
        { letter: 'B', text: 'A custom field on the Lead object.' },
        { letter: 'C', text: 'Three separate campaigns.' },
        {
          letter: 'D',
          text: 'A campaign hierarchy with three parent campaigns.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Campaign member statuses are configured per campaign and record where each lead or contact sits in the campaign lifecycle, feeding campaign response statistics.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    },
    {
      question:
        'A custom field on the Lead object must carry its value to a custom field on the Contact during lead conversion. What should the administrator do?',
      options: [
        {
          letter: 'A',
          text: 'Configure lead custom field mapping so the lead field maps to the contact field.',
        },
        {
          letter: 'B',
          text: 'Create a workflow rule on the Contact object.',
        },
        {
          letter: 'C',
          text: 'Add both fields to the same page layout.',
        },
        { letter: 'D', text: 'Make the lead field an External ID.' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        "Lead field mapping in Object Manager defines which Account, Contact, or Opportunity field receives each custom lead field's value at conversion. Field types must be compatible.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    },
    {
      question:
        "Sales representatives create several quotes per Opportunity and need the accepted quote's line items reflected on the Opportunity. Which feature should be used?",
      options: [
        { letter: 'A', text: 'Quote syncing' },
        { letter: 'B', text: 'Opportunity splits' },
        { letter: 'C', text: 'Price book cloning' },
        { letter: 'D', text: 'Big deal alerts' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Syncing a quote keeps its line items and amount aligned with the parent Opportunity, so the Opportunity always reflects the quote the customer accepted.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SALES_MARKETING.id,
    },
  ],

  [TOPIC_CATEGORIES.SERVICE_SUPPORT.id]: [
    {
      question:
        'Cloud Kicks wants customer support inquiries submitted via their public website to automatically generate cases and send an immediate confirmation email to the submitter. Which two features should the administrator configure? (Choose two.)',
      options: [
        { letter: 'A', text: 'Web-to-Case' },
        { letter: 'B', text: 'Case Auto-Response Rules' },
        { letter: 'C', text: 'Case Escalation Rules' },
        { letter: 'D', text: 'Omni-Channel Supervisor' },
      ],
      correctLetters: ['A', 'B'],
      rawAnswer: 'A, B',
      explanation:
        'Web-to-Case captures case inquiries directly from website forms, and Case Auto-Response Rules send automated email confirmations to customers based on specified criteria.',
      isMultiSelect: true,
      requiredSelectionCount: 2,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    },
    {
      question:
        'A support organisation must guarantee a first response within four business hours and track whether that target is met. Which feature set should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'Entitlement process with milestones and business hours',
        },
        { letter: 'B', text: 'Case escalation rules only' },
        { letter: 'C', text: 'Case auto-response rules' },
        { letter: 'D', text: 'Omni-Channel presence statuses' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Entitlement processes with milestones measure service targets such as first response and resolution time against defined business hours, and can trigger actions when a milestone is missed.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    },
    {
      question:
        'Cases about billing must be routed to the Billing team so any available member can take ownership. What should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'A case assignment rule that assigns billing cases to a Billing queue.',
        },
        {
          letter: 'B',
          text: 'A sharing rule that shares billing cases with the Billing role.',
        },
        {
          letter: 'C',
          text: 'A validation rule requiring the Billing owner.',
        },
        {
          letter: 'D',
          text: 'A case escalation rule to the Billing manager.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Assignment rules evaluate case criteria and set the owner. Assigning to a queue puts the case in a shared work pool from which any queue member can accept it.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    },
    {
      question:
        'Customers email support@company.com and each message must create a Case with the attachment included, without installing anything on the company network. What should the administrator set up?',
      options: [
        { letter: 'A', text: 'On-Demand Email-to-Case' },
        { letter: 'B', text: 'Web-to-Case' },
        { letter: 'C', text: 'An email alert from a flow' },
        { letter: 'D', text: 'A mass email to contacts' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'On-Demand Email-to-Case routes inbound email to Salesforce without an on-premises agent, creating cases automatically from the message and its attachments.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    },
    {
      question:
        'Knowledge articles must be visible to internal agents but only some of them to customers on the help portal. Which Knowledge feature controls this?',
      options: [
        {
          letter: 'A',
          text: 'Data category visibility combined with channel settings',
        },
        { letter: 'B', text: 'Article record types' },
        {
          letter: 'C',
          text: 'Field-Level Security on the article title',
        },
        { letter: 'D', text: 'Case teams' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Data categories classify articles and control visibility by role or profile, while channels determine whether an article is published to the internal app, the customer portal, or the public site.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    },
    {
      question:
        'High priority cases that stay untouched for two business hours must be reassigned to a senior agent and the manager notified. What should the administrator configure?',
      options: [
        {
          letter: 'A',
          text: 'An escalation rule with an escalation action based on business hours',
        },
        { letter: 'B', text: 'An auto-response rule' },
        { letter: 'C', text: 'A duplicate rule' },
        { letter: 'D', text: 'A case team role' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Escalation rules monitor the age of a case against business hours and can reassign ownership and notify a user when the threshold is passed.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.SERVICE_SUPPORT.id,
    },
  ],

  [TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id]: [
    {
      question:
        'A sales director wants sales reps to see real-time updates directly in their feed whenever an Opportunity amount changes by more than $10,000 or the Stage changes. What feature should be enabled?',
      options: [
        { letter: 'A', text: 'Feed Tracking on Opportunity object' },
        { letter: 'B', text: 'Chatter Unlisted Groups' },
        { letter: 'C', text: 'Salesforce Inbox notifications' },
        { letter: 'D', text: 'Dynamic Activity Timelines' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        "Feed Tracking allows administrators to track changes to up to 20 fields per object, automatically posting updates to the record's Chatter feed when values change.",
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    },
    {
      question:
        'An executive team needs a Chatter group that does not appear in the group list or in search for anyone who is not a member. Which group type should be used?',
      options: [
        { letter: 'A', text: 'Unlisted' },
        { letter: 'B', text: 'Private' },
        { letter: 'C', text: 'Public' },
        { letter: 'D', text: 'Broadcast' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Unlisted groups are hidden from lists, search, and feeds for non-members. Private groups are still discoverable, although their posts are not visible to non-members.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    },
    {
      question:
        'Users must be able to log a call from anywhere in the app, not just from a record page. What should the administrator create?',
      options: [
        {
          letter: 'A',
          text: 'A global action added to the publisher layout',
        },
        { letter: 'B', text: 'An object-specific action on Account' },
        { letter: 'C', text: 'A custom Lightning record page' },
        { letter: 'D', text: 'A list view button' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Global actions are available from anywhere the global publisher appears, while object-specific actions are limited to records of that object.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    },
    {
      question:
        'Field sales users want a shorter list of items in the Salesforce mobile app navigation. How should the administrator change this?',
      options: [
        {
          letter: 'A',
          text: 'Edit the navigation items of the Lightning app assigned to their profile.',
        },
        {
          letter: 'B',
          text: 'Remove the tabs from every page layout.',
        },
        { letter: 'C', text: 'Delete the objects they do not use.' },
        {
          letter: 'D',
          text: 'Ask users to hide the items in their personal settings only.',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Lightning apps define the navigation items shown on desktop and in the mobile app, and each app is assigned to specific profiles.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    },
    {
      question:
        'A single meeting needs to be related to five different Contacts and appear in the activity timeline of each one. What should the administrator enable?',
      options: [
        { letter: 'A', text: 'Shared Activities' },
        { letter: 'B', text: 'Public Calendars' },
        { letter: 'C', text: 'Event field history tracking' },
        { letter: 'D', text: 'Activity roll-up summary fields' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Shared Activities allows a task or event to be related to up to 50 contacts and one other record, so the activity appears on each related contact.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    },
    {
      question:
        'Support agents retype the same greeting in dozens of emails and chats each day. Which feature reduces this repetition?',
      options: [
        { letter: 'A', text: 'Quick Text' },
        { letter: 'B', text: 'Chatter mentions' },
        { letter: 'C', text: 'List view filters' },
        {
          letter: 'D',
          text: 'Macros only, because Quick Text is not available for email',
        },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Quick Text stores reusable messages that agents insert into emails, chats, and notes, optionally with merge fields for personalisation.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.PRODUCTIVITY_COLLABORATION.id,
    },
  ],

  [TOPIC_CATEGORIES.AGENTFORCE_AI.id]: [
    {
      question:
        "An administrator is configuring an Agentforce Service Agent to assist customers with order status lookups. Which component connects the Agent's reasoning engine to Salesforce CRM data and actions safely?",
      options: [
        { letter: 'A', text: 'Agent Topics and Action Flows' },
        { letter: 'B', text: 'Hardcoded SOQL Triggers' },
        { letter: 'C', text: 'Process Builder definitions' },
        { letter: 'D', text: 'Standard Workflow Rules' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Agentforce agents utilize Topics and Actions (such as autolaunched flows or Apex actions) to classify intent and execute discrete CRM tasks securely within the Einstein Trust Layer.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question:
        'Which layer in Salesforce Einstein ensures customer data is masked, toxicity is filtered, and proprietary company data is never retained by third-party Large Language Model (LLM) providers?',
      options: [
        { letter: 'A', text: 'Einstein Trust Layer' },
        {
          letter: 'B',
          text: 'Salesforce Shield Platform Encryption only',
        },
        { letter: 'C', text: 'Dynamic Forms Security Filter' },
        { letter: 'D', text: 'Data Masking Wizard' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'The Einstein Trust Layer provides enterprise data protection including data masking, zero data retention agreements with foundation model providers, and toxicity detection.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question:
        'An administrator needs to create a reusable generative AI prompt template in Prompt Builder that includes merge fields from an Account record and its related Open Opportunities. What prompt template type should be selected?',
      options: [
        { letter: 'A', text: 'Field Generation Prompt Template' },
        { letter: 'B', text: 'Flex Prompt Template' },
        { letter: 'C', text: 'Record Summary Prompt Template' },
        { letter: 'D', text: 'Flow Autolaunched Template' },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'Flex Prompt Templates in Prompt Builder allow administrators to define multiple input resources (such as an Account record along with related Opportunity collections) to construct dynamic contextual prompts.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question:
        'What is the primary role of the Atlas Reasoning Engine within Salesforce Agentforce?',
      options: [
        {
          letter: 'A',
          text: 'It compiles Apex code directly into native browser WebAssembly.',
        },
        {
          letter: 'B',
          text: 'It autonomously evaluates user requests, determines the sequence of actions, and queries CRM data to complete tasks.',
        },
        {
          letter: 'C',
          text: 'It replaces the Salesforce standard relational database with a vector index.',
        },
        {
          letter: 'D',
          text: 'It executes batch Apex jobs during non-business hours.',
        },
      ],
      correctLetters: ['B'],
      rawAnswer: 'B',
      explanation:
        'The Atlas Reasoning Engine is the brain behind Agentforce that reasons over intent, formulates multi-step execution plans, executes relevant actions/flows, and evaluates outputs.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
    {
      question:
        'Which feature allows an administrator to ground an Agentforce Prompt Template with real-time enterprise data and unified customer profiles without ETL duplication?',
      options: [
        { letter: 'A', text: 'Salesforce Data Cloud Grounding' },
        { letter: 'B', text: 'Classic Data Loader Export' },
        { letter: 'C', text: 'Static Custom Metadata Types' },
        { letter: 'D', text: 'Weekly Data Export Service' },
      ],
      correctLetters: ['A'],
      rawAnswer: 'A',
      explanation:
        'Data Cloud Grounding directly enriches generative AI prompt templates with harmonized, real-time enterprise data from Data Cloud.',
      isMultiSelect: false,
      requiredSelectionCount: 1,
      source: 'generated',
      categoryId: TOPIC_CATEGORIES.AGENTFORCE_AI.id,
    },
  ],
};

/**
 * Last-resort question builder used only if a category's bank is exhausted.
 * The `variantIndex` keeps every generated question textually distinct.
 */
const GENERIC_VARIANTS = [
  {
    focus: 'the recommended build approach',
    question: (topic) =>
      `A business requirement in the ${topic.name} area can be met with standard Salesforce functionality. What should the administrator do first?`,
    options: [
      {
        letter: 'A',
        text: 'Evaluate declarative point-and-click Setup features before any custom code.',
      },
      {
        letter: 'B',
        text: 'Request an Apex trigger from a developer immediately.',
      },
      {
        letter: 'C',
        text: 'Install an unmanaged package from AppExchange without review.',
      },
      {
        letter: 'D',
        text: 'Modify the underlying database schema directly.',
      },
    ],
    answer: 'A',
    explanation:
      'Salesforce guidance is always to satisfy a requirement declaratively (clicks) before resorting to code, because declarative solutions are upgrade-safe and easier to maintain.',
  },
  {
    focus: 'change management',
    question: (topic) =>
      `Where should an administrator build and test a significant ${topic.name} change before releasing it to end users?`,
    options: [
      {
        letter: 'A',
        text: 'Directly in the production org during business hours.',
      },
      {
        letter: 'B',
        text: 'In a sandbox, then deploy with a change set or package.',
      },
      {
        letter: 'C',
        text: 'In a personal Trailhead playground, then retype it in production.',
      },
      { letter: 'D', text: 'In the Recycle Bin staging area.' },
    ],
    answer: 'B',
    explanation:
      'Sandboxes provide an isolated copy of the org for building and testing. Validated changes are then migrated to production using change sets or another deployment method.',
  },
  {
    focus: 'documentation and auditing',
    question: (topic) =>
      `An administrator must prove who last modified a ${topic.name} configuration in Setup. Which tool provides this information?`,
    options: [
      { letter: 'A', text: 'Setup Audit Trail' },
      { letter: 'B', text: 'Login History' },
      { letter: 'C', text: 'Field History Tracking' },
      { letter: 'D', text: 'Debug Logs' },
    ],
    answer: 'A',
    explanation:
      'Setup Audit Trail records configuration changes made in Setup, including who made each change and when. Field History Tracking records data changes, not configuration changes.',
  },
  {
    focus: 'user enablement',
    question: (topic) =>
      `Users report they cannot see a newly released ${topic.name} feature. What should the administrator verify first?`,
    options: [
      { letter: 'A', text: "The users' internet browser version." },
      {
        letter: 'B',
        text: 'Profile and permission set access for the feature and its objects or fields.',
      },
      {
        letter: 'C',
        text: "The organization's fiscal year settings.",
      },
      {
        letter: 'D',
        text: 'The company logo on the Company Information page.',
      },
    ],
    answer: 'B',
    explanation:
      'Visibility issues are almost always permission issues. Profiles and permission sets control object, field, tab, and feature access for each user.',
  },
  {
    focus: 'requirement gathering',
    question: (topic) =>
      `Before configuring a new ${topic.name} solution, which action best reduces the risk of rework?`,
    options: [
      {
        letter: 'A',
        text: 'Document the business process and success criteria with stakeholders.',
      },
      {
        letter: 'B',
        text: 'Build the solution first and gather feedback after go-live.',
      },
      {
        letter: 'C',
        text: 'Copy configuration from an unrelated org.',
      },
      {
        letter: 'D',
        text: 'Grant all users the System Administrator profile temporarily.',
      },
    ],
    answer: 'A',
    explanation:
      'Confirming the process and measurable success criteria with stakeholders before building prevents misaligned configuration and costly rework.',
  },
];

function buildGenericQuestion(topic, variantIndex) {
  const variant =
    GENERIC_VARIANTS[variantIndex % GENERIC_VARIANTS.length];
  const cycle = Math.floor(variantIndex / GENERIC_VARIANTS.length);
  const suffix = cycle > 0 ? ` (Scenario ${cycle + 1})` : '';

  return {
    question: `${variant.question(topic)}${suffix}`,
    options: variant.options.map((o) => ({ ...o })),
    correctLetters: [variant.answer],
    rawAnswer: variant.answer,
    explanation: variant.explanation,
    isMultiSelect: false,
    requiredSelectionCount: 1,
    source: 'generated',
    categoryId: topic.id,
  };
}

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
    // A question whose answer could not be read from the file is never asked;
    // the shortfall is backfilled below so the section still reaches its target.
    if (q.isGradable === false) continue;

    const catId =
      q.categoryId || TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id;
    if (categoryPools[catId]) {
      categoryPools[catId].fileQuestions.push(q);
    } else {
      categoryPools[
        TOPIC_CATEGORIES.CONFIGURATION_AND_SETUP.id
      ].fileQuestions.push(q);
    }
  }

  const selectedQuestions = [];

  for (const topic of topicList) {
    const catId = topic.id;
    const targetCount = topic.targetCount;
    const pool = categoryPools[catId];

    // Shuffle available file questions
    const shuffledFile = [...pool.fileQuestions].sort(
      () => 0.5 - Math.random(),
    );
    const filePicked = shuffledFile.slice(0, targetCount);

    let genPicked = [];
    const shortfall = targetCount - filePicked.length;

    if (shortfall > 0) {
      // Need to backfill. Each bank question is used at most once per exam so a
      // section is never filled with the same question repeated.
      const fallbacks = FALLBACK_QUESTION_BANK[catId] || [];
      const shuffledFallbacks = [...fallbacks].sort(
        () => 0.5 - Math.random(),
      );

      for (let i = 0; i < shortfall; i++) {
        const base =
          shuffledFallbacks[i] || buildGenericQuestion(topic, i);

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
  const finalizedExamSet = selectedQuestions.sort(
    () => 0.5 - Math.random(),
  );

  return {
    examQuestions: finalizedExamSet,
    breakdown,
  };
}
