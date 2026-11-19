import React, { useEffect, useState } from 'react';

interface AppLoadingSplashProps {
  onComplete?: () => void;
  brandName?: string;
  durationMs?: number;
}

export const AppLoadingSplash: React.FC<AppLoadingSplashProps> = ({
  onComplete,
  brandName = 'AMIZENT',
  durationMs = 900
}) => {
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, durationMs);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, durationMs + 400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between py-12 px-6 transition-opacity duration-400 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 35%, #FFFFFF 0%, #E6F2FD 45%, #D4E8FC 100%)'
      }}
    >
      {/* Background soft ambient bloom */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-blue-300/30 blur-[100px] rounded-full pointer-events-none" />

      {/* Top subtle watermark */}
      <div className="text-[14vw] font-black tracking-widest text-white/60 uppercase select-none pointer-events-none absolute top-8">
        {brandName}
      </div>

      {/* Woman with laptop in upper-center (Exact photo from Hero with smooth bottom fade) */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full max-w-sm pt-6">
        <div 
          className="relative w-64 sm:w-72 h-auto flex items-center justify-center animate-in fade-in zoom-in-95 duration-500"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 52%, rgba(0,0,0,0.98) 60%, rgba(0,0,0,0.70) 72%, rgba(0,0,0,0.20) 80%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 52%, rgba(0,0,0,0.98) 60%, rgba(0,0,0,0.70) 72%, rgba(0,0,0,0.20) 80%, transparent 85%)'
          }}
        >
          <img
            src="/images/hero-woman-blended.png"
            alt="AmIzent"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Brand Title & Spinner (Exact match to media_1795089434417_895f6b38.jpg - NO LOGO ICON) */}
      <div className="relative z-10 flex flex-col items-center gap-4 pb-8">
        {/* Brand Name Text (NO LOGO ICON) */}
        <span className="text-2xl font-black tracking-[0.2em] text-[#0B1B2B] uppercase font-sans">
          {brandName}
        </span>

        {/* Circular Arc Spinner Loader (Matching reference blue C arc shape) */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full border-[3px] border-slate-200/50 border-t-[#2563EB] border-r-[#2563EB] animate-spin" />
        </div>
      </div>
    </div>
  );
};
