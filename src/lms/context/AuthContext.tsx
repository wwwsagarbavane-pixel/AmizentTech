import React, { createContext, useContext, useState, useEffect } from 'react';
import { LmsUser, LmsRole } from '../types/lmsTypes';
import { LmsStorage } from '../storage/lmsStorage';
import { INITIAL_USERS } from '../data/mockLmsData';

interface AuthContextType {
  currentUser: LmsUser | null;
  isAuthenticated: boolean;
  activeRole: LmsRole;
  theme: 'light' | 'dark';
  login: (email: string, role?: LmsRole) => boolean;
  registerIndividual: (data: { name: string; email: string }) => boolean;
  registerOrganization: (data: { orgName: string; adminName: string; email: string }) => boolean;
  logout: () => void;
  switchRole: (role: LmsRole) => void;
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always start at Login Page first (never skip login page)
  const [currentUser, setCurrentUser] = useState<LmsUser | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => LmsStorage.getTheme());

  useEffect(() => {
    LmsStorage.setCurrentUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    LmsStorage.setTheme(theme);
  }, [theme]);

  const activeRole: LmsRole = currentUser?.role || 'individual_learner';
  const isAuthenticated = currentUser !== null;

  const login = (email: string, role?: LmsRole): boolean => {
    const users = LmsStorage.getUsers();
    let found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!found && role) {
      found = users.find(u => u.role === role);
    }
    
    if (!found) {
      // Default to individual learner or first matching role
      found = users[0];
    }

    try {
      sessionStorage.setItem('amizent_active_session', 'true');
    } catch {}

    setCurrentUser(found);
    return true;
  };

  const registerIndividual = (data: { name: string; email: string }): boolean => {
    const newUser: LmsUser = {
      id: `user_${Date.now()}`,
      name: data.name,
      email: data.email,
      role: 'individual_learner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      skillIq: 180,
      totalHoursLearned: 0,
      completedLabs: 0,
      certificatesCount: 0,
      enrolledCourseIds: ['course_ai_agents'],
      completedCourseIds: [],
      walletBalanceUSD: 500.00,
      joinedDate: 'Feb 2026'
    };

    LmsStorage.addUser(newUser);
    setCurrentUser(newUser);
    return true;
  };

  const registerOrganization = (data: { orgName: string; adminName: string; email: string }): boolean => {
    const orgId = `org_${Date.now()}`;
    const newUser: LmsUser = {
      id: `user_${Date.now()}`,
      name: data.adminName,
      email: data.email,
      role: 'org_admin',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
      organizationId: orgId,
      organizationName: data.orgName,
      skillIq: 240,
      totalHoursLearned: 10,
      completedLabs: 5,
      certificatesCount: 1,
      enrolledCourseIds: ['course_sap_s4hana'],
      completedCourseIds: [],
      joinedDate: 'Feb 2026'
    };

    LmsStorage.addUser(newUser);
    setCurrentUser(newUser);
    return true;
  };

  const logout = () => {
    try {
      sessionStorage.removeItem('amizent_active_session');
      localStorage.removeItem('amizent_lms_current_user');
    } catch {}
    setCurrentUser(null);
  };

  const switchRole = (role: LmsRole) => {
    const matching = INITIAL_USERS.find(u => u.role === role) || INITIAL_USERS[0];
    setCurrentUser(matching);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated,
      activeRole,
      theme,
      login,
      registerIndividual,
      registerOrganization,
      logout,
      switchRole,
      toggleTheme
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
