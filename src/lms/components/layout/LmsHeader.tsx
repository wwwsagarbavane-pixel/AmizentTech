import React, { useState } from 'react';
import {
  Search,
  Bell,
  Settings,
  LogOut,
  ShieldCheck,
  ChevronDown,
  Check,
  Sparkles,
  Command,
  Menu
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsRole } from '../../types/lmsTypes';
import { LmsStorage } from '../../storage/lmsStorage';

interface LmsHeaderProps {
  onSearch?: (query: string) => void;
  onOpenSettings?: () => void;
  onOpenProfile?: () => void;
  onToggleMobileSidebar?: () => void;
}

export const LmsHeader: React.FC<LmsHeaderProps> = ({
  onSearch,
  onOpenSettings,
  onOpenProfile,
  onToggleMobileSidebar
}) => {
  const { currentUser, activeRole, switchRole, logout } = useAuth();

  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);
  const notifications = LmsStorage.getNotifications();
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const roles: { key: LmsRole; label: string; desc: string }[] = [
    { key: 'individual_learner', label: 'Individual Learner', desc: 'Catalog, Courses, Player, Skill IQ' },
    { key: 'corporate_learner', label: 'Corporate Learner', desc: 'Company Tracks, Leaderboard, Badges' },
    { key: 'instructor', label: 'Lead Instructor', desc: 'Studio, Lesson Uploads, Live Classes, Grading' },
    { key: 'org_admin', label: 'Organization Admin', desc: 'Team Seats, Bulk Import, Training Assignment' },
    { key: 'org_manager', label: 'Department Manager', desc: 'Team Skills, Capability Matrix, Approval' },
    { key: 'super_admin', label: 'Super Admin', desc: 'Global Governance, Orgs, Settings, Audit' }
  ];

  const handleRoleSelect = (role: LmsRole) => {
    switchRole(role);
    setRoleMenuOpen(false);
  };

  return (
    <header className="h-16 sm:h-20 px-3 sm:px-6 lg:px-8 pt-2 sm:pt-3 flex items-center justify-between select-none z-20 bg-transparent gap-2">
      
      {/* 1. Left: Mobile Menu Trigger + Modern Frosted Search Capsule */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-sm sm:max-w-md">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded-2xl bg-white/90 shadow-xs border border-slate-200/80 text-[#0B1B2B] hover:bg-white active:scale-95 cursor-pointer shrink-0"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="w-full">
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_6px_25px_rgba(20,50,90,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] text-[#0B1B2B] focus-within:ring-2 focus-within:ring-[#2563EB]/25 focus-within:bg-white transition-all group">
            <Search className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#2563EB] shrink-0" />
            <input
              type="text"
              placeholder="Search courses, skills, labs..."
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full bg-transparent border-none text-xs outline-none placeholder:text-slate-400 font-semibold"
            />
            <div className="hidden sm:flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono text-slate-400 font-bold">
              <Command className="w-2.5 h-2.5" />
              <span>K</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right Actions: Frosted Control Capsules & User Profile */}
      <div className="flex items-center gap-3">
        
        {/* Interactive Role Switcher Capsule */}
        <div className="relative">
          <button
            onClick={() => setRoleMenuOpen(!roleMenuOpen)}
            className="px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 bg-white/85 backdrop-blur-2xl border border-white/90 text-[#0B1B2B] hover:bg-white shadow-[0_6px_25px_rgba(20,50,90,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="capitalize">{activeRole.replace('_', ' ')}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${roleMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Role Dropdown Menu */}
          {roleMenuOpen && (
            <div className="absolute right-0 mt-2 w-72 rounded-3xl p-2.5 shadow-2xl border border-white/90 bg-white/95 backdrop-blur-2xl text-[#0B1B2B] z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1 flex items-center justify-between">
                <span>Switch Portal View</span>
                <Sparkles className="w-3 h-3 text-[#2563EB]" />
              </div>
              <div className="space-y-1">
                {roles.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => handleRoleSelect(r.key)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-2xl flex items-center justify-between text-xs transition-colors cursor-pointer ${
                      activeRole === r.key
                        ? 'bg-[#EBF4FF] text-[#2563EB] font-bold'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{r.label}</div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{r.desc}</div>
                    </div>
                    {activeRole === r.key && <Check className="w-4 h-4 text-[#2563EB]" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifications Icon Button */}
        <div className="relative">
          <button
            onClick={() => setNotifMenuOpen(!notifMenuOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_6px_25px_rgba(20,50,90,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:bg-white text-slate-600 hover:text-[#2563EB] transition-all cursor-pointer relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notifMenuOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-3xl p-4 shadow-2xl border border-white/90 bg-white/95 backdrop-blur-2xl text-[#0B1B2B] z-50 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B1B2B]">Notifications</span>
                <span 
                  className="text-[10px] font-bold text-[#2563EB] hover:underline cursor-pointer" 
                  onClick={() => LmsStorage.markAllNotificationsRead()}
                >
                  Mark all read
                </span>
              </div>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
                {notifications.map((n) => (
                  <div key={n.id} className="p-3 rounded-2xl text-xs space-y-1 bg-slate-50/80 border border-slate-100/80">
                    <div className="font-bold text-[#0B1B2B]">{n.title}</div>
                    <div className="text-[11px] text-slate-500 leading-relaxed">{n.message}</div>
                    <div className="text-[9px] text-slate-400 font-mono">{n.timestamp}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Settings Icon Button */}
        <button
          onClick={onOpenSettings}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_6px_25px_rgba(20,50,90,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:bg-white text-slate-600 hover:text-[#2563EB] transition-all cursor-pointer"
          title="Account Settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* User Profile Pill Capsule */}
        <div 
          onClick={onOpenProfile}
          className="p-1.5 pr-4 rounded-full flex items-center gap-2.5 bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_6px_25px_rgba(20,50,90,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:bg-white transition-all cursor-pointer group"
        >
          <div className="relative">
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'}
              alt={currentUser?.name || 'User'}
              className="w-7 h-7 rounded-full object-cover ring-2 ring-[#2563EB]/40 group-hover:ring-[#2563EB] transition-all"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1.5 ring-white" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-[#0B1B2B] leading-none">
              {currentUser?.name?.split(' ')[0] || 'User'}
            </span>
            <span className="text-[9px] font-medium text-slate-400 leading-none mt-0.5">
              Verified
            </span>
          </div>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={logout}
          title="Sign Out"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_6px_25px_rgba(20,50,90,0.04)] text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
        </button>

      </div>

    </header>
  );
};
