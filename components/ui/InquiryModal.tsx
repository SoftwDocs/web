"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, X } from "lucide-react";
import { useInquiry } from "@/components/animations/MotionProvider";
import { EXPERTISE_ITEMS } from "@/data/services";
import { getVerifiedContactEmail } from "@/lib/constants";

export function InquiryModal() {
  const { isOpen, initialTopic, closeInquiry } = useInquiry();
  const [customArea, setCustomArea] = useState<string | null>(null);
  const [organization, setOrganization] = useState("");
  const [challenge, setChallenge] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedArea = customArea ?? (initialTopic || "Software Engineering");
  const verifiedEmail = getVerifiedContactEmail();

  const handleClose = () => {
    setCustomArea(null);
    closeInquiry();
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCustomArea(null);
        closeInquiry();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeInquiry]);

  const formattedBrief = useMemo(() => {
    return [
      "SOFTWDOCS — ENGINEERING BRIEF",
      `Focus Discipline: ${selectedArea}`,
      `Organization / Team: ${organization.trim() || "Not specified"}`,
      "",
      "Problem & Intended Outcome:",
      challenge.trim() || "Exploring architecture and engineering scope.",
    ].join("\n");
  }, [selectedArea, organization, challenge]);

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(formattedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = verifiedEmail
    ? `mailto:${verifiedEmail}?subject=${encodeURIComponent(
        `Project Inquiry — ${selectedArea}`
      )}&body=${encodeURIComponent(formattedBrief)}`
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col justify-between overflow-y-auto border-l border-[rgba(192,192,192,0.2)] bg-[#0A0A0A] p-6 sm:p-10"
          >
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-[rgba(192,192,192,0.16)] pb-6">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2.5">
                    <span className="h-2 w-2 bg-[#FF1724]" />
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[#C5C5C5]">
                      Start a Conversation
                    </span>
                  </div>
                  <h2
                    id="inquiry-modal-title"
                    className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl"
                  >
                    Frame Your Engineering Challenge
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close project inquiry dialog"
                  className="rounded-sm border border-[rgba(192,192,192,0.2)] bg-[#121212] p-2.5 text-[#C5C5C5] transition-colors hover:border-[#F5F5F5]/50 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-7 space-y-6">
                <div>
                  <label className="block font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#C5C5C5]">
                    Primary Discipline
                  </label>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {EXPERTISE_ITEMS.map((item) => {
                      const active = selectedArea === item.title || selectedArea.toLowerCase() === item.title.toLowerCase();
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCustomArea(item.title)}
                          className={`rounded-sm border px-3.5 py-2.5 text-left text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] ${
                            active
                              ? "border-[#FF1724] bg-[#FF1724]/12 text-[#F5F5F5]"
                              : "border-[rgba(192,192,192,0.16)] bg-[#101010] text-[#A1A1A1] hover:border-[rgba(192,192,192,0.35)] hover:text-[#F5F5F5]"
                          }`}
                        >
                          <span className="mr-2 text-[#FF1724]">{item.number}</span>
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-org"
                    className="block font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#C5C5C5]"
                  >
                    Organization / Product Name
                  </label>
                  <input
                    id="inquiry-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Operations Team, Founder Venture, Enterprise Unit"
                    className="mt-2.5 w-full rounded-sm border border-[rgba(192,192,192,0.18)] bg-[#101010] px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#666666] focus:border-[#FF1724] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-challenge"
                    className="block font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.18em] text-[#C5C5C5]"
                  >
                    Technical Context &amp; Intended Outcome
                  </label>
                  <textarea
                    id="inquiry-challenge"
                    rows={4}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="Describe the problem you are solving, existing systems, or the architecture you want to build..."
                    className="mt-2.5 w-full rounded-sm border border-[rgba(192,192,192,0.18)] bg-[#101010] px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#666666] focus:border-[#FF1724] focus:outline-none"
                  />
                </div>

                <div className="rounded-sm border border-[rgba(192,192,192,0.16)] bg-[#0E0E0E] p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A1A1A1]">
                      Structured Brief Preview
                    </span>
                    <span className="text-[11px] text-[#FF1724]">Ready to Share</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-[#C5C5C5]">
                    {formattedBrief}
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[rgba(192,192,192,0.16)] pt-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="crimson-gloss-surface specular-sweep relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-sm border border-[#FF5861]/40 px-5 py-3.5 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#F5F5F5] transition-all hover:border-[#F5F5F5]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Brief Copied to Clipboard
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Engineering Brief
                    </>
                  )}
                </button>

                {mailtoHref && (
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-[rgba(192,192,192,0.24)] bg-[#121212] px-5 py-3.5 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-[#F5F5F5]/50"
                  >
                    <Mail className="h-4 w-4" />
                    Open Email Client
                  </a>
                )}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#7A7A7A]">
                Copy your structured technical brief above to share directly with
                the SoftwDocs engineering team during initial discovery.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
