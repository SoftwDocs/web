"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInquiry } from "@/components/animations/MotionProvider";

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
  const ref = useRef<HTMLElement>(null);
  const { prefersReducedMotion } = useInquiry();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.14;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    ref.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-[family-name:var(--font-space-grotesk)] font-semibold tracking-[0.06em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] cursor-pointer select-none";

  const variantStyles = {
    primary:
      "crimson-gloss-surface specular-sweep rounded-sm px-6 py-3.5 text-sm text-[#FFFFFF] border border-[#FF7A82]/45 hover:border-[#FFFFFF]/65 hover:shadow-[0_22px_50px_-10px_rgba(255,23,36,0.72)]",
    secondary:
      "specular-sweep rounded-sm px-6 py-3.5 text-sm text-[#F5F5F5] bg-gradient-to-b from-[#1E1E1E] via-[#111111] to-[#0A0A0A] border border-[rgba(245,245,245,0.28)] hover:border-[#FFFFFF]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,0,0,0.85),0_12px_30px_-12px_rgba(0,0,0,0.9)]",
    ghost:
      "px-1 py-1 text-sm text-[#C5C5C5] hover:text-[#F5F5F5]",
  }[variant];

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
}
