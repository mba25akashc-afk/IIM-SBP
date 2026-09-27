import React from 'react';
import { 
  BrainCircuit, 
  Target, 
  Zap, 
  ShieldCheck, 
  Users, 
  Package, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* HERO */}
      <div className="bg-[#141738] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-950">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>The SkillSutra Story & Manifesto</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Train the Mind Behind the Marks.
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            India’s coaching hubs teach the syllabus. Nobody trains the cognitive engine that actually sits in front of the computer screen.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* SECTION 1: THE CORE THESIS */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
            Our Core Thesis
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
            Your syllabus isn’t the problem. <br className="hidden sm:block" />
            Your operating system might be.
          </h2>

          <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4">
            <p>
              Every year, over 3.5 crore young Indians sit for competitive examinations — CAT, UPSC Civil Services, SSC CGL, Bank PO, NEET, and JEE. Almost all of them study the exact same NCERT textbooks, take the same test series, and attend the same video lectures.
            </p>
            <p>
              Yet, why does the 99th percentile gap persist?
            </p>
            <p className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 font-medium text-indigo-950 italic">
              “Competitive exams do not simply test what you know. They test how fast you calculate, how cleanly you retrieve information under cortisol stress, how long you sustain unbroken focus, and how ruthlessly you make triage decisions in seconds.”
            </p>
            <p>
              These are not innate genetic traits. <strong className="text-slate-900 font-semibold">Speed, memory, focus, and poise are trainable physical muscles.</strong> SkillSutra was born to be India’s dedicated skill-gym for competitive-exam aspirants.
            </p>
          </div>
        </div>

        {/* SECTION 2: THE 4-PILLAR ECOSYSTEM */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              The SkillSutra Ecosystem
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              How course pedagogy, D2C physical merchandise, and student community work as one unified system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                1
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Cognitive Skill Courses
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                60-day Quant velocity sprints, 30-day memory palace architectures, and 21-day focus habit loops that transform abstract concepts into instant reflexes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                2
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Tactile Workspace Gear
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physical analog timers, mental math formula desk mats, and 100% TCS iON test center compliant exam kits that build disciplined environmental rituals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                3
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Daily 5-Min Drills
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The “30 Days to a Faster Brain” program delivers daily micro-puzzles every morning at 7 AM to keep cognitive neural speed primed without cognitive burnout.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                4
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Peer Accountability Culture
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A community of 45,000+ ambitious Indian aspirants who wear the uniform, hold each other accountable on study streaks, and celebrate each mock breakthrough.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: MENTOR & PEDAGOGY PEDIGREE */}
        <div className="bg-gradient-to-br from-[#141738] to-[#12153b] text-white rounded-3xl p-8 sm:p-10 border border-indigo-900 space-y-6">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-400 text-indigo-950 px-2.5 py-1 rounded">
            RESEARCH & CURATION
          </span>

          <h3 className="font-heading font-extrabold text-2xl text-white">
            Curated by Educators, Cognitive Scientists & 99%ilers
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our calculation heuristics are drawn from Vedic arithmetic and competitive speed math systems. Our focus models are built on Cal Newport’s deep work frameworks and Huberman Lab ultradian rhythms. And our physical kits are inspected to ensure they pass frisking gates at TCS iON and UPSC examination halls across India.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setCurrentPage('quiz')}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Take the Diagnostic Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentPage('shop')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Gear</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
