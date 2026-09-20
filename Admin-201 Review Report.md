# Admin-201 Practice Question Review Report

**Reviewer role:** Salesforce certified technical trainer review of answers + explanations
**Source files reviewed:** `Admin-201 Topic 1.md`, `Admin-201 Topic 2.md`
**Rule:** Source files are NOT modified. All findings are recorded here only.
**Review started:** 2026-09-18

---

## How to read this report

| Verdict | Meaning |
|---|---|
| **CORRECT** | Your answer is right AND the explanation is accurate and complete. No action needed. |
| **CORRECT / CAVEAT** | Your answer matches the exam key, but the explanation is incomplete, or the fact is outdated versus current Salesforce. Read the note. |
| **DISPUTED** | The keyed answer is defensible for a legacy exam but is not correct against current Salesforce documentation. Decide whether to keep or fix. |
| **INCORRECT** | The answer and/or explanation is wrong. Corrected answer is given. |
| **BLANK** | No answer was supplied in the file. |

---

## Progress tracker

| Batch | File | Questions | Status |
|---|---|---|---|
| 1 | Topic 1 | Q1 – Q30 | Complete |
| 2 | Topic 1 | Q31 – Q60 | Complete |
| 3 | Topic 1 | Q61 – Q90 | Complete |
| 4 | Topic 1 | Q91 – Q120 | Complete |
| 5 | Topic 1 | Q121 – Q150 | Complete |
| 6 | Topic 1 | Q151 – Q182 | Complete |
| 7 | Topic 1 | Q208 – Q235 (Q183–207, Q218–219 do not exist) | Complete |
| 8 | Topic 1 | Q236 – Q282 (Q253–254, Q260–262, Q264, Q267–269, Q273, Q278–279 do not exist) | Complete |
| 9 | Topic 1 | Q283 – Q348 (33 numbers in this range do not exist) | Complete |
| 10 | Topic 1 | Q349 – Q408 (34 numbers in this range do not exist) | Complete |
| 11 | Topic 1 | Q409 – Q494 (56 numbers in this range do not exist) | Complete |
| 12 | Topic 1 | Q495 – Q571 + the stray Q2/Q12 block | Complete |
| 13 | Topic 1 | Q572 – Q662 (61 numbers in this range do not exist) | Complete |
| 14 | Topic 1 | Q663 – Q803 (110 numbers in this range do not exist) | Complete |
| 15 | Topic 1 | Q811 – Q986 (137 numbers in this range do not exist) | Complete |
| 16 | Topic 1 | Q990 – Q1070 (41 numbers in this range do not exist) | Complete |
| 17 | Topic 1 | Q1071 – Q1156 (49 numbers in this range do not exist) | Complete |
| 18 | Topic 1 | Q1157 – Q1175, the misplaced **Q1074 ×2**, the appended **"Question 1–7"** block and the appended **unanswered 1–15** block — **end of Topic 1** | Complete |
| 19 | Topic 2 | Q1 – Q35 | Complete |
| 20 | Topic 2 | Q36 – Q65 | Complete |
| 21 | Topic 2 | Q66 – Q100 | Complete |
| 22 | Topic 2 | Q101 – Q135 | Complete |
| 23 | Topic 2 | Q136 – Q170 | Complete |
| 24 | Topic 2 | Q171 – Q205 | Complete |
| 25 | Topic 2 | Q206 – Q232 — **end of the numbered questions** | Complete |
| 26 | Topic 2 | The appended **Agentforce block** (Questions 1–20) — **Pending** | Pending |

---

# BATCH 1 — File: `Admin-201 Topic 1.md`, Questions 1–30

---

### Topic 1 — Q1. Inline editing updates the field when...
**Your answer:** B (When the record is saved/updated)
**Verdict: CORRECT**

Inline editing only *stages* the change on screen. Nothing is written to the database until the record is saved. Your explanation says exactly this and is complete.

---

### Topic 1 — Q2. Custom Fiscal Years means you cannot use standard forecasting
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

The answer is right. Salesforce Help is explicit that turning on custom fiscal years is a one-way door that switches you off standard forecasting.

**What your explanation is missing:** it does not say *which* forecasting you move to. Once custom fiscal years are enabled you must use **Customizable Forecasting** (the legacy engine this question was written for) or, in a modern org, **Collaborative Forecasts** — which *does* support custom fiscal years today. Worth adding one line so the reason is clear rather than just the outcome.

> Note: this same question appears a second time near the end of Topic 1 as a stray duplicate. Logged in the Duplicates section.

---

### Topic 1 — Q3. Which of the following are not standard objects?
**Your answer:** C (Job Applicants)
**Verdict: CORRECT**

Opportunities, Solutions, Accounts and Campaigns all ship with the platform. "Job Applicants" is a custom object people build for recruiting. Explanation is accurate.

---

### Topic 1 — Q4. Which are part of the Service Cloud offering?
**Your answer:** B, C (Knowledge, Entitlements)
**Verdict: CORRECT**

Knowledge (article base) and Entitlements (support agreements / SLA tracking) are Service Cloud. Opportunities, Campaigns and Quotes are Sales Cloud. Both correct options identified, explanation accurate.

---

### Topic 1 — Q5. Locale settings control date, time and number formats
**Your answer:** A (True)
**Verdict: CORRECT**

Locale drives date format, time format, number format, currency display format and name order. Explanation is accurate.

---

### Topic 1 — Q6. Company locale US English means all users are locked to US English
**Your answer:** B (False)
**Verdict: CORRECT**

The company locale is only the *default inherited* by new users. Each user can override it on their own personal settings. Explanation is accurate.

---

### Topic 1 — Q7. Gregorian calendar means you must use Custom Fiscal Years
**Your answer:** B (False)
**Verdict: CORRECT**

Backwards — Standard Fiscal Years *are* the Gregorian option, and they can start on the 1st of any month. Custom Fiscal Years exist for non-Gregorian structures like 4-4-5 or 13-period calendars. Explanation is accurate and gives the right examples.

---

### Topic 1 — Q8. To enable multi-currency you must...
**Your answer:** A (Contact Salesforce.com)
**Verdict: CORRECT / CAVEAT** — matches the exam key, but the fact is now out of date.

Your explanation already flags this, which is good. To be precise for study purposes: in a current org an admin turns this on themselves at **Setup → Company Settings → Company Information → Currencies → Enable Multiple Currencies**, and it is irreversible. The "log a support case" step is legacy behaviour. Keep answer A for the legacy exam key, but do not learn the old process as current fact.

---

### Topic 1 — Q9. Which feature locks the converted amount on closed opportunities?
**Your answer:** D (Advanced Currency Management)
**Verdict: CORRECT**

ACM introduces **dated exchange rates**, so a closed opportunity keeps the rate that applied on its close date instead of being recalculated when an admin updates the static rate. Explanation is accurate.

Optional addition: ACM's dated rates apply to Opportunities, Opportunity Products and Opportunity Product Schedules — they do **not** apply to Forecasting, currency roll-up summary fields, or most other objects. That limitation is a common exam trap.

---

### Topic 1 — Q10. User interface settings are global settings
**Your answer:** A (True)
**Verdict: CORRECT**

Setup → User Interface settings apply org-wide, not per user. Explanation is accurate.

---

### Topic 1 — Q11. Which of the following are true about List Views?
**Your answer:** F (All of the above)
**Verdict: DISPUTED** — option E is the problem.

Options A, B, C and D are all genuine list view capabilities and come almost word-for-word from the old Salesforce Help page on list views.

**Option E, "Export List View data to Excel", is not a native list view feature.** There has never been an Export button on a list view in either Classic or Lightning. To get list view data into Excel you either use Printable View (Classic) and save from there, or — the supported route — build a **Report** and export that. Because E is not a real list view function, the strictly defensible answer is **A, B, C, D**, not F.

**My recommendation:** keep F only if you are memorising a legacy answer key. If you are studying the concept, learn it as "list views cannot be exported; reports can." That distinction does get tested.

---

### Topic 1 — Q12. A ______ defines a collection of settings and permissions...
**Your answer:** C (Profile)
**Verdict: CORRECT**

Profile controls object and field permissions, tab visibility, app visibility, page layout assignment and system permissions — i.e. what a user can *see and do*. Role controls what *records* they can see. Explanation draws this distinction correctly.

> Note: this question also appears duplicated near the end of Topic 1. Logged in the Duplicates section.

---

### Topic 1 — Q13. Which of the following is not a standard Profile?
**Your answer:** C, E (Marketing Director, Standard Administrator)
**Verdict: CORRECT / CAVEAT** — answer is right, but the question wording is broken.

Both C and E are correct: the standard profiles are System Administrator, Standard User, Read Only, Solution Manager, Marketing User, Contract Manager, plus the portal profiles. "Marketing Director" and "Standard Administrator" do not exist.

**The problem:** the question says "**is not** a standard Profile" (singular) but has two correct answers. When you renumber and clean the files, this stem should read "Which of the following are **not** standard Profiles? (Choose two.)" otherwise the question contradicts its own answer key.

---

### Topic 1 — Q14. A Chatter Free user has access to Accounts and Contacts
**Your answer:** B (False)
**Verdict: CORRECT**

Chatter Free grants feeds, groups, files, people and profiles only — no CRM object access, no reports, no dashboards. Explanation is accurate.

---

### Topic 1 — Q15. Standard profile permissions cannot be edited
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT** — true for *permissions*, and this nuance matters later in the file.

Object permissions, field permissions and system permissions on a standard profile are locked. You clone the profile or layer a permission set instead.

**Important nuance to add:** some things on a standard profile *can* still be edited — tab settings, app visibility, record type assignment, page layout assignment, login hours and login IP ranges. This is not a contradiction, it's the difference between **permissions** (locked) and **settings** (editable).

Flagging this because **Topic 1 Q397** asks "Can an administrator change the profile settings of the Standard Solution Manager profile?" and answers **Yes**. Those two questions look like they conflict but do not — Q15 is about permissions, Q397 is about settings. When you clean the files, consider adding that one-line clarification to both so they don't confuse you on revision.

---

### Topic 1 — Q16. Admins can modify tab settings for custom profiles
**Your answer:** A (True)
**Verdict: CORRECT**

Default On / Default Off / Tab Hidden are all editable on a custom profile. Explanation correctly defines all three states, including that "Default Off" still leaves the tab reachable via the App Launcher.

---

### Topic 1 — Q17. A user leaves the company — what should the admin do?
**Your answer:** B (Deactivate their user record)
**Verdict: CORRECT**

User records can never be deleted, because they are referenced by record ownership, audit fields and history. Deactivating blocks login and frees the licence. Explanation is accurate.

---

### Topic 1 — Q18. An active user record consumes a license
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate. Deactivating releases the licence for reassignment. One optional addition: **freezing** a user does *not* release the licence — only deactivating does. That contrast is tested (see Topic 2 Q52).

---

### Topic 1 — Q19. Admin can lock users out after failed login attempts
**Your answer:** A (True)
**Verdict: CORRECT**

Set under Password Policies via "Maximum invalid login attempts" plus "Lockout effective period". Explanation is accurate.

---

### Topic 1 — Q20. Where to look to find why a user cannot log in
**Your answer:** A, C (Login History related list on the user record; Manage Users → Login History)
**Verdict: CORRECT**

Both are the same data at different scopes — per-user and org-wide. The Status column gives the reason (Invalid Password, User is Locked Out, Restricted IP, etc.). Both correct options identified.

---

### Topic 1 — Q21. What disables an application for a group of users?
**Your answer:** D (Profiles)
**Verdict: CORRECT**

App visibility is assigned by profile. Explanation correctly rules out roles and sharing rules as record-level controls rather than app-level.

Worth knowing alongside it: hiding an app does **not** hide the underlying data. See Topic 1 Q109 and Topic 2 Q69, which both make that exact point.

---

### Topic 1 — Q22. Prevent login outside normal business hours
**Your answer:** B (The user's profile record)
**Verdict: CORRECT**

Login Hours are a profile-level setting only — they cannot be set on a user record or a permission set. Explanation is accurate.

---

### Topic 1 — Q23. User logs in outside the IP range specified in their profile
**Your answer:** D (They will be denied access)
**Verdict: CORRECT**

This is the single most important distinction in Salesforce login security and your explanation nails it:
- **Profile Login IP Ranges** = hard block, no way in.
- **Org-wide Trusted IP Ranges (Network Access)** = soft control; outside the range you can still log in, you just have to pass identity verification.

Explanation is accurate and complete.

---

### Topic 1 — Q24. What happens when a user logs in for the first time
**Your answer:** A, D (cookie placed in browser; prompted to answer a security question)
**Verdict: CORRECT / CAVEAT** — right for the legacy key, dated versus current behaviour.

A and D are the keyed answers and B and C are clearly wrong, so the selection is right.

**Dated element:** modern Salesforce first-login flow prompts for **identity verification via a code** (email, SMS or authenticator app) and sets a device activation cookie. The old "set and answer a security/challenge question" step is largely historical. Your answer stands for the exam key; just don't expect to see a security question in a live org today.

---

### Topic 1 — Q25. Prevent telesales teams logging in outside the office
**Your answer:** C (Add the range of IP addresses to the team's profile(s))
**Verdict: CORRECT**

Correct, and this is the practical application of Q23. Your bracketed note explaining why option B (Network Access) fails — because trusted IPs still allow outside access after identity verification — is exactly the right reasoning and is complete.

---

### Topic 1 — Q26. Permission sets can replace the need for profiles
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT** — answer is right; one modern development is worth knowing.

Every user must still have exactly one profile, and the profile still owns defaults that permission sets cannot supply (default record type, page layout assignment, login hours, login IP ranges). So "replace" is False.

**Modern context worth adding:** Salesforce is actively moving to a permission-set-led model and has announced the retirement of *permissions on profiles*. Even under that direction, the profile object itself is not going away and remains mandatory. So the answer stays False — but the reason is narrowing over time to "defaults", not "permissions".

---

### Topic 1 — Q27. Only 1 permission set can be assigned to a user
**Your answer:** B (False)
**Verdict: CORRECT**

Many permission sets can be assigned to one user; permission set groups exist to bundle them. Explanation is accurate.

---

### Topic 1 — Q28. Used to set default levels of access to records users do not own
**Your answer:** A (Organization Wide Defaults)
**Verdict: CORRECT**

OWD is the baseline, deliberately set to the most restrictive level, with role hierarchy / sharing rules / manual sharing layered on top to open access back up. Explanation is accurate and describes the layering correctly.

---

### Topic 1 — Q29. Implications of Public Read-Only access to records you do not own
**Your answer:** A, D, E (view but not edit; can search; can report)
**Verdict: CORRECT**

All three correct options identified. Read access carries through to search results and reports; delete and transfer require Delete / Transfer / Modify All. Explanation is accurate and correctly rules out B and C.

---

### Topic 1 — Q30. Some users should not view Account records — what OWD?
**Your answer:** C (Private)
**Verdict: CORRECT**

Private is the only OWD that hides records from non-owners. Explanation correctly notes you then re-open access selectively. Accurate and complete.

---

## Batch 1 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 22 | 1, 3, 4, 5, 6, 7, 9, 10, 12, 14, 16, 17, 19, 20, 21, 22, 23, 25, 27, 28, 29, 30 |
| CORRECT / CAVEAT | 7 | 2, 8, 13, 15, 18, 24, 26 |
| DISPUTED | 1 | 11 |
| INCORRECT | 0 | — |
| BLANK | 0 | — |

**Headline for this batch:** your answers are in very good shape — nothing is outright wrong in Q1–Q30. The single item genuinely worth changing is **Q11**, where "Export List View data to Excel" is not a real list view feature.

---

# BATCH 2 — File: `Admin-201 Topic 1.md`, Questions 31–60

---

### Topic 1 — Q31. Private sharing model — what to use when Role Hierarchy isn't enough
**Your answer:** B, C, D, E (Sharing rules, Manual Sharing, Teams, Apex Triggers)
**Verdict: CORRECT**

All four correct options identified. Forecasting (A) is a revenue projection tool and grants no record access, so excluding it is right.

One small wording point: the proper term for E is **Apex Managed Sharing**, which writes rows to the object's share table (e.g. `AccountShare`). A trigger is just the usual place that code runs. Your explanation already describes it correctly as "programmatic sharing" — the option label in the question is the loose part, not your reasoning.

---

### Topic 1 — Q32. Criteria-based sharing rules share on field values, not ownership
**Your answer:** A (True)
**Verdict: CORRECT**

That is precisely the difference between the two sharing rule types: owner-based keys off who owns the record, criteria-based keys off field values. Explanation is accurate.

---

### Topic 1 — Q33. Public groups simplify creating sharing rules
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate, and your explanation correctly notes a public group can be used on **both** sides of a sharing rule — as the source (records owned by the group) and as the target (shared with the group).

---

### Topic 1 — Q34. Public groups can contain public groups, users, roles and ______
**Your answer:** B (Roles & subordinates)
**Verdict: CORRECT**

Membership types are Users, Roles, Roles and Subordinates, Roles and Internal Subordinates, Portal Roles, and other Public Groups. **Profiles can never be added to a public group** — a very common exam trap, and your explanation calls it out. Accurate and complete.

---

### Topic 1 — Q35. Product managers need access to specific opportunities
**Your answer:** D (Enable sales teams and allow users to add the product manager)
**Verdict: CORRECT**

Opportunity Teams (called Sales Teams in older material) give per-deal access at Read Only or Read/Write. Your explanation correctly rejects C by pointing out Account Teams operate at account level, not deal level. Accurate and complete.

---

### Topic 1 — Q36. Only admins can manually share; owners cannot
**Your answer:** B (False)
**Verdict: CORRECT**

Owners can and routinely do share their own records. Explanation is accurate.

---

### Topic 1 — Q37. Who can manually share records?
**Your answer:** E (All of the above)
**Verdict: CORRECT**

Owner, anyone above the owner in the role hierarchy, and admins with Modify All Data / Modify All. Your explanation adds the correct condition that hierarchy-based sharing depends on **Grant Access Using Hierarchies**, which is always on for standard objects and only optional for custom objects. That detail is exactly right and is what makes this explanation complete.

---

### Topic 1 — Q38. FLS hides a field in related lists, search, reports, list views
**Your answer:** E (All of the above)
**Verdict: CORRECT**

FLS is enforced at the platform layer, so it applies everywhere — detail pages, related lists, list views, search results, reports, email templates and the API. Explanation is accurate.

This pairs with **Topic 1 Q114**, which asks the same thing from the opposite direction and answers "the user cannot see the field at all." Consistent, no conflict.

---

### Topic 1 — Q39. What can a System Admin do to a standard field?
**Your answer:** A, B, C (change label, add help text, add/edit picklist values)
**Verdict: CORRECT / CAVEAT**

The answer is right — standard fields cannot be deleted, only hidden or removed from layouts.

**One refinement worth adding:** option C is not universally true across every standard picklist. Some standard picklists are fully editable (Opportunity Stage, Lead Status, Case Status), but others are system-controlled and locked. So the safe phrasing is "picklist values on *most* standard picklists can be edited." Your answer still stands; the explanation is just slightly more absolute than reality.

---

### Topic 1 — Q40. Use a ______ picklist to filter values based on another picklist
**Your answer:** C (Dependent)
**Verdict: CORRECT**

The field being filtered is the dependent one. Explanation correctly defines both halves of the pair, which is the right way to learn this.

---

### Topic 1 — Q41. A checkbox can be the controlling field for a dependent picklist
**Your answer:** A (True)
**Verdict: CORRECT**

Valid controlling fields are standard picklists, custom picklists and checkboxes. Explanation is accurate.

Worth pairing in your notes with the restrictions tested later in this file: a **multi-select picklist can only ever be dependent, never controlling** (see Q297), and a checkbox used as a controlling field gives you exactly two branches, checked and unchecked.

---

### Topic 1 — Q42. Manufacturer should drive the available Model values
**Your answer:** C (Manufacturer controlling, Model dependent)
**Verdict: CORRECT**

Correct direction. Option D reverses it and is the trap. Explanation is accurate and complete.

---

### Topic 1 — Q43. Lookup fields create a parent-child relationship
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

True as stated — a lookup does relate a child record to a parent record.

**Add one clarifying line:** a lookup is a **loosely coupled** parent-child link. It does not cascade delete, does not drive record ownership, does not inherit sharing, and is optional by default. Without that qualifier, this question reads as if lookup and master-detail behave the same way, which is the exact misconception that Q50, Q105, Q119, Q120 and Q245 all go on to test.

---

### Topic 1 — Q44. Which of the following are true about formula fields?
**Your answer:** A, B, D (read-only; not on edit pages; not searchable)
**Verdict: CORRECT**

All three correct options identified, and the reasoning for rejecting C and E is right — formula fields **do** appear on detail pages and **do** work in reports as columns, filters and groupings.

On D: correct. Formula fields are calculated at runtime and are not stored in the search index, so global search cannot find records by a formula field's value.

---

### Topic 1 — Q45. A cross-object formula references fields from parent objects
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate, and the "up to 10 relationships" limit quoted in your explanation is the correct figure. The direction matters: cross-object formulas look **up** to parents, never **down** to children — summarising children requires a roll-up summary field. Q125 later in this file tests exactly that, and your answer there is consistent.

---

### Topic 1 — Q46. Page layouts are assigned to ______
**Your answer:** B (Profiles)
**Verdict: CORRECT**

Assignment is by Profile, and by Profile + Record Type once record types are in play. Explanation is accurate and correctly separates Profile (function) from Role (record visibility).

---

### Topic 1 — Q47. Use ______ to filter or segment picklist values by profile
**Your answer:** A (Record Types)
**Verdict: CORRECT**

Record types control which subset of picklist values a user sees, and record types are assigned to profiles. Explanation is accurate.

---

### Topic 1 — Q48. Which objects support business processes?
**Your answer:** A, B (Cases, Opportunities)
**Verdict: CORRECT**

Correct for the options offered. Your explanation helpfully names the full set of four — Opportunity (Sales Process → Stage), Case (Support Process → Status), Lead (Lead Process → Lead Status), Solution (Solution Process → Status). Campaigns and Knowledge have no business process. Accurate and complete.

---

### Topic 1 — Q49. Creating a sales process modifies which field?
**Your answer:** B (Stage)
**Verdict: CORRECT**

A sales process selects which Stage picklist values are available. Explanation is accurate, including the link to win probability.

---

### Topic 1 — Q50. Shipments tied to Opportunity, multiple per Opportunity, Opportunity required
**Your answer:** B (Master-Detail from Shipment to Opportunity)
**Verdict: CORRECT**

Three requirements, three master-detail behaviours: the relationship field is always required, one master can have many details, and the detail inherits sharing and deletion. Your explanation maps each requirement to the matching behaviour, which is exactly how this should be reasoned. Accurate and complete.

---

### Topic 1 — Q51. Many-to-many needs a junction object with two master-detail relationships
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate. One detail worth adding for the exam: the **first** master-detail you create on the junction becomes the **primary** master, and it controls the junction record's look and feel, ownership and sharing. That primary/secondary distinction gets tested.

---

### Topic 1 — Q52. Enabling Field History Tracking requires adding the related list to the layout
**Your answer:** B (False)
**Verdict: CORRECT**

Tracking and viewing are independent. Salesforce logs changes the moment tracking is switched on; the related list only controls whether users can *see* the log. Explanation is accurate, and the "up to 20 fields per object" figure quoted is correct.

---

### Topic 1 — Q53. What field must be in the CSV to update records with Data Loader?
**Your answer:** B (Salesforce ID)
**Verdict: CORRECT**

The Update operation matches on Record ID. Your parenthetical note that an **External ID** can be used instead is the right nuance, and correctly scoped — External ID applies to the **Upsert** operation, not Update. Accurate and complete.

---

### Topic 1 — Q54. Which tools require a security token?
**Your answer:** B, C (Data Loader, Salesforce for Outlook)
**Verdict: CORRECT**

Both correct options identified. The Data Import Wizard runs inside an authenticated browser session, so no token. API and desktop clients logging in from outside a trusted IP range must append the token to the password. Explanation is accurate.

---

### Topic 1 — Q55. Data Loader can de-duplicate records during import
**Your answer:** B (False)
**Verdict: CORRECT**

Data Loader loads exactly what you give it. Your explanation correctly points to the two real solutions — the Data Import Wizard's matching options, and Duplicate Rules plus Matching Rules. Accurate and complete.

---

### Topic 1 — Q56. Import Wizard can import Opportunities
**Your answer:** B (False)
**Verdict: CORRECT**

The Data Import Wizard supports Accounts, Contacts, Leads, Solutions, Campaign Members, Person Accounts and Custom Objects. Opportunities and Cases are **not** supported and need Data Loader or the API. Explanation is accurate.

---

### Topic 1 — Q57. What to consider before importing records
**Your answer:** A, C
**Verdict: CORRECT / CAVEAT** — answer is right, but one line of the explanation is factually shaky.

A and C are correct, and the rejection of B is correct and important: **validation rules, required fields and automation all fire during imports.** People assume imports bypass validation; they do not.

**The shaky part is your reasoning for rejecting D.** Your explanation says unspecified currency "defaults to the corporate currency." In a multi-currency org, when no `CurrencyIsoCode` is supplied, imported records take the **personal currency of the user running the import**, not the corporate currency. Option D is still false as written — because it says *record owner's* personal currency, and owner and importer are often different people — so **your selected answer A, C is unaffected**. Only the justification sentence needs correcting.

---

### Topic 1 — Q58. Which can be used to create a backup of Salesforce data?
**Your answer:** A, B, D (Weekly Data Export, Data Loader, Reports)
**Verdict: CORRECT**

All three correct options identified. Data Export Service for scheduled full backups, Data Loader's Export / Export All for targeted extracts, Reports exported to CSV or Excel for ad-hoc subsets. Import Wizard cannot export, and dashboards are visualisations, not data. Explanation is accurate and complete.

---

### Topic 1 — Q59. Deleted records stay in the Recycle Bin for up to 15 days
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate, and your note about early purging when the bin exceeds its capacity is a genuinely useful addition. For completeness, the org Recycle Bin capacity is **25 times your MB data storage**, and when exceeded, the oldest records go first.

---

### Topic 1 — Q60. Which report format gives a simple list with no subtotals?
**Your answer:** C (Tabular)
**Verdict: CORRECT**

Tabular has no groupings, therefore no subtotals. Your explanation makes the single most valuable distinction in Salesforce reporting: **report *format*** (Tabular, Summary, Matrix, Joined) versus **report *type*** (Standard vs Custom, defining which objects and fields are available). Options D and E confuse the two on purpose. Accurate and complete.

---

## Batch 2 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 27 | 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60 |
| CORRECT / CAVEAT | 3 | 39, 43, 57 |
| DISPUTED | 0 | — |
| INCORRECT | 0 | — |
| BLANK | 0 | — |

**Headline for this batch:** every selected answer is correct, including all the multi-answer questions. The only thing that needs editing is one sentence inside **Q57**'s explanation (the currency default claim). **Q39** and **Q43** would benefit from a small qualifier each.

---

# BATCH 3 — File: `Admin-201 Topic 1.md`, Questions 61–90

> **This batch contains the first real errors of the review.** Q64 and Q67 each carry two contradictory answers inside the same question block. Details below.

---

### Topic 1 — Q61. Custom Summary Formulas work in ______ and ______ reports
**Your answer:** C (Summary and Matrix)
**Verdict: CORRECT**

Custom summary formulas need groupings to aggregate against, which rules out Tabular. Explanation is accurate.

Small completeness note: **Joined** reports also support custom summary formulas. It isn't an option here, so your answer is right — just don't learn the rule as "only two formats ever."

---

### Topic 1 — Q62. Which statement about custom summary formulas is true?
**Your answer:** B and D
**Verdict: CORRECT / CAVEAT** — your reasoning is sound, but the question stem is broken.

Your analysis of all four options is correct:
- **B is true** — a summary formula can reference a numeric custom formula field that is in the report.
- **D is true** — summary formulas work fine in reports built on custom report types, provided the format is grouped.
- **A is false** — you cannot group a report by a summary formula result. Grouping happens first; the formula calculates after.
- **C is false** — a summary formula cannot reference another summary formula.

**The problem:** the stem says "Which statement **is** true?" (singular) but two options are true. In most published versions of this question the keyed single answer is **D**, because D is the least arguable. Your dual answer is factually defensible.

**Recommended fix at cleanup:** change the stem to "Which **two** statements about custom summary formulas are true? (Choose two.)" so the question stops contradicting its own answer.

---

### Topic 1 — Q63. Scheduling and emailing reports
**Your answer:** E (All of the above)
**Verdict: CORRECT**

All four statements hold:
- Running user drives data visibility.
- Running user needs folder access.
- Recipients need access to the same folder, otherwise they get the email but cannot open the report.
- Salesforce runs scheduled jobs within a 30-minute window of the preferred start time, because the scheduler is queue-based rather than exact.

Explanation is accurate and complete.

---

### Topic 1 — Q64. A Dashboard is a visual representation of data from multiple reports and...
**Your answer:** The file contains **two different answers** — `Answer: CDF` on one line, then `Answer: A, C, D, F (or C, D, F depending on classic test bank interpretations)` on the next.
**Verdict: INCORRECT — needs resolving**

This question cannot be revised from as it stands, because it tells you two different things.

**My assessment of each option:**

| Option | Verdict | Reason |
|---|---|---|
| A. Up to 20 components | **True** | A dashboard holds a maximum of 20 components. This should be selected. |
| B. Displays data from standard reports | **Contradicted elsewhere in your own file** — see below | |
| C. Has a running user | **True** | |
| D. Data as of last refresh | **True** | |
| E. Always shows up to date data | **False** | Dashboards serve cached data from the last refresh. |
| F. Can be scheduled to refresh and email | **True** | |

**Recommended answer: A, C, D, F.** Option A is genuinely true and the `CDF` line wrongly omits it.

**The bigger problem — an internal contradiction across your file.** This question marks option B ("displays data from standard reports") as **False**. But two other questions in the same file say the opposite:
- **Topic 1 Q136** — "You can use standard reports when creating dashboards" → answered **True**
- **Topic 1 Q381** — "Dashboards can be created by using Standard Reports as Source Reports?" → answered **True**

They cannot all be right. **Q136 and Q381 are the defensible position:** a standard report *can* be a dashboard source as long as it meets the format requirement — grouped (Summary or Matrix), or Tabular with a row limit applied. The real restriction is about *report format and folder access*, not about standard versus custom.

**Action needed from you:** decide on one position and make Q64, Q136 and Q381 agree. I recommend treating B as **True** and teaching the rule as "the constraint is the report's format and folder, not its standard/custom origin."

---

### Topic 1 — Q65. Dynamic Dashboards display data by the viewing user
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate. Your example contrasting a manager's view with a rep's view is a good way to hold the concept.

Worth adding, because it is heavily tested: dynamic dashboards **cannot be scheduled for refresh or subscription**, and orgs are limited in how many they can have (5 in Enterprise, 10 in Unlimited/Performance, 3 in Developer). That limitation is the usual exam angle.

---

### Topic 1 — Q66. Sales VP wants to view dashboard data by region
**Your answer:** B (Dashboard Filters)
**Verdict: CORRECT**

The giveaway is that **one person** wants to slice **one dashboard** several ways — that is a filter, not a running-user question. Your explanation draws that distinction correctly, which is the whole point of the question. Accurate and complete.

---

### Topic 1 — Q67. Workflow evaluation criteria for "email Sales Ops when an opportunity closes"
**Your answer:** The file says `Answer: B`, then immediately says `Correct Answer: C`.
**Verdict: INCORRECT — the headline answer is wrong. The correct answer is C.**

The body of your explanation argues correctly and thoroughly for **C**, and then the `Answer:` line at the top says **B**. The top line is simply wrong and needs changing to C.

**Why C is right:** option C paraphrases the real Salesforce setting *"created, and any time it's edited to subsequently meet criteria."* That fires once, at the moment the opportunity crosses into Closed, and never again.

**Why B is wrong:** *"created, and every time it's edited"* re-evaluates on every single save. Once the opportunity is closed it permanently satisfies the criteria, so Sales Ops would be emailed again on every subsequent edit — every note, every description tweak. That is the classic duplicate-notification bug.

**Action needed:** change the `Answer:` line from B to C. Your explanation text needs no changes; it is already correct and well argued.

---

### Topic 1 — Q68. Email the support rep 30 days before the plan expires
**Your answer:** A (workflow rule with a time-based trigger)
**Verdict: CORRECT**

Time-dependent workflow actions can be scheduled relative to any date or date/time field, including "30 days before" a custom expiration date. Your rejection of B is correct — immediate actions have no scheduling concept. Accurate and complete.

---

### Topic 1 — Q69. Deleting pending time-based workflow actions
**Your answer:** C (Delete the actions in the Time-Based Workflow queue)
**Verdict: CORRECT**

This is a favourite exam trap and your explanation handles it correctly: **deactivating or deleting the rule does not clear actions already queued.** Records evaluated before the change keep their pending actions until you purge them from the Time-Based Workflow queue in Setup. Accurate and complete.

---

### Topic 1 — Q70. Website form that automatically becomes a lead
**Your answer:** C (Web-to-Lead)
**Verdict: CORRECT**

Web-to-Lead generates the HTML form and creates the Lead on submission. The other three options all act *after* a record exists. Explanation is accurate.

---

### Topic 1 — Q71. Lead conversion creates Account, Contact and ______
**Your answer:** D (Opportunity)
**Verdict: CORRECT**

Accurate, and your explanation correctly notes the Opportunity is optional — the user can tick "Don't create an opportunity" during conversion. That nuance is exactly what **Topic 2 Q45** tests, where the answer is Contact and Account only. Consistent.

---

### Topic 1 — Q72. Queues can be made up of
**Your answer:** A, B, C (Users, Public Groups, Roles)
**Verdict: CORRECT**

All three correct options identified. Queue members can be users, roles, roles and subordinates, public groups, partner users and territories. **Profiles can never be queue members** — same trap as public groups in Q34. Explanation is accurate.

---

### Topic 1 — Q73. Assignment rules auto-assign Leads and Cases
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate. Note that **Q84 later in this file asks essentially the same thing** about lead assignment rules. Logged as a near-duplicate.

---

### Topic 1 — Q74. Web leads to a queue, trade show leads to Matt, everything else to Phil
**Your answer:** B (One assignment rule with multiple criteria entries)
**Verdict: CORRECT**

The key fact is that **only one assignment rule can be active per object at a time**, but that rule can hold many rule entries evaluated in order. Your explanation gets this right, including the catch-all final entry for Phil. Accurate and complete.

---

### Topic 1 — Q75. Auto-response rules send tailored responses from Web-to-Lead
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate. Multiple rule entries let you vary the email template by field criteria. This is the same mechanism tested in Topic 2 Q84, Q128 and Q153 — your answers there are consistent with this one.

---

### Topic 1 — Q76. What happens when Chatter is enabled
**Your answer:** A, B, C
**Verdict: CORRECT**

All three correct options identified. Enabling Chatter adds the Chatter app and tab, and switches on default feed tracking for Account, Contact, Lead, Opportunity, Case and User. There is no automatic "All Chatter" group, so D is correctly rejected. Explanation is accurate.

---

### Topic 1 — Q77. Chatter External users can join public Chatter groups
**Your answer:** B (False)
**Verdict: CORRECT**

External Chatter users can only be invited into **private groups that explicitly allow customers**. They cannot see public groups or the company-wide feed. Explanation is accurate.

---

### Topic 1 — Q78. Who can invite Chatter customers into a group?
**Your answer:** A, B (System admin, Group owner)
**Verdict: CORRECT**

Correct for the options given. In practice it is group owners, group managers, and users holding the "Invite Customers to Chatter" permission — which admins have. Option C fails because ordinary members cannot invite. Explanation is accurate.

---

### Topic 1 — Q79. Folders are used to organize...
**Your answer:** E (All of the above)
**Verdict: CORRECT**

Reports, Dashboards, Documents and Email Templates are all folder-based, and the folder is the sharing boundary. Explanation is accurate, and correctly frames folders as a **security** mechanism, not just organisation — which is the point Topic 2 Q10, Q42 and Q141 depend on.

---

### Topic 1 — Q80. ______ controls read/create/edit; ______ controls seeing subordinates' records
**Your answer:** D (Profile, Role)
**Verdict: CORRECT**

Profile = object-level permissions. Role = record-level visibility up and down the hierarchy. This is the single most important pairing in the exam and your explanation states it cleanly. Accurate and complete.

---

### Topic 1 — Q81. Layout shows the field, FLS hides it — what does the user see?
**Your answer:** A (The field will be hidden)
**Verdict: CORRECT**

**FLS always wins.** The page layout can only arrange fields the user is already permitted to see. Explanation is accurate.

This is the same principle as Q405 later in the file (FLS read-only beats layout required), where your answer is also correct. Consistent.

---

### Topic 1 — Q82. Record types specify which elements?
**Your answer:** D (All of the above — picklist values, page layouts, business processes)
**Verdict: CORRECT**

Accurate. Record type is the hub that ties a business process to a set of picklist values and a page layout, per profile. Explanation is accurate.

---

### Topic 1 — Q83. Which objects support business processes?
**Your answer:** A, B, E, F (Opportunities, Leads, Solutions, Cases)
**Verdict: CORRECT**

All four correct options identified — this is the complete set, and this question is the fuller version of Q48. Campaigns, Accounts and Contacts have no business process. Explanation is accurate and complete.

---

### Topic 1 — Q84. Lead assignment rules assign to owners and queues by criteria
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate, but this is a **near-duplicate of Q73** — same concept, narrower wording. Logged in the Duplicates section. Consider keeping only one.

---

### Topic 1 — Q85. Which actions are triggered by workflow rules?
**Your answer:** A, B, C, F (Email, Task, Field update, Outbound message)
**Verdict: CORRECT**

All four correct options identified — this is the complete and exact set. Your reasoning for excluding G is precisely right: **a time trigger is a scheduling mechanism, not an action.** Excluding D and E is also correct — workflow cannot create arbitrary records or update unrelated ones, which is the historical reason Flow replaced it.

Accurate and complete. This is one of the best-argued explanations in the file so far.

---

### Topic 1 — Q86. Will two users get the same search results for the same keyword?
**Your answer:** B (No)
**Verdict: CORRECT**

Search respects object permissions, sharing and FLS, and is further personalised by each user's own activity. Explanation is accurate.

---

### Topic 1 — Q87. Lead converted with no value in the Company field
**Your answer:** B (A Person Account is created)
**Verdict: CORRECT**

Accurate, and your explanation correctly states the precondition: this only happens in an org where **Person Accounts are enabled**. If they are not, Company is required and the conversion simply cannot proceed. Including that condition is what makes this explanation complete.

---

### Topic 1 — Q88. An Approval Process begins when a record is...
**Your answer:** D (Submitted for Approval)
**Verdict: CORRECT**

Approval processes never self-trigger on create, save or edit — something or someone must submit the record. Explanation is accurate.

One small precision point: your explanation says the record "becomes locked." That is the default, but it is configurable per step via **Record Editability Properties**, which can allow the admin or the current approver to keep editing. Minor, but worth knowing.

---

### Topic 1 — Q89. Time-based workflow can trigger every time a record is created or edited
**Your answer:** B (False)
**Verdict: CORRECT**

Salesforce blocks this combination outright — you cannot add time-dependent actions to a rule set to *"created, and every time it's edited."* Explanation is accurate and names both permitted evaluation criteria correctly. This is the same fact tested again at Q251, where your answer is consistent.

---

### Topic 1 — Q90. Adding a custom object tab makes all of these accessible EXCEPT
**Your answer:** D (Custom Object Reports)
**Verdict: CORRECT**

Reporting is governed by the **"Allow Reports"** checkbox on the custom object definition, entirely separate from tab creation. Explanation is accurate, and this is re-tested at Q215 where your answer is consistent.

---

## Batch 3 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 27 | 61, 63, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90 |
| CORRECT / CAVEAT | 1 | 62 |
| DISPUTED | 0 | — |
| INCORRECT | 2 | **64, 67** |
| BLANK | 0 | — |

**Headline for this batch:** two questions carry contradictory answers inside the same block and must be fixed.

1. **Q67 is the clear-cut error.** The `Answer:` line says **B**; it should say **C**. Your own explanation already argues for C correctly.
2. **Q64 has two competing answer lines** (`CDF` versus `A, C, D, F`). Recommended: **A, C, D, F**. It also exposes a contradiction with Q136 and Q381 about whether standard reports can source a dashboard — you need to pick one position across all three questions.

---

# BATCH 4 — File: `Admin-201 Topic 1.md`, Questions 91–120

> **Q94 does not exist** — the file jumps straight from Q93 to Q95. Logged as missing.
>
> **This batch contains a cluster of obsolete questions.** Q98, Q106, Q108, Q111, Q122 and Q123 are all built on **S-Controls**, which Salesforce retired in 2010. See the "Obsolete content" note at the end of this batch.

---

### Topic 1 — Q91. Deleting a lead from a campaign deletes the lead record
**Your answer:** B (False)
**Verdict: CORRECT**

Removing a lead from a campaign deletes only the **Campaign Member** junction record. The Lead itself is untouched. Explanation is accurate.

---

### Topic 1 — Q92. Which application streamlines all phases of sales?
**Your answer:** C (SF Automation)
**Verdict: CORRECT**

Sales Force Automation, i.e. Sales Cloud. Your explanation correctly places Ideas, Content and Service Cloud elsewhere. Accurate.

---

### Topic 1 — Q93. All of these objects may have a queue EXCEPT
**Your answer:** A (Accounts)
**Verdict: CORRECT**

Queues are supported on Cases, Leads, Custom Objects, Knowledge Articles, Orders and Service Contracts. **Accounts, Contacts and Opportunities cannot use queues.** Explanation is accurate.

---

### Topic 1 — Q94. MISSING
**Verdict: BLANK — question does not exist**

The file skips from Q93 directly to Q95. Either a question was deleted, or the number was skipped when the file was assembled. Nothing to review. This gap disappears automatically during the renumbering pass.

---

### Topic 1 — Q95. Who can select the "Sharing" button on Account and Opportunity records?
**Your answer:** C (Record Owner, a User above the Owner, and the System Administrator)
**Verdict: CORRECT**

Correct, and consistent with your answer at Q37. The trap in options A and B is the phrase *"a User shared to the record"* — being granted Read or Read/Write does **not** let you re-share. Only Full Access does, and that sits with owners, hierarchy superiors and admins. Your explanation calls this out precisely. Accurate and complete.

---

### Topic 1 — Q96. Professional Edition installing Expense Tracker
**Your answer:** C (The installation will succeed)
**Verdict: CORRECT / CAVEAT** — **the answer is right but the explanation is factually broken and needs rewriting.**

C is the correct answer, but not for the reasons given. Your explanation contains three problems:

1. **It contradicts itself.** It states the limit is 10 custom tabs, calculates `7 + 4 = 11`, and then writes that 11 is *"under the 10 custom tab limit."* Eleven is not under ten. As written, this sentence teaches the wrong arithmetic *and* the wrong conclusion.
2. **"255 custom apps" is wrong for Professional Edition.** PE allows roughly **10** custom apps, not 255.
3. **It misses the actual reason the install succeeds.**

**The real reason — and the whole point of the question:** components that arrive inside a **managed AppExchange package do not count against the org's edition limits.** Salesforce grants the package its own allocation. That is why the org can be at 7 of 10 tabs and still install a package bringing 4 more. Without that rule the install would genuinely fail on the tab limit, which is exactly the trap options A and B are set for.

**Action needed:** keep answer C, rewrite the explanation around the managed-package exemption and drop the arithmetic.

---

### Topic 1 — Q97. Admin updates conversion rates — what happens to a GBP opportunity?
**Your answer:** A (Amount unchanged, converted amount in a report changes)
**Verdict: CORRECT**

The record keeps its native GBP value; only the derived corporate-currency conversion shifts. Explanation is accurate.

This is the natural partner to **Q9 (Advanced Currency Management)** — Q97 describes what happens *without* ACM, and ACM is what freezes historical conversions. Worth cross-referencing them in your notes.

---

### Topic 1 — Q98. Custom Links can be used for...
**Your answer:** D (All of the above)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy exam. Custom Links could open an external URL, run an S-Control, or run a report with parameters.

**Study-value warning:** Custom Links and S-Controls are legacy Classic features. In Lightning this functionality is delivered by **Quick Actions, custom buttons, Visualforce and Lightning components**. Nothing in this question appears on the modern Admin exam.

---

### Topic 1 — Q99. You can manually share a custom object record
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate, and your explanation adds the right condition: manual sharing is only available when the object's OWD is **Private or Public Read Only**. At Public Read/Write there is nothing left to grant. Complete.

---

### Topic 1 — Q100. You can customize the Opportunity Stage History related list
**Your answer:** B (False)
**Verdict: CORRECT**

Stage History is one of the hardcoded related lists — no wrench icon, no column editing. Explanation is accurate.

---

### Topic 1 — Q101. You can view a forecast based on all of these EXCEPT
**Your answer:** D (Sales Team)
**Verdict: CORRECT**

Forecasts roll up through the **Forecast Hierarchy**, which is derived from the role or territory hierarchy — not from Opportunity/Sales Teams. Explanation is accurate.

> **Cross-file duplicate:** this is word-for-word identical to **Topic 2 Q178**, which you also answered D. Logged in the Duplicates section.

---

### Topic 1 — Q102. Which of the following does a Profile control?
**Your answer:** C (Read, Create, Edit, Delete permissions)
**Verdict: CORRECT**

Accurate, and the eliminations are right: credentials live on the User record, hierarchy access on the Role, and record sharing in Sharing Settings. Complete.

---

### Topic 1 — Q103. Lead with a single campaign is converted — does campaign info map automatically?
**Your answer:** B (False)
**Verdict: DISPUTED** — I do not think B is safely defensible, and I want to flag this rather than quietly pass it.

**What Salesforce actually does on conversion:**
- If the lead belongs to **exactly one** campaign, that campaign is written automatically into the new Opportunity's **Primary Campaign Source** field.
- The existing Campaign Member record carries over to the new **Contact**, so the campaign appears in the contact's Campaign History.

So campaign association *is* applied automatically to both records. On that reading the answer is **A (True)**.

**The case for B**, which your explanation makes, is narrower: the campaign lands on the Opportunity as a *field value*, whereas on the Contact it exists only as a *related Campaign Member record* rather than a field. That is a real technical distinction — but the stem says "campaign information will map," not "a campaign field will be populated on both," so it is a strict reading of loose wording.

**My recommendation:** treat this as **A (True)** and rewrite the stem to be precise, e.g. *"...the campaign will be populated in the Opportunity's Primary Campaign Source field."* If you prefer to keep B, the stem must be tightened to say "map to a field on both records," otherwise the question is unanswerable as written.

---

### Topic 1 — Q104. Case Assignment Rules are based on elapsed time
**Your answer:** B (False)
**Verdict: CORRECT**

Assignment rules fire on **criteria at creation**; **escalation rules** are the time-based ones. Your explanation draws exactly that line. This distinction is tested repeatedly across Topic 2 (Q65, Q73, Q82, Q132, Q177, Q199) and your answers there are consistent. Accurate and complete.

---

### Topic 1 — Q105. Which are true about Master-Detail relationships?
**Your answer:** `A (and D depending on phrasing interpretation, but strictly A is the correct option here)`
**Verdict: CORRECT / CAVEAT** — the answer is right but is written as a hedge rather than a decision.

**A is correct** and should be the committed answer: the detail record inherits sharing and security from the master.

Your analysis of the others is right — B is false (cascade delete is automatic, not manual), C is false (both parent and child fields report fine). On **D**, you are correct that the wording *"Lookup field child is required"* is broken English; the underlying fact (the master-detail field on the child is always required) is true, which is why legacy keys sometimes include it.

**Action needed:** commit to `Answer: A` and either delete option D or rewrite it as *"The relationship field on the detail record is always required."* A hedged answer line is unusable if you ever load these into a quiz app.

---

### Topic 1 — Q106. On an AppExchange Test Drive you cannot view S-Control configurations
**Your answer:** B (False)
**Verdict: CORRECT / OBSOLETE**

Acceptable for the legacy key — a Test Drive gives a read-only session in the publisher's demo org, where Setup can generally be browsed.

**Study-value warning:** S-Controls no longer exist, and modern AppExchange Test Drives are marketing demos with variable Setup access. Low value; consider retiring this question.

---

### Topic 1 — Q107. A validation rule on an opportunity line item can evaluate the parent opportunity
**Your answer:** A (True)
**Verdict: CORRECT**

Validation rules on a detail record can reference master fields via cross-object syntax. Explanation is accurate and gives correct examples. Complete.

---

### Topic 1 — Q108. An S-Control may be all of the following EXCEPT
**Your answer:** B (XML)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy key — S-Control types were HTML, URL and Snippet. **Obsolete content; not on the current exam.**

---

### Topic 1 — Q109. No app access means no access to that app's tabs and objects
**Your answer:** B (False)
**Verdict: CORRECT**

An app is navigation and branding, **not a security boundary**. Hiding it does not hide the data — users still reach records via search, related lists, direct URL, reports and the App Launcher. Explanation is accurate.

This is the exact principle behind **Topic 2 Q69**, where hiding tabs failed to stop users finding deal records via search, and the real fix was removing object permissions. Your answers are consistent.

---

### Topic 1 — Q110. Which field type cannot have universal requiredness?
**Your answer:** A (Lookup)
**Verdict: CORRECT / CAVEAT** — matches the legacy key; **not true in a current org.**

Your explanation already flags this, which is good. To be precise for study purposes: **lookup fields can be marked Required today.** The field types that genuinely cannot be universally required are **checkbox, auto-number, formula and roll-up summary** — and none of those appear as options here.

So in a modern org this question has no correct answer. Keep A only if you are drilling the legacy key; do not learn it as current fact.

---

### Topic 1 — Q111. Custom Web Tab may consist of all of the following EXCEPT
**Your answer:** B (A URL that passes Salesforce data like an organization's name)
**Verdict: DISPUTED — the question is flawed and I recommend retiring it.**

Option B describes something Web Tabs **can** actually do: you can embed merge fields in the URL to pass Salesforce data to an external site. Your own explanation admits this — *"While Web Tabs can pass merge fields into external web addresses, option B is the designated incorrect option in this legacy practice question context"* — which is another way of saying the keyed answer cannot be justified on the facts.

**There is no defensible EXCEPT here:** all four options are things a Web Tab could do. Combined with the fact that Web Tabs and S-Controls are retired, my recommendation is to **delete this question** rather than try to repair it.

---

### Topic 1 — Q112. Custom lead fields can be mapped to which set of objects?
**Your answer:** B (Account, Contact, or Opportunity)
**Verdict: CORRECT**

Those are the three conversion targets. Campaigns are not a mapping target. Explanation is accurate.

---

### Topic 1 — Q113. You can map a custom lead field to one of the following at a single instance
**Your answer:** A, B, D (Account, Contacts, Opportunities)
**Verdict: CORRECT**

All three correct options identified; Cases correctly excluded. Your explanation makes the important point that one lead field maps to **one field on each of the three objects simultaneously** — which is the fact behind Q131 and Topic 2 Q223, where the answer is "three custom fields." Consistent across all three.

> **Near-duplicate of Q112** — same fact, multi-select format. Logged.

---

### Topic 1 — Q114. With FLS hiding a field, where can the user still see it?
**Your answer:** D (None of the above — cannot see it at all)
**Verdict: CORRECT**

Consistent with Q38 and Q81. Explanation is accurate and correctly extends the rule to SOQL and the API, not just the UI. Complete.

---

### Topic 1 — Q115. Can you relate a Person Account to a contact on a Business Account?
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT**

Correct for the standard model — a Person Account cannot sit as a child Contact under a Business Account.

Your explanation already notes the modern exception, which is the right instinct: with **Contacts to Multiple Accounts** enabled, a Person Account *can* be related to business accounts through `AccountContactRelation` records. So the honest phrasing is "not through the standard Account–Contact relationship," rather than "impossible." This connects to **Topic 2 Q202**, where enabling Contacts to Multiple Accounts is the correct answer.

---

### Topic 1 — Q116. How is Expected Revenue calculated?
**Your answer:** C (Opportunity Amount × Probability)
**Verdict: CORRECT**

Accurate. This is the mechanism behind **Topic 2 Q170**, where fixing wrong Expected Revenue means changing the **stage's probability**. Your answers are consistent.

---

### Topic 1 — Q117. A custom lookup field can relate a standard object to which objects?
**Your answer:** B (Leads, Accounts, Contacts and Custom Objects)
**Verdict: CORRECT / CAVEAT** — right by elimination, but the option set is artificial.

B is the best available choice and the keyed answer.

**Be careful what you learn from it:** the real rule is far broader — a custom lookup can target **almost any standard object plus any custom object**, including **User** and **Campaign**, both of which appear in the "wrong" options C and D. B wins only because it happens to contain a valid combination, not because the others are invalid targets. Do not memorise this as a definitive list of lookup targets.

---

### Topic 1 — Q118. Two users in the same role, OWD Private, no sharing rules — can they see each other's data?
**Your answer:** B (No)
**Verdict: CORRECT**

The role hierarchy grants access **upward only**. Peers in the same role get nothing from each other. Explanation is accurate and states the vertical-not-lateral rule clearly — this is the single most common misunderstanding about roles.

---

### Topic 1 — Q119. Based solely on the role hierarchy, a manager can do all EXCEPT
**Your answer:** C (View all folders the subordinate has access to)
**Verdict: CORRECT**

Folder access is governed **only** by folder sharing and is completely outside the role hierarchy. Explanation is accurate. This is why **Topic 2 Q141** requires folder access to be configured explicitly even when the role hierarchy already grants record access.

---

### Topic 1 — Q120. Deleting a parent deletes the child when the child has a lookup
**Your answer:** B (False)
**Verdict: CORRECT**

Cascade delete belongs to master-detail. With a lookup, the child survives and the lookup field is cleared. Explanation is accurate.

Worth knowing for completeness: a lookup *can* be configured with "Don't allow deletion of the lookup record that's part of a lookup relationship," which blocks the parent delete instead — but the default is clear-the-field, so your answer stands.

---

## Batch 4 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 19 | 91, 92, 93, 95, 97, 99, 100, 101, 102, 104, 107, 109, 112, 113, 114, 116, 118, 119, 120 |
| CORRECT / OBSOLETE | 3 | 98, 106, 108 |
| CORRECT / CAVEAT | 5 | 96, 105, 110, 115, 117 |
| DISPUTED | 2 | **103, 111** |
| INCORRECT | 0 | — |
| BLANK / MISSING | 1 | **94** |

**Headline for this batch:** no outright wrong answers, but several questions need attention.

1. **Q96** — answer C is right, but the explanation contradicts itself ("11 total, under the 10 limit") and quotes a wrong PE app limit. Needs a full rewrite around the **managed-package exemption**.
2. **Q103** — I disagree with B. Salesforce *does* auto-populate Primary Campaign Source on the Opportunity and carry campaign history to the Contact. Recommend **A (True)** plus a tighter stem.
3. **Q111** — flawed question with no defensible answer. Recommend deleting it.
4. **Q105** — answer is right but written as a hedge; commit to `Answer: A`.
5. **Q94** — missing entirely.

---

## Obsolete content flagged so far

These questions test features Salesforce **retired in 2010** and that carry **zero marks on the current Administrator exam**. Reviewing them is not wrong, but it is spent study time that returns nothing.

| Questions | Retired feature | Modern replacement |
|---|---|---|
| Topic 1 Q98, Q106, Q108, Q111, Q122, Q123 | **S-Controls**, Custom Web Tabs | Visualforce, Lightning Components, Quick Actions |
| Topic 1 Q110 | Lookup fields could not be universally required | Lookups **can** be required today |

**Recommendation:** mark this group as "legacy — do not revise" rather than deleting, so the historical answer keys stay intact if you ever need them.

---

# BATCH 7 — File: `Admin-201 Topic 1.md`, Questions 208–235

> **Missing questions in this range: Q218 and Q219** (file jumps Q217 → Q220), on top of the Q183–207 gap before it.
>
> **New systemic defect found: numbers written in European decimal notation.** Several options read `1.000` and `2.000` where `1,000` and `2,000` are meant. In an English locale these read as *one* and *two*. Affects Q214, Q226 and others later in the file.

---

### Topic 1 — Q208. Which are setting options for the User Interface?
**Your answer:** A, B, C, E
**Verdict: CORRECT / OBSOLETE**

All four correct options identified, and the elimination of D is right — "Transfer all Open Opportunities" is a checkbox in the **Mass Transfer Records** tool, not a UI setting.

**Obsolete:** Quick Create, sidebar components and Classic drag-and-drop scheduling no longer exist in Lightning.

---

### Topic 1 — Q209. The Report Builder is different from the Report Wizard
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

Accurate historically. **The Report Wizard is retired** — there is only one report builder now. Legacy key only.

---

### Topic 1 — Q210. Salesforce archives older activities according to which conditions?
**Your answer:** B, D, E
**Verdict: CORRECT**

All three correct options identified, and they match Salesforce's documented archiving rules exactly:
- Events with a due date more than 365 days old
- **Closed** tasks with a due date more than 365 days old
- **Closed** tasks with no due date, created more than 365 days ago

Your eliminations are both right: 180 days is not a Salesforce threshold, and **open tasks are never archived** regardless of age. Accurate and complete — one of the better-sourced explanations in the file.

---

### Topic 1 — Q211. `IF(ISPICKVAL(picklist_field))` has the same output as
**Your answer:** B (`CASE(picklist_field)`)
**Verdict: CORRECT / CAVEAT** — right concept, but the stem is not valid syntax.

B is the intended answer and the underlying point is sound: **`ISPICKVAL()` and `CASE()` are the two supported ways to evaluate a picklist**, because a picklist cannot be compared directly like a text field.

**The problem:** neither expression in the question actually compiles. `ISPICKVAL()` requires **two** arguments (field and text value), `IF()` requires **three**, and `CASE()` requires a field plus value/result pairs. As printed, the stem and option B are both incomplete fragments.

**Suggested fix:** rewrite as *"`IF(ISPICKVAL(Status__c, "Open"), 1, 0)` produces the same result as which function?"* with option B as `CASE(Status__c, "Open", 1, 0)`. Your answer stands either way.

---

### Topic 1 — Q212. Rename Tabs and Labels click path
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

The Classic path was correct and standard tabs and labels can indeed be renamed. **The path itself no longer exists** — Lightning uses Setup → Rename Tabs and Labels via Quick Find. Concept current, navigation obsolete.

---

### Topic 1 — Q213. Is identity confirmation necessary if the IP is known and a browser cookie exists?
**Your answer:** B (False — not necessary)
**Verdict: CORRECT**

Salesforce challenges only when it does **not** recognise the login context. A trusted IP **or** a valid activation cookie satisfies recognition; with both present, no challenge. Explanation is accurate and consistent with Q23, Q24 and Q25.

---

### Topic 1 — Q214. Maximum records printed in the Printable View of a list view
**Your answer:** C (1,000)
**Verdict: CORRECT / CAVEAT**

C matches the legacy key and is the figure to keep.

**Two problems with presentation:**
1. **The options are written as `2.000`, `1.000` — European decimal notation.** In English these read as two and one. They must be `2,000` and `1,000`. This defect recurs at Q226, Q263, Q446 and Q452.
2. **Treat the extra figures in the explanation with caution.** The claims about report printable view (2,000 rows) and joined report printable view (20,000 rows) are not reliably documented and I would not revise from them. The list view figure is the one this question actually tests.

---

### Topic 1 — Q215. Are custom object reports accessible when you add a custom object tab?
**Your answer:** B (No)
**Verdict: CORRECT**

Reporting is controlled by the **"Allow Reports"** checkbox on the object definition, independent of the tab. Consistent with Q90. Your explanation separates the two functions cleanly. Accurate and complete.

---

### Topic 1 — Q216. What is NOT found on a Company Profile?
**Your answer:** B (Profiles)
**Verdict: CORRECT**

Profiles live under user management, not Company Profile. Everything else listed — language/locale/time zone, licences, storage, currencies, fiscal years — genuinely is there.

**Note:** this question is consistent with **Q149** but sharpens the contradiction with **Q150** (see C4). Q216 and Q149 agree; Q150 is the outlier.

---

### Topic 1 — Q217. CRTs work in the Report Wizard but not the Report Builder
**Your answer:** B (False)
**Verdict: CORRECT**

Custom report types work in **both**, and are primarily used in the Report Builder. Explanation is accurate.

---

### Topic 1 — Q218 and Q219. MISSING
**Verdict: BLANK — questions do not exist**

The file jumps from Q217 to Q220. Nothing to review; the gap closes during renumbering.

---

### Topic 1 — Q220. System Administrators have this permission by default
**Your answer:** D (Both Report Wizard and Report Builder)
**Verdict: CORRECT / OBSOLETE**

Reasonable for the legacy key — admins held both reporting permissions. **The Report Wizard no longer exists**, so the question cannot be asked today. Low value.

---

### Topic 1 — Q221. The Salesforce Console is an example of what?
**Your answer:** C (UI)
**Verdict: CORRECT**

The Console is a purpose-built user interface for high-volume users. Explanation is accurate and describes the tabbed workspace correctly.

---

### Topic 1 — Q222. Click path to enable Enhanced Profile Management
**Your answer:** A (Setup | Customize | User Interface)
**Verdict: CORRECT / OBSOLETE**

Correct for Classic — the Enhanced Profile User Interface toggle sat in User Interface settings, not under Profiles. Your elimination of C is right; that path never existed. **Classic-only navigation.**

---

### Topic 1 — Q223. Custom formula fields can reference other formula fields including themselves
**Your answer:** B (False)
**Verdict: CORRECT**

The trap is the words "including themselves" — self-reference is a circular reference and is blocked at compile time. Formula fields *can* reference other formula fields. Explanation is accurate and the 5,000-byte compile limit it cites is correct.

**Formatting:** the explanation is missing its `Why:` label and runs straight on from the answer line.

---

### Topic 1 — Q224. You must run a report before printing or exporting it
**Your answer:** A (True)
**Verdict: CORRECT**

Printable View and Export Details act on generated output, so they live on the run page rather than in the builder. Explanation is accurate.

---

### Topic 1 — Q225. Which editions allow customizing profiles?
**Your answer:** D (Enterprise, Unlimited, and Developer)
**Verdict: CORRECT**

D is right. Custom profiles require Enterprise tier or above, plus Developer Edition. Group and Contact Manager are limited to standard profiles.

Small completeness point: **Performance Edition** also supports custom profiles. Your explanation mentions it in the body but the option list doesn't — that is the question's limitation, not yours.

---

### Topic 1 — Q226. How many profiles load in a single list view with Enhanced Profile Management?
**Your answer:** C (200)
**Verdict: CORRECT / CAVEAT**

C matches the legacy key.

**Caveat:** this is deep UI trivia about a Classic-era feature, and the supporting reasoning ("all Salesforce list views paginate at 200") is a generalisation rather than a documented rule for this specific screen. Low confidence, low exam value — I would not revise from it.

**Formatting:** option D again uses European notation, `1.000`.

---

### Topic 1 — Q227. Which is a capability of the new Service Cloud console?
**Your answer:** B, C, E
**Verdict: CORRECT / CAVEAT** — **the explanation argues for a fourth option it does not select.**

B, C and E are correct and match the "Choose 3" instruction.

**The inconsistency:** after justifying B, C and E, your explanation adds a full positive justification for **option A** — *"The Console includes split views/pinned list views that allow navigation across records without leaving the main workspace view"* — and then jumps to "Why Option D is Incorrect." **Option A is never rejected.** A reader is left thinking four options are true in a question that asks for three.

This is the same defect pattern as Q166, where the explanation undermines its own answer.

**Action needed:** either delete the paragraph about A, or replace it with an explicit reason A is excluded (split view is a later addition, not a capability of the *original* console this legacy question describes).

---

### Topic 1 — Q228. Who is Last Modified By after an immediate workflow field update?
**Your answer:** A (User A)
**Verdict: CORRECT**

Immediate actions run inside the user's own transaction, so the change is attributed to the user who saved.

Your explanation makes the contrast that actually makes this question worth keeping: **the Default Workflow User appears only for time-dependent actions**, because those fire asynchronously later. Accurate and complete — a genuinely good explanation.

---

### Topic 1 — Q229. How do Locale settings affect an exported CSV?
**Your answer:** B (It determines the delimiter)
**Verdict: CORRECT / CAVEAT**

B is the keyed answer and the underlying idea is real — locales that use a comma as the decimal separator export with semicolon delimiters.

**Caveat:** encoding (option C) is also a genuine export consideration, though it is chosen explicitly at export time rather than derived from locale. B is the better answer; just be aware C is not absurd.

---

### Topic 1 — Q230. Two sources from which cases can be created
**Your answer:** C, D (Email-to-Case, Connect for Outlook)
**Verdict: CORRECT / OBSOLETE** — correct by elimination.

A and B are clearly wrong (Web-to-**Lead** creates leads; "Web-to-Web" does not exist), so C and D are what remain.

**Worth noting:** the obvious answer — **Web-to-Case** — is not offered at all, which is why this question feels off. And **Connect for Outlook is retired**, replaced by the Outlook Integration. Consider rewriting option A as "Web-to-Case" to make this a useful question, pairing with Topic 2 Q95 where Web-to-Case and Email-to-Case are the correct answers.

---

### Topic 1 — Q231. Which report format summarizes in a grid with row and column totals?
**Your answer:** B (Matrix)
**Verdict: CORRECT**

Matrix groups on both axes and totals both. Explanation is accurate and consistent with Q60 and Q239.

---

### Topic 1 — Q232. Every profile, including Customer Portal profiles, must have one visible app
**Your answer:** B (False)
**Verdict: CORRECT**

The trap is "including Customer Portal users" — portal profiles are the exception because apps are not available to them. Explanation is accurate.

---

### Topic 1 — Q233. Which statements are true about Cloud Scheduler?
**Your answer:** A, B, C, E
**Verdict: CORRECT / OBSOLETE**

All four correct options identified, and D is correctly rejected — it states the opposite of Cloud Scheduler's core purpose.

**Obsolete:** **Cloud Scheduler was retired by Salesforce.** No current value.

**Formatting:** the answer is written `AbCE` with inconsistent capitalisation. This recurs throughout the file — `Abe`, `ACFe`, `Ad`, `C.d`, lowercase `b` and `c`. Normalise to `A, B, C, E` style at cleanup.

---

### Topic 1 — Q234. Clients do NOT have to enable Customizable Forecasting before Territory Management
**Your answer:** B (False)
**Verdict: CORRECT / OBSOLETE**

Correct — the prerequisite was mandatory for **original** Territory Management. Consistent with Q161.

> **Duplicate group** — second of four occurrences (Q161, Q234, Q288, Q440). Note this one is phrased as a negative ("do not have to"), so the answer flips to False while testing the identical fact. Keep one version only, and prefer the positive phrasing.

---

### Topic 1 — Q235. Converting a lead when an account and contact of the same name exist
**Your answer:** B (You can choose to update the existing account and contact)
**Verdict: CORRECT**

Salesforce surfaces the match and lets the user attach to the existing records or create new ones. Nothing is overwritten silently and the conversion does not fail. Explanation is accurate.

---

## Batch 7 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 13 | 210, 213, 215, 216, 217, 221, 223, 224, 225, 228, 231, 232, 235 |
| CORRECT / OBSOLETE | 8 | 208, 209, 212, 220, 222, 230, 233, 234 |
| CORRECT / CAVEAT | 5 | 211, 214, 226, 227, 229 |
| DISPUTED | 0 | — |
| INCORRECT | 0 | — |
| BLANK / MISSING | 2 | **218, 219** |

**Headline for this batch — no wrong answers, but three things to fix:**

1. **Q227** — the explanation fully justifies option **A** and then never excludes it, in a "Choose 3" question answered B, C, E. Same defect as Q166. Delete or rewrite that paragraph.
2. **European decimal notation** — `1.000` / `2.000` in Q214 and Q226 read as 1 and 2 in English. A systemic find; recurs later in the file.
3. **Q211** — neither the stem nor option B is valid formula syntax. The concept is right; the expressions are incomplete fragments.

**Relevance note:** 8 of 26 questions here are obsolete — Report Wizard, Cloud Scheduler, Connect for Outlook, Classic UI settings, original Territory Management, Enhanced Profile UI. As before, your answers are right; the content simply isn't examinable.

**Strong explanations this batch:** Q210 (activity archiving rules stated exactly) and Q228 (immediate vs time-dependent attribution) are both excellent.

---

# BATCH 8 — File: `Admin-201 Topic 1.md`, Questions 236–282

> Numbering note: Q253, Q254, Q260, Q261, Q262, Q264, Q267, Q268, Q269, Q273, Q278 and Q279 **do not exist** in the file. The sequence jumps 252 → 255, 259 → 263, 263 → 265, 266 → 270, 272 → 274, 277 → 280. Logged in the numbering section.

---

### Topic 1 — Q236. You cannot use the browser's print function to print reports
**Your answer:** B (False)
**Verdict: CORRECT**

You can print a report straight from the browser (Ctrl+P / Cmd+P). Salesforce also gives you **Printable View**, which renders a clean, print-friendly version. Explanation is accurate and complete.

*Formatting:* `236.You can not...` — missing space after the number (defect F5).

---

### Topic 1 — Q237. Manages the complete lifecycle of customer service
**Your answer:** D (Service Cloud 2)
**Verdict: CORRECT / OBSOLETE**

Right choice. Service Cloud is the customer-service product: case management, Knowledge/Solutions, web self-service and live chat.

**Obsolete:** "Service Cloud **2**" was the 2009 marketing name. It is simply **Service Cloud** today, and the modern feature list is Case Management, Knowledge, Omni-Channel, Web-to-Case, Email-to-Case, Chat and Messaging. No current exam will use the "2" suffix.

*Typos in the stem:* `service,from` and `includingWeb` are both missing a space.

---

### Topic 1 — Q238. How many workflow rules can you create per entity?
**Your answer:** C (20)
**Verdict: CORRECT / OBSOLETE**

Correct against the legacy key, and your explanation is unusually good because it *states* that it is legacy and gives the modern number.

**Current Salesforce limits:** **50 active** workflow rules per object and **500 total** per object. Also note that since Winter '23 you can no longer create *new* workflow rules at all — Salesforce Help directs you to **Flow** (Migrate to Flow tool). Keep the question only if you are practising for an old dump.

*Formatting:* `238.How many...` — missing space (F5).

---

### Topic 1 — Q239. Default report format in report builder
**Your answer:** B (Tabular)
**Verdict: CORRECT**

Correct in both Classic report builder and Lightning. A new report starts as a simple row-and-column list with no groupings; adding a grouping is what promotes it to Summary or Matrix. Explanation is accurate and complete.

---

### Topic 1 — Q240. Which of the following is part of Sales Cloud 2?
**Your answer:** ACFe → A, C, E, F
**Verdict: CORRECT / OBSOLETE**

Accounts and Contacts, Marketing and Leads, Content Library, Opportunities and Quotes are all Sales Cloud. Cases and Solutions are Service Cloud. The keyed answer is right.

**Obsolete:** same problem as Q237 — "Sales Cloud 2" is retired branding, and "Content Library" (Salesforce CRM Content) has been superseded by **Files / Content Libraries in Lightning**.

*Formatting:* `ACFe` mixes cases (F3). Should read `A, C, E, F`.

---

### Topic 1 — Q241. Which are standard Salesforce applications?
**Your answer:** Ad → A, D (Ideas, Call Center)
**Verdict: CORRECT / CAVEAT**

The answer is right for the legacy question. Campaigns is an **object/tab**, not an app; "Administration" and "Sales Center" are not standard app names.

**Your explanation has a bug:** it says *"Ideas and Call Center (along with Sales, Call Center, Community, Ideas, and Chatter)"* — it repeats Call Center and Ideas inside its own list. Clean it up to: standard Classic apps were **Sales, Call Center, Marketing, Community, Ideas, Content, Salesforce Chatter, Site.com**.

**Also outdated:** in Lightning Experience the standard apps are **Sales, Service, Marketing, Salesforce Chatter, App Launcher, Lightning Usage App, Bolt Solutions** and similar. Ideas and Call Center are no longer standard Lightning apps.

---

### Topic 1 — Q242. What can an admin customise for the Service Cloud console?
**Your answer:** Abe → A, B, E
**Verdict: CORRECT / CAVEAT**

The answer is right: an admin can set whether a record opens as a **primary tab or subtab**, choose the **fields in the highlights panel** (via the mini page layout / compact layout), and pick the **objects shown in the navigation tab**.

**Your explanation gives the wrong reason for ruling out C.** The real reason is a documented restriction: **interaction logs can only be added to objects that *have* an Activity History related list**. Option C says "for objects **without** an Activity History related list" — that is precisely the case Salesforce does *not* support. That is a much cleaner kill than "managed through separate CTI configurations".

**Option D** is wrong because in the console the SoftPhone is **always in the footer** — there is no footer-or-sidebar choice.

**Obsolete:** the Classic Service Cloud Console is retired; the modern equivalent is the **Lightning Console app**, where highlights panels are driven by compact layouts and navigation is set in the Lightning App Builder / App Manager.

*Formatting:* `Abe` mixes cases (F3).

---

### Topic 1 — Q243. Consideration when creating a drill-to-detail dashboard component
**Your answer:** D
**Verdict: CORRECT**

Correct and well explained. Salesforce Help ("Set Dashboard Component Drill Down") lists **Record Detail Page** as an available drill-down destination **only when the source report is grouped by record name, record owner, or feed post** — because that grouping is what identifies a single record to open. Nothing missing.

---

### Topic 1 — Q244. What can a Chatter Free user access?
**Your answer:** ACDE → A, C, D, E
**Verdict: CORRECT**

Correct. The Chatter Free licence grants the collaboration surface — **People, Profiles, Groups, Files** — and nothing else. No CRM objects (so no Leads), no reports/dashboards, and no Salesforce CRM Content libraries. Explanation is accurate.

---

### Topic 1 — Q245. Relationship with no effect on deletion, ownership or security
**Your answer:** A (Lookup Relationship)
**Verdict: CORRECT / CAVEAT**

Correct, and the explanation is right that a lookup field is **optional by default**.

**One clarification worth adding:** a lookup *can* be made required if you tick "Required" on the field — the point is that it isn't required *by design*, unlike master-detail, where the relationship field is always required on the child. Master-detail also drives ownership, sharing and cascade delete; lookup does not.

*Typos in the options:* `B. Master-Datail Relationship` (should be Master-Detail) and `C. Master-Detail-Sub detail Relationship` (not a real Salesforce term).

---

### Topic 1 — Q246. Deleting a Contact deletes its Campaign Member record
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. Campaign Member is a junction record that cannot exist without its Lead or Contact, so deleting the Contact cascades the deletion to its campaign history. (Restoring the Contact from the Recycle Bin restores the campaign members with it.) Explanation is accurate.

*Typo in the stem:* `it's associated` should be `its associated`.

---

### Topic 1 — Q247. Validation rules are not supported in which edition?
**Your answer:** F (All editions are supported)
**Verdict: CORRECT / CAVEAT**

Correct for the options listed. Validation rules are available in Contact Manager, Group, Essentials, Professional, Enterprise, Performance, Unlimited, Developer and Database.com.

**Small completeness gap:** the only edition that never had validation rules was **Personal Edition**, which is retired and isn't in the option list. Saying that outright makes the "all of the above" conclusion airtight rather than assumed.

---

### Topic 1 — Q248. True statements about the approval process
**Your answer:** AcD → A, C, D
**Verdict: CORRECT / CAVEAT**

The answer is right, and your per-option breakdown is the best-written explanation in this batch.

**Two precision points to add:**
1. **A** is true, but the exact rule is: a record in an approval process is locked, and who may edit it depends on the process's **Record Editability** setting — either "Administrators ONLY" or "Administrators OR the currently assigned approver". Admins can always edit.
2. **C** is true only when **"The approver's delegate may also approve this request"** is ticked on the approval step, *and* a Delegated Approver is set on the user record. Also note a delegated approver can approve/reject but **cannot reassign** the request.

*Formatting:* `AcD` mixes cases (F3).

---

### Topic 1 — Q249. Printable View does not save all the report formatting
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. **Printable View** keeps groupings, subtotals and headers; **Export Details** strips formatting and gives you raw rows. Your explanation draws exactly that contrast, which is the point of the question.

---

### Topic 1 — Q250. What can be synced using the new Salesforce for Outlook?
**Your answer:** BD (Events, Contacts)
**Verdict: CORRECT / OBSOLETE**

Correct for the options given — Salesforce for Outlook synced **Contacts, Events and Tasks** only. Leads and custom objects were never syncable.

**Obsolete:** **Salesforce for Outlook was fully retired in June 2021.** The replacements are the **Outlook Integration** (side panel) plus **Einstein Activity Capture** for contact/event sync. This question is unexaminable today; keep it only for legacy dump practice.

---

### Topic 1 — Q251. Time-dependent workflow will not work with which evaluation criteria?
**Your answer:** B ("Every time a record is created or edited")
**Verdict: CORRECT / OBSOLETE**

Correct. Salesforce blocks time-dependent actions on **"created, and every time it's edited"**, because every save would re-queue the time triggers. Your reasoning is exactly right.

**Obsolete:** workflow rules can no longer be created; the modern equivalent is a **scheduled path** in a record-triggered Flow.

> Cross-check: this is the same underlying fact as **Q67**, which is the one question in Topic 1 with a genuinely wrong `Answer:` line. Q251 states it correctly — use Q251's wording when you fix Q67.

---

### Topic 1 — Q252. Up to 25 custom lookup fields can be defined per object
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT**

Correct by today's limits: **40 relationship fields per object** (lookup + master-detail combined), raisable to **50** by Salesforce Support, with a maximum of **2 master-detail** relationships per object.

**Caveat for you to be aware of:** *25* was the real limit in older releases, which is why this question exists. Some legacy answer keys mark it **True**. Your "False" is correct against current documentation — just don't be surprised if a dump disagrees.

*Formatting:* the stem is split — `252.` sits alone on its line with the question text on the next line (F6).

---

### Topic 1 — Q255. Can a Standard User profile import members into a campaign?
**Your answer:** c → C ("Only if they have 'Import Campaign Members' permission checked")
**Verdict: CORRECT / CAVEAT — the option wording names a permission that doesn't exist**

C is the best available answer, so keep it. But the question is sloppy, and **your own explanation quietly contradicts the option it endorses**.

**The real requirement (Salesforce Help — "Import Campaign Members"):**
- the **Marketing User** checkbox ticked on the user's *user record*, **and**
- the **"Import Leads"** (Marketing User) permission on the profile or a permission set, **and**
- Read/Edit on Campaigns.

There is no profile permission literally called *"Import Campaign Members"*. Option D ("Modify All Data") is wrong because that permission on its own still doesn't unlock the campaign import wizard without Marketing User.

**Recommendation:** reword option C to *"Only if the Marketing User checkbox and Import Leads permission are enabled"*, then the answer and the explanation agree.

---

### Topic 1 — Q256. The record owner is a user or a queue with control over a record
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. Every record has exactly one owner, and that owner may be a **user** or a **queue**. Queues are supported on Leads, Cases, Orders, Service Contracts, Knowledge articles and custom objects — but **not** on Accounts, Contacts or Opportunities, which is a detail worth adding.

*Formatting:* in this question the `Why:` block is placed **after** the `Timestamp:` line instead of before it. New defect **F11**.

---

### Topic 1 — Q257. Standard reports are visible through the Reports search
**Your answer:** ⚠ **MISSING — there is no `Answer:` line**
**Verdict: ANSWER LABEL MISSING (flagged as you requested)**

The file reads:

```
A. True

B. False

B. False          ← this line is an option, not an answer
Why: ...
```

The option `B. False` is simply pasted a second time where the `Answer:` line should be. Any quiz parser will read this question as **unanswered**.

**Fix:** change the third line to `Answer: B`.

**Is B right?** Yes, for the legacy Classic behaviour this question targets — the built-in standard reports live inside standard report folders and are not returned by the Reports tab search; you browse to them. Note that in Lightning this is murkier: the Reports tab's "All Reports" search still does not surface the old standard reports, so the answer holds, but the phrase "Reports search" is ambiguous enough that I'd reword the stem to *"…through the Reports tab search box"*.

---

### Topic 1 — Q258. A System Administrator can edit a profile to…
**Your answer:** A, B
**Verdict: CORRECT**

The answer is right. Tab visibility (Tab Hidden / Default Off / Default On) and the **Mass Email** administrative permission are both profile-level settings. Denying access to *other users'* leads is **record-level** access, controlled by OWD + role hierarchy + sharing rules — not the profile.

**Formatting problem:** the `(Note: Depending on the specific practice exam question bank, A, B or A, B, C may be marked as correct…)` line sits between the answer and the explanation. That is a hedged answer (defect **F2**) and it undermines a question you have got right. Delete the note and move the nuance into the `Why:` body, where you already handle option C properly.

---

### Topic 1 — Q259. What is a Dashboard made of?
**Your answer:** ACD → A, C, D
**Verdict: CORRECT**

Correct. Dashboard component types are **chart, table, gauge, metric** and (in Classic) Visualforce page. A summary report is the **source** that feeds a component, not a component itself — your explanation makes that distinction well.

**Formatting problem — defect F1:** this question has **two answer lines back to back**:

```
Answer: ACD
 Answer: A, C, D
```

They agree, so nothing is being taught wrongly, but delete one. Keep `Answer: A, C, D`.

---

### Topic 1 — Q263. Maximum number of values in a picklist
**Your answer:** D
**Verdict: CORRECT**

Correct — **1,000 active values** per custom picklist field. Explanation is accurate.

**Formatting problem — defect F4:** the options are written `D. 1.000` and `E. 2.000` using European decimal points. In English notation `1.000` reads as *one*. Change to `1,000` and `2,000`.

**Completeness:** add the second half of the limit — the total character count across all values in one picklist is capped (15,000 characters), and each value is capped at 255 characters. Exam questions sometimes pair the two.

---

### Topic 1 — Q265. Maximum number of time triggers per workflow rule
**Your answer:** B (10)
**Verdict: CORRECT / OBSOLETE**

Correct: **10 time triggers per workflow rule**, each holding up to **40 time-dependent actions**. Your explanation states both numbers, which is exactly right.

**Obsolete:** same note as Q238/Q251 — workflow rules are closed to new creation; the Flow equivalent is scheduled paths.

*Formatting:* `Answer: B. 10` mixes the letter and the value. Use `Answer: B` for consistency (F3).

---

### Topic 1 — Q266. "Salesforce is which of the following"
**Your answer:** A, B, C, D (all of the above), with a note
**Verdict: DISPUTED — the question is not answerable as written**

Your reasoning is fine, but the question itself is broken and I would **delete it**, not fix it.

**Why it's broken:** the stem asks what Salesforce "is", then lists four *capabilities*, with no instruction on how many to pick and no "All of the above" option. Your answer line then has to invent one, and the inline `(Note: If this is a single-select question…)` hedge (defect **F2**) admits it could be A alone. A question whose answer depends on guessing the author's intent cannot teach you anything.

**If you keep it,** rewrite the stem as *"Which of the following are capabilities of the Salesforce platform? (Select all that apply)"* and add `E. All of the above`. Then A, B, C, D is unambiguously right.

---

### Topic 1 — Q270. The formula editor may be used everywhere EXCEPT
**Your answer:** c → C (Default values on standard fields)
**Verdict: CORRECT / OBSOLETE**

Correct. Salesforce lets you set a **formula-based default value on custom fields only** — the Default Value field simply isn't offered on standard fields. Your explanation is accurate.

**Obsolete:** option A, S-Controls, was retired in 2010 (superseded by Visualforce, then Lightning Components). Orgs created after that date cannot create them at all.

**Minor precision:** some *standard picklists* do let you mark a value as the default — that is a picklist value setting, not a formula default. Adding that sentence prevents a learner from over-generalising.

*Formatting:* lower-case `c` (F3).

---

### Topic 1 — Q271. Sales Team read/write access lets you extend sharing
**Your answer:** b → B (False)
**Verdict: CORRECT**

Correct and well explained. Read/Write on an Opportunity Team lets you **view and edit** the record; it does not give you **Full Access**, which is what manual sharing requires. Manual sharing is reserved for the **record owner, anyone above the owner in the role hierarchy, and users with Modify All Data / Modify All**. Nothing missing.

*Formatting:* lower-case `b` (F3).

---

### Topic 1 — Q272. A workflow rule can only be triggered when a record is created
**Your answer:** B (False)
**Verdict: CORRECT / OBSOLETE**

Correct, and your explanation lists all three evaluation criteria accurately — this is the clearest statement of them anywhere in the file.

> **Use this text to fix Q67.** Q67's `Answer:` line says B while its own body says C. The third criterion as you word it here — *"created, and any time it's edited to subsequently meet criteria"* — is the correct answer for Q67.

**Obsolete:** workflow rules themselves, as noted above.

*Formatting:* `Answer: B. False` mixes letter and value (F3).

---

### Topic 1 — Q274. Complimentary document storage can cover a general storage overage
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. **Data storage** and **File storage** are separate, non-transferable pools. Running out of data storage cannot be offset by unused file storage. Your explanation is accurate and complete.

---

### Topic 1 — Q275. To make a field required, which is used? (best answer)
**Your answer:** A (Page Layout)
**Verdict: CORRECT / CAVEAT**

A is right among the options offered, and your explanation correctly kills B and C: **Field-Level Security only offers Visible and Read-Only — it has no "Required" setting**, and Profiles administer FLS rather than requiredness.

**What's missing:** the strongest way to make a field required is the **Required checkbox on the field definition itself**, which enforces it everywhere — page layouts, API, Data Loader, Flows. A page-layout "Required" tick only enforces it in the UI on *that layout*. Your note gestures at this; state it plainly, because the distinction is genuinely examinable.

**Typo in the stem:** `which of the following is used) (Pick the best possible answer)` — the first `)` should be `?`.

---

### Topic 1 — Q276. What can NOT be shown with an S-Control Dashboard component?
**Your answer:** A — **but your own explanation says the key is B**
**Verdict: DISPUTED — recommend deleting this question (defect F8)**

This is the same failure mode as Q166 and Q227. The `Answer:` line says **A**, then the body opens with *"Official Legacy Exam Key: … **B. External feed of data** is listed as the targeted answer key"* and only afterwards argues for A. A learner reading this cannot tell what to remember.

**My recommendation: remove the question.** S-Controls were **retired in 2010** and S-Control dashboard components no longer exist in any org. There is no correct answer to defend and no exam value in resolving it.

**If you insist on keeping it,** pick one position and delete the other: the technically defensible answer is **A**, because an S-Control could call out to external systems (so B, C and D were all achievable) but could not amalgamate two existing dashboard components into one.

*Also suspicious:* the timestamp reads `April 4, 2025` on a question about technology retired in 2010 — the timestamps in this file are not reliable provenance.

---

### Topic 1 — Q277. A new list view can be created from within the console
**Your answer:** b → B (False)
**Verdict: CORRECT / OBSOLETE**

Correct for the Classic Service Cloud Console: the console's left-hand pane lets you **select** an existing list view but not create one; you had to go to the object's standard tab to build a new view.

**Obsolete:** in the **Lightning Console** this is no longer true — list views are created from the object home page inside the console app just like anywhere else. The question only holds for the retired Classic console.

*Formatting — defect F6:* the answer line is `**Answer: b` with a stray unclosed `**` markdown artefact. Should be `Answer: B`.

---

### Topic 1 — Q280. Which of the following is a standard Profile?
**Your answer:** b,d → B, D (Marketing User, Contract Manager)
**Verdict: CORRECT**

Correct. The standard profiles are **System Administrator, Standard User, Read Only, Solution Manager, Marketing User, Contract Manager** (plus the portal/Chatter ones). "Sales User" and "Invoice Manager" are not standard.

**Formatting problem:** the explanation ends with *"On older legacy ADM-201 exams where only one answer could be picked, D (or B) is marked as correct"* — another hedge (**F2**). The stem says "is a standard Profile" (singular) while your answer gives two. Fix the stem to *"Which of the following **are** standard Profiles? (Choose 2)"* and the hedge becomes unnecessary.

---

### Topic 1 — Q281. Who may be assigned a workflow task? (5 correct answers)
**Your answer:** A, C, D, E, F
**Verdict: CORRECT / CAVEAT**

The answer is right. Workflow task assignees can be a specific user, the record owner, the record creator, an account team role, an opportunity (sales) team role, or a role/queue-style target.

**Your note is undermining a correct answer.** It says *"While the question asks to select 5 options, in actual Salesforce functionality a Workflow Task can only be assigned to a single user — meaning Option B is strictly incorrect."* That's true, but it isn't a conflict: **excluding B from six options leaves exactly five (A, C, D, E, F)**, which is what the stem asked for. The question and the answer agree perfectly. Delete the note (defect **F2**) — it makes a clean question look doubtful.

**Obsolete:** workflow rules again; in Flow you use a **Create Records** element to generate a Task, and the assignee is set by a formula or variable.

---

### Topic 1 — Q282. Email template formats (choose 4)
**Your answer:** ABcE → A, B, C, E
**Verdict: CORRECT**

Correct. The four Classic email template types are **Text, HTML (with Letterhead), Custom HTML, and Visualforce**. XML is not a template type. Explanation is accurate and complete.

**Worth one modern line:** Visualforce email templates are Classic-only; in Lightning you build **Lightning Email Templates** (with Enhanced Letterheads), and Visualforce templates are not creatable from the Lightning UI.

*Formatting:* `ABcE` mixes cases (F3).

---

## BATCH 8 SUMMARY (Q236–Q282, 35 questions)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 14 | Q236, Q239, Q243, Q244, Q246, Q249, Q256, Q258, Q259, Q263, Q271, Q274, Q280, Q282 |
| CORRECT / OBSOLETE | 9 | Q237, Q238, Q240, Q250, Q251, Q265, Q270, Q272, Q277 |
| CORRECT / CAVEAT | 9 | Q241, Q242, Q245, Q247, Q248, Q252, Q255, Q275, Q281 |
| DISPUTED | 2 | Q266, Q276 |
| ANSWER MISSING | 1 | Q257 |
| INCORRECT | 0 | — |

**Headline:** no wrong answers in this batch. **Q257 has no `Answer:` line at all** — that is the one thing that must be fixed. **Q276 contradicts itself** (answer A, explanation says the key is B) and should be deleted along with **Q266**, which is unanswerable as written.

**Numbering:** 12 missing numbers in this range alone (253, 254, 260, 261, 262, 264, 267, 268, 269, 273, 278, 279).

**Relevance note:** 9 of 35 are obsolete, dominated by **workflow rules** (Q238, Q251, Q265, Q272, Q281 — all now Flow), the retired **Cloud 2 branding** (Q237, Q240), **Salesforce for Outlook** (Q250, retired June 2021) and **S-Controls** (Q270, Q276).

**Strong explanations this batch:** Q248 (option-by-option approval breakdown) and Q272 (the three workflow evaluation criteria, stated cleanly) are both excellent — and Q272 is the text you should copy into Q67 to fix it.

---

# BATCH 9 — File: `Admin-201 Topic 1.md`, Questions 283–348

> Numbering note: this range spans 66 numbers but contains only **33 questions** — half the numbers are missing. Full list in the numbering section.
>
> **This is the worst batch so far for accuracy: three answers are wrong (Q306, Q317, Q333) and three more questions are unsound (Q301, Q304, Q319).**

---

### Topic 1 — Q283. Universally required fields always display on edit pages regardless of FLS
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. Ticking **Required** on the field definition makes the field *universally required*: it is added to every page layout for that object, it cannot be removed, and it **overrides Field-Level Security** — a universally required field is always visible and editable on edit pages even if FLS says Hidden or Read-Only. Your explanation says this accurately.

**One detail worth adding:** universally required fields also **cannot be blank on import or via the API**, which is the real reason Salesforce overrides FLS — otherwise a user could be blocked from saving a record they can't complete.

*Formatting:* `Answer: A. True` mixes letter and value (F3).

---

### Topic 1 — Q284. Changing the data type of a custom field used in lead conversion deletes the mapping
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. Salesforce Help ("Map Custom Lead Fields") states that if you change the data type of a custom lead field that participates in a mapping, the mapping is removed and must be re-created.

**Path is outdated:** your explanation says `Setup > Lead Custom Field Mapping`, which is the Classic path. In Lightning it is **Setup > Object Manager > Lead > Fields & Relationships > Map Lead Fields**. Worth updating so a learner can actually find it.

**Add the sibling rule:** the mapping also requires **compatible data types** between the lead field and the target Account/Contact/Opportunity field — that is *why* changing the type breaks it.

*Formatting:* `Answer: A. True` (F3).

---

### Topic 1 — Q286. Default OWD for Calendar access
**Your answer:** B (Hide Details and Add Events)
**Verdict: CORRECT / CAVEAT**

The answer is right — **Hide Details and Add Events** is the factory default for Default Calendar Access. Your descriptions of each level are accurate.

**Two problems:**
1. The `(Note: Depending on the specific Salesforce practice exam bank…)` line is another hedge (**F2**) sitting between the answer and the explanation. This one is simply wrong to include — the default is documented and not disputed. Delete it.
2. Your explanation lists four access levels; there are **five**. The missing one is **Full Access** (view details, add events, *and* edit/delete existing events). Add it — exam questions do ask which level allows editing someone else's event.

*Formatting:* `Why:Salesforce` is missing a space; `Answer: B. Hide Details and Add Events` mixes letter and value (F3).

---

### Topic 1 — Q288. Prerequisites before enabling Territory Management (choose 2)
**Your answer:** A, B
**Verdict: CORRECT / OBSOLETE**

Correct for original Territory Management: Customizable Forecasting had to be enabled first, and the deployment guide steps had to be followed. C and D name profiles that don't exist as prerequisites.

**Obsolete:** original Territory Management was **retired in Summer '21**. Its replacement, **Enterprise Territory Management**, has *no* Customizable Forecasting prerequisite — it works with Collaborative Forecasts. So the fact this question tests is now the opposite of current behaviour.

> **Duplicate cluster:** the Territory Management + Customizable Forecasting prerequisite is now tested **four times** — Q161, Q234, Q288 and Q440. Keep one.

---

### Topic 1 — Q291. What is the Salesforce Partner Portal? (choose 2)
**Your answer:** A, D
**Verdict: CORRECT / OBSOLETE**

A and D match the legacy key: Partner Portals could be branded with your logo, and they provided a collaborative space for channel partners.

**Obsolete:** the **Partner Portal was retired** and replaced by **Experience Cloud** (Partner Central). No current exam references it.

**Question defect:** a "Choose 2" question should not contain option **E. All of the above** — those two instructions contradict each other. If you keep the question, delete option E.

*Formatting:* the answer line restates the full option text (`Answer: A. Use your company logo on a Partner Site & D. Create Interactive Communities`) instead of `Answer: A, D` (F3).

---

### Topic 1 — Q296. Custom picklists can be either controlling or dependent fields
**Your answer:** A (True)
**Verdict: CORRECT**

Correct and well explained. A custom picklist is the only field type that can play **both** roles in a field dependency.

**Useful companion facts** (they pair with Q297, and exams test them together):
- **Standard picklists** can be controlling fields but **never** dependent fields.
- **Checkboxes** can be controlling fields but never dependent.
- **Multi-select picklists** can be dependent fields but never controlling.

---

### Topic 1 — Q297. Maximum number of values in a controlling field
**Your answer:** C (300)
**Verdict: CORRECT**

Correct — **300**. This is one of the best explanations in the entire file: it gives the number *and* all four dependency rules (standard picklists can control but not depend, multi-selects can depend but not control, checkboxes can control, and the 300 cap applies to a picklist acting as both). Nothing to add.

---

### Topic 1 — Q301. Sidebar search does not search the following (choose 3)
**Your answer:** BCe → B, C, E (Documents, Products, Solutions)
**Verdict: DISPUTED — recommend deleting this question**

I cannot defend this answer, and I cannot construct a defensible one.

**The problem:** Classic Sidebar Search *did* return **Documents**, **Products** and **Solutions** — all three were in the standard search index and appeared in sidebar/global search results. The items Classic sidebar search genuinely did **not** return were **Reports and Dashboards**, which you had to find from their own tabs. So the keyed answer names three things that *are* searchable and excludes the one thing (Reports, option D) that isn't.

With only five options and just one true exclusion available, a "Choose 3" question cannot be built from this option set.

**Obsolete anyway:** Classic Sidebar Search no longer exists. Lightning uses a single global search box with configurable scope. **Recommendation: delete.**

*Formatting:* the question number uses a **comma**, not a period — `301,` — which is why automated parsing skipped it (F6).

---

### Topic 1 — Q302. Workflow tasks are NOT tracked in Activity History and can be reported on
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT**

The answer is right. A workflow task action creates a real **Task** record, so it appears in the activity related lists and is fully reportable.

**Two things to fix:**
1. **The stem contains garbage:** `…and can be reported on MMM?` — `MMM` is a stray artefact (**F6**). Delete it.
2. **Your explanation is imprecise.** It says the task is logged under Activity History "upon creation". It is not: an open workflow task sits in the **Open Activities** related list, and only moves to **Activity History** once its status is set to Completed. That distinction is itself examinable.

**Structural note:** the stem is a compound statement ("NOT tracked… **and** can be reported on"). Because the first half is false, the whole statement is false — but compound true/false stems are poor question design. Split it into two questions.

---

### Topic 1 — Q304. Branded meeting invitations and a branded scheduling site
**Your answer:** "A or B" — no single answer given
**Verdict: DISPUTED — recommend deleting this question**

`Answer: A or B` is not an answer (**F2**). A quiz tool cannot score it and a learner cannot revise from it.

**Why I would delete rather than fix:** the question is about **Cloud Scheduler** ("New Meeting Request"), which Salesforce **retired in Summer '16**. The keyed answer, B ("Add a company logo to meeting requests in Salesforce"), refers to a setting in Activity Settings that no longer exists. Your own note says as much.

**If you keep it,** the answer is **B** — the question specifically asks about branding the *meeting request site*, which was a dedicated Cloud Scheduler setting. Option A (a branded email template) brands the invitation email only, not the scheduling page, so it doesn't satisfy the second half of the requirement.

*Formatting:* no `Why:` label — the body starts with `Key Context & Nuance` (F9).

---

### Topic 1 — Q306. Visibility into Lead and Contact participation in a Trade Show (choose 2)
**Your answer:** "AC", then a second answer line saying "B, C (or A, C…)"
**Verdict: INCORRECT — the correct answer is C and D**

This question has **two `Answer:` lines that disagree with each other** (F1), and neither is right.

**Why A is impossible:** Campaign Member is the **child** of Lead/Contact. A cross-object formula can only reach **upward**, from child to parent. You **cannot** create a formula field on Lead or Contact that pulls data from a Campaign Member record. Option A describes something Salesforce does not allow, so it can never be a correct answer.

**Why D is right:** the direction in option D is the legal one — a formula field **on Campaign Member** referencing **Lead or Contact** fields. That surfaces prospect detail (company, title, region) directly in the campaign member view, which is exactly "more visibility into participation".

**Why C is right:** customising the **Campaign History** related list on the Lead and Contact page layouts lets reps see which campaigns a prospect is in and their member status (Sent, Responded, Attended).

**Why B is wrong:** a workflow alert is a *notification*, not *visibility built into the application*. It also fires once and tells you nothing about historical participation.

**Action:** replace both answer lines with a single `Answer: C, D`, and rewrite the explanation around the child→parent formula direction rule.

*Formatting:* body uses `Key Context & Breakdown` instead of `Why:` (F9).

---

### Topic 1 — Q307. How does an agent submit an article for publishing? (choose 3)
**Your answer:** A, D, E — with an "or A, B, D" hedge
**Verdict: CORRECT / CAVEAT**

**A, D, E is right.** Promoting an Answer to a draft article, submitting an article at case closure (the "Submit Articles from Cases" setting), and publishing directly with the Manage Articles permission are the three routes.

**Delete the hedge.** Option B ("re-assign an article to the publishing queue") is simply wrong — Salesforce Knowledge assigns draft articles to **a user**, not to a queue. There is no "publishing queue" object. Presenting B as a coin-flip alternative to E teaches a fact that doesn't exist (**F2**).

**Obsolete:** **Salesforce Answers and Chatter Answers were retired**, so option A's mechanism no longer exists. In Lightning Knowledge the permission is **Manage Salesforce Knowledge** plus article actions assigned by permission set.

---

### Topic 1 — Q309. True statements regarding dependent lookups (choose 2)
**Your answer:** B, D
**Verdict: CORRECT**

Correct. A dependent lookup (lookup filter) **restricts which records the lookup returns** based on field values, and it is configured **on the relationship field itself** — during creation or edit of a lookup or master-detail field. Explanation is accurate.

**One addition:** lookup filters can be **Required** (blocks the save) or **Optional** (user can override by pasting an ID / using search). That distinction shows up in exam questions about data integrity.

---

### Topic 1 — Q311. Capabilities of Cloud Scheduler (choose 2)
**Your answer:** A, B
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy feature: Cloud Scheduler let a user propose several meeting times and suggested slots by reading Salesforce users' calendars. C (Outlook sync) and D (per-customer branding) were never Cloud Scheduler functions.

**Obsolete:** **Cloud Scheduler was retired in Summer '16.** Paired with Q304, you now have two dead Cloud Scheduler questions. Delete both.

---

### Topic 1 — Q314. What determines the suggested criteria for a lookup filter?
**Your answer:** C (the current application schema)
**Verdict: CORRECT**

Correct. The **Insert Suggested Criteria** link reads the org's existing object relationships and offers filter criteria based on them. Explanation is accurate and complete.

---

### Topic 1 — Q315. What can an agent do when resolving a case? (choose 2)
**Your answer:** AB
**Verdict: CORRECT**

Correct. Agents can **email a Knowledge article to a customer** from the case, and can **create/submit an article when closing the case**. Your explanation correctly kills D (a case can have **many** attached articles) and C (data categories classify **articles**, not cases). Well done — this explanation is complete.

---

### Topic 1 — Q317. `ISNUMBER(Salary__c)` where Salary is 50,000
**Your answer:** b → B (TRUE)
**Verdict: INCORRECT — the correct answer is A (FALSE)**

This is the trap the question is built around, and the explanation walks straight into it.

**Two separate reasons B cannot be right:**

1. **`ISNUMBER()` takes a *text* argument, not a number.** Salesforce Help: *"ISNUMBER(text) — determines if a text value is a number."* If `Salary__c` is a Number or Currency field, the formula will not even compile; you get a data-type error on save. So it can't return TRUE.

2. **If `Salary__c` is a Text field containing `50,000`, the answer is still FALSE.** A thousands separator is not a numeric character. Salesforce converts text to a number the same way `VALUE()` does, and `VALUE("50,000")` fails — commas, currency symbols and spaces all make the conversion fail. `ISNUMBER("50000")` would be TRUE; `ISNUMBER("50,000")` is **FALSE**.

The comma in the stem is deliberate. Option C ("Depends on the user's locale") is the decoy for people who half-remember the rule, and the correct answer is **A. FALSE**.

**Action:** change to `Answer: A` and rewrite the explanation around the comma.

*Formatting:* option `D. 50.000` is both a European-decimal artefact (**F4**) and a nonsensical option — a boolean function cannot return a number. Delete option D.

---

### Topic 1 — Q319. Actions that can be performed on the Campaign Member object (choose 3)
**Your answer:** ABC
**Verdict: DISPUTED — option A is wrong, so the keyed trio cannot stand**

**B and C are certainly correct:** Campaign Member supports **validation rules**, and it supports **custom lookup fields** to other objects.

**A is wrong.** Campaign members can only be **Leads, Contacts, or Person Accounts**. A **business account cannot be a campaign member** — there is no relationship to create. Your explanation asserts the opposite (*"Salesforce allows business accounts to be added to campaigns as campaign members"*), which is a factual error that should be removed regardless of what you do with the answer.

**D is also doubtful.** There is no Convert button on the Campaign Member record; lead conversion happens from the Lead record.

**Recommendation:** change the stem to **"Choose 2"** and the answer to **B, C**; or replace option A with a genuine third capability such as *"Create custom fields on the Campaign Member object"* or *"Build reports using the Campaigns with Campaign Members report type"*.

---

### Topic 1 — Q321. Field types a lookup filter can be applied to (choose 3)
**Your answer:** ADB → A, B, D
**Verdict: CORRECT**

Correct. Lookup filters work on **lookup, master-detail and hierarchical** relationship fields, including relationships to Account, Contact, User and custom objects. The two exclusions are exactly the ones you rejected: **relationship fields for records owned by queues** (C) and **lookup fields to the Activity object** (E).

*Formatting:* `ADB` is out of order. Use `A, B, D` (F3).

---

### Topic 1 — Q322. Action types represented by an icon in the Process Visualizer (choose 2)
**Your answer:** C, D
**Verdict: CORRECT**

Correct. The Process Visualizer draws icons for the four **approval actions** — Task, Email Alert, Field Update, Outbound Message. "Request rejection details" and "view recall details" are step *properties* and user interactions, not actions, so they get no icon. Explanation is accurate.

---

### Topic 1 — Q324. True statements about High Volume Portal users (choose 2)
**Your answer:** A, D
**Verdict: CORRECT / OBSOLETE**

Correct. High-volume portal users are deliberately kept **out of the role hierarchy** (which is the whole point — it removes the sharing-calculation overhead that made large portals slow), and they **cannot own records such as Accounts**. Because they have no role, they can't be used in role-based sharing rules — they get access through **sharing sets** and **share groups** instead, which is worth adding.

**Obsolete terminology:** "High Volume Portal User" became **High Volume Customer Portal User** and then the **Customer Community** licence under Experience Cloud. The behaviour survives; the name on the exam does not.

---

### Topic 1 — Q327. What can be reviewed using the Process Visualizer?
**Your answer:** B (Approval Processes)
**Verdict: CORRECT**

Correct. The Process Visualizer produces a flowchart of an **approval process** only. Sales processes and support processes are picklist-driven stage/status paths with no visualizer, and workflow rules have no diagram view. Explanation is accurate and complete.

---

### Topic 1 — Q328. Overriding the From address in a workflow email alert
**Your answer:** D (Organization-wide email address)
**Verdict: CORRECT**

Correct. The only override available is a **verified Organization-Wide Email Address**. You cannot type a free-text address, and you cannot pick an arbitrary user. Explanation is accurate.

**Worth adding:** the org-wide address must be **verified** before it appears in the picklist, and "Allow All Profiles to Use this From Address" (or an explicit profile list) controls who can select it. This still applies to email alerts fired from Flow today, so the question is *not* obsolete.

---

### Topic 1 — Q331. UI components for tag access (choose 2)
**Your answer:** CD
**Verdict: CORRECT / OBSOLETE**

Correct for Classic: tags were reached through the **sidebar Tags component** and **tag search**.

**Obsolete:** **Tags do not exist in Lightning Experience.** This is dead content.

**Question quality:** the stem — `UI component for tag Access (Choose 2)` — isn't a sentence. If you keep the question, rewrite it as *"Which two user interface components provide access to tags?"*

---

### Topic 1 — Q333. Which of the following are standard Salesforce applications?
**Your answer:** ABD (Ideas, Campaigns, Call Center)
**Verdict: INCORRECT — the correct answer is A, D — and this directly contradicts Q241**

**Q241 and Q333 are the same question with the same five options, and you have answered them differently.**

| | Q241 | Q333 |
|---|---|---|
| Your answer | **A, D** | **A, B, D** |
| Q241's explanation says | *"Campaigns is an **object** rather than a standard app"* | *"…built-in standard applications such as Ideas, **Campaigns**, and Call Center"* |

The two explanations state opposite facts about the same option.

**Q241 is the correct one. Campaigns is not a standard app** — it is a standard **object and tab** that lives inside the Marketing app. The Classic standard apps were **Sales, Call Center, Marketing, Community, Ideas, Content, Salesforce Chatter** and **Site.com**. There has never been an app called "Campaigns", "Administration" or "Sales Center".

**Action:** change Q333 to `Answer: A, D`, fix its explanation — then **delete one of the two questions**, since they are duplicates.

---

### Topic 1 — Q334. A role has a many-to-many relationship with the user
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. A user can hold **exactly one role**; a role can hold many users. That is one-to-many, not many-to-many. Explanation is accurate.

*Formatting — F6:* the explanation ends with an orphaned sentence, *"This Salesforce Role Hierarchy explanation provides a helpful breakdown of how roles and user assignments operate."* That is leftover hyperlink text from whatever the content was copied from, and it points nowhere. Delete it.

---

### Topic 1 — Q335. Campaigns and Opportunities have a many-to-many relationship
**Your answer:** A (True)
**Verdict: CORRECT**

Correct, and your explanation names the right mechanism: **Campaign Influence**, which creates junction records so many campaigns can be credited to one opportunity and one campaign can influence many opportunities.

**The contrast worth adding:** the Opportunity's **Primary Campaign Source** field is a single lookup — one campaign only. It is Campaign Influence *on top of* that field which makes the relationship many-to-many. Stating both halves makes the answer airtight.

---

### Topic 1 — Q337. Statements about email activation
**Your answer:** Ac → A, C
**Verdict: CORRECT / OBSOLETE**

Correct against the legacy key: device/email activation required the user to click an activation link when logging in from an unrecognised computer, and it could only be switched off by **raising a case with Salesforce Support**.

**Obsolete — and now actively misleading:** this is handled today by **Identity Verification**. Administrators control it themselves without contacting Support, by setting **Login IP Ranges on the profile** (logins from inside the range skip verification) or **Trusted IP Ranges** in Network Access. So option C's "only by request to Salesforce Support" is no longer true, and option D ("can be disabled through the UI") is now closer to reality.

**Recommendation:** rewrite around Identity Verification, or delete.

*Formatting:* `Ac` mixes cases (F3); the separator line is indented with a stray leading space.

---

### Topic 1 — Q338. Role hierarchy plus a sharing rule — what access does Operations Management get?
**Your answer:** c → C (Read/Write)
**Verdict: CORRECT**

Correct, and the reasoning is right. The rule that settles it is the one Salesforce states in "Grant Access Using Hierarchies": users at any role level can access all data **owned by *or shared with*** users below them in the hierarchy. Because Operations Person received Read/Write via the sharing rule, Operations Management — sitting directly above them — inherits that same **Read/Write** access.

**Why the distractors fail:** A ignores hierarchy inheritance. B is the org-wide default (Public Read Only), which the sharing rule has already overridden. D is not an option a sharing rule can grant — transfer rights come with **ownership** or **Modify All**, never from a sharing rule.

**Formatting — F6:** the stem is unreadable. The hierarchy has been flattened onto one line as `Executive Management -Sales Management -Sales Person -Operations Management -Operations Person -`, and the sentence `Default access for the Account object is Public Read Only.` is glued to the previous sentence with no space. Reformat the hierarchy as an indented list — a role-hierarchy question is unanswerable if the reader can't see the hierarchy.

---

### Topic 1 — Q340. Documents count toward Data Storage
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. Items on the **Documents tab count toward File Storage**, along with attachments, Salesforce Files, Chatter files, CRM Content and Site.com assets. Data Storage holds records. Explanation is accurate and complete.

---

### Topic 1 — Q341. File attachments, document tabs and Salesforce Content count toward Data Storage
**Your answer:** B (False)
**Verdict: CORRECT — but this is a duplicate of Q340**

The answer and explanation are both correct.

> **Duplicate (new, D9):** Q340 and Q341 test **the same fact** — that documents/files count toward File Storage rather than Data Storage — and sit one after the other in the file. Q341 is the broader wording, so keep **Q341** and delete Q340, or merge them.

**One exception worth knowing** (neither question mentions it): in **Personal, Contact Manager, Group, Professional, Enterprise, Performance and Unlimited** editions, file storage is allocated per-user with a per-org minimum — and **notes and Chatter posts count as *data*, not files**. Learners often over-generalise "anything I upload is file storage".

---

### Topic 1 — Q344. Import Wizard appropriate for 1,000 custom object records from CSV
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

Correct. The **Data Import Wizard** handles custom objects and accepts up to **50,000 records** per import, so 1,000 is comfortably inside the limit.

**Path is outdated:** the stem's `Data Management --> Import Custom Objects` is the Classic menu, where each object had its own wizard. Today there is a **single unified Data Import Wizard** at *Setup > Data > Data Import Wizard*.

**Worth adding — this is the examinable part:** the Data Import Wizard is the right tool because it supports **Accounts, Contacts, Leads, Solutions, Campaign Members, Person Accounts and custom objects**, and it can **prevent duplicates**. Use **Data Loader** instead when you need to import a *different* standard object (e.g. Opportunities), exceed 50,000 records, or need delete/export operations.

---

### Topic 1 — Q348. Record types may be created for every tab except…
**Your answer:** ABCE → A, B, C, E
**Verdict: CORRECT**

Correct. **Home, Forecasts, Documents and Reports** are not objects that support record types; **Leads** is a standard object that does. Explanation is accurate.

**Stem wording is clumsy:** "with the exception of" followed by four answers reads oddly. Rewrite as *"Record types can be created for all of the following except: (Choose 4)"*, or invert it to *"Which tab supports record types?"* with a single answer of D.

---

## BATCH 9 SUMMARY (Q283–Q348, 33 questions)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 17 | Q283, Q284, Q296, Q297, Q309, Q314, Q315, Q321, Q322, Q327, Q328, Q334, Q335, Q338, Q340, Q341, Q348 |
| CORRECT / OBSOLETE | 6 | Q288, Q291, Q311, Q324, Q331, Q337 |
| CORRECT / CAVEAT | 4 | Q286, Q302, Q307, Q344 |
| DISPUTED | 3 | Q301, Q304, Q319 |
| **INCORRECT** | **3** | **Q306, Q317, Q333** |

**Headline — three wrong answers, the most in any batch so far:**

1. **Q306** — should be **C, D**, not "AC" or "B, C". Option A describes a parent→child cross-object formula, which Salesforce does not permit.
2. **Q317** — should be **A (FALSE)**, not B. `ISNUMBER()` takes text, and the comma in `50,000` makes the conversion fail.
3. **Q333** — should be **A, D**, not ABD. Campaigns is an object, not a standard app. This also **contradicts Q241**, which you answered correctly.

**Three more to remove:** Q301 (no defensible trio exists), Q304 (`Answer: A or B` is not an answer, and Cloud Scheduler is retired) and Q319 (option A asserts business accounts can be campaign members, which is false).

**Numbering:** catastrophic in this range — **33 of 66 numbers are missing**.

**Relevance:** 6 obsolete, plus Q301, Q304 and Q311 which are obsolete *and* defective. Dead features here: Cloud Scheduler (×2), Partner Portal, original Territory Management, Classic Tags, Classic sidebar search, Salesforce Answers, email/device activation.

**Strong explanations this batch:** **Q297** is the single best explanation in the file so far — it gives the limit plus all four field-dependency rules. **Q315** and **Q327** are also complete and need nothing.

---

# BATCH 10 — File: `Admin-201 Topic 1.md`, Questions 349–408

> Numbering note: this range spans 60 numbers but contains only **26 questions**.
>
> **Good news:** no outright wrong answers this batch. **Bad news:** four questions are unsound, three explanations teach the wrong mechanism while defending the right answer, and one explanation contains **leftover working-out text** that was never cleaned up.

---

### Topic 1 — Q349. Field-level security can be used to make a field required
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. FLS has exactly two settings — **Visible** and **Read-Only**. There is no "Required" option. Requiredness comes from the field definition, the page layout, or a validation rule. Explanation is accurate and complete, and it is consistent with Q275 and Q390.

---

### Topic 1 — Q351. Can a user own a record and not be able to see it?
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT — the explanation gives the wrong mechanism**

The answer is right, but **both reasons your explanation gives are wrong**, and one of them teaches a genuinely harmful misconception.

**What your explanation says:** *"If a system administrator uses FLS to hide specific fields, or if organization-wide defaults and sharing settings restrict access…"*

**Why both are wrong:**
1. **FLS hides *fields*, not records.** Hiding fields does not stop the owner opening the record.
2. **OWD and sharing settings never restrict the owner.** Record ownership always confers access at the record level — that is the entire point of ownership. Sharing rules only ever *add* access; they cannot subtract it from an owner.

**The actual reason the answer is True:** **object-level permissions** on the profile or permission set. Record-level access (ownership) is only half the picture — the user still needs **Read** on the object. If a user's profile has no Read permission on, say, Opportunity, that user can be the listed Owner of an Opportunity and still be unable to open it. The same happens if the record's **record type** is not assigned to their profile, or if the record sits in a **Territory/queue** context they've lost.

**Action:** keep `Answer: A`, rewrite the `Why:` around object-level permissions.

---

### Topic 1 — Q353. What is true about a Role?
**Your answer:** A, D
**Verdict: CORRECT / CAVEAT — the explanation contradicts the answer it is defending**

**A and D are the right answers.** But look at what the explanation says:

> *"every active user **must** be assigned to exactly one role (a user cannot have zero roles…)"*

That sentence is **false**, and it argues for option **C** — the option you correctly rejected.

**The fact that makes A, D correct:** **roles are optional in Salesforce.** A user can have no role at all. That is precisely why option C ("a user **must** be associated to one role") is false and option D ("a user **may** be associated to one role") is true. A user may have **zero or one** role — never more than one.

> **Your own file proves this:** **Q384** asks which field is *not* mandatory on a user record and you correctly answer **Role**. Q353's explanation and Q384's answer cannot both be true. Logged as contradiction **C11**.

**Action:** keep `Answer: A, D`, delete the "must be assigned" sentence and replace it with "roles are optional; a user has at most one".

*Formatting — F6:* the answer and explanation are run together on one line: `Answer: A, D Why:`. Same defect as Q85.

---

### Topic 1 — Q357. What happens when an email is sent to a customer from a case?
**Your answer:** B (Case escalation is reset)
**Verdict: CORRECT / CAVEAT**

B is right, but it is **conditional** and the explanation states it as absolute.

**The missing condition:** each escalation rule entry has a setting — *"Specify how escalation times are set"* — with two choices: **based on when the case was created** or **based on when the case was last modified**. The escalation clock only resets on an outbound email when the rule is set to **last modified**. If it is set to *created*, sending an email changes nothing.

**Why the other options are wrong** (worth stating, because they are all nonsense distractors): sending an email never touches case **hierarchy** (A), and it certainly never **deletes** escalation or assignment rules (C, D) — rules are Setup metadata and are not affected by record activity.

---

### Topic 1 — Q360. With Customizable Forecasting there is a separate forecast role hierarchy
**Your answer:** B (False)
**Verdict: DISPUTED — I believe the answer should be A (True)**

**Salesforce does maintain a separate structure here, and it has its own name: the Forecast Hierarchy.** In Customizable Forecasting it lives at *Setup > Customizable Forecasting > Forecast Hierarchy*. It is **generated from** the role hierarchy, but it is not the same thing:

- Each role must be **explicitly enabled** for forecasting — roles are not automatically included.
- A **Forecast Manager** must be designated for each branch, and roll-up stops at any branch with no forecast manager assigned.
- If **Territory Management** is enabled, forecasts roll up through the **territory hierarchy** instead of the role hierarchy entirely.

So "it relies directly on the organization's existing role structure" (your explanation) is only half the story, and the half it leaves out is the part the question is testing.

**Where the ambiguity lies:** the stem says "separate forecast **role** hierarchy". It is not a separate hierarchy *of roles* — it is a separate hierarchy *derived from* roles. A pedantic reader could defend False on that wording alone.

**Recommendation:** reword the stem to *"Customizable Forecasting uses a Forecast Hierarchy that is derived from, but maintained separately from, the role hierarchy"* and key it **True**. Also note this is **obsolete** — Customizable Forecasting was retired in favour of **Collaborative Forecasts**.

---

### Topic 1 — Q361. How many roles can you create for your org?
**Your answer:** c → C (500)
**Verdict: CORRECT**

Correct — **500 roles** per org by default, raisable by Salesforce Support. Explanation is accurate.

**Companion limit worth adding:** Salesforce recommends **no more than 10 levels of branches** in the role hierarchy. Depth and count are different limits and exams test both.

*Formatting:* `361.How many` — missing space (F5); lower-case `c` (F3).

---

### Topic 1 — Q362. What is a Sharing Rule?
**Your answer:** ABd → A, B, D
**Verdict: CORRECT**

Correct. Sharing rules are **automated** (A), they are **exceptions to OWD** (B), and they are **pointless when OWD is already Public Read/Write** (D) because there is no further access to grant. Your reasoning on all three is sound.

**Option C is a weak distractor.** "Rules given for a group of users working closely on a project" describes roughly what a sharing rule *does* — the intended distinction is that ad-hoc collaboration is handled by **manual sharing** or **teams**, while sharing rules are criteria-driven and automatic. If you keep the question, sharpen C to *"A one-off grant of access to a single record for a specific colleague"* so it is unambiguously describing manual sharing.

*Formatting:* `ABd` (F3); `Why:A` missing a space.

---

### Topic 1 — Q365. Phil is promoted — how do you transfer his accounts?
**Your answer:** D (None of the above)
**Verdict: DISPUTED — I believe the answer should be C**

**The question asks one thing:** *"What are the appropriate steps to transfer Phil's account to the new associate?"* It does **not** ask how to onboard the new hire.

**Option C describes exactly the right process:** change the role on Phil's user record to Senior Sales Exec, then use **Mass Transfer Records** to move his accounts, opportunities and leads to the new associate. That is the standard admin answer.

**Your explanation rejects C on a technicality** — that none of the options mention *creating a new user record* for the new associate. But the question never asked about creating the new user; it presumes the associate already exists ("the new sales associate **is appointed**"). Answering "None of the above" because an option omits something the question didn't ask makes almost any scenario question unanswerable.

**The real defect is terminology.** Every option says "**profile**" where it means "**user record**". Options A and B are nonsense for that reason — you don't "overwrite a profile with user information" or "deactivate a profile". Option C's phrase *"associate the new role to Phil's existing profile"* means *"set the new Role on Phil's existing user record"*.

**Recommendation:** rewrite every option to say **user record** instead of **profile**, then key it **C**. As written, the question tests reading tolerance rather than Salesforce knowledge.

---

### Topic 1 — Q367. Size limit for uploaded documents
**Your answer:** C (5 MB)
**Verdict: CORRECT / OBSOLETE**

Correct for the **Documents tab**: 5 MB per file. Your note that this is distinct from attachments and Content limits is a good one.

**Companion limits** (the exam liked to mix these up): **20 KB** for a document used as a **custom app logo**, and 5 MB for documents generally.

**Obsolete:** the Documents tab is legacy Classic functionality. Modern **Salesforce Files** supports up to **2 GB** per file. Any current question about upload limits will be about Files, not Documents.

---

### Topic 1 — Q368. Author and owner have the same access to a document
**Your answer:** B (False)
**Verdict: DISPUTED — recommend deleting this question**

I cannot support this answer, and the question is malformed on top of that.

**The factual problem:** access to a document in the Documents tab is governed **entirely by the folder it sits in**, plus the **"Manage Public Documents"** permission. Salesforce grants **no special record-level access** to either the Author or the Owner of a document. There is no author-versus-owner access distinction to test — which means the honest answer is **A (True)**, or more accurately "the question has a false premise".

**The structural problem — F12:** a True/False item cannot have a third option **"C. Neither True nor False"**. That is not an answer; it's an escape hatch.

**Obsolete on top:** the Documents tab is legacy. **Recommendation: delete.** If you want to keep a question in this area, ask the genuinely examinable version: *"What controls who can access a document in the Documents tab?"* — answer: **the folder's sharing settings**.

---

### Topic 1 — Q369. You can update licenses on the Company Profile
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT**

Correct. **Company Information** *displays* your license counts — user licenses, feature licenses, permission set licenses and usage-based entitlements — but you cannot change the quantities there. License counts are contractual and change through your Salesforce account executive.

**Worth distinguishing:** you *can* **assign** an existing license to a user (on the user record), and you can see how many are used versus remaining on Company Information. What you cannot do is **increase the number you own**. Spelling that out prevents a learner from over-reading "False".

*Formatting — F6:* the explanation ends with orphaned hyperlink text: *"Update User Licenses Via Data Loader in Salesforce provides a helpful tutorial…"*. This is leftover from the source it was copied from, it links nowhere, and it points at a method that doesn't exist. Delete it. **Same defect as Q334.**

---

### Topic 1 — Q372. Activities are both Tasks and Calendars
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

The answer is right and the explanation is right — but they disagree with the **stem**.

**The stem says "Calendars". The correct term is "Events".** Activities = **Tasks + Events**. The Calendar is the *view* that displays Events; it is not itself half of the Activity object. Your explanation correctly says "Events (calendar appointments and meetings)", so just fix the stem to read *"Activities are both Tasks and Events"*.

**Useful addition:** Task and Event are separate objects that share the **Activity** umbrella, which is why you report on them via **Activities** report types and why they share the Open Activities / Activity History related lists.

---

### Topic 1 — Q374. Changes to a custom field that can cause data loss
**Your answer:** A, B, D
**Verdict: CORRECT / CAVEAT — but the explanation must be rewritten before anyone reads it**

**The answer is right.** Salesforce Help ("Notes on Changing Custom Field Types") lists data loss when changing **to or from Date or Date/Time**, **to Number from any other type**, and **to Currency from any other type**. Conversions *between* Number, Currency and Percent are handled without loss, which is why option C is false.

**The explanation is unusable.** It contains visible working-out that was never cleaned up:

> *"…changing between compatible numeric/monetary types is handled, but specifically… **Wait, let's look closely at option C:** "Changing to number from Percent" or "Changing to number from..." wait, option C says…"*

This is raw draft text — two "wait" self-corrections inside a published answer. It contradicts itself mid-sentence and then arrives at the right conclusion by accident. **A learner reading this will come away more confused than before they started.** This is a new defect category, **F13**.

**Replace the whole `Why:` with:** *"Data loss occurs when changing to or from Date/Date-Time, and when changing **to** Number, Currency or Percent from an incompatible type. Conversions among Number, Currency and Percent do not lose data, which is why option C is false."*

**Option D's wording is also garbled:** *"Changing to one Currency from any other currency type"*. Salesforce's rule is "changing **to Currency from any other type**". Fix the option text.

---

### Topic 1 — Q375. True statements for data validation
**Your answer:** E
**Verdict: CORRECT / CAVEAT**

E is correct and your rejections of A–D are all sound — particularly C (validation runs **server-side** on save, not on the client) and D (validation **is** enforced through the API and the import wizards).

**Two refinements:**
1. **Option E says "by the user"; only an administrator can do this.** Your explanation correctly says "by administrators", which quietly contradicts the option you're marking true. Reword E to *"Validation rules can be activated or deactivated by an administrator"*.
2. **There is a real exception to D that you should mention, because your own file tests it.** Validation rules on Leads are **not** enforced during lead conversion unless **"Require Validation for Converted Leads"** is enabled in Lead Settings — which is exactly what **Q394** asks. Cross-referencing the two makes both stronger.

---

### Topic 1 — Q376. Which statement correctly defines data validation?
**Your answer:** A (ensures integrity **before** it's saved)
**Verdict: CORRECT**

Correct. Validation rules evaluate on save and **block the save** if the formula returns TRUE. Nothing is written to the database. Explanation is accurate and complete.

---

### Topic 1 — Q381. Dashboards can be created using Standard Reports as source reports
**Your answer:** A (True)
**Verdict: CORRECT**

Correct — a dashboard component can source from any report the running user can access, standard or custom, as long as it is saved in an accessible folder.

> **Already logged as contradiction C2** (Q64 vs Q136 vs Q381). The recommendation there was to adopt **True** throughout, and this question is consistent with that. No further action.

**Worth adding:** the practical constraint is not standard-vs-custom but **report format** — a dashboard component needs a report with at least one grouping (Summary or Matrix) for charts; **Tabular** reports can only feed a table or metric component, and only with a row limit set.

---

### Topic 1 — Q384. Which field is NOT mandatory when creating a User record?
**Your answer:** B (Role)
**Verdict: CORRECT**

Correct. The required fields on a user are **Last Name, Alias, Email, Username, Nickname (Community Nickname) and Profile**. **Role is optional.** Explanation is accurate.

> **This question is the proof that Q353's explanation is wrong.** If a user "must be assigned to exactly one role", Role would be mandatory here. It isn't. Fix Q353's wording to match.

---

### Topic 1 — Q385. Logged in at 3:00 PM; login hours end at 3:30 PM — what happens at 3:31?
**Your answer:** D
**Verdict: CORRECT**

Correct, and this is a well-chosen question because the intuitive answer (A, auto logout) is wrong. Salesforce Help states it plainly: *"If users are logged in when their login hours end, they can continue to view their current page, but they can't take any further action."* The session isn't killed — the user is simply frozen out of any save, edit, or delete. Explanation is accurate.

**Worth adding:** login hours are set **per profile**, and they use the **time zone of the user's profile-level locale settings** — a detail that trips people up in multi-region orgs.

*Formatting:* `385.A user` — missing space (F5). The stem also has `login's` where it means `logs in`.

---

### Topic 1 — Q390. Best way to make a field mandatory for everyone
**Your answer:** B (Validation Rule)
**Verdict: CORRECT**

Correct for the options offered. A page-layout "Required" tick only binds the UI on that one layout — API calls, Data Loader and Flows sail straight past it. A validation rule using `ISBLANK()` / `ISNULL()` runs server-side on every save path, so it truly applies to everyone.

**What's missing:** the *actual* best method is the **Required checkbox on the field definition** (universally required), which enforces at the database level. It simply isn't among the options here — say so, otherwise a learner concludes validation rules are the gold standard when they are the runner-up.

> **Reads as a contradiction with Q275.** Q275 asks the same thing ("best possible answer") and you answered **A, Page Layout**. Both answers are right *for their own option lists* — Q275 didn't offer a validation rule — but a learner meeting both will think the file is inconsistent. Logged as **C9**; fix by adding one line to Q275 noting that a validation rule would be stronger if it were on offer.

---

### Topic 1 — Q391. Which is NOT a standard Salesforce application?
**Your answer:** D (Community)
**Verdict: DISPUTED — the answer flips depending on which UI you mean, and it contradicts Q241**

**In Salesforce Classic**, the standard apps were **Sales, Call Center, Marketing, Community, Ideas, Content, Salesforce Chatter** and **Site.com**. On that list **Community IS standard** and **"Service" is NOT** — there was no Classic app called Service (there was a Service Cloud *console*). So the Classic answer is **A**.

**In Lightning Experience**, the standard apps include **Sales, Service, Marketing, Salesforce Chatter** and others, and there is no app called Community — Experience Cloud sites are built in Digital Experiences, not launched from the App Launcher. On that list the answer is **D**.

**The question cannot be answered without specifying the UI**, and your own file takes the Classic side elsewhere: **Q241's explanation explicitly lists Community among the standard apps.** That is a direct contradiction with this answer. Logged as **C10**.

**Recommendation:** add "in Lightning Experience" to the stem and keep **D**, or delete the question. Note that you now have **three** near-identical "standard apps" questions — Q241, Q333 and Q391 — with three different underlying lists. Keep one.

---

### Topic 1 — Q394. Are validation rules enforced on lead conversion?
**Your answer:** A (Yes)
**Verdict: CORRECT**

Correct, and this is one of the better explanations in the batch because it names the controlling setting: **"Require Validation for Converted Leads"** in Lead Settings. Without it, lead validation rules are bypassed during conversion.

**One addition:** the same setting also governs whether **triggers and workflow** fire on the records created by conversion. And validation rules on the *target* objects (Account, Contact, Opportunity) **do** run on conversion regardless — which is the classic cause of "conversion failed" errors that admins can't trace.

---

### Topic 1 — Q397. Can an admin change settings on the standard Solution Manager profile?
**Your answer:** A (Yes)
**Verdict: CORRECT**

Correct, and the explanation draws the right line: on a **standard** profile you **cannot** change object permissions or system/administrative permissions, but you **can** change tab settings, app settings, page layout assignments, record type assignments, login hours, login IP ranges and password policies.

> Already logged as **C1** (Q15 vs Q397). The two are reconcilable — Q15 is about *permissions*, Q397 is about *settings*. No further action beyond adding that one-word distinction to Q15.

**Worth adding:** you also **cannot delete** a standard profile, and you cannot clone-and-then-edit permissions on the original — the standard workflow is to **clone** the standard profile and edit the clone.

---

### Topic 1 — Q401. Deleting a record related to a junction object by a lookup
**Your answer:** B
**Verdict: CORRECT / CAVEAT**

B is the best available answer: in a **lookup** relationship, deleting the parent **clears the lookup field** on the child; the child record itself survives. That is the key contrast with master-detail, where deleting the parent **cascade-deletes** the children.

**Three problems with the question as written:**
1. **The stem says "object" where it means "record".** Deleting an *object* deletes everything; deleting a *record* is what this tests. This is not pedantry — the whole answer changes.
2. **Options A and D are the same option.** "Junction object" and "intersection object" are synonyms. A multiple-choice question cannot contain two identical choices (**F12**).
3. **The explanation omits the configurable part.** When you create a lookup field, Salesforce asks what to do if the looked-up record is deleted: **Clear the value of this field** (the default, and what makes B correct), **Don't allow deletion** of the lookup record, or **Delete this record also** (cascade, available on request). Mentioning the three options makes the answer defensible rather than assumed.

---

### Topic 1 — Q403. Which object cannot be imported via the Import Wizard?
**Your answer:** C (Opportunities)
**Verdict: CORRECT**

Correct. The **Data Import Wizard** handles Accounts, Contacts, Leads, Solutions, Campaign Members, Person Accounts and custom objects. **Opportunities are not supported** — you need **Data Loader**. Explanation is accurate and complete.

> Pairs well with **Q344**. Together they give the full rule: use the Import Wizard for the supported objects under 50,000 records; use Data Loader for everything else, for more than 50,000 records, and for delete/export.

---

### Topic 1 — Q405. Field is Read-Only in FLS but Required on the page layout
**Your answer:** A (Read Only)
**Verdict: CORRECT**

Correct. **The most restrictive setting wins**, and FLS sits above the page layout. Salesforce does not throw an error (option C) — it silently applies the read-only state. Explanation is accurate.

**Important pairing — and a trap worth flagging to yourself:** this looks like it contradicts **Q283**, but it doesn't.

| | Q283 | Q405 |
|---|---|---|
| Setting | **Universally required** (Required ticked on the **field definition**) | **Required on the page layout** |
| Result vs FLS | **Overrides FLS** — always visible and editable | **FLS wins** — field is read-only |

Field-definition requiredness beats FLS; page-layout requiredness does not. Add that sentence to both questions and the pair becomes genuinely instructive.

---

### Topic 1 — Q408. Which of the following is not part of the Profile?
**Your answer:** E (Roles)
**Verdict: CORRECT**

Correct. A profile carries the **user license**, object and field permissions (FLS), **page layout assignments**, **record type assignments**, tab settings, app settings and system permissions. **Roles are not part of a profile** — the Role lives on the user record and drives record visibility through the hierarchy. Explanation is accurate and complete.

**The one-line summary worth memorising:** *Profile = what you can **do**; Role = what you can **see**.*

---

## BATCH 10 SUMMARY (Q349–Q408, 26 questions)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 13 | Q349, Q361, Q362, Q376, Q381, Q384, Q385, Q390, Q394, Q397, Q403, Q405, Q408 |
| CORRECT / OBSOLETE | 1 | Q367 |
| CORRECT / CAVEAT | 8 | Q351, Q353, Q357, Q369, Q372, Q374, Q375, Q401 |
| DISPUTED | 4 | Q360, Q365, Q368, Q391 |
| INCORRECT | 0 | — |

**Headline — no wrong answers, but three explanations teach the wrong thing while defending the right answer:**

1. **Q351** blames FLS and OWD for a user being unable to see a record they own. Neither can do that. The real cause is **object-level permissions**.
2. **Q353** claims every user "must be assigned to exactly one role" — which argues for the option you correctly rejected, and contradicts **Q384**.
3. **Q374** contains **leftover draft text** with two "wait, let's look closely…" self-corrections inside the published explanation. New defect **F13**.

**Four questions to reconsider:**
- **Q360** — I'd key this **True**: Customizable Forecasting has a distinct **Forecast Hierarchy** with its own enabled roles and forecast managers.
- **Q365** — I'd key this **C**, not "None of the above". Every option says "profile" where it means "user record"; fix the wording rather than the answer.
- **Q368** — delete. Document access comes from **folder sharing**; there is no author-versus-owner distinction, and a True/False question cannot have a "Neither" option.
- **Q391** — answer flips between Classic (A) and Lightning (D), and contradicts **Q241**.

**Numbering:** 60 numbers in this range, only **26 questions** — 34 missing.

**Best explanations this batch:** **Q394** (names the "Require Validation for Converted Leads" setting), **Q385** (correctly resists the intuitive wrong answer) and **Q405** (clean "most restrictive wins" reasoning).

**A pairing worth building on:** Q283 and Q405 look contradictory but aren't — **field-definition** requiredness overrides FLS, **page-layout** requiredness does not. Add one sentence to each and you turn a confusing pair into one of the most useful facts in the file.

---

# BATCH 11 — File: `Admin-201 Topic 1.md`, Questions 409–494

> Numbering note: this range spans 86 numbers but contains only **30 questions** — 56 are missing, including unbroken runs of 13 (Q453–Q465) and 9 (Q424–Q432).
>
> **Three wrong answers (Q411, Q487, Q490), three unsound questions, and — for the first time — a question where the explanation openly states a different number from the answer it keys (Q415).**

---

### Topic 1 — Q409. Can a user see different data in a report versus a dashboard built on it?
**Your answer:** A (Yes)
**Verdict: CORRECT / CAVEAT — the explanation names the wrong mechanism**

The answer is right. The explanation describes the feature that **removes** the discrepancy, not the one that causes it.

**What actually causes it:** every dashboard has a **running user**. A standard dashboard runs as **one fixed user**, and *everybody* who opens it sees that user's data — regardless of their own access. So a rep can open a dashboard showing company-wide numbers, then click through to the source report and see only their own records. That is the discrepancy the question is about.

**Dynamic dashboards are the fix, not the cause.** A dynamic dashboard runs as the **viewing user**, which makes the dashboard match what that person would see in the report. Your explanation cites dynamic dashboards as the reason the data differs — it is the reason the data *agrees*.

**Action:** keep `Answer: A`, rewrite the `Why:` around the **fixed running user**.

---

### Topic 1 — Q411. Which is NOT an available function in Formula Fields?
**Your answer:** "None of the above — all four are valid"
**Verdict: INCORRECT — the correct answer is D (VLOOKUP)**

**`VLOOKUP()` is not available in formula fields.** Salesforce's formula function reference carries an explicit restriction on it: *"This function is available only in validation rules."*

That is the entire point of the question — VLOOKUP is a real Salesforce function, which is why it looks plausible, but it cannot be used in a formula field. The other three are all fine in formula fields: **HYPERLINK**, **SUBSTITUTE** and **RPAD**.

**Action:** change to `Answer: D` and rewrite the explanation around the validation-rules-only restriction.

*Formatting:* the answer line is free text rather than a letter (F3), and the explanation ends with orphaned hyperlink text — *"Salesforce HYPERLINK Function Tutorial This video provides an overview…"* — the same copy-paste artefact seen in Q334 and Q369 (F6).

---

### Topic 1 — Q412. Which report type cannot be a source for an Analytic Snapshot?
**Your answer:** C (Matrix Reports)
**Verdict: CORRECT**

Correct. **Reporting Snapshots** accept **Tabular** and **Summary** source reports only. Matrix reports are rejected because a snapshot maps report columns to target-object fields, and a matrix's two-dimensional grid has no fixed column set to map. Explanation is accurate.

**Worth adding — and this feature is *not* obsolete:** Reporting Snapshots still exist in Lightning. The other restrictions are that the source report cannot be a **joined report**, cannot contain more than **3 groupings** if summary, and the snapshot can load a maximum of **2,000 records** per run.

---

### Topic 1 — Q413. Which import tool for 30,000 Cases?
**Your answer:** B (Data Loader)
**Verdict: CORRECT**

Correct, and the explanation makes the right point: **the record count is irrelevant**. The Data Import Wizard does not support **Cases** at all, so even 5 cases would need Data Loader. Learners often answer this by comparing 30,000 against the 50,000 limit — which is the wrong reasoning and would give the wrong answer.

> Pairs with **Q344** and **Q403** to give the complete rule: Import Wizard supports Accounts, Contacts, Leads, Solutions, Campaign Members, Person Accounts and custom objects — **not** Cases, Opportunities or Users.

*Formatting — F6:* `Timestamp:` is run onto the end of the explanation line instead of starting its own line.

---

### Topic 1 — Q415. How many custom fields per object in Unlimited Edition?
**Your answer:** C (500) — while the explanation says the answer is 800
**Verdict: DISPUTED — the question has no correct option as written**

Your explanation states the real limit plainly and then keys a different number:

> *"…the maximum number of custom fields that can be created natively in the Unlimited Edition is **800**… Therefore, option C (**500**) is the closest correct option…"*

**"Closest" is not an answer.** This is defect **F8** in its clearest form yet.

**The real limits (custom fields per object):**

| Edition | Custom fields per object |
|---|---|
| Contact Manager, Group, Professional | 100 |
| **Enterprise** | **500** |
| **Performance, Unlimited, Developer** | **800** |

The stem says **Unlimited**, so the answer is **800** — and 800 is not on the option list.

**Two ways to fix it:**
1. Change the stem to **Enterprise Edition** and keep `Answer: C` (500). This is the cleaner fix.
2. Keep "Unlimited" and change option C to **800**.

Either way, delete the "closest correct option" sentence. As it stands the question teaches 500 while the explanation teaches 800.

---

### Topic 1 — Q417. Roll-up summary fields per object in Enterprise Edition
**Your answer:** B (25)
**Verdict: CORRECT / CAVEAT — but the last sentence destroys the explanation**

**B (25) is correct.** The default limit is **25 roll-up summary fields per object**, raisable to a hard maximum of **40** by Salesforce Support. Your explanation opens by saying exactly that.

**Then it ends with this:**

> *"…meaning none of the provided choices (10, 20, 30, or unlimited) are correct"*

That sentence is wrong twice over. It **contradicts the answer you just keyed** (F8), and it **misquotes the options** — option B is **25**, not 20. Delete the sentence.

**Worth adding:** roll-up summary fields require a **master-detail** relationship (or a lookup on a few special standard objects such as Opportunity Products). That constraint is tested far more often than the numeric limit.

*Formatting:* the answer line is `Answer: B (The default limit is 25…). Why:` — answer, parenthetical and explanation label all on one line (F3/F6).

---

### Topic 1 — Q418. A sales team is a set of users who work together on …
**Your answer:** C (Opportunities)
**Verdict: CORRECT**

Correct. Explanation is accurate.

**Terminology update:** the feature is now called the **Opportunity Team**; "Sales Team" is the old Classic name. The sibling feature for Accounts is the **Account Team**, and for Cases the **Case Team**. Leads and Contacts have no team feature — which is why B and D are wrong.

---

### Topic 1 — Q423. Conditional highlighting cannot be used for …
**Your answer:** A (Tabular Reports)
**Verdict: CORRECT**

Correct, and the explanation gives the right reason: conditional highlighting evaluates **summary values**, and a tabular report has no groupings or subtotals to summarise. Accurate and complete.

---

### Topic 1 — Q433. Opportunity crosses 80% threshold, then rises to 85% — do additional alerts fire?
**Your answer:** B (No)
**Verdict: DISPUTED — as written, option C is the honest answer**

The reasoning in your explanation is correct **for one specific evaluation criterion**, but the stem never says which criterion the rule uses — and your own explanation admits the outcome depends on it:

> *"…preventing the alert from re-triggering **unless the rule evaluation criteria are specifically set to fire on every edit** regardless of previous state."*

That sentence concedes option **C — "Depends on the Settings"** — which is therefore the defensible answer to the question as printed.

**The underlying fact is right though:**
- **"created, and any time it's edited to subsequently meet criteria"** → fires once at 80%, **not again** at 85%, because the record never transitions from *not meeting* to *meeting*.
- **"created, and every time it's edited"** → fires again at 85%.

**Recommendation:** add the evaluation criterion to the stem (*"…a workflow rule set to 'created, and any time it's edited to subsequently meet criteria'…"*) and then key **B**. Once the stem is specific, option C stops being defensible and the question becomes a good one.

**Obsolete:** workflow rules are closed to new creation; the Flow equivalent is **entry conditions with "only when a record is updated to meet the condition requirements"**.

---

### Topic 1 — Q436. Conditional highlighting only applies to the first summary column
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. You can apply conditional formatting to **any** summary or custom summary formula column, and to several of them independently. Explanation is accurate.

---

### Topic 1 — Q440. Customizable Forecasting is a prerequisite for Territory Management
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

Correct for original Territory Management.

> **This is the fourth time this exact fact appears** — Q161, Q234, Q288, Q440. Logged as duplicate **D10**. Keep one. And note that both features in the sentence are retired: **original Territory Management** was replaced by **Enterprise Territory Management** (which has no such prerequisite), and **Customizable Forecasting** by **Collaborative Forecasts**.

*Formatting:* `Answer:A` — missing space (F3).

---

### Topic 1 — Q442. Can a user create their own Default Sales Team?
**Your answer:** A (Yes)
**Verdict: CORRECT**

Correct. Users set up a **Default Opportunity Team** (and Default Account Team) in their own personal settings, and can choose to have it added automatically to every new opportunity. Explanation is accurate.

**Worth adding:** an admin can also **mass-add** a default team to existing opportunities, and Opportunity Teams must be **enabled org-wide** in Setup before any user can build one.

---

### Topic 1 — Q443. How many ranges can be defined in conditional highlighting?
**Your answer:** D (5)
**Verdict: CORRECT / CAVEAT**

Correct for **Lightning Experience**: up to **5 conditional formatting rules** per report. Your explanation correctly frames it as Lightning.

**The caveat matters for a legacy question bank:** in **Salesforce Classic**, conditional highlighting allowed **3 ranges** (low / mid / high, defined by two breakpoints) across up to 3 summary columns. Since almost everything else in this file is written against Classic, a learner may hit a Classic-worded version of this question and answer 5. Add one line naming both numbers and the UI each belongs to.

---

### Topic 1 — Q444. When are formula fields recalculated?
**Your answer:** B (every time they are viewed)
**Verdict: CORRECT**

Correct. Formula fields are **calculated at runtime** and store no value in the database — which is also why they can't be indexed for some operations and why they don't trigger workflow on their own. Explanation is accurate.

> **Third occurrence of this question** — Q129, Q156 and Q444 all ask it, and all three agree. Logged as duplicate **D6**. Keep one.

---

### Topic 1 — Q446. How many Solution records can be imported via the Import Wizard?
**Your answer:** C (50,000)
**Verdict: CORRECT**

Correct. Solutions **are** supported by the Data Import Wizard, up to the standard **50,000** record ceiling. Explanation is accurate.

*Formatting — F4:* options B and C are written `5.000` and `50.000` with European decimal points. In English notation those read as 5 and 50. Change to `5,000` and `50,000`.

---

### Topic 1 — Q449. Delete an email from a case, then delete the case — can you retrieve the email?
**Your answer:** B (False — you *can* retrieve it)
**Verdict: DISPUTED — I believe the answer should be A (True)**

Your explanation is right that both records go to the Recycle Bin for 15 days. It misses the **dependency rule**, which is what the question is actually testing.

**The rule:** a child record cannot be undeleted while its parent is deleted, and **undeleting a parent does not restore children that were deleted separately beforehand**. Salesforce restores cascade-deleted children with their parent — but the email here was deleted *first*, as its own action, so it is not part of the case's cascade set.

**What that means in practice:** with the case in the Recycle Bin, the email has no valid parent to be restored to; and once you restore the case, the separately-deleted email does not come back with it. Either way you cannot get the email back — which makes the statement **True**.

**Recommendation:** change to `Answer: A` and rebuild the explanation around "separately deleted children are not restored with the parent". If you would rather not rely on that, delete the question — but do not leave it keyed False with an explanation that ignores the dependency rule entirely.

---

### Topic 1 — Q450. Where are validation rules enforced but no feedback given?
**Your answer:** C (Web-to-Case)
**Verdict: CORRECT**

Correct, and the explanation is complete and well-reasoned. Validation rules **do** run on Web-to-Case and Web-to-Lead submissions, but the submitter is an anonymous member of the public with no Salesforce session — there is nowhere to display an error. The record silently fails and an error notification goes to the **Default Case Owner / Automated Case User** instead.

**Worth adding:** this is a genuine data-loss risk in real orgs, and the standard mitigation is to keep validation rules off the fields a web form populates, or to route web submissions through a lightweight record type with relaxed rules.

---

### Topic 1 — Q452. How many User records can be imported via the Import Wizard?
**Your answer:** D (Users cannot be imported via the Import Wizard)
**Verdict: CORRECT**

Correct. **User is not a supported object** in the Data Import Wizard. Bulk user creation is done with **Data Loader** / the API, or with the **Add Multiple Users** page in Setup (which handles up to 10 at a time). Explanation is accurate.

*Formatting — F4:* options B and C use European decimals (`5.000`, `50.000`). Same fix as Q446.

---

### Topic 1 — Q466. What does the Home Page dashboard snapshot display?
**Your answer:** D (the first row of any available dashboard)
**Verdict: CORRECT / OBSOLETE**

Correct for Classic: the Home Page dashboard component showed the **first row** — up to three components — of a dashboard the user selected themselves, refreshed as of the last dashboard run.

**Obsolete:** the Classic Home Page and its dashboard snapshot are gone. In Lightning you add a full **Dashboard component** to a Home page in the Lightning App Builder, and it shows the whole dashboard, not a row.

---

### Topic 1 — Q467. Customer Portal users can view the tags section of a page
**Your answer:** B (False)
**Verdict: CORRECT / OBSOLETE**

Correct against the legacy documentation this is lifted from — tagging was an internal-user feature and portal users could not use it.

**Doubly obsolete:** **Tags do not exist in Lightning Experience**, and the **Customer Portal** was retired in favour of **Experience Cloud**. Both halves of the question are dead. This is dead content and should be deleted rather than corrected.

> You now have two Tags questions — Q331 and Q467. Both are unexaminable.

---

### Topic 1 — Q472. Escalation on last modification resets when an activity is added or an email is sent
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. When the escalation rule entry is set to *"Based on when the case was last modified"*, anything that updates the case restarts the clock. Explanation is accurate.

> **This is the fact Q357 should have stated conditionally.** Q357 says an outbound email resets escalation *unconditionally*; Q472 correctly scopes it to the "last modified" configuration. Use Q472's wording to fix Q357.

---

### Topic 1 — Q476. Escalation on last modification resets when a related comment is added
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT — duplicate of Q472**

> **Duplicate (new, D12):** Q472 and Q476 test the identical rule — "escalation based on last modification resets when the case is modified" — and differ only in which trigger they name (activity/email versus case comment). Both are answered A. Merge them into one question listing all the triggers, or keep Q472 (the broader one) and delete Q476.

**The safer way to state the rule:** rather than enumerating which specific actions count, teach the principle — *anything that updates the Case's Last Modified Date restarts the escalation clock when the rule is configured on last modification*. That formulation is correct regardless of which related-list action a given release does or doesn't propagate to the parent.

---

### Topic 1 — Q482. The first approval step specifies the action if a record does not advance to it
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. When you define **Step 1** with entry criteria, Salesforce forces you to choose what happens to records that don't meet them: **Approve Record** or **Reject Record**. Explanation is accurate.

**The distinction worth adding:** that two-option choice is unique to **Step 1**. On **every later step** you get a third option, **"Go to next step"**, because there is a subsequent step to fall through to. Step 1 has nothing before it, so the record must be resolved there.

---

### Topic 1 — Q484. Only standard fields can be used in email and mail merge documents
**Your answer:** B (False)
**Verdict: CORRECT / OBSOLETE**

Correct. Merge fields cover **custom fields** as well as standard ones, and you can reach related-object and `$User` / `$Organization` global merge fields too. Explanation is accurate.

**Obsolete:** **Classic Mail Merge and Extended Mail Merge were retired.** The modern equivalents are **Lightning Email Templates** and third-party document-generation apps. The merge-field *principle* survives; the feature named in the question does not.

---

### Topic 1 — Q486. Custom Summary Formulas can run calculations on report calculations
**Your answer:** A (True)
**Verdict: CORRECT**

Correct, and the explanation earns credit for naming **PARENTGROUPVAL** and **PREVGROUPVAL** (given as ParentRowVal/PrevRowVal) — these operate on summary values, which is precisely what "calculations on report calculations" means.

**Worth adding, because exams test the limits:** a report may contain up to **5 custom summary formulas**, each up to **3,900 characters**, and a CSF **cannot reference another CSF**. CSFs also require a **grouped** report — they are unavailable on tabular.

---

### Topic 1 — Q487. What is true about a Chatter Plus user?
**Your answer:** B (…up to **20** custom objects)
**Verdict: INCORRECT — the correct answer is A (…up to **ten** custom objects)**

**The Chatter Plus (Chatter Only) licence allows access to 10 custom objects, not 20.** Salesforce's licence documentation lists it explicitly: a Chatter Only user can view accounts and contacts, use Content, Ideas and Answers, use the calendar, run and view reports and dashboards, use approvals — and *"view and modify up to **ten** custom objects."*

Options A and B are deliberately identical except for that number. A says "ten", B says "20". **A is correct.**

**Action:** change to `Answer: A`.

**Obsolete:** the **Chatter Plus / Chatter Only** licence is legacy and is not sold to new customers. Chatter itself is now included with all standard Salesforce licences. Even with the answer corrected, this question has no current exam value.

---

### Topic 1 — Q489. Which function is available in the report builder before running the report?
**Your answer:** AD (with the answer restated in brackets)
**Verdict: CORRECT / CAVEAT**

**A and D are both right.** In the report builder you can **Save** at any point, and **Show/Hide Details** is a builder toggle that works on the preview. **Printable View**, **Export Details** and **Schedule Future Runs** all require the report to have been run or saved and closed.

**Two defects:**
1. **The stem is singular** — *"Which function is available…"* — but the answer gives two. Change the stem to **"Choose 2"** (**F12**).
2. **The answer line restates itself:** `Answer: AD (or A. Save and D. Show/hide details)`. The bracket adds nothing and reads like uncertainty. Reduce to `Answer: A, D` (F3).

---

### Topic 1 — Q490. A controlling picklist can have up to how many values?
**Your answer:** B (500)
**Verdict: INCORRECT — the correct answer is F (300) — and it contradicts your own Q297**

**The limit is 300.** Salesforce states it directly: *"The maximum number of values allowed in a controlling field is 300."* This is a **hard cap**, not a default that Support can raise.

**You already answered this correctly earlier in the file:**

| | Q297 | Q490 |
|---|---|---|
| Question | "Maximum number of values allowed in a controlling field" | "A controlling picklist can have up to how many values" |
| Your answer | **C — 300** ✅ | **B — 500** ❌ |

Q297 is not only right, it carries the best explanation in the entire file. Q490's explanation, by contrast, invents a two-tier limit (*"maximum of up to 500… with a default typically starting at 300, which can be increased upon request"*) that does not exist in Salesforce documentation.

**Action:** change to `Answer: F`, then **delete the question** — it is a straight duplicate of Q297 and Q297 is better written. Logged as contradiction **C12** and duplicate **D13**.

*Formatting:* `490.A controlling` — missing space (F5); `Answer: B. 500` mixes letter and value (F3).

---

### Topic 1 — Q492. The three core building blocks of Security and Access
**Your answer:** BdE → B, D, E
**Verdict: CORRECT**

Correct, and this is a genuinely good explanation. **Organization-Wide Defaults** set the restrictive baseline, the **Role Hierarchy** opens access **vertically** up the management chain, and **Sharing** (rules, manual, teams) opens it **horizontally** across peers. The closing note — that Profiles govern **object and field** access rather than **record** access — is exactly the distinction this topic turns on.

**One refinement:** the vertical/horizontal framing is good, but be precise that the role hierarchy opens access **upward only** — a manager sees a subordinate's records, never the reverse.

*Formatting:* `BdE` mixes cases (F3).

---

### Topic 1 — Q494. Which objects can be stored in a folder?
**Your answer:** BCD → B, C, D
**Verdict: CORRECT / CAVEAT — option A is dangerously ambiguous**

The answer is right for the intended reading, and your explanation spots the problem itself — but only in a parenthetical.

**The four folder types in Salesforce are: Documents, Email Templates, Reports and Dashboards.** Option A simply says **"Emails"**. If a candidate reads that as **Email Templates**, A is correct and the answer becomes A, B, C, D. If they read it as **Email Messages** (the activity records on cases), A is wrong.

**Action:** reword option A to **"Email Messages"** so the intended reading is forced — or, better, change it to **"Email Templates"** and make the answer **A, B, C, D**, since knowing that email templates live in folders is the more useful fact.

---

## BATCH 11 SUMMARY (Q409–Q494, 30 questions)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 14 | Q412, Q413, Q418, Q423, Q436, Q442, Q444, Q446, Q450, Q452, Q472, Q482, Q486, Q492 |
| CORRECT / OBSOLETE | 4 | Q440, Q466, Q467, Q484 |
| CORRECT / CAVEAT | 6 | Q409, Q417, Q443, Q476, Q489, Q494 |
| DISPUTED | 3 | Q415, Q433, Q449 |
| **INCORRECT** | **3** | **Q411, Q487, Q490** |

**The three wrong answers:**

1. **Q411** — should be **D (VLOOKUP)**, not "none of the above". VLOOKUP is available **in validation rules only**, never in a formula field. That restriction is the whole question.
2. **Q487** — should be **A**, not B. The Chatter Plus licence covers **10** custom objects, not 20. Options A and B differ only in that number.
3. **Q490** — should be **F (300)**, not B (500). A controlling field is hard-capped at **300** values. **You answered this correctly at Q297** — logged as contradiction **C12**.

**Three unsound questions:**
- **Q415** — the explanation says the limit for Unlimited Edition is **800** and then keys **500** as "the closest correct option". 800 isn't on the list. Change the stem to **Enterprise**, or add 800 as an option.
- **Q433** — the explanation concedes the outcome "depends on the evaluation criteria", which makes option **C** the honest answer. Name the criterion in the stem, then B works.
- **Q449** — I'd key **A (True)**. A separately deleted child is not restored with its parent, and cannot be undeleted while the parent sits in the Recycle Bin.

**Explanations that undermine their own answers (F8):** Q409 (cites dynamic dashboards, which *remove* the discrepancy), Q415 (states 800, keys 500), Q417 (ends by saying none of the options are correct, after keying one).

**Numbering:** 86 numbers, **30 questions** — 56 missing, including runs of 13 (Q453–Q465) and 9 (Q424–Q432).

**Best explanations this batch:** **Q450** (why a web submitter can never see a validation error) and **Q492** (the vertical/horizontal framing of OWD, hierarchy and sharing) are both excellent. **Q413** deserves credit for teaching the *right* reason — that Cases are unsupported — rather than the tempting-but-wrong record-count reasoning.

---

# BATCH 12 — File: `Admin-201 Topic 1.md`, Questions 495–571 (plus the stray Q2/Q12 block)

> This batch contains the **stray re-pasted block** first spotted in Batch 1 — it sits between Q498 and Q501 and is covered below.
>
> One wrong answer (Q504, caused by a **truncated stem**), three unsound questions, and an unusually high caveat count because several explanations end with **orphaned video-link text** copied in from the source.

---

### Topic 1 — Q495. Which editions support Sandbox?
**Your answer:** A, E, F (Unlimited, Developer, Enterprise)
**Verdict: CORRECT / CAVEAT**

Correct against the legacy key, and your explanation is careful to say "natively", which is the word that keeps it defensible.

**Modern position:** sandboxes are no longer strictly an Enterprise-and-above feature. **Professional Edition can now have Developer sandboxes**, and the allocations differ sharply by edition — Enterprise includes 25 Developer, 1 Developer Pro and 1 Partial Copy; Unlimited/Performance includes considerably more plus a Full sandbox. Developer Edition doesn't get sandboxes at all in the usual sense — it *is* a free development org.

If you keep the question, say "included at no extra cost" rather than "support", which is what makes A/E/F right.

---

### Topic 1 — Q498. Opportunity Products can be linked in a Lookup Relationship
**Your answer:** A (True)
**Verdict: DISPUTED — the explanation states something that is not true**

**The claim in your explanation is wrong:** *"the standard relationship between an Opportunity and Opportunity Products is technically defined as a lookup relationship under the hood"*. It is a **master-detail** relationship. That is exactly why it behaves the way the explanation then describes — the parent is required, deleting the Opportunity cascade-deletes its line items, and the line items roll up into the Opportunity Amount. Those are master-detail behaviours, not "master-detail-*like*" ones.

**The deeper problem is the stem.** *"Opportunity products can be linked in a Lookup Relationship"* has at least two readings:
- *"Is the Opportunity → Opportunity Product relationship a lookup?"* → **False** (it's master-detail).
- *"Can you add a custom lookup field to the Opportunity Product object?"* → **True**.

A True/False question that flips depending on which reading you take cannot be marked. **Recommendation:** replace it with the genuinely examinable version — *"The relationship between Opportunity and Opportunity Product is a master-detail relationship. True/False"* → **True**.

---

### Topic 1 — The stray block between Q498 and Q501
**Verdict: ORPHANED FRAGMENT — no answers, no explanations. Delete.**

Sitting between Q498 and Q501 is a re-pasted fragment containing two questions numbered **2** and **12**:

```
2. If a company opts to use Custom Fiscal Years, they cannot use the standard forecasting option.
A. True Most Voted
B. False
12. A _________ defines a collection of settings and permissions that determines
    what users can see in the user interface, and what they can do.
A. Role
B. Chatter feed
C. Profile Most Voted
D. Company Profile
```

**Every problem in one place:**
- These are **duplicates of Q2 and Q12** from the top of the file (logged as **D1** and **D2**).
- They have **no `Answer:` line** — the answer is implied only by the words `Most Voted` appended to an option (**F10**).
- They have **no explanation and no timestamp**.
- They **break the numbering** — the file runs …498, **2**, **12**, 501…
- `Most Voted` is a scraped artefact from the dump site the content came from (**F6**).

**Action: delete the whole block.** The originals at Q2 and Q12 are complete and correctly answered.

---

### Topic 1 — Q501. What must be specified to schedule a report?
**Your answer:** ABD
**Verdict: CORRECT**

Correct. Scheduling a report requires a **Running User** (whose access determines the rows in the emailed report), a **Start Date** with a frequency, and a **Preferred Start Time**. Emailing the report (option C) is optional — a schedule can simply refresh without notifying anyone.

**Worth adding:** the Preferred Start Time is a *preference*, not a guarantee — Salesforce runs the job in the available window near that time. And scheduled reports run in the running user's **time zone** and **locale**.

*Formatting:* the explanation is labelled `Note:` instead of `Why:` (F9).

---

### Topic 1 — Q502. Maximum actions per time trigger in a workflow rule
**Your answer:** C (40)
**Verdict: CORRECT / OBSOLETE**

Correct — **40 actions per time trigger**, and your parenthetical correctly pairs it with the 10-time-triggers-per-rule limit.

> **Consistent with Q265** (10 time triggers per rule) and **Q558** (10 immediate actions per rule). The three together give the full picture, and none of them contradict — which is worth noting given how many other limit questions in this file do.

**Obsolete:** workflow rules are closed to new creation; scheduled paths in Flow are the replacement.

---

### Topic 1 — Q503. What is conditional highlighting for reports?
**Your answer:** B
**Verdict: CORRECT**

Correct. Conditional highlighting applies **colour-coded thresholds to summary values**. Option A is nonsense ("conditions that will report the calculated fields"). Explanation is accurate.

---

### Topic 1 — Q504. The running user and sharing on a dashboard
**Your answer:** A (True)
**Verdict: INCORRECT AS PRINTED — the stem is truncated and says the opposite of what it means**

**Read the stem as it actually appears in the file:**

> *"The running user **doesn't** override the sharing role while allowing users to see high-level sales data for everyone, not just"*

It ends mid-sentence at "not just", and it contains a negation. **Then your explanation argues the exact opposite of the stem** (F8):

> *"…the dashboard will display high-level sales data for everyone in the organization, **overriding** the restricted sharing visibility of the individual viewers…"*

**Your explanation is the correct fact.** A dashboard's running user **does** override each viewer's own sharing — that is precisely what "Run as specified user" means, and it is why the setting exists. So for the stem **as printed**, the answer is **B (False)**.

**Recommendation — fix the stem, not the answer.** Rewrite it as:

> *"The dashboard running user overrides the viewer's sharing settings, allowing users to see high-level sales data for everyone, not just their own records."* → **True**

That restores the original Salesforce Help sentence this was scraped from and makes the keyed answer A correct.

---

### Topic 1 — Q507. Which statements are true about standard fields?
**Your answer:** C
**Verdict: CORRECT / CAVEAT**

C is right — standard field **labels** can be renamed via *Rename Tabs and Labels*.

**Two refinements:**
1. **Your reason for rejecting B is muddled:** *"You cannot delete standard fields, though you can sometimes remove unused ones from page layouts"*. The page-layout point belongs to option D, not B. Keep B's rejection to one clean fact: **standard fields cannot be deleted** — only hidden via FLS or removed from layouts.
2. **Option D deserves a sharper kill:** you cannot remove a **universally required** standard field (such as Account Name or Last Name) from a page layout — Salesforce blocks the save. Non-required standard fields *can* be removed.

**Stem/answer mismatch (F12):** the stem says "Which statement**s** are true" (plural) but only one is. Change to *"Which statement is true…"*.

---

### Topic 1 — Q508. Standard Fiscal Years are for companies using custom fiscal periods
**Your answer:** B (False)
**Verdict: CORRECT**

Correct, and the explanation is complete: Standard Fiscal Years follow the Gregorian calendar with standard months and quarters; **Custom** Fiscal Years are what you use for 4-4-5 calendars and other non-standard period structures. Naming the 4-4-5 example is a good touch.

> Ties to **Q2** and **C7** — enabling custom fiscal years is the one-way door that switches you off standard forecasting.

---

### Topic 1 — Q509. True statement regarding a custom field formula
**Your answer:** C
**Verdict: CORRECT / CAVEAT — right concept, outdated numbers, waffling explanation**

**The concept the question tests is excellent** and genuinely examinable: a formula has **two separate limits** — the characters you type, and the size after compilation. Option C is the only statement that reflects that distinction, so C is the answer.

**But the numbers are wrong, and your explanation half-admits it:**

| Limit | Current value |
|---|---|
| Formula **text** you can type | **3,900 characters** |
| **Compiled** size | **5,000 bytes** |

The options offer 4,000 for both, which matches the **older** compiled-size limit — that is why C was the legacy key. Your explanation then writes *"often colloquially referred to around the 4,000-5,000 mark depending on legacy limits or exam options"*, which is hedging, not teaching (**F13**).

**Action:** keep `Answer: C`, and replace the waffle with the two exact numbers above plus one line saying the option reflects a superseded limit.

---

### Topic 1 — Q511. Active currencies live in Company Profile, user record and Opportunity
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

The answer is right for the intended meaning, but "live in" blurs an important distinction.

**Active currencies are *defined* in exactly one place:** *Setup > Company Information > Manage Currencies*. That is where an admin activates currencies and sets the **corporate currency** and conversion rates.

The other two places **select** from that list rather than defining it: a **user record** carries the user's *personal* default currency, and an **Opportunity** carries the currency that record is denominated in. Nothing is "activated" at either level.

> **Ties to Q57**, where the explanation wrongly said imported records default to the *corporate* currency — they default to the **importing user's personal currency**. Stating the three-level model cleanly here fixes both questions.

---

### Topic 1 — Q512. Hiding a field from views, searches and reports
**Your answer:** B (Field Level Security)
**Verdict: CORRECT**

Correct, and this is one of the best explanations in the batch. The contrast it draws is exactly the examinable point: **FLS removes the field everywhere** — detail pages, edit pages, related lists, list views, reports, search results, email templates and the API. **Removing a field from a page layout only hides it from that layout**, leaving it fully visible in reports, list views and search. Nothing to add.

---

### Topic 1 — Q513. What are the different types of Sharing Rules?
**Your answer:** A, B, C, D, E (all five)
**Verdict: DISPUTED — I believe C (Solution Sharing Rules) does not exist**

Four of the five are correct. **Sharing rules for Solutions are not offered.**

**What *Setup > Sharing Settings* actually lists:** Account (and associated contracts/orders), Account Territory, **Campaign**, **Case**, Contact, **Lead**, Opportunity, Order, User, and every **Custom Object**. **Solution is not among them.** Solutions have an org-wide default, but there is no Solution sharing-rule section to create rules in.

**Recommended answer: A, B, D, E** — or remove option C and make it a clean "all of the following" question.

**The explanation is also answering a different question than the one asked.** The stem says "what **types** of sharing rules", and the options are object-based. Your explanation pivots to the *other* meaning of "type" — **owner-based versus criteria-based**. That distinction is correct and genuinely examinable, but it doesn't justify the five options. Pick one meaning: either list the objects, or ask "What are the two types of sharing rule?" → **owner-based and criteria-based**.

*Formatting — F6:* the explanation ends with orphaned video-link text: *"This Sharing rules in Salesforce video demonstrates…"*.

---

### Topic 1 — Q515. Can a delegated approver revoke a previously approved process?
**Your answer:** A (Yes)
**Verdict: DISPUTED — I believe the answer should be B (No)**

A delegated approver's powers are deliberately narrow, and "revoke something already approved" is outside them.

**What a delegated approver can do:** respond to a **pending** approval request assigned to the person who delegated to them — approve it or reject it.

**What a delegated approver cannot do:**
- **Reassign** an approval request. Salesforce documents this restriction explicitly.
- Act on a request that has **already been resolved**. Once a request is approved, that step is complete.

**Recalling** a submitted request is a separate mechanism altogether: it belongs to the **submitter** (only if *"Allow submitters to recall approval requests"* is enabled on the process) or to an **administrator**, who can also unlock the record. It is not a delegate power.

Option B's wording — *"once the request is approved only administrator can revoke the approval process"* — matches that reality. **Recommendation: change to `Answer: B`.**

*Formatting — F6:* ends with orphaned tutorial-link text.

---

### Topic 1 — Q516. Approver A rejects, then Approver B approves — approved or denied?
**Your answer:** B (Denied)
**Verdict: CORRECT**

Correct, and the reasoning is right: under **"approve or reject based on the FIRST response"**, the first reply resolves the step and every later response is ignored. Approver A rejected first, so the request is **denied**.

**Worth adding, because it strengthens the answer:** the outcome is the same under the other multi-approver setting. With **"require UNANIMOUS approval"**, a single rejection also rejects the whole step. So whichever of the two configurations is in play, **any rejection from A denies the request** — which is a cleaner way to teach it than relying on the reader to assume "first response".

*Formatting — F6:* ends with orphaned tutorial-link text.

---

### Topic 1 — Q523. The two main parts of a Workflow
**Your answer:** B (Rules and Actions)
**Verdict: CORRECT**

Correct. **Criteria** decide *when*, **actions** decide *what*. Your explanation gives a concrete example (Stage = Closed Won) and names all four action types, which is exactly the right level of detail.

*Formatting:* `Answer: B Rules and Actions` mixes letter and value with no punctuation (F3).

---

### Topic 1 — Q526. Kathy, Jennifer and Phil — which opportunities can Kathy view and edit?
**Your answer:** `A,C;E. Kathy can edit and view Phils opportunities`
**Verdict: CORRECT / CAVEAT — the reasoning is right, the answer line is mangled**

**A, C and E is the correct set**, and the explanation reasons through each one properly:
- **A** — an owner always has full access to their own records, whatever the OWD.
- **C** — Phil (US Rep) is **below** Kathy (US Sales Director) in the same branch, so the role hierarchy gives her **Read/Write**.
- **E** — Jennifer is in a **different branch** (EMEA), so hierarchy gives Kathy nothing. Her access comes only from the stated account-based right, which is **view only**.

**The answer line is broken (F1/F3):** `A,C;E. Kathy can edit and view Phils opportunities` uses a **semicolon** as a separator and then appends the text of option **C** after the letter **E**. A parser would read this as gibberish, and a human might read the answer as C. Replace with `Answer: A, C, E`.

**Typos throughout:** `jennifers`, `Phils`, `phils` — missing apostrophes and inconsistent capitalisation in both the options and the explanation.

**Structural note:** options **C** and **D** are direct opposites ("can edit Phil's" / "can view but cannot edit Phil's"). That's fine as a distractor pair, but it means a careless reader who picks D is only one word away from the right idea — worth keeping.

*Formatting:* `526.Org wide default` — missing space after the number (F5).

---

### Topic 1 — Q528. Phil owns the ABC account; Tim owns an opportunity on it
**Your answer:** C
**Verdict: CORRECT**

Correct. The stem hands you the deciding rule: *"users in the US sales rep role can edit ALL opportunities associated with the accounts they own."* That is the **Opportunity Access** setting on the role, set to **Read/Write**. Phil owns the ABC account, so he can view **and edit** Tim's opportunity on it — even though Tim is in a different branch of the hierarchy and owns the record.

**Worth naming the feature:** this is the role's **"Opportunity Access"** setting (Read Only / Read-Write / No access), which grants account owners rights over opportunities on their accounts regardless of who owns them. Naming it turns a scenario answer into a transferable rule.

> Note this is the same mechanism that makes **Q526 option E** true — except there it is set to **view only**. The two questions form a nice pair; say so in both.

*Formatting:* `Answer:C` and `Why:Phil` — missing spaces (F3).

---

### Topic 1 — Q536. Record Types are not available in…
**Your answer:** D (Professional Edition)
**Verdict: CORRECT / CAVEAT — outdated**

D matches the legacy key, and for years it was right: Professional Edition had no record types.

**Current position:** Salesforce now lists Record Types as **available in Professional Edition** (alongside Enterprise, Performance, Unlimited and Developer). So the question as written now has **no correct answer** — record types exist in all four listed editions.

**Your explanation already senses this** and hedges its way through it: *"Professional Edition has a limit or restriction depending on the specific object, and historically custom record types are severely limited or unavailable…"*. That is three qualifiers in one sentence (**F2**).

**Recommendation:** either delete the question, or reframe it against editions that genuinely lack the feature — **Group** and **Essentials**.

*Formatting:* the explanation is labelled `Note:` rather than `Why:` (F9).

---

### Topic 1 — Q546. Identify the correct statement about lookups
**Your answer:** A
**Verdict: CORRECT**

Correct. A lookup **links two objects loosely** and has no effect on security, ownership or deletion. Explanation is accurate.

**One wording fix:** the explanation says master-detail cascades "ownership **down to** child records". More precisely, a master-detail **child has no owner of its own** — it inherits the parent's owner and the parent's sharing entirely. There is no OwnerId field on a detail record. That is a cleaner statement of the same idea.

> Consistent with **Q245** and **Q401**. Three questions on the same lookup-versus-master-detail distinction, all answered correctly — consider consolidating.

---

### Topic 1 — Q547. How can you ensure that a value is entered in a field?
**Your answer:** B (page layout property)
**Verdict: CORRECT / CAVEAT — third question on the same topic**

B is right for the options offered. FLS can't enforce requiredness, lookups link objects, and picklist values only define choices.

> **Duplicate cluster (new, D15):** this is the **third** "how do you make a field required" question — **Q275**, **Q390** and **Q547** — and they key **three different mechanisms** (Page Layout, Validation Rule, Page Layout) purely because each offers a different option list. See contradiction **C9**. Keep one question and give it the complete option set: field definition, page layout, validation rule, FLS.

**Your explanation is actually the best of the three** because it names all three real mechanisms (page layout, field-definition Required, validation rule) instead of just defending the keyed letter. Use this wording when you consolidate.

---

### Topic 1 — Q552. Required step when configuring Salesforce for Outlook
**Your answer:** A, C
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy feature: an Outlook configuration defined **sync direction and conflict behaviour**, and users/profiles had to be **assigned to a configuration**.

**Obsolete:** **Salesforce for Outlook was retired in June 2021.** This is now the **third** dead Salesforce-for-Outlook question in the file (**Q250**, **Q552**, and Q554 references *Connect for Outlook*, retired even earlier). The modern equivalents are the **Outlook Integration** and **Einstein Activity Capture**, which are configured completely differently.

*Formatting:* labelled `Note:` instead of `Why:` (F9).

---

### Topic 1 — Q554. Exporting accounts and contacts in Contact Manager edition
**Your answer:** B (run a report and use Export Details)
**Verdict: CORRECT / OBSOLETE**

B matches the legacy key, and the reasoning — no API, therefore no Data Loader — is the right chain of logic.

**Two things have changed:**
1. **Contact Manager Edition is retired.** It is no longer sold.
2. **Option D is closer to true today than the question allows.** The **Data Export** service is available to lower editions on a **monthly** schedule (weekly is the Enterprise-and-above privilege). The question's premise — that there is *no* scheduled export at all — reflects an older state of the product.

Option C references **Connect for Outlook**, retired even before Salesforce for Outlook. **Recommendation: delete.**

---

### Topic 1 — Q558. Maximum number of actions per workflow rule
**Your answer:** A (10)
**Verdict: CORRECT / CAVEAT**

Correct — and your explanation deserves credit for specifying **immediate** actions, because without that word the question looks like it contradicts Q502.

**Make the relationship explicit, because three questions in this file test three different numbers:**

| Limit | Value | Question |
|---|---|---|
| Immediate actions per rule | **10** | Q558 |
| Time triggers per rule | **10** | Q265 |
| Time-dependent actions **per time trigger** | **40** | Q502 |

So a single rule can carry 10 immediate actions **plus** up to 10 × 40 = 400 time-dependent ones. Spelling that out turns three isolated numbers into one coherent model — and pre-empts a learner thinking Q502 and Q558 disagree.

**Obsolete:** workflow rules, as throughout.

---

### Topic 1 — Q564. FILL BLANK — user already logged in when restricted hours start
**Your answer:** free text — "can continue to view their current page, but cannot take any further action"
**Verdict: CORRECT / CAVEAT — duplicate, and the only question of its kind in the file**

**The content is correct** and matches Salesforce Help exactly.

**Two problems:**
1. **Duplicate (new, D16):** this is the same fact as **Q385**, which asks it as a proper multiple-choice question with a well-built set of distractors. Q385 is the better question — keep it and delete Q564.
2. **Format outlier (new defect, F14):** this is the **only "FILL BLANK" question in the file**. It has no options, no letters and no `Why:` label — just an `Answer:` line of prose. Any quiz tool built on this file will either skip it or crash on it.

---

### Topic 1 — Q567. Controlling and dependent picklists have the same maximum values
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT — the explanation repeats the Q490 error**

**B is correct.** A **controlling** field is capped at **300** values; a **dependent** picklist is bound only by the normal custom picklist limit of **1,000** values. Different limits, so the statement is false.

**But the explanation repeats the fabricated claim from Q490:**

> *"Controlling Picklists are restricted to a default maximum of 300 values (though it can sometimes be requested to increase up to 500)."*

**There is no 500.** The 300-value controlling-field limit is a **hard cap** that Salesforce Support does not raise. This is the same invention that made **Q490** wrong, so the error now appears in **two** places. Logged under contradiction **C12** — fix both, using **Q297**'s wording as the model.

*Formatting — F6:* ends with orphaned link text: *"check out this guide on How to create Dependent Picklists in Salesforce"*.

---

### Topic 1 — Q568. Maximum records returned in a report without exporting
**Your answer:** D (2,000)
**Verdict: CORRECT**

Correct. A report displays a maximum of **2,000 rows** in the browser; beyond that you must export. Explanation is accurate.

**Companion numbers worth adding**, since this is a limits question: exporting as **Formatted Report** caps at **100,000 rows**; exporting **Details Only** goes much higher. A **dashboard** component shows far fewer still, and a report used as a dashboard source returns a limited row set.

---

### Topic 1 — Q571. Custom Summary Formulas can run calculations on custom formula fields
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

Correct. A **numeric** custom formula field can be summarised in a report and therefore referenced by a custom summary formula.

**The qualifiers matter and are missing:**
- The formula field must return **Number, Currency or Percent**. A text or date formula field cannot be summarised, so a CSF cannot use it.
- The field must actually be **summarised in the report** for the CSF to reference its summary value.
- **A CSF cannot reference another CSF** — the single most common thing people try and can't do.

> Pairs with **Q486**. Together they cover custom summary formulas well; add the 5-per-report and 3,900-character limits to one of them.

*Formatting:* `Answer: ATrue` — letter and value run together with no space (F3).

---

## BATCH 12 SUMMARY (Q495–Q571, 27 questions + 1 orphaned block)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 9 | Q501, Q503, Q508, Q512, Q516, Q523, Q528, Q546, Q568 |
| CORRECT / OBSOLETE | 3 | Q502, Q552, Q554 |
| CORRECT / CAVEAT | 11 | Q495, Q507, Q509, Q511, Q526, Q536, Q547, Q558, Q564, Q567, Q571 |
| DISPUTED | 3 | Q498, Q513, Q515 |
| **INCORRECT (as printed)** | **1** | **Q504** |
| **ORPHANED FRAGMENT** | **1** | **the stray Q2/Q12 block** |

**Headline — Q504 is wrong only because its stem is broken.** The sentence is **truncated mid-way** ("…not just") and contains a negation ("doesn't override") that your own explanation then argues against. The fact in the explanation is right: a dashboard's running user **does** override each viewer's sharing. Fix the stem; keep `Answer: A`.

**Delete the stray block between Q498 and Q501.** Two re-pasted questions with **no answer lines**, no explanations, no timestamps, `Most Voted` scrape artefacts, and numbers (2 and 12) that break the sequence.

**Three unsound questions:**
- **Q498** — the explanation claims Opportunity→Opportunity Product is "a lookup under the hood". It is **master-detail**. The stem is also ambiguous enough to be True or False depending on reading.
- **Q513** — **Solution sharing rules do not exist.** Recommended answer **A, B, D, E**. The explanation also answers a different question (owner-based vs criteria-based) than the one asked.
- **Q515** — I'd key **B**. A delegated approver can approve or reject a **pending** request; they cannot reassign, and they cannot revoke something already approved.

**The Q490 error has a second home:** **Q567** repeats the invented "300 raisable to 500" controlling-picklist claim. Both need fixing against **Q297**.

**A new artefact pattern — orphaned video-link text.** Four questions in this batch (**Q513, Q515, Q516, Q567**) end with a dangling sentence promoting a video or tutorial that isn't linked to anything, e.g. *"This Salesforce Delegated Approver tutorial covers how delegation functions…"*. Combined with Q334, Q369 and Q411, that is **seven** occurrences. Worth a single find-and-delete pass.

**New format outlier (F14):** **Q564** is the only **FILL BLANK** question in the file — no options, no letters, prose answer. It is also a duplicate of Q385.

**Best explanations this batch:** **Q512** (FLS hides everywhere, page layout hides one layout) and **Q528** (account-owner opportunity access) are both complete and correct. **Q547** has the best account of field requiredness anywhere in the file — use it when you consolidate Q275/Q390/Q547.

---

# BATCH 13 — File: `Admin-201 Topic 1.md`, Questions 572–662

> Numbering note: this range spans 91 numbers but contains only **30 questions** — 61 missing, including runs of 12 (Q620–Q631) and 11 (Q651–Q661).
>
> One wrong answer (**Q606**, where the explanation flatly contradicts the answer), two disputed questions, and **three more `FILL BLANK` outliers** — plus two word-for-word duplicates of questions from the very start of the file.

---

### Topic 1 — Q572. Trialforce Email Branding
**Your answer:** BD
**Verdict: OUT OF SCOPE — recommend deleting**

B and D are defensible statements about the feature, so the answer isn't *wrong*. But **Trialforce is ISV partner tooling**, not administrator content. It concerns how an AppExchange partner brands the trial orgs their prospects sign up for.

**It has never been on the Admin 201 exam** — it belongs to the partner/ISV track — and the feature itself has been folded into the modern **Environment Hub / AppExchange trial** experience. **Delete.**

---

### Topic 1 — Q573. Admins can create an unlimited number of custom profiles from scratch
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT**

B is right, and your explanation gives **two** reasons. **Lead with the second one**, because it is the certain one and the one the question is really testing:

> **You cannot create a profile "from scratch" at all.** Every custom profile is made by **cloning** an existing standard or custom profile. There is no blank-profile option in Setup.

That single fact makes the statement false regardless of any numeric limit.

**Soften the number.** The "1,500 custom profiles per user license type" figure is not a limit I'd stake the answer on — profile limits vary by edition and license, and Salesforce doesn't publish it as a headline cap. Keep it as a secondary note, or drop it.

---

### Topic 1 — Q574. What else must you define when creating a validation rule?
**Your answer:** B (An Error Message)
**Verdict: CORRECT / CAVEAT — the explanation counts one thing twice**

B is right. The explanation says a validation rule has *"three essential components"* and then lists:

1. **Formula Expression** — "the condition that evaluates to true or false"
2. **Error Condition Formula** — "the logic that determines when the error should fire"
3. Error Message

**Items 1 and 2 are the same thing under two names.** Salesforce calls it the **Error Condition Formula**, and it is the only formula a validation rule has.

**The real required components are:**
- **Rule Name** (unique)
- **Error Condition Formula** — when it evaluates to **TRUE**, the save is blocked (this inversion trips people up)
- **Error Message**
- **Error Location** — *Top of Page* or *Field*

Adding Error Location is worthwhile: it is a genuine second "what else must you define" and it is exam-relevant.

---

### Topic 1 — Q575. You can set a default value for a custom field
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

Correct. Default values can be literal or formula-driven, and they populate on record creation.

**The explanation over-generalises in one place.** It lists picklists among fields where you "specify a default value" — picklists work differently: you mark **one picklist value as the default** in the value list, not in a Default Value field.

**Worth stating the exclusions**, because that's where exam questions live — you **cannot** set a default value on: **Auto-Number**, **Formula**, **Roll-Up Summary**, **Master-Detail/Lookup** relationship fields, **Long Text Area**, **Rich Text Area**, or **Encrypted** fields. And, per **Q270**, you cannot set one on a **standard** field at all.

---

### Topic 1 — Q576. Order in which workflow actions fire
**Your answer:** B (Field Updates, Tasks, Email Alerts, Outbound Messages)
**Verdict: CORRECT / CAVEAT**

B matches the legacy key and the ordering is the one taught in classic ADM-201 material.

**A note of honesty worth adding:** Salesforce **does not formally document** a guaranteed execution order for the non-field-update workflow actions. What *is* documented and reliable is the part that matters:

> **Field updates execute first**, so that the new values are available to everything that follows — and a field update can cause **workflow rules to be re-evaluated** if "Re-evaluate Workflow Rules After Field Change" is ticked, which is a genuine source of recursion.

**Option C is testing something else entirely** — "Apex before triggers, Apex after triggers, Workflow Rules" is the **Order of Execution**, a separate and far more examinable topic. If you keep this question, consider replacing it with one on the order of execution instead.

---

### Topic 1 — Q577. Example of a one-to-many relationship between standard objects
**Your answer:** B (Accounts to Contacts)
**Verdict: DISPUTED — option A is also a one-to-many relationship**

B is correct. The problem is that **A is correct too**, and your explanation dismisses it with a non-reason:

> *"Opportunities to Opportunity Products is a master-detail / line-item relationship"*

**A master-detail relationship *is* a one-to-many relationship.** One Opportunity, many Opportunity Products. Saying "it's master-detail" doesn't exclude it — master-detail and lookup are both one-to-many; they differ in ownership, sharing and cascade delete, not in cardinality.

**Your rejections of C and D are both sound:** "Tickets" is not a Salesforce object, and Contacts → Accounts is **many-to-one** (the same relationship read from the other end).

**Recommendation:** make it **"Choose 2"** with the answer **A, B**, or remove option A. As printed, two options are right and only one is keyed.

---

### Topic 1 — Q578. A record owner has the privileges to view, edit, transfer and delete
**Your answer:** C,d → C, D
**Verdict: CORRECT / CAVEAT**

The answer is right and the underlying fact is one of the most important in the whole security topic:

> **Ownership grants record-level access, but object-level permissions gate it.** An owner without Delete on the object cannot delete their own record.

> **This is the same fact that Q351 gets wrong.** Q351 asks whether a user can own a record and not see it, answers correctly, then blames FLS and sharing rules. Q578's explanation is the right one — **use this wording to fix Q351.**

**The option list is badly built, though.** Six options built from *True/False* × *object permission enabled/disabled* means C and D are simply the same statement read two ways, and E and F are their impossible inverses. A cleaner version: *"A record owner can always delete their own records. True/False"* → **False**, because Delete permission is required.

*Formatting:* `C,d` mixes cases (F3).

---

### Topic 1 — Q579. Maximum leads/contacts addable from a report at one time
**Your answer:** B (50,000)
**Verdict: CORRECT**

Correct — **50,000** records can be added to a campaign from a report in one operation. Explanation is accurate.

**Terminology note:** "Integrated Campaign Builder" is legacy branding. The feature survives as the **Add to Campaign** button on a report, and the 50,000 limit still applies. So the fact is current even though the name isn't.

---

### Topic 1 — Q580. Lead conversion creates an Account, Contact and Opportunity
**Your answer:** A (True)
**Verdict: CORRECT**

Correct, and the explanation correctly names the *"Do not create a new opportunity upon conversion"* checkbox, which is what makes the parenthetical in the stem true.

**Two additions that make this genuinely complete:**
1. You can convert into **existing** records rather than new ones — Salesforce offers to match on Account name and Contact name (this is **Q235**).
2. If **Person Accounts** are enabled and the Lead's Company field is blank, conversion creates a **Person Account** instead of an Account + Contact pair.

---

### Topic 1 — Q581. Printable View displays the report in Excel
**Your answer:** B (False)
**Verdict: DISPUTED — I believe the answer is A (True), and it contradicts your own Q249**

**In Salesforce Classic, a report's Printable View button produces an Excel (.xls) file**, formatted to preserve the report's groupings, subtotals and headers. That is the whole distinction between **Printable View** (formatted, opens in Excel) and **Export Details** (raw rows, CSV or Excel, no formatting).

**Your own file already says this.** **Q249** asks whether "Printable View does not save all the report formatting", you answer **False**, and the explanation reads: *"Printable View preserves report formatting — including headers, column summaries, and grouping structures — **when exporting to formats like Microsoft Excel**."*

Q249 and Q581 cannot both be right. Logged as contradiction **C13**.

**Where the confusion comes from:** Printable View on a **record detail page** or a **list view** *does* open a plain HTML browser window. It is specifically the **report** Printable View that generates Excel. The question is about a report.

**Also worth noting:** in **Lightning Experience** there is no Printable View button on reports at all — you use the browser's print or the Export dialog. So this question only has meaning in Classic.

**Recommendation:** change to `Answer: A` and align the explanation with Q249, or delete both and keep a single, clearly Classic-scoped question.

---

### Topic 1 — Q585. Only users with "Create and Customize" permission can access reports
**Your answer:** B (False)
**Verdict: CORRECT**

Correct, and the explanation draws the right line: **running and viewing** a shared report needs only folder access plus object read permission; **"Create and Customize Reports"** is required to build or modify one. Accurate and complete.

---

### Topic 1 — Q586. Validation rules are executed per field rather than per record
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. A validation rule evaluates **once per record on save**, against the whole record, even if its formula references only one field. Explanation is accurate.

> This is the mechanism behind **Q140** — a rule can block a save by referencing a field the user cannot even see, because the evaluation is record-level and server-side.

---

### Topic 1 — Q587. Customer Portal users can view the tags section of a page
**Your answer:** B (False)
**Verdict: CORRECT / OBSOLETE — and a word-for-word duplicate**

> **Duplicate (new, D18):** this is **identical to Q467** — same stem, same options, same answer, only the explanation is reworded. Delete one.

**More importantly, delete both.** **Tags do not exist in Lightning Experience** and the **Customer Portal** was replaced by Experience Cloud. You now have **four** Tags questions in Topic 1 — **Q331, Q467, Q587, Q616** — covering a feature no current exam can ask about.

---

### Topic 1 — Q590. The number of formulas in a custom summary formula is limited to…
**Your answer:** B (3,900)
**Verdict: CORRECT / CAVEAT — the stem asks the wrong thing**

**The number 3,900 is right, but it is not the answer to the question as written.**

The stem says *"the number of **formulas** in a Custom summary formula"*. Read literally that is asking how many CSFs you can have — and the answer to *that* is **5 per report**. The options (5000 / 3900 / 4000 / 3000) make it obvious the intended question is about **characters**.

**Fix the stem:** *"A custom summary formula is limited to how many **characters**?"* → **3,900**.

**Both numbers are examinable, so state both:**
- **5** custom summary formulas per report
- **3,900** characters per formula
- A CSF **cannot reference another CSF**

> Pairs with **Q486** and **Q571**, which cover what a CSF can calculate on. Together the three questions cover the topic well once this stem is fixed.

---

### Topic 1 — Q592. Which format gives a tabular listing with sorting and subtotalling?
**Your answer:** C (Summary)
**Verdict: CORRECT**

Correct, and the explanation cleanly separates all three formats: **Tabular** = flat list, grand total only; **Summary** = row groupings with subtotals; **Matrix** = groupings on both rows and columns. Accurate and complete.

---

### Topic 1 — Q597. FILL BLANK — What does the Role Hierarchy control?
**Your answer:** Record access (visibility) and sharing
**Verdict: CORRECT / CAVEAT — format outlier**

The content is correct and the explanation is good — it names **Grant Access Using Hierarchies** and notes the forecast roll-up effect, both of which are examinable.

**One precision point:** access flows **upward only**. A manager sees a subordinate's records; a subordinate never sees the manager's. Your wording ("users higher in the hierarchy automatically inherit") implies this but doesn't state the one-directionality, which is the part people get wrong.

**Format (F14):** second `FILL BLANK` question in the file — no options, no letters. See Q564.

---

### Topic 1 — Q600. Fiscal year starts 1 February with 12 Gregorian months — custom fiscal years needed?
**Your answer:** B (No)
**Verdict: CORRECT**

Correct, and this is a well-built question because the intuitive answer ("it's not January, so it must be custom") is wrong. **Standard Fiscal Years let you choose the starting month.** Custom Fiscal Years are only needed when the *structure* deviates — 4-4-5 calendars, 13-period years, weekly periods. Explanation is accurate and complete.

> Ties to **Q2**, **Q508** and **C7**. This is the clearest statement of the standard-versus-custom distinction in the file.

---

### Topic 1 — Q602. FILL BLANK — Who can import data for all users?
**Your answer:** Administrators
**Verdict: CORRECT / CAVEAT**

The answer is right, but the permission list in the explanation is a scattergun: *"Modify All Data or Import Personal Data / Manage Leads / Data Import Wizard access"*. Those are four different permissions doing four different jobs.

**The one that actually matters:** **"Modify All Data"** is what lets you import records **on behalf of other users** — i.e. set an OwnerId other than your own and import across the whole org. Without it, a user can only import their own data.

**Format (F14):** third `FILL BLANK` question.

---

### Topic 1 — Q603. FILL BLANK — How does the Import Wizard match when updating records?
**Your answer:** Salesforce record IDs, name fields, email addresses, external IDs
**Verdict: CORRECT / CAVEAT**

Correct, and the explanation is well organised.

**Worth tightening to the per-object reality**, since that's what the wizard actually presents:
- **Accounts/Contacts** — match by **Name and Site**, **Email**, or **Salesforce ID**
- **Leads** — match by **Email** or **Salesforce ID**
- **Custom objects** — match by **Name**, **Salesforce ID**, or an **External ID** field

Also note that an **External ID** field must be marked as External ID and is usually Unique — that's what makes upsert-style matching possible.

**Format (F14):** fourth `FILL BLANK` question.

---

### Topic 1 — Q606. Can standard fields be removed from the Page Layout?
**Your answer:** B (False)
**Verdict: INCORRECT — the correct answer is A (True), and your own explanation says so**

This is the clearest self-contradiction in the file. The stem asks *"Can standard fields be removed from the Page Layout?"*, the answer says **False**, and then the explanation says:

> *"While standard fields cannot be **deleted** from a standard object entirely, individual standard fields **can be removed** (dragged off and taken off) from a specific Page Layout in Salesforce."*

**The explanation is correct. The answer is not.** You **can** drag a standard field off a page layout. What you cannot do is **delete** the field from the object — that is a different operation, and the explanation itself draws that distinction.

**Action:** change to `Answer: A`.

**The one exception, which the explanation gestures at:** **universally required** standard fields (Account Name, Last Name, Opportunity Name, Close Date, Stage) cannot be removed — Salesforce blocks the save. Everything else is removable.

> This is defect **F8** again, and it now appears in **twelve** questions. See the defects table.

---

### Topic 1 — Q608. Which objects have standard business processes?
**Your answer:** A, B (or E), C, F
**Verdict: CORRECT / CAVEAT**

**The four processes are right:** **Lead Process**, **Sales Process** (Opportunity), **Support Process** (Case) and **Solution Process**. Contacts have none.

**The option list is broken (F12):** option **B ("Opportunity")** and option **E ("Sales (Opportunities)")** are **the same object**. That's why your answer line has to hedge — `B. Opportunity (or E. Sales / Opportunities)` — and then carry a parenthetical note explaining the hedge (**F2**). A multiple-select question cannot contain the same answer twice.

**Action:** delete option E, key `Answer: A, B, C, F`, and drop the note.

**Worth adding:** a business process is what lets you offer **different picklist values** (Stage, Status, Case Status) to different **record types**. That relationship — record type → business process → picklist values — is the examinable part.

---

### Topic 1 — Q616. How many instances of personal tags can be applied to records?
**Your answer:** B (5,000)
**Verdict: CORRECT / CAVEAT / OBSOLETE**

**5,000 is the right number, but your explanation attaches it to the wrong thing.** It says *"up to 5,000 instances of personal tags **per record**"*. The limit is **per user**:

| Tag limit | Value |
|---|---|
| Personal tags per user | 500 |
| **Instances of personal tags applied to records, per user** | **5,000** |
| Public tags per org | 1,000 |
| Instances of public tags applied to records, per org | 50,000 |

**Obsolete:** **Tags do not exist in Lightning Experience.** This is the **fourth** Tags question in Topic 1 (Q331, Q467, Q587, Q616). Delete all four.

---

### Topic 1 — Q617. What is required to create a new user?
**Your answer:** A and C (Unique username in email format, Profile)
**Verdict: CORRECT**

Correct, and the explanation makes the important point that a **username must be globally unique across all Salesforce orgs**, not just your own — which is why it takes email format but need not be a working mailbox.

> **Consistent with Q384**, which correctly identifies **Role** as the one non-mandatory field. The two questions reinforce each other — and together they show that **Q353's explanation is wrong** (it claims every user must have a role). See **C11**.

*Formatting:* the answer line spells out both options in full (`Answer: A Unique Username in email format. & C. Profile - Standard or Custom.`) instead of `Answer: A, C` (F3).

---

### Topic 1 — Q619. What are the Org-Wide Default permission options?
**Your answer:** A, B, C, D, E (all), with a note
**Verdict: CORRECT / CAVEAT**

The **explanation is excellent** — it defines each OWD level accurately and correctly scopes Public Read/Write/Transfer to Leads and Cases.

**The option list, however, contains an overlap (F12).** Option **A** ("Public, Read, Write (Transfer on Leads/Cases)") and option **B** ("Public Read, Write") are largely the same setting, with A just adding the Transfer variant. That overlap is why the answer line needs a hedging note (**F2**).

**Two OWD values are missing from both the options and the explanation:**
- **Public Full Access** — available on **Campaigns** only
- **View Only** — available on **Price Books**

**Action:** rebuild the option list as the six real values (Private, Public Read Only, Public Read/Write, Public Read/Write/Transfer, Public Full Access, Controlled by Parent) and drop the hedge.

---

### Topic 1 — Q632. Who can manually share records?
**Your answer:** E (All of the above)
**Verdict: CORRECT**

Correct. Manual sharing requires **Full Access**, which the record owner has, anyone above the owner in the role hierarchy inherits, and an administrator holds via Modify All Data. Explanation is accurate.

> **Consistent with Q271**, which correctly states that an Opportunity Team member with Read/Write **cannot** share — because Read/Write is not Full Access. The two questions together define the boundary precisely.

---

### Topic 1 — Q638. Inline editing updates the field when…
**Your answer:** B (when the record is saved/updated)
**Verdict: CORRECT — but this is a word-for-word duplicate of Q1**

> **Duplicate (new, D19):** this is **identical to Q1**, the very first question in the file — same stem, same four options, same answer. Delete one. Q638's explanation is slightly fuller, so if you keep one, keep this text under Q1's number.

The content is correct: inline edits are **staged in the browser** and nothing reaches the database until the record is saved.

---

### Topic 1 — Q643. The Console is for users who spend 3+ hours a day in Salesforce
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

The answer matches Salesforce's own implementation guidance, so it is defensible.

**But this is a soft recommendation, not a rule**, and it makes a poor exam question. There is no system limit, no setting, and nothing an admin configures based on "3 hours". Salesforce's actual guidance is qualitative — the console suits agents working many records at once in a fast-paced queue.

**Also partly obsolete:** the Classic Service Cloud Console is retired. The **Lightning Console** navigation style is now just an app setting any admin can turn on for any app, so the "who is it for" framing has softened considerably. Low exam value — consider deleting.

---

### Topic 1 — Q647. Which objects have built-in import wizards?
**Your answer:** A, B, C, D, E
**Verdict: CORRECT**

Correct, and the explanation adds **Campaign Members** and correctly flags **Opportunities and Cases** as the notable exclusions.

> This question is the anchor for a whole cluster that is **entirely consistent** — **Q344** (custom objects, 1,000 records: yes), **Q403** (Opportunities: no), **Q413** (Cases: no), **Q446** (Solutions: yes, 50,000), **Q452** (Users: no). Six questions, one coherent model, no contradictions. That is the best-behaved topic in the file.

**One addition:** also mention **Person Accounts** as supported, and the **50,000 record** ceiling, which is what forces Data Loader for larger jobs.

---

### Topic 1 — Q650. Is Data Loader cloud based?
**Your answer:** A (No)
**Verdict: CORRECT**

Correct. Data Loader is a **locally installed desktop client** (Java-based, Windows and macOS) that connects over the API. Explanation is accurate.

**One correction to the parenthetical:** it cites *"Data Cloud"* as a cloud-based data integration tool. **Data Cloud is a customer data platform**, not a data-loading tool. The genuinely comparable cloud options are **dataloader.io** (third party) and the browser-based **Data Import Wizard**. Swap the reference.

---

### Topic 1 — Q662. Report format for accounts in NY/MA/PA/NJ, with optional rating or revenue criteria
**Your answer:** A (Tabular)
**Verdict: CORRECT / CAVEAT — right answer, wrong reason**

A is defensible: the requirement is a straight list of matching accounts with no grouping or subtotals, and **Tabular** is the format for that.

**But the explanation's reasoning is wrong:**

> *"A Tabular Report… fully supports custom filter logic combinations without requiring groupings…"*

This implies filter logic is a tabular speciality. **It isn't — all four report formats support the same filter logic**, including `(1 AND 2) OR 3` style custom logic. Filter capability cannot distinguish between the options, so it cannot be the reason.

**The correct reason:** the requirement asks only *which accounts match*. There is no request to group, subtotal, or cross-tabulate. Choose **Tabular** because nothing in the requirement calls for a grouping — not because of the filters.

**The filter logic itself is worth teaching here**, since the scenario sets it up nicely: `1 AND (2 OR 3)` where 1 = State in NY/MA/PA/NJ, 2 = Rating equals Hot, 3 = Annual Revenue greater than 8,000,000.

> Q662, **Q663** and **Q664** form a three-part set on choosing report formats. That's a good design — keep all three, just fix this reasoning.

---

## BATCH 13 SUMMARY (Q572–Q662, 30 questions)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 11 | Q579, Q580, Q585, Q586, Q592, Q600, Q617, Q632, Q638, Q647, Q650 |
| CORRECT / OBSOLETE or OUT OF SCOPE | 3 | Q572, Q587, Q616 |
| CORRECT / CAVEAT | 13 | Q573, Q574, Q575, Q576, Q578, Q590, Q597, Q602, Q603, Q608, Q619, Q643, Q662 |
| DISPUTED | 2 | Q577, Q581 |
| **INCORRECT** | **1** | **Q606** |

**The wrong answer — Q606.** The stem asks whether standard fields can be removed from a page layout. The answer says **False**. The explanation says *"individual standard fields **can be removed**"*. The explanation is right; change to `Answer: A`.

**Two disputed:**
- **Q577** — **both A and B are one-to-many.** The explanation rejects A by calling it "master-detail", but master-detail *is* one-to-many. Make it Choose 2, or remove option A.
- **Q581** — I'd key **A**. In Classic, a report's **Printable View produces an Excel file**; that's the whole point of the contrast with Export Details. **Your own Q249 says exactly this.** Logged as contradiction **C13**.

**Two word-for-word duplicates of questions from the start of the file:**
- **Q638 = Q1** (inline editing) — identical stem, options and answer.
- **Q587 = Q467** (Customer Portal tags) — identical stem, options and answer.

**The Tags problem is now four questions deep** — Q331, Q467, Q587, Q616 — on a feature that does not exist in Lightning. Delete all four.

**Three more `FILL BLANK` outliers** (Q597, Q602, Q603) join Q564. That's **four** questions with no options, no letters and no consistent shape.

**Best explanations this batch:** **Q600** (why a February fiscal year start still doesn't need custom fiscal years) and **Q619** (the OWD levels defined precisely) are both excellent. **Q578** contains the correct statement of a fact that **Q351 gets wrong** — copy it across.

**A bright spot worth recording:** the six import-tool questions (**Q344, Q403, Q413, Q446, Q452, Q647**) are mutually consistent and collectively complete. No contradictions, no gaps. That is the only topic in Topic 1 that can be said of so far.

---

# BATCH 14 — File: `Admin-201 Topic 1.md`, Questions 663–803

> Numbering note: this range spans 141 numbers but contains only **31 questions** — 110 missing, including a single unbroken gap of **22** (Q777–Q798).
>
> **No outright wrong answers — but seven disputed questions, the most in any batch.** Four of them share one fault: **the correct value is not among the options**, and in three cases the explanation says so out loud.

---

### Topic 1 — Q663. Pipeline report grouped by Sales Rep and Opportunity Stage
**Your answer:** C (Matrix)
**Verdict: CORRECT**

Correct. Two grouping dimensions — rep and stage — means a **Matrix** report. The explanation correctly rules out Summary (rows only) and Tabular (no groupings). Accurate and complete.

---

### Topic 1 — Q664. Trending performance by month over the previous 6 months
**Your answer:** c → C (Matrix)
**Verdict: CORRECT**

Correct. Rep on rows, month on columns — again two dimensions, so Matrix.

**One honest caveat for a learner:** a **Summary** report grouped by month would also show a trend, so the discriminator here is that you want reps **and** months compared side by side in a grid. Your explanation says this; it's worth making it the first sentence rather than the last.

> Q662, Q663 and Q664 form a deliberate three-part set on report format selection. Good design — keep all three.

*Formatting:* lower-case `c` (F3).

---

### Topic 1 — Q668. FILL BLANK — Dashboard components can consist of
**Your answer:** Charts, Tables, Metrics, Gauges
**Verdict: CORRECT / CAVEAT**

The four named components are right, and the descriptions of each are accurate.

**The list is incomplete.** Salesforce dashboard component types also include **Visualforce Page** (Classic) and, in Lightning, **Lightning Component**. Exam questions occasionally use those as the odd-one-out.

> **Duplicate (new, D21):** this is the same content as **Q259** ("What is a Dashboard made of?", answered Tables/Charts/Gauges). Q259 is a proper multiple-choice item; Q668 is a `FILL BLANK`. Keep Q259, and fold the Metrics/Visualforce additions into it.

**Format (F14):** fifth `FILL BLANK` question in the file.

---

### Topic 1 — Q685. Each workflow rule applies to a single object
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

Correct. A workflow rule is bound to exactly one object at creation and cannot be changed afterwards. Explanation is accurate.

**Obsolete:** workflow rules are closed to new creation. Note that the same principle carries into **record-triggered Flows** — they are also bound to a single object — so the *concept* survives even though the feature doesn't.

---

### Topic 1 — Q693. You can create email alerts for workflow rules on activities
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT — the explanation overstates the restriction badly**

**B is the right answer**, and it comes straight from a Salesforce Help restriction: **email alerts are not available as an action for workflow rules on activities**.

**But your explanation says something much broader and wrong:**

> *"Activities do not support workflow rules, approval processes, or custom triggers in the same way standard and custom objects do."*

**Task and Event *do* support workflow rules**, and they support Apex triggers. The restriction is narrow and specific: **on Task and Event, the only workflow actions available are field updates and outbound messages** — you cannot attach an email alert or a task action.

As written, the explanation teaches a learner that activity automation is impossible, which would lead them to answer several other questions wrongly. **Rewrite it around the specific email-alert restriction.**

---

### Topic 1 — Q708. How many people can you invite at a time using Cloud Scheduler?
**Your answer:** A (50)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy feature — 50 invitees per meeting request, mixing contacts, leads, person accounts and internal users.

> **Third Cloud Scheduler question** (**Q304**, **Q311**, **Q708**) on a feature Salesforce **retired in Summer '16**. Logged as duplicate cluster **D22**. Delete all three.

---

### Topic 1 — Q711. Which is true about storage limits?
**Your answer:** C
**Verdict: CORRECT / CAVEAT**

C is the only defensible option, and the explanation correctly routes documents to **File Storage**.

**The option's wording is loose:** "Document tabs count against **overall** storage" blurs the very distinction that **Q340**, **Q341** and **Q274** all turn on. Documents count against **File Storage**, which is a separate, non-transferable pool from **Data Storage**. Reword option C to say "File Storage" and the question becomes precise instead of merely correct-by-elimination.

**Option A is the interesting distractor** and deserves a proper kill: there is no "5% over capacity" grace band. When you hit a storage limit, Salesforce blocks new records and files — there is no buffer.

---

### Topic 1 — Q713. If you delete a case, which two also get deleted?
**Your answer:** C, D (Event, Attachments)
**Verdict: CORRECT**

Correct. Deleting a case cascades to its **activities** (tasks and events), **case comments** and **attachments**. The **Account** and any related **Solution** are parents or peers — they survive. Explanation is accurate and complete.

> Ties to **Q449** and its dependency rule: these cascade-deleted children *are* restored if you undelete the case — unlike a child that was deleted separately beforehand.

---

### Topic 1 — Q718. How many editions are there in Salesforce?
**Your answer:** D (5)
**Verdict: DISPUTED — recommend deleting this question**

This question should not survive the cleanup, and its explanation is the most damaged in the file:

> *"In traditional Salesforce certification exams (such as ADM-201), Salesforce recognizes 5 main editions: **[1, 2] Currently 6 to 8***
> *Essentials / Starter*
> *Professional*
> *Enterprise*
> *Unlimited*
> ***Developer (the free tier for testing and building***"

**Four separate faults in six lines:**
1. **`[1, 2]` is a leftover citation marker** from whatever source this was scraped from (**F6** — a new artefact type).
2. **"Currently 6 to 8" contradicts the keyed answer of 5** (**F8**).
3. The final line has an **unclosed parenthesis** and simply stops.
4. **The question is unanswerable in principle.** Salesforce's edition line-up changes every few years — Contact Manager, Group and Personal have been retired; Essentials became Starter; Performance and Unlimited sit alongside each other. There is no stable number.

**Delete it.** Nothing about counting editions is examinable; what *is* examinable is which features belong to which edition, and the file already tests that in Q247, Q415, Q495 and Q536.

---

### Topic 1 — Q721. Users can export list results to CSV from enhanced list views
**Your answer:** B (False)
**Verdict: CORRECT / CAVEAT**

B is right, and it remains true today: **Salesforce list views have no native export button**, in Classic or in Lightning. To get list data out you run a report, use Data Loader, or install an AppExchange tool. Explanation is accurate.

**Caveat — read this together with Q722 below**, which sits immediately after it and appears to say the opposite. The two need reconciling or merging.

---

### Topic 1 — Q722. Export to Excel is available for Printable Lists
**Your answer:** A (True)
**Verdict: DISPUTED — the explanation describes copy-and-paste as if it were a feature**

Read what the explanation actually claims:

> *"the generated formatted page can be **opened, copied, or directly saved** and exported into Microsoft Excel"*

That is describing a user selecting text in a browser window and pasting it into Excel. **That is not an export feature**, and by the same logic the answer to **Q721** would also be True — which you correctly answered False.

**The underlying facts:**
- **Printable View on a list view** opens an **HTML page formatted for printing**. There is no Excel output.
- **Printable View on a *report*** is the one that generates an **Excel (.xls) file** — that is the subject of **Q249** and **Q581**, and it is the real distinction worth teaching.

**Recommendation:** delete Q722, or merge it into Q721 as a single question contrasting **list views (no export)** with **reports (Printable View → Excel; Export Details → CSV)**. As a pair, Q721 and Q722 currently leave a reader unsure which is true.

---

### Topic 1 — Q725. Search settings value must be between 5 and 50
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

Correct — the number of search results shown per object must be set between **5 and 50**. Explanation is accurate.

**Scope it to Classic.** This is a Classic Search Settings field. Lightning search settings are structured differently, and the per-object results count is not exposed in the same way. Add "in Salesforce Classic" to the stem so the question is at least honestly bounded.

---

### Topic 1 — Q730. Renaming a standard object renames the reports
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT**

Correct. **Rename Tabs and Labels** propagates the new label through tabs, page layouts, list views, related lists and standard report names.

**The exceptions are the examinable part and they're missing.** Renaming does **not** change:
- **Reports, list views, dashboards and email templates that you named yourself** — your custom titles are left alone
- **Setup pages** — Setup always uses the original Salesforce names
- **Custom field labels, Apex, Visualforce and validation-rule error messages** — anywhere you typed the old name manually

Adding those three lines turns a trivially-true statement into something worth knowing.

---

### Topic 1 — Q731. You can map a custom lead field to a Case
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. Lead field mapping targets **Account, Contact and Opportunity** only — the three objects lead conversion creates. Cases are not part of conversion. Explanation is accurate and complete.

> Consistent with **Q112**, **Q113**, **Q131**, **Q284** and **Topic 2 Q223**, all of which cover lead field mapping. That cluster is internally consistent — though it is now **five** questions on one topic and should be trimmed.

---

### Topic 1 — Q733. Picklist dependency rules are not enforced during import
**Your answer:** A (True)
**Verdict: CORRECT**

Correct. **Field dependencies are a user-interface constraint.** The Data Import Wizard and the API will happily load a dependent picklist value that has no valid relationship to the controlling value — leaving records in a state the UI would never have allowed. Explanation is accurate.

**Worth adding, because it's the practical consequence:** the same is true of **page layout "required"** settings. Both are UI-only. This is exactly why **validation rules** (Q390) are the reliable enforcement mechanism — they run on every save path including imports.

---

### Topic 1 — Q734. Limit on the compiled size of a formula field
**Your answer:** D (4k)
**Verdict: DISPUTED — the correct value is not among the options, and the explanation admits it**

> *"…the permitted threshold… is traditionally evaluated against a 4k ceiling limit option **(even though backend system specifications measure compiled execution requirements up to 5,000 bytes)**."*

**The compiled size limit is 5,000 bytes.** The options run 1k, 2k, 3k, 4k — so no option is correct. This is the same fault as **Q415** and **Q761**: the explanation states the true figure and then keys a different one because that's what's on the list.

**Action:** change option D to **5k** (or add an E), key it, and delete the parenthetical.

> **Duplicate (new, D23):** **Q509** tests the same distinction — formula *character* limit versus *compiled* size — and suffers from the same outdated 4,000 figure. Fix them together and keep one. The pair of numbers to teach is: **3,900 characters** of formula text, **5,000 bytes** compiled.

---

### Topic 1 — Q744. The Documents tab has no version control
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

Correct, and the explanation draws the right contrast: the Documents tab is a flat static-file repository, whereas **Salesforce Files / CRM Content / Libraries** do track versions.

**Obsolete:** the Documents tab is legacy Classic. In Lightning, **Salesforce Files** handles all of this with full version history, sharing and 2 GB file support.

---

### Topic 1 — Q746. The size limit for documents uploaded is…
**Your answer:** B (5 MB)
**Verdict: CORRECT / OBSOLETE — duplicate of Q367**

Correct.

> **Duplicate (new, D24):** this is the **same question as Q367**, with a different set of distractors (Q367 offers 1/3/5/25 MB; Q746 offers 2/5/10/50 MB). Both are answered 5 MB, so at least they're consistent — but one must go.

**Keep Q367's explanation**, which adds the companion **20 KB limit for a document used as a custom app logo**. Then note that the whole topic is legacy: **Salesforce Files** supports **2 GB** per file.

---

### Topic 1 — Q751. A workflow alert can be tracked in Activity History
**Your answer:** B (False)
**Verdict: CORRECT**

Correct. A workflow **email alert** sends an email but creates no Task, so nothing appears in Activity History. If you need an audit trail, you pair the alert with a **workflow task action**, or use Flow. Explanation is accurate.

> Contrast with **Q302**, which correctly states that a workflow **task** *is* tracked. The two together draw the right line: **tasks are logged, emails are not.** Cross-reference them.

---

### Topic 1 — Q753. Maximum account records a standard user can import per session
**Your answer:** B (5,000)
**Verdict: DISPUTED — I cannot support 5,000, and the premise no longer exists**

**The legacy numbers this question is built on were 500 and 50,000, not 5,000.** Classic Salesforce had **two separate import wizards**:
- **"Import My Accounts & Contacts"** — available to any user for their *own* records, capped at **500** records.
- **"Import My Organization's Accounts & Contacts"** — administrator-only, capped at **50,000**.

On that model the answer would be **A (500)**. I can find no basis for 5,000, and your explanation asserts it without a source.

**And the premise is gone.** There is now a **single Data Import Wizard** with one **50,000-record** ceiling for everyone; what differs between users is not a record cap but **permissions** — whether you can import for other users at all (which needs **Modify All Data**, per **Q602**).

**Recommendation: delete.** If you want to keep a question here, ask the current-correct one: *"What is the maximum number of records the Data Import Wizard can process in one import?"* → **50,000**.

---

### Topic 1 — Q759. Limit on new picklist values created during a single import
**Your answer:** B (100)
**Verdict: CORRECT**

Correct — an import can create at most **100 new picklist or multi-select picklist values** for any one field. Explanation is accurate.

**Worth pairing with Q733:** together they describe how imports interact with picklists — dependency rules are **not enforced**, but the creation of *new* values **is** capped. Those two facts are usually tested together.

---

### Topic 1 — Q760. An admin can schedule regular data imports using Data Loader
**Your answer:** A (True)
**Verdict: CORRECT**

Correct, and the explanation is honest about the mechanism: the **GUI has no scheduler**, but Data Loader runs from the **command line in batch mode**, which you then schedule with Windows Task Scheduler or cron.

**One modernisation note:** Data Loader's legacy CLI batch mode is Windows-only and is being superseded. The current approach is the **Salesforce CLI** (`sf data` commands) or a scheduled **Bulk API** job. The answer stays True; only the tooling has moved on.

---

### Topic 1 — Q761. Recycle Bin record limit as a multiple of your storage MBs
**Your answer:** C (250)
**Verdict: DISPUTED — the documented multiplier is 25, and it is not among the options**

**Your own explanation opens with the correct number and then keys a different one:**

> *"Your organization's Recycle Bin record limit is calculated as **25 times** the Megabytes (MBs) in your general data storage. (Note: In some testing material variations, this is represented factor-wise as 25 times your MB capacity, meaning if options or questions frame it based on specific sizing guidelines, **250** reflects standard formula calculations or multipliers…)"*

That parenthetical is not an explanation — it is an attempt to reconcile a right number with a wrong option (**F13**).

**The documented rule:** the Recycle Bin holds up to **25 times** your MB of storage. Salesforce's own worked example: an org with **1 GB (1,000 MB)** of storage has a Recycle Bin limit of **25,000 records**.

The options are 20, 50, 250 and 500 — **25 is not offered**, so the question has no correct answer.

**Action:** change an option to **25** and key it, or delete the question. Also worth pairing with the other Recycle Bin fact: deleted records are held for **15 days**.

---

### Topic 1 — Q763. You can delete the Standard Price Book or one used on an opportunity
**Your answer:** B (False)
**Verdict: CORRECT**

Correct, and the explanation covers both halves properly: the **Standard Price Book can never be deleted**, and a custom price book in use on an opportunity or quote must be detached first. Accurate and complete.

**One addition:** you *can* **deactivate** the Standard Price Book, and you can **archive** a custom price book — which is the practical workaround people are reaching for when they try to delete one.

---

### Topic 1 — Q766. Login hours end at 5:00 PM; user logged in at 4:30 and stays to 5:01
**Your answer:** B (loses all unsaved data after terminating the session)
**Verdict: DISPUTED — this contradicts Q385 and Q564, both of which are correct**

**Salesforce's documented behaviour:** *"If users are logged in when their login hours end, they can continue to view their current page, but they can't take any further action."* **The session is not terminated.**

**Your file already states this correctly — twice:**

| Question | Answer | Says |
|---|---|---|
| **Q385** | D | User is **not** logged out; blocked only from DML actions |
| **Q564** | prose | "can continue to view their current page, but cannot take any further action" |
| **Q766** | **B** | Session is **terminated** and unsaved data is lost |

Q766 is the odd one out. Logged as contradiction **C14**.

**The deeper problem is the option list (F12):** none of the five options states the documented behaviour. A and E overstate ("without any interruption"), B and C assert termination, and D invents a "cannot start new sessions" rule. The correct answer simply isn't there.

**Recommendation: delete Q766 and keep Q385**, which asks the same thing with a correct option list. If you keep it, add the option *"The user can continue viewing the current page but cannot save or take further action"* and key that.

---

### Topic 1 — Q771. Which permission lets a user create more solution categories?
**Your answer:** A (Edit on solution)
**Verdict: DISPUTED — the correct permission is not among the options**

**Managing solution categories is a Setup task, not a record operation.** Solution categories are maintained at *Setup > Solutions > Solution Categories*, and creating them requires the **"Manage Categories"** permission (or **"Customize Application"**) — an administrative permission, not object-level CRUD.

All four options offer object permissions on the Solution object (Edit, Create, Delete, View). **None of them grants category management.** Object-level Edit lets a user modify solution *records*; it does nothing for the category tree.

**Doubly problematic — Solutions are legacy.** Salesforce Knowledge superseded Solutions long ago, and Solution Categories are Classic-only. **Recommendation: delete.**

---

### Topic 1 — Q776. Which feature captures ROI on online advertising?
**Your answer:** C (Google AdWords)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy feature — **Salesforce for Google AdWords** linked ad spend and keywords to campaigns and opportunities for closed-loop ROI.

**Obsolete:** that native integration was **retired**. Modern equivalents are the **Google Ads / Salesforce integration via Marketing Cloud**, third-party AppExchange connectors, or plain **Campaign Influence** (which is what **Q799** tests). Option D, **S-Controls**, is also long dead. **Recommendation: delete.**

---

### Topic 1 — Q799. What is the use of Campaign Influence on opportunities?
**Your answer:** A (Help calculate ROI)
**Verdict: CORRECT**

Correct. Campaign Influence links **many campaigns to one opportunity** and attributes revenue across them, which is what makes marketing ROI measurable. Explanation is accurate.

> Consistent with **Q335** (campaigns and opportunities are many-to-many *because of* Campaign Influence). The two reinforce each other well.

---

### Topic 1 — Q800. After a lead is converted, where do you find the associated campaigns? (Select 2)
**Your answer:** `B. AND C. Contact campaign related list`
**Verdict: CORRECT / CAVEAT — right answer, broken answer line, overlapping options**

**B and C are the intended answers** and are defensible: conversion carries campaign membership to the **Contact** (Campaign History related list) and the campaign attribution to the **Opportunity** (Primary Campaign Source / Campaign Influence).

**Three problems:**
1. **The answer line is malformed (F1/F3):** `Answer: B. AND C. Contact campaign related list` gives the text of option C only, with "AND" in capitals acting as a separator. Should read `Answer: B, C`.
2. **Options A and C describe the same thing (F12).** "Campaign history list" (A) *is* the Campaign History related list on the Contact, which is what C calls the "Contact campaign related list". A multiple-select question with two options meaning the same thing cannot be marked reliably.
3. **No apostrophes or capitalisation** consistency in the options.

> **Ties directly to Q103**, which I flagged as DISPUTED. Q103 asks whether conversion auto-populates campaign data on the Opportunity, and you answered **False**; Q800 answers that campaigns **are** found on the Opportunity. **These two need reconciling** — Q800's position is the correct one.

---

### Topic 1 — Q802. Edit opportunities, cannot import leads, can delete accounts — possible?
**Your answer:** B (Yes, customise a custom profile)
**Verdict: CORRECT**

Correct, and the reasoning is exactly right: a **standard profile's permissions cannot be edited**, so you must **clone it into a custom profile** and adjust from there — granting Opportunity Edit and Account Delete while unchecking **Import Leads**.

> Consistent with **Q397** and **C1**: you can change *settings* on a standard profile but not *permissions*. Q802 is the practical application of that rule.

**Worth adding a modern note:** today you would more likely leave the profile minimal and grant the extra rights through a **permission set**, which is the Salesforce-recommended pattern and is heavily examined on the current Admin exam.

---

### Topic 1 — Q803. Which graph tracks data over a period of time?
**Your answer:** A (Line)
**Verdict: CORRECT**

Correct. **Line charts** are the format for continuous change over time. Explanation is accurate.

*Option typos:* option B reads "Horizontal bar **line**" — should be "Horizontal bar". Option D, "Table", is not a chart type at all, which makes it a weak distractor.

---

## BATCH 14 SUMMARY (Q663–Q803, 31 questions)

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 12 | Q663, Q664, Q713, Q731, Q733, Q751, Q759, Q760, Q763, Q799, Q802, Q803 |
| CORRECT / OBSOLETE | 5 | Q685, Q708, Q744, Q746, Q776 |
| CORRECT / CAVEAT | 7 | Q668, Q693, Q711, Q721, Q725, Q730, Q800 |
| **DISPUTED** | **7** | **Q718, Q722, Q734, Q753, Q761, Q766, Q771** |
| INCORRECT | 0 | — |

**No wrong answers — but seven disputed questions, the most in any batch, and four share one root cause: the correct value is not on the option list.**

| Question | Correct value | Options offered |
|---|---|---|
| **Q734** | compiled size **5,000 bytes** | 1k, 2k, 3k, 4k |
| **Q761** | Recycle Bin = **25×** storage MB | 20, 50, 250, 500 |
| **Q766** | user can view but **cannot act** | five options, none of them that |
| **Q771** | **"Manage Categories"** permission | four object-level CRUD options |

In **Q734** and **Q761** the explanation **states the correct number and then keys a different one** — the same fault as Q415 in Batch 11. That is now three occurrences of a distinct pattern: *the author knew the right answer and deferred to a wrong option list.*

**The other three disputed:**
- **Q718** — delete. The explanation carries a leftover **`[1, 2]` citation marker**, says "Currently 6 to 8" while keying 5, and ends on an unclosed parenthesis. Counting editions isn't examinable anyway.
- **Q722** — the explanation describes **copy-and-paste** as an export feature, and by its own logic Q721 would also be True. Merge the two.
- **Q753** — I can find no basis for 5,000. The legacy figures were **500** (personal wizard) and **50,000** (org wizard); today there is one wizard with one 50,000 ceiling.

**A new contradiction — C14.** **Q766** says login-hour expiry **terminates the session and loses data**. **Q385** and **Q564** both correctly say the session is **not** terminated. Q766 is the outlier; delete it and keep Q385.

**An explanation that teaches something dangerous — Q693.** The answer (False) is right, but the explanation claims *"Activities do not support workflow rules, approval processes, or custom triggers"*. **Task and Event do support workflow rules and triggers.** The real restriction is narrow: on activities, the only workflow actions available are **field updates and outbound messages** — no email alerts.

**Four more duplicates:** Q668≈Q259 (dashboard components), Q734≈Q509 (formula compile size), Q746=Q367 (document size limit), and the **third Cloud Scheduler question** (Q304, Q311, Q708).

**Numbering:** 141 numbers, **31 questions** — 110 missing, including a single unbroken gap of **22** (Q777–Q798).

**Best explanations this batch:** **Q713** (what cascades when a case is deleted), **Q733** (dependencies are a UI-only constraint) and **Q802** (why a standard profile must be cloned) are all accurate, complete and internally consistent with the rest of the file.

---

# BATCH 15 — File: `Admin-201 Topic 1.md`, Questions 811 – 986

39 questions carry a number in this range. 137 numbers between 811 and 986 do not exist in the file.

---

### Topic 1 — Q811. What is true about Lead Assignment Rules?

**Your answer:** `A. AND B. (Note: If selecting a single primary choice…)`

**Verdict: CORRECT-CAVEAT — the content is right, the answer line is not usable**

Both A and B are true and they are the two halves of the same definition: an assignment rule is the container, and the **rule entries** inside it hold the criteria that decide whether a lead goes to a user or a queue. C describes a **queue**, not an assignment rule. D describes queue membership.

The problem is the answer line. It hedges twice in one sentence (defect **F2**) and ends up telling the student that the answer might be "A or B" when the question says "What is true" — plural is clearly intended. **Rewrite as `Answer: A, B`** and move the note about C and D into the `Why:` body, which is where it already partly lives.

---

### Topic 1 — Q816. Select all which are true about Contacts

**Your answer:** `ACD` — correct.

**Verdict: CORRECT-CAVEAT**

A, C and D are right and the reasoning for each is sound. Two things worth tightening:

- **Option B deserves a firmer rebuttal.** The explanation says contacts don't "strictly have to" be tied to an account. The cleaner statement is that a contact with no account is a **private contact** — it is fully supported, it is owned by and visible only to its owner (and people above them in the role hierarchy), and it does not appear under any account. That is the reason B is false.
- **Option C depends on a feature being on.** A contact has exactly **one primary (direct) account** on the `AccountId` field. Multiple accounts is only possible once **Contacts to Multiple Accounts** is enabled, which adds *indirect* relationships through the **Account Contact Relationship** object. Your explanation says this; just make sure the student reads "one direct + many indirect", not "many equal parents".

---

### Topic 1 — Q823. Records in the Recycle Bin do NOT count against storage limits

**Your answer:** `B. False` — correct.

**Verdict: CORRECT**

Deleted records keep consuming **data storage** until they are purged. This is why "empty the Recycle Bin" is standard advice when an org is near its storage ceiling. The 15-day auto-purge and the separate Recycle Bin capacity limit (25× your storage allocation) are both worth a line in the explanation, and one of them is already there.

> **⚠️ Amended in Batch 17 — verdict downgraded to DISPUTED.** **Q1107**, found later in the same file, states the **opposite**: that Recycle Bin records do **not** count against storage. The two cannot both be right. The documented **25×-storage Recycle Bin allowance** is strong evidence that the Bin is a **separate pool**, which would make **Q1107 correct and this question wrong**. See contradiction **C18**. **Recommendation: delete Q823 and keep Q1107**, which covers the same ground with a better option list.

> **⚠️ Amended in Batch 17 — verdict downgraded to DISPUTED.** **Q1107**, found later in the same file, states the **opposite**: that Recycle Bin records do **not** count against storage. The two cannot both be right. The documented **25×-storage Recycle Bin allowance** is strong evidence that the Bin is a **separate pool**, which would make **Q1107 correct and this question wrong**. See contradiction **C18**. **Recommendation: delete Q823 and keep Q1107**, which covers the same ground with a better option list.

---

### Topic 1 — Q830. What happens when you delete a custom field?

**Your answer:** `D` — correct.

**Verdict: CORRECT-CAVEAT**

Deleted custom fields go to a **Deleted Fields** list on the object, and they can be undeleted together with their data. One correction inside the explanation: it says "typically up to 15 days". Make that definite — **15 days**, then permanent purge. It is not a range.

This question, **Q853** and **Q991** all test the same fact. See duplicate **D25** below.

---

### Topic 1 — Q831. Reasons for creating a validation rule

**Your answer:** `C. A, B, & C` — correct.

**Verdict: CORRECT**

The key teaching point is buried but present: validation rules **also fire on imports and API loads**, which is why C belongs in the answer. And D is correctly rejected — hiding fields is field-level security, not validation. This is one of the better-argued questions in the file.

---

### Topic 1 — Q834. Report formats

**Your answer:** `B. B, C, D` — correct.

**Verdict: CORRECT-CAVEAT**

Matrix, Summary and Tabular are all real formats; **Hierarchical is not**. The explanation correctly names **Joined** as the fourth real format. Add one sentence so the student isn't confused: Joined simply isn't in the option list, so its absence doesn't change the answer.

---

### Topic 1 — Q842. Roll-up summary and formula fields on edit pages

**Your answer:** `B` (False) — correct.

**Verdict: CORRECT**

The statement is a compound trap: the first half is true (read-only on detail pages) and the second half is false (they do **not** appear on edit pages at all, because there is nothing to type into). Your explanation calls out exactly that split, which is the right way to teach a compound True/False item.

---

### Topic 1 — Q843. "Sales User is a standard profile"

**Your answer:** `A` (True)

**Verdict: INCORRECT — the answer is `B. False`**

There is no standard profile called **Sales User**. The standard profiles Salesforce ships are: **System Administrator, Standard User, Marketing User, Contract Manager, Solution Manager, Read Only**, the Chatter profiles, the portal/Experience Cloud profiles, and in newer orgs **Minimum Access – Salesforce**.

"Sales User" is a **permission set** (and permission set licence) that came with the modern Sales Cloud licensing model. That is almost certainly where the confusion comes from — and it is a useful distinction to teach, because it is the same profiles-vs-permission-sets boundary the exam tests everywhere else.

The explanation is also wrong in a way that will mislead: it writes *"along with profiles like Standard User, System Administrator, and Marketing User"* — those three are genuine standard profiles, which makes the false claim look credible by association.

**Fix:** `Answer: B. False`, and rewrite the `Why:` to say Sales User is a permission set, not a profile, then list the real standard profiles.

---

### Topic 1 — Q853. Import wizard / restoring a deleted custom field

**Your answer:** `A. Yes` — correct for the question that is actually asked.

**Verdict: CORRECT-CAVEAT — but two different questions have been glued together**

The stem reads: *"You can use the import wizard to erase existing field values. Once a custom field is deleted, can it be restored?"* Those are two unrelated items pasted into one line (defect **F6**). Only the second one has options and an answer.

Worse, the abandoned first sentence is **false**. The **Data Import Wizard cannot blank out existing values** — it has no null-handling option. **Data Loader** can, via the *Insert Null Values* setting. Leaving that sentence in the stem plants a wrong fact that the answer never corrects.

**Fix:** delete the first sentence, or split it into its own True/False question keyed **False**. Then delete the remainder as a duplicate of **Q830**/**Q991** (see **D25**).

---

### Topic 1 — Q860. Lookup relationships per object

**Your answer:** `40` — right value, unusable answer line.

**Verdict: CORRECT-CAVEAT**

40 is correct, and it is option **C**, but the answer line gives only the number with no letter (defect **F3**) and then runs straight into the explanation with no `Why:` label (defect **F9**). Write `Answer: C. 40`.

One accuracy note on the explanation: it says 40 covers "lookup and master-detail fields combined". That is the right idea — the documented limit is **40 relationship fields per object** in total — but phrase it as *relationship fields*, because that pool also includes hierarchical relationships and master-detail, and the 2-master-detail cap sits **inside** the 40, not beside it.

---

### Topic 1 — Q862. Master-detail relationships per object

**Your answer:** `E` (2) — correct.

**Verdict: CORRECT**

Two is the cap, and the explanation ties it to the real-world reason — the **junction object** pattern with a primary and a secondary master. That link between limit and purpose is exactly what the exam wants.

---

### Topic 1 — Q863. Deleted reports and the Recycle Bin

**Your answer:** `B. False`

**Verdict: INCORRECT — the answer is `A. True`**

Deleted reports and dashboards **do go to the Recycle Bin**, and they can be restored from there during the standard 15-day retention window. This is true in both Classic and Lightning Experience.

The explanation invents a mechanism that does not exist: there is **no "Deleted" folder within the Reports or Dashboards tab**. Salesforce has never shipped one. A student who memorises this will go looking for a folder that isn't there and will also get the underlying question wrong.

**Fix:** `Answer: A. True`, and replace the `Why:` with the Recycle Bin explanation. Worth adding the genuinely examinable nuance: a report can only be restored if the **folder it lived in still exists** — if the folder was deleted too, restore the folder first.

---

### Topic 1 — Q872. Statements about the Import Wizard

**Your answer:** `a,C` — right letters, wrong formatting.

**Verdict: CORRECT-CAVEAT**

A and C are both correct. **B** is correctly rejected — the wizard moves records, never metadata. Two things to fix:

- **Formatting:** lower-case `a` mixed with upper-case `C` (defect **F3**). Write `Answer: A, C`.
- **The rebuttal of D is muddled.** The explanation as written half-agrees with D. The clean reason D is false: the 50,000 ceiling is a **per-import limit for the whole org**, not a permission tied to the Standard User profile. In the legacy Classic wizards there genuinely was a split — an individual importing their own records was capped at **500**, while the admin-run org import allowed **50,000** — and D is a garbled version of that split. Say so plainly.

---

### Topic 1 — Q877. Virtual storage bin grouped by criteria

**Your answer:** `A. Case Queue` — correct.

**Verdict: CORRECT**

Good, and the explanation generalises properly: queues work the same way for Leads, Cases, Orders, Knowledge Articles and custom objects. "Solutions Queue" is not a thing, and an assignment rule is the mechanism that *puts* records in a queue rather than the container itself.

---

### Topic 1 — Q878. External ID fields per object

**Your answer:** `B` (25) — correct.

**Verdict: CORRECT-CAVEAT**

25 is the current limit. Two notes:

- The stem has a **definition pasted onto the end of the question line** with no separator (defect **F6**): *"…per object?External ID: When importing…"*. Split it out or move it into the explanation.
- The bracketed note says the legacy limit "used to be 3". The figure most legacy banks used was **7**, and before that 3. Since neither is on the option list and neither is current, the cleanest fix is to drop the legacy sentence entirely rather than assert a number that can't be checked.

---

### Topic 1 — Q882. Enabling field encryption

**Your answer:** `B. Contacting Salesforce.com Customer Support`

**Verdict: CORRECT-OBSOLETE — and your explanation already says so**

This is legacy behaviour. Classic **Encrypted Text fields** required Salesforce to provision the feature. Today, **Shield Platform Encryption** is purchased as an add-on and then turned on by the admin in Setup, where you generate a tenant secret and pick fields. No support case.

Credit where due: the answer line itself carries the modern correction, which is more than most obsolete questions in this file do. But putting a 40-word caveat *inside* the answer line is still defect **F2** — move it to a `Why:` block. Better still: retire the question. "Contact Support to enable X" is not something the current exam asks.

---

### Topic 1 — Q883. Maximum length of the Alias field

**Your answer:** `C. 8` — correct.

**Verdict: CORRECT**

Eight characters, and the field is populated automatically from the user's first initial plus surname if you leave it alone. Pairs naturally with **Q1000** (aliases do not have to be unique) — consider merging the two into one question that covers length *and* uniqueness.

---

### Topic 1 — Q884. SSO, API and desktop client logins vs trusted IP ranges

**Your answer:** `A. True` — correct as a quotation of the legacy documentation.

**Verdict: CORRECT-OBSOLETE**

The sentence is lifted verbatim from old Salesforce security documentation and it was accurate at the time. It is stale now for two reasons:

- "Desktop client" refers to **Connect for Outlook / Connect for Office / Connect Offline**, all retired.
- The modern rule is broader and is not SSO-specific: a login from an IP **outside Login IP Ranges** is blocked outright, and a login from outside **Trusted IP Ranges** triggers identity verification. API logins from untrusted IPs need a **security token** appended to the password.

**Recommendation:** rewrite around Login IP Ranges vs Trusted IP Ranges vs security token — that distinction *is* on the current exam. As it stands the question tests a memory of old release notes.

---

### Topic 1 — Q892. Removing "Read" from a profile for a standard object

**Your answer:** `B` — correct.

**Verdict: CORRECT**

B is the only option where *everything* disappears, which is the right model: Read is the floor. Without it there is no tab, no related list, no search result, no report data, no merge field, no custom link. A and C each leave one artefact visible, and that is the trap.

One modern addition worth a line: since profiles are being de-emphasised, the same effect is now usually achieved by *not granting* Read in any permission set — the outcome is identical.

---

### Topic 1 — Q893. How long a data export file stays available

**Your answer:** `C` (48 hours) — correct.

**Verdict: CORRECT**

48 hours from the completion email, then the zip files are deleted. Accurate and complete.

---

### Topic 1 — Q904. Options when transferring accounts

**Your answer:** `Correct Answer: A, B, D`

**Verdict: INCORRECT — incomplete. The answer should be `A, B, C, D, E`**

This is a "choose all that apply" question, and the key leaves out two options that Salesforce genuinely offers. The **Mass Transfer Records** tool, when the object is Account, presents these checkboxes:

| Checkbox on the Mass Transfer Accounts screen | In the option list? |
|---|---|
| Transfer open opportunities not owned by the existing account owner | **A** ✔ |
| Transfer closed opportunities | **B** ✔ |
| Transfer open cases owned by the existing account owner | **D** ✔ |
| Transfer closed cases | **C** ✔ — wrongly rejected |
| Keep Account Team | **E** ✔ — wrongly rejected |

Only **F (custom objects)** is genuinely not an option — child custom object records follow their own ownership and are not swept up by the account transfer.

The explanation states that closed cases are "not transferred through this specific account mass-transfer checkbox layout by default". That is incorrect: the checkbox exists and is listed in Salesforce Help. "Keep Account Team" is likewise a real checkbox — it controls whether the outgoing owner's account team survives the transfer.

**Three separate defects in one question:**

1. The key is incomplete (above).
2. The label reads `Correct Answer:` instead of `Answer:` (defect **F9**).
3. It ends with *"Depending on the specific test bank version this question is sourced from…"* (defect **F13**) followed by an **orphaned video link** about the Data Import Wizard (defect **F6**) — a tool that has nothing to do with transferring account ownership.

---

### Topic 1 — Q907. Maximum length of an auto-number field

**Your answer:** `B. 30` — correct.

**Verdict: CORRECT**

30 characters total. The explanation's 20-for-text / 10-for-digits split is a helpful way to remember it and matches the display-format rules.

---

### Topic 1 — Q908. How often you can manually generate a backup export

**Your answer:** `B` — correct, but the option text is broken.

**Verdict: CORRECT-CAVEAT**

Option B literally reads **"Every every 7 days"** — a duplicated word (defect **F5**). Fix the typo.

The content is right and the explanation handles the edition split well: **every 7 days** for Enterprise, Performance and Unlimited; **every 29 days** for Professional and Developer. Add one clarification — this cadence applies to *manual* exports; the **scheduled** Data Export Service follows the same weekly/monthly split.

---

### Topic 1 — Q910. Maximum length of a "Text (Encrypted)" field

**Your answer:** `A. 255`

**Verdict: DISPUTED — the correct value is 175, and it is not on the option list**

The Classic **Text (Encrypted)** custom field type is capped at **175 characters**. None of 255, 191, 128 or 256 is right, so the question cannot be answered correctly as written. This is the fifth question in the file with this defect — added to **F12**.

The explanation makes things worse by arguing *toward* 255: it concedes the 175 figure, calls it "older implementations", then asserts 255 anyway on the grounds that "standard text/encrypted definitions cap up to 255". That is reasoning backwards from the option list to the answer (defect **F8**).

**Recommendation: delete the question.** Classic encrypted text fields are legacy — Shield Platform Encryption replaced them and works completely differently (it encrypts existing standard and custom fields rather than adding a new field type). If you want to keep it, change option A to **175** and rewrite the explanation.

---

### Topic 1 — Q911. Lookup fields in Personal Edition

**Your answer:** `B. False` — correct.

**Verdict: CORRECT-OBSOLETE**

Personal Edition had no custom objects and no relationship fields, so the statement is false. But **Personal Edition is no longer sold** and hasn't been for years, which makes this unexaminable today.

Also carries an **orphaned video link** (defect **F6**): *"Characteristics of Lookup Relationship in Salesforce — This video is relevant because…"*. That is the eighth orphaned link found so far.

**Recommendation:** delete, or rewrite around a live edition boundary — for example, that **Professional Edition** supports lookups but has tighter limits on custom objects and no API without an add-on.

---

### Topic 1 — Q913. Which time zone login-hour restrictions use

**Your answer:** `A. Organization wide default time zone` — correct.

**Verdict: CORRECT-CAVEAT — one important nuance missing**

A is right: login hours are evaluated against the **org's default time zone** from the Company Information page, not the individual user's time zone.

The nuance the explanation misses, and which is the part the exam actually likes: the org default time zone is used **at the moment the login hours are first saved**, and the hours are then frozen to those clock times. If the org default time zone is changed later, **existing profile login hours do not shift**. So a profile configured as 08:00–18:00 stays 08:00–18:00 in the original zone forever, regardless of where users are or what the org setting becomes afterwards.

Note also option C, *"Time zone set in the user's profile"* — profiles have no time zone setting at all. Worth saying, because it makes the distractor obviously wrong rather than merely wrong.

This question joins the login-hours cluster with **Q385**, **Q564** and **Q766** (see contradiction **C14**). It is the only one of the four that is fully correct, so it is the one to keep.

---

### Topic 1 — Q921. When you cannot delete all record types for an object

**Your answer:** `C. Profiles`

**Verdict: INCORRECT — the answer is `A. Apex Code script`**

Salesforce Help states the rule almost word for word as the stem: *"You can't delete all the record types of an object if the object is referenced in Apex."* If any Apex class or trigger refers to the object, at least one record type must remain.

The other two options are things you must **tidy up**, not things that make deletion impossible:

- **Profiles (C):** when you delete a record type, users assigned to it are simply moved to another available record type or to Master. It blocks nothing.
- **Page layouts (B):** layout assignments are reassigned automatically. It blocks nothing.

So the question is well constructed — the two plausible-sounding distractors are exactly the two housekeeping items that *don't* block deletion — but it has been keyed to one of the distractors.

The explanation also asserts that references "must be removed from profiles before deletion can proceed", which is not how record type deletion behaves and will send a student hunting through profiles for no reason.

**Fix:** `Answer: A`, and rewrite the `Why:`. Also strip the **orphaned video link** at the end (*"How To Delete Record Types In Salesforce…"*) — defect **F6**, the ninth found.

---

### Topic 1 — Q936. Statements that define Data Loader

**Your answer:** `B. (and D. are also accurate descriptions…)`

**Verdict: CORRECT-CAVEAT — content right, answer line unusable**

B and D are both true. B lists the operations (and the explanation correctly expands them to the full six: **Insert, Update, Upsert, Delete, Hard Delete, Export**). D is true because Data Loader reads and writes **CSV** only. E is false — Data Loader will not open an `.xlsx` file; you save it as CSV first.

But the stem says *"Identify the statements"* — plural — while the answer line names B and then adds D in a parenthetical aside (defect **F2**). If a quiz tool reads this it will mark a student wrong for answering B, D. **Write `Answer: B, D`.**

---

### Topic 1 — Q939. Person accounts in backup exports

**Your answer:** `A` — correct.

**Verdict: CORRECT**

A is right and the explanation gives the reason rather than just the rule: a person account is stored as a linked Account **and** Contact pair, so exporting Contacts sweeps them in — but only across the fields the two objects share. Accurate and complete.

---

### Topic 1 — Q941. Solution categories in reports and list views

**Your answer:** `B. False` — correct.

**Verdict: CORRECT-OBSOLETE**

The answer is right and, importantly, the explanation identifies **which half** of the compound statement fails — reports yes, list views no. That is the correct way to mark a two-clause True/False item and it is done well here.

The problem is the subject. **Solutions are legacy** and were superseded by Salesforce Knowledge; new orgs do not even surface the Solutions tab by default. This is at least the fourth Solutions question in the file. Recommend retiring the whole group.

---

### Topic 1 — Q942. Must an administrator reset your password?

**Your answer:** `B. False` — correct.

**Verdict: CORRECT**

Self-service password reset via **Forgot Your Password** has always existed. The explanation correctly lists the two prerequisites — you know your username, and you can reach the registered email. Nothing to fix.

---

### Topic 1 — Q948. What is NOT true of hover links

**Your answer:** `C. (Along with D, which is a playful joke option…)`

**Verdict: CORRECT-CAVEAT — but the question is unmarkable as written**

The intended answer C is correct: hover detail applies to specific lookup and record-name links, not to "just about every link".

The structural problem is that the stem asks for what is **NOT true**, and option **D** (*"I begin to levitate in my chair"*) is also not true. A negatively-worded question with a joke distractor has **two** valid answers, and your own answer line admits it. Either delete D, or change the stem to ask for the *false statement about Salesforce functionality*.

**Separate accuracy note:** the whole question describes **Salesforce Classic** hover details. Lightning Experience replaced them with **compact layout hover panels**, which behave differently and are configured in a different place. Flagged as obsolete-adjacent.

---

### Topic 1 — Q953. Ways to edit fields — which is NOT true

**Your answer:** `D` — correct.

**Verdict: CORRECT-CAVEAT**

D is the joke option and is the only clearly false one, so unlike Q948 this question is at least markable.

Worth tightening option C, though. *"Selecting multiple records within a list view and editing them all at once"* is true, but only under conditions the explanation skips: **inline editing must be enabled**, the field must not be on a record whose type differs across the selection, and in Lightning mass inline edit is limited to a subset of field types. "Mass Edit via List Views" is also not the feature's name — in Classic it is mass inline editing from a list view.

---

### Topic 1 — Q964. What is NOT true of Stay-in-Touch

**Your answer:** `C` — correct.

**Verdict: CORRECT-OBSOLETE**

C is the joke option and the intended answer.

Two problems:

- **Encoding corruption in option B** — `ג€"` appears where an em dash belongs (defect **F7**). This is the second occurrence found, after Q160.
- **Stay-in-Touch is Classic-only.** It does not exist in Lightning Experience. The modern equivalents are Data.com-style enrichment (retired), third-party tools, or an Experience Cloud self-update page.

Option A is also loosely worded — mass Stay-in-Touch requests go to **contacts and leads**, not "accounts", because an account is a company and has no email address of its own.

---

### Topic 1 — Q972. Steps to enable Multi-Currency

**Your answer:** `A. Create a Sandbox and D. Choose a default currency`

**Verdict: DISPUTED — the answer depends on the era, and neither reading gives A**

This question cannot be answered cleanly because the platform changed underneath it.

- **The legacy key was `B, D`.** Enabling multiple currencies genuinely required a support case, and setting the corporate currency was the other step. That is what the option list was built around — option B only exists because it used to be true.
- **Today, `D` alone is right.** Multi-currency is **self-service**: Setup → Company Settings → Company Information → *Activate Multiple Currencies*. No support case.
- **Option A is not a step in either era.** Creating a sandbox is sound advice — the feature is irreversible, so testing first is wise — but it is a *practice*, not part of the enablement process. Your explanation says as much and still keys it.
- **Option C is correctly rejected.** Advanced Currency Management is an optional extra that can only be switched on *after* multi-currency is live.

**Recommendation:** re-key to **D** and delete option B, or delete the question. Keying A turns a best-practice recommendation into a required step, which is the kind of thing a student will then repeat in an interview.

---

### Topic 1 — Q973. Standard fields only in mail merge?

**Your answer:** `B. False` — correct.

**Verdict: CORRECT-OBSOLETE**

Custom fields are available as merge fields, so the statement is false. Correct.

But **mail merge** itself is Classic-only — Standard Mail Merge and Extended Mail Merge were both retired. The live equivalents are email templates with merge fields, and document generation through third-party apps. The *principle* (custom fields are merge-able) still holds; the *feature* in the stem does not.

---

### Topic 1 — Q983. Reverting from a custom fiscal year

**Your answer:** `A. True` — correct.

**Verdict: CORRECT**

Custom Fiscal Years cannot be switched off once enabled. The explanation handles the subtlety well: you can define subsequent years to *look* like a standard calendar, but the feature itself stays on.

One addition worth making, because it's the practical consequence students are asked about: enabling custom fiscal years affects **forecasts, quotas and any report grouped by fiscal period**, and historical fiscal-period data is recalculated. That irreversibility is why it is a sandbox-first change.

**Formatting:** the question number has **two leading spaces** before it (`  983.`) — the second instance of stray leading whitespace, added to defect **F5**.

---

### Topic 1 — Q985. Records sit in the Recycle Bin for 30 days

**Your answer:** `B. False` — correct.

**Verdict: CORRECT**

**15 days** for records, and the explanation correctly notes that extended retention to 30 days exists but must be requested. Clean.

---

### Topic 1 — Q986. Fields sit in the Recycle Bin for 30 days

**Your answer:** `B. False` — right letter, but the explanation argues the opposite

**Verdict: CORRECT-CAVEAT — the explanation contradicts the answer and contradicts Q991**

The answer `False` is correct: deleted custom fields are retained for **15 days**, not 30.

But read the `Why:` — it says the field *"remains available for permanent deletion or restoration in the Recycle Bin for **30 days**"*. That is the exact claim the stem makes, so the explanation proves the statement **True** while the answer line says False. It then compounds the error by contrasting it with "standard data records, which sit in the recycle bin for 15 days" — implying fields and records differ, when in fact **both are 15 days**.

This also contradicts the file's own **Q991**, which answers 15 days for the same fact. Logged as contradiction **C15** and added to defect **F8** (now 20 questions).

**Fix:** keep `Answer: B. False` and rewrite the `Why:` to: *deleted custom fields and their data are held in the Deleted Fields list for 15 days, the same window as deleted records, after which they are purged permanently.* Then consider deleting the question as part of duplicate cluster **D25**.

---

## Batch 15 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 13 | Q823, Q831, Q842, Q862, Q877, Q883, Q892, Q893, Q907, Q939, Q942, Q983, Q985 |
| CORRECT-CAVEAT | 14 | Q811, Q816, Q830, Q834, Q853, Q860, Q872, Q878, Q908, Q913, Q936, Q948, Q953, Q986 |
| CORRECT-OBSOLETE | 6 | Q882, Q884, Q911, Q941, Q964, Q973 |
| DISPUTED | 2 | Q910, Q972 |
| **INCORRECT** | **4** | **Q843, Q863, Q904, Q921** |
| BLANK / MISSING | 0 | — |
| **Total** | **39** | |

**The four wrong answers, in one place:**

| Q | Keyed | Should be | One-line reason |
|---|---|---|---|
| **Q843** | A (True) | **B (False)** | Sales User is a **permission set**, not a standard profile |
| **Q863** | B (False) | **A (True)** | Deleted reports **do** go to the Recycle Bin; the "Deleted folder in the Reports tab" does not exist |
| **Q904** | A, B, D | **A, B, C, D, E** | *Transfer closed cases* and *Keep Account Team* are both real checkboxes on the Mass Transfer screen |
| **Q921** | C (Profiles) | **A (Apex)** | Salesforce Help: you can't delete **all** record types if the object is **referenced in Apex** |

**The single most dangerous explanation in this batch — Q986.** It states the 30-day figure the question is designed to disprove, then claims fields and records have different retention windows. Both halves are wrong and both contradict Q991 twelve questions later.

**A second self-defeating explanation — Q910.** It concedes the correct 175-character limit, labels it "older implementations", and then picks 255 anyway because 255 is on the option list. Reasoning from the answer choices back to the fact is how a question bank drifts away from reality.

**Numbering:** 39 questions across a 176-number span — **137 missing**, the worst density so far. The largest single gap is **Q922–Q935 (14 numbers)**, followed by **Q894–Q903 (10)** and **Q954–Q963 (10)**.

**Best explanations this batch:** **Q831** (validation rules fire on imports too), **Q842** (splitting a compound True/False into its two clauses), **Q892** (why Read is the floor permission) and **Q939** (person accounts are an Account+Contact pair under the hood) are all accurate, complete, and explain *why* rather than just *what*.

---

# BATCH 16 — File: `Admin-201 Topic 1.md`, Questions 990 – 1070

40 questions carry a number in this range. 41 numbers between 990 and 1070 do not exist in the file.

> **Correction to an earlier note.** Previous batches recorded that Topic 1's numbering "collapses to 992 → 2 → 4 → 6" near the end. That was an artefact of my own scan, which only recognised **three-digit** question numbers — so everything from **Q1000 onward was invisible to it**. The file in fact continues normally to **Q1175**. The genuine tail damage is smaller but still real, and is described at the end of this batch.

---

### Topic 1 — Q990. What can a lookup field look up to?

**Your answer:** `C. A record` — correct.

**Verdict: CORRECT**

A lookup field stores a **record ID** and renders as a clickable link to that record. The distinction the question is testing is real: you *configure* the lookup against an **object**, but what each individual field **holds** is a **record**. The explanation makes that distinction and also mentions self-lookups. Nothing to fix.

---

### Topic 1 — Q991. When are custom fields removed from the Recycle Bin?

**Your answer:** `A` (15 days) — correct.

**Verdict: CORRECT-CAVEAT**

15 days is right, and this is the version of the fact to keep (see duplicate cluster **D25** and contradiction **C15** — **Q986** twelve questions earlier says 30).

Two things to clean up:

- The explanation opens with *"Legacy Certification Test Answer: In legacy Salesforce exam banks… **45 days** was listed as the correct option for this question."* **45 is not one of the options** (15 / 30 / 60 / 90), so this cannot have been "the correct option" in any bank. It is unverifiable noise that makes a correct answer look uncertain — delete it (defect **F13**).
- The label is `Explanation & Modern Context:` rather than `Why:` (defect **F9**).

---

### Topic 1 — Q992. Permissions needed to edit profiles

**Your answer:** `B. View Setup and Configuration, Manage Users and Customize Application`

**Verdict: DISPUTED — B was right once; it is not what the documentation says today**

B is the historical key and matches the old permission model, where **Manage Users** carried profile administration and **Customize Application** was needed because profiles control object and field permissions.

The current documented requirement is different and much shorter: **"Manage Profiles and Permission Sets"**, plus **"View Setup and Configuration"** to reach Setup at all. **Manage Users** is *not* required to edit a profile — that permission governs creating and editing **user records**.

That makes option **C** (*View Setup and Configuration, Manage Users and Manage Profiles*) closest to modern reality, but it still carries the unnecessary Manage Users, so no option is cleanly correct.

**Recommendation:** rewrite the option list around the real pairing — *View Setup and Configuration* + *Manage Profiles and Permission Sets* — or delete. As written it teaches a permission combination that no longer exists under those names.

---

### Topic 1 — Q1000. Does a user alias need to be unique?

**Your answer:** `B` (No) — correct.

**Verdict: CORRECT-CAVEAT**

The content is excellent — it not only answers the question but contrasts Alias (not unique) with **Username** (unique across *all* Salesforce orgs worldwide) and **Community Nickname** (unique within the org). That three-way contrast is exactly what the exam tests.

Only the formatting needs work: `Answer:B No` has no space after the colon and mixes the letter with the value (defect **F3**). Write `Answer: B`.

Merge with **Q883** (alias length) — see duplicate **D27**.

---

### Topic 1 — Q1001. Can an opportunity belong to multiple territories?

**Your answer:** `B. No` — correct.

**Verdict: CORRECT-CAVEAT**

Correct: an opportunity carries a **single** territory. Accounts and leads can be assigned to many; opportunities cannot.

The caveat is which feature we are talking about. The original **Territory Management (1.0)** was retired; **Enterprise Territory Management** is the live feature, and it is the one with the single `Territory2Id` field the explanation names. Say so explicitly, because the file now contains **five** Territory Management questions (Q161, Q234, Q288, Q440, Q1001) and they do not all describe the same generation of the feature. See duplicate **D10**, now extended.

---

### Topic 1 — Q1002. Must users see the record type "jump page" every time?

**Your answer:** `B` (No) — correct.

**Verdict: CORRECT-OBSOLETE**

The answer is right for **Salesforce Classic**, where each user could set a default record type per object and tick a box to stop being prompted (Personal Setup → My Personal Information → Record Type Selection).

In **Lightning Experience that per-user preference is gone.** If a user has more than one record type available on an object, the record type chooser appears every time. The way to suppress it now is administrative, not personal: reduce the record types assigned to the profile or permission set so only one is available.

**Recommendation:** add "in Salesforce Classic" to the stem, or rewrite for Lightning — otherwise a student will go hunting for a personal setting that no longer exists.

---

### Topic 1 — Q1003. Can you tell a record's type from its detail page?

**Your answer:** `A` (Yes) — defensible.

**Verdict: CORRECT-CAVEAT — the stem is too loose**

Yes is the right answer, and for a better reason than the explanation gives: when record types are enabled on an object, Salesforce **adds the Record Type field to the page layouts automatically**. So by default it is visible.

But the explanation then drifts into "or it can be inferred because record types dictate specific page layouts, unique picklist values, and distinct business processes." Inferring a record type from which picklist values you can see is not *knowing* it — and an admin can remove the field from the layout, at which point the honest answer becomes No.

**Recommendation:** tighten the stem to *"…assuming the Record Type field has not been removed from the page layout"*, or replace it with a question that tests something firmer — for example, that record type controls **picklist values, page layout assignment and business process**, all at once.

---

### Topic 1 — Q1007. FILL BLANK — what must exist before creating record types for Leads, Opportunities, Cases or Solutions?

**Your answer:** `Picklist values (specifically for the field that drives the record type, or the corresponding Business Processes…)`

**Verdict: CORRECT-CAVEAT — the right answer is in there, but it is in brackets**

The answer the question is looking for is **Business Processes**, and the four objects named in the stem are precisely the four that have them:

| Object | Business process required |
|---|---|
| Lead | **Lead Process** (drives Lead Status) |
| Opportunity | **Sales Process** (drives Stage) |
| Case | **Support Process** (drives Status) |
| Solution | **Solution Process** (drives Status) |

That table is the entire point of the question — it is why those four objects are listed and no others. Your answer leads with "picklist values" and relegates business processes to a parenthetical.

Picklist values are not wrong as a *prerequisite* — the values have to exist before you can pick which ones go into a process — but the sequence is: **picklist values → business process → record type**. The blank is the middle step.

**Fix:** lead with *Business Processes*, name all four, then mention that the underlying picklist values must exist first. Also a `FILL BLANK` outlier (defect **F14**).

---

### Topic 1 — Q1009. FILL BLANK — Jump Start vs Standard Approval Process Wizard

**Your answer:** a prose comparison — accurate.

**Verdict: CORRECT**

The comparison is right: Jump Start is one page, one step, automatic defaults; the standard wizard is multi-screen with full control over entry criteria, multiple steps, parallel approvers and per-outcome actions.

Two specifics worth adding, because they are the details the exam picks on:

- Jump Start **automatically chooses record editability** (admins only) and **automatically selects an existing approval email template** — you don't get to set either.
- Jump Start restricts approver assignment to **"let the submitter choose"** or **a specific set of approvers you name**; it cannot use the manager field hierarchy or a queue.

`FILL BLANK` outlier (defect **F14**).

---

### Topic 1 — Q1011. FILL BLANK — what do business processes do?

**Your answer:** accurate.

**Verdict: CORRECT**

Correct and clearly explained — a business process restricts which Stage / Status values are available, and is then attached to a record type.

**Structural note:** this question and **Q1007** are two halves of one topic and sit four numbers apart with unrelated material between them. Place them together, and make Q1007's answer point forward to this one. `FILL BLANK` outlier (defect **F14**).

---

### Topic 1 — Q1013. Three features that can automatically create a Case

**Your answer:** `CDE` — correct.

**Verdict: CORRECT-CAVEAT**

Email-to-Case, Web-to-Case and Process Builder are the three. **SMS-to-Case does not exist** as a Salesforce feature, and Lightning for Outlook logs emails against existing records — it does not create cases.

**The caveat is Process Builder.** Salesforce **stopped allowing new Process Builder processes** and has been retiring the tool; **Flow** is the supported answer now. The concept is unchanged (declarative automation can create a Case), but the tool name is dated. Change option C to **Flow**, or keep Process Builder and add a line saying Flow replaced it.

Worth adding to the explanation: **On-Demand Email-to-Case** vs standard Email-to-Case (the latter needs the email agent installed behind your firewall) — that distinction does get asked.

---

### Topic 1 — Q1014. Two benefits of content delivery

**Your answer:** `BD`

**Verdict: INCORRECT — the answer is `A, B`**

The two real benefits on this list are:

- **A — Associate the content delivery with a Salesforce record.** True: content deliveries appear in a related list on Accounts, Contacts, Opportunities, Cases and more.
- **B — Password protection.** True: you can require a password before an external recipient can open the delivery.

**C is false** — the delivery URL is system-generated and cannot be customised. **D is false** — there is no per-file encryption setting on a content delivery.

**The explanation actually knows this and the answer line contradicts it.** Read it closely: the second bullet is headed *"Associate with a Salesforce Record (Option D)"* — but that sentence describes **option A**. The label is simply wrong. Then the closing note says *"Option D is incorrect"*. So within a single block, D is given as correct in the answer line, mislabelled as the text of A, and then declared incorrect. Only one of those three can be true.

**Fix:** `Answer: A, B`, and correct the bullet label. This is defect **F8** in its clearest form — the explanation proves a different answer from the one keyed.

---

### Topic 1 — Q1015. Three things customisable per opportunity stage

**Your answer:** `BDE` — correct.

**Verdict: CORRECT**

**Probability**, **Forecast Category** and **Type** (Open / Closed-Won / Closed-Lost) are the three attributes on the Opportunity Stage picklist value edit page. Quotas belong to Forecasting; Product Family is a field on Product. Accurate and complete.

---

### Topic 1 — Q1018. What does Campaign Influence allow?

**Your answer:** `B` — correct.

**Verdict: CORRECT-CAVEAT**

B is right: Campaign Influence exists so you can report on **all** the campaigns that touched an opportunity, not just the one in Primary Campaign Source.

The caveat is **option D**. With **Customizable Campaign Influence** enabled, users *can* set the influence percentage on each campaign in the related list, and admins can define multiple attribution models. So D is not simply false any more — it is a second feature of the same thing. Your explanation half-notices this and hedges around it.

**Recommendation:** either tighten the stem to *"What is the primary purpose of Campaign Influence?"*, or delete option D. And make the contrast explicit: **Primary Campaign Source** = one campaign, a field on the Opportunity; **Campaign Influence** = many campaigns, a related list.

---

### Topic 1 — Q1020. Two ways Knowledge articles should be used

**Your answer:** `B. and D.` — correct.

**Verdict: CORRECT**

Resolving cases and publishing to a self-service channel are the two. The explanation correctly identifies **Solutions** and **Answers** as legacy features superseded by Knowledge — which also explains, in passing, why the four Solutions questions elsewhere in the file should go.

---

### Topic 1 — Q1023. Creating users 30 days ahead without notifying them

**Your answer:** `c` (Freeze)

**Verdict: DISPUTED — I would key `D`, and the explanation contains a statement that is simply untrue**

The explanation's central claim is:

> *"Unchecking the notification box on user creation is not possible for brand-new users because Salesforce requires a password reset / welcome email to be generated for new credentials."*

**That is false.** The New User page has a checkbox labelled **"Generate new password and notify user immediately"**, and it can be unchecked. Doing so creates the user with no welcome email at all. When the rep starts, the admin resets the password and the email goes out then — which is exactly the requirement.

More importantly, **freezing does not solve the stated problem**. The welcome email is sent at the moment of creation. By the time you open the user record and click Freeze, the email has already gone — to a mailbox the stem tells us is not yet active.

Option D's wording is badly punctuated — *"uncheck Generate new password, and notify the user immediately"* — and the stray comma makes it read as two instructions. It is meant to be the single checkbox name.

**Recommendation:** re-key to **D** and fix the comma, or delete the question. If you keep C, the explanation must at minimum stop asserting that the notification cannot be suppressed. Answer letter is also lower-case (defect **F3**).

---

### Topic 1 — Q1024. Which object must be related to create an Opportunity?

**Your answer:** `A. Account` — the intended answer.

**Verdict: CORRECT-CAVEAT — true in the UI, not true in the database**

A is the answer the exam wants, and Quote, Contact and Lead are all correctly rejected.

The nuance the explanation misses is worth teaching because it causes real data problems: **`AccountId` on Opportunity is not a required field at the database level.** An opportunity created through the API or Data Loader with no account will save successfully. The genuinely required fields are **Name, Close Date and Stage**. What makes Account feel mandatory is the standard page layout.

That is exactly why "orphaned" opportunities show up after a bulk load — and why an admin might add a validation rule to enforce it.

---

### Topic 1 — Q1025. Login hours expire at 5:01 p.m.

**Your answer:** `D` — **the letter is correct, the explanation argues for `C`**

**Verdict: CORRECT-CAVEAT — but the explanation must be replaced entirely**

D is right. Salesforce Help: *"If users are logged in when their login hours end, they can continue to view their current page, but they can't take any further action."* No new sessions can be started.

Now read your own `Why:`:

> *"Salesforce terminates the active session. The user is immediately logged out of the application, and any unsaved changes or work-in-progress on records will be lost."*

That is a word-for-word description of **option C** — the distractor. A student reading the explanation will conclude the answer is C and will be marked wrong by the answer line above it. Defect **F8**.

This is also the **same fact, and the same error**, as **Q766** (contradiction **C14**). The login-hours cluster is now five questions — Q385, Q564, Q766, Q913, Q1025 — and **two of them teach the wrong behaviour**. See duplicate **D26**, extended.

**Fix:** keep `Answer: D`, delete the `Why:` and replace it with the Salesforce Help wording.

---

### Topic 1 — Q1026. Rehired user can no longer see old records

**Your answer:** `A` — correct.

**Verdict: CORRECT**

One of the best questions in the file. Deactivating a user **permanently deletes the manual shares** granted to them; reactivating does not restore them, and re-adding them to a default opportunity team only regrants team-based access going forward. The explanation gets both halves right.

One line worth adding: the same is true of **sharing granted by being on a team** on the old records — default teams apply to *new* opportunities, not retroactively to the ones the rep used to work.

---

### Topic 1 — Q1028. Which two dashboard components use summary rows?

**Your answer:** `B. Chart and D. Table` — correct.

**Verdict: CORRECT-CAVEAT**

Right, and for the right reason: **Chart** and **Table** render **grouped/summary rows**, while **Metric** and **Gauge** display a **single value from the grand total**. That is the actual distinction being tested and the explanation states it cleanly.

Formatting only: the answer line restates both option texts joined with "and" (defect **F3**). Write `Answer: B, D`.

---

### Topic 1 — Q1030. How many users on the Add Multiple Users page?

**Your answer:** `D` (10) — correct.

**Verdict: CORRECT**

10 at a time, regardless of how many licences were bought — and the explanation makes exactly that point, which is what the "25 licences" detail in the stem is there to test. Clean.

---

### Topic 1 — Q1032. Guided, scripted screens for support reps

**Your answer:** `A. Cloud Flow Designer (Salesforce Flow)` — correct.

**Verdict: CORRECT-OBSOLETE (tool name only)**

The concept is right and the rebuttals of Approval Process, Workflow Rule and Process Builder are accurate — only a **screen flow** puts an interactive UI in front of a user.

But **Cloud Flow Designer was retired**; the tool is **Flow Builder**. Your answer line already carries the correction in brackets, which is better than nothing but is still a hedged answer line (defect **F2**). Change option A to read **Flow Builder (Screen Flow)** and drop the bracket.

---

### Topic 1 — Q1033. What prevents deleting a custom field?

**Your answer:** `B. The field is part of a field dependency.`

**Verdict: DISPUTED — B is true, but so is C, and the explanation denies it**

B is genuinely blocking: a controlling or dependent field cannot be deleted until the dependency is removed.

But **option C also blocks.** Salesforce refuses to delete a custom field that is **referenced by a workflow field update**, and returns an explicit error naming the field update. The same is true of references from validation rules, formula fields, Apex, Visualforce and custom report types.

Your explanation asserts the opposite: *"Salesforce allows you to delete custom fields even if they are referenced in page layouts, workflow field updates, or standard reports."* Page layouts and reports — yes. **Workflow field updates — no.**

So the question has two correct answers while presenting itself as single-choice.

**Recommendation:** delete option C, or change it to something that genuinely does not block (a list view filter, for instance).

**Also:** the word **"field" is misspelled "filed" three times** — in options B, C and D. Straight typo fix.

---

### Topic 1 — Q1034. Notify a rep a month before a support plan expires

**Your answer:** `B. Workflow rule (or Flow, which has largely replaced traditional workflow rules)`

**Verdict: CORRECT-OBSOLETE**

The reasoning is correct and the three rejected options are rejected accurately — assignment, auto-response and escalation rules all fire on case/lead events, not on a future date.

The mechanism being tested is the **time-dependent workflow action**, scheduled relative to a date field. That concept is alive; **Workflow Rules are not** — Salesforce blocks creation of new ones and the answer today is a **scheduled-path Record-Triggered Flow**.

Your answer line carries the correction inline, which is again a hedged answer (defect **F2**). Commit to one: change option B to **Flow (scheduled path)** and keep the explanation's time-dependency reasoning intact.

---

### Topic 1 — Q1035. Field property that ensures correct email format

**Your answer:** `A. Data Type` — correct.

**Verdict: CORRECT**

Choosing the **Email** data type gives you format validation for free. The explanation handles the tempting distractor well: a validation rule *could* enforce a pattern, but the built-in property is the right tool and the question asks for a *field property*. Good, complete reasoning.

---

### Topic 1 — Q1039. Three considerations when importing via Data Loader

**Your answer:** `ABc`

**Verdict: INCORRECT — the answer is `A, B, E`**

| Option | Your call | Reality |
|---|---|---|
| A — checkbox fields accept TRUE/FALSE | correct | ✔ true (1/0 also work) |
| B — FLS determines which fields are visible | correct | ✔ true — Data Loader respects the running user's FLS |
| C — restricted picklist: new value **ignored, default applied** | keyed correct | ✖ **false** — the row **fails** with *"bad value for restricted picklist field"*. Salesforce rejects the record; it does not silently substitute a default |
| D — validation rules do not execute | rejected | ✖ correctly rejected — validation rules **do** fire on Data Loader imports |
| E — unrestricted picklist: new value applied but **not added to the picklist** | not chosen | ✔ **true, and it is the third answer** — the value lands on the record, but the picklist definition is untouched, so it shows as an "inactive"/unlisted value |

The whole point of the question is the **restricted vs unrestricted picklist** contrast in options C and E, and the key has taken the wrong half of the pair. Restricted rejects; unrestricted accepts silently.

**Fix:** `Answer: A, B, E`, and rewrite the option C bullet to explain the rejection. Answer line is also mixed-case (defect **F3**).

---

### Topic 1 — Q1041. Three ways to document meeting details on a case

**Your answer:** `A, D, E` — correct.

**Verdict: CORRECT-CAVEAT**

Case Feed, Case Comments and Events are the three. **"Case Group" is not a Salesforce feature** and workflow email alerts send mail rather than record notes.

One ageing detail: **Case Comments are legacy.** In Lightning with Case Feed enabled, the modern equivalent is a feed post or the Notes related list. The answer still stands, but flag Case Comments as the older mechanism.

---

### Topic 1 — Q1042. What makes a process a good fit for Approval Processes?

**Your answer:** `AD` — correct.

**Verdict: CORRECT-CAVEAT**

A and D are both supported: **delegated approvers** are a built-in feature, and **multi-step approvals with step-level criteria** (queue first, then VP above a threshold) are the core design. **Queues can be approvers**, which is what makes D work — worth saying explicitly, because students often assume approvers must be individual users.

The explanation would be stronger if it said *why* B and C fail:

- **B** — rejection **ends** the process (or returns it to the previous step). There is no "rejected, therefore escalate upward for final approval" path.
- **C** — approvers are never assigned **randomly**. You can assign to a queue, a related user, the manager field, or named users — all deterministic.

---

### Topic 1 — Q1045. Automatic email to the case contact when a case closes

**Your answer:** `C` — correct.

**Verdict: CORRECT-OBSOLETE (tool name)**

Right, and the explanation nails the trap: **auto-response rules fire only on case/lead *creation***, never on update. That single sentence is the whole question.

Same caveat as Q1034 — the modern build is a record-triggered Flow with an email action. The *distinction* being tested is timeless; the tool has moved on.

---

### Topic 1 — Q1046. Record types and page layouts for three product lines × two teams

**Your answer:** `D` — correct.

**Verdict: CORRECT**

The best-designed question in this batch. **Three record types** (one per line of business, because that is what drives different *data*) and **six page layouts** (because layout is assigned per **profile × record type**). The 3 × 2 grid is precisely how layout assignment works.

The reason the other options fail is worth one added line: A gives every team the same cluttered layout; B creates six record types where three would do, doubling the maintenance for no data benefit; C loses the ability to differentiate picklists and processes per product line.

---

### Topic 1 — Q1047. Three users need Read and Edit on Campaigns

**Your answer:** `B` — correct.

**Verdict: CORRECT-CAVEAT**

Permission set is right — grant the exception to the three users rather than reshaping a profile that dozens of people share. Cloning the profile (D) creates a second profile to maintain forever; changing the Sales User profile (A) over-grants to everyone; System Administrator (C) is wildly over-privileged.

**The missing half of the answer:** Campaigns also need the **"Marketing User"** setting. Object permissions alone are not enough — a user must additionally have Marketing User enabled to create and edit campaigns and use the campaign import wizards. Historically a checkbox on the user record; in modern orgs it also comes via a permission set. Leaving it out means an admin who follows this answer exactly will still get a permission error.

---

### Topic 1 — Q1049. Discounted prices for one partner

**Your answer:** `D` — correct.

**Verdict: CORRECT-CAVEAT**

A **custom price book** is the right answer, and the three distractors are all wrong for good reasons.

Two clarifications worth adding:

- Every product must have a **Standard Price** before it can be added to a custom price book — a step people forget.
- Option C is not just "less good", it is actively wrong: editing the **Standard Price Book** would change pricing for **every** customer, not just the partner.

---

### Topic 1 — Q1050. Helping reps learn from comparable won deals

**Your answer:** `C, D` — correct.

**Verdict: CORRECT**

Chatter groups for the qualitative side (how did you beat this competitor?) and dashboards for the quantitative side (which approaches actually close). **Big deal alerts** and **opportunity update reminders** are both *notification* features — they push a message out, they do not help anyone research a past deal. That's the distinction the question is testing, and the explanation makes it.

---

### Topic 1 — Q1051. Custom payment object visible only to those with Opportunity access

**Your answer:** `B` — correct.

**Verdict: CORRECT**

**Master-detail** is the answer, and the reason is the one the explanation gives: the detail record has **no owner and no sharing settings of its own** — access is inherited from the master. That is the only structure that satisfies "only those users with access to the Opportunity" automatically and permanently.

A lookup (A, D) would leave the custom object with its own OWD and its own owner, so access would diverge the moment anything changed. A sharing rule (C, D) grants access *outwards*; it cannot restrict access to mirror a parent.

One line worth adding, since it is the classic follow-up: master-detail also means **deleting the opportunity deletes the payment records**, and the payment object can **roll up** to the opportunity.

---

### Topic 1 — Q1053. Two groups of objects created by lead conversion

**Your answer:** `BD` — correct.

**Verdict: CORRECT**

B (Account, Contact, Opportunity) is the standard path; D (Person Account, Opportunity) is the path when person accounts are enabled. Both correct, and the explanation flags that the **Opportunity is optional** in each case — which is the detail most people miss.

"Lead Conversion" (A) is not an object, and **Order** (C) is never created by conversion.

---

### Topic 1 — Q1054. Three features of Chatter

**Your answer:** `B, D, E` — correct.

**Verdict: CORRECT**

Bookmarks, feeds and recommendations are all Chatter. Events is an Activity object and Notes is a standard object — both predate Chatter and exist independently of it. Correct, and correctly reasoned.

---

### Topic 1 — Q1064. Former admin still owns records and is the Default Workflow User

**Your answer:** `D` (Deactivate)

**Verdict: INCORRECT — the answer is `C. Freeze`**

This question is built around a specific Salesforce restriction, and the stem tells you which one: **"is the Default Workflow user."**

**You cannot deactivate a user who is set as the Default Workflow User.** Salesforce blocks it outright. The same is true if the user is referenced in a custom hierarchy field. Salesforce Help says, almost in these words: *"Sometimes you can't immediately deactivate an account … In these cases, freeze the user account to prevent the user from logging in."*

So the sequence is: **freeze immediately** (that is the security measure — it blocks login right now), then do the cleanup work — reassign the Default Workflow User, mass-transfer the records — and *only then* can you deactivate to reclaim the licence.

The explanation has it backwards. It says *"Simply freezing or deleting the user leaves workflow rules and record ownership unresolved."* Deactivating leaves ownership unresolved too — deactivation does not transfer records. And it never mentions that **option A is impossible**: Salesforce users **cannot be deleted**, ever.

**Fix:** `Answer: C`, and rewrite the `Why:` around the deactivation block. Also add the point that users can never be deleted — it is the single most commonly tested fact about user administration and this question wastes an option on it without explaining it.

**Formatting:** double space after the number (`1064.  A previous`) — defect **F5**.

---

### Topic 1 — Q1065. Folder access needed to add reports and share the folder

**Your answer:** `B` — correct.

**Verdict: CORRECT**

**Manager** is the only level that includes sharing. The explanation lays out the ladder correctly — Viewer reads, Editor can save reports into the folder, Manager can additionally **share and delete the folder itself**. The stem asks for two capabilities (add reports **and** share), and only Manager covers both. Accurate and complete.

---

### Topic 1 — Q1068. Tools to back up Salesforce data monthly

**Your answer:** `A. Data Export Service, Reporting Snapshots, Einstein Analytics`

**Verdict: INCORRECT — the answer is `B. Data Export Service, Data Loader, Report Export`**

The question asks for **backup** tools. A backup has to produce a copy of the data **outside** the org. Judge each candidate against that test:

| Tool | Backup? |
|---|---|
| **Data Export Service** | ✔ Yes — the native backup service; monthly on Professional/Developer, weekly on Enterprise and above |
| **Data Loader** | ✔ Yes — scheduled command-line export writes CSVs to a local drive |
| **Report Export** | ✔ Yes — exports report rows to a file |
| **Reporting Snapshots** | ✖ **No** — writes report rows into a **custom object inside the same org**. If the org's data is lost or corrupted, the snapshot is lost with it. It is a *historical trending* tool, not a backup |
| **Einstein Analytics / CRM Analytics** | ✖ **No** — a BI and visualisation product. It ingests a copy of data for analysis; it has no restore path and is not a backup mechanism |

Option **A contains two tools that cannot restore anything.** Option **B is three genuine extraction tools**, and the Data Export Service in it directly satisfies the word "monthly" in the stem.

Your explanation defends A by saying Einstein Analytics *"can be integrated to process, store, and analyze backed-up data trends over time"* — which concedes the point: it analyses backups, it does not make them.

**Fix:** `Answer: B`, and rewrite the `Why:` around the in-org vs off-platform distinction. That distinction is the real lesson here, and it is worth more than the question itself.

---

### Topic 1 — Q1070. Dashboard of Closed/Won by user, private sharing model

**Your answer:** `D` — correct.

**Verdict: CORRECT-CAVEAT**

D is right. A dashboard runs as a single **running user**, and every viewer sees that person's data regardless of their own access. Setting the Sales Manager as running user and putting the dashboard in a **shared folder** lets the whole team see department-wide numbers under a private model.

The explanation would be stronger for saying why **A fails**: a **dynamic dashboard** runs as the **logged-in user**, so each rep would see only their own closed-won total — the exact opposite of the requirement. That is the trap in this question, and it is currently unaddressed. B and C both fail for the simpler reason that a private folder is not shared with anyone.

**Formatting:** option D contains **mojibake** — `ג€` appears twice where quotation marks belong around "View Dashboard as Me". Third encoding failure in the file, after Q160 and Q964 (defect **F7**).

---

## Batch 16 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 14 | Q990, Q1009, Q1011, Q1015, Q1020, Q1026, Q1030, Q1035, Q1046, Q1050, Q1051, Q1053, Q1054, Q1065 |
| CORRECT-CAVEAT | 15 | Q991, Q1000, Q1001, Q1003, Q1007, Q1013, Q1018, Q1024, Q1025, Q1028, Q1041, Q1042, Q1047, Q1049, Q1070 |
| CORRECT-OBSOLETE | 4 | Q1002, Q1032, Q1034, Q1045 |
| DISPUTED | 3 | Q992, Q1023, Q1033 |
| **INCORRECT** | **4** | **Q1014, Q1039, Q1064, Q1068** |
| BLANK / MISSING | 0 | — |
| **Total** | **40** | |

**The four wrong answers, in one place:**

| Q | Keyed | Should be | One-line reason |
|---|---|---|---|
| **Q1014** | B, D | **A, B** | The explanation labels option A's text as "Option D", then declares D incorrect. A (associate with a record) and B (password protection) are the two real benefits |
| **Q1039** | A, B, C | **A, B, E** | **Restricted** picklists **reject** the row; **unrestricted** picklists accept the value without adding it to the list. The key took the wrong half of the pair |
| **Q1064** | D (Deactivate) | **C (Freeze)** | You **cannot deactivate** a user who is the Default Workflow User. That is why the stem mentions it. Freeze now, clean up, deactivate later |
| **Q1068** | A | **B** | Reporting Snapshots write **into the same org** and CRM Analytics is a BI tool — neither is a backup. Data Export Service + Data Loader + Report Export all produce off-platform copies |

**The most damaging explanation in this batch — Q1025.** The answer letter (D) is correct, but the `Why:` underneath describes option C word for word: *"the user is immediately logged out… unsaved work will be lost."* Anyone who reads the explanation will answer C and be marked wrong. It is the same error as **Q766** (**C14**), which means **two of the five login-hours questions in this file teach the documented behaviour backwards**.

**A claim that is flatly untrue — Q1023.** The explanation states that the welcome email *"is not possible"* to suppress for a new user. The checkbox **"Generate new password and notify user immediately"** exists on the New User page precisely so you can suppress it. Freezing cannot help, because the email is sent at creation — before there is a user record to freeze.

**A question with two right answers — Q1033.** A custom field referenced by a **workflow field update** cannot be deleted either; Salesforce returns an error naming the field update. The explanation claims the opposite.

**Numbering:** 81 numbers, 40 questions — 41 missing. Longest gap **Q1055–Q1063 (9)**, then **Q993–Q999 (7)**.

**Best explanations this batch:** **Q1026** (manual shares are destroyed on deactivation and never come back), **Q1046** (why the layout grid is profile × record type), **Q1051** (detail records have no owner and no sharing of their own) and **Q1053** (the opportunity is optional on conversion) are all accurate, complete, and teach the mechanism rather than the fact.

---

# BATCH 17 — File: `Admin-201 Topic 1.md`, Questions 1071 – 1156

37 questions carry a number in this range. 49 numbers between 1071 and 1156 do not exist in the file.

> **This is the strongest stretch in the whole file — no wrong answers at all.** These are modern scenario-style questions ("Ursa Major Solar", "Universal Containers", "Cloud Kicks") rather than the legacy True/False and limits trivia that dominates Q1–Q1000, and the quality difference is dramatic. **34 of 37 are correct**, 2 are disputed on technical grounds, and **zero are mis-keyed**. Compare that with Batch 16 (4 wrong) and Batch 9 (3 wrong). If you ever have to cut this file down, **this is the section to build the new bank around.**

---

### Topic 1 — Q1071. Two reps see different row counts on the same unfiltered report

**Your answer:** `A` — correct.

**Verdict: CORRECT**

The reasoning is exactly right: under a **private** OWD, which *records* you see comes from ownership, the **role hierarchy** and sharing rules. A report applies no magic of its own — it simply shows the rows you already have access to.

The three distractors are each wrong for a different and instructive reason, and it is worth spelling them out:

- **Profile (D)** and **permission set (C)** control **object and field** access. If they were the problem, Rep B would see *no* accounts or *no* fields — not a smaller number of rows.
- **Queue (B)** is a holding area for unassigned records. Queue membership does not grant visibility into other people's accounts, and accounts cannot be queue-owned at all.

**Typo:** the stem reads *"Sales Rep and Sales Rep B"* — the first one should be **Sales Rep A** (defect **F15**).

---

### Topic 1 — Q1072. Two purposes of the AppExchange

**Your answer:** `C, D` — correct.

**Verdict: CORRECT**

C and D are the two. **A is nonsense** — AppExchange distributes *applications*, not your customer records. **B is a category error**: the **Service Console is a standard Salesforce app** that ships with the licence; you don't install it from AppExchange.

That second point is the real trap in the question, and the explanation would be stronger for naming it.

---

### Topic 1 — Q1078. Stop Marketing editing accounts under Public Read/Write

**Your answer:** `C` — correct.

**Verdict: CORRECT-CAVEAT — the explanation misses the single most important reason A is wrong**

C is right, and the principle stated is right: **object permissions are the ceiling.** No matter how open the sharing model is, a user who lacks Edit on the object cannot edit the record. Sharing can only open up access *within* what the profile already allows.

But the explanation says permissions are *"controlled via user profiles **or permission sets**"*, which quietly implies option A would also work. It would not, and this is the point the question is built on:

> **Permission sets only ever grant. They can never remove or revoke a permission.**

So "assign a permission set which removes Edit permission" (A) describes something the platform cannot do. That sentence belongs in the explanation — it is one of the most reliably tested facts in the whole Admin syllabus.

**D** is also worth rebutting explicitly: switching the org-wide default to Public Read Only would stop **everyone** editing accounts, including Sales. The requirement is narrow; the fix must be narrow.

---

### Topic 1 — Q1081. Different content structures for an FAQ and a Help Article

**Your answer:** `D. Knowledge article types`

**Verdict: CORRECT-OBSOLETE — right for Classic, wrong for Lightning, and option C is the modern answer sitting right there in the list**

In **Classic Knowledge**, each kind of article was a separate **article type**, each with its own fields and layout. D was correct.

In **Lightning Knowledge** — which is now the standard and the only version being actively developed — **article types were eliminated.** There is a single `Knowledge__kav` object, and the different content structures are handled by **record types**. That is option **C**.

This is not a small distinction: migrating from article types to record types is a well-known, one-way Lightning Knowledge migration project.

So the question currently has the **Classic answer keyed while the Lightning answer sits in the option list as a distractor.** A student who learns D will answer a current exam question wrongly.

**Recommendation:** re-key to **C** and reword the stem for Lightning Knowledge, or delete. Keep the data-category and article-version distractors — both are still live features and both are good distractors (categories classify, versions handle drafts and publishing).

---

### Topic 1 — Q1083. Three conditions where a validation rule fires

**Your answer:** `B, C, E` — correct.

**Verdict: CORRECT**

Imports, user edits and Web-to-Lead all run validation rules. Deletion (D) does not — validation runs on **save**, and a delete is not a save.

**Option A is the interesting one and you got it right**, but the explanation needs a precision fix. It says *"automated field updates by workflow rules do not trigger standard validation checks."* True — but only for **workflow** field updates, which are the exception. **Flow and Process Builder updates *do* fire validation rules.** So the rule of thumb is:

| Source of the change | Validation rules run? |
|---|---|
| User edit / inline edit / mass edit | ✔ |
| Data Import Wizard, Data Loader, API | ✔ |
| Web-to-Lead, Web-to-Case | ✔ |
| **Flow / Process Builder** field update | ✔ |
| **Workflow rule** field update | ✖ (the exception) |
| Delete | ✖ (nothing is saved) |

Worth adding, because "workflow field updates skip validation" is only memorable if you know it is the odd one out.

---

### Topic 1 — Q1084. Fields required to update a contact's email via Data Import Wizard

**Your answer:** `D. Contact Email Address and Account ID`

**Verdict: DISPUTED — Account ID is not required, and no option is cleanly correct**

The Data Import Wizard does not have a fixed "required set of fields" for an update. It asks you to choose a **match type**, and *that* determines what the file must contain:

| Match by | What the file needs |
|---|---|
| Salesforce ID | Contact ID |
| Email | Contact Email |
| Name and Account | Contact Name **and** Account Name |
| External ID | the external ID field |

**Account ID appears in all four options**, which is what makes the question unanswerable — it is genuinely required in only *one* of those four routes, and even then it is Account **Name**, not Account ID.

Your explanation notices the problem and hedges around it: *"the Account ID (**or matching account name/identifier required by the wizard structure**)"*. That bracket is doing a lot of work, and it is a reliable signal that the option list is at fault rather than the answer.

There is also a logic problem in the stem. It says the admin wants to *update contacts with a **new** email address* — but option D proposes matching **on** the email address. You cannot use the old value as the key and change it in the same pass. On that reading, **A (Contact ID)** is the only route that actually works.

**Recommendation:** rewrite around the match-type concept, which is the genuinely examinable idea, or delete.

**Also:** the explanation ends with an **orphaned video link** (*"How to Import Accounts & Contacts w/ Data Import Wizard…"*) — the eleventh in the file (defect **F6**). This is the same stray link that was appended to **Q904**.

---

### Topic 1 — Q1089. Three considerations when creating a Sales Process

**Your answer:** `A, B, C` — correct.

**Verdict: CORRECT**

All three are right, and the two rejections are right as well:

- **D is false** — a record type's **Label** and **Description** can be edited freely after creation. (The **Developer Name** can also be changed, though doing so may break API and Apex references — which is probably where the myth of permanence comes from.)
- **E is false** — adding a value to the master picklist does **not** silently propagate to every record type. Salesforce shows you a screen asking which record types should receive it, and you choose.

The explanation covers both correctly. Good question, well handled.

---

### Topic 1 — Q1091. Temporary View/Edit on 180 California accounts

**Your answer:** `B` — correct.

**Verdict: CORRECT-CAVEAT — the reason D fails is the whole point, and it is missing**

B is right: a **criteria-based sharing rule** on Billing State = California grants Read/Write automatically, covers all 180 records without touching one of them by hand, and can be deleted in one click when the three months are up.

Options A and D look similar to B, and the explanation dismisses them too quickly. The decisive fact is:

> **Sharing rules cannot share *to* a profile.** The "Share with" target must be a **role**, **role and subordinates**, **public group**, **territory**, or (for some objects) a **queue**. Profiles are not an option in the picklist.

That single sentence kills **D** outright, and it is a classic exam trap — the option is designed to look identical to B apart from one word.

**A** fails for a different reason: a **profile** controls object and field access; it has no concept of "records where Billing State = California". **C** is not a real thing — there are no "Account folders" in Salesforce; folders exist for reports, dashboards, email templates and documents.

---

### Topic 1 — Q1093. Loading homes and price books

**Your answer:** `A. Data Loader` — correct.

**Verdict: CORRECT**

Right, and for the right reason — though the explanation buries the decisive point under "larger data sets". Volume is not the issue here (the stem gives no record count). The issue is **object support**:

> **The Data Import Wizard does not support Price Books or Price Book Entries.** Data Loader does, because it can reach any API-accessible object.

That is the whole question. **Mass Transfer Records** (B) changes ownership of existing records and imports nothing; **"Mass Create Records"** (D) is not a Salesforce feature at all.

One practical addition worth making: loading pricing is a **two-stage** job — Products first, then **PricebookEntry** records, which need the Product ID and the Price Book ID. That sequencing catches people out.

---

### Topic 1 — Q1099. Two considerations when creating a username

**Your answer:** `BC` — correct.

**Verdict: CORRECT**

Both right, and the explanation draws the distinction that the question exists to test: a username must **look like** an email address but does **not** have to **be** one, and does not have to match the user's Email field. That is why D is wrong.

It is also genuinely useful to state, as the explanation does, that uniqueness spans **every Salesforce org in the world**, including sandboxes and developer orgs — which is why sandbox usernames get a suffix appended.

**Formatting:** there is no `Why:` label — the explanation starts straight in with "B:" (defect **F9**).

---

### Topic 1 — Q1101. Preventing duplicate contact on the same day

**Your answer:** `A` — correct.

**Verdict: CORRECT**

Activities are the right answer, and the explanation correctly ties it to the two stated requirements: a **chronological history** anyone on the account team can check before reaching out, and **reportability**.

That second requirement is what eliminates the alternatives, and it is worth being blunt about it: **Notes (B) and Chatter posts (D) are effectively not reportable.** There is no standard report type for Chatter posts against a record, and Notes reporting is minimal. Activities have full report types (Activities with Accounts, Tasks and Events) and that is why A wins.

**C** is simply the wrong object — a case is a customer problem, not a log of an outbound call.

---

### Topic 1 — Q1102. Acquired company with its own sales stages

**Your answer:** `A` — correct.

**Verdict: CORRECT**

The three-step pattern is exactly right and the explanation states it cleanly: **add the stage values → build a Sales Process containing just the stages that team needs → attach it to a new Opportunity Record Type assigned to that team's profiles.**

Why the others fail is worth one line each: **B** invents a custom "Stages" field, which breaks forecasting, the sales path and every standard opportunity report. **C** confuses **field-level security** (which hides whole fields) with **picklist value availability** (which is what record types control). **D** reorders one shared picklist, so both teams still see all the values.

**Structural note:** this is the same concept as **Q1134** and **Q1142**. Three questions, one idea — see duplicate **D31**.

---

### Topic 1 — Q1106. Where field-level security is controlled

**Your answer:** `C` — correct.

**Verdict: CORRECT**

Profiles (and permission sets) hold FLS. The explanation draws the right boundary — **roles and sharing rules govern *which records* you see; profiles and permission sets govern *which fields and objects*.** That one-line distinction answers a large fraction of the security questions on the exam.

---

### Topic 1 — Q1107. Two considerations for the Recycle Bin

**Your answer:** `AB` — correct, **but it contradicts Q823, and it settles Q863**

**Verdict: CORRECT-CAVEAT — and this question is more consequential than it looks**

A and B are right. C is correctly rejected — the Delete button performs a **soft delete**.

Two knock-on effects, both important:

**1. Option A proves Q863 is wrong.** Q863 answers that a deleted report **cannot** be retrieved from the Recycle Bin, and invents a "Deleted folder in the Reports tab" to explain it. **Q1107 option A says the opposite and is keyed correct.** Your own file therefore already contains the correction. This confirms the Batch 15 finding — **Q863 must be re-keyed to `A. True`**.

**2. Option D directly contradicts Q823.** Q823 is keyed so that Recycle Bin records **do** consume storage. Q1107's note says they **do not**. Both cannot be true.

The documented evidence favours **Q1107**: Salesforce gives the Recycle Bin its **own separate capacity — 25 times your org's data storage allocation**. A separate allowance of that size only makes sense if the Bin is a separate pool rather than a charge against data storage.

**Recommendation:** rather than re-key Q823 on my say-so, **delete Q823** and keep Q1107, which covers the same ground with a better option list. If you would rather keep both, verify the storage behaviour against Salesforce Help first and then make them agree. Logged as contradiction **C18**.

**Formatting:** option C contains **mojibake** — `ג€Deleteג€` where quotation marks belong. Fourth encoding failure in the file (defect **F7**).

---

### Topic 1 — Q1109. Read for all new users, Edit for four of them

**Your answer:** `A` — correct.

**Verdict: CORRECT**

The textbook pattern, and the explanation names it properly: **profile for the baseline everyone shares, permission set for the exception.** That is the whole modern permissions philosophy in one sentence.

**B** is impossible for the same reason option A failed in Q1078 — a permission set cannot **restrict** anything. **C** confuses record-level sharing with object-level access. **D** modifies the **Standard User** profile, which is a standard profile shared across the org — exactly the over-reach permission sets exist to avoid.

---

### Topic 1 — Q1110. Self-service community with FAQs and chat

**Your answer:** `BD` — correct.

**Verdict: CORRECT-CAVEAT**

Knowledge and Chat map directly onto the two stated requirements. **Content (C)** stores files, not searchable articles.

The caveat is **SOS (A)**. It is not simply "a distractor" — it was a real product (in-app video chat and screen sharing) that **Salesforce retired**. Leaving a retired product as an unexplained wrong answer teaches nothing. Either say so in the explanation or swap it for a live distractor such as **Einstein Bots**, which would make the question sharper (bots deflect, Chat escalates to a human).

---

### Topic 1 — Q1112. Creating 15 user records without activating them

**Your answer:** `B, D`

**Verdict: DISPUTED — D is solid, B rests on a tool that does not exist, and the explanation contradicts the rest of your file**

**D is certainly correct.** Data Loader can insert User records with `IsActive = false`.

**B is the problem.** The option names a **"User Import Wizard"**. There is no such tool. And your explanation defends B by saying:

> *"The **Data Import Wizard** allows you to create user records in bulk by mapping a file…"*

**The Data Import Wizard does not support the User object.** It handles Accounts, Contacts, Leads, Solutions, Campaign Members, Person Accounts and custom objects — and nothing else.

This is not a matter of interpretation, because **your own file says so twice**. **Q872** lists the wizard's supported objects, and **Q1145** explicitly rejects an option on the grounds that *"the Data Import Wizard… only supports specific standard objects…"*. Q1112's explanation contradicts both. Logged as contradiction **C19**.

**On option A:** the **Add Multiple Users** page does carry an **Active** checkbox per row, so that route *can* create inactive users — but option A tells you to uncheck *"Generate New Password and Notify User Immediately"*, which suppresses the welcome email and says nothing about Active. As written it answers a different question.

**C is correctly rejected** — workflow rules cannot create records of any kind, let alone Users.

**Recommendation:** the question really has **one** clean answer. Rewrite option B as *"Use the Add Multiple Users page and leave the Active checkbox unchecked"*, which makes A/B a genuine pair with D. Whatever you do, the explanation's claim about the Data Import Wizard must go — it is wrong and it undermines two other questions.

---

### Topic 1 — Q1114. Two considerations for sharing email template folders

**Your answer:** `AB` — correct.

**Verdict: CORRECT**

A and B are right, and C is simply B inverted — a well-built pair. **D** is correctly excluded: Lightning email templates have historically **not** been packageable, which is a real migration headache and a fair thing to test.

**Typo:** option A reads *"Sharing on Lightning email templates **in** inherited…"* — should be **is** (defect **F15**).

---

### Topic 1 — Q1115. Automate Survey Request creation and take the permission away

**Your answer:** `B` — correct.

**Verdict: CORRECT**

Flow is right, and the explanation makes the subtle point that carries the question: a **record-triggered flow runs in system context**, so it can create the Survey Request even after the reps' Create permission has been removed. Automation is not blocked by the user's own permissions.

That is precisely why this design works — you remove the manual route *and* guarantee the record gets made correctly. The note that Workflow and Process Builder are retired is accurate and belongs there.

---

### Topic 1 — Q1117. New fields missing from an existing custom report type

**Your answer:** `A` — correct.

**Verdict: CORRECT**

A genuinely useful question. New fields do **not** appear automatically in an existing custom report type — you must open the report type, **Edit Layout**, and drag them in. This surprises admins constantly, and the explanation states it plainly.

One detail worth adding: there is an **"Add fields related via lookup"** link on that same layout editor, which is how you pull in fields from a looked-up parent object. It is the natural follow-up.

---

### Topic 1 — Q1120. Routing cases to product-skilled agents

**Your answer:** `A` — correct.

**Verdict: CORRECT-CAVEAT**

A is right for the options given. **Workflow field updates (B)** cannot set OwnerId in the way required, **escalation rules (C)** act on cases that have gone stale rather than on creation, and **"Case Team Routing" (D)** is not a Salesforce feature.

The caveat is that the stem uses the word **"skilled"**, and Salesforce has a feature with that exact name: **skills-based routing in Omni-Channel**, which matches cases to agents by skill rather than by a criteria formula. That is the genuinely modern answer to this scenario and it is not in the option list. Assignment rules remain correct here, but the explanation should name Omni-Channel so a student is not caught out by a current-exam version of the same scenario.

**Formatting:** the number sits alone on its line (`1120.` followed by whitespace) with the question text on the line below — the same orphaned-stem defect as **Q252** (defect **F6**).

---

### Topic 1 — Q1122. Carrying custom lead data through conversion

**Your answer:** `C` — correct.

**Verdict: CORRECT**

**Lead custom field mapping** is right, and the explanation correctly notes it can target Account, Contact **or** Opportunity.

Two details worth adding because they are where this goes wrong in practice:

- The **data types must be compatible**. You cannot map a lead picklist to a contact number field, and text-to-picklist mappings need the values to line up.
- Mapping is configured per object on the Lead fields page, and **unmapped custom lead data is simply lost at conversion** — which is the real cost the question is warning about.

**D** is the right distractor to include, because mapping a custom lead field to a *standard* contact field is generally not offered.

---

### Topic 1 — Q1124. Required field with a ten-character minimum

**Your answer:** `A` — correct.

**Verdict: CORRECT**

One of the best-argued questions in the file. Validation rule is right, the sample logic (`ISBLANK` plus `LEN(...) < 10`) is right, and — unusually — every rejection is justified properly:

- **D (required on the page layout)** is the tempting one, and the explanation correctly demolishes it: layout-level required applies **only to that layout**, is bypassed by the API, Data Loader and quick actions, and **cannot express a length rule at all**.
- **B** — formula fields are read-only, so they cannot hold a user-entered ID.
- **C** — workflow rules act **after** the save; they cannot block it.

That last point is the deeper lesson: validation rules are the **only** declarative tool that can stop a record saving.

---

### Topic 1 — Q1133. Dashboard of Closed/Won by user under a private model

**Your answer:** `d` — correct.

**Verdict: CORRECT-CAVEAT — this is Q1070 again, and this is the better version**

D is right, and this explanation is **substantially better than Q1070's** because it explains why **B fails**: a **dynamic dashboard runs as the logged-in user**, so under a private model each rep would see only their own numbers — the opposite of the requirement.

**Q1070 asks the identical question** with the same four options and the same answer, and omits that reasoning. **Keep Q1133, delete Q1070** — see duplicate **D29**. As a bonus, Q1070 is also the one with the mojibake in option D; Q1133's quotation marks are clean.

**Formatting:** lower-case answer letter (`d`) — defect **F3**.

---

### Topic 1 — Q1134. New team needs two extra stage values

**Your answer:** `c` — correct.

**Verdict: CORRECT**

Right, and the explanation states the dependency that makes it right: **a sales process is useless on its own, because it can only be applied to users through a record type.** So you always need the pair.

The stem's detail *"the same fields and picklist values"* is what rules out D — no new page layout is needed because nothing about the fields changes. Only the Stage values differ.

**Formatting:** lower-case answer letter (`c`) — defect **F3**. Concept duplicate of Q1102 and Q1142 (**D31**).

---

### Topic 1 — Q1135. Two field properties to guarantee unique data is always entered

**Your answer:** `B, C` — correct.

**Verdict: CORRECT**

The question deliberately asks for **two** because the requirement has two halves: **Unique** stops duplicates, **Required** stops blanks. Neither alone satisfies "unique data is **always** input". The explanation makes that split clearly.

One detail worth adding: **Unique can be case-sensitive or case-insensitive**, and you choose when creating the field. Case-insensitive is almost always what you want, because otherwise `ABC123` and `abc123` are both allowed.

---

### Topic 1 — Q1137. Shared report showing rows that don't match the filters

**Your answer:** `C` — correct.

**Verdict: CORRECT**

**Locked filters** are the answer, and this is a genuinely current Lightning feature — when you add a filter in the Lightning report builder you can mark it **Locked**, which stops viewers editing it from the report run page.

The explanation correctly identifies the cause (viewers can change unlocked filters in their own view) and why the alternatives miss: **bucketing (A)** creates categories, it does not restrict rows; **a private folder (B)** would solve the problem by removing everyone's access, which defeats the purpose; **a cross-object filter (D)** filters on related-record existence, which is not what's wrong here.

---

### Topic 1 — Q1139. What mobile users can do with an expense app

**Your answer:** `B` — correct.

**Verdict: CORRECT**

B matches the three steps in the stem exactly — create the record, attach a photo, submit for approval — and each is genuinely supported on mobile.

The discriminator across all four options is **"create list views"**, which appears in A and D and which **the Salesforce mobile app cannot do**. You can *switch between* existing list views; you cannot create or edit them. The explanation names this, which is what makes it a good explanation.

**C** fails on a second point too: approving records from **Chatter** is not the mechanism — approvals come through notifications and the Approval Requests list.

---

### Topic 1 — Q1140. Defaults for a new custom object

**Your answer:** `D` — correct.

**Verdict: CORRECT**

Both halves are right and they pull in opposite directions, which is exactly why the question works:

- **OWD defaults to Public Read/Write** — the *sharing* model on a brand-new custom object is wide open.
- **Profiles default to No Access** — the *object* permissions are shut.

The net effect is that nobody can see the object until you grant object access, even though the sharing model says "public". That is the layered-security model in miniature: **object access first, then record access.** The explanation gets it right; it just doesn't quite say out loud how neatly the two halves illustrate the layering.

---

### Topic 1 — Q1142. Different stages for battery opportunities

**Your answer:** `C` — correct.

**Verdict: CORRECT-CAVEAT**

Correct, and the explanation is right that adding a value to the master picklist alone cannot produce two **distinct** stage sets.

This is the **third** question on the sales-process-plus-record-type pattern (with **Q1102** and **Q1134**). All three are correct and well explained, which makes the redundancy harmless but still redundant. **Keep this one** — the side-by-side stage lists in the stem make it the clearest of the three — and cut the other two. See **D31**.

---

### Topic 1 — Q1144. Supervisors covering for reps for one week

**Your answer:** `A` — correct.

**Verdict: CORRECT**

Permission set, and the explanation gets the decisive word from the stem: **"for a week"**. A permission set can be assigned and unassigned; a profile change is effectively permanent and hits every supervisor.

The rebuttal of **B** is the valuable part and it is correct: a **sharing rule cannot grant Edit on the *object***. If the supervisors lack the Edit object permission, no amount of record sharing will let them save a change. Object access first, record access second — the same principle as Q1140.

One modern addition: **permission set groups** with an **expiration date** on the assignment would handle "for one week" automatically. That is the current best-practice answer to this exact scenario.

---

### Topic 1 — Q1145. Uploading 10,000 Campaigns

**Your answer:** `B` — correct.

**Verdict: CORRECT**

Right, and for the right reason. The explanation correctly states that the decisive factor is **object support, not volume** — 10,000 records sits comfortably inside the Data Import Wizard's 50,000 ceiling, so the wizard is ruled out purely because **it does not support the Campaign object**.

(It supports **Campaign Members**, which is the trap — worth one extra line.)

**C** is worth a sharper rebuttal: "Bulk Data Load Jobs" is the **Bulk API**, which is not a tool an admin picks in a menu — it is the engine Data Loader uses when you enable Bulk API mode. It is not wrong so much as not a separate answer.

This question also quietly **contradicts Q1112** (see **C19**), which claims the Data Import Wizard can load Users.

---

### Topic 1 — Q1147. Auto-submitting new articles for approval

**Your answer:** `C` — correct.

**Verdict: CORRECT-OBSOLETE (tool name only)**

The concept is right — automation can perform a **Submit for Approval** action on create, removing the reliance on a human clicking a button. The explanation's rebuttals are excellent, particularly the two that matter:

- There is **no "default the Submit for Approval button" setting** (A) — the option is invented, and saying so is the right call.
- **Initial Actions (D)** are steps that run **inside** an approval process once it has already started. They cannot start it. That is a genuinely good trap and the explanation defuses it correctly.

Same caveat as elsewhere: **Process Builder is retired**; the current build is a record-triggered Flow with a Submit for Approval action. Your answer line already notes this.

---

### Topic 1 — Q1150. How many users on the Add Multiple Users page?

**Your answer:** `D. A maximum of 10 users` — correct.

**Verdict: CORRECT-CAVEAT — this is Q1030 again**

10 is right. But **Q1030 is the same question**, with the same four options and the same answer — the only difference is that one org bought 25 licences and the other bought 15. Both explanations even make the same point (the licence count is a red herring).

**Keep Q1150**, whose explanation adds the practical follow-through (*"the administrator would need to perform this process twice, or use Data Loader"*), and delete Q1030. See duplicate **D30**.

---

### Topic 1 — Q1151. Read/write on new cases for two lead engineers

**Your answer:** `B` — correct.

**Verdict: CORRECT**

Excellent question and an excellent explanation. **Predefined case team + assignment rule** is right, and the mechanism is worth stating explicitly because it is not obvious: a **case assignment rule entry can apply a predefined case team**, and the team member's **case team role carries the Read/Write access level**. That is how ownership routing and access granting happen in one step.

The rebuttals are all sound. The sharpest is **D**: a queue would **change ownership**, handing the case to the engineers instead of leaving it with the assigned support agent — which is not what "give them access" means.

---

### Topic 1 — Q1153. Scheduled action when the record stops matching

**Your answer:** `B` — correct.

**Verdict: CORRECT**

The pending action is **removed from the queue** when the record is edited and no longer meets the criteria. Correct, and the explanation traces the scenario properly.

One precision note worth adding, because it is the flip side that gets tested: the re-evaluation only happens **when the record is edited**. If nobody touches the record, the queued action sits there and fires on schedule regardless. And there is a related trap worth knowing — **deactivating or deleting the automation does *not* clear actions already queued**; you have to purge them from the time-based workflow queue in Setup. Your file already teaches that at **Q69**, so the two should cross-reference.

---

### Topic 1 — Q1156. Hiding high-security accounts under Public Read Only

**Your answer:** `bC` — correct.

**Verdict: CORRECT-CAVEAT — content right, formatting broken in two ways**

B and C are right, and the explanation captures the core security pattern: **you cannot subtract visibility with a sharing rule.** OWD must first be tightened to **Private**, which hides everything, and sharing rules then **add back** the access the rest of the Sales team needs. Lock down, then open up — never the reverse.

The rebuttals could be sharper:

- **A** is not merely ineffective, it is backwards. Moving a role "outside the company hierarchy" does not hide that role's records from anyone; the role hierarchy grants access **upward**, so it only controls who can see *their* records, not what they can see.
- **D** confuses presentation with security. **Record types never control record access** — they control picklist values, page layout assignment and business process, nothing more. This distractor appears repeatedly in the file and deserves a standing rebuttal.

**Two formatting faults:**

1. The answer line is `bC` — mixed case (defect **F3**).
2. **The question number has a double period: `1156..`** This is why my automated scan skipped it entirely, and it will break any parser (defect **F5**).

---

## Batch 17 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 24 | Q1071, Q1072, Q1083, Q1089, Q1093, Q1099, Q1101, Q1102, Q1106, Q1109, Q1114, Q1115, Q1117, Q1122, Q1124, Q1134, Q1135, Q1137, Q1139, Q1140, Q1144, Q1145, Q1151, Q1153 |
| CORRECT-CAVEAT | 9 | Q1078, Q1091, Q1107, Q1110, Q1120, Q1133, Q1142, Q1150, Q1156 |
| CORRECT-OBSOLETE | 2 | Q1081, Q1147 |
| DISPUTED | 2 | Q1084, Q1112 |
| **INCORRECT** | **0** | — |
| BLANK / MISSING | 0 | — |
| **Total** | **37** | |

**No wrong answers.** That is the first batch in seventeen with a clean sheet, and the reason is structural: these are modern scenario questions rather than recycled limits-and-trivia items. They test *why*, they use current feature names, and their distractors are plausible rather than joke options. **If Topic 1 is ever trimmed, rebuild it around Q1071–Q1156.**

**The single most valuable finding — Q1107 settles two earlier disputes.**

| It proves | Because |
|---|---|
| **Q863 is wrong** (Batch 15) | Q1107 option A — *"You can restore reports and dashboards"* — is keyed **correct**. Q863 says you cannot, and invents a "Deleted folder in the Reports tab" to justify it. Your own file already contains the correction. |
| **Q823 is in conflict** | Q1107's note says Recycle Bin records **do not** count against storage. Q823 is keyed the other way. Evidence favours Q1107 — the Bin has its own allocation of **25× your data storage**. Logged as **C18**. |

**An explanation that contradicts two other questions — Q1112.** It states the **Data Import Wizard can create User records**. It cannot; the wizard does not support the User object. **Q872** and **Q1145** both say so. Logged as **C19**. The option it defends also names a *"User Import Wizard"*, which is not a Salesforce tool.

**One obsolete answer that matters more than the usual ones — Q1081.** In Lightning Knowledge, **article types were replaced by record types**. The keyed answer (D, article types) is the Classic answer, and the correct modern answer (**C, record types**) is sitting in the option list as a distractor. This is the only question in the batch where a student following the key would give a wrong answer on a current exam.

**Three new duplicates:** **D29** Q1133 = Q1070 (keep Q1133 — better explanation, no mojibake); **D30** Q1150 = Q1030 (keep Q1150); **D31** Q1102 ≈ Q1134 ≈ Q1142, all three teaching sales process + record type (keep Q1142).

**Numbering:** 86 numbers, 37 questions — 49 missing. Longest gap **Q1125–Q1132 (8)**. Two parsing faults: **`1156..`** (double period) and **Q1120's orphaned stem**.

**Best explanations this batch:** **Q1124** (why "required on the page layout" is not the same as required), **Q1151** (how an assignment rule and a predefined case team combine), **Q1115** (flows run in system context, so they work after you remove the user's permission) and **Q1140** (object access and record access default in opposite directions) are all accurate, complete, and genuinely instructive.

---

# BATCH 18 — File: `Admin-201 Topic 1.md`, Questions 1157–1175 **plus the two appended tail blocks** — **END OF TOPIC 1**

> **What this batch covers.** Three different things are stacked at the end of this file, and they do not look alike:
>
> 1. **Q1157 – Q1175** — the last of the normal, timestamped questions (16 of them; 1160, 1173 and 1174 are missing).
> 2. **The two blocks both numbered `1074`** (lines 8663 and 8679). Mystery solved: they are **two completely different questions**, not one pasted twice. They sit exactly where **1173** and **1174** should be, so they are almost certainly those two questions with the wrong number typed on them.
> 3. **Two appended blocks in a totally different format** — a **"Question 1 – Question 7"** block (answered, no timestamps), and then a **1–15 block that has no answers at all**.

---

## Part A — Q1157 to Q1175

### Q1157 — Products and price books (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
Both are right. **A** — with Multiple Currencies enabled, a product's standard price and its list prices can each be entered in several currencies. **B** — this is the whole reason custom price books exist: the same product can carry a different list price in each price book (each row is a separate **Price Book Entry**). **C** is nonsense (price books hold products, assets are unrelated) and **D** is backwards — a product has **no** price until you add it to the standard price book yourself. The explanation says all of this accurately.

### Q1158 — Custom sizing as an add-on — `Answer: A`
**Verdict: CORRECT.**
Adding it as a product in a price book is the only option that makes the add-on flow into the **Opportunity Amount** automatically, via an Opportunity Product line. A custom object (B) or a plain field (D) would need a roll-up or formula to affect the total, and Orders (C) come *after* the sale. Explanation is accurate and complete.

### Q1159 — Foundation for all conversion rates — `Answer: B`
**Verdict: CORRECT.**
**Corporate currency** is the baseline; every other active currency's rate is expressed relative to it. ✏️ *One loose sentence:* the explanation says "Records take on the currency of the user or account." More precisely, a new record's **Record Currency** defaults to the **user's personal currency**. Small point, but worth tightening.

### ⚠️ Q1160 — **DOES NOT EXIST.** Numbering jumps 1159 → 1161.

### Q1161 — Public access to a community without logging in — `Answer: b`
**Verdict: CORRECT-OBSOLETE (terminology).**
The answer is right: unauthenticated visitors are governed by the **Guest User Profile**, and you open up read access through that profile plus guest sharing rules. ✏️ Two things to fix: the answer line is a lowercase `b` (defect **F3**), and the whole question still says **"Community"** — Salesforce renamed these **Experience Cloud sites** in 2021. Also worth a modern footnote: since the Guest User Security release, guest users **cannot be given more than Read access** and cannot own records, so the phrase "collaborate with other members" in the stem is not actually achievable for a guest.

### Q1162 — Two sales groups, two sales processes — `Answer: D`
**Verdict: CORRECT.**
**Record Types** is right. The chain is: Stage picklist values → **Sales Process** → **Opportunity Record Type** → assigned to profiles. Page layouts (A) control fields, not stages; Path (B) only visualises a process; Opportunity Teams (C) are about record access. ✏️ *Duplicate flag:* this is a fourth variation of the **D31** family (Q1102, Q1134, Q1142). See the duplicates table.

### Q1163 — High-priority cases escalate after 3 hours — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
**Escalation rule** based on **last modification time** with **Age Over 3 hours** is exactly right, and it is the only option with a built-in timer. ✏️ *Defect in the source wording:* the stem says "**High Priority** cases" but every option says "where **status** = high." Priority and Status are two different fields. The option text should read `Priority = High`. This does not change which letter is correct, but it teaches a sloppy habit.

### ❌ Q1164 — Backup admin can't perform admin duties (choose two) — `Answer: B, C`
**Verdict: INCORRECT. The correct answer is B and D.**

**Why C is wrong.** The option claims *"The active checkbox is unchecked by default."* It is not. When you create a user in **Setup → Users → New User**, the **Active** checkbox is **selected by default** and the user is sent a welcome email (*Salesforce Help: "Add a Single User"*). There is a second problem with C: if the user really were inactive they could not **log in at all**, whereas the stem says they logged in and then found they could not do admin work.

**Why B is right.** The **Salesforce Platform** licence does not include the **System Administrator** profile. A user on that licence simply cannot be given full admin duties.

**Why D is right.** *Delegated administration* is a deliberately **narrow** grant — a delegated admin can only manage users in assigned roles, assign a short list of profiles/permission sets, and manage specified custom objects. If the "backup administrator" was set up as a **delegated** admin rather than given the System Administrator profile, they would be blocked from essentially all real administrative duties (Setup changes, object creation, security model changes). *Salesforce Help: "Delegate Administrative Duties."*

**Why A is genuinely wrong.** A role controls record-level sharing. A user with no role can still open Setup and administer the org.

### Q1165 — 24-hour SLA re-assignment to next tier queue — `Answer: C`
**Verdict: CORRECT.**
Case escalation rules are the only time-based case feature. Assignment rules (B) fire on create/edit with no timer; auto-response rules (D) send email; Einstein Case Routing (A) classifies inbound cases. Explanation accurate. ✏️ *Duplicate flag:* this is the same teaching point as **Q1163**, two questions earlier. New duplicate **D33**. Also a stray double space after `1165.` (defect **F5**).

### Q1166 — Three lines of business, Sales vs Marketing views — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**3 Record Types × 2 audiences = 6 Page Layouts** is exactly the right architecture: record types model the *business*, page layouts model the *audience*, and the Record Type ↔ Profile grid connects them. ✏️ The explanation contains a raw LaTeX artefact — `$3 \times 2 = 6$` — which will render as literal dollar signs and a backslash for most students (defect **F6**). Replace with plain `3 × 2 = 6`.

### Q1167 — Share a leaderboard dashboard component (choose two) — `Answer: C,d`
**Verdict: CORRECT-CAVEAT.**
C and D are the keyed and accepted answers: **Feed Tracking must be enabled on the Dashboard object** before a component can be posted to a feed, and a **Chatter group** gives him somewhere to post it. ✏️ Two notes: the answer line mixes cases (`C,d` — defect **F3**), and posting a **component snapshot** to Chatter is a feature many orgs have drifted away from; in current Lightning the more common answer would be to **subscribe** the team to the dashboard or share the dashboard **folder**. Worth adding as a modern footnote.

### Q1168 — Dashboard expert needs folder access control — `Answer: C`
**Verdict: CORRECT.**
**Manage Dashboards in Public Folders** is the exact permission: it lets a non-admin create, edit, delete and **change sharing on** every non-private dashboard folder. The three distractors are precisely the near-misses a student needs to learn to separate. Explanation is accurate and complete.

### Q1169 — Which three can be Campaign Members — `Answer: A, B, C`
**Verdict: CORRECT-CAVEAT.**
**Leads, Contacts and Person Accounts** — correct. A Person Account can be a campaign member because it carries an underlying contact record. **Accounts** (business accounts) cannot, and the **Individual** object is a privacy/consent object, not a marketing object. ✏️ The "why not D" paragraph has a **broken parenthesis** and reads as an unfinished sentence: *"(unless enabled via specific B2B features like Accounts as Campaign Members, standard multi-object selection questions point specifically to…"*. Rewrite it as a clean sentence (defect **F6**).

### Q1170 — Themes and Branding considerations (choose two) — `Answer: BC`
**Verdict: CORRECT-CAVEAT.**
Both facts check out against *Salesforce Help: "Themes and Branding in Lightning Experience"* — you can create **up to 300 custom themes**, but **only one can be active at a time**. A is wrong (themes are org-wide, not per-profile) and D is wrong (themes do not carry into the Salesforce mobile app). ✏️ Answer line `BC` needs the standard `B, C` format (defect **F3**).

### Q1171 — Preventing duplicate Accounts on import — `Answer: B`
**Verdict: CORRECT.**
The **Data Import Wizard** matches existing Accounts on **Account Name + Account Site** (or on Salesforce ID / External ID). That combination is literally the option Salesforce offers on the match screen. Explanation is accurate and the three rebuttals are sound.

### Q1172 — Workflow field update capabilities (choose two) — `Answer: AD`
**Verdict: CORRECT-OBSOLETE.**
The letters are right — a field update **can** change a record's **Record Type** (A) and **can** stamp a specific value (D); it **cannot** reach down to child records (B), and you cannot target a read-only formula field (C).

⚠️ **But the whole question is retired content.** Salesforce **stopped allowing new Workflow Rules** (Winter '23 onward) and has published a **Migrate to Flow** tool; workflow rules are on the retirement path. The current-exam equivalent is a **record-triggered flow** with an *Update Records* element. Keep the question only if you relabel it as legacy. ✏️ Answer line `AD` also needs the `A, D` format.

### ⚠️ Q1173 and Q1174 — **MIS-NUMBERED. Both are labelled `1074`.**

This resolves the open question from Batch 17. They are **two different questions**, and they sit in exactly the slots where 1173 and 1174 belong.

#### The first `1074.` (line 8663) — restoring an accidentally deleted custom field — `Answer: D`
**Verdict: CORRECT (content) / numbering must be fixed to 1173.**
**15 days** is right: a deleted custom field and its data sit in the Deleted Fields area for 15 days and can be undeleted with data intact, after which they are purged permanently. ✏️ *Duplicate flag:* this is the **fifth** copy of this exact fact in the file — see **D25** (Q830, Q853, Q986, Q991). It should simply be deleted.

#### The second `1074.` (line 8679) — what happens to a deactivated user's records — `Answer: B`
**Verdict: CORRECT (content) / numbering must be fixed to 1174.**
Records **stay owned by the deactivated user** until an admin reassigns them. Salesforce never auto-transfers or deletes on deactivation. This is an important and often-missed fact, and the explanation states it cleanly. ✏️ *Duplicate flag:* overlaps the deactivation family already logged around **Q1064**.

### Q1175 — Survey custom object related to Account (choose two) — `Answer: CD`
**Verdict: CORRECT.**
**C** — the lookup goes on the **child** (Survey) pointing at Account; that is what gives users the "select an account" field. **D** — adding the **Survey related list to the Account page layout** is what surfaces the many surveys on the account. A is wrong because a lookup on Account would allow only **one** survey per account, and B is wrong because the account is already visible on the survey through the lookup field itself. ✏️ Answer line `CD` → `C, D`. Also note this is the **last question in the file that follows the normal format**; everything after it is appended material.

---

## Part B — the appended **"Question 1 – Question 7"** block (lines ~8735–8830)

> **Format warning (new defect F16).** This block abandons the file's format entirely: the stem is preceded by the word **"Question N"** rather than `N.`, the options are on **bare lines with the letter on its own line** (`A`, newline, option text) instead of `A. text`, the answer line is `Answer : X` with a space before the colon, there is **no `Why:` label** and **no `Timestamp:` line**, and there is **no `—-----` separator**. Any parser written for the rest of the file will fail on all seven. It also **restarts numbering at 1**, colliding with the real Q1.

### Block-A Q1 — Minimum Access profile, users don't see Lightning — `Answer : D`
**Verdict: CORRECT.**
The **Minimum Access – Salesforce** profile deliberately withholds the **Lightning Experience User** system permission, so users land in Classic. Granting that permission via a permission set is the right fix, and the explanation correctly notes that B and C are about *page design*, which is irrelevant if the user cannot enter Lightning at all.

### Block-A Q2 — Business hours for two time zones — `Answer : D`
**Verdict: CORRECT-CAVEAT.**
**One Business Hours record per time zone** is correct; Business Hours drive escalation-rule and milestone clocks, so they must be localised. Option A would produce a meaningless 12-hour window. ✏️ The explanation contains a stray inserted character: *"an Eastern-based case **1should** start counting"* (defect **F6**).

### Block-A Q3 — Reporting on Campaign ROI by month and series — `Answer : C`
**Verdict: CORRECT.**
**Campaign Hierarchy** via the **Parent Campaign** field, with the *Hierarchy Total* fields rolling child metrics up to the parent, is the standard architecture for a recurring event series. Explanation is accurate and complete.

### Block-A Q4 — Repeatable support-escalation steps — `Answer : B`
**Verdict: CORRECT.**
**Macros** are the right answer specifically because the rep decides **when** to run them — the stem says the reps need "an easy way to make these updates," not an automatic trigger. The explanation makes exactly that distinction against Flows and Assignment Rules, which is the point of the question.

### Block-A Q5 — Gold/Silver/Bronze support tiers — `Answer : A`
**Verdict: CORRECT.**
**Entitlements** define the level of service, and a **record-triggered flow** attaches the right entitlement when the account becomes a customer. The explanation correctly separates *who gets the case* (routing/assignment) from *what service level applies* (entitlements).

### Block-A Q6 — Limiting what kinds of reports users can create — `Answer : A`
**Verdict: CORRECT-CAVEAT.**
**Select Report Types to Hide**, in *Setup → Reports and Dashboards Settings*, is the right tool — it trims the list shown on the **New Report** screen. ✏️ The final two sentences hedge badly (*"While creating Custom Report Types is a way to define what data is available…"*) and read as leftover drafting (defect **F13**). Cut them; the answer stands on its own.

### Block-A Q7 — Lead custom picklist missing on Contact (choose two) — `Answer : B, C`
**Verdict: CORRECT-CAVEAT.**
Both steps are required and in this order: **create the matching custom field on Contact**, then **Map Lead Fields** in the Lead object manager. Without the map, the value is silently lost at conversion. ✏️ Two text corruptions in the explanation: a **stray `2` on its own line** immediately after the answer, and **"d3ata"** for "data" (defects **F6**/**F15**).

---

## Part C — the appended **1 – 15** block (lines ~8830–8913)

> 🚨 **This is the single biggest problem in the whole file.**
>
> **All fifteen questions in this block are BLANK.** There is **no `Answer:` line and no explanation on any of them.** The block is a bare list of stems and options. It also **restarts numbering at 1** — and the first question has **no number at all**, which is why earlier scans reported the block as starting at 2.
>
> It also **duplicates** Block-A: item **7** below is word-for-word Block-A Question 1 (only the option order differs).
>
> Below I supply the correct answer and a short justification for each, so the block can be completed rather than deleted.

### ⬜ Block-C #1 *(unnumbered)* — Reassign a departed rep's accounts and opportunities, **keep the team as is**
**BLANK. Correct answer: A — Mass Transfer Records.**
*Setup → Data → Mass Transfer Records* is the only listed tool with the **"Keep Account Team"** and **"Transfer opportunities…"** checkboxes, which is precisely what "keep the team as is" requires. Data Loader and the Data Import Wizard would change `OwnerId` but would **wipe the account team**. *(This is the same feature set as Q904 — see the correction logged in Batch 15.)*

### ⬜ Block-C #2 — Cannot deactivate a departed user
**BLANK. Correct answer: D — the user is the running user of a dashboard.**
Salesforce blocks deactivation when the user is the **running user of a dashboard**, the **Default Workflow User**, the **Default Owner of Leads/Cases**, or is selected in a **custom hierarchy field**. Membership of an account team, opportunity team or assignment rule does **not** block deactivation. *(Same rule as Q1064 — see Batch 16.)*

### ⬜ Block-C #3 — Most critical prerequisite for Agentforce Service Agents
**BLANK. Correct answer: A — verify Data Cloud is implemented.**
Agentforce grounds its responses in **Data Cloud**, which unifies customer data from across systems into a single profile. Without it the agent has no "complete and accurate view." A console layout, Email-to-Case or new profiles are all useful but none of them is what gives the agent *data*.

### ⬜ Block-C #4 — Route new cases by account tier to different queues
**BLANK. Correct answer: B — Assignment Rules.**
Case **assignment rules** run **on creation** and set the owner (a user or a **queue**) based on criteria — here, the Account's tier field. Escalation rules (A) are time-based; workflow rules (C) cannot change owner to a queue and are retired; "Case Rules" (D) is not a Salesforce feature.

### ⬜ Block-C #5 — Two brandable areas of the Salesforce mobile app
**BLANK. Correct answer: A and B — header background colour and loading-page logo.**
In *Setup → Salesforce Mobile App → Branding* you can set the **brand/header background colour**, the **loading-page colour** and the **loading-page logo**. You cannot brand a record's background (D). ✏️ **Defective option set:** **A ("Header background color")** and **C ("App header color")** are effectively the same thing worded twice, which makes this question unfair as written. Rewrite C as a genuine distractor (for example *"Record detail font"*).

### ⬜ Block-C #6 — Quick way to view and update pipeline closing in 90 days
**BLANK. Correct answer: C — a list view on Opportunity, switched to Kanban.**
Kanban gives drag-and-drop stage updates plus inline editing, which satisfies both "view" **and** "update." A scheduled report (A) and a dashboard component (D) are read-only; the Sales Console (B) is a heavy tool for a light requirement.

### ⬜ Block-C #7 — Minimum Access profile, users don't see Lightning
**BLANK. Correct answer: D — assign a permission to enable Lightning Experience User.**
⚠️ **This is a word-for-word duplicate of Block-A Question 1** (only the order of options B and C differs). One of the two should be deleted. New duplicate **D32**.

### ⬜ Block-C #8 — Mobile Only app navigation
**BLANK. Correct answer: A.**
In the **Mobile Only** app, the **first four items** of the navigation menu also appear in the **bottom navigation bar**, with everything else behind the ••• **More** item. B is wrong (the menu is a curated default, not "all standard objects"); C is wrong (the Mobile Only navigation menu is configured **once for the org**, not per profile — per-profile mobile navigation requires building **Lightning apps** instead); D is wrong (Lightning and Visualforce pages need a **tab** before they can be added).

### ⬜ Block-C #9 — Which task is especially suited for Agentforce
**BLANK. Correct answer: D — multi-step processes that need adaptation to change.**
Agentforce's value is **reasoning over an unpredictable path**: it picks topics and actions at run time. Fixed, single-step, no-decision or static-output tasks are cheaper and more reliable in **Flow**, not in an agent.

### ⬜ Block-C #10 — Report on records across the role hierarchy, OWD Private
**BLANK. Correct answer: A — Sharing Rules.**
Reports respect **record-level access**, so the VP must be **granted access** to the records before they appear. Sharing rules do that. **Restriction rules (B) only ever take access away**, field-level security (C) hides fields not records, and permission sets (D) would only work via the blunt **View All Data**, which is over-permissive.

### ⬜ Block-C #11 — Two things found on AppExchange
**BLANK. Correct answer: B and D — Consultants and Components.**
AppExchange lists **apps, components (Lightning components and Bolt solutions), and consulting partners**. "Communities" and "Customers" are not AppExchange listing categories.

### ⬜ Block-C #12 — What happens to a converted lead's related records
**BLANK. Best answer: A — activities are attached to the resulting contact, account and opportunity.** ⚠️ *See the caveat.*
On conversion, the lead's **activities move with it** to the new records. Campaign history (C) attaches to the **contact only**, not to the account and opportunity, and **custom object records related to the lead do not carry across** (D) unless you build automation.
✏️ **Caveat worth teaching:** Salesforce Help's exact wording distinguishes **open activities** (attached to account, contact and opportunity) from **activity history** (attached to the **contact**). Option **B** is therefore a deliberately close trap. Because the question offers no "both" option, **A** is the intended answer, but this item should be rewritten to remove the ambiguity. **Confirm against *Salesforce Help: "Considerations for Converting Leads"* before using it.**

### ⬜ Block-C #13 — Reps must report on each other's accounts and opportunities, both OWD Private
**BLANK. Correct answer: D — an owner-based sharing rule for Accounts, Public Group of Sales Reps, with Read Only Opportunity Access.**
This is the key insight: an **Account** sharing rule carries an **Opportunity Access** setting, so one rule solves both objects. Manual sharing (A) does not scale and is per-record; Apex sharing (B) is developer work for a declarative problem; and C misses the point entirely — **putting a report in a shared folder does not grant access to the underlying records.**

### ⬜ Block-C #14 — Understand data quality and record completeness
**BLANK. Correct answer: D — explore AppExchange for data-quality solutions.**
The stem asks for an understanding of **quality and completeness over time**, including *stale* data. A one-off report (A) or a subscription (B) only shows what is missing today, and making fields required (C) fixes future entry but tells you nothing about existing quality. AppExchange data-quality tools (including Salesforce's own **Data Quality Analysis Dashboards** package) are the intended answer.

### ⬜ Block-C #15 — Agentforce escalates with no context
**BLANK. Correct answer: A — the handoff is creating a new case instead of transferring the existing session.**
A correctly configured **Agentforce → human handoff** transfers the **live session with its transcript and context**. If the support agent sees nothing, the handoff is spawning a fresh case and abandoning the session. B is not how agent instructions work, C would hide an existing transcript but not destroy it, and D would block the agent from working at all rather than merely losing context.

---

## Batch 18 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 14 | Q1157, Q1158, Q1159, Q1162, Q1168, Q1171, Q1175, both `1074` blocks (→1173, →1174), Block-A Q1, Q3, Q4, Q5 |
| ⚠️ CORRECT-CAVEAT | 7 | Q1163, Q1166, Q1167, Q1169, Q1170, Block-A Q2, Q6, Q7 |
| 🕰️ CORRECT-OBSOLETE | 2 | Q1161 (Communities → Experience Cloud; guest users now read-only), Q1172 (Workflow Rules retired) |
| ❌ INCORRECT | **1** | **Q1164** — keyed B, C; correct is **B, D** |
| ⬜ BLANK | **15** | **All of Block C** (#1–#15) — no answers, no explanations |
| ⚠️ MISSING | 3 | Q1160, Q1173, Q1174 (the last two exist but are labelled `1074`) |

**One wrong answer: Q1164.** The keyed option C states that the **Active** checkbox is unchecked by default when creating a user. It is **checked** by default. The correct pair is **B** (Salesforce Platform licence cannot hold the System Administrator profile) and **D** (a *delegated* administrator is deliberately restricted and cannot perform general admin duties).

**The `1074 ×2` mystery is solved.** They are two *different* questions — deleted-custom-field restore, and deactivated-user record ownership — both mislabelled `1074`, sitting exactly in the **1173** and **1174** slots. Renumber them; do not merge them.

**Fifteen completely unanswered questions.** Block C is a raw paste with no answer key. I have supplied all fifteen answers above. Until they are written into the file, a student working through the file will hit fifteen dead ends at the very end.

**Three incompatible formats now live in one file.** The main body (`N.` + `Answer:` + `Why:` + `Timestamp:`), Block A (`Question N` + letters on their own lines + `Answer :`), and Block C (bare numbers, no answer at all). This is logged as new systemic defect **F16**.

---

# ✅ TOPIC 1 REVIEW COMPLETE — Q1 through Q1175 plus both appended blocks.

---

# 📗 TOPIC 2 BEGINS

## Structure scan of `Admin-201 Topic 2.md`

Before reviewing, here is the shape of the file, so the numbering findings make sense:

| Measure | Value |
|---|---|
| Total lines | 3,188 |
| Numbered questions found | **231** |
| Range | **Q1 – Q232** |
| Missing numbers | **just one — Q22** |
| Un-numbered tail | the **Agentforce block**, lines ~2960–3188 |

**This file is in far better shape than Topic 1.** Topic 1 had roughly 160 numbering breaks across 1,175 numbers. Topic 2 has **one**. The formatting is also much more consistent. The problems here are of a different kind — scraper residue and timestamp placement rather than structural collapse.

---

# BATCH 19 — File: `Admin-201 Topic 2.md`, Questions 1–35

### Q1 — Revenue generated per marketing campaign — `Answer: B`
**Verdict: CORRECT.**
Campaigns already carry built-in, Salesforce-maintained ROI fields, and **Value Won Opportunities in Campaign** is exactly the one that sums closed-won revenue. Adding it to a standard Campaign report is the zero-build answer. **D is the trap worth teaching:** you **cannot** build a roll-up summary from Opportunity to Campaign, because `CampaignId` on Opportunity is a **lookup**, and roll-up summaries require a **master-detail**. The explanation is accurate, though it would be stronger if it named that reason explicitly.

### Q2 — Properties and the buildings on them — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**D (master-detail from Building to Property)** is right, and two distractors are outright invalid: **B (hierarchical)** only exists on the **User** object, and **A (junction)** is a many-to-many pattern — a building sits on one property. ✏️ *The caveat:* the stem gives no roll-up, no cascade-delete and no ownership requirement, which are the usual tie-breakers between master-detail and **lookup (C)**. The defensible argument is dependency — a building cannot exist without its property — and the explanation makes exactly that argument, so the answer stands. But the stem should be strengthened with something like *"a building must always belong to a property, and deleting a property should remove its buildings."*

### Q3 — Managers must not see their staff's feedback — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**Uncheck "Grant Access Using Hierarchies"** is right, and this is one of the few settings that can *close* the role hierarchy — available on **custom objects only**, never on standard objects. ✏️ *Incomplete explanation:* unchecking it does nothing unless the object's **internal** OWD is already **Private**. The explanation should say so. Note also that option **A** is a deliberate near-miss — it says **Default *External* Access**, which governs Experience Cloud users, not internal managers.

### Q4 — Three lines of business, sales vs service fields — `Answer: C`
**Verdict: CORRECT.**
**3 record types × 2 page layouts = 6 layouts.** Record types model the *business*; page layouts model the *audience*; the Record Type ↔ Profile grid joins them. ✏️ *Cross-file duplicate:* this is the same question as **Topic 1 Q1166** with the numbers rearranged. Logged as **D37**.

### Q5 — Lead custom field must reach the Opportunity — `Answer: B`
**Verdict: CORRECT.**
Create the matching custom field on Opportunity, then map it in **Map Lead Fields**. Custom fields are never carried across automatically. Explanation is accurate and complete. ✏️ *Cross-file duplicate:* same teaching point as **Topic 1 Block-A Q7** (Lead → Contact). Logged as **D38**.

### Q6 — Quick way to view and edit the 90-day pipeline — `Answer: C`
**Verdict: CORRECT.**
List view + **Kanban** is the only option that delivers *view* **and** *edit*. 🚨 *Cross-file duplicate:* this is **word-for-word Topic 1 Block-C #6**, right down to the option wording. Logged as **D36**. The Topic 1 copy has no answer; this one does — **keep this one, delete the Topic 1 copy.**

### Q7 — A form/wizard for users to fill in — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**Flow Builder → screen flow** is right; none of the other three can render a UI. ✏️ The explanation ends with **orphaned promotional text** — *"watch this Salesforce Screen Flow Tutorial. This video provides a helpful overview…"* — with no link attached. This is the same scraper residue seen eleven times in Topic 1 (defect **F6**). Delete it.

### Q8 — Stricter passwords (choose two) — `Answer: C, D`
**Verdict: CORRECT.**
**Password complexity requirement** and **Minimum password length** are both real, adjustable fields on the **Password Policies** page. **A ("Prevent common words")** is not a Salesforce setting, and **B** is not a setting either — Salesforce *always* blocks a password identical to the username, so there is nothing to configure. The explanation is accurate.

### Q9 — Discounted prices for reseller partners — `Answer: C`
**Verdict: CORRECT.**
A dedicated **price book** gives the same products a different list price for a different channel — exactly what price books are for. Duplicating products (A) would corrupt reporting, a record type (B) doesn't affect price, and a discount field (D) is a manual workaround. Explanation is accurate and complete.

### Q10 — Users keep changing the dashboard's source reports — `Answer: C, D`
**Verdict: CORRECT-CAVEAT.**
The principle is right: **report folder access is what protects a source report**, and *Viewer* access lets users run a report but never save over it. ✏️ *Defective option pair:* **C and D are two halves of one action** — "create a folder with Viewer access" and "move the reports into it." That makes the "choose two" trivially guessable and teaches nothing extra. Worth rewriting D as a genuine distractor. Note also that **A is actively harmful** — moving a dashboard to a private folder would hide it from the executives who need it.

### Q11 — How to proceed with a critical update — `Answer: D`
**Verdict: CORRECT-OBSOLETE.**
"Test in a sandbox before production" is timelessly correct. ⚠️ But **"Critical Updates" no longer exist.** Salesforce replaced the Critical Updates console with **Release Updates** (*Setup → Release Updates*) in **Winter '21**. The current exam uses the new name, and the new page shows a *Due By* release rather than a simple auto-activate date. **Rewrite the stem to say "Release Update."**

### ❌ Q12 — Two lead engineers need read/write on all cases for a new product — `Answer: D`
**Verdict: INCORRECT. The correct answer is B — a predefined case team and an assignment rule.**

**Why D fails.** Option D is *"Create a queue and a criteria-based sharing rule."* A **queue** is a record-ownership and work-distribution construct — it is **not** a valid target in a sharing rule's **Share With** list, which offers Public Groups, Roles, Roles and Subordinates and Territories. So the two halves of option D do not actually connect to each other.

**The explanation gives the game away.** It defends the answer by saying the rule grants access *"to a public group containing the lead engineers"* — but **"public group" is not what option D says.** The explanation is describing a different, better option than the one it keyed.

**Why B is right.** A **case assignment rule entry** has a **Predefined Case Teams** field. When a case is created matching the product criteria, the rule attaches the predefined case team, and a case team member role can be set to **Read/Write** access. That is a single automated mechanism that does exactly what the stem asks, for exactly the two named individuals. *(Salesforce Help: "Set Up Predefined Case Teams" and "Case Assignment Rules.")*

**Why C fails too:** an **ad-hoc** case team is added by hand on each record — the stem demands automation.

### Q13 — Reproducing a user's error — `Answer: A`
**Verdict: CORRECT.**
**Log in as user** reproduces the user's profile, permission sets, record access, record type and page layout in one step. Reviewing the sharing model (B) or the audit trail (C) tells you about configuration, not about what this user sees. Explanation is accurate and complete.

### Q14 — Assign cases by capacity and skill — `Answer: C`
**Verdict: CORRECT.**
**Omni-Channel** is the only Salesforce feature that models **agent capacity** at all, and **Skill-Based Routing** is an Omni-Channel feature. Escalation rules (D) are time-based and have no concept of capacity. Explanation is accurate.

### Q15 — Making it easy for approvers to respond (choose three) — `Answer: A, C, E`
**Verdict: CORRECT.**
All three are genuine approver-convenience settings: **email approval response** (reply "Approve" to the email), **Chatter approval posts**, and the **Items to Approve** home-page component. **B** (initial submission actions) affects the *submitter's* record, not the approver. **D** is not a real approach — auto-approving everything defeats the purpose. Explanation is accurate and complete.

### Q16 — Different Case related-list columns for two teams — `Answer: B`
**Verdict: CORRECT.**
The key insight, stated well in the explanation: **related-list columns live on the *parent* object's page layout**, so the Case related list is configured on the **Account** page layout — then different layouts are assigned to the two profiles. Compact layouts (C) drive highlights panels and mobile; search layouts (D) drive search results and list view defaults.

### Q17 — Surface important values based on opportunity stage — `Answer: A`
**Verdict: CORRECT.**
**Path Key Fields** — up to **five** fields per step, plus Guidance for Success, changing as the stage changes. Dynamic Forms (C) can show/hide by criteria but are not stage-driven out of the box, and "Opportunity Processes" (B) is not a feature name (sales processes exist, but they define stage values, not field display). Explanation is accurate.

### Q18 — Removing Delete from a managed permission set group — `Answer: C`
**Verdict: CORRECT.**
This is the textbook use case for a **muting permission set**: you cannot edit components inside a **managed** package, so you mute the unwanted permission at the group level instead. Note the subtlety the explanation gets right — muting applies **only within that permission set group**, so it does not disturb the profile or other permission sets. **D would not work anyway**, because the Delete access is coming from the group, not the profile.

### Q19 — Alert the sales director on $500,000 opportunities — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**Big Deal Alerts** (*Setup → Opportunities → Big Deal Alert*) do exactly this. ✏️ One detail the explanation should add: a Big Deal Alert is triggered by **Amount *and* Probability together** — you must set a probability threshold as well, and only **one** Big Deal Alert can exist per org. Worth knowing, because it is the usual follow-up question.

### Q20 — Flow decision on a checkbox — `Answer: B`
**Verdict: CORRECT.**
`equals {!$GlobalConstant.True}` is right. The real teaching point, which the explanation states correctly, is that a checkbox is a **Boolean**, so it is compared against a global constant — never against the field's *label* text, which is what the two "High Value Customer" distractors are baiting. `contains` is a text operator and is invalid on a Boolean.

### Q21 — Two support teams, different case stages — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Support processes** are to Case what sales processes are to Opportunity — they define which **Status** values are available. Two processes plus two layouts is right. ✏️ *Incomplete option text:* a support process only takes effect once it is attached to a **record type**. The explanation says this; option A does not. The option should read *"…two support processes with different stages, record types and page layouts."*

🚨 **This is also where Q22 went.** The timestamp line of Q21 reads `# Dec. 4, 2025, 3:34 p.m. 22.` — a bare **`22.`** is glued to the end of it, with no question after it. So **Q22 does not exist**, and the only numbering gap in the entire file is explained by this one stray fragment.

### ⚠️ Q22 — **DOES NOT EXIST.** See the note on Q21 above.

### Q23 — Share all cross-sell opportunities with subject matter experts — `Answer: D`
**Verdict: CORRECT.**
**Public group + criteria-based sharing rule** is right, and the reasoning is exactly why: the SMEs are defined by *what the record is* (`Type = Cross-Sell`), not by *who owns it*, so an ownership-based rule (A) cannot express it. **B is the classic wrong instinct** — changing the OWD to Public Read/Write to solve a narrow access problem. Explanation is accurate and complete. ✏️ Scraper residue to delete: `Show Suggested Answer` and `by [deleted] at …`.

### ❓ Q24 — Reps see all cases on dashboards although Case is Private — `Answer: D`
**Verdict: DISPUTED — the explanation argues *against* its own answer.**

**Read the explanation carefully.** It says dynamic dashboards *"display data according to the viewing user's permissions"*, then blames *"a **static** dashboard with a specific running user"*, then concludes that **changing to a dynamic dashboard prevents the problem**. Every one of those statements is true — and every one of them argues that **D is the cure, not the cause**. Logged as defect **F8** and contradiction **C23**.

**The only defensible case for D** is the dynamic-dashboard setting *"Let dashboard viewers choose whom they view the dashboard as."* With that enabled, a rep can select a manager and see everything the manager sees. That is a genuine over-exposure vector — but the explanation never mentions it.

**Option B is arguably the better answer as written.** A dashboard in a **public folder** with a **fixed running user** who has broad access shows *every* viewer the running user's data, regardless of the viewer's own Private OWD. That is the single most common cause of exactly the symptom described.

**Recommendation:** keep **D**, but rewrite the explanation around the *"let viewers choose the running user"* setting, and rewrite option B so it is not a competing correct answer. As it stands the question cannot be defended to a student who reads the explanation.

### Q25 — Support users need access to Leads — `Answer: A`
**Verdict: CORRECT.**
**Permission sets** — additive, assignable to specific users, no need to disturb the existing profile or clone a new one. **D (new profile)** is the anti-pattern the question is testing, and **C (new role)** confuses record-level sharing with object-level access. Explanation is accurate. ✏️ Double space after `25.`, plus `Show Suggested Answer` residue.

### Q26 — Flow element to find records and store their values — `Answer: C`
**Verdict: CORRECT.**
**Get Records** is the only read element in Flow. The explanation correctly separates it from Create/Update (database writes) and Assignment (in-memory variable manipulation). Accurate and complete.

### Q27 — Users cannot create repeating tasks (choose two) — `Answer: A, D`
**Verdict: CORRECT.**
Two steps, both required: enable **Creation of Recurring Tasks** in *Activity Settings*, then add the **Create Recurring Series of Tasks** field to the Task page layouts. This is a genuinely useful pairing, because enabling the setting alone leaves users with no visible control — which is precisely the symptom in the stem. **C is a trap:** Shared Activities is unrelated to recurrence.

### Q28 — Two sales teams plus services, different fields and stages — `Answer: D`
**Verdict: CORRECT.**
**3 sales processes, 3 record types, 3 page layouts.** The phrase *"all three teams will need to use different fields **and stages**"* is the trigger: *different stages* → you need a separate **sales process** for each, which is what rules out option C. Explanation is accurate. ✏️ *Internal duplicate warning:* **Q36**, eight lines later, tests the identical arithmetic. Will be logged when Q36 is reviewed.

### Q29 — Convert a hot lead while keeping campaign history — `Answer: D`
**Verdict: CORRECT.**
Converting **from the Campaign Member Detail page** is the specific action that preserves the campaign link — the new Contact stays a member of the campaign with its original member status. Cloning (A) or deleting and recreating (B) would destroy the campaign history and the lead's audit trail. Explanation is accurate and complete.

### Q30 — Prevent agents from moving a Case backwards — `Answer: A`
**Verdict: CORRECT.**
**Validation rule** is right, and the explanation names the two functions that actually do the work — `ISCHANGED(Status)` and `PRIORVALUE(Status)`. This is a good question because the three distractors all *constrain picklists* in some way but none of them can compare a value to its own previous value. Accurate and complete.

### Q31 — Scheduled action when the record no longer matches — `Answer: B`
**Verdict: CORRECT-OBSOLETE.**
The behaviour is right and still true: when a record is re-evaluated and no longer meets the criteria, **pending time-based actions are removed from the queue**. ⚠️ But the stem is written around **Process Builder**, which Salesforce **retired** — no new processes can be created, and migration to Flow is mandated. The modern equivalent is a record-triggered flow with a **Scheduled Path**, where the same cancellation behaviour applies. **Rewrite the stem in Flow terms.**

### Q32 — Field type for coordinates — `Answer: D`
**Verdict: CORRECT.**
**Geolocation** — a compound field storing latitude and longitude, usable with the `DISTANCE()` and `GEOLOCATION()` formula functions. "Geofence" (A) is not a Salesforce field type, and External Lookup (C) points at an external object. Explanation is accurate. *(A useful footnote for students: a geolocation field counts as **three** custom fields against the object's limit.)*

### Q33 — Diagnosing a failed login — `Answer: C`
**Verdict: CORRECT.**
**Login History** gives the failure *reason* per attempt — Invalid Password, Locked Out, Restricted IP, Login Hours, and so on. **D is the deliberate near-miss:** the **Setup Audit Trail** records *configuration changes*, never login attempts. Explanation is accurate and complete.

### Q34 — Editing only the Stage field is slow (choose two) — `Answer: A, D`
**Verdict: CORRECT.**
**Path** (one-click stage advance from the top of the record) and **Kanban** (drag and drop from the list view) both remove the open-edit-save cycle entirely. A simplified page layout (B) still requires opening the record, and an autolaunched flow (C) cannot be user-triggered from a list. ✏️ *Overlaps Q6*, which also answers Kanban — not a duplicate, since this one adds Path, but note the pairing.

### Q35 — Company settings for a global team (choose two) — `Answer: A, D`
**Verdict: CORRECT-CAVEAT.**
**Currency Locale** and **Default Language** are both on the **Company Information** page and both are genuinely org-wide, so the answer is right. ✏️ **One sentence in the explanation is wrong:** it claims *"Login Hours and Password Policies are security controls configured at the **Profile** level."* Login hours, yes. **Password policies exist at *both* levels** — there is an org-wide *Setup → Password Policies* page **and** a per-profile override. Fix the sentence, because as written it would cost a student the classic "where do you set password policies?" question.

---

## Batch 19 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 23 | Q1, Q4, Q5, Q6, Q8, Q9, Q13, Q14, Q15, Q16, Q17, Q18, Q20, Q23, Q25, Q26, Q27, Q28, Q29, Q30, Q32, Q33, Q34 |
| ⚠️ CORRECT-CAVEAT | 7 | Q2, Q3, Q7, Q10, Q19, Q21, Q35 |
| 🕰️ CORRECT-OBSOLETE | 2 | Q11 (Critical Updates → Release Updates), Q31 (Process Builder retired) |
| ❓ DISPUTED | 1 | Q24 — explanation argues against its own answer |
| ❌ INCORRECT | **1** | **Q12** — keyed D; correct is **B** |
| ⚠️ MISSING | 1 | Q22 — stray `22.` fragment glued to Q21's timestamp line |

**One wrong answer: Q12.** Keyed **D** (*"a queue and a criteria-based sharing rule"*), but a **queue is not a valid Share With target** for a sharing rule. The explanation quietly substitutes *"a public group"* — which is not what the option says. The correct answer is **B**: a **predefined case team** attached automatically by a **case assignment rule**, with the team role set to Read/Write.

**One question that cannot be defended as written: Q24.** Its explanation states three true facts, all of which argue that a dynamic dashboard would **fix** the problem rather than cause it. Either rewrite the explanation around *"let viewers choose whom they view the dashboard as"*, or re-key to B.

**Topic 2 is a much better file.** Across 35 questions there is **one wrong answer and one disputed item** — compare Topic 1, where several batches produced three or four wrong answers each. The stems are modern scenario items, the distractors are plausible rather than silly, and the explanations are written in a consistent voice.

**But the scraper residue is heavier.** Topic 2 carries visible artefacts from whatever site it was copied from: `Show Suggested Answer`, `by [deleted] at …`, timestamps prefixed with `#`, and one orphaned "watch this tutorial" paragraph. These are logged as **F6** and new defect **F17**.

---

# BATCH 20 — File: `Admin-201 Topic 2.md`, Questions 36–65

### Q36 — Four-stage and eight-stage sales processes — `Answer: D`
**Verdict: CORRECT.**
**Separate record types and sales processes** is right. The trigger words are *"vary in page layouts **and picklist value options**"* — different stage values means a separate **sales process**, and a sales process only reaches users through a **record type**. Option A is the classic misconception the question is testing: page layouts **cannot** restrict picklist values; only record types can. ✏️ *Internal duplicate:* this is **Q28** eight questions earlier, restated. Logged as **D39**.

### Q37 — Auto-reply with password reset instructions (choose two) — `Answer: A, D`
**Verdict: CORRECT-CAVEAT.**
An **auto-response rule** supplies the criteria (`Subject contains forgot` / `password`) and an **email template** supplies the content. Neither works without the other, so this is a genuinely well-built "choose two." **C is a deliberate trap** — the org already uses Web-to-Case, so Email-to-Case is irrelevant. ✏️ Double space after `37.` (defect **F5**).

### Q38 — Hide a related list from one team that shares a profile — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Component Visibility** is right, and the stem is carefully built to rule out the alternatives: the two teams **share a profile**, so page layout assignment (D) and record types (C) cannot separate them, and sharing settings (B) control *record* access, not *component* display.

✏️ **The explanation overstates what the filter can do.** It says visibility can be filtered on *"permission set assignments."* It cannot — Lightning App Builder filters on **Record fields**, **Device/Form Factor**, **User fields** (Profile, Role, and so on) and **Permissions**. To key off a permission set, you put a **custom permission** in the client-services permission set and filter on that. Worth spelling out, because that extra step is exactly what trips people up in a real build.

### Q39 — Two things found on AppExchange (choose two) — `Answer: B, C`
**Verdict: CORRECT.**
**Consultants** and **Components**. The parenthetical note correctly explains that Communities/Experience Cloud is a platform product and "Customers" is not a listing category at all. 🚨 *Cross-file duplicate:* this is **Topic 1 Block-C #11**, same stem, same four options. The Topic 1 copy has no answer. Logged as **D40** — **keep this one.**

### ❌ Q40 — Reps want to change the Probability value — `Answer: A`
**Verdict: INCORRECT. The correct answer is B — make the field editable on page layouts.**

**The premise of the keyed answer is wrong.** Option A says *"Define a new Stage picklist value."* That changes what the Probability **defaults to** when a stage is selected — it does **not** give reps a way to change the Probability value itself, which is what the stem asks for.

**Probability is a user-editable field.** *Salesforce Help — Opportunity Fields:* **"Probability (%) — ... automatically populated based on the sales stage, but you can change it."** It is an ordinary percent field on the Opportunity that happens to be auto-populated. If reps cannot change it, the only possible cause is that the administrator has set it to **Read Only on the page layout** (or removed it). The fix is therefore **B**.

**Why the other two fail:** Forecasting (C) consumes probability, it does not expose it for editing; and a custom field (D) would be a parallel value that no standard forecast or report would use.

### Q41 — Show only one of two questions on a flow screen — `Answer: A`
**Verdict: CORRECT.**
**Conditional visibility** on the individual screen component is right, and the explanation correctly notes that this keeps everything on **one screen** — which is what the stem asks for. **D is the near-miss:** a Decision element plus a second screen would work, but it splits the experience across two screens and is the heavier build.

### ❓ Q42 — Sharing a parent report folder and two subfolders (choose two) — `Answer: A, B`
**Verdict: DISPUTED — the question's architecture may not be buildable in Salesforce.**

**The intent is right and A is sound.** Sharing **Support Reports** with the Managers group at **Edit** access gives them everything beneath it.

⚠️ **But option B may be impossible.** Salesforce documents that **report and dashboard subfolders inherit their sharing settings from the parent folder and cannot be shared independently.** If that is accurate, you cannot *"share the Helpdesk folder with Support Agents"* at all — the Share option is not offered on a subfolder.

**The explanation contradicts itself on exactly this point.** It opens by stating that *"access granted at a parent folder level applies to all nested subfolders"* (inheritance), then immediately describes *"sharing only the Helpdesk subfolder directly"* (independent sharing). Both cannot be true. Logged as contradiction **C26**.

**If inheritance is absolute, the real-world answer is different:** make **Helpdesk** and **R&D** two **top-level** folders rather than subfolders, share Helpdesk with Agents at Viewer and R&D with Managers at Editor.

🚨 **Please verify this one against *Salesforce Help: "Considerations for Report and Dashboard Folders"* before using the question.** This is the second item in the whole review I have flagged for direct confirmation (the first was the Recycle Bin storage question, C18).

### Q43 — Cannot change a picklist to a text field — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Formula fields** is the intended answer and is definitely a blocker — a field referenced in a formula cannot have its data type changed until the reference is removed. ✏️ *Soft distractor:* **A (Visualforce)** is also a genuine blocker for several field changes, which makes a single-answer stem slightly shaky. **B ("Javascript")** is not a Salesforce metadata type at all and is a wasted option. **C (record types)** is the useful distractor, because record types *do* control picklist values but do **not** block a type change. Consider replacing A and B.

### Q44 — Rehired rep cannot see their old records — `Answer: A`
**Verdict: CORRECT.**
Excellent question, and the answer is right. **Deactivating a user permanently deletes their manual shares and team memberships**, and **reactivating does not restore them** — which is exactly why the default Opportunity Teams came back (they are re-applied on new records) while the old access did not. The stem carefully rules out criteria-based sharing rules so that manual sharing is the only remaining explanation. Explanation is accurate and complete.

### Q45 — What lead conversion creates (choose two) — `Answer: B, C`
**Verdict: CORRECT.**
**Account** and **Contact** are created (or matched to existing records); an **Opportunity** is optional; **Campaign** and **Case** are never created. Explanation is accurate. A small addition worth making: with Person Accounts enabled, a lead can convert into a **person account**, which is a useful nuance.

### Q46 — Bold message plus a way to update the Account status (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
**Rich Text** (B) for the bold message, gated by component visibility on the record type; **Related Record** (A) to surface and edit the parent Account's status without leaving the Case. **C (Record Detail)** shows the Case's own fields, not the Account's; **D (Related List)** lists child records, not parent fields. The explanation is accurate and names the visibility filter correctly. *(One build detail worth adding: the Related Record component needs an **update action** on Account to make the field editable.)*

### Q47 — Must pick a Product Type **or** tick Needs Review — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Validation rule** is right, and the supplied formula — `ISBLANK(TEXT(Product_Type__c)) && Needs_Review__c = FALSE` — is correct: it errors only when *neither* is supplied. **C is the trap:** making both fields *required* would demand both, not either. ✏️ *Modern caveat:* since **Summer '23**, a record-triggered flow can throw a **Custom Error**, so option **D (Before Save flow)** is no longer strictly impossible. A validation rule is still the right answer for a simple either/or rule, but the option is softer than it was when the question was written.

### Q48 — Standard objects for a support use case (choose three) — `Answer: A, B, D`
**Verdict: CORRECT.**
**Account, Contract, Case.** The value of this question is in the two distractors — **"Ticket"** and **"Request"** are the names other helpdesk products use, and students coming from those tools routinely look for them. The explanation makes that point explicitly, which is good teaching.

### Q49 — Close all other open opportunities on the account — `Answer: B`
**Verdict: CORRECT.**
**Flow Builder** — specifically a record-triggered flow that gets the account's other open opportunities and updates them. This is a **cross-record, multi-record** operation, which is precisely what workflow rules never could do. The explanation states that correctly and also notes that workflow rules are retired.

### Q50 — Knowledge on the Case record page outside the console — `Answer: D`
**Verdict: CORRECT.**
The distinction being tested is **component vs related list** and **record page vs page layout**. Knowledge is a **Lightning component** added to a **Lightning record page** in App Builder — it is not a related list and it does not live on the page layout. It also works perfectly well outside a console app. Explanation is accurate and complete.

### Q51 — Reassign a departed rep's records, keep the teams — `Answer: B`
**Verdict: CORRECT.**
**Mass Transfer Records** is the only listed tool that preserves account and opportunity teams; the three data tools would rewrite `OwnerId` and wipe the teams. 🚨 *Cross-file duplicate:* this is **Topic 1 Block-C #1**, which has no answer. Logged as **D41** — **keep this one.**

### ⚠️ Q52 — Remove a user's access immediately when they are in a hierarchy field — `Answer: C`
**Verdict: CORRECT (answer) — but the explanation is broken.**

**The answer is right.** **Freeze** is the only action that revokes access **instantly** while the dependency still exists. Salesforce blocks deactivation of a user referenced in a **custom hierarchy field**, so the correct sequence is: freeze → clear the references → deactivate. The `Trainer Explanation & Concept` paragraph says exactly this and is accurate.

🚨 **But the `Why:` paragraph directly above it is copy-pasted from Q51.** It reads *"The standard Mass Transfer Tool (Mass Transfer Records) allows an administrator to quickly transfer ownership of multiple Accounts…"* — which has **nothing whatsoever to do with this question**. A student reading top-down gets a completely unrelated answer first. **Delete that paragraph.** Logged as contradiction **C25** and defect **F8**.

✏️ Also note **option D is a serious trap worth discussing**: it says *"deactivate the user and **delete any records** where they are referenced"* — deleting records to solve a permissions problem is destructive and wrong, quite apart from the fact that deactivation would fail first.

### Q53 — Lead picklist missing on Contact after conversion (choose two) — `Answer: C, D`
**Verdict: CORRECT.**
Create the field on Contact, then **Map Lead Fields**. Accurate and complete. ✏️ *This is now the third copy of this question across the two files* — **Topic 1 Block-A Q7**, **Topic 2 Q5** (Lead→Opportunity) and this one. **D38** extended.

### Q54 — Undoing a mistaken import (choose two) — `Answer: A, D`
**Verdict: CORRECT-CAVEAT.**
**Mass Delete Records** and **Data Loader (Delete)** are right, and the explanation adds the genuinely useful detail that you feed Data Loader the **success file** from the import, because it contains the new record IDs. ✏️ *One correction to make:* the explanation says Mass Delete Records handles *"standard objects… up to 250 at a time"* and implies custom objects need Data Loader. In fact Mass Delete Records works on a **fixed list** of objects — Accounts, Leads, Activities, Contacts, Cases, Solutions, Products and Reports — and does **not** support custom objects at all. Tighten that sentence.

### Q55 — Track key stakeholders on opportunities (choose two) — `Answer: D, E`
**Verdict: CORRECT-CAVEAT.**
**Opportunity Contact Roles** — customise the role picklist, add the related list — is right, and it is the only mechanism that makes contact influence **reportable** against the opportunity. ✏️ *The stem misuses a term:* it says *"track **ROI** for contacts."* ROI is a **Campaign** metric; what is actually being described is **influence** or **role**. Since options B and C are both Campaign-flavoured distractors, the word "ROI" actively pushes a student toward the wrong answer. Change it to *"track the influence of contacts who are key stakeholders."*

### Q56 — Flow in production creates no records — `Answer: C`
**Verdict: CORRECT.**
**The flow is inactive.** The explanation adds the detail that matters in practice — flows deployed through change sets or packages **arrive inactive** — which is the real-world cause of this exact symptom. The other three options are invented terms ("flow url," "flow is read only") or not a thing you can be missing ("flow trigger").

### Q57 — Six Case fields on the Contact related list (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
This is a well-designed question. The **six requested fields exceed the four columns** a standard Lightning related list shows, so you must switch to **Enhanced List** (up to 10 columns) — and that switch happens in **Lightning App Builder**, not the page layout. But **which** fields appear is still governed by the **page layout's related list columns**. Hence one change in each place. **C is the precise trap** — right change, wrong tool.

### Q58 — Show Account Industry on the Opportunity — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Cross-object formula field** is right, and the explanation correctly emphasises **zero data duplication** — the value is always live rather than copied. ✏️ *Loose wording:* it calls the Opportunity→Account link a *"standard master-lookup."* There is no such term. Opportunity has a standard **lookup** to Account; cross-object formulas traverse lookups perfectly well, so the answer is unaffected — but the phrase should be corrected before a student repeats it.

### Q59 — Prerequisite for using Data Loader — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Append the security token to the password** is correct, and the explanation correctly qualifies it with *"outside a trusted IP range"* — which is the part most people forget. ✏️ *Modern footnote worth adding:* current Data Loader defaults to **OAuth** login, which opens a browser and needs **no security token at all**. The token is only needed for password authentication. Worth saying, because a student following this answer against a modern Data Loader will be looking for a field that is not on screen.

### Q60 — Make a quick action available in the mobile app — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
Actions only reach the mobile action bar via the **Salesforce Mobile and Lightning Experience Actions** section of the **page layout** — and crucially, that section must be **overridden** from its default before it takes effect. **D is a good trap:** compact layouts control the highlights panel, not actions.

✏️ **Three formatting faults in one question:** the answer line reads `Certified Correct Answer: C. Add the Salesforce Mobile…` — a **label used nowhere else in either file**, which also **restates the full option text** (defects **F9** and **F3**) — and the timestamp line begins `#t June 20, 2024` with a **stray `t`** (defect **F6**).

### Q61 — Show a component only to sales users on phones (choose two) — `Answer: B, D`
**Verdict: CORRECT.**
**User > Profile > Name** and **Form Factor = Phone** are the two real filters. **A is a fabricated option** — there is no `View` filter with a `Mobile/Tablet` value — and **C (Role)** is the classic profile-vs-role confusion. Note the useful subtlety: `Form Factor = Phone` excludes tablets, which is what *"on their mobile phones"* asks for. Explanation is accurate.

### Q62 — Considerations about Salesforce objects (choose two) — `Answer: A, C`
**Verdict: CORRECT.**
Both true, and the rebuttals are correct: you **cannot create new standard objects** (B), and **both** standard and custom objects support master-detail relationships (D) — subject to the well-known restriction that a **standard object cannot be the *detail* side**, which the explanation hints at with "subject to standard relationship limits." Worth stating that restriction explicitly, since it is a frequent exam point.

### Q63 — Show only the lead sources valid for the chosen category — `Answer: D`
**Verdict: CORRECT.**
**Field dependency**, with Product Category controlling and Lead Source dependent. The closing note is genuinely good teaching: record types filter picklist values **per record type**, whereas a dependency filters them **live, per keystroke, on the same record**. That is exactly the distinction the question exists to test.

### Q64 — Drill a case dashboard by origin, status and owner — `Answer: C`
**Verdict: CORRECT.**
**Dashboard Filters**, and the explanation correctly gives the limit — **up to 3 filters per dashboard** — which is exactly the number of dimensions the stem asks for. That is not a coincidence; it is the point of the question. **A (bucket column)** groups values inside one report and cannot drive a whole dashboard.

### Q65 — Unassigned cases open over 2 hours — `Answer: D`
**Verdict: CORRECT.**
**Case Escalation Rules** — time-based reassignment **plus** an email alert, both of which the stem requires. The closing note correctly contrasts assignment rules (creation-time, no timer) with escalation rules (elapsed-time). ✏️ *Duplicate:* this is now the **fourth** copy of the escalation-rule fact across the two files — **Topic 1 Q1163, Q1165** and this one. **D33** extended.

---

## Batch 20 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 18 | Q36, Q39, Q41, Q44, Q45, Q46, Q48, Q49, Q50, Q51, Q53, Q56, Q57, Q61, Q62, Q63, Q64, Q65 |
| ⚠️ CORRECT-CAVEAT | 10 | Q37, Q38, Q43, Q47, Q52, Q54, Q55, Q58, Q59, Q60 |
| ❓ DISPUTED | 1 | Q42 — subfolder sharing may not be buildable |
| ❌ INCORRECT | **1** | **Q40** — keyed A; correct is **B** |

**One wrong answer: Q40.** The **Probability** field on Opportunity **is user-editable** — Salesforce auto-populates it from the Stage but explicitly allows it to be changed. Defining a new stage value (the keyed answer A) changes the *default*, not the reps' ability to edit. The correct answer is **B — make the field editable on the page layout.**

🚨 **One explanation belongs to a different question.** **Q52's `Why:` paragraph is a straight copy-paste of Q51's**, describing the Mass Transfer Tool in a question about freezing a user. The correct reasoning does appear below it under a second label, but a student reading top-down hits the wrong one first. This is the most damaging single defect in the batch.

**One question flagged for verification: Q42.** Salesforce documents that report **subfolders inherit sharing from the parent and cannot be shared independently**. If that holds, option B is not buildable and the whole scenario needs restructuring into two top-level folders. Please confirm against Salesforce Help before this one reaches a student.

**Three more cross-file duplicates:** **D40** Q39 = Topic 1 Block-C #11 (AppExchange); **D41** Q51 = Topic 1 Block-C #1 (Mass Transfer); plus **D39** Q28 ≈ Q36 *within* Topic 2. A clear pattern is emerging — **Topic 1's unanswered Block C is largely a subset of Topic 2.**

**Explanation labels drift again from Q52.** Questions 1–51 use `Why:`; Q52–Q58 switch to `Trainer Explanation & Concept:`; Q59 reverts to `Why:`; Q60 invents `Certified Correct Answer:`. Same defect **F9** that runs through Topic 1.

---

# BATCH 21 — File: `Admin-201 Topic 2.md`, Questions 66–100

> ⚠️ **A third format begins at Q71.** From Q71 onward the file switches to `Answer(s): A. <full option text>` with an `Explanation:` label and **no timestamp at all**. Questions 1–70 use `Answer: A` + `Why:` + a timestamp. Logged as **F18**.

### Q66 — Dashboards on a tight deadline and no budget — `Answer: C`
**Verdict: CORRECT.**
**AppExchange prebuilt package** is right, and the explanation names the specific thing that makes it free — **Salesforce Labs** packages. The question is really testing whether a student knows that "don't build it yourself" is a legitimate admin answer. A (consultant) costs money and D (build manually) costs time — the two constraints in the stem.

### Q67 — "Unrated" imported into the Lead Rating picklist — `Answer: B`
**Verdict: CORRECT.**
**The Restricted picklist checkbox was unchecked** — correct. A restricted picklist **rejects the row** with *"bad value for restricted picklist field"*; an unrestricted one accepts it.

✏️ **One clause to verify.** The explanation says the new value *"is stored **and added to the field's inactive picklist values list**."* My Batch 16 note on **Topic 1 Q1039** stated it slightly differently — that the value lands on the record while the picklist **definition** is untouched. Both agree on the exam-relevant point (restricted rejects, unrestricted accepts), so neither answer changes. But the two files should describe the after-effect with the **same** wording. Logged as **C27** — worth one check against *Salesforce Help: "Restrict Picklist Field Values."*

### Q68 — Route inbound emails to the correct case queue — `Answer: D`
**Verdict: CORRECT.**
The key fact, stated correctly: **each Email-to-Case routing address carries its own case owner setting**, so queue assignment is native and needs no automation at all. The rebuttals are unusually good — C is dismissed as *"unnecessary extra maintenance"* rather than as impossible, which is the honest reason.

### Q69 — Service team can still find deals through search — `Answer: A`
**Verdict: CORRECT.**
The insight is the important one: **global search obeys object- and record-level security, not tab visibility.** Hiding the tab only removes a navigation link — the records remain findable. You must remove **Read** on the object. The explanation states this precisely, and options C and D ("search terms," "search index") are invented settings, which makes them clean distractors.

### ❓ Q70 — Shoe designs related to products (choose two) — `Answer: A, C`
**Verdict: DISPUTED — the option is worded backwards and the stem's requirement cannot be met by either relationship type.**

**A is fine.** A custom object for Shoe Designs is correct.

**🚨 Option C puts the field on the wrong object.** It reads *"Add a custom master-detail field for shoe designs **on the Product object**."* A master-detail field always lives on the **child**. The explanation immediately contradicts the option it is defending: *"Creating a Master-Detail relationship field **on the Shoe Design object** (pointing to the Product as the master)…"* The option text must be rewritten.

**🚨 The stated requirement does not match the answer.** The stem says *"Shoe designs should be **unable to be deleted**."* **Neither** a master-detail nor a lookup makes child records undeletable. Worse, master-detail does the **opposite** of what the requirement implies — it **cascade-deletes** every design when its product is deleted.

**Compare Q90, twenty questions later.** Identical logic — *"When an Account is deleted, the shipments should remain"* — and it is correctly keyed to **lookup**. If Q70's requirement means *designs must survive*, then Q70's answer should be **D (lookup)** too, and the two questions currently teach opposite things from the same reasoning. Logged as contradiction **C28**.

**Recommendation:** decide what the stem means, then fix it. If designs must survive product deletion → **A, D**. If designs genuinely depend on the product → keep **A, C** but rewrite C to place the field on Shoe Design and drop the "unable to be deleted" clause.

### Q71 — Summarising the org's security health — `Answer: A`
**Verdict: CORRECT.**
**Health Check** is the only feature that produces a **score and a summary** against a baseline — which is what an audit asks for. The explanation correctly notes that B, C and D are all real security activities that simply do not produce a summary. Good distractor design.

### Q72 — Finding converted leads to edit (choose two) — `Answer: B, D`
**Verdict: CORRECT.**
With **View and Edit Converted Leads** assigned, converted leads become reachable through **global search** and **Recent Records** — but they remain **excluded from standard lead list views**, which is why A is wrong. That exclusion is the entire point of the question and the explanation states it. C is correctly dismissed: the Data Import Wizard does not update converted leads.

### Q73 — 24-hour SLA re-assignment to the next tier queue — `Answer: C`
**Verdict: CORRECT.**
🚨 *Cross-file duplicate:* this is **word-for-word Topic 1 Q1165** — same stem, same four options, same answer. **D33** extended. The escalation-rule fact now appears **five** times across the two files: T1 Q1163, T1 Q1165, T2 Q65, T2 Q73 and T2 Q82.

### Q74 — What prevents deactivating a user (choose two) — `Answer: A, C`
**Verdict: CORRECT.**
**Sole recipient of a workflow email alert** and **referenced in a custom hierarchy field** are both genuine blockers. The rebuttals are right too: being at the top of the role hierarchy or sitting in a territory model does **not** block deactivation. This is the best-built member of the deactivation family, which now spans **T1 Q1064**, **T1 Block-C #2**, **T2 Q52** and this one — each testing a different facet, so they are worth keeping together.

### Q75 — Identifier for importing from a financial system — `Answer: A`
**Verdict: CORRECT.**
**External ID** — and the explanation correctly ties it to **upsert**, which is the operation that makes External IDs matter. Record ID (B) cannot be known by the external system in advance, and auto-number (D) is generated by Salesforce, not by the source.

### Q76 — Undeleting a field used in lead conversion — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Lead conversion mappings are not restored** when a field is undeleted — correct, and a genuinely useful trap. ✏️ Two additions worth making: the undelete window is **15 days**, and option **C ("field history will remain deleted")** is **false** — field history *is* restored with the field, which is worth saying explicitly so students learn what undelete *does* recover.

### Q77 — Viewing shipments from an external application — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**Salesforce Connect → external objects → custom tab** is right, and the explanation correctly frames it as data that lives outside Salesforce. ✏️ *Malformed option:* **A** reads *"Split views are only available on standard objects"* — that is a **statement of fact, not an action**, so it cannot answer a *"what is the best way to configure…"* question. Defect **F12**.

### ❓ Q78 — Reps miss key fields and must not move backwards (choose three) — `Answer: B, D, E`
**Verdict: DISPUTED — the explanation argues for different letters than the key.**

**The key says B, D, E** (Opportunity Path, validation rules, guided selling). **The explanation says** *"administrators can make fields **required on page layouts** (C), use validation rules (D), or utilise **Screen Flows** (A) / Guided Selling (E)"* — naming **A and C**, which are **not** in the key, and only partly naming the key's own letters. It then closes with a hedge: *"Depending on exact exam variants…"* Defects **F8** and **F13**.

**The stem is also ambiguous.** *"Reps need to move forward in stages but are unable to enter a previous stage"* can be read as a requirement (*prevent backward movement*) or as a complaint (*they currently cannot go back*). Those point to opposite fixes.

**B, D, E is defensible** — Path surfaces Key Fields per stage, Guidance for Success/guided selling tells reps what to do, and a validation rule using `ISCHANGED` and `PRIORVALUE` is the only thing that can actually **block** a backward move. **Keep the letters, rewrite the stem and the explanation.**

### Q79 — Automate the case-closed email (choose two) — `Answer: B, C`
**Verdict: CORRECT-CAVEAT.**
**Notify Contact checkbox on the close page layout** + **case close template in Support Settings** is the standard pairing, and the rebuttal is right: auto-response rules fire on **creation**, never on closure. ✏️ *Partly legacy:* this is built around the Classic **Case Close Page Layout**. In Lightning the equivalent lives on the **Close Case** action's layout. The feature still exists, but the wording will confuse a Lightning-only admin. Worth a modern footnote.

### Q80 — Showing Date must fall in the current year — `Answer: D`
**Verdict: CORRECT.**
**Validation rule** — and the explanation makes the right generalisation: reports, help text and calendar sync are **reactive or passive**, while only a validation rule is **preventive**. That contrast is the transferable lesson here.

### Q81 — Automated deletion based on field values — `Answer: D`
**Verdict: CORRECT.**
**Flow Builder** is the only declarative tool that can **delete** records — workflow rules and Process Builder never could. The explanation also correctly flags **Automation Studio** as a **Marketing Cloud** tool, which is a genuinely useful distinction for admins working in both clouds.

### Q82 — Change the case owner after 7 days — `Answer: A`
**Verdict: CORRECT.**
**Escalation Rules.** ✏️ *Duplicate:* fifth copy of the escalation-rule fact (see Q73). **D33** extended.

### Q83 — Identify leads entered by interns — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Record type** works and is the intended answer — it tags the records, drives reporting, and can carry its own layout and picklist values. ✏️ *The explanation undercuts itself* in its final clause: *"none of which inherently tag intern-entered records the way a record type **or custom field** can."* A custom field is not one of the options, and mentioning it invites the student to wonder why the answer is not "create a custom field" — which would, in fact, also work. Delete that clause.

### Q84 — Different Web-to-Lead replies by Industry — `Answer: C`
**Verdict: CORRECT.**
**Auto-response rules** — multiple rule entries, each with its own criteria and email template, is exactly the mechanism for "different messages based on a field value." The rebuttals are accurate: assignment rules route, validation rules block. ✏️ Double space after `84.`

### Q85 — Considerations when resetting a password (choose two) — `Answer: B, D`
**Verdict: CORRECT-CAVEAT.**
Both true and both useful: a reset **unlocks a locked-out user**, and the user may face **device activation** (identity verification) on next login. Option C is correctly rejected — SSO users authenticate at their identity provider.

✏️ **One factual slip in the explanation:** it says password policies are governed by *"profiles or **permission set** password policies."* **Permission sets do not have password policies.** They live on the **profile** and on the **org-wide Password Policies** page. This is the *second* time this exact confusion has appeared in Topic 2 — see Q35, which claimed password policies are profile-only. Both sentences need fixing, and they need to agree with each other.

### Q86 — Different Account page in Sales Console vs Service Console — `Answer: D`
**Verdict: CORRECT.**
**App Default** assignment on a Lightning record page is exactly the feature, and the explanation correctly points out that it avoids inventing record types or profiles just to vary the UI. Worth adding the full precedence order for students: **App + Record Type + Profile** beats **App + Record Type** beats **App Default** beats **Org Default**.

### Q87 — Report values differ from the dashboard (choose two) — `Answer: A, C`
**Verdict: CORRECT.**
Two genuinely different causes: the **running user's access** differs from the viewer's, and the **dashboard is showing a cached snapshot** until refreshed. The rebuttal of D is neat — if the user lacked folder access they could not open the report **at all**, so it cannot explain a *difference* in values. ✏️ Double space after `87.`

### Q88 — Export closed-won opportunities from the last 90 days — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
**Data Loader** is right because the requirement has **both** a filter (last 90 days, closed won) and a **field selection** — which is a SOQL query, not a backup. The explanation correctly notes that the **Data Export Service** dumps everything with no date filter. ✏️ *Invented option:* **B "Data Export Wizard"** is not a Salesforce product. Also worth noting for realism: a **report exported to CSV** would satisfy this requirement just as well and is what most admins would actually do.

### Q89 — Predict revenue and benchmark reps (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
**Forecasting** covers *"predict upcoming revenue"* and **Sales Quotas** covers *"set goals and benchmark how reps are performing."* The stem has two distinct halves and the answer has two distinct features — cleanly constructed. Explanation is accurate.

### Q90 — Shipments must survive Account deletion — `Answer: D`
**Verdict: CORRECT.**
**Lookup from Shipment to Account.** Two correct decisions in one: the **direction** (field on the child) and the **type** (lookup, because master-detail cascade-deletes). The explanation states both. ⚠️ **This is the question that exposes Q70's problem** — same reasoning, opposite conclusion. See **C28**.

### Q91 — Discount calculator screen from a button — `Answer: D`
**Verdict: CORRECT.**
**Flow Builder** is the only listed tool that can render a **UI**. The explanation correctly classifies Process Builder and Workflow as background automation and Platform Events as messaging. Note that Process Builder and Workflow Rules are both retired anyway, which makes this question safe.

### 🟢 Q92 — Reps see all cases on dashboards although Case is Private — `Answer: D`
**Verdict: CORRECT — and this question resolves the dispute raised at Q24.**

**This is Q24 with one option changed.** Same stem, word for word. Same options A, B, C. But option **D** here reads **"Dashboard's running user"** instead of **"Dynamic Dashboards"** — and with that single change the question becomes unambiguous and correct. The explanation is accurate: the running user's access level applies to **every** viewer and overrides their own permissions.

✅ **Action:** this proves the Batch 19 finding on **Q24**. Either **delete Q24** as a defective duplicate, or replace its option D with *"Dashboard's running user"*. Logged as **D42**; this also closes **C23**.

### Q93 — Make the Case page more role-relevant — `Answer: C`
**Verdict: CORRECT.**
**Component visibility filters** — and the explanation makes the right point that this is what "dynamic" means in Lightning App Builder. Options A and B solve the problem by **removing** information from everyone, which is the opposite of personalisation. *(Third question in this file on component visibility — see Q38 and Q61 — but each tests a different filter type, so they are complementary rather than duplicates.)*

### Q94 — Annual Revenue must be between 0 and $100bn — `Answer: B`
**Verdict: CORRECT.**
**Validation rule.** The explanation correctly flags **D** as a fabricated feature — there is no "Account Revenue limits in Setup." Inventing a plausible-sounding Setup page is good distractor craft.

### Q95 — Self-serve case creation (choose two) — `Answer: A, C`
**Verdict: CORRECT-CAVEAT.**
**Web-to-Case** and **Email-to-Case** are the two customer-initiated intake channels; escalation and queues are internal routing. ✏️ *Modern footnote:* the genuinely "self-serve" answer in a current org is an **Experience Cloud site** with a case-creation form and Knowledge deflection. Web-to-Case is the classic answer and is still correct, but it is worth telling students what the 2026 build actually looks like.

### Q96 — Create a task that repeats every two weeks — `Answer: B`
**Verdict: CORRECT.**
**Enable Creation of Recurring Tasks** in Activity Settings. The explanation correctly flags **A** as a plausible-but-wrong setting name. ✏️ *Duplicate:* **Q27** covers the same ground and additionally requires the page-layout field. Q27 is the more complete question. Logged as **D43** — **keep Q27.**

### Q97 — Finding out which licences were purchased — `Answer: B`
**Verdict: CORRECT.**
**User Licenses related list on Company Information** gives Total, Used and Remaining per licence type. The rebuttal of **C** is the valuable part — **usage-based entitlements** is the adjacent related list on the *same page* and covers consumption limits, not seat counts. That is exactly the confusion the question exists to test.

### Q98 — Blocking access from outside the network (choose two) — `Answer: B, C`
**Verdict: CORRECT.**
Both true, and the pairing is important: **IP ranges are set on the profile or org-wide**, and **Enforce Login IP Ranges on Every Request** is what stops a session obtained inside the network from continuing to work outside it. Without the second setting the first is only enforced at login. The explanation makes this point well.

### Q99 — Update the Account when a CEO contact is created — `Answer: D`
**Verdict: CORRECT-OBSOLETE.**
The **logic** is right — a **cross-object update from child to parent over a lookup** needs Process Builder or Flow, and a workflow field update cannot do it (workflow can only update a **master** across a master-detail). ⚠️ But **Process Builder is retired** — no new processes can be created. The explanation already senses this and hedges: *"(or Flow Builder, though Process Builder is standard for this context)"* — leftover drafting (defect **F13**). **Replace option D with "Flow Builder"** and delete the hedge.

### Q100 — Different picklist options by kind of opportunity — `Answer: C`
**Verdict: CORRECT.**
**Record type.** The explanation correctly separates the three layers: the **picklist value set** holds every possible value, the **field definition** holds the master list for that field, and the **record type** decides which subset a given user sees. Accurate and complete.

---

## Batch 21 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 25 | Q66, Q67, Q68, Q69, Q71, Q72, Q73, Q74, Q75, Q80, Q81, Q82, Q84, Q86, Q87, Q89, Q90, Q91, Q92, Q93, Q94, Q96, Q97, Q98, Q100 |
| ⚠️ CORRECT-CAVEAT | 7 | Q76, Q77, Q79, Q83, Q85, Q88, Q95 |
| 🕰️ CORRECT-OBSOLETE | 1 | Q99 (Process Builder retired) |
| ❓ DISPUTED | 2 | Q70, Q78 |
| ❌ INCORRECT | **0** | — |

**✅ No wrong answers in this batch** — only the second clean run in twenty-one batches.

🟢 **Q92 solves the Q24 problem.** Q92 is **Q24 with one option swapped**: option D becomes *"Dashboard's running user"* instead of *"Dynamic Dashboards"*, and the question immediately becomes correct and unambiguous. This confirms the Batch 19 finding — **delete Q24, or copy Q92's option D into it.** Closes contradiction **C23**.

**Two questions that need rewriting, not re-keying:**
- **Q70** — option C places the master-detail field **on the Product object**; it belongs on Shoe Design, and the explanation says so, contradicting the option it defends. The stem's *"should be unable to be deleted"* requirement is not achievable by **either** relationship type, and if it means *designs must survive*, the answer should be **lookup** — the very answer **Q90** gives for identical reasoning. See **C28**.
- **Q78** — the key says **B, D, E** but the explanation argues for **A and C**, then hedges with *"depending on exact exam variants."* The letters are defensible; the explanation and the ambiguous stem are not.

**A recurring factual error is now confirmed.** **Q85** says password policies live on *"profiles or permission sets"*; **Q35** said they are *"configured at the Profile level."* **Permission sets have no password policies**, and password policies exist **both** org-wide and per profile. Two questions, two different wrong statements, about the same thing.

**A third format starts at Q71.** From Q71 the file drops timestamps entirely, restates the full option text on the answer line (`Answer(s): A. Run a Health Check to identify vulnerabilities.`) and relabels the rationale `Explanation:`. Logged as **F18**.

**Two more duplicates:** **D42** Q24 ≈ Q92; **D43** Q27 ≈ Q96. And the **escalation-rule question now exists five times** across the two files.

---

# BATCH 22 — File: `Admin-201 Topic 2.md`, Questions 101–135

### Q101 — Nobody can access a new custom report type (choose two) — `Answer: C, D`
**Verdict: CORRECT-CAVEAT.**
Both causes are right: a custom report type left **In Development** is visible only to users with *Manage Custom Report Types*, and a report saved in a **private folder** is invisible to everyone else. ✏️ *Wrong status name:* the explanation says the type must be deployed *"to **In Deployment**."* The two statuses are **In Development** and **Deployed**. Fix the word — it is exactly the kind of detail a student will repeat.

### Q102 — Considerations when enabling My Domain — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**A** is right: after deployment, login URLs change for **internal and external** users alike. The rebuttals are good too — C is false because a My Domain **can** be renamed, and D is false because SSO not only survives My Domain but generally **requires** it.

⚠️ *Dated premise:* **My Domain is now mandatory and was auto-enabled for every org in Winter '22.** The scenario — an admin being told to set it up before building a Lightning app — no longer happens. Keep the facts, rewrite the stem as *"what changed when My Domain was enabled."*

### Q103 — Making a screen flow visible from Cases — `Answer: A`
**Verdict: CORRECT.**
**Lightning Page** via the Flow component in App Builder. The explanation draws the right line: page layouts carry fields and related lists, Lightning pages carry **components**, and a flow is a component. "Component Filter" (D) is not a distribution method at all — it controls visibility of something already placed.

### Q104 — Business hours for two time zones — `Answer: A`
**Verdict: CORRECT.**
One Business Hours record per time zone, because escalation rules and milestones calculate against them. 🚨 *Cross-file duplicate:* **word-for-word Topic 1 Block-A Question 2.** Logged as **D44** — **keep this one**, since Topic 1's copy sits in the malformed appended block.

### Q105 — Ten case statuses when reps need five — `Answer: D`
**Verdict: CORRECT.**
**Support processes per record type** is right, and option **C** is the precise trap: you do *not* edit status choices "directly on the record type" — you build a **support process** and then attach it to a record type. The explanation gets that chain right. *(Same architecture as Q21, but a genuinely different question — Q21 asks you to design it, Q105 asks you to fix it.)*

### Q106 — Help reps prioritise and close deals — `Answer: A`
**Verdict: CORRECT.**
**Einstein Opportunity Scoring.** The distinction being tested is right in the explanation: **Lead** Scoring works on prospects *before* qualification, **Opportunity** Scoring works on active deals. The stem says *"managing deals,"* which settles it.

### Q107 — Credit team members by level of effort — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Opportunity Splits** is right. ✏️ Worth adding the distinction the stem actually points at: **Revenue splits** must total 100% and divide the amount, while **Overlay splits** credit *effort* by people who supported the deal and can total any percentage. *"Level of effort contributed"* is an **overlay** split. Naming both types would make this a much better teaching question.

### Q108 — Updating Salesforce from a data warehouse — `Answer: C`
**Verdict: CORRECT.**
**External ID**, used with **upsert**. The rebuttal of B is the sharp one: *"Data Loader is the **tool**, not the **schema mechanism**"* — that is exactly the confusion the question exists to test. ✏️ *Duplicate:* same fact as **Q75**. Logged as **D45**; Q108 has the better distractors, **keep Q108**. Double space after `108.`

### ⚠️ Q109 — Diagnosing a flow that is not working — `Answer: A, D`
**Verdict: CORRECT (content) — but the question is malformed.**

Both techniques are valid: **Flow Builder's Debug** steps through the flow interactively, and **debug logs with the Workflow/Flow logging level** capture what happened at runtime. The rebuttals are right — audit trail tracks *config changes*, email logs track *delivery*.

🚨 **But the stem asks a single-answer question** — *"What should the administrator do to identify the problem?"* with **no "(Choose two.)"** — and then supplies **two letters**. Any quiz tool will mark a correct single answer wrong. **Add "(Choose two.)" to the stem.** Defect **F12**.

⚠️ *Also dated:* the stem says the flow *"is launched by a **process**"* — Process Builder is retired. Change to *"launched by a record-triggered flow."*

### Q110 — Helping a locked-out user (choose two) — `Answer: B, C`
**Verdict: CORRECT.**
Both work, and they are genuinely different: **Unlock** clears the lockout and keeps the existing password; **Reset Password** clears the lockout *and* issues a new one. The rebuttal of A is the valuable part — **logging in as the user does not clear a lockout**, and in fact you often cannot log in as a locked-out user at all.

### Q111 — Many-to-many between two custom objects (choose two) — `Answer: A, C`
**Verdict: CORRECT.**
**Junction object + two master-detail relationships.** The explanation correctly puts both master-detail fields **on the junction object**. Worth adding one exam-favourite detail: the **first** master-detail you create becomes the **primary** relationship, which controls the junction record's look and feel, ownership and sharing.

### Q112 — Show a picklist only when Lead Source is "Search Engine" — `Answer: A`
**Verdict: CORRECT.**
**Conditional visibility on the screen component.** The rebuttal of **D** is the subtle and correct one: a **choice filter** limits *which values appear inside* a picklist, whereas conditional visibility hides **the field itself** — which is what the stem asks for. *(Same mechanism as Q41, but Q41 tests hiding a question and Q112 tests the field-vs-values distinction. Keep both.)*

### Q113 — Categorise accounts as small/medium/large — `Answer: D`
**Verdict: CORRECT.**
**Bucket column**, and the explanation states the key benefit — no custom field is needed on the object. Grouping (C) is the closest distractor and is correctly separated: grouping organises by **existing** values, bucketing **invents new** ones.

### Q114 — What AppExchange offers (choose two) — `Answer: B, D`
**Verdict: CORRECT-CAVEAT.**
**Consultants** and **industry solution templates** are right, and the rebuttals are correct: **Data Loader** is downloaded from **Setup**, not AppExchange.

✏️ *Tension with Q39 worth noting in class.* Q39 keys **"Components"** as an AppExchange offering; Q114 rejects **"Download **standard** Lightning components."** Both are right — AppExchange sells **third-party** components, while **standard** components ship with the platform. The single word *"standard"* is doing all the work. Make sure that word survives any edit, or the two questions will look contradictory.

### ⚠️ Q115 — Getting a field into the highlights panel — `Answer: C`
**Verdict: CORRECT-CAVEAT — but the stem names a field type that cannot be used.**

**The mechanism is right.** The Lightning **highlights panel is driven by the compact layout**, not the page layout, and options A and D are both built on the wrong assumption. The explanation states this correctly.

🚨 **But the stem says a custom *text area* field.** Salesforce documents that **compact layouts do not support text areas, long text areas, rich text areas or multi-select picklists.** As written, the requested change is not buildable. **Change the stem to a plain Text field** (or a picklist) and the question becomes clean. ✏️ Double space after `115.`

### Q116 — Update the parent Referral when a child field changes — `Answer: A`
**Verdict: CORRECT-OBSOLETE.**
The **logic** is sound — a child-to-parent update needs Process Builder or Flow. ⚠️ But **Process Builder is retired**; no new processes can be created. **Replace option A with "Flow Builder."**

✏️ *One more thing to tighten:* the stem calls Referral the *"parent object"* without saying whether it is a **master-detail** or a **lookup** parent. If it is master-detail, a **workflow field update (option B) would also work** — the explanation even concedes this. Specify **lookup** in the stem and option B becomes cleanly wrong.

### ❓ Q117 — Contact Hierarchy considerations — `Answer: C`
**Verdict: CORRECT-CAVEAT — with one option flagged for checking.**

**C is right and is the important fact:** the Contact Hierarchy **respects record-level sharing**, so a user sees only the contacts they already have access to. That also makes **B** cleanly false.

🚨 **Option D may be true.** It reads *"Customizing hierarchy columns changes the Recently Viewed Contacts list view."* Salesforce documents that **hierarchy columns are derived from the Recently Viewed list view**, so editing one edits the other. If so, this is a **two-answer question presented as single-answer**. Option **A**'s figure (3,000 contacts) should be checked at the same time. **Verify against *Salesforce Help: "Set Up Contact Hierarchy"* before using.** Third item in the review flagged for direct confirmation.

### Q118 — Require a loss reason only when Closed Lost — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Validation rule** — right for two independent reasons, both of which the explanation gives: the requirement is **conditional** (only at one stage), and **rich text / long text area fields cannot be marked required at all**, on the field definition *or* the page layout. That second point is a genuinely useful fact.

✏️ *One overstatement:* it says page-layout requirement *"can be easily bypassed."* More precisely, a page-layout-required field **is** enforced in the UI but **not** through the API or data loads. Say that instead — "easily bypassed" sounds like a user can click past it.

### Q119 — One-to-many with limited access to child records — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Master-detail** is right: the child has **no owner and no sharing of its own** — access is entirely inherited from the parent, which is what *"limited access to child records"* is pointing at. ✏️ The stem's phrasing is vague; *"where access to the child records should be controlled entirely by the parent"* would make the intent unmistakable. Note also that **B and C are not relationship types at all** — they are fields that *use* an existing relationship, which is the real distinction being tested.

### Q120 — Average stage duration for closed opportunities — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
The principle is right — **Salesforce already tracks this**, so building formula fields or snapshots is redundant. ✏️ *Check the name:* stage duration lives on the **Opportunity History** object and surfaces through the **Opportunity History** report type (and the standard *Opportunity Stage Duration / Stage History* reports, depending on the org). If your org does not show a report by that literal name, the answer will look wrong. Reword to *"use the standard Opportunity History report, which includes Stage Duration."*

### Q121 — New users cannot access the Account object — `Answer: A`
**Verdict: CORRECT.**
The cleanest statement of the layer model in either file: **profiles and permission sets decide whether you can touch the object at all**; OWD, role hierarchy and sharing rules only decide **which records** you see once you can. If a user cannot access the object *at all*, it is always object-level. Accurate and complete.

### Q122 — Where the Individual field appears — `Answer: B`
**Verdict: CORRECT.**
**Contact, Lead and Person Account** — the three objects that represent a **human being**, which is the memory hook the explanation correctly supplies. Data Protection and Privacy is a genuinely under-taught area, so this is a good question to keep.

### Q123 — Branding considerations (choose two) — `Answer: B, D`
**Verdict: CORRECT.**
Both true: **one active theme, org-wide**, and **Chatter external users always see the default Lightning blue theme**. ✅ **Consistency win:** option A here claims **150** custom themes and is correctly marked **false** — which agrees with **Topic 1 Q1170**, where **300** was correctly marked **true**. The two files agree. That is worth noting, because it is the first time a cross-file numeric claim has lined up without contradiction.

### Q124 — Send customers the top five troubleshooting tips — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
**Knowledge Articles** is right — it is the only option that **stores and curates content**; the other three only *move* content around. ✏️ Worth completing the picture: in a real build you would pair Knowledge with **Email-to-Case + Knowledge article attachment**, or with **case deflection** on an Experience Cloud site. Knowledge alone does not "respond to the customer"; it supplies what the response contains.

### Q125 — Stop users selecting more than one shoe style (choose two) — `Answer: A, B`
**Verdict: CORRECT-CAVEAT.**
**Change the field type** and **back up the data first** — both right, and the rebuttal of C is correct: there is **no "Choose only one value" checkbox**.

✏️ *Overstated consequence:* the explanation says the conversion *"causes Salesforce to **clear out** existing values."* Salesforce's documented behaviour is that converting a multi-select picklist to a single-select picklist **keeps only the first selected value** and discards the rest. The advice to back up is right either way, but state the behaviour accurately.

### Q126 — Three password policies (choose three) — `Answer: A, C, D`
**Verdict: CORRECT-CAVEAT.**
The three letters are right for the stem, which asks specifically about policies that shape **how users choose a password**: complexity, prohibited values and expiry all do; **E** is invented.

🚨 **But the reason given for excluding B is wrong.** The explanation says *"Maximum invalid login attempts belongs to **lock-out settings rather than password policies**."* **Maximum Invalid Login Attempts is a field on the Password Policies page.** The correct reason to exclude it is that it governs **lockout after failure**, not the **choice** of password. Fix the sentence — this is the **third** password-policy error in Topic 2 (see also Q35 and Q85). Logged as **C30**.

### Q127 — Total sales against goal as a single value — `Answer: A`
**Verdict: CORRECT.**
**Gauge** — the only component built to show **one value against a target range**. The three rebuttals are each precise about what the alternative *does* show (proportions, rows, grouped comparisons). 🚨 *Duplicate:* **Q136 is this question again, word for word.** Logged as **D46**.

### Q128 — Three different case auto-responses by priority — `Answer: D`
**Verdict: CORRECT.**
Excellent question, and the explanation supplies the governing fact: **only one auto-response rule can be active per object at a time**, but that rule can hold **many rule entries**, each with its own criteria and template. That single fact is what makes D right and B wrong. ✏️ Double space after `128.`

### Q129 — Restoring a field removed from a page layout (choose two) — `Answer: B, C`
**Verdict: CORRECT-CAVEAT.**
**B is unambiguous and is the real answer:** removing a field from a layout does not delete it, so it is still sitting in the palette — drag it back. The rebuttal of A is correct and important: **layout changes never go to the Recycle Bin**.

✏️ *C is a stretch and D is dismissed with a hedge.* "Restore the original page layout from a sandbox" really means *redeploy the layout via a change set* — real, but heavy-handed for a field you can drag back in two seconds. And the rebuttal of D concedes *"unless that layout already had it,"* which is F13-style hedging. The genuinely useful second answer is missing from the option list entirely: **if you have not saved yet, just cancel.** Consider rewriting C and D.

### Q130 — Manager gets an error approving a record — `Answer: D`
**Verdict: CORRECT.**
**An inactive or missing next approver** is the standard cause, and the explanation correctly separates *field visibility* problems (which break saves, not approvals) from *approver resolution* problems. The rebuttal of C is sharp: a delegated approver is a **configuration change**, not a **troubleshooting review**, which is what the stem asked for.

### Q131 — Guided expense report with routing and authorisation (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
The stem has three verbs — *simplify submissions* (**Flow**), *routing* and *authorisations* (**Approval Process**) — and the answer covers all three. The rebuttal of D is fair and honest: a quick action **launches** a flow but is not itself the solution.

### Q132 — Route cases by account tier to two queues — `Answer: C`
**Verdict: CORRECT.**
**Assignment Rules** — they run on creation and can set the owner to a **queue**. The explanation correctly identifies **"Case Rules" (B) as a fabricated term**. 🚨 *Cross-file duplicate:* **word-for-word Topic 1 Block-C #4**, which has no answer. Logged as **D47** — **keep this one.**

### Q133 — Create a renewal opportunity on close (choose two) — `Answer: B, D`
**Verdict: CORRECT-OBSOLETE.**
The reasoning is right — **only record-triggered automation can create records**, which is why workflow rules (C) and approval processes (A) are excluded. ⚠️ But **Process Builder is retired**, so on a current exam this is a **single-answer** question with only **Flow Builder** valid. **Replace option D** (for example with *"Record-Triggered Flow with a Scheduled Path"*) or convert the item to single-answer.

🚨 **Process Builder is now keyed as a correct answer in three questions** — **Q99**, **Q116** and **Q133** — plus it appears in Q109's stem. All four need the same fix.

### Q134 — Opening up Private opportunities (choose two) — `Answer: B, D`
**Verdict: CORRECT.**
**Role hierarchy** (vertical) and **sharing rules** (horizontal) — and the explanation uses exactly that vertical/horizontal framing, which is the clearest way to teach it. The rebuttal of **A** is precise and often missed: a **sharing set** is an **Experience Cloud / external user** mechanism, not an internal one.

### Q135 — Stamp today's date when status becomes Audited — `Answer: D`
**Verdict: CORRECT.**
**Flow Builder**, and the rebuttal of A is the important one: a **formula field recalculates forever**, so it can never hold a *point-in-time* stamp. That distinction — *calculated vs stored* — is the whole point of the question and the explanation nails it.

---

## Batch 22 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 19 | Q103, Q104, Q105, Q106, Q108, Q110, Q111, Q112, Q113, Q121, Q122, Q123, Q127, Q128, Q130, Q131, Q132, Q134, Q135 |
| ⚠️ CORRECT-CAVEAT | 14 | Q101, Q102, Q107, Q109, Q114, Q115, Q117, Q118, Q119, Q120, Q124, Q125, Q126, Q129 |
| 🕰️ CORRECT-OBSOLETE | 2 | Q116, Q133 (Process Builder retired) |
| ❓ DISPUTED | 0 | — |
| ❌ INCORRECT | **0** | — |

**✅ No wrong answers — two clean batches in a row.** Every keyed letter in Q101–Q135 is defensible. The work here is all about **stems and explanations**, not keys.

**🚨 Process Builder is keyed as a correct answer three times** — **Q99, Q116, Q133** — and appears in **Q109's** stem. Salesforce retired it; no new processes can be created. All four need Flow Builder substituted, and **Q133 becomes a single-answer question** once Process Builder is removed.

**🚨 Q109 is malformed.** The stem asks a single-answer question with no *"(Choose two.)"*, then gives two letters. Any quiz tool marks a correct answer wrong.

**🚨 Q115 names a field type that cannot be used.** The stem asks to put a **text area** field in the highlights panel. **Compact layouts do not support text areas.** The answer (compact layout) is conceptually right; the stem must change to a plain Text field.

**❓ Q117 flagged for verification.** Option D — *"customizing hierarchy columns changes the Recently Viewed Contacts list view"* — may be **true**, which would make this a two-answer question keyed as single-answer. Third item in the whole review flagged for direct confirmation.

**A third password-policy error.** **Q126** claims *Maximum Invalid Login Attempts* is not a password policy. It is a field on the Password Policies page. With **Q35** and **Q85**, that is three separate wrong statements about the same Setup page. Logged as **C30**.

**Four more duplicates:** **D44** Q104 = Topic 1 Block-A Q2; **D45** Q108 ≈ Q75; **D46** Q127 = Q136 (word for word, nine questions apart); **D47** Q132 = Topic 1 Block-C #4.

**✅ One genuine consistency win.** **Q123** marks *"150 custom themes"* **false**, and **Topic 1 Q1170** marks *"300 custom themes"* **true**. The two files agree — the first time a cross-file numeric claim has lined up cleanly.

---

# BATCH 23 — File: `Admin-201 Topic 2.md`, Questions 136–170

> 🔴 **The single most important structural finding of the whole review.**
>
> **Topic 2 starts repeating itself at Q136.** Of the 35 questions in this batch, **14 are duplicates of questions already answered earlier in the same file** — that is **40%**. Several are word-for-word, including all four options.
>
> Worse, **two of the repeats carry a *different answer* from their original**, so the file now contradicts itself on two separate facts. Details in **C31** and **C32**.
>
> This changes the recommendation for the whole file: **Topic 2 is not 232 unique questions.** A de-duplication pass is needed before anything else.

---

### 🔁 Q136 — Single value against a goal — `Answer: A`
**Verdict: CORRECT — but it is Q127 again, word for word.** Gauge is right for both. See **D46**. Delete one.

### Q137 — Confusing screen-flow errors — `Answer: B`
**Verdict: CORRECT.**
A **fault connector** routing to a custom error screen is exactly right, and the explanation is unusually principled: it rejects **C** because *"hiding error notifications doesn't solve the underlying UX problem"* and **D** because *"validation rules ensure data integrity and should not be blindly removed."* Both rebuttals teach judgement rather than just facts. One of the better-written questions in the file.

### 🔁 Q138 — Updating from a data warehouse — `Answer: C`
**Verdict: CORRECT — but this is the *third* copy of the External ID question** (Q75, Q108, Q138). All three keyed C, all three correct. See **D45**. Keep **one**.

### Q139 — Importing 300 accounts with contacts — `Answer: C`
**Verdict: CORRECT.**
**Data Import Wizard**, and for the right reason: it is the only tool that imports **Accounts and Contacts together in a single pass**. The limits quoted are accurate (**50,000** for the Wizard, **5 million** for Data Loader). The trap here is volume — 300 records feels "big" but sits comfortably inside the Wizard's range, so the deciding factor is the **related-object** requirement, not the count. Well built.

### Q140 — Changing master-detail to lookup — `Answer: C`
**Verdict: CORRECT.**
**Roll-up summary fields on the master block the conversion**, because lookups cannot support them — you must delete the roll-ups first. Clean, accurate, and a genuinely practical gotcha.

### Q141 — Manager needs to view a report on private records (choose three) — `Answer: A, B, E`
**Verdict: CORRECT-CAVEAT.**
The three-layer answer is right and well explained: **Role Hierarchy** grants the *record* access, **Folder Access** grants the *report* access, and a report type supplies the *structure*. The rebuttals are correct — FLS is field-level and a subscription only schedules delivery.

✏️ *One soft option:* a custom object with **Allow Reports** enabled automatically gets a **standard** report type, so a **Custom** Report Type is not strictly required unless the report needs a non-default object combination. A is the best available third answer, but the stem should say *"a report combining Shoe records with their related records"* to make it necessary. Double space after `141.`

### Q142 — Trying out an AppExchange app (choose two) — `Answer: B, C`
**Verdict: CORRECT.**
**Check edition compatibility** then **install in a sandbox** — the correct order and the correct caution. The rebuttals are accurate and useful: a **Test Drive** is a read-only demo org with sample data, and a **Trailhead Playground** has none of your configuration, so neither proves the app *"meets its needs."*

### Q143 — Case policy: acknowledge, assign, escalate — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
B is the best available answer. ✏️ **But the option set does not cover the stem.** The stem names **three** requirements — acknowledge, **assign to the appropriate agents**, and escalate — and the second one needs **assignment rules or queues**, which appear in no correct option.

The explanation openly admits this: *"Queues or assignment rules handle assignment, **but looking at the options**, Support Processes manage the lifecycle stages…"* That phrase is drafting notes left in the published answer (defect **F13**), and it tells the student the question is broken. Either **add assignment rules to option B** or **remove the assignment requirement from the stem**.

### Q144 — Read/Create/Edit but never Delete — `Answer: A`
**Verdict: CORRECT.**
The governing principle is stated perfectly: **permission sets are additive only — they cannot take a permission away.** So if Delete must be absent, it has to be absent from the **profile**. That single sentence is the whole question, and it is one of the most commonly misunderstood points on the exam.

### Q145 — Changing Auto Number to Text — `Answer: D`
**Verdict: CORRECT.**
**Existing values remain unchanged.** The explanation adds the detail that makes it useful in practice: **new records stop auto-numbering**, so the field becomes manual from that point on. Accurate and complete.

### ❌ Q146 — Sharing records in Chatter groups (choose two) — `Answer: A, D`
**Verdict: INCORRECT. The correct answer is B and D.**

**D is right.** The **Groups related list** must be added to the object's page layout so users can see which groups a record belongs to.

**🚨 But A is wrong and B is right.** *Salesforce Help — "Add Records to Chatter Groups"* gives exactly two setup steps:
1. **Add the *Add Record* action to the group publisher layout.**
2. **Add the *Groups* related list to the object's page layout.**

**The explanation asserts the opposite of the documentation.** It claims *"the 'Add Record' action **appears automatically** when record sharing is enabled on a group."* It does not — adding that action to the group publisher layout is a required, manual admin step, and it is the single thing people forget.

**Why A fails:** *"An administrator needs to create a group to enable record sharing"* is not a consideration at all — **any user can create a Chatter group**; no administrator involvement is required, and creating a group does not by itself enable record sharing.

### Q147 — Budget must be filled before Lead Status = Qualified — `Answer: D`
**Verdict: CORRECT.**
**Validation rule**, because the requirement is **conditional** — and the explanation says exactly why the alternative fails: *"making a field globally required… enforces it everywhere rather than specifically targeting the transition."* That conditional-vs-universal distinction is the transferable lesson.

### 🔁 Q148 — Reproducing a user's error — `Answer: B`
**Verdict: CORRECT — but it is Q13 again.** See **D48**.
✏️ This version adds one thing Q13 lacks and it is worth keeping: option **D** (*"Ask the user for their password"*) lets the explanation state that **asking for a password violates security compliance**. If you delete one, **keep Q148** for that option alone.

### 🔁 Q149 — Shipments must survive Account deletion — `Answer: D`
**Verdict: CORRECT — but it is Q90 again, word for word.** See **D49**.
⚠️ Note that **Q70 still contradicts both of them** — see **C28**. The file now teaches the correct lookup/master-detail rule **twice** and the incorrect version **once**.

### Q150 — Pages you can build in Lightning App Builder (choose two) — `Answer: A, B`
**Verdict: CORRECT-CAVEAT.**
**App page** and **Record page** are right, and both work in the mobile app. ✏️ *Incomplete rebuttal:* the explanation says *"'User page' and 'Dashboard page' are not configurable page types."* True — but it should also say that App Builder **does** build **Home pages** and **Email Application panes**; they were simply left off the option list. Students who know about Home pages will second-guess a rebuttal that implies only two types exist.

### Q151 — Templated mortgage-calculator process in 30 days, no budget — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Bolt Solutions** is the intended answer — packaged, industry-specific templates bundling flows, pages and business processes. The rebuttals correctly separate **Lightning Data** (third-party data enrichment) from templates.

✏️ *Legacy branding:* "Lightning Bolt" is old terminology. Current AppExchange listings are **Experience Cloud templates** and **Apps**, and Bolt Solutions are no longer actively marketed. The answer is right for the exam but the term will not match what a student sees on AppExchange today.

### 🔁 Q152 — Reps see all cases on dashboards — `Answer: D`
**Verdict: CORRECT — third copy** (Q24, Q92, Q152). Q92 and Q152 are identical and both correct; **Q24 is the broken one** with *"Dynamic Dashboards"* as option D. See **D42**. ✏️ This copy has an **empty `Explanation:` line** followed by two blank lines before the text.

### 🔁 Q153 — Different Web-to-Lead replies by Industry — `Answer: C`
**Verdict: CORRECT — but it is Q84 again, word for word.** See **D50**.

### 🔁 Q154 — Update the Account when a CEO contact is created — `Answer: D`
**Verdict: CORRECT-OBSOLETE — and it is Q99 again, word for word.** Same retired-Process-Builder problem. See **D51**. **Process Builder is now keyed correct in four questions** (Q99, Q116, Q133, Q154).

### ❌ Q155 — Nobody can access a new custom report type (choose two) — `Answer: A, D`
**Verdict: INCORRECT. The correct answer is C and D — and this question directly contradicts Q101.**

**This is Q101, word for word, with a different key.**

| | Q101 | Q155 |
|---|---|---|
| Keyed answer | **C, D** | **A, D** |
| Option C ("in development") | keyed **correct** | declared **incorrect** |

**Q101 is right.** *Salesforce Help — "Create a Custom Report Type":* while the deployment status is **In Development**, the report type and any reports built on it are **hidden from all users except those with the "Manage Custom Report Types" permission**. That is precisely the symptom in the stem — the administrator can see the report, nobody else can.

**Q155's explanation states the opposite as fact:** *"'in development' is not a status that prevents users from running a fully built report."* That sentence is simply wrong, and it is the reason the key drifted to A.

**Option A is also the weaker choice.** *"The user's profile is missing **View** access"* does not name a real permission — running reports requires **Run Reports**, and seeing the data requires object access. It is vague where C is specific.

**Action: delete Q155 and keep Q101.** Logged as **D57** and contradiction **C31**.

### 🔁 Q156 — Self-serve case creation — `Answer: A, C`
**Verdict: CORRECT — but it is Q95 again, word for word.** See **D52**.

### Q157 — Reminder email after a warranty is renewed — `Answer: C`
**Verdict: CORRECT.**
**The record no longer meets the criteria, so the scheduled action is dropped.** This is accurate: before a **scheduled path** runs, Salesforce re-checks the record against the flow's entry conditions and cancels the path if it no longer qualifies. A good, realistic scenario. *(Same underlying behaviour as Q31, but Q31 is written around Process Builder and this one around Flow — so **keep Q157 and retire Q31**, which solves Q31's obsolescence problem at the same time.)*

### 🔁 Q158 — Three password policies — `Answer: A, C, D`
**Verdict: CORRECT — and this copy fixes the error in Q126.**

This is **Q126 again**, but the explanations differ in an important way:
- **Q126** excluded option B with a **false** reason: *"Maximum invalid login attempts belongs to lock-out settings **rather than password policies**."*
- **Q158** excludes it with the **correct** reason: *"Option B deals with **account lockouts due to failed logins rather than encouraging password choice**."*

✅ **Keep Q158, delete Q126.** This also closes **C30**. See **D53**.

### 🔁 Q159 — Blocking access from outside the network — `Answer: B, C`
**Verdict: CORRECT — but it is Q98 again, word for word.** See **D54**.

### Q160 — Fiscal year starting 1 February — `Answer: C`
**Verdict: CORRECT.**
The rule is stated exactly right: **12 normal months starting in a non-January month = Standard fiscal year**; **Custom** is only for unusual period structures such as **4-4-5**. Naming 4-4-5 explicitly is what makes this explanation genuinely useful. Worth adding one warning for students: **enabling custom fiscal years is irreversible.**

### ⚠️ Q161 — New Campaign Member Status value (choose two) — `Answer: C, D`
**Verdict: CORRECT-CAVEAT — option C names the wrong field.**

**D is unambiguous:** Campaign Member Status values are maintained **per campaign** on the **Campaign Member Statuses related list**, which is the answer the stem is really after (*"for the upsell promotional campaign"*).

🚨 **Option C says "Campaign **Status**"**, which is a different field entirely — the Campaign object's own Status (Planned / In Progress / Completed / Aborted). It should read **"Campaign **Member** Status."** As printed, option C is wrong and the question has only one correct answer. Almost certainly a typo in the source (defect **F15**), but it must be fixed.

### Q162 — A new field is not visible to a user (choose two) — `Answer: A, C`
**Verdict: CORRECT.**
**Field-level security** and **page layout** — the two-gate model, and the right one to teach: a field must be **permitted** (FLS) *and* **placed** (layout). The rebuttal of D is correct: OWDs govern *records*, not *fields*. ✏️ Typo in the explanation — **"ODWs"** for **"OWDs"**.

### Q163 — Expense reports sent to an external HR system (choose two) — `Answer: B, D`
**Verdict: CORRECT-CAVEAT.**
**Approval Process** for the review chain and **Outbound Message** for the system-to-system handoff — correct, and the pairing is neat because an outbound message can be attached as an **approval action**.

✏️ *Legacy technology:* outbound messages are **SOAP-based** and are effectively maintenance-mode. The modern build is an **HTTP Callout / External Service invoked from Flow**. The answer is right for the exam; add a footnote so students are not surprised in a real project.

### 🟢 Q164 — Diagnosing a flow launched by a process — `Answer: D`
**Verdict: CORRECT — and this question fixes the malformed Q109.**

**This is Q109, word for word — but with one answer instead of two, and a reason for it.** Q109 keyed **A and D** on a stem with **no "(Choose two.)"**. Q164 keys **D only** and explains why A is excluded: the flow runs in a **background trigger context**, so Flow Builder's interactive debug canvas cannot reproduce the failing run.

✅ **Keep Q164, delete Q109.** That removes the malformed-question defect at the same time. Logged as **D58** and **C32**.

⚠️ Both copies still say the flow is *"launched by a **process**"* — Process Builder is retired. Change to *"launched by a record-triggered flow."*

### Q165 — Only the committee should post — `Answer: B`
**Verdict: CORRECT.**
**Chatter Broadcast Group** — owners and managers post, everyone else reads and comments. The rebuttals are accurate: **Unlisted** controls *who can find the group*, not who can post; **Streams** combine feeds; **Recommendations** suggest groups. A precise, well-built question. ✏️ Double space after `165.` and a `Show Suggested Answer` artefact.

### Q166 — Amount required for reps but not managers — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**Validation rule with an exemption** is right, and the rebuttal of **C** is the important one: *granting the Administrator profile to solve a validation problem* is a serious over-permission and exactly the instinct the question is testing against.

✏️ *Better practice worth teaching:* the explanation suggests checking the **profile** inside the formula. Hard-coding profile names or IDs is brittle. The maintainable pattern is a **custom permission** assigned by permission set, tested with `$Permission.Bypass_Amount_Rule`. Same result, no rework when profiles change.

### 🔁❓ Q167 — Stage-gating opportunity fields — `Answer: B, D, E`
**Verdict: DISPUTED — duplicate of Q78, and its explanation is even more broken than Q78's.**

The key says **B, D, E**. The explanation's very first sentence says *"Options **A, B, and D** provide stage-specific guidance and enforcement"* — naming **A**, which is not in the key, and omitting **E**, which is. It then discusses **Flows** at length, although flows are option A.

Q78's explanation argued for **A and C**. Q167's argues for **A, B and D**. **Neither matches the key, and they do not match each other.** The letters B, D, E remain defensible, but both explanations must be rewritten from scratch. See **D55**.

### Q168 — Sharing dashboard components in Chatter — `Answer: B`
**Verdict: CORRECT.**
**Dashboard feed tracking** must be enabled before a component can be posted. ✅ *Consistency check passed:* **Topic 1 Q1167** keys the same fact (feed tracking + a Chatter group) and the two agree. The rebuttal of **D** is sharp — *View Dashboard As* controls **data visibility**, not **social sharing** — which is a distinction students routinely blur.

### 🔁 Q169 — Distributing a screen flow to Cases — `Answer: A`
**Verdict: CORRECT — but it is Q103 again, word for word.** See **D56**.
✏️ The two explanations differ slightly and **this one is weaker**: it says page layouts *"support visualforce or custom buttons/links,"* which is true but beside the point. **Q103's** explanation ("layouts carry fields and related lists; Lightning pages carry components") is the better teaching. **Keep Q103.**

### Q170 — Expected Revenue shows wrong values — `Answer: D`
**Verdict: CORRECT.**
**Expected Revenue = Amount × Probability**, and Probability is driven by the Stage — so fixing the stage's probability fixes the figure. Clean and accurate.

💡 **Useful cross-reference for Q40.** Q40 was marked **INCORRECT** in Batch 20 because it treated Probability as *not* user-editable. Q170 is fully consistent with that correction: Probability **defaults from the Stage** (Q170's point) **and is editable on the record** (Q40's point). Both facts are true; only Q40's key was wrong. Teaching them side by side would be stronger than either alone.

---

## Batch 23 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 24 | Q136, Q137, Q138, Q139, Q140, Q142, Q144, Q145, Q147, Q148, Q149, Q152, Q153, Q156, Q157, Q158, Q159, Q160, Q162, Q164, Q165, Q168, Q169, Q170 |
| ⚠️ CORRECT-CAVEAT | 7 | Q141, Q143, Q150, Q151, Q161, Q163, Q166 |
| 🕰️ CORRECT-OBSOLETE | 1 | Q154 (Process Builder retired) |
| ❓ DISPUTED | 1 | Q167 — explanation names different letters than the key |
| ❌ INCORRECT | **2** | **Q146** (correct is **B, D**), **Q155** (correct is **C, D**) |

### 🔴 The headline: Topic 2 begins repeating itself at Q136

**14 of these 35 questions — 40% — are duplicates of questions already answered earlier in the same file:**

| Repeat | Original | Same answer? |
|---|---|---|
| Q136 | Q127 | ✅ yes |
| Q138 | Q75 / Q108 | ✅ yes (third copy) |
| Q148 | Q13 | ✅ yes |
| Q149 | Q90 | ✅ yes |
| Q152 | Q24 / Q92 | ✅ yes (third copy) |
| Q153 | Q84 | ✅ yes |
| Q154 | Q99 | ✅ yes |
| **Q155** | **Q101** | ❌ **NO — contradicts it** |
| Q156 | Q95 | ✅ yes |
| Q158 | Q126 | ✅ yes (better explanation) |
| Q159 | Q98 | ✅ yes |
| **Q164** | **Q109** | ❌ **NO — contradicts it** |
| Q167 | Q78 | ✅ yes (worse explanation) |
| Q169 | Q103 | ✅ yes (worse explanation) |

**This changes the plan for the file.** Topic 2 is not 232 unique questions. A **de-duplication pass must come before any other cleanup**, otherwise every formatting fix has to be applied twice.

**Two of the repeats disagree with their originals:**
- **Q155 vs Q101** — does *In Development* status block users from a custom report type? **Yes, it does.** Q101 is right; delete Q155. (**C31**)
- **Q164 vs Q109** — one answer or two? **Q164's single answer is correct and better argued.** Delete Q109, which is also malformed. (**C32**)

**Two of the repeats are *better* than their originals — keep the newer one:**
- **Q158** gives the correct reason for excluding *Maximum Invalid Login Attempts*, where **Q126** gives a false one. Keeping Q158 closes **C30**.
- **Q148** adds the *"ask the user for their password"* option, which lets the explanation make a security-compliance point that **Q13** cannot.

**Two wrong answers:**
- **Q146** — keyed A, D; correct is **B, D**. Salesforce requires the **Add Record action on the group publisher layout**; it does **not** appear automatically, and no administrator is needed to create a Chatter group.
- **Q155** — keyed A, D; correct is **C, D**, as above.

**Process Builder is now keyed correct in four questions** — Q99, Q116, Q133 and Q154 — and named in two stems (Q109, Q164). All six need the same fix.

---

# BATCH 24 — File: `Admin-201 Topic 2.md`, Questions 171–205

> 🔁 **The duplication continues — but with a silver lining.** Eight more repeats in this batch. However, **three of the repeats are *fixed* versions of questions I flagged as broken earlier** (Q179, Q190, Q193). The later copies are better built than the originals, which makes the de-duplication decision easy: **keep the later one.**

### Q171 — Prepopulated subjects for Tasks and Events — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
**Predefined field values on the New Task and New Event global actions** is right. The word that settles it is *"**prepopulated**"* — the requirement is a **default**, not a menu, and predefined action values are the only feature that supplies one.

✏️ *The explanation trails off:* *"Standard subject picklists are shared across activities or depend on global action layouts depending on configuration context."* That sentence says nothing usable. Replace it with the real rebuttal of option A: adding picklist values gives **every** user a longer menu, but still leaves the field **blank** on a new record. Defect **F13**.

### Q172 — Enterprise pipeline dashboard without changing sharing — `Answer: C`
**Verdict: CORRECT.**
**Set the running user to someone who can see all opportunities.** The constraint *"without changing any sharing settings"* is what makes this the answer — the running user is the one lever that widens a dashboard's data without touching the security model. This is the constructive twin of the Q24/Q92/Q152 family: those ask *what went wrong*, this asks *how to do it on purpose*. **Keep it** — it is not a duplicate.

### Q173 — Apply the opportunity discount to its products — `Answer: C`
**Verdict: CORRECT.**
**Flow Builder** — and the rebuttals are all correct and well chosen: **formulas are read-only**, approvals are for sign-off, and a **macro is user-driven**, which fails the stem's "automate this time-consuming task." That macro-vs-automation distinction is a genuinely useful one.

### 🔁 Q174 — Multi-select picklist → picklist — `Answer: A, B`
**Verdict: CORRECT — but it is Q125 again, word for word.** See **D59**. ✏️ Both copies repeat the same overstatement: the conversion **keeps the first selected value**, it does not *"clear out"* everything. Fix whichever one you keep. Double space after `174.`

### 🔁 Q175 — Credit team members by level of effort — `Answer: D`
**Verdict: CORRECT — but it is Q107 again, word for word.** See **D60**. Neither copy mentions **overlay splits**, which is the split type the stem actually describes. Add that to the survivor.

### Q176 — What a validation rule needs (choose two) — `Answer: B, C`
**Verdict: CORRECT-CAVEAT.**
**Error condition formula** and **error message location** are the two required settings, and the explanation correctly notes that a validation rule always evaluates to **Boolean**, so there is no return type to choose.

✏️ *Wrong word in the stem:* it asks *"Which two **functions**…"*. These are **settings** or **components**, not functions — and "function" has a specific meaning in Salesforce formulas (`ISBLANK`, `ISPICKVAL`), so the word actively misleads. Change to *"Which two settings must the administrator define?"*

### 🔁 Q177 — Notify a manager about cases awaiting response — `Answer: C`
**Verdict: CORRECT — sixth copy of the escalation-rule question.** T1 Q1163, T1 Q1165, T2 Q65, Q73, Q82, Q177. See **D33**.

### ⚠️ Q178 — Forecast "based on all of the following EXCEPT" — `Answer: D`
**Verdict: CORRECT-CAVEAT — the answer holds, the question does not.**

**D is defensible.** Collaborative Forecasting supports forecast types built on **Opportunity Revenue/Quantity, Product Family, Opportunity Splits, Overlay Splits, custom currency fields and Territory**, and is always viewed across a **date range** of periods. *"Sales Team"* is not a forecast type.

🚨 **But the question is badly built in three ways:**
1. **The stem is ungrammatical** — *"Is possible to view a forecast based on all of the following EXCEPT:"* is missing its subject (defect **F15**).
2. **It is a negative "EXCEPT" question**, which appears nowhere else in either file — a lone style outlier that will catch students out for the wrong reason.
3. **It has no scenario.** Every other question in Topic 2 is a business situation; this is bare trivia.

**Recommendation: rewrite as a positive, scenario-based item** — *"Which three can a forecast be based on?"*

### 🟢 Q179 — Quick action in the Salesforce mobile app — `Answer: C`
**Verdict: CORRECT — and this copy fixes Q60.**

Same question as **Q60**, same answer. But **Q60's answer line reads `Certified Correct Answer: C. Add the Salesforce Mobile…`** — a label used nowhere else in either file, plus the full option text restated — and its timestamp begins with a stray `#t`. **Q179 is clean.** ✅ **Keep Q179, delete Q60.** See **D61**.

### ❓ Q180 — Consistent Category values on Accounts and Cases (choose two) — `Answer: B, D`
**Verdict: DISPUTED — option B cannot do what the stem asks, and the feature that can is not on the list.**

**D is right.** A **global picklist (Picklist Value Set)** is exactly the feature that keeps one set of values consistent across two objects.

🚨 **But B is wrong.** A **dependent picklist** filters values based on **another picklist on the same record**. It has **no relationship to record types whatsoever** — and *"values respective to record types"* is the second half of the requirement.

**The explanation gives it away.** It says *"dependent picklists **or record type associations** help control which specific values appear."* **Record types are not an option.** The explanation is reaching for a feature the question never offered.

**The better pair is C and D:** create the Category field as a **custom picklist** on both objects (C), built on a **global value set** (D) — and then use **record types** to slice the values, which is the step the option list is missing.

**Recommendation: re-key to C, D and add record types to the stem or the options.**

### Q181 — Give several users access to a new custom object (choose two) — `Answer: A, D`
**Verdict: CORRECT-CAVEAT.**
**Create a permission set** and **assign it (via a permission set group)** is right, and the rebuttals are sound: **OWDs** control record access, not object access, and **manual sharing** is per-record and does not scale.

✏️ *The two options are really one action in two steps* — build it, then assign it — which makes the "choose two" close to free. The same weakness as Q10. Consider rewriting A as a genuine alternative.

### 🔁 Q182 — Automating the case-closed email — `Answer: B, C`
**Verdict: CORRECT — but it is Q79 again, word for word.** See **D62**. Both copies need the Lightning footnote about the **Close Case action layout**. ✏️ `Show Suggested Answer` residue.

### 🕰️ Q183 — Welcome tasks and email on Closed Won — `Answer: C`
**Verdict: CORRECT-OBSOLETE — and Q190 proves the point.**

The reasoning is right: only record-triggered automation can create tasks and send emails on a stage change. ⚠️ But the keyed answer is **Process Builder**, which is **retired**, and the explanation hedges immediately: *"Process Builder **(or Flow Builder)**…"*

💡 **Look at Q190, seven questions later.** Near-identical requirement — *"when an opportunity closes, automatically create a renewal opportunity"* — and because **Process Builder is not among its options**, the key correctly lands on **Flow Builder**. The two questions show the same file answering the same kind of question two different ways depending purely on what is in the option list. Logged as **C33**.

**Fix: replace option C with Flow Builder.** This is the **fifth** Process-Builder-keyed question (Q99, Q116, Q133, Q154, Q183).

### Q184 — Finding and fixing session vulnerabilities — `Answer: B`
**Verdict: CORRECT.**
**Security Health Check** — and the key detail is that it does not merely *report*, it offers a **Fix Risks** action, which is what the stem's *"identify **and fix**"* is pointing at. ✏️ *Near-duplicate of Q71*, which asks for a security **summary**. The two angles are different enough to keep both, but they are the same feature. See **D63**.

### Q185 — Hiding a tab while keeping record access — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Tab Settings → Tab Hidden** is right, and the explanation states the important consequence precisely: the records remain reachable through **search, reports and direct URLs**, because tab visibility is **not** a security control. That is the same lesson as Q69, from the opposite direction — a nice pairing.

🚨 *The stem is garbled:* *"makes a tab hidden in the All App Launcher **or visible in any app**"* reverses its own meaning mid-sentence. It should read *"hidden from the App Launcher and from every app's navigation bar."* Defect **F15**.

### Q186 — Objects customisable in the Stage Setup Flow (choose two) — `Answer: A, C`
**Verdict: CORRECT-CAVEAT.**
**Leads** (Status) and **Opportunities** (Stage) is the standard answer for the guided Stage Setup flow.

✏️ *Two problems worth noting.* First, the explanation is the thinnest in the file — one sentence that hedges with *"primarily"* and does not rebut Campaigns or Campaign Members at all. Second, this is a **niche, lightly documented setup convenience** with low exam value. If the bank needs trimming, this is a candidate for deletion rather than repair.

### Q187 — Cannot add a new user — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**Usernames are globally unique across every Salesforce org on the planet** — not just your own. That is the fact, it is correct, and it is one of the most frequently misunderstood points in user administration. The explanation states it well.

✏️ *The option text is ungrammatical:* *"The username is already in use another organization"* is missing **"in"**. Defect **F15**.

### Q188 — Account creation has too many fields — `Answer: A`
**Verdict: CORRECT-CAVEAT.**
**Flow Builder** — a screen flow that asks for fields a few at a time. Correct among the options given, all of which are automation tools.

✏️ *Worth telling students the modern answer:* for *"the page feels cluttered"*, the 2026 solution is **Dynamic Forms** — field-level visibility rules on the record page, no flow required. It is not an option here because the stem asks for an *automation* tool, but a student who knows Dynamic Forms will find this question frustrating unless the footnote is added.

### Q189 — Six fixed sales teams collaborating on accounts — `Answer: A`
**Verdict: CORRECT.**
**Default Account Teams** — exactly right, because the stem says the teams *"always consist of the same"* three people, which is the definition of a default team. The rebuttals are strong: **B** is about *opportunity* revenue splits, **C** misuses queues (accounts are not queue-owned work), and **D** is the manual anti-pattern the question exists to reject.

### 🟢🔁 Q190 — Create a renewal opportunity on close — `Answer: D`
**Verdict: CORRECT — and this copy fixes Q133.**

**Q133** asked the same thing but offered **Process Builder** as an option and keyed it **B, D** (Flow *and* Process Builder). **Q190 does not offer Process Builder**, so it keys cleanly to **Flow Builder** alone. ✅ **Keep Q190, delete Q133.** See **D64** and **C33**.

### Q191 — Reviewing recent configuration changes — `Answer: C`
**Verdict: CORRECT.**
**Setup Audit Trail.** The option set is well chosen because each distractor is a *real* log for a *different* thing — **Debug Logs** for runtime, **Field History Tracking** for data changes, **Critical/Release Updates** for platform changes. Knowing which log answers which question is a genuine admin skill.

### 🔁 Q192 — Campaign ROI by month and series — `Answer: C`
**Verdict: CORRECT — but it is Topic 1 Block-A Question 3, word for word.** **Campaign Hierarchy** with monthly children rolling into a parent. See **D65** — **keep this one**, since the Topic 1 copy sits in the malformed appended block.

### 🟢 Q193 — Two brandable areas of the Salesforce mobile app — `Answer: C, D`
**Verdict: CORRECT — and this copy fixes Topic 1 Block-C #5.**

In **Batch 18** I flagged Block-C #5 as **unfair as written**, because it offered *"Header background color"* and *"App header color"* as two separate options meaning the same thing. **Q193 has a clean option set** — Record background colour / Popups header colour / Loading page logo / Header background colour — and keys correctly to **loading page logo + header background colour**.

✅ **Keep Q193 and delete Topic 1 Block-C #5.** See **D66**.

### Q194 — Split list views for an external object — `Answer: C`
**Verdict: CORRECT.**
**The object's tab must be in the app's navigation bar** before split view is available — correct and a genuinely practical gotcha.

✏️ *Note the shared broken option.* Option **B** here — *"Split views are only available on standard objects"* — is the same **statement-not-an-action** option flagged at **Q77**. The two questions share three of four options but have different stems and different correct answers, so they are **not** duplicates. Fix the malformed option in **both**.

### Q195 — Inspection findings form on an Experience Cloud site — `Answer: D`
**Verdict: CORRECT.**
**Screen Flow.** The rebuttal of **B** is the one that matters: an **autolaunched** flow has no screens by definition, so it cannot be a form. Related lists and record detail **display** data rather than **collect** it. Clean and accurate. ✏️ Double space after `195.`, plus `Show Suggested Answer` residue.

### Q196 — Warranty expiry that is usually 1 year but sometimes longer — `Answer: C`
**Verdict: CORRECT.**
🏆 **One of the best questions in either file.** The whole item turns on a single distinction that most admins get wrong: a **formula field** is permanently read-only, whereas a **formula used as a *default value*** calculates once on creation and then **leaves the field editable**. The stem is built so that both halves of the requirement — *"1-year default"* and *"sometimes longer"* — are needed to eliminate option D. Keep this one and use it as a model.

### Q197 — Sharing team A's records with team B — `Answer: B`
**Verdict: CORRECT.**
**Owner-based sharing rule.** The reasoning is exactly right and worth teaching verbatim: the role hierarchy shares **vertically** only, so two **sibling** roles under the same manager get nothing from each other. The manager sees both; the teams see neither. A sharing rule is the only way across.

### Q198 — Lead Source required before Closed Won — `Answer: A`
**Verdict: CORRECT.**
**Validation rule**, with the formula supplied — `AND(ISPICKVAL(StageName, "Closed Won"), ISBLANK(LeadSource))`. The rebuttal of the dependent-picklist options is precise: dependencies control **which values are available**, never **whether a field must be filled**. ✏️ Option D is ungrammatical — *"Modify the Opportunity stage a dependent picklist to the Lead source field"* is missing *"to be"*. Defect **F15**.

### 🔁 Q199 — VIP cases transferred within 5 hours — `Answer: C`
**Verdict: CORRECT-CAVEAT — seventh copy of the escalation-rule question.**
✅ *But this copy adds something the other six do not:* it brings **Business Hours** into play, and the explanation correctly explains that a **24-hour** business hours record must be attached so the 5-hour clock runs overnight for VIP customers. **If you keep only one escalation question, keep this one** — it teaches escalation *and* business hours together. See **D33**.

### Q200 — Pulling contact fields into an Event report — `Answer: C`
**Verdict: CORRECT.**
**"Add fields related via lookup"** on the existing custom report type. The rebuttal of **D** is the useful one: building a whole new report type would work but is unnecessary rework, and it would orphan every report already built on the existing one. Correct and practical.

### ❌ Q201 — Different picklist values for sales and marketing (choose two) — `Answer: C, D`
**Verdict: INCORRECT. The correct answer is A and C.**

**C is right.** *One page layout, **two record types**, one picklist* — record types are the feature that shows different subsets of one picklist's values to different users.

**🚨 D is wrong.** *"One record type, two profiles, one picklist"* cannot work. **Profiles do not filter picklist values.** Profiles control which **record types** a user may use — but with only **one** record type there is nothing to choose between, so both profiles see the identical value set. The explanation's claim that *"picklist values can be mapped differently based on… Profiles"* is simply false.

**A is the missing second answer.** *Two page layouts, one record type, **two picklists*** — build two separate picklist fields with different value sets and put each on the layout assigned to its audience. Inelegant, but it genuinely delivers the requirement, which is more than D does.

**Fix: re-key to A, C**, and rewrite the explanation to say that record types — **not profiles** — filter picklist values.

### Q202 — Contractors who change agencies — `Answer: A`
**Verdict: CORRECT.**
**Contacts to Multiple Accounts** (Related Contacts). The requirement that settles it is *"maintain the **historical accuracy** of the record"* — the `AccountContactRelation` object keeps each past relationship with its own **role** and **Active** flag, so history survives without duplicate contacts. The rebuttal of **C** is important: duplicating the contact is exactly what destroys historical accuracy.

### Q203 — Task now, and another in 60 days — `Answer: A`
**Verdict: CORRECT.**
**Record-triggered flow with a Scheduled Path.** The stem is deliberately built with **two timings** — immediate and delayed — and scheduled paths are the only listed feature that handles both. Explanation is accurate and names the mechanism.

### Q204 — Installing a managed package in a sandbox (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
Both true and both genuinely practical: the install URL must point at **test.salesforce.com**, and **a sandbox refresh wipes the package**, because a refresh replaces the sandbox with a fresh copy of production. That second point catches out a lot of teams mid-project.

### Q205 — Scheduling the Data Export Service (choose two) — `Answer: A, B`
**Verdict: CORRECT-CAVEAT.**
Both right: the service runs on **weekly or monthly** intervals only, and it exports **data but not metadata**, so schema backups need a separate tool.

✏️ *One detail to add:* the available interval is **edition-dependent** — **weekly** export is available in Enterprise, Performance and Unlimited, while Professional and Developer editions are limited to **monthly**. Students are regularly asked which editions get weekly.

---

## Batch 24 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 22 | Q172, Q173, Q174, Q175, Q177, Q179, Q182, Q184, Q189, Q190, Q191, Q192, Q193, Q194, Q195, Q196, Q197, Q198, Q200, Q202, Q203, Q204 |
| ⚠️ CORRECT-CAVEAT | 10 | Q171, Q176, Q178, Q181, Q185, Q186, Q187, Q188, Q199, Q205 |
| 🕰️ CORRECT-OBSOLETE | 1 | Q183 (Process Builder retired) |
| ❓ DISPUTED | 1 | Q180 — option B cannot meet the requirement |
| ❌ INCORRECT | **1** | **Q201** — keyed C, D; correct is **A, C** |

**One wrong answer: Q201.** Option D (*"one record type, two profiles, one picklist"*) is impossible — **profiles do not filter picklist values**. They control which **record types** a user may use, and with only one record type there is nothing to vary. The explanation's claim that values can be *"mapped differently based on… Profiles"* is false. Correct answer: **A, C**.

**One disputed: Q180.** A **dependent picklist** has nothing to do with record types, which is what the stem requires. The explanation reaches for *"record type associations"* — a feature that is **not on the option list**. Re-key to **C, D** and put record types into the question.

### 🟢 Three repeats that *fix* earlier broken questions

This is the most useful pattern in the batch — in each case, **keep the later copy**:

| Later, better | Earlier, broken | What the later copy fixes |
|---|---|---|
| **Q179** | **Q60** | Q60's answer line reads `Certified Correct Answer:` — a label used nowhere else — and its timestamp has a stray `#t`. Q179 is clean. |
| **Q190** | **Q133** | Q133 offers **Process Builder** and keys it correct. Q190 omits Process Builder and keys cleanly to **Flow Builder**. |
| **Q193** | **Topic 1 Block-C #5** | Block-C #5 offered *"Header background color"* **and** *"App header color"* — the same thing twice. Q193's option set is clean. |

**Five more straightforward duplicates:** **D59** Q125→Q174; **D60** Q107→Q175; **D62** Q79→Q182; **D63** Q71≈Q184; **D65** Topic 1 Block-A Q3→Q192. And the **escalation-rule question now exists seven times** — **keep Q199**, the only copy that also teaches Business Hours.

**Process Builder is now keyed correct in five questions** — Q99, Q116, Q133, Q154, Q183. **Q190 demonstrates the fix**: remove the option and the key corrects itself.

**Four more grammar faults in stems and options** — Q178 (*"Is possible to view…"*), Q185 (a stem that reverses its own meaning), Q187 (*"in use another organization"*), Q198 option D (*"the Opportunity stage a dependent picklist"*). All logged under **F15**.

🏆 **Best question in the batch: Q196.** The distinction between a **formula field** (permanently read-only) and a **formula used as a default value** (calculates once, stays editable) is elegant, practical and rarely taught. Use it as a model for rewrites.

---

# BATCH 25 — File: `Admin-201 Topic 2.md`, Questions 206–232 — **END OF THE NUMBERED QUESTIONS**

> The Agentforce block that follows Q232 is reviewed separately in Batch 26, because it is a different format, a different subject and a different exam.

### ❓ Q206 — Automating an outbound message — `Answer: B`
**Verdict: DISPUTED — B is the only survivable option, but it may not be buildable.**

**The elimination is sound.** An auto-response rule (A) emails customers, task assignment (C) is unrelated, and **Process Builder (D) is retired** — so **B** is all that is left.

🚨 **But I would not teach the explanation as written.** It claims *"Record-triggered flows support sending outbound messages **natively**."* The Flow **Actions** palette offers Send Email, Post to Chatter, Send Custom Notification, Submit for Approval, Email Alerts, Apex actions, External Services and **HTTP Callout** — I do **not** believe **Outbound Message** is among them. Outbound messages are a **workflow-era action**, available to workflow rules, approval processes and entitlement processes.

**The modern build is an HTTP Callout (or External Service) invoked from a record-triggered flow** — which achieves the same outcome by a different mechanism.

🚨 **Please verify whether Flow can natively invoke an Outbound Message before using this question.** Fourth item in the review flagged for direct confirmation. If it cannot, rewrite option B as *"A record-triggered flow with an HTTP Callout."*

### ⚠️ Q207 — "In Spring'11 … Dynamic Dashboards … for which edition" — `Answer: A, C, D`
**Verdict: CORRECT-CAVEAT on the facts — but this question should be deleted.**

**The letters are broadly right:** dynamic dashboards are available in **Developer, Enterprise, Performance and Unlimited**, and are **not** available in Professional.

🚨 **Four things are wrong with the question itself:**
1. **It is anchored to the Spring '11 release** — fifteen years old, and release-history trivia has never been on the Admin exam.
2. **The stem is singular** (*"for which **edition**:"*) but **three letters are keyed**, with no *"(Choose three.)"*. Defect **F12**.
3. **The explanation admits the problem** rather than fixing it: *"(Note: Multiple correct choices apply here)"*. Defect **F13**.
4. **Performance Edition is missing** from the options, so the answer is incomplete even on its own terms.

**Recommendation: delete.** If you want to keep the content, rewrite it as *"Dynamic dashboards are available in all editions EXCEPT —"* … and even then, the more useful modern fact is the **limit**: 3 in Developer, 5 in Enterprise, 10 in Performance and Unlimited.

### 🕰️ Q208 — My Domain redirect policy with a grace period — `Answer: D`
**Verdict: CORRECT-OBSOLETE.**
**"Redirect with a warning to the same page within the domain"** was the correct answer when written — it warns users to update bookmarks before eventually cutting them off, which is exactly the *"grace period"* the stem asks for.

⚠️ **But Salesforce has since removed that option.** My Domain redirect policy was progressively tightened and orgs are now enforced onto **"Don't redirect"**; the warning-based grace period no longer exists as a setting. The *concept* (give users a transition window) is still sound, but the **named option is gone from Setup**. 🚨 **Verify the current My Domain policy options before using this question.**

### Q209 — Extra steps for condominium open houses — `Answer: c`
**Verdict: CORRECT-CAVEAT.**
**Two page layouts + business processes + record types** is the most complete answer, and it correctly recognises that **record types are what connect a process to a layout**.

🚨 **But check the object.** **Business processes exist only on Lead, Opportunity, Case and Solution.** If "open house" is a **custom object** — which the stem implies — then there is no business process to create, and the answer collapses to **record types + two page layouts** alone. **Either name a standard object in the stem, or remove "business processes" from option C.**

✏️ The answer line is a lowercase `c` (defect **F3**).

### Q210 — Order of execution when a Case is saved — `Answer: C`
**Verdict: CORRECT.**
**Assignment rules → auto-response rules → workflow rules → escalation rules** is the correct relative order of those four. A genuinely useful question, because the intuitive guess (auto-response before assignment) is wrong: Salesforce must know **who owns** the case before it can send the acknowledgment.

✏️ *One thing to add:* **validation rules run before all of these**. Option C does not include them, and a student may wonder where they went. Worth a sentence in the explanation. Also, the answer line reads `Answer(s):  C` with a double space (defect **F5**).

### Q211 — Two-factor prompts when logging in to Data Loader (choose two) — `Answer: A, C`
**Verdict: CORRECT-CAVEAT.**
The governing fact is right and important: **Salesforce does not accept email or SMS codes for high-assurance API logins** — only a **TOTP authenticator app**. That rules out B cleanly, and D is a security-token red herring (a token is not MFA).

✏️ *Two soft spots.* First, **A and C are two halves of one action** — install the app, then connect it — so the "choose two" is close to free. Second, **MFA has been contractually required for all Salesforce logins since February 2022** and is auto-enabled, so the scenario is no longer a configuration choice. Worth a modern footnote.

### Q212 — Data loss when changing Text → Picklist (choose two) — `Answer: C, D`
**Verdict: CORRECT.**
Both points come **straight from Salesforce Help — "Notes on Changing Custom Field Types"**: *any list view based on the field is deleted*, and *assignment and escalation rules may be affected*. Accurate, verifiable and practical. One of the cleaner questions in the file.

### 🔁 Q213 — What happens to the data in a deleted custom field — `Answer: A`
**Verdict: CORRECT.**
**Restorable from the Recycle Bin for 15 days**, with the data intact. The explanation correctly gives 15 days while option B's "20 days" is correctly rejected.

✏️ *This is the **sixth** copy of the deleted-custom-field fact across the two files* — T1 Q830, Q853, Q986, Q991 and the mis-numbered `1074`, plus this one. See **D25**.

### Q214 — Automated actions in an approval process (choose two) — `Answer: A, B`
**Verdict: CORRECT.**
**Field Update** and **Email Alert** — and the explanation correctly lists the complete set of approval actions: **Task, Email Alert, Field Update, Outbound Message**. Neither autolaunched flows nor Chatter posts are selectable as approval actions, which is exactly what makes C and D good distractors. ✏️ Double space after `214.`, and the closing parenthetical (*"though flows can be triggered separately or via workarounds…"*) is mild hedging.

### Q215 — Details, related lists and Chatter on separate tabs — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Lightning record page** is right; an **app page** (B) is not tied to a record, and the other two options are not page types at all.

✏️ *Name the mechanism.* The explanation says tabs are "organized neatly" but never mentions the **Tabs component** in Lightning App Builder, which is the actual thing the administrator drags onto the page. Without that word the answer is not actionable.

### Q216 — What escalation rules can do (choose two) — `Answer: A, D`
**Verdict: CORRECT.**
**Re-assign the case** and **send email notifications** are precisely the two actions an escalation rule supports. The rebuttal is accurate and useful — escalation rules **cannot** change Priority (C is a common assumption) and cannot re-open a closed case. A tight, well-scoped question.

### Q217 — Manually created cases are owned by the administrator — `Answer: B`
**Verdict: CORRECT-CAVEAT.**
**The "Assign using active assignment rule" checkbox is selected by default** — correct, and the fix is to clear *"Select the checkbox by default"* in the page layout's **Case Assignment Checkbox** settings.

✏️ **The explanation never finishes the thought.** It trails off with *"they fall through or get misassigned based on rule configurations, **or if the rule isn't properly limited, it defaults ownership unexpectedly**."* The actual mechanism is specific and should be stated: when the rule runs and **no rule entry matches**, the case is given to the **Default Case Owner** set in **Support Settings** — which is very often the administrator. Name that setting and the question becomes genuinely instructive.

### Q218 — What Salesforce checks on a UI login (choose two) — `Answer: B, D`
**Verdict: CORRECT.**
**Profile login hours** and **Two-Factor Authentication for User Interface Logins** — both correct, and the two distractors are precisely targeted: **A** says *"**role** IP address restrictions"* (IP ranges live on the **profile** or org-wide, never the role), and **C** is the **API** 2FA permission, which does not apply to a UI login. Excellent distractor design.

### 🔁 Q219 — What prevents deactivating a user (choose two) — `Answer: A, B`
**Verdict: CORRECT — but it is Q74 again with the options reshuffled.** Same two facts: **custom hierarchy field** and **sole recipient of a workflow email alert**. See **D67**.

### Q220 — Characteristics of a master-detail relationship (choose three) — `Answer: A, D, E`
**Verdict: CORRECT.**
All three are right, and the rebuttals carry the two facts students most often get wrong: detail records **inherit** sharing rather than having their own, and an object can have a **maximum of two** master-detail relationships, not five. Option E is the sharpest point — a detail record has **no Owner field at all**; it simply follows the master's owner.

### Q221 — Agents spending too long finding resources — `Answer: D`
**Verdict: CORRECT.**
**Knowledge with articles and data categories** — and the mention of **data categories** is what makes this better than the earlier Knowledge question (Q124), because categories are how agents narrow a large article base quickly. The rebuttal of **C** is well judged: *"tell them to search harder"* is not a solution.

### Q222 — Tracking licences and permission set assignments — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Reporting** is the right instinct, and it correctly rejects the Lightning Usage App (adoption metrics) and Login History (access events).

✏️ *But the mechanics are understated.* A plain **Users** report shows profile and licence, but **permission set assignments live on a different object**. You need the **Permission Set Assignment** report type (or `Setup → Permission Sets → Manage Assignments`) to see who has what. The explanation implies one report does both. Tighten it, or split the answer into two report types.

### Q223 — How many fields a custom lead field can map to — `Answer: C`
**Verdict: CORRECT-CAVEAT.**
**Three** — one each on Account, Contact and Opportunity — is right, and the explanation states exactly that.

✏️ *Style outlier:* like **Q178**, this is bare trivia with **no business scenario**, in a file where every other question is a situation. It is also the **fourth** lead-mapping question across the two files (T1 Block-A Q7, T2 Q5, T2 Q53, T2 Q223). Keep at most one of the scenario versions plus this one, or fold the number into a scenario stem.

### 🟢🔁 Q224 — Case policy: acknowledge, assign, escalate — `Answer: C`
**Verdict: CORRECT — and this copy fixes Q143.**

**Same stem as Q143, word for word — but a repaired option set.** In Batch 23 I flagged **Q143** because the stem demands that cases be *"assigned to the appropriate agents"* while **no correct option contained assignment rules or queues** — and its explanation openly conceded the gap (*"but looking at the options…"*).

**Q224 offers "Auto-response rules, Queues, Escalation Rules"** and keys it. All three requirements are now covered, and the explanation is clean — it even rebuts **Macros** and **Entitlements** properly.

✅ **Keep Q224, delete Q143.** See **D68**. ✏️ Double space after `224.`

### Q225 — Weekly check-in with top accounts — `Answer: D`
**Verdict: CORRECT-CAVEAT.**
**Enable the creation of recurring tasks** answers the stem's actual question — *"what should the administrator configure to **remind the reps**"* — and the rebuttal of the time-based workflow option is fair.

✏️ **The stem has a second requirement the answer ignores.** The VP also wants *"a dashboard component to show the status of the check-ins."* Recurring tasks do not deliver that; you would need a **Task report** grouped by status, with a dashboard component on top. Either add that to the explanation or drop the dashboard sentence from the stem. *(Third copy of the recurring-tasks fact — see **D43**.)*

### Q226 — Who can transfer a departing agent's cases (choose two) — `Answer: A, D`
**Verdict: CORRECT.**
**System Administrator** and **a manager above the agent in the role hierarchy** — both correct. The explanation makes the right distinction: **Read** access never confers the ability to transfer, and role-hierarchy access on Cases is **Full Access** over subordinates' records, which includes changing the owner.

### 🟢 Q227 — Weekly count of open cases per account — `Answer: C`
**Verdict: CORRECT — and it is the model the Process Builder questions should follow.**

**Scheduled flow in Flow Builder** is right, and note what the option set does: it offers *"Set up a scheduled process in **Process Builder**"* as option B and the explanation **correctly rejects it as retired**. This is the same file that keys Process Builder **correct** in five other questions (Q99, Q116, Q133, Q154, Q183). **Q227 proves the author knew** — the inconsistency is an editing problem, not a knowledge problem.

### 🔁 Q228 — Show a picklist only when Lead Source is "Search Engine" — `Answer: A`
**Verdict: CORRECT — but it is Q112 again.** Same stem, same answer; only option D is reworded. See **D69**.

### Q229 — Billing System field must always be filled in — `Answer: C`
**Verdict: CORRECT.**
**Universally required** is right, and the explanation gives the reason that matters: it is enforced *"regardless of where the record is created (UI, API, etc.)"*. That is the key contrast with page-layout-required, which the API ignores — and it is exactly the distinction the earlier Q118 explanation fumbled. The rebuttal of D is also correct: **requirement is never set at the record type level**.

### Q230 — What can go in the mobile navigation menu (choose three) — `Answer: A, C, D`
**Verdict: CORRECT.**
**Chatter, Lightning App Pages and Dashboards.** The rebuttals are accurate and conceptually clean: the **Utility Bar** and the **Lightning Home Page** are *desktop layout constructs*, not navigable items. A useful question because it forces students to separate *"things you navigate to"* from *"things that frame a page."*

### ❓ Q231 — "Closed" is missing from the Case Status picklist — `Answer: D`
**Verdict: DISPUTED — option B describes a real setting that produces exactly this symptom, and the explanation contains a factual error.**

**D is possible:** a **support process** that omits Closed would hide it.

🚨 **But B is the more likely cause, and it is a real Salesforce setting.** `Setup → Support Settings` contains **"Show Closed Statuses in Case Status Field"**, and it is **unchecked by default** — which is precisely what option B says (*"set to the default"*). With it unchecked, closed statuses **do not appear in the Status picklist** on the case edit page; agents must use the **Close Case** layout instead. That is the textbook explanation for this exact complaint, and it also makes option **A** partly true.

🚨 **The explanation also gets the assignment chain wrong.** It says *"if a **profile** is assigned a specific Support Process…"*. **Support processes are assigned to record types**, and record types are then assigned to profiles. Profiles are never assigned a support process directly. Logged as **C34**.

**Recommendation:** decide which cause you want to teach, then remove the other option. As printed, there are two defensible answers and a wrong explanation.

### Q232 — Letting a task queue also handle Cases (choose two) — `Answer: B, C`
**Verdict: CORRECT-CAVEAT.**
Both are genuine ways to get Cases into a queue, and the explanation is honest about it: *"an administrator can **either** add the Case object to an existing queue… **or** create a new queue."*

🚨 **That honesty exposes the flaw.** B and C are **mutually exclusive alternatives**, not two steps of one solution — you would never do both. A "choose two" that asks for two *alternatives* teaches nothing and rewards guessing. Defect **F12**. Rewrite as a single-answer question, or make the second answer something you must *also* do (for example, *"assign the support team as queue members"*).

---

## Batch 25 summary

| Verdict | Count | Questions |
|---|---|---|
| ✅ CORRECT | 15 | Q210, Q212, Q213, Q214, Q216, Q218, Q219, Q220, Q221, Q224, Q226, Q227, Q228, Q229, Q230 |
| ⚠️ CORRECT-CAVEAT | 9 | Q207, Q209, Q211, Q215, Q217, Q222, Q223, Q225, Q232 |
| 🕰️ CORRECT-OBSOLETE | 1 | Q208 (My Domain "redirect with a warning" removed) |
| ❓ DISPUTED | 2 | Q206, Q231 |
| ❌ INCORRECT | **0** | — |

**✅ No wrong answers.** Every key in Q206–Q232 is defensible on its own terms.

### 🟢 A fourth "later copy fixes the earlier one"

**Q224 repairs Q143.** Q143's option set omitted queues and assignment rules even though its stem demanded assignment — and its explanation admitted it. **Q224 offers "Auto-response rules, Queues, Escalation Rules"** and keys cleanly. **Keep Q224, delete Q143.**

### 🟢 Q227 proves the Process Builder problem is an editing issue, not a knowledge gap

Q227 offers *"a scheduled process in Process Builder"* and **correctly rejects it as retired**, keying **scheduled flow** instead. The same file keys Process Builder **correct** in five other questions. The author knew; the bank was never reconciled.

### Two questions that need a decision, not a re-key

- **Q206** — the explanation claims record-triggered flows can send **outbound messages natively**. I do not believe Outbound Message is a Flow action; outbound messages belong to workflow rules, approval processes and entitlement processes. The modern build is an **HTTP Callout from a flow**. 🚨 **Verify before use.**
- **Q231** — option B names a real Support Settings checkbox (**"Show Closed Statuses in Case Status Field"**, unchecked by default) that produces exactly the described symptom, so there are two defensible answers. The explanation also wrongly says support processes are assigned to **profiles** — they are assigned to **record types**.

### One question I would simply delete

**Q207** is anchored to the **Spring '11 release**, has a singular stem with three keyed letters and no *"(Choose three.)"*, omits Performance Edition, and its explanation apologises for itself (*"Note: Multiple correct choices apply here"*). Release-history trivia is not on the Admin exam.

### Other notable items

- **Q209** may not be buildable — **business processes exist only on Lead, Opportunity, Case and Solution**, and the stem implies a custom object.
- **Q225's stem asks for a dashboard component** that the answer never delivers.
- **Q217's explanation trails off** without naming the actual cause — the **Default Case Owner** in Support Settings.
- **Q232 is a "choose two" whose two answers are mutually exclusive alternatives.**
- **Three more duplicates:** **D67** Q74→Q219; **D68** Q143→Q224; **D69** Q112→Q228. Plus **Q213** is the sixth copy of the deleted-custom-field fact and **Q225** the third copy of recurring tasks.

---

# ✅ TOPIC 2 NUMBERED QUESTIONS COMPLETE — Q1 through Q232.

**Only the appended Agentforce block (Questions 1–20) remains.**

---

## Systemic formatting defects (affects the whole file)

Collected here so they can be fixed in one pass rather than question by question.

| # | Defect | Examples seen so far | Why it matters |
|---|---|---|---|
| F1 | **Two `Answer:` lines, or a malformed answer line** | Q64, Q67, Q131, Q182, Q259, Q306, Q526 (`A,C;E.`), **Q800** (`B. AND C. …`) | A quiz tool reads the first one — in Q67 and Q306 that is the *wrong* answer |
| F2 | **Hedged answers** ("X or Y depending on...") | Q105, Q150, Q155, Q160, Q164, Q170, Q258, Q266, Q276, Q280, Q281, Q286, Q304, Q306, Q307, Q489, Q536, Q608, Q619, Q811, Q882, Q936, Q948, **Q1032**, **Q1034** | No single parseable answer |
| F3 | **Inconsistent answer capitalisation / letter+value mixing / wrong order / free text** | `AbCE`, `Abe`, `ACFe`, `Ad`, `AcD`, `ABcE`, `BCe`, `Ac`, `ABd`, `BdE`, `ADB`, `C.d`, `C,d`, `b,d`, `b`, `c`, `B. 10`, `B. False`, `A. True`, `B. 500`, `Answer:A`, `Answer:C`, `B Rules and Actions`, `ATrue`, `Answer: 40` (Q860 — value with no letter), `a,C` (Q872), `Answer:B No` (Q1000), `c` (Q1023), `ABc` (Q1039), `B. Chart and D. Table` (Q1028), **`d` (Q1133)**, **`c` (Q1134)**, **`bC` (Q1156)**, **`b` (Q1161)**, **`C,d` (Q1167)**, **`BC` (Q1170)**, **`AD` (Q1172)**, **`CD` (Q1175)**, **`Answer : D` — space before the colon, on all seven Block-A questions**, **T2 Q209 (`Answer(s): c` — lowercase)**, full option text restated (Q617, Q647, Q800) | Breaks automated matching |
| F4 | **European decimal notation** | Q214, Q226, Q263, Q317, Q446, Q452 | `1.000` reads as 1, not 1,000 |
| F5 | **Missing space after question number, or stray leading whitespace** | Q22, Q29, Q31, Q81, Q121, Q208, Q223, Q236, Q238, Q256, Q361, Q385, Q490, Q526, Q579, Q983 (two leading spaces), Q908 ("Every every 7 days" — duplicated word in an option), Q1064 (double space after the number), **Q1156 (`1156..` — double period; this is why automated scans skip it)**, **Q1165 (double space after the number)**, **Block-C #5 (`5.Cloud Kicks` — no space after the period; this is why the item appeared to be missing from scans)**, **T2 Q25, Q37, Q40 (double space after the number)**, **T2 Q84, Q85, Q86, Q87, Q88, Q89 (double space after the number)**, **T2 Q108, Q115, Q128, Q134 (double space after the number)**, **T2 Q141, Q165, Q174, Q195, Q214, Q224 (double space after the number)**, **T2 Q210 (`Answer(s):  C` — double space after the colon)** | Breaks automated parsing |
| F6 | **Stray source artefacts** | `Scribd` (Q67), `##22.08`, `23.08##`, `##24.08`, `**Answer:` (Q277), orphaned stem (Q252), `301,` comma numbering, `MMM` (Q302), `Most Voted` (stray block), `[1, 2]` citation marker (Q718), flattened role hierarchy (Q338), answer+explanation on one line (Q85, Q353, Q417), `Timestamp:` run onto the explanation line (Q413), **two questions glued into one stem (Q853)**, **definition pasted onto the stem with no separator (Q878)**, orphaned video/tutorial link text (Q334, Q369, Q411, Q513, Q515, Q516, Q567, **Q904**, **Q911**, **Q921**), **raw LaTeX in the explanation (`$3 \times 2 = 6$`, Q1166)**, **broken/unfinished sentence with a mismatched parenthesis (Q1169 option D)**, **stray inserted digits mid-word (Block-A Q2 "case 1should"; Block-A Q7 "d3ata" and a bare `2` on its own line)**, **T2 Q7 (orphaned "watch this Salesforce Screen Flow Tutorial" paragraph with no link)**, **T2 Q21 (a bare `22.` glued to the end of the timestamp line — the entire numbering gap in Topic 2)**, **T2 Q60 (`#t June 20, 2024` — stray `t` on the timestamp line)**, 🚨 **T2 Q52 (its entire `Why:` paragraph is a copy-paste of Q51's, about a completely different feature)** | Noise between questions |
| F7 | **Character-encoding corruption** | Q160 (`ג€` where quotes belong), Q964 (`ג€"` where an em dash belongs), **Q1070 (`ג€` twice, where quotes belong around "View Dashboard as Me")** | Text is unreadable |
| F8 | **Explanation contradicts or undermines its own answer** | Q166, Q227, Q276, Q319, Q351, Q353, Q409, Q415, Q417, Q433, Q498, Q504, Q577, Q606, Q693, Q718, Q722, Q734, Q761, Q863, Q910, Q921, Q986, **Q1014**, **Q1023**, **Q1025**, **Q1033**, **Q1068**, **T2 Q12** (defends a "public group" that its own option does not contain), **T2 Q24** (states three facts that all argue the keyed answer is the *cure*, not the cause), 🚨 **T2 Q52** (the `Why:` paragraph answers **Q51's** question instead), **T2 Q42** (asserts folder inheritance and independent subfolder sharing in consecutive sentences), **T2 Q70** (defends option C while placing the field on the *opposite* object from the one the option names), **T2 Q78** (key says B, D, E; explanation argues for A and C), 🚨 **T2 Q167** (key says B, D, E; explanation's first sentence says *"Options A, B, and D"*), 🚨 **T2 Q146** (states the *Add Record* action *"appears automatically"* — Salesforce requires it to be added manually), 🚨 **T2 Q155** (declares *In Development* harmless — it is the very thing that blocks access) | Actively teaches the wrong thing |
| F9 | **Inconsistent explanation labels** | `Why:` vs `Explanation` vs `Trainer Explanation & Concept` vs `Key Context & Nuance` (Q304) vs `Key Breakdown & Context` (Q306, Q307) vs `Note:` (Q501, Q536, Q552) vs `Correct Answer:` (Q904) vs `Explanation & Modern Context:` (Q991) vs no label at all (Q223, Q860, Q878, **Q1099**), **T2 Q52–Q58 switch to `Trainer Explanation & Concept:` and Q59 reverts to `Why:`**, **T2 Q60 invents `Certified Correct Answer:`** — a label used nowhere else in either file | Inconsistent parsing |
| F10 | **`Answer:` line missing entirely** | Q257 (option `B. False` pasted twice instead), the stray Q2/Q12 block (answer implied only by `Most Voted`), 🚨 **the entire Block-C tail — all 15 questions (#1–#15) have no answer and no explanation** | Question parses as unanswered |
| F11 | **`Why:` block placed after the `Timestamp:` line** | Q256 | Breaks the block order used everywhere else |
| F12 | **Option list or stem conflicts with the question type** | Q291, Q301, Q319, Q368, Q401, Q415, Q489, Q507, Q577, Q608, Q619, Q734, Q761, Q766, Q771, Q910 (correct value not on the list), Q800 (options A and C are the same), Q948 (a "which is NOT true" stem with a joke distractor — two valid answers), **Q1033** (single-choice stem, but options B **and** C both block field deletion), **Q1163** (stem says *Priority* = High, every option says *Status* = high), **Block-C #5** (options A "Header background color" and C "App header color" are the same thing), **Block-C #12** (options A and B are both partly true; Salesforce splits open activities from activity history), **T2 Q77** (option A is a *statement of fact*, not an action, in a "how should you configure" question), **T2 Q70** (the stem's "should be unable to be deleted" requirement is not achievable by **either** relationship type offered), 🚨 **T2 Q109** (single-answer stem, **no "(Choose two.)"**, but two letters are keyed), 🚨 **T2 Q115** (asks to put a **text area** field in the highlights panel — compact layouts do not support text areas), **T2 Q117** (option D may also be true, making a single-answer stem have two answers), **T2 Q143** (the stem demands case *assignment* but no correct option includes assignment rules or queues), **T2 Q161** (option C names **Campaign Status**, a different field from **Campaign Member Status** — as printed, only one option is correct), **T2 Q180** (the stem requires values to vary **by record type**, but record types are not among the options), **T2 Q194** (option B is the same *statement-not-an-action* defect as Q77), **T2 Q178** (a negative "EXCEPT" stem with no scenario — the only one of its kind in either file), 🚨 **T2 Q207** (singular stem *"for which edition:"* with **three** keyed letters and no "(Choose three.)"), 🚨 **T2 Q232** (a "choose two" whose two answers are **mutually exclusive alternatives** — you would never do both), **T2 Q231** (option B names a real Support Setting that produces the same symptom, so there are two defensible answers), **T2 Q209** (business processes do not exist on custom objects, which the stem implies) | Question cannot be answered as written |
| F13 | **Leftover draft/working-out or hedging text inside the explanation** | Q374 (*"Wait, let's look closely…"* ×2), Q415 (*"the closest correct option"*), Q509, Q734 (*"even though backend specifications…"*), Q761 (*"in some testing material variations…"*), Q904 (*"Depending on the specific test bank version this question is sourced from…"*), **Q991** (*"legacy exam banks listed 45 days"* — 45 is not one of the options), **Block-A Q6** (*"While creating Custom Report Types is a way to define what data is available…"* — hedges after the answer is already settled), **T2 Q78** (*"Depending on exact exam variants…"*), **T2 Q99** (*"(or Flow Builder, though Process Builder is standard for this context)"*), **T2 Q83** (*"the way a record type **or custom field** can"* — names a solution that is not an option), **T2 Q129** (*"unless that layout already had it, and it's not a standard direct restoration method"*), 🚨 **T2 Q143** (*"Queues or assignment rules handle assignment, **but looking at the options**, Support Processes…"* — tells the student the option set is wrong), **T2 Q171** (*"Standard subject picklists are shared across activities **or depend on global action layouts depending on configuration context**"* — says nothing usable), **T2 Q183** (*"Process Builder **(or Flow Builder)**…"*), **T2 Q186** (a one-sentence explanation hedged with *"primarily"* that rebuts none of the distractors), 🚨 **T2 Q207** (*"(Note: Multiple correct choices apply here)"* — the explanation apologises for the question instead of fixing it), **T2 Q217** (*"they fall through or get misassigned… **or** if the rule isn't properly limited…"* — never names the actual cause), **T2 Q214** (*"though flows can be triggered separately or via workarounds…"*) | Published answer reads as an unfinished draft |
| F14 | **Question format outlier** | Q564, Q597, Q602, Q603, Q668, **Q1007**, **Q1009**, **Q1011** — `FILL BLANK` items with no options, no letters, prose answers | A parser built on the file's normal shape will skip or break on them |
| F15 | **Plain spelling errors inside options and stems** | Q1033 ("filed" for "field" ×3, in options B, C and D), Q803 ("Horizontal bar **line**"), Q372 ("Calendars" where the stem means Events), Q385 ("login's" for "logs in"), **Q1071** ("Sales Rep and Sales Rep B" — the first should be *Sales Rep A*), **Q1114** ("**in** inherited" for "**is** inherited"), **T2 Q161** (option C says "Campaign **Status**" where it means "Campaign **Member** Status"), **T2 Q162** ("**ODWs**" for "OWDs"), **T2 Q178** (*"**Is** possible to view a forecast…"* — missing subject), **T2 Q185** (stem reverses its own meaning: *"hidden in the All App Launcher **or visible in any app**"*), **T2 Q187** (*"already in use — another organization"* — missing "in"), **T2 Q198** option D (*"Modify the Opportunity stage a dependent picklist"* — missing "to be") | Makes options ambiguous or unsearchable |
| F16 | 🚨 **Three incompatible question formats in one file** | **Main body** (`N.` → `A. text` → `Answer:` → `Why:` → `Timestamp:` → `—-----`); **Block A** (`Question N` → letter on its own line, option text on the next → `Answer : X` → unlabelled prose → no timestamp → no separator); **Block C** (bare `N.` → `A. text` → **nothing at all**). Both appended blocks also **restart numbering at 1**, colliding with the real Q1–Q15 | No single parser can read the file; the last 22 questions are effectively invisible to any quiz tool |
| F17 | **Scraper residue and inconsistent timestamp placement** — *Topic 2* | `Show Suggested Answer` (T2 Q23, Q24, Q25, Q26…), `by [deleted] at …` (T2 Q23–Q26…), timestamps prefixed with `#` or `# ` inconsistently (T2 Q7, Q8, Q9, Q11, Q12…), timestamp placed **before** `Answer:` on some questions (T2 Q2, Q3, Q4, Q5) and **after** the options with no label on others, no timestamp at all on T2 Q1, and **no `—-----` separator anywhere in Topic 2** | Leftover text from the source website is presented to students as if it were part of the question; the inconsistent block order means Topic 1 and Topic 2 need two different parsers |
| F18 | **A third answer/explanation format begins at Topic 2 Q71** | From **T2 Q71 onward**: the answer line becomes `Answer(s): A. <the entire option text repeated>`, the rationale label becomes `Explanation:`, and the **timestamp disappears completely**. T2 Q1–Q70 use `Answer: A` + `Why:` + a timestamp | A parser tuned to T2 Q1–Q70 fails from Q71 onward, and repeating the option text on the answer line breaks letter-matching (same problem as **F3**) |

---

## Running list: duplicate questions found

| # | Duplicate of | Location | Note |
|---|---|---|---|
| D1 | Topic 1 Q2 (Custom Fiscal Years) | Stray block near end of Topic 1, before Q501 | Same question re-pasted with answer marked "Most Voted" |
| D2 | Topic 1 Q12 (Profile definition) | Same stray block near end of Topic 1 | Same question re-pasted |
| D3 | Topic 1 Q84 near-duplicates Q73 | Q73 and Q84 | Both test "assignment rules route Leads/Cases to users and queues by criteria". Keep one. |
| D4 | Topic 1 Q101 = **Topic 2 Q178** | Across both files | Word-for-word identical forecast question. Both answered D. First confirmed **cross-file** duplicate. |
| D5 | Topic 1 Q113 near-duplicates Q112 | Q112 and Q113 | Same lead-field-mapping fact, single-select vs multi-select. Keep one. |
| D6 | Topic 1 Q129 = Q156 = Q444 | Three places in Topic 1 | \"When are formula fields recalculated?\" asked three times. All three answers agree. Keep one. |
| D7 | Topic 1 Q131 = Q113 = **Topic 2 Q223** | Across both files | "How many fields can a custom lead field map to?" — three occurrences, all answered C / three fields. |
| D8 | Topic 1 **Q333 = Q241** | Q241 and Q333 | "Which are standard Salesforce applications?" — **identical five options, answered differently** (Q241: A, D — correct / Q333: A, B, D — wrong). Fix Q333, then delete one. Also logged as contradiction **C8**. |
| D9 | Topic 1 **Q341 ≈ Q340** | Q340 and Q341, adjacent | Both test "documents/files count toward File Storage, not Data Storage". Both answered B correctly. Keep Q341 (broader wording). |
| D10 | Territory Management | Q161, Q234, **Q288**, Q440, **Q1001** | The same "Customizable Forecasting is required before Territory Management" fact is asked **four times** (Q161, Q234, Q288, Q440) — and that prerequisite belonged to the retired **Territory Management 1.0**. **Q1001** is a fifth question on the same feature but tests something still true today (an opportunity belongs to exactly one territory). **Keep Q1001**, reworded to name **Enterprise Territory Management**, and delete the other four. |
| D11 | "Standard Salesforce applications" | **Q241, Q333, Q391** | Three overlapping questions on one topic, built on three different underlying lists, two of which contradict each other (**C8**, **C10**). Keep one, written against a single named UI. |
| D12 | Topic 1 **Q476 ≈ Q472** | Q472 and Q476 | Same rule — "escalation based on last modification resets when the case is modified" — differing only in the trigger named (activity/email vs case comment). Both answered A. Keep Q472; merge the triggers into one question. |
| D13 | Topic 1 **Q490 = Q297** | Q297 and Q490 | Maximum values in a controlling picklist, asked twice, **answered differently** (Q297: 300 correct / Q490: 500 wrong). Also logged as contradiction **C12**. Keep Q297 — it has the best explanation in the file. |
| D14 | Tags | **Q331, Q467** | Two questions on Classic Tags, a feature that does not exist in Lightning. Both unexaminable — delete both. |
| D15 | "How do you make a field required?" | **Q275, Q390, Q547** | Three questions on one topic keying **three different mechanisms** (Page Layout / Validation Rule / Page Layout), purely because each offers a different option list. See **C9**. Keep one with the full option set; use **Q547**'s explanation, which is the most complete. |
| D16 | Topic 1 **Q564 = Q385** | Q385 and Q564 | "What happens when a user is logged in as restricted hours start?" asked twice. **Q385** is a proper multiple-choice item with good distractors; **Q564** is the file's only `FILL BLANK` outlier. Keep Q385, delete Q564. |
| D17 | Salesforce for Outlook / Connect for Outlook | **Q250, Q552, Q554** | Three questions on integrations retired in or before June 2021. Delete all three. |
| D18 | Topic 1 **Q587 = Q467** | Q467 and Q587 | "Customer Portal users can view the tags section of a page" — **word-for-word identical** stem, options and answer (B). Only the explanation wording differs. Delete one — ideally both, as Tags don't exist in Lightning. |
| D19 | Topic 1 **Q638 = Q1** | Q1 and Q638 | "Inline editing updates the field when…" — **word-for-word identical** stem, four options and answer (B). The first and the 26th-from-last questions in the file are the same question. Q638 has the fuller explanation. |
| D20 | Tags (full cluster) | **Q331, Q467, Q587, Q616** | Four questions on Classic Tags. Supersedes D14. The feature does not exist in Lightning Experience — delete all four. |
| D21 | Topic 1 **Q668 ≈ Q259** | Q259 and Q668 | "What are dashboard components?" asked twice. Q259 is proper multiple choice; Q668 is a `FILL BLANK`. Keep Q259; fold in Q668's mention of **Metrics** and add **Visualforce Page / Lightning Component**. |
| D22 | Cloud Scheduler | **Q304, Q311, Q708** | Three questions on a feature Salesforce **retired in Summer '16**. Q304 is also unanswerable (`Answer: A or B`). Delete all three. |
| D23 | Formula compiled size | **Q509, Q734** | Both test the character-limit-vs-compiled-size distinction, and both key the outdated **4,000** figure. Correct pair to teach: **3,900 characters** of formula text, **5,000 bytes** compiled. Fix together, keep one. |
| D24 | Topic 1 **Q746 = Q367** | Q367 and Q746 | "The size limit for documents uploaded is…" — same question, different distractors, both answered **5 MB**. Keep **Q367**, whose explanation adds the **20 KB** custom-logo limit. |
| D25 | Deleting / restoring a custom field | **Q830, Q853, Q986, Q991** | Four questions on one fact. Q830 asks what happens (answer: goes to a Deleted Fields list). Q853 asks whether it can be restored (Yes). Q986 and Q991 both ask about the retention window — and give **different numbers** (see **C15**). Keep **Q991**, re-keyed and rewritten to **15 days**, and fold Q830's "undeletable" point into it. Delete the other three. |
| D26 | Login hours (full cluster) | **Q385, Q564, Q766, Q913, Q1025** | **Five** questions on profile login hours, and **two of them teach the documented behaviour backwards** — Q766 in its answer, **Q1025 in its explanation**. Q385 and Q564 duplicate each other. **Keep Q913** (which time zone applies) **and Q1025** (re-keyed answer is already right — just replace the `Why:`). Delete Q385, Q564 and Q766. |
| D27 | User Alias | **Q883, Q1000** | Q883 asks the maximum length (8); Q1000 asks whether it must be unique (no). Two halves of one concept — merge into a single question covering length and uniqueness, and contrast with **Username** (globally unique) and **Community Nickname** (unique within the org). |
| D28 | Custom field deletion — what *blocks* it | **Q1033**, and overlapping with **D25** | Q1033 asks what prevents deletion; Q830/Q853/Q986/Q991 ask what happens *after* deletion. Keep both concepts but merge each cluster down to one question, and make sure the "blocked by" list is complete: field dependency, formula, validation rule, **workflow field update**, Apex, Visualforce, custom report type. |
| D29 | Topic 1 **Q1133 = Q1070** | Q1070 and Q1133 | Identical scenario, identical options, identical answer (running user + shared folder under a private model). **Keep Q1133** — its explanation additionally explains why a **dynamic dashboard** fails, and its option D does not contain mojibake. Delete Q1070. |
| D30 | Topic 1 **Q1150 = Q1030** | Q1030 and Q1150 | "How many users on the Add Multiple Users page?" — same question, same options, answer **10**. The only difference is 25 licences vs 15, and both are red herrings. **Keep Q1150**, whose explanation adds the practical follow-through. Delete Q1030. |
| D31 | Sales Process + Record Type | **Q1102, Q1134, Q1142** | Three questions teaching one pattern: *new stage values → new Sales Process → new Opportunity Record Type*. All three are correct and well explained, so nothing is being taught wrongly — but three is two too many. **Keep Q1142**, whose stem lists both stage sets side by side and is the clearest. |
| D32 | Minimum Access profile / Lightning Experience User | **Block-A Question 1 and Block-C #7** | ⚠️ **Word-for-word identical stems and options** (only B and C are swapped in order), sitting about 100 lines apart at the end of the file. Block-A's copy is answered; Block-C's copy has **no answer at all**. **Keep Block-A Question 1** and delete Block-C #7. |
| D33 | Time-based case escalation to a queue | **Q1163 and Q1165** | Two consecutive questions (with Q1164 between them) that test the same single fact: *only an escalation rule has a timer*. Q1163 adds the "last modification time + Age Over 3 hours" detail, so it is the more instructive of the two. **Keep Q1163**, delete Q1165. |
| D34 | Deleted custom field → 15 days | **the first `1074.` block (line 8663)** | Fifth copy of the fact already logged in **D25** (Q830, Q853, Q986, Q991). Delete it. |
| D35 | Record types drive sales processes | **Q1162** | A fourth member of the **D31** family, worded as "which feature should the admin use" rather than "what should the admin build". Close enough to be redundant. Delete, or keep **only** if you want one feature-identification variant alongside the build variant (Q1142). |
| D36 | 90-day pipeline → Kanban list view | 🚨 **Topic 1 Block-C #6 and Topic 2 Q1‑Q6** | **Word-for-word identical** across the two files, including all four option texts. The Topic 1 copy has **no answer**; the Topic 2 copy is answered and explained. **Keep Topic 2 Q6, delete the Topic 1 copy.** First confirmed cross-file duplicate. |
| D37 | Lines of business × audience = record types × layouts | **Topic 1 Q1166 and Topic 2 Q4** | Same question, numbers rearranged (T1 uses 3×2=6 for Sales/Marketing; T2 uses 3×2=6 for Sales/Service). Keep **one**. Topic 2 Q4's option set is cleaner. *(See also the related family T2 Q28 and T2 Q36.)* |
| D38 | Custom Lead field must be mapped at conversion | **Topic 1 Block-A Q7, Topic 2 Q5 and Topic 2 Q53** | Three copies of one teaching point — create the target field, then **Map Lead Fields**. T1 Block-A Q7 and T2 Q53 are the *same* question (Lead → Contact) with the options reordered; T2 Q5 varies it to Lead → Opportunity. **Keep T2 Q53 and T2 Q5; delete Topic 1 Block-A Q7.** |
| D39 | Sales processes × record types × page layouts | **Topic 2 Q28 and Topic 2 Q36** | Both test the same arithmetic — *different stages means a separate sales process, delivered through a separate record type.* Q28 asks for the count (3/3/3), Q36 asks for the feature. **Keep Q28**, which forces the student to work out the numbers. *(Related to **D37** and the T1 **D31** family — this pattern now appears **seven** times across the two files.)* |
| D40 | Two things found on AppExchange | 🚨 **Topic 1 Block-C #11 and Topic 2 Q39** | Identical stem and identical four options (Communities / Consultants / Customers / Components). The Topic 1 copy has **no answer**. **Keep Topic 2 Q39, delete the Topic 1 copy.** |
| D41 | Reassign a departed rep's records and keep the teams | 🚨 **Topic 1 Block-C #1 and Topic 2 Q51** | Same stem; the option lists differ only in order (Mass Transfer / Data Loader / Data Import Wizard / Dataloader.io). The Topic 1 copy is the **unnumbered** one and has **no answer**. **Keep Topic 2 Q51, delete the Topic 1 copy.** |
| D42 | Reps see too much data on a dashboard | 🟢 **Topic 2 Q24, Q92 and Q152** | **Three copies.** Q92 and Q152 are identical and **correct** — option D reads *"Dashboard's running user"*. **Q24 is the broken one**: its option D reads *"Dynamic Dashboards"*, which is the **cure**, not the cause. **Keep one of Q92/Q152, delete Q24 and the other.** Resolves **C23**. |
| D43 | Creating recurring tasks | **Topic 2 Q27 and Topic 2 Q96** | Q96 asks only for the Activity Settings switch; **Q27** asks for that **plus** the *Create Recurring Series of Tasks* field on the page layout — which is the half people actually forget. **Keep Q27, delete Q96.** |
| D44 | Business hours per time zone | 🚨 **Topic 1 Block-A Q2 and Topic 2 Q104** | **Word-for-word identical**, including all four options. The Topic 1 copy sits in the malformed appended block. **Keep Topic 2 Q104.** |
| D45 | External ID for matching an external system | **Topic 2 Q75, Q108 and Q138** | **Three copies of one fact.** Q108's distractors are the best — it forces the student to separate the **tool** (Data Loader) from the **schema mechanism** (External ID). **Keep Q108, delete Q75 and Q138.** |
| D46 | Single value against a goal → Gauge | 🚨 **Topic 2 Q127 and Topic 2 Q136** | **Word-for-word identical**, only nine questions apart, same four options. Pure duplication. **Delete one.** |
| D47 | Route cases by account tier to two queues | 🚨 **Topic 1 Block-C #4 and Topic 2 Q132** | Same stem (Silver/Gold → Regular queue, Platinum → Priority queue), same four options including the fabricated "Case Rules". The Topic 1 copy has **no answer**. **Keep Topic 2 Q132.** |

### 🔴 Topic 2 repeats itself from Q136 onward — duplicates D48–D58

> Every entry below is a **within-Topic-2** repeat discovered in Batch 23. Fourteen of the thirty-five questions in Q136–Q170 are re-runs of Q13–Q135.

| # | Topic | Original → repeat | Recommendation |
|---|---|---|---|
| D48 | Reproducing a user's error with *Login as* | **Q13 → Q148** | **Keep Q148.** It adds the option *"Ask the user for their password"*, which lets the explanation make a security-compliance point Q13 cannot. |
| D49 | Child records must survive parent deletion → lookup | **Q90 → Q149** | Word for word. **Keep either, delete one.** Note that **Q70 still contradicts both** — see **C28**. |
| D50 | Different Web-to-Lead replies by Industry | **Q84 → Q153** | Word for word, same answer, near-identical explanation. **Delete one.** |
| D51 | Child → parent field update | **Q99 → Q154** | Word for word. Both key **Process Builder**, which is retired. **Delete one and change the survivor's option D to Flow Builder.** |
| D52 | Self-serve case creation | **Q95 → Q156** | Word for word. **Delete one.** |
| D53 | Three password policies | **Q126 → Q158** | ✅ **Keep Q158, delete Q126.** Q158 gives the **correct** reason for excluding *Maximum Invalid Login Attempts*; Q126 gives a false one. Keeping Q158 closes **C30**. |
| D54 | IP restrictions and Enforce Login IP Ranges | **Q98 → Q159** | Word for word. **Delete one.** |
| D55 | Stage-gating opportunity fields | **Q78 → Q167** | ⚠️ **Both explanations are broken and they break differently** — Q78's argues for A and C, Q167's argues for A, B and D, and the key is B, D, E. **Delete one and rewrite the survivor's explanation from scratch.** |
| D56 | Distributing a screen flow to Cases | **Q103 → Q169** | **Keep Q103** — its explanation (layouts carry fields, Lightning pages carry components) teaches the distinction properly. Q169's is weaker. |
| D57 | Nobody can access a custom report type | 🔴 **Q101 → Q155** | ❌ **They disagree.** Q101 keys **C, D** (correct); Q155 keys **A, D** and declares *In Development* harmless, which is false. **Delete Q155, keep Q101.** See **C31**. |
| D58 | Diagnosing a flow launched by a process | 🔴 **Q109 → Q164** | ❌ **They disagree.** Q109 keys **A and D** on a stem with no *"(Choose two.)"*; Q164 keys **D only** and explains why. ✅ **Keep Q164, delete Q109** — this also removes the malformed-question defect. See **C32**. |
| D59 | Multi-select picklist → picklist | **Q125 → Q174** | Word for word. Both repeat the same overstatement — the conversion **keeps the first value**, it does not clear everything. **Delete one, fix the survivor.** |
| D60 | Credit team members by level of effort → Splits | **Q107 → Q175** | Word for word. Neither copy names **overlay splits**, which is the split type the stem describes. **Delete one, improve the survivor.** |
| D61 | Quick action in the Salesforce mobile app | 🟢 **Q60 → Q179** | ✅ **Keep Q179.** Q60's answer line uses the one-off label `Certified Correct Answer:` **and** restates the full option text, and its timestamp starts with a stray `#t`. Q179 is clean. |
| D62 | Automating the case-closed email | **Q79 → Q182** | Word for word. Both need the Lightning footnote about the **Close Case action layout**. **Delete one.** |
| D63 | Security Health Check | **Q71 ≈ Q184** | Same feature, two angles — Q71 asks for a security **summary**, Q184 asks to **identify and fix** session vulnerabilities. Different enough to keep both, but be aware they overlap. |
| D64 | Create a renewal opportunity on close | 🟢 **Q133 → Q190** | ✅ **Keep Q190, delete Q133.** Q133 offers **Process Builder** and keys it correct (B, D); Q190 omits Process Builder and keys cleanly to **Flow Builder**. See **C33**. |
| D65 | Campaign ROI by month and series | **Topic 1 Block-A Q3 → Topic 2 Q192** | Word for word — Campaign Hierarchy with monthly children rolling into a parent. **Keep Topic 2 Q192**; the Topic 1 copy sits in the malformed appended block. |
| D66 | Two brandable areas of the mobile app | 🟢 **Topic 1 Block-C #5 → Topic 2 Q193** | ✅ **Keep Q193, delete Block-C #5.** Block-C #5 offered *"Header background color"* **and** *"App header color"* as two options meaning the same thing (flagged in Batch 18). Q193's option set is clean and it has an answer. |
| D67 | What prevents deactivating a user | **Q74 → Q219** | Same two facts (custom hierarchy field; sole recipient of a workflow email alert) with the options reshuffled. **Keep Q74** — its rebuttals of the role-hierarchy and territory distractors are fuller. |
| D68 | Case policy: acknowledge, assign, escalate | 🟢 **Q143 → Q224** | ✅ **Keep Q224, delete Q143.** Q143's option set omitted **queues/assignment rules** even though its stem demanded assignment, and its explanation admitted the gap (*"but looking at the options…"*). Q224 offers *Auto-response rules, Queues, Escalation Rules* and keys cleanly. |
| D69 | Conditional visibility on a flow screen | **Q112 → Q228** | Same stem and answer; only option D is reworded. **Keep Q112** — its rebuttal explains the *choice filter vs field visibility* distinction, which Q228's does not. |

> 🔴 **Act on this before anything else.** Roughly **40% of Q136–Q170 is duplicated content**. De-duplicate first, or every formatting and obsolescence fix has to be applied twice.

> **Pattern worth acting on.** D36, D40 and D41 are all the same finding: **Topic 1's unanswered "Block C" tail is substantially a duplicate of material already answered in Topic 2.** Rather than writing answers into Block C, the cleanest fix is to **delete Block C entirely** and keep Topic 2 as the single source for those items. Check each of the 15 against Topic 2 before deleting.

---

# BATCH 5 — File: `Admin-201 Topic 1.md`, Questions 121–150

> **This is the weakest batch so far.** Four questions are disputed, one has a blank answer line, and two new internal contradictions surfaced (Q125 vs Q45, and Q150 vs Q149).

---

### Topic 1 — Q121. Viewing contacts associated with a case in the console
**Your answer:** D (The mini page layout must be modified)
**Verdict: CORRECT / OBSOLETE**

Correct for the Classic Agent Console — hover and sidebar detail content comes from the **mini page layout**.

**Obsolete:** the Classic Console and mini page layouts are retired. In Lightning this is handled by **compact layouts** and the Lightning App Builder. Keep for the legacy key only.

**Note this for Q146 below** — Q121 correctly says mini page layouts drive hover content, which is the fact that makes Q146's answer look wrong.

---

### Topic 1 — Q122. The formula editor may be used everywhere EXCEPT
**Your answer:** C (Default Values on Standard Fields)
**Verdict: CORRECT**

Accurate — standard fields have no default value setting, so there is nowhere to invoke the formula editor. This is the same fact as **Q144**, where your answer is also correct and consistent.

---

### Topic 1 — Q123. AppExchange application types EXCEPT
**Your answer:** C (Provisional)
**Verdict: CORRECT / OBSOLETE**

Native, Composite and Client were the legacy classifications; "Provisional" was never one. Correct, but this taxonomy is no longer used by Salesforce. Low study value.

---

### Topic 1 — Q124. All of these are true about Default Sales Teams EXCEPT
**Your answer:** D (may be added manually to an account record)
**Verdict: CORRECT**

Default **Sales** Teams belong to Opportunities; Accounts have their own separate **Default Account Team**. Explanation is accurate and draws the distinction correctly. This underpins **Topic 2 Q189**, where Account Teams are the right answer — consistent.

---

### Topic 1 — Q125. Which one does NOT apply to Custom Formula Fields?
**Your answer:** D (Custom Formula Fields can calculate across objects)
**Verdict: DISPUTED — and it contradicts your own Q45.**

**The contradiction:** 
- **Q45** asks "A cross object formula references fields from parent objects" → you answered **True**. 
- **Q125** says formula fields "can calculate across objects" does **not** apply.

Those two statements cannot both be right as worded. Cross-object formulas are a real, everyday feature — that is precisely what they do.

**What is actually true:**
- Formula fields **can** reach **upward** to parent records across relationships (up to 10 relationships deep). This is a cross-object formula.
- Formula fields **cannot** reach **downward** to aggregate child records. That requires a **roll-up summary field** (master-detail only) or Apex.

Your explanation understands this correctly — it explains the upward/downward distinction well. The problem is the **option wording**: "calculate across objects" reads as describing cross-object formulas, which do exist.

**Recommended fix:** reword option D to *"Custom Formula Fields can aggregate values from child records"* — which is unambiguously false and makes D the clean answer. Your selection of D then becomes correct without contradicting Q45.

---

### Topic 1 — Q126. Users can be deleted from Salesforce
**Your answer:** B (False)
**Verdict: CORRECT**

Consistent with Q17. Your explanation adds the useful detail that **freezing** is the fallback when deactivation is blocked by dependencies — which is exactly what **Topic 2 Q52** tests. Accurate and complete.

---

### Topic 1 — Q127. Customizable Forecasting — which forecast dates can be set?
**Your answer:** E (Close Date, Product Date, Schedule Date)
**Verdict: CORRECT / OBSOLETE**

Correct for Customizable Forecasting, which Salesforce **retired**. Modern orgs use Collaborative Forecasts. Keep for the legacy key; do not revise for a current exam.

---

### Topic 1 — Q128. Best component to list the top five sales performers
**Your answer:** B (Table)
**Verdict: CORRECT**

A leaderboard needs multiple rows and multiple columns — that is a table. Metric and Gauge display a single value; a chart visualises rather than lists. Explanation is accurate.

Good contrast with **Q127 in Topic 2** and **Q136 in Topic 2**, where a **Gauge** is correct because the requirement is one value against a target. Your answers across all three are consistent and correctly reasoned.

---

### Topic 1 — Q129. Custom formula fields are recalculated...
**Your answer:** D (Each time a user views the record)
**Verdict: CORRECT**

Formula fields are evaluated at runtime and are never stored. Explanation is accurate.

> **Triple duplicate:** this identical fact is asked three times in Topic 1 — **Q129, Q156 and Q444**. All three of your answers agree. Logged.

---

### Topic 1 — Q130. Opportunity defaults when converting a lead
**Your answer:** A
**Verdict: CORRECT**

Stage defaults to the first picklist value, Amount is blank, and Close Date defaults to the **last day of the current fiscal quarter**. Explanation is accurate.

---

### Topic 1 — Q131. How many fields may a custom lead field map to?
**Your answer:** The file contains an **empty `Answer:` line**, followed by a second line reading `Answer: C`.
**Verdict: BLANK ANSWER LINE — flagged as requested. The intended answer C is correct.**

C is right: one custom lead field maps to one custom field on the **Account**, one on the **Contact** and one on the **Opportunity** — three in total.

**Action needed:** delete the stray empty `Answer:` line. As it stands, any tool parsing this file would read a blank answer for this question.

> This is the same fact as **Q113** and **Topic 2 Q223**. All three of your answers agree.

---

### Topic 1 — Q132. Can a page layout be associated with a record type?
**Your answer:** A (True)
**Verdict: CORRECT**

Layout assignment is by **Profile + Record Type**. Explanation is accurate.

---

### Topic 1 — Q133. Which object relationship is NOT allowed?
**Your answer:** B (Custom object as master, standard object as detail)
**Verdict: CORRECT**

**A standard object can never be the detail side of a master-detail relationship.** This is a hard platform rule and a reliable exam question. Explanation is accurate and the eliminations are right.

---

### Topic 1 — Q134. All of these may happen on a Workflow Rule EXCEPT
**Your answer:** D (Create an Event)
**Verdict: CORRECT**

Workflow can create a **Task** but never an **Event**. Consistent with Q85. Explanation is accurate.

---

### Topic 1 — Q135. Record Type may determine the default value of a picklist field
**Your answer:** A (True)
**Verdict: CORRECT**

Each record type sets both the available values and the default value per picklist. Explanation is accurate.

---

### Topic 1 — Q136. You can use standard reports when creating dashboards
**Your answer:** A (True)
**Verdict: CORRECT** — and this is the answer I recommend standardising on.

Your "Certified Resolution" line states the rule correctly: a standard report works as a dashboard source **provided it is grouped (Summary/Matrix) or is Tabular with a row limit**. That is the real constraint — report *format*, not standard-versus-custom origin.

**This directly contradicts Q64**, which marks the same idea False. See contradiction **C2**. Q136 is the position to keep.

**Formatting to clean up:** this question carries a green tick emoji and **two** `Timestamp:` lines.

---

### Topic 1 — Q137. Assets are related to which objects?
**Your answer:** B (Products, Cases, Accounts, Contacts)
**Verdict: CORRECT**

An Asset links to the Product purchased and to the Account or Contact that owns it, and can be referenced on Cases. No standard relationship to Opportunities or Opportunity Line Items. Explanation is accurate.

---

### Topic 1 — Q138. All of these may be uploaded to AppExchange EXCEPT
**Your answer:** D (Custom Assignment Rules)
**Verdict: CORRECT**

Assignment rules are not packageable components. Tabs and custom fields on both custom and standard objects are. Explanation is accurate.

---

### Topic 1 — Q139. Which objects can be customized for history tracking?
**Your answer:** B (Cases, Leads, Solutions, Contracts, and Custom Objects)
**Verdict: DISPUTED — the answer is the best available, but the explanation is factually wrong.**

**The problem with the explanation:** it states *"Other standard objects like Campaigns do not support field history tracking."* **That is incorrect.** Campaign **does** support field history tracking — Object Manager → Campaign → Fields & Relationships → Set History Tracking.

**The deeper problem — this question is structurally broken.** Field history tracking is supported on a long list of objects including Account, Asset, Campaign, Case, Contact, Contract, Lead, Opportunity, Order, Product, Quote, Solution and all custom objects. Check each option against that list:

| Option | Objects listed | All trackable? |
|---|---|---|
| A | Solutions, Cases, Leads, Opportunities | **Yes** |
| B | Cases, Leads, Solutions, Contracts, Custom Objects | **Yes** |
| C | Campaigns, Contracts, Custom Objects, Solutions | **Yes** |
| D | Opportunities, Leads, Contracts | **Yes** |

**Every option is a valid list.** B is keyed only because it is the longest and most inclusive, not because the others are wrong.

**Recommendation:** keep B, but **delete the false claim about Campaigns** from the explanation and replace it with "B is the most complete list offered." Better still, retire the question — it cannot discriminate.

---

### Topic 1 — Q140. Fields hidden by FLS are still subject to validation rules
**Your answer:** A (True)
**Verdict: CORRECT**

Validation runs server-side against the whole record, regardless of what the user can see. This creates the real-world trap where a user is blocked by a rule referencing a field they cannot even view. Explanation is accurate and complete.

---

### Topic 1 — Q141. With Read Only access to an account, can you add a task or event?
**Your answer:** A (True)
**Verdict: CORRECT**

Logging activity requires **Read** access to the parent plus create permission on Activities — not Edit on the parent. Explanation is accurate.

---

### Topic 1 — Q142. Custom formula fields do NOT support which expression?
**Your answer:** A (Adding multiple records together)
**Verdict: CORRECT**

Correct, and notably this question is worded **better than Q125** — "adding multiple records together" is unambiguously outside a formula field's reach, whereas Q125's "calculate across objects" is not. If you fix Q125, use this wording as the model.

Your explanation correctly confirms IF/THEN/ELSE, text concatenation, and HYPERLINK/IMAGE are all supported. Complete.

---

### Topic 1 — Q143. A portal user may close cases using Suggested Solutions
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy Self-Service Portal, which Salesforce **retired**. Solutions themselves are superseded by Salesforce Knowledge. Keep for the legacy key only.

---

### Topic 1 — Q144. Default values are available for standard text fields
**Your answer:** B (False)
**Verdict: CORRECT**

Default values are a custom-field feature. Your explanation correctly lists the workarounds — URL parameters, quick action predefined values, automation. Consistent with Q122. Accurate and complete.

---

### Topic 1 — Q145. Opportunity Pipeline and Forecast reporting EXCEPT
**Your answer:** C (Pipeline reports may be overridden)
**Verdict: CORRECT**

Forecasts support manual overrides; reports render live record data and cannot be overridden. Explanation is accurate.

---

### Topic 1 — Q146. Recent Item and Lookup Hover Views use the:
**Your answer:** C (List Views)
**Verdict: DISPUTED — I believe this is wrong, and your own Q121 says so.**

**What actually drives hover content:** in Salesforce Classic, Hover Details — shown when hovering a link in Recent Items or a lookup field — render the fields defined on the **mini page layout**. This is documented behaviour, and it is exactly what **your own answer to Q121 states**.

**The problem:** "Mini Page Layout" is not offered as an option. The four choices are Sidebar, Edit Page, List Views and Related Lists — and **none of them is the correct driver.** Your explanation tries to bridge the gap by invoking Search Layouts, but Search Layouts govern *lookup dialog columns and search results columns*, which is a different feature from hover detail content.

**Recommendation:** this question has no correct option as written. Either add "Mini Page Layout" as option E and make it the answer, or **retire the question**. It also tests a Classic-only feature that no longer exists in Lightning.

---

### Topic 1 — Q147. Name one place where inline editing is not possible (Choose 2)
**Your answer:** B, C (Related Lists, Edit Page)
**Verdict: CORRECT / CAVEAT**

Acceptable for the legacy key. Two issues worth noting:

1. **The stem contradicts itself** — "Name **one** place... (Choose **2** answers)." Fix to "Name **two** places where inline editing is not possible."
2. **Outdated in Lightning** — Lightning supports inline editing in related lists (including Enhanced related lists) and in list views. Option C remains trivially true, since an Edit page is by definition not inline editing.

---

### Topic 1 — Q148. Long-running searches and filters may be cancelled
**Your answer:** A (True)
**Verdict: CORRECT / OBSOLETE**

Acceptable for Classic, where a long search could be cancelled. Minimal study value — this is UI trivia, not an exam objective in any current release.

---

### Topic 1 — Q149. What information does the Company Profile hold?
**Your answer:** A, B, C (Language/Locale/Time Zone; Licenses/Storage; Fiscal Year)
**Verdict: CORRECT**

All three correct options identified, and **excluding Forecasting (D) is right** — forecast settings live in their own Setup area. Explanation is accurate.

**Remember this answer for Q150 immediately below — they contradict each other.**

---

### Topic 1 — Q150. What information may be updated on the Company Profile?
**Your answer:** `E. All of the above (or A, B, and C depending on the specific exam attempt configuration)`
**Verdict: DISPUTED — hedged answer, and it contradicts Q149.**

**The contradiction is direct:**
- **Q149** → you answered **A, B, C**, and explicitly excluded Forecasting because it "is managed separately under Forecast Settings."
- **Q150** → answering **E (All of the above)** *includes* Forecasting as part of the Company Profile.

The same reasoning cannot produce both answers one question apart.

**My recommendation: A, B, C.** Company Profile / Company Information covers organisation name, primary contact, address, default language, locale, time zone, currency and fiscal year. **Forecast settings are configured in their own Setup area, not on the Company Profile.** Q149's reasoning is the correct one.

**Action needed:** change Q150 to `Answer: A, B, C`, adjust the stem to "(Choose three)", and delete the hedging note. Then Q149 and Q150 finally agree.

---

## Batch 5 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 18 | 122, 124, 126, 128, 129, 130, 132, 133, 134, 135, 136, 137, 138, 140, 141, 142, 144, 145, 149 |
| CORRECT / OBSOLETE | 5 | 121, 123, 127, 143, 148 |
| CORRECT / CAVEAT | 1 | 147 |
| DISPUTED | 4 | **125, 139, 146, 150** |
| INCORRECT | 0 | — |
| BLANK ANSWER LINE | 1 | **131** |

**Headline for this batch — five things to act on:**

1. **Q125** — option D's wording ("calculate across objects") contradicts Q45. Reword to "can aggregate values from child records." Use **Q142**'s phrasing as the model; it gets this right.
2. **Q139** — the explanation's claim that Campaigns don't support field history tracking is **false**. Also, all four options are valid lists, so the question cannot discriminate.
3. **Q146** — hover details are driven by the **mini page layout**, which isn't an option. No answer is correct as written.
4. **Q150** — contradicts Q149 one question earlier. Change to **A, B, C**.
5. **Q131** — stray blank `Answer:` line above the real answer. Delete it.

---

# BATCH 6 — File: `Admin-201 Topic 1.md`, Questions 151–182

> **Largest numbering gap in the file sits at the end of this batch: Q182 jumps straight to Q208. Questions 183–207 (25 questions) do not exist.**
>
> **This batch is heavily legacy.** Roughly a third of it tests Spring '11 release trivia, retired features (Chatter Desktop, Tags, Customizable Forecasting) or developer-level Apex content that is not on the Administrator exam at all.

---

### Topic 1 — Q151. Standard Fiscal Years follow the Gregorian calendar but can start on any month
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate and consistent with Q7. Explanation correctly contrasts this with 4-4-5 and 13-period custom structures.

---

### Topic 1 — Q152. Forecasting can be used with Custom Fiscal Years
**Your answer:** A (True)
**Verdict: CORRECT / CAVEAT** — true, but only because "Forecasting" here means the *customizable* kind.

Read alongside **Q2** ("Custom Fiscal Years means you cannot use standard forecasting" → True), these two look contradictory but are not:
- **Standard** forecasting is incompatible with custom fiscal years.
- **Customizable Forecasting** and modern **Collaborative Forecasts** both work with them.

**Suggested fix:** change the Q152 stem to *"Customizable Forecasting can be used with Custom Fiscal Years"* so the pair is unambiguous on sight.

---

### Topic 1 — Q153. Where are active currencies located?
**Your answer:** C (Company Profile)
**Verdict: CORRECT**

The org's list of active currencies and conversion rates lives under Company Profile / Company Information. Your explanation correctly notes that a user's *personal* currency is separate. Accurate.

---

### Topic 1 — Q154. Main Setup areas EXCEPT
**Your answer:** C (Data Setup)
**Verdict: CORRECT / OBSOLETE**

Correct for Classic, where the tree was Personal Setup / App Setup / Administration Setup. **That navigation no longer exists** — Lightning Setup is organised completely differently. Legacy key only.

---

### Topic 1 — Q155. What does a Profile control?
**Your answer:** `A, B, C, and E (or All except Data Visibility / Record-level Data)`
**Verdict: CORRECT / CAVEAT** — the reasoning is right; the answer line is hedged and one option is garbled.

**A, B, C, E is correct.** Profiles control app access, record type availability, object and system permissions, and login hours / IP ranges. **Excluding D (Data Visibility) is right** — record-level visibility comes from OWD, role hierarchy and sharing.

**Two clean-ups needed:**
1. Commit to `Answer: A, B, C, E` and delete the "or All except..." hedge.
2. **Option E reads "Hours of IP Address", which is garbled.** It should be *"Login Hours and IP Ranges"*. As written the option is close to meaningless.

---

### Topic 1 — Q156. When are Formula Fields recalculated?
**Your answer:** A (Calculated automatically)
**Verdict: CORRECT**

Accurate — evaluated at runtime, never stored. Consistent with Q129 and Q444.

> **Duplicate group D6** — third of three identical questions.

---

### Topic 1 — Q157. How many fields can be displayed on a customizable related list?
**Your answer:** B (10)
**Verdict: CORRECT**

10 columns is the page layout limit. Explanation is accurate.

This is the constraint that makes **Topic 2 Q57** work — where displaying more than 4 fields requires switching the Lightning component to **Enhanced List**. Your answers are consistent.

---

### Topic 1 — Q158. A user can own a record and not see it without Read permission
**Your answer:** A (True)
**Verdict: CORRECT**

Object-level permissions are the outer gate — ownership cannot override a missing Read. Explanation is accurate.

> Same fact is asked again at **Q351**, where your answer also agrees. Logged as a duplicate.

---

### Topic 1 — Q159. What can a Task do that an Email Alert cannot? (Choose 2)
**Your answer:** A and B
**Verdict: CORRECT / CAVEAT** — right, but the question is padded.

A and B are the true statements; C and D are their inversions.

**Why it is weak:** option B is simply option A restated as a negative. The question offers two statements and their two mirror-image opposites, so it tests reading comprehension rather than Salesforce knowledge. Harmless, but low value — consider retiring.

---

### Topic 1 — Q160. What do you need to specify when you schedule a report?
**Your answer:** `D ... (or B ...)`
**Verdict: DISPUTED — the question is broken and duplicates Q164. Recommend deleting it.**

**None of the options answers the question asked.** The stem asks what you must *specify*. The real answers would be running user, frequency, start and end dates, preferred start time, and recipients. Instead:
- **Option D** is an *action* ("click Run Report and choose Schedule Future Runs"), not something you specify.
- **Option B** is a *permission prerequisite*, not something you specify.
- Options A and C are distractors about profiles and roles.

**It also duplicates Q164**, which asks the same thing with better options (Objects / Date Range / Location / Frequency) and gets a sensible answer.

**Text corruption:** options A and B contain mojibake where quote marks should be — `ג€Schedule Reportsג€`. This is a character-encoding failure from the original copy-paste and needs repairing regardless.

**Recommendation: delete Q160, keep Q164.**

---

### Topic 1 — Q161. Prerequisite for enabling Territory Management
**Your answer:** B (Customizable Forecasting)
**Verdict: CORRECT / OBSOLETE**

Correct for **original** Territory Management, which did require Customizable Forecasting.

**Obsolete:** original Territory Management is retired. Its replacement, **Enterprise Territory Management (Territory Management 2.0)**, has **no such dependency**. Do not carry this into a modern exam.

> **Duplicate group** — this exact fact is asked **four times** in Topic 1: Q161, Q234, Q288, Q440. All four of your answers agree. Keep one.

---

### Topic 1 — Q162. What is a Managed Package?
**Your answer:** A, B
**Verdict: CORRECT**

Both correct options identified. Your explanation captures the defining trait — locked components enabling seamless upgrades — which is precisely why **Topic 2 Q18** requires a *muting permission set* rather than editing the package. Consistent.

---

### Topic 1 — Q163. Where is a Campaign associated with a Lead visible? (Choose 2)
**Your answer:** A, B
**Verdict: CORRECT**

Campaign History on the Lead record, and campaign reports. Your rejection of D is well reasoned — no opportunity exists until conversion. Accurate.

---

### Topic 1 — Q164. What needs to be specified to schedule a Report?
**Your answer:** `B and D (or D in single-select formats)`
**Verdict: CORRECT / CAVEAT** — right answer, hedged presentation.

**B and D is correct** — the schedule screen requires frequency plus a start/end date range. Your note that folder/location is chosen at *save* time, not at schedule time, is the right distinction.

**Action:** commit to `Answer: B, D` and mark the stem "(Choose two)". This is the question to keep; delete Q160.

---

### Topic 1 — Q165. What does Salesforce provide for restricting login access? (Choose 3)
**Your answer:** A, B, C
**Verdict: CORRECT**

All three correct options identified, and the reason D fails is exactly right: **login hours exist only at profile level — there is no org-wide login hours setting.**

Your explanation also correctly distinguishes profile IP ranges (hard block) from org-wide trusted IPs (soft, identity verification). Consistent with Q23 and Q25. One of the stronger explanations in the file.

---

### Topic 1 — Q166. Workflow Rules consist of the following components
**Your answer:** A, B, C, E
**Verdict: CORRECT / CAVEAT** — **the answer is right but the explanation ends by contradicting it.**

A, B, C, E is correct: Task, Outbound Message, Field Update, Email Alert are the four workflow action types. D ("Workflow Actions") is the umbrella term, not a component.

**The problem:** the final sentence of your explanation reads *"Because D (Workflow Actions) represents the overall umbrella component containing Tasks, Outbound Messages, Field Updates, and Email Alerts, **all options listed are valid components**."*

That sentence says the answer is **all five**, directly contradicting the A, B, C, E answer line three lines above it. **Delete that sentence.**

**Also:** your mnemonic is labelled "FTEO" but the list is Task, Outbound Message, Field Update, Email Alert. The letters don't match the order given — tidy or drop it.

**Formatting:** this question uses `Correct Answer:` while the rest of the file uses `Answer:`.

---

### Topic 1 — Q167. Are Tags searchable from the standard Search component?
**Your answer:** A (Yes)
**Verdict: CORRECT / OBSOLETE**

True in Classic. **Tags were removed in Lightning Experience.** Legacy key only.

---

### Topic 1 — Q168. What happens when a user clicks "Create New Apps"?
**Your answer:** C (Taken to developer.force.com)
**Verdict: CORRECT / OBSOLETE**

Correct for the Classic app menu. This is UI trivia about a page that no longer exists. **Zero exam value** — recommend retiring.

---

### Topic 1 — Q169. Can you set a tab as the Landing Tab while creating it?
**Your answer:** B (False)
**Verdict: CORRECT**

The landing tab is set on the **App**, not during tab creation. Explanation is accurate and names the right Setup location.

---

### Topic 1 — Q170. Spring '11 — Dynamic Dashboards launched for which edition?
**Your answer:** `A. Developer Edition (as well as Enterprise and Unlimited Editions)`
**Verdict: DISPUTED — hedged answer, and it disagrees with your own Topic 2 Q207.**

**The cross-file conflict:**
- **Topic 1 Q170** → answer given as **A**, with the other editions mentioned only in a parenthetical.
- **Topic 2 Q207** → same question, answered cleanly as **A, C, D**.

**A, C, D is correct** — Developer, Enterprise and Unlimited. Professional Edition is excluded. Your own explanation says so and even gives the per-edition counts (3 / 5 / 10).

**Action:** change Q170 to `Answer: A, C, D` so it matches Topic 2 Q207, and mark the stem "(Choose three)".

**Also obsolete:** "Spring '11" release trivia has no place on a current exam.

---

### Topic 1 — Q171. Trigger events allowed on FeedItem and FeedComment
**Your answer:** B (Insert, Delete)
**Verdict: CORRECT / OUT OF SCOPE**

The answer is right, but **this is Apex developer content, not Administrator content.** Trigger event support on Chatter feed objects appears on the Platform Developer exam, never on Admin 201. Recommend removing it from an admin study set.

---

### Topic 1 — Q172. Sharing a dashboard component snapshot in Chatter
**Your answer:** D (Yes, and everyone sees it regardless of dashboard access)
**Verdict: CORRECT**

Accurate, and genuinely important: the snapshot is a **static image**, so it bypasses dashboard and report folder security entirely. Anyone who can see the Chatter post sees the data.

Your explanation correctly adds the security warning and the nuance that *clicking through* to the live dashboard still enforces folder permissions. Complete and well judged.

---

### Topic 1 — Q173. Inline editing is available on Visualforce pages
**Your answer:** A (True)
**Verdict: CORRECT / OUT OF SCOPE**

Correct — `<apex:inlineEditSupport>` enables it. Like Q171, this is developer territory rather than admin.

---

### Topic 1 — Q174. Spring '11 — photos in dashboard components
**Your answer:** B (Yes but only in Tables)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy key. Pure release trivia — no current exam value.

---

### Topic 1 — Q175. Which is the new workflow feature of the Spring '11 release?
**Your answer:** B (Flows)
**Verdict: CORRECT / OBSOLETE**

Correct — Visual Workflow debuted in Spring '11. Release trivia, though the irony is worth noting: **Flow is now the primary automation tool**, having replaced Workflow Rules and Process Builder entirely. That part *is* current and heavily examined — see Topic 2 Q49, Q81, Q91, Q135, Q190.

---

### Topic 1 — Q176. Field Sets work on both standard and custom objects
**Your answer:** A (True)
**Verdict: CORRECT**

Accurate. Leans developer-oriented but is legitimate configuration knowledge.

---

### Topic 1 — Q177. Object combination for a Chatter custom report type
**Your answer:** C (Users, User Feed, Comments)
**Verdict: CORRECT / CAVEAT**

C is the right choice for the legacy key.

**The explanation is garbled and needs rewriting.** It reads:
> "Primary Object: Users / Secondary Object **(B)**: User Feed / Tertiary Object **(C)**: Comments"

Those bracketed letters look like option references but are actually being used as list markers, so the explanation appears to cite options B and C while the answer is C. Delete the stray letters.

---

### Topic 1 — Q178. Which setting makes dates display as MM/DD/YYYY?
**Your answer:** A (Locale)
**Verdict: CORRECT**

Accurate, and the US vs UK contrast is a clear way to remember it. Consistent with Q5.

**Two text defects:** option A is spelled **"Local"** and should be **"Locale"**; and the answer line begins with stray asterisks (`**Answer: A`).

---

### Topic 1 — Q179. Which statements are true about Data Validation?
**Your answer:** A, C
**Verdict: CORRECT**

Both correct options identified, and both eliminations are right:
- **B false** — validation rules *evaluate*, they never *update*. That is a field update's job.
- **D false** — the error message is a **required** input; you cannot save a validation rule without one.

The key insight in C — that a rule can reference fields not on the layout — is the same principle as **Q140**. Accurate and complete.

---

### Topic 1 — Q180. Chatter Desktop is not available in which edition?
**Your answer:** A (Free Edition)
**Verdict: CORRECT / OBSOLETE**

Correct for the legacy key. **Chatter Desktop was an Adobe AIR app and has been retired entirely.** No current value.

---

### Topic 1 — Q181. Account, opportunity and case owners may or may not be the same user
**Your answer:** A (True)
**Verdict: CORRECT**

Ownership is tracked per record, per object, independently. Explanation is accurate.

**Typo:** the final line reads `imestamp:` instead of `Timestamp:`.

---

### Topic 1 — Q182. Which file types can you use when exporting reports?
**Your answer:** B, C (CSV and Excel)
**Verdict: CORRECT**

Both correct options identified. Your explanation correctly maps **Formatted Report → Excel** and **Details Only → CSV or Excel**, and correctly rules out PDF as a native export format (printable view is a separate path).

**Formatting:** this question has two consecutive `Answer:` lines — `Answer: BC` then `Answer: B. Comma Delimited (.csv) and C...`. Same duplication defect as Q64 and Q67. Reduce to one.

---

## Batch 6 summary

| Verdict | Count | Questions |
|---|---|---|
| CORRECT | 14 | 151, 153, 157, 158, 162, 163, 165, 169, 172, 176, 178, 179, 181, 182 |
| CORRECT / OBSOLETE | 7 | 154, 161, 167, 168, 174, 175, 180 |
| CORRECT / OUT OF SCOPE | 2 | 171, 173 |
| CORRECT / CAVEAT | 7 | 152, 155, 156, 159, 164, 166, 177 |
| DISPUTED | 2 | **160, 170** |
| INCORRECT | 0 | — |
| BLANK | 0 | — |

**Headline for this batch — four things to act on:**

1. **Q166** — the last sentence of the explanation says "all options listed are valid components," contradicting the A, B, C, E answer directly above it. **Delete that sentence.**
2. **Q160** — broken question (no option answers the stem), duplicates Q164, and contains character-encoding corruption. **Delete it; keep Q164.**
3. **Q170** — should be **A, C, D** to match Topic 2 Q207, which asks the identical question and answers it correctly.
4. **Four hedged answer lines** — Q155, Q160, Q164, Q170 all say "X (or Y depending on...)". Each needs a single committed answer.

**Quality observation:** this batch is the weakest for *relevance* rather than accuracy. Nine of 32 questions test features Salesforce has retired or developer content outside the Admin syllabus. Your answers to them are right — they simply aren't worth revising.

---

## Running list: contradictions between questions

| # | Questions involved | The conflict | Recommended resolution |
|---|---|---|---|
| C1 | Topic 1 Q15 vs Q397 | Q15 says standard profiles cannot be edited; Q397 says admin *can* change settings on the Standard Solution Manager profile | Not a real conflict. **Permissions** are locked; **settings** (tabs, layouts, record types, login hours, IP ranges) are editable. Add that clarifying line to both. |
| C2 | Topic 1 Q64 vs Q136 vs Q381 | Q64 marks "dashboards display data from standard reports" as **False**; Q136 and Q381 both answer **True** | Adopt **True** (the Q136 position). The real constraint is report *format* and folder access, not standard vs custom. |
| C3 | Topic 1 Q45 vs Q125 | Q45 says cross-object formulas reference parent fields (**True**); Q125 says formulas "can calculate across objects" does **not** apply | Reword Q125 option D to "can aggregate values from child records." Both questions then stand. |
| C4 | Topic 1 Q149 vs Q150 | Q149 **excludes** Forecasting from the Company Profile; Q150 answers "All of the above", which **includes** it | Adopt **A, B, C** for Q150. Forecast settings live in their own Setup area. |
| C5 | Topic 1 Q121 vs Q146 | Q121 says mini page layouts drive console hover content; Q146 answers that hover views use **List Views** | Q121 is right. Q146 has no correct option — add "Mini Page Layout" or retire it. |
| C6 | Topic 1 Q170 vs **Topic 2 Q207** | Identical question on Dynamic Dashboard editions; Topic 1 answers **A**, Topic 2 answers **A, C, D** | Adopt **A, C, D**. Developer, Enterprise and Unlimited; Professional excluded. |
| C7 | Topic 1 Q2 vs Q152 | Q2 says custom fiscal years block forecasting; Q152 says forecasting works with custom fiscal years | Reconcilable, not a true conflict. **Standard** forecasting is blocked; **Customizable/Collaborative** forecasting is not. Reword Q152's stem to say "Customizable Forecasting". |
| C8 | Topic 1 **Q241 vs Q333** | Same question, same five options. Q241 answers **A, D** and says *"Campaigns is an object rather than a standard app"*; Q333 answers **A, B, D** and says Campaigns **is** a standard app. | **Real contradiction — Q241 is right.** Campaigns is a standard object/tab inside the Marketing app, never a standard app. Change Q333 to `Answer: A, D`, then delete one of the two. |
| C9 | Topic 1 **Q275 vs Q390** | Both ask for the "best" way to make a field required. Q275 answers **Page Layout**; Q390 answers **Validation Rule**. | **Reconcilable.** Each is right for its own option list — Q275 never offered a validation rule. Add a line to Q275 noting a validation rule would be stronger if available, and note in both that the *actual* best method is the **Required checkbox on the field definition**. |
| C10 | Topic 1 **Q391 vs Q241** | Q391 answers that **Community is NOT** a standard app; Q241's explanation lists **Community among** the standard apps. | **Real contradiction, caused by mixing UIs.** In **Classic**, Community *is* standard and *Service* is not. In **Lightning**, Service is standard and Community is not. Add "in Lightning Experience" to Q391's stem, or delete. Three overlapping "standard apps" questions now exist (Q241, Q333, Q391) — keep one. |
| C11 | Topic 1 **Q353 vs Q384** | Q353's explanation says every user "**must** be assigned to exactly one role"; Q384 correctly answers that **Role is not mandatory** on a user record. | **Q384 is right — roles are optional.** A user has **zero or one** role. Rewrite Q353's explanation; as written it argues for option C, the very option Q353 rejects. |
| C12 | Topic 1 **Q297 vs Q490** (and **Q567**) | Q297 answers **300** for the maximum values in a controlling field; Q490 answers **500**; **Q567's explanation repeats the same invented "300 raisable to 500" claim**. | **Q297 is right — 300 is a hard cap** that Support does not raise. Change Q490 to `Answer: F` then delete it as a duplicate; strip the "up to 500" sentence from Q567. Use Q297's wording as the model in both. |
| C13 | Topic 1 **Q249 vs Q581** | Q249 answers that Printable View **does** preserve formatting *"when exporting to formats like Microsoft Excel"*; Q581 answers that Printable View does **not** display the report in Excel. | **Real contradiction — Q249 is right.** In Classic, a report's **Printable View generates an Excel (.xls) file** with groupings and subtotals intact; **Export Details** gives raw rows. Change Q581 to `Answer: A`. Note that neither question applies in Lightning, where reports have no Printable View button. |
| C14 | Topic 1 **Q766 vs Q385 and Q564** | Q766 answers that login-hour expiry **terminates the session and loses unsaved data**; Q385 and Q564 both correctly answer that the session is **not** terminated — the user can keep viewing the current page but cannot act. | **Q385 and Q564 are right.** Salesforce Help: *"If users are logged in when their login hours end, they can continue to view their current page, but they can't take any further action."* **Delete Q766** — none of its five options states the documented behaviour, so it cannot simply be re-keyed. |
| C15 | Topic 1 **Q986 vs Q991** (and Q986 vs itself) | Q986's explanation says deleted custom fields stay recoverable for **30 days**, and adds that records differ at 15. Q991 answers **15 days** for the same fact. Q986's own answer line (`False`) also contradicts its own explanation. | **15 days is correct for both fields and records.** Deleted custom fields sit in the Deleted Fields list for 15 days, then purge permanently with their data — the same window as deleted records. Rewrite Q986's `Why:` (keeping `Answer: B`), then delete Q986 as part of cluster **D25** and keep **Q991**. |
| C16 | Topic 1 **Q1025 vs Q385, Q564 and Q913** | Q1025's **answer letter (D)** matches Q385 and Q564 — the session is not terminated. Its **explanation** says the opposite: *"Salesforce terminates the active session… unsaved work will be lost"*, which is option C's text. | **The answer is right; the explanation is Q766's error repeated.** Keep `Answer: D` and replace the `Why:` with the Salesforce Help wording: *"If users are logged in when their login hours end, they can continue to view their current page, but they can't take any further action."* Extends **C14** — two of the five login-hours questions currently teach the behaviour backwards. |
| C17 | Topic 1 **Q1033 vs Salesforce Help** | Q1033's explanation states that a custom field **can** be deleted while referenced by a workflow field update. | **It cannot.** Salesforce blocks the delete and names the offending field update in the error. The full block list is: field dependency, formula field, validation rule, **workflow field update**, Apex, Visualforce, custom report type. Page layouts and reports do **not** block. Rewrite the explanation and remove option C, which is otherwise a second correct answer. |
| C18 | Topic 1 **Q823 vs Q1107** | Q823 is keyed so that records in the Recycle Bin **do** count against the org's storage limits. **Q1107's** note says they **do not**. | **The evidence favours Q1107.** Salesforce gives the Recycle Bin its own allowance of **25× your org's data storage** — an allowance that size only makes sense if the Bin is a **separate pool** rather than a charge against data storage. **Recommendation: delete Q823** and keep Q1107, which covers the same ground with a better option list. Do not simply re-key Q823 — verify against Salesforce Help first, because this is the one fact in this report I would want confirmed before it goes into a student's hands. |
| C19 | Topic 1 **Q1112 vs Q872 and Q1145** | Q1112's explanation says *"the **Data Import Wizard** allows you to create **user records** in bulk"*, and its option B names a *"User Import Wizard"*. **Q872** lists the wizard's supported objects and **Q1145** rejects an option specifically because the wizard *"only supports specific standard objects"*. | **Q872 and Q1145 are right.** The Data Import Wizard supports **Accounts, Contacts, Leads, Solutions, Campaign Members, Person Accounts and custom objects** — **not Users**, and there is no separate "User Import Wizard". Rewrite Q1112's option B as *"Use the Add Multiple Users page and leave the Active checkbox unchecked"* and delete the false claim from its explanation. |
| C20 | Topic 1 **Q863 vs Q1107** | Q863 answers that a deleted report **cannot** be retrieved from the Recycle Bin, and invents a *"Deleted folder within the Reports tab"*. **Q1107 option A** — *"You can restore reports and dashboards"* — is keyed **correct**. | **Q1107 is right, and it confirms the Batch 15 finding.** Deleted reports and dashboards go to the Recycle Bin and can be restored within 15 days, provided the folder they lived in still exists. **Re-key Q863 to `A. True`** and delete the invented "Deleted folder" from its explanation — or delete Q863 outright, since Q1107 already covers it. |
| C21 | Topic 1 **Q1164 vs Salesforce Help** | Q1164 is keyed **B, C**, where option C claims *"The active checkbox is unchecked by default"* when a user is created. | **False.** In *Setup → Users → New User*, the **Active** checkbox is **checked by default** and a welcome email is sent (*Salesforce Help: "Add a Single User"*). The option is also logically inconsistent with the stem, which says the user logged in. **Re-key Q1164 to `B, D`** — a **delegated administrator** is deliberately limited to assigned roles, a short profile list and named custom objects, so they cannot perform general admin duties (*Salesforce Help: "Delegate Administrative Duties"*). |
| C22 | Topic 1 **Block-C #12 vs Salesforce Help** | The option set forces a choice between *"**All** activities are attached to the contact, account and opportunity"* (A) and *"**Open activities only** are attached…"* (B). | **Salesforce splits the two:** on lead conversion, **open activities** are attached to the account, contact and opportunity, while **activity history** follows the **contact**. Neither option is fully right, and the question has no answer key to adjudicate. **A is the intended answer**, but the item must be rewritten. ⚠️ **Verify against *Salesforce Help: "Considerations for Converting Leads"* before use.** |
| C23 | **Topic 2 Q24** vs itself | The answer is keyed **D (Dynamic Dashboards)** as the *cause* of reps over-seeing data, but the explanation says dynamic dashboards *"display data according to the viewing user's permissions"*, blames *"a **static** dashboard with a specific running user"*, and concludes that switching **to** a dynamic dashboard **prevents** the problem. | **The explanation is factually right and the key is questionable.** A dynamic dashboard run as the **viewer** respects each rep's Private OWD. The only way D causes over-exposure is the setting *"Let dashboard viewers choose whom they view the dashboard as"* — which the explanation never mentions. **Rewrite the explanation around that setting, or re-key to B.** ✅ **RESOLVED in Batch 21:** **Q92** is the same question with option D replaced by *"Dashboard's running user"* — correct and unambiguous. **Delete Q24, or copy Q92's option D into it.** See **D42**. |
| C24 | **Topic 2 Q12** vs itself | Option **D** reads *"Create a **queue** and a criteria-based sharing rule"*, but the explanation defends it by describing *"a **public group** containing the lead engineers"*. | **Two different things.** A **queue** is not a valid target in a sharing rule's **Share With** list (which offers Public Groups, Roles, Roles and Subordinates, Territories). The explanation is silently defending an option that does not exist on the page. **Re-key to B** — a predefined case team attached by a case assignment rule, with the team role set to Read/Write. |
| C25 | **Topic 2 Q52** vs **Topic 2 Q51** | Q52 asks how to revoke a user's access immediately when they are referenced in a custom hierarchy field. Its `Why:` paragraph reads *"The standard Mass Transfer Tool (Mass Transfer Records) allows an administrator to quickly transfer ownership of multiple Accounts…"* — **word-for-word Q51's explanation**. | **Straight copy-paste error.** The keyed answer (**C, Freeze**) is correct, and the correct reasoning *does* appear below under a second label. **Delete the pasted `Why:` paragraph.** This is the most damaging single defect found in Topic 2 so far, because a student reading top-down meets the wrong explanation first. |
| C26 | **Topic 2 Q42** vs itself, and vs Salesforce Help | The explanation states that *"access granted at a parent folder level applies to all nested subfolders"* (inheritance), then in the next paragraph describes *"sharing only the Helpdesk subfolder directly with Support Agents"* (independent sharing). | **Both cannot be true.** Salesforce documents that report and dashboard **subfolders inherit sharing from the parent and cannot be shared independently**. If so, option B is not buildable and the scenario should be rebuilt as **two top-level folders** instead of a parent with two subfolders. 🚨 **Verify against *Salesforce Help: "Considerations for Report and Dashboard Folders"* before using this question** — second item in the review flagged for direct confirmation. |
| C27 | **Topic 2 Q67** vs **Topic 1 Q1039** | Both questions cover what happens when an import supplies a value that is not in a picklist. Q67 says the value *"is stored **and added to the field's inactive picklist values list**."* My Batch 16 correction to Q1039 phrased it as the value landing **on the record** while the picklist **definition** is untouched. | **Low impact, but fix the wording.** Both agree on the exam-relevant fact: a **restricted** picklist **rejects** the row; an **unrestricted** one **accepts** it. Only the after-effect is described differently. Pick one phrasing, check it against *Salesforce Help: "Restrict Picklist Field Values"*, and use it in both files. Neither answer letter changes. |
| C28 | **Topic 2 Q70** vs **Topic 2 Q90** | Q90 reasons *"when an Account is deleted, the shipments should remain"* → **lookup**, and is keyed correctly. Q70 reasons *"shoe designs should be unable to be deleted"* → **master-detail**, which **cascade-deletes** every design when the product is deleted — the opposite outcome from identical reasoning. | **Q90 is right; Q70 is broken.** Neither relationship type makes a child record undeletable, so Q70's requirement cannot be met as written. On top of that, **Q70's option C places the master-detail field on the Product object**, when it must live on Shoe Design — and Q70's own explanation says so, contradicting the option it defends. **Rewrite Q70's stem and option C**, and decide whether the intent is survival (→ lookup, matching Q90) or dependency (→ master-detail). |
| C29 | **Topic 2 Q85** vs **Topic 2 Q35** vs Salesforce Help | Q85 says password policies are governed by *"profiles or **permission set** password policies."* Q35 says *"Login Hours and Password Policies are security controls configured at the **Profile** level."* | **Both are wrong, in different ways.** **Permission sets have no password policies at all.** Password policies exist **org-wide** (*Setup → Password Policies*) **and** as a **per-profile override**. Fix both sentences and make them agree. Neither answer letter changes, but a student who believes either sentence will miss the standard "where do you set password policies?" question. |
| C30 | **Topic 2 Q126** vs the Salesforce Setup UI | Q126's explanation says *"**Maximum invalid login attempts** belongs to lock-out settings **rather than password policies**."* | **It is literally a field on the Password Policies page** (*Setup → Password Policies*), alongside *Lockout effective period*. The **answer letters (A, C, D) are still correct**, but for a different reason: the stem asks about policies that shape **how a user chooses a password**, and lockout-after-failure does not. **Rewrite the sentence.** This is the **third** password-policy error in Topic 2 — see also **C29** (Q35 and Q85). All three should be fixed together. ✅ **RESOLVED in Batch 23:** **Q158** is the same question with the **correct** reason (*"lockouts due to failed logins rather than encouraging password choice"*). **Keep Q158, delete Q126.** See **D53**. |
| C31 | 🔴 **Topic 2 Q101 vs Topic 2 Q155** | **The same question, word for word, with two different keys.** Q101 keys **C, D** and treats *"the custom report type is in development"* as a genuine cause. Q155 keys **A, D** and states *"'in development' is not a status that prevents users from running a fully built report."* | **Q101 is right.** *Salesforce Help — "Create a Custom Report Type":* while the deployment status is **In Development**, the report type and every report built on it are **hidden from all users except those with "Manage Custom Report Types"** — which is exactly the symptom described. Q155's sentence is factually false, and its option A (*"missing View access"*) does not name a real permission. **Delete Q155, keep Q101.** |
| C32 | 🔴 **Topic 2 Q109 vs Topic 2 Q164** | **The same question, word for word, with two different keys.** Q109 answers **A and D** on a stem that has **no "(Choose two.)"**. Q164 answers **D only**, and explains that a flow launched in a **background trigger context** cannot be reproduced in Flow Builder's interactive debug canvas. | **Q164 is right and better built.** Its single answer matches its single-answer stem, and its reasoning is sound. **Delete Q109, keep Q164** — this removes the malformed-question defect (**F12**) at the same time. ⚠️ Both copies still say the flow is *"launched by a **process**"*; Process Builder is retired, so change this to *"launched by a record-triggered flow."* |
| C33 | **Topic 2 Q183 vs Topic 2 Q190** | Near-identical requirement — *automatically create records when an opportunity closes*. **Q183** offers Process Builder among its options and **keys it correct**. **Q190** does not offer Process Builder and **keys Flow Builder correct**. | **The file answers the same question two different ways depending purely on what is in the option list.** Since **Process Builder is retired**, Q190 is the correct modern answer and Q183 is not. **Delete Q183, or replace its option C with Flow Builder.** This is the clearest illustration of the wider problem: **Process Builder is keyed correct in five questions** — Q99, Q116, Q133, Q154, Q183. Remove the option and every one of those keys corrects itself. |
| C34 | **Topic 2 Q231** vs Salesforce Setup | Q231's explanation says *"if a **profile** is assigned a specific Support Process that does not include 'Closed'…"* | **Profiles are never assigned a support process.** The chain is **Support Process → Record Type → Profile**. Fix the sentence. 🚨 **Separately, the question has two defensible answers:** option **B** names the real Support Settings checkbox **"Show Closed Statuses in Case Status Field"**, which is **unchecked by default** and produces exactly the symptom in the stem. Decide which cause to teach and delete the other option. |

> 🔴 **Pattern alert: Topic 2 gets password policies wrong three times.** Q35 says they are profile-level only. Q85 says they live on *"profiles or permission sets"*. Q126 says *Maximum Invalid Login Attempts* is not one. The truth: **password policies exist org-wide at *Setup → Password Policies* and can be overridden per profile; permission sets have none; and Maximum Invalid Login Attempts is on that same page.** Fix all three sentences in one pass and make them agree.

---

## Running list: numbering problems found

Topic 1 has roughly **160 numbering breaks**. Full list to be compiled as the review proceeds. Confirmed so far in this batch's range: numbering is clean and sequential from Q1 through Q30, with the first break occurring at **Q21 → Q23** further down (Q22 exists but is written as `22.To prevent...` with no space, which is why automated tooling skipped it).

**Formatting issue to fix at renumber time:** several question numbers are written without a space after the period (`22.To prevent`, `29.If a user`, `31.In a private`). This breaks automated parsing. Will be normalised during the renumbering pass.

**Stray non-question text found inside Topic 1 in this range:** lines reading `##22.08` (after Q25) and `23.08##` (after Q30). These look like leftover date separators from whatever source the questions were copied from. Recommend deleting at cleanup time.

**Batch 2 range (Q31–Q60):** numbering is clean and sequential throughout — no gaps, no duplicates. Two minor formatting inconsistencies only:
- Q44 and Q57 use the heading `Explanation` while every other question uses `Why:`. Cosmetic, but worth normalising so the file parses uniformly.
- Q61 and Q62 restate the answer letter *and* its text (`Answer: C. Summary and Matrix`) whereas Q31–Q60 use the letter alone (`Answer: C`). Also cosmetic.

**Batch 3 range (Q61–Q90):** numbering is sequential with no gaps, but there are structural problems:
- **Q64 and Q67 each contain two `Answer:` lines with different values.** This is a data-integrity problem, not just formatting — an automated quiz app reading these files would pick up whichever it hits first, which in Q67's case is the wrong answer. These must be reduced to one answer line each.
- Q67's explanation contains a stray source artefact: the word `Scribd` sits on its own line. Delete at cleanup.
- Another stray date separator, `##24.08`, sits between Q75 and Q76.
- Q81 is written as `81.The page layout` with no space after the period — same parsing issue flagged in Batch 1.
- Q85's answer and explanation are run together on one line (`Answer: A, B, C, F Why: Salesforce workflow rules...`). Should be split onto two lines.
- **Q94 is missing entirely** — the file jumps from Q93 to Q95. Falls in the next batch's range; will confirm there.

**Batch 8 range (Q236–Q282):** the worst numbering stretch so far — **12 missing numbers** in a span of 47:

| Break in the file | Missing numbers |
|---|---|
| 252 → 255 | 253, 254 |
| 259 → 263 | 260, 261, 262 |
| 263 → 265 | 264 |
| 266 → 270 | 267, 268, 269 |
| 272 → 274 | 273 |
| 277 → 280 | 278, 279 |

Other structural problems in this range:
- **Q257 has no `Answer:` line.** The option `B. False` appears twice, and the second one is doing the job of the answer. Must be changed to `Answer: B`.
- Q259 has **two consecutive `Answer:` lines** (`Answer: ACD` then `Answer: A, C, D`). They agree, so no learning harm, but one must go.
- Q252's stem is orphaned: `252.` sits alone on its line with the question text on the following line.
- Q277's answer line begins with a stray `**` (`**Answer: b`) — an unclosed markdown artefact.
- Q256 places its `Why:` block **after** the `Timestamp:` line, reversing the order used by every other question.
- Missing space after the number in Q236 (`236.You can not`), Q238 (`238.How many`) and Q256 (`256.The record owner`).
- Q263 uses European decimals in its options (`1.000`, `2.000`) — these must become `1,000` and `2,000` or the correct answer reads as "one".

**Batch 9 range (Q283–Q348):** the numbering all but collapses here. The range spans 66 numbers but holds only **33 questions** — exactly half are missing:

`285, 287, 289, 290, 292, 293, 294, 295, 298, 299, 300, 303, 305, 308, 310, 312, 313, 316, 318, 320, 323, 325, 326, 329, 330, 332, 336, 339, 342, 343, 345, 346, 347`

Other structural problems in this range:
- **Q301 is numbered with a comma** — `301, The SideBar search...` instead of `301.` This is why the automated number scan skipped it, and it will break any parser.
- **Q306 has two `Answer:` lines that disagree** (`Answer: AC` then `Answer: B, C (or A, C...)`). Unlike Q259, these do not match — and neither is correct.
- Q302's stem ends with the stray token `MMM`.
- Q334's explanation ends with orphaned hyperlink text: *"This Salesforce Role Hierarchy explanation provides a helpful breakdown..."*
- **Q338's role hierarchy is flattened onto one line** (`Executive Management -Sales Management -Sales Person -Operations Management -Operations Person -`), and two sentences are joined with no space. A hierarchy question is unanswerable if the hierarchy is unreadable — reformat as an indented list.
- Q304, Q306 and Q307 replace the `Why:` label with `Key Context & Nuance` / `Key Breakdown & Context`.
- Q291 is a "Choose 2" question that includes an *All of the above* option.
- Q317's option `D. 50.000` uses a European decimal **and** offers a number as an answer to a TRUE/FALSE function.

**Batch 10 range (Q349–Q408):** 60 numbers, **26 questions** — 34 missing:

`350, 352, 354, 355, 356, 358, 359, 363, 364, 366, 370, 371, 373, 377, 378, 379, 380, 382, 383, 386, 387, 388, 389, 392, 393, 395, 396, 398, 399, 400, 402, 404, 406, 407`

Other structural problems in this range:
- **Q374 contains leftover draft text** — the explanation includes *"Wait, let's look closely at option C:"* and a second "wait" mid-sentence. This is unfinished working-out published as an answer. New defect class **F13**; must be rewritten, not just tidied.
- Q353's answer and explanation are run together on one line (`Answer: A, D Why:`) — same defect as Q85.
- Q369's explanation ends with orphaned hyperlink text (*"Update User Licenses Via Data Loader in Salesforce provides a helpful tutorial…"*) — same defect as Q334.
- **Q401 has two options that mean the same thing** — A ("junction object") and D ("intersection object") are synonyms.
- **Q368 is a True/False question with a third option**, `C. Neither True nor False`.
- Missing space after the number in Q361 (`361.How many`) and Q385 (`385.A user`).
- Q372's stem says "Calendars" where it means **Events**; its own explanation uses the correct term.
- Q385's stem has `login's` where it means `logs in`.
- Q365 uses the word **"profile"** in all four options where it means **"user record"** — which is the sole reason the question resolves to "None of the above".

**Batch 11 range (Q409–Q494):** 86 numbers, **30 questions** — 56 missing. The gaps are now long unbroken runs rather than scattered singles:

| Break in the file | Missing run | Count |
|---|---|---|
| 409 → 411 | 410 | 1 |
| 413 → 415 | 414 | 1 |
| 415 → 417 | 416 | 1 |
| 418 → 423 | 419–422 | 4 |
| 423 → 433 | 424–432 | **9** |
| 433 → 436 | 434–435 | 2 |
| 436 → 440 | 437–439 | 3 |
| 440 → 442 | 441 | 1 |
| 444 → 446 | 445 | 1 |
| 446 → 449 | 447–448 | 2 |
| 450 → 452 | 451 | 1 |
| 452 → 466 | 453–465 | **13** |
| 467 → 472 | 468–471 | 4 |
| 472 → 476 | 473–475 | 3 |
| 476 → 482 | 477–481 | 5 |
| 482 → 484 | 483 | 1 |
| 484 → 486 | 485 | 1 |
| 487 → 489 | 488 | 1 |
| 490 → 492 | 491 | 1 |
| 492 → 494 | 493 | 1 |

Other structural problems in this range:
- **Q415's explanation states a different number from its own answer** (800 in the text, 500 keyed) and calls 500 "the closest correct option" — no option is actually correct.
- **Q417's explanation ends by saying none of the options are correct**, immediately after keying one, and misquotes option B as "20" when it reads 25.
- Q411's answer line is free text rather than a letter, and its explanation ends with orphaned video-link text.
- Q413 runs `Timestamp:` onto the end of the explanation line.
- Q417 runs the answer, a parenthetical and `Why:` all onto one line.
- Missing space after the number in Q490 (`490.A controlling`).
- European decimals in Q446 and Q452 (`5.000`, `50.000`).
- **Q489's stem is singular** ("Which function is available") but the answer gives two options.

**Batch 12 range (Q495–Q571):** 77 numbers, **27 questions** — 50 missing, plus the file's worst single structural fault.

**The sequence physically breaks here.** Between Q498 and Q501 the file reads:

`… 498 → 2 → 12 → 501 …`

Those are the re-pasted **Q2** and **Q12** fragments (duplicates **D1** and **D2**). They carry no `Answer:` line, no explanation and no timestamp — the answer is implied only by a scraped **`Most Voted`** tag appended to an option. **Delete the entire block**; the originals at Q2 and Q12 are complete and correct.

Missing numbers in this range:

`496, 497, 499, 500, 505, 506, 510, 514, 517–522, 524, 525, 527, 529–535, 537–545, 548–551, 553, 555–557, 559–563, 565, 566, 569, 570`

The longest runs are **Q537–Q545** (9) and **Q529–Q535** (7).

Other structural problems in this range:
- **Q504's stem is truncated mid-sentence** — it ends at the words "not just" — and contains a negation that its own explanation contradicts. This is the reason the question is wrong.
- **Q526's answer line is malformed:** `Answer: A,C;E. Kathy can edit and view Phils opportunities` — a semicolon used as a separator, with the text of option C appended after the letter E.
- **Q564 is the only `FILL BLANK` question in the file** — no options, no letters, a prose answer, and no `Why:` label.
- **Seven questions end with orphaned video/tutorial link text** (Q334, Q369, Q411, Q513, Q515, Q516, Q567). A single find-and-delete pass clears all of them.
- `Note:` used instead of `Why:` in Q501, Q536 and Q552.
- Missing spaces: `526.Org wide default`, `Answer:C` and `Why:Phil` (Q528), `Answer: ATrue` (Q571).
- Apostrophes missing throughout Q526 and Q528 (`jennifers`, `Phils`, `phils`, `Tims`).

**Batch 13 range (Q572–Q662):** 91 numbers, **30 questions** — 61 missing. The gaps are now longer than the content:

`582–584, 588, 589, 591, 593–596, 598, 599, 601, 604, 605, 607, 609–615, 618, 620–631, 633–637, 639–642, 644–646, 648, 649, 651–661`

Longest runs: **Q620–Q631** (12), **Q651–Q661** (11), **Q609–Q615** (7).

Other structural problems in this range:
- **Q606's answer contradicts its own explanation outright.** Answer says False; explanation says standard fields *can* be removed from a page layout. The explanation is right.
- **Q590's stem asks the wrong question** — "the number of **formulas** in a Custom summary formula" when it means the number of **characters**. Taken literally the answer would be 5 (CSFs per report), not 3,900.
- **Q608 lists the same object twice** — option B ("Opportunity") and option E ("Sales (Opportunities)"). This forces the answer line to hedge.
- **Q619's options A and B overlap**, and the list omits two real OWD values: **Public Full Access** (Campaigns) and **View Only** (Price Books).
- **Three more `FILL BLANK` outliers** — Q597, Q602, Q603 — joining Q564. Four in total, none with options or letters.
- **Two word-for-word duplicates of questions from the top of the file:** Q638 repeats **Q1**, Q587 repeats **Q467**.
- Missing space after the number in Q579 (`579.  Identify`, double space) — and the file's separator rows continue to vary in length.

**Batch 14 range (Q663–Q803):** 141 numbers, **31 questions** — 110 missing. The file is now mostly gaps:

| Break in the file | Missing run | Count |
|---|---|---|
| 776 → 799 | 777–798 | **22** |
| 668 → 685 | 669–684 | **16** |
| 693 → 708 | 694–707 | **14** |
| 734 → 744 | 735–743 | 9 |
| 685 → 693 | 686–692 | 7 |
| 753 → 759 | 754–758 | 5 |
| 664 → 668 | 665–667 | 3 |
| 713 → 718 | 714–717 | 4 |
| 725 → 730 | 726–729 | 4 |
| 746 → 751 | 747–750 | 4 |
| 766 → 771 | 767–770 | 4 |
| 771 → 776 | 772–775 | 4 |
| remainder | 709, 710, 712, 719, 720, 723, 724, 732, 745, 752, 762, 764, 765, 801 | 14 |

Other structural problems in this range:
- **Q718's explanation contains a leftover citation marker `[1, 2]`** — a new artefact type, distinct from the video-link text seen elsewhere. It also says "Currently 6 to 8" while keying 5, and ends on an **unclosed parenthesis**.
- **Four questions have no correct value on their option list:** Q734 (compiled size is 5,000 bytes; options stop at 4k), Q761 (Recycle Bin is 25×; options are 20/50/250/500), Q766 (documented login-hours behaviour isn't offered), Q771 (the "Manage Categories" permission isn't offered).
- **Q761 and Q734 both state the correct number in the explanation and then key a different one** — the same pattern as Q415.
- **Q800's answer line is malformed:** `Answer: B. AND C. Contact campaign related list` — "AND" used as a separator, with only one option's text given.
- **Q800's options A and C describe the same related list.**
- **Q721 and Q722 sit adjacently and read as contradicting each other** on whether list data can be exported.
- Lower-case answer letter in Q664 (`c`).
- Option typo in Q803: "Horizontal bar **line**".

**Batch 15 range (Q811–Q986):** 176 numbers, **39 questions** — **137 missing**. This is the sparsest stretch in the file: only 22% of the numbers in the range exist.

| Break in the file | Missing run | Count |
|---|---|---|
| 921 → 936 | 922–935 | **14** |
| 893 → 904 | 894–903 | **10** |
| 953 → 964 | 954–963 | **10** |
| 843 → 853 | 844–852 | 9 |
| 973 → 983 | 974–982 | 9 |
| 863 → 872 | 864–871 | 8 |
| 834 → 842 | 835–841 | 7 |
| 884 → 892 | 885–891 | 7 |
| 913 → 921 | 914–920 | 7 |
| 964 → 972 | 965–971 | 7 |
| 816 → 823 | 817–822 | 6 |
| 823 → 830 | 824–829 | 6 |
| 853 → 860 | 854–859 | 6 |
| 811 → 816 | 812–815 | 4 |
| 872 → 877 | 873–876 | 4 |
| 943 → 948 | 943–947 | 5 |
| 948 → 953 | 949–952 | 4 |
| 878 → 882 | 879–881 | 3 |
| 831 → 834 | 832–833 | 2 |
| 904 → 907 | 905–906 | 2 |
| 936 → 939 | 937–938 | 2 |
| remainder | 861, 909, 912, 940, 984 | 5 |

Other structural problems in this range:
- **Q853 is two questions glued into one stem** — an abandoned statement about the import wizard erasing field values (which is *false*, and never corrected), followed by the question that actually has the options and the answer.
- **Q878 has a definition pasted onto the end of its question line** with no separator: *"…per object?External ID: When importing…"*.
- **Q860's answer line gives a value with no letter** (`Answer: 40`) and then runs straight into the explanation with no `Why:` label.
- **Q904 uses the label `Correct Answer:`** instead of `Answer:`, and ends with an orphaned Data Import Wizard video link that has nothing to do with the question.
- **Three more orphaned video/tutorial links** — Q904, Q911, Q921 — bringing the total to **ten**. One find-and-delete pass still clears them all.
- **Q964's option B contains mojibake** (`ג€"` where an em dash belongs) — the second encoding failure after Q160.
- **Q908's option B reads "Every every 7 days"** — a duplicated word.
- **Q983's number has two leading spaces** before it, unlike every other question.
- **Q910's correct value (175) is not among its options** — the fifth question in the file with this fault.
- **Q948 is a "which is NOT true" question containing a joke distractor**, which gives it two defensible answers.
- **Q986's explanation states the very figure the question is designed to disprove** (30 days) and contradicts Q991.

**Batch 16 range (Q990–Q1070):** 81 numbers, **40 questions** — 41 missing.

| Break in the file | Missing run | Count |
|---|---|---|
| 1054 → 1064 | 1055–1063 | **9** |
| 992 → 1000 | 993–999 | **7** |
| 1035 → 1039 | 1036–1038 | 3 |
| 1003 → 1007 | 1004–1006 | 3 |
| 1015 → 1018 | 1016–1017 | 2 |
| 1020 → 1023 | 1021–1022 | 2 |
| 1042 → 1045 | 1043–1044 | 2 |
| 1065 → 1068 | 1066–1067 | 2 |
| remainder | 1008, 1010, 1012, 1019, 1027, 1029, 1031, 1040, 1048, 1052, 1069 | 11 |

**Correction to the earlier "broken tail" note.** Batches 1–15 recorded that Topic 1's numbering collapses to `992 → 2 → 4 → 6`. That was wrong, and the fault was in my scan, not the file: the pattern I used only recognised **three-digit** question numbers, so **every question from Q1000 onward was invisible to it**. Re-scanned with four-digit support, the picture is:

- Numbering continues normally from **Q1000 to Q1175** (line 8700).
- **The real tail damage is two faults, not one:**
  1. **A misplaced, duplicated `1074.`** — the number `1074` appears **twice in a row at lines 8663 and 8679**, *after* Q1172 and *before* Q1175. It is out of sequence in both directions.
  2. **An unnumbered final block restarts at 1.** From roughly line 8830 to the end of the file (line 8913) there is a run numbered **2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15** — a separate, much shorter set that was appended without renumbering. Number **5** is missing from it. This is what my earlier scan was picking up as "2 → 4 → 6".

Both faults will be resolved by the final renumbering pass, but the duplicated `1074` needs a decision first: the two blocks must be compared to see whether they are the same question pasted twice or two different questions that collided on one number.

Other structural problems in the Q990–Q1070 range:
- **Q1033's options misspell "field" as "filed" three times** (options B, C and D) — logged as new defect class **F15**.
- **Q1070's option D contains mojibake** — `ג€` appears twice where quotation marks belong around "View Dashboard as Me". Third encoding failure in the file.
- **Q1064 has a double space** after the question number.
- **Q991's explanation cites a "45 days" legacy answer that is not among its own options** (15 / 30 / 60 / 90).
- **Q1014's explanation mislabels option A's text as "Option D"**, then declares D incorrect — three mutually exclusive statements inside one block.
- **Q1025's explanation describes the wrong option** (it argues for C while the answer line keys D).
- **Three more `FILL BLANK` outliers** — Q1007, Q1009, Q1011 — bringing the total to **eight**.
- **Q1007 and Q1011 are two halves of one topic** (business processes) separated by four unrelated questions; they should be adjacent.

**Batch 17 range (Q1071–Q1156):** 86 numbers, **37 questions** — 49 missing.

| Break in the file | Missing run | Count |
|---|---|---|
| 1124 → 1133 | 1125–1132 | **8** |
| 1072 → 1078 | 1073–1077 | 5 |
| 1093 → 1099 | 1094–1098 | 5 |
| 1084 → 1089 | 1085–1088 | 4 |
| 1102 → 1106 | 1103–1105 | 3 |
| 1078 → 1081 | 1079–1080 | 2 |
| 1117 → 1120 | 1118–1119 | 2 |
| 1147 → 1150 | 1148–1149 | 2 |
| 1153 → 1156 | 1154–1155 | 2 |
| remainder | 1082, 1090, 1092, 1100, 1108, 1111, 1113, 1116, 1121, 1123, 1136, 1138, 1141, 1143, 1146, 1152 | 16 |

**Note on the 1073–1077 gap.** `1074` is not truly missing — it appears **twice, at the very end of the file** (lines 8663 and 8679), long after Q1172. **✅ Resolved in Batch 18:** they are **two different questions**, both mislabelled `1074`, sitting in the slots where **1173** and **1174** belong. So 1073, 1075, 1076 and 1077 are genuinely missing, and 1074 is a label error rather than a relocation.

Other structural problems in this range:
- **`1156..` has a double period.** This is why my automated number scan skipped the question entirely. Any parser built on `^\d+\.\s` will do the same.
- **Q1120's stem is orphaned** — the number sits alone on its line with the question text below it, the same defect as Q252.
- **Q1107's option C contains mojibake** (`ג€Deleteג€`). Fourth encoding failure in the file.
- **Q1099 has no `Why:` label** — the explanation begins directly with "B:".
- **Three lower-case answer letters in a row of questions** — Q1133 (`d`), Q1134 (`c`), Q1156 (`bC`).
- **Q1084 carries the same orphaned Data Import Wizard video link that was appended to Q904** — eleventh orphaned link in the file.
- **Two plain typos in option text:** Q1071 (*"Sales Rep and Sales Rep B"* — the first should be Sales Rep A) and Q1114 (*"sharing … **in** inherited"*).

**Quality note.** This range contains **no wrong answers at all** — the first clean batch in seventeen. The questions are modern scenario items with current feature names and plausible distractors, rather than the recycled limits-and-trivia that dominates Q1–Q1000. When the file is eventually trimmed, **Q1071–Q1156 is the section to build the replacement bank around.**

---

**Batch 18 range (Q1157 – end of file):** this is where the numbering finally breaks down completely.

| What the file says | What it should say | Note |
|---|---|---|
| 1157, 1158, 1159 | unchanged | Clean |
| — | **1160** | ⚠️ **Does not exist.** File jumps 1159 → 1161 |
| 1161 … 1172 | unchanged | Clean and sequential |
| **`1074.`** (line 8663) | **1173** | ⚠️ Mis-numbered. Deleted-custom-field question |
| **`1074.`** (line 8679) | **1174** | ⚠️ Mis-numbered. Deactivated-user-records question. **A different question from the one above** |
| 1175 | unchanged | Last normally-formatted question in the file |
| `Question 1` … `Question 7` | **1176 – 1182** | 🚨 Numbering **restarts at 1** and uses the word "Question" |
| *(unnumbered)*, 2, 3, 4, `5.`, 6 … 15 | **1183 – 1197** | 🚨 Numbering **restarts again**, the first item has **no number at all**, and `5.Cloud Kicks` has no space after the period |

**The `1074 ×2` question is answered.** They are **two different questions**, not a duplicate paste. They occupy the exact positions where 1173 and 1174 belong, between 1172 and 1175. The fix is to renumber them, not to merge or delete one of them — although the first (deleted custom field) should be deleted anyway as a **fifth duplicate** of the 15-day fact (**D34**).

**Why earlier scans mis-read this tail.** Three separate parsing faults combined: `1156..` (double period) hid Q1156; `5.Cloud Kicks` (no space) hid Block-C #5; and Block-C #1 has no number at all. That is why the block previously appeared as "2, 3, 4, 6, 7… with 5 missing". Nothing is actually missing from Block C — it is a complete run of 15.

Other structural problems in this range:
- 🚨 **All 15 Block-C questions have no `Answer:` line and no explanation.** Correct answers for all fifteen are supplied in the Batch 18 write-up above.
- **Six more non-standard answer lines:** `bC` (Q1156), `b` (Q1161), `C,d` (Q1167), `BC` (Q1170), `AD` (Q1172), `CD` (Q1175).
- **All seven Block-A questions use `Answer : X`** with a space before the colon, and **none has a `Why:` label, a `Timestamp:` line or a `—-----` separator**.
- **Raw LaTeX in Q1166's explanation** — `$3 \times 2 = 6$`.
- **Q1169's "why not D" paragraph is an unfinished sentence** with a mismatched parenthesis.
- **Three text corruptions in Block A:** `case 1should` (Q2), `d3ata` and a stray bare `2` (Q7).
- **Q1165 has a double space** after the question number.

**Quality note.** The two appended blocks are the **most current content in the file** — they use *Platform Administrator* (the post-2024 job title), the *Minimum Access – Salesforce* profile, the Mobile Only app, and four **Agentforce** questions. Content-wise they are the best material here. Format-wise they are the worst. **Fixing Block C's missing answers and normalising both blocks into the house format is the single highest-value edit in this file.**

---

## 📗 Numbering in `Admin-201 Topic 2.md`

**Topic 2 is almost perfectly numbered.** Full-file scan result:

| Measure | Topic 1 | Topic 2 |
|---|---|---|
| Numbers in range | 1 – 1175 (+ two restarts) | **1 – 232** |
| Questions actually present | ~590 | **231** |
| Numbering breaks | ~160 | **1** |
| Numbering restarts | 2 | **0** |

**The single break: Q21 → Q23.**
`22` is not a gap in the usual sense. A bare **`22.`** is glued to the end of Q21's timestamp line —
`# Dec. 4, 2025, 3:34 p.m. 22.`
— with no stem, no options and no answer following it. Delete the stray fragment and renumber Q23–Q232 down by one, and the file is perfectly sequential.

**Batch 19 range (Q1–Q35) — other structural notes:**
- **No separator line anywhere in Topic 2.** Topic 1 uses a `—-----` row between questions; Topic 2 relies on a blank line alone. Not wrong, but the two files cannot share a parser.
- **Timestamp placement is inconsistent** — sometimes above `Answer:` (Q2, Q3, Q4, Q5), sometimes below the options with a `#` prefix (Q7, Q9, Q11, Q12), sometimes `# ` with a trailing space (Q8, Q10, Q15), and **absent entirely** on Q1. Logged as **F17**.
- **Scraper residue** — `Show Suggested Answer` and `by [deleted] at …` appear from Q23 onward. These are leftovers from the source website and must be stripped.
- **Q25 has a double space** after the number.
- **Q37 has a double space** after the number (spotted in the next batch's range).
- **Q7 carries an orphaned "watch this tutorial" paragraph** with no link — the twelfth such artefact across the two files.

**Batch 20 range (Q36–Q65) — structural notes.** Numbering is **clean and sequential throughout**; there is not a single break in this range. The problems are all textual:
- 🚨 **Q52's `Why:` paragraph is Q51's explanation, copy-pasted.** Wrong feature, wrong question. The single worst defect found in Topic 2 so far.
- **Q60's answer line reads `Certified Correct Answer: C. Add the Salesforce Mobile…`** — a label that appears nowhere else in either file, and it restates the whole option text.
- **Q60's timestamp begins `#t June 20, 2024`** — stray `t`.
- **Q25, Q37 and Q40 have a double space** after the question number.
- **Explanation label drifts again:** Q1–Q51 use `Why:`; **Q52–Q58** switch to `Trainer Explanation & Concept:`; Q59 reverts to `Why:`; Q60 invents a third label.
- **Q55's stem misuses "ROI"** where it means *influence* — and since two of the distractors are Campaign-flavoured, the wrong word actively pushes students toward the wrong answer.

**Batch 21 range (Q66–Q100) — structural notes.** Numbering remains **clean and sequential**. The significant change here is a **format break**:
- 🚨 **A third format starts at Q71.** From Q71 onward the answer line becomes `Answer(s): A. <full option text repeated>`, the rationale label becomes `Explanation:`, and the **timestamp disappears entirely**. Q1–Q70 use `Answer: A` + `Why:` + a timestamp. Logged as **F18**. Each file now needs multiple parsers.
- **Q84, Q85, Q86, Q87, Q88, Q89 all have a double space** after the question number — a contiguous run, suggesting a single bad paste.
- **Q70's option C names the wrong object** ("on the Product object" where it must be the Shoe Design object).
- **Q77's option A is a statement, not an action** — *"Split views are only available on standard objects"* cannot answer a "how should you configure" question.
- **Q88's option B invents a product** — there is no "Data Export Wizard".
- **Q78 and Q99 both end with hedging draft text** (*"depending on exact exam variants…"*, *"(or Flow Builder, though…)"*).

**Batch 22 range (Q101–Q135) — structural notes.** Numbering stays **clean and sequential**. Issues are textual and structural:
- 🚨 **Q109 has no "(Choose two.)"** but is keyed with two letters.
- 🚨 **Q115's stem names a field type that cannot go in a compact layout** (text area).
- **Q108, Q115, Q128 and Q134 have a double space** after the question number.
- **Q101 names a status that does not exist** — "In Deployment"; the two statuses are *In Development* and *Deployed*.
- **Q129's option D rebuttal hedges** (*"unless that layout already had it…"*).
- **Q117's options A and D both contain claims that need checking** against Salesforce Help.
- **Formatting note:** from roughly **Q108 onward** the file adds blank lines between the stem, the options and the answer, and from **Q115** the answer line drops the restated option text (`Answer(s): C` rather than `Answer(s): C. In the Account object manager…`). So **F18's format is itself drifting**. There are now at least **five** distinct block shapes across the two files.

**Batch 23 range (Q136–Q170) — structural notes.** Numbering is still clean, but the *content* is not:
- 🔴 **The file starts repeating itself at Q136.** Fourteen of thirty-five questions are re-runs of Q13–Q135 — see **D48–D58**. This is the dominant structural problem in Topic 2 and should be fixed before anything else.
- 🔴 **Two repeats disagree with their originals** — **Q155 vs Q101** and **Q164 vs Q109**. The file now teaches two contradictory facts about custom report type deployment status and about flow debugging.
- **Q141 and Q165 have a double space** after the question number.
- **Q152 has an empty `Explanation:` line** followed by two blank lines before the actual text.
- **Q165 and Q166 carry `Show Suggested Answer`** scraper residue — the artefact reappears after being absent since Q26.
- **Q161's option C names the wrong field** ("Campaign Status" for "Campaign Member Status").
- **Q162's explanation writes "ODWs"** for "OWDs".
- **Q167's explanation contradicts its own key** in the first sentence.
- **Q143's explanation contains the phrase "but looking at the options"** — drafting notes left in a published answer.

**Batch 24 range (Q171–Q205) — structural notes.** Numbering remains clean; the duplication continues:
- 🔁 **Eight more repeats** — see **D59–D66**. Running total: **22 internal or cross-file duplicates identified in Topic 2 so far**.
- 🟢 **Three of the repeats are *repairs*.** **Q179** fixes Q60's one-off `Certified Correct Answer:` label; **Q190** fixes Q133's Process-Builder key; **Q193** fixes the duplicated option in Topic 1 Block-C #5. In each case **keep the later copy**.
- 🔁 **The escalation-rule question now exists seven times** (T1 Q1163, Q1165; T2 Q65, Q73, Q82, Q177, Q199). **Keep Q199** — the only copy that also teaches **Business Hours**.
- **Four grammar faults in stems and options:** Q178 (*"Is possible to view…"*), Q185 (stem reverses its own meaning), Q187 (*"in use another organization"*), Q198 option D (*"the Opportunity stage a dependent picklist"*).
- **Q174 and Q195 have a double space** after the question number.
- **`Show Suggested Answer` residue** runs continuously from about **Q195 to Q203**, after being absent for most of the file.
- **Q178 is a style outlier** — the only negative *"EXCEPT"* question, and the only one with no business scenario, in either file.

**Batch 25 range (Q206–Q232) — structural notes. End of the numbered questions.**
- ✅ **Numbering is clean and sequential right through to Q232.** Apart from the single stray `22.` at Q21, **Topic 2 has no numbering faults at all** — a completely different picture from Topic 1's ~160 breaks.
- 🟢 **A fourth repair-by-repeat:** **Q224** fixes **Q143**'s broken option set. Together with Q179/Q60, Q190/Q133 and Q193/Block-C #5, the rule is consistent — **when two copies differ, the later one is better**.
- **Three more duplicates:** **D67** Q74→Q219, **D68** Q143→Q224, **D69** Q112→Q228.
- **Q141, Q165, Q174, Q195, Q214 and Q224 have a double space** after the question number; **Q210's answer line** has a double space after the colon.
- **Q209's answer line is a lowercase `c`.**
- **Q207 is the oldest content in either file** — it names the **Spring '11** release. Recommend deletion.
- **Q223 and Q178 are the only two scenario-free trivia questions** in Topic 2.
- 🟢 **Q227 is the proof that the Process Builder inconsistency is an editing failure**, not a knowledge gap: it explicitly rejects Process Builder as retired, while five other questions key it correct.
