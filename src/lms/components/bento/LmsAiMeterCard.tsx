import React from 'react';
import { Sparkles, Scan, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface LmsAiMeterCardProps {
  progress?: number;
  title?: string;
  subtitle?: string;
  activeMode?: string;
  onModeChange?: (mode: string) => void;
}

export const LmsAiMeterCard: React.FC<LmsAiMeterCardProps> = ({
  progress = 64,
  title = 'AI Generate',
  subtitle = 'Website Custom Components',
  activeMode = 'jet_ai',
  onModeChange
}) => {
  // SVG circular arc calculation (240px x 240px)
  const size = 260;
  const strokeWidth = 14;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  // Sweep angle ~260 degrees (open at bottom)
  const arcLength = circumference * 0.72;
  const strokeDashoffset = arcLength - (arcLength * progress) / 100;

  return (
    <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(20,50,90,0.06)] border border-slate-100/90 relative flex flex-col justify-between items-center text-center select-none overflow-hidden group">
      
      {/* Top Header Row with Scanner Bracket Icon */}
      <div className="w-full flex items-center justify-between">
        <span className="text-xs font-bold text-[#7A889B] tracking-wide">
          {title}
        </span>
        <button 
          title="Camera / Scanner view"
          className="w-8 h-8 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-400 hover:text-[#2B62EE] hover:border-[#2B62EE] transition-colors"
        >
          <Scan className="w-4 h-4 stroke-[2]" />
        </button>
      </div>

      {/* Centerpiece: Glowing Arc Meter + 64% + Floating Frosted Ai Badge */}
      <div className="relative my-4 flex items-center justify-center">
        
        {/* Soft Radial Backlight behind Arc */}
        <div className="absolute w-44 h-44 rounded-full bg-blue-100/40 blur-2xl pointer-events-none" />

        <svg width={size} height={size} className="transform -rotate-[130deg]">
          {/* Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E8F1FC"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* Active Gradient Arc (Electric Blue from image) */}
          <defs>
            <linearGradient id="aiArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#225CEE" />
              <stop offset="70%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#aiArcGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Numbers and Labels */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-2 pointer-events-none">
          <div className="text-5xl sm:text-6xl font-black text-[#0B1B2B] tracking-tight font-sans">
            {progress}%
          </div>
          <div className="text-xs font-bold text-[#7A889B] mt-1 max-w-[140px] leading-tight">
            {subtitle}
          </div>
        </div>

        {/* Floating Frosted Glass 'Ai' Sphere Badge at Bottom of Arc (Exact match to image 1) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_10px_30px_rgba(37,99,235,0.22)] flex items-center justify-center relative group-hover:scale-105 transition-transform">
            {/* Scanner Bracket Marks around Ai */}
            <div className="absolute inset-2 border-t-2 border-l-2 border-[#2B62EE] rounded-tl-lg pointer-events-none opacity-80" />
            <div className="absolute inset-2 border-b-2 border-r-2 border-[#2B62EE] rounded-br-lg pointer-events-none opacity-80" />
            <span className="text-base font-black text-[#2B62EE] font-mono tracking-wider">
              Ai
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Segmented Controller Pill Switcher (Exact match to image 1) */}
      <div className="w-full flex items-center justify-between pt-3 border-t border-slate-100/80 text-xs">
        
        <div className="flex items-center gap-1 bg-[#F2F6FB] p-1 rounded-full border border-slate-200/50">
          <button
            onClick={() => onModeChange?.('templates')}
            className={`px-3 py-1 rounded-full font-bold transition-all ${
              activeMode === 'templates'
                ? 'bg-black text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0B1B2B]'
            }`}
          >
            Use templates
          </button>
          <button
            onClick={() => onModeChange?.('jet_ai')}
            className={`px-3 py-1 rounded-full font-bold transition-all ${
              activeMode === 'jet_ai'
                ? 'bg-black text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#0B1B2B]'
            }`}
          >
            Use Jet AI
          </button>
        </div>

        <button 
          onClick={() => onModeChange?.('settings')}
          className="text-[11px] font-bold text-[#64748B] hover:text-[#2B62EE] transition-colors"
        >
          Customize settings
        </button>

      </div>

    </div>
  );
};
