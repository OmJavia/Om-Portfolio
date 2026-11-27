// Backward-compatible re-exports from the modular TypeScript data layer.
import {
  profile,
  navigationItems,
  getVisibleAchievements,
  picklShowcase,
  capabilityPillars,
  projectCategories,
  getSortedProjects,
  methodStages,
  getSortedExperiences,
  skillGroups,
  openSourceItems,
  contactContent,
} from "./index";

export const site = {
  name: profile.name,
  role: profile.positioning,
  url: profile.seo.siteUrl,
  location: profile.location,
  email: profile.email,
  resume: profile.resumeUrl,
  calendar: profile.calendarUrl,
  links: profile.links,
  description: profile.seo.description,
};

export const nav = navigationItems;

export const hero = {
  eyebrow: profile.positioning,
  headline: profile.headline,
  copy: profile.shortIntro,
  status: profile.availability.label,
  meta: `${profile.tagline} · ${profile.location}`,
};

export const metrics = getVisibleAchievements().map((a) => ({
  value: a.value,
  prefix: a.prefix,
  suffix: a.suffix,
  decimals: a.decimals,
  measure: a.label,
  project: a.associatedItem,
  context: a.description,
  href: a.href,
  tone: a.tone,
}));

export const pickl = picklShowcase;
export const architecture = picklShowcase.architecture;
export const capabilities = capabilityPillars.map((c) => ({
  title: c.title,
  text: c.description,
  tags: c.tags,
  tone: c.tone,
  size: c.size,
}));
export const projectFilters = projectCategories;
export const projects = getSortedProjects();
export const method = methodStages;
export const experience = getSortedExperiences();
export const stack = skillGroups;
export const openSource = openSourceItems;
export const contact = contactContent;
