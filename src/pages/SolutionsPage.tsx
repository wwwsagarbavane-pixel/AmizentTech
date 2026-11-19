import React, { useState } from 'react';
import { NavPage } from '../types';
import { solutionsData } from '../data/solutionsData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { 
  Building2, 
  TrendingUp, 
  Cpu, 
  Workflow, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: NavPage) => void;
  selectedSolutionId?: string;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, selectedSolutionId }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#1B58A6]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#12457F]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#1B58A6]" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-[#12457F]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#1B58A6]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#12457F]" />;
      default: return <Building2 className="w-6 h-6 text-[#1B58A6]" />;
    }
  };

  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Solutions Hero (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <Workflow className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Enterprise Modernization Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Aligning Human Capability{' '}
              <span className="text-[#1B58A6] block mt-1">With Modern Tech Stacks.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              Discover strategic capability solutions designed to eliminate technical debt, cultivate internal engineering mobility, and establish operational AI readiness.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Schedule Solution Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Deep Dives (Secondary Background: #DCE7F2) */}
      <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {solutionsData.map((sol, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-8 sm:p-12 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Solution Narrative (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center">
                          {renderIcon(sol.icon)}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#1B58A6] uppercase tracking-wider block">
                            {sol.category}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12457F]">
                            {sol.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base font-semibold text-[#1B58A6]">
                        "{sol.tagline}"
                      </p>

                      <p className="text-sm md:text-base text-[#4A607A] leading-relaxed">
                        {sol.description}
                      </p>

                      <div className="pt-4 space-y-2.5">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                          Core Solution Competencies
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {sol.focusAreas.map((area, aIdx) => (
                            <div key={aIdx} className="p-3 rounded-xl bg-white border border-[#C8D7E8] text-xs text-[#14181F] flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1B58A6] shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Business Outcomes & Action (5 cols) */}
                    <div className="lg:col-span-5 bg-[#EAF1F8] rounded-2xl p-6 sm:p-8 border border-[#C8D7E8] space-y-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#12457F] border-b border-[#C8D7E8] pb-3">
                        Expected Enterprise ROI
                      </div>

                      <div className="space-y-3">
                        {sol.businessImpact.map((imp, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#12457F] font-semibold">
                            <span className="w-2 h-2 rounded-full bg-[#1B58A6] shrink-0 mt-1.5" />
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#C8D7E8]">
                        <Button
                          variant="primary"
                          size="md"
                          withArrow
                          className="w-full"
                          onClick={() => onNavigate('contact')}
                        >
                          Request Solution Brief
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
