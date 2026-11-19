import React, { useState } from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  Video, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Flame,
  FileCheck2,
  MoreVertical,
  Bookmark,
  Download,
  AlertCircle,
  X,
  Scan,
  Compass,
  ArrowUpRight,
  Plus,
  Send,
  Sliders
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsView } from '../../types/lmsTypes';

interface DashboardProps {
  onSelectView: (view: LmsView) => void;
  onOpenRoleModal?: () => void;
  onNavigateToCourse?: (courseId: string) => void;
}

export const LearnerOverviewDashboard: React.FC<DashboardProps> = ({
  onSelectView,
  onNavigateToCourse
}) => {
  const { currentUser } = useAuth();

  const courses = LmsStorage.getCourses();
  const enrollments = currentUser ? LmsStorage.getUserEnrollments(currentUser.id) : [];
  const assessments = LmsStorage.getAssessments();
  const liveSessions = LmsStorage.getLiveClasses();
  const certificates = LmsStorage.getCertificates();
  const achievements = LmsStorage.getAchievements();

  // Modal states for interactive KPI cards
  const [activeModal, setActiveModal] = useState<'hours_report' | 'pending_tasks' | 'daily_activity' | null>(null);
  const [selectedDayActivity, setSelectedDayActivity] = useState<string>('Wed');
  const [activeActivityFilter, setActiveActivityFilter] = useState<'this_week' | 'last_week' | 'this_month'>('this_week');
  const [selectedCourseMenu, setSelectedCourseMenu] = useState<string | null>(null);
  const [sliderVal, setSliderVal] = useState<number>(65);

  // In-progress courses mapped from enrollments
  const inProgressList = courses.slice(0, 3);
  const completedCount = enrollments.filter(e => e.status === 'completed').length || 3;
  const inProgressCount = enrollments.filter(e => e.status === 'in_progress').length || 3;

  // Circular gauge arc calculations
  const gaugeProgress = 64;
  const arcSize = 250;
  const strokeWidth = 14;
  const radius = (arcSize - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.72;
  const strokeDashoffset = arcLength - (arcLength * gaugeProgress) / 100;

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* ============================================================ */}
      {/* A. PAGE HEADER (Compact, Sleek & Modern - No Solid Blue Box!) */}
      {/* ============================================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3.5">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'}
            alt={currentUser?.name || 'User'}
            className="w-12 h-12 rounded-2xl border border-white shadow-xs object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
                Welcome back, {currentUser?.name?.split(' ')[0] || 'Jason'}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
                14-Day Streak 🔥
              </span>
            </div>
            <p className="text-xs text-[#758EA8] font-medium mt-0.5">
              Skill IQ {currentUser?.skillIq || 284}/300 • Autonomous AI Systems &amp; Zero-Trust Cloud
            </p>
          </div>
        </div>

        {/* Action Buttons: Black capsule + Light capsule */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onSelectView('explore_courses')}
            className="px-4 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Explore Courses</span>
          </button>

          <button
            onClick={() => onSelectView('learning_paths')}
            className="px-4 py-2 rounded-full bg-white/80 hover:bg-white border border-slate-200/80 text-[#0B1B2B] text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Award className="w-3.5 h-3.5 text-[#2B62EE]" />
            <span>Learning Path</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* B. 6 KPI SUMMARY CARDS (Pure Frosted Glassmorphism) */}
      {/* ============================================================ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        
        {/* Card 1: Total Enrolled Courses */}
        <div 
          onClick={() => onSelectView('my_courses')}
          className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Total Enrolled</span>
            <BookOpen className="w-4 h-4 text-[#2B62EE] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-black text-[#0B1B2B] mt-2 font-mono">
            {enrollments.length || 6}
          </div>
          <div className="text-[11px] font-bold text-emerald-600 mt-1">
            {inProgressCount} Active • {completedCount} Done
          </div>
        </div>

        {/* Card 2: Courses In Progress */}
        <div 
          onClick={() => onSelectView('my_courses')}
          className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">In Progress</span>
            <Clock className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-black text-[#0B1B2B] mt-2 font-mono">
            {inProgressCount}
          </div>
          <div className="text-[11px] font-bold text-amber-600 mt-1">
            68% Avg. Completion
          </div>
        </div>

        {/* Card 3: Completed Courses */}
        <div 
          onClick={() => onSelectView('my_courses')}
          className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Completed</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-black text-[#0B1B2B] mt-2 font-mono">
            {completedCount}
          </div>
          <div className="text-[11px] font-bold text-slate-400 mt-1">
            Last: Jan 28, 2026
          </div>
        </div>

        {/* Card 4: Total Learning Hours */}
        <div 
          onClick={() => setActiveModal('hours_report')}
          className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Hours Spent</span>
            <TrendingUp className="w-4 h-4 text-[#2B62EE] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-black text-[#0B1B2B] mt-2 font-mono">
            48.5 <span className="text-xs font-normal text-slate-400">hrs</span>
          </div>
          <div className="text-[11px] font-bold text-[#2B62EE] mt-1">
            +14% vs last week ↗
          </div>
        </div>

        {/* Card 5: Certificates Earned */}
        <div 
          onClick={() => onSelectView('certificates')}
          className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Certificates</span>
            <Award className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-black text-[#0B1B2B] mt-2 font-mono">
            {certificates.length || 4}
          </div>
          <div className="text-[11px] font-bold text-purple-600 mt-1">
            1 Earned this month
          </div>
        </div>

        {/* Card 6: Pending Tasks */}
        <div 
          onClick={() => setActiveModal('pending_tasks')}
          className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Pending Tasks</span>
            <AlertCircle className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl font-black text-rose-600 mt-2 font-mono">
            3
          </div>
          <div className="text-[11px] font-bold text-slate-400 mt-1">
            2 Assessments • 1 Project
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* C & D. MAIN STAGE: BENTO GAUGES + CONTINUE LEARNING */}
      {/* Exact replica of media_1795003913748_38900583.jpg */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (8 cols): Continue Learning Active Tracks */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-[#0B1B2B] tracking-tight">
                Continue Learning
              </h2>
              <p className="text-xs text-[#758EA8] mt-0.5">
                Resume right from your last watched timestamp or checkpoint.
              </p>
            </div>
            <button
              onClick={() => onSelectView('my_courses')}
              className="text-xs font-bold text-[#2B62EE] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All Courses</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {inProgressList.map((course, idx) => {
              const progressMap = [45, 72, 88];
              const progress = progressMap[idx] || 50;
              const remainingHrs = [28, 12, 4][idx] || 15;

              return (
                <div 
                  key={course.id}
                  className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_45px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-16 h-16 rounded-2xl object-cover shadow-sm border border-white/80 flex-shrink-0"
                      />
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide bg-[#EEF4FF] text-[#1B58A6]">
                            {course.category}
                          </span>
                          <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{remainingHrs}h remaining</span>
                          </span>
                        </div>

                        <h3 className="text-base font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                          {course.title}
                        </h3>

                        <p className="text-xs text-slate-500">
                          Current Lesson: <strong className="text-[#0B1B2B]">Module {idx + 3} — Checkpoint Lab: Architectural Defense</strong>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={() => {
                          if (onNavigateToCourse) onNavigateToCourse(course.id);
                          else onSelectView('course_player');
                        }}
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-xs font-black shadow-[0_8px_20px_rgba(43,98,238,0.25)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>Continue</span>
                      </button>

                      {/* Three-Dot Menu */}
                      <div className="relative">
                        <button
                          onClick={() => setSelectedCourseMenu(selectedCourseMenu === course.id ? null : course.id)}
                          className="w-9 h-9 rounded-full bg-white/80 border border-slate-200/80 flex items-center justify-center text-slate-400 hover:text-[#0B1B2B] transition-colors cursor-pointer"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {selectedCourseMenu === course.id && (
                          <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white/95 backdrop-blur-xl p-2 shadow-2xl border border-slate-100 z-50 animate-in fade-in zoom-in-95 text-xs">
                            <button 
                              onClick={() => { setSelectedCourseMenu(null); onSelectView('explore_courses'); }}
                              className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 font-bold text-slate-700 flex items-center gap-2"
                            >
                              <BookOpen className="w-3.5 h-3.5" /> View Details
                            </button>
                            <button 
                              onClick={() => { setSelectedCourseMenu(null); onSelectView('course_player'); }}
                              className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 font-bold text-slate-700 flex items-center gap-2"
                            >
                              <Bookmark className="w-3.5 h-3.5" /> Bookmark Lesson
                            </button>
                            <button 
                              onClick={() => { setSelectedCourseMenu(null); alert('Resources archive downloaded.'); }}
                              className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 font-bold text-slate-700 flex items-center gap-2"
                            >
                              <Download className="w-3.5 h-3.5" /> Download Resources
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between gap-4 text-xs">
                    <div className="w-full bg-[#EAF1F8] h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#12457F] via-[#2B62EE] to-[#38BDF8] h-full rounded-full transition-all duration-700"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="font-mono font-black text-[#2B62EE] whitespace-nowrap">
                      {progress}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* D. WEEKLY ACTIVITY CHART (Interactive Bar Chart matching specification) */}
          <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase text-[#2B62EE] tracking-wider block">
                  Telemetric Learning Habit
                </span>
                <h3 className="text-base font-black text-[#0B1B2B] mt-0.5">
                  My Learning Activity (Weekly Hours)
                </h3>
              </div>

              {/* Filters in soft capsule */}
              <div className="flex items-center gap-1 bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 p-1 rounded-full text-xs font-bold">
                {(['this_week', 'last_week', 'this_month'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveActivityFilter(f)}
                    className={`px-3 py-1 rounded-full capitalize cursor-pointer transition-all ${
                      activeActivityFilter === f 
                        ? 'bg-[#0B1B2B] text-white shadow-xs font-black' 
                        : 'text-slate-500 hover:text-[#0B1B2B]'
                    }`}
                  >
                    {f.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Clickable Bar Chart: Mon to Sun */}
            <div className="pt-4">
              <div className="flex items-end justify-between gap-3 h-36 w-full px-2">
                {[
                  { day: 'Mon', hrs: 1.5, height: 45, date: 'Feb 16' },
                  { day: 'Tue', hrs: 2.2, height: 65, date: 'Feb 17' },
                  { day: 'Wed', hrs: 3.4, height: 100, date: 'Feb 18', mostActive: true },
                  { day: 'Thu', hrs: 1.8, height: 55, date: 'Feb 19' },
                  { day: 'Fri', hrs: 2.5, height: 75, date: 'Feb 20' },
                  { day: 'Sat', hrs: 0.8, height: 25, date: 'Feb 21' },
                  { day: 'Sun', hrs: 0.5, height: 18, date: 'Feb 22' },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => { setSelectedDayActivity(item.day); setActiveModal('daily_activity'); }}
                    className="flex-1 flex flex-col items-center gap-2 h-full justify-end cursor-pointer group"
                  >
                    <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-[#2B62EE] transition-colors">
                      {item.hrs}h
                    </span>
                    <div 
                      className={`w-full max-w-[28px] rounded-xl transition-all duration-300 group-hover:scale-105 ${
                        item.mostActive 
                          ? 'bg-gradient-to-t from-[#12457F] via-[#2B62EE] to-[#38BDF8] shadow-md shadow-blue-500/25' 
                          : 'bg-[#DCE7F2]/80 group-hover:bg-[#2B62EE]'
                      }`}
                      style={{ height: `${item.height}%` }}
                    />
                    <span className="text-[11px] font-black text-slate-600">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
              <span className="text-slate-400">Most Active Day: <strong className="text-[#0B1B2B]">Wednesday (3.4 hrs)</strong></span>
              <span className="text-[#2B62EE] font-bold">Total: 12.7 hrs this week</span>
            </div>
          </div>

        </div>

        {/* Right Column (4 cols): Bento Frosted Widgets (Exact match to media_1795003913748_38900583.jpg) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Bento Card 1: 64% Arc Meter with Frosted [Ai] Lens */}
          <div className="bg-white/75 backdrop-blur-2xl rounded-[36px] p-6 sm:p-7 border border-white/90 shadow-[0_20px_50px_rgba(20,50,90,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] relative flex flex-col items-center text-center select-none overflow-hidden group">
            
            <div className="w-full flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-[#2B62EE] uppercase tracking-wider block text-left">
                  AI Generate
                </span>
                <span className="text-[11px] font-bold text-[#758EA8] block text-left">
                  Website Custom Components
                </span>
              </div>
              <button 
                title="Curriculum Scanner"
                className="w-8 h-8 rounded-full border border-slate-200/80 bg-white/80 flex items-center justify-center text-slate-400 hover:text-[#2B62EE] transition-colors"
              >
                <Scan className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Glowing Arc + 64% Centerpiece */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="absolute w-44 h-44 rounded-full bg-blue-100/50 blur-2xl pointer-events-none" />

              <svg width={arcSize} height={arcSize} className="transform -rotate-[130deg]">
                <circle
                  cx={arcSize / 2}
                  cy={arcSize / 2}
                  r={radius}
                  fill="none"
                  stroke="#E8F1FC"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${arcLength} ${circumference}`}
                  strokeLinecap="round"
                />
                <circle
                  cx={arcSize / 2}
                  cy={arcSize / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#arcBlueGrad)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${arcLength} ${circumference}`}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="arcBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#12457F" />
                    <stop offset="60%" stopColor="#2B62EE" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-2 pointer-events-none">
                <div className="text-5xl font-black text-[#0B1B2B] tracking-tight font-sans">
                  {gaugeProgress}%
                </div>
                <div className="text-xs font-bold text-[#7A889B] mt-1 max-w-[130px] leading-tight">
                  Website Custom Components
                </div>
              </div>

              {/* Floating Frosted Glass 'Ai' Sphere Badge at Bottom */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl border border-white/95 shadow-[0_10px_30px_rgba(37,99,235,0.22)] flex items-center justify-center relative group-hover:scale-105 transition-transform">
                  <div className="absolute inset-2 border-t-2 border-l-2 border-[#2B62EE] rounded-tl-lg pointer-events-none opacity-80" />
                  <div className="absolute inset-2 border-b-2 border-r-2 border-[#2B62EE] rounded-br-lg pointer-events-none opacity-80" />
                  <span className="font-mono text-sm font-black text-[#12457F]">Ai</span>
                </div>
              </div>
            </div>

            {/* Bottom Segmented Pill Capsule from image */}
            <div className="mt-4 flex items-center gap-1.5 p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 text-xs font-bold text-slate-500">
              <button className="px-3 py-1 rounded-full text-slate-500 hover:text-slate-800">Use templates</button>
              <button className="px-3.5 py-1.5 rounded-full bg-[#0B1B2B] text-white shadow-xs font-black">Use Jet AI</button>
              <button className="px-3 py-1 rounded-full text-slate-500 hover:text-slate-800">Customize settings</button>
            </div>
          </div>

          {/* Bento Card 2: Electric Blue Gradient Velocity Card (Exact match to image) */}
          <div className="bg-gradient-to-br from-[#4A7BF9] via-[#356CEF] to-[#205CEE] rounded-[32px] p-6 sm:p-7 text-white shadow-[0_20px_45px_rgba(37,99,235,0.28)] relative flex flex-col justify-between overflow-hidden select-none group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <h4 className="text-xs sm:text-[13px] font-bold text-white/90 leading-snug max-w-[190px]">
                Jet AI Operation Speed for Your Project
              </h4>
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight font-sans drop-shadow-sm">
                  7.2
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white/90 tracking-tight">
                  ml
                </span>
              </div>
              <div className="text-xs font-bold text-white/80 tracking-wide mt-0.5">
                oper./sec
              </div>
            </div>
          </div>

          {/* Bento Card 3: Custom Cards & Live Chat Showcase (Exact match to image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Custom Cards Widget from reference */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-[28px] p-5 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100">
                  <div className="flex -space-x-1.5">
                    <img className="w-5 h-5 rounded-full object-cover border border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="member" />
                    <img className="w-5 h-5 rounded-full object-cover border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="member" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500">25 Members</span>
                </div>
                <button className="w-6 h-6 rounded-full bg-[#2B62EE] text-white flex items-center justify-center shadow-xs">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <h4 className="text-sm font-black text-[#0B1B2B]">Custom Cards</h4>
                <p className="text-[11px] text-[#758EA8]">Generate with AI</p>
              </div>
            </div>

            {/* Live Chat Widget with Follower Slider from reference */}
            <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-5 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0B1B2B]">Live Chat</span>
                <button className="px-3 py-1 rounded-full bg-[#0B1B2B] text-white text-[10px] font-bold shadow-xs flex items-center gap-1">
                  <span>Generate</span>
                  <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                </button>
              </div>

              {/* Chat bubble */}
              <div className="p-3 rounded-2xl bg-[#2B62EE] text-white text-xs space-y-1 shadow-sm">
                <div className="font-bold text-[11px]">Daniel Harrison</div>
                <div className="text-[11px] text-white/90 leading-tight">
                  You make really great work! Check out my portfolio, I'll be glad for any feedback!
                </div>
              </div>

              {/* Floating Slider Card from reference */}
              <div className="p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-md space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img className="w-6 h-6 rounded-full object-cover border border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Matilda" />
                    <span className="font-bold text-[#0B1B2B] text-xs">Matilda Evans</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#2B62EE] font-bold">1k Followers</span>
                </div>

                <div className="relative flex items-center pt-1">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => setSliderVal(Number(e.target.value))}
                    className="w-full accent-[#2B62EE] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* E & F. UPCOMING LIVE SESSIONS + ASSESSMENTS ROW */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* E. Upcoming Live Classes */}
        <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase text-[#2B62EE] tracking-wider block">
                Instructor-Led Sessions
              </span>
              <h3 className="text-base font-black text-[#0B1B2B] mt-0.5">
                Upcoming Live Classes
              </h3>
            </div>
            <button
              onClick={() => onSelectView('live_classes')}
              className="text-xs font-bold text-[#2B62EE] hover:underline cursor-pointer"
            >
              View All ({liveSessions.length})
            </button>
          </div>

          <div className="space-y-3.5">
            {liveSessions.slice(0, 2).map((session) => (
              <div 
                key={session.id}
                className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 space-y-2.5 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1B58A6] font-bold text-[10px]">
                    {session.scheduledAt}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{session.durationMinutes} min</span>
                </div>

                <div className="text-sm font-black text-[#0B1B2B] leading-snug">
                  {session.title}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={session.instructorAvatar}
                      alt={session.instructorName}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-slate-600 font-bold">
                      {session.instructorName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Added "${session.title}" to calendar reminder.`)}
                      className="px-3 py-1 rounded-full border border-slate-200/80 bg-white text-slate-600 hover:text-[#0B1B2B] text-[11px] font-bold cursor-pointer"
                    >
                      Calendar
                    </button>
                    <a
                      href={session.meetingLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-[11px] font-black cursor-pointer shadow-xs"
                    >
                      Join Class
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* F. Upcoming Assessments */}
        <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase text-[#2B62EE] tracking-wider block">
                Evaluations &amp; Benchmarks
              </span>
              <h3 className="text-base font-black text-[#0B1B2B] mt-0.5">
                Upcoming Assessments
              </h3>
            </div>
            <button
              onClick={() => onSelectView('assessments')}
              className="text-xs font-bold text-[#2B62EE] hover:underline cursor-pointer"
            >
              View All ({assessments.length})
            </button>
          </div>

          <div className="space-y-3.5">
            {assessments.slice(0, 2).map((assess) => (
              <div 
                key={assess.id}
                className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 space-y-2.5 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px]">
                    {assess.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">Due Feb 24</span>
                </div>

                <div className="text-sm font-black text-[#0B1B2B] leading-snug">
                  {assess.title}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {assess.questionsCount} Qs • Pass: 70% • 3 Attempts
                  </div>

                  <button
                    onClick={() => onSelectView('assessments')}
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-[11px] font-black cursor-pointer shadow-xs flex items-center gap-1"
                  >
                    <span>Start Attempt</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* G & H & I. RECENT ACTIVITY + RECOMMENDED COURSES + ACHIEVEMENTS */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* G. Recent Activity Timeline (4 cols) */}
        <div className="lg:col-span-4 bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
          <h3 className="text-base font-black text-[#0B1B2B] pb-2 border-b border-slate-100">
            Recent Activity Timeline
          </h3>

          <div className="space-y-4 pt-1">
            {[
              { title: 'Completed Lesson 4: LangGraph State Graphs', course: 'Autonomous AI Agents', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-500' },
              { title: 'Submitted Assignment: Multi-Cloud IaC', course: 'Zero-Trust Architecture', time: 'Yesterday', icon: FileCheck2, color: 'text-[#2B62EE]' },
              { title: 'Passed Assessment: Clean-Core S/4HANA', course: 'Applexus Cloud', time: '2 days ago', icon: Award, color: 'text-purple-500' },
              { title: 'Attended Live Lab: Agentic Memory', course: 'Autonomous AI Agents', time: '3 days ago', icon: Video, color: 'text-amber-500' },
            ].map((act, i) => {
              const Icon = act.icon;
              return (
                <div key={i} className="flex items-start gap-3 text-xs">
                  <div className={`w-8 h-8 rounded-full bg-white/80 border border-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5 ${act.color} shadow-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1B2B] leading-snug">{act.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{act.course} • {act.time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* H. Recommended Courses (5 cols) */}
        <div className="lg:col-span-5 bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-base font-black text-[#0B1B2B]">
              Recommended for Your Track
            </h3>
            <button
              onClick={() => onSelectView('explore_courses')}
              className="text-xs font-bold text-[#2B62EE] hover:underline cursor-pointer"
            >
              Catalog
            </button>
          </div>

          <div className="space-y-3 pt-1">
            {courses.slice(1, 3).map((c) => (
              <div 
                key={c.id}
                className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 hover:border-blue-200 transition-all flex items-center justify-between gap-3 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={c.thumbnail}
                    alt={c.title}
                    className="w-12 h-12 rounded-xl object-cover shadow-xs"
                  />
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#2B62EE]">{c.category}</span>
                    <h4 className="text-xs font-black text-[#0B1B2B] leading-tight line-clamp-1">{c.title}</h4>
                    <span className="text-[10px] text-slate-400">{c.instructorName} • {c.durationHours}h</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectView('explore_courses')}
                  className="px-4 py-1.5 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-[11px] font-black cursor-pointer flex-shrink-0 shadow-xs"
                >
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* I. Achievements Preview (3 cols) */}
        <div className="lg:col-span-3 bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-base font-black text-[#0B1B2B]">
              Earned Badges
            </h3>
            <button
              onClick={() => onSelectView('achievements')}
              className="text-xs font-bold text-[#2B62EE] hover:underline cursor-pointer"
            >
              All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {achievements.slice(0, 4).map((ach) => (
              <div 
                key={ach.id}
                onClick={() => onSelectView('achievements')}
                className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-all shadow-xs"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 ${
                  ach.earned ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-black leading-tight line-clamp-1">{ach.title}</div>
                <div className="text-[9px] text-slate-400 mt-0.5">{ach.earned ? 'Unlocked' : 'In Progress'}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE MODALS (Activity Report, Pending Tasks, Day Activity) */}
      {/* ============================================================ */}
      {activeModal === 'hours_report' && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-white/90 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="text-lg font-black text-[#0B1B2B]">
                Detailed Learning Hours Telemetry
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-50">
                <span className="text-slate-500">Total All-Time Learning Time:</span>
                <span className="font-mono font-black text-[#2B62EE]">48.5 hours</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-50">
                <span className="text-slate-500">Video Lesson Watch Time:</span>
                <span className="font-mono font-black text-[#0B1B2B]">32.0 hours (66%)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-50">
                <span className="text-slate-500">Live Hands-on Class Attendance:</span>
                <span className="font-mono font-black text-[#0B1B2B]">12.5 hours (26%)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-50">
                <span className="text-slate-500">Interactive Assessment Time:</span>
                <span className="font-mono font-black text-[#0B1B2B]">4.0 hours (8%)</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => alert('Exporting full telemetric CSV report...')}
                className="px-5 py-2.5 rounded-full bg-[#0B1B2B] text-white text-xs font-black shadow-md cursor-pointer"
              >
                Export CSV Report
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'pending_tasks' && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-white/90 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="text-lg font-black text-[#0B1B2B]">
                Pending Tasks Overview
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200/60 flex items-center justify-between">
                <div>
                  <div className="font-bold text-rose-700">Terraform Transit VPC Assignment</div>
                  <div className="text-[10px] text-rose-500">Due in 2 days</div>
                </div>
                <button 
                  onClick={() => { setActiveModal(null); onSelectView('assignments'); }}
                  className="px-3 py-1 rounded-full bg-rose-600 text-white font-black text-[10px] cursor-pointer"
                >
                  Submit
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-between">
                <div>
                  <div className="font-bold text-amber-700">Skill IQ: AI Agent Architecture</div>
                  <div className="text-[10px] text-amber-500">Due Feb 24 • Attempt 1/3</div>
                </div>
                <button 
                  onClick={() => { setActiveModal(null); onSelectView('assessments'); }}
                  className="px-3 py-1 rounded-full bg-amber-600 text-white font-black text-[10px] cursor-pointer"
                >
                  Take
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'daily_activity' && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-white/90 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="text-base font-black text-[#0B1B2B]">
                Activity Details — {selectedDayActivity}
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Courses Accessed:</span>
                <span className="font-bold text-[#0B1B2B]">Autonomous AI Agents</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Lessons Completed:</span>
                <span className="font-bold text-emerald-600">3 Lessons</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Video Watch Time:</span>
                <span className="font-bold">2.4 hours</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Lab Participation:</span>
                <span className="font-bold">1 Hour Live Sandbox</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};