import React, { useState } from 'react';
import {
  LayoutGrid,
  BookOpen,
  Compass,
  GraduationCap,
  Award,
  Video,
  Calendar,
  FileCheck2,
  Trophy,
  MessageSquare,
  Bell,
  User,
  Settings,
  LogOut,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  FolderGit2,
  Users,
  Building2,
  BarChart3,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LmsView, LmsRole } from '../../types/lmsTypes';

interface LmsSidebarProps {
  currentView: LmsView;
  onSelectView: (view: LmsView) => void;
  onExitLms: () => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

interface NavItem {
  view: LmsView;
  label: string;
  icon: any;
  badge?: string;
}

export const LmsSidebar: React.FC<LmsSidebarProps> = ({
  currentView,
  onSelectView,
  onExitLms,
  mobileOpen = false,
  onCloseMobile
}) => {
  const { activeRole, logout } = useAuth();
  // Sidebar minimized (collapsed) by default per user request
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('amizent_lms_sidebar_collapsed');
      return saved !== null ? saved === 'true' : true; // Default to true (minimized)
    } catch {
      return true;
    }
  });

  const toggleCollapse = () => {
    setIsCollapsed(prev => {
      const next = !prev;
      try {
        localStorage.setItem('amizent_lms_sidebar_collapsed', String(next));
      } catch {}
      return next;
    });
  };

  const handleItemClick = (view: LmsView) => {
    onSelectView(view);
    onCloseMobile?.();
  };

  // Categorized Learner Navigation matching exact reference sequence + all important platform tabs
  const learnerNavItems: NavItem[] = [
    { view: 'overview' as LmsView, label: 'Dashboard', icon: LayoutGrid },
    { view: 'explore_courses' as LmsView, label: 'Explore Courses', icon: Compass },
    { view: 'my_courses' as LmsView, label: 'My Courses', icon: BookOpen },
    { view: 'learning_paths' as LmsView, label: 'Learning Paths', icon: GraduationCap },
    { view: 'live_classes' as LmsView, label: 'Live Classes', icon: Video, badge: 'LIVE' },
    { view: 'calendar' as LmsView, label: 'Calendar', icon: Calendar },
    { view: 'assessments' as LmsView, label: 'Assessments', icon: Award },
    { view: 'assignments' as LmsView, label: 'Assignments', icon: FileCheck2 },
    { view: 'certificates' as LmsView, label: 'Certificates', icon: Trophy },
    { view: 'discussions' as LmsView, label: 'Discussions', icon: MessageSquare },
    { view: 'settings' as LmsView, label: 'Settings', icon: Settings },
  ];

  const instructorNavItems: NavItem[] = [
    { view: 'overview' as LmsView, label: 'Dashboard', icon: LayoutGrid },
    { view: 'instructor_courses' as LmsView, label: 'My Courses', icon: BookOpen },
    { view: 'create_course' as LmsView, label: 'Course Studio', icon: FolderGit2 },
    { view: 'live_classes' as LmsView, label: 'Live Sessions', icon: Video, badge: 'LIVE' },
    { view: 'assignments' as LmsView, label: 'Evaluations', icon: FileCheck2 },
    { view: 'instructor_analytics' as LmsView, label: 'Analytics', icon: BarChart3 },
    { view: 'settings' as LmsView, label: 'Settings', icon: Settings }
  ];

  const adminNavItems: NavItem[] = [
    { view: 'overview' as LmsView, label: 'Admin Dashboard', icon: LayoutGrid },
    { view: 'admin_users' as LmsView, label: 'User Directory', icon: Users },
    { view: 'admin_courses' as LmsView, label: 'Course Catalog', icon: BookOpen },
    { view: 'admin_organizations' as LmsView, label: 'Organizations', icon: Building2 },
    { view: 'admin_reports' as LmsView, label: 'System Reports', icon: BarChart3 },
    { view: 'settings' as LmsView, label: 'System Config', icon: Settings }
  ];

  const orgNavItems: NavItem[] = [
    { view: 'overview' as LmsView, label: 'Org Dashboard', icon: LayoutGrid },
    { view: 'org_directory' as LmsView, label: 'Team Directory', icon: Users },
    { view: 'org_departments' as LmsView, label: 'Departments', icon: Building2 },
    { view: 'org_assignments' as LmsView, label: 'Assign Learning', icon: FolderGit2 },
    { view: 'org_reports' as LmsView, label: 'Team Velocity', icon: BarChart3 },
    { view: 'settings' as LmsView, label: 'Org Settings', icon: Settings }
  ];

  const getActiveNavItems = () => {
    switch (activeRole) {
      case 'instructor': return instructorNavItems;
      case 'super_admin': return adminNavItems;
      case 'org_admin':
      case 'org_manager': return orgNavItems;
      default: return learnerNavItems;
    }
  };

  const navItems = getActiveNavItems();

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`${mobileOpen
          ? 'fixed inset-y-0 left-0 z-50 flex w-72 m-0 h-full rounded-r-3xl rounded-l-none shadow-2xl animate-in slide-in-from-left duration-200'
          : 'hidden lg:flex my-3 ml-3 h-[calc(100vh-24px)] max-h-[calc(100vh-24px)] rounded-[32px] sm:rounded-[36px]'
          } bg-white border border-slate-100 shadow-[0_15px_45px_rgba(20,50,90,0.04)] flex-col justify-between transition-all duration-300 select-none relative shrink-0 ${isCollapsed && !mobileOpen ? 'w-[76px] p-2.5 items-center' : 'w-72 p-4 sm:p-4.5'
          }`}
      >
        {/* 1. Floating Maximize / Minimize Toggle Button on right border at bottom (Desktop only) */}
        <button
          type="button"
          onClick={toggleCollapse}
          title={isCollapsed ? 'Maximize Sidebar (Expand)' : 'Minimize Sidebar (Collapse)'}
          className="hidden lg:flex absolute -right-3.5 bottom-8 w-7 h-7 rounded-full bg-white shadow-md border border-slate-200/90 items-center justify-center text-slate-500 hover:text-[#2563EB] hover:scale-110 transition-all z-40 cursor-pointer active:scale-95"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
        </button>

        {/* 2. Top Group: Brand Header & Navigation */}
        <div className={`flex-1 flex flex-col min-h-0 overflow-hidden ${isCollapsed && !mobileOpen ? 'w-full items-center' : ''}`}>

          {/* Brand Header */}
          <div className="flex items-center justify-between pb-3 shrink-0">
            <div
              onClick={() => handleItemClick('overview')}
              className={`flex items-center gap-3 cursor-pointer group ${isCollapsed && !mobileOpen ? 'justify-center px-0' : 'px-1'
                }`}
            >
              {/* Glowing Dark Blue Squircle with Sparkle Monogram */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#142A50] to-[#0A162C] flex items-center justify-center shadow-[0_6px_16px_rgba(10,22,44,0.28)] relative overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                {/* Ambient soft glow */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl" />

                {/* White ring around sparkle */}
                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                  {/* 4-point diamond star / sparkle */}
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                  </svg>
                </div>
              </div>

              {!isCollapsed && (
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black tracking-wider text-[#0B1B2B]">
                      AMIZENT
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#EBF4FF] text-[#2563EB] text-[10px] font-black tracking-wide leading-none">
                      LMS
                    </span>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#94A3B8] uppercase mt-0.5">
                    ENTERPRISE PORTAL
                  </span>
                </div>
              )}
            </div>
            {mobileOpen && (
              <button
                type="button"
                onClick={onCloseMobile}
                className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Category Label: LEARNING */}
          {!isCollapsed && (
            <div className="text-[10px] font-black tracking-wider text-[#94A3B8] uppercase px-3 pt-2 mb-1 shrink-0">
              LEARNING
            </div>
          )}

          {/* Navigation Items (smooth flex-1 scroll, NO ugly scrollbar, no hardcoded max-h-[270px]!) */}
          <nav
            className={`flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-1 py-1 w-full ${isCollapsed && !mobileOpen ? 'flex flex-col items-center' : 'pr-1'
              }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.view;

              if (isCollapsed && !mobileOpen) {
                return (
                  <button
                    key={item.view}
                    onClick={() => handleItemClick(item.view)}
                    title={item.label}
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 cursor-pointer relative shrink-0 group ${isActive
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] scale-105'
                      : 'text-[#64748B] hover:text-[#0B1B2B] hover:bg-slate-100/80'
                      }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-[#64748B] group-hover:text-[#0B1B2B]'}`} />

                    {/* Pulsing Live Dot when collapsed */}
                    {item.badge === 'LIVE' && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                    )}
                  </button>
                );
              }

              return (
                <button
                  key={item.view}
                  onClick={() => handleItemClick(item.view)}
                  title={item.label}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-2xl text-[13px] font-bold transition-all duration-200 cursor-pointer text-left ${isActive
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-[0_8px_20px_rgba(37,99,235,0.32)]'
                    : 'text-[#475569] hover:text-[#0B1B2B] hover:bg-slate-100/70 font-semibold'
                    }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#64748B]'}`} />
                    <span className="truncate tracking-tight">{item.label}</span>
                  </div>

                  {/* Right Badge (e.g. • LIVE) */}
                  {item.badge === 'LIVE' && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-200/80'
                      }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>LIVE</span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

        </div>

        {/* 3. PERFORMANCE Widget Card (Exact match to reference) */}
        {!isCollapsed && (
          <div className="pt-2 my-1 shrink-0">
            <div className="text-[10px] font-black tracking-wider text-[#94A3B8] uppercase px-3 mb-1.5">
              PERFORMANCE
            </div>

            <div className="rounded-[22px] bg-gradient-to-b from-[#F0F5FD] to-[#E6F0FA] p-3.5 border border-[#E0ECF8] shadow-2xs space-y-2">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold tracking-wider text-[#2563EB] uppercase">
                  AI SKILL PROGRESS
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white text-slate-700 text-[10px] font-bold shadow-2xs">
                  120+ Labs
                </span>
              </div>

              {/* Metric */}
              <div className="flex items-baseline justify-between pt-0.5">
                <div className="text-2xl font-black text-[#0B1B2B] tracking-tight">
                  94.8%
                </div>
                <div className="px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-700 text-[10px] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                  <span>+4.2%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/90 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
                  style={{ width: '94.8%' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* 4. Bottom Actions: Exit to Public Website & Sign Out */}
        <div className={`pt-1.5 space-y-1.5 shrink-0 ${isCollapsed ? 'w-full flex flex-col items-center' : ''}`}>

        {/* In expanded mode: Minimize / Collapse sidebar button */}
        {!isCollapsed && (
          <button
            type="button"
            onClick={toggleCollapse}
            title="Minimize Sidebar"
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-2xl text-slate-500 hover:text-slate-800 hover:bg-slate-100/70 text-xs font-semibold transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
              <span>Minimize Sidebar</span>
            </div>
            <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-mono">Collapse</span>
          </button>
        )}

          {/* Exit to Public Website Button */}
          {isCollapsed ? (
            <button
              onClick={onExitLms}
              title="Exit to AmIzent Tech Services Landing Page"
              className="w-11 h-11 rounded-2xl bg-[#F0F5FD] hover:bg-[#E2EDFB] text-[#1E40AF] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4 text-[#2563EB]" />
            </button>
          ) : (
            <button
              onClick={onExitLms}
              title="Exit to AmIzent Tech Services Landing Page"
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-[#F0F5FD] hover:bg-[#E2EDFB] text-[#1E40AF] text-xs font-bold transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
              <span>Exit to Public Website</span>
            </button>
          )}

          {/* Sign Out Button */}
          {isCollapsed ? (
            <button
              onClick={logout}
              title="Sign Out of LMS"
              className="w-11 h-11 rounded-2xl text-slate-400 hover:text-rose-600 hover:bg-rose-50/60 flex items-center justify-center transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={logout}
              title="Sign Out of LMS"
              className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-2xl text-slate-500 hover:text-rose-600 hover:bg-rose-50/60 text-xs font-semibold transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 shrink-0" />
              <span>Sign Out</span>
            </button>
          )}

        </div>

      </aside>
    </>
  );
};
