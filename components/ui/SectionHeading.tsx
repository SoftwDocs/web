import React from "react";
import { TextReveal, type TextLine } from "@/components/animations/TextReveal";

interface SectionHeadingProps {
  eyebrow: string;
  lines: TextLine[];
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  lines,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col ${alignClasses} ${className}`}>
      <div className="mb-5 inline-flex items-center gap-3">
        <span
          className="h-2 w-2 bg-[#FF1724] shadow-[0_0_12px_rgba(255,23,36,0.75)]"
          aria-hidden="true"
        />
        <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.24em] text-[#C5C5C5]">
          {eyebrow}
        </span>
      </div>

      <TextReveal
        as="h2"
        lines={lines}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold leading-[1.03] tracking-[-0.03em] sm:text-4xl lg:text-5xl xl:text-[3.5rem]"
      />

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1A1] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
