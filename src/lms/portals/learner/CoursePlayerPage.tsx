import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  CheckCircle2, 
  Download, 
  FileText, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Award, 
  ChevronRight,
  HelpCircle,
  Terminal,
  Send
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsLesson, LmsView } from '../../types/lmsTypes';

interface PlayerProps {
  courseId: string;
  onBack: () => void;
  onSelectView: (view: LmsView) => void;
}

export const CoursePlayerPage: React.FC<PlayerProps> = ({
  courseId,
  onBack,
  onSelectView
}) => {
  const { currentUser, theme } = useAuth();
  const isDark = theme === 'dark';

  const course = LmsStorage.getCourseById(courseId) || LmsStorage.getCourses()[0];
  const enrollments = currentUser ? LmsStorage.getUserEnrollments(currentUser.id) : [];
  const currentEnrollment = enrollments.find(e => e.courseId === course.id);

  // Active Lesson State
  const firstModule = course.modules[0];
  const firstLesson = firstModule?.lessons[0];
  const [activeLesson, setActiveLesson] = useState<LmsLesson>(firstLesson);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'resources' | 'quiz' | 'ai_assistant'>('overview');

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // AI Assistant Mock Chat State
  const [chatMessages, setChatMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: `Hello ${currentUser?.name?.split(' ')[0] || 'Learner'}! I am your AmIzent AI Upskill Agent. Ask me anything about ${activeLesson?.title || 'this lesson'}.`
    }
  ]);
  const [userQuery, setUserQuery] = useState('');

  const completedLessonIds = currentEnrollment?.completedLessonIds || [];
  const isLessonCompleted = completedLessonIds.includes(activeLesson.id);

  const handleMarkComplete = () => {
    if (currentUser) {
      LmsStorage.updateLessonProgress(currentUser.id, course.id, activeLesson.id);
      // Auto move to next lesson if available
      const allLessons = course.modules.flatMap(m => m.lessons);
      const currentIndex = allLessons.findIndex(l => l.id === activeLesson.id);
      if (currentIndex < allLessons.length - 1) {
        setActiveLesson(allLessons[currentIndex + 1]);
      }
    }
  };

  const handleQuizSubmit = () => {
    if (!activeLesson.quiz) return;
    let correct = 0;
    activeLesson.quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    const percentage = Math.round((correct / activeLesson.quiz.length) * 100);
    setQuizScore(percentage);
    setQuizSubmitted(true);
    if (percentage >= 70) {
      handleMarkComplete();
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    const q = userQuery;
    setUserQuery('');
    setChatMessages(prev => [...prev, { sender: 'user', text: q }]);

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: `Great question regarding "${activeLesson.title}". In enterprise systems, you should maintain strict decoupled interfaces, validate telemetry with structured schemas, and enforce circuit breakers to prevent cascade failures.`
        }
      ]);
    }, 600);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer ${
            isDark ? 'text-slate-300 hover:text-white' : 'text-[#12457F] hover:text-[#1E75E8]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">
            Progress: <strong className="text-[#1E75E8]">{currentEnrollment?.progressPercent || 0}%</strong>
          </span>
          {currentEnrollment?.progressPercent === 100 && (
            <button
              onClick={() => onSelectView('certificates')}
              className="px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              <span>View Certificate</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Player Stage Left (8 cols) + Curriculum Drawer Right (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Video & Lesson Content Stage */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Video Player Container */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10 flex items-center justify-center">
            {activeLesson.videoUrl ? (
              <video
                src={activeLesson.videoUrl}
                controls
                className="w-full h-full object-contain"
                poster={course.thumbnail}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleMarkComplete}
              />
            ) : (
              <div className="text-center p-8 space-y-3">
                <Terminal className="w-12 h-12 mx-auto text-[#1E75E8] opacity-80" />
                <h3 className="text-white text-base font-bold">Interactive Cloud Lab Environment</h3>
                <p className="text-white/60 text-xs max-w-md">Launch your isolated sandbox container to complete this exercise.</p>
                <button 
                  onClick={handleMarkComplete}
                  className="px-5 py-2 rounded-full bg-[#1E75E8] text-white text-xs font-bold"
                >
                  Start Cloud Terminal
                </button>
              </div>
            )}

            {/* In-stream AmIzent Badge */}
            <div className="absolute top-4 left-4 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-black text-white uppercase tracking-wider">
              AmIzent Player HD • {activeLesson.type.toUpperCase()}
            </div>
          </div>

          {/* Lesson Action Row */}
          <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
          }`}>
            <div>
              <span className="text-[10px] font-black uppercase text-[#1E75E8] tracking-wider">
                Current Lesson
              </span>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                {activeLesson.title}
              </h2>
            </div>

            <button
              onClick={handleMarkComplete}
              className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                isLessonCompleted
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/30'
                  : 'bg-[#1E75E8] hover:bg-[#1665D8] text-white shadow-md'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isLessonCompleted ? 'Completed ✓' : 'Mark as Complete'}</span>
            </button>
          </div>

          {/* Interactive Lesson Tabs: Overview | Resources | Checkpoint Quiz | AI Assistant */}
          <div className={`rounded-2xl border overflow-hidden ${
            isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
          }`}>
            
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-100/10 text-xs font-bold">
              {[
                { id: 'overview', label: 'Lesson Overview' },
                { id: 'resources', label: 'Downloads & Lab Code' },
                { id: 'quiz', label: 'Checkpoint Quiz' },
                { id: 'ai_assistant', label: 'AmIzent AI Mentor' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 transition-colors cursor-pointer border-b-2 ${
                    activeTab === tab.id
                      ? isDark 
                        ? 'border-purple-400 text-purple-300 bg-white/5' 
                        : 'border-[#1E75E8] text-[#1E75E8] bg-[#F0F6FD]'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="p-6">
              
              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeLesson.summary}
                  </p>
                  {activeLesson.transcript && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 space-y-2">
                      <div className="text-[10px] font-black uppercase text-slate-400">Audio Transcript</div>
                      <p className="text-xs italic text-slate-600 dark:text-slate-400 font-mono">
                        "{activeLesson.transcript}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Resources */}
              {activeTab === 'resources' && (
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Lesson Attachments &amp; Repositories</h4>
                  {activeLesson.resources && activeLesson.resources.length > 0 ? (
                    activeLesson.resources.map((res, i) => (
                      <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <FileText className="w-4 h-4 text-[#1E75E8]" />
                          <span className="font-bold">{res.name}</span>
                        </div>
                        <button className="px-3 py-1 rounded-md bg-[#1E75E8]/10 text-[#1E75E8] font-bold text-[11px] flex items-center gap-1 hover:bg-[#1E75E8] hover:text-white transition-colors">
                          <Download className="w-3 h-3" /> Download
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400">No additional downloads required for this lesson.</p>
                  )}
                </div>
              )}

              {/* Tab 3: Checkpoint Quiz */}
              {activeTab === 'quiz' && (
                <div className="space-y-6">
                  {activeLesson.quiz && activeLesson.quiz.length > 0 ? (
                    <>
                      {activeLesson.quiz.map((q, idx) => (
                        <div key={q.id} className="space-y-3">
                          <div className="text-xs font-bold">
                            <span className="text-[#1E75E8] mr-1">Q{idx + 1}.</span> {q.question}
                          </div>

                          <div className="space-y-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedAnswers[q.id] === optIdx;
                              const isCorrect = q.correctIndex === optIdx;

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !quizSubmitted && setSelectedAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                                  className={`w-full text-left p-3 rounded-xl text-xs transition-all border cursor-pointer ${
                                    quizSubmitted
                                      ? isCorrect
                                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
                                        : isSelected
                                          ? 'bg-red-500/20 border-red-500 text-red-400'
                                          : 'bg-transparent border-slate-200 dark:border-white/10 opacity-50'
                                      : isSelected
                                        ? isDark 
                                          ? 'bg-purple-600/30 border-purple-400 text-white font-bold' 
                                          : 'bg-[#EBF4FF] border-[#1E75E8] text-[#1E75E8] font-bold'
                                        : 'bg-transparent border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5'
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {quizSubmitted && (
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 text-[11px] text-slate-500 dark:text-slate-400">
                              <strong className="text-emerald-500">Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Quiz Submit button */}
                      <div className="pt-2 flex items-center justify-between">
                        {quizScore !== null ? (
                          <div className="text-xs font-bold font-mono">
                            Score: <span className={quizScore >= 70 ? 'text-emerald-500' : 'text-amber-500'}>{quizScore}%</span>
                            {quizScore >= 70 ? ' — Passed! ✓' : ' — Retry to reach 70% passing threshold.'}
                          </div>
                        ) : <div />}

                        <button
                          onClick={handleQuizSubmit}
                          className="px-5 py-2 rounded-xl bg-[#1E75E8] text-white text-xs font-bold shadow-md hover:bg-[#1665D8] cursor-pointer"
                        >
                          Submit Answers
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-6 text-xs text-slate-400">
                      This lesson is pure instructional video. Click "Mark as Complete" to advance.
                    </div>
                  )}
                </div>
              )}

              {/* Tab 4: AmIzent AI Mentor Chat */}
              {activeTab === 'ai_assistant' && (
                <div className="space-y-4">
                  <div className="h-60 overflow-y-auto space-y-3 p-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#1E75E8] text-white'
                            : isDark ? 'bg-white/10 text-white' : 'bg-white border border-[#DCE7F2] text-[#122443]'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask AmIzent AI mentor about this lesson..."
                      value={userQuery}
                      onChange={(e) => setUserQuery(e.target.value)}
                      className={`flex-1 px-4 py-2.5 rounded-xl border text-xs outline-none ${
                        isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443]'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-[#1E75E8] text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Right Column: Course Curriculum Modules & Lessons Drawer */}
        <div className={`lg:col-span-4 rounded-3xl border p-5 space-y-5 ${
          isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
        }`}>
          <div>
            <span className="text-[10px] font-black uppercase text-[#1E75E8] tracking-wider">Course Syllabus</span>
            <h3 className="text-sm font-black tracking-tight">{course.title}</h3>
          </div>

          {/* Module List */}
          <div className="space-y-4">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>{mod.title}</span>
                  <span className="text-[10px] font-mono">{mod.duration}</span>
                </div>

                <div className="space-y-1">
                  {mod.lessons.map((les) => {
                    const isSelected = activeLesson.id === les.id;
                    const isDone = completedLessonIds.includes(les.id);

                    return (
                      <button
                        key={les.id}
                        onClick={() => setActiveLesson(les)}
                        className={`w-full text-left p-3 rounded-xl flex items-center justify-between text-xs transition-all cursor-pointer ${
                          isSelected
                            ? isDark
                              ? 'bg-purple-600/30 text-white border border-purple-400'
                              : 'bg-[#EBF4FF] text-[#1E75E8] border border-[#1E75E8]'
                            : isDone
                              ? 'bg-slate-50 dark:bg-white/5 text-emerald-500 hover:bg-slate-100'
                              : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate pr-2">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <Play className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
                          )}
                          <span className="truncate">{les.title}</span>
                        </div>

                        <span className="text-[10px] font-mono opacity-50 flex-shrink-0">
                          {les.durationMinutes}m
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
