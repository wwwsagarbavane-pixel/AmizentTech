import React, { useState } from 'react';
import { ArrowRight, LayoutGrid } from 'lucide-react';

export const PayrotTrustedBy: React.FC = () => {
  const [logoViewMode, setLogoViewMode] = useState<'flow' | 'grid'>('flow');

  const brandLogos = [
    {
      id: 'intel',
      name: 'intel',
      content: (
        <span className="font-black text-xl tracking-tight font-sans text-[#0B1B2B] lowercase">
          intel<span className="text-[#2563EB]">.</span>
        </span>
      )
    },
    {
      id: 'saab',
      name: 'SAAB',
      content: (
        <span className="font-black text-base tracking-widest text-[#0B1B2B] font-sans">
          SAAB
        </span>
      )
    },
    {
      id: 'siemens',
      name: 'SIEMENS',
      content: (
        <span className="font-black text-sm tracking-widest text-[#0B1B2B] font-sans uppercase">
          SIEMENS
        </span>
      )
    },
    {
      id: 'merck',
      name: 'MERCK',
      content: (
        <span className="font-black text-base tracking-widest text-[#0B1B2B] font-sans">
          MERCK
        </span>
      )
    },
    {
      id: 'pepsico',
      name: 'PEPSICO',
      content: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0B1B2B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2.5 10C7 7 17 7 21.5 10" />
            <path d="M2.5 14C7 17 17 17 21.5 14" />
          </svg>
          <span className="font-black text-sm tracking-wider text-[#0B1B2B]">PEPSICO</span>
        </div>
      )
    },
    {
      id: 'pfizer',
      name: 'Pfizer',
      content: (
        <span className="text-xl font-black italic tracking-tight font-serif text-[#0B1B2B]">
          Pfizer
        </span>
      )
    },
    {
      id: 'rolex',
      name: 'ROLEX',
      content: (
        <div className="flex flex-col items-center">
          <svg className="w-5 h-4 text-[#0B1B2B] mb-0.5" viewBox="0 0 24 18" fill="currentColor">
            <circle cx="12" cy="2" r="1.5" />
            <circle cx="5" cy="4" r="1.5" />
            <circle cx="19" cy="4" r="1.5" />
            <circle cx="1" cy="7" r="1.5" />
            <circle cx="23" cy="7" r="1.5" />
            <path d="M2 9L5 16H19L22 9L15 13L12 6L9 13Z" />
          </svg>
          <span className="font-extrabold text-[10px] tracking-[0.25em] text-[#0B1B2B]">ROLEX</span>
        </div>
      )
    },
    {
      id: 'cisco',
      name: 'CISCO',
      content: (
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-[2.5px] h-2 bg-[#0B1B2B] rounded-full" />
            <span className="w-[2.5px] h-3 bg-[#0B1B2B] rounded-full" />
            <span className="w-[2.5px] h-4 bg-[#0B1B2B] rounded-full" />
            <span className="w-[2.5px] h-3 bg-[#0B1B2B] rounded-full" />
            <span className="w-[2.5px] h-2 bg-[#0B1B2B] rounded-full" />
          </div>
          <span className="font-black text-sm tracking-widest font-mono text-[#0B1B2B]">CISCO</span>
        </div>
      )
    },
    {
      id: 'ge',
      name: 'GE',
      content: (
        <div className="w-8 h-8 rounded-full border-2 border-[#0B1B2B] flex items-center justify-center font-serif font-black italic text-xs text-[#0B1B2B]">
          GE
        </div>
      )
    },
    {
      id: 'gsk',
      name: 'gsk',
      content: (
        <span className="font-black text-lg tracking-tight font-sans text-[#0B1B2B]">gsk</span>
      )
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 bg-white select-none overflow-hidden">
      
      {/* Background Soft Glow Seamlessly Blended */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-gradient-to-r from-transparent via-[#EBF3FC]/50 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Control Bar: Centered Pill & Right Toggle (Flow/Grid) */}
        <div className="relative flex items-center justify-center mb-6 px-4">
          
          {/* Center Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D9E6F4] shadow-xs text-xs font-bold text-[#0B1B2B] z-10">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="font-black text-[11px] tracking-wider uppercase">
              TRUSTED BY GLOBAL ENTERPRISE TEAMS
            </span>
          </div>

          {/* Right Toggle Pill: Flow / Grid */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center p-1 rounded-full bg-white border border-[#D9E6F4] shadow-xs z-10">
            <button
              onClick={() => setLogoViewMode('flow')}
              className={`px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                logoViewMode === 'flow'
                  ? 'bg-[#0B1B2B] text-white shadow-2xs'
                  : 'text-[#64748B] hover:text-[#0B1B2B]'
              }`}
            >
              <ArrowRight className="w-3 h-3" />
              <span>Flow</span>
            </button>
            <button
              onClick={() => setLogoViewMode('grid')}
              className={`px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                logoViewMode === 'grid'
                  ? 'bg-[#0B1B2B] text-white shadow-2xs'
                  : 'text-[#64748B] hover:text-[#0B1B2B]'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Grid</span>
            </button>
          </div>

        </div>

        {/* Clean Borderless Full-Width Edge-to-Edge Theme Canvas with Master Seamless Side Alpha Fade */}
        <div 
          className="relative pt-4 pb-4 w-screen left-1/2 -translate-x-1/2 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, black 14%, black 86%, rgba(0,0,0,0.3) 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, black 14%, black 86%, rgba(0,0,0,0.3) 95%, transparent 100%)'
          }}
        >

          {/* Giant Background Watermark Typography: AMIZENT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span
              className="text-[14vw] font-black uppercase leading-none tracking-[0.18em] font-sans select-none"
              style={{
                background: 'linear-gradient(180deg, rgba(220, 235, 250, 0.75) 0%, rgba(240, 247, 255, 0.15) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AMIZENT
            </span>
          </div>

          {/* Content: Flow (Full-Width Auto-Scroll) OR Grid */}
          {logoViewMode === 'flow' ? (
            <div className="relative w-full overflow-hidden z-10 py-3">
              {/* Marquee Track (Double loop for seamless continuous auto-scrolling edge-to-edge) */}
              <div className="animate-marquee flex items-center gap-5 sm:gap-6 pl-4">
                {[...brandLogos, ...brandLogos].map((brand, idx) => (
                  <div
                    key={`${brand.id}-${idx}`}
                    className="bg-white rounded-2xl px-8 py-5 border border-slate-100/90 shadow-[0_6px_25px_rgba(18,69,127,0.06)] min-w-[160px] sm:min-w-[180px] h-20 flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
                  >
                    {brand.content}
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-2">
              {brandLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-2xl px-6 py-5 border border-slate-100/90 shadow-[0_6px_25px_rgba(18,69,127,0.06)] h-20 flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
                >
                  {brand.content}
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
