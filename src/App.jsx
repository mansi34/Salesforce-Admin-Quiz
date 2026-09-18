import React from 'react';
import { ExamProvider, useExam } from './context/ExamContext.jsx';
import { EXAM_STATES } from './constants/examConfig.js';
import { FileUpload } from './components/FileUpload.jsx';
import { PreExamScreen } from './components/PreExamScreen.jsx';
import { ExamScreen } from './components/ExamScreen.jsx';
import { PauseScreen } from './components/PauseScreen.jsx';
import { ResultsScreen } from './components/ResultsScreen.jsx';

function ExamAppContent() {
  const { examState } = useExam();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans antialiased">
      {/* Top Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white shadow">
              SF
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight block">ADM-201 Proctor</span>
              <span className="text-[10px] text-slate-400 block -mt-0.5">Salesforce Administrator Exam Simulator</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              Deterministic Proctor Engine
            </span>
          </div>
        </div>
      </header>

      {/* Main Screen Container */}
      <main className="flex-1 py-8 px-4">
        {examState === EXAM_STATES.NOT_STARTED && <FileUpload />}
        {examState === EXAM_STATES.CONFIRMED && <PreExamScreen />}
        {examState === EXAM_STATES.IN_PROGRESS && <ExamScreen />}
        {examState === EXAM_STATES.PAUSED && (
          <>
            <ExamScreen />
            <PauseScreen />
          </>
        )}
        {examState === EXAM_STATES.COMPLETED && <ResultsScreen />}
      </main>

      {/* Formal Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Salesforce Certified Administrator Mock Exam Engine</span>
          <span>Aligned with Official ADM-201 Blueprint • 105 Min • 65% Pass Mark</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ExamProvider>
      <ExamAppContent />
    </ExamProvider>
  );
}
