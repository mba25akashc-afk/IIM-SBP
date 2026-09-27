import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { STUDENT_TESTIMONIALS } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#fafaf9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Aspirant Community Voice</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Built by Aspirants. Worn by Aspirants.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From the reading rooms of Mukherjee Nagar and Old Rajinder Nagar to the engineering hostels of Kota and Pune.
          </p>
        </div>

        {/* 4 TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    </div>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                    <span className="text-[10px] text-amber-700 font-semibold">{item.city}</span>
                  </div>
                </div>

                <div className="mt-3 bg-slate-50 rounded-lg p-2 text-[10px] text-slate-600 border border-slate-100 flex items-center justify-between">
                  <span>Equipped with:</span>
                  <span className="font-semibold text-slate-800 truncate ml-1">{item.merchUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ETHICAL DISCLAIMER NOTE */}
        <div className="mt-8 text-center text-[11px] text-slate-400 italic">
          *Note: Testimonials shown are prototype/demo persona submissions curated for the academic and venture design presentation.
        </div>

      </div>
    </section>
  );
};
