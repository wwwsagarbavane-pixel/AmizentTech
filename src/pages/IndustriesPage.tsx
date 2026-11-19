import React from 'react';
import { NavPage } from '../types';
import { industriesData } from '../data/industriesData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { 
  Terminal, 
  Landmark, 
  Activity, 
  Factory, 
  GraduationCap, 
  Briefcase, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: NavPage) => void;
  selectedIndustryId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, selectedIndustryId }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#1B58A6]" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-[#12457F]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#1B58A6]" />;
      case 'Factory': return <Factory className="w-6 h-6 text-[#12457F]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#1B58A6]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#12457F]" />;
      default: return <Terminal className="w-6 h-6 text-[#1B58A6]" />;
    }
  };

  return (
    <div className="w-full pt-28 pb-20">
      
      {/* Industries Hero (Primary Background: #EAF1F8) */}
      <section className="py-16 md:py-24 bg-[#EAF1F8] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE7F2] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <Briefcase className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Domain-Specific Capability</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#12457F] tracking-tight leading-[1.1]">
              Industry-Aligned{' '}
              <span className="text-[#1B58A6] block mt-1">Technology Enablement.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A607A] leading-relaxed">
              Every vertical carries unique regulatory compliance frameworks, legacy dependencies, and architectural requirements. We adapt our upskilling tracks to your domain realities.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Consult on Your Industry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Detailed Cards (Secondary Background: #DCE7F2) */}
      <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 p-4 rounded-2xl bg-[#F8FBFF] border border-[#C8D7E8] text-xs text-[#4A607A] flex items-center gap-2 max-w-3xl">
            <AlertCircle className="w-4 h-4 text-[#1B58A6] shrink-0" />
            <span>
              <strong>Editorial Guidance:</strong> The following verticals reflect strategic enterprise target sectors and proposed capability roadmaps.
            </span>
          </div>

          <div className="space-y-12">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-8 sm:p-10 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C8D7E8]/70 pb-5 mb-8">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF1F8] border border-[#C8D7E8] flex items-center justify-center">
                      {renderIcon(ind.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1B58A6] uppercase tracking-wider block">
                        {ind.industryTag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12457F]">
                        {ind.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#12457F] bg-[#DCE7F2] px-3.5 py-1.5 rounded-full border border-[#C8D7E8]">
                    {ind.badge}
                  </span>
                </div>

                {/* 3-Column Grid for Challenges, Opportunities, Proposed Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Challenges */}
                  <div className="bg-white rounded-2xl p-6 border border-[#C8D7E8] space-y-3">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-md inline-block">
                      Relevant Challenges
                    </div>
                    <div className="space-y-2 pt-2">
                      {ind.challenges.map((ch, idx) => (
                        <div key={idx} className="text-xs text-[#4A607A] flex items-start gap-2 leading-relaxed">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Opportunities */}
                  <div className="bg-white rounded-2xl p-6 border border-[#C8D7E8] space-y-3">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#1B58A6] bg-[#EAF1F8] px-3 py-1 rounded-md inline-block">
                      Technology Opportunities
                    </div>
                    <div className="space-y-2 pt-2">
                      {ind.opportunities.map((opp, idx) => (
                        <div key={idx} className="text-xs text-[#14181F] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#1B58A6] font-bold">•</span>
                          <span>{opp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proposed Solutions & CTA */}
                  <div className="bg-[#EAF1F8] rounded-2xl p-6 border border-[#C8D7E8] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-md inline-block mb-3">
                        Proposed Upskilling Solutions
                      </div>
                      <div className="space-y-2.5">
                        {ind.proposedSolutions.map((sol, idx) => (
                          <div key={idx} className="text-xs text-[#12457F] font-bold flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1B58A6] shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#C8D7E8]">
                      <Button
                        variant="primary"
                        size="sm"
                        withArrow
                        className="w-full"
                        onClick={() => onNavigate('contact')}
                      >
                        Inquire for {ind.title.split('&')[0].trim()}
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
