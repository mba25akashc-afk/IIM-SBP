import React, { useState } from 'react';
import { 
  BrainCircuit, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Clock, 
  ShoppingBag,
  Award
} from 'lucide-react';
import { QUIZ_QUESTIONS, COURSES, PRODUCTS, BUNDLES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { SkillProfile, SkillType } from '../types';

export const SkillQuizPage: React.FC = () => {
  const { 
    setSkillProfile, 
    setCurrentPage, 
    setSelectedCourseId, 
    navigateToProduct, 
    addToCart,
    addToast 
  } = useApp();

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [calculatedProfile, setCalculatedProfile] = useState<SkillProfile | null>(null);

  const question = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = [...selectedAnswers];
    nextAnswers[currentStep] = optionIndex;
    setSelectedAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 250);
    } else {
      // Calculate Skill Profile
      computeProfile(nextAnswers);
    }
  };

  const computeProfile = (answers: number[]) => {
    // Generate realistic tailored scores based on the user's answers
    let speed = 64;
    let memory = 76;
    let focus = 52;
    let reasoning = 72;
    let communication = 58;
    let decisionMaking = 60;

    answers.forEach((ansIdx, qIdx) => {
      const q = QUIZ_QUESTIONS[qIdx];
      const opt = q.options[ansIdx];
      if (opt && opt.scoreWeight) {
        if (q.skillTested === 'Speed') speed = opt.scoreWeight.Speed || speed;
        if (q.skillTested === 'Memory') memory = opt.scoreWeight.Memory || memory;
        if (q.skillTested === 'Focus') focus = opt.scoreWeight.Focus || focus;
        if (q.skillTested === 'Reasoning') reasoning = opt.scoreWeight.Reasoning || reasoning;
        if (q.skillTested === 'Communication') communication = opt.scoreWeight.Communication || communication;
        if (q.skillTested === 'Decision-Making') decisionMaking = opt.scoreWeight['Decision-Making'] || decisionMaking;
      }
    });

    const overall = Math.round((speed + memory + focus + reasoning + communication + decisionMaking) / 6);

    const profile: SkillProfile = {
      speed,
      memory,
      focus,
      reasoning,
      communication,
      decisionMaking,
      overallScore: overall,
      weakestSkill: 'Focus',
      strongestSkill: 'Memory',
      recommendedCourseId: 'course-focus-deepwork',
      recommendedProductId: 'prod-focus-1',
      recommendedBundleId: 'bundle-focus'
    };

    setCalculatedProfile(profile);
    setSkillProfile(profile);
    setIsCompleted(true);
    addToast('Diagnostic complete! Skill Profile generated.', 'success');
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
    setCalculatedProfile(null);
  };

  const recommendedCourse = COURSES.find((c) => c.id === calculatedProfile?.recommendedCourseId) || COURSES[3];
  const recommendedProduct = PRODUCTS.find((p) => p.id === calculatedProfile?.recommendedProductId) || PRODUCTS[4];
  const recommendedBundle = BUNDLES.find((b) => b.id === calculatedProfile?.recommendedBundleId) || BUNDLES[0];

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* HEADER */}
      <div className="bg-[#141738] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-indigo-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>60-Second Cognitive Diagnostic</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            What’s holding you back?
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Your syllabus may be ready. <strong className="text-amber-300 font-semibold">Is your skill set?</strong> Uncover your hidden exam bottlenecks in 60 seconds.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {!isCompleted ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            
            {/* PROGRESS BAR */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
                <span>
                  Question <strong className="text-indigo-950">{currentStep + 1}</strong> of {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono text-amber-700 font-bold">
                  {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* SCENARIO BADGE & QUESTION */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-900 px-2 py-0.5 rounded">
                  {question.skillTested} Dimension
                </span>
                <span className="text-xs text-slate-400">• {question.scenario}</span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug">
                {question.text}
              </h2>
            </div>

            {/* SELECTABLE OPTION CARDS */}
            <div className="space-y-3 mb-8">
              {question.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentStep] === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'border-indigo-900 bg-indigo-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'bg-indigo-950 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-xs sm:text-sm text-slate-900">
                        {opt.text}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        {opt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* NAVIGATION FOOTER */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Previous Question
              </button>

              <span className="text-[11px] text-slate-400 italic">
                Takes ~60 seconds • Zero signup required
              </span>
            </div>

          </div>
        ) : (
          /* QUIZ RESULTS VIEW */
          <div className="space-y-8 animate-fade-in">
            
            {/* SCORE HERO BANNER */}
            <div className="bg-gradient-to-br from-[#141738] to-[#1d2258] text-white rounded-3xl p-6 sm:p-10 border border-indigo-900 shadow-xl">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-indigo-800/80">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-400 text-indigo-950 px-2.5 py-1 rounded shadow-xs inline-block mb-2">
                    YOUR DIAGNOSTIC RESULT
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                    YOUR SKILL PROFILE
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                    Based on your cognitive problem heuristics and distraction habits under pressure.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-indigo-950/70 p-4 rounded-2xl border border-indigo-800/60 shrink-0">
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-indigo-950 flex flex-col items-center justify-center font-extrabold font-mono shadow-md">
                    <span className="text-xl leading-none">{calculatedProfile?.overallScore}</span>
                    <span className="text-[9px] uppercase font-bold tracking-tighter">Score</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Composite Index</span>
                    <span className="text-[11px] text-amber-300 font-semibold">Tier: Ready to Accelerate</span>
                  </div>
                </div>
              </div>

              {/* 5 SKILL BREAKDOWN BARS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-6">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Speed (Mental Math Velocity)</span>
                    <span className="font-mono font-bold text-slate-100">{calculatedProfile?.speed}%</span>
                  </div>
                  <div className="w-full bg-indigo-950 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${calculatedProfile?.speed}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Memory (Spaced Retrieval)</span>
                    <span className="font-mono font-bold text-slate-100">{calculatedProfile?.memory}%</span>
                  </div>
                  <div className="w-full bg-indigo-950 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${calculatedProfile?.memory}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-amber-300 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      Focus (Deep-Work Endurance)
                    </span>
                    <span className="font-mono font-bold text-amber-300">{calculatedProfile?.focus}%</span>
                  </div>
                  <div className="w-full bg-indigo-950 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${calculatedProfile?.focus}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Reasoning (Deductive Structures)</span>
                    <span className="font-mono font-bold text-slate-100">{calculatedProfile?.reasoning}%</span>
                  </div>
                  <div className="w-full bg-indigo-950 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: `${calculatedProfile?.reasoning}%` }} />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Communication & Interview Poise</span>
                    <span className="font-mono font-bold text-slate-100">{calculatedProfile?.communication}%</span>
                  </div>
                  <div className="w-full bg-indigo-950 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: `${calculatedProfile?.communication}%` }} />
                  </div>
                </div>
              </div>

            </div>

            {/* RECOMMENDATION CALLOUT BOX */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                  Targeted Prescription
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2">
                  Your biggest opportunity: <span className="text-indigo-950">FOCUS + COMMUNICATION</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Your retention and deductive logic are solid. Your main percentile leak is digital dopamine friction during marathon study sessions and articulation under panel pressure.
                </p>
              </div>

              {/* RECOMMENDED COURSE & PRODUCT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                
                {/* Course Card */}
                <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 block mb-1">
                      Recommended Course
                    </span>
                    <h4 className="font-heading font-bold text-lg text-slate-900">
                      {recommendedCourse.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      {recommendedCourse.tagline}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs font-bold">
                      <span className="text-indigo-950">{recommendedCourse.duration} Program</span>
                      <span className="font-mono text-indigo-950 text-base">₹{recommendedCourse.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCourseId(recommendedCourse.id);
                      setCurrentPage('courses');
                    }}
                    className="mt-5 w-full py-2.5 bg-[#141738] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-indigo-900 transition-colors"
                  >
                    View Curriculum
                  </button>
                </div>

                {/* Merchandise Card */}
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      Recommended Workspace Gear
                    </span>
                    <h4 className="font-heading font-bold text-lg text-slate-900">
                      {recommendedProduct.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      {recommendedProduct.shortBenefit}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs font-bold">
                      <span className="text-amber-900">Tactile Study Kit</span>
                      <span className="font-mono text-amber-900 text-base">₹{recommendedProduct.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => navigateToProduct(recommendedProduct.id)}
                    className="mt-5 w-full py-2.5 bg-amber-400 text-indigo-950 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors"
                  >
                    Inspect Physical Kit
                  </button>
                </div>

              </div>

              {/* PRIMARY BUNDLE CTA */}
              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-sm text-slate-900">Want the combined setup?</h5>
                  <p className="text-xs text-slate-500">Get the 21-day Focus Course + Focus Kit + Master Notion Planner for ₹2,799.</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-3 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>

                  <button
                    onClick={() => {
                      addToCart({
                        bundleId: recommendedBundle.id,
                        name: recommendedBundle.name,
                        price: recommendedBundle.bundlePrice,
                        originalPrice: recommendedBundle.originalTotal,
                        image: recommendedBundle.image,
                        type: 'bundle',
                        category: 'System Bundle'
                      });
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Build This Skill (₹{recommendedBundle.bundlePrice})</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
