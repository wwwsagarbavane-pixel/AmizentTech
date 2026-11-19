import React from 'react';
import { Sparkles, Compass, Lightbulb, Users } from 'lucide-react';

export const TrustIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#DCE7F2] border-b border-[#C8D7E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Statement in PAYROT Editorial Style */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
            <Sparkles className="w-3.5 h-3.5 text-[#1B58A6]" />
            <span>Guiding Principle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#12457F] tracking-tight leading-tight">
            Technology Evolves.{' '}
            <span className="text-[#1B58A6] block sm:inline">Your Skills Should Too.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#4A607A] leading-relaxed max-w-2xl mx-auto">
            AmIzent Tech Services brings people, learning, and technology together to help businesses and individuals move forward with confidence.
          </p>
        </div>

        {/* Visual Brand Pillars Divider */}
        <div className="mt-14 pt-10 border-t border-[#C8D7E8] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm hover:border-[#8FAAC8] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] text-[#1B58A6] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#12457F] mb-1.5">Human-Centric Learning</h3>
            <p className="text-sm text-[#4A607A] leading-relaxed">
              Designed around how human minds actually comprehend and retain modern software architectures and technical tools.
            </p>
          </div>

          <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm hover:border-[#8FAAC8] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] text-[#12457F] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#12457F] mb-1.5">Structured Trajectories</h3>
            <p className="text-sm text-[#4A607A] leading-relaxed">
              Step-by-step role blueprints that eliminate ambiguity, taking learners from diagnostic baseline to verified independence.
            </p>
          </div>

          <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-2xl p-6 shadow-sm hover:border-[#8FAAC8] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] text-[#1B58A6] flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#12457F] mb-1.5">Future-Ready Rigor</h3>
            <p className="text-sm text-[#4A607A] leading-relaxed">
              Curriculums aligned to real-world cloud environments, production AI standards, and enterprise engineering best practices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
