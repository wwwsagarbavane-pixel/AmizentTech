import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Check, 
  Sparkles, 
  GraduationCap,
  X
} from 'lucide-react';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsLearningPath, LmsView } from '../../types/lmsTypes';

interface LearningPathsProps {
  onSelectView?: (view: LmsView) => void;
  onNavigateToPlayer?: (courseId: string) => void;
}

export const LearningPathsPage: React.FC<LearningPathsProps> = ({
  onSelectView,
  onNavigateToPlayer
}) => {
  const [paths, setPaths] = useState<LmsLearningPath[]>(() => LmsStorage.getLearningPaths());
  const [activeTab, setActiveTab] = useState<'discover' | 'my_paths' | 'completed'>('discover');
  const [selectedPath, setSelectedPath] = useState<LmsLearningPath | null>(null);
  const [pathDetailTab, setPathDetailTab] = useState<'curriculum' | 'overview' | 'skills' | 'requirements'>('curriculum');
  const [enrollSuccessMessage, setEnrollSuccessMessage] = useState<string | null>(null);

  const enrolledPaths = paths.filter(p => p.enrolled);
  const inProgressPaths = enrolledPaths.filter(p => p.progressPercent < 100);
  const completedPaths = enrolledPaths.filter(p => p.progressPercent === 100);

  const handleEnroll = (pathId: string) => {
    LmsStorage.enrollInLearningPath(pathId);
    setPaths(LmsStorage.getLearningPaths());
    const updated = LmsStorage.getLearningPaths().find(p => p.id === pathId);
    if (updated) setSelectedPath(updated);
    setEnrollSuccessMessage(`Successfully enrolled in "${updated?.title}". Stage 01 modules unlocked!`);
    setTimeout(() => setEnrollSuccessMessage(null), 5000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Learning Paths
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2B62EE] text-[10px] font-bold">
              {paths.length} Career Tracks
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Structured multi-stage skill programs calibrated for enterprise solutions architects.
          </p>
        </div>
      </div>

      {/* Success Notification Alert */}
      {enrollSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between animate-in fade-in shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{enrollSuccessMessage}</span>
          </div>
          <button onClick={() => setEnrollSuccessMessage(null)} className="cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
      )}

      {/* 2. Summary KPI Cards in Frosted Glass */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Available Paths</span>
          <div className="text-2xl font-black text-[#0B1B2B] mt-1 font-mono">{paths.length}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Enrolled Paths</span>
          <div className="text-2xl font-black text-[#2B62EE] mt-1 font-mono">{enrolledPaths.length}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">In Progress</span>
          <div className="text-2xl font-black text-amber-500 mt-1 font-mono">{inProgressPaths.length}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Completed</span>
          <div className="text-2xl font-black text-emerald-500 mt-1 font-mono">{completedPaths.length}</div>
        </div>
      </div>

      {/* 3. Main Navigation Tabs */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-4 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex items-center justify-between">
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 text-xs font-bold">
          <button
            onClick={() => { setActiveTab('discover'); setSelectedPath(null); }}
            className={`px-5 py-2 rounded-full cursor-pointer transition-all ${
              activeTab === 'discover' 
                ? 'bg-[#0B1B2B] text-white font-black shadow-xs' 
                : 'text-slate-600 hover:text-[#0B1B2B]'
            }`}
          >
            Discover Paths ({paths.length})
          </button>

          <button
            onClick={() => { setActiveTab('my_paths'); setSelectedPath(null); }}
            className={`px-5 py-2 rounded-full cursor-pointer transition-all ${
              activeTab === 'my_paths' 
                ? 'bg-[#0B1B2B] text-white font-black shadow-xs' 
                : 'text-slate-600 hover:text-[#0B1B2B]'
            }`}
          >
            My Learning Paths ({enrolledPaths.length})
          </button>

          <button
            onClick={() => { setActiveTab('completed'); setSelectedPath(null); }}
            className={`px-5 py-2 rounded-full cursor-pointer transition-all ${
              activeTab === 'completed' 
                ? 'bg-[#0B1B2B] text-white font-black shadow-xs' 
                : 'text-slate-600 hover:text-[#0B1B2B]'
            }`}
          >
            Completed Paths ({completedPaths.length})
          </button>
        </div>
      </div>

      {/* Path Detail Drawer / View */}
      {selectedPath ? (
        <div className="bg-white/80 backdrop-blur-2xl rounded-[36px] p-7 sm:p-8 border border-white/90 shadow-[0_20px_50px_rgba(20,50,90,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-6 animate-in fade-in">
          
          {/* Header of Detail View */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <button 
                onClick={() => setSelectedPath(null)}
                className="text-xs font-bold text-[#2B62EE] hover:underline flex items-center gap-1 mb-2 cursor-pointer"
              >
                ← Back to All Paths
              </button>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B1B2B]">
                {selectedPath.title}
              </h2>
              <p className="text-xs text-[#758EA8] mt-1 font-medium">
                Target Role: <strong className="text-[#0B1B2B]">{selectedPath.targetRole}</strong> • {selectedPath.durationHours} Total Hours
              </p>
            </div>

            <div className="flex items-center gap-3">
              {!selectedPath.enrolled ? (
                <button
                  onClick={() => handleEnroll(selectedPath.id)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2B62EE] to-[#1E56D0] hover:from-[#1E56D0] hover:to-[#1746B0] text-white text-xs font-black shadow-[0_6px_18px_rgba(43,98,238,0.25)] cursor-pointer"
                >
                  Enroll in Path
                </button>
              ) : (
                <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                  <Check className="w-4 h-4" /> Enrolled &amp; Active
                </span>
              )}
            </div>
          </div>

          {/* Sub-tabs inside Path Detail */}
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2 text-xs font-bold">
            {(['curriculum', 'overview', 'skills', 'requirements'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setPathDetailTab(tab)}
                className={`px-4 py-1.5 rounded-full capitalize cursor-pointer transition-all ${
                  pathDetailTab === tab 
                    ? 'bg-[#0B1B2B] text-white font-black shadow-xs' 
                    : 'text-slate-500 hover:text-[#0B1B2B]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab 1: Curriculum with Connected Stages (Stage 01 to 05) */}
          {pathDetailTab === 'curriculum' && (
            <div className="space-y-4 pt-2">
              {selectedPath.stages.map((stage, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    stage.completionStatus === 'completed' 
                      ? 'bg-emerald-50/70 border-emerald-200' 
                      : stage.completionStatus === 'in_progress'
                        ? 'bg-blue-50/70 border-blue-200 shadow-sm'
                        : stage.completionStatus === 'available'
                          ? 'bg-white/80 border-slate-200'
                          : 'bg-slate-50/70 border-slate-100 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          stage.completionStatus === 'completed'
                            ? 'bg-emerald-200 text-emerald-800'
                            : stage.completionStatus === 'in_progress'
                              ? 'bg-blue-200 text-blue-800'
                              : 'bg-slate-200 text-slate-700'
                        }`}>
                          Stage 0{stage.stageNumber}
                        </span>
                        <h4 className="text-sm font-black text-[#0B1B2B]">{stage.title}</h4>
                      </div>
                      <p className="text-xs text-[#758EA8]">{stage.description}</p>
                    </div>

                    <div>
                      {stage.completionStatus === 'locked' ? (
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-bold"><Lock className="w-3.5 h-3.5" /> Locked</span>
                      ) : stage.completionStatus === 'completed' ? (
                        <span className="flex items-center gap-1 text-xs text-emerald-600 font-black"><CheckCircle2 className="w-4 h-4" /> Done</span>
                      ) : (
                        <span className="text-xs text-[#2B62EE] font-black">Active</span>
                      )}
                    </div>
                  </div>

                  {/* Course modules list in this stage */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-2">
                    {stage.courses.map(c => (
                      <div key={c.id} className="flex items-center justify-between text-xs py-1">
                        <span className="font-bold text-[#0B1B2B]">• {c.title}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-mono">{c.duration}</span>
                          {!c.locked ? (
                            <button
                              onClick={() => {
                                if (onNavigateToPlayer) onNavigateToPlayer(c.id);
                                else if (onSelectView) onSelectView('course_player');
                              }}
                              className="px-3.5 py-1 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-[10px] font-black cursor-pointer shadow-xs"
                            >
                              Open
                            </button>
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-slate-300" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Overview */}
          {pathDetailTab === 'overview' && (
            <div className="space-y-4 text-xs text-[#4A607A] pt-2 leading-relaxed">
              <p>{selectedPath.description}</p>
              <h4 className="text-sm font-black text-[#0B1B2B] pt-2">Career Relevance</h4>
              <p>Graduates of this path step into Senior Solutions Architecture roles, commanding high-tier enterprise compensation and verified credential status across AmIzent enterprise partners.</p>
            </div>
          )}

          {/* Tab 3: Skills */}
          {pathDetailTab === 'skills' && (
            <div className="pt-2">
              <h4 className="text-sm font-black text-[#0B1B2B] mb-3">Covered Enterprise Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPath.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1B58A6]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Requirements */}
          {pathDetailTab === 'requirements' && (
            <div className="space-y-2 text-xs text-[#4A607A] pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Minimum 240 Skill IQ in fundamental cloud engineering</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Completion of all hands-on sandbox labs</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 80%+ passing score on Stage 05 Final Assessment</div>
            </div>
          )}

        </div>
      ) : (
        // Path Cards Grid in Frosted Glass
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'discover' ? paths : activeTab === 'my_paths' ? enrolledPaths : completedPaths).map((p) => (
            <div 
              key={p.id}
              className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1B58A6] text-[10px] font-black uppercase">
                    {p.level}
                  </span>
                  <span className="text-slate-400 font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {p.durationHours}h
                  </span>
                </div>

                <h3 className="text-base font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-[#758EA8] line-clamp-2 leading-relaxed">
                  {p.description}
                </p>

                <div className="text-[11px] text-slate-400 font-bold">
                  Role: <strong className="text-[#0B1B2B]">{p.targetRole}</strong>
                </div>

                {p.enrolled && (
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-400">Path Progress</span>
                      <span className="text-[#2B62EE] font-mono font-black">{p.progressPercent}%</span>
                    </div>
                    <div className="w-full bg-[#EAF1F8] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#12457F] via-[#2B62EE] to-[#38BDF8] h-full rounded-full" style={{ width: `${p.progressPercent}%` }} />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black text-slate-400">{p.courseCount} Courses</span>
                <button
                  onClick={() => setSelectedPath(p)}
                  className="px-5 py-2 rounded-full bg-[#0B1B2B] hover:bg-black text-white text-xs font-black shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                >
                  <span>{p.enrolled ? 'Continue Path' : 'Explore Path'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};