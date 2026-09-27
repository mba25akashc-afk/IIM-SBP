import React, { useState } from 'react';
import { 
  BrainCircuit, 
  ArrowRight, 
  Zap, 
  Target, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SkillType } from '../../types';

export const HomeSkillQuiz: React.FC = () => {
  const { setCurrentPage, addToCart, navigateToProduct, setSelectedCourseId } = useApp();

  const [activeBottleneck, setActiveBottleneck] = useState<number>(2); // Default selected: Focus bottleneck

  const bottlenecks = [
    {
      id: 0,
      title: 'Time Crunch',
      label: 'You know the answer, but run out of time on mock tests.',
      skill: 'Speed' as SkillType,
      stat: '62%',
      gap: 'Speed & Mental Math',
      courseName: 'Speed Math & Quant Aptitude',
      courseId: 'course-speed-math',
      productName: 'SkillSutra Extended Desk Mat',
      productId: 'prod-desk-1',
      price: 699,
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      id: 1,
      title: 'Forgetting Curve',
      label: 'You forget dense formulas and GS articles after 3 weeks.',
      skill: 'Memory' as SkillType,
      stat: '42%',
      gap: 'Memory Encoding & Retrieval',
      courseName: 'Memory & Retention Mastery',
      courseId: 'course-memory-retention',
      productName: 'Spaced-Repetition Revision Tracker',
      productId: 'prod-digital-2',
      price: 149,
      color: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      id: 2,
      title: 'Focus Leak',
      label: 'You lose focus and check your phone every 15 minutes during study.',
      skill: 'Focus' as SkillType,
      stat: '54%',
      gap: 'Focus & Deep-Work Endurance',
      courseName: 'Focus & Deep-Work — 21 Days',
      courseId: 'course-focus-deepwork',
      productName: 'Deep Work Focus Kit',
      productId: 'prod-focus-1',
      price: 799,
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 3,
      title: 'Interview Freeze',
      label: 'You struggle to articulate your thoughts clearly under panel pressure.',
      skill: 'Communication' as SkillType,
      stat: '48%',
      gap: 'Verbal Articulation & GD Poise',
      courseName: 'Communication, GD & PI',
      courseId: 'course-communication-gdpi',
      productName: 'Executive Interview-Day Kit',
      productId: 'prod-exam-5',
      price: 799,
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 4,
      title: 'Decision Fatigue',
      label: 'You overthink and get stuck on trap questions for 4+ minutes.',
      skill: 'Decision-Making' as SkillType,
      stat: '51%',
      gap: 'Real-Time Heuristic Triage',
      courseName: 'Decision-Making & Cases',
      courseId: 'course-decision-making',
      productName: 'Calm Before Exam Kit',
      productId: 'prod-focus-3',
      price: 699,
      color: 'from-rose-500/20 to-indigo-500/20'
    },
    {
      id: 5,
      title: 'Reasoning Trap',
      label: 'You struggle with multi-variable logical reasoning under time pressure.',
      skill: 'Reasoning' as SkillType,
      stat: '61%',
      gap: 'Deductive Framing & Puzzle Trees',
      courseName: 'Verbal & Logical Reasoning',
      courseId: 'course-verbal-reasoning',
      productName: 'Mock Test Error-Log System',
      productId: 'prod-digital-3',
      price: 199,
      color: 'from-cyan-500/20 to-indigo-500/20'
    }
  ];

  const current = bottlenecks[activeBottleneck];

  return (
    <section className="py-20 bg-[#fafaf9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>60-Second Diagnostic</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            What’s holding you back?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Your syllabus may be ready. <strong className="text-indigo-950 font-semibold">Is your skill set?</strong> Tap your primary study bottleneck below:
          </p>
        </div>

        {/* INTERACTIVE DIAGNOSTIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 6 SELECTABLE BOTTLENECK CARDS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {bottlenecks.map((item) => {
              const isSelected = activeBottleneck === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveBottleneck(item.id)}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'border-indigo-900 bg-white shadow-xl shadow-indigo-950/5 ring-2 ring-indigo-900/10'
                      : 'border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Obstacle 0{item.id + 1}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-amber-400 text-indigo-950' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.skill}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base mb-1.5 group-hover:text-indigo-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    “{item.label}”
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Typical Aspirant Score:</span>
                    <span className="font-mono font-bold text-slate-700">{item.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: INSTANT GENERATED SKILL PROFILE & RECOMMENDATION */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#141738] to-[#0f112c] text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-indigo-900/80 sticky top-24">
            
            {/* Header badge */}
            <div className="flex items-center justify-between pb-4 border-b border-indigo-800/60 mb-5">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-amber-400" />
                <span className="font-heading font-bold text-sm text-white tracking-wide uppercase">
                  Diagnostic Profile
                </span>
              </div>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-mono px-2 py-0.5 rounded font-bold">
                SIMULATED DATA
              </span>
            </div>

            {/* Skill Bars */}
            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Speed (Mental Math)</span>
                  <span className="font-mono font-bold text-slate-200">62%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '62%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Memory & Retention</span>
                  <span className="font-mono font-bold text-slate-200">78%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-amber-300 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    Focus & Deep-Work (Bottleneck)
                  </span>
                  <span className="font-mono font-bold text-amber-400">{current.id === 2 ? current.stat : '54%'}</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: current.id === 2 ? current.stat : '54%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Logical Reasoning</span>
                  <span className="font-mono font-bold text-slate-200">71%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-cyan-400 h-1.5 rounded-full" style={{ width: '71%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Interview & Communication</span>
                  <span className="font-mono font-bold text-slate-200">48%</span>
                </div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '48%' }} />
                </div>
              </div>
            </div>

            {/* DIAGNOSIS BOX */}
            <div className="p-4 bg-indigo-900/50 rounded-xl border border-indigo-800/80 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Your Biggest Opportunity
              </span>
              <h4 className="font-heading font-bold text-base text-white mb-1">
                {current.gap}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                By systematizing {current.skill.toLowerCase()} protocols, top aspirants unlock 15-25 additional percentile marks in their next full-length mock.
              </p>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="space-y-3 mb-6">
              <div 
                onClick={() => {
                  setSelectedCourseId(current.courseId);
                  setCurrentPage('courses');
                }}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase block">Recommended Skill Course</span>
                  <span className="text-xs font-bold text-white">{current.courseName}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>

              <div 
                onClick={() => navigateToProduct(current.productId)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase block">Recommended Merch Gear</span>
                  <span className="text-xs font-bold text-white">{current.productName}</span>
                </div>
                <span className="font-mono text-xs font-bold text-amber-400">₹{current.price}</span>
              </div>
            </div>

            {/* CTAS */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setSelectedCourseId(current.courseId);
                  setCurrentPage('courses');
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Build This Skill</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setCurrentPage('quiz')}
                className="w-full py-2 text-slate-400 hover:text-white text-xs text-center font-medium transition-colors"
              >
                Take the Full 6-Question Quiz →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
