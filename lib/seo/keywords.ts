import type { PageCategory, SeoPage } from "@/lib/content/types";
import { BRAND } from "@/lib/constants";

const MAX_KEYWORDS = 12;

const CATEGORY_KEYWORDS: Record<PageCategory, string[]> = {
  company: ["technology engineering company", "software engineering"],
  service: ["software development services", "technology engineering"],
  industry: ["industry software solutions", "custom software development"],
  country: ["software development company", "technology engineering"],
  "country-service": ["software development services", "technology engineering"],
  "city-service": ["software development services", "technology engineering"],
  insight: ["technology insights", "software engineering articles"],
  "article-index": ["technology insights", "software engineering articles"],
  taxonomy: ["technology insights", "technology articles"],
};

const SPECIAL_LABELS: Record<string, string> = {
  ai: "AI",
  api: "API",
  rag: "RAG",
  llm: "LLM",
  saas: "SaaS",
  crm: "CRM",
  devops: "DevOps",
  "cloud-devops": "Cloud & DevOps",
  "ci-cd": "CI/CD",
  "agentic-ai": "Agentic AI",
  "software-engineering": "Software engineering",
  "enterprise-technology": "Enterprise technology",
};

const PROJECT_LABELS: Record<string, string> = {
  fujifenix: "FUJIFENIX",
  "karachi-gum": "KARACHI GUM",
  "edgeway-security": "EDGEWAY SECURITY",
};

const ROUTE_SEGMENTS = new Set([
  "about",
  "contact",
  "industries",
  "insights",
  "locations",
  "services",
  "work",
]);

function slugToLabel(slug: string): string {
  if (SPECIAL_LABELS[slug]) return SPECIAL_LABELS[slug];
  return slug
    .split("-")
    .map((part) => {
      if (SPECIAL_LABELS[part]) return SPECIAL_LABELS[part];
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function cleanPhrase(value: string): string {
  return value
    .replace(/\s*(?:\||—|–|-)\s*SoftwDocs\s*$/i, "")
    .replace(/[^\p{L}\p{N}\s&/+-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function usable(value: string): boolean {
  return (
    value.length >= 3 &&
    value.length <= 70 &&
    !/^\d+$/.test(value) &&
    value.split(" ").filter(Boolean).length <= 9
  );
}

/** Deterministic, page-specific meta keywords built from verified page content. */
export function buildKeywords(page: SeoPage): string[] {
  const candidates = [
    cleanPhrase(page.h1),
    cleanPhrase(page.title),
    cleanPhrase(page.intent),
    BRAND.name,
    ...CATEGORY_KEYWORDS[page.category],
    ...page.path
      .split("/")
      .filter(Boolean)
      .filter((segment) => !ROUTE_SEGMENTS.has(segment))
      .map((segment) => PROJECT_LABELS[segment] ?? slugToLabel(segment)),
    ...(page.article ? [slugToLabel(page.article.category)] : []),
    ...(page.projectSlugs ?? []).map(
      (slug) => PROJECT_LABELS[slug] ?? slugToLabel(slug)
    ),
    ...(page.team ?? []).flatMap((person) => [person.name, person.role]),
    ...page.blocks.slice(0, 4).map((block) => cleanPhrase(block.heading)),
  ];

  const seen = new Set<string>();
  const keywords: string[] = [];

  for (const candidate of candidates) {
    const keyword = candidate.trim();
    const key = keyword.toLocaleLowerCase("en-US");
    if (!keyword || !usable(keyword) || seen.has(key)) continue;
    seen.add(key);
    keywords.push(keyword);
    if (keywords.length === MAX_KEYWORDS) break;
  }

  return keywords;
}
