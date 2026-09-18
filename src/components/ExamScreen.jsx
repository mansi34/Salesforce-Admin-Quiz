import React from 'react';
import { useExam } from '../context/ExamContext.jsx';
import { TOPIC_CATEGORIES } from '../constants/examConfig.js';

export function ExamScreen() {
  const {
    examQuestions,
    currentQuestionIndex,
    userAnswers,
    timeRemaining,
    pauseUsed,
    selectOption,
    goToNextQuestion,
    pauseExam,
  } = useExam();

  const currentQuestion = examQuestions[currentQuestionIndex];
  if (!currentQuestion) return null;

  const totalQuestions = examQuestions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const selectedLetters = userAnswers[currentQuestion.id] || [];

  // Format countdown timer (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Find category display name
  const topicCategory = Object.values(TOPIC_CATEGORIES).find(
    (c) => c.id === currentQuestion.categoryId
  );
  const categoryName = topicCategory ? topicCategory.name : 'General Administration';

  const isMulti = currentQuestion.isMultiSelect;
  const requiredCount = currentQuestion.requiredSelectionCount || 1;

  const handleOptionClick = (letter) => {
    selectOption(currentQuestion.id, letter, isMulti);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 select-none">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Procedural Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Exam in progress
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-sm font-bold text-white font-mono">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Timer Display */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded font-mono text-sm font-bold ${
              timeRemaining < 300 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-200 border border-slate-700'
            }`}>
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Time remaining: {formatTime(timeRemaining)}</span>
            </div>

            {/* Single Pause Button */}
            <button
              type="button"
              onClick={pauseExam}
              disabled={pauseUsed}
              title={pauseUsed ? 'The single allowed pause has already been used.' : 'Pause session (1 allowed)'}
              className={`text-xs px-3 py-1.5 rounded font-semibold border transition ${
                pauseUsed
                  ? 'bg-slate-800 text-slate-500 border-slate-800 cursor-not-allowed opacity-50'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {pauseUsed ? 'Pause (Used)' : 'Pause (1 left)'}
            </button>
          </div>
        </div>

        {/* Question Area */}
        <div className="p-6 md:p-8">
          {/* Category Tag & Instructions */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 uppercase tracking-wide">
              {categoryName}
            </span>

            <span className="text-xs font-semibold text-slate-500">
              {isMulti
                ? `(Choose ${requiredCount > 1 ? requiredCount : 'multiple'})`
                : '(Choose 1)'}
            </span>
          </div>

          {/* Question Text */}
          <div className="text-base md:text-lg font-medium text-slate-900 leading-relaxed mb-8">
            {currentQuestion.question}
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedLetters.includes(opt.letter);

              return (
                <div
                  key={opt.letter}
                  onClick={() => handleOptionClick(opt.letter)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition flex items-start gap-4 ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/40 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="pt-0.5">
                    {isMulti ? (
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-400 bg-white'
                      }`}>
                        {isSelected && (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    ) : (
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        isSelected
                          ? 'border-blue-600 bg-white'
                          : 'border-slate-400 bg-white'
                      }`}>
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-500 uppercase mr-2 font-mono">
                      {opt.letter}.
                    </span>
                    <span className={`text-sm leading-normal ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                      {opt.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Procedural Navigation Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div className="text-xs text-slate-400">
              {selectedLetters.length > 0 ? (
                <span className="text-slate-600 font-medium font-mono">
                  Recorded: {selectedLetters.join(', ')}
                </span>
              ) : (
                <span className="text-amber-600 font-medium">No selection recorded</span>
              )}
            </div>

            <button
              type="button"
              onClick={goToNextQuestion}
              className="px-6 py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition shadow flex items-center gap-2"
            >
              <span>{isLastQuestion ? 'Submit Examination' : 'Next Question'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
