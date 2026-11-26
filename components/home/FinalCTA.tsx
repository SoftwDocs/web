"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useInquiry } from "@/components/animations/MotionProvider";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);
  const { openInquiry, prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1.12, yPercent: -6 },
        {
          scale: 1,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || !glintRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glintRef.current.style.background = `radial-gradient(circle 420px at ${x.toFixed(
      1
    )}% ${y.toFixed(
      1
    )}%, rgba(255, 23, 36, 0.16) 0%, rgba(245, 245, 245, 0.05) 36%, transparent 72%)`;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden border-t border-[rgba(192,192,192,0.18)] bg-[#060606] py-16 sm:py-20 lg:py-24"
    >
      {/* Bespoke 3D Monolith Artwork Backdrop */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
      >
        <Image
          src="/images/crimson-chrome-monolith.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right opacity-62"
        />
      </div>

      {/* Interactive Pointer-Reactive Studio Specular Reflection */}
      <div
        ref={glintRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      />

      {/* Directional Contrast Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(95deg, #060606 0%, rgba(6,6,6,0.9) 44%, rgba(6,6,6,0.38) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-10">
        <div>
          <div className="mb-7 inline-flex items-center gap-3">
            <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
              INITIATE AN ENGAGEMENT
            </span>
          </div>

          <TextReveal
            as="h2"
            lines={[
              { text: "SOME IDEAS", variant: "default" },
              { text: "DESERVE TO", variant: "chrome" },
              { text: "BECOME REALITY.", variant: "crimson" },
            ]}
            className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.75rem,7.2vw,6.8rem)] font-bold leading-[0.91] tracking-[-0.04em]"
          />

          <ScrollReveal variant="clip" delay={0.1}>
            <p className="mt-9 text-base leading-relaxed text-[#D0D0D0] sm:text-xl">
              Have a complex challenge, an ambitious product idea, or a system
              that needs a better engineering approach? Let&apos;s explore what
              we can build together.
            </p>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                onClick={() => openInquiry()}
                showArrow
                className="px-8 py-4 text-xs uppercase tracking-[0.16em]"
              >
                START A CONVERSATION
              </Button>
              <Button
                variant="secondary"
                href="#expertise"
                showArrow
                className="px-8 py-4 text-xs uppercase tracking-[0.16em]"
              >
                EXPLORE OUR EXPERTISE
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
