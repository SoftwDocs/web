"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  Layers,
  Lock,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import { SELECTED_PROJECTS, type ProjectItem } from "@/data/projects";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useInquiry } from "@/components/animations/MotionProvider";

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const { openInquiry } = useInquiry();

  const fujifenix = SELECTED_PROJECTS[0];
  const karachiGum = SELECTED_PROJECTS[1];
  const edgeway = SELECTED_PROJECTS[2];

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="relative border-t border-[rgba(192,192,192,0.16)] bg-[#060606] py-14 sm:py-16 lg:py-20"
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 border-b border-[rgba(192,192,192,0.16)] pb-12">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="crimson-beacon h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.26em] text-[#C5C5C5]">
              SELECTED ENGINEERING WORK
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.4rem,5.8vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.035em]">
            <span className="chrome-text block">IDEAS ARE THE BEGINNING.</span>
            <span className="block text-[#F5F5F5]">
              EXECUTION MAKES{" "}
              <span className="crimson-gloss-text">THE DIFFERENCE.</span>
            </span>
          </h2>
        </div>

        {/* ============================================================
            CASE STUDY 01 — FUJIFENIX (Full-Bleed Panorama Composition)
           ============================================================ */}
        <ScrollReveal variant="clip">
          <article
            id={`project-${fujifenix.id}`}
            className="group relative border-b border-[rgba(192,192,192,0.16)] pb-14"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.24em]">
                  01 {"//"} {fujifenix.industry}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.75rem,7vw,6.25rem)] font-bold leading-none tracking-[-0.04em] text-[#F5F5F5]">
                  {fujifenix.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(fujifenix)}
                className="specular-sweep inline-flex items-center gap-2 border border-[rgba(245,245,245,0.28)] bg-[#101010] px-5 py-3 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F5] transition-colors hover:border-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
              >
                Explore Project
                <ArrowUpRight className="h-4 w-4 text-[#FF1724]" />
              </button>
            </div>

            {/* Wide Architectural Industrial Stage */}
            <div className="ambient-chrome-sweep relative mt-8 overflow-hidden border border-[rgba(245,245,245,0.22)] bg-[#0B0B0B]">
              {fujifenix.image ? (
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={fujifenix.image.src}
                    alt={fujifenix.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative min-h-[360px] p-6 sm:min-h-[440px] sm:p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-24"
                  >
                    <Image
                      src="/images/precision-blades-sculpture.jpg"
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="engineering-grid pointer-events-none absolute inset-0 opacity-50"
                  />

                  <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="obsidian-panel flex flex-col justify-between p-6 lg:col-span-5">
                      <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
                        <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.2em]">
                          Industrial Digital Platform
                        </span>
                        <Layers className="h-4 w-4 text-[#C5C5C5]" />
                      </div>
                      <div className="my-8 space-y-3">
                        <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#F5F5F5]">
                          {fujifenix.summary}
                        </div>
                        <p className="text-sm leading-relaxed text-[#A1A1A1]">
                          {fujifenix.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {fujifenix.verifiedTechnologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-[rgba(192,192,192,0.2)] bg-[#080808] px-3 py-1 text-xs text-[#C5C5C5]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="obsidian-panel flex flex-col justify-between p-6 lg:col-span-7">
                      <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.14)] pb-3 text-[11px] uppercase tracking-[0.2em] text-[#A1A1A1]">
                        <span>FUJIFENIX {"//"} BUSINESS SYSTEMS TOPOLOGY</span>
                        <span className="crimson-gloss-text font-bold">PRODUCTION ARCHITECTURE</span>
                      </div>
                      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {fujifenix.scope.map((item, idx) => (
                          <div
                            key={item}
                            className="specular-sweep border border-[rgba(192,192,192,0.16)] bg-[#090909] p-4"
                          >
                            <div className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold">
                              0{idx + 1}
                            </div>
                            <div className="mt-2 text-sm font-medium text-[#F5F5F5]">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                      <svg viewBox="0 0 540 96" className="w-full" fill="none">
                        <path
                          d="M12 78 C95 78, 125 26, 210 26 C295 26, 325 62, 410 38 C460 24, 495 18, 528 14"
                          stroke="#F5F5F5"
                          strokeWidth="1.6"
                        />
                        <motion.path
                          d="M12 86 C110 86, 145 50, 225 50 C310 50, 345 78, 430 56 C475 45, 502 36, 528 32"
                          stroke="#FF1724"
                          strokeWidth="1.7"
                          strokeDasharray="12 6"
                          animate={{ strokeDashoffset: [0, -36] }}
                          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                        />
                        <circle cx="210" cy="26" r="4.5" fill="#FF1724" />
                        <circle cx="410" cy="38" r="4" fill="#F5F5F5" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        </ScrollReveal>

        {/* ============================================================
            CASE STUDY 02 — KARACHI GUM (Vertical Rail + CRM Architecture)
           ============================================================ */}
        <ScrollReveal variant="clip">
          <article
            id={`project-${karachiGum.id}`}
            className="group relative border-b border-[rgba(192,192,192,0.16)] py-14"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col justify-between lg:col-span-4">
                <div>
                  <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.24em]">
                    02 {"//"} {karachiGum.industry}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.035em] text-[#F5F5F5]">
                    {karachiGum.name}
                  </h3>
                  <p className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-[#C5C5C5]">
                    {karachiGum.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#A1A1A1] sm:text-base">
                    {karachiGum.description}
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {karachiGum.verifiedTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[rgba(192,192,192,0.2)] bg-[#101010] px-3 py-1.5 text-xs text-[#C5C5C5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(karachiGum)}
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] underline decoration-[#FF1724] decoration-2 underline-offset-4 transition-colors hover:text-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                  >
                    Explore Project
                    <ArrowUpRight className="h-4 w-4 text-[#FF1724]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="obsidian-panel ambient-chrome-sweep relative overflow-hidden p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
                    <div className="flex items-center gap-2.5">
                      <Workflow className="h-4 w-4 text-[#FF1724]" />
                      <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
                        CRM Pipeline &amp; Commercial Architecture
                      </span>
                    </div>
                    <Database className="h-4 w-4 text-[#C5C5C5]" />
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                      {
                        stage: "01 // INQUIRY INTAKE",
                        title: "Commercial Website Capture",
                        detail: "Structured inbound trade & product specifications routed cleanly.",
                      },
                      {
                        stage: "02 // CRM WORKFLOW",
                        title: "Account & Pipeline Tracking",
                        detail: "Centralized client records, follow-up cadence, and status visibility.",
                      },
                      {
                        stage: "03 // OPERATIONS",
                        title: "Order & Fulfillment Sync",
                        detail: "Aligned commercial communication with internal operations.",
                      },
                    ].map((col, i) => (
                      <div
                        key={col.stage}
                        className={`specular-sweep flex flex-col justify-between border p-5 ${
                          i === 1
                            ? "border-[#FF1724]/55 bg-gradient-to-b from-[#1D090B] to-[#0D0607]"
                            : "border-[rgba(192,192,192,0.16)] bg-[#0A0A0A]"
                        }`}
                      >
                        <div>
                          <div className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.2em]">
                            {col.stage}
                          </div>
                          <h4 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[#F5F5F5]">
                            {col.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-[#A1A1A1]">
                            {col.detail}
                          </p>
                        </div>
                        <div className="mt-6 h-[2px] w-full bg-[rgba(192,192,192,0.14)]">
                          <div
                            className={`h-full ${
                              i === 1
                                ? "crimson-lacquer-bar w-full"
                                : "w-2/3 bg-gradient-to-r from-[#C5C5C5] to-transparent"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border border-[rgba(192,192,192,0.14)] bg-[#080808] px-5 py-4">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-[0.18em] text-[#C5C5C5]">
                      Unified Web Presence + Bespoke CRM Layer
                    </span>
                    <span className="text-xs text-[#7A7A7A]">
                      Built for operational clarity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </ScrollReveal>

        {/* ============================================================
            CASE STUDY 03 — EDGEWAY SECURITY (Dual-Layer Console Spread)
           ============================================================ */}
        <ScrollReveal variant="clip">
          <article id={`project-${edgeway.id}`} className="group relative pt-14">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="relative lg:col-span-7">
                <div className="obsidian-panel ambient-chrome-sweep relative overflow-hidden p-6 sm:p-9">
                  <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-3">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5C5C5]">
                      CORPORATE WEB PLATFORM
                    </span>
                    <Lock className="h-3.5 w-3.5 text-[#C5C5C5]" />
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-12">
                    <div className="specular-sweep border border-[rgba(192,192,192,0.16)] bg-[#080808] p-5 sm:col-span-7">
                      <div className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[#F5F5F5]">
                        Authoritative Corporate Flagship
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[#A1A1A1]">
                        High-contrast digital presence engineered to project
                        operational trust and institutional discipline.
                      </p>
                      <div className="crimson-lacquer-bar mt-5 h-1.5 w-28" />
                    </div>

                    <div className="obsidian-panel specular-sweep border-[#FF1724]/45 p-5 sm:col-span-5">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#FF1724]" />
                        <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5F5F5]">
                          Admin Console
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2.5 text-xs text-[#C5C5C5]">
                        <li className="border-b border-[rgba(192,192,192,0.12)] pb-2">
                          Role-Structured Access
                        </li>
                        <li className="border-b border-[rgba(192,192,192,0.12)] pb-2">
                          Operational Oversight
                        </li>
                        <li>Content &amp; Workflow Control</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.24em]">
                  03 {"//"} {edgeway.industry}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-[#F5F5F5]">
                  {edgeway.name}
                </h3>
                <p className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-[#C5C5C5]">
                  {edgeway.summary}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#A1A1A1] sm:text-base">
                  {edgeway.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {edgeway.verifiedTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[rgba(192,192,192,0.2)] bg-[#101010] px-3 py-1.5 text-xs text-[#C5C5C5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(edgeway)}
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5] underline decoration-[#FF1724] decoration-2 underline-offset-4 transition-colors hover:text-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                  >
                    Explore Project
                    <ArrowUpRight className="h-4 w-4 text-[#FF1724]" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>

      {/* Project Dossier Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="obsidian-panel relative z-10 w-full max-w-2xl overflow-hidden rounded-sm p-6 sm:p-9"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[rgba(192,192,192,0.16)] pb-5">
                <div>
                  <span className="crimson-gloss-text font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.22em]">
                    {selectedProject.industry}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#F5F5F5] sm:text-3xl"
                  >
                    {selectedProject.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="rounded-sm border border-[rgba(192,192,192,0.2)] bg-[#141414] p-2 text-[#C5C5C5] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-base leading-relaxed text-[#C5C5C5]">
                  {selectedProject.description}
                </p>

                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#A1A1A1]">
                    Delivered System Scope
                  </div>
                  <ul className="mt-3 space-y-2">
                    {selectedProject.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[#F5F5F5]"
                      >
                        <span className="crimson-beacon h-2 w-2 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#A1A1A1]">
                    Architecture &amp; Capabilities
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.verifiedTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-[rgba(192,192,192,0.18)] bg-[#141414] px-3 py-1.5 text-xs text-[#C5C5C5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(192,192,192,0.16)] pt-6">
                <span className="text-xs text-[#7A7A7A]">
                  Verified engineering deliverable
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const projectName = selectedProject.name;
                    setSelectedProject(null);
                    openInquiry(`Custom Digital Solutions — Similar to ${projectName}`);
                  }}
                  className="crimson-gloss-surface specular-sweep inline-flex items-center gap-2 rounded-sm border border-[#FF5861]/40 px-5 py-2.5 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F5F5]"
                >
                  Discuss a Similar System
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
