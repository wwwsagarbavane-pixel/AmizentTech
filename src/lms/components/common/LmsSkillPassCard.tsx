import React from 'react';
import { Wifi, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface LmsSkillPassCardProps {
  cardHolderName?: string;
  skillIq?: number;
  cardNumber?: string;
  theme?: 'light' | 'dark';
}

export const LmsSkillPassCard: React.FC<LmsSkillPassCardProps> = ({
  cardHolderName,
  skillIq = 284,
  cardNumber = 'AMZ 2026 8894 3441',
  theme = 'light'
}) => {
  const { currentUser } = useAuth();
  const name = cardHolderName || currentUser?.name || 'JASON JONES';

  return (
    <div className="relative group perspective">
      {/* Background stacked shadow cards (just like in media_1794995294568_7a1073d6.jpg) */}
      <div className={`absolute -bottom-2.5 left-3 right-3 h-14 rounded-2xl transition-all duration-300 opacity-60 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#1c1d29] to-[#252839] border border-white/5' 
          : 'bg-[#BBD1E6] border border-[#A5C0DD]'
      }`} />
      
      <div className={`absolute -bottom-1.5 left-1.5 right-1.5 h-14 rounded-2xl transition-all duration-300 opacity-80 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#282a3d] to-[#343852] border border-white/10' 
          : 'bg-[#CADBED] border border-[#BBD1E6]'
      }`} />

      {/* Main Front Credit / Skill Pass Card */}
      <div 
        className={`relative z-10 w-full aspect-[1.58/1] rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#8C82FC]/30 via-[#4E478C]/40 to-[#1F1E2E] border border-white/20 text-white backdrop-blur-xl'
            : 'bg-gradient-to-br from-[#12457F] via-[#1B58A6] to-[#1E75E8] border border-white/40 text-white'
        }`}
        style={{
          boxShadow: theme === 'dark' 
            ? '0 20px 40px -15px rgba(140, 130, 252, 0.25)' 
            : '0 20px 40px -15px rgba(27, 88, 166, 0.35)'
        }}
      >
        {/* Subtle holographic sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none transform -skew-x-12" />

        {/* Top Card Row: Brand Name + Gold Chip + Contactless wave */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            {/* Metallic Gold Chip */}
            <div className="w-9 h-7 rounded-md bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] border border-[#AA771C]/50 flex items-center justify-center p-0.5 shadow-inner">
              <div className="w-full h-full border border-amber-900/20 rounded-xs flex flex-col justify-around py-0.5">
                <div className="h-[1px] bg-amber-900/30 w-full" />
                <div className="h-[1px] bg-amber-900/30 w-full" />
              </div>
            </div>
            <Wifi className="w-4 h-4 text-white/80 rotate-90" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black tracking-wider uppercase opacity-90 font-mono">
              AMIZENT TECH
            </span>
            {/* Master Dual Rings Emblem */}
            <div className="flex -space-x-2">
              <span className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90 inline-block" />
              <span className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90 inline-block" />
            </div>
          </div>
        </div>

        {/* Card Number */}
        <div className="relative z-10 py-1">
          <div className="text-base sm:text-lg md:text-xl font-mono tracking-[0.20em] font-bold text-white drop-shadow-md">
            {cardNumber}
          </div>
        </div>

        {/* Bottom Card Row: Cardholder Name + Skill IQ Badge */}
        <div className="flex items-end justify-between relative z-10 pt-1">
          <div>
            <div className="text-[9px] font-semibold tracking-wider text-white/70 uppercase">
              CERTIFIED ENTERPRISE LEARNER
            </div>
            <div className="text-xs sm:text-sm font-black tracking-wider uppercase font-mono text-white">
              {name}
            </div>
          </div>

          <div className="text-right flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-black tracking-wider font-mono text-white">
              IQ {skillIq}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
