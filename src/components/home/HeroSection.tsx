import React from 'react';
import { 
  ArrowRight, 
  BrainCircuit, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  CheckCircle2,
  Clock,
  Layers,
  Compass
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HeroSection: React.FC = () => {
  const { setCurrentPage, navigateToProduct, userProfile } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#141738] via-[#1a1d45] to-[#121435] text-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-indigo-950">
      
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/20 blur-[130px] rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TRUST BADGE PILL */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/60 border border-indigo-700/60 shadow-inner text-xs text-slate-200">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-medium">India’s Skill-Gym For Exam Aspirants</span>
            <span className="text-slate-400">•</span>
            <span className="text-amber-300 font-semibold">TCS iON & Center Compliant</span>
          </div>
        </div>

        {/* HERO COPY */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
            Train the Mind <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Behind the Marks.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            Build the skills competitive exams actually test — <strong className="text-white font-semibold">speed</strong>, <strong className="text-white font-semibold">memory</strong>, <strong className="text-white font-semibold">focus</strong>, <strong className="text-white font-semibold">reasoning</strong>, and <strong className="text-white font-semibold">communication</strong>.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setCurrentPage('quiz')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 hover:from-amber-400 hover:to-amber-200 text-indigo-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <BrainCircuit className="w-4 h-4 text-indigo-950" />
              <span>Take the 60-Second Skill Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentPage('shop')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-900/60 hover:bg-indigo-900/90 text-white font-semibold text-sm rounded-xl border border-indigo-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore the Store</span>
            </button>
          </div>

          {/* SOCIAL PROOF MICRO-STRIP */}
          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 flex-wrap">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>45,000+ Aspirants Training</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>TCS iON Tested Gear</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>100% Research-Grounded</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL: ASPIRANT DESK SETUP SHOWCASE */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Main Visual Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-indigo-900/80 bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85"
              alt="SkillSutra Aspirant Productivity Desk Setup"
              className="w-full h-[380px] sm:h-[480px] object-cover object-center filter brightness-90 contrast-105 group-hover:scale-[1.01] transition-transform duration-700"
            />
            
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10122e] via-transparent to-transparent opacity-80" />

            {/* Interactive Desk Setup Hotspots / Annotation Overlays */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-indigo-800/80 max-w-md shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3" /> The 99th-Percentile Study Habitat
                </span>
                <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                  Desk Mat • Analog Focus Timer • Insulated Bottle • Exam-Day Tactical Pouch
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Engineered to eliminate smartphone friction, automate spaced revision, and lower exam-hall cortisol spikes.
                </p>
              </div>

              <button
                onClick={() => navigateToProduct('prod-focus-1')}
                className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-1.5 shrink-0 cursor-pointer transition-all"
              >
                <span>View The Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-5 left-5 hidden sm:flex items-center gap-2 bg-[#141738]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-700/60 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-200">50-Min Deep Work Protocol</span>
            </div>

            <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2 bg-[#141738]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-indigo-700/60 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-200">Zero Digital Dopamine Loops</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
