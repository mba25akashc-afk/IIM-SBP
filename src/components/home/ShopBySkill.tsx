import React from 'react';
import { 
  Zap, 
  Brain, 
  Target, 
  MessageSquare, 
  Compass, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SkillType } from '../../types';

export const ShopBySkill: React.FC = () => {
  const { navigateToShopWithFilter } = useApp();

  const skillCards: {
    skill: SkillType;
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
    itemCount: number;
    color: string;
  }[] = [
    {
      skill: 'Speed',
      title: 'SPEED',
      description: 'Products that help you build calculation velocity & reflex speed.',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      tag: 'Mental Math & Velocity',
      itemCount: 4,
      color: 'hover:border-amber-400 group-hover:bg-amber-50/40'
    },
    {
      skill: 'Memory',
      title: 'MEMORY',
      description: 'Tools designed for spaced retention, active retrieval & revision.',
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      tag: 'Palaces & Retrieval',
      itemCount: 4,
      color: 'hover:border-purple-400 group-hover:bg-purple-50/40'
    },
    {
      skill: 'Focus',
      title: 'FOCUS',
      description: 'Physical ritual kits & blockers for distraction-free deep study.',
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      tag: '50-Min Deep Work',
      itemCount: 6,
      color: 'hover:border-indigo-400 group-hover:bg-indigo-50/40'
    },
    {
      skill: 'Communication',
      title: 'COMMUNICATION',
      description: 'Executive portfolios & templates for GD, PI, and panel confidence.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
      tag: 'STAR & GD Mastery',
      itemCount: 3,
      color: 'hover:border-emerald-400 group-hover:bg-emerald-50/40'
    },
    {
      skill: 'Decision-Making',
      title: 'DECISION-MAKING',
      description: 'Tactical triage tools & stress-calming kits for real-time exam halls.',
      icon: <Compass className="w-6 h-6 text-rose-600" />,
      tag: 'Triage & Poise',
      itemCount: 3,
      color: 'hover:border-rose-400 group-hover:bg-rose-50/40'
    },
    {
      skill: 'Productivity',
      title: 'PRODUCTIVITY',
      description: 'Systems, planners, timers, and decor to study smarter every day.',
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      tag: 'Habits & Flywheels',
      itemCount: 7,
      color: 'hover:border-blue-400 group-hover:bg-blue-50/40'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
              Targeted Improvement
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
              Shop Your Weakness.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Don’t buy random merchandise. Equip the specific cognitive muscle that’s holding your mock scores back.
            </p>
          </div>

          <button
            onClick={() => navigateToShopWithFilter({})}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-950 hover:text-amber-600 transition-colors"
          >
            <span>View All Gear</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCards.map((card) => (
            <div
              key={card.skill}
              onClick={() => navigateToShopWithFilter({ skill: card.skill })}
              className={`p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden ${card.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-400">
                  {card.itemCount} items
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 mb-1">
                {card.tag}
              </div>

              <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2 group-hover:text-indigo-950 transition-colors">
                {card.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="flex items-center gap-1 text-xs font-bold text-indigo-950 group-hover:text-amber-600 transition-colors">
                <span>Explore {card.skill} Gear</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
