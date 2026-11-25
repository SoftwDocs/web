"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInquiry } from "./MotionProvider";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "clip" | "rise" | "scale";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  variant = "clip",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (variant === "clip") {
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 14% 0%)", y: 26, opacity: 0.2 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            clearProps: "clipPath,transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      } else if (variant === "scale") {
        gsap.fromTo(
          el,
          { scale: 0.96, opacity: 0.15 },
          {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [delay, duration, variant, prefersReducedMotion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
