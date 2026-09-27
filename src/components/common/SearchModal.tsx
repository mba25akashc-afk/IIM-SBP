import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Package, Layers, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PRODUCTS, COURSES, BUNDLES } from '../../data/mockData';

export const SearchModal: React.FC = () => {
  const { 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    navigateToProduct, 
    setCurrentPage, 
    setSelectedCourseId 
  } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');

  const popularTags = [
    'CAT', 'Focus', 'UPSC', 'Hoodie', 'Study Planner', 
    'Exam-Day Kit', 'Memory', 'Speed Math', 'Desk Mat'
  ];

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return null;
    const q = searchTerm.toLowerCase();

    const matchedProducts = PRODUCTS.filter(
      p => p.name.toLowerCase().includes(q) || 
           p.category.toLowerCase().includes(q) || 
           p.skill.toLowerCase().includes(q) ||
           p.exams.some(e => e.toLowerCase().includes(q))
    ).slice(0, 4);

    const matchedCourses = COURSES.filter(
      c => c.name.toLowerCase().includes(q) || 
           c.skill.toLowerCase().includes(q) ||
           c.exams.some(e => e.toLowerCase().includes(q))
    ).slice(0, 3);

    const matchedBundles = BUNDLES.filter(
      b => b.name.toLowerCase().includes(q) || 
           b.exam.toLowerCase().includes(q)
    ).slice(0, 2);

    return {
      products: matchedProducts,
      courses: matchedCourses,
      bundles: matchedBundles,
      totalCount: matchedProducts.length + matchedCourses.length + matchedBundles.length
    };
  }, [searchTerm]);

  if (!isSearchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:pt-20">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* SEARCH INPUT BAR */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-slate-50/80">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search courses, kits, skills or exam merch (e.g. CAT, Focus, Hoodie)..."
            className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 text-base sm:text-lg focus:outline-hidden"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')} 
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-200/60 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
          {!searchTerm.trim() ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Suggested Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-amber-900 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Trending Right Now
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      navigateToProduct('prod-focus-1');
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all"
                  >
                    <img 
                      src={PRODUCTS[4].image} 
                      alt="Focus Kit" 
                      className="w-12 h-12 rounded-lg object-cover" 
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Deep Work Focus Kit</h4>
                      <p className="text-[11px] text-slate-500">₹799 • 50-Min Protocol</p>
                    </div>
                  </div>
                  <div 
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      setSelectedCourseId('course-speed-math');
                      setCurrentPage('courses');
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all"
                  >
                    <img 
                      src={COURSES[0].image} 
                      alt="Speed Math" 
                      className="w-12 h-12 rounded-lg object-cover" 
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Speed Math & Quant</h4>
                      <p className="text-[11px] text-slate-500">60 Days • SSC / Banking / CAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : filteredResults && filteredResults.totalCount === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm">No results found for “{searchTerm}”.</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for CAT, Focus, Hoodie, or Speed.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* MATCHED COURSES */}
              {filteredResults && filteredResults.courses.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Skill Courses ({filteredResults.courses.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredResults.courses.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => {
                          setIsSearchModalOpen(false);
                          setSelectedCourseId(course.id);
                          setCurrentPage('courses');
                        }}
                        className="p-3 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 flex items-center justify-between cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img src={course.image} alt={course.name} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{course.name}</h4>
                            <p className="text-[11px] text-slate-500">{course.duration} • {course.exams.join(', ')}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-xs font-bold text-indigo-950">₹{course.price}</span>
                          <span className="text-[10px] block text-emerald-600 font-semibold">Course + Merch</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MATCHED MERCHANDISE */}
              {filteredResults && filteredResults.products.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 mb-3">
                    <Package className="w-3.5 h-3.5 text-amber-500" />
                    <span>Productivity Merchandise ({filteredResults.products.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredResults.products.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          setIsSearchModalOpen(false);
                          navigateToProduct(product.id);
                        }}
                        className="p-2.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 flex items-center gap-3 cursor-pointer transition-all"
                      >
                        <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-slate-900 truncate">{product.name}</h4>
                          <span className="text-[11px] font-mono font-bold text-indigo-950">₹{product.price}</span>
                          <span className="text-[10px] text-slate-400 block truncate">{product.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MATCHED BUNDLES */}
              {filteredResults && filteredResults.bundles.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 mb-3">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Complete System Bundles ({filteredResults.bundles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredResults.bundles.map((bundle) => (
                      <div
                        key={bundle.id}
                        onClick={() => {
                          setIsSearchModalOpen(false);
                          setCurrentPage('courses');
                        }}
                        className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 flex items-center justify-between cursor-pointer transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-emerald-700 text-white font-bold px-1.5 py-0.5 rounded">
                              {bundle.badge}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900">{bundle.name}</h4>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5">{bundle.tagline}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-sm font-bold text-indigo-950">₹{bundle.bundlePrice}</span>
                          <span className="text-[10px] text-emerald-700 block font-semibold">Save ₹{bundle.savings}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
