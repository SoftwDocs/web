"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES_APPLICATIONS } from "@/data/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useInquiry } from "@/components/animations/MotionProvider";

export function Industries() {
  const [activeId, setActiveId] = useState(INDUSTRIES_APPLICATIONS[0].id);
  const { openInquiry } = useInquiry();
  const activeIndustry =
    INDUSTRIES_APPLICATIONS.find((item) => item.id === activeId) ??
    INDUSTRIES_APPLICATIONS[0];

  return (
    <section
      id="solutions"
      className="relative border-t border-[rgba(192,192,192,0.16)] bg-[#080808] py-14 sm:py-16 lg:py-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-[rgba(192,192,192,0.16)] pb-12 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
                WHERE TECHNOLOGY MEETS REAL PROBLEMS
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.3rem,5.4vw,5.1rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              <span className="text-[#F5F5F5]">SOLUTIONS THAT </span>
              <span className="chrome-text">CROSS </span>
              <span className="crimson-gloss-text">INDUSTRIES.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#A1A1A1] sm:text-base">
            Focused on operational bottlenecks and architectural applications—not
            empty vertical claims.
          </p>
        </div>

        {/* Full-Width Interactive Domain Band */}
        <ScrollReveal variant="clip" className="mt-14">
          <div className="grid grid-cols-1 border-t border-l border-[rgba(192,192,192,0.16)] sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_APPLICATIONS.map((item) => {
              const active = item.id === activeIndustry.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`specular-sweep group relative flex flex-col justify-between border-r border-b border-[rgba(192,192,192,0.16)] p-6 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF1724] sm:p-8 ${
                    active
                      ? "bg-gradient-to-br from-[#1C080B] via-[#10090A] to-[#080808]"
                      : "bg-[#0B0B0B] hover:bg-[#111111]"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-[0.22em] ${
                        active ? "crimson-gloss-text" : "text-[#666666]"
                      }`}
                    >
                      {item.index}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        active
                          ? "translate-x-0.5 -translate-y-0.5 text-[#FF1724]"
                          : "text-[#555555]"
                      }`}
                    />
                  </div>

                  <h3 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-[#F5F5F5] sm:text-2xl">
                    {item.name}
                  </h3>

                  <div
                    aria-hidden="true"
                    className={`mt-6 h-[2px] transition-all duration-300 ${
                      active
                        ? "crimson-lacquer-bar w-full"
                        : "w-10 bg-[rgba(192,192,192,0.28)] group-hover:w-20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Domain Architectural Lens */}
          <div className="obsidian-panel ambient-chrome-sweep mt-6 p-7 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, clipPath: "inset(0 0 10% 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                exit={{ opacity: 0, clipPath: "inset(10% 0 0 0)" }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-4">
                  <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.22em]">
                    DOMAIN {activeIndustry.index} {"//"} BRIEF
                  </span>
                  <h4 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#F5F5F5] sm:text-3xl">
                    {activeIndustry.name}
                  </h4>
                  <button
                    type="button"
                    onClick={() => openInquiry(activeIndustry.name)}
                    className="mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] underline decoration-[#FF1724] decoration-2 underline-offset-4 hover:text-[#FF1724]"
                  >
                    Discuss {activeIndustry.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="border-t border-[rgba(192,192,192,0.14)] pt-5 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">
                    Operational Challenge
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1A1] sm:text-base">
                    {activeIndustry.challenge}
                  </p>
                </div>

                <div className="border-t border-[rgba(192,192,192,0.14)] pt-5 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <div className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.22em]">
                    Engineering Application
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#F5F5F5] sm:text-base">
                    {activeIndustry.application}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
