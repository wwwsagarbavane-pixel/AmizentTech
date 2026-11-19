import React from 'react';
import { NavPage } from '../../types';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface PayrotHeroProps {
  onNavigate: (page: NavPage) => void;
  brandMode?: 'PAYROT' | 'AMIZENT';
}

export const PayrotHero: React.FC<PayrotHeroProps> = ({ onNavigate }) => {
  return (
    <section
      className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-30 pb-0 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse 110% 70% at 50% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(215, 238, 255, 0.55) 35%, rgba(140, 198, 255, 0.35) 65%, transparent 100%), linear-gradient(180deg, #D4EBFE 0%, #A8D4FD 22%, #60A8FA 52%, #2E7EEA 80%, #1B58A6 100%)'
      }}
    >
      {/* Ambient Glossy Blue Light Bloom seamlessly flowing from navbar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/30 via-[#60A5FA]/20 to-transparent blur-[80px] pointer-events-none z-0" />

      {/* 1. Giant Background Typography: AMIZENTTECH Watermark */}
      <div className="absolute top-20 sm:top-24 md:top-26 lg:top-28 left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span
          className="text-[8.5vw] sm:text-[9vw] md:text-[9.5vw] lg:text-[10vw] font-black uppercase leading-none tracking-[0.16em] md:tracking-[0.19em] transition-all duration-500 font-sans select-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(210, 238, 255, 0.45) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 20px rgba(18, 69, 127, 0.25))',
            transform: 'translateY(2px)'
          }}
        >
          AMIZENTTECH
        </span>
      </div>

      {/* Hero Central Viewport Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Central Stage: Left Content + Right Woman */}
        <div className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[560px] flex flex-col md:flex-row items-center md:items-start justify-between pt-4 sm:pt-6 lg:pt-8">

          {/* Mobile Hero Headline & CTAs (Visible on phones & tablets < 768px) */}
          <div className="md:hidden w-full text-center pt-8 sm:pt-12 pb-4 px-4 z-20 relative space-y-3.5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-[0_1px_4px_rgba(18,69,127,0.20)]">
              Build In-Demand<br />
              Skills with <span className="font-extrabold text-white">Amizent Tech</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/95 font-medium max-w-xs mx-auto drop-shadow-[0_1px_3px_rgba(18,69,127,0.15)]">
              Your online learning journey, made simple.
            </p>
            <div className="pt-1 flex justify-center">
              <button
                onClick={() => onNavigate('learning')}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1B2B] text-xs font-bold shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B1B2B]" />
              </button>
            </div>
          </div>

          {/* Left Hero Content: Shifted down comfortably below watermark with generous breathing room (Desktop >= 768px) */}
          <div className="max-w-md lg:max-w-lg z-20 space-y-4 hidden md:block text-left pt-36 sm:pt-40 md:pt-44 lg:pt-48 xl:pt-52">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-white tracking-tight leading-[1.14] drop-shadow-[0_1px_6px_rgba(18,69,127,0.20)]">
              Build In-Demand<br />
              Skills with <span className="font-extrabold text-white">Amizent Tech</span>
            </h1>
            <p className="text-sm sm:text-base text-white/95 font-medium max-w-md pt-1.5 drop-shadow-[0_1px_4px_rgba(18,69,127,0.15)]">
              Your online learning journey, made simple.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('learning')}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1B2B] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-[#0B1B2B]" />
              </button>
            </div>
          </div>

          {/* Woman on Right Side */}
          <div className="relative w-full lg:w-auto flex items-center justify-center lg:justify-end lg:pr-14 xl:pr-20">

            {/* Soft Blue-White Ambient Glow behind the Woman (Smooth, Natural Atmospheric Diffusion) */}
            <div
              className="absolute bottom-2 right-0 lg:right-6 w-[560px] md:w-[680px] h-[360px] pointer-events-none rounded-full z-5"
              style={{
                background: 'radial-gradient(ellipse 65% 55% at 50% 60%, rgba(255, 255, 255, 0.28) 0%, rgba(210, 235, 255, 0.20) 40%, rgba(142, 198, 255, 0.10) 65%, transparent 100%)',
                filter: 'blur(40px)'
              }}
            />

            {/* BEAUTIFUL WOMAN ON THE RIGHT (Preserved 100% Photographic Realism with Smooth Bottom Alpha Fade) */}
            <div className="relative z-10 flex flex-col items-center">
              <div 
                className="relative w-[310px] sm:w-[370px] md:w-[420px] lg:w-[465px] xl:w-[485px] transform translate-y-0 flex items-center justify-center"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 52%, rgba(0, 0, 0, 0.98) 60%, rgba(0, 0, 0, 0.70) 72%, rgba(0, 0, 0, 0.20) 80%, transparent 85%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 52%, rgba(0, 0, 0, 0.98) 60%, rgba(0, 0, 0, 0.70) 72%, rgba(0, 0, 0, 0.20) 80%, transparent 85%)'
                }}
              >
                <img
                  src="/images/hero-woman-blended.png"
                  alt="Beautiful Woman Staying Connected with Internet"
                  className="w-full h-auto object-contain relative z-10"
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 2. EXACT ORIGINAL SCULPTED SCALLOPED SHELF */}
      <div className="relative w-full z-20 -mt-12 sm:-mt-16 md:-mt-72 lg:-mt-84 xl:-mt-92 transition-all duration-300">

        {/* DESKTOP FULL-WIDTH SCULPTED SVG SHELF (Edge-to-Edge - Original Elegant Curved Wave) */}
        <div className="relative w-full hidden md:block">

          <svg
            viewBox="0 0 1440 220"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-[190px] lg:h-[220px] xl:h-[240px] block"
          >
            {/* Sculpted White Surface: Original wave matching target reference media_1795083509631_2c8f5052.jpg */}
            <path
              d="M 0 15 L 750 15 C 795 15, 815 50, 845 135 C 860 180, 885 200, 925 200 L 1260 200 C 1300 200, 1325 180, 1340 135 C 1370 50, 1390 15, 1440 15 L 1440 220 L 0 220 Z"
              fill="#FFFFFF"
            />
          </svg>

          {/* Desktop Overlay Content Grid: Left Shelf | Right Scoop */}
          <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between pointer-events-none">

            {/* Left Flat Shelf Content: 98% + Learners are building future-ready skills */}
            <div className="w-[50%] lg:w-[48%] pt-2 space-y-3 pointer-events-auto">
              
              {/* Top Row: Dual AmIzent Icons + Clean CAREER ACCELERATION Pill */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0B2B50] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#1E75E8] transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1E75E8] text-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#0B2B50] transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                <div className="inline-block px-3.5 py-1.5 rounded-full border border-[#C8D7E8] text-[10px] font-black uppercase tracking-wider text-[#0B2B50] bg-[#F8FBFF] shadow-2xs">
                  CAREER ACCELERATION
                </div>
              </div>

              {/* Middle Row: 98% + Learners are building future-ready skills */}
              <div className="flex items-center gap-3.5 pt-1">
                <div className="text-3xl lg:text-4xl xl:text-[40px] font-black text-[#1E75E8] tracking-tight leading-none font-sans">
                  98%
                </div>

                <div className="h-8 w-[1.5px] bg-[#D2E2F5] shrink-0" />

                <p className="text-xs lg:text-[13px] font-bold text-[#0B1B2B] leading-snug max-w-[220px] font-sans">
                  Learners are building future-ready skills
                </p>
              </div>

              {/* Bottom Row: LEARN MORE Button */}
              <div>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-[#0B2B50] hover:text-[#1E75E8] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Scoop Area: High-Contrast Crisp White Typography */}
            <div className="flex justify-end lg:pr-14 xl:pr-20 pointer-events-auto">
              <div className="w-[310px] sm:w-[370px] md:w-[420px] lg:w-[465px] xl:w-[485px] flex flex-col items-center justify-center pt-10 sm:pt-12">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight uppercase leading-[1.12] text-center font-sans text-white drop-shadow-[0_2px_8px_rgba(18,69,127,0.22)]">
                  BUILD SKILLS,
                  <span className="block text-white">UNLOCK FUTURE</span>
                </h2>
              </div>
            </div>

          </div>

        </div>

        {/* MOBILE RESPONSIVE ADAPTIVE LAYOUT (md:hidden) */}
        <div className="md:hidden bg-white rounded-t-[2.5rem] px-5 sm:px-6 pt-8 pb-8 space-y-5 shadow-xl relative z-30">
          <div className="text-center bg-gradient-to-r from-[#1E75E8] to-[#12457F] text-white py-3.5 px-5 rounded-2xl shadow-md">
            <h2 className="text-lg sm:text-xl font-black tracking-tight uppercase leading-tight font-sans">
              BUILD SKILLS, UNLOCK FUTURE
            </h2>
          </div>
          <div className="space-y-3 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0B2B50] text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1E75E8] text-white flex items-center justify-center shadow-md">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full border border-[#C8D7E8] text-[10px] font-black uppercase tracking-wider text-[#12457F]">
                CAREER ACCELERATION
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="text-3xl font-black text-[#1E75E8] tracking-tight leading-none font-sans">
                98%
              </div>
              <div className="h-8 w-[1.5px] bg-[#D2E2F5] shrink-0" />
              <p className="text-xs font-bold text-[#0B1B2B] leading-snug font-sans">
                Learners are building future-ready skills
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('services')}
                className="text-[11px] font-black uppercase tracking-wider text-[#0B2B50] hover:text-[#1E75E8] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
