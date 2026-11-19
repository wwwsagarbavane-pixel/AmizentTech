import { 
  LmsUser, 
  LmsCourse, 
  LmsEnrollment, 
  LmsCertificate, 
  LmsLiveClass, 
  LmsAssessment, 
  LmsAssignment, 
  LmsOrganization, 
  LmsDepartment,
  LmsNotification,
  LmsRole,
  LmsLearningPath,
  LmsCalendarEvent,
  LmsAchievement,
  LmsDiscussion,
  LmsUserProfileData,
  LmsUserSettingsData
} from '../types/lmsTypes';

import {
  INITIAL_USERS,
  INITIAL_COURSES,
  INITIAL_ENROLLMENTS,
  INITIAL_CERTIFICATES,
  INITIAL_LIVE_CLASSES,
  INITIAL_ASSESSMENTS,
  INITIAL_ASSIGNMENTS,
  INITIAL_ORGANIZATIONS,
  INITIAL_DEPARTMENTS,
  INITIAL_NOTIFICATIONS,
  INITIAL_LEARNING_PATHS,
  INITIAL_CALENDAR_EVENTS,
  INITIAL_ACHIEVEMENTS,
  INITIAL_DISCUSSIONS,
  INITIAL_USER_PROFILE,
  INITIAL_USER_SETTINGS
} from '../data/mockLmsData';

const STORAGE_KEYS = {
  CURRENT_USER: 'amizent_lms_current_user',
  USERS: 'amizent_lms_users',
  COURSES: 'amizent_lms_courses',
  ENROLLMENTS: 'amizent_lms_enrollments',
  CERTIFICATES: 'amizent_lms_certificates',
  LIVE_CLASSES: 'amizent_lms_live_classes',
  ASSESSMENTS: 'amizent_lms_assessments',
  ASSIGNMENTS: 'amizent_lms_assignments',
  ORGANIZATIONS: 'amizent_lms_organizations',
  DEPARTMENTS: 'amizent_lms_departments',
  NOTIFICATIONS: 'amizent_lms_notifications',
  LEARNING_PATHS: 'amizent_lms_learning_paths',
  CALENDAR_EVENTS: 'amizent_lms_calendar_events',
  ACHIEVEMENTS: 'amizent_lms_achievements',
  DISCUSSIONS: 'amizent_lms_discussions',
  USER_PROFILE: 'amizent_lms_user_profile',
  USER_SETTINGS: 'amizent_lms_user_settings',
  THEME: 'amizent_lms_theme'
};

function safeGet<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage write error', e);
  }
}

export const LmsStorage = {
  // Current Active User
  getCurrentUser(): LmsUser | null {
    return safeGet<LmsUser | null>(STORAGE_KEYS.CURRENT_USER, null);
  },

  setCurrentUser(user: LmsUser | null): void {
    safeSet(STORAGE_KEYS.CURRENT_USER, user);
  },

  // Users List
  getUsers(): LmsUser[] {
    return safeGet<LmsUser[]>(STORAGE_KEYS.USERS, INITIAL_USERS);
  },

  addUser(newUser: LmsUser): void {
    const users = this.getUsers();
    users.push(newUser);
    safeSet(STORAGE_KEYS.USERS, users);
  },

  updateUser(updatedUser: LmsUser): void {
    const users = this.getUsers().map(u => u.id === updatedUser.id ? updatedUser : u);
    safeSet(STORAGE_KEYS.USERS, users);
    const current = this.getCurrentUser();
    if (current?.id === updatedUser.id) {
      this.setCurrentUser(updatedUser);
    }
  },

  // Courses
  getCourses(): LmsCourse[] {
    return safeGet<LmsCourse[]>(STORAGE_KEYS.COURSES, INITIAL_COURSES);
  },

  addCourse(newCourse: LmsCourse): void {
    const courses = this.getCourses();
    courses.unshift(newCourse);
    safeSet(STORAGE_KEYS.COURSES, courses);
  },

  getCourseById(courseId: string): LmsCourse | undefined {
    return this.getCourses().find(c => c.id === courseId);
  },

  // Enrollments
  getEnrollments(): LmsEnrollment[] {
    return safeGet<LmsEnrollment[]>(STORAGE_KEYS.ENROLLMENTS, INITIAL_ENROLLMENTS);
  },

  getUserEnrollments(userId: string): LmsEnrollment[] {
    return this.getEnrollments().filter(e => e.userId === userId);
  },

  enrollUserInCourse(userId: string, courseId: string): LmsEnrollment {
    const enrollments = this.getEnrollments();
    const existing = enrollments.find(e => e.userId === userId && e.courseId === courseId);
    if (existing) return existing;

    const newEnr: LmsEnrollment = {
      id: `enr_${Date.now()}`,
      userId,
      courseId,
      progressPercent: 0,
      status: 'in_progress',
      enrolledAt: new Date().toISOString().split('T')[0],
      lastAccessedAt: new Date().toISOString().split('T')[0],
      completedLessonIds: []
    };

    enrollments.push(newEnr);
    safeSet(STORAGE_KEYS.ENROLLMENTS, enrollments);

    // Update user's enrolledCourseIds
    const user = this.getUsers().find(u => u.id === userId);
    if (user && !user.enrolledCourseIds.includes(courseId)) {
      user.enrolledCourseIds.push(courseId);
      this.updateUser(user);
    }

    return newEnr;
  },

  updateLessonProgress(userId: string, courseId: string, lessonId: string): LmsEnrollment | null {
    const enrollments = this.getEnrollments();
    const enr = enrollments.find(e => e.userId === userId && e.courseId === courseId);
    if (!enr) return null;

    if (!enr.completedLessonIds.includes(lessonId)) {
      enr.completedLessonIds.push(lessonId);
    }

    const course = this.getCourseById(courseId);
    if (course) {
      const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
      enr.progressPercent = totalLessons > 0 
        ? Math.min(100, Math.round((enr.completedLessonIds.length / totalLessons) * 100))
        : 100;

      if (enr.progressPercent === 100) {
        enr.status = 'completed';
        // Auto issue certificate if not already issued
        if (!enr.certificateId) {
          const user = this.getCurrentUser();
          const certId = `cert_${Date.now()}`;
          const newCert: LmsCertificate = {
            id: certId,
            certificateNumber: `AMZ-2026-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
            courseId: course.id,
            courseTitle: course.title,
            category: course.category,
            recipientName: user?.name || 'Verified Learner',
            recipientEmail: user?.email || 'learner@amizent.com',
            issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            gradeScore: 98.6,
            verificationCode: `VERIFIED-AMZ-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
            instructorName: course.instructorName
          };
          this.addCertificate(newCert);
          enr.certificateId = certId;
        }
      }
    }

    enr.lastAccessedAt = new Date().toISOString().split('T')[0];
    safeSet(STORAGE_KEYS.ENROLLMENTS, enrollments);
    return enr;
  },

  // Certificates
  getCertificates(): LmsCertificate[] {
    return safeGet<LmsCertificate[]>(STORAGE_KEYS.CERTIFICATES, INITIAL_CERTIFICATES);
  },

  addCertificate(newCert: LmsCertificate): void {
    const certs = this.getCertificates();
    certs.unshift(newCert);
    safeSet(STORAGE_KEYS.CERTIFICATES, certs);
  },

  // Live Classes
  getLiveClasses(): LmsLiveClass[] {
    return safeGet<LmsLiveClass[]>(STORAGE_KEYS.LIVE_CLASSES, INITIAL_LIVE_CLASSES);
  },

  addLiveClass(newLive: LmsLiveClass): void {
    const lives = this.getLiveClasses();
    lives.unshift(newLive);
    safeSet(STORAGE_KEYS.LIVE_CLASSES, lives);
  },

  // Assessments
  getAssessments(): LmsAssessment[] {
    return safeGet<LmsAssessment[]>(STORAGE_KEYS.ASSESSMENTS, INITIAL_ASSESSMENTS);
  },

  // Assignments
  getAssignments(): LmsAssignment[] {
    return safeGet<LmsAssignment[]>(STORAGE_KEYS.ASSIGNMENTS, INITIAL_ASSIGNMENTS);
  },

  submitAssignment(assignmentId: string): void {
    const assignments = this.getAssignments().map(a => {
      if (a.id === assignmentId) {
        return {
          ...a,
          status: 'submitted' as const,
          submissionDate: new Date().toISOString().split('T')[0]
        };
      }
      return a;
    });
    safeSet(STORAGE_KEYS.ASSIGNMENTS, assignments);
  },

  // Organizations & Departments
  getOrganizations(): LmsOrganization[] {
    return safeGet<LmsOrganization[]>(STORAGE_KEYS.ORGANIZATIONS, INITIAL_ORGANIZATIONS);
  },

  getDepartments(): LmsDepartment[] {
    return safeGet<LmsDepartment[]>(STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
  },

  addDepartment(dept: LmsDepartment): void {
    const depts = this.getDepartments();
    depts.push(dept);
    safeSet(STORAGE_KEYS.DEPARTMENTS, depts);
  },

  // Notifications
  getNotifications(): LmsNotification[] {
    return safeGet<LmsNotification[]>(STORAGE_KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  },

  markAllNotificationsRead(): void {
    const notifs = this.getNotifications().map(n => ({ ...n, isRead: true }));
    safeSet(STORAGE_KEYS.NOTIFICATIONS, notifs);
  },

  markNotificationRead(id: string): void {
    const notifs = this.getNotifications().map(n => n.id === id ? { ...n, isRead: true } : n);
    safeSet(STORAGE_KEYS.NOTIFICATIONS, notifs);
  },

  deleteNotification(id: string): void {
    const notifs = this.getNotifications().filter(n => n.id !== id);
    safeSet(STORAGE_KEYS.NOTIFICATIONS, notifs);
  },

  // Learning Paths
  getLearningPaths(): LmsLearningPath[] {
    return safeGet<LmsLearningPath[]>(STORAGE_KEYS.LEARNING_PATHS, INITIAL_LEARNING_PATHS);
  },

  enrollInLearningPath(pathId: string): void {
    const paths = this.getLearningPaths().map(p => p.id === pathId ? { ...p, enrolled: true } : p);
    safeSet(STORAGE_KEYS.LEARNING_PATHS, paths);
  },

  // Calendar Events
  getCalendarEvents(): LmsCalendarEvent[] {
    return safeGet<LmsCalendarEvent[]>(STORAGE_KEYS.CALENDAR_EVENTS, INITIAL_CALENDAR_EVENTS);
  },

  addCalendarEvent(event: LmsCalendarEvent): void {
    const events = this.getCalendarEvents();
    events.push(event);
    safeSet(STORAGE_KEYS.CALENDAR_EVENTS, events);
  },

  deleteCalendarEvent(eventId: string): void {
    const events = this.getCalendarEvents().filter(e => e.id !== eventId);
    safeSet(STORAGE_KEYS.CALENDAR_EVENTS, events);
  },

  // Achievements
  getAchievements(): LmsAchievement[] {
    return safeGet<LmsAchievement[]>(STORAGE_KEYS.ACHIEVEMENTS, INITIAL_ACHIEVEMENTS);
  },

  // Discussions
  getDiscussions(): LmsDiscussion[] {
    return safeGet<LmsDiscussion[]>(STORAGE_KEYS.DISCUSSIONS, INITIAL_DISCUSSIONS);
  },

  addDiscussion(discussion: LmsDiscussion): void {
    const discussions = [discussion, ...this.getDiscussions()];
    safeSet(STORAGE_KEYS.DISCUSSIONS, discussions);
  },

  addReplyToDiscussion(discussionId: string, reply: { authorName: string; authorAvatar: string; createdDate: string; content: string; likesCount: number }): void {
    const discussions = this.getDiscussions().map(d => {
      if (d.id === discussionId) {
        return {
          ...d,
          repliesCount: d.repliesCount + 1,
          replies: [...d.replies, { ...reply, id: `rep_${Date.now()}` }]
        };
      }
      return d;
    });
    safeSet(STORAGE_KEYS.DISCUSSIONS, discussions);
  },

  toggleLikeDiscussion(discussionId: string): void {
    const discussions = this.getDiscussions().map(d => {
      if (d.id === discussionId) {
        return { ...d, likesCount: d.likesCount + 1 };
      }
      return d;
    });
    safeSet(STORAGE_KEYS.DISCUSSIONS, discussions);
  },

  toggleFollowDiscussion(discussionId: string): void {
    const discussions = this.getDiscussions().map(d => {
      if (d.id === discussionId) {
        return { ...d, isFollowing: !d.isFollowing };
      }
      return d;
    });
    safeSet(STORAGE_KEYS.DISCUSSIONS, discussions);
  },

  // User Profile
  getUserProfile(): LmsUserProfileData {
    return safeGet<LmsUserProfileData>(STORAGE_KEYS.USER_PROFILE, INITIAL_USER_PROFILE);
  },

  updateUserProfile(profile: LmsUserProfileData): void {
    safeSet(STORAGE_KEYS.USER_PROFILE, profile);
  },

  // User Settings
  getUserSettings(): LmsUserSettingsData {
    return safeGet<LmsUserSettingsData>(STORAGE_KEYS.USER_SETTINGS, INITIAL_USER_SETTINGS);
  },

  updateUserSettings(settings: LmsUserSettingsData): void {
    safeSet(STORAGE_KEYS.USER_SETTINGS, settings);
  },

  addSupportTicket(ticket: { subject: string; category: string; description: string }): void {
    const settings = this.getUserSettings();
    const newTicket = {
      id: `TICK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: ticket.subject,
      category: ticket.category,
      description: ticket.description,
      status: 'open' as const,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    settings.supportTickets = [newTicket, ...(settings.supportTickets || [])];
    this.updateUserSettings(settings);
  },

  // Theme: Always 'light' to strictly match AmIzent blue frosted glass specification
  getTheme(): 'light' | 'dark' {
    return 'light';
  },

  setTheme(_theme: 'light' | 'dark'): void {
    safeSet(STORAGE_KEYS.THEME, 'light');
  }
};
