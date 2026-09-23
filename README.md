# Salesforce Certified Administrator (ADM-201) Exam Proctor & Simulator

A local-first, deterministic React exam simulator application that functions as a strict, realistic Salesforce Certified Administrator (ADM-201) mock exam proctor.

---

## ⚡ Quick Start

The app is a Vite + React project. `index.html` at the repo root is the Vite entry point — it is
**not** a standalone page and will not work if you double-click it directly from source.

### Method 1: Development Server
```bash
npm install
npm run dev
```
Open the printed `http://localhost:5173` URL, then drag and drop `Admin-201 Topic 1.md` or
`Admin-201 Topic 2.md` into the file zone (or click **"Browse & Select Local Dump"**).
The app parses the questions, categorizes them across the 8 ADM-201 topics, and presents the
pre-exam verification screen.

### Method 2: Production Build (open `index.html` directly)
```bash
npm run build
```
Produces `dist/`. Because the build uses relative asset paths (`base: './'`), you can
double-click `dist/index.html` and it runs offline in any modern browser — fonts and
styles are bundled, no CDN required.

To preview the build over a local server instead:
```bash
npm run preview
```

### Method 3: Single-File Build (one portable HTML file)
```bash
npm run build:single
```
Produces a single self-contained `dist-single/index.html` (~900 KB) with all JavaScript and
CSS inlined. Copy that one file anywhere and open it.

### Verifying the Answer Key
```bash
npm run verify
```
Runs [scripts/verify-grading.mjs](scripts/verify-grading.mjs), which parses both source `.md`
files and asserts that no question silently defaults to answer "A" and that no unreadable
answer keys slip into the exam pool.

> `legacy-standalone.html` is the retired pre-Vite version of the app (CDN React + in-browser
> Babel). It is kept for reference only and does **not** contain the current parsing and
> grading fixes.

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

## 📥 Expected Input File Schema (`Admin-201 Topic 1.md`)

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
- **Question Numbering:** `1. `, `1) `, `1: `, `Question 1: `, `## 1. `, and the no-space form `121.Which ...`
- **Options:** `A. `, `a. `, `A) `, `[A] `, `A: `
- **Answer Markers:** `Answer: B`, `**Answer:** B`, `Answer(s): B, C`, `Correct Answer: B`, `Certified Correct Answer: B`, `ANS: B`
- **Answer Formats:**
  - Single letter — `B`
  - Comma / slash separated — `A, C` or `A/C`
  - Prose conjunction — `B and D.`
  - Compact run — `ADE` (expanded to A, D, E)
  - Letter plus option text — `A. Profile, D. Manager`
  - Glued letter and text — `ATrue` (matched only when the text equals an option exactly)
  - Bare marker with the answer on the following lines:
    ```markdown
    Answer(s):
    B. Permission Set
    D. Sharing Rule
    ```
- **Explanations:** `Why: ...`, `Explanation: ...`, `Rationale: ...`, `Note: ...`, `Trainer Explanation & Concept: ...`
- **Metadata Cleaning:** Strips trailing `Timestamp: ...` lines, bare date footers such as `# Dec. 4, 2025`, and promotional links.

### Answer-Key Safety Rules

The source file is the single source of truth. To stop silent mis-grading, the engine:

- **Never guesses.** If an answer line cannot be read confidently, the question is marked
  `isGradable: false` and is **excluded from the exam pool** rather than defaulting to "A".
- **Locks the first answer.** Once a question's answer is captured, a stray later `Answer:`
  line cannot overwrite it.
- **Preserves multi-answer keys.** A key such as `B and D` stays `[B, D]`; it is never
  truncated to a single letter.
- **Re-verifies at grade time.** [src/services/grader.js](src/services/grader.js) re-derives the
  key from the original file text when scoring, so parsing and grading must agree.
- **Scores multi-select all-or-nothing.** Every required letter must be selected and no extras.

The pre-exam screen reports how many questions are usable and warns you if any were skipped.

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
- Start the app with `npm run dev`, or open `dist/index.html` after `npm run build`.
- Drop `Admin-201 Topic 1.md` or `Admin-201 Topic 2.md` into the dropzone, or use
  **"Or paste question text manually"** to paste raw question text instead.
- The parser extracts questions asynchronously without blocking the browser.

### 2. Pre-Exam Verification Screen
- Review the total usable questions and the breakdown across all 8 topic categories.
- Check how many questions were sourced from your file vs. fallback-generated.
- If any questions had unreadable answer keys, an amber note reports how many were skipped.
- Acknowledge the procedural rules checkbox and click **"Begin Examination"**.

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
- **Incorrect Answers Tab:** Every question you missed, shown with the question text, your
  submitted answer(s), the correct answer(s), the exact answer line quoted from your file
  (*"Stated in your file: ..."*), and the explanation.
- **Correct Answers Tab:** The same detail for every question you answered correctly, so you can
  confirm the key against your source file.
- **Topic Blueprint Breakdown:** Visual progress bars displaying your accuracy percentage in each of the 8 Salesforce domains.
- **Generated Questions Audit:** Dedicated audit section listing every fallback-generated question tagged `source: "generated"`.
- **Retake Options:** Click **"Retake Exam"** to draw a fresh randomized sample of 60 questions from your bank.

---

## 🗂️ Project Structure

```
index.html                   Vite entry point (loads src/main.jsx)
legacy-standalone.html       Retired pre-Vite single-file app (reference only)
vite.config.js               Standard build → dist/   (base: './' for file:// use)
vite.config.single.js        Single-file build → dist-single/
tailwind.config.js           Tailwind content paths and theme
postcss.config.js            Tailwind + Autoprefixer pipeline
scripts/
  verify-grading.mjs         Answer-key regression checks (npm run verify)
src/
  main.jsx                   React root; imports index.css
  index.css                  Self-hosted fonts + Tailwind directives
  App.jsx                    Screen router
  context/ExamContext.jsx    Exam state, timer, pause, submission
  components/                FileUpload, PreExam, Exam, Pause, Results screens
  constants/examConfig.js    Blueprint weights, timing, pass mark
  services/
    parser.js                Raw text → question blocks
    answerKey.js             Answer line → correct letters
    categorizer.js           Keyword heuristic → blueprint topic
    generator.js             Balanced 60-question set + fallback backfill
    grader.js                Scoring with answer-key re-verification
```

---

## 🔌 Offline Behaviour

The app has no runtime network dependencies. React, Tailwind CSS, and the Inter / JetBrains Mono
fonts (latin subsets) are all bundled at build time, so `dist/index.html` and
`dist-single/index.html` work with no internet connection. Uploaded files are read in the
browser only and are never transmitted anywhere.
