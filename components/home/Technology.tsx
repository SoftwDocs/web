"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TECHNOLOGY_ECOSYSTEM } from "@/data/services";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const RELATIONSHIPS: Record<string, string[]> = {
  frontend: ["backend", "ai-intelligence"],
  backend: ["frontend", "ai-intelligence", "data", "infrastructure"],
  "ai-intelligence": ["backend", "data", "infrastructure"],
  infrastructure: ["backend", "ai-intelligence", "data"],
  data: ["backend", "ai-intelligence", "infrastructure"],
};

export function Technology() {
  const [activeId, setActiveId] = useState<string>("ai-intelligence");
  const activeCategory =
    TECHNOLOGY_ECOSYSTEM.find((c) => c.id === activeId) ??
    TECHNOLOGY_ECOSYSTEM[0];
  const connectedIds = RELATIONSHIPS[activeId] ?? [];

  return (
    <section className="relative border-t border-[rgba(192,192,192,0.16)] bg-[#080808] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 border-b border-[rgba(192,192,192,0.16)] pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
                ENGINEERED WITH THE RIGHT TECHNOLOGY
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.3rem,5vw,4.8rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              <span className="chrome-text block">A STRONG FOUNDATION.</span>
              <span className="block text-[#F5F5F5]">AN OPEN FUTURE.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-[#A1A1A1] sm:text-base lg:col-span-4">
            Inspect how our core technology layers interconnect across user
            interfaces, intelligent orchestration, cloud topology, and data
            persistence.
          </p>
        </div>

        {/* Interactive System Relationship Environment */}
        <ScrollReveal variant="clip" className="mt-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Interactive Node Topology (Left 7 Cols) */}
            <div className="obsidian-panel ambient-chrome-sweep relative overflow-hidden p-6 sm:p-10 lg:col-span-7">
              <div
                aria-hidden="true"
                className="engineering-grid pointer-events-none absolute inset-0 opacity-60"
              />

              {/* Animated Background Conduit Vectors */}
              <svg
                aria-hidden="true"
                viewBox="0 0 600 420"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
                fill="none"
              >
                <motion.path
                  d="M 150 90 L 300 210 L 450 90 M 150 330 L 300 210 L 450 330"
                  stroke="url(#techSignalGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
                  animate={{ strokeDashoffset: [0, -32] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="techSignalGrad" x1="0" y1="0" x2="600" y2="420">
                    <stop offset="0%" stopColor="#F5F5F5" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#FF1724" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F5F5F5" stopOpacity="0.45" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-10 flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
                <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5C5C5]">
                  SYSTEM TOPOLOGY {"//"} SELECT LAYER
                </span>
                <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-[11px] font-bold uppercase tracking-[0.18em]">
                  {connectedIds.length} Connected Layers
                </span>
              </div>

              {/* 5 Interconnected Architectural Nodes */}
              <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {TECHNOLOGY_ECOSYSTEM.map((cat, idx) => {
                  const isSelected = cat.id === activeId;
                  const isConnected = connectedIds.includes(cat.id);

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveId(cat.id)}
                      className={`specular-sweep group relative flex flex-col justify-between border p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] ${
                        idx === 2 ? "sm:col-span-2" : ""
                      } ${
                        isSelected
                          ? "border-[#FF1724]/70 bg-gradient-to-br from-[#23080B] via-[#130708] to-[#0A0A0A] shadow-[0_14px_34px_-14px_rgba(255,23,36,0.75)]"
                          : isConnected
                          ? "border-[rgba(245,245,245,0.44)] bg-[#141414]/95"
                          : "border-[rgba(192,192,192,0.14)] bg-[#0A0A0A]/90 opacity-75 hover:opacity-100"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span
                          className={`font-[family-name:var(--font-space-grotesk)] text-xs font-bold tracking-[0.2em] ${
                            isSelected
                              ? "crimson-gloss-text"
                              : isConnected
                              ? "text-[#F5F5F5]"
                              : "text-[#666666]"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] uppercase tracking-[0.18em] text-[#A1A1A1]">
                          {isSelected
                            ? "ACTIVE FOCUS"
                            : isConnected
                            ? "INTEROPERATING"
                            : "LAYER"}
                        </span>
                      </div>

                      <div className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-[#F5F5F5]">
                        {cat.category}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cat.items.map((tech) => (
                          <span
                            key={tech}
                            className="border border-[rgba(192,192,192,0.18)] bg-[#080808] px-2.5 py-1 text-[11px] text-[#C5C5C5]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Layer Specification & Relationship Inspector (Right 5 Cols) */}
            <div className="obsidian-panel flex flex-col justify-between p-6 sm:p-10 lg:col-span-5">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, clipPath: "inset(0 0 10% 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 0.28 }}
              >
                <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
                  <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.22em]">
                    ACTIVE SPECIFICATION
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#7A7A7A]">
                    {activeCategory.items.length} Technologies
                  </span>
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-[#F5F5F5]">
                  {activeCategory.category}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#C5C5C5]">
                  {activeCategory.summary}
                </p>

                <div className="mt-8 space-y-2.5">
                  {activeCategory.items.map((tech, i) => (
                    <div
                      key={tech}
                      className="specular-sweep flex items-center justify-between border border-[rgba(192,192,192,0.18)] bg-[#090909] px-4 py-3"
                    >
                      <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#F5F5F5]">
                        {tech}
                      </span>
                      <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-[11px] font-bold">
                        0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-8 border-t border-[rgba(192,192,192,0.16)] pt-6">
                <div className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A1A1A1]">
                  Direct Architectural Interfaces
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {connectedIds.map((id) => {
                    const target = TECHNOLOGY_ECOSYSTEM.find(
                      (item) => item.id === id
                    );
                    if (!target) return null;
                    return (
                      <button
                        key={target.id}
                        type="button"
                        onClick={() => setActiveId(target.id)}
                        className="specular-sweep border border-[rgba(245,245,245,0.24)] bg-[#141414] px-3 py-1.5 font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F5F5F5] transition-colors hover:border-[#FF1724]"
                      >
                        {target.category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
