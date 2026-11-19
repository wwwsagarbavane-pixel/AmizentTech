import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LmsDonutSkillCardProps {
  userName?: string;
  onLearnMore?: () => void;
}

export const LmsDonutSkillCard: React.FC<LmsDonutSkillCardProps> = ({
  userName = 'Alena Orlova',
  onLearnMore
}) => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-[0_20px_50px_rgba(20,50,90,0.06)] border border-slate-100/90 relative flex flex-col justify-between select-none group">
      
      {/* Top: User Pill & Dots Header (Matching bottom-left of image 1) */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100/80">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">Dashboard</span>
          <div className="flex items-center gap-1.5 bg-[#EEF4FF] px-2.5 py-1 rounded-full">
            <div className="w-5 h-5 rounded-full bg-[#12457F] text-white flex items-center justify-center text-[10px] font-black">
              A
            </div>
            <span className="text-xs font-black text-[#0B1B2B]">{userName}</span>
          </div>
        </div>
      </div>

      {/* Center: Donut Segment Chart (Matching top-left of image 1) */}
      <div className="py-4 flex items-center justify-center relative">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {/* Segment 1: Blue */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#2B62EE"
              strokeWidth="14"
              strokeDasharray="140 240"
              strokeLinecap="round"
            />
            {/* Segment 2: Light Blue */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="14"
              strokeDasharray="60 240"
              strokeDashoffset="-145"
              strokeLinecap="round"
            />
            {/* Segment 3: Pale track */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="#F1F5F9"
              strokeWidth="14"
              strokeDasharray="30 240"
              strokeDashoffset="-210"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-base font-black text-[#0B1B2B]">98.4%</span>
            <span className="text-[8px] font-bold text-slate-400 uppercase">Health</span>
          </div>
        </div>
      </div>

      {/* Bottom: responses, server + Learn More Pill (Matching top-left of image 1) */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100/80">
        <div className="text-[11px] text-slate-400 font-medium">
          responses, server.
        </div>
        <button
          onClick={onLearnMore}
          className="px-3.5 py-1.5 rounded-full bg-[#EEF2F6] hover:bg-[#E2E8F0] text-slate-700 text-xs font-bold transition-colors cursor-pointer"
        >
          Learn More
        </button>
      </div>

    </div>
  );
};
