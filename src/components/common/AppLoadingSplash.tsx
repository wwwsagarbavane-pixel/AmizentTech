import React, { useEffect, useState } from 'react';

interface AppLoadingSplashProps {
  onComplete?: () => void;
  brandName?: string;
  durationMs?: number;
}

export const AppLoadingSplash: React.FC<AppLoadingSplashProps> = ({
  onComplete,
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between py-10 px-6 transition-opacity duration-400 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 35%, #FFFFFF 0%, #E4F1FD 45%, #CDE5FC 100%)'
      }}
    >
      {/* Background soft ambient glowing light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-sky-300/35 blur-[110px] rounded-full pointer-events-none" />

      {/* Top Spacer (NO NAME / NO WATERMARK) */}
      <div className="h-4" />

      {/* Woman with laptop in center (Exact photo from Hero with smooth bottom fade) */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full max-w-sm pt-4">
        <div 
          className="relative w-72 sm:w-80 h-auto flex items-center justify-center animate-in fade-in zoom-in-95 duration-500"
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

      {/* Bottom Area: Bold Glossy White Glass Loading Circle (NO NAME / NO LOGO) */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-12">
        {/* Bold Glossy Glass Circle Spinner */}
        <div className="relative w-13 h-13 rounded-full bg-white/45 backdrop-blur-2xl border-[1.5px] border-white/80 shadow-[0_10px_35px_rgba(20,70,140,0.18),0_2px_12px_rgba(255,255,255,0.95),inset_0_2px_6px_rgba(255,255,255,1)] flex items-center justify-center">
          {/* Subtle glowing center */}
          <div className="absolute inset-2 rounded-full bg-white/40 blur-xs" />
          
          {/* Bold Glossy White Spinning Arc */}
          <div className="w-8 h-8 rounded-full border-[4px] border-white/25 border-t-white border-r-white animate-spin drop-shadow-[0_0_10px_rgba(255,255,255,1)] relative z-10" />
        </div>
      </div>
    </div>
  );
};
