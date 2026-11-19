import React, { useState } from 'react';
import { NavPage } from '../../types';
import { industriesData } from '../../data/industriesData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { 
  Terminal, 
  Landmark, 
  Activity, 
  Factory, 
  GraduationCap, 
  Briefcase, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface IndustriesSectionProps {
  onNavigate: (page: NavPage) => void;
  onSelectIndustry?: (industryId: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onNavigate, onSelectIndustry }) => {
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0].id);
  const activeIndustry = industriesData.find(i => i.id === activeIndustryId) || industriesData[0];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#1B58A6]" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-[#12457F]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#1B58A6]" />;
      case 'Factory': return <Factory className="w-5 h-5 text-[#12457F]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#1B58A6]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#12457F]" />;
      default: return <Terminal className="w-5 h-5 text-[#1B58A6]" />;
    }
  };

  const handleLearnMore = (id: string) => {
    onSelectIndustry?.(id);
    onNavigate('industries');
  };

  return (
    <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            badge="Target Industry Verticals"
            title="Tailored Capability for"
            highlightedText="Complex Sectors."
            subtitle="Explore how our technology upskilling frameworks address specific domain constraints, regulatory compliance, and modernization requirements."
          />

          <Button
            variant="outline"
            size="md"
            withArrow
            onClick={() => onNavigate('industries')}
            className="self-start md:self-end"
          >
            Explore All Verticals
          </Button>
        </div>

        {/* Notice: Proposed target sectors */}
        <div className="mb-8 p-3 rounded-xl bg-[#F8FBFF] border border-[#C8D7E8] text-xs text-[#4A607A] flex items-center gap-2 max-w-2xl">
          <AlertCircle className="w-4 h-4 text-[#1B58A6] shrink-0" />
          <span>
            <strong>Editorial Context:</strong> Representative target sectors tailored for enterprise workforce readiness.
          </span>
        </div>

        {/* Modern Horizontal Interactive Layout */}
        <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* Top Horizontal Industry Selector Tabs */}
          <div className="flex overflow-x-auto pb-4 gap-2 border-b border-[#C8D7E8]/70 no-scrollbar">
            {industriesData.map((ind) => {
              const isSelected = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#12457F] text-white shadow-sm'
                      : 'bg-white text-[#4A607A] border border-[#C8D7E8] hover:border-[#8FAAC8] hover:text-[#12457F]'
                  }`}
                >
                  {renderIcon(ind.icon)}
                  <span>{ind.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep View */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Overview (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
                <Sparkles className="w-3.5 h-3.5 text-[#1B58A6]" />
                <span>{activeIndustry.industryTag}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#12457F]">
                {activeIndustry.title}
              </h3>

              <div className="p-4 rounded-2xl bg-white border border-[#C8D7E8] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                  Industry Challenges We Solve
                </div>
                {activeIndustry.challenges.map((c, idx) => (
                  <div key={idx} className="text-xs text-[#4A607A] flex items-start gap-2 leading-relaxed">
                    <span className="text-[#1B58A6] font-bold">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="sm"
                withArrow
                onClick={() => handleLearnMore(activeIndustry.id)}
                className="mt-2"
              >
                View Detailed Industry Matrix
              </Button>
            </div>

            {/* Right: Opportunities & Proposed Solutions (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#C8D7E8] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1B58A6]">
                  Modernization Opportunities
                </div>
                {activeIndustry.opportunities.map((opp, idx) => (
                  <div key={idx} className="text-xs text-[#14181F] p-2.5 rounded-lg bg-[#EAF1F8] border border-[#C8D7E8]/60">
                    {opp}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#C8D7E8] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#12457F]">
                  Proposed Upskilling Solutions
                </div>
                {activeIndustry.proposedSolutions.map((sol, idx) => (
                  <div key={idx} className="text-xs text-[#12457F] font-semibold p-2.5 rounded-lg bg-[#DCE7F2]/60 border border-[#C8D7E8]">
                    {sol}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
