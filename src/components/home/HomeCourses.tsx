import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Package, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { COURSES, PRODUCTS } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

export const HomeCourses: React.FC = () => {
  const { setCurrentPage, setSelectedCourseId, addToCart, navigateToProduct } = useApp();

  const handleEnrollCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage('courses');
  };

  return (
    <section className="py-20 bg-[#fafaf9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-100/70 px-2.5 py-1 rounded-md mb-2">
              <BookOpen className="w-3.5 h-3.5 text-indigo-700" />
              <span>Cognitive Curriculum</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Skill-Gym Courses.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              Research-backed training protocols designed to build calculation velocity, memory palaces, and deep focus habits. Paired directly with physical workspace gear.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('courses')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-950 hover:text-amber-600 transition-colors"
          >
            <span>View All 7 Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 FEATURED COURSES SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {COURSES.slice(0, 3).map((course) => {
            const recommendedProducts = PRODUCTS.filter((p) =>
              course.recommendedProductIds.includes(p.id)
            ).slice(0, 2);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Course Banner */}
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-indigo-950 px-2 py-0.5 rounded shadow-xs">
                      {course.skill}
                    </span>
                    <span className="text-[10px] font-semibold bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded">
                      {course.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold">{course.rating}</span>
                      <span className="text-slate-300 text-[10px]">({course.enrolledCount.toLocaleString()} enrolled)</span>
                    </div>
                    <span className="font-mono font-bold text-amber-300">₹{course.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Exam Tags */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-2 flex-wrap">
                      <span className="font-medium text-slate-400">Target:</span>
                      {course.exams.map((ex) => (
                        <span key={ex} className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded text-[10px]">
                          {ex}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-indigo-900 transition-colors">
                      {course.name}
                    </h3>

                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {course.tagline}
                    </p>
                  </div>

                  {/* INTEGRATED MERCHANDISE RECOMMENDATION */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] font-bold text-indigo-950 mb-2">
                      <span className="flex items-center gap-1 text-slate-700">
                        <Package className="w-3.5 h-3.5 text-amber-600" />
                        Pairs With Physical Gear:
                      </span>
                      <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">
                        Bundle Save 25%
                      </span>
                    </div>

                    <div className="space-y-1.5 mb-4">
                      {recommendedProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => navigateToProduct(p.id)}
                          className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-xs"
                        >
                          <span className="text-slate-700 truncate font-medium">{p.name}</span>
                          <span className="font-mono text-slate-900 font-bold ml-2">₹{p.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEnrollCourse(course.id)}
                        className="flex-1 py-2.5 bg-[#141738] hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Explore Course</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          addToCart({
                            courseId: course.id,
                            name: course.name,
                            price: course.price,
                            originalPrice: course.originalPrice,
                            image: course.image,
                            type: 'course',
                            category: 'Course'
                          });
                        }}
                        className="px-3.5 py-2.5 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                        title="Enroll now"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
