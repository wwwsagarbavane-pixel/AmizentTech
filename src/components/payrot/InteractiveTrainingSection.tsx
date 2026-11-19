import React, { useState } from 'react';
import { NavPage } from '../../types';
import { ArrowRight, Bookmark, Video, Globe, Play, Pause, RotateCcw, RotateCw, Volume2, Check } from 'lucide-react';

interface InteractiveTrainingSectionProps {
  onNavigate: (page: NavPage) => void;
}

export const InteractiveTrainingSection: React.FC<InteractiveTrainingSectionProps> = ({ onNavigate }) => {
  const [activeLang, setActiveLang] = useState<'EN' | 'PT' | 'ES'>('EN');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden select-none bg-gradient-to-b from-[#F2F7FD] via-[#EAF2FC] to-[#DCEAF8]">
      
      {/* 1. Giant Background Typography: AMIZENT Watermark */}
      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span
          className="text-[12vw] font-black uppercase leading-none tracking-[0.16em] transition-all duration-500 font-sans select-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(215, 235, 255, 0.45) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 20px rgba(255, 255, 255, 0.8))',
            transform: 'translateY(-10px)'
          }}
        >
          AMIZENT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: 2 Cards (White Bento + Blue Localization Engine) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* CARD 1: Interactive Onboarding Training White Bento Card */}
            <div className="bg-white rounded-[2.25rem] p-7 sm:p-9 shadow-[0_22px_55px_rgba(18,69,127,0.08)] border border-white/90 space-y-6">

              {/* Badge: INTERACTIVE TRAINING */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FF] text-[#2563EB] text-[11px] font-black uppercase tracking-wider">
                <Bookmark className="w-3.5 h-3.5 fill-[#2563EB]" />
                <span>INTERACTIVE TRAINING</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B2B] tracking-tight leading-tight">
                  Interactive Onboarding <br className="hidden sm:block" />
                  Training
                </h3>
                <p className="text-xs sm:text-[13px] text-[#526987] leading-relaxed font-normal">
                  Engage learners through interactive checkpoints, live quizzes, and instant localization. Switch languages anytime directly inside the player.
                </p>
              </div>

              {/* Sub-feature 1: Synthesia and HeyGen */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-[#E9F1FA] flex items-center gap-3.5 hover:bg-[#F0F6FD] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                  <Video className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-[13px] font-black text-[#0B1B2B]">
                    Synthesia and HeyGen
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#7089A8] font-medium mt-0.5">
                    Seamless Integration with Text to Video Tools
                  </div>
                </div>
              </div>

              {/* Sub-feature 2: Accessible Learning for Everyone */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-[#E9F1FA] flex items-center gap-3.5 hover:bg-[#F0F6FD] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FF] text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-[13px] font-black text-[#0B1B2B]">
                    Accessible Learning for Everyone
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#7089A8] font-medium mt-0.5">
                    Deliver Content in the Language of Your Choice
                  </div>
                </div>
              </div>

              {/* Bottom Buttons: See more examples + Live Demo */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('lms')}
                  className="px-6 py-3 rounded-full bg-[#0B1B2B] hover:bg-[#122443] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>See more examples</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#EBF4FF] text-[#1E75E8] text-xs font-black cursor-pointer hover:bg-[#DFEDFA] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#1E75E8] animate-pulse" />
                  <span>Live Demo</span>
                </div>
              </div>

            </div>

            {/* CARD 2: Blue Amizent Localization Engine Card */}
            <div className="bg-gradient-to-r from-[#1E75E8] via-[#216fe0] to-[#2563EB] rounded-[1.75rem] p-5 sm:p-6 text-white shadow-[0_16px_40px_rgba(30,117,232,0.28)] flex items-center justify-between">
              
              {/* Left Details */}
              <div className="text-left space-y-1">
                <div className="text-[11px] font-bold text-white/85 uppercase tracking-wider">
                  Amizent Localization Engine
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white leading-none">
                    3
                  </span>
                  <span className="text-sm sm:text-base font-black text-white">
                    Languages
                  </span>
                </div>
                <div className="text-[10px] font-medium text-white/80">
                  Instant Sync
                </div>
              </div>

              {/* Right Switch Track Buttons */}
              <div className="flex flex-col items-end space-y-2">
                <div className="text-[9px] font-black uppercase tracking-wider text-white/85">
                  SWITCH TRACK
                </div>
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/20 backdrop-blur-md">
                  {(['EN', 'PT', 'ES'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={`px-3 py-1 rounded-full text-[10px] font-black transition-all cursor-pointer ${
                        activeLang === lang
                          ? 'bg-white text-[#1E75E8] shadow-sm'
                          : 'text-white hover:bg-white/15'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Big White Bento Card with Embedded Video Player */}
          <div className="lg:col-span-7 bg-white rounded-[2.25rem] p-6 sm:p-8 shadow-[0_22px_55px_rgba(18,69,127,0.08)] border border-white/90 space-y-6">

            {/* Top Navigation / Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF4FF] text-[#12457F] text-[11px] font-black">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <span>Global Employee Onboarding</span>
                </div>

                <div className="px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] text-[10px] font-bold">
                  {activeLang === 'EN' && 'EN • English'}
                  {activeLang === 'PT' && 'PT • Portuguese'}
                  {activeLang === 'ES' && 'ES • Spanish'}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-black border border-emerald-200">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>98% Completion</span>
              </div>
            </div>

            {/* Interactive Player Canvas (Framed with studio host, play button, and controls) */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#EAF3FD] via-[#F4F9FF] to-[#E5F0FC] border border-[#D5E5F7] p-6 sm:p-8 min-h-[360px] flex flex-col justify-between overflow-hidden">
              
              {/* Subtle Tech Grid / Accents in background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#E1EDFB_1px,transparent_1px),linear-gradient(to_bottom,#E1EDFB_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

              {/* Canvas Top Content */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between gap-4">
                
                {/* Left Brand Badge & Video Title */}
                <div className="space-y-3 text-left max-w-sm">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-2xs border border-white/90">
                    <div className="w-4 h-4 rounded-full bg-[#2563EB] text-white text-[9px] font-black flex items-center justify-center">
                      A
                    </div>
                    <span className="text-[10px] font-black text-[#0B1B2B] tracking-wider uppercase">
                      AMIZENT • TECHINNOVATE
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0B1B2B] tracking-tight leading-snug">
                    Empowering Innovation, <br />
                    <span className="text-[#1E75E8]">Driving Excellence.</span>
                  </h4>

                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/85 border border-white/90 text-[10px] font-bold text-[#64748B]">
                    01 • Welcome &amp; Culture
                  </div>
                </div>

                {/* Right Studio Host Card: Elena Vance */}
                <div className="w-44 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-[0_12px_28px_rgba(18,69,127,0.12)] border border-white/95 text-center space-y-2 shrink-0">
                  
                  <div className="flex items-center justify-between text-[9px] font-extrabold text-[#64748B]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      Studio Host
                    </span>
                    <span className="uppercase">{activeLang}</span>
                  </div>

                  {/* Host Avatar Illustration */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#DBEAFE] to-[#EFF6FF] border-2 border-white mx-auto flex items-center justify-center overflow-hidden shadow-inner relative">
                    <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
                      {/* Hair background */}
                      <path d="M 16 32 C 16 18, 48 18, 48 32 C 48 42, 44 48, 44 48 L 20 48 C 20 48, 16 42, 16 32 Z" fill="#1E293B" />
                      {/* Neck */}
                      <rect x="28" y="40" width="8" height="10" fill="#FBD5C5" />
                      {/* Face */}
                      <circle cx="32" cy="30" r="12" fill="#FDE2D6" />
                      {/* Hair bangs */}
                      <path d="M 20 28 C 22 22, 42 22, 44 28 C 42 24, 38 23, 32 23 C 26 23, 22 24, 20 28 Z" fill="#1E293B" />
                      {/* Eyes & Smile */}
                      <circle cx="28" cy="29" r="1.5" fill="#0F172A" />
                      <circle cx="36" cy="29" r="1.5" fill="#0F172A" />
                      <path d="M 29 34 Q 32 37, 35 34" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                      {/* Blue suit collar */}
                      <path d="M 18 56 C 20 44, 44 44, 46 56 Z" fill="#2563EB" />
                      <path d="M 29 44 L 32 50 L 35 44 Z" fill="#FFFFFF" />
                    </svg>
                  </div>

                  <div className="text-center pt-0.5">
                    <div className="text-xs font-black text-[#0B1B2B]">
                      Elena Vance
                    </div>
                    <button
                      onClick={() => onNavigate('lms')}
                      className="text-[10px] font-bold text-[#1E75E8] hover:underline mt-0.5 inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>Try Quiz</span>
                      <span>→</span>
                    </button>
                  </div>

                </div>

              </div>

              {/* Floating Center Play Button */}
              <div className="relative z-20 flex justify-center py-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-white text-[#1E75E8] flex items-center justify-center shadow-[0_12px_28px_rgba(30,117,232,0.28)] hover:scale-110 active:scale-95 transition-all cursor-pointer pl-1"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-[#1E75E8]" />
                  ) : (
                    <Play className="w-6 h-6 fill-[#1E75E8]" />
                  )}
                </button>
              </div>

              {/* Bottom Dark Player Controls Bar */}
              <div className="relative z-20 w-full bg-[#0B1B2B]/95 backdrop-blur-md rounded-2xl px-4 py-3 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-white shadow-xl mt-4">
                
                {/* Left Controls: Play, 10s back, 10s forward, volume, time */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-white" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-white" />
                    )}
                  </button>
                  <button className="hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <RotateCcw className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                  <button className="hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <RotateCw className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                  <button className="hover:text-[#38BDF8] transition-colors cursor-pointer">
                    <Volume2 className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                  <span className="text-[10px] text-slate-300 font-mono ml-1">
                    00:04 / 03:10
                  </span>
                </div>

                {/* Scrubber Bar */}
                <div className="flex-1 w-full sm:w-auto h-1.5 bg-slate-700/80 rounded-full relative overflow-visible flex items-center cursor-pointer mx-2">
                  <div className="w-[32%] h-full bg-[#38BDF8] rounded-full" />
                  <div className="absolute left-[32%] w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] -translate-x-1/2" />
                </div>

                {/* Right Language & CC Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-300">
                    <Globe className="w-3 h-3" />
                    <span>{activeLang}</span>
                  </div>
                  <div className="px-1.5 py-0.5 rounded bg-[#1E75E8] text-white text-[9px] font-black uppercase tracking-wider">
                    CC
                  </div>
                </div>

              </div>

            </div>

            {/* Below Player Description */}
            <div className="space-y-1 text-left pt-1">
              <h4 className="text-base sm:text-lg font-black text-[#0B1B2B]">
                Multilingual Video Localization
              </h4>
              <p className="text-xs sm:text-[13px] text-[#526987] leading-relaxed font-normal">
                Fully localized audio and video in English, Portuguese, and Spanish with synchronized interactive checkpoints.
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
