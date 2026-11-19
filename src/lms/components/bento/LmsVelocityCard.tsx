import React from 'react';
import { Zap, ArrowUpRight } from 'lucide-react';

interface LmsVelocityCardProps {
  value?: string;
  unit?: string;
  subUnit?: string;
  title?: string;
}

export const LmsVelocityCard: React.FC<LmsVelocityCardProps> = ({
  value = '7.2',
  unit = 'ml',
  subUnit = 'oper./sec',
  title = 'Jet AI Operation Speed for Your Project'
}) => {
  return (
    <div className="bg-gradient-to-br from-[#4A7BF9] via-[#356CEF] to-[#205CEE] rounded-[32px] p-6 sm:p-7 text-white shadow-[0_20px_45px_rgba(37,99,235,0.28)] relative flex flex-col justify-between overflow-hidden select-none group">
      
      {/* Top Inner Ambient Sheen / Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12" />

      {/* Top Header Label */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <h4 className="text-xs sm:text-[13px] font-bold text-white/90 leading-snug max-w-[190px]">
          {title}
        </h4>
        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform">
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Big Bold Stat Number */}
      <div className="relative z-10 pt-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl sm:text-6xl font-black text-white tracking-tight font-sans drop-shadow-sm">
            {value}
          </span>
          <span className="text-2xl sm:text-3xl font-black text-white/90 tracking-tight">
            {unit}
          </span>
        </div>
        <div className="text-xs font-bold text-white/80 tracking-wide mt-0.5">
          {subUnit}
        </div>
      </div>

    </div>
  );
};
