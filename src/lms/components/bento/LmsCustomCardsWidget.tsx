import React from 'react';
import { Plus, Lock, Users, Sparkles } from 'lucide-react';

interface LmsCustomCardsWidgetProps {
  memberCount?: number;
  category?: string;
  title?: string;
  subtitle?: string;
  onAdd?: () => void;
}

export const LmsCustomCardsWidget: React.FC<LmsCustomCardsWidgetProps> = ({
  memberCount = 25,
  category = 'BLOGGERS',
  title = 'Custom Cards',
  subtitle = 'Generate with AI',
  onAdd
}) => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-[0_20px_50px_rgba(20,50,90,0.06)] border border-slate-100/90 relative flex flex-col justify-between select-none group">
      
      {/* Floating Inner Mini Card (Exact match to image 1) */}
      <div className="bg-gradient-to-br from-[#F8FAFD] via-white to-[#EEF4FF] rounded-2xl p-3.5 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Top: Avatars Stack + Members Count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center -space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
              alt="Member 1"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
              alt="Member 2"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          </div>
          <span className="text-[11px] font-bold text-[#7A889B]">
            {memberCount} Members
          </span>
        </div>

        {/* Bottom Tag Bar: BLOGGERS + Lock + Blue Plus Pill */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100/80">
          <span className="text-[10px] font-black tracking-wider text-[#0B1B2B] uppercase">
            {category}
          </span>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-slate-400" />
            <button
              onClick={onAdd}
              className="w-5 h-5 rounded-md bg-[#2B62EE] text-white flex items-center justify-center hover:bg-[#1E50CE] transition-colors shadow-xs"
            >
              <Plus className="w-3 h-3 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Title & Subtitle */}
      <div className="pt-4">
        <h4 className="text-base font-black text-[#0B1B2B] tracking-tight">
          {title}
        </h4>
        <p className="text-xs font-bold text-[#7A889B] mt-0.5">
          {subtitle}
        </p>
      </div>

    </div>
  );
};
