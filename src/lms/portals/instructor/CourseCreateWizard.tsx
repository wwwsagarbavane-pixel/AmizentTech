import React, { useState } from 'react';
import { ArrowLeft, Save, Plus, Trash2, CheckCircle2, Sparkles, Video, FileText, HelpCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsStorage } from '../../storage/lmsStorage';
import { CourseFormat, CourseLevel, LmsCourse, LmsView } from '../../types/lmsTypes';

interface WizardProps {
  onBack: () => void;
  onSelectView: (view: LmsView) => void;
}

export const CourseCreateWizard: React.FC<WizardProps> = ({ onBack, onSelectView }) => {
  const { currentUser, theme } = useAuth();
  const isDark = theme === 'dark';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Generative AI & Architecture');
  const [format, setFormat] = useState<CourseFormat>('blended');
  const [level, setLevel] = useState<CourseLevel>('Enterprise');
  const [priceUSD, setPriceUSD] = useState(299);
  const [isFree, setIsFree] = useState(false);
  const [thumbnail, setThumbnail] = useState('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600');
  const [shortDesc, setShortDesc] = useState('');
  const [modules, setModules] = useState([
    {
      id: `mod_${Date.now()}`,
      title: 'Module 1: Production Core Fundamentals',
      duration: '3h 30m',
      lessons: [
        {
          id: `les_${Date.now()}_1`,
          title: '1.1 System Architecture & Telemetry Setup',
          durationMinutes: 25,
          type: 'video' as const,
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          summary: 'Introduction to foundational telemetry pipelines.'
        }
      ]
    }
  ]);
  const [successToast, setSuccessToast] = useState(false);

  const handleAddLesson = (moduleIndex: number) => {
    const updated = [...modules];
    updated[moduleIndex].lessons.push({
      id: `les_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
      title: 'New Enterprise Lesson',
      durationMinutes: 30,
      type: 'video',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      summary: 'Practical hands-on implementation guide.'
    });
    setModules(updated);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newCourse: LmsCourse = {
      id: `course_${Date.now()}`,
      title,
      category,
      format,
      level,
      instructorName: currentUser?.name || 'Dr. Elena Rostova',
      instructorTitle: 'AmIzent Lead Instructor',
      instructorAvatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
      durationHours: 12.0,
      totalLessons: modules.reduce((acc, m) => acc + m.lessons.length, 0),
      rating: 5.0,
      reviewsCount: 1,
      enrolledCount: 0,
      priceUSD: isFree ? 0 : priceUSD,
      isFree,
      thumbnail,
      badge: 'New Release',
      shortDescription: shortDesc || 'Enterprise certified training module designed for modern tech agility.',
      description: shortDesc,
      learningOutcomes: ['Enterprise architecture fluency', 'Practical sandbox competency', 'Skill IQ verification'],
      tags: ['AmIzent', 'Production', category.split(' ')[0]],
      skillIqGain: 75,
      modules
    };

    LmsStorage.addCourse(newCourse);
    setSuccessToast(true);
    setTimeout(() => {
      onSelectView('explore_courses');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer ${
            isDark ? 'text-slate-300 hover:text-white' : 'text-[#12457F] hover:text-[#1E75E8]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <span className="text-xs font-black uppercase text-[#1E75E8] tracking-wider">
          Curriculum Studio
        </span>
      </div>

      {successToast && (
        <div className="p-4 rounded-2xl bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 animate-in fade-in shadow-lg">
          <CheckCircle2 className="w-4 h-4" />
          <span>Course successfully published! Redirecting to catalog...</span>
        </div>
      )}

      {/* Main Creation Form */}
      <form onSubmit={handlePublish} className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
        isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-white border-[#DCE7F2] text-[#122443] shadow-sm'
      }`}>
        
        <div className="space-y-1">
          <h2 className="text-xl font-black tracking-tight">Create &amp; Publish Enterprise Program</h2>
          <p className="text-xs text-slate-400">Assemble video lessons, live modules, and interactive checkpoint quizzes.</p>
        </div>

        {/* Basic Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-400">Course Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Distributed Agent Swarms on AWS & Kubernetes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-3 rounded-xl border text-xs outline-none ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
              }`}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-400">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full p-3 rounded-xl border text-xs outline-none ${
                isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
              }`}
            >
              <option>Generative AI &amp; Architecture</option>
              <option>Enterprise ERP &amp; Cloud</option>
              <option>Cybersecurity &amp; Cloud</option>
              <option>Learning Tech &amp; Frontend</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-400">Learning Format</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as CourseFormat)}
              className={`w-full p-3 rounded-xl border text-xs outline-none ${
                isDark ? 'bg-[#181924] border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
              }`}
            >
              <option value="blended">Interactive Blended</option>
              <option value="self_paced">Self-Paced Learning</option>
              <option value="live">Live Instructor-Led</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-400">Pricing Model</label>
            <div className="flex gap-3 items-center">
              <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFree}
                  onChange={(e) => setIsFree(e.target.checked)}
                />
                <span>Free Open Access</span>
              </label>

              {!isFree && (
                <input
                  type="number"
                  min="0"
                  value={priceUSD}
                  onChange={(e) => setPriceUSD(Number(e.target.value))}
                  placeholder="Price in USD"
                  className={`w-32 p-2.5 rounded-xl border text-xs font-mono outline-none ${
                    isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2]'
                  }`}
                />
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-400">Thumbnail URL</label>
            <input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className={`w-full p-3 rounded-xl border text-xs outline-none ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
              }`}
            />
          </div>

          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-400">Short Summary</label>
            <textarea
              rows={2}
              placeholder="Provide a concise curriculum pitch for enterprise learners..."
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              className={`w-full p-3 rounded-xl border text-xs outline-none ${
                isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-[#F0F6FD] border-[#DCE7F2] text-[#122443]'
              }`}
            />
          </div>

        </div>

        {/* Modules & Lessons Builder */}
        <div className="pt-4 space-y-4 border-t border-slate-100/10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#1E75E8]">
              Curriculum Modules ({modules.length})
            </h3>
          </div>

          {modules.map((mod, mIdx) => (
            <div key={mod.id} className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 bg-slate-50/50 dark:bg-white/5">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={mod.title}
                  onChange={(e) => {
                    const updated = [...modules];
                    updated[mIdx].title = e.target.value;
                    setModules(updated);
                  }}
                  className="font-bold text-xs bg-transparent border-b border-dashed outline-none flex-1 mr-4"
                />
                <button
                  type="button"
                  onClick={() => handleAddLesson(mIdx)}
                  className="px-2.5 py-1 rounded-lg bg-[#1E75E8] text-white text-[10px] font-bold flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" /> Add Lesson
                </button>
              </div>

              <div className="space-y-2">
                {mod.lessons.map((les, lIdx) => (
                  <div key={les.id} className="p-3 rounded-xl bg-white dark:bg-[#181924] border border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 flex-1 mr-3">
                      <Video className="w-3.5 h-3.5 text-[#1E75E8]" />
                      <input
                        type="text"
                        value={les.title}
                        onChange={(e) => {
                          const updated = [...modules];
                          updated[mIdx].lessons[lIdx].title = e.target.value;
                          setModules(updated);
                        }}
                        className="bg-transparent text-xs font-medium outline-none w-full"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{les.durationMinutes} min</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Publish Action Button */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-[#1E75E8] hover:bg-[#1665D8] text-white text-xs font-black shadow-xl flex items-center gap-2 cursor-pointer transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Publish Program to LMS Catalog</span>
          </button>
        </div>

      </form>

    </div>
  );
};
