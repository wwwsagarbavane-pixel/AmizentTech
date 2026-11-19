import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  HeartHandshake, 
  Rocket, 
  Code, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const WhyAmizentSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#EAF1F8] border-b border-[#C8D7E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            badge="The AmIzent Difference"
            title="A Friend in Your"
            highlightedText="Technology Growth Journey."
            subtitle="We reject cookie-cutter catalogs and passive video viewing. Here is why enterprise teams trust AmIzent as their friendly upskilling partner."
            align="center"
          />
        </div>

        {/* Visually Distinctive 4-Pillar Layout (Asymmetric, not repetitive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Pillar 1: Human-Centric Approach (Large Featured Block - 7 cols) */}
          <div className="md:col-span-7 bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1B58A6]/10 text-[#1B58A6] flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-full">
                  Pillar 01
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#12457F] mb-3">
                Human-Centric Approach
              </h3>

              <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
                We design learning around real human beings. Technology can feel intimidating when presented through rigid, jargon-dense textbooks. AmIzent breaks down complex concepts with patient, empathetic mentorship that builds genuine confidence and psychological safety.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#C8D7E8]/70">
              <div className="flex items-center gap-2 text-xs font-bold text-[#12457F]">
                <CheckCircle2 className="w-4 h-4 text-[#1B58A6]" />
                Empathetic instructors & mentors
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#12457F]">
                <CheckCircle2 className="w-4 h-4 text-[#1B58A6]" />
                Zero judgment skill assessments
              </div>
            </div>
          </div>

          {/* Pillar 2: Future-Ready Skills (5 cols) */}
          <div className="md:col-span-5 bg-white border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#12457F]/10 text-[#12457F] flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-full">
                  Pillar 02
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#12457F] mb-3">
                Future-Ready Skills
              </h3>

              <p className="text-sm text-[#4A607A] leading-relaxed">
                We continuously refresh our curriculums to match what top enterprise engineering organizations require today: agentic AI, Kubernetes, microservices, cloud security, and distributed database design.
              </p>
            </div>

            <div className="pt-6 border-t border-[#C8D7E8]/70 mt-6 flex items-center gap-2 text-xs font-bold text-[#1B58A6]">
              <Sparkles className="w-4 h-4" />
              Aligned with production standards
            </div>
          </div>

          {/* Pillar 3: Practical Learning (5 cols) */}
          <div className="md:col-span-5 bg-white border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1B58A6]/10 text-[#1B58A6] flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-full">
                  Pillar 03
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#12457F] mb-3">
                Tactile Practical Learning
              </h3>

              <p className="text-sm text-[#4A607A] leading-relaxed">
                No slide decks without code. Every theoretical principle is immediately exercised inside isolated sandboxes, live code repositories, and real architecture simulations.
              </p>
            </div>

            <div className="pt-6 border-t border-[#C8D7E8]/70 mt-6 flex items-center gap-2 text-xs font-bold text-[#12457F]">
              <CheckCircle2 className="w-4 h-4 text-[#1B58A6]" />
              Production-grade capstone projects
            </div>
          </div>

          {/* Pillar 4: Continuous Growth (7 cols) */}
          <div className="md:col-span-7 bg-[#F8FBFF] border border-[#C8D7E8] hover:border-[#8FAAC8] rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#12457F]/10 text-[#12457F] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#12457F] bg-[#DCE7F2] px-3 py-1 rounded-full">
                  Pillar 04
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#12457F] mb-3">
                Continuous Measurable Growth
              </h3>

              <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
                Upskilling is not a one-time event; it is an organizational capability rhythm. We provide ongoing telemetry, milestone tracking, and skill refreshers that keep teams synchronized as technology evolves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#C8D7E8]/70">
              <div className="flex items-center gap-2 text-xs font-bold text-[#12457F]">
                <ShieldCheck className="w-4 h-4 text-[#1B58A6]" />
                Verifiable capability benchmarks
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#12457F]">
                <TrendingUp className="w-4 h-4 text-[#1B58A6]" />
                Longitudinal retention telemetry
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
