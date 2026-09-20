import React, { useState } from 'react';
import { useExam } from '../context/ExamContext.jsx';

function AnswerBlock({ title, tone, details, emptyLabel }) {
  const palette =
    tone === 'correct'
      ? {
          wrap: 'bg-emerald-50 border-emerald-200',
          label: 'text-emerald-800',
          text: 'text-emerald-900',
        }
      : {
          wrap: 'bg-red-50 border-red-200',
          label: 'text-red-800',
          text: 'text-red-900',
        };

  return (
    <div className={`p-3 border rounded ${palette.wrap}`}>
      <span className={`font-bold block mb-1 ${palette.label}`}>
        {title}
      </span>
      {details && details.length > 0 ? (
        <ul className='space-y-1'>
          {details.map((d) => (
            <li
              key={d.letter}
              className={palette.text}
            >
              <span className='font-mono font-bold mr-1.5'>
                {d.letter}.
              </span>
              <span>{d.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span className='italic text-slate-500'>{emptyLabel}</span>
      )}
    </div>
  );
}

function SourceAnswerNote({ line, warning }) {
  if (!line && !warning) return null;
  return (
    <div className='text-[11px] text-slate-500 border border-slate-200 rounded px-3 py-2 bg-slate-50'>
      {line && (
        <div>
          <span className='font-semibold text-slate-600'>
            Stated in your file:{' '}
          </span>
          <span className='font-mono text-slate-700'>
            Answer: {line}
          </span>
        </div>
      )}
      {warning && (
        <div className='mt-1 text-amber-700'>{warning}</div>
      )}
    </div>
  );
}

export function ResultsScreen() {
  const {
    examResults,
    restartExamWithSamePool,
    resetToUploadScreen,
  } = useExam();
  const [activeTab, setActiveTab] = useState('incorrect'); // 'incorrect' | 'correct' | 'generated' | 'categories'

  if (!examResults) return null;

  const {
    scorePercent,
    rawCorrectCount,
    totalQuestions,
    isPassed,
    passingThresholdPercent,
    minPassingCount,
    incorrectQuestions,
    correctQuestions,
    generatedQuestions,
    categoryStats,
  } = examResults;

  return (
    <div className='max-w-5xl mx-auto p-4 md:p-6 space-y-6'>
      {/* Pass / Fail Outcome Header */}
      <div
        className={`rounded-xl shadow-lg border p-6 md:p-8 text-white ${
          isPassed
            ? 'bg-gradient-to-r from-emerald-800 to-teal-900 border-emerald-700'
            : 'bg-gradient-to-r from-rose-900 to-red-950 border-rose-800'
        }`}
      >
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <span
                className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                  isPassed
                    ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40'
                    : 'bg-red-500/30 text-red-200 border border-red-400/40'
                }`}
              >
                {isPassed
                  ? 'Official Result: Passed'
                  : 'Official Result: Failed'}
              </span>
            </div>
            <h1 className='text-2xl md:text-3xl font-extrabold tracking-tight'>
              Salesforce Certified Administrator Result
            </h1>
            <p className='text-xs text-slate-300 mt-1'>
              Passing threshold: {passingThresholdPercent}% (
              {minPassingCount} of {totalQuestions} required)
            </p>
          </div>

          <div className='flex items-center gap-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15'>
            <div className='text-right'>
              <span className='text-[11px] uppercase tracking-wider text-slate-300 block font-semibold'>
                Final Score
              </span>
              <span className='text-3xl md:text-4xl font-extrabold font-mono text-white'>
                {scorePercent}%
              </span>
            </div>
            <div className='h-10 w-[1px] bg-white/20'></div>
            <div>
              <span className='text-[11px] uppercase tracking-wider text-slate-300 block font-semibold'>
                Correct Answers
              </span>
              <span className='text-xl font-bold font-mono text-white'>
                {rawCorrectCount} / {totalQuestions}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className='mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3'>
          <div className='text-xs text-slate-300'>
            Exam session completed and deterministically evaluated.
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={restartExamWithSamePool}
              className='px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-semibold backdrop-blur transition border border-white/20'
            >
              Retake Exam (New 60 Sample)
            </button>
            <button
              onClick={resetToUploadScreen}
              className='px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 rounded text-xs font-semibold transition shadow'
            >
              Upload New File
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className='bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden'>
        <div className='flex border-b border-slate-200 bg-slate-50 text-xs font-semibold overflow-x-auto'>
          <button
            onClick={() => setActiveTab('incorrect')}
            className={`px-5 py-3.5 border-b-2 transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'incorrect'
                ? 'border-red-600 text-red-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Incorrect Answers</span>
            <span className='px-1.5 py-0.5 rounded-full text-[10px] bg-red-100 text-red-800 font-bold'>
              {incorrectQuestions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('correct')}
            className={`px-5 py-3.5 border-b-2 transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'correct'
                ? 'border-emerald-600 text-emerald-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Correct Answers</span>
            <span className='px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-bold'>
              {correctQuestions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-5 py-3.5 border-b-2 transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'categories'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Topic Performance Breakdown</span>
          </button>

          <button
            onClick={() => setActiveTab('generated')}
            className={`px-5 py-3.5 border-b-2 transition whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'generated'
                ? 'border-amber-600 text-amber-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Generated Questions Audit</span>
            <span className='px-1.5 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-800 font-bold'>
              {generatedQuestions.length}
            </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className='p-6'>
          {/* TAB 1: INCORRECT QUESTIONS BREAKDOWN */}
          {activeTab === 'incorrect' && (
            <div className='space-y-6'>
              {incorrectQuestions.length === 0 ? (
                <div className='text-center py-12 text-slate-500'>
                  <svg
                    className='w-12 h-12 text-emerald-500 mx-auto mb-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <p className='font-semibold text-slate-800'>
                    Perfect Score!
                  </p>
                  <p className='text-xs text-slate-500'>
                    You did not miss any questions in this session.
                  </p>
                </div>
              ) : (
                incorrectQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className='border border-red-200 rounded-lg p-5 bg-red-50/20 space-y-4'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span className='text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded font-mono'>
                          Q{q.examIndex}
                        </span>
                        <span className='text-xs text-slate-500 font-medium uppercase'>
                          {q.source === 'generated'
                            ? 'Generated Question'
                            : 'Source File'}
                        </span>
                      </div>
                      <span className='text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200'>
                        Incorrect
                      </span>
                    </div>

                    <div className='text-sm font-semibold text-slate-900 leading-relaxed'>
                      {q.question}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-xs'>
                      <AnswerBlock
                        title='Your Answer:'
                        tone='incorrect'
                        details={q.userAnswerDetails}
                        emptyLabel='No answer provided'
                      />
                      <AnswerBlock
                        title='Correct Answer:'
                        tone='correct'
                        details={q.correctAnswerDetails}
                        emptyLabel={q.correctAnswerString}
                      />
                    </div>

                    <SourceAnswerNote
                      line={q.sourceAnswerLine}
                      warning={q.answerKeyWarning}
                    />

                    {/* Options list for context */}
                    <div className='space-y-1 text-xs pt-2 border-t border-slate-200/80'>
                      {q.options.map((opt) => {
                        const isUserPicked = q.userAnswers.includes(
                          opt.letter,
                        );
                        const isCorrectOpt =
                          q.correctLetters.includes(opt.letter);

                        return (
                          <div
                            key={opt.letter}
                            className={`p-2 rounded flex items-start gap-2 ${
                              isCorrectOpt
                                ? 'bg-emerald-100/70 text-emerald-900 font-medium'
                                : isUserPicked
                                  ? 'bg-red-100/70 text-red-900'
                                  : 'text-slate-600'
                            }`}
                          >
                            <span className='font-bold font-mono uppercase'>
                              {opt.letter}.
                            </span>
                            <span>{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div className='p-3.5 bg-white border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-700'>
                      <span className='font-bold text-slate-900 block mb-1'>
                        Explanation & Rationale:
                      </span>
                      {q.explanation}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: CORRECT QUESTIONS BREAKDOWN */}
          {activeTab === 'correct' && (
            <div className='space-y-6'>
              {correctQuestions.length === 0 ? (
                <div className='text-center py-12 text-slate-500'>
                  <p className='font-semibold text-slate-800'>
                    No correct answers in this session.
                  </p>
                </div>
              ) : (
                correctQuestions.map((q) => (
                  <div
                    key={q.id}
                    className='border border-emerald-200 rounded-lg p-5 bg-emerald-50/20 space-y-4'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span className='text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-mono'>
                          Q{q.examIndex}
                        </span>
                        <span className='text-xs text-slate-500 font-medium uppercase'>
                          {q.source === 'generated'
                            ? 'Generated Question'
                            : 'Source File'}
                        </span>
                      </div>
                      <span className='text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200'>
                        Correct
                      </span>
                    </div>

                    <div className='text-sm font-semibold text-slate-900 leading-relaxed'>
                      {q.question}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-xs'>
                      <AnswerBlock
                        title='Your Answer:'
                        tone='correct'
                        details={q.userAnswerDetails}
                        emptyLabel='No answer provided'
                      />
                      <AnswerBlock
                        title='Correct Answer:'
                        tone='correct'
                        details={q.correctAnswerDetails}
                        emptyLabel={q.correctAnswerString}
                      />
                    </div>

                    <SourceAnswerNote
                      line={q.sourceAnswerLine}
                      warning={q.answerKeyWarning}
                    />

                    {/* Explanation */}
                    <div className='p-3 bg-white border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-700'>
                      <span className='font-bold text-slate-900 block mb-1'>
                        Explanation & Rationale:
                      </span>
                      {q.explanation}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: TOPIC PERFORMANCE BREAKDOWN */}
          {activeTab === 'categories' && (
            <div className='space-y-4'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-slate-700 mb-2'>
                Performance by Blueprint Domain
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {categoryStats.map((cat) => (
                  <div
                    key={cat.id}
                    className='border border-slate-200 rounded-lg p-4 bg-slate-50'
                  >
                    <div className='flex items-center justify-between mb-1'>
                      <span className='text-xs font-bold text-slate-800'>
                        {cat.name}
                      </span>
                      <span className='text-xs font-extrabold font-mono text-slate-900'>
                        {cat.correct} / {cat.total} ({cat.percentage}
                        %)
                      </span>
                    </div>
                    <div className='w-full bg-slate-200 rounded-full h-2 overflow-hidden mt-2'>
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          cat.percentage >= 65
                            ? 'bg-emerald-600'
                            : 'bg-rose-600'
                        }`}
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GENERATED QUESTIONS AUDIT */}
          {activeTab === 'generated' && (
            <div className='space-y-6'>
              <div className='p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed'>
                <strong>Sourcing Audit:</strong> The questions below
                were automatically generated by the fallback engine to
                meet official ADM-201 category blueprint weighting
                requirements where the input file did not have enough
                questions.
              </div>

              {generatedQuestions.length === 0 ? (
                <div className='text-center py-8 text-slate-500 text-xs'>
                  All 60 questions were sourced directly from your
                  uploaded file (0 generated fallback questions).
                </div>
              ) : (
                generatedQuestions.map((q) => (
                  <div
                    key={q.id}
                    className='border border-amber-200 rounded-lg p-4 bg-amber-50/30 space-y-3 text-xs'
                  >
                    <div className='flex items-center justify-between'>
                      <span className='font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-mono'>
                        Generated Q{q.examIndex}
                      </span>
                      <span className='text-slate-500 uppercase font-semibold'>
                        Result:{' '}
                        {q.isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <div className='text-sm font-semibold text-slate-900'>
                      {q.question}
                    </div>
                    <div className='text-slate-700'>
                      <strong>Correct Answer:</strong>{' '}
                      <span className='font-mono'>
                        {q.correctAnswerString}
                      </span>
                    </div>
                    <div className='p-2 bg-white rounded border border-slate-200 text-slate-600'>
                      {q.explanation}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
