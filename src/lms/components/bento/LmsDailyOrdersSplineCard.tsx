import React from 'react';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

interface LmsDailyOrdersSplineCardProps {
  title?: string;
  metric?: string;
  unit?: string;
  processedPercent?: number;
}

export const LmsDailyOrdersSplineCard: React.FC<LmsDailyOrdersSplineCardProps> = ({
  title = 'Daily picked orders',
  metric = '125.321',
  unit = '/ orders',
  processedPercent = 62
}) => {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-[0_20px_50px_rgba(20,50,90,0.06)] border border-slate-100/90 select-none flex flex-col justify-between group">
      
      {/* Top Header Row with Title, Metric and Controls */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-bold text-[#7A889B] tracking-wide">
            {title}
          </span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span className="text-2xl sm:text-3xl font-black text-[#0B1B2B] tracking-tight font-sans">
              {metric}
            </span>
            <span className="text-xs font-bold text-slate-400">
              {unit}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Processed 62% Badge */}
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-[10px] text-slate-400 font-bold">Processed</span>
              <span className="text-xs font-black text-emerald-600">{processedPercent}%</span>
            </div>
            <div className="w-16 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${processedPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-1 border border-slate-200/80 rounded-xl p-1 text-slate-400">
            <button className="p-1 hover:text-slate-700 transition-colors">
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button className="p-1 hover:text-slate-700 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Centerpiece: Flowing Vivid Green Spline Line Chart (Exact match to image 2) */}
      <div className="pt-6 pb-2 relative">
        <svg viewBox="0 0 500 130" className="w-full h-28 overflow-visible">
          <defs>
            <linearGradient id="splineGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area under curve */}
          <path
            d="M 0 100 
               C 50 110, 80 80, 130 95 
               C 180 110, 220 50, 270 70 
               C 320 90, 370 20, 420 85 
               C 450 120, 480 90, 500 105 
               L 500 130 L 0 130 Z"
            fill="url(#splineGreenGrad)"
          />

          {/* Flowing Stroke */}
          <path
            d="M 0 100 
               C 50 110, 80 80, 130 95 
               C 180 110, 220 50, 270 70 
               C 320 90, 370 20, 420 85 
               C 450 120, 480 90, 500 105"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Key Milestone Nodes (Glowing dots from image 2) */}
          <circle cx="270" cy="70" r="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
          <circle cx="420" cy="85" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        </svg>

        {/* Legend row */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mt-1 px-1">
          <span>140k</span>
          <span>110k</span>
          <span>80k</span>
          <span className="text-emerald-600 font-black">Peak velocity</span>
        </div>
      </div>

    </div>
  );
};
