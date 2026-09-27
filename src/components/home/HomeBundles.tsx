import React from 'react';
import { Layers, ArrowRight, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { BUNDLES, COURSES, PRODUCTS } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

export const HomeBundles: React.FC = () => {
  const { addToCart, setCurrentPage } = useApp();

  const handleAddBundle = (bundle: typeof BUNDLES[0]) => {
    addToCart({
      bundleId: bundle.id,
      name: bundle.name,
      price: bundle.bundlePrice,
      originalPrice: bundle.originalTotal,
      image: bundle.image,
      type: 'bundle',
      category: 'System Bundle'
    });
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Integrated Ecosystem</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Complete Your System.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Save when you build your system. Combine foundational training courses with tactile physical gear and digital tracking templates.
          </p>
        </div>

        {/* 4 BUNDLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUNDLES.map((bundle) => {
            const course = COURSES.find((c) => c.id === bundle.courseId);
            const bundleProducts = PRODUCTS.filter((p) => bundle.productIds.includes(p.id));

            return (
              <div
                key={bundle.id}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#141738] text-white px-2.5 py-1 rounded-md shadow-xs">
                    {bundle.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Save ₹{bundle.savings}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-1">
                    {bundle.name}
                  </h3>
                  <p className="text-xs text-amber-800 font-semibold mb-4">
                    {bundle.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {bundle.description}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 mb-6 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      What’s Included in This Bundle:
                    </span>
                    
                    {course && (
                      <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>{course.name}</strong> ({course.duration} Course)</span>
                      </div>
                    )}

                    {bundleProducts.map((p) => (
                      <div key={p.id} className="flex items-center gap-2 text-xs text-slate-800">
                        <Check className="w-4 h-4 text-amber-500 shrink-0" />
                        <span><strong>{p.name}</strong> ({p.category})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono font-extrabold text-2xl text-indigo-950">
                        ₹{bundle.bundlePrice}
                      </span>
                      <span className="font-mono text-xs text-slate-400 line-through">
                        ₹{bundle.originalTotal}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">All taxes included • FREE Pan-India Shipping</span>
                  </div>

                  <button
                    onClick={() => handleAddBundle(bundle)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#141738] hover:bg-amber-400 hover:text-indigo-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Get Full Bundle</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
