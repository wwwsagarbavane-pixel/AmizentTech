export type NavPage = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'solutions' 
  | 'industries' 
  | 'learning' 
  | 'insights' 
  | 'contact'
  | 'lms';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  deliverables: string[];
  badge?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  businessImpact: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  industryTag: string;
  challenges: string[];
  opportunities: string[];
  proposedSolutions: string[];
  icon: string;
  badge: string;
}

export interface LearningPath {
  id: string;
  title: string;
  level: 'Foundational' | 'Intermediate' | 'Enterprise Advanced';
  category: string;
  description: string;
  technologies: string[];
  durationWeeks: string;
  learningStages: {
    stage: 'Discover' | 'Learn' | 'Practice' | 'Grow';
    details: string;
  }[];
  skillsAcquired: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Technology Insights' | 'AI & Innovation' | 'Learning & Development' | 'Industry Trends' | 'Digital Transformation';
  date: string;
  readTime: string;
  excerpt: string;
  bodyParagraphs: string[];
  tags: string[];
}

export interface ContactSubmission {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone?: string;
  serviceInterest: string;
  message: string;
}
