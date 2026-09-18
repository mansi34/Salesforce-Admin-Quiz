import React from 'react';
import { useExam } from '../context/ExamContext.jsx';

export function PauseScreen() {
  const { resumeExam } = useExam();

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-6 md:p-8 text-center animate-in fade-in zoom-in duration-150">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-700 mb-4 border border-amber-200">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-slate-800 tracking-tight">
          Examination Paused
        </h2>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 my-4 text-xs text-amber-800 text-left space-y-1">
          <p className="font-semibold">Notice: Single-Pause Rule</p>
          <p className="text-amber-700">
            The single allowed session pause has now been used. Resuming will restart the timer permanently; subsequent pauses are locked.
          </p>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          The countdown clock has stopped. Click below to resume your exam immediately.
        </p>

        <button
          type="button"
          onClick={resumeExam}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition shadow-md flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Resume Examination</span>
        </button>
      </div>
    </div>
  );
}
