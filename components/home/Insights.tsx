"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INSIGHT_TOPICS } from "@/data/insights";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useInquiry } from "@/components/animations/MotionProvider";

export function Insights() {
  const [featuredId, setFeaturedId] = useState(INSIGHT_TOPICS[0].id);
  const { openInquiry } = useInquiry();

  const featuredTopic =
    INSIGHT_TOPICS.find((t) => t.id === featuredId) ?? INSIGHT_TOPICS[0];
  const secondaryTopics = INSIGHT_TOPICS.filter(
    (t) => t.id !== featuredTopic.id
  );

  return (
    <section
      id="insights"
      className="relative border-t border-[rgba(192,192,192,0.16)] bg-[#080808] py-14 sm:py-16 lg:py-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        {/* Magazine Masthead */}
        <div className="flex flex-col justify-between gap-6 border-b border-[rgba(192,192,192,0.2)] pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
                THINKING ABOUT WHAT&apos;S NEXT
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.4rem,5.4vw,5.1rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              <span className="chrome-text">IDEAS WORTH </span>
              <span className="text-[#F5F5F5]">EXPLORING.</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 self-start border border-[rgba(192,192,192,0.2)] bg-[#101010] px-4 py-2 text-xs text-[#C5C5C5] lg:self-auto">
            <span className="crimson-beacon h-2 w-2 rounded-full" />
            <span className="font-[family-name:var(--font-space-grotesk)] uppercase tracking-[0.18em]">
              Engineering Journal · In Preparation
            </span>
          </div>
        </div>

        {/* Magazine Editorial Spread */}
        <ScrollReveal variant="clip" className="mt-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Lead Feature Story */}
            <div className="obsidian-panel ambient-chrome-sweep flex flex-col justify-between p-7 sm:p-10 lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.article
                  key={featuredTopic.id}
                  initial={{ opacity: 0, clipPath: "inset(0 0 10% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, clipPath: "inset(10% 0 0 0)" }}
                  transition={{ duration: 0.28 }}
                  className="flex h-full flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
                      <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.22em]">
                        FEATURED BRIEF {featuredTopic.index} {"//"}{" "}
                        {featuredTopic.category}
                      </span>
                      <span className="border border-[rgba(192,192,192,0.18)] bg-[#141414] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C5C5C5]">
                        {featuredTopic.status}
                      </span>
                    </div>

                    <h3 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-[1.05] tracking-tight text-[#F5F5F5] sm:text-4xl">
                      {featuredTopic.title}
                    </h3>

                    <p className="mt-5 text-base leading-relaxed text-[#C5C5C5] sm:text-lg">
                      {featuredTopic.thesis}
                    </p>

                    <div className="mt-8 border-t border-[rgba(192,192,192,0.14)] pt-6">
                      <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A1A1A1]">
                        Key Architectural Questions
                      </div>
                      <ul className="mt-3 space-y-3">
                        {featuredTopic.keyQuestions.map((q) => (
                          <li
                            key={q}
                            className="flex items-start gap-3 text-sm leading-relaxed text-[#A1A1A1]"
                          >
                            <span className="crimson-lacquer-bar mt-2 h-[2px] w-3 shrink-0" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-[rgba(192,192,192,0.14)] pt-6">
                    <button
                      type="button"
                      onClick={() => openInquiry(featuredTopic.title)}
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] underline decoration-[#FF1724] decoration-2 underline-offset-4 transition-colors hover:text-[#FF1724]"
                    >
                      Discuss This Architecture Note
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Secondary 2x2 Magazine Dispatches */}
            <div className="grid grid-cols-1 border-t border-l border-[rgba(192,192,192,0.16)] sm:grid-cols-2 lg:col-span-6">
              {secondaryTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setFeaturedId(topic.id)}
                  className="specular-sweep group flex flex-col justify-between border-r border-b border-[rgba(192,192,192,0.16)] bg-[#0A0A0A] p-6 text-left transition-colors hover:bg-[#121212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF1724] sm:p-7"
                >
                  <div>
                    <div className="flex w-full items-center justify-between">
                      <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-[0.2em]">
                        {topic.index}
                      </span>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] uppercase tracking-[0.18em] text-[#7A7A7A]">
                        {topic.category}
                      </span>
                    </div>

                    <h4 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-lg font-bold leading-snug text-[#F5F5F5] sm:text-xl">
                      {topic.title}
                    </h4>

                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-[#A1A1A1] sm:text-sm">
                      {topic.thesis}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[rgba(192,192,192,0.12)] pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A1A1A1]">
                      Read Abstract
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#FF1724] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
