
import React from 'react';
import { NavPage } from '../../types';
import { ChevronRight } from 'lucide-react';

interface PayrotWhoWeServeProps {
  onNavigate: (page: NavPage) => void;
}

export const PayrotWhoWeServe: React.FC<PayrotWhoWeServeProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#FFFFFF] border-b border-[#C8D7E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading */}
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#12457F]">
            WHO WE SERVE
          </h2>
        </div>

        {/* 3 Alternating Rows (Exact Rhythm of PAYROT) */}
        <div className="space-y-20">

          {/* Row 1: INDIVIDUALS (Left Image, Right Text) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Image Left */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-[#C8D7E8] bg-[#0E1726]">
              <img
                src="/images/serve-individual.jpg"
                alt="Technology Learning for Individuals"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#12457F] tracking-tight">
                Developers &amp; Technical Specialists
              </h3>
              <p className="text-sm sm:text-base text-[#4A607A] leading-relaxed">
                Benchmark capabilities with Skill IQ™ and Role IQ™ assessments. Master Generative AI, Cloud Architecture (AWS, Azure, GCP), and Cyber Defense through hands-on sandbox labs and interactive video checkpoints.
              </p>
              <button
                onClick={() => onNavigate('learning')}
                className="inline-flex items-center gap-1 text-xs font-black text-[#1B58A6] hover:text-[#12457F] uppercase tracking-wider group pt-2 underline underline-offset-4 decoration-[#1B58A6]"
              >
                <span>START SKILL IQ ASSESSMENT</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Row 2: BUSINESSES (Left Text, Right Image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Text Left */}
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-black text-[#12457F] tracking-tight">
                Engineering Teams &amp; Tech Organizations
              </h3>
              <p className="text-sm sm:text-base text-[#4A607A] leading-relaxed">
                Diagnose engineering capability gaps, align talent to mission-critical delivery milestones, and accelerate onboarding with Clixie-powered interactive video academies and verifiable role badges.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1 text-xs font-black text-[#1B58A6] hover:text-[#12457F] uppercase tracking-wider group pt-2 underline underline-offset-4 decoration-[#1B58A6]"
              >
                <span>TRANSFORM YOUR TEAMS</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Image Right */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-[#C8D7E8] bg-[#DCE7F2] order-1 md:order-2">
              <img
                src="/images/serve-business.jpg"
                alt="Corporate Workforce Upskilling for Businesses"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 3: ENTERPRISES (Left Image, Right Text) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Image Left */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-[#C8D7E8] bg-[#14181F]">
              <img
                src="/images/serve-enterprise.jpg"
                alt="Organization-wide Upskilling for Enterprises"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#12457F] tracking-tight">
                Global Enterprises &amp; SAP Landscapes
              </h3>
              <p className="text-sm sm:text-base text-[#4A607A] leading-relaxed">
                Execute seamless SAP S/4HANA migrations (RISE &amp; GROW with SAP), modernize enterprise data estates on Snowflake &amp; Databricks, and implement autonomous business AI with clean-core governance.
              </p>
              <button
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center gap-1 text-xs font-black text-[#1B58A6] hover:text-[#12457F] uppercase tracking-wider group pt-2 underline underline-offset-4 decoration-[#1B58A6]"
              >
                <span>EXPLORE SAP &amp; CLOUD SOLUTIONS</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
