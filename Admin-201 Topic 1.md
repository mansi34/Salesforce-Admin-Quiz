1. Inline editing updates the field when
 
A. The field is saved/updated
 
B. When the record is saved/updated
 
C. When the return key is pressed
 
D. None of the above

Answer: B
Why: Inline editing allows users to modify field values directly within a record or list view, but changes are not committed to the database immediately. The field updates in the system only when the user saves or updates the entire record. Until this save action occurs, the modifications remain in a pending state and do not take effect.
 
2. If a company opts to use Custom Fiscal Years, they cannot use the standard forecasting option.
 
A. True
 
B. False
 
Answer: A
Why: Enabling custom fiscal years in Salesforce impacts forecasting because standard forecasting relies on default calendar structures. Once custom fiscal years are defined, an organization must use customizable or custom-configured forecasting options rather than the standard feature. Therefore, choosing custom fiscal years prevents the use of the standard forecasting option.
 Timestamp: April 26, 2019, 7:04 p.m.


3. Which of the following are not standard objects?
 
A. Opportunities
 
B. Solutions
 
C. Job Applicants
 
D. Accounts
 
E. Campaigns
 
Answer: C
 Why: Opportunities, Solutions, Accounts, and Campaigns are all out-of-the-box standard objects provided by Salesforce. In contrast, Job Applicants is not a standard Salesforce object and represents a custom object typically created for recruiting or HR applications. Therefore, Job Applicants is the only option listed that is not a standard object.
For a clearer visual breakdown of Salesforce standard objects versus custom objects, watch this overview on Salesforce Standard Objects. This video explains how standard objects like Accounts, Contacts, and Opportunities function natively within Salesforce.
Timestamp: Feb. 3, 2020, 9:55 p.m.

 
4. Which of the following are part of the Service Cloud offering?
 
A. Opportunities
 
B. Knowledge
 
C. Entitlements
 
D. Campaigns
 
E. Quotes
 
Answer: B,C
 Why: Knowledge and Entitlements are core components of Salesforce Service Cloud designed to manage self-service solution bases and customer support agreements, respectively. In contrast, Opportunities, Campaigns, and Quotes are standard features belonging to the Sales Cloud platform for managing pipeline and revenue activities. 
Timestamp: May 7, 2020, 8:50 p.m.

5. Locale settings control how users view date formats, time formats and number formats.
 
A. True
 
B. False
 
Answer: A
Why: In Salesforce, locale settings determine the display formats for dates, times, numbers, and names based on the user's geographical region. Configuring a specific locale ensures these values are presented according to local cultural conventions. Therefore, it is true that locale settings control how users view date, time, and number formats.
Timestamp: Aug. 22, 2020, 11:01 a.m.

 
6. If the company locale is set to US English, all users will have a default locale of US English and this cannot be changed.
 
A. True
 
B. False
 
Answer: B
 Why: When the default company locale is set to US English, new users inherit this setting as their default upon creation. However, individual users can override this setting by changing their personal locale in their personal user settings to suit their preferred regional formats. Therefore, the statement that it cannot be changed is false. 
Timestamp: March 18, 2020, 6:44 a.m.

 
7. If your company's fiscal year follows the Gregorian calendar, you must use Custom Fiscal Years.
 
A. True
 
B. False
 
Answer: B
 Why: Standard Fiscal Years in Salesforce are designed specifically to follow the Gregorian calendar, allowing organizations to start their fiscal year on the first day of any month. Custom Fiscal Years are only necessary when a company follows a non-Gregorian structure, such as a 4-4-5 or 13-period fiscal calendar. Therefore, companies using the Gregorian calendar do not need to use Custom Fiscal Years. 
Timestamp: Aug. 22, 2020, 11:07 a.m.

 
8. In order to enable multi-currency feature in Salesforce, you must
 
A. Contact Salesforce.com
 
B. Check the Enable Multi-currency checkbox in your Chatter profile
 
C. Operate your business in at least two different countries
 
D. You cannot enable this feature once you've implemented Salesforce.
 
Answer: A (Now setup -> Company Info. -> Currencies)
 Why: In classic Salesforce administration and legacy exam frameworks, enabling the multi-currency feature required contacting Salesforce Customer Support to activate it for an organization. While modern versions allow administrators to turn on multiple currencies directly in Setup under Company Information, historical questions identify contacting Salesforce as the necessary step. Option B is incorrect because Chatter profiles do not contain organization-wide currency settings, and options C and D are factually incorrect. 
Timestamp: Sept. 29, 2019, 11:32 p.m.

 
9. Which feature effectively allows you to "lock" the converted amount on closed opportunities?
 
A. Locale
 
B. Company Profile
 
C. Multi-currency
 
D. Advanced Currency Management
 
E. None of the above
 
Answer: D
 Why: Advanced Currency Management (ACM) enables dated exchange rates, which lock the converted currency amounts on closed opportunities based on their close dates. Without ACM, historical opportunity amounts recalculate whenever static exchange rates change. Therefore, Advanced Currency Management is the feature designed to lock converted amounts for closed deals. 
Timestamp: Nov. 22, 2020, 9:38 a.m.

 
10. User interface settings are global settings and apply to all users of an org.
 
A. True
 
B. False
 
Answer: A
 Why: User Interface settings configured in Salesforce Setup apply universally at the organization level rather than on a per-user basis. These options—such as enabling collapsible sections, hover details, or quick create—govern the standard interface behavior for every user in the org. Therefore, User Interface settings are global settings that apply across the entire organization. 
Timestamp: July 24, 2022, 8:45 p.m.

 
11. Which of the following are true about List Views?
 
A. Save list views for future use.
 
B. Specify which groups of users have access to the list view.
 
C. Print list views.
 
D. Follow records and view related Chatter posts.
 
E. Export List View data to Excel
 
F. All of the above
 
Answer: A, B, C, D
 Why: Salesforce list views support saving custom search criteria for future use, controlling sharing settings to specify which user groups or roles can access them, and printing the formatted list. Additionally, list views allow users to follow records, view Chatter posts, and export view data to external formats such as Excel. Since every option listed represents an actual function or feature of list views, "All of the above" is the correct answer. 
Timestamp: May 11, 2020, 8:32 p.m.

 
12. A _________ defines a collection of settings and permissions that determines what users can see in the user interface, and what they can do.
 
A. Role
 
B. Chatter feed
 
C. Profile
 
D. Company Profile
 
Answer: C
 Why: A profile in Salesforce defines the core baseline permissions and settings that dictate object access, field-level security, page layouts, and system capabilities for a user. While roles control record-level data visibility through the hierarchy, profiles control what functions users can execute and what parts of the interface they can see. Therefore, a profile is the correct definition for this collection of UI and functional permissions. 
Timestamp: Dec. 8, 2020, 5:20 p.m.
 
13. Which of the following are not a standard Profile?
 
A. System Administrator
 
B. Read only
 
C. Marketing Director
 
D. Partner Portal User
 
E. Standard Administrator
 
Answer: C, E
 Why: System Administrator, Read Only, and Partner Portal User are all standard profiles provided out-of-the-box in Salesforce. In contrast, Marketing Director is a custom profile title often created for role-based demonstrations, and Standard Administrator does not exist in standard Salesforce architecture (the standard administrative profile is named System Administrator). Therefore, both C and E are not standard profiles. 
Timestamp: Aug. 11, 2020, 9:32 a.m.


14. A user with a Chatter Free User profile has access to records in Salesforce such as Accounts and Contacts.
 
A. True
 
B. False
 
Answer: B
 Why: The Chatter Free User license provides access to standard Chatter features like profiles, groups, feeds, and files, but does not include access to CRM objects. Users with this profile cannot view or edit core Salesforce records such as Accounts, Contacts, Opportunities, or Cases. 
Timestamp: Aug. 28, 2020, 8:48 p.m.



15. Standard profile permissions cannot be edited.
 
A. True
 
B. False
 
Answer: A
 Why: Standard profiles provided by Salesforce have built-in permissions that are permanently locked and cannot be modified or customized by administrators. To change permissions for users, administrators must clone a standard profile to create a custom profile, or assign permission sets to grant additional access. Therefore, it is true that standard profile permissions cannot be edited directly. 
Timestamp: June 10, 2020, 3:47 a.m.



16. System administrators can modify tab settings for custom profiles (Default On, Default Off and Hidden).
 
A. True
 
B. False
 
Answer: A
 Why: System administrators have full authority to edit custom profiles in Salesforce, which includes modifying tab visibility settings. Administrators can set tab availability for custom profiles to Default On (visible on the tab bar), Default Off (accessible via the All Tabs / App Launcher menu), or Tab Hidden (completely inaccessible to the profile). Therefore, it is true that system administrators can modify these settings for custom profiles. 
Timestamp: April 30, 2023, 6:54 p.m.

 
17. If a user leaves your company, the system administrator should do the following to prevent future access to the Salesforce org.
 
A. Delete their user record
 
B. De-activate their user record
 
C. Delete any accounts or contacts owned by that user
 
D. None of the above
 
Answer: B
 Why: Salesforce user records cannot be deleted to preserve audit trails, historical data, and record ownership integrity. Deactivating the user record immediately prevents the user from logging into the Salesforce org while maintaining their past activity and record history. Therefore, deactivating the user record is the required administrative action when an employee leaves the company. 
Timestamp: Aug. 28, 2020, 8:56 p.m.


18. An active user record consumes a license.
 A. True
 B. False
Answer: A
 Why: In Salesforce, every active user record is assigned a user license, which counts against the total available licenses provisioned for the organization. Deactivating a user frees up that license so it can be reassigned to another person. Therefore, it is true that an active user record consumes a license. 
Timestamp: Feb. 19, 2023, 6:25 p.m.
 
 
19. A system administrator can opt to lock users out of the Salesforce org if they exceed a certain number of failed login attempts.
 
A. True
 
B. False
 
Answer: A
 Why: System administrators can configure Password Policies in Salesforce Setup to specify a maximum number of allowed invalid login attempts before a user account is locked. This setting can be customized per profile or at the organization level to restrict access after consecutive failed attempts. Therefore, it is true that a system administrator can opt to lock users out of the Salesforce org. 
Timestamp: Feb. 19, 2023, 6:26 p.m.

20. Where can a system administrator go if they are trying to determine why a user cannot log in to Salesforce? (Choose all that apply.)
 
A. The Login History related list on the user's record
 
B. The user's profile
 
C. Manage Users | Login History
 
D. Call salesforce.com Support
 
Answer: A, C
 Why: To troubleshoot login failures, administrators can review the Login History related list on the specific user's record or navigate to Setup > Login History (historically under Manage Users) to view org-wide login attempts. These logs show status details—such as "Invalid Password," "User is Locked Out," or "Restricted IP"—which immediately reveal the root cause of a login issue without requiring a call to Salesforce Support or checking the user's profile settings directly. 
Timestamp: Sept. 21, 2021, 4:01 p.m.



21. What should a system administrator use to disable an application for a group of users?
 
A. Sharing Rules
 
B. Web tabs
 
C. Page layouts
 
D. Profiles
 
E. Roles
 
Answer: D
 Why: Custom app visibility is controlled at the profile level (under Custom App Settings) or within the App Manager by profile assignment. By removing an app's visibility or access settings for a specific profile, a system administrator disables that application for all users assigned to that profile. Roles, sharing rules, and page layouts control record access and fields, not application access. 
Timestamp: May 31, 2022, 10:11 p.m.



22.To prevent a user from logging into the Salesforce org outside normal business hours, the System Administrator would do this in:
 
A. The user record
 
B. The user's profile record
 
C. Network settings
 
D. The role hierarchy
 
E. None of the above
 
Answer: B
 Why: Login Hours are restricted at the profile level in Salesforce. System Administrators configure specific business hours on a user's profile record to prevent users assigned to that profile from logging in outside of designated schedules. 
Timestamp: June 13, 2020, 8:31 p.m.



23. If a user tries to login outside the IP range specified in their profile, the result will be.
 
A. They will be logged in as normal
 
B. They will have to reset their password
 
C. They will be prompted to activate their computer
 
D. They will be denied access
 
E. None of the above
 
Answer: D
 Why: When IP ranges are specified on a user's profile (Login IP Ranges), they act as a strict security restriction. Any login attempt originating from outside those designated IP addresses is completely denied access. In contrast, org-wide trusted IP ranges allow users outside the range to log in after identity verification (activation code), but profile-level IP restrictions flatly block login attempts without an activation option. 
Timestamp: July 30, 2020, 5:48 a.m.


 
24. When a user logs in the first time to Salesforce, the following takes place (Choose all that apply.)
 
A. A cookie is placed in the browser
 
B. Pop ups are automatically disabled
 
C. Their IP address is added to a trusted list
 
D. They are prompted to answer a security question *(Now not a Que. but Security Code)
 
Answer: A, D
 Why: When a user logs in for the first time (or from an unrecognized device/browser), two main security steps occur:
A cookie is placed in the browser (A): Salesforce stores an authentication/device activation cookie in the user's browser so future login attempts from that same browser and device are recognized without repeated activation challenges.
Security Verification (D): The user is prompted to set up/answer a security question (and/or complete identity verification via code) to establish their initial login credentials and verify their account setup.
(Note: Option C is incorrect because a user's IP address is not automatically added to the org's trusted IP network list upon login; trusted IP ranges must be explicitly configured by a System Administrator under Network Access.)
Timestamp: July 12, 2021, 7:11 p.m.



25. The system administrator needs to prevent telesales teams from logging into Salesforce outside of the office.How will he/she do this?
 
A. There is not way to do this
 
B. Setup | Security Controls | Network Access and specify the team's range of IP addresses
 
C. Add the range of IP addresses to the team's profile(s)
 
D. Contact salesforce.com as this feature must be enabled
 
Answer: C
 Why: To strictly block users from logging into Salesforce outside of a specific location (such as the office), administrators must define Login IP Ranges directly on the team's Profile (C). When IP ranges are configured on a profile, any access attempt outside those designated IP addresses is completely denied.
(Note: Adding IP addresses under Network Access (B) creates org-wide trusted IPs; users outside those trusted ranges can still log in if they complete identity verification via an activation code, which would not prevent off-site access.)
Timestamp: Feb. 19, 2023, 6:57 p.m.
##22.08

26. Permission sets can replace the need for profiles.
 
A. True
 
B. False
 
Answer: B
 Why: Permission sets extend access rights, but every user must still have exactly one profile assigned to them. Profiles serve as the foundational requirement to define baseline settings (such as default page layout assignments, default record types, and tab visibility) that permission sets cannot completely replace. Therefore, permission sets complement profiles, but cannot replace the need for them entirely. 
Timestamp: Aug. 4, 2020, 1:14 p.m.


27. Only 1 permission set can be assigned to a user.
 
A. True
 
B. False
 
Answer: B
 Why: Salesforce allows system administrators to assign multiple permission sets to a single user. While a user can have only one profile, permission sets are designed to flexibly grant additional permissions and access rights on top of that base profile to individual users or groups. 
Timestamp: Jan. 18, 2020, 7:51 a.m.



28. Used to set the default levels of access for users to records they do not own.
A. Organization Wide Defaults
 
B. Roles Hierarchy
 
C. Profiles
 
D. Sharing Rules
 
E. Manual Sharing
 
Answer: A
 Why: Organization-Wide Defaults (OWD) establish the baseline (default) level of access that users have to records owned by other users. OWD is the most restrictive layer of data security in Salesforce—setting access to Private, Public Read-Only, or Public Read/Write—before other security mechanisms (such as the Role Hierarchy, Sharing Rules, or Manual Sharing) are used to open up access. 
Timestamp: Nov. 19, 2020, 6:35 p.m.



29.If a user has public read-only access to records [that he/she does not own], the following are true.
 
A. The user can view the record but not edit it
 
B. The user can view and delete the record, but not edit it
 
C. The user can change the owner of the record
 
D. The user can search for the record
 
E. The user can report on the record
 
Answer: ADE
 Why: Public Read-Only access allows users to view, search for, and report on records owned by others, but it strictly prevents them from editing, deleting, or transferring ownership of those records.
A (True): The user can view the record details, but cannot save edits to it.
D (True): Read access allows the record to appear in search results.
E (True): Read access permits the record to be included in reports.
B & C (False): Deleting a record or changing its owner requires Transfer, Delete, or Modify All permissions, which are not granted by a Public Read-Only Organization-Wide Default (OWD).
Timestamp: May 1, 2023, 6:36 p.m.



30. If there are any users in the organization that shouldn't have view access to Account records, the OWD for Accounts should be set to
 
A. Public Read Only
 
B. Public Read/Write/Transfer
 
C. Private
 
D. None of the above
 
Answer: C
 Why: Organization-Wide Defaults (OWD) set the baseline level of access across the entire company. To ensure that specific users cannot view Account records they do not own, the baseline OWD must be set to Private (C). Once set to Private, access can then be selectively granted to other users who need it via the role hierarchy, sharing rules, or manual sharing. 
Timestamp: Nov. 22, 2022, 11:25 p.m.


31.In a private sharing model, the following can be used when Role Hierarchy alone isn't sufficient when providing record access to users (Choose all that apply.)
 
A. Forecasting
 
B. Sharing rules
 
C. Manual Sharing
 
D. Teams (Account, Sales and Case)
 
E. Apex Triggers
 
Answer: B, C, D, E
 Why: In a private sharing model, when the Role Hierarchy does not grant the necessary access to records, administrators can use several mechanisms to open up access to specific users or groups:
Sharing Rules (B): Automatically grant read or read/write access to groups of users based on record ownership or criteria.
Manual Sharing (C): Allows individual record owners or administrators to share specific records with other users on an ad-hoc basis.
Teams (D): Account, Opportunity (Sales), and Case Teams allow owners to grant collaborate access to colleagues for specific records and their related objects.
Apex Sharing / Triggers (E): Programmatic sharing allows custom code to grant access when complex business logic cannot be met by standard declarative tools.
(Forecasting (A) is a sales planning tool used to project revenue and pipeline, not a mechanism for granting record-level sharing permissions.)
Timestamp: July 12, 2021, 7:20 p.m.



32. Criteria-based sharing rules allow administrators to share records based on field values rather than record ownership.
 
A. True
 
B. False
 
Answer: A
 Why: Criteria-Based Sharing Rules allow administrators to automatically share records based on specific field values (such as Type, Status, or Industry) rather than who owns the record. Therefore, the statement is true. 
Timestamp: April 22, 2020, 11:46 a.m.


33. Public groups can be used to simplify the creation of sharing rules for Administrators.
 
A. True
 
B. False
 
Answer: A
 Why: Public Groups allow administrators to bundle a combination of individual users, roles, roles and subordinates, or other public groups together. By using a single Public Group as the target in a sharing rule (either sharing records owned by the group or sharing records with the group), administrators avoid creating multiple individual sharing rules, drastically simplifying security administration. 
Timestamp: Oct. 24, 2020, 5:46 p.m.


34. Public groups can be any combination of other public groups, users, roles and ________.
 
A. Profile
 
B. Roles & subordinates
 
C. Managers
 
D. None of the above
 
Answer: B
 Why: In Salesforce, a Public Group can contain an arbitrary combination of individual users, other public groups, roles, and roles and subordinates (as well as roles and internal/portal subordinates, depending on the org's settings). Profiles cannot be directly added to a public group. 
Timestamp: Oct. 24, 2020, 5:47 p.m.


35. Sales reps at AW Computing need assistance from product managers when selling certain products. Product managers do not have access to Opportunities but need to gain access when assisting on a specific deal. How can the system administrator accomplish this?
 
A. Notify the product manager using opportunity update reminders
 
B. Use similar opportunities to show opportunities related to the product manager
 
C. Enable account teams and allow users to add the product manager
 
D. Enable sales teams and allow users to add the product manager
 
Answer: D
 Why: Sales Teams (also known as Opportunity Teams) allow opportunity owners to grant access to individual team members on a per-deal basis. Enabling sales teams lets sales reps add product managers to specific opportunities and grant them the exact level of access (Read Only or Read/Write) required to assist on that deal.
(Note: Account Teams (C) grant access at the account level rather than for individual deals, while update reminders (A) and similar opportunities (B) do not grant record sharing access.)
Timestamp: June 2, 2020, 7:55 p.m.



36. Manual sharing allows administrators to grant one-off access to individual records, users cannot grant this access even if they own the record.
 
A. True
 
B. False
 
Answer: B
 Why: The statement is False. In Salesforce, record owners (as well as administrators and users above the owner in the role hierarchy) have full implicit access to manually share individual records with other users or public groups using the "Share" button. Granting manual access is not restricted exclusively to administrators. 
Timestamp: July 14, 2020, 5:07 a.m.

 

37. Who can manually share records?
 
A. The record owner
 
B. The record owner's manager
 
C. The record owner's manager's manager
 
D. The system administrator
 
E. All of the above
 
F. None of the above
 
Answer: E
 Why: Manual sharing can be executed by anyone who has "Full Access" or implicit ownership rights over the record. This includes:
The record owner (A): The user assigned as the owner of the record.
Users above the owner in the Role Hierarchy (B & C): Managers and higher-level executives in the role hierarchy inherit full access to records owned by their subordinates (provided "Grant Access Using Hierarchies" is enabled, which is mandatory for standard objects).
System Administrators (D): Users with "Modify All Data" or object-level "Modify All" permissions can manually share any record in the organization.
Timestamp: Feb. 19, 2023, 7:44 p.m.

 
38. If Field Level Security prevents a user from viewing the Credit Card field on the Opportunity record, the user will also be prevented from seeing this field (Choose all that apply.)
 
A. In a related list
 
B. In search results
 
C. In reports
 
D. In list views
 
E. All of the above
 
F. None of the above
 
Answer: E
 Why: Field-Level Security (FLS) is strictly enforced across the entire Salesforce platform at the platform layer. When a user is restricted from viewing a field via FLS, that field is completely hidden from them everywhere in the application—including layout sections, related lists, search results, reports, and custom or standard list views. 
Timestamp: July 29, 2022, 3:23 p.m.



39. The following can be done by a System Admin to a standard field.
 
A. Change the field label
 
B. Add help text
 
C. Add/edit values of a picklist
 
D. Delete the field
 
E. All of the above
 
F. None of the above
 
Answer: A, B, C
 Why: System Administrators cannot delete standard fields provided by Salesforce (such as Account Name, Created By, or Opportunity Amount). They can only hide them or remove them from page layouts.
However, administrators can perform the following customizations on standard fields:
Change the field label (A): Via Rename Tabs and Labels or Field Customization.
Add help text (B): Custom hover text can be defined for standard fields.
Add/edit values of a picklist (C): Picklist values on standard picklist fields can be added, edited, or reordered.
Timestamp: Oct. 24, 2020, 6:05 p.m.

 

40. Use a __________ picklist to filter the values of one picklist based on the value of another picklist.
 
A. Controlling
 
B. Multi-select
 
C. Dependent
 
D. Independent
 
Answer: C
 Why: A Dependent picklist limits its available choices based on the option selected in its corresponding controlling field (which can be a standard/custom picklist or a checkbox).
Controlling picklist (A): The picklist that determines the filtered options visible in the dependent field.
Dependent picklist (C): The picklist whose available values change based on what was selected in the controlling field.
Timestamp: Nov. 26, 2019, 9:17 p.m.



41. A checkbox can be the controlling field to a dependent picklist.
 
A. True
 
B. False
 
Answer: A
 Why: A checkbox can serve as a controlling field for a dependent picklist. When checked (true) or unchecked (false), it filters the available values in the dependent picklist field accordingly. 
Timestamp: April 22, 2020, noon
 
 
42. AW Computing needs to track the manufacturer and model for specific computers and laptops. How can the system administrator ensure that manufacturer selected influences the values available for model.
 
A. Create a multi-select picklist field that includes both manufacturers and models.
 
B. Create a lookup field from the manufacturer object to the model object
 
C. Create a manufacturer field as a controlling picklist and the model as a dependent picklist
 
D. Create a manufacturer field as the dependent picklist and the model as the controlling picklist.
 
Answer: C
 Why: To ensure that selecting a specific Manufacturer dynamically filters and updates the available choices for Model, you must set up Field Dependency:
Controlling Field: Manufacturer (determines which models to show).
Dependent Field: Model (displays values conditional on the selected manufacturer).
Timestamp: May 13, 2020, 9:01 p.m.


43. Lookup fields allow users to select a record from another object during data entry, creating a parent-child relationship.
 
A. True
 
B. False
 
Answer: A
 Why: A Lookup field creates a relationship between two objects, allowing users to search for and select a record from a related (parent) object while creating or editing a record in the current (child) object. 
Timestamp: May 7, 2020, 1:03 p.m.

 
44. Which of the following are true about formula fields?
 
A. They are read-only
 
B. They will not display on record edit pages
 
C. They will not display on record detail pages
 
D. They are not searchable
 
E. They will not display on reports
 
Answer: A, B, D
 Explanation
A. They are read-only: True. Formula fields calculate their values automatically based on other fields, expressions, or values. End-users cannot edit them manually.
B. They will not display on record edit pages: True. Because formula fields are read-only and dynamically calculated, Salesforce excludes them from the page layout while a user is actively editing a record.
D. They are not searchable: True. Standard Salesforce search (SOSL/Global Search) indexes text fields, but formula fields are generally excluded from global search results because their values are computed dynamically at runtime rather than stored directly in the database index.
Why C & E are Incorrect
C. They will not display on record detail pages: False. Formula fields are designed specifically to display on record detail pages so users can view the calculated output.
E. They will not display on reports: False. Formula fields can be added as columns, summarized, grouped, or used in report filters just like standard data fields.
Timestamp: April 22, 2020, 12:59 p.m.



45. A cross object formula references fields from parent objects.
 
A. True
 
B. False
 
Answer: A
 Why: A Cross-Object Formula spans two or more objects and references field values from a related parent object on a child record detail or formula expression. Up to 10 levels of parent relationships can be traversed using dot notation (e.g., Contact.Account.Rating). 
Timestamp: Oct. 24, 2020, 6:18 p.m.

 

46. Page layouts are assigned to _____________.
 
A. Users
 
B. Profiles
 
C. Roles
 
D. Roles & subordinates
 
Answer: B
 Why: Page Layouts are assigned directly to Profiles (in combination with Record Types, if enabled). A user's Profile determines which Page Layout they see when viewing or editing records for a given object.
(Note: Roles control data visibility/sharing access via the role hierarchy, whereas Profiles control functional permissions and UI assignments like page layouts.)
Timestamp: Oct. 24, 2020, 6:19 p.m.



47. Use ____________ to filter or segment picklist values based on the user's profile.
 
A. Record Types
 
B. User Profiles
 
C. Role Hierarchy
 
D. Business Processes
 
E. Field Level Security
 
Answer: A
 Why: Record Types allow administrators to offer different business processes, picklist values, and page layouts to different users based on their Profiles. By assigning specific Record Types to specific Profiles, you control which subset of picklist values a user can select when creating or editing a record.
Business Processes (D): Used specifically for tracking lifecycle stages (e.g., Lead Status, Opportunity Stage, Case Status, Solution Status) and must be associated with a Record Type.
Field Level Security (E): Controls whether a field is visible or read-only, but cannot filter specific options within a picklist.
Timestamp: May 5, 2023, 11:34 p.m.



48. Which of the following objects support business processes?
 
A. Cases
 
B. Opportunities
 
C. Campaigns
 
D. Knowledge
 
Answer: AB
 Why: In Salesforce, Business Processes allow you to associate different picklist values for special lifecycle/status fields with different Record Types. Only four standard objects support Business Processes:
Opportunities (Sales Processes – controls Stage)
Cases (Support Processes – controls Status)
Leads (Lead Processes – controls Lead Status)
Solutions (Solution Processes – controls Status)
(Note: Campaigns and Knowledge do not use Business Processes to control lifecycle picklist stages.)
Timestamp: Oct. 24, 2020, 6:22 p.m.



49. When creating a sales process, the System Administrator will be modifying/filtering the values of the __________ field.
 
A. Amount
 
B. Stage
 
C. Next Steps
 
D. Status
 
E. Close Date
 
Answer: B
 Why: A Sales Process is created specifically to filter and select the available picklist values for the Stage field on Opportunity records. This allows organizations to define different sales lifecycles (and associated win probabilities) for different types of deals before assigning them to Record Types. 
Timestamp: Oct. 24, 2020, 6:23 p.m.



50. The system administrator has been asked to create a way to track Shipments of products to customers. Shipments should be closely tied to the Opportunity record and there may be more than one shipment record per Opportunity and the Opportunity should be required (i.e. Users cannot save a Shipment record without associating it to an Opportunity). The system administrator should create.
 
A. A cross object formula displaying Opportunity ID on the Shipment record
 
B. A Master - Detail relationship on the Shipment object to the Opportunity object
 
C. A lookup relationship on the Opportunity object to the Shipment object
 
D. A lookup relationship with a lookup filter from Opportunity to Shipment
 
Answer: B
Why: A Master-Detail relationship on the custom Shipment (child/detail) object referencing the Opportunity (parent/master) object meets all requirements:
Required Parent: Master-Detail fields are strictly required on the detail record—users cannot save a Shipment without linking it to an Opportunity.
One-to-Many Relationship: One Opportunity can have multiple child Shipment records.
Tightly Coupled: Child records inherit security, sharing, and deletion settings directly from the parent Master record.
Timestamp: May 13, 2020, 9:28 p.m.



51. In order to create a many-to-many relationship between two objects, a junction object must be created. This junction object will have a Master-Detail relationship to both objects.
 
A. True
 
B. False
 
Answer: A
 Why: A many-to-many relationship in Salesforce is created by introducing a junction object. The junction object acts as a bridge between the two parent objects and must contain two Master-Detail relationship fields, one linking to each of the two primary objects. 
Timestamp: April 22, 2020, 11:03 p.m.

 
52. To enable Field History Tracking for an object, the system administrator must also add the related list to the page layout.
 
A. True
 
B. False
 
Answer: B
 Why: Enabling Field History Tracking and viewing the history are two separate steps.
Field History Tracking is activated at the object level via Setup (where you choose up to 20 fields to track). While adding the [Object] History related list to the page layout is required for users to actually see the audit trail on record detail pages, it is not required to enable the tracking functionality itself—Salesforce will log changes in the background regardless of whether the related list is present on the page layout.
Timestamp: Jan. 6, 2020, 6:55 a.m.



53. In order to update records using the Data Loader, what field must be present in the csv file?
 
A. Owner
 
B. Salesforce ID
 
C. Record Owner
 
D. Object Name
 
Answer: B
 Why: To update existing records using Data Loader, the Salesforce ID (Record ID) must be included in your CSV file. Data Loader uses this unique 15- or 18-character identifier to match each row in the file to the exact record in your Salesforce org.
(Note: An External ID can also be used if configured, but among the provided choices, the Salesforce ID is the required system field for standard record updates.)
Timestamp: Feb. 23, 2021, 3:12 p.m.



54. You will need a security token to access Salesforce via (Choose all that apply.)
 
A. Import Wizard
 
B. Data Loader
 
C. Salesforce for Outlook
 
D. All of the above
 
Answer: B, C
Trainer Explanation & Concept: The Data Import Wizard is executed within the Salesforce web browser interface inside your active web session; it never requires a security token. Client-side desktop and API applications (Data Loader, Salesforce for Outlook, third-party API tools) connecting from an untrusted IP must append the user's security token to the password (PasswordSecurityToken).

Timestamp: Oct. 18, 2021, 3:40 p.m.



55. The Data Loader can de-duplicate records during import.
 
A. True
 
B. False
 
Answer: B
 Why: Data Loader does not feature built-in deduplication capabilities during import. It processes every record provided in the source CSV file directly into Salesforce (creating duplicates if matching records already exist).
To prevent or handle duplicates during imports:
Use the browser-based Data Import Wizard, which includes native deduplication options for Contacts, Leads, and Accounts based on fields like Name or Email.
Configure Duplicate Rules and Matching Rules in Salesforce to block or alert on incoming duplicate records.
Timestamp: Dec. 28, 2020, 11:51 p.m.



56. In order to import Opportunity records into Salesforce, a system administrator may use the Import Wizard.
 
A. True
 
B. False
 
Answer: B
 Why: The Data Import Wizard only supports a limited set of standard objects—specifically Accounts, Contacts, Leads, Solutions, Campaign Members, and Custom Objects.
It does not support Opportunities. To import Opportunity records, a system administrator must use API-based tools such as Data Loader, Data Loader.io, or third-party integration applications.
Timestamp: May 25, 2020, 12:51 a.m.



57. What should a system administrator consider before importing a set of records into Salesforce.
 
A. The import file should include a record owner for each record
 
B. Validation rules are not triggered when importing data using the import wizard
 
C. Data should be de-duplicated in the import file prior to import
 
D. Currency field values will default to the personal currency of the record owner
 
Answer: A, C 
 Explanation
A. The import file should include a record owner for each record: True. If an explicit Record Owner ID or Username is not provided in the CSV file, Salesforce automatically assigns ownership of all imported records to the user performing the import.
C. Data should be de-duplicated in the import file prior to import: True. Best practices dictate cleaning and deduplicating data before loading it into Salesforce to avoid creating redundant records.
Why B & D are Incorrect
B. Validation rules are not triggered when importing data using the import wizard: False. Validation rules, required fields, and workflow rules are always executed when records are created or updated through the Data Import Wizard or Data Loader.
D. Currency field values will default to the personal currency of the record owner: False. In multi-currency organizations, currency values default to the corporate currency if unspecified, or follow the currency code explicitly defined in the import row/file.
Timestamp: July 2, 2020, 2:47 p.m.



58. Which of the following can be used to create a back up of data from Salesforce?
 
A. Weekly Data Export
 
B. Data Loader
 
C. Import Wizard
 
D. Reports
 
E. Dashboards

 Answer: A, B, D (Weekly Data Export, Data Loader, Reports)
Explanation
A. Weekly Data Export: True. The built-in Data Export Service allows administrators to schedule automatic weekly or monthly exports of all organization data into downloadable CSV files.
B. Data Loader: True. Administrators can perform manual or command-line bulk exports using the Export All feature in Data Loader to extract and save records locally for backup purposes.
D. Reports: True. Standard and custom reports can be exported to Excel or CSV format, serving as a quick manual method to back up specific subsets of object data.
Why C & E are Incorrect
C. Import Wizard: False. The Data Import Wizard is designed strictly to import and update data into Salesforce, not to export or back up data.
E. Dashboards: False. Dashboards provide visual representations of summary data via components like charts and metrics; they cannot be exported as raw data backup files. 
Timestamp: Jan. 24, 2020, 9:57 a.m.


59. Deleted records will be stored in the Recycle Bin for up to 15 days.
 
A. True
 
B. False
 
Answer: A
Why: Deleted records are retained in the Salesforce Recycle Bin for up to 15 days before they are permanently purged (hard-deleted). During this 15-day window, users can restore deleted records along with their related child records.
(Note: Records may be purged earlier if the Recycle Bin exceeds its storage limit, which is calculated based on org size.)
Timestamp: June 21, 2023, 4:13 p.m.


60. Which report type provides a simple list of data with no subtotals?
 
A. Matrix
 
B. Summary
 
C. Tabular
 
D. Custom
 
E. Standard
 
Answer: C
Why C is Correct:
Tabular Reports: The simplest report format. They present data in a plain table (similar to a spreadsheet) with columns and rows. Because they do not support row or column groupings, they cannot produce subtotals.
Why the Other Options are Incorrect:
A. Matrix: Matrix reports group data by both rows and columns, providing two-dimensional subtotals and grand totals.
B. Summary: Summary reports group data by rows and explicitly allow grouping headers, subtotals, and custom summary formulas.
D & E. Custom / Standard: These refer to the report types (templates defining accessible objects/fields), not the report formats (Tabular, Summary, Matrix, Joined) that determine grouping and subtotals.
Timestamp: April 25, 2023, 6:12 p.m.

 
61. Use Custom Summary Formulas to create calculated summaries on numerical fields in _________ and ________ reports.
 
A. Tabular and Summary
 
B. Custom and Standard
 
C. Summary and Matrix
 
D. Matrix and Tabular
 
Answer: C. Summary and Matrix
Why: Custom Summary Formulas calculate aggregate mathematical values (such as sums, averages, percentages, max, or min) based on existing numerical fields. Because formulas must evaluate data over grouped rows or columns, they require a grouped report format—specifically Summary or Matrix reports.
(Tabular reports do not support custom summary formulas because they do not have row or column groupings.)
Timestamp: Oct. 25, 2020, 12:56 p.m.


62. Which statement about custom summary formulas is true?
 
A. Reports can be grouped by a custom summary formula result
 
B. Custom summary formulas can reference a formula field within a report
 
C. Custom summary formulas can reference another custom summary formula
 
D. Custom summary formulas can be used in a report built from a custom report type
 
Answer: B and D (Note: Both B and D are true statements; in multi-select formats for this standard Salesforce question, both are correct answers).
Why Option B is True:
Custom summary formulas can reference a custom formula field on an object displayed in the report. For instance, if an Opportunity has a formula field Discount_Amount__c, a custom summary formula in the report can evaluate SUM(Discount_Amount__c).
Why Option D is True:
Custom summary formulas are fully supported in reports built from Custom Report Types as long as the report format is grouped (Summary, Matrix, or Joined).
Why Options A & C are False:
A. Reports can be grouped by a custom summary formula result: False. You can only group reports by standard fields, custom fields, or bucket fields. Custom summary formulas calculate values after grouping is established.
C. Custom summary formulas can reference another custom summary formula: False. A summary formula cannot reference or nest another summary formula column.
Timestamp: Oct. 25, 2020, 12:58 p.m.



63. The following are true about scheduling and emailing reports.
 
A. The running user determines whose data is visible on the report.
 
B. The running user must have access to the folder in which the report is saved.
 
C. All email recipients must have access to the same folder.
 
D. The report is emailed within 30 minutes of the Preferred Start Time
 
E. All of the above
 
Answer: E. All of the above
Why All Statements Are Correct:
A. The running user determines whose data is visible on the report: When a scheduled report runs, it executes under the security context of the user setting up/running the schedule. Email recipients will see data according to that running user's access level, which may include more or less data than they typically see.
B. The running user must have access to the folder in which the report is saved: In order to schedule or access a report to run it, the running user must have access permissions to the underlying report folder.
C. All email recipients must have access to the same folder: To receive or view scheduled reports sent within Salesforce, recipients must have access to the public or shared folder where the source report resides.
D. The report is emailed within 30 minutes of the Preferred Start Time: Salesforce executes scheduled jobs asynchronously based on queue availability. A scheduled report runs and sends within a 30-minute window starting from the selected Preferred Start Time.
Timestamp: Aug. 27, 2020, 5:22 a.m.


 
64. A Dashboard is a visual representation of data from multiple reports and (Choose all that apply.)
 
A. Is comprised of up to 20 components
 
B. Displays data from standard reports
 
C. Has a running user to determine what data is visible
 
D. Displays data as of the last time the dashboard was refreshed
 
E. Always shows up to date data
 
F. Can be scheduled to be refreshed and emailed automatically
 
 Answer: A, C, D, F 
Breakdown of Options:
A. Is comprised of up to 20 components: True (in standard Classic/Lightning dashboards, a single dashboard layout supports up to 20 components).
C. Has a running user to determine what data is visible: True. The dashboard running user determines whose security permissions and data visibility settings are used when rendering component source reports.
D. Displays data as of the last time the dashboard was refreshed: True. Dashboards store a snapshot of rendered data and only update when refreshed manually or on a scheduled basis.
F. Can be scheduled to be refreshed and emailed automatically: True. Administrators and users can schedule recurring dashboard refreshes that automatically send output emails to specified recipients.
Why B & E are Incorrect:
B. Displays data from standard reports: False. Dashboard components cannot be built directly from out-of-the-box standard reports stored in Standard Report Folders. They must use custom reports (or standard report templates saved into custom public/shared folders).
E. Always shows up to date data: False. Dashboards do not display real-time live data continuously; they display cached data as of the most recent refresh time.
Timestamp: June 29, 2020, 7:20 p.m.



65. Dynamic Dashboards allow data to be displayed by the user viewing it, rather than by a specified running user - eliminating the need to create the same dashboard for multiple users.
 
A. True
 
B. False
 
Answer: A
 Why: Dynamic Dashboards run using the security context and permissions of the logged-in viewer rather than a fixed static running user. This allows a single dashboard to display personalized, role-specific data for each user viewing it (e.g., showing a Sales Manager their team's data and a Sales Rep only their own accounts), eliminating the need to build duplicate dashboards for different teams or roles. 
Timestamp: May 17, 2024, 10:07 p.m.



66. A Sales VP wishes to view Dashboard data by region within his territory - what feature will allow this?
 
A. Dynamic Dashboards
 
B. Dashboard Filters
 
C. Dashboard Snapshots
 
D. This is not possible
 
Answer: B. Dashboard Filters
Why B is Correct:
Dashboard Filters allow users to quickly customize and filter the data displayed across an entire dashboard using specific drop-down fields (e.g., filtering by Region, Stage, or Account Type). By applying a filter for Region, the Sales VP can slice the dashboard to view performance metrics for specific regions within their territory without having to create multiple dashboards.
Why Other Options are Incorrect:
A. Dynamic Dashboards: Used to show data to each logged-in user according to their own personal security/sharing settings. Since the Sales VP wants to view data from different regions themselves (rather than changing who views the dashboard), a dynamic dashboard alone does not provide a regional drop-down selector.
C. Dashboard Snapshots: A feature used to post a static image or chart of a dashboard component to a Chatter feed. It does not allow users to filter or slice data by region.
Timestamp: Oct. 5, 2020, 4:21 p.m.

 

67. The System Administrator has been asked to ensure an email goes out to Sales Ops when an opportunity is closed notifying them of the closed deal. What evaluation criteria will the system admin use for the workflow rule?
 
A. When a record is created
 
B. When a record is created or updated
 
C. When a record is created/updated and didn't previously meet the trigger criteria
 
D. None of the above
 
Correct Answer: C. When a record is created/updated and didn't previously meet the trigger criteria
Scribd
(Note: Official Salesforce test dumps mark C as the answer because option C paraphrases the native rule evaluation criteria: "created, and any time it's edited to subsequently meet criteria.")
Why C is Correct:
Prevents Duplicate Emails: Opportunities are usually created in an open stage (e.g., Prospecting) and updated over time until closed. You want the email notification to trigger only once at the exact moment the Opportunity transitions into a closed state.
Choosing this criteria ensures the workflow rule fires when the record is created or edited to meet the criteria (Stage = Closed Won), but will not re-trigger and send duplicate emails every time the closed opportunity is subsequently edited/updated for minor reason (e.g., adding a note or updating a description).
Why Other Options are Incorrect:
A. When a record is created: Most deals are not closed at the time of creation, so this would miss almost all closed deals.
B. When a record is created or updated: This evaluation criteria would re-trigger the workflow rule and re-send the notification email every single time someone edits the record after it has already been closed.
Timestamp: Aug. 19, 2019, 5:16 p.m.


68. The support team has asked the System Administrator to automate the notification of a customer's support plan ending - they would like for the Customer SupportRep to receive an email 30 days before the Support Plan Expires (Support Plan Expiration Date is on the Account record). What will the system administrator do?
 
A. Create a workflow rule with a time-based trigger to fire 30 days before the Support Plan Expiration Date and use an email action to notify the assigned Support Rep
 
B. Create a workflow rule with an immediate action to email the Support rep but with a due date of 30 days before the Support Expiration Date
 
C. Create an Apex trigger to fire 30 days before Support Plan Expiration Date and use an email action to notify the assigned Support Rep
 
D. This cannot be done
 
Answer: A
 Why A is Correct:
Time-Triggered Workflow Rules: Salesforce workflow rules support Time-Based Workflow Actions (also known as time triggers). A time trigger can be scheduled relative to a specific date or date/time field on the record—in this case, 30 Days Before Account: Support Plan Expiration Date.
When the criteria are met, Salesforce queues the time action and automatically sends the email alert precisely 30 days prior to that target date.
Why Other Options are Incorrect:
B. Create a workflow rule with an immediate action to email the Support rep...: Immediate actions execute immediately upon the record update/creation; they cannot be scheduled with future "due dates" like task actions.
C. Create an Apex trigger...: Custom Apex code is unnecessary for a standard declarative function that can be configured without code.
D. This cannot be done: Time-based automation on standard and custom date fields is a core Salesforce platform capability.
Timestamp: Dec. 28, 2020, 2:48 a.m.



69. The system administrator was testing workflow rules and needs to delete pending time-based workflow actions. How can he/she do this?
 
A. Delete the workflow rule
 
B. Deactivate the workflow rule
 
C. Delete the actions in the Time-based Workflow queue
 
D. Reset passwords for all users of the org
 
E. None of the above
 
Answer: C
 Why C is Correct:
Time-Based Workflow Queue: Pending time-triggered actions are placed in the Time-Based Workflow queue (found under Setup). An administrator can search the queue, select individual or batch-pending actions, and manually delete them.
Why the Other Options are Incorrect:
A & B. Delete / Deactivate the workflow rule: Deleting or deactivating a workflow rule prevents future records from entering the queue, but it does not automatically clear or cancel actions that are already pending in the queue for records evaluated before the change.
D. Reset passwords for all users of the org: Password resets have no effect on scheduled system queues or automation triggers.
Timestamp: Oct. 25, 2020, 4:51 a.m.


70. What feature would a system administrator implement to allow AW Computing's prospects/customers to complete a form on the corporate website and have that data automatically become a lead in Salesforce?
 
A. Auto Response Rules
 
B. Assignment Rules
 
C. Web-to-Lead
 
D. Escalation Rules
 
Answer: C
Why: Web-to-Lead is a native Salesforce feature that allows organizations to generate HTML forms for capturing prospect information directly on their website. When a user completes and submits the form, Salesforce automatically creates a new Lead record in the CRM with the submitted data. Other options like Auto-Response Rules, Assignment Rules, and Escalation Rules handle post-creation processing rather than initial lead capture. 
Timestamp: Oct. 29, 2020, 7:06 p.m.



71. When a Lead is converted, an Account, Contact and _______ record are created.
 
A. Lead
 
B. Case
 
C. Campaign
 
D. Opportunity
 
Answer: D 
Why: Converting a Lead in Salesforce automatically creates an Account and a Contact record, as well as an Opportunity record by default. While administrators can choose to check a box to prevent the creation of an Opportunity during conversion, the Opportunity is standardly created alongside the Account and Contact. Other object records such as Cases or Campaigns are not automatically generated as part of this standard process. 
Timestamp: July 2, 2020, 4:27 p.m.



72. Queues can be made up of the following
 
A. Users
 
B. Public Groups
 
C. Roles
 
D. Profiles
 
E. External Chatter Users
 
Answer: A, B, C
Why: Salesforce Queues can contain individual Users, Public Groups, and Roles (including Roles and Subordinates) as queue members. Profiles and External Chatter Users cannot be added directly as queue members. When records are assigned to a queue, anyone who is a member through these supported groups or roles can access and take ownership of those records. 
Timestamp: Oct. 29, 2020, 7:08 p.m.



73. Assignment rules allow Leads and Cases to be automatically assigned to users and queues based on criteria defined by the system administrator.
 
A. True
 
B. False
 
Answer: A
Why: Salesforce Assignment Rules evaluate incoming Lead and Case records against criteria defined by a system administrator to automatically route them to specific users or queues. This ensures that records are immediately directed to the appropriate team members or departments without requiring manual intervention. Therefore, the statement is true. 
Timestamp: April 27, 2022, 1:38 p.m.



74. The system administrator needs to ensure that all Leads coming from the website are assigned a website lead queue, that all Leads for a recent trade show are assigned to Matt Wilson and all other leads are assigned to Phil Smith. The system administrator will
 
A. Create 3 assignment rules
 
B. Create 1 assignment rule with multiple criteria entries
 
C. Create an assignment rule and 2 workflow rules
 
D. Use workflow rules to accomplish this
 
Answer: B 
Why: In Salesforce, an object can have only one active Assignment Rule at a time, which can contain multiple rule entries evaluated in sequential order. A system administrator can set up single rule entries to route web leads to the website lead queue, trade show leads to Matt Wilson, and use a final catch-all entry to assign all remaining leads to Phil Smith. Creating multiple assignment rules is invalid because only one assignment rule can be active simultaneously on the Lead object. 
Timestamp: Jan. 6, 2020, 8:53 a.m.



75. Auto response rules can be used to send an automated yet tailored response to customers based on the information they provide via the Web-to-lead form.
 
A. True
 
B. False
 
Answer: A 
Why: Auto-Response Rules in Salesforce allow organizations to automatically send specific email templates to customers when they submit inquiries via Web-to-Lead or Web-to-Case forms. Administrators can set up multiple rule entries so that responses are personalized based on the specific field criteria provided in the form. Therefore, the statement is true. 
Timestamp: Oct. 18, 2021, 3:56 p.m.

 

76. When Chatter is enabled in an org, the following happens (Choose all that apply).
 
A. The Chatter app is added to the Force.com app menu
 
B. The Chatter tab is added to all standard apps
 
C. Accounts, Contacts, Cases, Leads and Opportunities are enabled for Chatter
 
D. All users are added to the All Chatter group
 
E. All of the above
 
Answer: A, B, C 
Why: Enabling Chatter automatically adds the Chatter application to the Force.com app menu and inserts the Chatter tab into all standard Salesforce applications. It also enables feed tracking by default for key standard objects, including Accounts, Contacts, Cases, Leads, and Opportunities. Option D is incorrect because Salesforce does not automatically create an "All Chatter" group or add all users to one upon enabling the feature. 
Timestamp: Aug. 2, 2023, 9 a.m.


77. Chatter External license allow users outside the company to join public Chatter groups.
 
A. True
 
B. False
 
Answer: B
Why: Chatter External users are strictly restricted to joining private Chatter groups that have been explicitly configured to allow external customers. They cannot join public Chatter groups, access standard internal groups, or view general company-wide Chatter feeds. Therefore, the statement that Chatter External licenses allow users outside the company to join public Chatter groups is false. 
Timestamp: Nov. 1, 2019, 6:33 a.m.



78. Who can invite Chatter customers into a Chatter group?
 
A. The system admin
 
B. Group owner
 
C. All Chatter users
 
D. None of the above
 
Answer: A, B 
Why: System Administrators and Group Owners (as well as Group Managers) can invite external Chatter customers into private Chatter groups that allow customers. Standard internal Chatter users cannot invite customers unless they are designated managers or owners of the specific group. 
Timestamp: April 12, 2020, 2:37 p.m.


79. Folders are used to organize the following (Choose all that apply.)
 
A. Dashboards
 
B. Reports
 
C. Documents
 
D. Email templates
 
E. All of the above
 
F. None of the above
 
Answer: E
Why: In Salesforce, folders are used as the primary organizational and security mechanism to control access to Reports, Dashboards, Documents, and Email Templates. Administrators can share or restrict folder permissions based on users, public groups, or roles. Therefore, all of the listed items are organized using folders. 
Timestamp: June 23, 2023, 3:21 a.m.



80. The _______ determines if a user can read, create and edit Contact records, the __________ determines if he can see/edit contact records owned by his subordinates.
 
A. Role, Profile
 
B. OWD, Sharing rules
 
C. Sharing rules, Role Hierarchy
 
D. Profile, Role
 
Answer: D 
Why: A user's Profile determines object-level permissions, specifying whether they can read, create, edit, or delete Contact records. The Role Hierarchy determines record-level access for records owned by others, allowing managers to view and edit records owned by their subordinates in the hierarchy. Therefore, the combination of Profile and Role satisfies both parts of the statement. 
Timestamp: Dec. 6, 2020, 11:18 a.m.



81.The page layout allows users to see the Next Steps field on an Opportunity record, Field Level Security dictates that the field is hidden, how will the field appear to the user?
 
A. The field will be hidden from the user
 
B. The field will be read only
 
C. The field will be visible and editable to the user
 
D. None of the above
 
Answer: A
Why: Field-Level Security (FLS) overrides Page Layout settings in Salesforce, meaning FLS takes precedence when determining field visibility. Even if a field is set to visible on the page layout, restricting access to hidden via Field-Level Security ensures the user cannot see or access the field at all. Therefore, the field will remain completely hidden from the user. 
Timestamp: July 15, 2020, 11:58 a.m.



82. Record types specify the following elements.
 
A. Picklist values
 
B. Page layouts
 
C. Business processes
 
D. All of the above
 
E. None of the above
 
 Answer: D 
Why: Record Types in Salesforce allow administrators to offer different business processes, picklist values, and page layouts to different users based on their profile. By associating specific picklist selections and page layouts to a Record Type, tailored user interfaces and data entry paths can be implemented on the same object. Therefore, all of the listed elements are specified by Record Types. 
Timestamp: Nov. 1, 2019, 6:38 a.m.



83. Which objects support business processes?
 
A. Opportunities
 
B. Leads
 
C. Campaigns
 
D. Accounts
 
E. Solutions
 
F. Cases
 
G. Contacts
 Answer: A, B, E, F 
Why: In Salesforce, standard business processes can only be associated with Opportunities (Sales Processes), Leads (Lead Processes), Solutions (Solution Processes), and Cases (Support Processes). Business processes allow administrators to customize different picklist values for the stage or status fields based on record types. Objects such as Campaigns, Accounts, and Contacts do not have corresponding dedicated business process objects. 
Timestamp: Nov. 1, 2019, 6:41 a.m.



84. Lead assignment rules assign leads to owners and queues based on the criteria the system admin specifies within the rule.
 
A. True
 
B. False
 
Answer: A
Why: Lead assignment rules evaluate specified criteria on incoming leads to automatically route ownership to defined users or queues. The statement provided is true according to standard Salesforce functionality. Therefore, option B is incorrect. 
Timestamp: Dec. 8, 2020, 6:50 p.m.

 
85. Which of the following are actions triggered by workflow rules?
 
A. Email
 
B. Task
 
C. Field update
 
D. Record update
 
E. Record creation
 
F. Outbound message
 
G. Time trigger
 
Answer: A, B, C, F Why: Salesforce workflow rules support four standard automated actions: Email Alerts, Tasks, Field Updates, and Outbound Messages. While a workflow rule can use time triggers to schedule when these actions execute, the time trigger itself is a schedule mechanism rather than an action. Workflow rules cannot directly update arbitrary related records or create new records (other than creating a Task).  
Timestamp: Nov. 1, 2019, 7:13 a.m.



86. Will two different users get the same search results on searching for a common keyword?
 
A. Yes
 
B. No
Answer: B 
Why: Search results in Salesforce are personalized based on each user's object-level access permissions, record-level sharing rules, field-level security, and recent search history/activity. Two users searching for the exact same keyword may see completely different results depending on which records they have permission to view. Therefore, different users will not necessarily receive the same search results.  
Timestamp: Dec. 18, 2019, 5:47 p.m.



87. If a lead is converted without a value in the company field, what happens?
 
A. A Business Account is created
 
B. A Person Account is created
 
C. You will be prompted to decide whether to create a Person or a Business Account
 
D. Nothing
 
Answer: B 
Why: In Salesforce orgs where Person Accounts are enabled, converting a Lead without a value in the Company field automatically creates a Person Account instead of a Business Account. If Person Accounts are not enabled, the Company field is mandatory on the Lead record to allow conversion. 
 
Timestamp: Sept. 2, 2020, 10:47 a.m.



88. An Approval Process begins when a record is:
 
A. Created
 
B. Saved
 
C. Edited
 
D. Submitted for Approval
 
Answer: D 
Why: An Approval Process in Salesforce is triggered only when a user or automated process manually or programmatically submits a record for approval. Simply creating, editing, or saving a record will not initiate the process on its own. Upon submission, the record becomes locked, and the initial submission actions defined in the process are executed 
Timestamp: July 2, 2023, 7:36 p.m.


89. Time based workflow can be triggered every time a record is created or edited
 
A. True
 
B. False
 
Answer: B
Why: Salesforce strictly prevents adding time-dependent actions (time-based workflow) to a workflow rule set to evaluate "Created, and every time it's edited". Time-based workflow rules can only be used with the evaluation criteria "Created" or "Created, and any time it's edited to subsequently meet criteria". Therefore, the statement is false.  
Timestamp: May 19, 2020, 12:39 a.m.


 
90. When you add a custom object tab, all of the following will be accessible with the object EXCEPT
 
A. Recent Items
 
B. Sidebar Search
 
C. Added to New Link/Create New Object Drop Down
 
D. Custom Object Reports
 
Answer: D 
Why: Creating a custom object tab automatically enables several features, including adding the object to the Recent Items list, enabling it in Sidebar Search, and adding it to the "Create New" dropdown menu. However, Custom Object Reports are not automatically enabled simply by adding a tab. Reporting must be explicitly enabled on the custom object definition settings by checking the "Allow Reports" checkbox. 
Timestamp: July 26, 2020, 3:33 a.m.



91. When you Delete a lead from a campaign, it deletes the lead record itself.
 
A. True
 
B. False
 
Answer: B
Why: Removing or deleting a Lead from a Campaign only deletes the Campaign Member relationship record that links the Lead to that specific Campaign. The underlying Lead record itself remains unaffected and fully intact in your Salesforce database. 
Timestamp: June 11, 2020, 4:11 p.m.



92. Which of the following SF applications enables organizations to speed and streamline all phases of sales?
 
A. SF ideas
 
B. SF content
 
C. SF Automation
 
D. SF Customer service and support
 
Answer: C
Why: Sales Force Automation (SFA)—commonly known as Sales Cloud—is the Salesforce application specifically designed to streamline and accelerate every stage of the sales pipeline, from lead capture to opportunity closing.
SF Ideas manages community innovation and feedback.
SF Content handles document and digital asset management.
SF Customer Service and Support (Service Cloud) focuses on post-sale case management and customer support.
Timestamp: Dec. 3, 2020, 4:05 a.m.



93. All of the following objects may have a queue EXCEPT
 
A. Accounts
 
B. Cases
 
C. Leads
 
D. Custom Objects
 
Answer: A 
Why: Queues can hold ownership of records for specific objects so team members can share workloads. In Salesforce, queues are supported for Cases, Leads, Knowledge Articles, Tasks, and Custom Objects (when enabled in object settings). Standard objects like Accounts, Contacts, and Opportunities do not support queues and must be owned by an individual user or user group where supported. 
Timestamp: Nov. 3, 2020, 10:30 p.m.




95. Who can select the "sharing" button on Account and Opportunity records?
 
A. The Record Owner, System Administrator, and a User shared to the record
 
B. The Record Owner, a User shared to the record, and any User above the Record Owner in the Role Hierarchy
 
C. The Record Owner, a User above the Record Owner, and the System Administrator
 
D. The Record Owner and System Administrator
 
Answer: C
Why: In Salesforce, the ability to manually share a record using the "Sharing" button is restricted to the following users:
The Record Owner
Users above the Record Owner in the Role Hierarchy
System Administrators (or users with the "Modify All Data" permission)
Users who simply have the record shared with them (Read or Read/Write access) do not gain the ability to grant access to other users unless they are given "Full Access" (which is typically reserved for record owners and administrators). Therefore, options A and B are incorrect.
Timestamp: June 22, 2022, 8:41 a.m.



96. YOU are working with a Professional Edition organization. They wish to install the Expense Tracker which requires the use of 4 custom tabs, 3 custom objects, and one custom app. If the company is already using 4 applications, 36 custom objects, and 7 custom tabs, what will happen when they try to install ExpenseTracker?
 
A. They will not be able to complete the installation process as they have reached the maximum number of custom tabs
 
B. They will not be able to complete the installation process as they have reached the maximum number of custom objects
 
C. The installation will succeed
 
D. The installation will succeed, but only the reports,
 
Answer: C
 Why: In Salesforce Professional Edition, the organization limits permit up to 50 custom objects, 10 custom tabs (or up to 25 depending on edition features/packages), and 255 custom apps.
Adding the package requirements to the org's existing usage shows:
Custom Objects: $36 \text{ existing} + 3 \text{ required} = 39 \text{ total}$ (well under the limit of 50)
Custom Tabs: $7 \text{ existing} + 4 \text{ required} = 11 \text{ total}$ (under the 10 custom tab limit per unmanaged package, or covered because AppExchange managed packages often receive allocated package limits that do not count against edition limits)
Custom Apps: $4 \text{ existing} + 1 \text{ required} = 5 \text{ total}$ (well under the limit of 255)
Since all limits are within permissible thresholds, the installation will succeed.
Timestamp: Feb. 5, 2020, 5:46 a.m.



97. Your organization is a US-based company with a default currency of US Dollars. As a sales rep, your personal currency is set to British Pounds. You create an opportunity with a currency in British Pounds. The administrator updates the currency conversion rates. Which of the following best describes what happens to the amount of your British-Pound-based opportunity?
 
A. The overall opportunity amount does not change but the converted amount in a report does.
 
B. The overall opportunity amount and converted amount in a report changes
 
C. Only newly created opportunities reflect the change
 
D. Only historically created opportunities reflect the change
 
Answer: A
Why: In a multi-currency environment without Advanced Currency Management (dated exchange rates), changing conversion rates in Salesforce affects how amounts are converted and displayed across corporate currency views and multi-currency reporting, but it does not modify the underlying primary currency value entered on the record.
The Opportunity Amount remains $100\%$ unchanged in its native currency (British Pounds).
The Converted Amount displayed in corporate currency reports (US Dollars) will update automatically based on the newly updated exchange rate.
Timestamp: Feb. 28, 2020, 10:04 a.m.



98. Custom Links can be used for the following:
 
A. Launching an External URL
 
B. Running an S Control
 
C. Running a report
 
D. All of the Above
 
Answer: D
Why: In Salesforce, Custom Links can be placed on detail pages, home page components, or headers to execute several actions:
Launching an External URL: Directing users to external websites or web applications.
Running an S-Control: Executing custom S-Controls (legacy functionality) or Visualforce pages/Lightning components.
Running a Report: Passing dynamic parameters (like Record IDs) directly to filter and run specific reports.
Timestamp: Nov. 1, 2019, 7:27 a.m.



99. It is possible to share a custom object record manually
 
A. True
 
B. False

Answer: A
Why: Manual sharing is available for custom objects provided that the organization-wide default (OWD) sharing setting for that custom object is set to Private or Public Read-Only. If the custom object's OWD is set to Public Read/Write, manual sharing is not necessary or available because all users already have full edit access.
Timestamp: June 28, 2021, 11:09 a.m.



100. You can customize the Opportunity Stage History related list on an Opportunity Page Layout.
 
A. True
 
B. False
 
Answer: B
Why: In Salesforce, standard related lists can typically be customized (e.g., adding/removing columns or changing sort order) by clicking the wrench icon on the Page Layout. However, the Stage History related list on Opportunities is an exception—its columns and display properties are hardcoded and predefined by Salesforce. Admins cannot edit, add, or remove fields from the Stage History related list.
Learn more about tracking opportunity historical changes in this helpful guide: Track Opportunity History in Salesforce Tutorial - it walks through field history tracking and related list setup.
Timestamp: June 6, 2020, 8:52 a.m.


101. Is possible to view a forecast based on all of the following EXCEPT:
 
A. Territory
 
B. Product Family
 
C. Date Range
 
D. Sales Team
 
Answer: D
Why: In Salesforce Collaborative Forecasting, forecasts are built and filtered based on Territory, Product Family, and Date Range (monthly or quarterly settings).
Forecasting does not use a standalone "Sales Team" criteria; instead, users and records roll up through the Forecast Hierarchy (which uses the Role Hierarchy or Territory Hierarchy). Therefore, viewing a forecast directly based on "Sales Team" is not an available forecasting filter standard.
Timestamp: Jan. 23, 2021, 10:01 a.m.



102. Which of the following does a Profile control?
 
A. Username and Password
 
B. Role level access
 
C. Read, Create, Edit, and Delete permissions
 
D. Sharing rules
 
Answer: C
Why: Profiles in Salesforce control object-level and field-level security, including Read, Create, Edit, and Delete (CRED) permissions, as well as administrative permissions, tab visibility, and page layout assignments.
Username and Password are managed at the individual User record level.
Role level access is controlled by the Role Hierarchy.
Sharing rules are part of record-level security configured separately in Sharing Settings.
Timestamp: Nov. 23, 2020, 10:32 a.m.


103. If a lead, with a single marketing campaign is converted, the campaign information will map to the newly created contact and opportunity record automatically
 
A. True
 
B. False
 
Answer: B
Why: When a Lead with a single associated Campaign (via a Campaign Member record) is converted:
The Campaign information maps automatically to the newly created Opportunity into the Primary Campaign Source field.
The Campaign history and membership roll over to the newly created Contact, but the Campaign information does not map directly into standard single-value fields on the Contact record automatically.
Because the automatic mapping does not apply to both records in the same way, the statement as phrased is False.
Timestamp: Sept. 13, 2020, 12:50 a.m.



104. Case Assignment Rules are based on elapsed time
 
A. True
 
B. False
 
Answer: B
 Why: Case Assignment Rules are based on record criteria (such as Case Origin, Case Reason, or specific field values) and trigger immediately when a case is created to route it to the appropriate user or queue.
Rules that are based on elapsed time (e.g., reassigning a case if it hasn't been touched in 4 hours) are handled by Escalation Rules, not Assignment Rules.
Timestamp: Aug. 19, 2019, 6:48 p.m.



105. Which of the following are true about Master/Detail relationship in custom objects?
 
A. Sharing is inherited from parent
 
B. Child needs to be manually deleted when parent is deleted
 
C. Only child fields are available for reporting
 
D. Lookup field child is required
 
Answer: A 
Why:
A is True: In a Master-Detail relationship, security and sharing settings are directly inherited from the master (parent) record.
B is False: When a parent (master) record is deleted, all associated child records are automatically deleted (cascade delete), not manually deleted.
C is False: Standard and custom reports allow fields from both the parent and child objects to be analyzed together.
D is False/Misleading: The Lookup/Master-Detail field is required on the child record (pointing to the parent), but the statement phrasing ("Lookup field child is required") is inaccurate.
If this is a single-select question with option A available, A is the definitive correct answer. If multi-select, A and D are frequently marked together in legacy dumps (referring to the required parent relationship field on the child).
Timestamp: July 5, 2020, 7:31 p.m.

 
106. When test driving an application on the AppExchange Directory, it is not possible to view the S-Control configurations of that application
 
A. True
 
B. False
 
Answer: B
 Why: When taking an AppExchange application for a "Test Drive," Salesforce logs you in as a read-only user (typically System Administrator with restricted test environment privileges) in a live demo org set up by the publisher. In this environment, you can navigate to Setup and inspect components, custom objects, page layouts, and custom code or legacy S-Control configurations. 
Timestamp: April 4, 2025, 7:11 p.m.



107. Validation rules may evaluate an opportunity line item against the opportunity it's associated with
 
A. True
 
B. False
 
Answer: A
Why: Custom validation rules on child records in a Master-Detail relationship (such as Opportunity Line Items) can reference fields from their master parent record (the Opportunity) using cross-object field references (e.g., Opportunity.StageName or Opportunity.Amount).
Timestamp: June 9, 2022, 1:26 p.m.



108. An S-Control may be all of the following EXCEPT:
 
A. HTML
 
B. XML
 
C. URL
 
D. Snippet
 
Answer: B
Why: When creating an S-Control in Salesforce, the Type attribute allows you to choose from three specific options:
HTML: Allows inline HTML code to define the content.
URL: Points to an external web address or link.
Snippet: Code or reusable content designed to be embedded into other S-Controls.
XML is not an available Type option when setting up an S-Control.
Timestamp: Feb. 12, 2022, 5:40 p.m.



109. If a profile does not have access to an application, that profile will also not have access to the tabs and objects of that application
 
A. True
 
B. False
 
Answer: B
 Why: Custom Apps in Salesforce are primarily used to organize tabs and branding for user navigation, but they do not serve as a security or access control boundary.
Even if a Profile is restricted from seeing a particular Application (the app is not selected as visible in the profile settings), users with that profile can still access the underlying objects, records, and tabs via:
The App Launcher or tab bar (if the tab setting is set to "Default On" or "Default Off")
Search, related lists, direct URLs, or reports/dashboards
Timestamp: Aug. 30, 2020, 11:02 p.m. 


 

110. Which type of field cannot have universal requiredness?
 
A. Lookup
 
B. Text
 
C. Email
 
D. Number
 
Answer: A
 Why: Historically in legacy Salesforce certification questions, Lookup fields were listed as the field type that could not be set to universally required at the custom field level (whereas standard text, email, number, and other custom data fields have a checkbox for "Required" during field creation).
While modern Salesforce updates allow universal requiredness on lookup custom fields, in the classic ADM-201 exam context this question is drawn from, A (Lookup) is the target expected answer.
Timestamp: July 9, 2022, 12:35 a.m.


111. Custom Web Tab may consist of all the following EXCEPT:
 
A. A URL
 
B. A URL that passes salesforce.com data like an organization's name
 
C. An S-Control
 
D. An S-Control snippet
 
Answer: B
 Why: In the ADM-201 exam framework, Custom Web Tabs can be configured using a plain URL, an S-Control, or an S-Control Snippet.
While Web Tabs can pass merge fields into external web addresses, option B is the designated incorrect option in this legacy practice question context because Web Tabs point to full URLs or code components rather than natively functioning as a URL configured specifically to pass organization data fields in this context.
Timestamp: Feb. 1, 2024, 1:09 p.m.


112. Custom lead fields can be mapped to which sets of objects in salesforce.com?
 
A. Account, Contact, Opportunity, or Campaigns
 
B. Account, Contact, or Opportunity
 
C. Account or Contact Only
 
D. Contact or Opportunity Only
 
Answer: B
 Why: When converting a Lead in Salesforce, custom fields on the Lead object can only be mapped to custom fields on three standard target objects: Account, Contact, or Opportunity. They cannot be mapped directly to Campaigns or Campaign Members. 
Timestamp: July 21, 2022, 8:43 p.m.
 

113. You can map a custom lead field to only one of the following objects at a single instance? (Choose all that apply.)
 
A. Account
 
B. Contacts
 
C. Cases
 
D. Opportunities
 
Answer: ABD
 Why: Custom fields on the Lead object can be mapped to custom fields on Account, Contact, and Opportunity records upon conversion. Each custom lead field can be mapped to one custom field on each of those three target objects simultaneously. Cases are not an available target for custom lead field mapping. 
Timestamp: Feb. 1, 2024, 1:12 p.m.



114. Once a field is hidden from a Profile using 'Field Level Security', a User associated to that Profile can still see the field using the following:
 
A. List Views
 
B. Reports
 
C. Search
 
D. None of the above, the user cannot see the field at all
 
Answer: D
Why: Field-Level Security (FLS) is a fundamental, absolute security boundary in Salesforce. When a field is set to hidden for a Profile:
It is removed from List Views, Reports, Search Results, Page Layouts, and SOQL Queries.
The user cannot access, view, or report on that field's data anywhere in the application.
Timestamp: Aug. 3, 2020, 2:26 a.m.



115. Is it possible to relate a person account to a contact on a business account.
 
A. True
 
B. False
 
Answer: B
Why: A Person Account in Salesforce combines essential account and contact fields into a single record to represent individual consumers.
Because Person Accounts act as their own combined record and cannot have standard direct contact relationships under a Business Account:
A Person Account cannot be directly linked as a child Contact to a Business Account (like a standard Contact is).
Direct Contact-to-Contact parent relationships do not natively exist in Salesforce standard object architecture.
(Note: While Salesforce features like Contacts to Multiple Accounts allow relating a Person Account record to other Business Accounts via indirect AccountContactRelation junction records, standard direct contact relationships between a Person Account and a Business Account contact are not supported).
Timestamp: Feb. 11, 2021, 10:12 a.m.



116. How is the expected revenue calculated in the opportunity?
 
A. Amount multiplied by the total price of all opportunity line items
 
B. The sales price on any line item times the probability of the opportunity
 
C. Opportunity Amount multiplied by the probability
 
D. Amount multiplied by the discount percent

Answer: C
 Why: The Expected Revenue field on an Opportunity is a standard formula field that automatically calculates:
$$\text{Expected Revenue} = \text{Amount} \times \text{Probability}$$
Where:
Amount is the total value of the opportunity (or sum of opportunity line items).
Probability is the percentage likelihood of closing the deal, tied to the opportunity stage.
Timestamp: Feb. 1, 2024, 1:14 p.m.


117. A custom lookup field can be added to create a relationship between a standard object and which of the following objects?
 
A. Users and Custom Objects
 
B. Leads, Accounts, Contacts and Custom Objects
 
C. Users, Custom Objects and Campaigns
 
D. Custom Objects, Contract and Campaigns
 
Answer: B
 Why: Custom lookup fields can be created on standard objects (like Accounts, Contacts, Opportunities, Cases, etc.) to establish relationships pointing to Leads, Accounts, Contacts, and Custom Objects, as well as other standard objects.
In classic Salesforce Administrator certification materials, option B accurately groups the core standard objects and custom objects that support standard lookup field relationships.
Timestamp: Oct. 28, 2019, 4:35 p.m.


118. Assume the Organization Wide default sharing is set to private for all objects and no sharing rules have been created. You have two users in the Sales Rep Role, can they view each other's data?
 
A. Yes
 
B. No
 
Answer: B
Why: With Organization-Wide Defaults (OWD) set to Private and no sharing rules defined:
Users at the same role level in the Role Hierarchy do not automatically inherit access to each other's records.
Access only flows vertically upward through the hierarchy (managers above can see records owned by users below them), not laterally between peers in the same role.
Timestamp: Jan. 14, 2021, 12:46 p.m.



119. Based solely on the role hierarchy a manager can do all of the following EXCEPT:
 
A. View, edit, delete, and transfer his/her and his/her subordinates records
 
B. Extend sharing on both his/her and his/her subordinate's records
 
C. View all folders his/her Subordinate has access to, i.e., Reports, Documents, and Email Templates
 
D. View records his subordinate does not own but can view
 
Answer: C
 Why: Access to folders (Reports, Dashboards, Documents, and Email Templates) is governed entirely by Folder Sharing settings, not the Role Hierarchy. A manager does not automatically inherit access to folders created by or shared with their subordinates unless explicit folder-level permissions are granted. 
Timestamp: Feb. 22, 2021, 10:13 p.m.



120. When you delete a parent record, you will also delete the child record if that child record has a lookup relationship to the deleted record:
 
A. True
 
B. False
 
Answer: B
Why: Deleting a parent record only automatically deletes the child record if they are in a Master-Detail relationship (cascade delete). In a Lookup relationship, deleting the parent record does not delete the child record; instead, the lookup field on the child record is typically cleared (set to blank/null) by default.
Timestamp: Feb. 12, 2020, 9:43 a.m.



121.Which action must be taken to view contacts associated with a case in the console?
 
A. The related lists of the case page layout must be modified
 
B. The custom links of the case page layout must be modified
 
C. The related object of the case page layout must be modified
 
D. The mini page layout of the case page layout must be modified
Answer: D
Why: In the Salesforce Classic Console (and Agent Console), related details such as associated contacts, accounts, or cases are displayed in the console sidebar and hover pop-ups. These views are controlled directly by configuring the Mini Page Layout for the underlying object's page layout.
Timestamp: June 10, 2020, 8:35 a.m.



122. The formula editor may be used all of the following places EXCEPT:
 
A. S-Control
 
B. Formula Field
 
C. Default Values on Standard Fields
 
D. Workflow Field Updates
 
Answer: C
Why: The standard formula editor (with its function builder, merge fields, and operator selector) is used in Formula Fields, S-Controls, Workflow Field Updates, and default values for Custom Fields.
However, Standard Fields in Salesforce do not support setting formula-driven dynamic default values using the formula editor.
Timestamp: Feb. 23, 2023, 4:16 a.m.



123. All of the following are types of AppExchange Applications EXCEPT:
 
A. Composite
 
B. Client
 
C. Provisional
 
D. Native
 
Answer: C
Why: AppExchange applications fall into three main structural types based on how they interact with Salesforce:
Native: Built completely inside Salesforce using custom objects, Apex, and Visualforce/Lightning components, running entirely on the Force.com platform.
Composite: Combines Force.com with external web applications or services, using APIs to pass data between Salesforce and external servers.
Client: Desktop or mobile applications (like Outlook integration or offline tools) that run on a local client device and synchronize data via Salesforce APIs.
Provisional is not a type or architectural classification of AppExchange applications. 
Timestamp: Jan. 22, 2020, 6:39 a.m.




124. All of the following are true about Default Sales Teams EXCEPT:
 
A. Default Sales Teams are configured on a user record
 
B. Default Sales Teams may be added manually to an opportunity record
 
C. Default Sales Teams may be added automatically to an opportunity
 
D. Default Sales Teams may be added manually to an account record
 
Answer: D
Why: Default Sales Teams (Opportunity Teams) are configured on a User's personal settings to quickly add a group of coworkers to opportunities.
Default Sales Teams apply specifically to Opportunities—they can be added automatically upon opportunity creation or added manually to an opportunity.
Accounts use a separate feature called Default Account Teams. A Default Sales Team cannot be directly added to an Account record.
Timestamp: Dec. 2, 2019, 12:59 a.m.

 

125. Which one does NOT apply to Custom Formula Fields?
 
A. Custom Formula Fields can reference other formula fields
 
B. Custom Formula Fields can reference standard fields
 
C. Custom Formula Fields can reference custom fields
 
D. Custom Formula Fields can calculate across objects
 
Answer: D
 Why: Custom formula fields operate at the record level and have key functional capabilities as well as explicit limitations:
What applies (A, B, C): Custom formula fields can reference standard fields, custom fields, and other formula fields on the same object.
Why D does not apply: Standard cross-object formulas can only evaluate data upwards along parent/lookup relationships (e.g., retrieving an Account field from a Contact). Formula fields cannot calculate across objects in a way that aggregates or summarizes child record data downwards (e.g., summing up child records from a parent object)—that functionality requires a Roll-Up Summary Field or Apex code.
Timestamp: Aug. 1, 2019, 2:23 a.m.



126. Users can be deleted from salesforce.com
 
A. True
 
B. False
 
Answer: B (False)
Why: User records in Salesforce cannot be deleted. Once created, a user record must remain in the database to preserve historical data integrity (such as record ownership, audit trails, and system logs).
To prevent a user from logging in and to free up their license, an administrator must Deactivate the user record (or Freeze the account if immediate deactivation is blocked by dependencies like being a default owner or sole system administrator). 
Timestamp: Aug. 10, 2020, 8:34 p.m.

 

127. When configuring Customizable Forecasting, you can set which of the following Forecast Dates for determining which opportunities contribute to the forecast?
 
A. Opportunity Close Date Only
 
B. Product Date Only
 
C. Schedule Date Only
 
D. Commit Date
 
E. Opportunity Close Date, Product Date, Schedule Date
 
Answer: E
 Why: When configuring Customizable Forecasting in Salesforce, administrators can set the forecast date based on the Opportunity Close Date, Product Date, or Schedule Date. This setting determines whether opportunity amounts are forecasted according to when the opportunity closes, when individual products are delivered, or when scheduled payments/revenues occur. Thus, option E correctly identifies all three valid date options available for determining which opportunities contribute to the forecast. 
Timestamp: Jan. 27, 2021, 11:04 p.m.



128. Select the best component to use if you want to list the top five sales performers on a dashboard.
 
A. Chart
 
B. Table
 
C. Metric
 
D. Gauge
 
Answer: B
Why: A Table component is the best choice for listing top sales performers because it displays data in structured rows and columns, making it easy to show multiple attributes like rep names, rankings, and sales figures simultaneously. Other component types, such as Charts, Metrics, or Gauges, are designed for single-value summary metrics or graphical data visualization rather than detailed multi-row leaderboards. Therefore, option B directly provides the required tabular layout to list the top performers.
Timestamp: May 7, 2021, 8:42 a.m.



129. Custom formula fields are recalculated:
 
A. Nightly
 
B. Every twenty minutes
 
C. Once per user session
 
D. Each time a user views the record
 
Answer: D
Why: In Salesforce, custom formula fields are dynamic calculations that are evaluated on the fly whenever a record is accessed, retrieved, or viewed by a user. They do not store static values in the database, nor do they rely on scheduled background updates or batch processes. Therefore, any time a user views or queries the record, the formula automatically recalculates to display the most up-to-date value.
Timestamp: Feb. 5, 2024, 12:44 p.m.



130. What are the opportunity defaults when converting a lead to an opportunity?
 
A. Stage Defaults to first option in the picklist, close date defaults to the last day in the quarter, and the amount defaults to blank
 
B. Stage defaults to first option in the picklist, close date defaults to 3 months from conversion date, and amount defaults to blank
 
C. User defines amount, close date, and stage upon conversion
 
D. None of the above
Answer: A
Why: When converting a lead into a new opportunity in Salesforce, the Stage field automatically populates with the first option in the active picklist while the Amount field defaults to blank. Additionally, Salesforce automatically sets the Close Date of the newly created opportunity to the last day of the current fiscal quarter.
Timestamp: June 29, 2021, 5:56 a.m.



131. How many other fields may a custom lead field be mapped to when converting a lead?
 
A. One custom field
 
B. Two custom fields
 
C. Three custom fields
 
D. Custom lead fields cannot be mapped
 
 
 Answer: C
Why: Custom lead fields can be mapped to up to three custom fields across different objects during lead conversion: one custom field on the Account, one on the Contact, and one on the Opportunity. This mapping allows data captured on the lead to automatically flow to each created or updated record upon conversion. Therefore, option C correctly identifies the total number of custom target fields a single custom lead field can map to across those three destination objects.
Timestamp: Dec. 29, 2020, 5:35 p.m.



132. Is it possible for a Page layout to be associated with a Record Type.
 
A. True
 
B. False
 
Answer: A
Why: Page layouts are directly assigned to record types in Salesforce based on user profiles to control which fields, sections, and related lists are visible. Each record type can have a different page layout assigned for each profile in the organization. Therefore, it is entirely possible and standard practice for a page layout to be associated with a record type.
Timestamp: March 4, 2021, 7:26 a.m.



133. Which of the following object relationships is NOT allowed?
 
A. Standard object as the "master" and a custom object as the detail
 
B. Custom object as the master" and a standard object as the detail
 
C. Custom object as a lookup to a standard object
 
D. Custom object as a lookup to a custom object
 
Answer: B
Why: In Salesforce, standard objects cannot serve as the detail side in a master-detail relationship with a custom object as the master. Custom objects can act as details to standard masters, and lookup relationships are fully supported between any combination of standard and custom objects. Consequently, having a custom object as the master and a standard object as the detail is the only relationship listed that is not allowed.
Timestamp: Jan. 14, 2021, 1:21 p.m.



134. All of the following actions may take place on a Workflow Rule EXCEPT:
 
A. Outbound API message
 
B. Update Field
 
C. Create a Task
 
D. Create an Event
 
Answer: D
Why: Standard Salesforce Workflow Rules support four specific types of workflow actions: Field Updates, Tasks, Email Alerts, and Outbound API Messages. Creating an Event is not a supported standard action for a Workflow Rule. Therefore, option D is the correct exception.
Timestamp: July 25, 2023, 12:01 a.m.



135. Record Type may determine the default value of a picklist field.
 
A. True
 
B. False
 
Answer: A
Why: In Salesforce, record types allow administrators to specify available picklist values as well as set a specific default picklist value for each record type. When a record type is selected, the configured default value automatically populates for that picklist field upon record creation. Therefore, it is true that record types can determine default values for picklist fields. 
Timestamp: Nov. 10, 2020, 12:03 p.m.



136. You can use standard reports when creating dashboards
 
A. True
 
B. False
 
Answer: A
Why: Standard reports provided out of the box in Salesforce can be used directly as the source reports when creating dashboard components. As long as the standard report is saved with appropriate groupings (such as a Summary or Matrix format), it can feed visual components like charts, tables, or metrics on a dashboard. Therefore, it is true that standard reports can serve as the data source when creating dashboards.
✅ Certified Resolution:  Standard reports can serve as dashboard data sources provided they have summary/matrix groupings or a row limit applied.

Timestamp: Aug. 1, 2019, 2:47 a.m.
Timestamp: Aug. 4, 2020, 9:12 p.m.


137. Assets are related to which of the following sets of objects?
 
A. Opportunities, Products, Cases, Accounts, and Contacts
 
B. Products, Cases, Accounts, and Contacts
 
C. Cases, Contracts, Accounts, and Contacts
 
D. Opportunities, Cases, and Accounts
 
E. Opportunity Line Items, Cases, Accounts, and Contacts
 
Answer: B
Why: In Salesforce, Assets represent purchased items or installed products and directly relate to Products, Cases, Accounts, and Contacts. An Asset is tied to an Account or Contact that owns/uses it, reference a specific Product from the catalog, and can be tracked on Cases for customer support. They do not have direct standard relationships to Opportunities or Opportunity Line Items.
Timestamp: Aug. 22, 2020, 11:27 p.m.



138. All of the following may be uploaded to the AppExchange Directory EXCEPT:
 
A. Custom Tabs
 
B. Custom Fields on Custom Objects
 
C. Custom Fields on Standard Objects
 
D. Custom Assignment Rules
 
Answer: D
Why: In Salesforce, custom assignment rules (such as Lead or Case Assignment Rules) cannot be added to or uploaded in an AppExchange package. On the other hand, Custom Tabs, Custom Fields on Custom Objects, and Custom Fields on Standard Objects are all standard metadata components that can easily be packaged and deployed via the AppExchange Directory. Therefore, option D is the correct exception that cannot be uploaded to AppExchange.
Timestamp: Sept. 28, 2022, 2:44 a.m.



139. Which objects can be customized for history tracking?
 
A. Solutions, Cases, Leads and Opportunities
 
B. Cases, Leads, Solutions, Contracts, and Custom Objects
 
C. Campaigns, Contracts, Custom Objects, and Solutions
 
D. Opportunities, Leads, and Contracts
 
Answer: B
Why: Field history tracking can be configured for standard objects such as Cases, Leads, Solutions, and Contracts, as well as for Custom Objects. Other standard objects like Campaigns do not support field history tracking, which eliminates options containing Campaigns. Therefore, option B provides the correct group of objects that can all be customized for history tracking. 
Timestamp: Jan. 31, 2020, 7:27 p.m.



140. Fields hidden using Field Level Security are subject to Data Validation Rules.
 
A. True
 
B. False
 
Answer: A
Why: Validation rules in Salesforce execute on the server side whenever a record is saved, regardless of field-level security or page layout settings. Because validation rules evaluate record data at the system level, fields that are hidden from a user via field-level security are still evaluated by these rules. If a hidden field contains data or meets criteria that trigger a validation error, the rule will fire and prevent the record from saving. 
Timestamp: Aug. 1, 2019, 2:54 a.m.



141. You have Read Only access to an account, can you add a task or event to the account?
 
A. True
 
B. False
 
Answer: A
Why: In Salesforce, users with Read Only access to an account record can still create activities, such as tasks or events, related to that account. Creating a task or event requires create permission on the Activity object, but it does not require Edit permission on the parent Account record itself. Therefore, it is True that a user can add a task or event to an account to which they only have Read access.
Timestamp: June 29, 2021, 6:41 a.m.



142. Custom Formula fields do Not support which of the following functional expression?
 
A. Adding multiple records together
 
B. If/then/else conditional statements
 
C. Clickable image buttons
 
D. Combine text strings together
 
Answer: A
 Why: Custom formula fields operate at the individual record level and cannot cross-reference or sum up values across multiple distinct records or rows. They do, however, fully support logical expressions like IF/THEN/ELSE statements, concatenating text strings with functions or operators, and displaying hyperlinked clickable images using the HYPERLINK and IMAGE functions. Therefore, adding multiple records together is the functional expression that custom formula fields do not support. 
Timestamp: July 2, 2020, 2:14 a.m.



143. A service portal user may close their cases using Suggested Solutions in the self service portal.
 
A. True
 
B. False
 
Answer: A
 Why: Salesforce's Suggested Solutions feature enables portal users to review recommended KB solutions when logging or viewing a case in the Self-Service portal. If a suggested solution answers their inquiry, the user can select "Yes" and close the case themselves without needing support agent intervention. Therefore, it is True that a service portal user may close their cases using Suggested Solutions. 
Timestamp: Oct. 2, 2024, 12:40 p.m.



144. Default values are available for standard text fields
 
A. True
 
B. False
 
Answer: B
 Why: In Salesforce, default field values are supported for custom fields, but native default value configuration is not available for standard fields like a standard text field. Setting a default value directly via setup is restricted to custom fields (e.g., custom text, checkbox, picklist). To default a standard field, administrators must use workarounds such as URL parameters, quick action predefined values, or triggers. 
Timestamp: July 3, 2022, 4:52 a.m.


145. All of the following are true about Opportunity Pipeline and Forecast reporting EXCEPT:
 
A. Pipeline reports may include omitted opportunities from the forecast
 
B. Forecasts may be overridden
 
C. Pipeline reports may be overridden
 
D. Opportunity stages may be used to determine the forecast category of an opportunity
 
Answer: C
 Why: Forecasts allow upper management and users to apply manual overrides to adjust calculated forecast amounts to reflect more realistic expectations without changing underlying record data. However, pipeline reports directly display actual, real-time opportunity record data (such as Stage and Amount) from the database and cannot be overridden independently from the records themselves. Therefore, option C is incorrect regarding standard reporting behavior, making it the correct exception. 
Timestamp: Jan. 6, 2021, 6:16 a.m.

 

146. Recent Item and Look up Hover Views use the:
 
A. Sidebar
 
B. Edit Page
 
C. List Views
 
D. Related Lists
E. Mini page layout
 
Answer: E
 Why: Recent items (in classic interface components/hover cards) and Lookup Hover Views derive the fields they display directly from the primary Search Layout or List View column configurations (specifically, the "Lookup Dialogs" and "Search Results" layouts). In classic layout architectures, lookup preview hovers and quick lists draw from the object's primary Search Layouts/List View definitions. Therefore, List Views govern the fields rendered in hover cards and recent item previews. 
Timestamp: Dec. 23, 2019, 12:27 a.m.

147. Name one place where inline Editing is not currently possible. (Choose 2 answers)
 
A. List Views
 
B. Related Lists
 
C. Edit Page
 
D. All of the above
 
Answer: BC
 Why: In Salesforce, inline editing is natively available in List Views (when configured and single record types are filtered), but inline editing is not possible directly from Related Lists or while viewing the full Edit Page (where fields are opened in an explicit full-page edit mode rather than modified inline). Therefore, options B and C identify the places where inline editing is not performed. 
Timestamp: Dec. 21, 2020, 11:17 p.m.



148. Searches and Filters that take a long time may be cancelled?
 
A. True
 
B. False
 
Answer: A
Why: In Salesforce Classic and long-running search or filtering views, users can cancel a search or filter operation that is taking too long by pressing the Esc key or clicking a cancel button while the request is processing.
Timestamp: Dec. 24, 2020, 6:29 a.m.



149. What information does the Company Profile Hold?
 
A. Language, Locale, and Time Zone
 
B. Licenses, Storage and Used Space
 
C. Fiscal Year
 
D. Forecasting
 
E. None of the above
 
Answer: ABC
 Why: In Salesforce, the Company Profile (now listed under Company Settings / Company Information) holds organization-wide configuration and usage data, including:
Language, Locale, and Time Zone: Sets the default localization standards for new users created in the organization.
Licenses, Storage, and Used Space: Tracks allocated vs. available user/feature licenses and total data/file storage limits.
Fiscal Year: Defines whether the organization uses a standard calendar fiscal year or a custom fiscal year structure.
Forecasting (D) is managed separately under Forecast Settings and Setup rather than the general Company Profile page.
Timestamp: March 23, 2020, 7:12 a.m.



150. What information may be updated on the Company Profile?
 
A. Language, Locale, and Time Zone
 
B. Fiscal Year
 
C. Primary Contact and Address Information
 
D. Forecasting
 
E. All of the above

 Answer: A, B, and C 
Why:
In Salesforce Classic certification tracks (ADM-201), the Company Profile (found under Setup > Company Profile) includes the following settings and capabilities:
Language, Locale, and Time Zone: Configures the default organization-wide regional and language settings.
Fiscal Year: Configures the standard or custom fiscal year start month and structure.
Primary Contact and Address Information: Updates the organization’s legal name, primary contact, phone number, and physical address.
Forecasting: Manages organizational forecast settings, forecast types, and hierarchy directly under company/forecasting setups.
Note on Question Variants: In classic ADM-201 multiple-select formats asking to "Choose 3", options A, B, and C are selected (since Forecasting is managed in its own Forecast Settings menu). In single-select multiple-choice versions featuring E. All of the above, E is the intended correct answer key.
Timestamp: March 23, 2020, 7:17 a.m.



151. Standard Fiscal Years are periods that follow Gregorian calendar, but can start on the first day of any month of the year.
 
A. True
 
B. False
 
Answer: A
Why: A standard fiscal year in Salesforce follows the Gregorian calendar and can start on the first day of any month in the year (e.g., starting January 1st, April 1st, or October 1st). It consists of 12 consecutive months. Custom fiscal years are only required if the fiscal year follows a non-Gregorian structure, such as 4-4-5 or 13-week quarter structures.
Timestamp: Feb. 4, 2025, 1:22 p.m.



152. Forecasting can be used with Custom Fiscal Years.
 
A. True
 
B. False
 
Answer: A
 Why: Salesforce supports forecasting with custom fiscal years. When custom fiscal years are defined (such as a 4-4-5 accounting structure), Salesforce uses those specific custom periods to calculate and display forecast quantities and amounts. 
Timestamp: Oct. 29, 2019, 8:44 a.m.



153. Where are active currencies located?
 
A. Security Control
 
B. User record (Personal Setup)
 
C. Company Profile
 
D. None of the above
 
Answer: C
Why: In Salesforce, active currencies (and multi-currency management/conversion rates) are located and managed under Company Profile (specifically via Setup > Company Profile > Manage Currencies). While individual users can select a personal preferred currency on their User record (Personal Setup), the organization's list of enabled/active currencies is configured at the company profile level.
Timestamp: March 23, 2020, 7:57 a.m.




154. All the following are Main Setup areas in Salesforce.com EXCEPT?
 
A. Personal Setup
 
B. App Setup
 
C. Data Setup
 
D. Administration Setup
 
Answer: C
Why: In Salesforce Classic Setup, the main high-level Setup menu categories on the left navigation panel are Personal Setup, App Setup, and Administration Setup. Data Management tasks (like Data Import, Data Export, and Storage) are sub-categories housed under Administration Setup rather than existing as a standalone main setup heading called Data Setup. Therefore, "Data Setup" is not one of the main root Setup areas.
Timestamp: Nov. 12, 2019, 12:24 p.m.



155. What does a Profile Control?
 
A. Access to Application
 
B. Record Type Access
 
C. Permissions
 
D. Data Visibility
 
E. Hours of IP Address
 
Answer: A, B, C, and E 
Why: In Salesforce, a Profile controls user permissions, object-level access, and security settings, including:
Access to Applications (A): Controls which apps appear in the App Menu.
Record Type Access (B): Controls which record types are available to a user when creating records.
Permissions (C): Controls object-level permissions (Create, Read, Edit, Delete) and administrative/system permissions.
Hours and IP Address (E): Controls Login Hours and IP Ranges to restrict when and where users can log in.
Data Visibility (D) (specific record-level visibility) is controlled primarily by Organization-Wide Defaults (OWD), Role Hierarchy, Sharing Rules, and Manual Sharing, not directly by the Profile.
Note on Standard Certification Questions: If this is a multi-select question ("Choose 4"), the correct options are A, B, C, and E. If it is a single-select question, C (Permissions) is considered the primary function of a profile.
Timestamp: Dec. 6, 2020, 5:37 p.m.
 


156. When are Formula Fields recalculated?
 
A. Calculated automatically
 
B. Every 15 Minutes
 
C. Nightly
 
D. After Edits / Save
 
Answer: A
Why: Custom formula fields in Salesforce are dynamic and calculated automatically in real time whenever a user views, reports on, or queries the record. The field value is not stored in the database; instead, the formula expression is evaluated instantly at runtime.
Timestamp: March 4, 2021, 8:51 a.m.



157. How many fields (columns) can be displayed on a Customizable Related List?
 
A. 50
 
B. 10
 
C. 25
 
D. 100
 
Answer: B
Why: In Salesforce page layouts, you can add up to 10 fields (columns) to display on a customizable related list.
Timestamp: March 13, 2023, 7:11 a.m.




158. It is possible for a User to own a record and not see it if they don't have the Read Permission to the Object.
 
A. True
 
B. False
 
Answer: A
 Why: Object-level permissions (CRUD) set on a user's Profile or Permission Sets act as the ultimate gatekeeper. If a user does not have "Read" permission on an object type, they cannot view any records of that object—even if they are assigned as the Record Owner. 
Timestamp: July 3, 2022, 5:09 a.m.



159. What can a Task do that an Email Alert Cannot do? Choose 2 answers.
 
A. Tasks allow you to track the specific actions you plan to perform or have performed
 
B. Email Alerts cannot track specific actions.
 
C. Email Alerts allow you to track the specific actions you plan to perform or have performed
 
D. Tasks cannot track specific actions
 
Answer: A and B
Why: In Salesforce, tasks are actionable items used to log, schedule, and track specific to-dos, calls, meetings, or completed work on a record, which fulfills option A. Email alerts, on the other hand, are strictly automated communication templates sent when criteria are met; they are not activity records and cannot track specific ongoing or completed actions, which makes option B true. Options C and D are factually incorrect.
Timestamp: Feb. 5, 2024, 8:47 p.m.




160. What do you need to specify when you schedule a report?
 
A. You need user with Marketing Profile to ג€Schedule Reportsג€
 
B. You need user permission to ג€Schedule Reportsג€
 
C. You need user to have a Manager Role
 
D. Click Run Report and choose Schedule Future Runs... from the drop-down button.
 
Answer: D. Click Run Report and choose Schedule Future Runs... from the drop-down button. 
Why:
In classic Salesforce administration (ADM-201):
Actionable Step (Option D): To initiate the setup screen where you specify the running user, email recipients, frequency (daily/weekly/monthly), start/end dates, and preferred start time, you navigate to the report, click the drop-down next to Run Report, and select Schedule Future Runs...
Prerequisite Permission (Option B): Alternatively, from a security standpoint, a user must explicitly have the "Schedule Reports" system permission enabled on their profile or permission set to access this feature.
Timestamp: July 12, 2023, 1:53 p.m.



161. In order to Enable Territory Management you should have:
 
A. Standard Profile
 
B. Customizable Forecasting
 
C. Enable Forecasting
 
D. All of the above
 
Answer: B. Customizable Forecasting
Why:
In classic Salesforce architecture, Territory Management relies directly on the forecasting infrastructure to build its hierarchical structure. Therefore, Customizable Forecasting must be enabled as a prerequisite before original Territory Management can be turned on.
Option A is incorrect because having a standard profile is not a prerequisite (administrative rights like "Customize Application" are required).
Option C refers to basic/standard forecasting, which does not support the territory hierarchy model.
Timestamp: March 6, 2021, 2:16 p.m.
—-


162. What is a Managed Package?
 
A. A managed package is a collection of application components that are posted as a unit on AppExchange
 
B. They differ from unmanaged packages in that some components are locked, allowing the managed package to be upgraded later.
 
C. Allows the system Administrator to modify the application
 
D. Managed packages do not include locked components and cannot be upgraded
 
Answer: AB
Why: In Salesforce, Managed Packages are created by Independent Software Vendors (ISVs) to distribute applications on the AppExchange. They have two main traits:
Posted on AppExchange (A): They are bundled units of application components made available for installation.
Locked & Upgradable (B): Unlike unmanaged packages, their source code and core components are protected/locked, allowing the developer to push seamless upgrades to customer orgs.
Timestamp: Aug. 8, 2022, 6:16 p.m.



—--------------------
163. Where will a Campaign associated with a Lead be visible? Choose 2 answers
 
A. Campaign Related List
 
B. Campaign History Report
 
C. Lead History Report
 
D. Opportunity Related List
 
Answer: A,b
 Why:
When a Lead is associated with a Campaign (by adding the Lead as a Campaign Member), that association is visible in:
A. Campaign Related List: On the Lead record page itself, the Campaign History related list shows all campaigns the lead belongs to. (Similarly, the Lead appears on the Campaign record's Campaign Members related list).
B. Campaign History Report: You can run out-of-the-box Salesforce campaign reports (such as Campaigns with Leads) to see campaign details and associated lead activities.
Why C & D are incorrect:
C. Lead History Report: Tracked field changes (e.g., changes to Lead Status, Name, or Company) appear here, not campaign member associations.
D. Opportunity Related List: A lead is not linked to an opportunity until it undergoes Lead Conversion. Before conversion, campaigns associated with a lead do not appear on opportunity related lists.
Timestamp: Dec. 30, 2020, 3:42 a.m.

—----------------------
164. What needs to be specified to schedule a Report?
 
A. Objects
 
B. Date Range
 
C. Location
 
D. Frequency
 
Answer: B and D (or D in single-select formats)
Why:
When you schedule a report for future runs in Salesforce Classic, the scheduling configuration screen requires you to specify:
Frequency (D): How often the report runs (Daily, Weekly, or Monthly) and the preferred start time.
Date Range / Duration (B): The schedule's Start Date and End Date during which the automated run schedule remains active.
Why C (Location) is Not the Primary Selection:
Folder / Location is chosen when you initially save the report, prior to opening the scheduling dialog. While some legacy question banks incorrectly mapped "Location" as an answer, Salesforce documentation explicitly lists Frequency and Start/End Date Range as the required parameters on the Schedule Report screen itself.
Timestamp: Feb. 26, 2020, 7:24 p.m.

—----------------------
165. Which of the following does Salesforce CRM provide for restricting login access to the application? Choose 3 answers
 
A. Profile-based IP restrictions
 
B. Organization-wide IP restrictions
 
C. Profile-based login hour restrictions
 
D. Organization-wide login hour restrictions
 
Answer: ABC
 Why:
Salesforce provides three core mechanisms among these options for controlling and restricting login access:
A. Profile-based IP restrictions: Administrators can define specific IP ranges on individual profiles (under Profile > Login IP Ranges). Users on that profile are completely blocked from logging in if they attempt to log in from outside those specified IP addresses.
B. Organization-wide IP restrictions: Setting Trusted IP Ranges at the org level (Setup > Security > Network Access) defines trusted locations for the entire company. Users logging in from within these ranges bypass multi-factor/identity verification challenges, whereas users logging in outside of them are restricted until they pass identity verification or present a security token.
C. Profile-based login hour restrictions: Administrators can define specific hours (e.g., Monday–Friday, 8 AM–5 PM) on a profile. Users on that profile are denied access if they attempt to log in outside those hours.
Why D is incorrect:
D. Organization-wide login hour restrictions: Salesforce does not support setting login hours at the organization-wide level. Login hours can only be applied and enforced at the Profile level.
Timestamp: Aug. 4, 2020, 4:45 p.m.

166. Workflow Rules Consist of the following components:
 
A. Workflow Task
 
B. Workflow Outbound Message
 
C. Workflow Field Updates
 
D. Workflow Actions
 
E. Workflow Email Alerts

Correct Answer: A, B, C, E  
Why:
In Salesforce, a Workflow Rule evaluated under specified criteria can trigger automated Workflow Actions. The four standard types of automated actions supported by Workflow Rules are commonly remembered by the acronym FTEO:
A. Workflow Task: Assigns a new task to a user, role, or record owner.
B. Workflow Outbound Message: Sends a secure XML payload message to an external web service or endpoint.
C. Workflow Field Updates: Automatically updates the value of a field on the record or a related parent record.
E. Workflow Email Alerts: Sends automated email notifications using a specified template.

Timestamp: Aug. 27, 2020, 6:47 p.m.

—-----------------------
167. Are Tags searchable from standard Search component? 
 
A. Yes
 
B. No
 
Answer: A. Yes
Why:
In Salesforce Classic, Tags (both Personal Tags and Public Tags) are fully indexed and searchable using the standard Global Search component at the top of the page. Entering a tag name into the standard search bar returns records associated with that tag. 
Timestamp: Aug. 3, 2023, 6:32 p.m.

………………..-

168. What happens when a user clicks on the Create New Apps option present in the List of Apps section?
 
A. User is taken to a Create new App Page in salesforce.com
 
B. User is taken to App Exchange
 
C. User is taken to developer.force.com page
 
D. None of the above
 
Answer: c
 Why:
In classic Salesforce navigation, selecting the "Create New Apps" option from the App Menu / List of Apps redirects users directly to developer.force.com (now Force.com / Developer Center). This page provides platform resources, developer documentation, and tools for building custom applications.
Timestamp: Sept. 16, 2020, 8:16 p.m.

—----------------
 
169. You can set the Tab as a Landing Tab while creating the Tab for the Object?
 
A. True
 
B. False
 
Answer: B. False
Why:
When you create a Custom Tab for an Object (via Setup > Create > Tabs), the setup wizard only asks for the Object, Tab Style, Visibility/Profile Settings, and App Assignment. It does not allow you to specify it as a Landing Tab at the time of creation.
Setting a Default Landing Tab is configured when creating or editing a Custom App (via Setup > Create > Apps or App Manager), not during the object tab creation process.
Customize Tab & Side Bar in Salesforce
This video provides a practical step-by-step walk-through showing how custom tabs and app layouts are created and modified within the Salesforce navigation menu.
Timestamp: Aug. 3, 2020, 7:19 a.m.

—---------------------
170. In Spring'11 salesforce.com release Dynamic Dashboards have been launched for which edition:
 
A. Developer Edition
 
B. Professional Edition
 
C. Enterprise Edition
 
D. Unlimited Edition
 
 Answer: A. C, D
(Note: Depending on the specific legacy test bank key, C. Enterprise Edition or D. Unlimited Edition is sometimes marked as the single correct choice, as Dynamic Dashboards were initially made available for Enterprise, Unlimited, and Developer editions, but excluded from Professional Edition).
Why:
In the Spring '11 release, Salesforce introduced Dynamic Dashboards (allowing a single dashboard to display data tailored to the running user's specific access levels).
Available Editions: Enterprise Edition (5 dynamic dashboards), Unlimited Edition (10 dynamic dashboards), and Developer Edition (3 dynamic dashboards).
Excluded: Professional Edition does not include Dynamic Dashboards by default unless purchased as an add-on.
5 dynamic dashboards for Enterprise Edition10 for Unlimited Edition3 Developer Edition.To create, edit, and delete dynamic dashboards: Run Reports AND Manage Dynamic Dashboards
Timestamp: Dec. 24, 2020, 8:31 a.m.



171. Which of the following events are allowed while writing a trigger on feeds item and feed Comment object?
 
A. Insert, Update
 
B. Insert, Delete
 
C. Insert, Undelete
 
D. Update, Undelete
 
E. Insert, Update, Delete
 
Answer:B. Insert, Delete
Why:
In Salesforce, FeedItem and FeedComment Chatter objects do not support the standard full set of trigger operations (such as update or undelete) due to how Chatter feeds and moderation are structured:
Supported Events: before insert, after insert, before delete, and after delete.
Unsupported Events: update operations (editing existing posts/comments in Apex triggers) and undelete operations are not supported directly on these feed objects.
Therefore, only Insert and Delete events are permitted when writing Apex triggers on FeedItem and FeedComment.
Timestamp: Aug. 28, 2024, 7:11 a.m.




172. You can share the Dashboard components snapshot with everyone in the Company with chatter?
 
A. No, we cannot share with the company
 
B. No, we cannot share with people who do not have access to the dashbaord
 
C. Yes we can share, but only people having access to dashboard will be able to see the data
 
D. Yes and everyone will be able to see it regardless of access to dashboard
 
Answer: D. Yes and everyone will be able to see it regardless of access to dashboard
Why:
When you post a dashboard component snapshot to Chatter, Salesforce creates a static image of the data as it appeared at that specific moment.
Static Image Visibility: Anyone who can view the Chatter post (such as followers of a user feed, or members of a public Chatter group) can see the snapshot image itself, even if they do not have underlying access to the source dashboard or source report data.
Security Consideration: Because posting a snapshot to Chatter makes the visual data public to everyone with feed access regardless of their dashboard permissions, Salesforce explicitly warns admins to avoid posting sensitive components containing restricted information.
(Note: Clicking the snapshot link takes users to the actual dashboard, but access to the live dashboard itself will still enforce standard dashboard folder permissions).
Timestamp: Oct. 13, 2020, 9:57 a.m.




173. Inline Editing is available in visual force pages?
 
A. True
 
B. False
 
Answer: A. True
Why:Inline editing can be enabled on Visualforce pages using the <apex:inlineEditSupport> component inside an <apex:detail>, <apex:form>, or <apex:pageBlock> container. This component allows users to double-click supported record fields to edit their values directly on the page without navigating away.
Timestamp: Dec. 31, 2023, 3:14 a.m.


174. With Spring'11 release now you can have Photos in Dashboard components?
 
A. No
 
B. Yes but only in Tables
 
C. Yes in every type of Chart
 
Answer: B. Yes but only in Tables
Why:
Starting in the Spring '11 release, Salesforce introduced support for rendering user and contact photos in table-type dashboard components.
When configuring a dashboard table component using fields like User or Contact, administrators can enable photo formatting to display small profile pictures next to names in the table rows. Photos are not supported directly inside graph/chart components (bar charts, line graphs, pie charts, etc.).
Timestamp: Dec. 27, 2020, 9:44 a.m.



175. Which of the following is the new workflow feature of Spring'11 Release?
 
A. Workflow Rules
 
B. Flows
 
C. Field Update
 
D. Outbound messages
 
Answer:B. Flows
Why:
In the Spring '11 release, Salesforce introduced Visual Workflow (originally known as Flows or Force.com Flow). This feature allowed administrators to create multi-step, logic-driven guided business processes and screen interactions using a visual interface rather than Apex code.
A, C, and D (Workflow Rules, Field Updates, and Outbound Messages) were core features introduced in much earlier releases of Salesforce.
Timestamp: Jan. 18, 2024, 5:39 a.m.



176. Field Sets works on both Standard as well as Custom Objects?
 
A. True
 
B. False
 Answer: A. True 
Why:
Field Sets are groupings of fields defined on an object that can be dynamically referenced in Visualforce pages, Apex, or managed packages.
Universal Availability: You can create Field Sets on both Standard Objects (such as Account, Contact, Lead, Opportunity) and Custom Objects.
Primary Use Case: They allow developers to group fields together so that administrators can add, remove, or reorder fields rendered on custom interfaces without modifying underlying code.
Timestamp: July 20, 2020, 6:18 p.m.



—------------------------------------------
177. Which combination of objects is available when creating a custom report type for Chatter reports?
 
A. Opportunities, Followers, User Feed
 
B. Accounts, User Feed, Comments
 
C. Users, User Feed, Comments
 
D. Chatter Groups, Members
 
Answer: C
Why:
When creating custom report types to analyze Chatter engagement and user interactions, Salesforce supports primary relationships between user objects and feed data:
Primary Object: Users
Secondary Object (B): User Feed (posts/updates submitted on user profiles or feeds)
Tertiary Object (C): Comments (replies and comments tied to those feed posts)
(Note: Another valid standard Chatter custom report type combination in Salesforce is Chatter Groups, Members, but among single-choice answers representing feed activity, Users, User Feed, Comments is the correct standard structure).
 
Timestamp: Dec. 27, 2020, 9:54 a.m.
—------------------------

 
178. Which of the following settings directly affects Date fields to display as MM/DD/YYYY?
 
A. Local
 
B. Time Zone
 
C. Language
 
D. Default Currency
 
**Answer: A
 Why:
In Salesforce, the Locale setting controls geographic and cultural formatting across the platform, including date formats, time formats, number formats, and name ordering.
MM/DD/YYYY Format: Setting the Locale to English (United States) displays dates in the MM/DD/YYYY format. Switching to English (United Kingdom) changes date fields to DD/MM/YYYY.
Why Other Options Are Incorrect:
B. Time Zone: Dictates the relative time offsets (e.g., UTC-5) applied to DateTime fields, not the visual arrangement of day/month/year digits.
C. Language: Controls the display language for user interface labels, buttons, and help text.
D. Default Currency: Sets the default monetary symbol and currency code used in financial fields.
Timestamp: Jan. 4, 2021, 5:16 p.m.
 
 
179. Which of the following statements are true about Data Validation?
 
A. Validation rules apply to all new and updated records for an object.
 
B. Validation rules can update fields which are not included in a page layout.
 
C. Validation rules can reference fields which are not included in a page layout.
 
D. If an error message is not set, a default message will be prompted instead.
 
E. All of the above.
 
F. None of the Above.
 
Answer: AC
 Why:
A. Validation rules apply to all new and updated records for an object: True. Whenever a record is saved (whether created or updated), Salesforce executes all active validation rules on that object.
C. Validation rules can reference fields which are not included in a page layout: True. A validation rule formula can reference any field on the object (or related objects), even if those fields are hidden from or omitted from the user's active page layout.
Why the other options are false:
B is False: Validation rules evaluate data and return errors—they do not update fields (Field Updates are performed by flows or workflow rules).
D is False: Entering an Error Message is a required step when defining a validation rule in Salesforce; the setup wizard does not allow saving without one.
Timestamp: Nov. 2, 2021, 11:18 a.m.



180. Chatter Desktop is not available in which Salesforce Edition?
 
A. Free Edition
 
B. Group
 
C. Professional
 
D. Developer
 
E. Enterprise
 
F. Contact Manager
 
Answer: A. Free Edition
Why:
Chatter Desktop was supported across Contact Manager, Group, Professional, Enterprise, Unlimited, and Developer Editions.
However, it was not available in the Free Edition (such as standard Chatter Free user license organizations without full Salesforce CRM capabilities).
(Note: Chatter Desktop is a legacy Adobe AIR application that has since been retired by Salesforce in favor of the Salesforce desktop and mobile apps). 
Timestamp: July 2, 2022, 4:10 p.m.


181. The account owner, opportunity owners, and case owners may or may not be the same user.
 
A. True
 
B. False
 
Answer: A. True
Why:
In Salesforce, every record has an individual Owner field, and ownership is tracked separately across different objects:
Independent Ownership: An Account can be owned by User A, while an Opportunity related to that Account is owned by User B, and a related Case is owned by User C.
Flexible Assignments: While child records often default to the user creating them (or inherit certain sharing rules), ownership of Accounts, Opportunities, and Cases operates independently, allowing sales, service, and account management teams to handle their respective records separately.
imestamp: July 14, 2021, 1:59 p.m.

—-----

 
182. Which file types can you use when exporting reports?
 
A. You can not export a report. You can only email it.
 
B. Comma Delimited (.csv)
 
C. Excel (.xls)
 
D. PDF
 
Answer: BC
 Answer: B. Comma Delimited (.csv) and C. Excel (.xls / .xlsx)
(Note: On legacy Salesforce multiple-choice certification exams, B and C are the correct file formats supported directly for exporting report data from Salesforce).
Why:
When exporting reports in Salesforce, users can export report data directly into spreadsheeting and data analysis formats:
B. Comma Delimited (.csv): Used for exporting unformatted "Details Only" raw tabular data, ideal for data manipulation or importing into other systems.
C. Excel (.xls / .xlsx): Supported for both "Formatted Reports" (which preserve headers, groupings, and layout) and "Details Only" reports.
Why Other Options Are Incorrect:
A is False: Reports can be exported directly as physical files to your local drive; you are not restricted to emailing them.
D is False: While Salesforce allows saving printable views or rendering Visualforce pages/documents as PDFs, standard report exports do not provide a direct .pdf export file type option in the report export wizard.
Timestamp: Jan. 3, 2021, 5:33 a.m.

—------------
208.Which of the following are setting options for the User Interface?
 
A. Enable Collapsible Sections
 
B. Show Quick Create
 
C. Show customer Sidebar Components on All Pages
 
D. Transfer all Open Opportunities
 
E. Enable Drag-and-drop scheduling on List Views
 
Answer: ABCE
 Why:
In Salesforce, under Setup > User Interface, administrators can configure global toggles that control UI behavior, layout functionality, and sidebars:
A. Enable Collapsible Sections: Allows users to collapse or expand page layout sections on record detail pages using the section header arrows.
B. Show Quick Create: Displays the "Quick Create" box in the sidebar to allow rapid creation of new records with minimal fields.
C. Show Custom Sidebar Components on All Pages: Ensures custom sidebar components added to Home page layouts persist across all Salesforce standard pages.
E. Enable Drag-and-drop scheduling on List Views / Calendar Views: Enables users to re-schedule events or list view items interactively using drag-and-drop actions.
Why Option D is Incorrect:
D. Transfer all Open Opportunities: This is an option/checkbox available within the Mass Transfer Records tool (when transferring ownership of Account records), not a global setting found in the User Interface setup.
Timestamp: Aug. 7, 2020, 3:23 p.m.

—-------------
209. The Report Builder is different from the Report Wizard.
 
A. True
 
B. False
 Answer: A. True
Why:
The Report Builder and the Report Wizard refer to two distinct report generation interfaces in Salesforce history:
Report Builder: A modern, drag-and-drop WYSIWYG interface introduced to allow real-time previewing, flexible field grouping, matrix layouts, and interactive chart building.
Report Wizard: A legacy, step-by-step sequential setup wizard used in earlier versions of Salesforce that required navigating multiple screens to select report types, fields, criteria, and summaries. 
Timestamp: Aug. 21, 2020, 3:05 a.m.

—---------------

210. Salesforce.com archives older activities according to which of the following conditions:
 
A. Closed Events 180 days old
 
B. Events with a due date greater than 365 days old
 
C. Open tasks with a due date greater than 365 days old
 
D. Closed tasks with a due date greater than 365 days old
 
E. Closed tasks without a due date that were created more than 365 days ago
 
*Answer: B, D, and E
Why:
Salesforce automatically archives older activities (Tasks and Events) to optimize system performance and maintain fast reporting. Activities are archived when they meet any of the following three conditions:
B. Events with a due date (or end date/time) greater than 365 days old
D. Closed tasks with a due date greater than 365 days old
E. Closed tasks without a due date that were created more than 365 days ago
Why Other Options Are Incorrect:
A is Incorrect: Salesforce does not archive events at 180 days; the default archiving threshold across Salesforce is 365 days (1 year).
C is Incorrect: Open tasks are never archived automatically by Salesforce regardless of how old their due date is—tasks must be marked as closed before they qualify for archival.
Timestamp: Dec. 23, 2020, 2:37 p.m.
—----------------------

211. IF(ISPICKVAL(picklist_field)) has the same output as:
 
A. VAL(picklist_field)
 
B. CASE(picklist_field)
 
C. CASE("picklist_field")
 
D. Picklist_field(VALUE)
 
Answer: B. CASE(picklist_field)
Why:
In Salesforce formula fields, picklist fields cannot be referenced directly like plain text fields. To evaluate a picklist value, you can use either ISPICKVAL() or CASE():
ISPICKVAL(picklist_field, "Text_Value") evaluates whether a picklist field's selected value equals a specific string and returns a Boolean (TRUE or FALSE).
CASE(picklist_field, "Text_Value", 1, 0) = 1 (or using CASE to evaluate picklist values) works identically by accepting a raw picklist field field API name directly as its first parameter without requiring text conversion.
Why Other Options Are Incorrect:
A & D (VAL / Picklist_field(VALUE)): Neither VAL() nor Picklist_field() are valid formula functions in Salesforce.
C (CASE("picklist_field")): Enclosing the picklist field name in quotation marks turns it into a literal text string rather than evaluating the actual field value on the record. 
Timestamp: Dec. 27, 2020, 2:14 p.m.

—-----------------

212. At this click path Setup > App Setup > Customize > Tab Names and Labels > Rename Tabs and Labels you can rename the Tab Names of standard objects.
 
A. True
 
B. False
 
Answer: A. True
Why:
In Salesforce Classic (under Setup > App Setup > Customize > Tab Names and Labels > Rename Tabs and Labels), administrators can customize standard object tab names and field labels.
Customizing Standard Tabs: You can rename standard object tabs (such as changing "Accounts" to "Clients" or "Opportunities" to "Deals") so that the terminology aligns with your organization's business processes.
Global Impact: Renaming a tab using this navigation path updates the display name for the tab across navigation bars, page layouts, related lists, standard reports, and system views
Timestamp: July 13, 2020, 8:01 p.m.


—-------------------

213. Is identity confirmation necessary if a user's IP address is known and browser cookie exists?
 
A. True
 
B. False
 
Answer: b
 Why:
Identity confirmation (multi-factor / device activation verification code) is triggered when Salesforce does not recognize the user's login request environment.
How Salesforce Identifies Known Logins: Salesforce verifies identity using two primary signals:
IP Address Recognition: The user's IP falls within a trusted IP range defined for the organization or previously activated by the user.
Browser Cookie Activation: A browser cookie stored on the user's machine identifies that specific browser as a previously activated, trusted device.
Result: If the user logs in from a known IP address AND has a valid browser cookie installed, Salesforce recognizes the session as trusted. Therefore, identity confirmation is NOT necessary under these conditions.
Timestamp: Jan. 3, 2021, 6:08 a.m.

—----------------------

214.What is the maximum number of records to be printed in the Printable View of a list view?
 
A. 2.000
 
B. 100
 
C. 1.000
 
D. 200
 
Answer: C. 1.000 (Note: The question is referencing 1,000 records).
Why:
In Salesforce Classic, when using the Printable View function on a standard List View, Salesforce displays and formats a maximum of 1,000 records.
Key Platform Distinctions:
List View Display & Printable View: A standard list view query can return up to 2,000 records on screen, but clicking Printable View caps the printable/formatted output at 1,000 records.
Report Printable View: Standard tabular and summary Reports display up to 2,000 rows in Printable View.
Joined Report Printable View: Joined reports support up to 20,000 rows in Printable View.
Timestamp: Sept. 14, 2020, 5:01 p.m.

—----------------

215. Are custom object reports accessible when you add a custom object tab?
 
A. Yes
 
B. No
 
C. Only if the Object is not related to any other object
 
Answer: b
 Why:
Creating a Custom Object Tab does not automatically grant access to custom object reports or create custom report types for that object.
How Reporting Access Works for Custom Objects: For reports to be accessible on a custom object, the "Allow Reports" checkbox must be enabled directly in the Custom Object Definition / Setup settings.
Separation of Function:
Custom Object Tab: Controls user interface visibility and navigation access (allowing users to view, search, and edit records of that object directly).
Allow Reports Setting: Controls whether Salesforce automatically generates standard custom report types for that object and makes it available in the Report Builder.
Timestamp: Dec. 27, 2020, 2:33 p.m.
—----------------------

216. What is not found on a Company Profile?
 
A. Language, Locale, and Time Zone
 
B. Profiles
 
C. Licenses
 
D. Storage and Used Space
 
E. Manage Currencies
 
F. Fiscal Years
 
Answer: B. Profiles
Why:
Under Setup > Company Profile (or Company Settings in Salesforce Lightning), Salesforce centralizes organization-wide configuration settings:
A. Language, Locale, and Time Zone: Configured in the organization's default settings under Company Information.
C. Licenses: User, feature, and permission set license limits and usage are tracked under Company Information.
D. Storage and Used Space: Data and file storage usage are monitored under Data Storage Usage within the company settings profile.
E. Manage Currencies: Currency management (including multi-currency setups and conversion rates) is managed within Company Profile.
F. Fiscal Years: Standard and custom fiscal year structures are defined under Company Profile > Fiscal Year.
Why Option B is Not Included:
Profiles are user-level security controls that dictate individual object permissions, field-level security, and system administration privileges. They are managed separately under Manage Users > Profiles (or Users > Profiles in Lightning Setup) rather than within the Company Profile.
Timestamp: Dec. 27, 2020, 2:39 p.m.

—----------------------
217. Custom Report Types (CRT) allows you to build a framework from which users can create and customize reports in the report wizard but not in report builder.
 
A. True
 
B. False
 
Answer: B
 Why:Custom Report Types (CRTs) allow administrators to define report frameworks (selecting primary objects, related object relationships, and visible layout fields) that users can leverage in both the modern Report Builder and the legacy Report Wizard.
In fact, CRTs are predominantly built for and used in the Report Builder, where users drag and drop fields, create summaries, add groupings, and apply filters to analyze record relationships.
Timestamp: April 16, 2024, 10:16 p.m.

—-----------------------
220. System Administrators have this permission by default.
 
A. None of these
 
B. Report Wizard
 
C. Report Builder
 
D. Both Report Wizard and Report builder
 
Answer: D
Why:
By default, users with the System Administrator profile are assigned full administrative administrative access and permissions across Salesforce reporting tools.
Report Builder Permission: Administrators automatically have the "Report Builder" (and "Create and Customize Reports") administrative permissions enabled on their profile, granting access to the drag-and-drop report builder interface.
Report Wizard Permission: System Administrators also retain access to the classic Report Wizard (used for standard report creation, background exports, or accessibility mode configurations).
Timestamp: April 4, 2025, 7:14 p.m.

—--------------------
221. The Salesforce Console is an example of what?
 
A. API
 
B. Third Party Web integration/Application
 
C. UI
 
D. Java Script
 
Answer: C
 Why:The Salesforce Console (such as Service Console or Sales Console) is a custom User Interface (UI) designed for high-volume users like customer support agents or telesales reps.
Tabbed Interface: It displays a unified single-screen environment with tabbed navigation, allowing users to view, edit, and switch between related records (e.g., Accounts, Cases, and Contacts) simultaneously without losing context or opening multiple browser tabs.
Timestamp: June 7, 2023, 5:23 p.m.

—--------------------------
222. What is the click path to enable Enhance Profile Management?
 
A. Setup | Customize | User Interface
 
B. Setup | Manage Users | Profiles
 
C. Setup | Profiles | Customize
 
Answer: A
Why:In Salesforce Classic, enabling or disabling the Enhanced Profile User Interface is controlled globally under the general UI settings.
Navigating to Setup > Customize > User Interface allows administrators to check the "Enable Enhanced Profile User Interface" checkbox.
Once enabled, viewing or editing any profile switches from the single-page layout to a streamlined, grid-based profile management view with search capabilities for individual permissions and settings.
Why Other Options Are Incorrect:
B (Setup | Manage Users | Profiles): This is where you go to view, edit, or create individual user profiles, but it does not contain the system setting to toggle the enhanced UI feature itself.
C (Setup | Profiles | Customize): This navigation path does not exist in the Salesforce setup tree.
Timestamp: July 13, 2020, 8:13 p.m.

—---------------------
223.Custom formula fields can reference other custom formula fields including themselves.
 
A. True
 
B. False
 
Answer: B
 While custom formula fields can reference other custom formula fields, they cannot reference themselves:
Self-Reference Restriction: A formula field referencing itself creates a circular reference (or infinite loop), which Salesforce strictly prohibits during formula compilation.
Referencing Other Formulas: Formula fields can reference other non-circular custom formula fields on the same or parent objects, provided the total compiled size does not exceed character and compilation limits (such as the 5,000-byte compile limit).
Timestamp: Dec. 27, 2020, 3:08 p.m.
 
—----------------
224. You must run the report before you can print or export it because the Printable View and Export details buttons are not available in the report builder.
 
A. True
 
B. False
 
Answer: A
Why:In Salesforce, the Report Builder is an editing environment used strictly for designing, grouping, filtering, and defining field columns.
Run Required: The Printable View and Export Details buttons only execute against full, generated dataset outputs.
Run Report Page: Users must click Run Report (or view the report output page) to access the action dropdown containing the Printable View and Export functionality.
Timestamp: Feb. 26, 2021, 5:08 p.m.

—--------------------
225. Which Salesforce editions provide option for customizing profiles?
 
A. All Editions
 
B. Unlimited, Developer and Enterprise Editions
 
C. Professional, Unlimited, and Developer Editions
 
D. Enterprise, Unlimited, and Developer Editions
 
E. All except Group Edition
 
F. All except Professional Edition
 
 Answer: D. Enterprise, Unlimited, and Developer Editions
(Note: On standard Salesforce Administrator certification exams, D is marked as the correct answer because creating/cloning custom profiles natively requires Enterprise Edition or higher, along with Developer Edition).
Why:Customizing profiles (cloning standard profiles or creating fully custom profiles) allows administrators to tailor granular object, field, and system permissions to fit specific business roles:
Supported Editions: Fully customizing and creating custom profiles is native to Enterprise, Unlimited, Performance, and Developer Editions.
Why Other Options Are Incorrect:
Group, Contact Manager, and Essentials Editions: These lower-tier editions only support standard profiles and do not allow administrators to create or edit custom profiles.
Professional Edition: Traditionally, Professional Edition relies solely on standard profiles and cannot create custom profiles unless an add-on feature (such as Custom Permissions) is purchased. Therefore, exam questions classify custom profile capabilities strictly as an Enterprise-tier and above feature.
Timestamp: Oct. 14, 2020, 11:10 p.m.

—-------------------------
226. How many profiles can load in a single list view with Enhanced Profile Management enabled?
 
A. 300
 
B. 500
 
C. 200
 
D. 1.000
 
Answer: C
 Why:
When the Enhanced Profile User Interface (or Enhanced Profile List Views) is enabled in Salesforce, list views load up to a maximum of 200 profiles per page.
Standard Page Limit: Across standard list views and grid-based administrative list views in Salesforce, results are paginated at 200 items max per view page to optimize browser rendering and query response times.
Timestamp: June 7, 2023, 10:32 p.m.
—-----------------------
227. Which is a capability of the new Service Cloud console?
 
A. It provides data visibility by combining a list view and related records on one screen.
 
B. It allows agents to view key record information in the highlights panel.
 
C. It preserves the context of calls using primary tabs and subtabs.
 
D. It allows access to data by opening each record in a new window.
 
E. It allows agents to take notes in an interaction log while in a call.
 
Answer: BCE
 Overview:
This is a standard multi-select Salesforce question ("Choose 3 answers") regarding the core capabilities of the Service Cloud Console:
B. It allows agents to view key record information in the highlights panel: The Highlights Panel sits at the top of records to display key fields (such as Case Status, Priority, and Contact Info) so agents don't have to scroll.
C. It preserves the context of calls using primary tabs and subtabs: Primary tabs hold main records (like an Account or Case), while subtabs hold related records (like Contacts or Case Comments), allowing support agents to work on multiple records simultaneously without losing context.
E. It allows agents to take notes in an interaction log while in a call: The Interaction Log component lets agents log call notes directly from the console interface while on an active customer interaction.
Why Option D is Incorrect:
D. It allows access to data by opening each record in a new window: The entire purpose of the Service Cloud Console is to keep agents within a single tabbed workspace window to minimize browser window clutter and context switching.
Timestamp: Dec. 27, 2020, 3:16 p.m.

—----------------------
228. User A modifies a record. This modification triggers a workflow rule for immediate execution that includes a field update on the current record. After the execution is complete, what user will be listed under the Last Modified field of this record?
 
A. User A
 
B. The designated workflow user
 
C. The default workflow user
 
D. The last user to modify the record prior to User A
 
Answer: A
 Why:
When a user updates a record and triggers a Workflow Rule with an Immediate Field Update, Salesforce executes the field update within the same transaction context as the original save operation.
Immediate Field Updates: Because the update occurs immediately as part of the user's transaction, Salesforce attributes the change to the user who initiated the save (User A).
When is the Default Workflow User listed? The Default Workflow User is only listed in the Last Modified field when Time-Dependent (Time-Triggered) Workflow Actions execute later, because those automated actions run asynchronously in the background when the user who triggered the rule is no longer active in that session.
Timestamp: Nov. 19, 2022, 8:14 a.m.
—---------------------
229. How does Locale settings affect your exported CSV file?
 
A. It doesn't affect anything.
 
B. It determines the delimiter.
 
C. It determines the encoding.
 
D. It determines the encryption.
 
Answer: B
Why: Locale settings dictate the field separator used when exporting data to a CSV file. For example, regions that use a comma as a decimal mark rely on semicolons as delimiters, whereas standard English locales use commas. 
Timestamp: March 6, 2021, 4:46 p.m.

—---------------------------
230. What are two sources from which cases can be created?
 
A. Web-to-Lead
 
B. Web-to-Web
 
C. Email-to-Case
 
D. Connect for Outlook
 
Answer: C.d
 Why: Cases in Salesforce can be generated automatically from incoming customer emails via Email-to-Case. They can also be logged directly from Microsoft Outlook using Connect for Outlook (or modern Outlook integration tools). 
Timestamp: Nov. 1, 2019, 9:07 a.m.

—-------------
231. Which report format summarizes data in a grid against horizontal and vertical criteria and provides totals for both rows and columns?
 
A. Summary
 
B. Matrix
 
C. Tabular
 
Answer: B
 Why: Matrix reports group and summarize data along two axes, organizing records into a grid with both horizontal row headers and vertical column headers. This format provides subtotals and grand totals for both rows and columns simultaneously. 
Timestamp: June 7, 2023, 11:02 p.m.
—----------------------------------------
232. Every profile, including profiles associated with Customer Portal users must have at least one visible app.
 
A. True
 
B. False
 
Answer: B
 Why: Every profile assigned to standard Salesforce users must have at least one visible app assigned, but Customer Portal profiles are an exception to this rule because applications are not available to portal users. Consequently, profiles associated with Customer Portal users do not require any assigned or visible standard or custom apps. 
Timestamp: Sept. 8, 2020, 6:37 a.m.
—--------------------------------
233. Which statements are true about Cloud Scheduler?
 
A. It is available in Group, Professional, Enterprise, Unlimited, and Developer Editions only.
 
B. Cloud Scheduler is now enabled by default for all organizations.
 
C. You can automatically see the New Meeting Request button on all eligible contact, lead, and person account detail pages.
 
D. Meeting organizers can not use Cloud Scheduler to request meetings with customers, and have customers select preferred times before confirming the meeting.
 
E. Administrators can add or remove the New Meeting Request button on multiple page layouts using the new Cloud Scheduler quick setup method.
 
Answer: AbCE
 Why: Cloud Scheduler is a feature available in Group, Professional, Enterprise, Unlimited, and Developer Editions that is enabled by default for all organizations. When enabled, administrators can manage the "New Meeting Request" button across multiple page layouts via quick setup, automatically exposing it on eligible contact, lead, and person account detail pages. Statement D is false because enabling meeting organizers to propose times and let customers select preferred slots before confirming is the core functionality of Cloud Scheduler. 
Timestamp: Aug. 2, 2019, 2:20 a.m.

—-------------------------
234. Clients do not have to enable Customizable forecasting before they can ask salesforce to activate Territory Management.
 
A. True
 
B. False
 
Answer: b
 Why: Customizable Forecasting is a mandatory prerequisite that must be enabled before Salesforce can activate original Territory Management. Without Customizable Forecasting configured, Territory Management cannot be turned on for an organization. Therefore, the statement claiming clients do not have to enable it first is false. 
Timestamp: Aug. 19, 2022, 1:59 a.m.
—----------------------
235. What happens when you convert a Lead and an existing account and contact have the same name as the one specified on the lead?
 
A. A new account and contact will be created with different Salesforce ID.
 
B. You can choose to update the existing account and contact.
 
C. The records will automatically update.
 
D. The conversion will fail.
 
E. The account and contact will automatically be overwritten
 
Answer: B
 Why: When converting a lead in Salesforce and an existing account or contact matches the lead details, the user is presented with the option to attach to or update the existing account and contact records. Alternatively, the user can choose to bypass the match and create entirely new records if desired. 
Timestamp: Dec. 29, 2020, 2:36 a.m.


—---------------------
236. You can not use the browser's print function to print reports.
 
A. True
 
B. False
 
Answer: B 
Why: Users can easily print reports using the native browser print functionality or keyboard shortcuts like Ctrl+P (or Cmd+P on Mac). Additionally, Salesforce provides a built-in Printable View button on report pages specifically formatted for clean printing. 
Timestamp: Sept. 8, 2020, 6:42 a.m.


—-----------------------
237. This helps you manage the complete lifecycle of customer service,from logging cases to suggesting and delivering solutions across multiple channels, includingWeb self-service and live agent support:
 
A. Ideas
 
B. Community
 
C. Sales Cloud
 
D. Service Cloud2
 
E. Sales Cloud2
 
F. None of the Above
Answer: D
Why: Service Cloud (historically referred to as Service Cloud 2 in legacy Salesforce exam suites) is designed specifically to support the end-to-end customer service lifecycle. It equips organizations to log cases, suggest knowledge solutions, and support customers across various channels like web portals and live chat. 
Timestamp: July 13, 2020, 8:30 p.m.


—-------------------------
238.How many workflow rules can you create per entity?
 
A. 10
 
B. 15
 
C. 20
 
D. 25
 
Answer: C 
Why: In standard legacy Salesforce limits, the maximum allowed number of workflow rules created per object (entity) was 20. While modern editions allow up to 50 active rules and 500 total rules per object, legacy certification material strictly identifies 20 as the threshold. 
Timestamp: July 13, 2020, 8:58 p.m.
—-------------------
239. What is the default report format for new reports created in report builder?
 
A. Summary
 
B. Tabular
 
C. Matrix
 
Answer: B
Why: Tabular is the default report format assigned when creating a new report in the report builder. It displays data in a simple, straightforward list format without grouping or subtotals. 
Timestamp: June 7, 2023, 11:34 p.m.
—---------------------------
240. Which of the following is part of the Sales Cloud 2?
 
A. Accounts and Contacts
 
B. Cases
 
C. Marketing and Leads
 
D. Solutions
 
E. Content Library
 
F. Opportunities and Quotes
 
Answer: ACFe
 Why: Sales Cloud 2 encompasses core sales automation, marketing management, deal execution, and sales content sharing features. These include Accounts and Contacts, Marketing and Leads, Content Library, and Opportunities and Quotes. In contrast, Cases and Solutions (Options B and D) belong strictly to Service Cloud. 
Timestamp: Oct. 15, 2020, 4:54 a.m.
—---------------------
241. Which of the following are standard Salesforce applications?
 
A. Ideas
 
B. Campaigns
 
C. Administration
 
D. Call Center
 
E. Sales Center
 
Answer: Ad
 Why: Ideas and Call Center (along with Sales, Call Center, Community, Ideas, and Chatter) are standard applications provided out-of-the-box in Salesforce. Campaigns is an object rather than a standard app, while Administration and Sales Center are not standard application names in Salesforce. 
Timestamp: Aug. 14, 2020, 10:18 a.m.
—------------------------

242. What can an administrator customize for the Service Cloud console?
 
A. Whether the record opens as a primary tab or subtab
 
B. The fields displayed in the highlights panel
 
C. The interaction log fields displayed for objects without an Activity History related list
 
D. Whether the SoftPhone displays in the footer or sidebar
 
E. The objects displayed in the navigation tab
 
Answer: Abe
 Why: Administrators can configure Service Cloud console settings to define whether records open as primary tabs or subtabs, specify layout preferences such as the fields displayed in the highlights panel, and select which objects appear in the navigation tab. Interaction logs and SoftPhone displays are managed through separate CTI and layout configurations rather than general console navigation options. 
Timestamp: April 4, 2025, 7:14 p.m.
—--------------------------
243. Which is a consideration when creating a drill-to-detail dashboard component?
 
A. The dashboard component type must be a gauge.
 
B. Drill-to-detail must be enabled on the custom report type.
 
C. The source report must be stored in the drill-to-detail folder.
 
D. The source report must be grouped by record name, record owner, or feed post.
 
Answer: D
Why: To enable drill-to-detail functionality that redirects users straight to a specific record detail page upon clicking a dashboard component, the underlying source report must be grouped by record name, record owner, or feed post. This specific grouping level allows Salesforce to identify and link directly to the individual record represented in the component. 
Timestamp: Sept. 8, 2020, 7:04 a.m.
—-------------------
244. Which can be accessed by a Chatter Free user?
 
A. People
 
B. Content
 
C. Profiles
 
D. Groups
 
E. Files
 
F. Leads
 
Answer: ACDE
 Why: Chatter Free users can access core collaboration features including People, Profiles, Groups, and Files. They cannot access standard Salesforce objects or data such as Leads (Option F) or Salesforce CRM Content (Option B), which require paid or full CRM licenses. 
Timestamp: Dec. 23, 2020, 3:05 p.m.
—-----------------------------
245. This type of relationship links two objects together, but it has no effect on deletion, record ownership, or security, and the lookup relationship field is not required in the page layout.
 
A. Lookup Relationship
 
B. Master-Datail Relationship
 
C. Master-Detail-Sub detail Relationship
 
Answer: A
 Why: A Lookup Relationship links two objects together without affecting record ownership, security, or deletion cascading (unlike a Master-Detail relationship). Additionally, the lookup field is optional by default and does not need to be required on the page layout. 
Timestamp: June 17, 2023, 11:45 a.m.
—-----------------------------

246. When you delete a Contact, it's associated Campaign Member record is deleted as well.
 
A. True
 
B. False
 
Answer: A
 Why: Campaign Member records act as a junction between contacts/leads and campaigns. When a parent Contact or Lead record is deleted from Salesforce, all associated Campaign Member records are automatically deleted as well. 
Timestamp: June 17, 2023, 11:55 a.m.
—--------------------------

247. Data Validation rules is not supported in which Salesforce edition?
 
A. Contact Manager
 
B. Group
 
C. Professional
 
D. Developer
 
E. Unlimited
 
F. All Editions are supported
 
Answer: F
 Why: Data validation rules are a core feature available across all major Salesforce editions, including Contact Manager, Group, Essentials, Professional, Enterprise, Performance, Unlimited, and Developer Editions. Because validation rules are supported across all of these environments, none of the listed editions lack support for them. 
Timestamp: June 17, 2023, 11:59 a.m.
—-------------------------------------

248. Identify the true statements about the workflow approval process?
 
A. When a record is submitted for approval the Admin can edit the record
 
B. You can forward an email approval request to another email address
 
C. The approvers delegate can also approve a request
 
D. Approvers can view an approval request from their home page
 
E. Approvers can only access an approval page from the application
 
Answer: AcD
 Why:
A is true: When a record enters an approval process, it is locked by default, but system administrators (and the assigned approver) retain the ability to edit the record.
C is true: If a delegated approver is assigned to an approver's user profile, that delegate can respond to and approve requests on their behalf.
D is true: Approvers can access, view, and act on pending approval requests directly from the "Items to Approve" component on their Home page.
Statement B is false because forwarding an approval request email to another email address does not transfer the approval authority. Statement E is false because approvers can approve requests via email or the mobile app, not strictly through the desktop application
Timestamp: April 15, 2020, 6:48 p.m.
—-------------------------
249. Printable View does not Save all the report formatting.
 
A. True
 
B. False
 
Answer: B
 Why: The "Printable View" feature in Salesforce preserves report formatting—including headers, column summaries, and grouping structures—when exporting to formats like Microsoft Excel. In contrast, using the "Export Details" option exports raw data without preserving report formatting. 
Timestamp: July 3, 2022, 1:52 a.m.
—-------------------------------

250. Which data can be synched using the new Salesforce for Outlook?
 
A. Custom objects
 
B. Events
 
C. Leads
 
D. Contacts
 
Answer: BD
 Why: Salesforce for Outlook synchronizes Events (calendar appointments), Contacts, and Tasks between Microsoft Outlook and Salesforce. It does not synchronize Leads or Custom Objects. 
Timestamp: Dec. 29, 2020, 3:53 a.m.
—----------------------
251. Time-dependent workflow will not work with which type of workflow evaluation criteria?
 
A. Only when a Record is created
 
B. Every time a Record is created or edited
 
C. Every kind of workflow evaluation criteria
 
D. When a Record is edited and it didn't previously meet the rule criteria
Answer: B
Why: Salesforce restricts time-dependent workflow actions from being added to rules evaluated under the criteria "created, and every time it's edited" (Option B). This safeguard prevents records from repeatedly scheduling and queuing re-triggered time actions on every minor edit. Time-dependent workflow actions are supported only when evaluated on initial record creation or when a record is updated to newly meet the rule criteria.
Timestamp: April 11, 2020, 2:09 p.m.
—--------------------------------
252.  
Up to 25 custom lookup fields can be defined per object.
 
A. True
 
B. False
 
Answer: B
 Why: Salesforce allows up to 40 custom relationship fields (which includes both lookup and master-detail relationships) per object by default. This limit can be increased upon request up to a hard maximum limit of 50 per object. Therefore, the statement restricting it to 25 is false. 
Timestamp: Aug. 24, 2020, 8:34 a.m.
—-------------------------
255. Can a Standard User Profile import members into a campaign?
 
A. Yes.
 
B. No.
 
C. Only if they have "Import Campaign Members" permission checked.
 
D. Only if they have "Modify All Data" permission checked.
 
Answer: c
Why: A user with a standard profile can import campaign members only if they have the "Import Leads" permission on their profile (or permission set) along with the "Marketing User" checkbox selected on their user detail record. Additionally, administrative configurations can grant access through the "Import Campaign Members" user permission or custom profile settings. Without the proper marketing privileges and import permissions, a standard profile user cannot import members into a campaign.
Timestamp: July 3, 2022, 2:17 a.m.
—---------------------------------

256.The record owner is a user or a queue that has control or rights to a particular data record.
 
A. True
 
B. False
 
Answer: A
 
Timestamp: July 4, 2022, 8:31 a.m.
 Why: In Salesforce, every record must have an owner, which can be an individual user or a queue (for supported objects like Cases, Leads, or Custom Objects). The owner has full control and rights over that record, including editing, deleting, and sharing privileges based on object permissions and sharing settings. 
—-------------------------------
257. Standard reports are visible through the Reports search.
 
A. True
 
B. False
 
Answer: B. False
Why: Standard reports provided out of the box by Salesforce are built-in report templates located within standard report folders. They cannot be found using the global search or the Reports tab search bar. To locate standard reports, users must navigate to the Reports tab and either browse through the standard report folders or use them to create and save a new custom report (which can then be searched). 
Timestamp: Dec. 29, 2020, 5:01 a.m.
—--------------------------

258.  
A System Administrator can edit a profile to:
 
A. Prevent a user from viewing custom tabs
 
B. Prevent the use of Mass email
 
C. Deny a user access to other users leads
 
Answer: A, B
(Note: Depending on the specific practice exam question bank, A, B or A, B, C may be marked as correct, but A and B are the primary administrative functions configured via Profiles).
Why:
A is correct: Tab settings on a profile can be configured to Tab Hidden, Default Off, or Default On, allowing administrators to prevent specific profiles from viewing custom tabs.
B is correct: Profile administrative permissions include administrative/general user privileges such as "Mass Email", which can be unchecked on a profile to prevent users from sending mass emails.
C (Contextual): Record-level access to other users' records is primarily controlled via Organization-Wide Defaults (OWD), Role Hierarchy, and Sharing Rules rather than the profile level. However, a profile's object-level permissions (e.g., revoking "Read" access or removing "View All") can prevent users from seeing leads. In classic Salesforce exam keys, A & B are the explicitly supported administrative controls handled directly in profile settings.
Timestamp: March 24, 2020, 2:13 p.m.
—---------------------------------

259. What is a Dashboard made of?
 
A. Tables
 
B. Summary Reports
 
C. Charts
 
D. Gauges
 
Answer: ACD
 Answer: A, C, D
Why: A Salesforce dashboard is a visual display composed of key dashboard components. The visual components used to represent underlying source report data include Charts, Tables, Gauges, and Metrics.
Summary Reports (Option B) serve as a source report type used to supply data to these components, rather than being a component element that makes up the dashboard layout itself.
Timestamp: July 22, 2019, 3:27 p.m.
—------------------------------------
263. What is the maximum number of values you can have in a picklist?
 
A. 500
 
B. 250
 
C. 600
 
D. 1.000
 
E. 2.000
 
Answer: D
Why: A single custom picklist field in Salesforce supports up to 1,000 active entries (and a maximum character limit across all entries).
Timestamp: March 24, 2020, 2:33 p.m.
—------------------------------
265. What is the maximum of time triggers per Workflow Rule?
 
A. 5
 
B. 10
 
C. 15
 
D. 20
 
Answer: B. 10
Why: Salesforce allows a maximum of 10 time triggers per workflow rule. Each individual time trigger can have up to 40 time-dependent actions (such as email alerts, tasks, field updates, or outbound messages) associated with it.
Timestamp: July 3, 2022, 4:46 a.m.
—-----------------------

266. Salesforce is which of the following:
 
A. Salesforce Automation
 
B. Marketing Management
 
C. Customer Support Management
 
D. Campaign Management

E. All of the above
 
Answer: E (All of the above)
(Note: If this is a single-select question from a legacy test bank, A. Salesforce Automation is usually listed as the primary answer. However, the full question historically asks to "Select all that apply".)
Why: Salesforce encompasses all of these core functions across its primary clouds:
Salesforce Automation (SFA): Core functionality of the Sales Cloud (managing leads, opportunities, and accounts).
Marketing Management & Campaign Management: Core capabilities of Marketing Cloud and Sales Cloud campaign management.
Customer Support Management: Core capability of the Service Cloud (managing cases, solutions, and knowledge bases).
Timestamp: Oct. 14, 2020, 3:34 p.m.
—------------------------------
270. The formula editor may be used all of the following places EXCEPT:
 
A. S-Control
 
B. Formula Field
 
C. Default values on Standard Fields
 
Answer: c
 Why: Salesforce does not support defining default values (or setting up formula-driven default values) directly on standard fields out of the box. Formula-based default values can only be configured for custom fields.
S-Controls (Option A) historically used the formula editor to insert merge fields and expressions into HTML/JavaScript code.
Formula Fields (Option B) natively use the formula editor to define calculated field values.
Timestamp: July 4, 2022, 8:13 a.m.
—---------------------------------

271.  
If you are added to a Sales Team with read/write access you then have the ability to extend sharing on the opportunity to other users.
 
A. True
 
B. False
 
Answer: b
 Why: Being added to an Opportunity Team (Sales Team) with Read/Write access allows you to view and edit the record, but it does not give you the authority to manually extend sharing or add other users to the team.
In Salesforce, manual sharing and managing the Opportunity Team are privileges reserved for:
The record owner
Users above the owner in the Role Hierarchy
System Administrators (or users with "Modify All Data" / "Modify All" permissions)
Timestamp: Jan. 14, 2023, 1:42 a.m.
—----------------------
272. A Workflow rule can only be triggered when a record is created.
 
A. True
 
B. False
 
Answer: B. False
Why: A workflow rule can be triggered when a record is created, as well as when a record is edited (or updated).
Salesforce workflow rules support three distinct evaluation criteria:
Created (triggers only when the record is initially created).
Created, and every time it's edited (triggers on creation and every subsequent edit).
Created, and any time it's edited to subsequently meet criteria (triggers on creation and when edits cause the record to newly meet the specified criteria). 
Timestamp: May 21, 2024, 5:51 p.m.
—-------------------------
274. When you have exceeded your general storage limit, you can use your complimentary document storage for additional space.
 
A. True
 
B. False
 
Answer: B
Why: Salesforce maintains two completely separate pools for storage: Data Storage (which holds records) and File Storage (which holds uploaded files, attachments, and documents). You cannot transfer or reallocate unused space from one pool to cover an overage in the other. When you exceed your data storage limit, unused file/document storage space cannot be used as a buffer or additional space.
Timestamp: May 27, 2020, 8:18 a.m.
—
275. To make a field required, which of the following is used) (Pick the best possible answer)
 
A. Page Layout
 
B. Field Level Security
 
C. Profile
 
D. Both Page Layout and Field Level Security
 
Answer: A
Why:
Page Layouts allow administrators to mark a field as required (or read-only) for users interacting with that specific layout interface.
Field-Level Security (FLS) controls visibility and editing rights (Visible or Read-Only). FLS cannot be set to "Required"—it can only grant or restrict access.
Profiles manage FLS settings, but do not directly set fields as required.
(Note: While making a field required universally at the Field Definition level is the most secure method in Salesforce, among the options provided, the Page Layout is the only mechanism listed that can directly make a field required.)
Timestamp: March 30, 2020, 8:16 a.m.
—-
276. What type of information can NOT be shown with an S-Control Dashboard component?
 
A. Combination of two other Dashboard components
 
B. External feed of data
 
C. Data Warehouse information
 
D. Flash representations of data
 
Answer: A
Why: Official Legacy Exam Key: In historic Salesforce ADM-201 practice exam answer keys, B. External feed of data is listed as the targeted answer key.
Technical Reality: Programmatically, an S-Control (and its successor Visualforce/Lightning components) can pull external data feeds, fetch data warehouse info via web service callouts/APIs, and render custom HTML/Flash controls. However, an S-Control component cannot natively combine or amalgamate two other existing Salesforce dashboard components into a single element.
Timestamp: April 4, 2025, 7:15 p.m.
—----------------
277. A new list view can be created from within the console
 
A. True
 
B. False
 
**Answer: b
Why: In the Salesforce Console (particularly in classic exam scenarios and standard console views), you can select and view existing list views, but you cannot create a new list view directly from within the console frame itself. To create a new list view, a user must navigate to the standard Salesforce tab for that object (such as Accounts, Contacts, or Cases) and create it from the standard object view. 
Timestamp: March 30, 2020, 12:33 p.m.
—------------------
280. Which of the following is a standard Profile?
 
A. Sales User
 
B. Marketing User
 
C. Invoice Manager
 
D. Contract Manager
 
Answer: b,d
 Why: Salesforce includes several standard profiles out of the box, including:
Contract Manager: A standard profile that allows users to create, edit, and manage contracts and related records.
Marketing User: A standard profile assigned to users who create and manage marketing campaigns.
Standard User, Solution Manager, Read Only, System Administrator: Other standard profiles provided by default.
Note on Options:
Sales User and Invoice Manager are not built-in standard profiles (they are custom profiles often used as examples in training or practice orgs).
On older legacy ADM-201 exams where only one answer could be picked, D. Contract Manager (or B. Marketing User) is marked as correct.
Timestamp: June 19, 2021, 9:49 a.m.
—-------------------
281. Who may be assigned a workflow task? There are 5 correct answers.
 
A. A single user
 
B. Multiple users
 
C. The Record owner
 
D. The Record creator
 
E. An Account team role
 
F. A Sales Team Role
Answer: A, C, D, E, F
(Note: While the question asks to select 5 options, in actual Salesforce functionality, a Workflow Task can only be assigned to a single user at a time—meaning Option B is strictly incorrect. In classic exam dumps with 6 choices including "A Role", options A, C, D, E, and F are marked as the 5 valid targets.)
Why:
A. A single user: Correct. Every workflow task must be assigned to one specific individual user.
B. Multiple users: Incorrect. Workflow tasks cannot be assigned to multiple users or groups simultaneously.
C. The Record owner: Correct. The current owner of the record triggering the workflow can be assigned.
D. The Record creator: Correct. The user who created the record can be assigned.
E. An Account team role: Correct. For Account-related objects, tasks can be assigned dynamically based on Account Team roles.
F. A Sales Team Role (Opportunity Team Role): Correct. For Opportunity records, tasks can be assigned based on Opportunity/Sales Team roles.
Timestamp: Dec. 30, 2020, 3:28 p.m.
—--------------------------------
282. You can create the following Email Template Formats: Choose 4
 
A. Text
 
B. Visual Force
 
C. HTML with Letterhead
 
D. XML Templates
 
E. Custom HTML
 
Answer: ABcE
Why: Salesforce Classic and Lightning support four primary types of custom email templates:
A. Text: Plain text templates readable by any email client.
B. Visualforce: Advanced templates that allow pulling dynamic data across multiple objects using Visualforce code.
C. HTML with Letterhead: Standard HTML templates built using an existing Salesforce letterhead background/branding structure.
E. Custom HTML: Advanced HTML templates created without using a pre-defined letterhead layout (allowing raw custom HTML code).
(Note: XML Templates are not a valid email template format in Salesforce).
Timestamp: Dec. 23, 2020, 4:36 p.m.
—----------------------------

283. Universally required fields always display on edit pages regardless of field-level security.
 
A. True
 
B. False
Answer: A. True
Why: When a custom field is marked as Universally Required at the field definition level, Salesforce overrides standard security controls to guarantee data integrity:
It automatically displays on edit pages across all page layouts for that object.
It overrides Field-Level Security (FLS)—meaning users cannot hide or restrict edit access to a universally required field, even if FLS is set to Read-Only or Hidden.
Timestamp: Sept. 8, 2020, 8:27 a.m.
—---------------------
284. If you change the data type of any custom field used for lead conversion, that lead field mapping will be deleted:
 
A. True
 
B. False
Answer: A. True
Why:
In Salesforce, custom lead fields are mapped to custom fields on Account, Contact, or Opportunity records for the lead conversion process. If you change the data type of a custom field that is actively participating in lead field mapping, Salesforce automatically deletes the existing lead field mapping for that field.
If you need to change the field's data type, you must re-create the field mapping in Setup > Lead Custom Field Mapping after the data type change is complete.
Timestamp: Jan. 22, 2024, 9:36 a.m.
—--------------------------
286. Organization-Wide Default Sharing Rule for Calendar Access Default is as Follows:
 
A. Hide Details
 
B. Hide Details and Add Events
 
C. Show Details
 
D. Show Details and Add Events
 
Answer: B. Hide Details and Add Events
(Note: Depending on the specific Salesforce practice exam bank, option B is listed as the standard factory default configuration out-of-the-box for Calendar Default Internal Access).
Why:Salesforce Organization-Wide Defaults (OWD) for the Calendar object govern what users can see and do on another user's personal calendar by default:
Hide Details: Users can only view busy/free times without seeing event names or details.
Hide Details and Add Events (Default): Users can see busy/free times and create/schedule new events on another user's calendar, but cannot view existing event details.
Show Details: Users can view event details on another user's calendar but cannot add new events.
Show Details and Add Events: Users can view full event details and add new events on another user's calendar.
Timestamp: Jan. 1, 2021, 8:42 a.m.
—-----------------------
288. You must meet the following prerequisites before enabling territory management? Choose 2 answers
 
A. Your organization must be using customizable forecasting
 
B. Follow the steps in the Deploying Territory Management Guide to prepare your organization for territory management.
 
C. You must have the Marketing User Profile
 
D. You must have the Territory Manager Profile
 
Answer: A, B
Why:
A is correct: Historically in Salesforce (Original Territory Management), Customizable Forecasting was a mandatory prerequisite that had to be enabled before Territory Management could be turned on.
B is correct: Deploying Territory Management involves significant structural changes to sharing models and forecasting; following the official deployment and preparation steps is a required prerequisite process.
Note: Options C and D are incorrect because profiles like "Marketing User Profile" or a custom "Territory Manager Profile" are not default system prerequisites for enabling the feature. 
Timestamp: July 4, 2022, 9:17 a.m.
—------------------
291. What is Salesforce.com Partner Portal? Choose 2 answers:
 
A. Use your company logo on a Partner Site
 
B. Develop Partner Application on Force.com Platform
 
C. Data goes into your Salesforce objects through a third party site
 
D. Create Interactive Communities
 
E. All of the above
 
Answer: A. Use your company logo on a Partner Site & D. Create Interactive Communities
Why: A. Use your company logo on a Partner Site: Partner Portals (and their modern successor, Experience Cloud Partner Sites) allow organizations to add custom branding, logos, and styling to deliver a co-branded or company-branded interface for partner users.
D. Create Interactive Communities: Partner Portals provide collaborative spaces for third-party channel partners to interact with your organization, manage shared leads and opportunities, and access shared resources.
Note on incorrect options:
B refers to general platform application development.
C describes external API integrations rather than a Partner Portal interface.
Timestamp: April 18, 2021, 11:50 a.m.
—-------------------
296.  Custom Picklist fields can be either controlling or dependent fields
 
A. True
 
B. False
 
Answer: A. True
Why: Custom picklist fields can serve both roles in field dependencies:
Controlling Field: A custom picklist (or checkbox) can control the available options in a dependent picklist.
Dependent Field: A custom picklist can be controlled by another picklist or a checkbox field. 
Timestamp: April 1, 2020, 1:12 p.m.
—----------------------------------------------
297.  Maximum number of values allowed in a controlling field is:
 
A. 500
 
B. 100
 
C. 300
 
D. 200
Answer: C. 300
Why: A controlling field in a Salesforce field dependency can have a maximum of 300 values.
Key considerations for field dependencies:
Custom picklists and checkboxes (both standard and custom) can be controlling fields.
Standard picklists can be controlling fields, but cannot be dependent fields.
Multi-select picklists can only be dependent fields; they cannot act as controlling fields.
If a custom picklist serves as both a dependent picklist and a controlling field for another child field, it cannot contain more than 300 values.
Timestamp: April 18, 2021, 11:53 a.m.
—------------------------
301, The SideBar search does not Search the following: Choose 3 answers
 
A. Custom Objects
 
B. Documents
 
C. Products
 
D. Reports
 
E. Solutions
 
Answer: BCe
 Why: In classic Salesforce Sidebar Search (Sidebar Lookup / Sidebar Search widget), standard searchable components primarily included core transactional objects like Accounts, Contacts, Leads, Opportunities, Cases, and indexed Custom Objects.
The classic Sidebar search explicitly excludes:
B. Documents: Searched separately within the Documents tab/folder structure.
C. Products: Searched directly within Price Books / Opportunity Line Items rather than the main sidebar search index.
E. Solutions: Managed and searched independently within the Solutions tab/knowledge index.
(Note: Custom Objects [Option A] and Reports [Option D] are searchable via standard search channels).
Timestamp: July 23, 2019, 9:49 a.m.
—------------------
302. Workflow Tasks are NOT tracked in the Activity History and can be reported on MMM?
 
A. True
 
B. False
 
Answer: B. False
Why: Workflow tasks are tracked in Activity History and can be reported on.
When a workflow rule fires a task action, Salesforce automatically creates a Task record. Once completed (or upon creation), it is logged under the target record's Activity History related list. Because workflow tasks are standard Task records, they are fully accessible in standard and custom Activity reports.
Timestamp: April 9, 2020, 12:35 p.m.

—------------------------------
304. Universal Containers would like their sales reps to be able to send branded email invitations to customers for business meetings and to collaborate with customers from a branded Website to find a suitable meeting time.How can an Administrator accomplish this?
 
A. Create a custom email template for invitations that displays your compant logo
 
B. Add a company logo to meeting requests in Salesforce
 
C. Create an external integration with Google calendar using Sites
 
D. Enable Chatter to allow reps to Communicate with customers
 
Answer: A or B
 Key Context & Nuance
Legacy Feature (Cloud Scheduler / Proposed Meetings): This exam question refers to the legacy Salesforce Cloud Scheduler (New Meeting Request) feature.
Customization Functionality: Cloud Scheduler allowed users to invite customers to suggest/select meeting times via a Salesforce-hosted request page. Administrators could brand these meeting request pages and emails by adding a company logo via Activity Settings or utilizing branded custom email templates.
Exam Answer Key Variants
Option A: Often cited in discussions because building a custom HTML email template with letterhead/company logo is the standard, modern way administrators brand outbound invitations.
Option B: Frequently listed as the targeted correct answer in classic Salesforce ADM-201 practice answer keys specifically referencing the legacy "Add a logo to Cloud Scheduler meeting requests" setting.
Timestamp: March 5, 2021, 12:11 p.m.
—---------------------
306. Marketing and Sales users at Universal Containers would like more visibility into Lead and Contact participation in this years Trade Show. How would anAdministrator build this into the application? Choose 2 answers
 
A. Create Cross-object formula fields to display campaign member record details on a lead or a contact record
 
B. Alert lead and contact owners with workflow when a prospective customer regsiters for the event
 
C. Customize the campaign member related list on the lead or contact object
 
D. Create Cross-object formula fields to display lead or contact record details on a campaign member record
 
Answer: C, D
Key Context & Breakdown
C. Customize the campaign member related list on the lead or contact object: (Always Correct) Customizing the Campaign History / Campaign Member related list on Lead and Contact page layouts lets reps immediately see which campaigns (e.g., Trade Show) a prospect is associated with, along with their status (e.g., Responded, Attended).
B. Alert lead and contact owners with workflow when a prospective customer registers for the event: (Answer Key Choice in classic exam dumps) In historical ADM-201 practice exam answer keys, B and C are marked as the target answers to provide immediate real-time notifications to record owners when event participation changes.
A. Create Cross-object formula fields...: (Popular Technical Choice) From a technical implementation standpoint, admins often use custom fields or cross-object references to surface Campaign Member statuses directly on parent Lead/Contact detail pages.
Timestamp: Dec. 31, 2024, 5:35 p.m.
—------------------------
307. How does an agent submit an article for publishing? Choose 3 answers:
 
A. Promote an Answer for consideration
 
B. Re-assign an article to the publishing queue
 
C. Publish an article to the solution category
 
D. Submit an article upon closing a case
 
E. Publish at-will, with "Manage Articles" profile permission
 
Answer:  A, B, D 
Key Breakdown & Context
A. Promote an Answer for consideration: (Correct)
In Salesforce Knowledge and Answers, high-quality community answers can be "promoted" to create a draft knowledge article.
D. Submit an article upon closing a case: (Correct)
Support agents resolving a case can submit new content for publishing directly during the case closure workflow.
E. Publish at-will, with "Manage Articles" profile permission: (Standard Correct Answer)
If an agent possesses the required Knowledge management permissions (such as "Manage Articles" and specific article actions), they can draft and publish articles directly at any time.
Note on Answer Key Variants
Standard Exam Key (A, D, E): Most classic Salesforce ADM-201/Knowledge exam answer keys list A, D, and E as the targeted options for direct article creation and publishing routes.
Alternative Exam Key (A, B, D): Some question banks list B. Re-assign an article to the publishing queue instead of E, referring specifically to approval/queue workflows where an agent without direct publish rights submits an article by assigning it to a publishing review queue.
Timestamp: July 11, 2022, 1:48 a.m.
—-----------------------------
309. Which statement is TRUE regarding dependent lookups? Choose 2 answers:
 
A. They can be configured to make fields on related records, depending on data in the source record
 
B. They can be configured to limit the records returned by a lookup based on the value of a field on a related record
 
C. They can be configured to compare data to external sources to verify that contact and prospect information is up to date.
 
D. They can be configured when creating the master-detail or lookup relationships
 
Answer: B, D 
Why: Dependent lookups filter the available options in a lookup field based on the value of another field on the target object or related record. They are configured during the creation or editing of lookup and master-detail relationship fields in Salesforce. This ensures data integrity by preventing users from selecting invalid or unrelated records. 
Timestamp: Dec. 31, 2024, 6:12 p.m.
—----------------------
311. Which is a capability of the Cloud Scheduler? Choose 2 answers:
 
A. Allow a user to propose multiple meeting times
 
B. Automatic proposed meeting times based on Salesforce user calendars
 
C. Sync a Salesforce calendar with an Outlook Calendar
 
D. Custom brand different invitations per customer
 
Answer: A, B
Why: Salesforce Cloud Scheduler allows users to select and propose multiple potential meeting times to prospective attendees. The tool checks internal Salesforce user calendars to automatically suggest available time slots where all required attendees are free. 
Timestamp: Oct. 19, 2020, 4:36 p.m.
—----------------------------------
314. What determines the suggested criteria for a lookup filter?
 
A. Previously used filter criteria
 
B. Organization Wide Default settings
 
C. The current application schema
 
D. A survey taken when enabling this feature
 
Answer: C
Why: When configuring a lookup filter, Salesforce analyzes the application schema to identify existing relationships between objects in the org. Clicking "Insert Suggested Criteria" generates filter options based directly on these pre-established object relationships. 
Timestamp: Aug. 6, 2020, 5:56 p.m.
—-------------------
315. What can an agent do when resolving a case? Choose 2 answers
 
A. Email articles to a customer
 
B. Create an article upon closing a case
 
C. Assign data categories to a case
 
D. Attach only one article to a case
 
Answer: AB
 Why: When resolving a case in Salesforce, support agents can share relevant Knowledge articles directly with customers via email to provide solutions. Additionally, Salesforce Knowledge allows agents to draft or create a new Knowledge article as part of the case closure workflow to document novel solutions. Multiple articles can be attached to a single case, and data categories are assigned directly to Knowledge articles rather than to case records. 
Timestamp: Feb. 2, 2025, 8:24 a.m.
—----------------------------
317. The value in a Custom Field called Salary is 50,000. What would the formula, ISNUMBER (Salary_c), return
 
A. FALSE
 
B. TRUE
 
C. Depends on the Users Locale
 
D. 50.000
 
Answer: A
Why: The Salesforce ISNUMBER() formula function evaluates whether a referenced field or text expression contains a valid numeric value. Because the value 50,000 stored in the custom field Salary__c is numeric, the function evaluates successfully. Therefore, the formula returns TRUE. 
Timestamp: April 17, 2024, 5:22 p.m.
—----------------------

319. Which action can be performed on the Campaign Member object?
 
A. Relate a business account to a campaign record
 
B. Create validation rules related to the campaign member record
 
C. Create custom lookup field to another object
 
D. Change a lead to a contact from the campaign member record
 
Answer: BC
Why: Salesforce allows business accounts to be added to campaigns as campaign members, and administrators can create custom validation rules on the Campaign Member object. Additionally, custom lookup fields can be added to the Campaign Member object to establish relationships with other standard or custom objects. However, converting or changing a lead to a contact cannot be performed directly from a Campaign Member record.
Timestamp: July 1, 2020, 3:44 p.m.
—------------------
321. What type of field can a lookup filter be applied to? Choose 3 answers
 
A. Hierarchical relationship fields
 
B. Master-Detail relationship fields
 
C. Relationship fields for records owned by queues
 
D. Lookup fields to the Account, Contact, User, and Custom Objects
 
E. Lookup fields to the Activity object
 
Answer: ADB
Why: Lookup filters can be applied to lookup, master-detail, and hierarchical relationship fields in Salesforce. They are specifically supported for relationships pointing to standard objects like Accounts, Contacts, and Users, as well as any custom objects.  
Timestamp: July 12, 2022, 2:18 a.m.
—------------------------
322. Which action type is represented by an icon in the process visualizer? Choose 2 answers
 
A. Request rejection details
 
B. View recall details
 
C. Start a new task
 
D. Send an email alert
 
Answer: C, D
Why: In Salesforce's Process Visualizer, automated actions configured within an approval process—such as creating tasks, sending email alerts, field updates, and outbound messages—are represented by visual icons attached to the approval steps. Actions like starting a new task and sending an email alert clearly display their respective action icons in the diagram view. In contrast, options such as requesting rejection details or viewing recall details are step properties or user interactions rather than distinct automated process action types represented by standard action icons.
Timestamp: Oct. 18, 2021, 6:22 a.m.
—------------------------------
324. Which statement is true regarding High Volume Portal users? Choose 2 answers
 
A. Are not assigned to roles in the role hierarchy
 
B. Are allotted extra data storage usage
 
C. Can view documents from Content workspaces
 
D. Cannot own an Account record
Answer: A, D 
Why: High Volume Portal users do not participate in the Salesforce role hierarchy, which eliminates performance overhead related to role-based sharing calculations. Additionally, due to architectural license restrictions on standard object ownership, High Volume Portal users cannot own Account records.  
Timestamp: July 11, 2022, 4:38 a.m.
—------------------------
327. What can be reviewed using the process visualizer?
 
A. Sales Processes
 
B. Approval Processes
 
C. Support Processes
 
D. Workflow Rules
 
Answer: B
 Why: The Process Visualizer is a graphical tool in Salesforce specifically designed to display flowchart diagrams of approval processes. It helps administrators review and understand defined steps, rule criteria, and associated actions for approval workflows. 
Timestamp: April 19, 2021, 2:42 p.m.
—--------------------------
328. Which email address option is available to override the From Email Address in a Workflow Email Alert?
 
A. An active Administrator's email address
 
B. A manual entered email address
 
C. An active user's email address
 
D. An Organization -wide email address
 
Answer: D 
Why: To override the default "From" email address in a Workflow Email Alert, administrators can select an Organization-Wide Email Address. This ensures that automated outbound communications come from a controlled, verified company address rather than an individual user's personal email. 
Timestamp: April 22, 2020, 10:44 p.m.
—----------------------------------
331. UI component for tag Access (Choose 2)
 
A. Edit tag links
 
B. View tags on header
 
C. Sidebar widget
 
D. Search Tags
 
Answer: CD
Why: Users can access and manage tags in Salesforce via sidebar components and dedicated tag search features. These UI tools allow individuals to look up existing tags and view associated records quickly. 
Timestamp: March 4, 2021, 6:01 a.m.
—-----------------
333. Which of the following are standard Salesforce applications? (Choose all that apply.)
 
A. Ideas
 
B. Campaigns
 
C. Administration
 
D. Call Center
 
E. Sales Center
 
Answer: A, D
 Why: Salesforce includes several built-in standard applications out of the box, such as Ideas, Campaigns, and Call Center (historically part of Service features). Options like Administration and Sales Center are not standard application titles in this context. 
Timestamp: April 17, 2024, 6:36 p.m.
—-------------------
334. A role has many to many relationships with the user?
 
A. True
 
B. False
 
Answer: B
Why: In Salesforce, a user can only be assigned to a single role within the role hierarchy. A single role can contain multiple users, but a user cannot have multiple roles, meaning there is a one-to-many relationship rather than a many-to-many relationship.
This Salesforce Role Hierarchy explanation provides a helpful breakdown of how roles and user assignments operate.
Timestamp: April 7, 2020, 1:56 p.m.
—----------------------------
335. Is it true that campaigns and opportunities have many to many relationship?
 
A. True
 
B. False
 
Answer: A
Why: Campaigns and opportunities maintain a many-to-many relationship through Salesforce's Campaign Influence feature. This architecture allows multiple campaigns to be associated with a single opportunity, and a single campaign to influence multiple opportunities. 
Timestamp: April 28, 2020, 12:55 p.m.
—-----------------------------
337. Which of the following statements are true concerning email activation?
 
A. The email activation feature requires that the user click an activation link before logging onto a new computer.
 
B. The email activation feature cannot be disabled.
 
C. The email activation feature can be disabled by request to Salesforce.com support.
 
D. The email activation feature can be disabled through the UI.
 
Answer: Ac
 Why: Salesforce's email (device) activation feature requires users to verify their identity via an activation link or code when logging in from an unrecognized browser, device, or location outside trusted networks. Because this core security feature cannot simply be toggled off directly by administrators within the user interface, it can only be disabled by submitting a formal request to Salesforce support. 
Timestamp: April 4, 2025, 7:17 p.m.
 —--------------------------------
338. Using the following hierarchy, if a sharing rule exists granting Operations Person Read/Write access to Sales Management on the Account Object, what access does Operations Management have to Sales Management's accounts?Default access for the Account object is Public Read Only.Executive Management -Sales Management -Sales Person -Operations Management -Operations Person -
 
A. None
 
B. Read Only
 
C. Read/Write
 
D. Read/Write/Transfer
 
Answer: c
 Why: In the given role hierarchy, Operations Management sits above Operations Person, meaning Operations Management automatically inherits any record access granted to Operations Person through the role hierarchy. Since a sharing rule grants Operations Person Read/Write access to Sales Management's accounts, Operations Management also receives Read/Write access to those same accounts. 
Timestamp: April 17, 2024, 7:12 p.m.
—---------------------------
340. Documents count toward Data Storage.
 
A. True
 
B. False
 
Answer: B
Why:In Salesforce, Documents count toward File Storage, not Data Storage.
Data Storage is used for structured data records such as Accounts, Contacts, Leads, and Opportunities.
File Storage is used for unstructured file attachments, the Documents tab, Salesforce Files, Chatter files, and Site.com assets 
Timestamp: Jan. 28, 2021, 4:08 a.m.
—--------------------------
341. File attachments, document tabs, and sales force content count towards Data Storage:
 
A. True
 
B. False
 
Answer: B
 Why: File attachments, document tabs, and Salesforce Content count toward an organization's File Storage, not its Data Storage. Data Storage is reserved strictly for tracking standard and custom record rows (such as accounts, contacts, and custom objects). Therefore, the statement that they count toward Data Storage is false. 
Timestamp: April 28, 2020, 1:26 p.m.
—-------------------------
344. The system administrator has created a new custom object and application. This individual now needs to populate the new object with 1000 records, which are formatted in a CSV file. The Import Wizard (Data Management --> Import Custom Objects) is appropriate for this task.
 
A. True
 
B. False
 
Answer: A
Why: The Data Import Wizard fully supports custom objects and allows the import of up to 50,000 records at a time. Since the administrator is only importing 1,000 records formatted in a CSV file, the Import Wizard is completely appropriate for this task.
Timestamp: April 17, 2024, 7:25 p.m.
—------------------
348. Multiple record types may be created for every tab with the exception of:
 
A. Home Tab
 
B. Forecast Tab
 
C. Documents Tab
 
D. Leads Tab
 
E. Report Tab
 
Answer: ABCE
 Why: Record types are used to segment standard and custom objects into different business processes, page layouts, and picklist values. However, utility, administrative, and reporting components—specifically the Home, Forecast, Documents, and Reports tabs—do not support object records or record types. The Leads tab does support record types, making it the exception to the exception list. 
Timestamp: April 17, 2024, 7:38 p.m.
—-----------------------
349. Field-level security can be used to make a field required
 
A. True
 
B. False
 
Answer: B
Why: Field-level security (FLS) controls whether a field is visible or read-only for specific user profiles or permission sets, but it cannot make a field mandatory. Making a field required is handled independently at the field definition level (making it universally required) or via page layouts and validation rules.
Timestamp: Oct. 1, 2019, 7:44 p.m.
—------------------
351. Is it possible for a user to own a record and not see it:
 
A. True
 
B. False
 
Answer: A
Why: Yes, it is possible. If a system administrator uses Field-Level Security (FLS) to hide specific fields, or if organization-wide defaults and sharing settings restrict access, a user can still technically be the owner of a record while being blocked from viewing it or its contents.
Timestamp: July 18, 2022, 2:57 a.m.
—----------------------------
353.  What is true about a Role?
 
A. Controls the level of visibility that users have to an org. data
 
B. Role is required while creating Record types
 
C. A user must be associated to one role
 
D. A user may be associated to one role
 
Answer: A, D Why:
A,  and D are true: A role in Salesforce's sharing architecture determines the level of data visibility users have through the role hierarchy. Additionally, every active user must be assigned to exactly one role (a user cannot have zero roles, nor can they span multiple roles simultaneously).
B is false: Roles are not required when creating record types; record types are associated with profiles and permission sets, not roles. 
Timestamp: Sept. 15, 2020, 9:10 a.m.
—-------------------------
357. What happens when an email is sent to a customer from a case?
 
A. Case hierarchy is reset
 
B. Case escalation is reset
 
C. Case escalation rules are deleted
 
D. Case assignment rules are deleted
Answer: B
Why: When an outbound email is sent to a customer from a case (such as a reply or update), Salesforce automatically resets the case's escalation timer. This ensures that support teams are given a fresh window to respond before the case triggers an escalation rule.
Timestamp: Sept. 21, 2022, 2:41 a.m.
—---------------------------
360. If using Customizable forecasting there is a separate forecast role hierarchy
 
A. True
 
B. False
 
Answer: B
Why: Customizable Forecasting uses the standard user role hierarchy (or territory hierarchy) to determine how forecast data rolls up through management. It does not create or maintain a separate, standalone forecast role hierarchy; instead, it relies directly on the organization's existing role structure 
Timestamp: June 3, 2020, 8:25 a.m.
—-------------------------
361.How many roles can you create for your org?
 
A. 200
 
B. 300
 
C. 500
 
D. No Limit
 
Answer: c
Why: By default, a standard Salesforce organization can create up to 500 roles in its role hierarchy (though newer orgs or organizations that request an increase can scale higher through Salesforce support). 
Timestamp: Aug. 21, 2024, 1:01 a.m.
—------------------
362. What is the Sharing Rule?
 
A. Automated rules that grant access to groups of users
 
B. Exceptions to Org. wide Defaults
 
C. Rules given for group of user working closely on a project
 
D. Irrelevant for Public Read / Write Organizations
 
Answer: AB
 Why:A and B are true: Sharing rules are automated mechanisms that extend record access beyond organization-wide defaults (OWD) to specific groups of users, effectively acting as explicit exceptions to restrictive baseline OWD settings.
D is true: If an object's OWD is set to Public Read/Write, all users already have full read and write access to all records, making sharing rules for that object irrelevant since additional access cannot be granted.
C is false: Collaboration on specific projects or working closely together across different teams is typically handled via public/private groups, manual sharing, or Salesforce features like Chatter and Teams, rather than standard sharing rules.
Timestamp: April 4, 2025, 7:18 p.m.
—----------------------------
365. If Phil is promoted from a Sales Associate to Senior Sales Exec, and the new sales associate is appointed to take Phil's responsibilities. What are the appropriate steps to transfer Phil's account to the new associate?
 
A. Overwrite Phil's User Profile with the new associates information and create a new profile for Phil.
 
B. Create a new profile for Phil as well as new associate. Deactivate Phil's profile with Sales Associate role and transfer all the accounts, opportunities and leads to the new associate.
 
C. Associate the new role to Phil's existing profile and Transfer all the accounts, opportunities and leads to the new associate.
 
D. None of the above
 
Answer: C
 Why: The correct administrative process when an employee changes roles and a replacement is hired involves:
Creating a new user record (not just a "profile") for the new associate.
Updating Phil's existing user record with his new role (Senior Sales Exec) and profile.
Using mass transfer tools (like Mass Transfer Records in Setup) to transfer Phil's old accounts, opportunities, and leads to the new associate if required, rather than deactivating Phil or overwriting profiles incorrectly.
Since none of the options correctly describe updating Phil's user record for his promotion while creating a separate, distinct user record for the new hire, None of the above is the correct choice.
Timestamp: Sept. 21, 2022, 4:16 a.m.
—----------------------------------------------------
367. The size limit for documents uploaded is:
 
A. 1 Megabyte
 
B. 3 Megabyte
 
C. 5 Megabyte
 
D. 25 Megabyte
 
Answer: C
Why: In Salesforce Classic, the file size limit for individual files uploaded to the Documents tab is 5 Megabytes. (Note: This is distinct from standard attachments, Salesforce Files, or Content limits). 
Timestamp: Oct. 20, 2020, 8:25 p.m.
—---------------------------
368. Author and the owner have same access to the document
 
A. True
 
B. False
 
C. Neither True nor False
Answer: B
 Why: In Salesforce, the Author (the user who originally uploaded or created the document) and the Owner do not necessarily share the exact same level of access or control. The owner of the document record holds full management and sharing control over it, whereas the author simply created it and may or may not retain modification or ownership rights depending on how the document properties and folder access permissions are configured. 
 
Timestamp: June 3, 2020, 8:38 a.m.
—-------------------------------
369. You can update licenses on the Company Profile.
 
A. True
 
B. False
 Answer: B
Why: The Company Profile page in Salesforce displays information about your organization, such as license counts, storage usage, company address, and fiscal year settings. However, you cannot directly purchase, modify, or update your user license count from the Company Profile page; changes to license quantities must be coordinated through your Salesforce account representative or contract.
Update User Licenses Via Data Loader in Salesforce provides a helpful tutorial on managing and updating user license allocations and user profiles.
Timestamp: Sept. 26, 2023, 8:30 p.m.
—-----------------------
372. Activities are both Tasks and Calendars
 
A. True
 
B. False
 
Answer: A
Why: In Salesforce, the Activities feature encompasses both Tasks (to-do items or action tracking) and Events (calendar appointments and meetings). Together, tasks and events make up the core activity management architecture used to track customer interactions.
Timestamp: April 10, 2020, 1:22 p.m.
—--------------------------------
374. Which of the following is true that can cause data loss when an existing custom field is changed? (Choose all that apply.)
 
A. Changing to or from type Date or Date/Time
 
B. Changing to Number from any other type
 
C. Changing to number from Percent
 
D. Changing to one Currency from any other currency type
 
Answer: A, B, D
Why: According to Salesforce documentation, changing certain custom field data types can lead to data loss. Specifically:
A is true: Changing to or from type Date or Date/Time causes data loss.
B is true: Changing to Number from any other type causes data loss.
C is false: Changing between Number, Currency, and Percent generally does not cause data loss if you are changing to Percent or Currency from Number (though changing to Currency or Percent from any other type like text/date does, changing between compatible numeric/monetary types is handled, but specifically changing to Number from any other type or to Currency/Percent from any other type triggers data loss warnings). Wait, let's look closely at option C: "Changing to number from Percent" or "Changing to number from..." wait, option C says "Changing to number from Percent" — actually, changing to Percent from any other type causes data loss.
D is true: Changing to Currency from any other type causes data loss.
Timestamp: Oct. 21, 2021, 7:50 p.m.
—--------------------------
375. Which of the statements is/are true for data validation?
 
A. Data Validation can enforce data integrity as well as make a field required in the page layout
 
B. Data Validation can prevent duplication of records
 
C. Data Validation run on the client machine after the user clicks the Save button
 
D. Data Validation rules are not enforced when using API & import operations
 
E. Validation rules can be activated / deactivated by the user
 
Answer: E
Why: E is true: Validation rules can be easily activated or deactivated as needed by administrators.
A is false: Validation rules ensure data integrity and can enforce required fields, but making a field required on the page layout is handled at the field definition level or layout properties, not strictly by validation rules alone.
B is false: Duplicate records are typically prevented using Duplicate Rules and Matching Rules, not standard data validation rules.
C is false: Validation rules execute on the server side when the user clicks save, not on the client machine.
D is false: Validation rules are enforced during API and import operations (unless bypassed intentionally via specific code or configurations), ensuring data cleanliness across integrations. 
Timestamp: Oct. 11, 2020, 5:51 p.m.
—-----------------------------------
376. Identify the statement that correctly defines data validation
 
A. Data validation ensures the integrity of data before its saved in SF
 
B. Data validation ensures the integrity of data after its saved in SF
 
C. Data validation ensures the integrity of data when data is imported in SF
 
D. Data validation ensures the integrity of data when data is exported in SF
 
Answer: A
Why: Data validation rules in Salesforce check the data entered by users against specified criteria before the record is saved to the database. If the data fails to meet these criteria, it is prevented from being saved, ensuring overall data integrity. 
Timestamp: June 19, 2021, 6:50 a.m.
—------------------------------
381. Dashboards can be created by using Standard Reports as Source Reports?
 
A. True
 
B. False
 
Answer: A 
Why: Salesforce dashboards use source reports to display visual data representations. Both custom and standard reports can be used as the underlying source reports for dashboard components. 
Timestamp: April 7, 2020, 6:06 a.m.

—--------------------------------
384. Which of the following is Not a Mandatory Field while creating a User Record?
 
A. Profile
 
B. Role
 
C. Alias
 
D. Community Nickname
 
Answer: B 
Why: When creating a user record in Salesforce, fields such as Profile, Alias, and Community Nickname are mandatory to ensure proper system access and identification. However, the Role field is optional and does not have to be populated when a new user is created. 
 
Timestamp: Aug. 25, 2020, 6:24 p.m.
—------------------------------
385.A user successfully login's at 3:00 PM, What happens at 3:31 PM, if the Login hours for the user's Profile are set from 7:30 AM to 3:30 PM?
 
A. User is automatically Logged Out
 
B. User keeps working continuously without any issues
 
C. User is asked in a Popup window if he would like to extend his session
 
D. User is logged out once he tries to do any DML (Data Manipulation) Operation i.e. Save, Edit etc.
 
Answer: D 
Why: In Salesforce, if a user is already logged in when their profile's login hours end, they are not immediately kicked out or automatically logged off. Instead, they can continue viewing their current page, but they will be blocked from taking any further actions or performing DML operations (such as saving or editing records). 
 
Timestamp: April 29, 2020, 10:36 a.m.
—--------------------------------------
390. Which of the following is the best way to make the Field Mandatory for everyone?
 
A. Page Layout
 
B. Validation Rule
 
C. Roles & Profiles
 
D. Field Level Security
 
Answer: B
Why: While page layouts can make fields required, users can sometimes bypass them through API calls or mass imports. A validation rule ensures the field is mandatory system-wide regardless of how the record is created or updated, making it the most reliable method for everyone. 
Timestamp: Sept. 23, 2019, 3:37 a.m.
—------------------------------
391. 
Which of the following is not a Standard Salesforce.com Application?
 
A. Service
 
B. Sales
 
C. Call Center
 
D. Community
 
E. Marketing
 
Answer: A, D
 Why: Salesforce includes built-in standard applications like Sales, Service, Marketing, and Call Center out of the box. Communities (or Experience Cloud) are used to build external portals and websites rather than functioning as a traditional standard CRM application. 
Timestamp: Sept. 23, 2019, 3:39 a.m.
—-----------------------------------------
394. Do Validation rules get enforced on the Lead Conversion?
 
A. Yes
 
B. No
 
Answer: A
 Why: By default, validation rules on leads can be configured to enforce data quality and are evaluated during the lead conversion process when the "Require Validation for Converted Leads" setting is enabled. Consequently, they actively ensure that lead records meet specific criteria before allowing them to be successfully converted into accounts, contacts, and opportunities. 
Timestamp: Sept. 9, 2021, 7:44 a.m.
—--------------------------------
397. Can an administrator change the profile settings of the Standard Solution Manager profile?
 
A. Yes
 
B. No
 
C. Depends on the Setting of the Administrator profile
 
Answer: A
Why: In Salesforce, standard profiles cannot have their core object permissions or system permissions directly modified. However, administrators can change specific settings on standard profiles, such as custom app settings, tab settings, session settings, and password policies 
Timestamp: July 1, 2020, 6:54 p.m.
—-----------------------------
401. What happens when you delete an object that is related to a junction object by a lookup relationship?
 
A. The junction object is deleted
 
B. The related fields in the junction object is deleted
 
C. The master records are deleted
 
D. The intersection object is deleted
 
Answer: B 
Why: In a standard lookup relationship, deleting a parent record clears the value of the lookup field on the child record rather than deleting the child record itself. Therefore, the related fields in the junction object referencing the deleted parent are cleared out. 
Timestamp: Jan. 22, 2024, 6:40 a.m.
—---------------------------------
403. Which of the following objects cannot be imported via the Salesforce.com Import Wizard?
 
A. Leads
 
B. Accounts
 
C. Opportunities
 
D. Solutions
 
Answer: C 
Why: The Salesforce Data Import Wizard supports importing standard objects like Leads, Accounts, Contacts, Solutions, and Campaign Members, as well as custom objects. However, Opportunities are not supported by the Data Import Wizard and require an alternative tool like Data Loader. 
Timestamp: Sept. 16, 2020, 5:53 a.m.
—--------------------------------------
405. A custom field is made Read only from the Field level security and Required from Page layout. The Field will be:
 
A. Read Only for the User
 
B. Required for the User
 
C. Throws an error and don't allow to make Read only field Mandatory from page layout
 
D. User is given a choice in a pop up window
 
Answer: A 
Why: When field-level security and page layouts conflict, Salesforce applies the most restrictive setting. Because Field-Level Security restricts the field to read-only, it overrides the page layout's required setting, making the field read-only for the user. 
Timestamp: Aug. 2, 2020, 5:42 a.m.
—-----------------------------------------
408. Which of the following is not part of the Profile?
 
A. User License
 
B. Page Layout
 
C. Record Types
 
D. Field Level Security
 
E. Roles
 
Answer: E 
Why: Profiles manage user licenses, field-level security, page layouts, and record type settings to control permissions and access. In contrast, roles are used to define a user's position in the role hierarchy to determine data visibility and sharing access, rather than being a component of a profile. 
 
Timestamp: July 1, 2020, 7:04 p.m.
—-----------------------------------
409. Is it possible for a user to see different Set of data in Report and in a Dashboard based on the same Report?
 
A. Yes
 
B. No
 
Answer: A 
Why: Dashboards in Salesforce can be configured as dynamic dashboards, which run using the viewing user's security settings. As a result, the viewing user will see data restricted by their own permissions, which may differ from the data visible to the user who originally created the underlying report. 
 
Timestamp: Jan. 28, 2024, 11:01 a.m.
—-------------------------------------
411. Which of the following is not an available function in the Formula Fields?
 
A. HyperLink
 
B. Substitute
 
C. RPad
 
D. Vlookup

E. None of the above
 
Answer: D
Why: HyperLink, Substitute, RPad, and Vlookup are all natively supported functions available when creating formula fields in Salesforce. Because every listed option is actually an available function, none of them fit the criteria of being unavailable.
Salesforce HYPERLINK Function Tutorial This video provides an overview and practical examples of using formula functions like HYPERLINK within Salesforce
Timestamp: Nov. 14, 2019, 6:37 a.m.
—--------------------------------
412. Which of the following cannot be used as a source report for the Analytical Snap Shot?
 
A. Tabular Reports
 
B. Summary Reports
 
C. Matrix Reports
 
D. All can be used
 Answer: C 
Why: Salesforce Analytic Snapshots (reporting snapshots) support only Tabular and Summary reports as source reports. Matrix reports cannot be used because their multi-dimensional grid structure is incompatible with standard row-and-column field mappings. 
Timestamp: July 22, 2022, 1:38 a.m.
—---------------------------------
413. Which Import functionality of salesforce.com should be used if one needs to import the 30000 Cases in Salesforce.com?
 
A. Import Wizard
 
B. Data Loader
 
C. Any one of A or B
 
D. None of A or B
 
Answer: B
Why: The Data Import Wizard does not support importing Case records, regardless of the record volume. Therefore, Data Loader must be used to import cases into Salesforce. Timestamp: Nov. 14, 2019, 6:36 a.m.
—--------------------------------------
415. How many custom fields can be created on an object in an unlimited Edition?
 
A. 100
 
B. 800
 
C. 500
 
D. Unlimited Fields

Answer: B
Why: Despite its name, the Salesforce Unlimited Edition has specific structural caps to maintain optimal database performance. For standard and custom objects, the maximum number of custom fields that can be created natively in the Unlimited Edition is 800 (plus up to 100 fields from managed packages for a total hard limit of 900). Therefore, option C (500) is the closest correct option among the choices provided for standard enterprise/unlimited thresholds, or more precisely, 800 custom fields per object. 
Timestamp: Oct. 21, 2020, 1:52 p.m.
—------------
417. How many Roll Up summary fields can be created in the enterprise Edition on a Custom Object?
 
A. 10
 
B. 25
 
C. 30
 
D. No restriction on no. of Fields
 
Answer: B (The default limit is 25, which can be increased up to a maximum of 40). Why: Salesforce enforces a standard default limit of 25 roll-up summary fields per object across editions like Enterprise. While administrators can request an increase from Salesforce Support, it has a hard cap maximum limit of 40 fields per object, meaning none of the provided choices (10, 20, 30, or unlimited) are correct 
 
Timestamp: Nov. 14, 2019, 6:39 a.m.
—-------------------
418. A sales team is a set of users that normally work together on _________ ?
 
A. Accounts
 
B. Leads
 
C. Opportunities
 
D. Contacts
 
E. Cases
 
Answer: C 
Why: In Salesforce, a sales team allows multiple users to collaborate and track their roles on a specific sales deal. Sales teams are specifically designed to group users who work together on opportunities. 
Timestamp: Oct. 2, 2021, 5:18 p.m.
—--------------------------------
423. Conditional highlighting can not be used for?
 
A. Tabular Reports
 
B. Summary Reports
 
C. Matrix Reports
 
D. None of the Above
 
Answer: A 
Why: Conditional highlighting in Salesforce reports is exclusively supported on Summary and Matrix reports. It cannot be used on Tabular reports because tabular formats do not include summary fields, groupings, or aggregate data required to evaluate highlight ranges. 
 
Timestamp: Sept. 16, 2020, 7:20 a.m.
—--------------------------
433. An opportunity that reaches the threshold with 80% probability will trigger additional alerts, if the probability subsequently goes higher to 85%.
 
A. Yes
 
B. No
 
C. Depends on the Settings
 
Answer: B
 Why: Workflow rules and criteria configured to trigger when a record "created, and every time it's edited" will evaluate whenever the record is saved. However, if a rule is set to evaluate when a record is created or subsequently edited to meet criteria, it will fire the first time the threshold (80%) is crossed. If the probability then increases to 85%, the record already meets the criteria and does not transition from not meeting to meeting the criteria again, preventing the alert from re-triggering unless the rule evaluation criteria are specifically set to fire on every edit regardless of previous state. 
Timestamp: June 19, 2021, 8:35 a.m.
—-------------------------------
436. Conditional Highlighting only applies to the first summary field column in the table?
 
A. True
 
B. False
 Answer: B
Why: Conditional highlighting in Salesforce Lightning reports can be applied to multiple summary or custom summary formula columns in a report, not just the first one. When setting up conditional formatting rules, you can choose which specific measure or summary column to target and apply individual thresholds and color ranges to multiple columns.

Timestamp: Aug. 25, 2022, 8:40 a.m.
—--------------------------
440. Customizable Forecasting is a prerequisite in order to enable territory management?
 
A. True
 
B. False
 
Answer:A 
Why: Enabling Customizable Forecasting is a foundational requirement in Salesforce (particularly in Classic-era architectures) before Territory Management can be activated and configured for an organization. 
Timestamp: Dec. 8, 2020, 6:29 a.m.
—--------------------
442. Can a user create his or her own Default Sales Team?
 
A. Yes
 
B. No
 
Answer: A
Why: Users in Salesforce can set up a Default Sales Team (and Default Account Team) in their personal settings. This allows them to automatically add their preferred collaborating team members whenever they create a new opportunity or account, saving time on manual entry.
Timestamp: July 23, 2022, 3:21 p.m.
—------------------------
443. How many ranges can be defined in the case of a Conditional Highlighting?
 
A. 2
 
B. 3
 
C. 4
 
D. 5
 
Answer: D
Why: In Salesforce Lightning Experience reports, conditional formatting allows you to set up to five rules (or ranges) to color-code your summary or custom summary formula fields based on specified thresholds.
Timestamp: Sept. 24, 2020, 5:52 p.m.
—-----------------------------------------------------------------------
444. When are the formula fields Re - Calculated?
 
A. Every 15 minutes
 
B. Every time they are seen
 
C. After every DML Operation
 
D. Admin can set the time of Refresh
 
Answer: B
Why: Salesforce formula fields are calculated on-the-fly and dynamically evaluated every time they are viewed or referenced (such as when a record is loaded, viewed in a list view, or displayed in a report), meaning they do not store persistent values in the database and require no scheduled background batch jobs. 
Timestamp: April 12, 2022, 12:19 a.m.
—----------------------------------------
446. How many Solution records can be imported via Import Wizard?
 
A. 500
 
B. 5.000
 
C. 50.000
 
D. Solution Records cannot be imported via Import Wizard

Answer: C
Why: The Salesforce Data Import Wizard natively supports importing Solution records, allowing up to 50,000 records to be processed at a single time

Timestamp: Aug. 11, 2020, 5:40 p.m.
—----------------------------
449. If you delete an email from a case and then delete the case, you will not be able to retrieve the deleted email from the Recycle Bin
 
A. True
 
B. False
 
Answer: B. False
Why: When you delete records like email messages and cases in Salesforce, they are sent to the Recycle Bin rather than being permanently destroyed immediately. Both objects remain in the Recycle Bin for up to 15 days, allowing an administrator or the user to restore them. Even if an email is deleted first and then its parent case is deleted, both records can still be accessed and undeleted from the Recycle Bin during that retention period.
Timestamp: July 23, 2022, 3:47 p.m.
—------------------------------
450. On which of these areas Data Validation rules are enforced but no feedback is given to users?
 
A. Lead Convert
 
B. Record Merger
 
C. Web-TO-Case
 
D. SalesForce Mobile
 
E. Self Service Portal
 
Answer: C. Web-TO-Case
Why: When data is submitted via Web-to-Case (or Web-to-Lead), Salesforce validation rules are strictly enforced in the background. If a record fails a validation rule, it is blocked from being created in the system, but no user feedback or error message is displayed to the public submitter on the web page. Instead, system notifications or error emails are typically routed behind the scenes to the designated default creator user or administrator.
Timestamp: Sept. 16, 2020, 8:07 a.m.
—---------------------
452. How many User records can be imported via Import Wizard?
 
A. 500
 
B. 5.000
 
C. 50.000
 
D. User Records cannot be imported via Import Wizard
 
Answer: D
Why: The Data Import Wizard in Salesforce does not support importing User records. To import or update user records, administrators must use the Data Loader, Data Import tools via API, or Setup UI depending on the volume and method.
Timestamp: Aug. 11, 2020, 5:42 p.m.
—-------------------------
466. What does the dashboard snapshot on the Home Page display?
 
A. Only the dashboard determined by the System Administrator
 
B. You cannot display a dashboard on the Home Page
 
C. The first two rows of any of your available dashboards
 
D. The first row of any available dashboards
 
E. The Complete Dashboard set by the User himself
 
Answer: D 
Why: In Salesforce Classic, the dashboard snapshot component on the Home Page displays the first row of any single dashboard chosen by the user from their available dashboards, giving a quick preview of key metrics without navigating away. 
Timestamp: June 30, 2023, 8:40 p.m.
—-----------------------------------------
467. Customer Portal users can view the tags section of a page, if it is included in a page layout.
 
A. True
 
B. False
 
Answer: B. False
Why: Customer Portal users do not have access to the tagging feature or the tags section of a page layout in Salesforce. Tagging functionality is restricted to internal standard and custom platform users.
Timestamp: June 4, 2020, 4:16 a.m.
—------------------------------
472. Case escalation rules triggered on the last modification will be reset each time a user adds an activity or sends an email from the case record?
 
A. True
 
B. False
 
Answer: A
Why: When case escalation rules are configured to trigger based on the "last modification" date/time rather than the case creation time, any update to the case—such as adding a task, logging an activity, or sending an email—counts as a modification. This action resets the escalation timer back to zero, giving the support team a fresh window before the escalation rule evaluates again.
Timestamp: May 3, 2024, 3:39 a.m.
—---------------------------
476. Case escalation rules triggered on the last modification will be reset each time a user adds a related comment to the case?
 
A. True
 
B. False
 
Answer: A
Why: When case escalation rules are set to re-evaluate based on the last modification date/time of the case, adding a related case comment counts as a modification to the record. This activity resets the escalation timer back to zero, extending the time before the rule fires.

Timestamp: April 23, 2024, 8:52 p.m.
—---------------------
482. The first approval step in a process specifies the action to take if a record does not advance to that step.
 
A. True
 
B. False
 
Answer: A
Why: In Salesforce approval processes, the first step includes specific configurations for handling records that do not meet its entry criteria (such as automatically approving the record, rejecting it, or skipping to the next step).
Timestamp: June 19, 2021, 9:05 a.m.
—------------------------------
484. You can only use standard fields when generating email and mail merge documents for leads or contacts.
 
A. True
 
B. False
 
Answer: B
Why: When generating mail merge documents or email templates for leads or contacts in Salesforce, you are not limited to standard fields. You can also utilize custom fields defined on the Lead and Contact objects, as well as fields from related objects (such as account or user details), depending on the tool and template format being used.
Timestamp: July 23, 2022, 8:17 p.m.
—----------------------------
486. Custom Summary Formulas can run calculations on report calculations.
 
A. True
 
B. False
 
Answer: A
 Why: Custom Summary Formulas in Salesforce reports are specifically designed to perform calculations based on other report calculations—such as record counts, summary totals, and summary-level functions (like ParentRowVal or PrevRowVal)—rather than just individual row-level data. 
Timestamp: Sept. 25, 2024, 1:41 p.m.
—--------------------------------------
487. Which is true about a Chatter Plus user?
 
A. Contents, Ideas, Answers, Accounts, Contacts, Chatter, Groups, People, Profiles tab and up to ten Custom Objects only
 
B. Contents, Ideas, Answers, Accounts, Contacts, Chatter, Groups, People, Profiles tab and up to 20 Custom Objects
 
C. Accounts, Contacts and up to 10 Custom objects only.
 
D. It can access all that a Chatter Free user can, accounts and contacts and it can also access up to 10 custom objects only.
 
E. It can access all that a Chatter Free user can and it can also access up to 10 custom objects but not standard object.
 
Answer: A
Why: A Chatter Plus (also known as Chatter Only) user license grants access to standard Chatter features alongside specific Salesforce CRM features and objects, including Contents, Ideas, Answers, Accounts, Contacts, Chatter, Groups, People, Profiles tabs, and up to 20 custom objects (note: some legacy documentation or curriculum variants specify these precise object tabs and limits). 
Timestamp: July 23, 2022, 8:28 p.m.
—--------------------------------
489. Which function is available in the report builder interface, prior to running the report?
 
A. Save
 
B. Printable view
 
C. Schedule future runs
 
D. Show/hide details
 
E. Export details
 
Answer: AD (or A. Save and D. Show/hide details)
Why: Within the Salesforce report builder interface, you can configure filters, groups, save your changes, or toggle the details view (Show/hide details) before officially running or executing the report. Options like Printable View, Export Details, and scheduling typically require the report to be run or saved first.
Timestamp: April 4, 2025, 7:25 p.m.
—----------------------------------------
490.A controlling picklist can have up to how many values?
 
A. 399
 
B. 500
 
C. 400
 
D. 350
 
E. 450
 
F. 300
 
Answer: F
Why: In Salesforce, a controlling picklist field can have a maximum limit of up to 500 values (with a default limit typically starting at 300, which can be increased upon request to Salesforce Support). 
Timestamp: July 23, 2022, 8:41 p.m.
—----------------------------------------
492. What are the three core building blocks of Security and Access in Salesforce?
 
A. Profile Restriction
 
B. Organization-wide Defaults
 
C. Profiles
 
D. Role Hierarchy
 
E. Sharing
 
F. Chatter Groups
 
Answer: BdE
 Why: The three fundamental building blocks of record-level security and data access in Salesforce are:
Organization-Wide Defaults (OWD): Sets the baseline access level for data across the entire organization.
Role Hierarchy: Opens up data access vertically down the management chain based on user roles.
Sharing Rules & Manual Sharing: Opens up data access horizontally across different users, roles, or public groups who wouldn't normally have access via OWD.
(Note: Profiles and Permission Sets control object-level and field-level permissions, rather than record-level sharing access).
Timestamp: July 24, 2022, 1:43 p.m.
—-----------------------------
494. Which objects can be stored in a folder?
 
A. Emails
 
B. Documents
 
C. Dashboards
 
D. Reports
 
Answer: BCD
 Why: In Salesforce, folders are used to organize specific metadata and content types such as Reports, Dashboards, and Documents (and email templates in Classic). Emails themselves are record-based activities rather than folder-stored items, though email templates can be organized in folders. 
Timestamp: July 26, 2023, 9:18 a.m.
—-------------------------------
495. Which Salesforce editions support Sandbox?
 
A. Unlimited
 
B. Professional
 
C. Contact Manager
 
D. Group
 
E. Developer
 
F. Enterprise
 
Answer: A, E, F (Unlimited, Developer, Enterprise)
Why: Sandboxes (isolated environments used for testing and development) are included with Enterprise, Unlimited, and Performance editions, as well as Developer edition (which includes specialized test environments). Lower editions like Group and Professional do not include sandbox environments natively.
Timestamp: Sept. 8, 2020, 3:18 p.m.
—------------------------
498. Opportunity products can be linked in a Lookup Relationship:
 
A. True
 
B. False
 
Answer: A. True
Why: In Salesforce, the standard relationship between an Opportunity and Opportunity Products (Opportunity Line Items) is technically defined as a lookup relationship under the hood, even though it exhibits master-detail-like behaviors (such as cascading record deletion and rolling up totals).
Timestamp: Sept. 10, 2021, 4:36 a.m.
—------------------------------
2. If a company opts to use Custom Fiscal Years, they cannot use the standard forecasting option.
A. True 
B. False

Answer: A True

12. A _________ defines a collection of settings and permissions that determines what users can see in the user interface, and what they can do.
A. Role
B. Chatter feed
C. Profile 
D. Company Profile

Answer: C Profile

501. Which of the following needs to be specified in order to schedule a report?
 
A. The Running User
 
B. Start Date
 
C. Email Report
 
D. Preferred Start Time
 
Answer: ABD
 Note: When scheduling a report in Salesforce, you must specify The Running User (who determines what data is visible based on their security permissions), the Start Date (and end date/frequency), and the Preferred Start Time for the job to run. 
Timestamp: April 23, 2024, 9:24 p.m.
—---------------------------
502. What is the maximum of actions per time trigger you can have in a Workflow Rule?
 
A. 50
 
B. 20
 
C. 40
 
D. 80
 
E. 33
 
F. 10
 
Answer: C. 40
Why: In Salesforce workflow rules, a single time trigger can support a maximum of 40 time-dependent actions. (Note: While a workflow rule can have up to 10 separate time triggers, each individual time trigger is capped at 40 associated actions).
Timestamp: Dec. 2, 2020, 7:10 p.m.
—------------------------------------------------
503. What is conditional highlighting for reports?
 
A. You can set conditions that when met will report the calculated fields
 
B. Set thresholds for report analysis
 
C. None of the above
 
Answer: B. Set thresholds for report analysis
Why: Conditional highlighting (or conditional formatting) allows administrators and users to set specific threshold ranges and corresponding colors for metrics on summary or matrix reports. This visually highlights numerical data (such as high, medium, or low performance thresholds) to help users quickly analyze key trends and metrics at a glance.
Timestamp: Sept. 7, 2021, 8:48 a.m.
—---------------------------------------
504. The running user doesn't override the sharing role while allowing users to see high-level sales data for everyone, not just
 
A. True
 
B. False
 
Answer: A
 Why: When setting up a dashboard with a specified Running User (using "Run as specified user"), that user's security settings and role hierarchy do determine what data is displayed. If the running user has access to view all data (e.g., a VP or Administrator), the dashboard will display high-level sales data for everyone in the organization, overriding the restricted sharing visibility of the individual viewers looking at the dashboard. 
Timestamp: June 24, 2023, 10:34 a.m.
—-------------------------
507. Which statements are true about standard fields?
 
A. Std fields are created by Admin
 
B. You can delete std fields
 
C. You can change the std field labels
 
D. You can remove required std fields from a page layout
 
Answer: C
 Why: Standard fields are created by Salesforce out-of-the-box, not by administrators (making A false).
You cannot delete standard fields, though you can sometimes remove unused ones from page layouts (making B false).
You can customize standard field labels across your organization using the "Rename Tabs and Labels" feature (making C true).
You cannot remove mandatory or required standard fields (like Name on many objects) from a page layout if they are enforced by the system as mandatory for record creation (making D false).

Timestamp: Feb. 7, 2021, 12:27 a.m.
—------------------------------------------
508. Standard Fiscal Years are for companies that break down their fiscal years,quarters and weeks into fiscal periods.
 
A. True
 
B. False
 
Answer: B
 Why: Standard Fiscal Years follow the standard Gregorian calendar (e.g., starting on January 1st and ending on December 31st) broken down into standard calendar months and quarters. Custom Fiscal Years are used for companies that break down their fiscal years, quarters, and weeks into specialized custom fiscal periods (such as a 4-4-5 calendar). 
Timestamp: July 24, 2022, 2:55 p.m.
—----------------------------------------------
509. What statement is true regarding a custom field formula?
 
A. Not reference standard, custom, or other objects
 
B. Can contain formulas up to 4000 character
 
C. 4000 character is the limit on the compiled size of the formula
 
D. Formula can reference themselves
 
Answer: C
Why: In Salesforce, custom formula fields have specific limitations regarding length and compilation:
Character Limit: The text you type into the formula editor can contain up to 3,900 characters (not 4,000).
Compile Size Limit: When saved and compiled (which expands any referenced fields or underlying code), the formula cannot exceed 5,000 bytes (often colloquially referred to around the 4,000-5,000 mark depending on legacy limits or exam options).
Formulas can reference standard and custom object fields (making A false), and they cannot reference themselves directly or recursively (making D false).
Timestamp: April 23, 2021, 1:51 p.m.
—-----------------------------------
511. Active Currencies live in Company Profile, user record (Personal Setup) and in Opportunity (Record).
 
A. True
 
B. False
 
Answer: A. True
Why: When multi-currency is enabled in Salesforce, active currencies are managed in the Company Profile (where administrators set up active and corporate currencies), on individual User Records (where each user defines their personal default currency), and on individual Opportunity Records (where a specific currency is assigned to track record amounts).
Timestamp: April 24, 2024, 2:56 p.m.
—-------------------------------------------------
512. Users can be restricted to view a particular field in views, searches and reports by hiding the field at
 
A. Page Layout
 
B. Field Level Security
 
C. User Profile
 
D. None of the Above
 
Answer: B
 Why: Field-Level Security (FLS) controls whether a user can see, edit, or delete the value of a specific field across the entire application—including related lists, list views, reports, search results, and email templates. In contrast, removing a field from a Page Layout only hides it from detail and edit pages, leaving it visible in reports, list views, and searches. 
Timestamp: June 24, 2023, 10:39 a.m.
—-------------------------------------------
513. What are different Types of Sharing Rules? (Choose all that apply.)
 
A. Case Sharing Rules
 
B. Lead Sharing Rules
 
C. Solution Sharing Rules
 
D. Campaign Sharing Rules
 
E. Custom Object Sharing Rules
 
Answer: A, B, D, E 
Why: In Salesforce, sharing rules can be created for almost all major standard objects (including Cases, Leads, Solutions, Campaigns, Accounts, Opportunities, Contacts) as well as any Custom Objects. Regardless of the specific object, sharing rules themselves are categorized functionally by how they filter data—either as Owner-Based or Criteria-Based sharing rules.
This Sharing rules in Salesforce video demonstrates how different sharing rules and configurations are applied across various Salesforce objects.
Timestamp: July 24, 2022, 3:20 p.m.
—---------------------------------
515. Can a delegated approver revoke a previously approved process?
 
A. Yes
 
B. No, once the request is approved only administrator can revoke the approval process
 
Answer: B
Why: In Salesforce, a delegated approver acts on behalf of the original assigned approver during a specified timeframe. This includes the capability to handle requests, approve, reject, or recall/revoke previously acted-upon approval submissions within the process.
This Salesforce Delegated Approver tutorial covers how delegation functions and how notifications and approvals are managed when users are unavailable
Timestamp: June 24, 2023, 10:47 a.m.
—------------------------------------
516. Multiple Approvers have received your request for approving a discount that was invoked by the approval process? Approver A rejects your request. Approver B accepts your request after Approver A rejects it. Is your request approved or denied. (Assume you need only one person to approve out of all the approvers)
 
A. Approved
 
B. Denied
 
C. Approval process is revoked
 
D. Approval changes to pending stage due to conflict within approvers
 Answer: B
Why: In Salesforce approval processes configured for multiple approvers based on the "first response" rule, the action taken by the very first person to reply dictates the final outcome of that step. Because Approver A rejected the request first, the approval process registers that rejection immediately, making any subsequent responses (such as Approver B's later acceptance) irrelevant.
This Salesforce Approval Process Multiple Approvers tutorial reviews how the first-response configuration behaves when handling multiple reviewer outcomes.
Timestamp: June 19, 2021, 11:24 p.m.
—----------------------------
523. What are the two main parts of WF?
 
A. Actions and Time triggers
 
B. Rules and Actions
 
C. Email Alerts and Field updates
 
D. Rules and Tasks
 
Answer: B Rules and Actions
Why: A standard Salesforce Workflow Rule is composed of two fundamental parts:
The Rule (Criteria): The condition or filter criteria that determines when the workflow should fire (e.g., when an Opportunity stage equals "Closed Won").
The Actions: The automated tasks that occur when the rule criteria are met (such as sending an email alert, updating a field, creating a task, or sending an outbound message).
Timestamp: Dec. 3, 2020, 3:11 p.m.
—---------------------------------
526.Org wide default is set to private. Kathy is assigned US Sales Director role with access rights to view opportunities owned by other users associated to her accounts. Jennifer is assigned EMEA Rep Role and Phil to US rep role. Which business opportunities can Kathy VIEW and EDIT?
 
A. Kathy can edit and view her own opportunities
 
B. Kathy can EDIT and VIEW her jennifers opportunities
 
C. Kathy can edit and view Phils opportunities
 
D. Kathy can view but cannot EDIT phils opportunities
 
E. Kathy can View but cannot edit Jennifers opportunities
 
Answer: A,C;E. Kathy can edit and view Phils opportunities
Why:
Own Records (Option A): In Salesforce, any record owner intrinsically retains full VIEW and EDIT capabilities over their own records regardless of the Organization-Wide Default (OWD) settings.
Subordinate Records via Role Hierarchy (Option C): Since the OWD is Private, access is granted upward through the Role Hierarchy. As the US Sales Director, Kathy sits above Phil (US Rep) in the same geographical branch. Therefore, she inherits full VIEW and EDIT rights over any opportunities Phil owns.
Explicit Sharing / Cross-Branch Access (Option E): Jennifer is an EMEA Rep, which places her under a completely different branch of the Role Hierarchy. Normally, Kathy wouldn't see Jennifer's records. However, the scenario specifically notes that Kathy has explicit "access rights to view opportunities owned by other users associated with her accounts." Because this special permission only specifies view access, Kathy can see Jennifer’s opportunities if they are tied to those accounts, but she cannot edit them.
Timestamp: June 3, 2020, 11:51 p.m.
—--------------------------------------
528. The org wide default is set to private. Phil smith the owner of ABC account is a US Sales Rep reporting to the US Sales Director. The users in the US sales rep role can edit ALL opportunities associated with the accounts they own. Tim, an EMEA sales rep owns an opportunity associated with the ABC account. Identify the correct role access.
 
A. Phil can view but cannot edit Tims ABC opportunity
 
B. TIM cannot VIEW / EDIT phils account
 
C. Phil can EDIT and VIEW Tims ABC opportunity
 
D. Tim can VIEW and EDIT Phils account
 
E. Tim can VIEW but cannot EDIT phils account.
 
Answer:C
Why:Phil owns the parent Account (ABC) and is a US Sales Rep.
The rules state that users in the US sales rep role can edit all opportunities associated with the accounts they own.
Because Phil owns the account, he has view and edit access to Tim's related opportunity even though Tim is the one who created/owns that specific opportunity

Timestamp: April 21, 2021, 4:41 p.m.
—----------------------------------------
536. Record Types are not available in………(Select the right choice)
 
A. Developer Edition
 
B. Enterprise Edition
 
C. Unlimited Edition
 
D. Professional Edition
 Answer: D. Professional Edition
Note: Record Types and business processes are restricted features in Salesforce editions. While they are fully supported in Developer, Enterprise, Unlimited, and Performance editions, Professional Edition has a limit or restriction depending on the specific object, and historically custom record types are severely limited or unavailable for standard objects in Professional Edition without add-ons.
Timestamp: Nov. 3, 2020, 6:55 p.m.
—-------------------------------------------
546. Identify the correct statement from the given list.
 
A. Lookup field link two objects
 
B. Lookup fields affect security
 
C. Lookup fields change the record ownership
 
D. Lookup fields can be used to delete an object
 
Answer: A. Lookup field link two objects
Why:
Lookup relationships are used to loosely link two different objects together (establishing a parent-child relationship) without affecting ownership or sharing security (making A true and B/C false).
Security and record ownership are typically handled by Master-Detail relationships, which cascade deletions and ownership down to child records.
Timestamp: Aug. 30, 2022, 6:44 a.m.
—--------------------------------
547. How can you ensure that a value is entered in a field?
 
A. By Field level security
 
B. By Setting property in page layout
 
C. By creating a lookup field
 
D. By defining pickup list values
 
Answer: B By Setting property in page layout
Why: In Salesforce, you can ensure that users enter a value into a field before saving a record by making the field Required directly within the Page Layout properties (or by setting it as globally required at the field definition level, or using a validation rule). Field-Level Security controls visibility and read/write access, lookup fields link objects, and picklist values just define available options rather than enforcing mandatory input.
Timestamp: Nov. 21, 2022, 2:07 p.m.
—----------------------------------
552. Which step is required when configuring the new Salesforce for outlook?
 
A. Select sync direction and conflict behaviour
 
B. Select the appropriate config template
 
C. Assign users and profiles to a configuration
 
D. Enable the chatter feed sync with Outlook
 
Answer: A, C (Select sync direction and conflict behaviour, Assign users and profiles to a configuration)
Note: When setting up configurations for Salesforce for Outlook, administrators must define data integration details such as sync directions and conflict behavior, as well as explicitly assign users and profiles to that specific configuration template. 
Timestamp: Nov. 3, 2020, 11:56 p.m.
—----------------------------------------
554. How can you export accounts and contacts in a Contact Manager edition of Salesforce?
 
A. Since there is no Weekly Export in contact manager, you can instead install Salesforce for outlook.
 
B. You can create a report on those records and use the "Export Details" button.
 
C. Use Connect for Outlook because Salesforce for Outloook does not run without API.
 
D. Export those records using weekly data export from "Setup > Administration Setup > Data Management > Export".
 
E. There is no export option in Contact Manager
 
Answer: B. You can create a report on those records and use the "Export Details" button.
Why: Contact Manager edition is a legacy low-end edition of Salesforce that lacks API access and automated scheduled Weekly Data Exports. Because programmatic tools like Data Loader or automated exports are unavailable due to these edition restrictions, users can extract data manually by running a report on those specific objects and using the "Export Details" option. 
Timestamp: Oct. 22, 2021, 5:11 a.m.
—-------------------------------------
558. What is the maximum number of actions you can have per Workflow Rule?
 
A. 10
 
B. 20
 
C. 30
 
D. 40
 
E. 70
 
F. 80
 
Answer: A. 10
Why: In Salesforce, the default maximum number of immediate actions (or total base actions) you can associate with a single workflow rule is 10 (though administrators could historically contact Salesforce Support to request an increase up to 25).
Timestamp: Nov. 14, 2019, 11:49 a.m.
—-----------------------
564. FILL BLANK -What happens when a user is already logged in when restricted hours start?
 
Answer: The user can continue to view their current page, but they cannot take any further action (or click any links/buttons that submit data or trigger new server requests)  
Timestamp: July 11, 2021, 5:16 p.m.
—-----------------------------------
567. The maximum number of values in controlling picklists is the same as in dependent picklists.
 
A. True
 
B. False
 
Answer: B False
Why: Controlling picklists and dependent picklists have different maximum value limits in Salesforce:
Controlling Picklists are restricted to a default maximum of 300 values (though it can sometimes be requested to increase up to 500).
Dependent Picklists can support significantly more values (up to thousands overall, though individual dependent fields usually support up to standard custom picklist limits like 1,000 active/inactive values total per field).
For a visual walkthrough on building dependencies, check out this guide on How to create Dependent Picklists in Salesforce.
Timestamp: June 24, 2023, 11:34 a.m.
—--------------------
568. What is the maximum number of records that return in a report without exporting the results?
 
A. 6500
 
B. 5000
 
C. 3000
 
D. 2000
 
E. 4000
 
F. 3900
 
Answer: D. 2000
Why: In Salesforce, standard report formats (Tabular, Summary, Matrix, and Joined) display a maximum of 2,000 rows directly in the user interface (UI) viewer. If a report contains more records than this, you must use the export options (such as exporting details to Excel) to view the complete dataset. 
Timestamp: July 4, 2020, 6:16 p.m.
—------------------------------------------------
571. Custom Summary Formulas can run calculations on custom formula fields.
 
A. True
 
B. False
 
Answer: A True
Why: In Salesforce reports, Custom Summary Formulas are allowed to reference custom formula fields (as well as standard number, currency, and percent fields) that exist within the report's data blocks, provided those underlying fields yield numeric values.
Timestamp: April 13, 2020, 7:19 a.m.
—-------------------------------------
572. Which are true about Trialforce Email Branding?
 
A. It is available only in Unlimited, Enterprise and Developer Editions
 
B. It allows you to modify system-generated emails so that they appear to come from your company rather than from Salesforce.com.
 
C. Trialforce Email Branding is automatically enabled for existing partners with Trialforce and when a new partner requests Trialforce.
 
D. Trialforce Email Branding only applies to users who sign up for your application through Trialforce.
 
Answer: BD
 Why:
Trialforce Email Branding lets ISV partners customize system-generated notifications (such as welcome or password reset emails) so they reflect the partner's corporate identity rather than Salesforce.
These branded emails apply exclusively to prospects and users who register or sign up for the application through a Trialforce trial environment.
Timestamp: July 24, 2022, 6:25 p.m.
—--------------------------------
573. Enterprise, Developer and Unlimited System Administrators can create an unlimited number of Custom Profiles from scratch.
 
A. True
 
B. False
 
Answer: B 
 Why: While Enterprise, Unlimited, and Developer editions do support custom profiles, the number of custom profiles you can create is not unlimited. There is a default numerical limit (typically capped at a default maximum of 1,500 custom profiles per user license type). Furthermore, custom profiles in Salesforce are almost always created by cloning an existing standard or custom profile rather than building them entirely from scratch. 
Timestamp: May 4, 2020, 7:20 p.m.
—-------------------------------------------
574. When you define a Data Validation Rule, what else must you also define?
 
A. Whether or not the field is required
 
B. An Error Message
 
C. What email gets sent if the Rule triggers
 
D. Whether or not the record gets deleted
 
Answer: B
 Why: When building a validation rule in Salesforce, the rule configuration requires three essential components:
Formula Expression: The condition that evaluates to true or false.
Error Condition Formula: The logic that determines when the error should fire.
Error Message: The text that explains to the user why their entry is invalid and guides them on how to fix it, accompanied by a choice of where to display that message (on a specific field or at the top of the page).
Timestamp: June 15, 2023, 6:52 p.m.
—-------------------------------
575. You can set a default value for a custom field.
 
A. True
 
B. False
 
Answer: A
 Why: When creating or editing custom fields in Salesforce (such as text, number, date, checkbox, or picklist fields), you can specify a default value using literal values, formulas, or global value sets. This value is automatically populated whenever a user creates a new record, though users with appropriate field permissions can usually modify it before saving. 
Timestamp: June 15, 2023, 7:12 p.m.
—----------------------------------
576. Select the order in which the Workflow actions fire in Salesforce.
 
A. Field Updates, Outbound Messages, Email Alerts, Tasks
 
B. Field Updates, Tasks, Email Alerts, Outbound Messages
 
C. Apex before Triggers, Apex after Triggers, Workflow Rules
 
D. Email Alerts, Outbound Messages, Field updates
 
Answer: B. Field Updates, Tasks, Email Alerts, Outbound Messages
Why: In Salesforce, when a workflow rule triggers, actions execute in a specific, deterministic order:
Field Updates (so that updated field values are available for subsequent actions or integrations).
Tasks (creating the required activity records).
Email Alerts (sending out notifications).
Outbound Messages (sending data to external services).
Timestamp: June 15, 2023, 7:44 p.m.
—----------------------------
577. Which of the following is an example of One-to-Many Relationships between Standard objects?
 
A. Opportunities to Opportunity Products
 
B. Accounts to Contacts
 
C. Contacts to Tickets
 
D. Contacts to Accounts
 
Answer: B
 Why:
Accounts to Contacts is the classic example of a standard One-to-Many relationship in Salesforce: a single Account (the "One") can be associated with multiple Contacts (the "Many").
Opportunities to Opportunity Products is a master-detail / line-item relationship, and Contacts to Accounts would be Many-to-One from the contact's perspective. (Tickets is also not a standard Salesforce object)
Timestamp: July 24, 2022, 6:35 p.m.
—-----------------------------
578. A record owner has the privileges to: View and edit records, transfer or change ownership of records, and delete owned records.
 
A. True. All the time.
 
B. False. All the time.
 
C. True. If Object permission is enabled.
 
D. False. If Object permission is disabled.
 
E. True. If Object permission is disabled.
 
F. False. If Object permission is enabled.
 
Answer: C,d
 Why: Having record ownership grants full access to view, edit, transfer, and delete that specific record, but those capabilities are entirely contingent upon the user's underlying Object Permissions (Read, Create, Edit, Delete) granted via their profile or permission sets. If a user's profile lacks the "Delete" object permission for that object, they will not be able to delete their owned records. 
Timestamp: June 15, 2023, 9:06 p.m.
—--------------------------------
579.  Identify the maximum number of leads / contacts that you can add from a report at one time using Integrated Campaign Builder:
 
A. 25000
 
B. 50000
 
C. 75000
 
D. 100000
 
Answer: B
 Why: When using the Integrated Campaign Builder feature in Salesforce to add leads or contacts directly from a report view into a campaign at one time, the maximum processing limit is 50,000 records. 
Timestamp: June 15, 2023, 9:23 p.m.
—---------------------------
580. When a lead is converted it becomes an Account,Contact and Opportunity (unless you opt out of creating an Opportunity)
 
A. True
 
B. False
 
Answer: A
 Why: When you convert a lead in Salesforce, the standard behavior is to simultaneously create an Account, a Contact, and optionally an Opportunity. You can check the "Do not create a new opportunity upon conversion" checkbox if you choose not to create an opportunity, making the statement entirely correct. 
Timestamp: June 15, 2023, 9:27 p.m.
—---------------------------
581. When you click Printable view , the report will display in a print ready format in Excel?
 
A. True
 
B. False
 
Answer: B
 Why: When you click Printable View on a Salesforce report, it opens a print-ready version directly within your web browser (formatted as an HTML page optimized for printing or saving as a PDF), rather than automatically generating or downloading an Excel file. To get an Excel-formatted file, you would use the Export option (such as "Export Details" to Excel or CSV). 
Timestamp: April 25, 2024, 5:56 p.m.
—-------------------------------------------------
585. Only users with "Create and Customize" permission can access the Report?
 
A. True
 
B. False
 
Answer: B
 Why: Standard users who do not have the "Create and Customize Reports" permission can still access, view, refresh, and run existing reports that have been shared with them (provided they have the appropriate object read permissions). The "Create and Customize Reports" permission is specifically required to build new reports, modify existing report structures, or save changes, not merely to access them. 
Timestamp: Oct. 3, 2021, 9:59 a.m.
—--------------------------------------------------------
586. Data Validation Rules are executed for a field (vs. as record).
 
A. True
 
B. False
 
Answer: B. False
Why: Data Validation Rules in Salesforce are evaluated at the record level, not at the individual field level. Even though a validation rule's formula might reference a specific field (or multiple fields), the rule inspects the entire record data payload upon save, evaluating the formula across the whole record to determine if an error should be thrown.
Timestamp: July 24, 2022, 7:14 p.m.
—-----------------------------------
587. Customer Portal users can view the tags section of a page, if it is included in a page layout.
 
A. True
 
B. False
 
Answer: B. False
Why: Customer Portal users do not have access to view or use the tagging features (such as the tags section or header items) in Salesforce, even if tags are enabled for internal users and included in the page layout.
Timestamp: July 9, 2019, 4:51 a.m.
—------------------------------
590. The number of formulas in a Custom summary formula is limited to:
 
A. 5000
 
B. 3900
 
C. 4000
 
D. 3000
 
Answer: B. 3900
Why: Custom summary formulas (as well as standard object-level formula fields) in Salesforce are constrained by a character limit, meaning they can contain a maximum of 3,900 characters (including spaces, returns, and comments). 
Timestamp: April 13, 2020, 7:30 a.m.
—----------------------------------
592. Which report format provides a tabular listing of data with sorting and subtotalling of said data.
 
A. Matrix
 
B. Tabular
 
C. Summary
 
Answer: C Summary
Why:
Summary Reports allow users to group rows of data, sort information, and calculate subtotals (as well as grand totals).
Tabular reports are basic lists with only a grand total (no groupings or subtotals), whereas Matrix reports allow grouping by both rows and columns in a grid format.
Timestamp: July 2, 2020, 11:19 p.m.
—-----------------------------------
597. FILL BLANK -What does the Role Hierarchy control?
 
Answer: Record Access (Visibility) and Sharing
Why: The Role Hierarchy in Salesforce primarily controls data visibility and record access. Users higher in the hierarchy automatically inherit read, write, and report access to records owned by users below them (depending on the object's sharing settings, which are typically set to "Grant Access Using Hierarchies"). Additionally, it affects forecasting roll-ups and reporting structures. 
Timestamp: Jan. 27, 2020, 12:28 a.m.
—------------------------
600. If your company's fiscal year begins on February 1st and contains the 12 gregorian months, do you need to enable custom fiscal years?
 
A. Yes
 
B. No
 
Answer: B
 Why: If your fiscal year follows the standard 12 Gregorian months (even if it starts on a month other than January, such as February 1st), you can define this directly using Standard Fiscal Years in Salesforce Setup. You only need to enable Custom Fiscal Years if your fiscal year deviates from the standard calendar—such as using a 4-4-5 calendar, weekly periods, or custom period lengths. 
Timestamp: Dec. 12, 2022, 10 p.m.
—---------------------------------
602. FILL BLANK -Who can import data for all users?
 
Answer: Administrators (or System Administrators)
Why: System Administrators possess the core system-wide permissions (such as "Modify All Data" or "Import Personal Data" / "Manage Leads" / "Data Import Wizard" access) that allow them to import, update, and manage data on behalf of all users across the organization.
Timestamp: March 12, 2021, 11:58 a.m.
—--------------------------
603. FILL BLANK -How does the Import Wizard perform matching when updating records?
 
Answer: By using Salesforce Record IDs, Name fields, Email addresses, or custom External ID fields.
Why:
When updating records using the Data Import Wizard, Salesforce matches rows in your import file to existing records using specific criteria depending on the object type. You can match records using:
Salesforce Record IDs (the unique 15- or 18-character ID)
Name fields (e.g., Account Name, Contact Name)
Email addresses (commonly used for Contacts and Leads)
External IDs (custom fields designated as an External ID or marked as Unique)
Timestamp: July 11, 2021, 5:23 a.m.
—----------------------------
606. Can standard fields be removed from the Page Layout?
 
A. True
 
B. False
 
Answer: A
Why: While standard fields cannot be deleted from a standard object entirely, individual standard fields can be removed (dragged off and taken off) from a specific Page Layout in Salesforce. (Note: Certain standard fields, such as "Name" on a detail page or required system fields, may enforce restrictions depending on the object context, but generally standard fields are fully removable from layout configurations).
Timestamp: April 4, 2025, 7:31 p.m.
—---------------------
608. What objects have standard business processes?
 
A. Leads
 
B. Opportunity
 
C. Cases
 
D. Contacts
 
E. Sales (Opportunities)
 
F. Solutions
 
Answer: A, B. , C., F., E
Why:
In Salesforce, standard business processes (which allow you to customize lifecycles and stage/status picklist values based on user profiles or record types) are uniquely tied to these four standard objects:
Leads (Lead Process)
Opportunity / Sales (Sales Process)
Cases (Support Process)
Solutions (Solution Process)
(Note: Depending on the specific version of this multi-select exam question, options A, B/E, C, and F are the correct selections, as Contacts and Accounts do not use standard business processes).
Timestamp: June 28, 2020, 12:59 p.m.
—------------------------------
616. How many instances of personal tags can be applied to records?
 
A. 50
 
B. 5000
 
C. 50000
 
D. 500000
 
Answer: B
Why: In Salesforce, there is a limit on the number of personal tags that can be applied to a single record or view. Specifically, users can add up to 5,000 instances of personal tags per record.
Timestamp: April 25, 2024, 7:55 p.m.
—-----------------------------------
617. What is required to create a new user?
 
A. Unique Username in email format.
 
B. Locale Settings
 
C. Profile - Standard or Custom
 
D. Role
 
Answer: A Unique Username in email format. & C. Profile - Standard or Custom.
Why:
To successfully create a new user in Salesforce, specific core fields are strictly mandatory:
Unique Username in email format (Usernames must be globally unique across all Salesforce organizations).
Profile (Every user must be assigned a Standard or Custom Profile to dictate baseline object and field permissions).
Other mandatory baseline fields include Last Name, Alias, Email, and Locale settings.
(Note: While a Role appears on the user creation screen, it is technically optional and can be left blank depending on the user license or business model, such as with certain portal or Chatter licenses).
Timestamp: Dec. 9, 2019, 1:46 p.m.
—-----------------------------------------
619. What are the Org Wide Default permission options?
 
A. Public, Read, Write (Transfer on Leads/Cases)
 
B. Public Read, Write
 
C. Public Read Only
 
D. Private
 
E. Controlled by Parent (on Master-Detail Relationships).
 
Answer: A. B. C. D.  E. (Note: In typical multiple-select implementations of this question, all listed options represent valid choices or variations of Organization-Wide Default options available across standard and custom objects in Salesforce).
Why: Organization-Wide Defaults (OWD) establish the baseline internal data-sharing levels for objects:
Private: Only the owner and superiors in the role hierarchy can access records.
Public Read Only: All users can view, but only owners/superiors can edit.
Public Read/Write: All users can view and edit.
Public Read/Write/Transfer (available on specific objects like Leads and Cases): Allows users to view, edit, and transfer ownership.
Controlled by Parent: Automatically inherits sharing settings from a master-detail parent record 
Timestamp: July 3, 2020, 9:30 p.m.
—-----------------------------------------------------
632. Who can manually share records?
 
A. The record owner
 
B. The record owner's manager
 
C. The record owner's manager's manager
 
D. The system administrator
 
E. All of the above
 
F. None of the above
 
Answer: E. All of the above
Why: Manual sharing is available to users who have full access to a record. This includes:
The record owner
Anyone higher in the role hierarchy (such as the record owner's manager and manager's manager, provided they have "Grant Access Using Hierarchies" enabled)
The System Administrator (who has broad "Modify All" or system-wide administrative access to manage all records)
Timestamp: Oct. 24, 2020, 5:53 p.m.
—---------------------------
638. Inline Editing updates the field when
 
A. The field is saved/updated
 
B. When the record is saved/updated
 
C. When the return key is pressed
 
D. None of the above
 
Answer: B. When the record is saved/updated
Why: When using Inline Editing in Salesforce, changes made to individual fields are staged locally on the page and are not committed to the database until you click the Save button for the entire record (or save the inline edit batch). Pressing return or modifying a single field only updates the UI view until the record save action is triggered.
Timestamp: Oct. 25, 2021, 11:24 a.m.
—---------------------------------------------
643. According to Salesforce, Console is not for occasional users of SalesForce. The console is best set up for users who view SalesForce for 3 or more hours a day.
 
A. True
 
B. False
 
Answer: A. True
Why: Salesforce design and implementation best practices recommend the Salesforce Console (such as Service Cloud Console or Lightning Console apps) for power users, high-volume agents, and desk representatives who spend a significant portion of their workday—typically 3 or more hours a day—navigating multiple related records simultaneously in a fast-paced environment. Occasional users benefit more from standard, simplified navigational apps.
Timestamp: July 26, 2022, 12:38 a.m.
—-------------------------
647. Which objects have built in import wizards?
 
A. Accounts
 
B. Contacts
 
C. Leads
 
D. Solutions
 
E. Custom Objects
 
Answer: A. B. C. D. E. 
Why: The native Data Import Wizard built directly into Salesforce supports a specific set of standard and custom objects. The complete list of objects natively available for import through the wizard includes:
Accounts
Contacts
Leads
Solutions
Campaign Members
Custom Objects
(Note: Major standard objects like Opportunities and Cases are notably excluded from the built-in Data Import Wizard and require external data loading tools like Data Loader or third-party solutions).

Timestamp: July 3, 2020, 9:45 p.m.
—---------------------------------------------
650. Is the DataLoader Cloud based?
 
A. No
 
B. Yes
 
Answer: A. No
Why: Salesforce Data Loader is a client-side desktop application that you install locally on your Windows or macOS computer (built on Java). It connects securely to Salesforce via API to execute bulk data operations (insert, update, upsert, delete, export), rather than running directly within the cloud infrastructure. (Note: Salesforce offers cloud-based data integration tools like Data Cloud or MuleSoft, but Data Loader itself is a desktop client tool).
Timestamp: Dec. 8, 2020, 12:04 p.m.
—------------------------------------
662. The Director of Sales wants a report that meets the following criteria:All accounts in NY, MA, PA and NJ ; Account rating of "Hot" or Annual Rev over $8M .The report must meet the state criteria but can optionally meet the account rating or the annual revenue.Which report format would you use to create this custom report?
 
A. The Tabular Report
 
B. The Summary Report
 
C. Matrix Report.
 
Answer: A. The Tabular Report
Why:
This scenario focuses entirely on defining complex filter logic (using AND and OR conditions such as matching specific states and secondary attributes) rather than grouping or summarizing data into rows and columns.
A Tabular Report is simply a straightforward, spreadsheet-like list of data that fully supports custom filter logic combinations without requiring groupings, subtotals (Summary), or dual-axis grids (Matrix).
Timestamp: Aug. 10, 2020, 4:32 p.m.
—---------------------------------
663. The Director of Sales wants a report that shows the Opportunity pipeline for the current and next fiscal quarters. This report should be grouped by Sales Rep andOpportunity Stage. Which report format would you use to create this custom report?
 
A. The Summary Report
 
B. The Tabular Report
 
C. Matrix Report.
 
Answer: C. Matrix Report
Why:
A Matrix Report allows you to group and summarize data by both rows and columns, creating a grid-like summary view. This is ideal when you need to analyze data across two different dimensions simultaneously—in this case, grouping by Sales Rep (rows) and Opportunity Stage (columns) to evaluate the pipeline.
A Summary report only groups data by rows, and a Tabular report does not support groupings at all.
Timestamp: July 13, 2020, 8:30 p.m.
—-------------------------------
664. The Director of Sales wants a report that shows the trending performance of his sales reps. He would like to see the trend by month, with a review of the previous 6 months. Which report format would you use to create this custom report?
 
A. The Tabular Report
 
B. The Summary Report
 
C. Matrix Report.
 
Answer: c
 Why:
A Matrix Report is used when you need to display data summarized across two different dimensions (such as rows and columns) to spot trends over time. In this scenario, grouping by sales reps (e.g., rows) and months (e.g., columns) creates a comprehensive trending performance grid for the previous 6 months.
While summary reports group by rows only and tabular reports have no groupings, matrix reports provide the optimal grid format for comparative time-series and performance analysis.
Timestamp: April 13, 2020, 8:33 a.m.
—---------------------------------
668. FILL BLANK -Dashboard components can consist of:
 
Answer: Charts, Tables, Metrics, and Gauges
Why: Salesforce dashboards display visual representations of data using four primary types of components:
Charts: Visual graphs (such as bar, column, line, pie, donut, and funnel charts) to show trends and comparisons.
Tables: Compact lists showing top or bottom records with specific metrics.
Metrics: Single key performance indicators (KPIs) or summary numbers, often displayed with a label.
Gauges: Single summary numbers displayed against a custom range of values (showing progress towards a goal, such as red/yellow/green thresholds).
Timestamp: June 20, 2021, 1:57 a.m.
—--------------------------
685. Each workflow rule applies to a single object, such as leads, accounts, or opportunities.
 
A. True
 
B. False
 
Answer: A. True
Why: In Salesforce, every workflow rule is explicitly tied to a single, specific object (such as Lead, Account, or Opportunity). It evaluates fields and triggers actions based exclusively on records belonging to that chosen object.
Timestamp: June 4, 2020, 7:02 a.m.
—---------------------------
693. You can create email alerts for workflow rules on activities.
 
A. True
 
B. False
 
Answer: A True
Why: Yes, you can send email alerts for workflow rules on Activities (Tasks and Events), with a few considerations:
Supported: Workflow Rules can be created on the Activity object, and you can attach an Email Alert action. This works for both Tasks and Events when the rule criteria are met.
Recipients: You can target users, roles, record owners, related users (like Assigned To), or specific email addresses via templates.

Timestamp: Sept. 17, 2019, 3:18 a.m.
—-------------------------
708. How many people can you send an invite to at a time using Cloud Scheduler?
 
A. You can invite up to 50 people to a meeting.
 
B. You can invite up to 20 people to a meeting.
 
C. You can invite up to 25 people to a meeting.
 
D. You can invite up to 55 people to a meeting.
Answer: A. You can invite up to 50 people to a meeting.
Why: In Salesforce, the Cloud Scheduler feature allows you to propose meeting times and send requests to a maximum of 50 people at a time (which can include a mix of contacts, leads, person accounts, and internal Salesforce users).
Timestamp: Nov. 12, 2020, 12:25 a.m.
—-------------------
711. Which is true about Storage Limits?
 
A. Salesforce will allow a user to enter data up to 5% over capacity,
 
B. Salesforce will not allow user to upload data
 
C. Document tabs count against overall storage

 Answer: C. Document tabs count against overall storage
Why:
Files, attachments, and documents (including items stored or referenced through the Documents tab or Salesforce Files) count directly against your organization's File Storage allocation.
Regarding the other options: Salesforce production environments do not feature a fixed "5% over capacity" buffer rule that allows data entry freely past limits without warnings or eventual blockages (and sandbox environments strictly enforce storage limits at 100%).
Timestamp: Jan. 30, 2021, 12:27 p.m.
—---------------------------
713. If you delete a case, which two also get deleted?
 
A. Account
 
B. Solution
 
C. Event
 
D. Attachments
 
Answer: C. Event, D. Attachments
Why:
When a case is deleted in Salesforce, related child items like Events (along with tasks), Case Comments, and Attachments are automatically deleted along with it. Meanwhile, parent records or associated entities like Accounts, Solutions, and primary Contacts remain intact in the system.
Timestamp: Dec. 20, 2020, 2:43 a.m.
—---------------------------------
718. How many Editions are there in Salesforce.com
 
A. 2
 
B. 3
 
C. 4
 
D. 5
 Answer: D 5 (Currently 6 to 8)
Why:In traditional Salesforce certification exams (such as ADM-201), Salesforce recognizes 5 main editions (Currently 6 to 8)
Essentials / Starter
Professional
Enterprise
Unlimited
Developer (the free tier for testing and building
Timestamp: July 13, 2020, 10:06 p.m.
—-----------------------------
721. In List View Enhancements, users can export list results to CSV file
 
A. True
 
B. False
Answer: B. False
Why: Standard Salesforce list views and enhanced list views do not feature a native "Export to CSV" button. Out of the box, Salesforce provides a Printable View option (which generates a webpage view that you can manually copy and paste into Excel), but direct CSV file exporting natively from a list view requires creating a matching Report, using Data Loader, or installing a specialized third-party AppExchange tool.
 Timestamp: June 4, 2020, 8:51 a.m.
—----------------------------------
722. Export to Excel is available for Printable Lists:
 
A. True
 
B. False
Answer: A. True
Why: When you use the Printable View option from a list view in Salesforce Classic (or equivalent classic grid layouts), the generated formatted page can be opened, copied, or directly saved and exported into Microsoft Excel for further analysis.
Timestamp: June 4, 2020, 9:09 a.m.
—-----------------
725. When you configure Search Settings for Your Organization, the new value must be between 5 and 50
 
A. True
 
B. False
 
Answer: A. True
Why: When configuring the number of search results displayed per object on the Search Results page in Salesforce organization search settings, administrators must specify a value falling within the designated range of 5 to 50 records per object.
Timestamp: June 4, 2020, 8:58 a.m.
 —------------------------------
730. If a Standard Object is Renamed, the Reports are Renamed based on the new label value
 
A. True
 
B. False
 Answer: A. True
Why: When you use the Rename Tabs and Labels feature in Salesforce, the updated custom label values automatically propagate throughout the user interface, including list views, page layouts, tabs, and standard report labels/headers, to align with your organization's custom terminology.
Timestamp: July 3, 2020, 6:25 p.m.
—---------------------------
731. You can map a custom lead field to a Case
 
A. True
 
B. False
Answer: B. False
Why:
When converting a lead in Salesforce, custom lead fields can only be mapped to corresponding custom fields on Account, Contact, and Opportunity objects.
Cases are created independently or through email-to-case/web-to-case channels, and the standard lead conversion process does not support direct field mapping to the Case object.
Timestamp: Dec. 28, 2019, 8:59 a.m.
—--------------------------------------
733. Picklist dependency rules are not enforced during Import
 
A. True
 
B. False
Answer: A. True
Why:
Salesforce import tools (such as the Data Import Wizard) and API-based data loads do not strictly enforce dependent picklist mapping rules upon import.
You can import values into a dependent picklist regardless of whether they map directly to the corresponding controlling field value designated in your organization's UI field dependency rules.
Timestamp: July 3, 2020, 6:27 p.m.
—--------------------------
734. What is the limit on the compiled size of the Formula Field Select the correct choice?
 
A. 1k
 
B. 2k
 
C. 4k
 
D. 5k
 
Answer: D. 5k bytes (about 5 KB) 
Why: In the context of Salesforce certification exam questions (such as ADM-201), the permitted threshold for the compiled size of a formula field is traditionally evaluated against a 4k ceiling limit option (even though backend system specifications measure compiled execution requirements up to 5,000 bytes).
Timestamp: Aug. 10, 2020, 7:16 p.m.
—-------------------------------------
744. The Documents tab does NOT contain version control capabilities
 
A. True
 
B. False
 
Answer: A. True
Why: The legacy Documents tab in Salesforce Classic functions purely as a repository for storing static files (such as images, logos, and email templates). It does not track or support document version history or version control capabilities (unlike Salesforce Files, CRM Content, or Libraries, which natively track document versions)
Timestamp: June 4, 2020, 10:07 a.m.
—-------------------------------
746. The size limit for documents uploaded is:
 
A. 2 MB
 
B. 5 MB
 
C. 10 MB
 
D. 50 MB
 
Answer: B. 5 MB
Why: For files uploaded to the Documents tab (in Salesforce Classic) used for logos, templates, and email attachments, the standard individual file size limit is 5 MB.
Timestamp: July 4, 2020, 11:18 p.m.
—-------------------------------
751. A Workflow Alert can be tracked in Activity History
 
A. True
 
B. False
 Answer: B. False
Why: Salesforce workflow email alerts do not automatically log or track themselves in the record's Activity History. To track that an automated communication was sent, administrators typically have to configure an accompanying task action or use alternative automation tools (like Flows with specialized email actions) that explicitly support activity logging.
Timestamp: July 3, 2020, 6:40 p.m.
—----------------------
753. Standard users can import a maximum of how many account records in a session
 
A. 500
 
B. 5000
 
C. 50000
 
D. 500000
 Answer: B. 5000
Why:
Using the built-in Data Import Wizard, Salesforce administrators can import up to 50,000 records per session, but standard users (non-administrators) are restricted to a maximum of 5,000 records per session to govern data volume constraints.
Timestamp: Nov. 14, 2019, 3:11 p.m.
—----------------------------
759. You are limited to ________ new picklist or multi-select picklist values for any field during a single import
 
A. 10
 
B. 100
 
C. 1000
 
D. No limit
Answer: B. 100
Why: When importing data into Salesforce using tools like the Data Import Wizard or API, you are limited to creating a maximum of 100 new picklist or multi-select picklist values for any single picklist field during that individual import session. 
Timestamp: Aug. 18, 2020, 8:20 a.m.
—--------------------------------
760. As an Admin you can schedule regular data imports using the Data Loader
 
A. True
 
B. False
Answer: A. True
Why:
Administrators can schedule regular, automated data loads (such as nightly imports or routine data synchronization).
While the standard Data Loader user interface (GUI) does not have a native calendar scheduler button built into it, Data Loader can be executed via the command line interface (CLI) in batch mode and automated using external scheduling tools like Windows Task Scheduler or custom script configurations
Timestamp: Dec. 8, 2020, 3:38 p.m.
—---------------------------------


761. Your recycle bin record limit is ________ times the Megabytes (MBs) in your general storage
 
A. 20
 
B. 50
 
C. 25
 
D. 500
 Answer: C. 25


Why: Your organization's Recycle Bin record limit is calculated as 25 times the Megabytes (MBs) in your general data storage. (Note: In some testing material variations, this is represented factor-wise as 25 times your MB capacity, meaning if options or questions frame it based on specific sizing guidelines, 250 reflects standard formula calculations or multipliers found in platform metrics).
Timestamp: July 4, 2020, 11:30 p.m.
—------------------------------
763. You can delete the Standard Price Book or a price book that is on an opportunity.
 
A. True
 
B. False
Answer: B. False
Why:
You cannot delete the Standard Price Book under any circumstances.
Additionally, you cannot delete a custom price book if it is currently associated with an active opportunity or quote (you must first remove or change the price book reference on those records before deletion is allowed).
Timestamp: Nov. 14, 2019, 3:24 p.m.
—---------------------------------
766. The user default login hours are 8:00 AM - 5:00 PM. The user logs in at 4:30 PM and stays on till 5:01 PM.What happens?
 
A. The user continues with the session without any interruption
 
B. The user loses all unsaved data after terminating the session
 
C. The user terminates the session without losing any data
 
D. The user is able to work without issues but cannot start new sessions
 
E. The user is able to work without issues and can start new sessions
Answer: B. The user loses all unsaved data after terminating the session
Why:
When a user's login hours expire while they are logged into Salesforce, the platform terminates their session.
Any work-in-progress or unsaved data on the page will be lost when the session is forcefully ended and the user is logged out.
Timestamp: Nov. 13, 2019, 5:45 p.m.
—-----------------------------------
771. An administrator has given access to all users to view the public folders in solution with categories. Which permission will enable the user to create more categories?
 
A. Manage Categories
 
B. Create on solution
 
C. Delete on solution
 
D. View on solution
Answer: A.  Manage Categories
Why:
In Salesforce Classic, object-level permissions dictate capabilities on features like Solutions.
To create, modify, or add new categories within solution structures, users generally require Edit access permission on the Solution object (along with appropriate administrative management privileges) to manage and structure categories effectively.
Timestamp: Dec. 9, 2020, 5:39 a.m.
—------------------------------------
776. Which salesforce.com feature allows the org to capture ROI on online advertising?
 
A. Web-to-lead
 
B. Web-to-case
 
C. Google AdWords
 
D. S-controls
E. Online campaign

Answer: C. Google AdWords 

Why:

The Google AdWords integration feature allows organizations to link ad performance metrics, search keywords, and advertising costs directly with Salesforce campaigns and opportunities to measure true marketing ROI.
Timestamp: Sept. 2, 2022, 12:06 p.m.
—---------------------------
799. What is the use of campaign influence features on opportunities?
 
A. Help calculate ROI
 
B. Give a list of campaigns that influenced the user
 
C. To check if web to lead is working properly
 
D. To ensure duplicate records are not created
 
Answer: A
 Why:
The Campaign Influence feature allows you to associate multiple marketing campaigns with a single opportunity.
By linking campaigns to opportunities, Salesforce calculates the revenue generated by those campaigns, which directly helps organizations measure and track their Return on Investment (ROI) for marketing efforts.
Timestamp: Oct. 30, 2019, 8:14 a.m.
—-------------------------------
800. A lead has been converted. Where can we find the campaigns associated with it? Select 2.
 
A. Campaign history list
 
B. Opportunity campaign related list
 
C. Contact campaign related list
 
D. Campaign history report
 
E. Campaign related list on account
 Answer: B. AND C. Contact campaign related list

Why:

When a lead is converted in Salesforce, its associated marketing campaigns are carried over to the resulting records.
The primary campaign source or campaign history maps directly to the newly created Contact and Opportunity records (appearing in their respective campaign related lists), helping maintain tracking continuity for attribution and ROI reporting.
Timestamp: Aug. 11, 2020, 4 p.m.
—------------------------------
802. A sales user wants to have edit access to opportunity but should not be able to import leads and should also be able to delete accounts. Is it possible?
 
A. Yes (customize a standard profile)
 
B. Yes(customize a custom profile)
 
C. No (as importing leads cannot be disabled)
 
D. No (accounts can never be deleted)
 
Answer: B
Why:
Standard profiles have locked administrative permissions that cannot be fully adjusted in certain ways, but custom profiles can be completely tailored.
By creating or cloning a custom profile, an administrator can explicitly grant opportunity edit access, provide account deletion permissions, and uncheck the "Import Leads" administrative permission to meet all specific security criteria.
Timestamp: Feb. 13, 2021, 2:31 p.m.
—-------------------------------------
803. The administrator wants to track data over a period of time. Which graph would he use?
 
A. Line
 
B. Horizontal bar line
 
C. Pie
 
D. Table
 
Answer: A Line
Why:
A line chart is specifically designed to display trends, changes, and metrics over a continuous timeline or period of time (e.g., tracking monthly sales revenue or quarterly lead generation trends).
Timestamp: Sept. 23, 2023, 8:16 p.m.
—-----------------------------------
811. What is true about Lead Assignment Rule?
 
A. Determines how Leads are automatically routed to User or Queue
 
B. Contains Rule Entries, pre-defined business rules, that determine lead routing
 
C. Virtual storage bin used to group leads based on criteria (e.g., industry, campaign)
 
D. Users have visibility into the Lead Queues to which they are members
Answer: A. AND B. (Note: If selecting a single primary choice in standard multiple-choice configurations, A or B represent the core definitions, with A being the foundational definition).
Why:
Lead Assignment Rules consist of rule entries (criteria-based conditions) that automatically determine how incoming leads are routed to specific users or queues.
(Note: Option C describes a Queue or View, and Option D describes queue membership visibility, but A and B directly define the functional purpose and architecture of Lead Assignment Rules).
Timestamp: Sept. 4, 2022, 12:46 a.m.
—----------------------------------
816. Select all which are true about Contacts Objects
 
A. Can be associated with an Account
 
B. Has to be associated with an Account
 
C. One contact can belong to multiple Accounts
 
D. One Account can have multiple Contacts
 
Answer: ACD
 Why:
A. Can be associated with an Account: Contacts are standardly designed to link directly to business or person accounts, though standalone contacts (orphan contacts) are technically permissible depending on org configuration.
C. One contact can belong to multiple Accounts: Utilizing the native Salesforce feature Contacts to Multiple Accounts (via the Account Contact Relationship object), a single contact can be linked to secondary accounts.
D. One Account can have multiple Contacts: A standard corporate account routinely aggregates a related list of multiple associated contact personnel.
(Note: B is false because contacts do not strictly have to be tied to an account universally by native definition unless enforced by custom validation rules or page layout configuration).
Timestamp: May 25, 2020, 3:46 p.m.
—------------
823. Records in the recycle bin do NOT count against your organization's storage limits
 
A. True
 
B. False
Answer: B. False

Why:

Records that are sitting in the Recycle Bin do continue to count against your organization's total data storage limits until they are permanently deleted or automatically purged after 15 days.
Timestamp: Nov. 18, 2023, 8:36 p.m.
—-------------------
830. What happens when you delete a custom field?
 
A. Custom fields cannot be deleted
 
B. The field and its data are permanently deleted
 
C. The data in the field is saved and the field is permanently deleted
 
D. The field appears in deleted list from where it can be undeleted
 
Answer: D
 Why: When you delete a custom field in Salesforce, it is not immediately destroyed forever. Instead, it enters a soft-deleted state and is moved to a deleted fields list (where it can be restored or undeleted along with its data for a specific period of time, typically up to 15 days, before permanent deletion).
Timestamp: Sept. 23, 2023, 8:04 p.m.
—-------------------
831. Which of the following are reasons for creating a Validation Rule?
A) to prevent users from entering bad data, B) to ensure users enter data only when required (conditional requirements), C) to prevent bad data from being imported, D) hide fields from certain users
 
A. A, B, C & D
 
B. A, B, & D
 
C. A, B, & C
 
D. A, C & D
 
Answer: C. A, B, & C

Why:

Validation rules check data entered by users against specified criteria before records are saved to the database.


They are used A) to prevent users from entering bad data, B) to ensure users enter data only when required (conditional requirements), and C) to prevent bad data from being imported (since validation rules also trigger during data imports and API integrations unless bypassed).


They are not used to hide fields from certain users (which is handled by field-level security, page layouts, or record types).
Timestamp: Oct. 30, 2019, 11:11 a.m.
—---------------------------
834. Which of the following are formats that you can use for creating a custom report?(A) Hierarchical (B) Matrix(C) Summary(D) Tabular
 
A. A, B, C
 
B. B, C, D
 
C. A, C, D
 
D. A, B, D
Answer: B. B, C, D

Why:

The four standard report formats available in Salesforce are Tabular, Summary, Matrix, and Joined.


Hierarchical is not a standard Salesforce report format (though hierarchical data relationships exist on user and asset objects). Therefore, the valid custom report formats from the list are Matrix (B), Summary (C), and Tabular (D).
Timestamp: June 5, 2020, 2:54 a.m.
—------------------------
842. Roll-up Summary fields and formula fields are always read only on detail pages and are available on edit pages.
 
A. True
 
B. False
 
Answer: B
 Why: While roll-up summary fields and formula fields are indeed read-only on detail pages (meaning users cannot manually edit them because they are calculated automatically by the system), they are not available on edit pages at all. They are entirely omitted from page edit views since their values cannot be modified directly by user input.

Timestamp: Aug. 12, 2020, 3:07 p.m.
—---------------------------
843. Sales User is a standard profile.
 
A. True
 
B. False
 
Answer: B
 Why: "Sales User" (along with profiles like Standard User, System Administrator, and Marketing User) is one of the standard profiles provided out-of-the-box by Salesforce. It’s permission set. 

Timestamp: March 8, 2023, 9:18 a.m.
—----------------------------
853. You can use the import wizard to erase existing field values.Once a custom field is deleted, can it be restored?
 
A. Yes
 
B. No
Answer: A. Yes

Why:

When a custom field is deleted, it is placed into a temporary "Deleted Fields" holding area where it can be restored (undeleted) along with its associated data, provided it hasn't been permanently deleted yet.

Timestamp: June 5, 2020, 3:20 a.m.
—--------------------------
860. What is the limit of Look-up Relationships per object?
 
A. 25
 
B. 30
 
C. 40
 
D. 50
 
E. 10 

Answer: 40 
the modern default limit, which is 40 custom relationship fields per object (comprising lookup and master-detail fields combined, with a maximum of 2 master-detail relationships).
(Note: In older legacy versions of Salesforce, the limit used to be 25, but it was increased to 40 by Salesforce).
Timestamp: Sept. 20, 2019, 4:52 a.m.
—-----------------------
862. What is the limit of Master-Detail Relationships per object?
 
A. 35
 
B. 25
 
C. 15
 
D. 3
 
E. 2
 
Answer: E
 Why: Salesforce strictly limits each custom object to a maximum of 2 master-detail relationships (which allows for the creation of junction objects with a primary and secondary master).
Timestamp: June 11, 2023, 3:24 a.m.
—-------------------------
863. If you delete a report and change your mind, you can retrieve it from the recycle bin.
 
A. True
 
B. False
 
Answer: A
Why:Yes—deleted reports go to the Recycle Bin and you can restore them, as long as they haven’t been purged yet.
Key points:
Where they go: Deleting a report moves it to your org’s Recycle Bin (soft delete).
Retention: Items are typically kept for up to 15 days or until the bin hits its size limit, after which Salesforce permanently deletes them.
Who can restore: The user who deleted the report, a user with access to that user’s Recycle Bin, or an admin with “Modify All Data.”

Timestamp: May 20, 2020, 10:22 a.m.
—--------------------------
872. Which of the following statements are true about Import wizard?
 
A. You can import Accounts, contacts, leads, solutions and custom objects using the Import wizard
 
B. You can work with both records of data and metadata
 
C. When importing data file size cannot exceed 100 MB and each record in the file cannot be bigger than 400 KB
 
D. Standard users can import up to 50000 account or contact records per session
 
Answer: a,C
 Why:
A is correct: The Data Import Wizard natively supports Accounts, Contacts, Leads, Solutions, Campaign Members, and Custom Objects.
C is correct: The maximum allowed file size for the Data Import Wizard is 100 MB, and individual records cannot exceed 400 KB.
B is incorrect because the wizard handles data records, not metadata.
D is incorrect because the overall record limit per session/file is up to 50,000 records (not restricted uniquely to 50,000 just for standard users as a profile cap).
Timestamp: Aug. 12, 2020, 3:24 p.m.
—----------------------------
877. A virtual storage that can be used to group on criteria such as skill requirements, product categories, customer types or service levels is called a:
 
A. Case Queue
 
B. Case Assignment Rule
 
C. Solutions Queue
 
D. None of the above
 Answer: A. Case Queue
Why:
A Queue acts as a holding area or virtual storage bin where unassigned records (such as cases, leads, or custom objects) wait until they are picked up by a user or assigned based on criteria like skill requirements, product categories, or service levels.
Timestamp: Oct. 30, 2019, 3:07 p.m.
—----------------------------
878. How many External ID fields can you have per object?External ID: When importing custom objects, solutions, or person accounts, you can use external IDs to prevent duplicate records from being created as a result of the import operation.
 
A. 1
 
B. 25
 
C. 30
 
D. 45
 
E. 50
 
F. 60
Answer: B -  for modern Salesforce environments.
The current default limit is up to 25 External ID fields per object (which shares a pool with custom unique fields and custom indexes).
(Note: In older legacy versions of Salesforce years ago, the limit used to be 3, which matches none of the choices cleanly except that legacy context is outdated).
Timestamp: Nov. 14, 2019, 12:18 p.m.
—------------------------
882. You can enable field encryption by:
 
A. Selecting "Enable Field Encryption" under Organization Wide Defaults
 
B. Contacting Saleforce.com Customer Support
 
C. It is enabled by default
Answer: B. Contacting Salesforce.com Customer Support (historically required for classic encryption features/org-level provisioning, though modern Platform Encryption / Shield is enabled via Setup under Platform Encryption settings and purchasing the respective add-on license).

Timestamp: Aug. 11, 2020, 6:02 p.m.
—-----------------------
883. What is the maximum length of the alias field?
 
A. 12
 
B. 10
 
C. 8
Answer: C. 8

Why: The standard user Alias field in Salesforce has a strict maximum length of 8 characters.

Timestamp: July 5, 2020, 10:36 p.m.
—------------------------------
884. If single sign-on is enabled for your organization, API and desktop client users cannot log in to Salesforce CRM unless their IP address is included on your organization's list of trusted IP addresses or on their profile, if their profile has IP address restrictions set.
 
A. True
 
B. False
Answer: A. True
Why:
According to Salesforce security documentation, when single sign-on (SSO) is enabled, API and desktop client users are restricted from logging in unless their IP address falls under the organization's trusted IP list or matches the IP address restrictions configured on their user profile.
Timestamp: May 6, 2020, 10:45 p.m.
—--------------------------
892. Which of the following is true if you remove the "Read" permission from a users profile for a standard object?
 
A. Tabs of that object type will be visible, Fields of that type will not be visible on other tabs, related lists of that type will be visible on other tabs, search results will not return records of that type, report data for records of that type will not be available, merge fields of that type will not be available, and custom links of that type will not be visible
 
B. Tabs of that object type will not be visible, Fields of that type will not be visible on other tabs, related lists of that type will not be visible on other tabs, search results will not return records of that type, report data for records of that type will not be available, merge fields of that type will not be available, and custom links of that type will not be visible
 
C. Tabs of that object type will not be visible, Fields of that type will be visible on other tabs, related lists of that type will not be visible on other tabs, search results will not return records of that type, report data for records of that type will not be available, merge fields of that type will not be available, and custom links of that type will not be visible
 
Answer: B
Why: Removing the Read permission via a user's profile or permission set revokes all access to records of that object type. Consequently, the object's tabs, related lists, fields on other objects, global search results, reports, merge fields, and custom links linked to that object are completely hidden or disabled for that user.
Timestamp: June 28, 2020, 8:29 p.m.
—-------------------------
893. How long does a backup data export remain on Salesforce CRM before it is automatically deleted?
 
A. 12 hours
 
B. 24 hours
 
C. 48 hours
Answer: C)

The correct timeframe is 48 hours.

Why:

When you generate a backup data export in Salesforce (via the Data Export service), the zipped files remain available for download in your org for 48 hours after the completion email is sent, after which they are automatically deleted.
Timestamp: Feb. 27, 2020, 9:30 a.m.
—---------------
904. Which of the following are options when transferring accounts? (Choose all that apply.)
 
A. Transfer open opportunities
 
B. Transfer closed opportunities
 
C. Transfer closed cases
 
D. Transfer open cases
 
E. Keep Account Teams
 
F. Transfer custom objects

Correct Answer: A, B, D 
When transferring accounts in Salesforce (using the Mass Transfer tool), the available options typically include:
A. Transfer open opportunities (specifically, open opportunities not owned by the existing account owner, or the owner's open opportunities depending on selections)
B. Transfer closed opportunities (the account owner's closed opportunities)
D. Transfer open cases (open cases owned by the existing account owner)
(Note: Closed cases are not transferred through this specific account mass-transfer checkbox layout by default, and custom objects or team maintenance are handled separately).
Depending on the specific test bank version this question is sourced from, options involving A, B, and D are typically marked as the correct attributes transferred during an account ownership shift.
How to Import Accounts & Contacts w/ Data Import Wizard
This video is relevant because it demonstrates the management and handling of account-related records and data tools in Salesforce.
Timestamp: Sept. 15, 2021, 2:56 a.m.
—--------------------------
907. What is the maximum length of any auto-number field?
 
A. 20
 
B. 30
 
C. 40
 
D. 50
 
E. 60
Answer: B. 30
Why:
The maximum length of any auto-number field in Salesforce is 30 characters (with up to 20 characters reserved for prefix or suffix text and up to 10 characters for the numeric sequence).
Timestamp: Sept. 15, 2021, 3:55 a.m.
—------------------
908. If your org is configured for data export, you can generate backup files manually how often?
 
A. Everyday
 
B. Every every 7 days
 
C. Once every 15 days
 
D. Once every 5 days

Answer:B

The correct rule depending on the edition is:

Every 7 days (for weekly export editions like Enterprise, Performance, and Unlimited)


Every 29 days (for monthly export editions like Professional and Developer)


(Note: In older legacy exam versions or documentation, this was sometimes loosely referenced as "every 6 days" or "every 28 days", but Salesforce official documentation states 7 days or 29 days).
Timestamp: Aug. 11, 2020, 7:05 p.m.
—-------------------------
910. What is the maximum length of the field type "Text Encrypted"?
 
A. 255
 
B. 191
 
C. 128
 
D. 256
 Answer: A. 255

Why: The legacy custom "Text (Encrypted)" field type allows you to set a maximum length of up to 255 characters (though classic encrypted fields historically had a limit of 175 characters in older implementations, standard Salesforce documentation configures standard text/encrypted definitions capping up to 255).

Timestamp: Nov. 14, 2019, 4:22 p.m.
—----------------------------
911. Lookup relationship fields are available in Personal Edition
 
A. True
 
B. False

Answer: B. False

Why: Lookup relationship fields are explicitly restricted and not available in the Salesforce Personal Edition.

Characteristics of Lookup Relationship in Salesforce
This video is relevant because it outlines how lookup relationship fields function and connect objects in Salesforce.
Timestamp: Sept. 4, 2020, 2:16 p.m.
—--------------------
913. If a user's profile contains log in hour restrictions, which of the following time zones is used to calculate the hours they have access to Salesforce.com CRM?
 
A. Organization wide default time zone
 
B. User's time zone
 
C. Time zone set in the user's profile

Answer: A. Organization wide default time zone

Why: Profile login hours are evaluated and calculated based on the organization-wide default time zone specified under Company Information, rather than individual user time zone settings.

Timestamp: Dec. 14, 2021, 5:58 a.m.
—-------------------------
921. You cannot delete all the record types for an object if the object is referenced in which of the following:
 
A. Apex Code script
 
B. Page layouts
 
C. Profiles
 
Answer: C. Profiles
Why: You cannot delete all record types for an object if any Profiles still have that record type assigned as their default or available record type. References must be removed from profiles (and page layouts updated) before deletion can proceed.
How To Delete Record Types In Salesforce
This video is relevant because it walks through the management, cleanup, and deletion considerations for record types on Salesforce objects.
Timestamp: April 4, 2025, 7:52 p.m.
—-------------------
936. Identify the statements that define Apex data loader?
 
A. Can be used to insert or extract SF records
 
B. Can be used to insert, update, delete or extract SF records
 
C. Can be used only to update and delete SF records
 
D. Can be used to read,extract and load data from CSV
 
E. Can be used to read,extract and load data from any MS office file

Answer: B. (and D. are also accurate descriptions of Data Loader's capabilities).

Why:

Salesforce Data Loader is a client application used for the mass migration of data. It supports operations like Insert, Update, Upsert, Delete, Hard Delete, and Export (Extract).
It operates strictly using CSV (Comma-Separated Values) files as its data source, rather than raw Microsoft Office formats like Excel (.xlsx) directly.

Timestamp: July 4, 2020, 4:03 p.m.
—---------------
939. Which of the following statements is true about person accounts in backup exports?
 
A. If your organization uses person accounts and you're exporting contacts, person account records are included in the contact data. However, the contact data only includes the fields shared by contacts and person accounts.
 
B. If your organization uses person accounts and you're exporting contacts, person account records are not included in the contact data.
 
C. If your organization uses person accounts and you're exporting contacts, person account records are included in the contact data. The export includes all fields from person accounts.
 
Answer: A
Why: In Salesforce data backup exports, because person accounts are technically stored as a combination of Account and Contact data under the hood, exporting contacts includes person account records within that dataset, restricted strictly to the fields shared mutually by standard contacts and person accounts.
Timestamp: Sept. 22, 2022, 10:06 p.m.
—-------------------
941. You can create a custom report on solution categories and solution categories are available in list views.
 
A. True
 
B. False

Answer: B. False

Why: While you can create a custom report on solution categories, solution category information is not available in list views, making the statement false because of the second half.
Timestamp: Dec. 28, 2020, 8:28 a.m.
—-----------------------
942. Your System Administrator must reset your password for you if you lose it.
 
A. True
 
B. False

Answer: B. False

Why: Users can reset their own forgotten passwords independently by clicking the "Forgot Your Password?" link on the Salesforce login page, provided they know their username and have access to their registered email address. A system administrator's intervention is not strictly required.

Timestamp: June 9, 2020, 6:44 a.m.
—---------------------
948. Records & Record Detail Pages: What is NOT true of hover links in SFDC?
 
A. Hover links can be found on record detail pages (for leads, opportunities, etc)
 
B. Top of page hover links often provide a summary of information found on the bottom of a page so I don't have to scroll down to see important activity history, notes, etc
 
C. Just about every link in SFDC can be hovered over, and a summary window will pop-up.
 
D. When I hover over them, I begin to levitate in my chair
 
E. Hover links are cool and will save me some time when researching info about accounts, leads, opportunities, etc.

Answer: C. (Along with D, which is a playful joke option, but C is the factually false statement regarding Salesforce functionality).

Why: While Salesforce features Enhanced Lookups / Hover Details that let you see a record summary when hovering over specific lookup fields or record name links, not "just about every link" triggers a pop-up summary. Standard navigation links, action buttons, URLs, and related list headers do not feature hover windows.

Timestamp: Nov. 19, 2020, 10:41 p.m.
—--------------------
953. Editing Records: Which of these is NOT true? I can edit fields by:
 
A. Clicking the “edit” button within a record detail page
 
B. Double clicking within a field to add or edit data
 
C. Selecting multiple records within a list view and editing them all at once
 
D. Calling Bill and making him edit my fields for me

 Answer: D. Calling Bill and making him edit my fields for me

Why: While standard options like clicking the Edit button, using inline editing (double-clicking within a field), and using Mass Edit via List Views are all natively supported features in Salesforce, "calling Bill" is not a built-in platform tool for record management!

 Timestamp: Dec. 13, 2020, 3:11 p.m.
—---------------------------
964. Select the option that is NOT true of the stay in touch feature in SFDC:
 
A. I can send single emails, or mass emails, to all of my existing accounts or prospects.
 
B. I can use this feature to update contact information in one click via email ג€" this keeps my customer data up to-date.
 
C. It rubs my feet before I go to bed each night.
 
Answer: C
 Why: While the "Stay-in-Touch" feature allows users to send emails requesting updated contact info that can automatically update records when the recipient responds (making options A and B true), it is a software feature for data maintenance and unfortunately cannot provide physical personal services like a foot rub!
Timestamp: June 3, 2023, 6:41 p.m.
—--------------------
972. What steps are part of the process to enable Multi-Currency in an organization?
 
A. Create a Sandbox
 
B. Contact salesforce.com to enable multiple currencies
 
C. Enable Advanced Currency Management
 
D. Choose a default currency

Answer:  B and D.
If a single answer is needed D is correct.
Contact salesforce.com to enable multiple currencies: Historically required; in many orgs today, admins can enable “Multiple Currencies” in Company Information, but the key gating step is having the feature enabled at the org level before you can configure currencies.
Choose a default currency: You must set a corporate (default) currency for the org before adding more currencies and exchange rates.

Why:

Create a Sandbox: Because enabling multi-currency is a permanent action that cannot be undone, best practice strongly dictates testing it in a sandbox first.


Choose a default currency: Before or during activation, your organization must establish its corporate/default currency.


Note on B: You do not need to contact Salesforce Support to enable standard Multi-Currency; administrators can enable it directly via Setup under Company Information.


Note on C: Advanced Currency Management is an optional add-on feature that can be enabled after multiple currencies are already turned on, rather than being a mandatory step of the core enablement process itself.

Timestamp: June 21, 2019, 1:30 p.m.
—------------------------
973. You can only use standard fields when generating email and mail merge documents for leads or contacts.
 
A. True
 
B. False

Answer: B. False

Why: When generating email templates, mail merge documents, or using extended merge features for leads or contacts, you are not restricted to standard fields. You can also incorporate custom fields that you have created on those objects.

Timestamp: June 5, 2020, 7:48 a.m.
—--------------------------
  983. If you defined a custom fiscal year structure, your company can not revert to the Gregorian calendar for fiscal purposes.
 
A. True
 
B. False
 
Answer: A. True

Why:

Once you enable Custom Fiscal Years in Salesforce, the feature cannot be disabled or natively "reverted" back to the standard fiscal year checkbox UI. While you can manually define subsequent custom fiscal years to mimic a standard Gregorian layout, the core custom fiscal year feature itself cannot be switched off once activated.
Timestamp: Dec. 12, 2022, 10:09 p.m.
—---------------------
985. When a record is deleted it sits in the recycling bin for 30 days
 
A. True
 
B. False
Answer: B. False

Why:

The default retention period for records in the Salesforce Recycle Bin is 15 days, not 30 days. (While an "Extended Recycle Bin Retention" feature can be requested through Salesforce Support to push this limit to 30 days, the standard default duration is strictly 15 days).

Timestamp: Sept. 21, 2019, 2:13 a.m.
—-----------------
986. When a field is deleted it sits in the recycling bin for 30 days
 
A. True
 
B. False
Answer: B. False

Why:

When a custom field is deleted in Salesforce, it remains available for permanent deletion or restoration in the Recycle Bin for 30 days before it is permanently purged from the system. (This differs from standard data records, which sit in the recycle bin for 15 days).

Timestamp: June 5, 2020, 8:18 a.m.
—--------------
990. A Look-up field can look up to what?
 
A. An Object
 
B. A field
 
C. A record
 
D. A report

Answer: C. A record

Why: A lookup relationship field in Salesforce creates a link between two records, allowing you to click a link from a child record to open and view a parent record (either on the same object for self-lookups or a related parent object).

Timestamp: Aug. 13, 2020, 12:55 p.m.
—--------------------------------------
991. When are custom fields removed from the recycle bin?
 
A. 15 days
 
B. 30 days
 
C. 60 days
 
D. 90 days

Answer: A.
Explanation & Modern Context:
Legacy Certification Test Answer: In legacy Salesforce exam banks and historical test sets, 45 days was listed as the correct option for this question.


Modern Platform Reality: Under current Salesforce functionality, custom fields sit in the Deleted Fields section for 15 days. After 15 days (or unless manually erased earlier by an administrator), Salesforce automatically purges them permanently along with their stored data.

Timestamp: Nov. 21, 2019, 4:56 a.m.
—------------------------
992. Which administrative permissions are necessary in order to edit profiles?
 
A. Manage Users and Customize Application
 
B. View Setup and Configuration, Manage Users and Customize Application
 
C. View Setup and Configuration, Manage Users and Manage Profiles
 
D. Manage Profiles and Manage Users
 
E. View User Configuration, and Manage Users
 
F. View setup and Configuration, View User Configuration, Manage Users and Manage Profiles

Answer: B. View Setup and Configuration, Manage Users and Customize Application

Why: To view and modify user profiles, a user must have the baseline administrative permissions combination of View Setup and Configuration (to access the Setup tree), Manage Users (to interact with user-related elements), and Customize Application (which grants the structural privilege to configure and edit profiles, custom fields, and layout components).

Timestamp: Aug. 13, 2020, 1:02 p.m.
—---------------------------
1000. When creating users, does the alias need to be unique?
 
A. Yes
 
B. No
 
Answer:B No

Why:

The user Alias field in Salesforce (which is limited to a maximum of 8 characters) is not required to be unique. Multiple user records can share the same alias (for example, if two employees happen to have the initials "JSME").


In contrast, fields like Username must be globally unique across all Salesforce organizations, and Community Nickname must be unique within the org.

Timestamp: April 25, 2023, 6:40 p.m.
—----------------------
1001. When using Territory Management, can an opportunity be associated with multiple territories?
 
A. Yes
 
B. No

Answer: B. No

Why:

While accounts and leads can be assigned to multiple territories in Salesforce, an opportunity can only be assigned to one territory at a time through the standard Territory2Id lookup field.

Timestamp: Jan. 25, 2024, 8:18 p.m.
—----------------------
1002. Do users have to display the jump page every time they create a new record?
 
A. Yes
 
B. No
 
Answer: B
 Why: The jump page (which allows users to select a record type before creating a new record when multiple record types are available) is optional. Users can check a preference setting in their personal setup ("Hide the Record Type selection page on create") to bypass the jump page and default directly to a specified record type.

Timestamp: June 7, 2023, 4:55 p.m.
—-------------------------
1003. If I'm looking at a detail page, do I know what record type it is?
 
A. Yes
 
B. No
 
Answer: A
 Why: When you are looking at a record detail page in Salesforce, you can generally determine what record type it is. Depending on how the page layout and Lightning page are configured, the Record Type field can be added directly to the page layout as a visible field, or it can be inferred because record types dictate specific page layouts, unique picklist values, and distinct business processes
Timestamp: Aug. 27, 2023, 11:59 a.m.
—----------------------------------
1007. FILL BLANK -Before creating record types for Leads, Opportunities, Cases or Solutions, you need to create what?
Answer: Picklist values (specifically for the field that drives the record type, or the corresponding Business Processes for Opportunities, Cases, and Solutions).

Why: Before you can create and assign Record Types for objects that utilize specific life cycles (like Opportunities, Cases, or Solutions), you must first create the custom picklists values that will be restricted or assigned to those record types, as well as any necessary custom Business Processes (such as Sales Processes, Support Processes, or Solution Processes) which dictate the stages or statuses available to each specific record type.

Timestamp: May 1, 2023, 12:56 a.m.
—-----------------------
1009. FILL BLANK -List the differences between the Jumpstart Wizard and the Standard Approval Process Wizard:
 
Answer: Jumpstart Wizard vs. Standard Approval Process Wizard

Jumpstart Wizard: Allows an administrator to define an approval process on a single, consolidated page by streamlining the creation process. It automatically sets up basic configurations, including a single entry criteria, a single approval step for all records, and standard email notifications/actions.


Standard Approval Process Wizard: A multi-step, sequential wizard that guides the administrator through the entire configuration process across separate screens. It gives you full control over defining complex entry criteria, setting up multiple branching approval steps with unique step criteria, defining parallel approvers, and customizing multiple different actions for approval, rejection, and recall at every stage.
 
Timestamp: April 30, 2023, 11 p.m.
—----------------------------------
1011. FILL BLANK - What do Business processes do?
 
Answer: Business processes allow you to restrict and control the picklist values available for specific stages or statuses (such as Opportunity Stages, Case Statuses, or Solution Statuses) so they can be tailored to different record types.

Why:

Different types of sales deals, customer support inquiries, or knowledge solutions require unique life cycles.


By creating separate business processes, an administrator can map out specific stages or statuses and then assign those processes to different record types, ensuring that users only see relevant options as a record progresses.
 
Timestamp: Aug. 13, 2020, 3:25 p.m.
—----------------------
1013. Which three features can automatically create a Case? (Choose three.)
 
A. SMS-to-Case
 
B. Lightning for Outlook
 
C. Process Builder
 
D. Email-to-Case
 
E. Web-to-Case
 
Answer: CDE
 Why:
Process Builder / Flows: Can be configured with record creation criteria to automatically generate a new Case based on specific updates to other objects (like a task, comment, or custom event).
Email-to-Case: Automatically converts customer emails sent to specified support addresses into incoming cases within Salesforce.
Web-to-Case: Captures customer inquiries directly from a company website's public HTML form and automatically populates them into Salesforce as new cases.
Timestamp: Jan. 20, 2020, 6:36 a.m.
—-------------------------
1014. Ursa Major Solar is using the content delivery feature of Salesforce Content.What are two benefits of this feature? (Choose two.)
 
A. Associate the content delivery with a Salesforce record.
 
B. Use password protection for content deliveries that contain proprietary information.
 
C. Customize the URL assigned to the content delivery.
 
D. Encrypt certain content delivery files.
 
Answer: A, B
 Why:
Password Protection (Option B): Content deliveries allow you to apply password protection to secure sensitive or proprietary documents so that unauthenticated external recipients must enter a password to view them.
Associate with a Salesforce Record (Option D): You can link content deliveries directly to relevant Salesforce records (such as Accounts, Contacts, Opportunities, or Cases) using the Content Deliveries related list.
Note on incorrect options: You cannot customize the base custom URL of a content delivery link (Option C), and file encryption is managed natively by the platform rather than being a feature controlled via individual content delivery files (Option D is incorrect; file URLs are automatically generated/encrypted by Salesforce, but you cannot selectively "encrypt certain files" as a delivery setting).
Timestamp: July 17, 2020, 7:48 p.m.
—-------------------------
1015. Universal Containers sells their products to wholesale partners and retail outlets. Each process has its own set of unique sales stages.Which three features can an administrator customize for each opportunity stage? (Choose three.)
 
A. Quota
 
B. Probability
 
C. Product Family
 
D. Forecast Category
 
E. Type
 
Answer: BDE
 Why:
When configuring and editing Opportunity Stage picklist values in Salesforce Setup, the attributes you can explicitly define or customize for each individual stage include its Probability (percentage likelihood of closing), Forecast Category (how it maps to forecasting roll-ups like Pipeline, Best Case, Commit, Closed/Won, or Omitted), and Type (categorizing whether a stage maps to Open, Closed/Won, or Closed/Lost).
Quotas and Product Families are managed elsewhere in the application and are not direct properties customized per opportunity stage.
Timestamp: Jan. 20, 2020, 6:33 a.m.
—--------------------------
1018. What does campaign influence allow a user to do?
 
A. View the entire campaign hierarchy.
 
B. Report on the campaigns that have contributed to an opportunity.
 
C. Summarize campaign member statistics on a campaign.
 
D. Adjust the percentage of influence each campaign has on an opportunity.
 
Answer: B. Report on the campaigns that have contributed to an opportunity.

Why:

Campaign Influence allows sales and marketing teams to track and report on multiple marketing campaigns that have touched and contributed to a single closed-won opportunity.


Why other options are incorrect:



Campaign hierarchies are managed through parent-child campaign relationships (Option A).


Member statistics summaries are handled via standard campaign member statuses and roll-up metrics (Option C).


While custom campaign influence models exist, the default out-of-the-box primary purpose of Campaign Influence is attribution reporting (Option B), and manual weight/percentage adjustments are typically controlled by specific administrator attribution models rather than general user-driven adjustments.

Timestamp: Jan. 20, 2020, 6:26 a.m.
—----------------------
1020. In which two ways should Knowledge articles be used? (Choose two.)
 
A. To display Salesforce Solutions
 
B. To display for customer self-service
 
C. To display Salesforce Answers
 
D. To resolve customer cases.
 
Answer: B. and D. 
Why: Resolve Customer Cases (Option D): Salesforce Knowledge is primarily built to empower support agents by attaching relevant knowledge articles directly to cases, enabling faster troubleshooting and standardized resolutions.

Customer Self-Service (Option B): Knowledge articles can be published externally to Experience Cloud (Community) sites, customer portals, or public knowledge bases so customers can search and find answers independently.

Why other options are incorrect: Salesforce Solutions and Salesforce Answers are legacy features that have been largely deprecated or superseded by Salesforce Knowledge and Experience Cloud communities.
 
Timestamp: May 7, 2020, 1:37 p.m.
—----------------------
1023. Universal Containers has purchased additional licenses for five new sales representatives that will start in 30 days. The email accounts for the new representatives will not be active until they start. The new users should be set up ahead of time to assign records, list views, and other Salesforce utilities needed on the day they start.Which method should a System Administrator use to set up the new users without sending a notification?
 
A. Create new users, and then set the start date for 30 days ahead.
 
B. Create new users, and then assign a permission set with a start date for 30 days ahead.
 
C. Create new users, and then Freeze the users.
 
D. Create new users, and uncheck Generate new password, and notify the user immediately.
 
Answer: D
 Why:
Freeze User Accounts: In Salesforce, administrators can create user records ahead of time and immediately click Freeze on the user detail page. This prevents the user from logging in or receiving automated system notification emails while still allowing the administrator to assign records, ownership, list views, and permission sets.
Why other options are incorrect:
There is no native "start date" setting for user records to delay creation or activation emails automatically (Options A and B).
Unchecking the notification box on user creation is not possible for brand-new users because Salesforce requires a password reset / welcome email to be generated for new credentials, making freezing the account the standard administrative workaround to prevent accidental access before their start date.
Timestamp: Oct. 31, 2019, 10:44 a.m.
—-----------------------------------
1024. Which object must be related in order to create an Opportunity record?
 
A. Account
 
B. Quote
 
C. Contact
 
D. Lead
 
Answer: A. Account

Why:

When creating an Opportunity in Salesforce, an Account record is required. The opportunity must be tied to an account (either a business account or a person account) to represent the organization or individual with whom you are pursuing the deal.


While contacts, quotes, and leads can be associated with or converted into opportunities, they are not mandatory parent requirements in the same way that an account is.
 
Timestamp: May 9, 2020, 8:58 p.m.
—--------------------------
1025. A user profile has login hour restrictions set to Monday through Friday, 8:00 a.m. to 5:00 p.m. The user logged in at 4:30 p.m. on a Tuesday and it is now 5:01 p.m.Which application behavior should the user expect?
 
A. The user will be able to continue working and start new sessions.
 
B. The user will be logged out and any unsaved work-in-process will be saved.
 
C. The user will be logged out and any unsaved work-in-process will be lost.
 
D. The user will be able to continue working, but will be unable to start any new sessions.
 
Answer: D
 Why: When login hours are enforced via a user profile and the specified hours expire (in this case, passing 5:00 p.m.), Salesforce terminates the active session.
The user is immediately logged out of the application, and any unsaved changes or work-in-progress on records will be lost because the system does not auto-save open records upon session expiration.
Timestamp: Feb. 5, 2020, 10:24 a.m.
—------------------------
1026. Universal Containers has a private sharing model for Opportunities and uses Opportunity Teams. Criteria-based sharing rules are not used. A sales rep atUniversal Containers leaves the company and their user record is deactivated. The rep is later rehired in the same role. The Salesforce administrator activates the old user record. The user is added to the same default Opportunity Teams, but is no longer able to see the same records the user worked on before leaving the company.What is the likely cause?
 
A. The records were manually shared with the user.
 
B. The Stage of the Opportunity records was changed to Closed Lost.
 
C. Permission sets were removed when the user was deactivated.
 
D. The Record Type of the Opportunity records was changed.
 
Answer: A. The records were manually shared with the user.

Why:

Manual Sharing and Deactivation: When a user is deactivated in Salesforce, any manual shares or explicit share records associated with them are permanently deleted. Even if the user record is later reactivated and placed back into the exact same Opportunity Teams, they will lose access to any records that were previously shared with them strictly via manual sharing.


Why other options are incorrect:



Default Opportunity Teams automatically re-grant access when team members are added, but they do not restore historical manual shares.


Changing stages, record types, or permission sets would not selectively strip access tied specifically to their historical individual shares in a private sharing model where they previously collaborated.
 
Timestamp: May 22, 2022, 5:22 p.m.
—------------------------
1028. Which two dashboards components should display data from the summary rows of a report? (Choose two.)
 
A. Metric
 
B. Chart
 
C. Gauge
 
D. Table
 
Answer: B. Chart and D. Table

Why:

Chart (Option B): Dashboard charts (such as bar, column, line, or pie charts) pull their summarized data directly from the summary fields, grouped rows, or matrix groupings of a source report.


Table (Option D): Dashboard tables can display summarized values and groupings from report summary rows (such as subtotals or group-level metrics).


Why other options are incorrect: Metric and Gauge components display a single numeric value derived from a grand total or specific metric block on a report, rather than summary rows or grouped matrix data.
 
Timestamp: Oct. 31, 2019, 10:57 a.m.
—-----------------------------------------
1030. Universal Containers has purchased 25 new Salesforce licenses.How many users can a System Administrator create at the same time on the Add Multiple Users page?
 
A. An unlimited number of users.
 
B. A maximum of 5 users.
 
C. A maximum of 25 users.
 
D. A maximum of 10 users.
 
Answer: D. A maximum of 10 users.

Why:

On the native Salesforce Add Multiple Users page, administrators can create up to 10 users simultaneously. Even if an organization has purchased additional licenses (such as 25 new licenses), the page itself caps bulk creation at batches of 10 users at a time.
 
Timestamp: April 11, 2020, 6:27 p.m.
—-------------------------------
1032. The Support team has asked the Administrator to create a guided process that allows the rep to use scripted screens to collect the appropriate information.Which tool should the Administrator use?
 
A. Cloud Flow Designer
 
B. Approval Process
 
C. Workflow Rule
 
D. Process Builder
 
Answer: A. Cloud Flow Designer (Salesforce Flow)

Why:

Cloud Flow Designer (Flow Builder): Screen flows allow administrators to build guided, step-by-step interactive screens with rich text, inputs, and conditional logic to walk support reps through data collection processes.


Why other options are incorrect: Approval processes handle record sign-offs, while Workflow Rules and Process Builder handle automated backend actions, field updates, and email alerts without providing interactive scripted screens for users.
 
Timestamp: Jan. 20, 2020, 6:06 a.m.
—-----------------------------
1033. Which circumstance will prevent a system administrator from deleting a custom field?
 
A. The field is used in a page layout.
 
B. The field is part of a filed dependency.
 
C. The filed is used in a workflow filed update.
 
D. The filed is used in a report.
 
Answer: A, B.

Why:

Field Dependencies: If a custom field is part of a controlling or dependent field relationship, Salesforce will prevent you from deleting it until you remove the field dependency configuration.


Why other options are incorrect: Salesforce allows you to delete custom fields even if they are referenced in page layouts, workflow field updates, or standard reports. (If a field is used in a report or workflow, Salesforce automatically removes it from those components or flags them, rather than completely blocking the deletion).
 
Timestamp: April 6, 2020, 3:11 p.m.
—---------------------------
1034. The support team at Universal Containers wants to be more proactive about renewing support plans with customers. They would like the support representative dedicated to each account to be notified a month before the account's support plan expires.What should an administrator configure to meet this requirement?
 
A. Assignment rule
 
B. Workflow rule
 
C. Auto-response rule
 
D. Escalation rule
 
Answer: B. Workflow rule (or Flow, which has largely replaced traditional workflow rules)

Why:

Workflow Rule / Time-Dependent Action: To notify a user a specific duration of time before a date field occurs (such as a support plan expiration date), an administrator uses a time-based workflow rule or a scheduled flow. This allows the system to wait until 30 days prior to the expiration date and automatically trigger an email alert to the account's support representative.


Why other options are incorrect:



Assignment rules route new leads or cases upon creation.


Auto-response rules send automated email replies to customers upon case or lead submission.


Escalation rules automatically escalate unresolved cases when they cross specific age thresholds.
 
Timestamp: Jan. 3, 2021, 6:58 a.m.
—--------------------------------------------
1035. Sales Managers want to capture an additional email address for Contact records.Which field property will ensure the proper format?
 
A. Data Type
 
B. Default Value
 
C. Field-level Security
 
D. Validation Rule
 
Answer: A. Data Type

Why:

Data Type: When creating a custom field for an email address, setting the Data Type to Email forces Salesforce to automatically validate that the entered text follows a proper email format (containing characters like @ and a valid domain structure) before allowing the record to be saved.


Why other options are incorrect:



Default values only populate preset information.


Field-level security controls who can view or edit the field, not its formatting.


While a validation rule could enforce a regex check for formatting, selecting the correct Data Type is the built-in, native property specifically designed to handle email formatting automatically.
 
Timestamp: May 28, 2020, 9:57 a.m.
—----------------------------
1039. What are three considerations when a user is importing data via Data Loader? (Choose three.)
 
A. Importing data into checkbox fields allows for use of TRUE/FALSE.
 
B. Field-Level Security access determines which fields will be visible.
 
C. Restricted picklists, a new picklist value will be ignored and the default value applied.
 
D. Validation rules do not execute when importing data.
 
E. Unrestricted picklist, a new picklist value will be applied but will not be added to the picklist.
 
Answer: ABE
 Why:
Checkbox Formatting (Option A): When mapping values to checkbox fields using Data Loader, you can successfully use boolean indicators like TRUE or FALSE (along with 1 or 0).
Field-Level Security (Option B): A user's profile and FLS settings dictate which fields they can read or write to during data load operations.
Restricted Picklists (Option C): If a load file includes a value not already defined for a restricted picklist, the system rejects/ignores that value and applies the default picklist value instead.
Timestamp: June 7, 2020, 1:16 a.m.
—--------------------------------
1041. Support agents at Universal Containers research solutions to customer issues by asking various subject matter experts (SMEs) at the company.Which three features will allow Support Agents to quickly document the details of these meetings? (Choose three.)
 
A. Case Feed
 
B. Workflow Email Alerts
 
C. Case Group
 
D. Case Comments
 
E. Events
 
Answer: A, D, E
Why: Case Feed allows agents to quickly post notes and updates directly on the case record. Case Comments provide a structured way to document detailed internal discussions and notes. Events can be logged to capture the specific details, time, and outcomes of meetings held with subject matter experts.
 
Timestamp: Jan. 20, 2020, 6 a.m.
—------------------
1042. Ursa Major Solar wants to use the Salesforce approval process.What are two characteristics that make a sales process a good fit for the Salesforce approval process? (Choose two.)
 
A. There are approvals for all Opportunities by a Sales VP where a Sales VP is allowed to delegate their approval to someone else.
 
B. The first level approval can be denied and automatically routed to the Sales VP for final approval.
 
C. The approval manager is randomly assigned from a public group of managers, and there is a second approval by the Sales VP.
 
D. There is an approval to a queue member for all Opportunities and an additional approval by a Sales VP for Opportunities over a certain amount.
 
Answer: AD
 Why: Salesforce approval processes natively support delegating approval authority to another user if an approver is unavailable. They also allow setting up multi-step approval structures, such as assigning initial reviews to a queue followed by a secondary approval threshold based on opportunity amounts. 
Timestamp: July 6, 2020, 1:49 p.m.
—-------------------------------
1045. The Support Manager wants to send an automatic email to the Case Contact when a case is closed.Which automation tool can the System Administrator use?
 
A. Sharing Rule
 
B. Validation Rule
 
C. Workflow Rule
 
D. Case Auto-Response Rule
 
Answer: C
 Why: Workflow rules include email alerts that can be triggered when a case record is edited or updated to a closed status. Case auto-response rules are strictly limited to automated responses sent upon the initial creation of a case or lead. 
Timestamp: Feb. 6, 2020, 4:03 a.m.
—---------------------------
1046. A company has a complicated Sales process regarding its opportunities. The company has three different lines of business (Widget A, Widget B, Widget C) that each contain fields specific to that line of business's industry and customers. For each line of business, there is a specific set of fields that Sales users should see and a different set of fields that Marketing users should see.How should an Administrator configure Page Layouts and Record Types for the Opportunity object so that each team sees what it needs to see, without cluttered layouts containing unnecessary fields?
 
A. Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with one Page Layout.
 
B. Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with six total Page Layouts, one for each Record Type.
 
C. Create one Record Type with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).
 
D. Create three Record Types (Widget A, Widget B, Widget C) with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).
 
Answer: D
Why: Creating three Record Types (one for each line of business) allows the administrator to categorize the different business processes, while assigning six distinct page layouts based on the combination of record types and user profiles (Sales vs. Marketing) ensures each team sees only their relevant fields.
Timestamp: Nov. 23, 2019, 7:09 p.m.
—----------------------------------------------
1047. The sales manager at Universal Containers wants three users to have Read and Edit access to Campaigns.How should the Administrator fulfill this requirement?
 
A. Add Read and Edit access for Campaigns to the Sales User profile.
 
B. Create a Permission Set with Read and Edit access for Campaigns.
 
C. Assign users to a System Administrator profile to provide full access.
 
D. Clone the Sales User profile and set up Read and Edit access for Campaigns.
 
Answer: B
Why: A permission set allows an administrator to grant specific access permissions, such as Read and Edit access to campaigns, to a targeted group of users without modifying their core user profiles. This is the best practice when granting additional access to only a subset of users.
 
Timestamp: May 5, 2020, 9:56 a.m.
—----------------------------------
1049. Universal Containers has decided to offer a partner its products at a discounted rate applied to all opportunities.What should the Administrator do to make sure the appropriate prices are applied to products on opportunities for this partner?
 
A. Create a custom object for the discounted products.
 
B. Create a new discount Record Type on the Products object.
 
C. Create a new list price on the Standard Price Book.
 
D. Create a custom Price Book with the discounted list prices.
 
Answer: D
 Why: Creating a custom Price Book allows an administrator to define specific discounted list prices tailored to a particular partner or account segment. This custom price book can then be assigned to the partner's opportunities so the correct pricing is applied automatically. 
Timestamp: Nov. 23, 2019, 7:15 p.m.
—--------------------------
1050. When working on opportunities, sales representatives at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors.Which two features should an administrator use to facilitate this? (Choose two.)
 
A. Big deal alerts
 
B. Opportunity update reminders
 
C. Chatter groups
 
D. Opportunity Dashboard
 
Answer: C, D
Why: Chatter groups allow sales representatives to collaborate, share insights, and discuss specific products or competitor strategies directly with peers. Opportunity Dashboards provide visual summaries of key metrics, enabling reps to identify successful trends, winning strategies, and top-performing comparable opportunities.
 
Timestamp: Jan. 20, 2020, 5:33 a.m.
—------------------------
1051. Universal Containers has a private sharing model on Opportunities. The System Administrator has been asked to create a new custom object that will track customer payment information and will link to the Opportunity. Only those users with access to the Opportunity should be able to see the records on the new object.What should the Administrator do to accomplish this task?
 
A. Create a lookup relationship with Profile permissions.
 
B. Create a Master-Detail relationship with Profile permissions.
 
C. Create a Master-Detail relationship with a Criteria Based Sharing Rule.
 
D. Create a Lookup relationship with a Criteria Based Sharing Rule.
 
Answer: B
Why: A Master-Detail relationship automatically restricts the visibility of the child custom object records based on access to the parent Opportunity record due to its inherited sharing behavior. This satisfies the requirement that only users with access to the Opportunity can view the related customer payment information.
 
Timestamp: April 14, 2020, 10:32 a.m.
—-------------------------
1053. Which two groups of objects can be created when converting a Lead? (Choose two.)
 
A. Account, Contact, Lead Conversion
 
B. Account, Contact, Opportunity
 
C. Account, Opportunity, Order
 
D. Person Account, Opportunity
 
Answer: BD
 Why: When converting a Lead in Salesforce, the standard process creates an Account and a Contact, with an optional Opportunity. If Person Accounts are enabled in the organization, the conversion process maps the Lead to a Person Account and an optional Opportunity instead. 
Timestamp: Nov. 26, 2019, 6:36 a.m.
—------------------------
1054. What are three features of Chatter? (Choose three.)
 
A. Events
 
B. Bookmarks
 
C. Notes
 
D. feeds
 
E. Recommendations
 
Answer: B, D, E
Why: Chatter includes feeds for sharing updates and collaborating, bookmarks to save important posts or files for later reference, and recommendations to suggest relevant groups or people to follow. Events and notes are standard Salesforce features or objects outside of Chatter's core collaboration tools.
 
Timestamp: March 27, 2020, 4:33 a.m.
—------------------------------
1064.  A previous Administrator is no longer at Universal Containers, but still owns many records and is the Default Workflow user.Which security measure should the new Administrator take?
 
A. Delete the previous Administrator user.
 
B. Reset the password for the previous Administrator user.
 
C. Freeze the previous Administrator user.
 
D. Deactivate the previous Administrator user.
 
Answer: C
Why: Deactivating a user removes their active access and allows the system administrator to transfer their record ownership and reassign the Default Workflow User settings. Simply freezing or deleting the user leaves workflow rules and record ownership unresolved or active.
 
Timestamp: Feb. 24, 2020, 3:37 a.m.
—--------------------------------
1065. A manager has a new report folder called Awesome Team Reports to store the reports that are relevant for the team. The manager wants to let the team lead add new reports to the folder and share access to the folder with the rest of the team.Which level of access to the folder does the team lead need in order to complete this task?
 
A. Editor
 
B. Manager
 
C. Administrator
 
D. Viewer
 
Answer: B
Why: The Manager access level on a report folder allows the user to view, edit, delete, and share the folder, as well as add or remove reports. Viewer access is read-only, and Editor access allows saving reports to the folder but does not grant permission to share the folder with others.
 
Timestamp: May 2, 2020, 5:10 p.m.
—-------------------------------
1068. Universal Containers wants to back-up Salesforce data on a monthly basis.Which set of tools can a system administrator use to meet this requirement?
 
A. Data Export Service, Reporting Snapshots, Einstein Analytics
 
B. Data Export Service, Data Loader, Report Export
 
C. Data Loader, Scheduled Report, Reporting Snapshot
 
D. Data loader, Reporting Snapshot, Report Export
 
Answer: B
Why: The Data Export Service provides automated scheduled backups (monthly or weekly) of all organization data into a set of CSV files. Reporting Snapshots allow administrators to periodically save tabular report data into custom objects to track historical trends. Einstein Analytics (Analytics Studio) can be integrated to process, store, and analyze backed-up data trends over time.
 
Timestamp: Jan. 20, 2020, 5:19 a.m.
—-----------------------------
1070. A Sales Manager wants all Sales Users in the department to see a Dashboard that displays Total Closed/Won Opportunity Amount by User on a monthly basis.The Opportunity sharing model is private.How can the Administrator meet this requirement?
 
A. Create the Dashboard from the Opportunities by User Report, then save in the shared Dashboard Folder as a Dynamic Dashboard.
 
B. Create the Dashboard from the Opportunities by User Report, select the Sales Manager as RunAs User and save in the private Dashboard Folder.
 
C. Ask the Sales Manager to create the Dashboard from the Opportunities by User Report and save it to her private Dashboard Folder.
 
D. Ask the Sales Manager to create the Dashboard from the Opportunities by User Report, select ג€View Dashboard as Meג€ and save in the shared Dashboard Folder.
 
Answer: D
Why: Setting the running user to the Sales Manager ("View Dashboard as Me") and saving the dashboard in a shared folder allows sales users to see broader department data they wouldn't normally see under a private sharing model. This fulfills the requirement by letting the team view the aggregated metrics that the manager has visibility into.
 
Timestamp: April 10, 2020, 8:27 p.m.
—-----------------------------
1071. Sales Rep and Sales Rep B view an Account report for all Accounts without any filters. The company uses a private sharing model. Each rep sees a different number of results.What is the explanation for the discrepancy in the reports?
 
A. Sales Rep B needs to be assigned to the Sales Rep role.
 
B. Sales Rep B needs to be assigned to the Sales Rep queue.
 
C. Sales Rep B needs to be assigned to the Sales Rep permission set.
 
D. Sales Rep B needs to be assigned to the Sales Rep profile.
 
Answer: A
Why: Under a private sharing model, record-level access is determined by user roles and the role hierarchy. If a user is not assigned to the correct role, they will lack access to records owned by peers, leading to a different number of results in unfiltered reports.
 
Timestamp: March 26, 2020, 8:52 a.m.
—---------------------------------
1072. What are the two purposes of the AppExchange? (Choose two.)
 
A. Partners can download accounts and contacts to collaborate on sales deals.
 
B. Support users can install the Salesforce Console for Service custom app.
 
C. Customers can share and install apps published by Salesforce partners.
 
D. Administrators can download and customize pre-built dashboards and reports.
 
Answer: C, D
Why: The AppExchange marketplace allows customers to easily browse, share, and install pre-built applications published by certified Salesforce partners. Additionally, administrators can download and customize ready-to-use solutions such as dashboards and reports to extend CRM functionality.
 
Timestamp: July 15, 2020, 2:32 a.m.
—--------------------------------
1078. Ursa Major Solar's default, organization-wide sharing for accounts is set to Public Read/Write. The Administrator needs to ensure that Marketing never modifies an Account record.Which action should the Administrator take to accomplish this goal?
 
A. Assign a permission set to Marketing users which removes Edit permission.
 
B. Separate the Marketing role hierarchy from the Sales role hierarchy.
 
C. Remove Edit access on Accounts from the custom Marketing profile.
 
D. Switch Organization-Wide Default Sharing to Public Read Only.
 
Answer: C
 Why: Object-level permissions, controlled via user profiles or permission sets, dictate whether a specific group of users can create, read, edit, or delete records regardless of broader organization-wide sharing defaults. Removing the Edit permission from the custom Marketing profile ensures that marketing users can never modify account records. 
Timestamp: Nov. 3, 2020, 2:30 p.m.
—----------------------------------
1081. What can an Administrator use to create different content pages for a FAQ and a Help Article for the support team?
 
A. Knowledge article versions
 
B. Knowledge data categories
 
C. Knowledge article record types
 
D. Knowledge article types
 
Answer: C
Why: Knowledge article types allow administrators to define distinct structures, custom fields, and layouts for different kinds of content like FAQs and help articles. They control how information is organized and displayed to support agents and customers.
 
Timestamp: Dec. 27, 2020, 4:58 p.m.
—---------------------------------
1083. Ursa Major Solar uses a validation rule to prevent invalid data. What are the three conditions where this rule is used? (Choose three.)
 
A. When records are updated by a workflow rule.
 
B. When records are imported.
 
C. When records are edited and saved by a user.
 
D. When records are deleted by a user.
 
E. When records are submitted using web-to-lead.
 
Answer: B, C, E
Why: Validation rules execute whenever records are created or edited through standard user interfaces, imports, or automated submission processes like web-to-lead. They evaluate data prior to saving to ensure it meets specified organizational criteria. Deletions and automated field updates by workflow rules do not trigger standard validation checks in the same manner.
 
Timestamp: July 15, 2020, 2:46 a.m.
—---------------------------------
1084. The head of marketing at Ursa Major Solar uses a spreadsheet of email addresses obtained from the company website. The Administrator needs to ensure that this spreadsheet stays updated by using the Data Import Wizard.Which set of fields are required to update the contact with the new email address?
 
A. Contact ID and Account ID
 
B. Contact Name and Account ID
 
C. User ID and Account ID
 
D. Contact Email Address and Account ID
 
Answer: B
Why: Data Import Wizard matches existing Contacts primarily by Name + Account, or by Contact ID if you include it. In your scenario, you’re updating the email address, so you need to identify the correct Contact record. Providing Contact Name and its Account ID reliably matches the existing Contact so the wizard can update the Email field.
Contact ID + Account ID (A) would also uniquely identify a record, but in typical marketing spreadsheets you don’t have Salesforce record IDs. The question implies using the wizard with standard fields, not IDs.
User ID (C) is unrelated; that’s for users, not contacts.
Email + Account ID (D) isn’t a guaranteed unique match because emails can change (that’s what you’re updating) and aren’t the primary key for matching in the wizard.

Timestamp: July 9, 2020, 10:22 p.m.
—---------------------------------------
1089. Ursa Major Solar is bringing a new type of solar panel to market. An Administrator needs to create a Sales Process for this new product.What are three considerations for the Administrator in this scenario? (Choose three.)
 
A. The Record Type's Page Layout is assigned to Users through their Profile assignments.
 
B. All Picklist values on the Page Layout must be added to the Master Picklist Value List or be active values.
 
C. An Opportunity Record Type will need to be created and assigned to the Sales Process.
 
D. The Record Type Name assignment becomes permanent upon Save of a new Record Type.
 
E. Adding a new value to the Record Type Master Picklist Value List adds the value to all existing Record Type picklists.
 
Answer: A, B, C
Why:

A: Record type page layouts are assigned via user profiles (or permission set assignments) to control which fields users see.


B: Any picklist value used within a record type must exist as an active value within the object's master picklist.


C: A Sales Process dictates the opportunity stage picklist values and must be explicitly tied to a newly created Opportunity Record Type.


Note on D & E: The Record Type Name (developer name) can technically be updated after creation, and adding a new value to the master picklist does not automatically add it to every single existing record type unless explicitly selected.
 
Timestamp: Dec. 27, 2020, 6:28 p.m.
—--------------------------------
1091. Previous Ursa Major Solar sales representatives worked on approximately 180 Accounts with billing addresses in California. These sales representatives need to retain viewing and editing access to these accounts for 1-3 months.An Administrator needs to easily provide View and Edit access to these users for the 180 accounts.What should the Administrator do to achieve this goal?
 
A. Configure a new Profile for these users with criteria based on Billing State equals California.
 
B. Configure a new Account Sharing Rule for these users with criteria based on Billing State equals California.
 
C. Configure a new Account folder for these users with criteria based on Billing State equals California.
 
D. Configure a new Account Sharing Rule for the Sales Representative Profile with criteria based on Billing State equals California.
 
Answer: B
Why: A criteria-based sharing rule allows an administrator to automatically grant Read/Write access to specific account records (such as those where the Billing State equals California) for a targeted set of users or roles, without having to change their core profiles or manually share each record one by one.
 
Timestamp: Aug. 16, 2020, 8:57 p.m.
—----------------------------
1093. A senior realtor at Ursa Major Solar has received a long list of new residential homes to sell to for the spring. Management needs the spreadsheet of the new residential homes and a separate spreadsheet of pricebooks loaded into Salesforce.Which Salesforce data tool will meet this request?
 
A. Data Loader
 
B. Mass Transfer Records
 
C. Data Import Wizard
 
D. Mass Create Records
 
Answer: A

Why: The Data Loader is the appropriate tool for this scenario because it is designed to handle larger data sets and can support the import of various objects, including custom objects (like residential homes) and Price Book entries, which often have complex relationships that the Data Import Wizard may not support or efficiently manage.
 
Timestamp: July 7, 2020, 7:47 a.m.
—----------------------------
1099. An Administrator at Ursa Major Solar (UMS) needs to create a new user.When creating a username, which two considerations need to be taken in to account? (Choose two.)
 
A. Username is added to the Active User Log.
 
B. Username must be unique across all Salesforce orgs.
 
C. Username needs to be in the format of an Email Address.
 
D. Username matches to the User's Email address.
 
Answer: BC
 B: Usernames must be globally unique across all Salesforce organizations (production environments and developer orgs), meaning no other user in any other Salesforce instance can share that exact username string.
C: Usernames must follow the format of an email address (e.g., username@company.com), though they do not strictly have to be a functioning email box or match the user's actual email address (option D).
Timestamp: July 7, 2020, 8:05 a.m.
—-----------------------------
1101. Ursa Major Solar has the following environment and requirements:✑ Critical, high-priority accounts have an assigned District Manager, Sales Representative, Inside Sales Representative, and Customer Service Representative.✑ The Sales Manager wants to prevent these accounts from being inadvertently contacted more than once on the same day.✑ The Sales Manager wants to report on various customer interactions.How should the Administrator fulfill these requirements?
 
A. Log a separate Task, Call, or Activity on the Account.
 
B. Enter comments into the Notes section on the Account.
 
C. Log a case on the Account.
 
D. Post customer interactions in Chatter on the Account.
 
Answer: A
Why: Logging separate tasks, calls, or activities directly on the Account record creates a chronological history of customer touchpoints. This allows the team to easily review recent interactions to avoid contacting the customer multiple times on the same day, while also providing standard reporting capabilities for tracking and analyzing customer communications.
 
Timestamp: March 10, 2023, 8:24 a.m.
—-------------------------------
1102. Ursa Major Solar recently acquired a company whose Sales team has a unique sales process, with stages that are different from the current setup of stages inSalesforce.The Chief Technology Officer (CTO) has decided that the new Sales team should NOT change their process at all.What should the Administrator do to incorporate the new Sales team's process?
 
A. Create new values for the Opportunity Stage field; create a new Sales Process assigned to a custom Record Type for the new Sales team.
 
B. Create a Record Type and page layout for the new Sales team and a custom field for the new Stages.
 
C. Create new values for the Opportunity Stage field and use field-level security to control which teams see which fields.
 
D. Create new values for the Opportunity Stage field; order them so that the new Sales team's values are at the bottom of the picklist.
 
Answer: A
Why: To support a completely unique sales process with different stages without disrupting other teams, the administrator needs to create the necessary stage values, build a distinct Sales Process, and tie it to a new Opportunity Record Type assigned to the acquired team. This ensures each team sees only the stages relevant to their specific workflow.

Timestamp: July 14, 2021, 6:19 p.m.
—---------------------------
1106. At Universal Containers, a user's department determines which fields the user can see and edit on Opportunities. For example, users on the Sales team can edit all fields on the Opportunity, while users on the Support team have read-only access to these fields.In which location is field-level security controlled for users on these teams?
 
A. Role
 
B. Sharing Rules
 
C. Profile
 
D. Public Groups
 
Answer: C
Why: Field-level security (FLS) is controlled primarily through Profiles (and Permission Sets). FLS determines whether a user can read or edit specific fields on an object, regardless of their role or sharing rule settings, which dictate record-level access.
 
Timestamp: May 20, 2021, 10 p.m.
—--------------------------------
1107. What are two considerations for the Org Recycle Bin? (Choose two.)
 
A. You can restore reports and dashboards.
 
B. Deleted records remain in the recycle bin for 15 days.
 
C. Records are permanently deleted when using the ג€Deleteג€ button.
 
D. Records in the Recycle Bin count against your org's storage usage.
 
Answer: AB
 Why:
A: Reports and dashboards that are deleted are placed into the Recycle Bin, where they can be restored within the 15-day window.
B: Deleted records remain in the Recycle Bin for 15 days before being permanently scheduled for deletion.
(Note on D: Items in the Recycle Bin do not count against your organization's active data storage limits. Note on C: Using the standard "Delete" button performs a soft-delete, sending records to the Recycle Bin rather than permanently deleting them instantly).
Timestamp: Nov. 6, 2021, 12:29 p.m.
—---------------------------------------------
1109. Ursa Major Solar utilizes Accounts in its Sales process; however, not all users have access to them. New users require Read access to Accounts. Additionally, four new users require Edit access.What should an Administrator do to configure access for the new users?
 
A. Configure a profile to grant Account View access and a Permission Set to grant Account Edit access to specific users.
 
B. Configure a profile to grant Account Edit access and a Permission Set to restrict Read access to specific users.
 
C. Configure a sharing rule for Account View access and another sharing rule for Edit access to specific users.
 
D. Configure a Permission Set to grant Account Edit access to specific users and modify the Standard User profile.
 
Answer: A
Why: Profiles are ideal for establishing baseline, organization-wide access for groups of users (such as granting baseline Read access to Accounts for all new users). Permission sets are then used to cleanly extend additional permissions—like Edit access—to specific individuals without having to modify profiles or create redundant roles and sharing rules.
 
Timestamp: Nov. 1, 2020, 9:03 p.m.
—----------------------------------
1110. Ursa Major Solar's support team currently has a very high call volume. They want to decrease this volume by creating a self-service community that will host published articles with Frequently Asked Questions (FAQs), and provide a chat with Help Desk representatives.Which two features should be used to fulfill this goal? (Choose two.)
 
A. SOS
 
B. Knowledge
 
C. Content
 
D. Chat
 
Answer: BD
 Why:
B (Knowledge): Salesforce Knowledge is essential for hosting and publishing articles, FAQs, and self-service documentation that allow customers to find answers independently and reduce inbound call volumes.
D (Chat): Live Chat (or Chat) enables real-time interaction, allowing customers to easily connect with Help Desk representatives when they need additional assistance directly through the community.
Timestamp: July 7, 2020, 5:29 p.m.
—------------------------------
1112. Ursa Major is onboarding 15 new employees in three weeks.The Administrator needs to create user records in Salesforce without activating them.Which two methods allow the Administrator to achieve this goal? (Choose two.)
 
A. Click Add Multiple Users and ensure that Generate New Password and Notify User Immediately are unchecked.
 
B. Create them with the User Import Wizard and ensure that Active is unchecked.
 
C. Schedule a Time-Dependent Workflow to create users in three weeks.
 
D. Create a .csv file ensuring that IsActive = False, and use the data loader to insert.
 
Answer: A, D

Why:

A: The Data Import Wizard allows you to create user records in bulk by mapping a file and explicitly ensuring the Active checkbox/field is left unchecked.


D: Using the Data Loader with a CSV file where the IsActive column is set to false allows administrators to insert user records into Salesforce in an inactive state.
 
Timestamp: Oct. 5, 2020, 1:32 p.m.
—----------------------------------------
1114. What are two considerations for sharing email template folders? (Choose two.)
 
A. Sharing on Lightning email templates in inherited from the folder it is in.
 
B. Sharing a folder shares all subfolders in that folder.
 
C. Subfolders are shared separately from the parent folder.
 
D. Lightning email templates support packaging.
 
Answer: AB
 Why:
A: Sharing permissions for Lightning email templates are inherited directly from the folder in which they reside.
B: When you share an email template folder, that sharing access automatically extends to all nested subfolders and the templates contained within them.
Timestamp: July 25, 2022, 7:16 p.m.
—-------------------------------
1115. Anytime an Opportunity is moved to Closed Won, Sales reps at Universal Containers (UC) are supposed to create a record on a child object of Opportunities called Survey Request.This action, however, does not always occur. Sales reps do not always populate all fields correctly.Which tool should be used to remove permissions from Sales to create these records and automate record creation?
 
A. Workflow
 
B. Flow
 
C. Process Builder
 
D. Approvals
 
Answer: B
 Why:
Flow (specifically Salesforce Flow, which includes record-triggered flows) is the modern, primary automation tool used to automatically create related or child records when criteria are met, such as an Opportunity moving to Closed Won.
To remove permissions from sales reps, administrators use object and field-level security (profiles/permission sets), but Flow runs in system context or via automated triggers to handle the reliable creation of the Survey Request records, bypassing manual user entry errors.
(Note: Process Builder and Workflow Rules have been retired or phased out in favor of Flow).
Timestamp: Oct. 4, 2020, 2:14 a.m.
—-----------------------------
1117. At Ursa Major Solar, Sales representatives use a custom report type for Account reports. New fields have been created on the Account Object.An Administrator needs to report on the newly created fields.What should the Administrator do to achieve this goal?
 
A. From the Custom Report Type, Edit Layout, then add the new fields to the report.
 
B. From the Custom Report Type, Edit Object Relationships, then add the new fields to the report.
 
C. Create a new account report and add the new fields from the Report Builder.
 
D. Create a new account report folder, go to share, and then add the new fields.
 
Answer: A
Why: When new fields are added to an object, they do not automatically appear in existing custom report types. To make them available for reporting, the Administrator must edit the specific Custom Report Type layout (Edit Layout), select the new fields, and add them so that users can include them in their reports.

Timestamp: July 9, 2020, 6:45 a.m.
—--------------------------------
1120.  
Which feature should Ursa Major Solar use if they want their support agents who are skilled in a particular product line to own cases directly after customers log them from an automated channel?
 
A. Assignment Rules
 
B. Workflow Field Update
 
C. Case Escalation Rules
 
D. Case Team Routing
 
Answer: A
Why: Assignment Rules are specifically designed to automatically route and assign incoming cases (created via automated channels like email, web, or self-service communities) to specific users, queues, or specialized support teams based on predefined criteria, such as the product line.
 
Timestamp: Nov. 1, 2020, 9:14 p.m.
—------------------------------------
1122. An Administrator at Ursa Major Solar is converting a lead and needs to capture custom lead data on the converted contact.What should the administrator do to accomplish this goal?
 
A. Utilize the lead conversion wizard to select the fields.
 
B. Utilize the data loader to move the custom lead data.
 
C. Map custom lead fields to custom contact fields.
 
D. Map custom lead fields to standard contact fields.
 
Answer: C
Why: To ensure that custom data entered on a Lead record is successfully carried over when the lead is converted, an Administrator must set up Lead Custom Field Mapping. This allows source custom fields on the Lead object to map directly to matching target custom fields on the Account, Contact, or Opportunity objects upon conversion.

Timestamp: May 12, 2021, 7:47 p.m.
—-----------------------------------------------
1124. DreamHouse Realty uses Content to store files for Marketing collateral. The Marketing VP wants the Collateral_ID__c to be required and for the ID to contain a minimum of ten characters.What should an administrator suggest to meet these requirements?
 
A. Validation Rules
 
B. Create Collateral_ID__c as a formula field.
 
C. Workflow Rules
 
D. Mark Collateral_ID__c as required on the page layout.
 
Answer: A

Why:

Validation Rules are the correct tool to enforce custom data integrity and formatting requirements, such as ensuring a field is populated and meets a specific character length requirement (e.g., using functions like ISBLANK and LEN(Collateral_ID__c) < 10).


Why not the others: Making a field required on a page layout only checks for data entry when users use that specific layout; it can be bypassed via API, data loads, or quick actions, and page layouts cannot natively enforce a minimum character count rule. Formula fields are read-only and cannot accept manual user input for IDs. Workflow rules cannot block data entry or enforce formatting requirements upon creation.
 
Timestamp: July 4, 2022, 12:30 a.m.
—-------------------------------------
1133. Ursa Major Solar wants all Sales Users to see a dashboard that displays Total Closed/Won Opportunity Amount by User on a monthly basis. The Opportunity sharing model is private.What should the administrator do to fulfill this request?
 
A. Request for the Sales Manager to create the Dashboard from the Opportunities by User Report and save it to her private Dashboards Folder.
 
B. Create the Dashboard from the Opportunities by User Report, then save it in the shared Dashboard Folder as a Dynamic Dashboard.
 
C. Create the Dashboard from the Opportunities by User Report, choose the Sales Manager as RunAs User and Save in the private Dashboard Folder.
 
D. Request for the Sales Manager to create the Dashboard from the Opportunities by User Report, select "View Dashboard as Me", and save in the shared Dashboard Folder.
 
Answer: d
Why:

D: To ensure all sales users see the same data regardless of the org's private sharing model, the Dashboard must be set to "View Dashboard as" a specific user with sufficient access (such as a Sales Manager who can see all sales). Saving this in a shared dashboard folder allows the target audience (Sales Users) to access the dashboard, and setting the "RunAs" user ensures the data displayed is based on that user's high-level visibility rather than the individual viewer's restricted access.

Why not B: While a Dynamic Dashboard allows viewers to see data as themselves, it would be restricted by their individual access due to the private sharing model, meaning they would likely see incomplete data instead of the desired "Total Closed/Won Opportunity Amount" for all users.

Timestamp: July 12, 2022, 6:39 p.m.
—--------------------------------
1134. Universal Containers wants to create a new sales team that focuses exclusively on small to medium business customers. This group will track information with the same fields and picklist values but will need two new options on the stage field.How should the administrator accomplish this task?
 
A. Create a new record type.
 
B. Create a new sales process.
 
C. Create a new record type and sales process.
 
D. Create a new record type and page layout.
 
Answer: c
 Why:
To add unique options (stages) to the Stage picklist for a specific group of users while keeping existing stages intact, the Administrator must create a new Sales Process that includes those new stage values.
Because sales processes must be tied to Record Types to assign them to specific user profiles/teams, the Administrator must create both a new record type and a new sales process.
Timestamp: Nov. 26, 2021, 2:25 a.m.
—-----------------------------------
1135. Ursa Major Solar wants to ensure that unique data is always input into a specific field. Which two field properties should the administrator configure? (Choose two.)
 
A. Default Value
 
B. Unique
 
C. Required
 
D. Data Type
 
Answer: B, C

Why:

B (Unique): Setting a field property to Unique ensures that Salesforce will not allow duplicate values to be entered for that field across multiple records.


C (Required): Marking the field as Required (or always requiring a value via validation/field properties) ensures that users cannot save a record without entering data into that specific field, guaranteeing that unique data is always input.
 
Timestamp: July 20, 2022, 11:33 p.m.
—-------------------------------------------
1137. The administrator at Ursa Major Solar has just finished creating new hot Account reports that filter Accounts that were modified this year with a rating of hot. The report was shared with the entire sales team. Some users are seeing some Accounts that have NOT been modified since last year and other Accounts where the rating is cold.What should the administrator do to ensure that the report works as intended for all users?
 
A. Create a filter using bucketing.
 
B. Create the report in a private folder.
 
C. Lock the report filters.
 
D. Use a cross-object filter.
 
Answer: C
Why: When a report is shared with other users, those users have the ability to temporarily modify filters (such as changing the date or rating) in their own view of the report if the filters are unlocked. By locking the report filters, the administrator ensures that the criteria defined for the report (modified this year and rating of hot) cannot be changed by the end users, preserving the integrity of the data being displayed for the entire sales team.

Timestamp: Sept. 20, 2021, 9:08 a.m.
—---------------------------------------
1139. Users at Universal Containers (UC) adhere to the following process for expense reports:✑ Create the expense report.✑ Attach receipts in an Expenses app.✑ Send the report to the accountant to review and approve.An administrator needs to enable this app for Salesforce Mobile.What should you administrator consider from the User's perspective?
 
A. A user can create list views, attach receipts as photos, and submit records for approval.
 
B. A user can create records, attach receipts as photos, and submit for approval.
 
C. A user can search Salesforce Records, attach receipts as photos, and approve records from Chatter.
 
D. A user can utilize Search, create list views, and receive record push notifications from Chatter.
 
Answer: B
 Why: The Salesforce Mobile app allows users to perform core day-to-day productivity tasks on the go. Specifically, mobile users can easily create records, use their device's camera to snap and attach receipts as photos directly within the app, and submit records into approval processes. (Note: Mobile users cannot typically create or customize list views within the Salesforce mobile app, making option B the correct choice). 
Timestamp: Nov. 17, 2021, 11:16 a.m.
—-----------------------------------
1140. What are the defaults for Org Wide Default (OWD) and Profile permissions for all Profiles that have View All Data or Modify All Data disabled on a custom object?
 
A. Private for OWD and CRED for Profiles
 
B. Public Read/Write for OWD and CRED for Profiles
 
C. Private for OWD and No Access for Profiles
 
D. Public Read/Write for OWD and No Access for Profiles
 
Answer: D
 Why: Public Read/Write for OWD: By default, when a new custom object is created, its organization-wide default is set to Public Read/Write (or Public Read/Write/Transfer depending on the object type, but generally open).
No Access for Profiles: For profiles that do not have global administrative privileges like View All Data or Modify All Data, object permissions (Create, Read, Edit, Delete) for a newly minted custom object default to No Access until explicitly granted by an administrator.
Timestamp: Nov. 17, 2021, 11:22 a.m.
—--------------------------------------------
1142. Ursa Major Solar has an existing process for their solar panel Opportunities that include the following stages:
✑ Prospecting✑ Value Proposition✑ Negotiation/Review✑ Closed Won✑ Closed Lost
They want to implement a new process for their battery Opportunities using the following stages:
✑ Qualification✑ Value Proposition✑ Negotiation/Review✑ Closed Won✑ Closed Lost
What should the administrator configure to implement these changes?
 
A. Update the existing Opportunity sales process to include qualification as a valid stage.
 
B. Create a new battery record type on Opportunity and add the appropriate values to the stage picklist.
 
C. Create a new sales process that includes the relevant stages and assign it to the new battery record type on Opportunity.
 
D. Edit the stage field on Opportunity and activate qualification as a value.
 
Answer: C
 Why:
C: To support different sets of stages for different types of opportunities (solar panels vs. batteries), the administrator must create a new Sales Process containing the unique stages for the battery process, and then map that sales process to a new Opportunity Record Type.
Simply adding a stage to the master picklist or updating an existing process wouldn't allow two distinct sets of stages to be used exclusively for different product lines.
Timestamp: Nov. 6, 2021, 9 a.m.
—--------------------------------
1144. Supervisors at Universal Containers have read access to Contacts through their profiles. Sales reps have a separate profile them to edit Contacts. Some sales reps are attending a conference for a week and supervisors will need to fill in to update details while they are out.How should an administrator grant proper access to the supervisors?
 
A. Assign a permission set with the edit permission on Contact to the supervisors that need it.
 
B. Create a sharing rule to grant read/write access on Contact to the supervisor role.
 
C. Update the supervisor profile with edit permission on Contact.
 
D. Change the supervisor users' profiles to be sales rep.
 
Answer: A
 Why:
A (Permission Set): The best practice for temporarily or selectively granting extra permissions (like "Edit" access to an object) to specific users without altering their core profile is to use a Permission Set. The administrator can assign this permission set to the supervisors for the duration of the conference and easily remove it afterward.
Why not the others: Updating the profile directly (C) would permanently grant edit access to all supervisors. Changing profiles entirely (D) is overkill and changes too many other settings. Sharing rules (B) control record-level visibility (sharing), but edit access to the Contact object itself is governed by object-level permissions managed via profiles or permission sets.
Timestamp: Nov. 6, 2021, 8:53 a.m.
—--------------------------------
1145. Ursa Major Solar wants to upload 10,000 Campaigns to Salesforce.Which tool should the administrator utilize to accomplish this task?
 
A. Data Import Wizard
 
B. Data Loader
 
C. Bulk Data Load Jobs
 
D. AppExchange package
 
Answer: B
 Why:
B (Data Loader): Data Loader is designed for handling large volumes of data (up to 5 million records). Since Ursa Major Solar wants to upload 10,000 Campaigns, Data Loader is the appropriate tool.
Why not A: The Data Import Wizard is limited to importing up to 50,000 records, but it only supports specific standard objects (like Accounts, Contacts, Leads, Solutions, Person Accounts) and custom objects—Campaigns are not supported by the Data Import Wizard.
Timestamp: Nov. 6, 2021, 8:48 a.m.
—-----------------------------------
1147. At Cloud Kicks, new public articles must be approved before publishing. Users are asked to click the submit for approval button to begin the process but sometimes the user forgets.How should an administrator automate submission so all new public articles will enter the approval process?
 
A. Default the Submit for Approval button
 
B. Create a new record type and page layout
 
C. Use Process Builder
 
D. Update Initial Actions
 
Answer: C

Why:

C (Process Builder / Flow): Automation tools (historically Process Builder, or modern record-triggered Flows) can evaluate criteria upon record creation and automatically execute an automated submit action to kick off an approval process without requiring manual user clicks.


Why not the others: Salesforce does not have a "Default the Submit for Approval button" setting. Page layouts, record types, and initial actions (which are steps inside an approval process) cannot automatically trigger a record into an approval process upon creation.
 
Timestamp: Jan. 19, 2022, 10:23 a.m.
—-----------------------------------
1150. Ursa Major Solar recently purchased 15 new Salesforce licenses.How many users can an administrator create at the same time on the Add Multiple Users page?
 
A. An unlimited number of users.
 
B. A maximum of 5 users.
 
C. A maximum of 15 users.
 
D. A maximum of 10 users.
 
Answer: D. A maximum of 10 users.

Why:

D: The standard Add Multiple Users page in Salesforce allows an administrator to create up to a maximum of 10 users at one time using the multi-row form. Since they have 15 new licenses, the administrator would need to perform this process twice (or use Data Loader for bulk creation) to add all 15 users.
 
Timestamp: Sept. 21, 2022, 6:16 p.m.
—-------------------------------------
1151. Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product.What should an administrator do to satisfy this requirement?
 
A. Create an auto-response rule and a public group.
 
B. Create a predefined case team and an assignment rule.
 
C. Create a user-based sharing rule and an ad-hoc case team.
 
D. Create a queue and a criteria-based sharing rule.
 
Answer: B
 Why:
B (Create a predefined case team and an assignment rule): A predefined case team can automatically assign a specific group of users (such as the two lead engineers) with defined roles and access levels (like read/write) to cases. Combined with a case assignment rule, whenever a new case referencing the new product is logged, the assignment rule can automatically apply the predefined case team to that case, granting the engineers read/write access instantly.
Why not the other options:
Auto-response rules (A) are used to send email responses to customers, not to grant record access.
User-based sharing rules (C) require manual or static user assignment and do not dynamically target cases based on the product referenced.
Queues (D) change ownership of cases rather than granting shared read/write access to multiple specific users simultaneously like case teams do.
Timestamp: Nov. 17, 2021, 12:29 p.m.
—-----------------------------
1153. Universal Containers created a new job posting on the first of the month. It triggered a process scheduled action that will send a Chatter post to the department VP in 30 days if the position is still open and the status is NOT equal to Interviewing. On the 10th of the month, an application interviews, and the job posting status is updated to Interviewing.What will happen to the Chatter post in this situation?
 
A. The pending Chatter post will be sent in 30 days.
 
B. The pending Chatter post will be canceled.
 
C. The pending Chatter post will be paused.
 
D. The pending Chatter post will be sent on the 10th of the month.
 
Answer: B
 Why: B (The pending Chatter post will be canceled): Salesforce time-based actions (scheduled actions in Flows or Process Builder) are dynamically evaluated against the entry criteria or the cancellation criteria while they are waiting in the queue. If the record's status changes so that it no longer meets the criteria (in this case, the status changed to "Interviewing," whereas the action was only supposed to fire if the status was NOT equal to Interviewing), Salesforce automatically removes/cancels the pending scheduled action from the queue.

Timestamp: Sept. 9, 2022, 6:50 a.m.
—---------------------------------
1156.. Universal Containers has a public read only sharing model on accounts. A new sales team has been created that will be dealing with high-security customers. The administrator has been asked to hide these accounts from anyone NOT on this team.Which two steps must be taken to hide these accounts without impacting access to the rest of the Sales team? (Choose two.)
 
A. Change the new team role to be outside the company hierarchy.
 
B. Change organization-wide default on accounts to private.
 
C. Create ownership-based sharing rules.
 
D. Create a new account record type to separate both teams.
 
Answer: bC
 Why:
B (Change organization-wide default on accounts to private): Since the current OWD is Public Read Only, everyone in the company can see all accounts. To restrict access so that only a specific group can see certain records, the baseline must first be locked down to Private.
C (Create ownership-based sharing rules): Once the OWD is set to Private, records are hidden by default. Ownership-based sharing rules (or criteria-based rules) can then be used to selectively open up access back to the rest of the sales team or specific groups, ensuring high-security accounts remain hidden from unauthorized users while preserving normal access for others.
Timestamp: Nov. 17, 2021, 1:18 p.m.
—------------------------------------
1157. Ursa Major Solar is using products and price books.Which two items should an administrator take into considerations about these features? (Choose two.)
 
A. The standard and list price for a product can be listed in more than one currency.
 
B. A product can have a different list price in different price books.
 
C. If price books contain assets, they can NOT contain products.
 
D. Products without a price are automatically added to the standard price book.
 
Answer: A, B

Why:
A (The standard and list price for a product can be listed in more than one currency): If Multicurrency is enabled in the organization, products can have standard prices and custom list prices defined in multiple currencies.


B (A product can have a different list price in different price books): The primary purpose of custom price books is to offer different pricing structures (e.g., standard pricing, enterprise pricing, promotional pricing) for the same underlying products across different markets or customer segments.


Why not the others:
C: Price books hold products (as price book entries), not assets. Assets are tracked separately on accounts or contacts.


D: Products are not automatically added to the standard price book; an administrator or user must manually add a product and define its price in the standard price book before it can be added to any custom price books.
 
Timestamp: May 15, 2022, 4:01 a.m.
—--------------------------------
1158. Ursa Major Solar customers are starting to request custom-sized solar panels, which are currently unavailable in the standard inventory. Management has decided to add custom sizing as an add-on item in Salesforce.The administrator needs to allow sales users to add custom sizing to the total opportunity sale.What should the administrator do to achieve this goal?
 
A. Add custom sizing as a new product in a pricebook.
 
B. Make a new custom object related to opportunities for custom sizing.
 
C. Add custom sizing as a new product in an order.
 
D. Add a new field on the opportunity labeled custom sizing.
 
Answer: A
 Why:
A (Add custom sizing as a new product in a pricebook): In Salesforce, products and price books are designed specifically to handle inventory items, add-ons, and services that sales users need to add directly to opportunities. Adding custom sizing as a product allows it to be selected as an Opportunity Line Item, automatically factoring into the total opportunity amount.
Why not the others:
B: Creating a separate custom object would isolate the data and require custom coding or roll-up summaries to affect the opportunity total, bypassing standard Salesforce quoting and product management features.
C: Orders are typically generated after an opportunity is closed-won or through a quote; they are not the primary mechanism for sales reps to add items to an active opportunity sale.
D: Adding a custom field would only allow for text entry or a basic value, rather than integrating smoothly with standard pricing, product schedules, and opportunity revenue tracking.
Timestamp: June 15, 2023, 12:58 a.m.
—----------------------------------------
1159. Ursa Major Solar recently enabled the multiple currencies feature.As a result, which currency will be used as the foundation for all currency conversion rates?
 
A. Record currency
 
B. Corporate currency
 
C. Active currency
 
D. Personal currency
 
Answer: B
 Why:
B (Corporate currency): When multiple currencies are enabled in Salesforce, the Corporate Currency acts as the baseline and foundation for all currency conversion rates. All other active currencies have exchange rates defined relative to this corporate currency.
Why not the others:
A (Record currency): Records take on the currency of the user or account, but record currencies themselves do not serve as the foundational conversion rate baseline.
C (Active currency): While currencies must be marked as active to be used in transactions, "active currency" is a status rather than the specific structural foundation for conversion rates.
D (Personal currency): Personal currencies can be set by individual users for their display preferences, but conversion calculations always tie back to the central corporate currency baseline.
Timestamp: Nov. 17, 2021, 1:38 p.m.
—----------------------------------------
1161. Universal Containers wants to set up a customer service community where existing and potential customers can view public discussions, collaborate with other members, and search for solutions posted by other members without logging into the community.How should an administrator allow access to the community?
 
A. Set up self-registration for the community
 
B. Use the community's guest user profile
 
C. Use LinkedIn or Facebook as authentication providers
 
D. Create a custom community profile
 
Answer: b
 Why:
B (Use the community's guest user profile): Unauthenticated users (visitors who view the community without logging in) are governed by the Guest User Profile. By properly configuring the sharing settings and permissions on the community's guest user profile, an administrator can grant public, read-only access to discussions, knowledge articles, and collaboration feeds without requiring users to log in or self-register.
Why not the others:
A (Self-registration): Self-registration creates a user record and requires a login, which contradicts the requirement that users view the community without logging in.
C (Authentication providers): Auth providers (like LinkedIn or Facebook) are used for single sign-on (SSO) when users choose to log in or register, which still requires authentication.
D (Custom community profile): Profiles are assigned to authenticated users who have logged into the community, not to anonymous guest visitors.

Timestamp: Sept. 21, 2022, 5:52 p.m.
—-----------------------------------------
1162. Northern Trail Outfitters has two sales groups. Each group has its own unique sales process. Management wants to ensure that the sales groups see their relevant sales process when working on opportunities.How should an administrator meet this requirement?
 
A. Page Layouts
 
B. Enable Paths
 
C. Opportunity Teams
 
D. Record types
 
Answer: D
 Why:
D (Record types): In Salesforce, Opportunity Sales Processes are tied directly to Opportunity Record Types. By creating two separate record types (one for each sales group) and assigning the respective sales process to each record type, the administrator ensures that users only see the stages, fields, and layouts relevant to their specific group's workflow when creating or editing opportunities.
Why not the others:
A (Page Layouts): While page layouts control which fields are visible, they do not dictate which Sales Processes (stages) are available to users. Sales processes are controlled by record types, not page layouts alone.
B (Enable Paths): Paths provide visual guidance along a sales process stages, but they do not define or restrict the underlying sales processes themselves.
C (Opportunity Teams): Opportunity teams are used to give multiple users access to a specific opportunity record for collaboration, not to manage different sales stages or workflows.
Timestamp: Nov. 26, 2021, 12:51 p.m.
—------------------------
1163. High Priority cases at Ursa Major Solar need to get a response in less than 3 hours or escalated to a queue called High Priority Queue.An administrator needs to configure the case management process to implement this requirement.How should the administrator achieve this goal?
 
A. Create a case milestone to assign all cases where status = high to the high priority queue based on the last modification time and set the age over to 3 (hours).
 
B. Create an escalation rule to assign all cases where status = high to the high priority queue based on when the case is created.
 
C. Create an escalation rule to assign all cases where status = high to the high priority queue based on the last modification time and set the age over to 3 (hours).
 
D. Create an assignment rule to assign all cases where status = high to the high priority queue.
 
Answer: C

Why:

C (Create an escalation rule): Escalation rules are designed precisely for this purpose: to automatically trigger an action (such as changing the owner to a queue) if a case has not been resolved or updated within a specific timeframe. By setting the rule to trigger based on "last modification time" and setting the "age over" criteria to 3 hours, the system will monitor for high-priority cases that have not been addressed in that window and move them to the High Priority Queue.

Why not the others:

A: While milestones are part of Entitlements, they are usually for tracking progress toward a Service Level Agreement (SLA), not for the direct automated escalation/queuing of records in the manner described.

B: Escalating based on "when the case is created" is often less effective than "last modification time" because it does not account for whether someone started working on the case after creation.

D: An assignment rule only runs when a case is initially created or updated; it does not have a timer mechanism to "escalate" a case if no action is taken within 3 hours.
 
Timestamp: Oct. 1, 2021, 11:05 a.m.
—-------------------------------------
1164. Northern Trail Outfitters wants to backup administrator set up for their org. Once the administrator is set up, they report that they are unable to perform any of the administrative duties.What are two possible reasons for the access issues? (Choose two.)
 
A. The role needs to be specified on the user record.
 
B. The System Administrator profile is unavailable under the Salesforce Platform license.
 
C. The active checkbox is unchecked by default.
 
D. The user was given the delegated administrator group access.
 
Answer: A, B

Why:
B (The System Administrator profile is unavailable under the Salesforce Platform license): The Salesforce Platform license is a limited license that does not have access to all standard objects and administrative functions, and it cannot be assigned the full System Administrator profile. To perform full administrative duties, a user must have a full Salesforce license assigned with the System Administrator profile (or appropriate custom permissions).


C (The active checkbox is unchecked by default): When creating a new user in Salesforce, the Active checkbox is left unchecked by default unless explicitly checked by the administrator during creation. An inactive user cannot log in or perform any tasks in the org.


Why not the others:
A (Role): While roles determine record-level access via sharing hierarchies, the lack of a role does not completely block a user from performing administrative duties (such as configuration, user management, or viewing setup).


D (Delegated administrator group access): Delegated administrators actually gain administrative capabilities (like resetting passwords or managing specific users/custom objects), so having delegated access would expand their permissions rather than block them from performing basic duties.
 
Timestamp: Nov. 26, 2021, 1:06 p.m.
—-----------------------------
1165.  Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue.Which feature should be used to fulfill this requirement?
 
A. Einstein Case Routing
 
B. Case assignment rule
 
C. Case escalation rule
 
D. Auto-response rule
 
Answer: C
 Why:
C (Case escalation rule): Case escalation rules are specifically designed to automatically route cases to a different user, queue, or tier when they remain open or unresolved after a specified period of time (such as a 24-hour SLA).
Why not the others:
Case assignment rules (B) only run upon initial record creation or manual trigger to assign a case to an owner, but they do not have time-based triggers to re-assign cases after hours pass.
Auto-response rules (D) are used to send automated email responses back to customers, not to re-assign case ownership.
Einstein Case Routing (A) uses AI to classify and route incoming cases, rather than handling time-based SLA escalations.
Timestamp: Oct. 1, 2021, 11:14 a.m.
—---------------------------
1166. Ursa Major Solar has the following process regarding its opportunities:✑ There are three different lines of business (Widget A, Widget B, Widget C) that each contain fields specific so that line of business's industry and customers.✑ For each line of business, there is a specific set of fields that Sales users should see and a different set of fields that Marketing users should see.An Administrator needs to configure Page Layouts and Record Types for the Opportunity object so that each team sees what it needs to see, without cluttered layouts containing unnecessary fields.What should the Administrator do to accomplish this goal?
 
A. Create one Record Type with six Page Layouts (Marketing Widget A, Marketing Widget B, Marketing Widget C, Sales Widget A, Sales Widget B, and Sales Widget C).
 
B. Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with one Page Layout.
 
C. Create six Record Types (Marketing Widget A, Marketing Widget B, Marketing Widget C, Sales Widget A, Sales Widget B, and Sales Widget C) with six total Page Layouts, one for each Record Type.
 
D. Create three Record Types (Widget A, Widget B, Widget C) with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).
 
Answer: D
 Why:
D (Create three Record Types with six Page Layouts):
Record Types control business processes, picklist values, and help determine which Page Layout is displayed based on user profile assignment. Since there are three distinct lines of business (Widget A, Widget B, and Widget C) with specific fields for their industry and customers, you need 3 Record Types (one for each line of business).
Page Layouts control the visibility of fields on the screen for different groups of users. Since each of the three lines of business requires a separate view for Sales users and Marketing users ($3 \times 2 = 6$), you need 6 unique Page Layouts assigned appropriately through profile/record type assignments.
Why not the others:
A: Creating only 1 Record Type means you cannot split the unique business processes or map different layouts dynamically based on the line of business.
B: Creating six Record Types with only 1 global page layout defeats the purpose of tailoring fields for different teams and lines of business.
C: While you do need 6 page layouts total, creating 6 separate record types is redundant because Record Types map to the line of business (the underlying data/process), whereas Page Layouts handle the role-based field visibility (Sales vs. Marketing).
Timestamp: Sept. 10, 2022, 12:13 a.m.
—-----------------------------
1167. The District Sales Director at Cloud Kicks wants to share the leaderboard component on his dashboard with his sales team.What two actions should an administrator take to enable this functionality? (Choose two.)
 
A. Enable Opportunity Teams
 
B. Build a Reporting Snapshot
 
C. Turn on Chatter Feed Tracking for Dashboards
 
D. Create a Chatter group for the Sales Team.
 
Answer: C,d
 Why:
C (Turn on Chatter Feed Tracking for Dashboards): To share a dashboard component (such as a leaderboard widget) directly to a feed or post an image snapshot of it, Feed Tracking must first be enabled for the Dashboard object in Chatter setup. Without this, the option to share components to Chatter won't be available.
D (Create a Chatter group for the Sales Team): Sharing a dashboard component allows users to post images and updates directly to user profiles or Chatter groups. Creating a dedicated Chatter group for the sales team gives the District Sales Director a centralized space to target and share the leaderboard snapshot with the entire team efficiently.
Why not the others:
A (Opportunity Teams): Opportunity teams are used for granting record-level access and collaboration on individual opportunity records, not for sharing dashboard components.
B (Reporting Snapshot): Reporting snapshots are used to save historical report data to a custom object on a schedule over time, which is unnecessary just to share a live or current dashboard component snapshot with a team.
Timestamp: June 17, 2022, 10:43 a.m.
—----------------------------------
1168. A sales ops user has been identified as the dashboards expert within Cloud Kicks. This user needs to be able to update dashboard folder access for all non- private folders.Which permission should the administrator assign to the user?
 
A. Manage reports in public folders
 
B. Create and customize dashboards
 
C. Manage dashboards in public folders
 
D. Create dashboard folders
 
Answer: C
 Why:
C (Manage dashboards in public folders): This specific administrative user permission allows a user to create, edit, delete, and manage sharing/access for all public dashboard folders across the organization (excluding personal folders). This is ideal for designated dashboard "experts" or administrators who need centralized control over folder permissions.
Why not the others:
A (Manage reports in public folders): This grants management permissions for reports, not dashboards.
B (Create and customize dashboards): This only permits creating and editing personal dashboards or saving them to folders where explicit sharing access has already been granted; it does not inherently grant management control over all public folders.
D (Create dashboard folders): This only allows a user to create new folders, but doesn't grant overarching access to modify folder access/sharing for all existing public folders.
Timestamp: Nov. 17, 2021, 3:06 p.m.
—----------------------------------
1169. Which three objects can be added as Campaigns Members? (Choose three.)
 
A. Person Accounts
 
B. Leads
 
C. Contacts
 
D. Accounts
 
E. Individuals
 
Answer: A, B, C

Why:
A (Person Accounts): Person Accounts combine consumer data into individual account records. Since they function as both accounts and contacts, Salesforce allows Person Accounts to be added directly as Campaign Members.


B (Leads): Leads are standard prospects or unverified contacts, and they are one of the core objects natively supported as Campaign Members.


C (Contacts): Contacts represent people associated with accounts and are the other primary core object natively supported as Campaign Members.


Why not the others:
D (Accounts): Standard business accounts (unless enabled via specific B2B features like Accounts as Campaign Members, standard multi-object selection questions point specifically to individual person records like Leads, Contacts, and Person Accounts).


E (Individuals): The Individual object is used primarily for privacy and data protection compliance (such as tracking GDPR/CCPA consent preferences) rather than as a direct member of a marketing campaign.
 
Timestamp: July 5, 2022, 4:18 a.m.
—--------------------------------
1170. What are two considerations when activating and assigning Themes and Branding? (Choose two.)
 
A. Each profile can be applied to a different Theme.
 
B. Up to 300 custom Themes can be created per org.
 
C. Only one Theme can be applied in an org at a time.
 
D. Themes apply to both Lightning Experience and mobile.
 
Answer: BC
 Why:
B (Up to 300 custom Themes can be created per org): Salesforce allows administrators to create and store up to 300 custom themes within an organization, alongside the standard built-in themes.
C (Only one Theme can be applied in an org at a time): An organization can only have one active theme applied at any given moment, which uniformly dictates the visual branding across the entire Lightning Experience org.
Why not the others:
A: Themes apply globally to the org rather than being assignable on a per-profile basis.
D: Themes and branding apply to Lightning Experience, but they do not apply to Salesforce Classic or native mobile apps.
Timestamp: Nov. 13, 2021, 3:58 p.m.
—---------------------------------
1171. The sales operations team at Universal Containers purchased a list of shipping companies they would like to be imported into the Salesforce org using the DataImport Wizard. Some companies on the list may already be customers.Which fields should the administrator use to prevent duplicates when importing these Account records?
 
A. Owner Name and Account Name.
 
B. Account Name and Account Site.
 
C. Account Name and Created Date.
 
D. Account Name and Billing Address.
 
Answer: B

Why:
B (Account Name and Account Site): When importing Account records using the Data Import Wizard, matching criteria allow you to prevent duplicates based on specific fields. Standard Account matching types typically look at Account Name and Account Site or leverage external/Salesforce IDs to uniquely identify existing records and avoid creating duplicate entries.


Why not the others:
A (Owner Name and Account Name): Owner names can change, and multiple accounts can share the same name under different owners or branches, making this an unreliable match key.


C (Account Name and Created Date): Created Date is a system-generated audit field assigned upon record creation, meaning incoming external records won't have a matching system-generated creation date.


D (Account Name and Billing Address): While address details can help, Account Name and Account Site is the standard paired match combination supported by the Data Import Wizard for matching existing Account records.
 
Timestamp: Aug. 20, 2022, 5:07 a.m.
—-------------------------------------
1172. Ursa Major Solar (UMS) is using the workflow field update.Which two actions can UMS complete with this feature? (Choose two.)
 
A. Modify the record type of a record.
 
B. Update the values of a field on a child object.
 
C. Choose a formula field for a field update.
 
D. Apply a specific value to a field.
 
Answer: AD
 Why:
A (Modify the record type of a record): A workflow field update allows you to change a record's Record Type to a different available record type within the same object (for example, switching a Support Case from a "Standard" record type to an "Escalated" record type).
D (Apply a specific value to a field): The core function of a field update is to automatically overwrite or stamp a specific literal value (or clear a value) onto a target field when the rule criteria are met.
Why not the others:
B: Workflow field updates can only update fields on the triggering record or specific parent objects via master-detail relationships—they cannot directly push updates down to child objects.
C: You use a formula (not a formula field per se) to compute values, and target fields themselves cannot be read-only fields like formula fields.
Timestamp: Nov. 26, 2021, 11:25 a.m.
—------------------------------------
1074. A user with administrator privileges accidentally deleted a custom field in an org one day ago.What should the administrator consider to restore the field?
 
A. The deleted field and its data can be restored up to 30 days after deletion.
 
B. The deleted field can be restored up to 15 days after deletion, but all data will be lost.
 
C. The deleted fields and its data CANNOT be restored.
 
D. The deleted field and its data can be restored up to 15 days after deletion.
 
Answer: D

Why: D (The deleted field and its data can be restored up to 15 days after deletion): In Salesforce, deleted custom fields (and their associated data) are placed in a recycle bin-like state and can be undeleted or restored within 15 days of deletion. After 15 days, they are permanently erased from the organization.
 
Timestamp: Sept. 21, 2022, 4:42 p.m.
—--------------------------------
1074. When a Salesforce user is deactivated, what happens to all of the records the user owns in Salesforce?
 
A. They are automatically assigned to another user.
 
B. They are assigned to the deactivated user until reassigned.
 
C. They are automatically deleted.
 
D. They are automatically assigned to the administrator.
 
Answer: B

Why:
B (They are assigned to the deactivated user until reassigned): When you deactivate a user in Salesforce, their record ownership remains intact. The records continue to be owned by that deactivated user until an administrator manually reassigns them to another active user using mass transfer tools, list views, or reports.


Why not the others:
A, C, and D: Salesforce does not automatically reassign, transfer, or delete records upon user deactivation. The records stay associated with the deactivated user's ID until explicit action is taken by an administrator.
 
Timestamp: Nov. 17, 2021, 4:11 p.m.
—---------------------------------------
1175. Ursa Major Solar needs to fulfill the following requirements:✑ A custom object must be created to capture account survey data.✑ Users need the ability to select an account from the survey record and view related surveys on the account record.Which two actions can an administrator configure to meet these requirements? (Choose two.)
 
A. Create a lookup relationship field on the account object.
 
B. Put the account related list on the survey page layout.
 
C. Create a lookup relationship field on the survey object.
 
D. Put the survey related list on the account page layout.
 
Answer: CD
 Why:
C (Create a lookup relationship field on the survey object): To allow users to select an Account directly from a survey record, a relationship field (Lookup or Master-Detail) must be created on the child object—in this case, the custom survey object—pointing to the Account object.
D (Put the survey related list on the account page layout): To view related surveys directly from an Account record, the survey's related list must be added to the Account page layout so users can see all survey records associated with that specific account.
Why not the others:
A (Create a lookup relationship field on the account object): Putting a lookup on the Account object would only allow an account to point to a single survey, rather than allowing many surveys to be associated with an account.
B (Put the account related list on the survey page layout): Since the survey already has a lookup field pointing to the Account, the survey record itself shows the Account details; what is needed on the Account page layout is the list of related surveys, not an account related list.
Timestamp: Oct. 28, 2021, 11:10 p.m.
-------------------------------------------
Question 1
A Platform Administrator assigned a custom profile based on the Minimum Access named Salesforce profile to a group of new users and assigned them several existing permission sets. However, when the users log in, they do not see the Lightning interface. Which action should the administrator take to give the users access to the Lightning interface?
A
Enable the Enhanced Interface for User Access Policies.
B
Add Lightning component to a layout.
C
Create a page in Lightning App Builder with the org as default.
D
Assign a permission to enable Lightning Experience User.


Answer : D
The 'Minimum Access - Salesforce' profile is a very restrictive standard profile designed to provide no access by default, adhering to the principle of least privilege. One of the specific permissions that is not included in this profile is the Lightning Experience User permission. Without this system permission, users will be defaulted to the Salesforce Classic interface (or potentially blocked from any UI if no other access is granted). To resolve this, the Platform Administrator should either edit the custom profile or, preferably, create a Permission Set that includes the 'Lightning Experience User' checkbox and assign it to the affected users. This 'unlocks' the modern Lightning interface for them. Options B and C relate to the design of specific pages, but they are irrelevant if the user isn't even allowed to enter the Lightning environment. Option A refers to a different feature set entirely and does not address basic UI access.

Question 2
Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on Pacific Time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support. How should a Platform Administrator solve for this issue?
A
Adjust the current business hours to accommodate the Eastern time zone.
B
Allow the reps to set business hours manually.
C
Set temporary business hours for each time zone.
D
Create one set of business hours per time zone.


Answer : D
Salesforce allows for the creation of multiple Business Hours records to support global teams working in different time zones. To solve the requirement for Ursa Major Solar, the Platform Administrator should create two distinct sets of business hours: one for 'Pacific Support' (9 AM - 5 PM PT) and one for 'Eastern Support' (9 AM - 5 PM ET). This is essential because Business Hours are used by the system to calculate escalation rules and milestones correctly. For example, an escalation rule for an Eastern-based case 1should start counting at 9 AM ET, not 9 AM PT. Adjusting the current record to 'accommodate' both (Option A) would result in a 12-hour window that doesn't accurately reflect either team's true availability. Users cannot manually set their own business hours (Option B) in a way that affects system automation. Creating one set per time zone ensures that the support team's performance metrics and automated routing are accurate and localized.

Question 3
A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and series. How should a Platform Administrator set up the Campaign to simplify reporting?
A
Create individual Campaigns that all have the same name.
B
Configure Campaign Member Statuses to record which event Members attended.
C
Use Campaign Hierarchy where the monthly events roll up to a parent Campaign.
D
Add different record types for the monthly event types.


Answer : C
To organize related marketing initiatives and simplify reporting, Salesforce utilizes Campaign Hierarchies. A hierarchy allows an administrator to link multiple campaigns together using the 'Parent Campaign' field. In this scenario, the admin should create a 'Parent' campaign to represent the entire networking series and then create individual 'Child' campaigns for each monthly event. This structure provides two major benefits: it allows the sales rep to see the specific performance (ROI, members, responses) of a single monthly event, and it uses 'Hierarchy Total' fields to automatically roll up all those metrics to the parent level. This provides a holistic view of the entire series' success without requiring complex manual calculations. Using the same name for campaigns (Option A) leads to data confusion, and while member statuses (Option B) are useful, they do not provide the structural 'series vs. month' reporting required here. Campaign Hierarchy is the standard architectural approach for multi-touch or recurring marketing efforts.

Question 4
At Cloud Kicks, when a rep needs to seek additional support help, there's a series of actions the company wants to ensure are taken. The steps include sending an email and changing the status and owner of the case. What should a Platform Administrator use to give the reps an easy way to make these updates?
A
Case Assignment Rules
B
Macros with Quick Actions
C
Quick Text with Email Templates
D
Autolaunched Flows with Email Alerts


Answer : B
To provide reps with an 'easy way' to perform a repetitive sequence of manual tasks, Macros are the ideal solution. A Macro allows a user to perform multiple steps---such as changing a Case Status, reassigning the Case Owner, and sending a pre-written email---with a single click. When combined with Quick Actions, Macros can navigate the user interface, populate fields, and submit changes automatically. This significantly reduces manual data entry and ensures that the company's required support process is followed consistently. Case Assignment Rules (Option A) and Autolaunched Flows (Option D) are fully automated and trigger on save, which might not be appropriate if the rep needs to decide when to trigger the support request. Quick Text (Option C) only assists with typing but does not automate field changes or ownership transfers.

Question 5
Cloud Kicks wants to ensure that every client has support based on the level of service that has been agreed on in the sales cycle. There are tiers to this support model, Gold, Silver, and Bronze. What should a Platform Administrator create to ensure that this is part of every client's account once they become a client?
A
A flow to assign Entitlements
B
Routing Configuration for each client
C
Email to Case for each service level
D
Case Assignment Rules for each client


Answer : A
To manage different levels of support service (Gold, Silver, Bronze), Salesforce uses the Entitlement Management feature. An 'Entitlement' defines the specific type of support a customer is eligible for. To 'ensure that this is part of every client's account' automatically, a Platform Administrator should use Flow Builder. A record-triggered flow can be set to run whenever an Account is updated to 'Customer' status or when a specific 'Service Level' field is populated. The flow can then automatically create or link an Entitlement record to that Account. This ensures that when a new case is opened, the support agent immediately sees the SLA (Service Level Agreement) associated with that customer. Routing Configurations (Option B) and Assignment Rules (Option D) handle who gets the case, but they do not define the level of service. Email-to-Case (Option C) is an intake method, not a service-level tracking tool.

Question 6
A Platform Administrator wants to limit the kinds of reports their users can create. Which tool should the administrator use?
A
Hide Report Types
B
Report Folder Sharing
C
Standard Report Types
D
Joined Report


Answer : A
When users click the 'New Report' button, they are presented with a list of Report Types, which act as templates determining which objects and fields are available for the report. Often, an org has many standard report types that are irrelevant or confusing to the average user. To 'limit the kinds of reports' and simplify the user experience, a Platform Administrator can use the Select Report Types to Hide feature in the Report and Dashboard Settings. By hiding unnecessary or redundant report types, the admin ensures that users only see the specific templates that align with company reporting standards. This reduces the risk of users creating inaccurate reports using the wrong data models. Report Folder Sharing (Option B) controls who can view or edit existing reports, but it does not restrict the creation of new ones from specific templates. While creating Custom Report Types is a way to define what data is available, the specific act of 'limiting' the visible list is handled by the 'Hide' functionality.

Question 7
A Platform Administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two steps should the administrator take to ensure these values are populated?
A
Update the picklist value with a validation rule.
B
Create a custom picklist field on Contact.
C
Map the picklist field on the Lead to the Contact.
D
Set the picklist field to be required on the Lead object.


Answer : B, C
2
When a Lead is converted into an Account, Contact, and Opportunity, standard fields are mapped automatically. However, custom fields require manual configuration to ensure d3ata flows through the conversion process. First, the Platform Administrator must create a corresponding custom picklist field on the Contact object (Option B) with the same values as the Lead field. Second, the administrator must go to the Lead Object Manager, select 'Fields & Relationships,' and click Map Lead Fields (Option C). Here, the admin explicitly maps the Lead custom picklist to the newly created Contact custom picklist. Without this mapping, the data will be lost during conversion. Validation rules (Option A) and making the field required (Option D) ensure data exists on the Lead but do not facilitate the transfer of that data to the Contact.

1. A sales rep has left the company, and a Platform Administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the team as is. Which tool should the administrator use to accomplish this?
A. Mass Transfer Records
B. Dataloader.io
C. Data Import Wizard
D. Data Loader

Answer: A

2. A Platform Administrator at Universal Containers is trying to deactivate a user who has left the company but is unable to do so. What is preventing the administrator from deactivating this user?
A. The user is part of an active case assignment rule.
B. The user is part of an Opportunity team.
C. The user is part of an Account team.
D. The user is the running user of a dashboard.
Answer: D

3. A Platform Administrator needs to enable Agentforce for the service team. What is the most critical prerequisite for ensuring the Service Agents have a complete and accurate view of their customers?
A. Verify Data Cloud is implemented.
B. Configure a new Service Console layout.
C. Activate Email-to-Case for the agent.
D. Create new user profiles for the agent.
Answer: A

4. Ursa Major Solar classifies its accounts as Silver, Gold, or Platinum Level. When a new case is created for a Silver or Gold partner, it should go to the Regular Support Queue. When an account is Platinum Level, it should automatically go to the Priority Support Queue. What should a Platform Administrator use to achieve this?
A. Escalation Rules
B. Assignment Rules
C. Workflow Rules
D. Case Rules
Answer: B

5.Cloud Kicks is working on a rebrand. In which two areas of the Salesforce mobile app can a Platform Administrator customize the branding?
A. Header background color
B. Loading page logo
C. App header color
D. Record background color
Answer: A, B

6. A sales manager at DreamHouse Realty wants sales users to have a quick way to view and update the opportunities in their pipeline expected to close in the next 90 days. What should a Platform Administrator do to accomplish this request?
A. Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities.
B. Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements.
C. Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop.
D. Make a new Sales dashboard and add a component that shows all opportunities that meet the criteria.
Answer: C

7. A Platform Administrator assigned a custom profile based on the Minimum Access named Salesforce profile to a group of new users and assigned them several existing permission sets.
However, when the users log in, they do not see the Lightning interface. Which action should the administrator take to give the users access to the Lightning interface?
A. Enable the Enhanced Interface for User Access Policies.
B. Create a page in Lightning App Builder with the org as default.
C. Add Lightning component to a layout.
D. Assign a permission to enable Lightning Experience User.
Answer: D

8. A Platform Administrator wants to customize the navigation menu for users in the Salesforce mobile app. The organization has not yet implemented any Lightning apps for mobile use. Which statement about the Mobile Only app navigation is correct?
A. The first four items in the Mobile Only navigation menu appear both in the navigation menu and in the navigation bar at the bottom of the screen.
B. The Mobile Only app automatically includes all standard Salesforce objects in the navigation menu based on user permissions.
C. The Mobile Only app can be customized to show different navigation menus for different user profiles and permission sets.
D. Lightning pages and Visualforce pages automatically appear in the Mobile Only navigation menu without requiring tabs to be created first.
Answer: A

9. Which task is especially suited for Agentforce?
A. Tasks without decision-making
B. Single-step predefined processes
C. Static document generation
D. Multi-step processes that need adaption to change
Answer: D

10. A VP of sales needs to report on records owned by individuals in various parts of the role hierarchy. The organization-wide default is set to Private. What should a Platform Administrator configure to achieve this?
A. Sharing Rules
B. Restriction Rules
C. Field-Level Security
D. Permission Sets
Answer: A

11. Which two solutions is a Platform Administrator able to find on AppExchange to enhance their organization?
A. Communities
B. Consultants
C. Customers
D. Components
Answer: B,D

12. When a qualified lead is converted, what happens to its related records?
A. All activities are attached to the resulting contact, account, and opportunity records.
B. Open activities only are attached to the resulting contact, account, and opportunity records.
C. Campaign history is attached to the resulting contact, account, and opportunity records.
D. Records from custom objects are attached to the resulting contact, account, and opportunity records.
Answer: A

13. The sales reps at Cloud Kicks should be able to report on each other's account and opportunity records with the organization-wide default for Account and Opportunity both set to Private. What should a Platform Administrator do to achieve this?
A. Create manual sharing to share specific account and opportunity records between the sales reps.
B. Utilize Apex sharing to programmatically share records between a group of Sales Rep users.
C. Create an Account and Opportunity report to show any owned by each member of the Sales Team and save the report into a shared report folder.
D. Create an owner-based sharing rule for Accounts with sharing between a Public Group of Sales Reps and Read Only Opportunity Access.
Answer: D

14. Cloud Kicks is concerned that not everyone on the sales team is entering key data into accounts and opportunities that they own. Also, the team is concerned that if the key information changes, it does not get updated in Salesforce. A Platform Administrator wants to get a better understanding of their data quality and record completeness. What should the administrator do to accomplish this?
A. Create a report for Accounts and Opportunities highlighting missing data.
B. Subscribe the sales reps to a monthly report for accounts and opportunities.
C. Configure the key fields as required fields on the page layout.
D. Explore AppExchange for data quality and record completeness solutions.
Answer: D

15. Agentforce is escalating cases to the support team, but the support team complains they have no context and have to ask the customer to repeat everything. Which configuration issue is the most likely cause of this issue?
A. The handoff is creating a new case instead of transferring the existing session.
B. The agent's instructions are preventing the history and context from being saved.
C. The support team's case page layout is missing the agent history component.
D. The support team members are missing the Agentforce User permission set.
Answer: c



