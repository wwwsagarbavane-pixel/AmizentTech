import React from 'react';
import { NavPage } from '../../types';
import { ArrowRight, Check, CheckCircle2, Sparkles, CreditCard, Award } from 'lucide-react';

interface PayrotIntroductionProps {
  onNavigate: (page: NavPage) => void;
  brandMode?: 'PAYROT' | 'AMIZENT';
}

export const PayrotIntroduction: React.FC<PayrotIntroductionProps> = ({ onNavigate, brandMode = 'AMIZENT' }) => {
  const isPayrot = brandMode === 'PAYROT';

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C8D7E8] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Graphic Composition (Moved to Left as requested) */}
          <div className="lg:col-span-7 order-1 lg:order-1 relative flex justify-center items-center py-6">
            
            {/* The Main Graphic Stage: Blue Chamfered Card + Overlapping Subject + Badges */}
            <div className="relative w-full max-w-[460px] sm:max-w-[480px] aspect-[480/500] flex items-center justify-center">

              {/* Soft Atmospheric Glow behind the Chamfer Cut */}
              <div className="absolute top-[6%] -left-[4%] w-64 h-64 bg-[#A2CBF8]/35 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* 1. Luminous Sky-Blue Chamfered Background Container with Distinct White Accent Contour */}
              <div className="absolute inset-0 z-0">
                <svg
                  viewBox="0 0 480 500"
                  className="w-full h-full filter drop-shadow-[0_24px_50px_rgba(37,130,238,0.22)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="payrotSkyGradient" x1="10%" y1="0%" x2="90%" y2="100%">
                      <stop offset="0%" stopColor="#A2CBF8" />
                      <stop offset="35%" stopColor="#72ABF0" />
                      <stop offset="70%" stopColor="#4897EC" />
                      <stop offset="100%" stopColor="#2582EE" />
                    </linearGradient>

                    <linearGradient id="chamferStrokeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                      <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.7)" />
                    </linearGradient>
                  </defs>

                  {/* Main Card: Smooth rounded corners on 3 sides + exact steep chamfer cut on Top-Left */}
                  <path
                    d="M 140 0 
                       L 442 0 
                       A 38 38 0 0 1 480 38 
                       L 480 462 
                       A 38 38 0 0 1 442 500 
                       L 38 500 
                       A 38 38 0 0 1 0 462 
                       L 0 240 
                       A 24 24 0 0 1 7 223 
                       L 123 7 
                       A 24 24 0 0 1 140 0 Z"
                    fill="url(#payrotSkyGradient)"
                  />

                  {/* Crisp White Accent Contour Track along Chamfer Cut */}
                  <path
                    d="M 2 250 
                       L 2 240 
                       A 22 22 0 0 1 8 224 
                       L 124 8 
                       A 22 22 0 0 1 140 2 
                       L 170 2"
                    stroke="url(#chamferStrokeGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 2. Concentric Ripple Rings behind / around subject */}
              {/* Upper-Right Shoulder Concentric Rings */}
              <div className="absolute top-[22%] right-[10%] z-10 pointer-events-none flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-white/25 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-white/55 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#2582EE] text-white flex items-center justify-center shadow-md">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop / Hand Concentric Rings */}
              <div className="absolute top-[62%] left-[28%] z-20 pointer-events-none flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-[#2582EE] text-white flex items-center justify-center shadow-md">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. The Cutout Subject: User's Young Woman with Laptop */}
              <div className="relative z-15 w-[84%] sm:w-[88%] transform -translate-y-2 flex justify-center">
                <img
                  src="/images/intro-woman-laptop-trimmed.png"
                  alt="Young woman working on laptop"
                  className="w-full h-auto object-contain filter drop-shadow-[0_18px_36px_rgba(18,69,127,0.24)]"
                />
              </div>



            </div>

          </div>

          {/* RIGHT COLUMN: Bold Condensed Typography & Link (Moved to Right as requested) */}
          <div className="lg:col-span-5 order-2 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1B2B] tracking-tight leading-[1.08] uppercase font-sans">
              {isPayrot ? (
                <>
                  HIRE AND PAY GLOBALLY <br />
                  <span className="text-[#1E75E8]">WITH PAYROT</span>
                </>
              ) : (
                <>
                  HIRE AND UPSKILL GLOBALLY <br />
                  <span className="text-[#1E75E8]">WITH AMIZENT TECH</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#4A607A] leading-relaxed max-w-lg">
              <strong className="text-[#0B1B2B] font-bold">
                {isPayrot ? 'Payrot Workforce' : 'AmIzent Workforce'}
              </strong>{' '}
              Helps You Onboard, Benchmark, And Upskill Developers Or Contractors Across{' '}
              <strong className="text-[#0B1B2B] font-bold">150+ Countries</strong> Quickly, Securely, And Without Borders.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black text-[#1E75E8] hover:text-[#12457F] uppercase tracking-wider group underline underline-offset-8 decoration-[#1E75E8] transition-colors cursor-pointer"
              >
                <span>EXPLORE WORKFORCE TOOLS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
