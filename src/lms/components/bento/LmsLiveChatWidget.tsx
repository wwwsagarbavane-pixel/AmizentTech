import React from 'react';
import { Sparkles, MoreVertical, Send } from 'lucide-react';

interface LmsLiveChatWidgetProps {
  onGenerate?: () => void;
}

export const LmsLiveChatWidget: React.FC<LmsLiveChatWidgetProps> = ({ onGenerate }) => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-[0_20px_50px_rgba(20,50,90,0.06)] border border-slate-100/90 relative flex flex-col justify-between select-none overflow-hidden group">
      
      {/* Header Row: Live Chat title + Generate Black Pill */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100/80">
        <div className="flex items-center gap-2">
          <span className="text-sm font-black text-[#0B1B2B] tracking-tight">
            Live Chat
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <button
          onClick={onGenerate}
          className="px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-bold flex items-center gap-1.5 hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
        >
          <span>Generate</span>
          <div className="w-2 h-2 rounded-full bg-blue-400" />
        </button>
      </div>

      {/* Chat Messages Preview Area */}
      <div className="py-4 space-y-3 relative">
        
        {/* Message 1: Daniel Harrison (Electric Blue Bubble) */}
        <div className="flex items-start gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
            alt="Daniel Harrison"
            className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-0.5 border border-slate-200"
          />
          <div className="bg-[#2358EC] text-white p-3 rounded-2xl rounded-tl-sm text-xs leading-relaxed max-w-[260px] shadow-sm">
            <div className="text-[10px] font-bold text-blue-200 mb-0.5">Daniel Harrison</div>
            <div>You make really great work! Check out my learning portfolio, I'll be glad for any feedback!</div>
          </div>
        </div>

        {/* Message 2: You (Clean White Bubble) */}
        <div className="flex justify-end">
          <div className="bg-[#F0F5FD] text-[#0B1B2B] px-3.5 py-2 rounded-2xl rounded-tr-sm text-xs border border-slate-200/60 max-w-[220px]">
            <div className="text-[9px] font-bold text-[#7A889B]">You</div>
            <div>Hello! What lab module do you recommend first?</div>
          </div>
        </div>

        {/* Floating Mini Card: Matilda Evans with Slider Track (Exact match to image 1) */}
        <div className="mt-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-[0_12px_30px_rgba(20,50,90,0.12)]">
          <div className="flex items-center justify-between text-xs font-bold text-[#0B1B2B] mb-1.5">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
                alt="Matilda Evans"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-[11px] font-bold">Matilda Evans</span>
            </div>
            <span className="text-[10px] text-blue-600 font-bold">1K FOLLOWERS</span>
          </div>

          {/* Interactive Blue Slider Bar */}
          <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full" />
          </div>
        </div>

      </div>

    </div>
  );
};
