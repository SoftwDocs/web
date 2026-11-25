export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://softwdocs.com";

export const BRAND = {
  name: "SoftwDocs",
  category: "Technology Engineering & Intelligent Systems",
  tagline:
    "Intelligent systems. Sophisticated software. Engineering without unnecessary limits.",
  footerDescription:
    "SoftwDocs engineers software, intelligent systems, automation, and modern digital infrastructure for ambitious ideas and real-world challenges.",
  logoPath: "/logo.png",
  logoWidth: 267,
  logoHeight: 267,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export type VerifiedSocialLink = {
  label: string;
  href: string;
};

/**
 * Only exposes verified external channels when explicitly configured via environment variables.
 * Never fabricates contact details or social profiles.
 */
export function getVerifiedSocialLinks(): VerifiedSocialLink[] {
  const candidates: Array<{ label: string; href: string | undefined }> = [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
    { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL },
    { label: "X", href: process.env.NEXT_PUBLIC_X_URL },
  ];

  return candidates.filter(
    (item): item is VerifiedSocialLink =>
      typeof item.href === "string" && item.href.trim().length > 0
  );
}

export function getVerifiedContactEmail(): string | null {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return email && email.length > 0 ? email : null;
}
