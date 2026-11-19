export type LmsRole = 
  | 'super_admin' 
  | 'instructor' 
  | 'individual_learner' 
  | 'corporate_learner' 
  | 'org_admin' 
  | 'org_manager';

export type CourseFormat = 'self_paced' | 'live' | 'blended';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Enterprise';

export interface LmsUser {
  id: string;
  name: string;
  email: string;
  role: LmsRole;
  avatar: string;
  organizationId?: string;
  organizationName?: string;
  departmentId?: string;
  departmentName?: string;
  skillIq: number;
  totalHoursLearned: number;
  completedLabs: number;
  certificatesCount: number;
  enrolledCourseIds: string[];
  completedCourseIds: string[];
  createdCourseIds?: string[];
  walletBalanceUSD?: number;
  joinedDate: string;
}

export interface LessonResource {
  name: string;
  type: 'pdf' | 'repo' | 'sandbox' | 'sheet';
  url: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  correctOptionIndex?: number;
  explanation: string;
}

export interface LmsLesson {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'video' | 'reading' | 'quiz' | 'lab';
  videoUrl?: string;
  summary: string;
  transcript?: string;
  resources?: LessonResource[];
  quiz?: QuizQuestion[];
  isCompleted?: boolean;
}

export interface LmsModule {
  id: string;
  title: string;
  duration: string;
  lessons: LmsLesson[];
}

export interface LmsCourse {
  id: string;
  title: string;
  category: string;
  format: CourseFormat;
  level: CourseLevel;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  durationHours: number;
  totalLessons: number;
  rating: number;
  reviewsCount: number;
  reviewCount?: number;
  enrolledCount: number;
  priceUSD: number;
  isFree: boolean;
  thumbnail: string;
  badge: string;
  shortDescription: string;
  description: string;
  learningOutcomes: string[];
  modules: LmsModule[];
  tags: string[];
  skillIqGain: number;
  featured?: boolean;
}

export interface LmsEnrollment {
  id: string;
  userId: string;
  courseId: string;
  progressPercent: number;
  status: 'not_started' | 'in_progress' | 'completed';
  enrolledAt: string;
  lastAccessedAt: string;
  completedLessonIds: string[];
  certificateId?: string;
}

export interface LmsCertificate {
  id: string;
  certificateNumber: string;
  courseId: string;
  courseTitle: string;
  category: string;
  recipientName: string;
  recipientEmail: string;
  issueDate: string;
  gradeScore: number;
  verificationCode: string;
  instructorName: string;
}

export interface LmsLiveClass {
  id: string;
  title: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  instructorAvatar: string;
  scheduledAt: string;
  durationMinutes: number;
  meetingLink: string;
  status: 'upcoming' | 'live' | 'completed';
  attendeesCount: number;
  recordingUrl?: string;
}

export interface LmsAssessment {
  id: string;
  title: string;
  category: string;
  benchmarkTarget: string;
  questionsCount: number;
  durationMinutes: number;
  skillIqMax: number;
  userBestScore?: number;
  status: 'available' | 'in_progress' | 'verified';
  questions: QuizQuestion[];
}

export interface LmsAssignment {
  id: string;
  title: string;
  courseTitle: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
  maxScore: number;
  submissionDate?: string;
  instructorFeedback?: string;
  feedback?: string;
}

export interface LmsOrganization {
  id: string;
  name: string;
  domain: string;
  tier: 'Enterprise Growth' | 'Global S/4HANA Clean-Core' | 'Innovation Hub';
  allocatedSeats: number;
  usedSeats: number;
  activeLearnersCount: number;
  departments: string[];
  contactEmail: string;
}

export interface LmsDepartment {
  id: string;
  name: string;
  orgId: string;
  managerName: string;
  managerEmail: string;
  memberCount: number;
  averageSkillIq: number;
  courseCompletionRate: number;
}

export interface LmsNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'course' | 'live' | 'grade' | 'org' | 'system';
  isRead: boolean;
  linkAction?: string;
}

export interface LmsLearningPathStageCourse {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

export interface LmsLearningPathStage {
  stageNumber: number;
  title: string;
  description: string;
  courses: LmsLearningPathStageCourse[];
  completionStatus: 'locked' | 'available' | 'in_progress' | 'completed';
}

export interface LmsLearningPath {
  id: string;
  title: string;
  description: string;
  targetRole: string;
  skills: string[];
  courseCount: number;
  durationHours: number;
  level: CourseLevel;
  format: CourseFormat;
  enrolled: boolean;
  progressPercent: number;
  stages: LmsLearningPathStage[];
}

export interface LmsCalendarEvent {
  id: string;
  title: string;
  category: 'live_class' | 'assessment' | 'assignment' | 'course_deadline' | 'milestone' | 'personal';
  date: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  courseTitle?: string;
  instructorName?: string;
  description: string;
  meetingUrl?: string;
  reminderMinutes?: number;
  isPersonal?: boolean;
}

export interface LmsAchievement {
  id: string;
  title: string;
  description: string;
  category: 'streak' | 'course' | 'skill' | 'hours' | 'excellence';
  badgeIcon: string;
  unlockCondition: string;
  earned: boolean;
  earnedDate?: string;
  progressPercent?: number;
}

export interface LmsDiscussionReply {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorId?: string;
  createdDate: string;
  createdAt?: string;
  content: string;
  likesCount: number;
}

export interface LmsDiscussion {
  id: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  authorId?: string;
  courseTitle: string;
  category: string;
  previewText: string;
  content: string;
  repliesCount: number;
  viewsCount: number;
  likesCount: number;
  isLiked?: boolean;
  createdDate: string;
  createdAt?: string;
  tags?: string[];
  isPinned?: boolean;
  isFollowing?: boolean;
  replies: LmsDiscussionReply[];
}

export interface LmsUserProfileData {
  fullName: string;
  displayName: string;
  email: string;
  phone: string;
  location: string;
  country: string;
  bio: string;
  avatar: string;
  jobTitle: string;
  company: string;
  industry: string;
  experienceLevel: string;
  professionalBio: string;
  linkedinUrl: string;
  portfolioUrl: string;
  skills: string[];
  interests: string[];
  goals: string[];
  orgDetails?: {
    orgName: string;
    department: string;
    employeeId: string;
    designation: string;
    manager: string;
  };
}

export interface LmsUserSettingsData {
  defaultView: string;
  preferredFormat: CourseFormat;
  preferredLanguage: string;
  weeklyGoalHours: number;
  defaultCalendarView: 'month' | 'week' | 'day' | 'agenda';
  twoFactorEnabled: boolean;
  lastPasswordChange: string;
  notifications: {
    courseUpdates: boolean;
    liveClassReminders: boolean;
    assessmentDeadlines: boolean;
    assignmentDeadlines: boolean;
    certificates: boolean;
    digestFrequency: 'immediate' | 'daily' | 'weekly';
  };
  privacy: {
    profileVisibility: 'public' | 'org' | 'private';
    showActivity: boolean;
    showAchievements: boolean;
  };
  supportTickets: {
    id: string;
    subject: string;
    category: string;
    description: string;
    status: 'open' | 'in_progress' | 'resolved';
    date: string;
  }[];
}

export type LmsView = 
  | 'overview'
  | 'explore_courses'
  | 'my_courses'
  | 'course_details'
  | 'course_player'
  | 'learning_paths'
  | 'live_classes'
  | 'calendar'
  | 'assessments'
  | 'assignments'
  | 'certificates'
  | 'achievements'
  | 'discussions'
  | 'notifications'
  | 'profile'
  | 'settings'
  | 'instructor_courses'
  | 'create_course'
  | 'instructor_analytics'
  | 'admin_users'
  | 'admin_courses'
  | 'admin_organizations'
  | 'admin_reports'
  | 'org_directory'
  | 'org_departments'
  | 'org_assignments'
  | 'org_reports';
