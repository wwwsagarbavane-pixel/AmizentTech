import React from 'react';
import { ExternalLink, Award, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface LmsProfileWidgetProps {
  theme?: 'light' | 'dark';
  onViewProfile?: () => void;
}

export const LmsProfileWidget: React.FC<LmsProfileWidgetProps> = ({
  theme = 'light',
  onViewProfile
}) => {
  const { currentUser } = useAuth();
  const isDark = theme === 'dark';

  return (
    <div className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
      isDark
        ? 'bg-[#181924] border border-white/10 text-white shadow-xl'
        : 'bg-white border border-[#DCE7F2] text-[#122443] shadow-[0_4px_20px_rgba(18,69,127,0.06)]'
    }`}>
      {/* Header with Title and External Link icon */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-black tracking-tight">Profile</h4>
        <button 
          onClick={onViewProfile}
          className={`p-1 rounded-lg transition-colors cursor-pointer ${
            isDark ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-[#EAF1F8] text-[#12457F]'
          }`}
          title="Open Full Profile"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Centered Circular Portrait with Ambient Shadow Halo */}
      <div className="flex flex-col items-center justify-center my-3 relative">
        <div className="relative">
          <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#1E75E8] to-[#8C82FC] shadow-lg">
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'}
              alt={currentUser?.name || 'User Profile'}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Online Verified Status Dot */}
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center">
            <ShieldCheck className="w-2.5 h-2.5 text-white" />
          </span>
        </div>

        {/* User Name */}
        <div className="mt-2.5 text-center">
          <h3 className="text-base font-black tracking-tight">
            {currentUser?.name || 'Jason Jones'}
          </h3>
          <p className={`text-[11px] font-medium capitalize ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
            {currentUser?.role.replace('_', ' ')}
          </p>
        </div>
      </div>

      {/* Total Skill Credits / Balance Section */}
      <div className="text-center pt-1 border-t border-slate-100/10">
        <div className={`text-[11px] font-semibold tracking-wider uppercase ${isDark ? 'text-slate-400' : 'text-[#758EA8]'}`}>
          Total Credential Value
        </div>
        <div className="text-2xl sm:text-[26px] font-black tracking-tight font-mono text-[#1E75E8]">
          $ {currentUser?.walletBalanceUSD ? currentUser.walletBalanceUSD.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '24,093.00'}
        </div>
      </div>

    </div>
  );
};
