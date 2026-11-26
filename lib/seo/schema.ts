import type { SeoPage, TeamProfile } from "@/lib/content/types";
import { getPublishedPage } from "@/lib/content/registry";
import { BRAND, SITE_URL } from "@/lib/constants";
import { absoluteUrl } from "./metadata";

export interface Crumb {
  label: string;
  path: string;
}

function prettifySegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function breadcrumbsFor(path: string): Crumb[] {
  const crumbs: Crumb[] = [{ label: "Home", path: "/" }];
  const segments = path.split("/").filter(Boolean);
  let cumulative = "";

  segments.forEach((segment, index) => {
    cumulative += `/${segment}`;
    const isLast = index === segments.length - 1;
    const published = getPublishedPage(
      isLast ? path : `${cumulative}/`
    );
    crumbs.push({
      label: isLast ? (published?.h1 ?? prettifySegment(segment)) : prettifySegment(segment),
      path: `${cumulative}/`,
    });
  });

  return crumbs;
}

function breadcrumbSchema(path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbsFor(path).map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function faqSchema(page: SeoPage) {
  return {
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function serviceSchema(page: SeoPage) {
  return {
    "@type": "Service",
    name: page.h1,
    description: page.description,
    provider: { "@type": "Organization", name: BRAND.name, url: SITE_URL },
    url: absoluteUrl(page.path),
    areaServed: "Worldwide",
    audience: { "@type": "BusinessAudience" },
  };
}

function articleSchema(page: SeoPage) {
  return {
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    datePublished: page.publishedAt ?? page.updatedAt,
    dateModified: page.updatedAt,
    mainEntityOfPage: absoluteUrl(page.path),
    author: { "@type": "Organization", name: BRAND.name },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${BRAND.logoPath}` },
    },
  };
}

function teamCollectionSchema(page: SeoPage) {
  const pageUrl = absoluteUrl(page.path);
  return {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#team`,
    name: page.h1,
    description: page.description,
    url: pageUrl,
    mainEntity: (page.team ?? []).map((member) => ({
      "@type": "Person",
      "@id": `${pageUrl}#${member.id}`,
    })),
  };
}

function teamPersonSchema(page: SeoPage, member: TeamProfile) {
  const [locality, country] = member.location.split(",").map((part) => part.trim());
  return {
    "@type": "Person",
    "@id": `${absoluteUrl(page.path)}#${member.id}`,
    name: member.name,
    jobTitle: member.role,
    description: member.summary,
    image: member.image,
    url: member.portfolioUrl,
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: locality,
        addressCountry: country === "Pakistan" ? "PK" : country,
      },
    },
    knowsAbout: member.skillGroups.flatMap((group) => group.skills),
    sameAs: member.links.map((link) => link.href),
    alumniOf: member.education.map((name) => ({
      "@type": "EducationalOrganization",
      name,
    })),
    ...(member.organizations && {
      worksFor: member.organizations.map((name) => ({
        "@type": "Organization",
        name,
      })),
    }),
    subjectOf: {
      "@type": "WebPage",
      name: member.sourceLabel,
      url: member.sourceUrl,
    },
  };
}

export function pageSchemas(page: SeoPage): object[] {
  const schemas: object[] = [
    { "@context": "https://schema.org", ...breadcrumbSchema(page.path) },
    { "@context": "https://schema.org", ...faqSchema(page) },
  ];

  if (page.category === "service" || page.category === "country-service" || page.category === "city-service") {
    schemas.push({ "@context": "https://schema.org", ...serviceSchema(page) });
  }
  if (page.category === "insight") {
    schemas.push({ "@context": "https://schema.org", ...articleSchema(page) });
  }
  if (page.team && page.team.length > 0) {
    schemas.push({ "@context": "https://schema.org", ...teamCollectionSchema(page) });
    for (const member of page.team) {
      schemas.push({ "@context": "https://schema.org", ...teamPersonSchema(page, member) });
    }
  }

  return schemas;
}
