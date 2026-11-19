import React, { useState } from 'react';
import { NavPage } from '../types';
import { learningPathsData } from '../data/learningData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { AILearningMockup } from '../components/home/AILearningMockup';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
  Code2, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Cpu,
  Layers,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface LearningPageProps {
  onNavigate: (page: NavPage) => void;
}

export const LearningPage: React.FC<LearningPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedPathId, setExpandedPathId] = useState<string | null>(learningPathsData[0].id);

  const categories = ['All', 'Artificial Intelligence', 'Cloud & Infrastructure', 'Software Engineering', 'Data & Analytics', 'Security & Compliance', 'Leadership & Strategy'];

  const filteredPaths = selectedCategory === 'All'
    ? learningPathsData
    : learningPathsData.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Learning Hero (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <Compass className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Learning & Upskilling Framework</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Architected for Depth.{' '}
              <span className="text-[#1B58A6] block mt-1">Practiced for Mastery.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              Explore our structured technology curriculums. Every path integrates diagnostic baselines, interactive video lessons, real code sandboxes, and production capstone milestones.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Inquire on Enterprise Cohorts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Stage Capability Pipeline (Secondary Background: #DCE7F2) */}
      <section className="py-20 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B58A6] bg-[#EAF1F8] px-3 py-1 rounded-full border border-[#C8D7E8]">
              Proven Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-[#12457F] mt-3">
              The 4-Stage Upskilling Cycle
            </h2>
            <p className="text-sm text-[#4A607A] mt-2">
              Every learner progresses through a systematic cadence ensuring retention and autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-black text-[#8FAAC8] mb-2">01</div>
              <h3 className="text-lg font-bold text-[#12457F] mb-1">Discover</h3>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                Objective skill assessments uncover exact competency baselines and highlight blind spots without pressure.
              </p>
            </div>

            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-black text-[#1B58A6] mb-2">02</div>
              <h3 className="text-lg font-bold text-[#12457F] mb-1">Learn</h3>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                Expert-led modular sessions and architectural breakdowns distill complex concepts into clear visual models.
              </p>
            </div>

            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-black text-[#12457F] mb-2">03</div>
              <h3 className="text-lg font-bold text-[#12457F] mb-1">Practice</h3>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                Hands-on sandboxes and code checkpoint challenges allow immediate tactile application of learned patterns.
              </p>
            </div>

            <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-black text-[#1B58A6] mb-2">04</div>
              <h3 className="text-lg font-bold text-[#12457F] mb-1">Grow</h3>
              <p className="text-xs text-[#4A607A] leading-relaxed">
                Production-grade capstones and verified capability metrics prove readiness for high-stakes enterprise projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clixie Mockup Showcase (Primary Background: #EAF1F8) */}
      <AILearningMockup />

      {/* Detailed Learning Pathways Catalog (Secondary Background: #DCE7F2) */}
      <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B58A6]">
                Curriculum Catalog
              </span>
              <h2 className="text-3xl font-extrabold text-[#12457F] mt-1">
                Explore Enterprise Skill Tracks
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#12457F] text-white shadow-sm'
                      : 'bg-[#F8FBFF] text-[#4A607A] border border-[#C8D7E8] hover:border-[#1B58A6] hover:text-[#12457F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredPaths.map((path) => {
              const isExpanded = expandedPathId === path.id;
              return (
                <div
                  key={path.id}
                  className="bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-6 sm:p-8 shadow-sm transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1B58A6] uppercase tracking-wider">
                          {path.category}
                        </span>
                        <span className="text-[10px] font-semibold text-[#4A607A] bg-[#DCE7F2] px-2 py-0.5 rounded">
                          {path.level}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#12457F]">
                        {path.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#4A607A] flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#1B58A6]" />
                        {path.durationWeeks}
                      </span>
                      <button
                        onClick={() => setExpandedPathId(isExpanded ? null : path.id)}
                        className="px-4 py-2 rounded-xl bg-white border border-[#C8D7E8] text-xs font-bold text-[#12457F] hover:bg-[#EAF1F8] transition-colors flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Syllabus'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-[#4A607A] mt-3 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Expanded Syllabus Breakdown */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#C8D7E8]/70 space-y-6 animate-in fade-in duration-200">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#12457F] mb-3">
                          Stage-by-Stage Curriculum Breakdown
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {path.learningStages.map((stg) => (
                            <div key={stg.stage} className="p-3.5 rounded-xl bg-white border border-[#C8D7E8]">
                              <span className="text-[11px] font-extrabold text-[#1B58A6] block mb-1">
                                {stg.stage} Phase
                              </span>
                              <p className="text-xs text-[#4A607A] leading-relaxed">
                                {stg.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#12457F] mb-2">
                            Key Technologies
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {path.technologies.map((t) => (
                              <span key={t} className="px-2.5 py-1 rounded-md bg-[#EAF1F8] text-xs font-semibold text-[#12457F] border border-[#C8D7E8]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button
                          variant="primary"
                          size="sm"
                          withArrow
                          onClick={() => onNavigate('contact')}
                        >
                          Enroll Cohort
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
