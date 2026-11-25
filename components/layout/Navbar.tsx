"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useInquiry } from "@/components/animations/MotionProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHref, setActiveHref] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openInquiry } = useInquiry();

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, y / maxScroll) : 0);

      const probeY = y + window.innerHeight * 0.28;
      let current = "#home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probeY) {
          current = `#${id}`;
        }
      }
      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-3 sm:pt-4" : "pt-0"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only pointer-events-auto focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[#FF1724] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#F5F5F5]"
        >
          Skip to main content
        </a>

        {/* Dynamic Floating Sculpted Obsidian & Chrome Monolith Bar */}
        <div
          className={`pointer-events-auto relative flex items-center justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "w-[94%] max-w-[1320px] rounded-tl-[1.75rem] rounded-br-[1.75rem] rounded-tr-sm rounded-bl-sm border border-[rgba(245,245,245,0.22)] bg-[#0A0A0A]/92 px-5 py-2.5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_22px_55px_-14px_rgba(0,0,0,0.95),0_0_28px_-12px_rgba(255,23,36,0.32)] sm:px-7"
              : "w-full max-w-[1440px] border-b border-[rgba(192,192,192,0.14)] bg-gradient-to-b from-[#080808]/90 via-[#080808]/55 to-transparent px-5 py-3.5 sm:px-8 lg:px-12"
          }`}
        >
          {/* Left: Crisp Scaled SD Logo Only */}
          <a
            href="#home"
            aria-label="SoftwDocs Home"
            className="group relative flex h-11 w-20 shrink-0 items-center justify-start overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808] sm:h-12 sm:w-24"
          >
            <Image
              src={BRAND.logoPath}
              alt="SoftwDocs"
              width={118}
              height={118}
              priority
              className="h-[118px] w-[118px] max-w-none shrink-0 -translate-x-3 object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105 sm:-translate-x-2"
            />
          </a>

          {/* Center: Precision Navigation with Sliding Active Crimson-Chrome Pill */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium tracking-[0.03em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] ${
                    isActive
                      ? "text-[#FFFFFF]"
                      : "text-[#A1A1A1] hover:text-[#F5F5F5]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 -z-10 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-[rgba(255,255,255,0.16)] bg-gradient-to-b from-[#1E1E1E] to-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                    />
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="crimson-beacon h-1.5 w-1.5 rounded-full"
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Chamfered Automotive Crimson CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openInquiry()}
              className="crimson-gloss-surface specular-sweep group relative hidden items-center gap-2 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-[#FF7A82]/45 px-5 py-2.5 font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] transition-all duration-300 hover:border-[#FFFFFF]/70 hover:shadow-[0_14px_34px_-8px_rgba(255,23,36,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] sm:inline-flex"
            >
              <span className="relative z-10">Let&apos;s Build Something</span>
              <ArrowUpRight
                className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="specular-sweep inline-flex h-10 w-10 items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-[rgba(245,245,245,0.22)] bg-[#111111] text-[#F5F5F5] transition-colors hover:border-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Integrated Bottom Scroll Progress Lacquer Conduit */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[rgba(192,192,192,0.1)]"
          >
            <div
              className="crimson-lacquer-bar h-full origin-left"
              style={{ transform: `scaleX(${scrollProgress})` }}
            />
          </div>
        </div>
      </motion.header>

      {/* Slide-Over Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-10 flex w-full max-w-sm flex-col justify-between border-l border-[rgba(245,245,245,0.18)] bg-[#080808] p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[rgba(192,192,192,0.16)] pb-4">
                  <div className="relative flex h-11 w-20 items-center justify-start overflow-hidden">
                    <Image
                      src={BRAND.logoPath}
                      alt="SoftwDocs"
                      width={104}
                      height={104}
                      className="h-[104px] w-[104px] max-w-none shrink-0 -translate-x-2 object-contain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close mobile menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-[rgba(192,192,192,0.22)] bg-[#121212] text-[#F5F5F5] hover:border-[#FF1724]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <nav
                  aria-label="Mobile navigation"
                  className="mt-6 flex flex-col gap-1"
                >
                  {NAV_LINKS.map((item, idx) => {
                    const isActive = activeHref === item.href;
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.25 }}
                        className={`flex items-center justify-between border-b border-[rgba(192,192,192,0.1)] py-3.5 font-[family-name:var(--font-space-grotesk)] text-lg font-medium transition-colors hover:text-[#FF1724] ${
                          isActive ? "text-[#FFFFFF]" : "text-[#C5C5C5]"
                        }`}
                      >
                        <span className="inline-flex items-center gap-3">
                          {isActive && (
                            <span className="crimson-beacon h-2 w-2 rounded-full" />
                          )}
                          {item.label}
                        </span>
                        <span className="text-xs font-semibold tracking-[0.2em] text-[#7A7A7A]">
                          0{idx + 1}
                        </span>
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              <div className="border-t border-[rgba(192,192,192,0.14)] pt-6">
                <Button
                  variant="primary"
                  onClick={() => {
                    setMobileOpen(false);
                    openInquiry();
                  }}
                  className="w-full justify-center"
                  showArrow
                >
                  Let&apos;s Build Something
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
