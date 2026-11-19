import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Search, 
  MapPin, 
  GraduationCap, 
  TrendingUp, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ApproachProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      desc: "Understand the learner's or organization's needs, baseline proficiencies, and immediate operational hurdles.",
      icon: <Search className="w-5 h-5 text-[#1B58A6]" />,
      actionItem: 'Diagnostic skill evaluation & team discovery interview'
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'Identify relevant skills and learning priorities, mapping role competencies directly to project roadmaps.',
      icon: <MapPin className="w-5 h-5 text-[#12457F]" />,
      actionItem: 'Custom cohort roadmap & prerequisite alignment'
    },
    {
      step: '03',
      title: 'Upskill',
      desc: 'Deliver structured learning and development experiences with mentor reviews, interactive sandboxes, and code checkpoints.',
      icon: <GraduationCap className="w-5 h-5 text-[#1B58A6]" />,
      actionItem: 'Hands-on sprint cycles & continuous review gates'
    },
    {
      step: '04',
      title: 'Evolve',
      desc: 'Measure progress and continuously improve, providing telemetry on capability retention and production readiness.',
      icon: <TrendingUp className="w-5 h-5 text-[#12457F]" />,
      actionItem: 'Production capstone defense & long-term retention tracking'
    }
  ];

  return (
    <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            badge="The Engagement Model"
            title="From Learning Goals to"
            highlightedText="Real-World Growth."
            subtitle="A transparent, repeatable four-stage methodology designed to ensure predictable capability delivery across teams."
            align="center"
          />
        </div>

        {/* Elegant Horizontal Process Diagram with Connected Elements */}
        <div className="relative">
          {/* Connector Line across the top of cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#C8D7E8] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#1B58A6] rounded-2xl p-6 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Number & Icon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#C8D7E8] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner-soft">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black text-[#8FAAC8] group-hover:text-[#1B58A6] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#12457F] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#4A607A] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-[#C8D7E8]/60">
                  <div className="text-[11px] font-semibold text-[#12457F] bg-[#EAF1F8] p-2.5 rounded-lg border border-[#C8D7E8]">
                    <span className="text-[#1B58A6] font-bold block mb-0.5">Key Output:</span>
                    {item.actionItem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
