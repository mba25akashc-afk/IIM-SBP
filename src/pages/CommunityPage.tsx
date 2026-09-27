import React, { useState } from 'react';
import { 
  Users, 
  Flame, 
  Award, 
  Play, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Share2,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TODAY_CHALLENGE, COMMUNITY_LEADERBOARD } from '../data/mockData';

export const CommunityPage: React.FC = () => {
  const { setIsChallengeModalOpen, userProfile, isTodayDrillCompleted, addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'challenge' | 'groups' | 'leaderboard'>('challenge');

  const studyGroups = [
    {
      id: 'grp-1',
      name: 'CAT 99th-Percentile Quant Ninjas',
      exam: 'CAT / MBA',
      members: 1420,
      activeToday: 382,
      topic: 'Daily 5-Min Mental Math & DILR Matrix sets',
      joined: true
    },
    {
      id: 'grp-2',
      name: 'Old Rajinder Nagar UPSC Mains Club',
      exam: 'UPSC',
      members: 2890,
      activeToday: 710,
      topic: 'GS-4 Ethics Case Studies & 7-Min Answer Writing',
      joined: false
    },
    {
      id: 'grp-3',
      name: 'Bank PO 20-Min Speed Puzzle Squad',
      exam: 'Banking',
      members: 1940,
      activeToday: 540,
      topic: 'Seating arrangements & high-velocity simplification',
      joined: false
    },
    {
      id: 'grp-4',
      name: 'SSC CGL Tier 1 Sprint Crackers',
      exam: 'SSC',
      members: 3120,
      activeToday: 890,
      topic: 'Vedic arithmetic drills & error log discussions',
      joined: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* HEADER */}
      <div className="bg-[#141738] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-indigo-950">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>45,000+ Aspirants Training Together</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            The SkillSutra Community.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Exams are isolating. Skill training doesn’t have to be. Compete in daily 5-minute cognitive sprints, build unbreakable streaks, and share exam room tactics.
          </p>

          {/* VIEW SWITCH TABS */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('challenge')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'challenge'
                  ? 'bg-amber-400 text-indigo-950 shadow-md'
                  : 'bg-indigo-900/60 text-slate-300 hover:text-white'
              }`}
            >
              30-Day Brain Challenge
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'groups'
                  ? 'bg-amber-400 text-indigo-950 shadow-md'
                  : 'bg-indigo-900/60 text-slate-300 hover:text-white'
              }`}
            >
              Exam Study Groups
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'leaderboard'
                  ? 'bg-amber-400 text-indigo-950 shadow-md'
                  : 'bg-indigo-900/60 text-slate-300 hover:text-white'
              }`}
            >
              Consistency Leaderboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* TAB 1: 30-DAY CHALLENGE */}
        {activeTab === 'challenge' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* HERO CHALLENGE CARD */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 px-2.5 py-1 rounded">
                  CYCLE 14 • DAY 17 / 30
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  3,840+ aspirants solved today
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2">
                30 Days to a Faster Brain
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                A daily micro-drill delivered every morning at 7:00 AM IST. 10 rapid questions to stretch working memory, visual arithmetic, and deduction speed.
              </p>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                  <span>Your Cycle Progress</span>
                  <span className="font-mono text-amber-700">57% (17/30 Days)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full"
                    style={{ width: '57%' }}
                  />
                </div>
              </div>

              {/* Today's Drill details */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                    Day 17 Drill Topic:
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    +150 XP Reward
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                  “{TODAY_CHALLENGE.todayDrill}”
                </h3>
                <p className="text-xs text-slate-600">
                  Includes 3 rapid-fire puzzles: rate problems, percentage-fraction conversion, and directional spatial reasoning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setIsChallengeModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Play className="w-4 h-4 fill-indigo-950" />
                  <span>{isTodayDrillCompleted ? 'Review Drill Answers' : 'Launch Today’s Drill (7 Mins)'}</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText('Join the 30-Day Brain Challenge on SkillSutra: https://skillsutra.in');
                    addToast('Challenge invite link copied!', 'info');
                  }}
                  className="w-full sm:w-auto px-5 py-4 border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Challenge a Study Partner</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: EXAM STUDY GROUPS */}
        {activeTab === 'groups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {studyGroups.map((grp) => (
              <div
                key={grp.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-950 px-2 py-0.5 rounded">
                      {grp.exam}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {grp.activeToday} active now
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                    {grp.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Daily discussion: {grp.topic}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-mono">
                    {grp.members.toLocaleString()} Aspirants
                  </span>
                  <button
                    onClick={() => addToast(`Joined ${grp.name}!`, 'success')}
                    className="px-4 py-2 bg-[#141738] hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                  >
                    Join Study Pod
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: LEADERBOARD */}
        {activeTab === 'leaderboard' && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Weekly Consistency Rankings
                </h3>
                <p className="text-xs text-slate-500">Ranked by daily drill completion, study streaks & accuracy.</p>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                Tier I Active
              </span>
            </div>

            <div className="space-y-3">
              {COMMUNITY_LEADERBOARD.map((u) => (
                <div
                  key={u.rank}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                    u.rank === 5
                      ? 'border-indigo-900 bg-indigo-50/80 ring-2 ring-indigo-950/10'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-mono ${
                      u.rank === 1
                        ? 'bg-amber-400 text-indigo-950 shadow-sm'
                        : u.rank === 2
                        ? 'bg-slate-300 text-slate-900'
                        : u.rank === 3
                        ? 'bg-amber-200 text-amber-950'
                        : 'bg-white border text-slate-600'
                    }`}>
                      #{u.rank}
                    </span>
                    <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">{u.name}</h4>
                      <span className="text-[11px] text-slate-500">{u.exam} • Badge: {u.badge}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono font-bold text-xs sm:text-sm text-indigo-950 flex items-center justify-end gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {u.streak}d Streak
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block">{u.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
