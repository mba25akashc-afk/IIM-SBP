import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Compass, 
  Flame, 
  BrainCircuit, 
  Layers, 
  BookOpen, 
  Award,
  ChevronDown
} from 'lucide-react';
import { useApp, PageView } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    cartCount, 
    setIsCartDrawerOpen, 
    setIsSearchModalOpen,
    setIsPersonalizeModalOpen,
    userProfile 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView; highlight?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Courses', page: 'courses' },
    { label: 'Shop', page: 'shop' },
    { label: 'Skill Quiz', page: 'quiz', highlight: true },
    { label: 'Community', page: 'community' },
    { label: 'About', page: 'about' }
  ];

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#141738] text-white border-b border-indigo-950/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* LOGO & BRAND */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-amber-500 p-0.5 shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#141738] rounded-[10px] flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                    Skill<span className="text-amber-400">Sutra</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest bg-amber-400/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded">
                    D2C
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-normal -mt-0.5 hidden sm:block">
                  Train the Mind Behind the Marks
                </span>
              </div>
            </button>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                      isActive 
                        ? 'text-white bg-indigo-900/60 shadow-inner' 
                        : 'text-slate-300 hover:text-white hover:bg-indigo-900/30'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.label}
                      {link.highlight && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      )}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2.5 text-slate-300 hover:text-white hover:bg-indigo-900/40 rounded-lg transition-colors cursor-pointer"
              title="Search courses, kits, gear..."
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Personalize Pill */}
            <button
              onClick={() => setIsPersonalizeModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 text-xs text-slate-300 bg-indigo-900/40 hover:bg-indigo-900/70 border border-indigo-800/60 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{userProfile.exam.split(' ')[0]}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {/* Student Dashboard / Account */}
            <button
              onClick={() => handleNav('dashboard')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                currentPage === 'dashboard'
                  ? 'bg-amber-400 text-indigo-950 font-semibold'
                  : 'text-slate-200 bg-indigo-900/30 hover:bg-indigo-900/60 border border-indigo-800/40'
              }`}
            >
              <div className="flex items-center gap-1">
                <Flame className={`w-3.5 h-3.5 ${currentPage === 'dashboard' ? 'text-indigo-950' : 'text-amber-400'}`} />
                <span className="font-bold">{userProfile.streak}d</span>
              </div>
              <span className="hidden sm:inline border-l border-indigo-700/50 pl-2">Akash</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="relative p-2.5 text-slate-200 hover:text-white hover:bg-indigo-900/50 rounded-lg transition-colors cursor-pointer"
              title="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-indigo-950 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA - "Take Skill Quiz" */}
            <button
              onClick={() => handleNav('quiz')}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-indigo-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-sm hover:shadow-amber-500/25 transition-all cursor-pointer"
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Skill Quiz</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-indigo-900/50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10122e] border-b border-indigo-900/90 px-4 pt-3 pb-6 space-y-3">
          <div className="p-3 bg-indigo-950/60 rounded-xl border border-indigo-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Exam Target:</span>
              <span className="text-xs font-semibold text-amber-400">{userProfile.exam}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsPersonalizeModalOpen(true);
              }}
              className="text-xs text-indigo-300 underline font-medium"
            >
              Change
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium text-left ${
                  currentPage === link.page
                    ? 'bg-amber-400 text-indigo-950 font-bold'
                    : 'bg-indigo-900/40 text-slate-200 hover:bg-indigo-900/80'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] bg-amber-500 text-indigo-950 px-1.5 py-0.5 rounded font-bold uppercase">
                    Free
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleNav('quiz')}
              className="w-full py-3 bg-amber-400 text-indigo-950 font-bold text-center rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
            >
              <BrainCircuit className="w-4 h-4" />
              Take 60-Sec Skill Quiz
            </button>
            <button
              onClick={() => handleNav('shop')}
              className="w-full py-2.5 bg-indigo-900/60 text-slate-200 font-semibold text-center rounded-xl text-sm border border-indigo-700/50"
            >
              Shop the Drop
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
