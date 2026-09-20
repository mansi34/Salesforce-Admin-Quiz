1. Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns.
 How should an administrator deliver this information?
A. Add a Total Value field on Campaign and use a workflow rule to update the value when an opportunity is won.
B. Design a standard Campaign report and add the Value Won Opportunities in Campaign field.
C. Perform periodic data jobs to update campaign records.
D. Create a roll-up summary field on Opportunity to Campaign.
Answer: B
Why: Standard Salesforce Campaign functionality automatically tracks ROI metrics using built-in calculated summary fields. By building a standard Campaign report and adding the native "Value Won Opportunities in Campaign" field, administrators can directly display the aggregated closed-won revenue for each campaign without custom automation or complex workarounds.

2. DreamHouse Realty (DR) develops town center projects all over the country and would like to use Salesforce to track this development. DR needs to track the full properties and the buildings on each property.
 How should the administrator relate the two objects to each other?
 
A. Create a junction relationship between the building and property.
B. Create a hierarchical relationship from the building to property.
C. Create a lookup relationship from the building to the property.
D. Create a master-detail relationship from the building to property.
Aug. 19, 2024, 9:24 a.m.
Answer: D
Why: A property represents the parent entity, while the individual buildings located on that property act as child records that directly depend on it. Creating a master-detail relationship from the building to the property establishes a strict parent-child structure, ensuring cascade-deletion and tightly coupled security/ownership.

3. The Human Resources department at Northern Trail Outfitters wants employees to provide feedback about their managers using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff.
 How should an administrator configure the custom object to meet this requirement?
 
A. Set the Default External Access to Private.
B. Uncheck Grant Access Using Hierarchies.
C. Define a criteria-based sharing rule.
D. Configure an owner-based sharing rule.
June 20, 2024, 1:57 a.m.
Answer: B
Why: By default, Salesforce uses role hierarchies to grant managers access to records owned by their subordinates. Disabling "Grant Access Using Hierarchies" on the custom object prevents higher-level users in the role hierarchy from automatically viewing the feedback records created by their staff.
4. Universal Containers has three separate lines of business. Each line has specific fields that must be displayed to users. However, the fields needed by the sales team are different than the fields needed by the service team.
 How should the administrator configure this requirement?
 
A. Create six record types, each with 1 page layout.
B. Create two record types, each with 3 page layouts.
C. Create three record types, each with 2 page layouts.
D. Create one record type with six Page Layouts.
Dec. 4, 2025, 3:34 p.m.
Answer: C
Why: Each of the three lines of business requires a distinct Record Type to represent its unique business process or picklist values. Since two distinct user profiles (Sales and Service) need different field visibility for each line of business, assigning 2 page layouts per record type results in three record types and six total profile-layout assignments.

5. At Universal Containers, there is a custom field on the Lead named Product Category. Management wants this information to be part of the Opportunity upon lead conversion.
 What action should the administrator take to satisfy the request?
 
A. Configure the product categories picklist field on the product.
B. Create a custom field on the Opportunity and map the two fields.
C. Create a workflow to update Opportunity fields based on the lead.
D. Map the lead custom field to the product's product category field.
Dec. 4, 2025, 3:34 p.m.
Answer: B
Why: When converting a Lead in Salesforce, custom fields are not automatically carried over to target records like the Opportunity. To retain this data, the administrator must create a corresponding custom field on the Opportunity object and map the custom Lead field to it via Lead Conversion Field Mapping settings.

6. The Sales manager at DreamHouse Realty wants the sales users to have a quick way to view and edit the Opportunities in their pipeline expected to close in the next 90 days.
 What should an administrator do to accomplish this request?
 
A. Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities.
B. Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements.
C. Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop.
D. Make a new Sales dashboard and add a component that shows all opportunities that meet the criteria.
Dec. 4, 2025, 3:34 p.m.
Answer: C
Why: Creating a custom List View filtered for opportunities closing in the next 90 days provides sales users with immediate access to their pipeline. Switching that list view to Kanban mode allows users to visually review and easily edit opportunity stages or key details using simple drag-and-drop functionality.

7. An administrator wants to create a form in Salesforce for users to fill out when they lose a client.
 Which automation tool supports creating a wizard to accomplish this goal?
 
A. Process Builder
B. Flow Builder
C. Approval Process
D. Outbound Message
#Dec. 4, 2025, 3:34 p.m.

Answer: B
Why: Flow Builder supports creating screen flows, which allow administrators to design step-by-step guided user interfaces and forms (wizards). These screens can collect input data from users when a client is lost and execute background processes based on that input.
For more details on setting up guided forms and processes in Salesforce, watch this Salesforce Screen Flow Tutorial. This video provides a helpful overview of how screen flows work in Flow Builder.

8. Universal Containers wants to increase the security of their org by requiring stricter user passwords.
 Which two of the following should an administrator configure? (Choose two.)
 
A. Prevent common words
B. Password different than username
C. Password complexity requirement
D. Minimum password length
# Dec. 4, 2025, 3:34 p.m. 
Answer: C, D
Why: In Salesforce Password Policies, administrators can enforce stricter authentication standards by adjusting the "Password complexity requirement" and the "Minimum password length" settings. Configuring complexity forces users to mix character types (such as letters, numbers, and special characters), while increasing the minimum length prevents short, easily guessable passwords.

9. Universal Containers wants to provide reseller partners with discounted prices on the products they purchase.
 How should an administrator configure this requirement?
 
A. Build separate reseller partner products.
B. Use a different Opportunity record type.
C. Create a separate PriceBook for reseller partners.
D. Add a Partner_Discount__c field to the Opportunity.
#Dec. 4, 2025, 3:34 p.m. 
Answer: C
Why: Price Books in Salesforce allow an organization to establish different list prices and discounts for products based on the target audience or distribution channel. Creating a dedicated Price Book for reseller partners enables sales users to easily apply partner-specific discounted pricing to Opportunity products without creating duplicate product records.

10. Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered that users have been changing the source reports.
 Which two actions should the administrator take to preserve the integrity of the source reports? (Choose two.)
 
A. Move the dashboard to the user's private folder.
B. Change the dashboard to be a dynamic dashboard.
C. Move the dashboard reports to the view-only folder.
D. Create a new report folder with viewer access.
# Dec. 4, 2025, 3:34 p.m. 
Answer: C, D
Why: Report folder permissions control whether users can view, edit, or manage the reports contained within them. By creating a report folder with Viewer access (or moving the dashboard source reports to a view-only folder), the administrator allows users to run and view the underlying data without giving them permission to modify or save changes to the source reports.

11. An administrator has reviewed an upcoming critical update.
 How should the administrator proceed with activation of the critical update?
 
A. Allow the critical update to auto-activate in a sandbox.
B. Allow the critical update to auto-activate.
C. Activate the critical update in production.
D. Activate the critical update in a sandbox.
#Dec. 4, 2025, 3:41 p.m. 
Answer: D
Why: Standard Salesforce release management best practices dictate testing system updates in a non-production environment first. Activating the update in a sandbox allows the administrator to thoroughly test functionality, evaluate the impact on existing customizations, and resolve potential issues before making changes to the production environment.

12.Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product’s two lead engineers read/write access to all new cases that reference the new product.
 What should an administrator do to satisfy this requirement?
 
A. Create an auto-response rule and a public group.
B. Create a predefined case team and an assignment rule.
C. Create a user-based sharing rule and an ad-hoc case team.
D. Create a queue and a criteria-based sharing rule.
# Dec. 4, 2025, 3:34 p.m. 
Answer:  B. Create a predefined case team and an assignment rule.
Why:
You want the two lead engineers to automatically get read/write access on every new Case for that product. A predefined Case Team lets you specify members (the two engineers) and their access level. An Assignment Rule can detect “product = New Product” and then add that predefined Case Team to matching Cases, granting the needed access automatically.
A: Auto-response rules only send emails; a public group alone doesn’t grant row-level access automatically.
C: User-based sharing rules don’t target “new cases that reference a product” as cleanly, and ad-hoc teams aren’t automatic.
D: A queue helps ownership/routing; a criteria-based sharing rule could grant read-only (or read/write if configured for Case), but using Case Teams is the standard pattern to put named collaborators with defined access on each Case.

13. The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error.
 How can the administrator validate the error the user is receiving?
 
A. Log in as the user.
B. Review the sharing model.
C. View the setup audit trail.
D. Edit the page layout.
# Dec. 4, 2025, 3:34 p.m.
Answer: A
Why: The "Log In as Any User" feature allows administrators to temporarily replicate a user's exact permissions, profile settings, and data visibility within Salesforce. By logging in as the VP of Sales, the administrator can perform the same action under the user's context to directly trigger, reproduce, and diagnose the specific error message.

14. An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set.
 Which feature should the administrator enable to meet this requirement?
 
A. Territory Management
B. Knowledge Management
C. Omni-Channel
D. Escalation Rules
#Dec. 4, 2025, 3:34 p.m.
Answer: C
Why: Salesforce Omni-Channel automatically routes work items like Cases to the most appropriate support agents based on factors such as individual capacity, availability, and specific skill sets (via Skill-Based Routing). This ensures incoming work is balanced efficiently across agents without manual assignment or overloading team members.

15. What are three settings an administrator should configure to make it easy for approvers to respond to approval requests? (Choose three.)
 
A. Enable the organization's email approval response setting.
B. Specify initial submission actions within the approval process.
C. Update the organization's Chatter settings to allow approvals.
D. Create a flow to automatically approve all records.
E. Add the Items to Approve component to the approvers' home page.
# Dec. 4, 2025, 3:34 p.m 
Answer: A, C, E
Why: Enabling the email approval response setting allows approvers to reply directly to email notifications with words like "Approve" or "Reject" to process requests without logging in. Enabling Chatter approvals lets users approve or reject requests directly from their Chatter feeds or mobile devices. Adding the "Items to Approve" component to the home page gives approvers a centralized, quick-access dashboard component to review and act on pending requests with a single click.

16. Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact.
 What should the administrator use to achieve this?
 
A. Related Lookup Filters
B. Page Layout Editor
C. Compact Layout Editor
D. Search Layout Editor
# Dec. 4, 2025, 3:34 p.m.
Answer: B
Why: Related list columns displayed on a parent record's detail page, such as the Case related list on Account, are controlled through page layout configurations. By assigning different page layouts to the Sales and Customer Care user profiles via the Page Layout Editor, the administrator can customize which fields each team sees on the Account's Case related list.

17. Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity.
 Which tool should an administrator use to meet this requirement?
 
A. Path Key Fields
B. Opportunity Processes
C. Dynamic Forms
D. Workflow Rules
# June 20, 2024, 2:40 a.m.
Answer: A
Why: Path allows administrators to specify up to five key fields and guidance for success that dynamically display based on the current stage of an opportunity. As users progress through the stages on the Path component, these designated key fields automatically surface at the top of the component so representatives can focus on updating the most essential information required for that specific stage.

18. An administrator installed a managed package that contains a permission set group. The permission set group that was installed includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records.
 What should the administrator do to control Delete access?
 
A. Create a new role that prevents Delete permissions from rolling up to the users.
B. Create a new permission set that has Delete access deselected for the objects.
C. Use a muting permission set with a permission set group to mute selected permissions.
D. Edit the profile for the users to remove Delete access from the objects.
# Dec. 4, 2025, 3:41 p.m.
Answer: C
Why: Managed permission set groups cannot be directly edited to remove included permissions. By adding a muting permission set to the installed permission set group, administrators can explicitly mute specific permissions, such as Delete access, without altering the underlying managed package components or altering user profiles.

19. An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000.
 What should the administrator configure to meet this requirement?
 
A. Key Deals component on the homepage
B. Set up Big Deal Alerts for the amount.
C. Enable Opportunity Update Reminders.
D. Opportunity warnings in Kanban View
# Dec. 4, 2025, 3:34 p.m.
Answer: B
Why: Big Deal Alerts in Salesforce automatically send email notifications to designated recipients, such as a director of sales, whenever an opportunity reaches or exceeds a specified amount and probability threshold. This standard sales management feature fulfills the requirement cleanly without needing custom Flow automation or manual user reporting.

20. Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped and the user is directed to the second screen.
 How should the administrator configure the decision element?
 
A. Use the contains operator and {!$GlobalConstant.False} as the value.
B. Use the equals operator and {!$GlobalConstant.True} as the value.
C. Use the equals operator and “High Value Customer” as the value.
D. Use the contains operator and “High Value Customer” as the value.
#Dec. 4, 2025, 3:34 p.m.
Answer: B
Why: In Flow Builder, checkbox fields store Boolean values ($GlobalConstant.True or $GlobalConstant.False). To check if the "High Value Customer" checkbox is checked, the decision outcome criteria should evaluate whether the resource equals {!$GlobalConstant.True} to route the flow past the first screen.

21. Cloud Kicks has two different support teams with different case stages and data points they need to capture for resolution.
 How can an administrator configure this?
 
A. Create two support processes with different stages and page layouts to capture the necessary information.
B. Make the data points collected required fields for their respective team to ensure they are filled in upon case closure.
C. Add the users for the support processes into two different queues to access the correct case types.
D. Set up one support process with the case stages from both teams so that everyone can use the same page layout.
# Dec. 4, 2025, 3:34 p.m. 22.
Answer: A
Why: Support Processes allow administrators to define customized case stage picklist values for different support workflows. By pairing two distinct support processes with unique page layouts and Record Types, each support team gets the specific stage options and required fields necessary for their unique resolution process.

23. Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and want to share all cross-sell opportunities with a team of subject matter experts in their organization. The company has different roles, and the organization-wide default for Opportunity is set to Private.
 How should the administrator accomplish this?
 
A. Create a new role for the subject matter experts and give them access to the records with an owner-based sharing rule.
B. Change the organization-wide default for Opportunity from Private to Public Read/Write to open up access for the subject matter experts.
C. Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing.
D. Add the subject matter experts to a public group and give them access to the records with a criteria-based sharing rule.
Show Suggested Answer
by [deleted] at Dec. 4, 2025, 3:34 p.m.
Answer: D
Why: A criteria-based sharing rule allows the administrator to automatically grant access to records based on field values, such as Opportunity Type equals "Cross-Sell," regardless of record ownership. Combining this rule with a public group containing the subject matter experts safely grants them read access without modifying the global Organization-Wide Default or disrupting the existing role hierarchy.

24. Northern Trail Outfitters has the Case object set to private. The support manager raised a concern that reps have a broader view of data than expected and can see all cases on their group's dashboards.
 What could be causing reps to have inappropriate access to data on dashboards?
 
A. Dashboard Subscriptions
B. Public Dashboards
C. Dashboard Filters
D. Dynamic Dashboards

by [deleted] at Dec. 4, 2025, 3:34 p.m.
Answer: D
Why: Dynamic dashboards display data according to the viewing user's permissions, but when configured as a static dashboard with a specific running user (e.g., a manager or admin with broad access), viewers see all data that the running user can access. If a dashboard is expected to strictly respect each individual rep's private visibility settings, changing it to run as the logged-in user (a dynamic dashboard) prevents reps from seeing data beyond their granted access.


25.  A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest form online. The team currently does not have access to the Lead object.
 How should an administrator provide proper access?
 
A. Configure permission sets
B. Set up Manual sharing
C. Assign a new role
D. Create a new profile
Show Suggested Answer
by [deleted] at Dec. 4, 2025, 3:41 p.m.
Answer: A
Why: Permission sets are used to grant additional permissions and access to specific object types without modifying existing user profiles. Since support users already have a profile and role assigned, creating and assigning a permission set with Read/Create access to the Lead object is the most efficient and scalable best practice.

26. An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variables for use later in the flow.
 What flow element should the administrator add?
 
A. Create Records
B. Update Records
C. Get Records
D. Assignment
Show Suggested Answer
by [deleted] at Dec. 4, 2025, 3:34 p.m.
Answer: C
Why: The Get Records element in Flow Builder searches Salesforce for records that match specific filter criteria and automatically stores their field values in flow variables for downstream use. Create Records and Update Records handle database writes, while Assignment updates variable values manually.

27. The administrator at Cloud Kicks has been told that users are unable to add repeating tasks in Salesforce.
 Which two solutions should the administrator use to ensure users are able to do this? (Choose two.)
 
A. Enable Creation of Recurring Tasks in Activity Settings
B. Turn on Task Notifications Service
C. Disable Shared Activities
D. Add Create Recurring Series of Tasks field on page layouts
# Dec. 4, 2025, 3:34 p.m.
Answer: A, D
Why: Enabling "Creation of Recurring Tasks" in Activity Settings activates the recurring task functionality for the organization. Additionally, the "Create Recurring Series of Tasks" field (or standard "Is Recurrence" / "Recurrence" field) must be present on the Task page layout so users actually have the user interface checkbox/field required to make a task recurring.


28. Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The services team also wants to use Opportunity to track installation. All three teams will need to use different fields and stages.
 How should the administrator configure this requirement?
 
A. Create one sales process. Create one record type and three page layouts.
B. Create three sales processes. Create three record types and one page layout.
C. Create one sales process. Create three record types and three page layouts.
D. Create three sales processes. Create three record types and three page layouts.
# Dec. 4, 2025, 3:34 p.m.
Answer: D
Why: Different stages require distinct Sales Processes to define the allowed stage picklist values for each workflow. Pair these with three separate Record Types—each associated with its respective Sales Process—and three unique Page Layouts to control which fields are visible to each team.


29. The events manager at DreamHouse Realty has a hot lead from a successful open house that needs to become a Contact with an associated Opportunity.
 How should this be accomplished from the Campaign keeping the associated Campaign Member history?
 
A. Clone the lead and convert the cloned record to a Contact.
B. Delete the lead and create a new Contact and Opportunity.
C. Add a Contact from the Campaign Member Detail page.
D. Convert the lead from the Campaign Member Detail page.
# Dec. 4, 2025, 3:34 p.m. 
Answer: D
Why: Converting a Lead directly from the Campaign Member Detail page preserves its full campaign history. During the conversion process, Salesforce automatically converts the Lead into a Contact, creates the associated Opportunity, and retains the Campaign Member record linking the new Contact directly to the original Campaign.

30. Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status.
 Which feature should an administrator use to fulfill this request?
 
A. Validation Rules
B. Dependent Picklists
C. Global Value Picklists
D. Predefined Field Values
#Dec. 4, 2025, 3:34 p.m.
Answer: A
Why: Validation rules allow administrators to enforce business logic when records are updated. By using functions like ISCHANGED(Status) alongside PRIORVALUE(Status), an administrator can compare the previous status with the new status to prevent agents from moving a Case backward through the path or skipping required sequence steps.


31. Universal Containers created a new job posting on the first of the month. It triggered a process scheduled action that will send a Chatter post to the department VP in 30 days if the position is still open and the status is not equal to Interviewing. On the 10th of the month, an applicant interviews, and the job posting status is updated to Interviewing.
 What will happen to the Chatter post in this situation?
 
A. The pending Chatter post will be sent in 30 days.
B. The pending Chatter post will be canceled.
C. The pending Chatter post will be sent on the 10th of the month.
D. The pending Chatter post will be paused.
#Dec. 4, 2025, 3:34 p.m. 
Answer: B
Why: When a record is updated and no longer meets the criteria for a scheduled action (such as changing the status to "Interviewing"), Salesforce automatically cancels any pending actions in the time-based workflow queue that were associated with that record evaluation.

32. Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce.
 Which field type should an administrator use to capture coordinates?
 
A. Geofence
B. Custom address
C. External lookup
D. Geolocation
#Dec. 4, 2025, 3:34 p.m. 
Answer: D
Why: The Geolocation custom field type allows administrators to store spatial coordinates defined by latitude and longitude. It is the built-in field type specifically used for recording exact location data, measuring distances, or visualizing geographic points on a map.

33. The administrator for AW Computing is working with a user who is having trouble logging in to Salesforce.
 What should the administrator do to identify why the user is unable to log in?
 
A. Pull the password history to ensure the password policy was followed.
B. Reset the security token for the profile.
C. Review the login history for the user.
D. Check the attempted logins by running the setup audit trail.
# Dec. 4, 2025, 3:34 p.m. 
Answer: C
Why: The Login History related list on the user's record (or the global Login History page in Setup) provides specific details for every login attempt, including the status/reason for failure (e.g., Invalid Password, User is Locked Out, IP Restricted, or Login-Flow Error). This allows the administrator to pinpoint the exact root cause of the login issue immediately.

34. Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field.
 Which two options should the administrator recommend to help simplify the process? (Choose two.)
 
A. Add a Path for stage to the opportunity record page.
B. Create a simplified Opportunity page layout.
C. Configure an autolaunched flow for Opportunity editing.
D. Use a Kanban list view for Opportunity.
#April 25, 2025, 8:52 a.m. 
Answer: A, D
Why: Both features streamline stage updates without requiring users to open and edit full record pages. Adding a Path to the Opportunity record page enables sales reps to advance stages with a single click at the top of the record. Alternatively, using a Kanban list view allows reps to visually drag and drop opportunities across stage columns directly from the list view.

35. An administrator supporting a global team of Salesforce users has been asked to configure company settings.
 Which two options should the administrator configure? (Choose two.)
 
A. Currency Locale
B. Login Hours
C. Password Policy
D. Default Language
#Dec. 4, 2025, 3:34 p.m.
Answer: A, D
Why: Currency Locale and Default Language are core Company Settings (found under Company Information in Setup) that define default regional defaults and display preferences for the entire organization. In contrast, Login Hours and Password Policies are security controls configured at the Profile level.


36. Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options.
 What should an administrator configure to meet these requirements?
 
A. Different page layouts that control the picklist values for the opportunity types
B. Validation rules that ensure that users are entering accurate sales stage information
C. Public groups to limit record types and sales processes for opportunities
D. Separate record types and sales processes for the different types of opportunities
#Dec. 4, 2025, 3:34 p.m.
Answer: D
Why: To support distinct sales workflows on the Opportunity object, you must configure separate Sales Processes to define the allowed stage picklist values, and map them to separate Record Types. Each Record Type can then be assigned its own distinct Page Layout to present the specific fields and picklist options required for business vs. partner opportunities.


37.  Northern Trail Outfitters uses web-to-case to convert support requests submitted through its website into cases. The support team want to automatically send an email containing password reset instructions to the customers when the case subject contains the words forgot and password.
 
What two options should the administrator configure to meet this requirement? (Choose two.)
 
A. Auto-response rule
B. Password reset template
C. Email-to-case
D. Email template
#Dec. 4, 2025, 5:12 p.m.
Answer: A, D
Why: An Auto-response rule evaluates Web-to-Case submissions against specific criteria—such as checking if the Case Subject contains "forgot" and "password"—and automatically sends an email response to the customer. To deliver the actual instructions, the rule must be configured with a specific Email template containing the password reset instructions.


38. The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout.
 What should the administrator use to fulfill this request?
 
A. Component Visibility
B. Sharing Settings
C. Record Type Assignment
D. Page Layout Assignment
#Dec. 4, 2025, 3:34 p.m.
Answer: A
Why: Component Visibility rules on a Lightning Record Page allow an administrator to dynamically show or hide individual components—such as a Related List Single component displaying the Retention object—based on user context, including specific permissions, permission set assignments, fields, or user attributes.


39. Which two solutions could an administrator find on the AppExchange to enhance their organization? (Choose two.)
 
A. Communities
B. Consultants
C. Components
D. Customers
# Dec. 4, 2025, 3:34 p.m. 

Answer: B, C
Why: The AppExchange marketplace offers pre-built solutions and expertise to extend Salesforce functionality:
Components: Pre-built Lightning components that admins can drag and drop onto record pages or digital experiences using Lightning App Builder.
Consultants: Certified partner firms and domain experts listed on AppExchange to assist with implementations, customizations, and strategic guidance.
(Note: Communities/Experience Cloud and Customers are core platform elements or user roles rather than AppExchange solution types).

40.  Sales reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities.
 What should an administrator suggest to meet this request?
 
A. Define a new Stage picklist value.
B. Make the field editable on page layouts.
C. Configure Forecasting support.
D. Create a custom field on Opportunity.
#Dec. 4, 2025, 3:34 p.m. 
Answer: A
Why: In Salesforce, the standard Probability field on Opportunity is automatically driven by the selected Stage. Each stage in a Sales Process has a default probability percentage mapped to it. To alter the probability value for an opportunity, the administrator should define or adjust the stage picklists (or add a new Stage picklist value with the desired probability percentage).

41. Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the question that is needed.
 How should an administrator complete this?
 
A. Use conditional visibility to hide the unnecessary question.
B. Use branching in the flow screen to show the proper scenario.
C. Use a new version of the flow for each scenario.
D. Use a decision element and a new screen to show the proper question.
# Dec. 4, 2025, 3:34 p.m.
Answer: A
Why: Screen elements in Flow Builder support Conditional Visibility rules directly on individual screen components. By setting visibility conditions on each question based on previous inputs or user attributes, the flow dynamically shows or hides components on the exact same screen without requiring extra Decision elements or multi-screen branches.


42. An administrator at AW Computing has been asked to help the Support team with report folders. They want a folder called Support Reports and two folders underneath called Helpdesk and R&D. The Support organization uses public groups for Support Agents, R&D, and Managers. Support agents should be able to run Helpdesk reports, but should not be able to view R&D reports. Support managers should be able to view and edit all reports.
 Which two ways should these folders be shared? (Choose two.)
 
A. Share the Support Reports folder with Support Managers with Edit Access.
B. Share the Helpdesk folder with Support Agents with View access.
C. Share the R&D folder with Support Managers with Edit Access.
D. Share the Support Reports folder with Support Agents with View Access.
# Dec. 4, 2025, 3:34 p.m.
Answer: B, C
Why: Folder access in Salesforce reports follows a strict top-down inheritance model. Access granted at a parent folder level applies to all nested subfolders underneath it.
Option A: Sharing the top-level Support Reports folder with Support Managers giving Edit access ensures managers automatically inherit full view/edit permissions for both nested subfolders (Helpdesk and R&D).
Option B: Sharing only the Helpdesk subfolder directly with Support Agents giving View access allows agents to run Helpdesk reports while restricting their visibility so they cannot see or access the R&D subfolder.
(Note: Option D would incorrectly grant Support Agents visibility into the R&D subfolder due to parent-to-child folder inheritance).


43. The administrator at AW Consulting has created a custom picklist field. Business users have requested that it be a text field. The administrator attempts to change the field type but is unable to because it is referenced by other functionalities.
 Which functionality is preventing the field type from being changed?
 
A. Visualforce
B. Javascript
C. Record types
D. Formula fields
#Dec. 4, 2025, 3:41 p.m.
Answer: D
Why: In Salesforce, custom fields cannot have their data type changed if they are referenced by declarative components like Formula fields, Flow/Process definitions, or Apex classes. To change the data type of the picklist, the administrator must first remove references to the field in all formula expressions, save those components, update the field type, and then restore the formula logic.


44. Universal Containers has a private sharing model for Opportunities and uses Opportunity Teams. Criteria-based sharing rules are not used. A sales rep at Universal Containers leaves the company and their user record is deactivated. The rep is later rehired in the same role. The administrator activates the old user record. The user is added to the same default Opportunity Teams, but is no longer able to see the same records the user worked on before leaving the company.
 What is the likely cause?
 
A. The records were manually shared with the user.
B. The Stage of the Opportunity records was changed to Closed Lost.
C. Permission sets were removed when the user was deactivated.
D. The Record Type of the Opportunity records was changed.
#Dec. 4, 2025, 3:34 p.m.
Answer: A
Why: When a user record is deactivated in Salesforce, the platform automatically deletes all Manual Shares (records directly shared with that specific user by the owner or an admin) and removes the user from Opportunity Teams. When the user's record is reactivated, default Opportunity Teams can be reassigned automatically, but previously manually shared record access is lost permanently and is not restored automatically.


45. A new sales rep at Ursa Major Solar has a qualified lead that is ready for conversion.
 When using the Lead conversion process, which two records can be created? (Choose two.)
 
A. Campaign
B. Contact
C. Account
D. Case
# Dec. 4, 2025, 3:34 p.m.
Answer: B, C
Why: Converting a Lead in Salesforce automatically creates (or maps to existing) Account and Contact records, with the option to simultaneously create an Opportunity. Cases and Campaigns are not created as part of the standard Lead conversion pipeline.


46. AW Computing would like to improve its Case Lightning record page by including:
 • A filtered component to display a message in bold font when a Case is saved as a critical record type.
 • A quick way to update the Account status from the Case layout.
 Which two components should an administrator use to satisfy these requests? (Choose two.)
 
A. Related record
B. Rich text
C. Record detail
D. Related list
# Dec. 4, 2025, 3:34 p.m. 
Answer: A, B
Why:
Rich Text (B): Allows administrators to add custom text formatted in bold font directly onto a Lightning record page. Paired with Component Visibility rules (filtered to show only when Case.RecordType.DeveloperName = 'Critical'), it dynamically highlights critical records.
Related Record (A): Displays fields from a parent record (such as the parent Account's status field) on the current page layout and allows users to update those parent fields directly without leaving the Case record.


47. Cloud Kicks (CK) captures whether an opportunity should be reviewed by someone in product engineering with a checkbox field called Needs Review. CK also has a picklist field on the opportunity for Product Type. When a sales rep saves an opportunity, they need to select the Product Type or check the Needs Review box.
 What should an administrator use to accomplish this?
 
A. Validation rule    
B. Workflow rule
C. Required fields
D. Before Save flow
# Dec. 4, 2025, 3:34 p.m.
Answer: A
Why: A Validation rule enforces data quality by evaluating a formula whenever a record is saved. By using a formula like ISBLANK(TEXT(Product_Type__c)) && Needs_Review__c = FALSE, the administrator can prevent the record from saving and display an error message unless the user selects a Product Type OR checks the Needs Review box. 


48. Ursa Solar Major is evaluating Salesforce for its service team and would like to know what objects were available out of the box.
 Which three of the standard objects are available to an administrator considering a support use case? (Choose three.)
 
A. Account
B. Contract
C. Ticket
D. Case
E. Request
# Dec. 4, 2025, 3:34 p.m. 
Answer: A, B, D
Why:
Case (D): The core standard object for tracking customer issues, inquiries, or support tickets.
Account (A): The standard object used to represent companies or individual customers associated with support cases.
Contract (B): A standard object used to track formal agreements, service terms, or warranties associated with accounts and cases.
(Note: "Ticket" and "Request" are not standard out-of-the-box Salesforce objects; case management in Salesforce uses the Case object).

49. Universal Containers require that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost.
 Which automation solution should an administrator use to implement this request?
 
A. Quick Action
B. Flow Builder
C. Workflow Rule
D. Outbound Message
#Dec. 4, 2025, 3:34 p.m. 
Answer: B
Why: Flow Builder (specifically a Record-Triggered Flow) is the primary declarative automation tool in Salesforce capable of performing complex multi-record operations. When an Opportunity status changes to Closed Won, a record-triggered flow can automatically query, iterate over, and update all other open Opportunity records associated with the parent Account to set their Stage to Closed Lost. Workflow Rules are retired for new criteria and cannot update cross-record child collections.

50. Customer service accesses articles with the Knowledge Lightning component on the Service Cloud console. Billing department users would like similar functionality on the case record without using the console.
 How should the administrator configure this request?
 
A. Add the Knowledge component to the page layout.
B. Add the Knowledge related list to the record page.
C. Add the Knowledge related list to the page layout.
D. Add the Knowledge component to the record page.
#June 3, 2025, 2:33 a.m.
Answer: D
Why: In Lightning Experience, the Knowledge component is a standard Lightning component that can be added directly to any standard Lightning Record Page (such as a Case record page) via the Lightning App Builder. It operates independently of the Service Cloud Console, allowing billing department users to search, view, and attach Knowledge articles straight from standard Case record pages.

51. A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is.
 Which tool should an administrator use to accomplish this?
 
A. Data Loader
B. Mass Transfer Tool
C. Data Import Wizard
D. Dataloader.io
# Dec. 4, 2025, 3:34 p.m. 
Answer: B
Why: The standard Mass Transfer Tool (Mass Transfer Records) allows an administrator to quickly transfer ownership of multiple Accounts—along with their open Opportunities, Contacts, and related records—from one user to another in a single wizard, while preserving existing team setups.

52. An administrator gets a request from Human Resources to remove a user’s access to Salesforce immediately. The user is part of a hierarchy field called Direct Manager.
 What should the administrator do to fulfil the request?
 
A. Restrict the user’s profile to read-only while removing them from being referenced in the Direct Manager field.
B. Remove the user from the allowlist on the restricted user email domain on the user’s email field.
C. Freeze the user to prevent them from logging in while removing them from being referenced in the Direct Manager field.
D. Deactivate the user and delete any records where they are referenced in the Direct Manager field.

#Dec. 4, 2025, 3:34 p.m. 
Answer: C
Why: When a user is referenced in custom hierarchy fields (such as a custom Direct_Manager__c field), workflow email alerts, or approval processes, Salesforce throws a dependency error if you attempt immediate deactivation. To satisfy HR's demand for immediate access revocation, the administrator must first freeze the user account (which instantly halts logins), update/reassign the hierarchy field references, and then cleanly deactivate the user record.


53. The administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted.
 Which two items should the administrator do to make sure these values are populated? (Choose two.)
 
A. Set the picklist field to be required on the Lead object.
B. Update the picklist value with a validation rule.
C. Map the picklist field on the Lead to the Contact.
D. Create a custom picklist field on Contact.

# Dec. 4, 2025, 3:34 p.m.
Answer: C, D
Trainer Explanation & Concept: Custom fields on the Lead object do not automatically map to Contact, Account, or Opportunity upon lead conversion. You must:
Create a corresponding custom picklist field on the Contact object with the same values.
Navigate to Object Manager > Lead > Fields & Relationships > Map Lead Fields and map the Lead picklist to the Contact picklist.


54. The administrator at Ursa Major Solar imported records into an object by mistake.
 Which two tools should be used to undo this import? (Choose two.)
 
A. Mass Delete Records
B. Weekly Data Export
C. Data Import Wizard
D. Data Loader

# Dec. 4, 2025, 3:34 p.m.
Answer: A, D
Trainer Explanation & Concept: To reverse an accidental import, you must delete the newly created records. Mass Delete Records in Setup can purge standard objects (Accounts, Leads, Contacts, etc.) up to 250 at a time. For custom objects or large data volumes, administrators use Data Loader with the Delete operation, feeding it the CSV containing the Salesforce Record IDs generated during the import success log. (Data Import Wizard cannot delete records, and Weekly Export only generates backups.)


55. Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of sales requested that this information be accessible on the opportunity and available for reporting.
 Which two options should the administrator configure to meet these requirements? (Choose two.)
 
A. Add the Campaign Member related list to the Opportunity page layout.
B. Customize Campaign Role.
C. Customize Campaign Member Role.
D. Add the Opportunity Contact Role related list to the Opportunity page layout.
E. Customize Opportunity Contact Role.
# Sept. 11, 2024, 9 p.m.
Answer: D, E
Trainer Explanation & Concept: Salesforce tracks contact influence on deals via Opportunity Contact Roles. Customizing the Opportunity Contact Role picklist values (e.g., Decision Maker, Executive Sponsor, Influencer) captures the stakeholder's impact, and adding the related list to the Opportunity layout provides visibility and unlocks Opportunity Contact Role reporting.


56. An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created.
 What could the issue be?
 
A. The flow url is deactivated.
B. The flow trigger is missing.
C. The flow is inactive.
D. The flow is read only.

#Dec. 4, 2025, 3:34 p.m.
Answer: C
Trainer Explanation & Concept: In Salesforce, a flow must be explicitly activated to run in production. Newly deployed flows (via change sets or packages) often deploy as inactive by default.



57. Brokers at DreamHouse Realty need to see certain information about one or more cases when referencing the contact record. This includes: Case Name, Case ID, Customer Name, Case Reason, Case Status, and Case Creation Date.
 Which two changes in Setup should the administrator make? (Choose two.)
 
A. Edit the Related List component in the Lightning App Builder and choose Enhanced List as the related list type.
B. Use the page layout editor to include the appropriate columns in the Cases related list.
C. Use the page layout editor to change the related list type to Enhanced List.
D. Edit the Related List component in the Lightning App Builder and choose Related List as the related list type.
# Dec. 4, 2025, 3:34 p.m.
Answer: A, B
Trainer Explanation & Concept: Standard related lists in Lightning Experience only display up to 4 fields. To display more than 4 fields (up to 10 columns), the administrator must switch the related list type to Enhanced List in Lightning App Builder. The specific fields displayed and their order are governed by the page layout editor's related list properties.


58. Sales users at Cloud Kicks are requesting that the data in the Industry field on the Account object displays on the Opportunity page layout.
 Which type of field should an administrator create to accomplish this?
 
A. Cross-object formula field
B. Custom Account field
C. Master-detail relationship field
D. Standard Account field
# Dec. 4, 2025, 3:34 p.m. 
Answer: A
Trainer Explanation & Concept: Because Opportunity has a standard lookup to Account, a read-only Cross-object formula field on Opportunity referencing Account.Industry dynamically surfaces the parent account's industry directly on the opportunity detail page with zero data duplication.


59. An administrator is planning to use Data Loader to mass import new records to a custom object from a new API.
 What will the administrator need to do to use the Data Loader?
 
A. Append their security token at the end of their password to login.
B. Use the Data Import Tool to mass import custom object records.
C. Add a permission set that allows them to import data.
D. Reset their password and their security token.
# Dec. 4, 2025, 3:41 p.m.
Answer: A
Why: When authenticating through client applications like Data Loader using standard username and password credentials, Salesforce requires users connecting outside a trusted IP range to append their personal security token directly to the end of their password (e.g., PasswordSecurityToken). (In modern data loaders, there is no need to use a security token, because it uses OAuth.)
60. Northern Trail Outfitters has a custom quick action on Account that creates a new Case.
 How should an administrator make the quick action available on the Salesforce mobile app?
 
A. Include the action in the Salesforce Mobile Navigation menu.
B. Create a custom Lightning App with the action.
C. Add the Salesforce Mobile and Lightning Experience action to the page layout.
D. Modify compact Case page layout to include the action.
#t June 20, 2024, 12:45 a.m.
Certified Correct Answer: C. Add the Salesforce Mobile and Lightning Experience action to the page layout.
Trainer Explanation & Concept: In order for an object-specific or global quick action to appear in the Salesforce mobile app action bar (and Lightning Experience action ribbon), it must be added to the Salesforce Mobile and Lightning Experience Actions section on the object's page layout.



61. Universal Containers has a Contact Lightning record page with a component that shows LinkedIn data. The sales team would like to only show this component to sales users when they are on their mobile phones.
 Which two solutions should the administrator use to fulfill this requirement? (Choose two.)
 
A. Filter the component visibility with View = Mobile/Tablet.
B. Filter the component visibility with User > Profile > Name = Sales User.
C. Filter the component visibility with User > Role > Name = Sales User.
D. Filter the component visibility with Form Factor = Phone.
# Dec. 4, 2025, 3:34 p.m.
Answer: B, D
Why:
Filter the component visibility with User > Profile > Name = Sales User (B): In Lightning App Builder, dynamic component visibility filters allow administrators to show or hide components based on user fields. Filtering by User > Profile > Name targets the specific persona/profile (Sales Users) required.
Filter the component visibility with Form Factor = Phone (D): Dynamic component visibility supports filtering by Device / Form Factor (e.g., Desktop, Phone). Setting Form Factor = Phone ensures the component renders only when accessed via mobile phone devices.


62. What are two considerations an administrator should keep in mind when working with Salesforce objects? (Choose two.)
 
A. Custom and standard objects have standard fields.
B. A new standard object can be created.
C. Standard objects are included with Salesforce.
D. Only standard objects support master-detail relationships.
# Dec. 4, 2025, 3:34 p.m.
Answer: A, C
Why:
Custom and standard objects have standard fields (A): Every custom object automatically includes standard system fields created by default (e.g., CreatedById, LastModifiedById, Name, OwnerId, Id). Standard objects also come with built-in standard fields (e.g., Account Name, Phone, Industry).
Standard objects are included with Salesforce (C): Standard objects (like Accounts, Contacts, Leads, and Opportunities) are pre-built and out-of-the-box components delivered natively with the Salesforce platform.
(Why the others are incorrect: B is incorrect because you cannot create new standard objects—only custom objects. D is incorrect because both standard and custom objects support master-detail relationships, subject to standard relationship limits).

63. Cloud Kicks generates leads for its different product categories (shoes, apparel, and accessories) through many different sources. While some lead sources are used for all three categories, other lead sources are specific to a single category. The VP of marketing requests that only the proper lead sources be displayed based on the product category chosen.
 How should the administrator configure Salesforce to meet this requirement?
 
A. Create a single business process, then create record types for each product category.
B. Create business processes and record types for each of the three product categories.
C. Create a page layout for each category and filter the Lead Source field based on category.
D. Create a dependency between the Product Category field and Lead Source field.
# April 25, 2025, 11 a.m.
Answer: D
Why: Controlling picklist values dynamically based on another picklist field on the same record is achieved by configuring a Field Dependency. In this setup, Product Category acts as the controlling field and Lead Source serves as the dependent field, filtering the visible lead sources based on the category selected.
(Note: Record Types control available picklist values at the record-type level, but field dependencies dynamically filter values on the fly within the record edit page based on user input).

64. The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner.
 What should an administrator add to the dashboard to fulfill the request?
 
A. Bucket Column
B. Dashboard Component
C. Dashboard Filter
D. Combination Chart
# Dec. 4, 2025, 3:34 p.m.
Answer: C
Why: Dashboard Filters allow users to dynamically filter and drill down into the data presented across all dashboard components. An administrator can add up to 3 filters to a single dashboard—such as Case Origin, Case Status, and Case Owner—allowing call center agents to refine their view in real time without creating separate reports.

65. Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager.
 
Which feature should an administrator configure to meet this requirement?
 
A. Case Scheduled Reports
B. Case Assignment Rules
C. Case Dashboard Refreshes
D. Case Escalation Rules
# Dec. 4, 2025, 5:12 p.m.
Answer: D
Why: Case Escalation Rules automatically reassign cases and send email alerts based on elapsed time criteria. By defining an escalation action with a 2-hour time threshold, an administrator can automatically reassign unassigned cases to an urgent queue and send an automated email notification to the support manager.
(Why Case Assignment Rules are incorrect: Assignment rules execute only upon record creation or manual trigger, whereas Escalation Rules handle time-delayed actions after a record has been open for a specified duration).

66. An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing.
 What should the administrator do to meet the deadline without increasing the budget?
 
A. Hire a consultant to build the custom dashboards.
B. Train someone on the sales and marketing teams to build dashboards.
C. Check the AppExchange for a prebuilt solution that can be easily customized.
D. Build the dashboards manually to meet the deadline.
# Dec. 4, 2025, 3:34 p.m.
Answer: C
Why: Downloading prebuilt packages (such as free Salesforce Labs packages) from the AppExchange provides ready-to-use reports and dashboards for standard sales and marketing objects. Installing a prebuilt solution saves time, allows for easy customization to fit AW Computing's specific needs, and comes at no extra cost, making it the ideal choice for meeting tight deadlines without increasing the budget.

67. The standard Lead Rating field has picklist values of Hot, Warm, and Cold. A list of new leads was imported without errors even though several records had the value of Unrated in the Rating field. 
How were these records added without error?
 
A. A global picklist value set was used to populate the picklist.
B. The Restricted picklist checkbox was unchecked.
C. The Add to All Record Types checkbox was selected.
D. Field-level security was set to Visible for all profiles.
# Dec. 4, 2025, 3:33 p.m.
Answer: B
Why: When the Restricted picklist checkbox is unchecked on a picklist field, Salesforce allows new custom values (such as "Unrated") to be imported via API or data tools without throwing a validation error. Instead of failing, the imported record is created, and the new value is stored and added to the field's inactive picklist values list.
(If "Restricted picklist" had been checked, the import would have enforced strict picklist validation and thrown an error on any record containing a value not defined in the field's picklist value set).

68. Northern Trail Outfitters wants emails received from customers to generate cases automatically.
 How should the administrator ensure that the emails are sent to the correct queue?
 
A. Use a custom email service to set the owner of the case upon creation.
B. Create an Escalation Rule to send cases to the correct queue.
C. Utilize a flow to identify the correct queue and assign the case.
D. Configure Email-to-Case so emails are delivered to the correct queue.
# Dec. 4, 2025, 3:34 p.m.
Answer: D
Why:
Email-to-Case Routing: When configuring Email-to-Case (or On-Demand Email-to-Case), each routing address can be directly configured to assign newly created cases to a specific Case Queue (or individual user) upon creation.
(Why the others are incorrect: C is unnecessary extra maintenance because Email-to-Case handles initial queue assignment natively out-of-the-box. B Escalation Rules are designed for time-delayed reassignments of open cases, not initial creation assignment. A custom email services require custom Apex code, which violates Salesforce declarative best practices when standard configuration solves the requirement).

69. Universal Containers wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find deal records via a search.
 What option should the administrator adjust to fully restrict access?
 
A. Permissions and tab visibility
B. Page layouts and field-level security
C. App permissions and search terms
D. Record settings and search index
# May 28, 2025, 10:53 p.m.
Answer: A
Why:
Permissions and tab visibility: Global Search in Salesforce returns records based on object-level and record-level security permissions (such as Profile/Permission Set read access and Organization-Wide Defaults). Hiding an object's tab or removing list view visibility only removes the navigation access point—it does not remove a user's Read permission on the object itself. To completely stop service users from viewing or searching deal (Opportunity) records, the administrator must remove the Read permission for the object on their Profile/Permission Sets and remove the tab visibility.


70. Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages.
 Which two steps should the administrator configure to meet this requirement? (Choose two.)
 
A. Create a custom object for shoe designs.
B. Use the standard object for designs.
C. Add a custom master-detail field for shoe designs on the Product object.
D. Configure a custom lookup field for shoe designs on the Product object.
# Aug. 19, 2024, 10:03 a.m.
Answer: A, D
Why:
Create a custom object for shoe designs (A): Since "shoe designs" is a unique business entity with custom stages and attributes, creating a custom object allows Cloud Kicks to track multiple design records associated with a single product.
Add a custom master-detail field for shoe designs on the Product object (C): Creating a Master-Detail relationship field on the Shoe Design object (pointing to the Product as the master) satisfies two core requirements:
1-to-Many Relationship: One Product can have multiple child Shoe Design records across various stages.
Deletion Prevention / Cascading Rules: Master-Detail relationships tightly couple the child records to the parent. Access, security, and deletion behavior are governed by the parent master record.

71. The IT manager at Universal Containers is doing an audit of the system’s security.
How should the administrator provide a summary of the org’s security health?
A. Run a Health Check to identify vulnerabilities.
B. Change the Organization-Wide Default to private to restrict visibility.
C. Download the last six months of user login data.
D. Turn on Event Monitoring to track user events.
Answer(s): A. Run a Health Check to identify vulnerabilities.
Explanation: Salesforce Health Check provides a consolidated score and summary of an org’s security settings (such as password policies, session settings, and remote site settings) compared against a baseline. Options B, C, and D perform specific security tasks or data collection, but they do not inherently generate a comprehensive summary of the org's overall security health like Health Check does.
72. Marketing users at Cloud Kicks should be able to view and edit converted leads. The administrator has assigned them a permission set with the View and Edit Converted Leads permission.
Which two ways can the marketing users now access converted leads for editing? (Choose two.)
A. Utilize a list view where lead status equals Qualified.
B. Search the Recent Records component on the homepage.
C. Use the Data Import Wizard.
D. Find them in the global search results.
Answer(s): B. Search the Recent Records component on the homepage, D. Find them in the global search results.
Explanation: Once granted permission to view and edit converted leads, users can find them via global search or search components (like Recent Records) because converted leads are hidden from standard lead list views and reports (making A incorrect). The Data Import Wizard (Option C) does not update converted leads. Therefore, global search and recent records are the primary UI methods to locate them.
73. Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue.
Which feature should be used to fulfill this requirement?
A. Einstein Case Routing
B. Case assignment rule
C. Case escalation rule
D. Auto-response rule
Answer(s): C. Case escalation rule
Explanation: Case escalation rules are specifically designed to automatically escalate cases (such as re-assigning them to a different queue or user) when they meet specific time-based criteria, like an SLA threshold of 24 hours. Case assignment rules handle initial routing upon creation, and auto-response rules send emails to customers.
74. An administrator at Cloud Kicks wants to deactivate a user who has left the company.
What are two reasons that would prevent a user from being deactivated? (Choose two.)
A. The user is the sole recipient of a workflow email alert.
B. The user is the highest role in the role hierarchy.
C. The user is in a custom hierarchy field.
D. The user is part of a territory hierarchy.
Answer(s): A. The user is the sole recipient of a workflow email alert, C. The user is in a custom hierarchy field.
Explanation: A user cannot be deactivated if they are referenced in certain dependencies, such as being the sole recipient of a workflow email alert or being referenced in a custom hierarchy relationship field. Being at the top of the standard role hierarchy or in a territory model does not prevent deactivation.
75. What should an administrator use as an identifier when importing and updating records from a separate financial system?
A. External ID
B. Record ID
C. Rich Text field
D. Auto-Number field
Answer(s): A. External ID
Explanation: An External ID is a custom field that contains unique record identifiers from an external system and is specifically used during data imports and upserts to match and update existing records. Salesforce Record IDs are generated internally, and Rich Text or Auto-Number fields are not suited for matching external system keys.
76. The administrator at Cloud Kicks deleted a custom field but realized that is it part of the lead conversion process.
What should an administrator take into consideration when undeleting the field?
A. The field mapping needs to be re-mapped.
B. The field needs to be restored in the search settings.
C. The field history will remain deleted.
D. The field needs to be re-added to reports.
Answer(s): A. The field mapping needs to be re-mapped.
Explanation: When a custom field used in lead conversion is deleted, its mappings to account, contact, or opportunity fields are removed. Even after undeleting the field, the administrator must manually re-establish the lead conversion field mappings.
77. The Support team at Ursa Major Solar occasionally views shipments from an application external to Salesforce.
What is the best way to configure the UI to allow for this functionality?
A. Split views are only available on standard objects.
B. Use external objects and add a custom tab to the Support App for support agents.
C. Filter by a single shipment record type in the list view.
D. Add the Manage List Views permission for support users.
Answer(s): B. Use external objects and add a custom tab to the Support App for support agents.
Explanation: Salesforce Connect and external objects allow users to view and interact with data stored outside of Salesforce directly within the UI. Adding a custom tab to the Support App makes this data easily accessible to agents. The other options refer to standard list view behaviors or permissions that do not solve external data integration.
78. Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage.
Which three options should the administrator use to address this need? (Choose three.)
A. Use Flow to mark fields required.
B. Configure Opportunity Path.
C. Mark fields required on the page layout.
D. Use validation rules.
E. Enable guided selling.
Answer(s): B, D, E
Explanation:
Configure Opportunity Path (B) to highlight stage-specific Key Fields and Guidance so reps know what to complete at each stage.
Use validation rules (D) to enforce that required fields are populated when Stage moves forward; path alone won’t enforce entry.
Enable guided selling (E) to help reps move forward through stages while preventing them from changing to a previous stage as part of the guided process.

79. Currently, when support reps at Ursa Major Solar close a case, they manually send an email notification to the customer. The support manager would like to automate this process, as too many reps are forgetting this step.
Which two settings should the administrator use to meet this request? (Choose two.)
A. Add the Knowledge component to the closed layout
B. Notify contact checkbox on close page layout
C. Case close template in the support settings
D. Auto-response rule step set for status of closed
Answer(s): B. Notify contact checkbox on close page layout, C. Case close template in the support settings
Explanation: Salesforce provides standard case close functionality where configuring a Case Close Template in Support Settings along with the "Notify Contact" checkbox on the close page layout enables automatic emailing to customers upon closure. Auto-response rules only fire on case creation, not closure.
80. DreamHouse Realty requires that house showings be scheduled within the current year to prevent too many future showings from stacking up.
How can they make sure Showing Date is only populated with a date this year?
A. Create a report that shows any Showing Dates not scheduled in the current year to be updated.
B. Sync the users’ Showing Calendar to Salesforce and filter it to only look at this year.
C. Add Help Text so the user knows to only add a Showing Date within the current year.
D. Create a validation rule that ensures Showing Date contains a date within the current year.
Answer(s): D. Create a validation rule that ensures Showing Date contains a date within the current year.
Explanation: A validation rule is the only proactive mechanism that prevents users from saving records with dates outside the current year. Reports, help text, and calendar syncing are reactive or passive and do not prevent invalid data entry at the point of creation.

81. An administrator at Universal Containers needs an automated way to delete records based on field values.
What automated solution should the administrator use?
A. Process Builder
B. Automation Studio
C. Workflow
D. Flow Builder
Answer(s): D. Flow Builder
Explanation: Flow Builder is capable of deleting records based on specified criteria and field values. Workflow rules and Process Builder cannot delete records natively (they can only create, update, or send notifications). Automation Studio is a Marketing Cloud tool rather than a standard Salesforce CRM automation feature.

82. Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days.
How should the administrator complete this requirement?
A. Escalation Rules
B. Auto-Response Rules
C. Validation Rules
D. Assignment Rules
Answer(s): A. Escalation Rules
Explanation: Case escalation rules include time-dependent actions that can automatically perform tasks—such as reassigning a case owner—when a case remains open for a specified period (e.g., more than 7 days). Assignment rules execute on creation/edit, and auto-response rules send emails, making escalation rules the correct feature for time-elapsed triggers.

83. Northern Trail Outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads.
What approach should an administrator take to meet this requirement?
A. Define a record type and assign it to the interns.
B. Update the active Lead Assignment Rules.
C. Create a separate Lead Lightning App.
D. Set up Web-to-Lead for the interns’ use.
Answer(s): A. Define a record type and assign it to the interns.
Explanation: Using a Record Type allows the administrator to categorize leads created by interns distinctly from existing leads, making it easy to filter, report on, or apply specific page layouts and picklist values to them. Assignment rules route leads, apps control navigation, and Web-to-Lead is for public website forms, none of which inherently tag intern-entered records the way a record type or custom field can.


84.  The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value.
What should an administrator configure to meet this requirement?
A. Add a public group and Process Builder to email the lead.
B. Create an assignment rule to email the lead.
C. Configure an auto-response rule to email the lead.
D. Use a validation rule to trigger workflow to email the lead.
Answer(s): C. Configure an auto-response rule to email the lead.
Explanation: Lead auto-response rules are specifically designed to automatically send different email templates to leads based on criteria (such as the Lead Industry field value) when leads are submitted via Web-to-Lead. Assignment rules route leads rather than email them, and validation rules prevent data saving instead of sending emails.

85.  A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password.
Which two options should the administrator consider when resetting the user’s password? (Choose two.)
A. Resetting the password will change the user’s password policy.
B. Resetting a locked-out user’s password automatically unlocks the user’s account.
C. Single sign-on users can reset their own passwords using the forgot password link.
D. After resetting a password, the user may be required to activate their device to successfully log in to Salesforce.
Answer(s): B, D
Explanation: Resetting a user's password clears out lockout counters and unlocks their account immediately. Additionally, logging in with a new password from an unrecognized browser or IP often triggers identity verification (device activation). Password policies are governed by profiles or permission set password policies, not individual resets, and SSO users typically manage credentials through their identity provider rather than the Salesforce "forgot password" link.

86.  Universal Containers requires a different Lightning page to be displayed when Accounts are viewed in the Sales Console and in the Service Console.
How should an administrator meet this requirement?
A. Define multiple record types.
B. Create different user profiles.
C. Update page layout assignments.
D. Assign Lightning pages as app default.
Answer(s): D. Assign Lightning pages as app default.
Explanation: Lightning Record Pages can be assigned as App Defaults, meaning a specific Lightning page layout can be tied directly to a particular Lightning Console app (such as the Sales Console vs. the Service Console) without needing distinct record types or user profiles.

87.  Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard.
What are the two reasons this is likely to occur? (Choose two.)
A. The running dashboard user and viewer have different permissions.
B. The report needs to be refreshed.
C. The dashboard needs to be refreshed.
D. The current user does not have access to the report folder.
Answer(s): A. The running dashboard user and viewer have different permissions., C. The dashboard needs to be refreshed.
Explanation: If a dashboard is set to run as a specific user with broader access, the viewer might see aggregated numbers they lack security access to drill down into fully, or the underlying data changed after the dashboard was last refreshed, leading to a mismatch when viewing the fresh source report directly. If the user lacked folder access (Option D), they wouldn't be able to view the underlying report at all.

88.  An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount.
How should the administrator export this file?
A. Data Export Service
B. Data Export Wizard
C. Data Loader
D. Data Import Wizard
Answer(s): C. Data Loader
Explanation: Data Loader is a client application that allows administrators to execute precise SOQL queries (filtering by specific criteria like closed won opportunities from the last 90 days and selecting specific fields). The Data Export Service (Weekly Export) exports a full backup of all objects as CSV files without date-range filtering options, and the Data Import Wizard is used for inserting/updating data, not exporting.

89.  The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure? (Choose two.)
A. Forecasting 
B. Sales Quotas 
C. Opportunity Stages 
D. Opportunity List View
Answer(s): A. Forecasting, B. Sales Quotas
Explanation: Forecasting allows organizations to predict revenue based on opportunities in the pipeline, while Sales Quotas allow the administrator to set specific revenue targets for sales representatives to benchmark their performance against actual results. Opportunity Stages and List Views are helpful for managing opportunities but do not provide the revenue prediction or goal-setting capabilities required for forecasting.

90. Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Accounts?
A. Accounts should have a master detail to Shipments. 
B. Shipments should have a master detail to Accounts. 
C. Accounts should have a lookup to Shipments. 
D. Shipments should have a lookup to Account.
Answer(s): D. Shipments should have a lookup to Account.
Explanation: A lookup relationship is the correct choice because it creates a loose connection where the child record (Shipment) is not dependent on the parent record (Account). If the account is deleted, the lookup relationship allows the shipment records to remain in the system. Master-detail relationships are inappropriate here because they mandate that child records are deleted when the parent is deleted.

91. When a sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?
A. Process Builder 
B. Workflow Rule 
C. Platform Event 
D. Flow Builder
Answer(s): D. Flow Builder
Explanation: Flow Builder is the only tool listed capable of creating custom screens that interact with users. Process Builder and Workflow Rules are background automation tools that cannot display UI elements. Platform Events are used for event-driven messaging, not for building user-facing interfaces.

92. Northern Trail Outfitters has the Case object set to private. The support manager raised a concern that reps have a broader view of data than expected and can see all cases on their group's dashboards. What could be causing reps to have inappropriate access to data on dashboards?
A. Dashboard Subscriptions 
B. Public Dashboards 
C. Dashboard Filters 
D. Dashboard’s running user
Answer(s): D. Dashboard’s running user
Explanation: The "running user" of a dashboard determines the level of data access for all viewers of that dashboard. If the running user is set to someone with broad access (like a manager or a user with "View All Data" permissions), then everyone viewing the dashboard will see data based on that user's access level, overriding their own individual profile permissions.
93. Users at Cloud Kicks want to see information more useful for their role on the Case page. How should an administrator make the pages more dynamic and easier to use?
A. Delete the extra components from the page. 
B. Remove fields from the record details component. 
C. Add component visibility filters to the components. 
D. Include more tab components with filters.
Answer(s): C. Add component visibility filters to the components.
Explanation: Component visibility filters allow administrators to show or hide specific Lightning components on a page based on record fields or user attributes. This is the standard method to make pages "dynamic," ensuring that users only see the information relevant to their specific role or situation without cluttering the page.

94. AW Computing wants to prevent users from updating the Account Annual Revenue field to be a negative value or an amount more than $100 billion. How should an administrator accomplish this request?
A. Build a scheduled report displaying Accounts with Account Revenue that is negative or greater than 100 billion. 
B. Create a validation rule that displays an error if Account Revenue is below 0 or greater than 100 billion. 
C. Make the Account Revenue field required on the page layout. 
D. Enable Account Revenue limits in Setup, with 0 as the minimum and 100 billion as the maximum.
Answer(s): B. Create a validation rule that displays an error if Account Revenue is below 0 or greater than 100 billion.
Explanation: Validation rules are specifically designed to enforce data integrity by preventing records from being saved if they do not meet defined criteria. The other options either do not stop the data entry (reporting) or are not standard platform configuration features (such as setting field limits in Setup or making a field required).

95. DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases. Which two solutions should an administrator use to meet this request? (Choose two.)
A. Web-to-Case 
B. Case Escalation 
C. Email-to-Case 
D. Case Queues
Answer(s): A. Web-to-Case, C. Email-to-Case
Explanation: Web-to-Case allows customers to submit cases directly via a form on a website, and Email-to-Case allows customers to submit cases by sending emails to a support address. Both are self-service methods for case creation. Case Escalation and Case Queues are tools for internal case management and routing, not for the initial submission of cases by customers.

96. Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?
A. Turn on Recurring Activities 
B. Enable Creation of Recurring Tasks 
C. Workflow rule to create recurring tasks 
D. Flow to create recurring tasks

Answer(s): B. Enable Creation of Recurring Tasks
Explanation: To allow users to create tasks that recur on a schedule (such as every two weeks), the administrator must enable the "Create Recurring Tasks" setting in Activity Settings within Setup. Once enabled, users will see the "Create Recurring Series of Tasks" option when creating a new task. The other options are incorrect, as "Recurring Activities" is not the specific setting name, and automation tools like Flow or Workflow are not required for this standard feature.

97.  Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases.
Where should the administrator go to find out what type of licenses CK has purchased and how many are available?
A. Search for licenses types in setup
B. User licenses related list in company information
C. Usage-based entitlements related list in company information
D. User management settings in setup
Answer(s): B. User licenses related list in company information
Explanation: The Company Information page in Salesforce Setup contains the User Licenses related list, which provides a comprehensive breakdown of all purchased license types, total licenses available, and how many are currently in use. Usage-based entitlements refer to consumption-based features (like data storage limits or email volumes), while the other options do not point to the correct administrative location for tracking total license quantities.

98. An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network.
What are two considerations for this configuration? (Choose two.)
A. Assign single sign-on to a permission set to allow users to log in when outside the network.
B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.
C. IP address restrictions are set on the profile or globally for the org.
D. Restrict U2F Security Keys on the user's profile to enforce login hours.
Answer(s): B & C
Explanation: IP address restrictions in Salesforce are configured at the profile level (or globally via network access settings). Additionally, to ensure that users cannot bypass restrictions once logged in (such as by changing networks or using session tokens obtained internally), the "Enforce Login IP Ranges on Every Request" security setting must be enabled. Single sign-on and U2F keys serve different authentication and security purposes.

99. Northern Trail Outfitters has asked an administrator to ensure that when a contact with a title of CEO is created, the contact’s account record gets updated with the CEO’s name.
Which feature should an administrator use to implement this request?
A. Quick Action
B. Validation Rule
C. Workflow Rule
D. Process Builder
Answer(s): D. Process Builder or Flow
Explanation: Process Builder (or Flow Builder, though Process Builder is standard for this context) is used to automate cross-object updates—specifically updating a parent record (Account) based on criteria evaluated on a child record (Contact). Workflow rules are restricted to updating fields on the same object, and validation rules only prevent saving rather than updating records.

100. Users at Cloud Kicks are reporting different options when updating a custom picklist on the Opportunity object based on the kind of opportunity.
Where should an administrator update the option in the picklist?
A. Related lookup filters
B. Fields and relationships
C. Record type
D. Picklist value sets
Answer(s): C. Record type
Explanation: Record types allow administrators to offer different picklist values for a single field depending on the specific business process or record type selected. If users see different options based on the "kind" of opportunity, those values are controlled and assigned via Record Types rather than global picklist value sets or standard field definitions.

101. The administrator at Ursa Major Solar has created a custom report type and built a report for the sales operations team. However, none of the users are able to access the report.
Which two options could cause this issue? (Choose two.)
A. The user's profile is missing View access.
B. The org has reached its limit for custom report types.
C. The custom report type is in development.
D. The report is saved in a private folder.
Answer(s): C. The custom report type is in development., D. The report is saved in a private folder.
Explanation: A custom report type status set to "In Development" restricts usage to administrators only until it is deployed to "In Deployment." Furthermore, if a report is saved in a private folder, other standard users cannot see or access it unless it is shared or located in a shared/public folder.

102. An administrator is building a Lightning app and sees a message that a My Domain must be set up first.
What should the administrator take into consideration when enabling My Domain?
A. The login for all internal and external users changes to the My Domain login.
B. The URL instance for a My Domain stays the same for every release.
C. A deployed My Domain is irreversible and renaming is unavailable.
D. Single sign-on must be disabled prior to implementing My Domain.
Answer(s): A. The login for all internal and external users changes to the My Domain login.
Explanation: Once My Domain is deployed, the login URLs for the organization change to use the chosen custom domain name for both internal and external users. While you cannot easily rename a domain after deployment without contacting support, you can make modifications, and single sign-on remains fully compatible and often required with custom domains.

103. The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases.
How should the screen flow be distributed?
A. Lightning Page
B. Home Page
C. Page Layout
D. Component Filter
Answer(s): A. Lightning Page
Explanation: To make a screen flow visible and interactive directly from a Case record page, an administrator must place the Flow component onto a Lightning Record Page using the Lightning App Builder. Page layouts handle traditional related lists and fields, not modern interactive screen flows.

104. Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on Pacific Time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support.
How should an administrator solve for this issue?
A. Create one set of business hours per time zone.
B. Adjust the current business hours to accommodate the Eastern Time Zone.
C. Set temporary business hours for each time zone.
D. Allow the reps to set business hours manually.
Answer(s): A. Create one set of business hours per time zone.
Explanation: Salesforce allows administrators to create multiple business hours records. To accommodate different regional operating schedules (such as Eastern Time vs. Pacific Time), separate business hours records should be created for each time zone and then assigned appropriately to cases or escalation rules.

105. Universal Containers is trying to improve the user experience when searching for the right status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on.
How should the administrator improve on the current implementation?
A. Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console.
B. Reduce the number of case status values to five.
C. Edit the status choices directly on the record type.
D. Review which status choices are needed for each record type and create support processes for each that is necessary.
Answer(s): D. Review which status choices are needed for each record type and create support processes for each that is necessary.
Explanation: Case status values are driven by Support Processes in Salesforce, which can then be mapped to specific Case Record Types. To display different subsets of status values depending on the type of case, the administrator needs to define distinct support processes for each requirement and link them to the appropriate record types.
106. Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals.
What should the administrator configure to help with these issues?
A. Einstein Opportunity Scoring
B. Einstein Lead Scoring
C. Einstein Search Personalization
D. Einstein Activity Capture
Answer(s): A. Einstein Opportunity Scoring
Explanation: Einstein Opportunity Scoring uses data-driven machine learning models to analyze a sales team's historical data and score open opportunities, helping reps easily identify and prioritize which deals are most likely to close. Lead scoring focuses on prospects before qualification, making opportunity scoring the correct tool for managing active deals.

107. Cloud Kicks wants to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal.
What feature should the administrator use to meet this requirement?
A. Queues
B. Stages
C. List Views
D. Splits
Answer(s): D. Splits
Explanation: Opportunity Splits allow organizations to share revenue or credit among opportunity team members based on defined percentages, perfectly matching the requirement to distribute credit according to each person's level of effort.
108.  Northern Trail Outfitters wants to update data with information from their data warehouse.

What should an administrator do to accomplish this?

A. Use a unique ID field to match records between the systems.
B. Use the data loader to match records between the systems.
C. Use an external ID field to match records between the systems.
D. Use an external object to match records between the systems.

Answer(s): C. Use an external ID field to match records between the systems.

Explanation: An external ID is a custom field that contains unique record identifiers from a system outside of Salesforce, making it specifically designed to match and upsert records between Salesforce and external data sources like a data warehouse. A unique ID field (A) ensures uniqueness within Salesforce only, Data Loader (B) is the tool used to perform the operation rather than the schema mechanism itself, and external objects (D) map to external data without necessarily importing or updating standard Salesforce records locally.


109. Northern Trail Outfitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly.

What should the administrator do to identify the problem?

A. Use the native debug feature in the Flow Builder.
B. View the setup audit trail and review for errors.
C. Set up email logs and review the send error logs.
D. Review debug logs with the flow logging level.

Answer(s):B & D

Explanation: To troubleshoot and identify issues within a Flow, administrators can use the built-in debugging tool in Flow Builder to step through the flow execution interactively (A) or set the appropriate logging levels for workflows and triggers to inspect detailed debug logs generated during runtime (D). Setup audit trails (B) track configuration changes rather than runtime execution errors, and email logs (C) only track email delivery.


110. A user at Northern Trail Outfitters is having trouble logging into Salesforce. The user’s login history shows that this person has attempted to log in multiple times and has been locked out of the organization.

Which two ways should the administrator help the user log into Salesforce? (Choose two.)

A. Log in as the user to unlock the user and reset the password.
B. Reset password on the user’s record detail page.
C. Use the unlock button on the user’s record detail page.
D. Reset the password policies to allow the user to login.

Answer(s):
B. Reset password on the user’s record detail page.
C. Use the unlock button on the user’s record detail page.

Explanation: When a user is locked out due to multiple failed login attempts, an administrator can directly restore access by clicking the unlock button on the user's record detail page or by initiating a password reset from the same page, which generates a temporary password and lifts the lockout. Logging in as the user (A) does not automatically clear the lockout status, and altering password policies (D) does not directly unlock an already locked user account.


111. Universal Container’s administrator has been asked to create a many-to-many relationship between two existing custom objects.

Which two steps should the administrator take when enabling the many-to-many relationship? (Choose two.)

A. Create two master-detail relationships on the new object.
B. Create two lookup relationships on the new object.
C. Create a junction with a custom object.
D. Create URL fields on a custom object.

Answer(s):
A. Create two master-detail relationships on the new object.
C. Create a junction with a custom object.

Explanation: To establish a many-to-many relationship between two objects in Salesforce, a junction custom object must be created (C). This junction object is then linked to both parent objects by creating two master-detail relationships on it (A), allowing it to bridge the data relationship between them.


112. The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is "Search Engine", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not "Search Engine", this picklist should be hidden.

How should the administrator complete this requirement?

A. Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is "Search Engine".
B. Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is "Search Engine".
C. Use an assignment element, one for when Lead Source is "Search Engine" and one for everything else.
D. Use a conditional filter in the screen element to only show "Specific Search Engine" field only when Lead Source is "Search Engine".

Answer(s): A. Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is "Search Engine".

Explanation: Screen components in Flow Builder support conditional visibility, allowing fields to appear or disappear dynamically based on values entered in preceding fields on the same screen (such as checking if the Lead Source equals "Search Engine"). Validation rules (B) are used for data entry validation on records, assignment elements (C) handle variable changes rather than screen layout visibility, and choice filters (D) restrict picklist choices rather than hiding the field container itself.


113. Cloud Kicks wants a report to categorize accounts into small, medium, and large based on the dollar value found in the Contract Value field.

What feature should an administrator use to meet this request?

A. Filter Logic
B. Detail Column
C. Group Rows
D. Bucket Column

Answer(s): D. Bucket Column

Explanation: A bucket column allows an administrator to quickly categorize and segment report data into custom ranges (such as small, medium, and large based on Contract Value) without needing to create a separate formula field on the object. Filter logic (A) defines how report filters interact, detail columns (B) display raw field data, and grouping rows (C) organizes report results hierarchically rather than creating custom metric ranges.


114. An administrator at Ursa Major Solar just learned about the AppExchange and how helpful it can be to the company's business.

Which two actions can be accomplished via the AppExchange? (Choose two.)

A. Download standard Lightning components.
B. Find certified developers and consultants.
C. Download the Dataloader data tool.
D. Install industry-specific solution templates.

Answer(s):
B. Find certified developers and consultants.
D. Install industry-specific solution templates.

Explanation: The Salesforce AppExchange is a marketplace where administrators can find pre-built solutions, industry-specific templates (D), and connect with certified consultants and developers (B) to extend their org. Standard Lightning components (A) are built into the platform, and Data Loader (C) is downloaded directly from Setup within Salesforce rather than the public AppExchange marketplace.

115.  An administrator creates a custom text area field on the Account object and adds it to the service team's page layout. The service team manager loves the addition of this field and wants it to appear in the highlights panel so that the service reps can quickly find it when on the Account page.

How should the administrator accomplish this?

A. Create a new page layout and a new section titled Highlights Panel.

B. Make the field required and move it to the top of the page.

C. In the Account object manager, create a custom compact layout.

D. From the page layout editor, drag the field to the highlights panel.

Answer(s): D

Explanation:
When a flow is launched by a process (Process Builder/Flow triggered), the most effective way to troubleshoot is to capture platform debug logs and set the “Workflow/Flow” logging level to finest. This shows the flow interview steps, variable values, and faults as it executes under automation.
A (Flow Builder’s Debug) is great for screen or autolaunched flows you run directly, but it won’t replicate being invoked by a process under another user/context or with record-trigger timing.
B (Setup Audit Trail) tracks admin changes, not runtime failures.
C (Email logs) only helps with email delivery issues, not flow logic.

116. Northern Trail Outfitters has requested that when the Referral Date field is
updated on the custom object Referral Source, the parent object Referral also
needs to be updated.

Which automation solution should an administrator use to meet this request?

A. Process Builder

B. Workflow Field Update

C. Lightning Web Component

D. Approval Process

Answer(s): A

Explanation:
Process Builder (or flows) can update fields on related parent records across a child-to-parent relationship. Workflow rules (Option B) are limited to updating fields only on the same record or its parent via master-detail relationship fields, but for complex cross-object updates or custom objects in general, Process Builder/Flow is the correct declarative tool. Options C and D are a custom code component and an approval routing tool, respectively, making them inappropriate for simple field-update automations.


117. Northern Trail Outfitters wants to use Contact Hierarchy in its org to display
Contact association.

What should the administrator take into consideration regarding the Contact
Hierarchy?

A. Contact Hierarchy is limited to only
display 3,000 contacts at one time.

B. Sharing settings are ignored by contacts displayed in the Contact Hierarchy.

C. Contacts displayed in the Contact Hierarchy are limited to record-level
access by user.

D. Customizing hierarchy columns changes the Recently Viewed Contacts list
view.

Answer(s): C

Explanation:
Contacts displayed in the Contact Hierarchy respect the running user's record-level sharing access (meaning users will only see contacts in the hierarchy that they have permissions to view). Sharing settings are enforced rather than ignored (making B incorrect), and the hierarchy columns do not affect the Recently Viewed list view (making D incorrect).


118. AW Computing needs to capture a loss reason in a rich text field when an
opportunity is closed lost.

How should an administrator configure this requirement?

A. Create a validation rule to display an
error if stage is closed lost and Loss Reason is blank.

B. Configure a workflow rule to display an error if Loss Reason is blank.

C. Select the required checkbox next to the Loss Reason field on the page
layout

D. Check the required checkbox on the Loss Reason field in Object Manager.

Answer(s): A

Explanation:
Rich text fields cannot be marked as universally required directly at the field definition level in the Object Manager (ruling out Option D). To enforce that a field is filled out conditionally (only when an opportunity hits a specific stage like "Closed Lost"), a validation rule must be used to evaluate the criteria and throw an error if the field is blank (Option A). Workflow rules cannot display validation errors (Option B), and page-layout level requirement settings can be easily bypassed (Option C).

119. An administrator needs to create a one-to-many relationship between two objects
with limited access to child records.

What type of field should the administrator use?

A. Lookup field

B. Cross object formula

C. Roll-up summary

D. Master-detail field

Answer(s): D

Explanation:
A master-detail relationship establishes a parent-child connection where the security and access of the child records are strictly controlled by the parent record (i.e., sharing is inherited from the parent, providing limited/controlled access based on parent ownership). A lookup relationship (Option A) allows for looser, independent security access. Roll-up summaries (Option C) are calculation fields, and cross-object formulas (Option B) pull data across relationships rather than establishing them.


120. Northern Trail Outfitters wants to know the average stage duration for all
closed opportunities.

How should an administrator support this request?

A. Refresh weekly reporting snapshots for
Closed Opportunities.

B. Use Process Builder to capture the daily average on each Opportunity.

C. Run the Opportunity Stage Duration report.

D. Add formula fields to track Stages on each Opportunity.

Answer(s): C

Explanation:
Salesforce provides standard analytical tools out of the box, including the built-in Opportunity Stage Duration report, which tracks how long opportunities spend in each stage. Building custom automation or formula fields (Options B and D) or setting up reporting snapshots (Option A) is unnecessary and redundant because the standard report natively supports tracking stage durations.


121. The administrator has created new users for ten new employees at Northern Trail
Outfitters.

Why are these users unable to access the account object in the Salesforce org?

A. Users’ profile requires permission to the Account object.

B. Users’ profile requires a sharing rule for Accounts.

C. Users’ roles are low on the role hierarchy.

D. Organization-wide defaults are set to private.

Answer(s): A

Explanation:
Object-level security is governed primarily by user profiles or permission sets. If new users cannot access the Account object entirely, it means their profile lacks "Read," "Create," etc., permissions for the Account object. Sharing rules, role hierarchies, and OWD (Options B, C, and D) control record-level visibility, not whether the tab or object is fundamentally accessible to the user profile.

122. Universal Containers has enabled Data Protection and Privacy for its org.

Which page layouts will have the Individual field available for tracking data
privacy information?

A. Case and Opportunity

B. Contact, Lead, and Person Account

C. Individual, User, and Account

D. Account and User

Answer(s): B

Explanation:
In Salesforce, the Data Protection and Privacy features are designed to track data subject information (GDPR/CCPA compliance) primarily on objects that represent individual people. The Individual field maps to Contact, Lead, and Person Account records to associate them with an Individual record.


123. The administrator at Universal Containers wants to add branding to Salesforce.

Which two considerations should the administrator keep in mind? (Choose two.)

A. Up to 150 custom themes can be created,
modified, or cloned from the built-in themes.

B. Only one theme can be active at a time, and a theme applies to the entire
org.

C. Themes apply to Salesforce Classic and to the Salesforce mobile app.

D. Chatter external users see the built-in Lightning blue theme only.

Answer(s): B, D

Explanation:
Salesforce allows customization of themes (Lightning Experience Branding), where only one theme can be active at a time for the entire organization. Additionally, Chatter external users are restricted to seeing only the default built-in Lightning blue theme. Theme counts or applicability to Classic/mobile app (Options A and C) are inaccurate since themes are specifically built for Lightning Experience, not Salesforce Classic.


124. The support manager at Cloud Kicks wants to respond to customers as quickly as
possible. They have requested that the response include the top five
troubleshooting tips that could help solve the customer's issue.

What should the administrator suggest to meet these requirements?

A. Auto-Response Rules

B. Assignment Rules

C. Knowledge Articles

D. Email Alerts

Answer(s): C

Explanation:
Salesforce Knowledge allows companies to create, manage, and share articles containing troubleshooting tips, resolutions, and FAQs that support reps can quickly reference or send to customers. Auto-response rules (Option A) send automated template emails based on criteria, assignment rules (Option B) route records, and email alerts (Option D) send messages, but none of these natively store and curate troubleshooting tip content like Knowledge Articles.


125. The administrator at Cloud Kicks has been asked to change the company’s Shoe
Style field to prevent users from selecting more than one style on a record.

Which two steps should an administrator do to accomplish this? (Choose two.)

A. Change the field type from a multi-select picklist field to a picklist field.

B. Back up the Shoe Style values in existing records.

C. Select the “Choose only one value” checkbox on the picklist field.

D. Reactivate the appropriate Shoe Style values after the field type changes.

Answer(s): A, B

Explanation:
To change a field that permits multiple selections into one that restricts users to a single selection, the administrator must change the field type from a multi-select picklist to a standard picklist (Option A). Because converting a multi-select picklist to a standard picklist causes Salesforce to clear out existing values on current records, backing up the data beforehand is critical (Option B). There is no "Choose only one value" checkbox option (Option C), and changing types doesn't automatically deactivate values requiring reactivation (Option D).


126. Northern Trail Outfitters wants to encourage employees to choose secure and
appropriate passwords for their Salesforce accounts.

Which three password policies should an administrator configure? (Choose
three.)

A. Password complexity requirements

B. Maximum invalid login attempts

C. Prohibited password values

D. Number of days until expiration

E. Require use of Password Manager App

Answer(s):
A, C, D

Explanation:
Standard Salesforce security settings under Password Policies allow administrators to configure complexity requirements (Option A), restrict specific terms using prohibited password values (Option C), and set expiration timeframes like number of days until expiration (Option D). Maximum invalid login attempts (Option B) belongs to lock-out settings rather than password policies, and native password manager app enforcement (Option E) is not a standard configurable policy field.



127. The VP of sales at DreamHouse Realty has requested a dashboard to visualize
enterprise sales across the different teams. The key piece of data is the total
of all sales for the year and the progress to the enterprise sales goal.

What dashboard component will effectively show this number and the proximity to
the total goal as a single value?

A. Gauge

B. Donut

C. Table

D. Stacked Bar

Answer(s): A

Explanation:
A gauge dashboard component is specifically designed to display a single summary value against a defined range or target goal (such as progress toward an annual sales goal). Donut charts (Option B) show proportions of a whole, tables (Option C) display row-level matrix data, and stacked bars (Option D) compare grouped totals across multiple categories, none of which serve as a single-value target-tracking metric like a gauge.

128.  The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose.
How should an administrator configure this requirement?

A. Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule.
B. Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry.
C. Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule.
D. Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry.

Answer(s): D
Explanation: Case auto-response rules allow an organization to automatically send email responses to cases based on specific criteria (such as case priority). Salesforce allows only one active case auto-response rule at a time, but that single rule can contain multiple rule entry criteria (up to three or more in this scenario) to handle different filters and assign different email templates. Option D is correct because it uses a single auto-response rule with multiple entries. Option A is incorrect because workflow rules for cases aren't typically used for sending web-generated customer auto-responses in this manner, and an object can only have one active auto-response rule (making option B incorrect since it suggests creating three separate auto-response rules). Option C is incorrect because assignment rules route cases to users or queues, not send automated customer response emails.


129. The Ursa Major Solar administrator is editing the page layout for a new custom object. A text area field is accidentally removed from the page layout, and it needs to be restored to the page layout.
Which are two methods for achieving this goal? (Choose two.)

A. Restore from the recycle bin within 15 days.
B. From the fields palette, drag the field into the same position.
C. Restore original page layout from a sandbox.
D. Clone the layout from a different profile and use save as.

Answer(s): B, C

Explanation: When a field is removed from a page layout, it is only removed from that specific layout view—it is not deleted from the object itself. Therefore, the field remains available in the fields palette at the top of the page layout editor, allowing an administrator to simply drag it back into position (Option B). Alternatively, an administrator can refresh or restore the original page layout configuration from a sandbox or use a saved version/template (Option C). Option A is incorrect because removing a field from a page layout does not send it to the recycle bin (deleting the actual field definition would, but even then, custom fields are only in the recycle bin temporarily). Option D is incorrect because cloning a layout from a different profile and saving it does not inherently restore an accidentally deleted field layout unless that layout already had it, and it's not a standard direct restoration method.


130. DreamHouse Realty has an approval process. A manager attempts to approve the record but receives an error.
What should the administrator review to troubleshoot this request?

A. Update the field-level security to view on fields that are updated in the process.
B. Review the page layout to ensure the fields updated in the process are visible.
C. Add a delegated approver for the next approver in the process.
D. Check if the user in the next approver is inactive or missing.

Answer(s): D

Explanation: When an approver receives an error while trying to approve a record in an approval process, it is frequently because the next designated approver step cannot resolve properly—often because the user is inactive, has been deleted, or the specified queue/user field is blank or missing. Option D directly addresses this common troubleshooting step. Options A and B relate to field visibility and layout permissions, which generally cause errors during record creation or field updates rather than blocking an approval action itself due to a missing target user. Option C is a proactive configuration step rather than a troubleshooting review item for resolving an immediate approval error.


131. Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations.
Which two tools should an administrator use to build this solution? (Choose two.)

A. Flow Builder
B. Approval Process
C. Validation Rule
D. Quick Action

Answer(s): A, B


Explanation: Flow Builder (Option A) is the primary declarative tool in Salesforce used to build guided, step-by-step screens that walk users through complex processes like submitting an expense report. Approval Process (Option B) is used to handle routing, authorization, and managerial sign-offs once the expense report has been submitted. Option C (Validation Rule) only restricts data entry based on criteria and does not guide users or handle routing. Option D (Quick Action) provides a shortcut to create records or launch a flow, but it is not a complete solution for guiding multi-step routing and authorizations on its own.


132. Ursa Major Solar classifies its accounts as Silver, Gold, or Platinum Level. When a new case is created for a Silver or Gold partner, it should go to the Regular Support Queue. When an account is Platinum Level, it should automatically go to the Priority Support Queue.
What should the administrator use to achieve this?

A. Workflow Rules
B. Case Rules
C. Assignment Rules
D. Escalation Rules

Answer(s): C


Explanation: Case Assignment Rules allow administrators to define conditions (such as account level being Silver, Gold, or Platinum) to automatically route incoming cases to specific users or queues (such as the Regular Support Queue or Priority Support Queue). Option C is correct. Workflow rules (Option A) automate tasks, field updates, and emails, but they do not dynamically route records to queues based on criteria. Escalation rules (Option D) are used to escalate cases that remain unresolved after a certain period, and "Case Rules" (Option B) is a distractor term.
133. When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity.
Which two automation tools should an administrator use to accomplish this request? (Choose two.)

A. Approval Process
B. Flow Builder
C. Workflow Rule
D. Process Builder

Answer(s): B, D


Explanation: To automatically create related records (like a renewal opportunity when an opportunity closes), Salesforce relies on record-triggered automation tools capable of creating records. Flow Builder (Option B) and Process Builder (Option D) are the declarative automation tools designed to handle record creation actions automatically behind the scenes. Option A (Approval Process) is strictly used for routing records for human sign-off/authorization. Option C (Workflow Rule) can send emails, post to Chatter, and update fields on the same record or parent record, but it cannot create new unrelated or related records like a new opportunity.


134.  Cloud Kicks has the organization-wide defaults for Opportunity set to Private.
Which two features should the administrator use to open up access to opportunity records for sales users working on collaborative deals? (Choose two.)

A. Sharing set
B. Role hierarchy
C. Profiles
D. Sharing rules

Answer(s): B, D


Explanation: When organization-wide defaults are set to Private, access can be selectively opened up vertically using the role hierarchy (Option B) to grant managers access to subordinates' records, and horizontally using sharing rules (Option D) to share records based on criteria or record owner to teams or public groups working on collaborative deals. Option A (Sharing set) is used for sharing records with external users in Customer Communities via sharing sets, not for internal sales users. Option C (Profiles) controls object permissions (create, read, edit, delete) rather than opening record-level access for specific private records.


135. The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to ‘Audited’, they would like the system to automatically update the Audited Date field on the account with today’s date.
Which tool should the administrator use to complete this automation?

A. Formula Field
B. Validation Rule
C. Approval Process
D. Flow Builder

Answer(s): D


Explanation: Flow Builder (Option D) is the modern declarative tool used to perform automated field updates and record modifications based on trigger criteria, such as updating a date field when an account status changes. Option A (Formula Field) calculates values dynamically on the fly rather than writing a permanent static date value to a database field. Option B (Validation Rule) checks data for errors and stops saves; it cannot update field values. Option C (Approval Process) is used for routing records through human approval chains, which is far too complex and unnecessary for a simple status-based field update.




137. Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow.
How should the administrator address this issue?

A. Create a permission set to allow users to bypass the error.
B. Use a fault connector and display a screen with text explaining what went wrong and how to correct it.
C. Uncheck the End User Flow Errors box in Setup.
D. Remove validation rules so that the users are able to proceed without complete records.

Answer(s): B


Explanation: In Flow Builder, a fault connector (Option B) can be used to catch runtime errors (such as unhandled exceptions or failed database operations due to missing data) and route the user to a custom error screen that clearly explains what went wrong and how to correct it. Option A is incorrect because permission sets control feature and object access, not flow runtime errors. Option C is incorrect because hiding error notifications doesn't solve the underlying UX problem. Option D is incorrect because validation rules ensure data integrity and should not be blindly removed.




139. A sales rep has a list of 300 accounts with contacts that they want to load at one time.
Which tool should the administrator utilize to import the records to Salesforce?

A. Dataloader.io
B. Manual Import
C. Data Import Wizard
D. Data Loader

Answer(s): C


Explanation: The Data Import Wizard (Option C) is built directly into the Salesforce UI and is ideal for straightforward imports of up to 50,000 records. It uniquely supports importing related standard objects together in a single pass, such as accounts and contacts (as specified in the prompt). Option D (Data Loader) is an external client application better suited for massive volumes (up to 5 million records) or complex objects, and it requires separate CSV files for accounts and contacts rather than importing them simultaneously like the Wizard.


140. The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup.
Which scenario could prevent the administrator from fulfilling this requirement?

A. The lookup field is required for saving records.
B. The lookup field in all the records contains a value.
C. Roll-up summary fields exist on the master object.
D. A junction object is required to support the lookup.

Answer(s): C


Explanation: A master-detail relationship allows for roll-up summary fields to be calculated on the parent (master) object based on child records. If roll-up summary fields exist on the master object, Salesforce will prevent you from changing the relationship type to a lookup until those roll-up summary fields are deleted, because lookup relationships do not support roll-up summaries. Options A, B, and D do not represent structural constraints that block changing a master-detail relationship to a lookup.

141.  Cloud Kicks has the organization-wide sharing default set to private on the Shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team.
Which three items should the administrator configure to provide appropriate access to the report? (Choose three.)

A. Custom Report Type
B. Folder Access
C. Field-Level Security
D. Report Subscription
E. Role Hierarchy

Answer(s):
A. Custom Report Type
B. Folder Access
E. Role Hierarchy

Explanation:
To allow the sales manager to view a report containing records for their team members when sharing is private, the administrator must configure a Custom Report Type to structure the data appropriately, grant Folder Access so the manager can actually see and open the report folder, and utilize the Role Hierarchy to implicitly grant record-level access upward from the sales reps to their manager. Field-Level Security controls visibility to specific fields rather than record access or report availability, and a Report Subscription is used to schedule and email reports rather than grant viewing permissions.


142. Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs.
Which two options should the administrator suggest? (Choose two.)

A. Test Drive in a production org.
B. Check edition compatibility.
C. Install in a sandbox.
D. Download into a Trailhead Playground.

Answer(s):
B. Check edition compatibility
C. Install in a sandbox

Explanation:
Checking edition compatibility ensures that the Salesforce edition supports the app before attempting deployment. Installing the app in a sandbox is the safest and most effective method to fully test functionality without impacting production data or configurations. A Test Drive allows previewing apps using sample data (often with restricted configurations), while Trailhead Playgrounds are separate training environments that do not mirror a company's production setup or customizations.


143. The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management.

What case management tools need to be utilized for this requirement?

A. Auto-response rules, Entitlements, Queues
B. Auto-response rules, Support Processes, Escalation Rules
C. Auto-response rules, Queues, formulas
D. Auto-response rules, Support Processes, Entitlements

Answer(s):
B. Auto-response rules, Support Processes, Escalation Rules

Explanation:
Auto-response rules are required to send immediate email acknowledgments based on criteria like the Case Reason. Queues or assignment rules handle assignment, but looking at the options, Support Processes manage the lifecycle stages (such as the "New" status), and Escalation Rules automatically route and escalate cases if they remain in a specific status after a set timeframe (such as 4 hours).

144. An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records.
What should the administrator do to meet this requirement?

A. Create and assign a custom profile with Delete access removed for each object.
B. Create and assign a permission set that includes Read, Create, and Edit access.
C. Assign the standard System Administrator profile to the analytics user.
D. Give the user View All access and assign them to the highest role in the role hierarchy.

Answer(s):
A. Create and assign a custom profile with Delete access removed for each object.

Explanation:
To restrict Delete access (which is often enabled by default on standard profiles), the administrator must create and assign a custom profile where the Delete permission is explicitly unchecked for the necessary objects. Permission sets only extend permissions and cannot remove object permissions like Delete if they are already granted by a profile. Assigning the System Administrator profile grants full administrative power including deletion, and View All with the role hierarchy only affects record visibility rather than object-level CRUD (Create, Read, Update, Delete) permissions.


145. An administrator has been asked to change the data type of an auto number to a text field.
What should the administrator be aware of before changing the field?

A. Existing Auto Number field to Text is prevented.
B. Existing field values will be deleted.
C. Existing field values will be converted.
D. Existing field values will remain unchanged.

Answer(s):
D. Existing field values will remain unchanged.

Explanation:
Changing an Auto Number data type to a Text field allows the conversion to proceed without losing data; the existing auto number values will remain unchanged as text strings in the records. Subsequent records will no longer auto-number unless populated manually or via automation, but historical values stay intact.


146. At Universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well.
Which are two considerations for enabling this functionality? (Choose two.)

A. An administrator needs to create a group to enable record sharing.
B. The Add Record action must be configured in the group publisher.
C. Collaboration groups are created automatically for every department.
D. Object layouts should be configured to include the groups related list.

Answer(s):
B , D

Explanation:
To use Salesforce Chatter groups for record sharing and collaboration, an administrator must first create a group and enable customer/record sharing settings on it. Additionally, the groups related list needs to be added to the relevant object layouts so users can see which groups are associated with specific records. The "Add Record" action appears automatically when record sharing is enabled on a group, and groups are never created automatically for departments.


147. The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified.
What tool should the administrator use to fulfill this request?

A. Lead Conversion
B. Workflow Rule
C. Require Field
D. Validation Rule

Answer(s):
D. Validation Rule

Explanation:
A Validation Rule evaluates a condition upon record save and displays an error if the criteria are not met, making it the perfect tool to enforce that the Budget field is populated whenever someone attempts to change the Lead Status to qualified. Making a field globally required via page layouts or field properties enforces it everywhere rather than specifically targeting the transition to the "qualified" status.




149. Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain.
What type of relationship should the administrator make between Shipments and Accounts?

A. Accounts should have a master detail to Shipments.
B. Shipments should have a master detail to Accounts.
C. Accounts should have a lookup to Shipments.
D. Shipments should have a lookup to Account.

Answer(s):
D. Shipments should have a lookup to Account.

Explanation:
To display related child records on a parent Account page while ensuring that child records remain if the parent Account is deleted, a Lookup relationship must be created on the child object (Shipments) pointing to the parent object (Account). A Master-Detail relationship would cascade deletions (deleting the Account deletes all shipments) and automatically makes the detail record dependent on the master.


150. An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app.
Which two types of pages could an administrator build and customize using the Lightning App Builder? (Choose two.)

A. App page
B. Record page
C. User page
D. Dashboard page

Answer(s):
A. App page
B. Record page

Explanation:
The Lightning App Builder allows administrators to build custom App pages (home/landing pages) and Record pages (custom layouts for specific object records) that can be optimized for both desktop and the Salesforce mobile app. "User page" and "Dashboard page" are not configurable page types within the Lightning App Builder.


151. DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year.
Which AppExchange Item should help the administrator meet the request?

A. Lightning Community
B. Lightning Data
C. Flow Solutions
D. Bolt Solutions

Answer(s):
D. Bolt Solutions

Explanation:
Salesforce Bolt Solutions are pre-built templates and solutions on the AppExchange (such as industry-specific portals and automated workflows with calculators) designed to accelerate implementations quickly and cost-effectively, fitting the strict 30-day timeline and budget constraints. Lightning Communities focus on digital experiences, Lightning Data provides external data feeds, and Flow Solutions are focused on standalone automations rather than full end-to-end templated business processes.




157. At Ursa Major Solar, a flow is in place that sends a reminder email 30 days before the warranty expiration date. A customer renews their warranty for another three years.
What is the expected behavior of the email element in the flow?

A. The email is not sent because the customers email address was missing.
B. The email is locked in the job queue until it meets the criteria.
C. The email is not sent because the record no longer meets the criteria.
D. The email is sent with the 30 day reminder criteria.

Answer(s):
C. The email is not sent because the record no longer meets the criteria.

Explanation: Scheduled paths or time-based actions in flows re-evaluate the record's criteria when the scheduled time is reached. Because the customer renewed their warranty for another three years, the target date for the 30-day reminder has shifted significantly into the future, meaning the record no longer meets the specific trigger criteria for that scheduled action, causing it to cancel or drop out.


158. Northern Trail Outfitters wants to encourage employees to choose secure and appropriate passwords for their Salesforce accounts.
Which three password policies should an administrator configure? (Choose three.)

A. Password complexity requirements
B. Maximum invalid login attempts
C. Prohibited password values
D. Number of days until expiration
E. Require use of Password Manager App

Answer(s):
A. Password complexity requirements
C. Prohibited password values
D. Number of days until expiration

Explanation: Complexity requirements (A), prohibited dictionary/historical values (C), and expiration intervals forcing regular updates (D) directly govern password composition strength and security policies. Option B deals with account lockouts due to failed logins rather than encouraging password choice, and option E is not a standard built-in profile/security password policy setting in Salesforce.


159. An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network.
What are two considerations for this configuration? (Choose two.)

A. Assign single sign-on to a permission set to allow users to log in when outside the network.
B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.
C. IP address restrictions are set on the profile or globally for the org.
D. Restrict U2F Security Keys on the user's profile to enforce login hours.

Answer(s):
B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.
C. IP address restrictions are set on the profile or globally for the org.

Explanation: IP restrictions can be applied globally via Network Access settings or granularly on individual user profiles. To ensure that users cannot bypass these once logged in (e.g., if their session token is compromised or used elsewhere), "Enforce Login IP Ranges on Every Request" must be enabled. Options A and D introduce unrelated concepts (SSO permission sets and U2F keys for login hours).


160. Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months.
How should the administrator address this requirement?

A. Set the Fiscal Year to Custom and the duration to 4 quarters.
B. Set the Fiscal Year to Standard and the duration to 12 months.
C. Set the Fiscal Year to Standard and the starting month as February.
D. Set the Fiscal Year to Custom and the starting month as February.

Answer(s):
C. Set the Fiscal Year to Standard and the starting month as February.

Explanation: When a fiscal year lasts 12 months but simply starts on a month other than January, it is classified as a Standard Fiscal Year where you only need to specify the starting month. Custom fiscal years are used when the year is broken down into unusual custom periods (like 4-4-5 structures) rather than standard calendar months.


161. The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign.
Which two solutions should the administrator use to modify the picklist field values? (Choose two.)

A. Add the Campaign Member Statuses related list to the Page Layout.
B. Mass modify the Campaign Member Statuses related list.
C. Edit the picklist values for the Campaign Status in Object Manager.
D. Modify the picklist value on the Campaign Member Statuses related list.

Answer(s):
C. Edit the picklist values for the Campaign Status in Object Manager.
D. Modify the picklist value on the Campaign Member Statuses related list.

Explanation: Campaign Member Status values can be managed globally as default values through the Object Manager or customized specifically per campaign via the Campaign Member Statuses related list on individual campaign records. Options A and B do not provide functionality to add or alter actual picklist values.


162. The administrator at Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted a case to the administrator indicating that the new field is unavailable.
Which two steps should an administrator do to troubleshoot this issue? (Choose two.)

A. Review the field-level security of the field for the user profile.
B. Run the setup audit trail for the organization.
C. Ensure that the page layout for the user's profile has been updated.
D. Update the organization-wide defaults for the object.

Answer(s):
A. Review the field-level security of the field for the user profile.
C. Ensure that the page layout for the user's profile has been updated.

Explanation: Visibility of a newly created field is governed primarily by Field-Level Security (FLS), which controls whether a profile can read or edit the field, and Page Layouts, which dictate whether the field is physically placed on the user's viewable record layout. Audit trails (B) track administrative setup changes rather than fixing field visibility, and ODWs (D) control record-level sharing, not field-level column visibility.


163. Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors.
Which two tools should an administrator configure? (Choose two.)

A. Quick Action
B. Outbound Message
C. Email Alert Action
D. Approval Process

Answer(s):
B. Outbound Message
D. Approval Process

Explanation: An Approval Process satisfies the requirement for management and directorial review steps. An Outbound Message can be used as an automated action triggered upon final approval to securely send data to an external HR system without needing custom code. Quick Actions and Email Alerts do not natively provide multi-tiered review workflows or direct secure system-to-system messaging payloads.


164. Northern Trail Outfitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly.
What should the administrator do to identify the problem?

A. Use the native debug feature in the Flow Builder.
B. View the setup audit trail and review for errors.
C. Set up email logs and review the send error logs.
D. Review debug logs with the flow logging level.

Answer(s):
D. Review debug logs with the flow logging level.

Explanation: Because the flow is launched automatically by a process (background trigger context), it cannot be interactively debugged using the manual Flow Builder debug canvas which requires user input. Instead, an administrator must generate and analyze system debug logs with proper fine-tuned logging levels (setting Workflow/Flow to FINEST/INFO) to trace the execution path and pinpoint errors.


165.  Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting.
What should the administrator create to meet this request?

A. Chatter Unlisted Group
B. Chatter Broadcast Group
C. Chatter Recommendations
D. Chatter Stream
Show Suggested Answer

Answer(s): B. Chatter Broadcast Group

Explanation: A Chatter Broadcast Group allows only the owner and managers of the group to post updates, while other members can only read and comment on those posts. This directly satisfies the requirement for the employee engagement committee to post updates while restricting general employees from posting. Unlisted groups allow all members to post, recommendations suggest groups to join, and streams combine feeds from multiple sources.


166. Once an opportunity reaches the negotiation stage at Cloud Kicks, the Amount field becomes required for sales users. Sales managers need to be able to move opportunities into this stage without knowing the amount.
How should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?

A. Create a formula field to fill in the field for managers.
B. Configure a validation rule to meet the criteria.
C. Assign the Administrator profile to the managers.
D. Make the field required for all users.
Show Suggested Answer

Answer(s): B. Configure a validation rule to meet the criteria.

Explanation: A validation rule can be written with conditional logic (using functions like AND, ISPICKVAL, and checking the user profile or role) to enforce that the Amount field is populated when the stage is set to Negotiation, but exempt sales managers from this rule. Making it required globally or assigning the full Administrator profile would either block managers or give them excessive permissions.


167. Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage.
Which three options should the administrator use to address this need? (Choose three.)

A. Use Flow to mark fields required.
B. Configure Opportunity Path.
C. Mark fields required on the page layout.
D. Use validation rules.
E. Enable guided selling.
Answer(s): B, D, E

Explanation: Options A, B, and D provide stage-specific guidance and enforcement. Opportunity Path highlights key fields for specific stages, Flows can dynamically enforce required fields based on criteria, and Validation Rules can block progression if necessary fields are empty. Marking fields required directly on the page layout (Option C) makes them mandatory universally at all times, which is too rigid for multi-stage sales processes.


168. Management at Universal Containers would like to share dashboard components with their team in Chatter but currently do not have access to this capability.

How should the administrator make this functionality available to management?

A. Select Download Chart on the component.
B. Enable dashboard feed tracking.
C. Enable reporting snapshots.
D. Set View Dashboard As to the dashboard viewer.

Answer(s): B. Enable dashboard feed tracking.


Explanation: Enabling feed tracking for dashboards allows users to post dashboard components directly to Chatter feeds and engage in discussions about specific data snapshots. Reporting snapshots track historical data over time, downloading charts is a manual export option, and setting the dashboard viewer controls data visibility rather than social sharing features.

169. The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases.
How should the screen flow be distributed?

A. Lightning Page
B. Home Page
C. Page Layout
D. Component Filter

Answer(s): A. Lightning Page


Explanation: To make a screen flow visible and accessible directly from a Case record, the flow must be added to a Lightning Record Page using the Flow component in the Lightning App Builder. Page layouts support visualforce or custom buttons/links rather than modern embedded screen flows.


170. Cloud Kicks’ executives have noticed the Opportunity Expected Revenue field displays incorrect values.
How should the administrator correct this?

A. Update the expected revenue associated with the stage.
B. Adjust the forecast category associated with the stage.
C. Modify the closed won value associated with the stage.
D. Change the probability associated with the stage.

Answer(s): D. Change the probability associated with the stage.


Explanation: Expected Revenue on an opportunity is calculated automatically by multiplying the Opportunity Amount by the Probability percentage assigned to the current sales stage. Therefore, correcting the stage probability will automatically fix the resulting expected revenue values.


171. The administrator at Ursa Major Solar wants to add prepopulated subjects for Tasks and Events. Tasks should have the subjects Schedule Site Visit, and Send Contract, while Events should have the subjects Site Visit and Ride Along.
How can this requirement be configured?

A. Add Schedule Site Visit and Send Contract picklist values for the Task subject field. Add Site Visit and Ride Along picklist values for Event subject field.
B. Create a new custom Subject picklist field on Activity and add the field values.
C. Add the new values to the predefined field values for the global actions New Event and New Task.
D. Include Schedule Site Visit, Send Contract, Site Visit, and Ride Along picklist values for the Activity subject field.

Answer(s): C. Add the new values to the predefined field values for the global actions New Event and New Task.


Explanation: Predefined field values on global quick actions for New Task and New Event allow administrators to specify default values (such as prepopulated subjects) specifically tailored when creating tasks versus events. Standard subject picklists are shared across activities or depend on global action layouts depending on configuration context.


172. Users at DreamHouse Realty are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time.
How should an administrator create the dashboard without changing any sharing settings?

A. Add a filter to the dashboard to filter the opportunities by owner role.
B. Update the dashboard folder settings to manager for the sales reps role.
C. Create a dashboard with the running user set as someone who can see all opportunities.
D. Build individual dashboards for profiles that need to see the enterprise results.

Answer(s): C. Create a dashboard with the running user set as someone who can see all opportunities.


Explanation: Setting the dashboard's running user to someone with organization-wide visibility (like a system administrator or sales VP) allows the dashboard to aggregate and display all open pipeline opportunities based on that user's security context, bypassing individual viewing restrictions without altering underlying sharing rules.


173. At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task.
What should the administrator use to deliver this requirement?

A. Approval Process
B. Formula Field
C. Flow Builder
D. Prebuilt Macro

Answer(s): C. Flow Builder


Explanation: Flow Builder is a robust automation tool capable of evaluating conditions (such as an opportunity stage changing to Closed Won), querying related opportunity product records, and updating their discount fields automatically. Formulas are read-only and cannot write values to fields, approval processes are meant for record sign-offs, and macros are user-driven productivity tools rather than automated background data updaters.

174.  The administrator at Cloud Kicks has been asked to change the company’s Shoe Style field to prevent users from selecting more than one style on a record.
Which two steps should an administrator do to accomplish this? (Choose two.)

A. Change the field type from a multi-select picklist field to a picklist field.
B. Back-up the Shoe Style values in existing records.
C. Select the “Choose only one value” checkbox on the picklist field.
D. Reactivate the appropriate Shoe Style values after the field type changes.

Answer(s): A, B

Explanation: When changing a field type from a multi-select picklist to a standard picklist, Salesforce clears out the stored data on existing records because a single-select picklist cannot handle multiple stored values. Therefore, backing up the existing data (Option B) and changing the field type (Option A) are the necessary steps, whereas the other choices are incorrect or describe non-existent settings.


175. Cloud Kicks wants to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal.
What feature should the administrator use to meet this requirement?

A. Queues
B. Stages
C. List Views
D. Splits

Answer(s): D. Splits


Explanation: Opportunity Splits allow administrators to distribute revenue or credit among opportunity team members based on their contributions or level of effort toward closing a deal. Queues manage unassigned records, stages track sales pipeline progression, and list views filter data.


176. An administrator at Northern Trail Outfitters is creating a validation rule.
Which two functions should the administrator use when creating a validation rule? (Choose two.)

A. Rule active date
B. Error message location
C. Error condition formula
D. Formula return type

Answer(s): B, C


Explanation: A validation rule configuration requires an error condition formula to evaluate when data is invalid, and an error message location (specifying whether the error appears at the top of the page or next to a specific field). Validation rules evaluate as boolean true/false and do not use custom formula return types or individual active date windows.

177. Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation.
Which feature should an administrator use to fulfill this requirement?

A. Formula field
B. Omni-Channel Supervisor
C. Case Escalation Rule
D. Assignment Rule

Answer(s): C. Case Escalation Rule


Explanation: Case Escalation Rules automatically route and notify managers or other users when cases remain unresolved or unacknowledged for a specific period (such as 2 hours after creation) using business hours and age triggers. Assignment rules handle initial ownership routing, while formula fields compute values and Omni-Channel supervisor monitors real-time agent capacity.


178. Is possible to view a forecast based on all of the following EXCEPT:

A. Territory
B. Product Family
C. Date Range
D. Sales Team

Answer(s): D. Sales Team


Explanation: Salesforce Forecasts can be configured using standard opportunity fields, custom opportunity fields, product families, territories, and date ranges (such as schedule or product dates). A "Sales Team" is not a standard standalone forecast type or filter category on its own in standard forecasting configurations.


179. Northern Trail Outfitters has a custom quick action on Account that creates a new Case.
How should an administrator make the quick action available on the Salesforce mobile app?

A. Include the action in the Salesforce Mobile Navigation menu.
B. Create a custom Lightning App with the action.
C. Add the Salesforce Mobile and Lightning Experience action to the page layout.
D. Modify compact Case page layout to include the action.

Answer(s): C. Add the Salesforce Mobile and Lightning Experience action to the page layout.


Explanation: Custom object actions like creating a case from an account become available in both Salesforce Lightning Experience and the Salesforce mobile app when they are added to the "Salesforce Mobile and Lightning Experience Actions" section of the object's page layout.


180. DreamHouse Realty needs to use consistent picklist values in the Category field on Accounts and Cases, with values respective to record types.
Which two features should the administrator use to fulfill this requirement? (Choose two.)

A. Multi-select picklist
B. Dependent picklist
C. Custom picklist
D. Global picklist

Answer(s): B, D


Explanation: A global picklist (Picklist Value Set) ensures consistent values across multiple objects, while dependent picklists or record type associations help control which specific values appear depending on context or record types.


181. The administrator for Cloud Kicks needs to give access to a new custom object with custom fields to more than one User.
Which two options should an administrator use to meet this requirement? (Choose two.)

A. Assign permission set group to Users
B. Edit organization-wide defaults
C. Add to manual sharing list
D. Create a permission set

Answer(s): A, D


Explanation: Permission sets and permission set groups are the standard administrative tools used to grant users access to custom objects and fields without modifying profile or organization-wide default settings.


182. Currently, when support reps at Ursa Major Solar close a case, they manually send an email notification to the customer. The support manager would like to automate this process, as too many reps are forgetting this step.
Which two settings should the administrator use to meet this request? (Choose two.)

A. Add the Knowledge component to the closed layout
B. Notify contact checkbox on close page layout
C. Case close template in the support settings
D. Auto-response rule step set for status of closed
Show Suggested Answer

Answer(s): B, C


Explanation: Support settings allow configuration of a default Case Close Template, and enabling the "Notify contact on close" checkbox on the case close page layout ensures customers automatically receive that email template when a case is closed. Auto-response rules only trigger upon record creation, not closure.


183. The administrator at AW Computing wants to send off client welcome tasks and a welcome email to the primary contact automatically when an opportunity is closed won.
What automation tool best accomplishes this?

A. Approval Process
B. Validation Rule
C. Process Builder
D. Outbound Message

Answer(s): C. Process Builder


Explanation: Process Builder (or Flow Builder) is designed to evaluate criteria like an opportunity being marked "Closed Won" and automatically trigger multiple downstream actions, such as creating tasks and sending emails. Validation rules block saves, approval processes handle record sign-offs, and outbound messages send XML data externally.


184. Which tool should an administrator use to identify and fix potential session vulnerabilities?

A. Field History Tracking
B. Security Health Check
C. Setup Audit Trail
D. Organization-Wide Defaults

Answer(s): B. Security Health Check


Explanation: The Security Health Check provides a summary score of an organization's security settings and identifies potential vulnerabilities—including session settings—giving administrators a straightforward way to fix them.


185. Which setting on a profile makes a tab hidden in the All App Launcher or visible in any app, but still allows a user to view records that would normally be found under this tab?

A. Tab Settings
B. App Permissions
C. Object Permissions
D. Org-wide Defaults
Answer(s): A. Tab Settings


Explanation: Setting a tab to "Tab Hidden" on a profile hides it from the App Launcher and navigation bars, but users can still access records via search, reports, or direct URLs if their object-level permissions allow it.


186. Which two objects are customizable the Stage Setup Flow? (Choose two.)

A. Leads
B. Campaigns
C. Opportunities
D. Campaign Members

Answer(s): A, C


Explanation: The Stage Setup Flow in Salesforce assists with configuring sales processes and stages primarily for standard objects like Opportunities and Leads.


187. An administrator at Northern Trail Outfitters is unable to add a new user in Salesforce.
What could cause this issue?

A. The email address used for the username has a contact record.
B. The username is already in use another organization.
C. The email used for the username is not a corporate email address.
D. The username is restricted to a domain specific to my domain.

Answer(s): B. The username is already in use another organization.


Explanation: Usernames across all Salesforce organizations must be globally unique. If a username is already active or in use in any other Salesforce org, it cannot be used to create a new user.


188. The business development team at Cloud Kicks thinks the Account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process.
Which automation tool should an administrator use?

A. Flow Builder
B. Workflow Rule
C. Validation Rule
D. Approval Process

Answer(s): A. Flow Builder


Explanation: Flow Builder (specifically Screen Flows) can guide users through a streamlined, step-by-step data entry wizard, hiding clutter and presenting only relevant fields during account creation.


189. AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant.
What should the administrator configure to make it easier for teams to collaborate with the same customer?

A. Enable account teams and show the users how to set up a default account team.
B. Enable and configure standard opportunity teams with splits.
C. Create a queue for each team and assign account ownership to the queue.
D. Propose the users manually share all their accounts with their teammates.

Answer(s): A. Enable account teams and show the users how to set up a default account team.


Explanation: Default Account Teams allow users to set up a pre-defined group of colleagues who are automatically added to accounts, saving time when collaborating with consistent team members.


190. When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity.
What automation option should an administrator use to accomplish this request?

A. Opportunity sharing rule
B. Approval Process
C. Validation Rule
D. Flow Builder

Answer(s): D. Flow Builder


Explanation: Flow Builder is the modern automation tool used to evaluate trigger conditions (such as opportunity closing) and automatically create new related records like a renewal opportunity.


191. Which tool should an administrator use to review recent configuration changes made in their org?

A. Critical Updates
B. Debug Logs
C. Setup Audit Trail
D. Field History Tracking

Answer(s): C. Setup Audit Trail


Explanation: Setup Audit Trail tracks the metadata and configuration changes made by administrators and users within an organization, making it easy to review recent modifications.


192. A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and series.
How should the administrator set up the Campaign to simplify reporting?

A. Add different record types for the monthly event types.
B. Create individual Campaigns that all have the same name.
C. Use Campaign Hierarchy where the monthly events roll up to a parent Campaign.
D. Configure Campaign Member Statuses to record which event Members attended.

Answer(s): C. Use Campaign Hierarchy where the monthly events roll up to a parent Campaign.


Explanation: Campaign Hierarchies allow administrators to group child campaigns (individual monthly events) under a parent campaign (the overarching series), enabling consolidated reporting on total ROI across both individual and grouped events.


193. In which two areas of the Salesforce mobile app can the administrator customize the branding? (Choose two.)

A. Record background color
B. Popups header color
C. Loading page logo
D. Header background color

Answer(s): C, D


Explanation: Salesforce mobile app branding customization allows administrators to configure elements such as the loading page logo and the header background color to match corporate identity.


194. The Support team at Ursa Major Solar prefers using split list views on the case homepage. Occasionally, the team views shipments from another support application.
What should the administrator configure to allow the team to use the split list view?

A. Filter by a single shipment record type in the list view.
B. Split views are only available on standard objects.
C. Include the Shipments tab on the app's navigation bar.
D. Add the Manage List Views permission for support users.

Answer(s): C. Include the Shipments tab on the app's navigation bar.


Explanation: Split list views in Lightning Experience require the corresponding object tab to be included in the navigation bar of the active Lightning app so users can access and view them side-by-side.

195.  DreamHouse Realty wants to offer a form on its Experience Cloud site where inspectors will submit findings from a property inspection.
Which feature should an administrator place on the page to fulfill this requirement?

A. Related List
B. Autolaunched Flow
C. Record Detail
D. Screen Flow
Show Suggested Answer

Answer(s): D. Screen Flow


Explanation: A Screen Flow allows administrators to build customizable, interactive forms with multiple screens and fields that users can interact with directly. This makes it ideal for collecting user-submitted data, such as property inspection findings, on an Experience Cloud site. Related lists and record details display existing data rather than providing a custom input form, and autolaunched flows run in the background without user interaction screens.


196. Ursa Major Solar provides a 1-year warranty on all of the panels it installs. Installation details, along with the warranty information, are captured on a custom object called Installation. The installation record is created by the installer from the mobile app. Customers sometimes receive a longer warranty as a way of increasing customer satisfaction when an installation gets delayed or has issues.
How should the administrator configure Salesforce to capture the expiration date of the warranty?

A. Include the warranty Expiration Date field on the mobile page layout.
B. Add a validation rule to ensure the Expiration Date field is populated.
C. Use a formula as the default value of the warranty Expiration Date field.
D. Create a formula field to display 1 year from the warranty purchased.
Show Suggested Answer

Answer(s): C. Use a formula as the default value of the warranty Expiration Date field.


Explanation: Since standard installations receive a default 1-year warranty while allowing for longer warranties when issues arise, using a formula as a default value on a standard date field satisfies both needs. It automatically populates the field with the date 1 year from purchase while still allowing users to manually override or extend the date when special exceptions occur. A standard formula field (Option D) would make the date entirely read-only and prevent manual extensions.


197. Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role.
How should the administrator share records owned by sales team A with sales team B?

A. Hierarchical sharing
B. Owner-based sharing
C. Criteria-based sharing
D. Use manual sharing
Show Suggested Answer

Answer(s): B. Owner-based sharing


Explanation: Owner-based sharing rules allow an administrator to automatically share records based on the record owner's role or public group with another role or public group (in this case, sharing records owned by Sales Team A's role with Sales Team B). Since both teams are subordinates under the same manager role without a direct reporting line to each other, hierarchy sharing alone will not grant cross-access between them.


198. Cloud Kicks wants users to only be able to choose Opportunity stage closed won if the Lead source has been selected.
How should the administrator accomplish this goal?

A. Configure a validation rule requiring Lead source when the stage is set to closed won.
B. Change the Opportunity stage field to read only on the page layout.
C. Make Lead source a dependent picklist to the Opportunity stage field.
D. Modify the Opportunity stage a dependent picklist to the Lead source field.
Show Suggested Answer

Answer(s): A. Configure a validation rule requiring Lead source when the stage is set to closed won.


Explanation: A validation rule checking if the stage is "Closed Won" while the Lead Source is blank (AND(ISPICKVAL(StageName, "Closed Won"), ISBLANK(LeadSource))) ensures data entry standards are met precisely when records hit that stage. Dependent picklists govern available picklist choices based on another field's value, but cannot conditionally mandate fields in this manner.


199. The administrator at Ursa Major Solar needs to make sure that unassigned cases from VIP customers get transferred to the appropriate service representative within 5 hours. VIP customers have access to support 24 hours a day.
How should this be configured?

A. Case Queues
B. Assignment Rules
C. Escalation Rules
D. Business Hours
Show Suggested Answer

Answer(s): C. Escalation Rules


Explanation: Case Escalation Rules are designed to automatically track case age and route or reassign unassigned/unresolved cases to the appropriate representatives or managers after a specified time frame (such as 5 hours). Business Hours can be attached to ensure correct time tracking for 24-hour support, but escalation rules drive the automated transfer logic.


200. The administrator at Cloud Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record.
What should the administrator do to pull contact fields into the custom report?

A. Use a dashboard with filters to show Event and contact data as requested.
B. Configure formula fields on Event to populate contact information.
C. Edit the custom Event report type and add fields related via lookup.
D. Create a new report type with Event as the primary object and Contact as a related object.
Show Suggested Answer

Answer(s): C. Edit the custom Event report type and add fields related via lookup.


Explanation: When objects are linked via a lookup relationship, an administrator can simply edit the existing custom report type and use the "Add fields related via lookup" feature to pull fields from the related parent object directly into the report without needing to build an entirely new report type.


201. Cloud Kicks needs to be able to show different picklist values for sales and marketing users.
Which two options will meet this requirement? (Choose two.)

A. Two page layouts, one record type, two picklists
B. Two permission sets, one record type, one picklist
C. One page layout, two record types, one picklist
D. One record type, two profiles, one picklist
Show Suggested Answer

Answer(s): C, D


Explanation: Picklist values can be mapped differently based on Record Types (Option C) or Profiles (Option D), allowing different user groups (like sales and marketing) to see tailored values from the same underlying picklist field.


202. AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record.
What should AWC use to track Contacts?

A. Enable Contacts to multiple Accounts.
B. Create a junction object to track many-to-many relationship.
C. Create a new Contact record for each agency.
D. Use a partner community to track the Contacts.
Show Suggested Answer

Answer(s): A. Enable Contacts to multiple Accounts.


Explanation: Enabling "Contacts to Multiple Accounts" (the Related Contacts feature) allows a single contact record to be related to multiple accounts with specific roles and relationship histories, preserving data integrity and tracking historical agency associations without duplicating records.


203. An administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won, and another task after 60 days to check in with the customer.

Which automation tool should the administrator use?

A. Flow Builder
B. Outbound Message
C. Assignment Rule
D. Field Update
Show Suggested Answer

Answer(s): A. Flow Builder


Explanation: Flow Builder (specifically a Record-Triggered Flow with scheduled paths) can easily handle both immediate actions (such as creating an immediate follow-up task upon closing an opportunity) and time-delayed actions (such as scheduling a check-in task 60 days later).

204. Cloud Kicks (CK) needs a new sales application. The administrator thinks there is an application package on the AppExchange and wants to begin testing it in a sandbox to see if it addresses CK’s needs.
What are two considerations when installing a managed package in a sandbox? (Choose two.)

A. The package will be removed any time the sandbox is refreshed.
B. The installation link has to be modified to test.salesforce.com.
C. Any metadata changes to the package have to be replicated in production.
D. Install for Admins Only will be the only install option available.

Answer(s): A, B

Explanation: When installing packages in a sandbox environment, the installation URL typically needs to be modified from login.salesforce.com to test.salesforce.com. Additionally, because sandboxes are copies of production that can be refreshed, any packages installed inside a sandbox will be wiped out and removed when the sandbox is refreshed. Options C and D are incorrect because managed package metadata cannot be directly edited in production anyway, and multiple install options (such as Install for All Users) are available during package installation.


205. Cloud Kicks intends to protect data with backups by using the data export service.
Which two considerations should the administrator remember when scheduling the export? (Choose two.)

A. Data backups are limited to weekly or monthly intervals.
B. Metadata backups must be run via a separate process.
C. Metadata backups are limited to sandbox refresh intervals.
D. Data export service should be run from a sandbox.

Answer(s): A, B

Explanation: The Salesforce Data Export Service can only be scheduled to run at weekly or monthly intervals. Furthermore, this service exports data only, meaning any metadata backups (such as custom fields or object definitions) must be handled through separate tools like Salesforce CLI or the Migration Tool. Options C and D are incorrect because sandbox refresh intervals have no bearing on data exports, and the export service is designed to be run from production.


206. The sales team at Ursa Major Solar has asked the administrator to automate an outbound message.
What should the administrator utilize to satisfy the request?

A. Case Auto-Response Rule
B. Recorded-triggered flow
C. Task Assignment
D. Process Builder

Answer(s): B

Explanation: Record-triggered flows support sending outbound messages natively without needing legacy automation tools like Process Builder or Workflow Rules (which are retired or being retired). Auto-response rules, task assignments, and process builder either cannot send outbound messages or are superseded by modern Flow capabilities.


207. In Spring'11 salesforce.com release Dynamic Dashboards have been launched for which edition:

A. Developer Edition
B. Professional Edition
C. Enterprise Edition
D. Unlimited Edition

Answer(s): A, C, D

Explanation: Dynamic Dashboards allow data to display based on the running user's security permissions. Historically and currently, they are supported in Developer, Enterprise, and Unlimited editions, but are notably excluded from the Professional edition. (Note: Multiple correct choices apply here).


208. Northern Trail Outfitters (NTO) has deployed my domain. The Chief Marketing Officer wants to make sure that all of the Salesforce users log in using the branded login URL. There needs to be a grace period for the user's bookmarks to be updated.
How should the administrator configure the policies in my domain settings?

A. Set the Redirect policy to Do Not redirect.
B. Set the login policy to prevent login from https://login.salesforce.com
C. Set the login policy to require login from https://nto.my.salesforce.com
D. Set the redirect policy to Redirect with a warning to the same page within the domain.

Answer(s): D

Explanation: To allow users a grace period while nudging them to use the new branded URL, administrators can set the My Domain redirect policy to "Redirect with a warning to the same page within the domain." This displays a warning message advising users to update their bookmarks before eventually redirecting them.


209. DreamHouse Realty regularly holds open houses for the selling of both houses and condominiums. For condominium open houses, there are a few extra steps that need to be taken. Agents need to be able to submit requests and receive approvals from the homeowners' association.
How can the administrator ensure these extra steps only appear when creating open house records for condominiums?

A. Create two page layouts, one with a House Status field and the other with a Condominium Status field.
B. Create one page layout. Use business processes to ensure the proper status picklist values display.
C. Create two page layouts. Use business processes and record types to display the appropriate picklist values.
D. Create one page layout. Use record types to ensure the proper status picklist values display.

Answer(s): c

Explanation: To tailor picklist values and layout structures to specific business scenarios (like Houses vs. Condominiums), an administrator must combine Record Types (to differentiate the object types) and Business Processes (to manage status values), alongside distinct Page Layouts to display the appropriate fields.


210. What is the order of execution when a Case record is saved?

A. Validation rules, Assignment rules, Escalation rules, Auto-response rules
B. Validation rules, Escalation rules, Workflow rules, Auto-response rules
C. Assignment rules, Auto-response rules, Workflow rules, Escalation rules
D. Assignment rules, Validation rules, Workflow rules, Escalation rules

Answer(s):  C

Explanation: In the standard Salesforce save order of execution for cases, assignment rules run first to assign the case owner, followed by auto-response rules (to send acknowledgment emails), workflow rules, and finally escalation rules are scheduled or evaluated.


211. An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permission and the two-factor authentication for API Logins permission to a group of users.
Which two prompts will happen when one of the users attempts to log in to Data Loader? (Choose two.)

A. Users need to connect an authenticator app to their Salesforce account.
B. Users need to enter a verification code from email or SMS, whichever has higher priority.
C. Users need to download and install an authenticator app on their mobile device.
D. Users need to get a security token from a trusted network using Reset My Security Token.

Answer(s): A, C

Explanation: High-assurance requirements like API logins via Data Loader require multi-factor authentication (MFA) via a time-based one-time password (TOTP) authenticator app (such as Salesforce Authenticator or Google Authenticator). Salesforce does not support email or SMS verification for high-assurance API scenarios, meaning users must download, install, and connect an authenticator app.


212. What data loss considerations should an administrator keep in mind when changing a custom field type from Text to Picklist? (Choose two.)

A. Auto updates will be made to Visualforce references to prevent data loss.
B. There will be no data loss with use of a global value set.
C. Any list view based on the custom field is deleted.
D. Assignment and escalation rules may be affected.

Answer(s): C, D

Explanation: Changing field types can invalidate dependent configurations. Any existing list views referencing the altered field are deleted, and assignment or escalation rules that rely on the previous data format or values may be broken or affected.

213. Cloud Kicks has decided to delete a custom field.
What will happen to the data in the field when it is deleted?

A. The data is restorable from the recycle bin.
B. The data in the field is stored for 20 days.
C. The data is permanently deleted.
D. The data associated with the field is removed.

Answer(s): A

Explanation: When a custom field is deleted, Salesforce retains the field and its associated data in a soft-deleted state for up to 15 days (or until the org permanently deletes it), allowing administrators to restore the field and its data during that window.

214.  The administrator at Cloud Kicks has created an approval process for time off requests.
Which two automated actions are available to be added as part of the approval process? (Choose two.)

A. Field Update
B. Email Alert
C. Autolaunched Flow
D. Chatter Post

Answer(s): A, B

Explanation: Salesforce approval processes natively support specific immediate and finalized automated actions, which include Field Updates, Email Alerts, Task Creation, and Outbound Messages. Autolaunched flows and Chatter posts are not natively selectable direct actions within an approval process step configuration (though flows can be triggered separately or via workarounds like Apex or invocations).


215. The administrator at AW Computing wants Account details, related lists, and Chatter feeds to each appear on separate tabs when viewing an Account.
Which type of page should the administrator create?

A. Lightning page tab
B. Lightning app page
C. Lightning page component
D. Lightning record page

Answer(s): D

Explanation: A Lightning record page allows administrators to configure custom layouts for specific object record views using tabs (such as standard details, related lists, and Chatter components) organized neatly within a tabbed interface.


216. Which two actions should an administrator perform with Case escalation rules? (Choose two.)

A. Re-assign the Case.
B. Change the Case Priority.
C. Re-open the Case.
D. Send email notifications.

Answer(s): A, D

Explanation: Case escalation rules are designed to automatically route cases that remain open or unresolved past a certain timeframe. When triggered, their primary automated capabilities are to reassign the case to a different user or queue, and send email notifications to the new assignee, current owner, or other designated recipients. They do not handle case priority changes or re-opening closed cases directly.


217. The administrator at Cloud Kicks writes an assignment rule to send all cases created via email or the web to the Automated Cases Queue. Any manually created cases should be owned by the agent creating them; however, the manually created cases now show the administrator as the owner.
What will the administrator find when troubleshooting this issue?

A. An escalation rule is changing the case owner on case creation.
B. The Assignment Rule checkbox is selected by default.
C. The Owner field is missing on the webform and email template.
D. Another assignment rule is giving ownership to the administrator.

Answer(s): B

Explanation: In Salesforce, the "Assign using active assignment rule" checkbox on the case creation layout can be set to checked by default. When agents create cases manually, if this box is checked, Salesforce evaluates the active assignment rule. Since the manual cases don't match the email/web criteria, they fall through or get misassigned based on rule configurations, or if the rule isn't properly limited, it defaults ownership unexpectedly.


218. When users log in to Salesforce via the user interface, which two settings does the system check for authentication? (Choose two.)

A. The role IP address restrictions
B. The user’s profile login hours restrictions
C. The user’s Two-Factor Authentication for API Logins permission
D. The user’s Two-Factor Authentication for User Interface Logins permission

Answer(s): B, D

Explanation: When logging in through the standard user interface (UI), Salesforce evaluates the user profile's configured login hours restrictions (denying access outside those times) and checks whether the user has the Two-Factor Authentication for User Interface Logins permission enabled, which prompts an extra verification step. Role-based IP restrictions and API-specific 2FA permissions apply to API calls and profile/role settings differently.


219. An administrator at Cloud Kicks wants to deactivate a user who has left the company.
What are two reasons that would prevent a user from being deactivated? (Choose two.)

A. The user is in a custom hierarchy field.
B. The user is the sole recipient of a workflow email alert.
C. The user is part of a territory hierarchy.
D. The user is the highest role in the role hierarchy.

Answer(s): A, B

Explanation: Certain dependencies prevent user deactivation to maintain data integrity. A user cannot be deactivated if they are referenced in a custom hierarchy relationship field or if they are set as the sole recipient of workflow email alerts or active approval processes.


220. What are three characteristics of a master-detail relationship? (Choose three.)

A. The master object can be a standard or custom object.
B. Permissions for the detail record are set independently of the master.
C. Each object can have up to five master-detail relationships.
D. Roll-up summaries are supported in master-detail relationships.
E. The owner field on the detail records is the owner of the master record.

Answer(s): A, D, E

Explanation: In a master-detail relationship, the master can be standard or custom, roll-up summary fields can be calculated on the master object, and detail record ownership is controlled directly by the master record's owner. Detail record permissions are not set independently (they inherit sharing and security from the master), and objects are restricted to a maximum of two master-detail relationships, not five.


221. Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout.
How should an administrator meet this requirement?

A. Use an interview flow to capture Case details.
B. Create a custom object to capture popular Case resolutions.
C. Direct users to Global Search to look for similar cases.
D. Configure Knowledge with articles and data categories.

Answer(s): D

Explanation: Salesforce Knowledge allows administrators to embed article components directly onto the Case page layout, giving agents instant access to searchable documentation, FAQs, and similar case solutions right where they work.


222. The administrator at Northern Trail Outfitters has been using a spreadsheet to track assigned licenses and permission sets.
What feature can be used to track this in Salesforce?

A. Login History
B. Permission Set Groups
C. Lightning Usage App
D. User Report

Answer(s): D

Explanation: To track which users have specific licenses and assigned permission sets, administrators can build and run a custom User Report containing fields like Profile, Permission Set Assignments, and User Licenses.


223. How many other fields may a custom lead field be mapped to when converting a lead?

A. One custom field
B. Two custom fields
C. Three custom fields
D. Custom lead fields cannot be mapped

Answer(s): C

Explanation: During lead conversion, a single custom lead field can be mapped to a total of three target fields: one custom field on the Account, one on the Contact, and one on the Opportunity.


224.  The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management.
What case management tools need to be utilized for this requirement?

A. Auto-response rules, Queues, Macros
B. Auto-response rules, Macros, Entitlements
C. Auto-response rules, Queues, Escalation Rules
D. Auto-response rules, Entitlements, Escalation Rules

Answer(s): C. Auto-response rules, Queues, Escalation Rules


Explanation: Auto-response rules are used to immediately acknowledge cases via email based on criteria like the Case Reason. Queues are used to hold and assign incoming cases to appropriate groups of agents. Escalation rules automatically escalate cases (such as those remaining in "New" status after 4 hours) to management or other support queues. Macros are tools for automating repetitive steps in the agent workspace rather than managing routing, and entitlements deal with service level agreements (SLAs), making option C the correct combination.


225. The VP of sales at AW Computing would like sales reps to check in with their top account every Monday. The VP would like a dashboard component to show the status of the check-ins.
What should the administrator configure to remind the reps to contact their top account?

A. Use a process email alert on the account.
B. Create a time-based workflow task.
C. Add the email action to the page layout.
D. Enable the creation of recurring tasks.

Answer(s): D. Enable the creation of recurring tasks.


Explanation: Enabling recurring tasks allows sales reps to set up a task that automatically repeats on a specific schedule (every Monday) to check in with their top accounts, and tasks can easily be tracked and reported on via dashboard components. Time-based workflow tasks can send reminders, but recurring tasks are specifically designed for repeating activities like weekly check-ins.


226. Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases.
Which two users are able to fulfill this request? (Choose two.)

A. A user with the System Administrator profile.
B. A user with the Manage Cases permission.
C. A user with Read permission on the account.
D. A user with a manager role above the agent.

Answer(s): A. A user with the System Administrator profile, D. A user with a manager role above the agent.


Explanation: System Administrators have organization-wide permissions to modify and transfer ownership of any record. Additionally, users with a role higher in the role hierarchy than the current owner (such as a manager) have implicit sharing and transfer privileges over records owned by subordinates. Regular read permission or standard case management permissions alone do not automatically grant the ability to mass-transfer ownership across other users' records without administrative or hierarchical access.


227. Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account.
How should the administrator recommend automating this business process?

A. Use a process to update the account when it is edited.
B. Set up a scheduled process in Process Builder.
C. Configure a scheduled flow in Flow Builder.
D. Create a workflow rule with an outbound message.

Answer(s): C. Configure a scheduled flow in Flow Builder.


Explanation: Scheduled paths/flows in Flow Builder are the modern, declarative tool recommended by Salesforce to run automated actions or scheduled background processes (such as running weekly to count records and update fields). Process Builder and standard workflow rules are either retired or being phased out in favor of Flows.


228. The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is "Search Engine", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not "Search Engine", this picklist should be hidden.
How should the administrator complete this requirement?

A. Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is "Search Engine".
B. Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is "Search Engine".
C. Use an assignment element, one for when Lead Source is "Search Engine" and one for everything else.
D. Assign a decision element to direct the user to a second screen to hold Specific Search Engine only when Lead Source is "Search Engine".

Answer(s): A. Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is "Search Engine".


Explanation: Screen components in Flow Builder support conditional visibility. By setting a conditional visibility rule on the specific search engine picklist component to display only when the Lead Source equals "Search Engine", the field will dynamically hide or show on the same screen without requiring extra screens or complex branching.


229. Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record.
How should an administrator ensure this requirement?

A. Define an approval process for the field.
B. Create a Process Builder to set the field.
C. Make the field universally required.
D. Require the field on the record type.

Answer(s): C. Make the field universally required.


Explanation: Making a field universally required at the object level ensures that the record cannot be saved in the database unless that field has a value, regardless of where the record is created (UI, API, etc.). Approval processes and automations are meant for routing or post-creation updates, and field requirements are not set at the record type level.


230. Which three items are available in the mobile navigation menu? (Choose three.)

A. Chatter
B. Utility Bar
C. Lightning App Pages
D. Dashboards
E. Lightning Home Page

Answer(s): A. Chatter, C. Lightning App Pages, D. Dashboards


Explanation: Salesforce mobile app navigation menus support standard features and tools like Chatter, Dashboards, and custom Lightning App Pages. The Utility Bar and Lightning Home Pages are desktop-specific layout constructs and are not standalone items added to the mobile navigation menu.


231. Support reps at Cloud Kicks (CK) are reporting that when they try to close a case, the Closed option in the Case Status picklist is missing. CK has asked the administrator to find a solution.

Why are the support reps unable to see the Closed option in the specified picklist?

A. The Close Case page layout must be used to dose a case.
B. The Show Closed Statuses in Case Status Field checkbox is set to the default.
C. The Case record type is missing Closed as a picklist value.
D. The Support Process being used omits Closed as a status choice.

Answer(s): D. The Support Process being used omits Closed as a status choice.


Explanation: In Salesforce, Case Status values are controlled by Support Processes. If a profile is assigned a specific Support Process that does not include "Closed" as an available status choice, users with that profile will not be able to select or see the Closed status.


232. Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working on some of UC's Cases.
Which two options should the administrator use to help the support team? (Choose two.)

A. Use assignment rules to set the queue as the owner of the case.
B. Create a new queue and add Cases as an available object.
C. Add Cases to the existing queue as available object.
D. Configure a flow to assign the cases to the queue.

Answer(s): A & C


Explanation: To handle cases using a queue, an administrator can either add the Case object to an existing queue if appropriate, or create a new queue specifically designating Cases as a supported object. Both options directly enable the queue to manage cases for the support team.


Question 1
Northern Trail Outfitters (NTO) wants to deploy an autonomous customer-facing agent on their Experience Cloud site to assist shoppers with checking order status and processing standard returns 24/7.
Which Agentforce tool should the administrator configure to meet this requirement?
A. Einstein Copilot for Sales
B. Agentforce Service Agent
C. Lightning Flow Orchestrator
D. Prompt Builder Action
Answer: B
Why: Agentforce Service Agent is Salesforce's autonomous, customer-facing AI agent designed to interact directly with external customers across digital channels (Experience Cloud, web chat, SMS, WhatsApp). Powered by the Atlas Reasoning Engine, it selects topics, executes business actions, and can escalate to human agents via Omni-Channel. Copilot for Sales (A) is an internal sales assistant; Flow Orchestrator (C) coordinates multi-user approvals; Prompt Builder (D) creates reusable prompt templates.

Question 2
An administrator at Cloud Kicks is building an Agentforce Service Agent. The administrator needs to define a clear boundary for when the agent should handle customer inquiries regarding footwear warranty claims.
Where should the administrator define the guidelines, classification criteria, and scope for this specific capability?
A. In a Custom Metadata Type
B. In an Agentforce Topic
C. In an Omni-Channel Queue
D. In an Einstein Trust Layer Rule
Answer: B
Why: In Agentforce architecture, a Topic represents a specific job, domain, or capability assigned to an agent (e.g., "Warranty Claims", "Order Inquiries"). Each Topic contains:
Topic Description: Natural language guidance instructing the Atlas Reasoning Engine when to route an utterance to this topic.
Topic Instructions: Guardrails, directives, and tone.
Actions: The specific Flows, Apex, or Prompt Templates the agent can execute.

Question 3
The administrator at Ursa Major Solar is creating a custom Agent Action for an internal agent to calculate solar panel rebate estimates based on postal code and kilowatt usage.
Which three declarative and programmatic elements can an administrator configure as an Agent Action in Agentforce? (Choose three.)
A. An Autolaunched Flow
B. A Screen Flow with user interaction screens
C. An Apex Class with an @InvocableMethod annotation
D. A Flex Prompt Template created in Prompt Builder
E. A Workflow Rule Field Update
Answer: A, C, D
Why: Agent Actions represent executable tasks that an agent can invoke autonomously. Supported mechanisms include:
Autolaunched Flows (A): Headless declarative flows that accept inputs, execute logic, and return outputs.
Invocable Apex (C): Programmatic Apex classes decorated with @InvocableMethod.
Flex Prompt Templates (D): Custom prompt templates built in Prompt Builder that return grounded LLM responses.
Screen Flows (B) require user UI interaction and cannot run headlessly inside an autonomous agent reasoning loop. Workflow Rules (E) are legacy.

Question 4
Cloud Kicks is deploying an Agentforce agent. Stakeholders want to guarantee that sensitive customer information, such as Social Security Numbers and Credit Card details, is not sent to the external LLM or retained by the AI provider.
Which core architectural layer in Salesforce guarantees data masking and zero data retention?
A. Shield Platform Encryption
B. Field-Level Security (FLS)
C. Einstein Trust Layer
D. Transaction Security Policies
Answer: C
Why: The Einstein Trust Layer provides:
Data Masking: Replaces sensitive PII (SSNs, credit card numbers, phone numbers) with anonymized tokens before prompt transmission.
Zero Data Retention (ZDR): Guarantees that external foundation model partners do not log, retain, or train on customer data.
Toxicity Detection & Audit Trail: Analyzes responses for harmful content and logs every interaction.

Question 5
An administrator at DreamHouse Realty wants their Agentforce Agent to accurately answer home buyer questions regarding local zoning laws by referencing verified internal documentation stored in Salesforce Knowledge.
What should the administrator configure to enable the agent to search and ground responses in Knowledge Articles?
A. Add the standard "Answer Questions with Knowledge" action to a relevant Topic
B. Create a Process Builder to post Knowledge links to Chatter
C. Export Knowledge articles to CSV and upload them to Static Resources
D. Set the Knowledge Object OWD to Public Read/Write
Answer: A
Why: Agentforce includes pre-built standard actions. The standard Answer Questions with Knowledge action allows the agent to semantically search published Salesforce Knowledge articles, retrieve the most relevant excerpts, and ground its generative response in verified documentation.

Question 6
Northern Trail Outfitters (NTO) wants their customer-facing Agentforce Service Agent to process order cancellations. However, leadership requires that before an order is cancelled in the database, the customer must explicitly confirm their intent during the chat.
How should the administrator configure this safety requirement in Agentforce?
A. Enable "Require Confirmation" on the Agent Action settings
B. Write a Validation Rule on the Order object
C. Add an Approval Process with email verification
D. Set the Flow execution context to System Mode without Sharing
Answer: A
Why: In Agentforce, administrators can flag sensitive or destructive actions (cancelling orders, issuing refunds, deleting records) with Require Confirmation. When enabled, the Atlas Reasoning Engine pauses and asks the user to confirm their request (e.g., "Are you sure you want to cancel order #10492 for $150.00?") before executing the underlying Flow or Apex action.

Question 7
The administrator at AW Computing is testing a newly created Agentforce Topic in Agent Builder. During test conversations, the agent frequently selects the wrong topic or responds that it does not know how to handle the inquiry.
Which two changes should the administrator make to improve topic selection accuracy? (Choose two.)
A. Refine the Topic's Classification Description with clear keywords and explicit boundaries of what the topic handles
B. Increase the user's Profile login hours in Setup
C. Add clear Instructions defining trigger phrases, context, and out-of-scope scenarios
D. Convert all custom fields referenced by the agent into Auto-Number fields
Answer: A, C
Why: The Atlas Reasoning Engine relies on natural language semantic descriptions to classify customer utterances:
Topic Description (A): Explicitly defines the domain scope and boundary conditions.
Topic Instructions (C): Provide clear behavioral rules, context, and out-of-scope guardrails.

Question 8
Ursa Major Solar wants their Agentforce Service Agent to escalate customer conversations to a human support agent whenever the customer expresses high frustration or types "speak to an agent".
Which Salesforce feature manages the live transfer and routing of the session to an available support representative?
A. Case Auto-Response Rules
B. Omni-Channel Routing
C. Web-to-Case HTML generator
D. Delegated Administration
Answer: B
Why: When an Agentforce Service Agent triggers an escalation, it transfers the ongoing chat transcript and context seamlessly to a human agent queue using Omni-Channel, respecting agent capacity, presence statuses, and routing queues.

Question 9
An administrator is testing an agent in Agent Builder. The administrator enters the utterance: "I want to update the shipping address for order 9821."
Where in the Agent Builder can the administrator inspect the step-by-step reasoning, selected topic, extracted action inputs, and execution results of the agent?
A. The Setup Audit Trail
B. The Agent Plan and Reasoning Trace Panel
C. The Apex Debug Inspector
D. The Recycle Bin
Answer: B
Why: The Agent Builder features an interactive testing canvas paired with the Plan and Reasoning Trace panel. This panel exposes the decision loop of the Atlas Reasoning Engine: the matched Topic, the generated step-by-step plan, the extracted parameters, the action results, and the synthesized response.

Question 10
Cloud Kicks wants to deploy an autonomous AI agent to handle Tier-1 service cases. What identity does the Agentforce Service Agent use when querying and updating Salesforce records?
A. The credentials of the System Administrator who created the agent
B. The logged-in customer's Experience Cloud user account
C. A dedicated Agentforce Service Agent User with an assigned Profile and Permission Sets
D. The Default Workflow User


Answer: C
Why: Agentforce agents run securely using a dedicated Agent User record. Administrators assign an Agent Profile and Permission Sets to this user. The agent strictly respects the Object Permissions (CRUD), Field-Level Security (FLS), and sharing rules granted to this specific Agent User.

Question 11
An administrator at Northern Trail Outfitters needs to ensure that when an Agentforce agent generates a response, it pulls real-time order history and unified profile data from Data Cloud without copying that data into standard CRM custom objects.
Which feature allows Agentforce to ground its responses in unified Data Cloud data?
A. Data Cloud DMO (Data Model Object) Search Index and Grounding
B. Weekly Data Export service
C. Scheduled Apex Batch Jobs
D. External ID fields on Account
Answer: A
Why: Agentforce natively connects to Data Cloud. By leveraging Data Model Objects (DMOs) and vector search indexes, the agent can dynamically ground prompts with unified, real-time data across enterprise lakes without requiring data replication into standard CRM storage.

Question 12
DreamHouse Realty wants to deploy Agentforce for its internal sales team. Sales reps should be able to ask the agent to summarize opportunity history and draft follow-up emails directly from the Opportunity record page.
Which Agentforce implementation is specifically tailored for internal CRM users embedded within Lightning Experience?
A. Agentforce Service Agent
B. Agentforce Sales / Employee Agent (Einstein Copilot)
C. Web-to-Lead Agent
D. Marketing Cloud Journey Builder
Answer: B
Why: Agentforce Employee Agent (formerly Einstein Copilot) is the conversational AI assistant built directly into the Salesforce Lightning Experience interface for internal staff. It operates in sidebars and record pages, allowing reps to summarize records, draft emails, update fields, and query pipeline metrics conversationally.

Question 13
An administrator at Cloud Kicks creates an Autolaunched Flow intended to be used as an Agent Action. The Flow accepts an Account ID as an input and returns a list of open cases.
What must the administrator ensure regarding the Flow variables so the Agent can properly pass and receive data?
A. All variables must be marked as "Available for input" and "Available for output" respectively with clear API names and descriptions
B. The variables must be encrypted using Platform Encryption
C. The variables must be global constants
D. The Flow must start with a Pause element
Answer: A
Why: When an agent invokes a Flow action, the reasoning engine inspects variable metadata. Any parameter the agent needs to supply must be marked as Available for input, and any value returned to the agent must be marked as Available for output. Providing human-readable descriptions is critical because the LLM uses those descriptions to map conversational data to input variables.

Question 14
Which two statements are true regarding Agentforce Topics? (Choose two.)
A. An agent can have multiple topics assigned to handle diverse operational domains
B. Topics can only contain Apex actions and cannot execute Flows
C. Each topic contains instructions that guide the agent's behavior, guardrails, and tone for that specific domain
D. Once a topic is created, it cannot be edited or deactivated
Answer: A, C
Why:
A is True: An agent typically has several topics (e.g., "General Inquiries", "Billing & Invoices", "Shipping Tracking") to modularly separate responsibilities.
C is True: Topic instructions define tone, formatting guidelines, policy guardrails, and operational steps for that domain.
(Topics support Flows, Prompt Templates, and Apex, making B false; topics can be edited, enabled, or disabled at any time, making D false.)

Question 15
AW Computing wants to prevent its Agentforce agent from answering questions about competitor products or providing legal advice.
What is the best administrative practice to enforce these restrictions?
A. Add clear negative instructions ("Guardrails") in the Topic Instructions specifying what the agent must decline to answer
B. Delete the Opportunity object from the database
C. Create a Validation Rule on the User object
D. Disable API access for all profiles
Answer: A
Why: In Agentforce, administrators use natural language Guardrails within Agent and Topic Instructions (e.g., "Never discuss competitor pricing or products. If asked for legal advice, politely inform the user that AW Computing cannot provide legal counsel"). The reasoning engine strictly enforces these instructions during plan generation.

Question 16
An administrator at Ursa Major Solar is reviewing the performance and accuracy of their customer-facing Agentforce Service Agent in production.
Which tool should the administrator use to review real-world user utterances, agent topic routing decisions, and customer sentiment analytics?
A. Setup Audit Trail
B. Agentforce Analytics and Session Tracing (Einstein Generative AI Analytics)
C. Apex Test Execution history
D. Mass Transfer Tool
Answer: B
Why: Salesforce provides pre-built Agentforce Analytics dashboards and Session Tracing (powered by CRM Analytics and Data Cloud). Administrators can inspect session volumes, resolution rates, deflection rates, escalation frequency, unrecognized utterances, and step-by-step reasoning traces.

Question 17
Before activating and publishing an Agentforce Agent for public use, what must an administrator do in Agent Builder?
A. Run a full sandbox refresh
B. Test the agent using the interactive testing canvas with various sample customer utterances to validate reasoning and responses
C. Export all org records via Weekly Data Export
D. Convert all standard profiles into custom profiles
Answer: B
Why: Testing in the Agent Builder Testing Canvas is required prior to activation. Administrators must run positive, negative, and edge-case utterances to verify topic classification, input extraction accuracy, action execution, and guardrail compliance.

Question 18
Northern Trail Outfitters wants an Agentforce agent to automatically generate a personalized product recommendation summary for a customer. The administrator decides to use Prompt Builder to create a prompt template that merges customer purchase history and style preferences.
Which type of Prompt Template in Prompt Builder is best suited to return a grounded text block for an Agent Action?
A. Field Generation Prompt Template
B. Flex Prompt Template
C. Record Page Component Template
D. Email Template with HTML Letterhead
Answer: B
Why: Flex Prompt Templates in Prompt Builder allow administrators to define custom inputs across multiple objects (e.g., Account, Contact, and custom Product Preference records) and generate dynamic text responses that can be directly exposed as an invocable Agent Action. Field Generation templates are specifically tied to populating a single record field.

Question 19
When an Agentforce agent is deployed on an Experience Cloud site, which security feature determines whether an unauthenticated (guest) user can chat with the agent?
A. The Guest User Profile and Experience Cloud Public Access settings
B. The System Administrator role hierarchy
C. Company Information default currency
D. Login Hours on the Standard User profile
Answer: A
Why: Unauthenticated visitor access on Experience Cloud sites is governed by the site's Public Access setting and the Guest User Profile. To allow anonymous visitors to engage with the Agentforce Service Agent, the messaging deployment and channel permissions must permit guest user access.

Question 20
Cloud Kicks needs to deploy their tested Agentforce Agent from a Full Sandbox into their Production environment.
Which deployment mechanism can administrators use to migrate Agentforce metadata (Agents, Topics, Actions, and Instructions)?
A. Change Sets, Salesforce CLI (SFDX), or DevOps Center
B. Data Loader CSV import
C. The Import Wizard
D. Mass Transfer Records
Answer: A
Why: Agentforce configurations (GenAiPlanner, GenAiPlugin/Topics, and GenAiFunction/Actions) are standard Salesforce metadata components. They can be packaged and deployed across orgs using standard Salesforce ALM tools: Salesforce DevOps Center, Salesforce CLI (sf project deploy), and Inbound/Outbound Change Sets.

----------------------------------------------

