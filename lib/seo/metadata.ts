import type { Metadata } from "next";
import type { SeoPage } from "@/lib/content/types";
import { BRAND, SITE_URL } from "@/lib/constants";
import { buildKeywords } from "@/lib/seo/keywords";

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function buildPageMetadata(page: SeoPage): Metadata {
  const isArticle = page.category === "insight";

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: buildKeywords(page),
    alternates: { canonical: page.path },
    openGraph: {
      type: isArticle ? "article" : "website",
      url: page.path,
      title: page.title,
      description: page.description,
      siteName: BRAND.name,
      locale: "en_US",
      ...(isArticle
        ? {
            publishedTime: page.publishedAt ?? page.updatedAt,
            modifiedTime: page.updatedAt,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: page.published,
      follow: page.published,
      googleBot: {
        index: page.published,
        follow: page.published,
        "max-image-preview": "large",
      },
    },
  };
}
