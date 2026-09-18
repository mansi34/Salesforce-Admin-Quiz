# Salesforce Certified Administrator (ADM-201) Exam Proctor & Simulator

A local-first, deterministic React exam simulator application that functions as a strict, realistic Salesforce Certified Administrator (ADM-201) mock exam proctor.

---

## ⚡ Quick Start (Instant Run)

### Method 1: Zero-Install Standalone Mode (Recommended)
You do **not** need Node.js or any build tools installed. Simply:
1. Double-click [`index.html`](file:///d:/Personal/Salesforce/Exam%20Dumps/index.html) or open it directly in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. Drag and drop `Admin topic1.1.md` or `Admin Exam Dump.md` into the file zone (or click **"Browse & Select Local Dump"**).
3. The app will immediately parse all ~1,400+ questions, categorize them across the 8 ADM-201 topics, and present the pre-exam verification screen.

### Method 2: Standard Node / Vite Workflow
If you prefer running via a Node.js development server:
```bash
# 1. Install dependencies
npm install

# 2. Run the Vite development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📋 Official ADM-201 Blueprint Parameters & Weights

The simulator hardcodes the official Salesforce Certified Administrator examination parameters:

| Parameter | Specification | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Total Questions** | **60 Questions** | Deterministic 60-question sample generated per session |
| **Time Limit** | **105 Minutes** (6,300 seconds) | Continuous countdown timer; auto-submits on `00:00` |
| **Passing Score** | **65%** (minimum 39 correct of 60) | Computed on submission against 65.0% threshold |
| **Allowed Pauses** | Exactly **1 Pause** per session | `pauseUsed` boolean disables pause control once used |
| **Navigation** | **Single-Direction** (Next only) | No previous question review until final results |
| **Feedback** | **Zero In-Exam Hints** | No answer validation state is exposed before grading |

### Official Topic Distribution (60 Questions)

```
├── Configuration and Setup (15%)             →  9 questions
├── Object Manager and App Builder (15%)       →  9 questions
├── Automation (15%)                          →  9 questions
├── Data and Analytics Management (17%)       → 10 questions
├── Sales and Marketing Applications (10%)     →  6 questions
├── Service and Support Applications (10%)     →  6 questions
├── Productivity and Collaboration (10%)       →  6 questions
└── Agentforce (8%)                           →  5 questions
    -------------------------------------------------------
    TOTAL:                                    = 60 questions
```

---

## 📥 Expected Input File Schema (`Admin topic1.1.md`)

The parser is tolerant of markdown headers, numbering formats, multiple choice prefixes, inline answer strings, and explanations.

### Standard Question Pattern

```markdown
1. An administrator needs to restrict access to Salesforce so users can only log in from the corporate office IP address range. Where should this be configured?

A. Trusted IP Ranges in Network Access
B. Login IP Ranges on individual User Profiles
C. Session Settings in Setup
D. Company Information Profile

Answer: B
Why: Login IP Ranges specified on a user Profile strictly restrict logins to only those IP addresses; attempts from other IPs are denied.
```

### Multi-Select Question Pattern

```markdown
230. Which three items are available in the mobile navigation menu? (Choose three.)

A. Chatter
B. Utility Bar
C. Lightning App Pages
D. Dashboards
E. Lightning Home Page

Answer(s): A. Chatter, C. Lightning App Pages, D. Dashboards
Explanation: Salesforce mobile app navigation menus support standard features and tools like Chatter, Dashboards, and custom Lightning App Pages.
```

### Supported Syntax Tolerances:
- **Question Numbering:** `1. `, `1) `, `Question 1: `, `## 1. `
- **Options:** `A. `, `a. `, `A) `, `[A] `, `A: `
- **Answer Markers:** `Answer: B`, `Answer(s): B, C`, `Correct Answer: B`, `ANS: B`
- **Answer Formats:** Single letter (`B`), comma-separated (`A, C`), or option text (`A. Profile, D. Manager`)
- **Explanations:** `Why: ...`, `Explanation: ...`, `Rationale: ...`, `Note: ...`
- **Metadata Cleaning:** Automatically strips trailing `Timestamp: ...` lines and promotional links.

---

## 🧠 Automatic Topic Categorization Heuristic

Because source dumps lack a category field, the engine assigns questions to the 8 official blueprint categories using a weighted keyword & domain heuristic:

1. **Text Normalization:** Aggregates question text, option choices, and rationale into a unified search corpus.
2. **Weighted Dictionaries:** Compares the corpus against domain dictionaries containing high-specificity keywords:
   - **Configuration and Setup:** `company profile`, `fiscal year`, `user management`, `login hours`, `ip range`, `profile`, `permission set`, `owd`, `sharing rule`, `multi-currency`, `my domain`.
   - **Object Manager & Lightning App Builder:** `custom object`, `master-detail`, `roll-up summary`, `lookup relationship`, `junction object`, `dynamic forms`, `record type`, `fls`, `page layout`.
   - **Automation:** `flow builder`, `record-triggered flow`, `screen flow`, `scheduled flow`, `approval process`, `process builder`, `workflow rule`, `field update`.
   - **Data and Analytics Management:** `report type`, `matrix report`, `bucket field`, `dashboard`, `dynamic dashboard`, `data loader`, `import wizard`, `duplicate rule`.
   - **Sales and Marketing Applications:** `lead conversion`, `web-to-lead`, `campaign hierarchy`, `opportunity stage`, `forecast`, `price book`, `quote sync`.
   - **Service and Support Applications:** `case reason`, `support process`, `web-to-case`, `email-to-case`, `escalation rule`, `knowledge base`, `entitlement`, `omni-channel`.
   - **Productivity and Collaboration:** `chatter feed`, `recurring task`, `activity timeline`, `calendar`, `mobile navigation`, `salesforce files`.
   - **Agentforce:** `agentforce`, `einstein agent`, `prompt builder`, `prompt template`, `einstein trust layer`, `reasoning engine`, `generative ai`.
3. **Conflict Resolution:** Word-boundary regular expressions prevent false substring matches. The topic with the highest aggregate score is assigned.
4. **Fallback & Gap Filling:** If a category has fewer questions than its required weighted count (e.g. Agentforce or Productivity), the generator automatically backfills high-fidelity ADM-201 questions tagged with `source: "generated"`.

### Limitations of Heuristic Matching:
- **Cross-Domain Questions:** A question involving a Flow that creates a Case and assigns a Task is scored by keyword density, which may assign it to Automation even if it tests Service Cloud concepts.
- **Generic Terminology:** Questions with minimal technical vocabulary fall back to Configuration and Setup by default.

---

## 🎯 How to Use the Application

### 1. Uploading & Parsing
- Open [`index.html`](file:///d:/Personal/Salesforce/Exam%20Dumps/index.html).
- Drop `Admin topic1.1.md` or `Admin Exam Dump.md` into the dropzone.
- The parser extracts questions asynchronously without blocking the browser.

### 2. Pre-Exam Verification Screen
- Review the total parsed questions and the breakdown across all 8 topic categories.
- Check how many questions were sourced from your file vs. fallback-generated.
- Acknowledge the procedural rules checkbox and click **"Begin 60-Question Exam"**.

### 3. Taking the Exam
- The 105-minute countdown clock runs continuously in the top right.
- Single-select questions render radio buttons; multi-select questions render checkboxes with a `Choose X options` badge.
- Click **"Next Question"** to progress. Backward navigation is disabled to mirror strict exam conditions.

### 4. Using the Single Pause Rule
- Click the **"Pause (1 left)"** button to freeze the timer if you need an emergency break.
- The exam displays an overlay modal confirming the clock has stopped.
- Click **"Resume Examination"** to restart the clock. The pause button will now show **"Pause (Used)"** and remain permanently disabled.

### 5. Final Submission & Results Analysis
On question 60 (or automatically if the 105-minute timer expires), the proctor computes your score:
- **Pass/Fail Outcome:** Clear visual banner with score percentage and count (e.g. `45 / 60 (75.0%)`).
- **Incorrect Answers Tab:** Detailed review of every question missed, showing your recorded answer, the confirmed correct answer, and full explanation.
- **Correct Answers Tab:** Review of all correctly answered questions.
- **Topic Blueprint Breakdown:** Visual progress bars displaying your accuracy percentage in each of the 8 Salesforce domains.
- **Generated Questions Audit:** Dedicated audit section listing every fallback-generated question tagged `source: "generated"`.
- **Retake Options:** Click **"Retake Exam"** to draw a fresh randomized sample of 60 questions from your bank.
