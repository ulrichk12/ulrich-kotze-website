export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  type: 'demo' | 'narrative';
  demoUrl?: string; // Optional URL for demo projects
  narrativeUrl?: string; // Optional URL for narrative projects
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}
