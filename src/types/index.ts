export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string;
  results: string;
  metrics: Metric[];
  status: 'completed' | 'in-progress' | 'planned';
  demoUrl?: string;
  githubUrl?: string;
}

export interface Metric {
  label: string;
  value: string;
  icon: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'freelance' | 'academic';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}