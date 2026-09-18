import React, { useState } from 'react';
import { useExam } from '../context/ExamContext.jsx';
import { EXAM_CONFIG } from '../constants/examConfig.js';

export function PreExamScreen() {
  const {
    allParsedQuestions,
    categoryBreakdown,
    confirmAndStartExam,
    resetToUploadScreen,
  } = useExam();

  const [confirmedRules, setConfirmedRules] = useState(false);

  const breakdownList = Object.values(categoryBreakdown);
  const totalGenerated = breakdownList.reduce((acc, c) => acc + c.generatedCount, 0);
  const totalFileSourced = breakdownList.reduce((acc, c) => acc + c.fileCount, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Header Banner */}
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wide">
                Pre-Exam Verification
              </span>
              <h1 className="text-xl font-bold tracking-tight mt-1">
                Salesforce Certified Administrator (ADM-201) Examination
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Parsed question pool: <span className="text-white font-semibold">{allParsedQuestions.length}</span> questions loaded from source file
              </p>
            </div>
            <button
              onClick={resetToUploadScreen}
              className="self-start md:self-auto text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition"
            >
              Upload Different File
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Key Parameters Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Total Questions
              </span>
              <span className="text-2xl font-extrabold text-slate-900 mt-1 block">
                {EXAM_CONFIG.TOTAL_QUESTIONS}
              </span>
              <span className="text-[11px] text-slate-400">ADM-201 Standard</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Time Limit
              </span>
              <span className="text-2xl font-extrabold text-slate-900 mt-1 block">
                {EXAM_CONFIG.TIME_LIMIT_MINUTES} min
              </span>
              <span className="text-[11px] text-slate-400">105-min countdown</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Passing Score
              </span>
              <span className="text-2xl font-extrabold text-blue-700 mt-1 block">
                {EXAM_CONFIG.PASSING_SCORE_PERCENT}%
              </span>
              <span className="text-[11px] text-slate-400">{EXAM_CONFIG.MIN_PASSING_SCORE} of 60 to pass</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Allowed Pauses
              </span>
              <span className="text-2xl font-extrabold text-amber-700 mt-1 block">
                1 Pause
              </span>
              <span className="text-[11px] text-slate-400">Strictly enforced</span>
            </div>
          </div>

          {/* Blueprint & Topic Breakdown Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Topic Blueprint & Question Distribution
              </h2>
              <span className="text-xs text-slate-500">
                Sourced: <span className="font-semibold text-slate-800">{totalFileSourced}</span> | Generated Fallback: <span className="font-semibold text-amber-700">{totalGenerated}</span>
              </span>
            </div>

            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-4">Topic Category</th>
                    <th className="py-2.5 px-3 text-center">Available in File</th>
                    <th className="py-2.5 px-3 text-center">Exam Target</th>
                    <th className="py-2.5 px-3 text-center">File Sourced</th>
                    <th className="py-2.5 px-3 text-center">Generated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                  {breakdownList.map((item) => (
                    <tr key={item.categoryId} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-4 font-semibold text-slate-800">
                        {item.name}
                      </td>
                      <td className="py-2.5 px-3 text-center text-slate-500 font-mono">
                        {item.totalFileAvailable}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-slate-900 font-mono">
                        {item.targetCount}
                      </td>
                      <td className="py-2.5 px-3 text-center text-emerald-700 font-mono">
                        {item.fileCount}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono">
                        {item.generatedCount > 0 ? (
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800">
                            +{item.generatedCount} Gen
                          </span>
                        ) : (
                          <span className="text-slate-400">0</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Exam Proctor Rules Confirmation */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Examination Proctoring Rules & Constraints
            </h3>
            <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside leading-relaxed">
              <li>
                <strong>Single-Direction Progression:</strong> Questions are presented one at a time. No backward navigation or review is permitted until final submission.
              </li>
              <li>
                <strong>No In-Exam Feedback:</strong> No hints, instantaneous scoring, or answer validation are revealed during the session.
              </li>
              <li>
                <strong>Strict Pause Policy:</strong> You are granted exactly <strong>one pause</strong> for the entire exam. Resuming the exam permanently uses this allowance.
              </li>
              <li>
                <strong>Continuous Timer:</strong> The 105-minute countdown runs uninterrupted. If the timer reaches 00:00, the exam is automatically submitted for grading.
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-200">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={confirmedRules}
                  onChange={(e) => setConfirmedRules(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="text-xs font-semibold text-slate-800">
                  I acknowledge the examination rules and understand that timing and single-pause enforcement are final.
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={confirmAndStartExam}
              disabled={!confirmedRules}
              className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md flex items-center gap-2"
            >
              <span>Begin Examination</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
