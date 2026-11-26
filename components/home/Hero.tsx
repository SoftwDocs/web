"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import { HeroCanvas3D } from "@/components/home/HeroCanvas3D";
import { Button } from "@/components/ui/Button";
import { useInquiry } from "@/components/animations/MotionProvider";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { openInquiry, prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const el = heroRef.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        el.querySelectorAll("[data-hero-meta]"),
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          clearProps: "clipPath,opacity",
        }
      )
        .fromTo(
          el.querySelectorAll("[data-hero-line]"),
          { yPercent: 112, skewY: 2, opacity: 0 },
          {
            yPercent: 0,
            skewY: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            clearProps: "transform,opacity",
          },
          "-=0.55"
        )
        .fromTo(
          el.querySelectorAll("[data-hero-footer]"),
          { clipPath: "inset(0 0 100% 0)", y: 18, opacity: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            clearProps: "clipPath,transform,opacity",
          },
          "-=0.55"
        );
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#080808] pt-24 pb-8 sm:pt-28 sm:pb-10"
    >
      {/* Interactive Three.js WebGL 3D Sculptural Environment */}
      <HeroCanvas3D />

      {/* Controlled Directional Contrast Scrim — Keeps 3D Sculpture Dominant on Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(95deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.64) 42%, rgba(8,8,8,0.08) 76%, rgba(8,8,8,0.42) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent"
      />
      <div
        aria-hidden="true"
        className="engineering-grid pointer-events-none absolute inset-0 opacity-35"
      />

      {/* Top Editorial Frame Strip */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-10">
        <div
          data-hero-meta
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(192,192,192,0.18)] pb-4"
        >
          <div className="inline-flex items-center gap-3">
            <span
              className="crimson-beacon h-2.5 w-2.5 rounded-full"
              aria-hidden="true"
            />
            <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
              INDEPENDENT TECHNOLOGY ENGINEERING COMPANY
            </span>
          </div>

          <span className="hidden font-[family-name:var(--font-space-grotesk)] text-[11px] font-medium uppercase tracking-[0.24em] text-[#A1A1A1] md:inline">
            SOFTWARE · AGENTIC AI · CLOUD INFRASTRUCTURE
          </span>
        </div>
      </div>

      {/* Monumental Asymmetric Poster Typography */}
      <div className="relative z-10 my-auto w-full px-5 py-10 sm:px-8 lg:px-10">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.15rem,9.2vw,8.75rem)] font-bold leading-[0.89] tracking-[-0.04em]">
          <span className="block overflow-hidden pb-[0.04em]">
            <span data-hero-line className="block text-[#F5F5F5]">
              WE ENGINEER
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.04em] sm:pl-[8%] lg:pl-[12%]">
            <span data-hero-line className="chrome-text block">
              WHAT DOESN&apos;T
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-hero-line className="crimson-gloss-text block">
              EXIST YET.
            </span>
          </span>
        </h1>
      </div>

      {/* Bottom Architectural Dock */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-10">
        <div className="chrome-hairline mb-6" />
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div data-hero-footer className="lg:col-span-6">
            <p className="max-w-xl text-base leading-relaxed text-[#D0D0D0] sm:text-lg lg:text-xl">
              From intelligent systems to sophisticated digital products, we turn
              complex challenges into engineered possibilities.
            </p>
          </div>

          <div
            data-hero-footer
            className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:col-span-6 lg:justify-end"
          >
            <Button
              variant="primary"
              onClick={() => openInquiry()}
              showArrow
              className="px-7 py-4 text-xs uppercase tracking-[0.14em]"
            >
              Start a Project
            </Button>
            <Button
              variant="secondary"
              href="#work"
              showArrow
              className="px-7 py-4 text-xs uppercase tracking-[0.14em]"
            >
              Explore Our Work
            </Button>
            <a
              href="#about"
              aria-label="Scroll to Brand Manifesto"
              className="specular-sweep hidden h-12 w-12 items-center justify-center border border-[rgba(245,245,245,0.26)] bg-[#0E0E0E]/90 text-[#C5C5C5] transition-colors hover:border-[#FF1724] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] xl:inline-flex"
            >
              <ArrowDownRight className="h-4 w-4 text-[#FF1724]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
