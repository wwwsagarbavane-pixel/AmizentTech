import React from 'react';
import { ExternalLink, TrendingUp, Clock } from 'lucide-react';

interface MetricProps {
  title: string;
  subtitle: string;
  value: string;
  type: 'line' | 'bars';
  theme?: 'light' | 'dark';
  onClick?: () => void;
}

export const LmsMiniMetricCard: React.FC<MetricProps> = ({
  title,
  subtitle,
  value,
  type,
  theme = 'light',
  onClick
}) => {
  const isDark = theme === 'dark';

  return (
    <div 
      onClick={onClick}
      className={`p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] cursor-pointer relative overflow-hidden ${
        isDark
          ? 'bg-[#181924] border border-white/10 text-white shadow-xl'
          : 'bg-white border border-[#DCE7F2] text-[#122443] shadow-[0_4px_20px_rgba(18,69,127,0.06)]'
      }`}
    >
      {/* Top Row: Title, Subtitle, and Popout icon */}
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-black tracking-tight">{title}</h4>
          <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
            {subtitle}
          </span>
        </div>
        <button className={`p-1 rounded-lg transition-colors ${
          isDark ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-[#EAF1F8] text-[#12457F]'
        }`}>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Metric Value */}
      <div className="py-2">
        <div className="text-2xl sm:text-3xl font-black tracking-tight font-mono">
          {value}
        </div>
      </div>

      {/* Visual Indicator: Either Glowing Smooth Line Wave OR Vertical Equalizer Bars (Exact match from image) */}
      <div className="h-10 w-full relative pt-1">
        {type === 'line' ? (
          // Smooth glowing line chart with glowing point
          <svg viewBox="0 0 200 40" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="miniLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8C82FC" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            <path
              d="M 0 30 Q 30 28, 60 20 T 110 32 T 150 12 T 200 6"
              fill="none"
              stroke="url(#miniLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Glowing marker dot at end */}
            <circle cx="150" cy="12" r="3" fill="#FFFFFF" stroke="#8C82FC" strokeWidth="2" />
            <circle cx="200" cy="6" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        ) : (
          // Vertical Equalizer Bars matching the image
          <div className="flex items-end justify-between h-8 px-1 gap-1">
            {[4, 6, 8, 5, 9, 12, 10, 14, 16, 22, 28, 32, 24, 30].map((height, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  i >= 9 
                    ? isDark ? 'bg-white' : 'bg-[#1E75E8]' 
                    : isDark ? 'bg-white/20' : 'bg-[#DCE7F2]'
                }`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
