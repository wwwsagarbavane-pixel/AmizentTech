import React from 'react';
import { NavPage } from '../../types';
import { ArrowUpRight } from 'lucide-react';

interface PayrotFeaturesListProps {
  onNavigate: (page: NavPage) => void;
}

export const PayrotFeaturesList: React.FC<PayrotFeaturesListProps> = ({ onNavigate }) => {
  const features = [
    {
      num: '001',
      titleLine1: 'SKILL IQ™ & ROLE',
      titleLine2: 'BENCHMARKING',
      desc: 'Quantify engineering capabilities with Pluralsight-grade adaptive assessments, diagnose blind spots, and map precise role mastery paths.',
      circleBg: 'bg-[#0B2B50] hover:bg-[#1B58A6] text-white',
      page: 'learning' as NavPage,
    },
    {
      num: '002',
      titleLine1: 'INTERACTIVE AI VIDEO',
      titleLine2: 'LEARNING LABS',
      desc: 'Clixie-powered in-stream knowledge checkpoints, branching scenarios, and automated quizzes across 20+ languages with zero coding required.',
      circleBg: 'bg-[#8FAAC8] hover:bg-[#1B58A6] text-white',
      page: 'learning' as NavPage,
    },
    {
      num: '003',
      titleLine1: 'SAP S/4HANA & ENTERPRISE',
      titleLine2: 'CLOUD MODERNIZATION',
      desc: 'Applexus-driven RISE & GROW with SAP implementations, clean-core migrations, and modern data estates on Snowflake, Databricks & SAP BDC.',
      circleBg: 'bg-[#8FAAC8] hover:bg-[#1B58A6] text-white',
      page: 'services' as NavPage,
    },
    {
      num: '004',
      titleLine1: 'ENTERPRISE LMS & HR',
      titleLine2: 'TALENT TELEMETRY',
      desc: 'Export real-time skill analytics, SCORM packages, and verifiable digital badges directly to Canvas, Microsoft Teams, Webex, and Workday.',
      circleBg: 'bg-[#8FAAC8] hover:bg-[#1B58A6] text-white',
      page: 'solutions' as NavPage,
    },
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* 1. Enormous Giant Background Wordmark: FEATURES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center pointer-events-none select-none">
        <h2 className="text-[13vw] sm:text-[14vw] md:text-[15vw] font-black uppercase tracking-[0.25em] text-[#C8D7E8]/50 leading-none">
          FEATURES
        </h2>
      </div>

      {/* 2. Numbered Feature Rows with Divider Lines (Exact PAYROT Proportions) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="divide-y divide-[#C8D7E8]">
          {features.map((item) => (
            <div
              key={item.num}
              onClick={() => onNavigate(item.page)}
              className="py-10 group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F8FBFF]/60 px-4 rounded-2xl transition-colors duration-200"
            >
              {/* Left: Pill Number & 2-Line Bold Title */}
              <div className="flex items-center gap-6 md:w-5/12">
                <span className="text-xs font-bold text-[#1B58A6] px-3 py-1 rounded-full border border-[#C8D7E8] bg-[#EAF1F8] font-mono">
                  ({item.num})
                </span>
                <div className="text-xl sm:text-2xl font-black text-[#12457F] tracking-tight group-hover:text-[#1B58A6] transition-colors uppercase leading-[1.1]">
                  <div>{item.titleLine1}</div>
                  <div>{item.titleLine2}</div>
                </div>
              </div>

              {/* Center: Description */}
              <div className="md:w-5/12">
                <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>

              {/* Right: Circular Arrow Action Button */}
              <div className="md:w-2/12 flex md:justify-end">
                <div className={`w-12 h-12 rounded-full ${item.circleBg} flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-md`}>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
