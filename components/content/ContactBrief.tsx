"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useInquiry } from "@/components/animations/MotionProvider";

/** Opens the existing verified inquiry brief without inventing a backend form. */
export function ContactBrief() {
  const { openInquiry } = useInquiry();

  return (
    <section className="border border-white/10 bg-[#0C0C0C] p-6 sm:p-8">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
        Open the structured project brief
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[#A1A1A1]">
        The brief captures the discipline, organization and problem statement. It can be copied for your existing channel, or sent by email when a verified address is configured.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button variant="primary" showArrow onClick={() => openInquiry()}>
          Open brief
        </Button>
        <Link
          href="/services/"
          className="inline-flex items-center gap-2 text-sm text-[#C5C5C5] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
        >
          Review services
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
