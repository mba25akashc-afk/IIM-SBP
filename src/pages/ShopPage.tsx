import React, { useState, useMemo, useEffect } from 'react';
import { 
  Filter, 
  Sparkles, 
  RotateCcw, 
  ChevronDown, 
  Search, 
  Truck, 
  Check, 
  X,
  SlidersHorizontal
} from 'lucide-react';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS, EXAM_LIST, SKILL_LIST } from '../data/mockData';
import { ProductCategory, ExamType, SkillType, ProductBadge } from '../types';
import { useApp } from '../context/AppContext';

export const ShopPage: React.FC = () => {
  const { activeShopFilter } = useApp();

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Apparel',
    'Focus',
    'Desk',
    'Digital',
    'Decor',
    'Wellness',
    'Exam-Day Kits'
  ];

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>(
    (activeShopFilter.category as ProductCategory) || 'All'
  );
  const [selectedSkill, setSelectedSkill] = useState<SkillType | 'All'>(
    activeShopFilter.skill || 'All'
  );
  const [selectedExam, setSelectedExam] = useState<ExamType | 'All'>(
    activeShopFilter.exam || 'All'
  );
  const [selectedBadge, setSelectedBadge] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sortBy, setSortBy] = useState<'featured' | 'bestseller' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync when activeShopFilter changes from context
  useEffect(() => {
    if (activeShopFilter.category) {
      setSelectedCategory(activeShopFilter.category as ProductCategory);
    }
    if (activeShopFilter.skill) {
      setSelectedSkill(activeShopFilter.skill);
    }
    if (activeShopFilter.exam) {
      setSelectedExam(activeShopFilter.exam);
    }
  }, [activeShopFilter]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedSkill('All');
    setSelectedExam('All');
    setSelectedBadge('All');
    setMaxPrice(2000);
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedCategory !== 'All' || 
    selectedSkill !== 'All' || 
    selectedExam !== 'All' || 
    selectedBadge !== 'All' || 
    maxPrice < 2000;

  // Filter and Sort Pipeline
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (selectedSkill !== 'All' && p.skill !== selectedSkill) return false;
      if (selectedExam !== 'All' && !p.exams.includes(selectedExam)) return false;
      if (selectedBadge !== 'All' && p.badge !== selectedBadge) return false;
      if (p.price > maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'bestseller') return b.reviewsCount - a.reviewsCount;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [selectedCategory, selectedSkill, selectedExam, selectedBadge, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-24">
      
      {/* TOP FREE SHIPPING PROMO BANNER */}
      <div className="bg-[#141738] text-white py-2.5 px-4 text-center text-xs font-medium border-b border-indigo-950 flex items-center justify-center gap-2">
        <Truck className="w-4 h-4 text-amber-400" />
        <span>
          FREE PAN-INDIA SHIPPING ON ORDERS ABOVE <strong>₹999</strong> • USE CODE: <strong className="text-amber-300 font-mono">SKILLGYM</strong>
        </span>
      </div>

      {/* PAGE HEADER */}
      <div className="bg-white border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
              Aspirant Workspace & Lifestyle
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 mt-2">
              Gear Up. Stay Sharp.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Merchandise designed for the aspirant lifestyle. Zero generic college fluff — only deliberate focus tools, tactical kits, and study uniform.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} products
            </span>
          </div>
        </div>

        {/* CATEGORY QUICK TABS */}
        <div className="max-w-7xl mx-auto mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#141738] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN LAYOUT: SIDEBAR + PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* MOBILE FILTER & SORT BAR */}
        <div className="lg:hidden flex items-center justify-between gap-2 mb-6 bg-white p-3 rounded-xl border border-slate-200">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs font-bold text-slate-800"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-600" />
            <span>Filters {hasActiveFilters && '(Active)'}</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-medium"
          >
            <option value="featured">Sort: Featured</option>
            <option value="bestseller">Best Selling</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* DESKTOP FILTER SIDEBAR */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs sticky top-24">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-amber-600" /> Filters
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] font-semibold text-amber-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* SORT BY */}
              <div className="py-4 border-b border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Sort Products
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 font-medium focus:outline-hidden focus:border-amber-400"
                >
                  <option value="featured">Featured First</option>
                  <option value="bestseller">Best Selling</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* FILTER BY SKILL */}
              <div className="py-4 border-b border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Filter by Skill
                </label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedSkill('All')}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      selectedSkill === 'All' ? 'bg-indigo-50 text-indigo-950 font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Skills</span>
                    {selectedSkill === 'All' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                  </button>
                  {SKILL_LIST.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        selectedSkill === skill ? 'bg-indigo-50 text-indigo-950 font-bold' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{skill}</span>
                      {selectedSkill === skill && <Check className="w-3.5 h-3.5 text-amber-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* FILTER BY EXAM */}
              <div className="py-4 border-b border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Filter by Exam
                </label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedExam('All')}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      selectedExam === 'All' ? 'bg-indigo-50 text-indigo-950 font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Exams</span>
                    {selectedExam === 'All' && <Check className="w-3.5 h-3.5 text-amber-600" />}
                  </button>
                  {EXAM_LIST.map((exam) => (
                    <button
                      key={exam}
                      onClick={() => setSelectedExam(exam)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        selectedExam === exam ? 'bg-indigo-50 text-indigo-950 font-bold' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{exam}</span>
                      {selectedExam === exam && <Check className="w-3.5 h-3.5 text-amber-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* PRICE SLIDER */}
              <div className="py-4 border-b border-slate-100">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Max Price:</span>
                  <span className="font-mono text-indigo-950">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="149"
                  max="2000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>₹149</span>
                  <span>₹2000</span>
                </div>
              </div>

              {/* BADGES */}
              <div className="pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Collection Badge
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['All', 'BESTSELLER', 'NEW DROP', 'EXAM SEASON', 'DIGITAL'].map((badge) => (
                    <button
                      key={badge}
                      onClick={() => setSelectedBadge(badge)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                        selectedBadge === badge
                          ? 'bg-[#141738] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {badge}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* PRODUCT CARDS GRID */}
          <main className="lg:col-span-3">
            {/* ACTIVE FILTERS CHIP BAR */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="text-xs text-slate-400">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-full font-medium">
                    Category: {selectedCategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('All')} />
                  </span>
                )}
                {selectedSkill !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full font-medium">
                    Skill: {selectedSkill}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSkill('All')} />
                  </span>
                )}
                {selectedExam !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-200 text-slate-800 px-2.5 py-1 rounded-full font-medium">
                    Exam: {selectedExam}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedExam('All')} />
                  </span>
                )}
                {selectedBadge !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-slate-200 text-slate-800 px-2.5 py-1 rounded-full font-medium">
                    {selectedBadge}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedBadge('All')} />
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:underline font-semibold ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">No gear found matching criteria</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                  Try adjusting your price range or clearing some filters to see our full catalogue.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-[#141738] text-white text-xs font-bold rounded-xl"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* MOBILE FILTER MODAL DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-xs bg-white h-full p-5 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="font-heading font-bold text-slate-900">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Skill</label>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value as any)}
                  className="w-full text-xs p-2 bg-slate-50 border rounded-lg"
                >
                  <option value="All">All Skills</option>
                  {SKILL_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Exam</label>
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value as any)}
                  className="w-full text-xs p-2 bg-slate-50 border rounded-lg"
                >
                  <option value="All">All Exams</option>
                  {EXAM_LIST.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Max Price (₹{maxPrice})</label>
                <input
                  type="range"
                  min="149"
                  max="2000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 py-2.5 border border-slate-300 text-xs font-bold rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-[#141738] text-white text-xs font-bold rounded-xl"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
