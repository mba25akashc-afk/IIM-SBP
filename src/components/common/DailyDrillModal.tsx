import React, { useState } from 'react';
import { X, Clock, Award, CheckCircle2, AlertTriangle, ArrowRight, Flame } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TODAY_CHALLENGE } from '../../data/mockData';

export const DailyDrillModal: React.FC = () => {
  const { isChallengeModalOpen, setIsChallengeModalOpen, completeTodayDrill } = useApp();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isChallengeModalOpen) return null;

  const currentQ = TODAY_CHALLENGE.sampleQuestions[currentQIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === currentQ.correct) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < TODAY_CHALLENGE.sampleQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleFinishDrill = () => {
    completeTodayDrill();
    // Reset state for next time
    setTimeout(() => {
      setQuizFinished(false);
      setCurrentQIndex(0);
      setSelectedOption(null);
      setShowExplanation(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 bg-[#141738] text-white flex items-center justify-between border-b border-indigo-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-indigo-950 flex items-center justify-center font-bold text-xs">
              <Flame className="w-4 h-4 fill-indigo-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                  30 Days to a Faster Brain
                </h3>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.5 rounded">
                  Day 17/30
                </span>
              </div>
              <p className="text-slate-400 text-xs">Today: Logical deduction & speed calculation drill</p>
            </div>
          </div>
          <button
            onClick={() => setIsChallengeModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-indigo-900/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6">
          {!quizFinished ? (
            <div>
              {/* Progress & Question Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                <span className="font-semibold text-indigo-900">
                  Question {currentQIndex + 1} of {TODAY_CHALLENGE.sampleQuestions.length}
                </span>
                <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600" /> Daily Speed Drill
                </span>
              </div>

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-5 leading-snug">
                {currentQ.q}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correct;

                  let btnStyle = "border-slate-200 hover:border-indigo-400 hover:bg-slate-50 text-slate-800";
                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold";
                    } else if (isSelected && !isCorrect) {
                      btnStyle = "border-rose-400 bg-rose-50 text-rose-950 line-through";
                    } else {
                      btnStyle = "border-slate-100 opacity-60 text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-3.5 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {showExplanation && (
                <div className="p-3.5 bg-indigo-50/80 rounded-xl border border-indigo-100 text-xs text-indigo-950 mb-5 animate-fade-in">
                  <div className="font-bold mb-1 flex items-center gap-1.5 text-indigo-900">
                    <span>Solution Blueprint:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {selectedOption !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-[#141738] hover:bg-indigo-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>{currentQIndex < TODAY_CHALLENGE.sampleQuestions.length - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="py-4 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-heading font-bold text-xl text-slate-900 mb-1">
                Day 17 Drill Complete!
              </h4>
              <p className="text-slate-600 text-xs max-w-sm mx-auto mb-6">
                You scored <strong className="text-indigo-950 font-bold">{correctCount}/{TODAY_CHALLENGE.sampleQuestions.length}</strong>. Daily micro-drills strengthen neural speed circuits far faster than passive reading.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto mb-6 text-center">
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <span className="text-[10px] text-amber-800 uppercase font-bold tracking-wider block">XP Earned</span>
                  <span className="font-mono text-lg font-extrabold text-amber-700">+150 XP</span>
                </div>
                <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200">
                  <span className="text-[10px] text-indigo-800 uppercase font-bold tracking-wider block">Streak</span>
                  <span className="font-mono text-lg font-extrabold text-indigo-900">13 Days 🔥</span>
                </div>
              </div>

              <button
                onClick={handleFinishDrill}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                Claim XP & Update Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
