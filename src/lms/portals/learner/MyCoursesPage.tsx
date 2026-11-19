import React, { useState } from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Building2, 
  Search, 
  Sparkles, 
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsView, LmsCourse } from '../../types/lmsTypes';

interface MyCoursesProps {
  onNavigateToPlayer: (courseId: string) => void;
  onSelectView: (view: LmsView) => void;
}

export const MyCoursesPage: React.FC<MyCoursesProps> = ({
  onNavigateToPlayer
}) => {
  const { currentUser } = useAuth();

  const enrollments = currentUser ? LmsStorage.getUserEnrollments(currentUser.id) : [];
  const allCourses = LmsStorage.getCourses();

  const [activeTab, setActiveTab] = useState<'all' | 'in_progress' | 'not_started' | 'completed' | 'assigned'>('all');
  const [search, setSearch] = useState('');
  const [selectedProgressCourse, setSelectedProgressCourse] = useState<LmsCourse | null>(null);

  const enrolledCourseData = enrollments.map(enr => {
    const course = allCourses.find(c => c.id === enr.courseId);
    return {
      enrollment: enr,
      course
    };
  }).filter(item => item.course !== undefined);

  const inProgressCourses = enrolledCourseData.filter(i => i.enrollment.status === 'in_progress');
  const notStartedCourses = enrolledCourseData.filter(i => i.enrollment.status === 'not_started');
  const completedCourses = enrolledCourseData.filter(i => i.enrollment.status === 'completed');

  // Corporate assigned courses mock table
  const corporateAssigned = [
    {
      id: 'asg_1',
      courseTitle: 'Autonomous AI Agents & Multi-Agent LangGraph Systems',
      assignedBy: 'Sarah Jenkins (VP Cloud Architecture)',
      department: 'Cloud & Infrastructure Services',
      assignedDate: 'Feb 01, 2026',
      dueDate: 'Feb 28, 2026',
      priority: 'High',
      progress: 45,
      status: 'In Progress',
      courseId: 'course_ai_agents'
    },
    {
      id: 'asg_2',
      courseTitle: 'Zero-Trust Cloud Architecture & DevSecOps Engineering',
      assignedBy: 'Marcus Evans (CISO)',
      department: 'Security & Governance',
      assignedDate: 'Jan 15, 2026',
      dueDate: 'March 15, 2026',
      priority: 'Mandatory',
      progress: 72,
      status: 'In Progress',
      courseId: 'course_cloud_security'
    },
    {
      id: 'asg_3',
      courseTitle: 'Applexus S/4HANA Cloud: Clean-Core Implementation',
      assignedBy: 'David Zhang (Enterprise Systems Lead)',
      department: 'Enterprise SAP Architecture',
      assignedDate: 'Jan 05, 2026',
      dueDate: 'Feb 15, 2026',
      priority: 'High',
      progress: 100,
      status: 'Completed',
      courseId: 'course_sap_s4hana'
    }
  ];

  const getFilteredList = () => {
    let list = enrolledCourseData;
    if (activeTab === 'in_progress') list = inProgressCourses;
    if (activeTab === 'not_started') list = notStartedCourses;
    if (activeTab === 'completed') list = completedCourses;

    if (search.trim()) {
      list = list.filter(i => i.course?.title.toLowerCase().includes(search.toLowerCase()) || 
                             i.course?.category.toLowerCase().includes(search.toLowerCase()));
    }
    return list;
  };

  const currentDisplayList = getFilteredList();

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              My Courses
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
              {enrollments.length || 6} Enrolled
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Personal tracks, corporate assignments, and resume checkpointed modules.
          </p>
        </div>
      </div>

      {/* 2. 5 Main Summary Cards in Frosted Glass */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {[
          { tab: 'all' as const, label: 'Total Enrolled', count: enrollments.length || 6, color: 'text-[#2B62EE]' },
          { tab: 'in_progress' as const, label: 'In Progress', count: inProgressCourses.length || 3, color: 'text-amber-500' },
          { tab: 'not_started' as const, label: 'Not Started', count: notStartedCourses.length || 0, color: 'text-slate-400' },
          { tab: 'completed' as const, label: 'Completed', count: completedCourses.length || 3, color: 'text-emerald-500' },
          { tab: 'assigned' as const, label: 'Corporate Assigned', count: corporateAssigned.length, color: 'text-purple-500' },
        ].map((c) => (
          <div
            key={c.tab}
            onClick={() => setActiveTab(c.tab)}
            className={`p-5 rounded-[28px] border transition-all cursor-pointer backdrop-blur-2xl ${
              activeTab === c.tab
                ? 'bg-white text-[#2B62EE] border-white shadow-[0_10px_25px_rgba(43,98,238,0.12)] -translate-y-0.5'
                : 'bg-white/75 border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:border-blue-200 hover:-translate-y-0.5'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8] block">{c.label}</span>
            <div className={`text-2xl font-black font-mono mt-1 ${c.color}`}>{c.count}</div>
          </div>
        ))}
      </div>

      {/* 3. Navigation Tabs & Search Controls */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-5 sm:p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="w-full md:w-80 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/80 border border-slate-200/80 text-xs shadow-xs focus-within:border-[#2B62EE]">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search your courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none outline-none font-medium text-[#0B1B2B]"
          />
        </div>

        {/* 5 Main Tabs (Black capsule for active) */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 text-xs font-bold overflow-x-auto max-w-full">
          {[
            { key: 'all', label: 'All Courses' },
            { key: 'in_progress', label: 'In Progress' },
            { key: 'not_started', label: 'Not Started' },
            { key: 'completed', label: 'Completed' },
            { key: 'assigned', label: 'Assigned (Corporate)' }
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as any)}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap cursor-pointer transition-all ${
                activeTab === t.key
                  ? 'bg-[#0B1B2B] text-white font-black shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B2B]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

      </div>

      {/* 4. Tab Content: Assigned Courses Table or Standard Course Grid */}
      {activeTab === 'assigned' ? (
        // Assigned Courses Table for Corporate Learners
        <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-x-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase text-[#2B62EE]">Enterprise Compliance</span>
              <h3 className="text-base font-black text-[#0B1B2B] mt-0.5">Assigned Corporate Training</h3>
            </div>
            <span className="text-xs font-bold text-slate-400">3 Mandated Tracks</span>
          </div>

          <table className="w-full text-left text-xs min-w-[700px] mt-2">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                <th className="py-3 pl-2">Course Track</th>
                <th className="py-3">Assigned By</th>
                <th className="py-3">Due Date</th>
                <th className="py-3">Priority</th>
                <th className="py-3">Progress</th>
                <th className="py-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/70">
              {corporateAssigned.map((asg) => (
                <tr key={asg.id} className="hover:bg-white/50 transition-colors">
                  <td className="py-4 pl-2 font-black text-[#0B1B2B]">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#2B62EE]" />
                      <span>{asg.courseTitle}</span>
                    </div>
                  </td>
                  <td className="py-4 text-slate-500 font-medium">{asg.assignedBy}</td>
                  <td className="py-4 font-mono font-bold text-slate-600">{asg.dueDate}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                      asg.priority === 'Mandatory' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {asg.priority}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#2B62EE] h-full rounded-full" style={{ width: `${asg.progress}%` }} />
                      </div>
                      <span className="font-mono font-bold text-xs">{asg.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <button
                      onClick={() => onNavigateToPlayer(asg.courseId)}
                      className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white font-black text-[11px] cursor-pointer shadow-xs"
                    >
                      {asg.progress === 100 ? 'Review' : 'Continue'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Standard Course Cards Grid in Frosted Glass
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentDisplayList.map(({ enrollment, course }) => {
            if (!course) return null;
            const isCompleted = enrollment.progressPercent === 100;

            return (
              <div
                key={enrollment.id}
                className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-sm border border-white/80 flex-shrink-0"
                  />

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-[#2B62EE] tracking-wider">
                        {course.category}
                      </span>
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" /> Certified
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">
                          Active: {enrollment.lastAccessedAt}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="text-xs text-slate-400 flex items-center gap-3">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.durationHours}h</span>
                      <span>•</span>
                      <span>{course.instructorName}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar & Actions */}
                <div className="mt-5 space-y-2 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-[#2B62EE] font-mono font-black">{enrollment.progressPercent}%</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-[#EAF1F8] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#12457F] via-[#2B62EE] to-[#38BDF8]'
                      }`}
                      style={{ width: `${enrollment.progressPercent}%` }}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgressCourse(course)}
                      className="text-xs font-bold text-slate-500 hover:text-[#0B1B2B] cursor-pointer"
                    >
                      View Detailed Progress
                    </button>

                    <button
                      onClick={() => onNavigateToPlayer(course.id)}
                      className={`px-5 py-2 rounded-full text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 ${
                        isCompleted
                          ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                          : 'bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white shadow-[0_6px_18px_rgba(43,98,238,0.25)]'
                      }`}
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>{isCompleted ? 'Review Modules' : 'Resume Learning'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Course Detailed Progress Modal */}
      {selectedProgressCourse && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-white/90 space-y-5 animate-in fade-in zoom-in-95 text-xs max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div>
                <span className="text-[10px] font-black uppercase text-[#2B62EE]">{selectedProgressCourse.category}</span>
                <h3 className="text-base font-black text-[#0B1B2B] mt-0.5">{selectedProgressCourse.title}</h3>
              </div>
              <button onClick={() => setSelectedProgressCourse(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="font-black text-xs uppercase text-slate-400">Curriculum Breakdown</h4>
              {selectedProgressCourse.modules.map((m, idx) => (
                <div key={m.id} className="p-3.5 rounded-2xl bg-white/70 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between font-bold text-[#0B1B2B]">
                    <span>Module {idx + 1}: {m.title}</span>
                    <span className="font-mono text-slate-400">{m.duration}</span>
                  </div>
                  <div className="space-y-1 text-slate-500 pl-2">
                    {m.lessons.map(l => (
                      <div key={l.id} className="flex items-center justify-between py-0.5">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{l.title}</span>
                        </span>
                        <span className="font-mono text-[10px]">{l.durationMinutes}m</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => { setSelectedProgressCourse(null); onNavigateToPlayer(selectedProgressCourse.id); }}
                className="px-6 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white font-black cursor-pointer shadow-md"
              >
                Launch Course Player
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};