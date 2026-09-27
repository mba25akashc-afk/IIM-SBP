import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Check, 
  ArrowRight, 
  Package, 
  Layers, 
  Sparkles,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';
import { COURSES, PRODUCTS, BUNDLES } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const CoursesPage: React.FC = () => {
  const { 
    selectedCourseId, 
    setSelectedCourseId, 
    addToCart, 
    setCurrentPage, 
    navigateToProduct,
    addToast 
  } = useApp();

  const [activeCourseId, setActiveCourseId] = useState(selectedCourseId || COURSES[0].id);

  const currentCourse = COURSES.find((c) => c.id === activeCourseId) || COURSES[0];
  const recommendedGear = PRODUCTS.filter((p) => currentCourse.recommendedProductIds.includes(p.id));
  const relatedBundle = BUNDLES.find((b) => b.courseId === currentCourse.id);

  const handleEnrollCourseOnly = () => {
    addToCart({
      courseId: currentCourse.id,
      name: currentCourse.name,
      price: currentCourse.price,
      originalPrice: currentCourse.originalPrice,
      image: currentCourse.image,
      type: 'course',
      category: 'Course'
    });
  };

  const handleEnrollWithGearBundle = () => {
    if (relatedBundle) {
      addToCart({
        bundleId: relatedBundle.id,
        name: relatedBundle.name,
        price: relatedBundle.bundlePrice,
        originalPrice: relatedBundle.originalTotal,
        image: relatedBundle.image,
        type: 'bundle',
        category: 'System Bundle'
      });
    } else {
      handleEnrollCourseOnly();
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* HERO BANNER */}
      <div className="bg-[#141738] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
            <span>India’s Skill-Gym Curriculum</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Train What Exams Actually Test.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Your coaching covers the syllabus. SkillSutra builds the speed, memory, focus, and poise required to deliver under the ticking clock.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* COURSE SELECTOR PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {COURSES.map((c) => {
            const isSelected = c.id === activeCourseId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCourseId(c.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#141738] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{c.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isSelected ? 'bg-amber-400 text-indigo-950' : 'bg-slate-100 text-slate-500'
                }`}>
                  {c.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE COURSE COMPREHENSIVE CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: COURSE HIGHLIGHTS & CURRICULUM (7 COLS) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  {currentCourse.skill} Mastery
                </span>
                <span className="text-xs font-semibold text-indigo-950 bg-indigo-50 px-2.5 py-1 rounded-md">
                  {currentCourse.duration} Program
                </span>
                <span className="text-xs text-slate-500">
                  Target: <strong>{currentCourse.exams.join(', ')}</strong>
                </span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                  {currentCourse.name}
                </h2>
                <p className="text-base text-amber-700 font-semibold mt-1">
                  “{currentCourse.tagline}”
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {currentCourse.description}
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-500 py-3 border-y border-slate-100 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span className="font-bold text-slate-800">{currentCourse.rating} Rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>{currentCourse.enrolledCount.toLocaleString()} Aspirants Enrolled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Daily Micro-Drills + Live Doubt Clinics</span>
                </div>
              </div>

              {/* CURRICULUM SPRINT PHASES */}
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider mb-3">
                  Syllabus & Daily Training Phases:
                </h4>
                <div className="space-y-2.5">
                  {currentCourse.curriculum.map((phase, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <span className="w-5 h-5 rounded-full bg-indigo-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="font-medium leading-relaxed">{phase}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: COURSE + MERCHANDISE INTEGRATION BOX (5 COLS) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-indigo-50/40 rounded-2xl p-6 sm:p-7 border border-indigo-100 flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded inline-block mb-3">
                  INTEGRATED LEARNING SYSTEM
                </span>

                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="font-mono font-extrabold text-3xl text-indigo-950">
                      ₹{currentCourse.price}
                    </span>
                    <span className="font-mono text-sm text-slate-400 line-through ml-2">
                      ₹{currentCourse.originalPrice}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    Save ₹{currentCourse.originalPrice - currentCourse.price}
                  </span>
                </div>

                {/* RECOMMENDED COMPLEMENTARY MERCHANDISE */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-6 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-amber-600" /> Recommended Physical Gear:
                    </span>
                    <span className="text-[10px] text-amber-700 uppercase tracking-wider">TCS iON Tested</span>
                  </div>

                  <div className="space-y-3">
                    {recommendedGear.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => navigateToProduct(p.id)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all"
                      >
                        <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs text-slate-900 truncate">{p.name}</h5>
                          <span className="text-[11px] text-slate-500 block truncate">{p.shortBenefit}</span>
                        </div>
                        <span className="font-mono font-bold text-xs text-indigo-950 shrink-0">₹{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUNDLE SAVINGS CALLOUT */}
                {relatedBundle && (
                  <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 mb-6 text-xs text-amber-950">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Special: {relatedBundle.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Get this course + recommended physical kits together for just <strong className="font-mono text-amber-900">₹{relatedBundle.bundlePrice}</strong> (Save ₹{relatedBundle.savings}).
                    </p>
                  </div>
                )}
              </div>

              {/* CTAS */}
              <div className="space-y-2.5 pt-4 border-t border-slate-200">
                {relatedBundle && (
                  <button
                    onClick={handleEnrollWithGearBundle}
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Get Course + Merch Bundle (₹{relatedBundle.bundlePrice})</span>
                  </button>
                )}

                <button
                  onClick={handleEnrollCourseOnly}
                  className="w-full py-3 bg-[#141738] hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Enroll in Course Only (₹{currentCourse.price})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ALL 7 COURSES QUICK DIRECTORY GRID */}
        <div>
          <div className="mb-6">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              All 7 Skill-Gym Programs
            </h3>
            <p className="text-xs text-slate-500">Every course is available as a standalone program or bundled with physical productivity gear.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  setActiveCourseId(c.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
                  c.id === activeCourseId
                    ? 'border-indigo-900 shadow-md ring-2 ring-indigo-900/10'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {c.skill}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-500">
                    {c.duration}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                  {c.name}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                  {c.tagline}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="font-mono font-extrabold text-slate-900">₹{c.price}</span>
                  <span className="text-indigo-950 font-bold hover:underline flex items-center gap-1">
                    Select Program →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
