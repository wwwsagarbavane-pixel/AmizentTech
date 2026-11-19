import React from 'react';
import { NavPage } from '../../types';
import { Button } from '../common/Button';
import { Sparkles, ArrowRight, MessageSquare, Compass, ShieldCheck } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigate: (page: NavPage) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#DCE7F2] border-b border-[#C8D7E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Architectural Conversion Card in PAYROT Style */}
        <div className="bg-[#F8FBFF] border border-[#C8D7E8] rounded-3xl p-8 sm:p-12 md:p-16 shadow-premium relative overflow-hidden">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B58A6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8FAAC8]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-[#C8D7E8] text-xs font-bold text-[#12457F]">
              <Sparkles className="w-3.5 h-3.5 text-[#1B58A6]" />
              <span>Let's Build the Future Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12457F] tracking-tight leading-tight">
              Ready to Take the{' '}
              <span className="text-[#1B58A6]">Next Step?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#4A607A] leading-relaxed max-w-2xl mx-auto">
              Let's build the skills and capabilities that move your future forward. Partner with AmIzent Tech Services for tailored upskilling and technology enablement.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto shadow-md"
              >
                Start a Conversation
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Quick Reassurance */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#4A607A]">
              <span className="flex items-center gap-1.5 font-semibold text-[#12457F]">
                <ShieldCheck className="w-4 h-4 text-[#1B58A6]" />
                Zero Obligation Discovery Call
              </span>
              <span>•</span>
              <span className="font-semibold text-[#12457F]">
                Tailored Enterprise Roadmaps
              </span>
              <span>•</span>
              <span className="font-semibold text-[#12457F]">
                AmizentTech.com
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
