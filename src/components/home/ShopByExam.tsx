import React from 'react';
import { ArrowRight, Compass, GraduationCap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ExamType } from '../../types';

export const ShopByExam: React.FC = () => {
  const { navigateToShopWithFilter } = useApp();

  const examCategories: {
    exam: ExamType;
    tagline: string;
    description: string;
    image: string;
    itemCount: number;
    color: string;
  }[] = [
    {
      exam: 'CAT / MBA',
      tagline: 'Think faster. Speak sharper.',
      description: 'Quant speed mats, TCS iON hall kits, DILR error trackers & GD-PI masterclasses.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      itemCount: 8,
      color: 'from-amber-600/90 to-indigo-950/90'
    },
    {
      exam: 'UPSC',
      tagline: 'Endure the marathon. Master the recall.',
      description: 'Mains fatigue-free writing instruments, memory palaces, and deep work kits.',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
      itemCount: 9,
      color: 'from-indigo-900/90 to-slate-950/90'
    },
    {
      exam: 'SSC',
      tagline: '60 minutes. Maximum velocity.',
      description: 'Ultra-fast arithmetic shortcuts, biometric prep wipes, and sprint-ready rough pads.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
      itemCount: 6,
      color: 'from-blue-900/90 to-indigo-950/90'
    },
    {
      exam: 'Banking',
      tagline: 'Crack the puzzles under clock tick.',
      description: 'Frictionless rough sheet pens, seating arrangement matrices, and speed timers.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      itemCount: 7,
      color: 'from-cyan-900/90 to-indigo-950/90'
    },
    {
      exam: 'NEET',
      tagline: 'Zero concept leak. Total biological recall.',
      description: 'Spaced repetition trackers, 3D sleep masks for consolidation, and hydration infusers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      itemCount: 6,
      color: 'from-emerald-900/90 to-slate-950/90'
    },
    {
      exam: 'JEE',
      tagline: 'Deep problem endurance & poise.',
      description: 'Desk countdown timers, mock test error logs, and heavyweight late-night hoodies.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
      itemCount: 5,
      color: 'from-purple-900/90 to-indigo-950/90'
    },
    {
      exam: 'CLAT',
      tagline: 'Legal reasoning & active reading speed.',
      description: 'High-speed RC comprehension systems and quiet-room insulated bottles.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      itemCount: 4,
      color: 'from-rose-900/90 to-slate-950/90'
    },
    {
      exam: 'Placements',
      tagline: 'Authoritative presence & STAR stories.',
      description: 'Vegan-leather executive padfolios, GD tactics decks, and behavioral story banks.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      itemCount: 6,
      color: 'from-slate-900/90 to-indigo-950/90'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-900 bg-indigo-50 px-3 py-1 rounded-md">
            Exam Specificity
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
            Engineered For Your Exam.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Every competitive exam has distinct cognitive demands and center rules. Explore gear tuned to your test.
          </p>
        </div>

        {/* 8 EXAM CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {examCategories.map((cat) => (
            <div
              key={cat.exam}
              onClick={() => navigateToShopWithFilter({ exam: cat.exam })}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 sm:aspect-3/4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.exam}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Scrim */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-90 group-hover:opacity-95 transition-opacity`} />

              {/* Content */}
              <div className="relative h-full p-5 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded text-white">
                    {cat.itemCount} Curated Gear
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
                    {cat.exam}
                  </h3>
                  <p className="text-amber-300 text-xs font-semibold mb-2 italic">
                    “{cat.tagline}”
                  </p>
                  <p className="text-[11px] text-slate-200 line-clamp-2 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    <span>Explore {cat.exam.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
