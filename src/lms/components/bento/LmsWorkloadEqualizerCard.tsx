import React from 'react';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

interface LmsWorkloadEqualizerCardProps {
  title?: string;
  metric?: string;
  unit?: string;
  badgePercent?: number;
}

export const LmsWorkloadEqualizerCard: React.FC<LmsWorkloadEqualizerCardProps> = ({
  title = 'Warehouse workload',
  metric = '5.867',
  unit = '/ uploads',
  badgePercent = 84
}) => {
  // 36 vertical bars with varying heights matching image 2
  const barHeights = [
    25, 40, 70, 90, 45, 30, 60, 85, 35, 55, 100, 75,
    30, 45, 65, 80, 50, 40, 70, 95, 45, 30, 85, 60,
    40, 55, 75, 90, 50, 35, 65, 80, 45, 60, 95, 70
  ];

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
          {/* Warehouse 84% Badge */}
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-bold block">Warehouse</span>
            <span className="text-xs font-black text-emerald-600">{badgePercent}%</span>
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

      {/* Centerpiece: Clean Vivid Green Equalizer Bars (Exact match to image 2) */}
      <div className="pt-8 pb-2">
        <div className="flex items-end justify-between gap-1 h-28 w-full px-1">
          {barHeights.map((h, i) => (
            <div 
              key={i} 
              className="flex-1 flex flex-col justify-end items-center h-full group/bar"
            >
              <div 
                className="w-full max-w-[5px] bg-[#10B981] rounded-full transition-all duration-300 hover:bg-[#059669] hover:scale-y-110 origin-bottom"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        
        {/* Subtle Horizontal Base Line */}
        <div className="w-full h-px bg-slate-100 mt-2" />
      </div>

    </div>
  );
};
