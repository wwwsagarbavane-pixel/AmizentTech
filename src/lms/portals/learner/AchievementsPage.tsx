import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  Award, 
  Star, 
  Lock, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  X,
  Share2
} from 'lucide-react';
import { LmsStorage } from '../../storage/lmsStorage';
import { LmsAchievement } from '../../types/lmsTypes';

export const AchievementsPage: React.FC = () => {
  const achievements = LmsStorage.getAchievements();
  const [activeTab, setActiveTab] = useState<'all' | 'earned' | 'locked' | 'milestones'>('all');
  const [selectedAchievement, setSelectedAchievement] = useState<LmsAchievement | null>(null);

  const earnedAchievements = achievements.filter(a => a.earned);
  const lockedAchievements = achievements.filter(a => !a.earned);

  const filteredList = achievements.filter(a => {
    if (activeTab === 'earned') return a.earned;
    if (activeTab === 'locked') return !a.earned;
    if (activeTab === 'milestones') return (a.category as string) === 'Milestone' || a.category === 'excellence';
    return true;
  });

  const getBadgeIcon = (iconName: string, earned: boolean) => {
    const cls = `w-7 h-7 ${earned ? 'text-amber-500' : 'text-slate-400'}`;
    switch (iconName) {
      case 'Flame': return <Flame className={cls} />;
      case 'Award': return <Award className={cls} />;
      case 'Star': return <Star className={cls} />;
      case 'Sparkles': return <Sparkles className={cls} />;
      case 'Users': return <Users className={cls} />;
      default: return <Trophy className={cls} />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[1700px] mx-auto select-none pb-12">
      
      {/* 1. Header - Compact & Sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#0B1B2B] tracking-tight">
              Achievements &amp; Badges
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
              {earnedAchievements.length} of {achievements.length} Unlocked
            </span>
          </div>
          <p className="text-xs text-[#758EA8] font-medium mt-0.5">
            Consecutive study streaks, panel milestones, and verified credentials.
          </p>
        </div>
      </div>

      {/* 2. Summary KPI Cards in Frosted Glass */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Total Badges</span>
          <div className="text-2xl font-black text-[#0B1B2B] mt-1 font-mono">{achievements.length}</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Current Streak</span>
          <div className="text-2xl font-black text-amber-500 mt-1 font-mono">14 Days 🔥</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Longest Streak</span>
          <div className="text-2xl font-black text-[#2B62EE] mt-1 font-mono">28 Days</div>
        </div>

        <div className="bg-white/75 backdrop-blur-2xl p-5 rounded-[28px] border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#758EA8]">Earned Badges</span>
          <div className="text-2xl font-black text-emerald-500 mt-1 font-mono">{earnedAchievements.length}</div>
        </div>
      </div>

      {/* 3. Streak Calendar Heatmap in Frosted Glass */}
      <div className="bg-white/75 backdrop-blur-2xl rounded-[36px] p-6 sm:p-7 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-black uppercase text-[#2B62EE] tracking-wider block">Consistency Matrix</span>
            <h3 className="text-base font-black text-[#0B1B2B] mt-0.5">Active Learning Days Heatmap</h3>
          </div>
          <span className="text-xs font-bold text-slate-500">Daily Target: 30 mins study</span>
        </div>

        {/* 28-day Activity Grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {Array.from({ length: 28 }).map((_, i) => {
            const isActive = i <= 14; // past 14 days active streak
            return (
              <div 
                key={i} 
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                  isActive 
                    ? 'bg-gradient-to-tr from-[#12457F] via-[#2B62EE] to-[#38BDF8] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Main Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F0F5FD]/80 backdrop-blur-md border border-white/80 text-xs font-bold w-fit">
        {(['all', 'earned', 'locked', 'milestones'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full capitalize cursor-pointer transition-all ${
              activeTab === tab
                ? 'bg-[#0B1B2B] text-white font-black shadow-xs'
                : 'text-slate-600 hover:text-[#0B1B2B]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 5. Achievement Grid in Frosted Glass */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setSelectedAchievement(ach)}
            className={`bg-white/75 backdrop-blur-2xl rounded-[32px] p-6 border border-white/90 shadow-[0_15px_40px_rgba(20,50,90,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl ${
              ach.earned ? 'hover:border-amber-200' : 'opacity-80'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  ach.earned ? 'bg-amber-100/70' : 'bg-slate-100'
                }`}>
                  {getBadgeIcon(ach.badgeIcon, ach.earned)}
                </div>

                {ach.earned ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase">
                    Earned
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                )}
              </div>

              <h4 className="text-base font-black text-[#0B1B2B] group-hover:text-[#2B62EE] transition-colors leading-snug">
                {ach.title}
              </h4>

              <p className="text-xs text-[#758EA8] leading-relaxed">
                {ach.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] flex items-center justify-between">
              <span className="text-slate-400">Condition: {ach.unlockCondition}</span>
              {ach.earnedDate && <span className="font-bold text-[#2B62EE]">{ach.earnedDate}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-white/90 text-center space-y-4 animate-in fade-in zoom-in-95 text-xs">
            <div className="flex justify-end">
              <button onClick={() => setSelectedAchievement(null)} className="p-1 rounded-full text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              {getBadgeIcon(selectedAchievement.badgeIcon, selectedAchievement.earned)}
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-[#2B62EE] tracking-wider">{selectedAchievement.category}</span>
              <h3 className="text-xl font-black text-[#0B1B2B]">{selectedAchievement.title}</h3>
            </div>

            <p className="text-[#4A607A] leading-relaxed">
              {selectedAchievement.description}
            </p>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-slate-100 space-y-1">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Requirement</div>
              <div className="font-bold text-[#0B1B2B]">{selectedAchievement.unlockCondition}</div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => { alert('Shared achievement credential on LinkedIn!'); setSelectedAchievement(null); }}
                className="px-5 py-2.5 rounded-full bg-[#0B1B2B] hover:bg-black text-white font-black flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Badge</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};