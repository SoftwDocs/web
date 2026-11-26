import type { MetadataRoute } from "next";
import { PUBLISHED_PAGES } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/constants";

const PRIORITY: Record<string, number> = {
  company: 0.6,
  service: 0.8,
  industry: 0.7,
  country: 0.7,
  "country-service": 0.65,
  "city-service": 0.55,
  insight: 0.6,
  "article-index": 0.7,
  taxonomy: 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/`,
    lastModified: "2026-11-26",
    changeFrequency: "weekly",
    priority: 1,
  };

  const pages = PUBLISHED_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: page.updatedAt,
    changeFrequency: "monthly" as const,
    priority: PRIORITY[page.category] ?? 0.6,
  }));

  return [home, ...pages].sort((a, b) => a.url.localeCompare(b.url));
}
