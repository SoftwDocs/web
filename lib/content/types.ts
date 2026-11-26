/** Shared, typed content model for every published SEO page. */

export interface Faq {
  question: string;
  answer: string;
}

export interface ContentBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
}

export interface TeamSkillGroup {
  label: string;
  skills: string[];
}

export interface TeamLink {
  label: string;
  href: string;
}

/** A profile whose details are attributed to a verified public source. */
export interface TeamProfile {
  id: string;
  name: string;
  role: string;
  summary: string;
  location: string;
  image: string;
  portfolioUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  education: string[];
  skillGroups: TeamSkillGroup[];
  links: TeamLink[];
  organizations?: string[];
}

export type PageCategory =
  | "company"
  | "service"
  | "industry"
  | "country"
  | "country-service"
  | "city-service"
  | "insight"
  | "article-index"
  | "taxonomy";

export interface SeoPage {
  /** Canonical path, beginning and ending with a slash. */
  path: string;
  category: PageCategory;
  title: string;
  description: string;
  h1: string;
  intent: string;
  intro: string;
  blocks: ContentBlock[];
  faqs: Faq[];
  related: string[];
  updatedAt: string;
  published: boolean;
  /** Set for article pages; drives Article JSON-LD and date display. */
  publishedAt?: string;
  article?: {
    category: string;
    publishedAt: string;
    sectionSlugs: string[];
  };
  /** Set where a verified project is genuinely relevant. */
  projectSlugs?: string[];
  /** Source-attributed people shown on a dedicated team page. */
  team?: TeamProfile[];
}

export interface PageInput extends Omit<SeoPage, "published" | "updatedAt"> {
  published?: boolean;
  updatedAt?: string;
}

const DEFAULT_UPDATED_AT = "2026-11-26";

export function definePage(input: PageInput): SeoPage {
  return {
    ...input,
    published: input.published ?? true,
    updatedAt: input.updatedAt ?? DEFAULT_UPDATED_AT,
  };
}
