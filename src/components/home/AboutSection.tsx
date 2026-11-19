import React from 'react';
import { NavPage } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { CheckCircle2, ArrowRight, Target, HeartHandshake, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#EAF1F8] border-b border-[#C8D7E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual: PAYROT Asymmetric Architectural Composition (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="bg-[#DCE7F2] rounded-3xl p-6 md:p-8 border border-[#C8D7E8] relative">
              {/* Architectural node diagram card */}
              <div className="bg-[#F8FBFF] rounded-2xl p-6 border border-[#C8D7E8] shadow-soft space-y-5">
                <div className="flex items-center justify-between border-b border-[#C8D7E8]/70 pb-3">
                  <span className="text-xs font-bold text-[#12457F] uppercase tracking-wider">
                    Our Partnership Philosophy
                  </span>
                  <span className="text-[11px] font-bold text-[#1B58A6] bg-[#DCE7F2] px-2 py-0.5 rounded">
                    Friendly Agent
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#C8D7E8]">
                    <div className="p-1.5 rounded-lg bg-[#1B58A6]/10 text-[#1B58A6] shrink-0 mt-0.5">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#12457F]">Empathetic Guidance</div>
                      <div className="text-[11px] text-[#4A607A]">We treat every learner with patience, respect, and accessible instruction.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#C8D7E8]">
                    <div className="p-1.5 rounded-lg bg-[#12457F]/10 text-[#12457F] shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#12457F]">Outcome-Driven Tracks</div>
                      <div className="text-[11px] text-[#4A607A]">Every lesson ties directly to production delivery and enterprise capability.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#C8D7E8]">
                    <div className="p-1.5 rounded-lg bg-[#1B58A6]/10 text-[#1B58A6] shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#12457F]">Enterprise-Grade Integrity</div>
                      <div className="text-[11px] text-[#4A607A]">Transparent, verifiable curriculum free of vanity hype.</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#EAF1F8] rounded-xl border border-[#C8D7E8] text-center">
                  <span className="text-xs font-extrabold text-[#12457F]">
                    Domain: AmizentTech.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Editorial Narrative & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              badge="About AmIzent"
              title="Your Partner in the"
              highlightedText="Journey of Growth."
              subtitle="AmIzent Tech Services is positioned as a friendly technology and upskilling partner, focused on helping people and organizations navigate digital transformation and develop relevant skills."
            />

            <div className="space-y-4 text-[#4A607A] text-sm md:text-base leading-relaxed">
              <p>
                In a technology climate dominated by rapid paradigm shifts—from cloud-native infrastructure to autonomous AI agents—many professionals and enterprises feel overwhelmed. AmIzent was founded on a simple conviction: technology should empower humans, not alienate them.
              </p>
              <p>
                We serve as your knowledgeable, supportive guide—your "friendly agent to upskill"—translating intimidating architectural concepts into actionable, bite-sized proficiencies. Whether guiding an enterprise engineering team through a cloud migration or equipping non-technical staff with AI literacy, we walk beside you every step of the journey.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => onNavigate('about')}
              >
                Discover AmIzent
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
