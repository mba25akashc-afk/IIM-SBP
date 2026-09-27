import React from 'react';
import { 
  Users, 
  Flame, 
  Award, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TODAY_CHALLENGE, COMMUNITY_LEADERBOARD } from '../../data/mockData';

export const HomeCommunity: React.FC = () => {
  const { setCurrentPage, setIsChallengeModalOpen, userProfile, isTodayDrillCompleted } = useApp();

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-2">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Peer Accountability System</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Join the SkillSutra Community.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Competitive exam preparation is isolating. Train alongside 45,000+ ambitious aspirants across India with daily cognitive drills, streaks, and peer accountability.
          </p>
        </div>

        {/* 2 COLUMN GRID: 30-DAY CHALLENGE ON LEFT + LEADERBOARD ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: 30 DAYS TO A FASTER BRAIN ACTIVE CARD */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#141738] to-[#1d2258] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-900 flex flex-col justify-between relative overflow-hidden">
            
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-400 text-indigo-950 px-2.5 py-1 rounded shadow-xs">
                  FLAGSHIP CHALLENGE
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <strong className="text-white">3,840+</strong> aspirants solving today
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                30 DAYS TO A FASTER BRAIN
              </h3>

              <div className="flex items-center gap-3 text-sm text-slate-300 mb-6">
                <span className="font-bold text-amber-400">Day 17 / 30</span>
                <span>•</span>
                <span>Progress: <strong>57%</strong></span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-indigo-950 rounded-full h-2.5 mb-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-amber-500 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: '57%' }}
                />
              </div>

              {/* Today's Drill Box */}
              <div className="bg-indigo-950/70 border border-indigo-800/80 rounded-xl p-4 sm:p-5 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-1">
                  Today’s Speed Drill:
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white mb-1">
                  “{TODAY_CHALLENGE.todayDrill}”
                </h4>
                <p className="text-xs text-slate-300">
                  Target speed: &lt; 42 seconds per puzzle. Tests multi-variable deductive trees and arithmetic elimination.
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> 7 Mins
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-400" /> +150 XP Reward
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => setIsChallengeModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Play className="w-4 h-4 fill-indigo-950" />
                <span>{isTodayDrillCompleted ? 'Replay Today’s Drill' : 'Start Today’s Challenge'}</span>
              </button>

              <button
                onClick={() => setCurrentPage('community')}
                className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore Exam Study Groups</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* RIGHT: PEER STREAKS & LEADERBOARD SNIPPET */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h4 className="font-heading font-bold text-slate-900 text-base">
                    Weekly Consistency Board
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Updated Hourly
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {COMMUNITY_LEADERBOARD.slice(0, 4).map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        user.rank === 1 ? 'bg-amber-400 text-indigo-950' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {user.rank}
                      </span>
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                      <div>
                        <h5 className="font-bold text-xs text-slate-900">{user.name}</h5>
                        <span className="text-[10px] text-slate-500">{user.exam} • {user.badge}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-indigo-950 font-mono flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                        {user.streak}d
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{user.xp} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current User Snapshot */}
            <div className="p-3.5 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-indigo-900 text-white font-bold text-xs flex items-center justify-center">
                  5
                </span>
                <div>
                  <span className="font-bold text-slate-900">Akash Sharma (You)</span>
                  <span className="text-[10px] text-slate-500 block">CAT / MBA Aspirant</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-amber-700 font-mono">{userProfile.streak}d Streak 🔥</span>
                <span className="text-[10px] text-slate-500 block">{userProfile.xp} XP</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
