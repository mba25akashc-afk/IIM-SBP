import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { ProductCard } from '../common/ProductCard';
import { PRODUCTS } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

export const FeaturedProducts: React.FC = () => {
  const { setCurrentPage, navigateToShopWithFilter } = useApp();
  const [activeTab, setActiveTab] = useState<'All' | 'Bestsellers' | 'Focus' | 'Desk' | 'Exam-Day Kits'>('All');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Bestsellers') return p.badge === 'BESTSELLER';
    if (activeTab === 'Focus') return p.category === 'Focus';
    if (activeTab === 'Desk') return p.category === 'Desk';
    if (activeTab === 'Exam-Day Kits') return p.category === 'Exam-Day Kits';
    return true;
  }).slice(0, 8);

  return (
    <section className="py-20 bg-[#fafaf9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Aspirant Lifestyle Gear</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Gear Up. Stay Sharp.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Merchandise designed for the aspirant lifestyle. Zero generic college fluff.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {(['All', 'Bestsellers', 'Focus', 'Desk', 'Exam-Day Kits'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#141738] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#141738] text-[#141738] hover:bg-[#141738] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>Explore Complete 24-Product Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
