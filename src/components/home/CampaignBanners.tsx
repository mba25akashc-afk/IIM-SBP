import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CampaignBanners: React.FC = () => {
  const { setCurrentPage, navigateToShopWithFilter } = useApp();

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BANNER 1: "EXAM SEASON IS A SKILL SEASON" */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#141738] to-[#252a6a] text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div className="relative z-10 max-w-md">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest bg-amber-400 text-indigo-950 px-2 py-0.5 rounded mb-3 inline-block">
                EXAM SEASON IS A SKILL SEASON
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                Your Mocks Need More Than Marks.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Plug unattempted question leaks and reduce calculation fatigue with our speed math mats and analog timers.
              </p>
              <button
                onClick={() => navigateToShopWithFilter({ category: 'Desk' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Build Your Study Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-15 pointer-events-none">
              <Zap className="w-64 h-64 text-amber-400" />
            </div>
          </div>

          {/* BANNER 2: "BUILD YOUR EXAM-DAY SYSTEM" */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700 text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div className="relative z-10 max-w-md">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest bg-indigo-950 text-white px-2 py-0.5 rounded mb-3 inline-block">
                D-DAY READINESS
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                Build Your Exam-Day System.
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed mb-6">
                100% compliant with TCS iON, UPSC & IBPS center rules. Transparent pouches, test pens & rapid glucose chews.
              </p>
              <button
                onClick={() => navigateToShopWithFilter({ category: 'Exam-Day Kits' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141738] hover:bg-indigo-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Explore Exam-Day Kits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-15 pointer-events-none">
              <ShieldCheck className="w-64 h-64 text-white" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
