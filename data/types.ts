export type ToneColor = "cobalt" | "teal" | "coral" | "lime" | "ink";

export type ProjectType =
  | "personal"
  | "company"
  | "open-source"
  | "research"
  | "experiment"
  | "client";

export type ProjectCategory =
  | "All"
  | "AI & Machine Learning"
  | "Product Engineering"
  | "Computer Vision"
  | "LLM & RAG"
  | "GTM & Launches"
  | "Research & Experiments";

export interface ProfileConfig {
  name: string;
  positioning: string;
  headline: string;
  headlineEmphasis?: string;
  shortIntro: string;
  extendedIntro: string[];
  tagline?: string;
  location: string;
  email: string;
  calendarUrl: string;
  resumeUrl: string;
  profileImage: string;
  availability: {
    available: boolean;
    label: string;
  };
  links: {
    linkedin: string;
    github: string;
    x: string;
  };
  seo: {
    siteName: string;
    siteUrl: string;
    title: string;
    description: string;
    ogImage: string;
    twitterHandle: string;
  };
}

export interface ExperienceRole {
  title: string;
  employmentType?: "Full-time" | "Internship" | "Contract" | "Advisory" | "Founder";
  startDate: string; // YYYY-MM
  endDate: string | null; // null => Present
  isCurrent?: boolean;
  responsibilities: string[];
  achievements?: string[];
  quantifiableResults?: string[];
  technologies: string[];
  relatedProjects?: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl?: string;
  companyDescription?: string;
  logo: string;
  location: string;
  roles: ExperienceRole[];
}

export interface CaseStudySection {
  overview?: string;
  problem?: string;
  opportunity?: string;
  research?: string;
  solution?: string;
  architecture?: string;
  implementation?: string;
  gtm?: string;
  results?: string[];
  learnings?: string[];
}

export interface ProjectEntry {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: Exclude<ProjectCategory, "All">;
  categories: Exclude<ProjectCategory, "All">[];
  type: ProjectType;
  thumbnail?: string;
  gallery?: string[];
  technologies: string[];
  problemStatement?: string;
  solution?: string;
  architecture?: string;
  contribution?: string;
  results?: string[];
  metrics?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  associatedCompany?: string;
  featured: boolean;
  publicationDate: string; // YYYY-MM
  caseStudySections?: CaseStudySection;
}

export interface AchievementEntry {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  unit?: string;
  description: string;
  source: string;
  associatedItem: string;
  priority: number;
  visible: boolean;
  href?: string;
  tone: ToneColor;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface CapabilityPillar {
  title: string;
  description: string;
  tags: string[];
  tone: ToneColor;
  size?: "wide" | "tall";
}

export interface MethodStage {
  id: string;
  title: string;
  summary: string;
  example: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export type SectionId =
  | "hero"
  | "proof"
  | "projects"
  | "flagship"
  | "capabilities"
  | "experience"
  | "method"
  | "stack"
  | "openSource"
  | "about"
  | "contact";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  order: number;
}

export interface SiteConfig {
  sections: SectionConfig[];
  showCommandMenu: boolean;
  copyrightYear: number;
  footerTagline: string;
}
