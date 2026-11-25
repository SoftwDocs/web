"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useInquiry } from "@/components/animations/MotionProvider";

export function EngineeringPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const beam = beamRef.current;
    if (!section || !frame || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frame,
        { clipPath: "inset(12% 7% 12% 7%)", scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "center 38%",
            scrub: 0.7,
          },
        }
      );

      if (beam) {
        gsap.fromTo(
          beam,
          { xPercent: -60, opacity: 0.2 },
          {
            xPercent: 60,
            opacity: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[rgba(192,192,192,0.16)] bg-[#050505] py-32 sm:py-44 lg:py-56"
    >
      {/* Full-Bleed Architectural Obsidian Horizon Artwork with Clip-Path Aperture */}
      <div
        ref={frameRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
      >
        <Image
          src="/images/architectural-obsidian-horizon.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-62"
        />
      </div>

      {/* Scroll-Driven Specular Chrome & Crimson Horizon Light Sweep */}
      <div
        ref={beamRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 opacity-60 blur-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 42%, rgba(255,23,36,0.9) 54%, transparent 100%)",
        }}
      />

      {/* Cinematic Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 65% at 50% 48%, rgba(8,8,8,0.42) 0%, rgba(8,8,8,0.88) 72%, #060606 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 text-center sm:px-8 lg:px-12">
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="crimson-lacquer-bar h-[2px] w-10" aria-hidden="true" />
          <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.28em] text-[#C5C5C5]">
            ENGINEERING STANDARD
          </span>
          <span className="crimson-lacquer-bar h-[2px] w-10" aria-hidden="true" />
        </div>

        <TextReveal
          as="h2"
          lines={[
            { text: "PRECISION IS NOT", variant: "default" },
            { text: "AN OPTION.", variant: "chrome" },
            { text: "IT'S THE STANDARD.", variant: "crimson" },
          ]}
          className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.75rem,7.2vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.04em]"
        />

        <ScrollReveal variant="clip" delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#E2E2E2] sm:text-xl">
            Every architectural decision, every interaction, and every line of
            code contributes to the experience we create.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
