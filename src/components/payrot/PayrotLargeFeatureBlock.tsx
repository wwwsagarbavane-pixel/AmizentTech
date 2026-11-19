import React, { useState } from 'react';
import { NavPage } from '../../types';
import {
  Play,
  ArrowRight,
  Sparkles,
  Download,
  Trash2,
  Settings as SettingsIcon,
  Maximize2,
  Volume2,
  TrendingUp,
  RotateCcw,
  LayoutGrid
} from 'lucide-react';

interface PayrotLargeFeatureBlockProps {
  onNavigate: (page: NavPage) => void;
}

export const PayrotLargeFeatureBlock: React.FC<PayrotLargeFeatureBlockProps> = ({ onNavigate }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'midnight'>('light');
  const [activeCodeTab, setActiveCodeTab] = useState<'filter' | 'email'>('filter');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const isDark = themeMode === 'midnight';

  return (
    <section className={`py-20 lg:py-28 transition-colors duration-300 relative overflow-hidden ${
      isDark ? 'bg-[#090D16] text-white' : 'bg-[#FAFCFF] text-[#0F172A]'
    }`}>
      
      {/* Background soft ambient radial illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-blue-100/30 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER & THEME SWITCHER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          
          <div className="space-y-4 max-w-2xl">
            {/* Top Badge: • • + WHAT SETS AMIZENT TECH APART */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FF] text-[#2563EB] text-[11px] font-black tracking-wider uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/50" />
              <span className="text-xs">+</span>
              <span>WHAT SETS AMIZENT TECH APART</span>
            </div>

            {/* Headline matching exact reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12]">
              Technology capability for the <span className="text-[#2563EB]">AI era.</span>
              <span className="block mt-1">Proven by outcomes.</span>
            </h2>
          </div>

          {/* Right Action Controls: Theme Pill Switcher & Learn More Button */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Mode Switcher Pill */}
            <div className="p-1 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setThemeMode('light')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  themeMode === 'light'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Amizent Light
              </button>
              <button
                type="button"
                onClick={() => setThemeMode('midnight')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  themeMode === 'midnight'
                    ? 'bg-[#0B1528] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Midnight Contrast
              </button>
            </div>

            {/* Learn More Button */}
            <button
              onClick={() => onNavigate('solutions')}
              className={`px-5 py-2 rounded-full border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isDark
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-slate-300 text-slate-800 hover:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

        {/* 3. FOUR INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ============================================================== */}
          {/* CARD 1: Precision Skill Benchmarks                             */}
          {/* ============================================================== */}
          <div className={`rounded-[32px] p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
            isDark
              ? 'bg-[#121A2B] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-100 shadow-[0_20px_50px_rgba(20,50,90,0.05)]'
          }`}>
            
            {/* Inner Interactive Benchmark Visual Mockup */}
            <div className={`rounded-2xl p-4 border flex flex-col justify-between h-[210px] ${
              isDark ? 'bg-[#0B1320] border-white/10' : 'bg-[#F8FAFD] border-slate-100'
            }`}>
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-black text-sm tracking-tight text-[#0B1B2B] dark:text-white">
                  Skill IQ
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4FF] text-[#2563EB] text-[10px] font-black tracking-wide">
                  • AI Assessed
                </span>
              </div>

              {/* Tiers Scale Horizontal Bar */}
              <div className="grid grid-cols-5 text-center text-[9px] font-bold text-slate-400 pt-2 border-b border-slate-200/60 pb-1">
                <span>Novice</span>
                <span>Emerging</span>
                <span>Average</span>
                <span className="text-[#2563EB] font-black bg-blue-100/50 rounded py-0.5">Above Avg</span>
                <span>Expert</span>
              </div>

              {/* SVG Dynamic Rising Curve Chart with 172 Score Node */}
              <div className="relative h-20 w-full mt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 65" fill="none">
                  <defs>
                    <linearGradient id="skillLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#93C5FD" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                  {/* Grid Guidelines */}
                  <line x1="0" y1="55" x2="200" y2="55" stroke="#E2E8F0" strokeDasharray="3 3" />
                  <line x1="0" y1="30" x2="200" y2="30" stroke="#E2E8F0" strokeDasharray="3 3" />

                  {/* Rising Curved Line */}
                  <path
                    d="M 10 50 Q 70 45 110 32 T 190 8"
                    stroke="url(#skillLineGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Node Circle & Value Pin at 172 */}
                  <circle cx="140" cy="22" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                  
                  {/* Floating Pill Label 172 */}
                  <rect x="126" y="2" width="28" height="15" rx="7.5" fill="#2563EB" />
                  <text x="140" y="13" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                    172
                  </text>
                </svg>
              </div>

              {/* X-axis Bands */}
              <div className="grid grid-cols-5 text-center text-[8.5px] font-mono text-slate-400 pt-1">
                <span>0-19</span>
                <span>20-39</span>
                <span>40-59</span>
                <span className="text-[#2563EB] font-bold">60-79</span>
                <span>80-99</span>
              </div>
            </div>

            {/* Bottom Content Info */}
            <div className="pt-5">
              <h3 className="font-black text-base tracking-tight text-[#0B1B2B] dark:text-white">
                Precision Skill Benchmarks
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                Measure team readiness across AI &amp; cloud.
              </p>
            </div>

          </div>

          {/* ============================================================== */}
          {/* CARD 2: Expert-Led Video Paths                                 */}
          {/* ============================================================== */}
          <div className={`rounded-[32px] p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
            isDark
              ? 'bg-[#121A2B] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-100 shadow-[0_20px_50px_rgba(20,50,90,0.05)]'
          }`}>
            
            {/* Inner Video Player Mockup */}
            <div className="rounded-2xl bg-[#09111E] border border-slate-800 p-3 flex flex-col justify-between h-[210px] relative overflow-hidden text-white">
              
              {/* Video Player Top Bar */}
              <div className="flex items-center justify-between text-xs z-10">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-4 h-4 rounded bg-[#2563EB] flex items-center justify-center shrink-0">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="font-bold text-[11px] truncate text-slate-200">
                    Advanced Claude ...
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-400">
                  HD • 14:20
                </span>
              </div>

              {/* Video Stage with Instructor & Live Lab Badge */}
              <div className="relative my-auto flex items-center justify-center py-2">
                {/* Live Lab Chip */}
                <div className="absolute top-0 left-0 px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-[8.5px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE LAB</span>
                </div>

                {/* Terminal Snippet Floating on Right */}
                <div className="absolute top-0 right-0 bg-[#0F1D33]/90 border border-slate-700/80 rounded-lg p-1.5 text-[8px] font-mono text-cyan-300">
                  <span className="text-slate-400">$</span> claude --agent<br />
                  <span className="text-emerald-400">✔ Refactoring API</span>
                </div>

                {/* Animated Play Button */}
                <button
                  type="button"
                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  className="w-11 h-11 rounded-full bg-white text-[#2563EB] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5 text-[#2563EB]" />
                </button>
              </div>

              {/* Video Controls Bar */}
              <div className="space-y-1.5 z-10">
                {/* Progress Timeline */}
                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2563EB] w-[35%]" />
                </div>

                <div className="flex items-center justify-between text-[9px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="w-3 h-3 text-slate-400" />
                    <span className="font-mono">04:56 / 14:20</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[8px] px-1 py-0.5 border border-slate-700 rounded">CC</span>
                    <SettingsIcon className="w-3 h-3" />
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Content Info */}
            <div className="pt-5">
              <h3 className="font-black text-base tracking-tight text-[#0B1B2B] dark:text-white">
                Expert-Led Video Paths
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                Hands-on lessons built for real workflows.
              </p>
            </div>

          </div>

          {/* ============================================================== */}
          {/* CARD 3: In-Browser Code Labs                                   */}
          {/* ============================================================== */}
          <div className={`rounded-[32px] p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
            isDark
              ? 'bg-[#121A2B] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-100 shadow-[0_20px_50px_rgba(20,50,90,0.05)]'
          }`}>
            
            {/* Inner IDE / Code Editor Mockup */}
            <div className="rounded-2xl bg-[#09111E] border border-slate-800 p-3 flex flex-col justify-between h-[210px] font-mono text-white text-xs">
              
              {/* Tabs */}
              <div className="flex items-center gap-1 border-b border-slate-800 pb-1">
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('email')}
                  className={`text-[9.5px] px-2 py-0.5 rounded cursor-pointer ${
                    activeCodeTab === 'email' ? 'bg-[#14233D] text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Email_Address.py
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeTab('filter')}
                  className={`text-[9.5px] px-2 py-0.5 rounded cursor-pointer ${
                    activeCodeTab === 'filter' ? 'bg-[#14233D] text-cyan-300 font-bold border-b border-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Filter_Data.py
                </button>
              </div>

              {/* Code Snippet lines */}
              <div className="text-[9px] leading-[1.35] text-slate-300 my-auto py-1">
                <div className="text-slate-400">1  <span className="text-purple-400">result</span> = {'{}'}</div>
                <div className="text-slate-400">2</div>
                <div className="text-slate-400">3  <span className="text-blue-400">def</span> <span className="text-yellow-300">search</span>(filename, text, text2):</div>
                <div className="text-slate-400">4    <span className="text-blue-400">with</span> <span className="text-yellow-300">open</span>(filename) <span className="text-blue-400">as</span> f:</div>
                <div className="text-slate-400">5      <span className="text-blue-400">for</span> line <span className="text-blue-400">in</span> f:</div>
                <div className="text-slate-400">6        <span className="text-blue-400">if</span> text <span className="text-blue-400">in</span> line <span className="text-blue-400">and</span> text2 <span className="text-blue-400">in</span> line:</div>
                <div className="text-slate-400">7          <span className="text-yellow-300">print</span>(line)</div>
                <div className="text-slate-500">8          # Modify the two lines below</div>
                <div className="text-slate-500">9          # result.append(line)</div>
              </div>

              {/* Bottom Toolbar */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-1 text-[9px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <button type="button" className="w-4 h-4 rounded bg-[#2563EB] text-white flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </button>
                  <Download className="w-3 h-3" />
                  <Trash2 className="w-3 h-3" />
                </div>
                <span className="text-emerald-400 font-mono text-[8.5px]">Python 3.12 • Ready</span>
              </div>

            </div>

            {/* Bottom Content Info */}
            <div className="pt-5">
              <h3 className="font-black text-base tracking-tight text-[#0B1B2B] dark:text-white">
                In-Browser Code Labs
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                Practice directly in zero-setup sandboxes.
              </p>
            </div>

          </div>

          {/* ============================================================== */}
          {/* CARD 4: Enterprise Analytics                                   */}
          {/* ============================================================== */}
          <div className={`rounded-[32px] p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
            isDark
              ? 'bg-[#121A2B] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              : 'bg-white border-slate-100 shadow-[0_20px_50px_rgba(20,50,90,0.05)]'
          }`}>
            
            {/* Inner Analytics Chart Mockup */}
            <div className={`rounded-2xl p-4 border flex flex-col justify-between h-[210px] ${
              isDark ? 'bg-[#0B1320] border-white/10' : 'bg-[#F8FAFD] border-slate-100'
            }`}>
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-black text-sm text-[#0B1B2B] dark:text-white">Usage</span>
                  <span className="text-[10px] text-slate-400 block font-medium">Team viewing hours</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold">
                  +24%
                </span>
              </div>

              {/* Chart Stage with Y-Axis and SVG Smooth Curve */}
              <div className="flex items-stretch gap-2 my-auto py-1">
                {/* Y-axis */}
                <div className="flex flex-col justify-between text-[8px] font-mono text-slate-400">
                  <span>3200</span>
                  <span>2400</span>
                  <span>1600</span>
                  <span>800</span>
                  <span>0</span>
                </div>

                {/* SVG Curve with Connected Data Nodes */}
                <div className="flex-1 relative h-20">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 160 60" fill="none">
                    {/* Grid Lines */}
                    <line x1="0" y1="15" x2="160" y2="15" stroke="#E2E8F0" strokeDasharray="2 2" />
                    <line x1="0" y1="35" x2="160" y2="35" stroke="#E2E8F0" strokeDasharray="2 2" />
                    <line x1="0" y1="55" x2="160" y2="55" stroke="#E2E8F0" strokeDasharray="2 2" />

                    {/* Blue Trajectory Line */}
                    <path
                      d="M 10 40 L 50 30 L 90 38 L 145 10"
                      stroke="#2563EB"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Nodes */}
                    <circle cx="10" cy="40" r="3" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="50" cy="30" r="3" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="90" cy="38" r="3" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="145" cy="10" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* X-axis Dates */}
              <div className="grid grid-cols-4 text-center text-[8.5px] font-mono text-slate-400 pl-6">
                <span>01/11</span>
                <span>01/25</span>
                <span>02/08</span>
                <span>02/22</span>
              </div>

            </div>

            {/* Bottom Content Info */}
            <div className="pt-5">
              <h3 className="font-black text-base tracking-tight text-[#0B1B2B] dark:text-white">
                Enterprise Analytics
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                Track adoption, hours, and ROI in real time.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
