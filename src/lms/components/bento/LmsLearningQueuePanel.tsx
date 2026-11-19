import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, BookOpen, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface LearningTrackItem {
  id: string;
  name: string;
  code: string;
  category: string;
  status: 'In Progress' | 'Completed' | 'Enrolled';
  progress: number;
  modules: {
    code: string;
    title: string;
    hours: string;
    status: 'DONE' | 'IN REVIEW' | 'IN PROGRESS';
  }[];
}

const LEARNING_TRACKS: LearningTrackItem[] = [
  {
    id: 't1',
    name: 'Enterprise Cloud & AI Track',
    code: '№AI-52561',
    category: 'Cloud Architecture',
    status: 'In Progress',
    progress: 72,
    modules: [
      { code: '• M1', title: 'Cloud Infrastructure & Terraform', hours: '120h', status: 'DONE' },
      { code: '• M2', title: 'Autonomous LLM Agents & LangGraph', hours: '320h', status: 'DONE' },
      { code: '• M3', title: 'Multi-Agent Orchestration Sandbox', hours: '54h', status: 'IN REVIEW' },
    ]
  },
  {
    id: 't2',
    name: 'Autonomous Agentic Systems',
    code: '№AG-98645',
    category: 'Artificial Intelligence',
    status: 'In Progress',
    progress: 34,
    modules: [
      { code: '• M1', title: 'Decision Boundaries & Function Calling', hours: '244h', status: 'DONE' },
      { code: '• M2', title: 'Vector Embeddings & Hybrid RAG', hours: '20h', status: 'DONE' },
    ]
  },
  {
    id: 't3',
    name: 'SAP S/4HANA Clean-Core Cloud',
    code: '№SAP-57215',
    category: 'Enterprise ERP',
    status: 'Completed',
    progress: 88,
    modules: [
      { code: '• M1', title: 'Applexus Clean-Core Modernization', hours: '80h', status: 'DONE' }
    ]
  },
  {
    id: 't4',
    name: 'DevSecOps & Zero Trust Security',
    code: '№SEC-28941',
    category: 'Cybersecurity',
    status: 'Enrolled',
    progress: 15,
    modules: [
      { code: '• M1', title: 'Automated Container Security Audit', hours: '45h', status: 'IN PROGRESS' }
    ]
  }
];

export const LmsLearningQueuePanel: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'in_progress' | 'completed'>('all');
  const [expandedId, setExpandedId] = useState<string>('t1');

  const filteredItems = LEARNING_TRACKS.filter(item => {
    if (filter === 'in_progress') return item.status === 'In Progress';
    if (filter === 'completed') return item.status === 'Completed';
    return true;
  });

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(20,50,90,0.06)] border border-slate-100/90 select-none space-y-4">
      
      {/* Header Row: Title + Search & Pin circular icons (Exact match to media_1795001007781_27586383.png) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100/80">
        <h3 className="text-sm font-bold text-[#1E293B] tracking-tight">
          Learning operations
        </h3>
        <div className="flex items-center gap-1.5">
          <button 
            title="Search learning tracks"
            className="w-7 h-7 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-[#2B62EE] transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
          <button 
            title="Curriculum milestones"
            className="w-7 h-7 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-[#2B62EE] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Segmented Filter Pills: All | • Available | • Employed (Exact match to media_1795001007781_27586383.png) */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full transition-all ${
            filter === 'all'
              ? 'bg-[#0B1B2B] text-white shadow-xs'
              : 'bg-[#F2F6FB] text-slate-600 hover:text-[#0B1B2B]'
          }`}
        >
          All
        </button>
        
        <button
          onClick={() => setFilter('in_progress')}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
            filter === 'in_progress'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-[#F2F6FB] text-slate-600 hover:text-emerald-700'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Available</span>
        </button>

        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
            filter === 'completed'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-[#F2F6FB] text-slate-600 hover:text-rose-700'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span>Employed</span>
        </button>
      </div>

      {/* Accordion Cards List (Exact match to media_1795001007781_27586383.png) */}
      <div className="space-y-3 pt-1">
        {filteredItems.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 ${
                isExpanded 
                  ? 'bg-gradient-to-b from-[#F8FAFD] to-white border-blue-100 shadow-sm' 
                  : 'bg-white border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                className="p-3.5 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2B62EE]">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0B1B2B] flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono font-normal">{item.code}</span>
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item.status === 'Completed' ? 'Completed' : 'Available'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Expanded Card Content */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 pt-1 space-y-3 border-t border-slate-100/60 text-xs">
                  
                  {/* Track Completion Bar (styled like Battery life from media_1795001007781_27586383.png) */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                      <span>Track progress</span>
                      <span className="text-[#0B1B2B] font-black">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Modules Micro-Table (Exact match to media_1795001007781_27586383.png) */}
                  <div className="space-y-1.5 pt-1">
                    {item.modules.map((m, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between text-[11px] py-1 border-b border-slate-50 last:border-none"
                      >
                        <div className="flex items-center gap-1.5 font-bold text-slate-700 max-w-[200px] truncate">
                          <span className="text-blue-600">{m.code}</span>
                          <span className="truncate">{m.title}</span>
                        </div>

                        <div className="text-slate-400 font-medium whitespace-nowrap">
                          {m.hours}
                        </div>

                        <div>
                          {m.status === 'DONE' ? (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200/60 font-black text-[9px] uppercase">
                              DONE
                            </span>
                          ) : m.status === 'IN REVIEW' ? (
                            <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-600 border border-rose-200/60 font-black text-[9px] uppercase">
                              ERROR
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-600 border border-amber-200/60 font-black text-[9px] uppercase">
                              IN PROGRESS
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
