import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Send, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Award,
  Instagram,
  Youtube,
  Linkedin,
  Heart
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EXAM_LIST } from '../../data/mockData';

export const Footer: React.FC = () => {
  const { setCurrentPage, navigateToShopWithFilter, addToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      addToast('Welcome to the SkillSutra drill list! Check your inbox every Sunday.', 'amber');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0f112c] text-white border-t border-indigo-950/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BRAND TRUST VALUE PROPS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 mb-12 border-b border-indigo-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900/60 border border-indigo-800/80 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Fast Pan-India Delivery</h5>
              <p className="text-[11px] text-slate-400">Delhi, Kota, Pune, Patna & 19,000+ PINs</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900/60 border border-indigo-800/80 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Exam-Center Compliant</h5>
              <p className="text-[11px] text-slate-400">TCS iON & UPSC frisking verified kits</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900/60 border border-indigo-800/80 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">7-Day Hassle-Free Returns</h5>
              <p className="text-[11px] text-slate-400">Zero questions asked on all physical gear</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900/60 border border-indigo-800/80 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Ex-IIM / Top Ranker Tested</h5>
              <p className="text-[11px] text-slate-400">Curated by 99%ilers & cognitive mentors</p>
            </div>
          </div>
        </div>

        {/* 5-COLUMN EDITORIAL FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-indigo-900/60">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-amber-500 p-0.5">
                <div className="w-full h-full bg-[#0f112c] rounded-[10px] flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Skill<span className="text-amber-400">Sutra</span>
              </span>
            </div>

            <p className="text-sm font-medium text-amber-300/90 italic font-heading">
              “Train the Mind Behind the Marks.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SkillSutra is India’s skill-gym for exam aspirants. We build trainable cognitive muscle — speed, memory, focus, reasoning, and composure — supported by deliberate D2C workspace gear and peer community.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                Join 45,000+ Aspirants On The Weekly Drill
              </span>
              <form onSubmit={handleNewsletter} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-indigo-950/80 border border-indigo-800/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
              <p className="text-[10px] text-slate-500 mt-1.5">Zero spam. 1 mental math or focus drill every Sunday morning.</p>
            </div>
          </div>

          {/* EXPLORE COLUMN */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-amber-400 pl-2">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => setCurrentPage('courses')} className="hover:text-amber-300 transition-colors">
                  Skill-Gym Courses
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('shop')} className="hover:text-amber-300 transition-colors">
                  Productivity Store
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('quiz')} className="hover:text-amber-300 transition-colors font-medium text-amber-400">
                  60-Sec Diagnostic Quiz
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('community')} className="hover:text-amber-300 transition-colors">
                  30-Day Brain Challenge
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('courses')} className="hover:text-amber-300 transition-colors">
                  Aspirant System Bundles
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-amber-300 transition-colors">
                  Our Philosophy
                </button>
              </li>
            </ul>
          </div>

          {/* FOR ASPIRANTS COLUMN */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-amber-400 pl-2">
              For Aspirants
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {EXAM_LIST.map((exam) => (
                <li key={exam}>
                  <button 
                    onClick={() => navigateToShopWithFilter({ exam })}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {exam} Collection
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT & LEGAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-amber-400 pl-2">
              Aspirant Care
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#help" onClick={(e) => { e.preventDefault(); addToast('Support: care@skillsutra.in • Mon-Sat 9am-8pm IST', 'info'); }} className="hover:text-amber-300">Track My Order</a></li>
              <li><a href="#help" onClick={(e) => { e.preventDefault(); addToast('Standard delivery: 3-5 days across all Indian metro & Tier II cities', 'info'); }} className="hover:text-amber-300">Shipping Policy</a></li>
              <li><a href="#help" onClick={(e) => { e.preventDefault(); addToast('7-Day return pickup initiated automatically from student portal', 'info'); }} className="hover:text-amber-300">Returns & Exchanges</a></li>
              <li><a href="#help" onClick={(e) => { e.preventDefault(); addToast('Bulk college library or coaching batch orders: partner@skillsutra.in', 'info'); }} className="hover:text-amber-300">Institutional Orders</a></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-amber-300">Privacy & Terms</button></li>
            </ul>

            <div className="mt-6 pt-4 border-t border-indigo-900/60">
              <span className="text-[11px] font-bold text-slate-300 uppercase block mb-2">Connect</span>
              <div className="flex items-center gap-3 text-slate-400">
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors p-1.5 bg-indigo-950 rounded-lg">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#youtube" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors p-1.5 bg-indigo-950 rounded-lg">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-colors p-1.5 bg-indigo-950 rounded-lg">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© 2026 SkillSutra Technologies & Consumer Goods Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>for India’s 3.5 Crore+ Exam Aspirants</span>
          </div>
          <p className="text-[10px] text-slate-600">Prototype Demo • Curated for Academic & Investor Showcase</p>
        </div>
      </div>
    </footer>
  );
};
