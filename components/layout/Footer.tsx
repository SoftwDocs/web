"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  BRAND,
  getVerifiedContactEmail,
  getVerifiedSocialLinks,
  NAV_LINKS,
} from "@/lib/constants";
import { EXPERTISE_ITEMS } from "@/data/services";
import { SELECTED_PROJECTS } from "@/data/projects";
import { useInquiry } from "@/components/animations/MotionProvider";

export function Footer() {
  const { openInquiry } = useInquiry();
  const verifiedEmail = getVerifiedContactEmail();
  const verifiedSocials = getVerifiedSocialLinks();

  return (
    <footer className="relative border-t border-[rgba(192,192,192,0.18)] bg-[#080808] pt-20 pb-12">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
            >
              <div className="relative flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={BRAND.logoPath}
                  alt="SoftwDocs logo"
                  width={96}
                  height={96}
                  className="h-[96px] w-[96px] max-w-none shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-[0.16em] text-[#F5F5F5]">
                  SOFTWDOCS
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#A1A1A1]">
                  {BRAND.category}
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#A1A1A1]">
              {BRAND.footerDescription}
            </p>

            <div className="mt-7 inline-flex items-center gap-2.5 border border-[rgba(192,192,192,0.18)] bg-[#101010] px-3.5 py-2 text-xs text-[#C5C5C5]">
              <span className="crimson-beacon h-2 w-2 rounded-full" />
              <span>Software · Agentic AI · Cloud &amp; DevOps</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1A1] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Links */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
              Expertise
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPERTISE_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-[#A1A1A1] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                  >
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#FF1724]">
                      {item.number}
                    </span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Work & Direct Inquiry */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
              Selected Work
            </h3>
            <ul className="mt-5 space-y-3">
              {SELECTED_PROJECTS.map((project) => (
                <li key={project.id}>
                  <a
                    href={`#project-${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm text-[#A1A1A1] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#7A7A7A]" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[rgba(192,192,192,0.14)] pt-6">
              <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
                Contact &amp; Inquiries
              </h4>
              <p className="mt-2.5 text-xs leading-relaxed text-[#A1A1A1]">
                Share your product vision or engineering challenge through our
                project brief.
              </p>

              <button
                type="button"
                onClick={() => openInquiry()}
                className="mt-3.5 inline-flex items-center gap-1.5 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.16em] text-[#FF1724] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
              >
                Start a Conversation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              {verifiedEmail && (
                <div className="mt-3">
                  <a
                    href={`mailto:${verifiedEmail}`}
                    className="text-xs text-[#C5C5C5] underline decoration-[rgba(192,192,192,0.3)] underline-offset-4 hover:text-[#F5F5F5]"
                  >
                    {verifiedEmail}
                  </a>
                </div>
              )}

              {verifiedSocials.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {verifiedSocials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#C5C5C5] transition-colors hover:text-[#F5F5F5]"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="chrome-hairline" />

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-[#7A7A7A] sm:flex-row sm:items-center">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p className="font-[family-name:var(--font-space-grotesk)] tracking-[0.14em] uppercase text-[#A1A1A1]">
            Precision Engineering · Intelligent Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
