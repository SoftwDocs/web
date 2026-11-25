"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInquiry } from "@/components/animations/MotionProvider";

const STATEMENT_WORDS: Array<{ text: string; accent?: "crimson" | "chrome" }> = [
  { text: "THE" },
  { text: "FUTURE", accent: "chrome" },
  { text: "ISN'T" },
  { text: "BUILT" },
  { text: "BY" },
  { text: "FOLLOWING" },
  { text: "THE" },
  { text: "OBVIOUS.", accent: "crimson" },
];

const MANIFESTO_BEATS = [
  {
    roman: "I",
    label: "ASK BETTER QUESTIONS",
    text: "Technology creates possibilities. Engineering turns those possibilities into reality.",
  },
  {
    roman: "II",
    label: "PRECISION OVER NOISE",
    text: "We believe meaningful innovation begins with asking better questions, understanding complex problems, and building solutions with precision.",
  },
  {
    roman: "III",
    label: "UNIFIED DISCIPLINES",
    text: "At SoftwDocs, we bring software engineering, artificial intelligence, automation, and infrastructure together to create technology that moves ideas forward.",
  },
];

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.14, yPercent: -7 },
          {
            scale: 1,
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          }
        );
      }

      if (sweepRef.current) {
        gsap.fromTo(
          sweepRef.current,
          { scaleX: 0.05 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 68%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          }
        );
      }

      const words = section.querySelectorAll("[data-manifesto-word]");
      if (words.length) {
        gsap.fromTo(
          words,
          { opacity: 0.14, y: 22 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 74%",
              end: "center 46%",
              scrub: 0.6,
            },
          }
        );
      }

      gsap.fromTo(
        section.querySelectorAll("[data-manifesto-beat]"),
        { clipPath: "inset(0 0 100% 0)", y: 24, opacity: 0.2 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          clearProps: "clipPath,transform,opacity",
          scrollTrigger: {
            trigger: section.querySelector("[data-manifesto-beats]"),
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-[rgba(192,192,192,0.16)] bg-[#070707] py-28 sm:py-36 lg:py-48"
    >
      {/* Full-bleed Custom 3D Monolith Backdrop */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-38 will-change-transform"
      >
        <Image
          src="/images/crimson-chrome-monolith.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 42%, rgba(8,8,8,0.48) 0%, rgba(8,8,8,0.9) 72%, #080808 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-10 flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
          <div className="inline-flex items-center gap-3">
            <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
              OUR PHILOSOPHY
            </span>
          </div>
          <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] uppercase tracking-[0.22em] text-[#A1A1A1]">
            01 {"//"} MANIFESTO
          </span>
        </div>

        {/* Full-Width Oversized Editorial Statement */}
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.4rem,6.4vw,6.2rem)] font-bold leading-[0.96] tracking-[-0.035em]">
          {STATEMENT_WORDS.map((word, index) => (
            <span
              key={index}
              data-manifesto-word
              className={`mr-[0.24em] inline-block will-change-transform ${
                word.accent === "crimson"
                  ? "crimson-gloss-text"
                  : word.accent === "chrome"
                  ? "chrome-text"
                  : "text-[#F5F5F5]"
              }`}
            >
              {word.text}
            </span>
          ))}
        </h2>

        {/* Scrubbed Crimson Lacquer Axis */}
        <div className="mt-16 h-[2px] w-full bg-[rgba(192,192,192,0.14)]">
          <div
            ref={sweepRef}
            className="crimson-lacquer-bar h-full w-full origin-left"
          />
        </div>

        {/* Horizontal 3-Beat Editorial Ribbon */}
        <div
          data-manifesto-beats
          className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3 lg:gap-12"
        >
          {MANIFESTO_BEATS.map((beat) => (
            <div key={beat.roman} data-manifesto-beat className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-sm font-bold tracking-[0.2em]">
                  {beat.roman}
                </span>
                <span className="h-[1px] flex-1 bg-gradient-to-r from-[rgba(245,245,245,0.35)] to-transparent" />
                <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A1A1A1]">
                  {beat.label}
                </span>
              </div>
              <p className="text-base leading-relaxed text-[#D0D0D0] sm:text-lg">
                {beat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
