import React, { useState } from 'react';
import { NavPage } from '../../types';
import { solutionsData } from '../../data/solutionsData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { 
  Building2, 
  TrendingUp, 
  Cpu, 
  Workflow, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface SolutionsSectionProps {
  onNavigate: (page: NavPage) => void;
  onSelectSolution?: (solutionId: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onNavigate, onSelectSolution }) => {
  const [activeSolutionId, setActiveSolutionId] = useState(solutionsData[0].id);
  const activeSolution = solutionsData.find(s => s.id === activeSolutionId) || solutionsData[0];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#1B58A6]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#12457F]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#1B58A6]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#12457F]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#1B58A6]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#12457F]" />;
      default: return <Building2 className="w-5 h-5 text-[#1B58A6]" />;
    }
  };

  const handleLearnMore = (id: string) => {
    onSelectSolution?.(id);
    onNavigate('solutions');
  };

  return (
    <section className="py-24 bg-[#EAF1F8] border-b border-[#C8D7E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="Enterprise-Wide Alignment"
            title="Strategic Solutions for"
            highlightedText="Digital Transformation."
            subtitle="Architected to solve modern corporate capability bottlenecks—from AI readiness to workforce mobility and engineering modernization."
          />

          <Button
            variant="outline"
            size="md"
            withArrow
            onClick={() => onNavigate('solutions')}
            className="self-start md:self-end"
          >
            Explore All Solutions
          </Button>
        </div>

        {/* PAYROT-Inspired Editorial Solutions Display: Tab Selector on Left, Dynamic Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Solution Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {solutionsData.map((sol) => {
              const isActive = sol.id === activeSolutionId;
              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-white border-[#1B58A6] shadow-md -translate-x-1'
                      : 'bg-[#F8FBFF] border-[#C8D7E8] hover:border-[#8FAAC8] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-[#1B58A6]/10 border-[#1B58A6]/20' : 'bg-[#EAF1F8] border-[#C8D7E8]'}`}>
                      {renderIcon(sol.icon)}
                    </div>
                    <div>
                      <h4 className={`text-sm font-extrabold ${isActive ? 'text-[#12457F]' : 'text-[#14181F]'}`}>
                        {sol.title}
                      </h4>
                      <p className="text-[11px] text-[#4A607A] line-clamp-1">{sol.category}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#1B58A6] translate-x-1' : 'text-[#8FAAC8]'}`} />
                </div>
              );
            })}
          </div>

          {/* Active Solution Card Details (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C8D7E8]/70">
                <span className="text-xs font-bold text-[#1B58A6] uppercase tracking-wider">
                  {activeSolution.category}
                </span>
                <span className="text-xs font-semibold text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-full border border-[#C8D7E8]">
                  Enterprise Solution
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#12457F] mb-3">
                {activeSolution.title}
              </h3>

              <p className="text-sm md:text-base font-semibold text-[#1B58A6] mb-4">
                "{activeSolution.tagline}"
              </p>

              <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
                {activeSolution.description}
              </p>

              {/* Focus Areas Grid */}
              <div className="space-y-4 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                  Strategic Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.focusAreas.map((area, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-[#C8D7E8] text-xs text-[#4A607A] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B58A6] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Impact Box */}
              <div className="p-4 rounded-2xl bg-[#EAF1F8] border border-[#C8D7E8] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                  Measurable Business Outcomes
                </div>
                {activeSolution.businessImpact.map((impact, idx) => (
                  <div key={idx} className="text-xs text-[#12457F] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B58A6]"></span>
                    <span className="font-semibold">{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[#C8D7E8]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#4A607A]">
                Customizable for small teams and multi-thousand seat global enterprises.
              </div>
              <Button
                variant="primary"
                size="sm"
                withArrow
                onClick={() => handleLearnMore(activeSolution.id)}
              >
                Solution Deep Dive
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
