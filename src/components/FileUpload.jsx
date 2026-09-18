import React, { useState } from 'react';
import { useExam } from '../context/ExamContext.jsx';

export function FileUpload() {
  const { loadFileContent, isParsing, parseProgress, parseError } = useExam();
  const [dragActive, setDragActive] = useState(false);
  const [pastedText, setPastedText] = useState('');
  const [showPasteArea, setShowPasteArea] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      loadFileContent(content, file.name);
    };
    reader.readAsText(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handlePasteSubmit = () => {
    if (pastedText.trim()) {
      loadFileContent(pastedText, 'Pasted Text');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4 border border-blue-200 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Salesforce Certified Administrator (ADM-201)</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Official Mock Exam Proctor & Simulator</p>
        </div>

        {parseError && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r text-red-700 text-sm">
            <div className="font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Parsing Error
            </div>
            <p className="mt-1">{parseError}</p>
          </div>
        )}

        {isParsing ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent mb-4"></div>
            <p className="text-slate-700 font-semibold text-base">Parsing and categorizing question bank...</p>
            <p className="text-slate-400 text-xs mt-1">Applying heuristic classification against 8 official ADM-201 topics</p>
            <div className="w-64 bg-slate-200 rounded-full h-2 mx-auto mt-4 overflow-hidden">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${parseProgress || 45}%` }}></div>
            </div>
          </div>
        ) : (
          <div>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                dragActive ? 'border-blue-500 bg-blue-50/50' : 'border-slate-300 hover:border-blue-400 bg-slate-50/50'
              }`}
              onClick={() => document.getElementById('exam-file-input').click()}
            >
              <input
                id="exam-file-input"
                type="file"
                accept=".md,.txt"
                onChange={handleFileInputChange}
                className="hidden"
              />
              <svg className="mx-auto h-12 w-12 text-slate-400 mb-3" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-slate-700 font-semibold block text-base">
                Upload Question File (<code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">Admin topic1.1.md</code> or <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">Admin Exam Dump.md</code>)
              </span>
              <p className="text-xs text-slate-500 mt-1">Drag and drop your file here, or click to browse (.md, .txt)</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setShowPasteArea(!showPasteArea)}
                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition"
              >
                {showPasteArea ? 'Hide direct paste box' : 'Or paste question text manually...'}
              </button>
            </div>

            {showPasteArea && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Paste Question Dump Text
                </label>
                <textarea
                  rows="6"
                  className="w-full text-xs font-mono p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1. Inline editing updates the field when...&#10;A. The field is saved&#10;B. When the record is saved&#10;Answer: B&#10;Why: Inline editing allows..."
                  value={pastedText}
                  onChange={(e) => setPastedText(e.target.value)}
                ></textarea>
                <button
                  type="button"
                  onClick={handlePasteSubmit}
                  disabled={!pastedText.trim()}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition shadow-sm"
                >
                  Parse Pasted Content
                </button>
              </div>
            )}

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                Expected Input Schema & Tolerances
              </h3>
              <div className="bg-slate-900 text-slate-200 text-xs font-mono p-4 rounded-lg overflow-x-auto leading-relaxed">
                <div><span className="text-emerald-400">1. Question title text... (Choose two)</span></div>
                <div className="text-slate-400">A. Option text 1</div>
                <div className="text-slate-400">B. Option text 2</div>
                <div className="text-slate-400">C. Option text 3</div>
                <div><span className="text-amber-300">Answer: B, C</span></div>
                <div><span className="text-cyan-300">Why: Rationale explaining correct answer.</span></div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                * The parser supports markdown formats, numbered headers, inline answers (<code>Answer:</code>, <code>Answer(s):</code>), and auto-classifies questions into the 8 ADM-201 blueprint domains.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
