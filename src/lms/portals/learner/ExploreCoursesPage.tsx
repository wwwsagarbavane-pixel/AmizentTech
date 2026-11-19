import React, { useState } from 'react';
import { Search, Star, Clock, BookOpen, Sparkles, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { CourseFormat, LmsView } from '../../types/lmsTypes';

interface ExploreProps {
  onSelectCourse: (courseId: string) => void;
  onNavigateToPlayer: (courseId: string) => void;
  onSelectView: (view: LmsView) => void;
}

export const ExploreCoursesPage: React.FC<ExploreProps> = ({
  onSelectCourse,
  onNavigateToPlayer
}) => {
  const { currentUser } = useAuth();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<CourseFormat | 'all'>('all');

  const courses = LmsStorage.getCourses();

  const categories = ['All', 'Generative AI & Architecture', 'Enterprise ERP & Cloud', 'Cybersecurity & Cloud', 'Learning Tech & Frontend'];

  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                          c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || c.format === selectedFormat;
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const handleEnroll = (e: React.MouseEvent, courseId: string) => {
    e.stopPropagation();
    if (currentUser) {
      LmsStorage.enrollUserInCourse(currentUser.id, courseId);
      onNavigateToPlayer(courseId);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Explore Courses
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
              {courses.length} Certified Tracks
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Self-paced deep-dives, live masterclasses, and blended enterprise sandboxes.
          </p>
        </div>
      </div>

      {/* Filters & Search Toolbar in Frosted Glass Pill */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-5 sm:p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        
        {/* Search */}
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-slate-200/80 bg-white/80 text-[#0B1B2B] focus-within:border-[#2B62EE] w-full md:w-80 shadow-xs transition-all">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by skill, topic, tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none text-xs outline-none font-medium placeholder:text-slate-400"
          />
        </div>

        {/* Format Selector Pills (Black capsule for active) */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#F0F5FD]/80 backdrop-blur-md rounded-full border border-white/80">
          {(['all', 'blended', 'self_paced', 'live'] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-4 py-1.5 rounded-full text-xs font-black capitalize transition-all cursor-pointer ${
                selectedFormat === fmt
                  ? 'bg-[#0B1B2B] text-white shadow-xs'
                  : 'text-slate-500 hover:text-[#0B1B2B]'
              }`}
            >
              {fmt === 'all' ? 'All Formats' : fmt.replace('_', '-')}
            </button>
          ))}
        </div>

      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] text-white shadow-[0_6px_18px_rgba(43,98,238,0.25)]'
                : 'bg-white/80 backdrop-blur-md text-[#758EA8] hover:text-[#0B1B2B] border border-white/90 shadow-xs'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid in Frosted Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const isEnrolled = currentUser?.enrolledCourseIds.includes(course.id);

          return (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className="bg-white/75 backdrop-blur-2xl rounded-[32px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Thumbnail + Badge Overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 rounded-t-[32px]">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge Pill */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border border-white/20">
                  {course.badge}
                </div>

                {/* Format Tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#2B62EE] text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  {course.format.replace('_', ' ')}
                </div>
              </div>

              {/* Course Meta & Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-black text-[10px] uppercase tracking-wider text-[#2B62EE]">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating.toFixed(1)}</span>
                      <span className="text-slate-400 text-[10px]">({course.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#758EA8] line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.durationHours} Hours</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.modules.length} Modules</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-lg font-black text-[#0B1B2B] font-mono">
                        ${course.priceUSD}
                      </span>
                      <span className="text-[10px] text-slate-400 block -mt-1 font-medium">
                        Enterprise Access
                      </span>
                    </div>

                    {isEnrolled ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigateToPlayer(course.id);
                        }}
                        className="px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black flex items-center gap-1.5 cursor-pointer hover:bg-emerald-100 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Continue</span>
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleEnroll(e, course.id)}
                        className="px-5 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-black shadow-md flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
                      >
                        <span>Enroll Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};