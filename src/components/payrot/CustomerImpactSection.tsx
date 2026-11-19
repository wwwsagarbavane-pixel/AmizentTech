import React, { useState } from 'react';
import { NavPage } from '../../types';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface CustomerImpactSectionProps {
  onNavigate: (page: NavPage) => void;
}

interface CaseStudy {
  id: string;
  name: string;
  logo: React.ReactNode;
  metric: string;
  metricLabel: string;
  desc: string;
  verifiedPill: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: React.ReactNode;
}

export const CustomerImpactSection: React.FC<CustomerImpactSectionProps> = ({ onNavigate }) => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'saab',
      name: 'Saab',
      logo: (
        <span className="text-3xl font-black tracking-widest text-[#0B1B2B] uppercase font-sans">
          SAAB
        </span>
      ),
      metric: '99.4%',
      metricLabel: 'mission avionics proficiency',
      desc: 'Saab achieved 99.4% first-attempt certification across secure embedded systems and mission avionics simulation labs.',
      verifiedPill: 'Mission-Critical Ready',
      quote: '“Realistic simulation sandboxes ensure our aerospace and defense engineering teams build with flawless operational security and zero regression.”',
      authorName: 'Henrik Lindqvist',
      authorRole: 'Lead Systems Architect, Saab Defense',
      authorAvatar: (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle cx="32" cy="32" r="32" fill="#E2E8F0" />
          <circle cx="32" cy="26" r="12" fill="#F8FAFC" />
          <path d="M 14 56 C 18 42, 46 42, 50 56 Z" fill="#0B2B50" />
        </svg>
      )
    },
    {
      id: 'merck',
      name: 'Merck',
      logo: (
        <span className="text-3xl font-black tracking-tight text-[#0B1B2B] uppercase font-sans">
          MERCK
        </span>
      ),
      metric: '88%',
      metricLabel: 'compliance lab acceleration',
      desc: 'Merck accelerated validated GxP data engineering pipelines on AWS & Snowflake, reducing onboarding from 6 months to 3 weeks.',
      verifiedPill: 'GxP Validated',
      quote: '“The interactive checkpoints give our scientists and developers the exact competency telemetry required for audit-ready regulatory compliance.”',
      authorName: 'Dr. Ananya Roy',
      authorRole: 'Global Head of Life Sciences Tech, Merck',
      authorAvatar: (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle cx="32" cy="32" r="32" fill="#EDE9FE" />
          <circle cx="32" cy="26" r="12" fill="#FDE2D6" />
          <path d="M 14 56 C 18 42, 46 42, 50 56 Z" fill="#7C3AED" />
        </svg>
      )
    },
    {
      id: 'cisco',
      name: 'Cisco',
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-1 h-6">
            <span className="w-1 h-2 bg-[#0B1B2B] rounded-full" />
            <span className="w-1 h-4 bg-[#0B1B2B] rounded-full" />
            <span className="w-1 h-6 bg-[#0B1B2B] rounded-full" />
            <span className="w-1 h-4 bg-[#0B1B2B] rounded-full" />
            <span className="w-1 h-2 bg-[#0B1B2B] rounded-full" />
          </div>
          <span className="text-2xl font-black tracking-tight text-[#0B1B2B] lowercase font-sans">
            cisco
          </span>
        </div>
      ),
      metric: '3.8x',
      metricLabel: 'faster network automation',
      desc: 'Cisco scaled programmable cloud and campus networking capabilities across 1,400+ field engineers in less than 90 days.',
      verifiedPill: 'Enterprise Certified',
      quote: '“AmIzent’s hands-on sandboxes allowed our teams to simulate mission-critical migrations with zero downtime risk across hybrid clouds.”',
      authorName: 'Marcus Vance',
      authorRole: 'VP Global Network Engineering, Cisco',
      authorAvatar: (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle cx="32" cy="32" r="32" fill="#DBEAFE" />
          <circle cx="32" cy="26" r="12" fill="#F8FAFC" />
          <path d="M 14 56 C 18 42, 46 42, 50 56 Z" fill="#1E40AF" />
        </svg>
      )
    },
    {
      id: 'intel',
      name: 'Intel',
      logo: (
        <span className="text-3xl font-black text-[#0B1B2B] lowercase font-sans tracking-tight">
          intel<span className="text-[#1E75E8]">.</span>
        </span>
      ),
      metric: '96%',
      metricLabel: 'security lab mastery',
      desc: 'Intel strengthened hardware-to-cloud security posture, achieving 96% mastery across hands-on threat modeling and automated DevSecOps cyber ranges.',
      verifiedPill: 'Zero-Trust Verified',
      quote: '“Objective skill validation changed how we manage cyber risk. Our architects now validate zero-trust controls in realistic labs before release.”',
      authorName: 'Priya Nair',
      authorRole: 'Principal Security Architect, Intel',
      authorAvatar: (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          {/* Hair background */}
          <path d="M 16 32 C 16 18, 48 18, 48 32 C 48 42, 44 48, 44 48 L 20 48 C 20 48, 16 42, 16 32 Z" fill="#1E293B" />
          {/* Neck */}
          <rect x="28" y="40" width="8" height="10" fill="#E2A686" />
          {/* Face */}
          <circle cx="32" cy="30" r="12" fill="#F1BC9B" />
          {/* Hair bangs */}
          <path d="M 20 28 C 22 22, 42 22, 44 28 C 42 24, 38 23, 32 23 C 26 23, 22 24, 20 28 Z" fill="#1E293B" />
          {/* Eyes & Smile */}
          <circle cx="28" cy="29" r="1.5" fill="#0F172A" />
          <circle cx="36" cy="29" r="1.5" fill="#0F172A" />
          <path d="M 29 34 Q 32 37, 35 34" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Blue top */}
          <path d="M 18 56 C 20 44, 44 44, 46 56 Z" fill="#2563EB" />
          <path d="M 29 44 L 32 50 L 35 44 Z" fill="#FFFFFF" />
        </svg>
      )
    }
  ];

  // Default active tab is 'intel' matching the user's reference screenshot
  const [activeIdx, setActiveIdx] = useState(3);
  const current = caseStudies[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden select-none bg-gradient-to-b from-[#F2F7FD] via-[#EAF2FC] to-[#DCEAF8]">
      
      {/* 1. Giant Background Typography: AMIZENT Watermark */}
      <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span
          className="text-[12vw] font-black uppercase leading-none tracking-[0.16em] transition-all duration-500 font-sans select-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(215, 235, 255, 0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 20px rgba(255, 255, 255, 0.75))',
            transform: 'translateY(-10px)'
          }}
        >
          AMIZENT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block: Badge, Title, Description, and CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FF] text-[#12457F] text-[11px] font-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>CUSTOMER IMPACT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1B2B] tracking-tight leading-tight">
              Workforce readiness in action
            </h2>

            <p className="text-sm sm:text-base text-[#526987] leading-relaxed max-w-2xl font-normal">
              See how leading organizations accelerate transformation, reduce risk, and build technical capability with Amizent Tech.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onNavigate('solutions')}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#F8FBFF] border border-[#C8D7E8] text-xs sm:text-[13px] font-black text-[#0B1B2B] shadow-xs flex items-center gap-2 hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>See customer results</span>
              <ArrowRight className="w-4 h-4 text-[#1E75E8]" />
            </button>
          </div>

        </div>

        {/* 2. Dual-Sided Customer Impact Bento Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_24px_65px_rgba(18,69,127,0.12)] border border-white/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch transition-all duration-300">

          {/* LEFT SIDE: Brand Logo, Big Metric, Lab Mastery & Actions */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 text-left bg-white">
            
            {/* Top Logo */}
            <div>
              {current.logo}
            </div>

            {/* Middle: Big Metric + Stat Label */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E75E8] tracking-tight leading-none">
                  {current.metric}
                </div>
                <div className="text-lg sm:text-xl font-black text-[#0B1B2B] tracking-tight">
                  {current.metricLabel}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#526987] leading-relaxed font-normal max-w-md">
                {current.desc}
              </p>
            </div>

            {/* Bottom Actions: Find out how + Verification Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('solutions')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-[#F8FBFF] border border-[#C8D7E8] text-xs font-black text-[#0B1B2B] flex items-center gap-2 shadow-2xs hover:shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>Find out how</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EBF4FF] text-[#1E75E8] text-[11px] font-black">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>{current.verifiedPill}</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Royal Blue Quote Canvas + Author Attribution */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#2563EB] to-[#1E75E8] p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-between space-y-8 text-left relative overflow-hidden">
            
            {/* Top Circular Quote Icon */}
            <div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2563EB] shadow-md pl-0.5">
                <Quote className="w-6 h-6 fill-[#2563EB]" />
              </div>
            </div>

            {/* Middle: Direct Client Quote */}
            <blockquote className="text-lg sm:text-xl lg:text-[22px] font-bold text-white leading-relaxed">
              {current.quote}
            </blockquote>

            {/* Bottom: Subtle Divider + Author Block */}
            <div className="space-y-4 pt-2">
              <div className="w-full h-[1px] bg-white/20" />

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/60 p-0.5 overflow-hidden shrink-0 flex items-center justify-center">
                  {current.authorAvatar}
                </div>
                <div>
                  <div className="text-base font-black text-white leading-snug">
                    {current.authorName}
                  </div>
                  <div className="text-xs text-white/80 font-medium mt-0.5">
                    {current.authorRole}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Bottom Company Selector Track & Carousel Arrows */}
        <div className="flex items-center justify-center gap-3 pt-10">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-all"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Company Pills Track */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm">
            {caseStudies.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0B1B2B] text-white shadow-xs'
                      : 'text-[#64748B] hover:text-[#0B1B2B]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-[#38BDF8]' : 'bg-[#94A3B8]'
                    }`}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-all"
            aria-label="Next client"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </section>
  );
};
