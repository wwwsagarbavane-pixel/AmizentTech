import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface ChartProps {
  theme?: 'light' | 'dark';
}

export const LmsStatisticsSplineChart: React.FC<ChartProps> = ({ theme = 'light' }) => {
  const { currentUser } = useAuth();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState('All Cohorts');
  const [activeCategory, setActiveCategory] = useState('Skill IQ & Labs');
  const [activePeriod, setActivePeriod] = useState('This week');

  return (
    <div className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
      isDark
        ? 'bg-[#181924] border border-white/10 text-white shadow-xl'
        : 'bg-white border border-[#DCE7F2] text-[#122443] shadow-[0_4px_20px_rgba(18,69,127,0.06)]'
    }`}>
      
      {/* Header: Title on Left, Filter Pills on Right (Exact match from media_1794995294568_7a1073d6.jpg) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-black tracking-tight">Statistic</h3>
          <p className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
            Skill Velocity &amp; Benchmark Progression
          </p>
        </div>

        {/* Filter Pills with Chevron */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filter 1 */}
          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border cursor-pointer transition-colors ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300' 
              : 'bg-[#F0F6FD] border-[#DCE7F2] hover:bg-[#E4EEF8] text-[#12457F]'
          }`}>
            <span>{activeFilter}</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </div>

          {/* Filter 2 */}
          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border cursor-pointer transition-colors ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300' 
              : 'bg-[#F0F6FD] border-[#DCE7F2] hover:bg-[#E4EEF8] text-[#12457F]'
          }`}>
            <span>{activeCategory}</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </div>

          {/* Filter 3 */}
          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border cursor-pointer transition-colors ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300' 
              : 'bg-[#F0F6FD] border-[#DCE7F2] hover:bg-[#E4EEF8] text-[#12457F]'
          }`}>
            <span>{activePeriod}</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </div>
        </div>
      </div>

      {/* SVG Multi-Wave Chart Area with Y-axis and Marker Pill */}
      <div className="relative mt-6 h-56 sm:h-64 w-full flex items-center">

        {/* Y-Axis Ticks (matching the $350 - $50 in image) */}
        <div className={`flex flex-col justify-between h-44 text-[10px] font-mono pr-3 border-r ${
          isDark ? 'border-white/10 text-slate-500' : 'border-slate-100 text-slate-400'
        }`}>
          <span>300 IQ</span>
          <span>280 IQ</span>
          <span>250 IQ</span>
          <span>200 IQ</span>
          <span>150 IQ</span>
          <span>100 IQ</span>
          <span>50 IQ</span>
        </div>

        {/* Graph Canvas */}
        <div className="flex-1 h-full relative pl-2">
          
          <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="w-full h-44 overflow-visible">
            <defs>
              {/* Primary Glowing Gradient for Main White/Violet Wave */}
              <linearGradient id="mainWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C82FC" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>

              {/* Secondary Wave Gradient */}
              <linearGradient id="secWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E06292" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8C82FC" stopOpacity="0.4" />
              </linearGradient>

              {/* Area Glow under main wave */}
              <linearGradient id="waveAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8C82FC" stopOpacity={isDark ? 0.25 : 0.15} />
                <stop offset="100%" stopColor="#8C82FC" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            {[20, 50, 80, 110, 140, 170].map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={y}
                x2="600"
                y2={y}
                stroke={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(18,69,127,0.06)'}
                strokeDasharray="4 4"
              />
            ))}

            {/* Area Fill */}
            <path
              d="M 0 140 C 70 80, 120 180, 200 130 C 260 80, 310 160, 380 90 C 440 30, 500 110, 600 40 L 600 200 L 0 200 Z"
              fill="url(#waveAreaGrad)"
            />

            {/* Secondary Pink/Purple Wave (like in media_1794995294568_7a1073d6.jpg) */}
            <path
              d="M 0 110 C 90 160, 160 50, 240 140 C 320 210, 410 70, 510 150 C 560 170, 590 120, 600 100"
              fill="none"
              stroke="url(#secWaveGrad)"
              strokeWidth="1.8"
              strokeDasharray="3 3"
            />

            {/* Primary Glowing High-Contrast Main Wave */}
            <path
              d="M 0 140 C 70 80, 120 180, 200 130 C 260 80, 310 160, 380 90 C 440 30, 500 110, 600 40"
              fill="none"
              stroke="url(#mainWaveGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter={isDark ? 'drop-shadow(0 0 8px rgba(140, 130, 252, 0.8))' : 'drop-shadow(0 2px 8px rgba(27, 88, 166, 0.4))'}
            />

            {/* Interactive Anchor Point Marker on the peak (X=380, Y=90) */}
            <circle cx="380" cy="90" r="5" fill="#FFFFFF" stroke="#8C82FC" strokeWidth="2.5" />
            <circle cx="510" cy="80" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>

          {/* Floating Tooltip Pill with Avatar (Exact matching the "Jason - $234.25" badge!) */}
          <div 
            className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{ left: '63%', top: '38%' }}
          >
            <div className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xl border ${
              isDark 
                ? 'bg-[#252839] border-white/20 text-white' 
                : 'bg-white border-[#C8D7E8] text-[#122443]'
            }`}>
              <img
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'}
                alt="User"
                className="w-4 h-4 rounded-full object-cover"
              />
              <span className="text-[10px] font-black font-mono">
                {currentUser?.name?.split(' ')[0] || 'Jason'}
              </span>
              <span className="text-[9px] font-extrabold text-emerald-500 font-mono">
                284 IQ
              </span>
            </div>
            {/* Little pointer triangle */}
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white mx-auto" />
          </div>

        </div>

      </div>

      {/* X-Axis Dates */}
      <div className={`flex justify-between items-center pl-14 pt-2 text-[10px] font-mono ${
        isDark ? 'text-slate-500' : 'text-slate-400'
      }`}>
        <span>Mar 27</span>
        <span>Mar 28</span>
        <span>Mar 29</span>
        <span>Mar 30</span>
        <span>Mar 31</span>
        <span>Apr 1</span>
        <span>Apr 2</span>
      </div>

    </div>
  );
};
