import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { INITIAL_USERS } from '../../data/mockLmsData';
import { LmsRole } from '../../types/lmsTypes';

interface CohortProps {
  theme?: 'light' | 'dark';
  onOpenRoleSwitcher?: () => void;
}

export const LmsCohortMembersWidget: React.FC<CohortProps> = ({
  theme = 'light',
  onOpenRoleSwitcher
}) => {
  const { currentUser, switchRole } = useAuth();
  const isDark = theme === 'dark';

  return (
    <div className={`p-5 rounded-2xl flex items-center justify-between transition-all duration-300 relative overflow-hidden ${
      isDark
        ? 'bg-[#181924] border border-white/10 text-white shadow-xl'
        : 'bg-white border border-[#DCE7F2] text-[#122443] shadow-[0_4px_20px_rgba(18,69,127,0.06)]'
    }`}>
      
      {/* Left: Title + Avatar circles */}
      <div className="space-y-2">
        <h4 className="text-xs font-black tracking-tight uppercase">
          Cohort Peers &amp; Leaders
        </h4>
        
        <div className="flex items-center -space-x-2">
          {INITIAL_USERS.slice(0, 4).map((u) => (
            <div 
              key={u.id}
              onClick={() => switchRole(u.role)}
              title={`Switch to ${u.name} (${u.role})`}
              className="relative cursor-pointer transition-transform hover:scale-110 hover:z-20"
            >
              <img
                src={u.avatar}
                alt={u.name}
                className={`w-9 h-9 rounded-full object-cover ring-2 ${
                  currentUser?.id === u.id ? 'ring-[#1E75E8]' : 'ring-white/80'
                }`}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
          ))}
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black ring-2 ${
            isDark ? 'bg-white/10 text-white ring-white/20' : 'bg-[#EAF1F8] text-[#12457F] ring-white'
          }`}>
            +18
          </div>
        </div>
      </div>

      {/* Right: Switch account button (Exact styling from media_1794995294568_7a1073d6.jpg) */}
      <div>
        <button
          onClick={onOpenRoleSwitcher}
          className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer active:scale-95 ${
            isDark
              ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
              : 'bg-[#12457F] hover:bg-[#1B58A6] text-white shadow-sm'
          }`}
        >
          Switch role
        </button>
      </div>

    </div>
  );
};
