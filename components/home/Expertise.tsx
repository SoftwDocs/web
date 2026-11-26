"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EXPERTISE_ITEMS, type ExpertiseItem } from "@/data/services";
import { useInquiry } from "@/components/animations/MotionProvider";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function ArchitecturalStageVisual({ item }: { item: ExpertiseItem }) {
  return (
    <div className="obsidian-panel ambient-chrome-sweep relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden p-6 sm:min-h-[400px] sm:p-8">
      <div
        aria-hidden="true"
        className="engineering-grid pointer-events-none absolute inset-0 opacity-65"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 23, 36, 0.24) 0%, rgba(105, 0, 8, 0.08) 45%, transparent 72%)",
        }}
      />

      {/* Top Instrument Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-[rgba(192,192,192,0.18)] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="crimson-beacon h-2 w-2 rounded-full" />
          <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F5F5F5]">
            DISCIPLINE {item.number} {"//"} ARCHITECTURAL VIEW
          </span>
        </div>
        <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] uppercase tracking-[0.18em] text-[#C5C5C5]">
          SoftwDocs Core
        </span>
      </div>

      {/* Interactive SVG Engineering Blueprints with Animated Signal Paths */}
      <div className="relative z-10 my-6 flex flex-1 items-center justify-center">
        {item.schematicType === "architecture" && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md" fill="none">
            <defs>
              <linearGradient id="archChrome" x1="0" y1="0" x2="420" y2="220">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#8A8A8A" />
                <stop offset="100%" stopColor="#F5F5F5" />
              </linearGradient>
              <linearGradient id="archCrimson" x1="130" y1="138" x2="290" y2="196">
                <stop offset="0%" stopColor="#FF7A82" />
                <stop offset="50%" stopColor="#FF1724" />
                <stop offset="100%" stopColor="#690008" />
              </linearGradient>
            </defs>
            <rect x="20" y="22" width="120" height="54" stroke="url(#archChrome)" strokeWidth="1.5" fill="#121212" />
            <text x="34" y="53" fill="#F5F5F5" fontSize="11" letterSpacing="2">CLIENT LAYER</text>
            <rect x="280" y="22" width="120" height="54" stroke="url(#archChrome)" strokeWidth="1.4" fill="#121212" />
            <text x="296" y="53" fill="#C5C5C5" fontSize="11" letterSpacing="2">DOMAIN API</text>
            <rect x="130" y="138" width="160" height="58" stroke="url(#archCrimson)" strokeWidth="1.8" fill="#18080A" />
            <text x="150" y="172" fill="#F5F5F5" fontSize="11" letterSpacing="2">CORE PLATFORM</text>
            <path d="M140 49 H280 M80 76 V167 H130 M340 76 V167 H290" stroke="rgba(245,245,245,0.48)" strokeWidth="1.3" />
            <motion.circle
              cx="140"
              cy="49"
              r="4"
              fill="#FF1724"
              animate={{ cx: [140, 280, 140] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="80" cy="167" r="3" fill="#F5F5F5" />
            <circle cx="340" cy="167" r="3" fill="#F5F5F5" />
          </svg>
        )}

        {item.schematicType === "agentic" && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md" fill="none">
            <motion.circle
              cx="210"
              cy="110"
              r="44"
              stroke="#FF1724"
              strokeWidth="1.8"
              fill="#19080A"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <text x="172" y="114" fill="#F5F5F5" fontSize="11" letterSpacing="2">ORCHESTRATOR</text>
            <rect x="24" y="24" width="96" height="40" stroke="#E5E5E5" strokeWidth="1.3" fill="#111111" />
            <text x="42" y="48" fill="#E5E5E5" fontSize="10" letterSpacing="1.5">RETRIEVAL</text>
            <rect x="300" y="24" width="96" height="40" stroke="#E5E5E5" strokeWidth="1.3" fill="#111111" />
            <text x="320" y="48" fill="#E5E5E5" fontSize="10" letterSpacing="1.5">REASONING</text>
            <rect x="24" y="156" width="96" height="40" stroke="#E5E5E5" strokeWidth="1.3" fill="#111111" />
            <text x="48" y="180" fill="#E5E5E5" fontSize="10" letterSpacing="1.5">TOOLS</text>
            <rect x="300" y="156" width="96" height="40" stroke="#F5F5F5" strokeWidth="1.3" fill="#111111" />
            <text x="314" y="180" fill="#F5F5F5" fontSize="10" letterSpacing="1.5">GUARDRAILS</text>
            <motion.path
              d="M120 44 L176 82 M300 44 L244 82 M120 176 L176 138 M300 176 L244 138"
              stroke="#FF1724"
              strokeWidth="1.4"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        )}

        {item.schematicType === "cloud" && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md" fill="none">
            <motion.polygon
              points="210,18 350,70 210,122 70,70"
              stroke="#F5F5F5"
              strokeWidth="1.5"
              fill="#121212"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <polygon points="210,64 350,116 210,168 70,116" stroke="rgba(197,197,197,0.55)" strokeWidth="1.2" fill="#0E0E0E" />
            <motion.polygon
              points="210,108 350,160 210,212 70,160"
              stroke="#FF1724"
              strokeWidth="1.7"
              fill="#18080A"
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <text x="165" y="74" fill="#F5F5F5" fontSize="10" letterSpacing="2">EDGE &amp; ROUTING</text>
            <text x="155" y="120" fill="#C5C5C5" fontSize="10" letterSpacing="2">KUBERNETES MESH</text>
            <text x="164" y="164" fill="#FF9CA3" fontSize="10" letterSpacing="2">CI/CD AUTOMATION</text>
          </svg>
        )}

        {item.schematicType === "custom" && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md" fill="none">
            <rect x="26" y="20" width="368" height="180" stroke="#C5C5C5" strokeWidth="1.4" fill="#101010" />
            <line x1="26" y1="54" x2="394" y2="54" stroke="rgba(197,197,197,0.28)" />
            <line x1="130" y1="54" x2="130" y2="200" stroke="rgba(197,197,197,0.28)" />
            <rect x="44" y="74" width="68" height="16" fill="rgba(255,23,36,0.26)" stroke="#FF1724" strokeWidth="1.2" />
            <rect x="44" y="102" width="68" height="14" fill="#1A1A1A" />
            <rect x="44" y="126" width="68" height="14" fill="#1A1A1A" />
            <rect x="150" y="74" width="222" height="52" stroke="#F5F5F5" strokeWidth="1.3" fill="#151515" />
            <rect x="150" y="140" width="106" height="42" stroke="rgba(197,197,197,0.4)" fill="#131313" />
            <motion.rect
              x="266"
              y="140"
              width="106"
              height="42"
              stroke="#FF1724"
              strokeWidth="1.4"
              fill="#19090B"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        )}

        {item.schematicType === "robotics" && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md" fill="none">
            <line x1="40" y1="186" x2="380" y2="186" stroke="rgba(197,197,197,0.4)" strokeWidth="1.2" />
            <circle cx="96" cy="164" r="18" stroke="#F5F5F5" strokeWidth="1.6" fill="#121212" />
            <motion.g
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "96px 164px" }}
            >
              <circle cx="196" cy="76" r="14" stroke="#FF1724" strokeWidth="1.8" fill="#19080A" />
              <circle cx="308" cy="108" r="11" stroke="#C5C5C5" strokeWidth="1.5" fill="#121212" />
              <path d="M108 150 L185 86 M210 80 L297 104" stroke="#F5F5F5" strokeWidth="2.6" />
              <path d="M319 108 H366 M346 94 L366 108 L346 122" stroke="#FF1724" strokeWidth="1.6" />
            </motion.g>
            <text x="234" y="54" fill="#C5C5C5" fontSize="10" letterSpacing="2">TELEMETRY SYNC</text>
          </svg>
        )}

        {item.schematicType === "experience" && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md" fill="none">
            <rect x="44" y="28" width="220" height="132" stroke="rgba(245,245,245,0.48)" strokeWidth="1.3" fill="#0F0F0F" />
            <motion.rect
              x="148"
              y="64"
              width="228"
              height="132"
              stroke="#FF1724"
              strokeWidth="1.6"
              fill="#121212"
              animate={{ x: [148, 156, 148], y: [64, 58, 64] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <line x1="172" y1="98" x2="334" y2="98" stroke="#F5F5F5" strokeWidth="2.4" />
            <line x1="172" y1="120" x2="296" y2="120" stroke="#A1A1A1" strokeWidth="1.6" />
            <rect x="172" y="144" width="88" height="26" fill="#FF1724" fillOpacity="0.26" stroke="#FF1724" />
          </svg>
        )}
      </div>

      {/* Bottom Outcome Strip */}
      <div className="relative z-10 border-t border-[rgba(192,192,192,0.16)] pt-4">
        <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A1A1A1]">
          Engineering Outcome
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-[#F5F5F5]">
          {item.engineeringOutcome}
        </p>
      </div>
    </div>
  );
}

export function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openInquiry } = useInquiry();
  const activeItem = EXPERTISE_ITEMS[activeIndex];

  return (
    <section
      id="expertise"
      className="relative border-t border-[rgba(192,192,192,0.16)] bg-[#080808] py-14 sm:py-16 lg:py-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        {/* Top Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[rgba(192,192,192,0.16)] pb-12 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.4rem,5.4vw,5.25rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              <span className="block text-[#F5F5F5]">ENGINEERING</span>
              <span className="chrome-text block">COMPLEXITY</span>
              <span className="crimson-gloss-text block">INTO POSSIBILITY.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#A1A1A1] sm:text-base">
            Select any engineering discipline to inspect its architectural
            blueprint, scope, and system role.
          </p>
        </div>

        {/* Interactive Split Architectural Console */}
        <ScrollReveal variant="clip" className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Discipline Index Selector */}
            <div className="lg:col-span-5">
              <div className="border-t border-[rgba(192,192,192,0.18)]">
                {EXPERTISE_ITEMS.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      id={item.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`specular-sweep group relative flex w-full items-center justify-between gap-4 border-b border-[rgba(192,192,192,0.14)] px-4 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF1724] ${
                        isActive
                          ? "bg-[#121212]"
                          : "bg-transparent hover:bg-[#0D0D0D]"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-0 left-0 h-full w-[3px] transition-all duration-300 ${
                          isActive
                            ? "crimson-lacquer-bar"
                            : "bg-transparent"
                        }`}
                      />
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight ${
                            isActive ? "crimson-gloss-text" : "text-[#555555]"
                          }`}
                        >
                          {item.number}
                        </span>
                        <span
                          className={`font-[family-name:var(--font-space-grotesk)] text-base font-semibold tracking-tight sm:text-lg ${
                            isActive
                              ? "text-[#F5F5F5]"
                              : "text-[#A1A1A1] group-hover:text-[#F5F5F5]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isActive
                            ? "translate-x-0.5 -translate-y-0.5 text-[#FF1724]"
                            : "text-[#555555] group-hover:text-[#C5C5C5]"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Architectural Stage & Capability Details */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, clipPath: "inset(0 0 8% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, clipPath: "inset(8% 0 0 0)" }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <ArchitecturalStageVisual item={activeItem} />

                  <div className="obsidian-panel grid grid-cols-1 gap-6 p-6 sm:grid-cols-12 sm:p-8">
                    <div className="sm:col-span-7">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-[#F5F5F5]">
                        {activeItem.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#C5C5C5] sm:text-base">
                        {activeItem.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => openInquiry(activeItem.title)}
                        className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] underline decoration-[#FF1724] decoration-2 underline-offset-4 transition-colors hover:text-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                      >
                        Explore {activeItem.title}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="border-t border-[rgba(192,192,192,0.14)] pt-5 sm:col-span-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                      <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF1724]">
                        Core Capabilities
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {activeItem.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2.5 text-sm text-[#A1A1A1]"
                          >
                            <span className="mt-2 h-1 w-2.5 shrink-0 bg-gradient-to-r from-[#FF1724] to-[#C5C5C5]" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Semantic SEO & Crawlable Index of All Six Disciplines */}
        <div className="sr-only">
          {EXPERTISE_ITEMS.map((item) => (
            <div key={item.id}>
              <h3>
                {item.number} — {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
