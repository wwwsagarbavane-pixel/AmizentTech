import React from 'react';
import { Sparkles, Shield, Cpu, Award } from 'lucide-react';

interface ActivityProps {
  theme?: 'light' | 'dark';
  onSeeAll?: () => void;
}

export const LmsRecentActivityTable: React.FC<ActivityProps> = ({
  theme = 'light',
  onSeeAll
}) => {
  const isDark = theme === 'dark';

  const activities = [
    {
      id: '#73246',
      title: 'Autonomous Multi-Agent Swarms',
      type: 'Lab Assessment Passed',
      impact: '+120 XP',
      date: '02 Apr 26',
      icon: Cpu,
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      id: '#73557',
      title: 'Zero-Trust IAM Policy Enforcement',
      type: 'Hands-on Lab Verification',
      impact: '+85 XP',
      date: '02 Apr 26',
      icon: Shield,
      color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      id: '#95337',
      title: 'SAP BTP RESTful Application (RAP)',
      type: 'Interactive Video Checkpoint',
      impact: '+60 XP',
      date: '31 Mar 26',
      icon: Sparkles,
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      id: '#76295',
      title: 'Skill IQ Benchmark: Cloud Architecture',
      type: 'Verified Level IQ 284',
      impact: '+150 XP',
      date: '28 Mar 26',
      icon: Award,
      color: 'bg-amber-500/10 text-amber-500'
    }
  ];

  return (
    <div className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
      isDark
        ? 'bg-[#181924] border border-white/10 text-white shadow-xl'
        : 'bg-white border border-[#DCE7F2] text-[#122443] shadow-[0_4px_20px_rgba(18,69,127,0.06)]'
    }`}>
      
      {/* Header: Title and See All */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-black tracking-tight">Recent Activities</h4>
        <button
          onClick={onSeeAll}
          className={`text-xs font-bold transition-colors cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white' : 'text-[#758EA8] hover:text-[#1E75E8]'
          }`}
        >
          See all
        </button>
      </div>

      {/* Activities List (Matching transactions layout) */}
      <div className="space-y-3.5">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <div key={act.id} className="flex items-center justify-between text-xs">
              
              {/* Left: Icon + Title */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${act.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-bold tracking-tight truncate max-w-[130px] sm:max-w-[170px]">
                    {act.title}
                  </div>
                  <div className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
                    {act.type}
                  </div>
                </div>
              </div>

              {/* Center: XP / Impact */}
              <div className="text-right font-mono font-bold text-emerald-500">
                {act.impact}
              </div>

              {/* Right: Date & Hash ID */}
              <div className="text-right pl-2 hidden sm:block">
                <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
                  {act.date}
                </div>
                <div className={`text-[9px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {act.id}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
