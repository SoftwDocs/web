import type { SeoPage } from "./types";
import { COMPANY_PAGES } from "@/data/site/company";
import { SERVICE_PAGES } from "@/data/site/services";
import { INDUSTRY_PAGES } from "@/data/site/industries";
import { COUNTRY_PAGES } from "@/data/site/countries";
import { COUNTRY_SERVICE_PAGES } from "@/data/site/country-services";
import { ARTICLE_PAGES } from "@/data/site/articles";
import { INSIGHT_CATEGORY_PAGES, INSIGHT_INDEX_PAGE } from "@/data/site/insights";
import { CITY_SERVICE_PAGES } from "@/data/site/cities";
import { OUR_TEAM_PAGE } from "@/data/site/team";

export const ALL_CONTENT_PAGES: SeoPage[] = [
  INSIGHT_INDEX_PAGE,
  ...COMPANY_PAGES,
  ...SERVICE_PAGES,
  ...INDUSTRY_PAGES,
  ...COUNTRY_PAGES,
  ...COUNTRY_SERVICE_PAGES,
  ...ARTICLE_PAGES,
  ...INSIGHT_CATEGORY_PAGES,
  ...CITY_SERVICE_PAGES,
  OUR_TEAM_PAGE,
];

export interface ValidationIssue {
  path: string;
  reason: string;
}

function bodyText(page: SeoPage): string {
  return [
    page.intro,
    ...page.blocks.flatMap((block) => [
      block.heading,
      ...(block.paragraphs ?? []),
      ...(block.bullets ?? []),
      block.code ?? "",
    ]),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
}

function wordCount(value: string): number {
  return value.split(/\s+/).filter((token) => token.length > 1).length;
}

function tokenSet(value: string): Set<string> {
  return new Set(
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 4)
  );
}

function similarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

const MIN_UNIQUE_WORDS = 120;
const MAX_SIMILARITY = 0.9;
const UNSUPPORTED_CLAIM =
  /\b(we have (?:offices|certifications|awards)|our (?:office|certification|award)|testimonial|five-star|5-star|guaranteed results|100% success)\b/i;

/**
 * Build-time publishing gate. Pages that fail are excluded from routes,
 * navigation and the sitemap rather than silently published.
 */
export function validateContent(pages: SeoPage[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();
  const h1s = new Map<string, string>();
  const paths = new Set<string>();
  const fingerprints = new Map<string, { path: string; tokens: Set<string> }>();

  for (const page of pages) {
    if (paths.has(page.path)) {
      issues.push({ path: page.path, reason: "duplicate slug" });
    }
    paths.add(page.path);

    for (const [field, value, seen] of [
      ["title", page.title, titles],
      ["description", page.description, descriptions],
      ["h1", page.h1, h1s],
    ] as const) {
      const key = value.trim().toLowerCase();
      if (seen.has(key)) {
        issues.push({ path: page.path, reason: `duplicate ${field}` });
      } else {
        seen.set(key, page.path);
      }
    }

    const text = bodyText(page);
    if (wordCount(text) < MIN_UNIQUE_WORDS) {
      issues.push({ path: page.path, reason: `thin content (<${MIN_UNIQUE_WORDS} words)` });
    }
    if (page.faqs.length < 2) {
      issues.push({ path: page.path, reason: "missing FAQ content" });
    }
    if (page.related.length === 0) {
      issues.push({ path: page.path, reason: "no internal links" });
    }
    if (UNSUPPORTED_CLAIM.test(text)) {
      issues.push({ path: page.path, reason: "unsupported business claim" });
    }

    const tokens = tokenSet(text);
    for (const [, other] of fingerprints) {
      if (similarity(tokens, other.tokens) > MAX_SIMILARITY) {
        issues.push({ path: page.path, reason: `near-duplicate of ${other.path}` });
        break;
      }
    }
    fingerprints.set(page.path, { path: page.path, tokens });
  }

  for (const page of pages) {
    for (const href of page.related) {
      if (!paths.has(href)) {
        issues.push({ path: page.path, reason: `broken internal link: ${href}` });
      }
    }
  }

  return issues;
}

export const CONTENT_VALIDATION_ISSUES = validateContent(ALL_CONTENT_PAGES);

if (CONTENT_VALIDATION_ISSUES.length > 0) {
  throw new Error(
    `Content validation failed:\n${CONTENT_VALIDATION_ISSUES.map(
      (issue) => `- ${issue.path}: ${issue.reason}`
    ).join("\n")}`
  );
}

export const PUBLISHED_PAGES: SeoPage[] = ALL_CONTENT_PAGES.filter(
  (page) => page.published
);

export const PUBLISHED_PATHS: Set<string> = new Set(
  PUBLISHED_PAGES.map((page) => page.path)
);

const BY_PATH = new Map(PUBLISHED_PAGES.map((page) => [page.path, page]));

export function getPublishedPage(path: string): SeoPage | undefined {
  return BY_PATH.get(path);
}

export function requirePublishedPage(path: string): SeoPage {
  const page = getPublishedPage(path);
  if (!page) throw new Error(`Unpublished or unknown page: ${path}`);
  return page;
}

export function pagesByCategory(category: SeoPage["category"]): SeoPage[] {
  return PUBLISHED_PAGES.filter((page) => page.category === category);
}

export function pagesUnderPrefix(prefix: string): SeoPage[] {
  return PUBLISHED_PAGES.filter((page) => page.path.startsWith(prefix)).sort(
    (a, b) => a.path.localeCompare(b.path)
  );
}

export function publishedPathsUnderPrefix(prefix: string): string[] {
  return pagesUnderPrefix(prefix).map((page) => page.path);
}
