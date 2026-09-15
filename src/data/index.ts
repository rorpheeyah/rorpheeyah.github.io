// Site content, imported at build time. These files were previously fetched
// from /content/*.json at runtime, once per consuming component; they are now
// part of the build and ship inside the rendered HTML.
import aboutJson from './about.json';
import brandingJson from './branding.json';
import contactJson from './contact.json';
import cvJson from './cv.json';
import educationJson from './education.json';
import experienceJson from './experience.json';
import heroJson from './hero.json';
import projectsJson from './projects.json';
import skillsJson from './skills.json';

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  external: boolean;
}

export interface Hero {
  name: string;
  titles: string[];
  description: string;
  socialLinks: SocialLink[];
  achievements: { icon: string; title: string; subtitle: string }[];
  availability: { status: string; responseTime: string };
}

export interface About {
  title: string;
  description: string;
  stats: { icon: string; value: string; label: string }[];
  achievements: { icon: string; title: string; description: string; highlight: boolean }[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  achievements: string[];
  technologies: string[];
  award?: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  experiences: ExperienceEntry[];
}

export interface Project {
  name: string;
  description: string;
  remoteImage?: string;
  image: string;
  link: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  status?: 'discontinued';
}

export interface Projects {
  title: string;
  subtitle: string;
  projectCategories: { title: string; description: string; projects: Project[] }[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  logo: string;
  website?: string;
  description?: string;
  skills?: string[];
}

export interface Education {
  title: string;
  subtitle: string;
  education: EducationEntry[];
}

export interface Skills {
  title: string;
  subtitle: string;
  skills: Record<string, string[]>;
}

export interface BrandingMark {
  id: string;
  name: string;
  description: string;
  use?: string;
  min?: string;
  minWidth?: number;
}

export interface Branding {
  title: string;
  subtitle: string;
  teaser?: string;
  name?: { latin: string; khmer: string; surname: string; given: string };
  story?: string[];
  marks: BrandingMark[];
  navMarks?: BrandingMark[];
  palette?: { name: string; hex: string; use: string }[];
  usage?: string[];
}

export interface Contact {
  title: string;
  subtitle: string;
  status: string;
  social: { name: string; url: string; value: string; description: string; icon: string }[];
}

export interface CV {
  title: string;
  subtitle: string;
  personal: Record<string, string>;
  contacts: { icon: string; label: string; href: string; value: string; description: string }[];
  summary: string;
  highlights: { icon: string; text: string }[];
  professionalOverview: { title: string; icon: string; description: string }[];
  experiences: {
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    icon: string;
    achievements: string[];
  }[];
  projects: { category: string; items: { name: string; description: string }[] }[];
  skills: Record<string, string[]>;
  education: { degree: string; institution: string; period: string; details: string; icon: string }[];
  languages: { name: string; level: string }[];
  downloads: { cv: { filename: string; path: string } };
}

export const hero = heroJson as Hero;
export const about = aboutJson as About;
export const experience = experienceJson as Experience;
export const projects = projectsJson as Projects;
export const education = educationJson as Education;
export const skills = skillsJson as Skills;
export const branding = brandingJson as Branding;
export const contact = contactJson as Contact;
export const cv = cvJson as unknown as CV;
