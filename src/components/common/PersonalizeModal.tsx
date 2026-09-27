import React, { useState } from 'react';
import { X, Target, Zap, Check, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EXAM_LIST, SKILL_LIST } from '../../data/mockData';
import { ExamType, SkillType } from '../../types';

export const PersonalizeModal: React.FC = () => {
  const { 
    isPersonalizeModalOpen, 
    setIsPersonalizeModalOpen, 
    userProfile, 
    updateExamPreference, 
    updateSkillPreference,
    setCurrentPage 
  } = useApp();

  const [selectedExam, setSelectedExam] = useState<ExamType>(userProfile.exam);
  const [selectedSkill, setSelectedSkill] = useState<SkillType>(userProfile.targetSkill);
  const [step, setStep] = useState<1 | 2>(1);

  if (!isPersonalizeModalOpen) return null;

  const handleSave = () => {
    updateExamPreference(selectedExam);
    updateSkillPreference(selectedSkill);
    setIsPersonalizeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="p-5 bg-[#141738] text-white flex items-center justify-between border-b border-indigo-950">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-heading font-bold text-base text-white">Personalize Your SkillSutra Setup</h3>
              <p className="text-slate-400 text-xs">Tailor recommendations to your exact exam & skill goals</p>
            </div>
          </div>
          <button
            onClick={() => setIsPersonalizeModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-indigo-900/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP TABS */}
        <div className="grid grid-cols-2 text-center border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          <button
            onClick={() => setStep(1)}
            className={`py-2.5 flex items-center justify-center gap-1.5 transition-colors ${
              step === 1 ? 'border-b-2 border-amber-500 text-indigo-950 bg-white font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>1. Target Exam ({selectedExam.split(' ')[0]})</span>
          </button>
          <button
            onClick={() => setStep(2)}
            className={`py-2.5 flex items-center justify-center gap-1.5 transition-colors ${
              step === 2 ? 'border-b-2 border-amber-500 text-indigo-950 bg-white font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>2. Priority Skill ({selectedSkill})</span>
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6">
          {step === 1 ? (
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-900 mb-1">What exam are you preparing for?</h4>
                <p className="text-xs text-slate-500">We curate desk mats, tactical exam-day kits, and mock analytics tailored to your test syllabus.</p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {EXAM_LIST.map((exam) => {
                  const isSelected = selectedExam === exam;
                  return (
                    <button
                      key={exam}
                      onClick={() => setSelectedExam(exam)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-indigo-900 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{exam}</span>
                      {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-[#141738] text-white text-xs font-bold rounded-xl hover:bg-indigo-900 flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Choose Priority Skill</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Which trainable skill do you want to master first?</h4>
                <p className="text-xs text-slate-500">Train the mind behind the marks. Pick your biggest bottleneck right now.</p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {SKILL_LIST.map((skill) => {
                  const isSelected = selectedSkill === skill;
                  return (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/80 text-amber-950 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="font-bold">{skill}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  ← Back to Exam
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
                >
                  Save & Apply Setup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
