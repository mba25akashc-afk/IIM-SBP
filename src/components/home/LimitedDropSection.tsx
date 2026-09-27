import React, { useState, useEffect } from 'react';
import { Clock, Bell, Flame, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LimitedDropSection: React.FC = () => {
  const { addToast } = useApp();
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Live countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 17,
    minutes: 36,
    seconds: 22
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setIsSubscribed(true);
      addToast('VIP Drop Access confirmed! You will receive early link 2 hours before launch.', 'amber');
      setNotifyEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#111333] text-white relative overflow-hidden border-b border-indigo-950">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Limited D2C Capsule</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            THE NEXT DROP
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Built for the season you’re preparing for. Limited run of 250 units per batch to ensure premium 240+ GSM textile quality and hand-checked hardware.
          </p>
        </div>

        {/* COUNTDOWN TIMER DISPLAY */}
        <div className="max-w-2xl mx-auto bg-slate-900/80 backdrop-blur-md border border-indigo-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl mb-12 text-center">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400 block mb-4">
            DROP OPENS IN
          </span>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto mb-6">
            <div className="p-3 sm:p-4 rounded-xl bg-indigo-950/80 border border-indigo-800/60">
              <span className="font-mono font-extrabold text-2xl sm:text-4xl text-white block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Days</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-indigo-950/80 border border-indigo-800/60">
              <span className="font-mono font-extrabold text-2xl sm:text-4xl text-white block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Hours</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-indigo-950/80 border border-indigo-800/60">
              <span className="font-mono font-extrabold text-2xl sm:text-4xl text-white block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Mins</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-indigo-950/80 border border-indigo-800/60">
              <span className="font-mono font-extrabold text-2xl sm:text-4xl text-amber-400 block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Secs</span>
            </div>
          </div>

          {/* NOTIFY FORM */}
          <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={notifyEmail}
              onChange={(e) => setNotifyEmail(e.target.value)}
              placeholder="Enter your phone or email for drop alert..."
              className="flex-1 bg-indigo-950 border border-indigo-800 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-400 focus:outline-hidden focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Notify Me</span>
            </button>
          </form>
          <span className="text-[10px] text-slate-400 mt-2 block">
            🔒 3,420 aspirants on early-access waitlist. Zero spam.
          </span>
        </div>

        {/* 3 PREVIEW CAPSULES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 flex flex-col justify-between">
            <div>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded uppercase">
                CAT 2026 Drop
              </span>
              <h4 className="font-heading font-bold text-lg text-white mt-2">
                “One More Mock” Midnight Edition
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Reflective stealth-black hoodie with high-density silicone typographic mantra across back spine.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-900/60 flex items-center justify-between text-xs text-slate-400">
              <span>Limited: 250 Units</span>
              <span className="font-mono text-amber-400 font-bold">₹1,499</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 flex flex-col justify-between">
            <div>
              <span className="text-[10px] bg-purple-400/20 text-purple-300 font-bold px-2 py-0.5 rounded uppercase">
                UPSC 2027 Drop
              </span>
              <h4 className="font-heading font-bold text-lg text-white mt-2">
                The Heritage Leatherette Mains Folio
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Handcrafted dual-pouch answer sheet organizer with gold-foiled Ashoka chakra matrix and brass pen dock.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-900/60 flex items-center justify-between text-xs text-slate-400">
              <span>Limited: 200 Units</span>
              <span className="font-mono text-amber-400 font-bold">₹1,199</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 flex flex-col justify-between">
            <div>
              <span className="text-[10px] bg-emerald-400/20 text-emerald-300 font-bold px-2 py-0.5 rounded uppercase">
                Exam Season Drop
              </span>
              <h4 className="font-heading font-bold text-lg text-white mt-2">
                Hardware Cognitive Sand Timer Trio
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Three calibrated sand timers (15 min sprint, 50 min deep study, 10 min break) in solid wood cradle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-900/60 flex items-center justify-between text-xs text-slate-400">
              <span>Limited: 300 Units</span>
              <span className="font-mono text-amber-400 font-bold">₹999</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
