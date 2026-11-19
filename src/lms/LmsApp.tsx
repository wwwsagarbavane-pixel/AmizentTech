import React, { useState } from 'react';
import { useAuth, AuthProvider } from './context/AuthContext';
import { LmsView, LmsRole } from './types/lmsTypes';

import { LoginPage } from './auth/LoginPage';
import { RegisterIndividualPage } from './auth/RegisterIndividualPage';
import { RegisterOrgPage } from './auth/RegisterOrgPage';

import { LmsSidebar } from './components/layout/LmsSidebar';
import { LmsHeader } from './components/layout/LmsHeader';

import { LearnerOverviewDashboard } from './portals/learner/LearnerOverviewDashboard';
import { ExploreCoursesPage } from './portals/learner/ExploreCoursesPage';
import { MyCoursesPage } from './portals/learner/MyCoursesPage';
import { CoursePlayerPage } from './portals/learner/CoursePlayerPage';
import { LearningPathsPage } from './portals/learner/LearningPathsPage';
import { LiveClassesPage } from './portals/learner/LiveClassesPage';
import { CalendarPage } from './portals/learner/CalendarPage';
import { AssessmentsPage } from './portals/learner/AssessmentsPage';
import { AssignmentsPage } from './portals/learner/AssignmentsPage';
import { CertificatesPage } from './portals/learner/CertificatesPage';
import { AchievementsPage } from './portals/learner/AchievementsPage';
import { DiscussionsPage } from './portals/learner/DiscussionsPage';
import { NotificationsPage } from './portals/learner/NotificationsPage';
import { ProfilePage } from './portals/learner/ProfilePage';
import { SettingsPage } from './portals/learner/SettingsPage';

import { InstructorDashboard } from './portals/instructor/InstructorDashboard';
import { CourseCreateWizard } from './portals/instructor/CourseCreateWizard';
import { AdminDashboard } from './portals/admin/AdminDashboard';
import { OrgDashboard } from './portals/organization/OrgDashboard';
import { AppLoadingSplash } from '../components/common/AppLoadingSplash';

import { ShieldCheck, Check, X, LayoutGrid, Compass, GraduationCap, Video, User } from 'lucide-react';

interface LmsAppInnerProps {
  onExitLms: () => void;
}

const LmsAppInner: React.FC<LmsAppInnerProps> = ({ onExitLms }) => {
  const { isAuthenticated, activeRole, theme, switchRole } = useAuth();
  const isDark = theme === 'dark';

  // Navigation View State
  const [currentView, setCurrentView] = useState<LmsView>('overview');
  const [authScreen, setAuthScreen] = useState<'login' | 'register_ind' | 'register_org'>('login');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course_ai_agents');
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // If not authenticated, show premium authentication pages
  if (!isAuthenticated) {
    if (authScreen === 'register_ind') {
      return (
        <RegisterIndividualPage
          onBackToLogin={() => setAuthScreen('login')}
          onExitLms={onExitLms}
        />
      );
    }

    if (authScreen === 'register_org') {
      return (
        <RegisterOrgPage
          onBackToLogin={() => setAuthScreen('login')}
          onExitLms={onExitLms}
        />
      );
    }

    return (
      <LoginPage
        onRegisterIndividual={() => setAuthScreen('register_ind')}
        onRegisterOrg={() => setAuthScreen('register_org')}
        onForgotPassword={() => alert('Password reset link sent to registered email with secure token.')}
        onExitLms={onExitLms}
      />
    );
  }

  // Handle course navigation
  const handleNavigateToPlayer = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course_player');
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[#F2F5FA] text-[#0B1B2B] relative select-none">
      {/* Mobile App Splash Loading Animation */}
      <AppLoadingSplash brandName="AMIZENT" durationMs={700} />

      {/* Ambient glassmorphism glowing mesh orbs */}
      <div className="fixed top-[-10%] left-[15%] w-[650px] h-[650px] rounded-full bg-blue-200/40 blur-[130px] pointer-events-none z-0" />
      <div className="fixed top-[35%] right-[-8%] w-[550px] h-[550px] rounded-full bg-sky-200/35 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[25%] w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[140px] pointer-events-none z-0" />

      {/* 1. Left Fixed Sidebar (Hidden on mobile, expands as drawer when mobileSidebarOpen) */}
      <LmsSidebar
        currentView={currentView}
        onSelectView={setCurrentView}
        onExitLms={onExitLms}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* 2. Main Content Canvas */}
      <div className="flex-1 h-screen flex flex-col min-w-0 overflow-hidden">

        {/* Top Header */}
        <div className="shrink-0 z-20">
          <LmsHeader
            onOpenSettings={() => setCurrentView('settings')}
            onOpenProfile={() => setCurrentView('profile')}
            onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* Viewport Content Area - independent smooth scrolling with padding for mobile bottom bar */}
        <main className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6 lg:p-8 pb-20 lg:pb-8 scroll-smooth">

          {/* Dynamic View Router */}
          {currentView === 'overview' && (
            <>
              {activeRole === 'instructor' && (
                <InstructorDashboard onSelectView={setCurrentView} />
              )}
              {activeRole === 'super_admin' && (
                <AdminDashboard />
              )}
              {(activeRole === 'org_admin' || activeRole === 'org_manager') && (
                <OrgDashboard />
              )}
              {(activeRole === 'individual_learner' || activeRole === 'corporate_learner') && (
                <LearnerOverviewDashboard
                  onSelectView={setCurrentView}
                  onOpenRoleModal={() => setShowRoleModal(true)}
                />
              )}
            </>
          )}

          {currentView === 'explore_courses' && (
            <ExploreCoursesPage
              onSelectCourse={handleNavigateToPlayer}
              onNavigateToPlayer={handleNavigateToPlayer}
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'my_courses' && (
            <MyCoursesPage
              onNavigateToPlayer={handleNavigateToPlayer}
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'course_player' && (
            <CoursePlayerPage
              courseId={selectedCourseId}
              onBack={() => setCurrentView('my_courses')}
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'learning_paths' && (
            <LearningPathsPage
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'live_classes' && (
            <LiveClassesPage />
          )}

          {currentView === 'calendar' && (
            <CalendarPage />
          )}

          {currentView === 'assessments' && (
            <AssessmentsPage />
          )}

          {currentView === 'assignments' && (
            <AssignmentsPage />
          )}

          {currentView === 'certificates' && (
            <CertificatesPage />
          )}

          {currentView === 'achievements' && (
            <AchievementsPage />
          )}

          {currentView === 'discussions' && (
            <DiscussionsPage />
          )}

          {currentView === 'notifications' && (
            <NotificationsPage />
          )}

          {currentView === 'profile' && (
            <ProfilePage />
          )}

          {currentView === 'settings' && (
            <SettingsPage />
          )}

          {currentView === 'instructor_courses' && (
            <MyCoursesPage
              onNavigateToPlayer={handleNavigateToPlayer}
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'create_course' && (
            <CourseCreateWizard
              onBack={() => setCurrentView('overview')}
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'instructor_analytics' && (
            <InstructorDashboard onSelectView={setCurrentView} />
          )}

          {currentView === 'admin_users' && (
            <AdminDashboard />
          )}

          {currentView === 'admin_courses' && (
            <ExploreCoursesPage
              onSelectCourse={handleNavigateToPlayer}
              onNavigateToPlayer={handleNavigateToPlayer}
              onSelectView={setCurrentView}
            />
          )}

          {currentView === 'admin_organizations' && (
            <AdminDashboard />
          )}

          {currentView === 'admin_reports' && (
            <AdminDashboard />
          )}

          {currentView === 'org_directory' && (
            <OrgDashboard />
          )}

          {currentView === 'org_departments' && (
            <OrgDashboard />
          )}

          {currentView === 'org_assignments' && (
            <OrgDashboard />
          )}

          {currentView === 'org_reports' && (
            <OrgDashboard />
          )}

        </main>

      </div>

      {/* Floating 6-Role Switcher Modal */}
      {showRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className={`border rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl ${isDark ? 'bg-[#181924] border-white/15 text-white' : 'bg-white border-[#C8D7E8] text-[#122443]'
            }`}>
            <div className="flex items-center justify-between border-b pb-3 border-slate-100/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E75E8]" />
                <h3 className="text-base font-black">Role-Based Dashboard Switcher</h3>
              </div>
              <button
                onClick={() => setShowRoleModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs opacity-70">
              Test dynamic views across Learner, Lead Instructor, Organization Admin, and Super Admin:
            </p>

            <div className="space-y-2">
              {[
                { role: 'individual_learner' as LmsRole, title: '1. Individual Learner', desc: 'Bento Grid, Skill IQ Pass, Courses, Video Player' },
                { role: 'corporate_learner' as LmsRole, title: '2. Corporate Learner', desc: 'Enterprise Paths, Cohort Leaderboards, Badges' },
                { role: 'instructor' as LmsRole, title: '3. Lead Instructor', desc: 'Course Studio, Lesson Creator, Grading' },
                { role: 'org_admin' as LmsRole, title: '4. Organization Admin', desc: 'Seat Management, Team Skill Gap Analysis' },
                { role: 'org_manager' as LmsRole, title: '5. Department Manager', desc: 'Employee Capability Matrix & Course Assign' },
                { role: 'super_admin' as LmsRole, title: '6. Super Admin', desc: 'System Telemetry, Multi-Tenant Governance' }
              ].map((item) => (
                <button
                  key={item.role}
                  onClick={() => {
                    switchRole(item.role);
                    setShowRoleModal(false);
                    setCurrentView('overview');
                  }}
                  className={`w-full text-left p-3 rounded-2xl flex items-center justify-between text-xs transition-all cursor-pointer border ${activeRole === item.role
                      ? isDark ? 'bg-purple-600/30 border-purple-400 font-bold' : 'bg-[#EBF4FF] border-[#1E75E8] text-[#1E75E8] font-bold'
                      : isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-[#F8FBFF] border-[#DCE7F2] hover:bg-[#EAF1F8]'
                    }`}
                >
                  <div>
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-[10px] opacity-70 mt-0.5">{item.desc}</div>
                  </div>
                  {activeRole === item.role && (
                    <Check className="w-4 h-4 text-[#1E75E8] flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar (Matching exact Payrot Mobile UI reference media_1795087499043_07950969.jpg) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 px-3 py-1.5 flex items-center justify-around shadow-[0_-8px_25px_rgba(20,50,90,0.08)] select-none">
        <button
          onClick={() => setCurrentView('overview')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-colors cursor-pointer ${
            currentView === 'overview' ? 'text-[#1E75E8] font-bold' : 'text-slate-400 font-medium'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Home</span>
        </button>

        <button
          onClick={() => setCurrentView('explore_courses')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-colors cursor-pointer ${
            currentView === 'explore_courses' ? 'text-[#1E75E8] font-bold' : 'text-slate-400 font-medium'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Courses</span>
        </button>

        {/* Center Floating Action Pill Button */}
        <button
          onClick={() => setCurrentView('learning_paths')}
          title="Learning Paths"
          className="relative -top-4 w-12 h-12 rounded-full bg-gradient-to-tr from-[#12457F] via-[#1B58A6] to-[#1E75E8] text-white flex items-center justify-center shadow-lg shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all cursor-pointer ring-4 ring-white"
        >
          <GraduationCap className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentView('live_classes')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-colors cursor-pointer relative ${
            currentView === 'live_classes' ? 'text-[#1E75E8] font-bold' : 'text-slate-400 font-medium'
          }`}
        >
          <Video className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Live</span>
          <span className="absolute top-1 right-2.5 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        </button>

        <button
          onClick={() => setCurrentView('profile')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2.5 transition-colors cursor-pointer ${
            currentView === 'profile' ? 'text-[#1E75E8] font-bold' : 'text-slate-400 font-medium'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">Profile</span>
        </button>
      </nav>

    </div>
  );
};

export const LmsApp: React.FC<{ onExitLms: () => void }> = ({ onExitLms }) => {
  return (
    <AuthProvider>
      <LmsAppInner onExitLms={onExitLms} />
    </AuthProvider>
  );
};
