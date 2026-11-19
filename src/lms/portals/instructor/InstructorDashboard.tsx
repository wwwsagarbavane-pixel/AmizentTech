import React from 'react';
import { BookOpen, Users, Star, DollarSign, Plus, ArrowRight, Video, FileCheck2, TrendingUp } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsView } from '../../types/lmsTypes';

interface InstructorProps {
  onSelectView: (view: LmsView) => void;
}

export const InstructorDashboard: React.FC<InstructorProps> = ({ onSelectView }) => {
  const { currentUser, theme } = useAuth();
  const isDark = theme === 'dark';

  const courses = LmsStorage.getCourses();
  const myCourses = courses.filter(c => c.instructorName.includes(currentUser?.name?.split(' ')[0] || 'Elena') || c.id === 'course_ai_agents');

  const totalStudents = myCourses.reduce((sum, c) => sum + c.enrolledCount, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Banner with Studio Button */}
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
        isDark 
          ? 'bg-gradient-to-r from-[#181924] via-[#2A2B42] to-[#181924] border-white/10 text-white' 
          : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
      }`}>
        <div className="space-y-1.5">
          <span className="text-[10px] font-black uppercase text-[#1E75E8] tracking-wider">
            Instructor Portal &amp; Studio
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Welcome, {currentUser?.name}
          </h2>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
            Manage curriculum modules, broadcast live masterclasses, and evaluate enterprise submissions.
          </p>
        </div>

        <button
          onClick={() => onSelectView('create_course')}
          className="px-5 py-2.5 rounded-full bg-[#1E75E8] hover:bg-[#1665D8] text-white text-xs font-black shadow-lg flex items-center gap-2 cursor-pointer transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Course</span>
        </button>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase">Active Students</span>
            <Users className="w-4 h-4 text-[#1E75E8]" />
          </div>
          <div className="text-2xl font-black font-mono mt-2">{totalStudents.toLocaleString()}</div>
          <div className="text-[10px] text-emerald-500 font-bold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18% this month
          </div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase">Average Rating</span>
            <Star className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black font-mono mt-2">4.96</div>
          <div className="text-[10px] text-slate-400 mt-1">From 842 reviews</div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase">Published Courses</span>
            <BookOpen className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black font-mono mt-2">{myCourses.length}</div>
          <div className="text-[10px] text-[#1E75E8] font-bold mt-1">2 Live, 1 Blended</div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
        }`}>
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase">Studio Revenue</span>
            <DollarSign className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-black font-mono mt-2">$34,820</div>
          <div className="text-[10px] text-emerald-500 font-bold mt-1">+12.4% vs last Q</div>
        </div>
      </div>

      {/* Courses Managed */}
      <div className="space-y-4">
        <h3 className="text-base font-black tracking-tight">Your Published Programs</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myCourses.map((c) => (
            <div
              key={c.id}
              className={`p-5 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
              }`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={c.thumbnail}
                  alt={c.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-[#1E75E8]">{c.format}</span>
                  <h4 className="text-sm font-black line-clamp-2">{c.title}</h4>
                  <div className="text-xs text-slate-400 flex items-center gap-3">
                    <span>{c.enrolledCount} Students</span>
                    <span>•</span>
                    <span className="text-amber-500 font-bold">★ {c.rating}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-500">
                  {c.isFree ? 'Free' : `$${c.priceUSD} USD`}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectView('live_classes')}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 flex items-center gap-1"
                  >
                    <Video className="w-3 h-3 text-[#1E75E8]" />
                    <span>Host Live</span>
                  </button>
                  <button
                    onClick={() => onSelectView('create_course')}
                    className="px-3 py-1.5 rounded-lg bg-[#1E75E8] text-white text-xs font-bold"
                  >
                    Edit Curriculum
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
