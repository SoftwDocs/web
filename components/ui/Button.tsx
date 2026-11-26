"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "cta-button group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-[family-name:var(--font-space-grotesk)] font-semibold tracking-[0.06em] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]";

  const variantStyles = {
    primary: `cta-button--primary crimson-gloss-surface specular-sweep rounded-sm px-6 py-3.5 text-sm text-white border border-[#FF7A82]/45 hover:border-white/70 hover:shadow-[0_18px_40px_-16px_rgba(255,23,36,0.55)]`,
    secondary: `cta-button--secondary specular-sweep rounded-sm px-6 py-3.5 text-sm text-[#F5F5F5] bg-[#0C0C0C]/70 border border-[rgba(197,197,197,0.28)] hover:border-white/50 hover:text-white`,
    ghost: "px-1 py-1 text-sm text-[#C5C5C5] hover:text-white",
  }[variant];

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="cta-button-arrow relative z-10 h-4 w-4"
        />
      )}
    </>
  );

  const classes = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} aria-label={ariaLabel} className={classes}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {content}
    </button>
  );
}
