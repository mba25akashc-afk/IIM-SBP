import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AnnouncementBar: React.FC = () => {
  const { userProfile, setIsPersonalizeModalOpen } = useApp();

  return (
    <div className="bg-[#0f112c] text-white text-xs border-b border-indigo-900/60 py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
            <Zap className="w-3 h-3 text-amber-400" /> Exam Season Drop
          </span>
          <span className="text-slate-300 text-xs truncate">
            FREE Pan-India Shipping on orders above ₹999 • Use code <strong className="text-amber-300 font-mono">SKILLGYM</strong> for 10% off
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <button
            onClick={() => setIsPersonalizeModalOpen(true)}
            className="flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer group"
          >
            <span>Target:</span>
            <span className="bg-indigo-900/80 px-2 py-0.5 rounded text-amber-300 font-medium border border-indigo-700/50 group-hover:border-amber-400/60">
              {userProfile.exam} ▾
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-1.5 text-slate-400 pl-2 border-l border-indigo-800/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>TCS iON & Exam-Center Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
