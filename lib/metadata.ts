import type { Metadata } from "next";
import { BRAND, getVerifiedSocialLinks, SITE_URL } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SoftwDocs | Technology Engineering & Intelligent Systems",
    template: "%s | SoftwDocs",
  },
  description:
    "SoftwDocs is an independent technology engineering company building custom software, Agentic AI systems, intelligent automation, cloud infrastructure, and DevOps platforms.",
  applicationName: BRAND.name,
  keywords: [
    "Technology Engineering Company",
    "Software Development Company",
    "Intelligent Digital Solutions",
    "Agentic AI Development",
    "AI Automation Solutions",
    "Custom Software Development",
    "Full Stack Development",
    "Cloud Engineering",
    "DevOps Services",
    "Business Software Solutions",
    "Enterprise Web Applications",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND.name,
    title: "SoftwDocs — We Don't Just Build Tech. We Engineer The Future.",
    description:
      "Intelligent systems, sophisticated software, Agentic AI architectures, cloud engineering, and bespoke digital platforms designed for what comes next.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftwDocs | Technology Engineering & Intelligent Systems",
    description:
      "Transforming complex challenges into intelligent digital products, scalable software, and resilient technology systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
};

export function getStructuredData() {
  const sameAs = getVerifiedSocialLinks().map((item) => item.href);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logoPath}`,
    description: BRAND.footerDescription,
    knowsAbout: [
      "Software Engineering",
      "Agentic AI Systems",
      "Intelligent Automation",
      "Cloud Infrastructure",
      "DevOps Engineering",
      "Custom Digital Solutions",
      "Robotics and Hardware Integration",
      "Digital Experience Engineering",
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL,
    description: BRAND.tagline,
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
    },
  };

  return { organization, website };
}
