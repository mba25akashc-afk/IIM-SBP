import React from 'react';
import { 
  Flame, 
  Award, 
  BrainCircuit, 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Package,
  Heart,
  Calendar,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES, PRODUCTS } from '../data/mockData';

export const DashboardPage: React.FC = () => {
  const { 
    userProfile, 
    setIsChallengeModalOpen, 
    isTodayDrillCompleted, 
    setCurrentPage, 
    setSelectedCourseId,
    navigateToProduct,
    wishlist 
  } = useApp();

  const enrolledCourseObjects = userProfile.enrolledCourses.map((ec) => ({
    ...ec,
    courseData: COURSES.find((c) => c.id === ec.courseId) || COURSES[0]
  }));

  const recommendedGear = PRODUCTS.find((p) => p.id === 'prod-focus-1') || PRODUCTS[4];
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* ASPIRANT GREETING & HERO METRICS */}
      <div className="bg-[#141738] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded">
                {userProfile.exam} Track
              </span>
              <span className="text-slate-400 text-xs">• Target: Year {userProfile.targetYear}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Good evening, {userProfile.name.split(' ')[0]}.
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Consistency is your unfair competitive advantage. Keep your streak alive today.
            </p>
          </div>

          {/* 3 STATS PILLS */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="bg-indigo-950/80 border border-indigo-800/80 p-3 sm:p-4 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Skill Score
              </span>
              <span className="font-mono font-extrabold text-xl sm:text-2xl text-amber-400">
                {userProfile.skillScore}/100
              </span>
            </div>

            <div className="bg-indigo-950/80 border border-indigo-800/80 p-3 sm:p-4 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Weekly Streak
              </span>
              <span className="font-mono font-extrabold text-xl sm:text-2xl text-white flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                {userProfile.streak}d
              </span>
            </div>

            <div className="bg-indigo-950/80 border border-indigo-800/80 p-3 sm:p-4 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Aspirant XP
              </span>
              <span className="font-mono font-extrabold text-xl sm:text-2xl text-emerald-400">
                {userProfile.xp}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* TODAY’S CHALLENGE HERO CARD */}
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-indigo-950 px-2 py-0.5 rounded">
                Daily Cognitive Drill
              </span>
              <span className="text-xs text-slate-500 font-semibold">• Day 17 of 30</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-1">
              “Complete a 5-minute mental math & reasoning drill.”
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Target velocity: 10 reasoning questions under 7 minutes. Builds mental composure when mock test timers turn red.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsChallengeModalOpen(true)}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-indigo-950" />
              <span>{isTodayDrillCompleted ? 'Review Drill' : 'Start Today’s Drill'}</span>
            </button>
            <button
              onClick={() => setCurrentPage('community')}
              className="px-4 py-3.5 border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold rounded-xl cursor-pointer"
            >
              View Progress
            </button>
          </div>
        </div>

        {/* 2 COLUMN SECTION: CURRENT ACTIVE COURSES + RECOMMENDED FOR YOU */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CURRENT ENROLLED COURSES (8 COLS) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Active Training Programs ({enrolledCourseObjects.length})
              </h3>
              <button onClick={() => setCurrentPage('courses')} className="text-xs font-bold text-indigo-950 hover:text-amber-600">
                Explore More Courses →
              </button>
            </div>

            <div className="space-y-4">
              {enrolledCourseObjects.map((item) => (
                <div
                  key={item.courseId}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.courseData.image}
                        alt={item.courseData.name}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                            {item.courseData.skill}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">
                            Day {item.currentDay} / {item.totalDays}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-base text-slate-900 mt-0.5">
                          {item.courseData.name}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourseId(item.courseId);
                        setCurrentPage('courses');
                      }}
                      className="px-4 py-2 bg-[#141738] hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      Continue Course
                    </button>
                  </div>

                  {/* Progress Bar & Next Drill */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-medium">
                      <span>Curriculum Completion</span>
                      <span className="font-mono font-bold text-slate-900">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-3">
                      <div
                        className="bg-gradient-to-r from-indigo-900 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-700">Next Drill:</span>
                      <span className="truncate">{item.nextDrill}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: RECOMMENDED GEAR BASED ON SKILL GAP (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Recommended For You
            </h3>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
              <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 block mb-1">
                  SKILL GAP DIAGNOSIS
                </span>
                <p className="text-xs text-slate-700">
                  Because your <strong className="text-indigo-950 font-bold">Focus Score is currently 61%</strong>, we recommend physical ritual equipment to block smartphone dopamine loops.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden aspect-4/3 relative bg-slate-100 border border-slate-200">
                <img
                  src={recommendedGear.image}
                  alt={recommendedGear.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 left-2.5 bg-amber-400 text-indigo-950 text-[10px] font-extrabold px-2 py-0.5 rounded">
                  {recommendedGear.badge}
                </span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  {recommendedGear.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {recommendedGear.shortBenefit}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                  <span className="font-mono font-extrabold text-base text-indigo-950">
                    ₹{recommendedGear.price}
                  </span>
                  <button
                    onClick={() => navigateToProduct(recommendedGear.id)}
                    className="px-3.5 py-1.5 bg-[#141738] text-white text-xs font-bold rounded-lg hover:bg-amber-400 hover:text-indigo-950 transition-colors"
                  >
                    View Gear
                  </button>
                </div>
              </div>
            </div>

            {/* QUICK WISHLIST PREVIEW */}
            {wishlistProducts.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> Saved Gear ({wishlistProducts.length})
                  </span>
                </div>
                <div className="space-y-2">
                  {wishlistProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => navigateToProduct(p.id)}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer text-xs"
                    >
                      <span className="font-medium text-slate-800 truncate">{p.name}</span>
                      <span className="font-mono font-bold text-slate-900 ml-2">₹{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
