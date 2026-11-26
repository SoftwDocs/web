"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  BRAND,
  getVerifiedContactEmail,
  getVerifiedSocialLinks,
} from "@/lib/constants";
import { useInquiry } from "@/components/animations/MotionProvider";

const FOOTER_BLURB =
  "Software, agentic AI and cloud engineering for products that need to work in the real world.";

type FooterLink = { label: string; href: string };

const FOOTER_GROUPS: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Our Team", href: "/about/our-team/" },
      { label: "Services", href: "/services/" },
      { label: "Industries", href: "/industries/" },
      { label: "Locations", href: "/locations/" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Custom software", href: "/services/custom-software-development/" },
      { label: "Agentic AI", href: "/services/agentic-ai-development/" },
      { label: "Cloud & DevOps", href: "/services/cloud-engineering/" },
      { label: "Web applications", href: "/services/web-application-development/" },
      { label: "Automation", href: "/services/business-process-automation/" },
      { label: "All services", href: "/services/" },
    ],
  },
  {
    title: "Proof",
    links: [
      { label: "Selected work", href: "/work/" },
      { label: "FUJIFENIX", href: "/work/fujifenix/" },
      { label: "KARACHI GUM", href: "/work/karachi-gum/" },
      { label: "EDGEWAY SECURITY", href: "/work/edgeway-security/" },
      { label: "Insights", href: "/insights/" },
      { label: "Agentic AI notes", href: "/insights/agentic-ai/" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact/" },
      { label: "Our approach", href: "/about/our-approach/" },
      { label: "Manufacturing", href: "/industries/manufacturing/" },
      { label: "Pakistan", href: "/locations/pakistan/" },
      { label: "United States", href: "/locations/united-states/" },
    ],
  },
];

function FooterList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-xs text-[#A1A1A1] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const { openInquiry } = useInquiry();
  const verifiedEmail = getVerifiedContactEmail();
  const verifiedSocials = getVerifiedSocialLinks();

  return (
    <footer className="relative border-t border-[rgba(192,192,192,0.18)] bg-[#080808] pt-12 pb-8">
      <div className="w-full px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
            >
              <div className="relative flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={BRAND.logoPath}
                  alt="SoftwDocs logo"
                  width={80}
                  height={80}
                  className="h-10 w-10 max-w-none shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-base font-bold tracking-[0.16em] text-[#F5F5F5]">
                  SOFTWDOCS
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1A1]">
                  {BRAND.category}
                </div>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#A1A1A1]">
              {FOOTER_BLURB}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => openInquiry()}
                className="inline-flex items-center gap-1.5 font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF1724] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
              >
                Start a brief
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
              {verifiedEmail && (
                <a
                  href={`mailto:${verifiedEmail}`}
                  className="text-[11px] text-[#C5C5C5] underline decoration-[rgba(192,192,192,0.3)] underline-offset-4 hover:text-[#F5F5F5]"
                >
                  {verifiedEmail}
                </a>
              )}
              {verifiedSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#C5C5C5] transition-colors hover:text-[#F5F5F5]"
                >
                  {social.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
                {group.title}
              </h3>
              <FooterList links={group.links} />
            </div>
          ))}
        </div>

        <div className="chrome-hairline" />

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-[11px] text-[#7A7A7A] sm:flex-row sm:items-center">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p className="font-[family-name:var(--font-space-grotesk)] uppercase tracking-[0.14em] text-[#A1A1A1]">
            Precision Engineering · Intelligent Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
