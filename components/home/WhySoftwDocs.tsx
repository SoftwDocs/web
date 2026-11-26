"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHY_SOFTWDOCS_PILLARS } from "@/data/services";
import { useInquiry } from "@/components/animations/MotionProvider";

export function WhySoftwDocs() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imageWrapRef.current;
    if (!section || !imgWrap || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrap,
        { clipPath: "inset(16% 0% 16% 0%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imgWrap,
            start: "top 86%",
            end: "center 42%",
            scrub: 0.7,
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll("[data-why-pillar]"),
        { clipPath: "inset(0 100% 0 0)", opacity: 0.2 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "clipPath,opacity",
          scrollTrigger: {
            trigger: section.querySelector("[data-why-list]"),
            start: "top 82%",
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
      className="relative overflow-hidden border-t border-[rgba(192,192,192,0.16)] bg-[#0A0A0A] py-14 sm:py-16 lg:py-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        {/* Top Monumental Display Headline */}
        <div className="mb-16 border-b border-[rgba(192,192,192,0.16)] pb-12">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
              THE DIFFERENCE IS IN THE ENGINEERING
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.4rem,5.8vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.035em]">
            <span className="chrome-text block">BUILT ON THINKING.</span>
            <span className="block text-[#F5F5F5]">
              DEFINED BY{" "}
              <span className="crimson-gloss-text">EXECUTION.</span>
            </span>
          </h2>
        </div>

        {/* Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div
              ref={imageWrapRef}
              className="ambient-chrome-sweep relative aspect-[4/5] w-full overflow-hidden border border-[rgba(245,245,245,0.24)] bg-[#080808]"
            >
              <Image
                src="/images/precision-blades-sculpture.jpg"
                alt="Precision machined brushed chrome blades and glossy crimson chamfer representing SoftwDocs engineering craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-85"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.24em]">
                  MATERIAL DISCIPLINE
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#D0D0D0]">
                  Every architectural layer—from schema boundaries to user
                  interaction—is built with deliberate precision.
                </p>
              </div>
            </div>
          </div>

          <div
            data-why-list
            className="divide-y divide-[rgba(192,192,192,0.16)] border-t border-b border-[rgba(192,192,192,0.16)] lg:col-span-7"
          >
            {WHY_SOFTWDOCS_PILLARS.map((pillar, idx) => (
              <article
                key={pillar.index}
                data-why-pillar
                className={`specular-sweep py-8 transition-colors duration-300 hover:bg-[#101010]/75 sm:px-6 sm:py-10 ${
                  idx % 2 === 1 ? "lg:pl-14" : ""
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-5">
                    <span className="chrome-text font-[family-name:var(--font-space-grotesk)] text-2xl font-bold sm:text-3xl">
                      {pillar.index}
                    </span>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.22em]">
                    {pillar.principleTag}
                  </span>
                </div>

                <p className="mt-3 pl-0 text-base leading-relaxed text-[#A1A1A1] sm:pl-12 sm:text-lg">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
