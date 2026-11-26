"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { APPROACH_STEPS } from "@/data/services";
import { useInquiry } from "@/components/animations/MotionProvider";

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const rail = railRef.current;
    if (!section || !track || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 160);
      if (getScrollAmount() <= 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(400, getScrollAmount() * 0.9)}`,
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      if (rail) {
        tl.fromTo(
          rail,
          { scaleX: 0.08 },
          { scaleX: 1, ease: "none" },
          0
        );
      }

      const cards = track.querySelectorAll("[data-approach-card]");
      if (cards.length) {
        tl.fromTo(
          cards,
          { y: 18 },
          { y: -12, stagger: 0.12, ease: "sine.inOut" },
          0
        );
      }
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[rgba(192,192,192,0.16)] bg-[#0A0A0A] py-14 sm:py-16 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:py-14"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-[rgba(192,192,192,0.16)] pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
                HOW WE THINK
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              <span className="chrome-text">THOUGHTFUL BY DESIGN. </span>
              <span className="text-[#F5F5F5]">PRECISE BY ENGINEERING.</span>
            </h2>
          </div>

          <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">
            4-Phase Execution Continuum
          </span>
        </div>

        {/* Continuous Crimson Lacquer Conduit Rail */}
        <div
          aria-hidden="true"
          className="relative mt-10 hidden h-[2px] w-full bg-[rgba(192,192,192,0.15)] lg:block"
        >
          <div
            ref={railRef}
            className="crimson-lacquer-bar h-full w-full origin-left"
          />
        </div>
      </div>

      {/* Horizontal Scroll Stage Track (Desktop Pinned / Mobile Vertical Connected) */}
      <div className="mt-10 w-full overflow-visible px-5 sm:px-8 lg:px-12">
        <div
          ref={trackRef}
          className="flex w-full flex-col gap-6 lg:flex-row lg:gap-8"
        >
          {APPROACH_STEPS.map((step, idx) => (
            <article
              key={step.number}
              data-approach-card
              className="obsidian-panel ambient-chrome-sweep relative flex shrink-0 flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-[320px] lg:w-[380px] xl:w-[440px]"
            >
              {/* Top Stage Metadata */}
              <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.14)] pb-4">
                <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.22em]">
                  STAGE {step.number}
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] uppercase tracking-[0.18em] text-[#7A7A7A]">
                  0{idx + 1} / 04
                </span>
              </div>

              {/* Oversized Chrome Background Numeral + Title */}
              <div className="my-8">
                <div className="chrome-text font-[family-name:var(--font-space-grotesk)] text-6xl font-bold leading-none tracking-tighter sm:text-7xl">
                  {step.number}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#A1A1A1]">
                  {step.description}
                </p>
              </div>

              {/* Bottom Deliverable Artifact Bar */}
              <div className="flex items-center justify-between border-t border-[rgba(192,192,192,0.14)] pt-4">
                <span className="text-xs font-medium tracking-[0.06em] text-[#C5C5C5]">
                  {step.artifactLabel}
                </span>
                <span className="crimson-beacon h-2.5 w-2.5 rounded-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
