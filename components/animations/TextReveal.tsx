"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInquiry } from "./MotionProvider";

export interface TextLine {
  text: string;
  variant?: "default" | "chrome" | "crimson";
}

interface TextRevealProps {
  lines: TextLine[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  triggerOnMount?: boolean;
  stagger?: number;
  delay?: number;
}

export function TextReveal({
  lines,
  as: Tag = "h2",
  className = "",
  triggerOnMount = false,
  stagger = 0.085,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal-line]");
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      const animVars: gsap.TweenVars = {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger,
        delay,
        ease: "power4.out",
        clearProps: "transform,opacity",
      };

      if (!triggerOnMount) {
        animVars.scrollTrigger = {
          trigger: el,
          start: "top 88%",
          once: true,
        };
      }

      gsap.fromTo(
        targets,
        { yPercent: 105, opacity: 0 },
        animVars
      );
    }, el);

    return () => ctx.revert();
  }, [delay, prefersReducedMotion, stagger, triggerOnMount]);

  return (
    <Tag ref={containerRef} className={className}>
      {lines.map((line, index) => {
        const variantClass =
          line.variant === "crimson"
            ? "crimson-gloss-text"
            : line.variant === "chrome"
            ? "chrome-text"
            : "text-[#F5F5F5]";

        return (
          <span key={index} className="block overflow-hidden pb-[0.06em]">
            <span
              data-reveal-line
              className={`block will-change-transform ${variantClass}`}
            >
              {line.text}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
