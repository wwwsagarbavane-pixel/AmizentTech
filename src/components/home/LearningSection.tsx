import React, { useState } from 'react';
import { NavPage } from '../../types';
import { learningPathsData } from '../../data/learningData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  BookOpen, 
  Code2, 
  Sparkles, 
  Clock, 
  Check, 
  ChevronRight
} from 'lucide-react';

interface LearningSectionProps {
  onNavigate: (page: NavPage) => void;
}

export const LearningSection: React.FC<LearningSectionProps> = ({ onNavigate }) => {
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);
  const activePath = learningPathsData[selectedPathIndex];

  const journeyStages = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Diagnostic skill baseline & gap assessment',
      icon: <Compass className="w-4 h-4 text-[#1B58A6]" />
    },
    {
      num: '02',
      title: 'Learn',
      desc: 'Expert-led micro-modules & architectural principles',
      icon: <BookOpen className="w-4 h-4 text-[#12457F]" />
    },
    {
      num: '03',
      title: 'Practice',
      desc: 'Interactive sandboxes, code labs & checkpoint gates',
      icon: <Code2 className="w-4 h-4 text-[#1B58A6]" />
    },
    {
      num: '04',
      title: 'Grow',
      desc: 'Production capstone execution & enterprise capability',
      icon: <Sparkles className="w-4 h-4 text-[#12457F]" />
    }
  ];

  return (
    <section className="py-24 bg-[#EAF1F8] border-b border-[#C8D7E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="The AmIzent Learning Framework"
            title="Build Skills That"
            highlightedText="Move You Forward."
            subtitle="Our structured learning tracks combine cognitive clarity with rigorous practice, taking learners from diagnostic assessment to production autonomy."
          />

          <Button
            variant="primary"
            size="md"
            withArrow
            onClick={() => onNavigate('learning')}
            className="self-start md:self-end"
          >
            Explore All Learning Paths
          </Button>
        </div>

        {/* 4-Stage Learning Journey Illustration: Discover → Learn → Practice → Grow */}
        <div className="mb-16 bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B58A6] bg-[#DCE7F2] px-3 py-1 rounded-full">
              The 4-Stage Capability Pipeline
            </span>
            <h3 className="text-xl font-extrabold text-[#12457F] mt-2">
              From Baseline Assessment to Verified Production Output
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {journeyStages.map((stage, idx) => (
              <div 
                key={stage.title} 
                className="relative bg-white border border-[#C8D7E8] rounded-2xl p-5 shadow-sm hover:border-[#1B58A6] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center">
                    {stage.icon}
                  </div>
                  <span className="text-sm font-extrabold text-[#8FAAC8]">{stage.num}</span>
                </div>
                <h4 className="text-base font-extrabold text-[#12457F] mb-1">{stage.title}</h4>
                <p className="text-xs text-[#4A607A] leading-relaxed">{stage.desc}</p>
                
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#8FAAC8]">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Visually Engaging Split Layout: Path Selector on Left, Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Path Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold text-[#8FAAC8] uppercase tracking-wider px-2 mb-1">
              Select Enterprise Track
            </div>

            {learningPathsData.map((path, idx) => {
              const isSelected = selectedPathIndex === idx;
              return (
                <div
                  key={path.id}
                  onClick={() => setSelectedPathIndex(idx)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-[#1B58A6] shadow-md -translate-y-0.5'
                      : 'bg-[#F8FBFF] border-[#C8D7E8] hover:border-[#8FAAC8] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-[#1B58A6] uppercase tracking-wider">
                      {path.category}
                    </span>
                    <span className="text-[10px] font-semibold text-[#4A607A] bg-[#DCE7F2] px-2 py-0.5 rounded">
                      {path.level}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold ${isSelected ? 'text-[#12457F]' : 'text-[#14181F]'}`}>
                    {path.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-[#4A607A]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#1B58A6]" />
                      {path.durationWeeks}
                    </span>
                    <span>•</span>
                    <span>{path.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Path Deep Dive Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C8D7E8]/70 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#1B58A6] uppercase tracking-wider">
                  {activePath.category}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#12457F] mt-0.5">
                  {activePath.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#DCE7F2] text-xs font-bold text-[#12457F] border border-[#C8D7E8]">
                {activePath.level}
              </span>
            </div>

            <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
              {activePath.description}
            </p>

            {/* Stages Progression */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                Curriculum Progression Roadmap
              </div>
              {activePath.learningStages.map((stg) => (
                <div key={stg.stage} className="p-3 rounded-xl bg-white border border-[#C8D7E8] flex items-start gap-3">
                  <div className="px-2 py-1 rounded-md bg-[#DCE7F2] text-[#12457F] text-xs font-extrabold shrink-0 mt-0.5">
                    {stg.stage}
                  </div>
                  <div className="text-xs text-[#4A607A] leading-relaxed">
                    {stg.details}
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Grid */}
            <div className="pt-4 border-t border-[#C8D7E8]/70">
              <div className="text-xs font-bold uppercase tracking-wider text-[#12457F] mb-3">
                Core Toolchain & Stacks
              </div>
              <div className="flex flex-wrap gap-2">
                {activePath.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-semibold text-[#12457F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-4 border-t border-[#C8D7E8]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#4A607A]">
                Structured for enterprise cohorts & individual professionals
              </div>
              <Button
                variant="primary"
                size="sm"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Inquire About This Track
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
