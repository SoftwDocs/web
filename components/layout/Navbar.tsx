"use client";

import React, {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useInquiry } from "@/components/animations/MotionProvider";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { EXPERTISE_ITEMS } from "@/data/services";
import { SELECTED_PROJECTS } from "@/data/projects";

const SCROLL_THRESHOLD = 20;

/** Maps every route family to its real, crawlable navigation page. */
const ROUTE_SECTIONS: Array<{ pattern: RegExp; href: string }> = [
  { pattern: /^\/about\/our-team\/?$/, href: "/about/our-team/" },
  { pattern: /^\/about(?:\/|$)/, href: "/about/" },
  { pattern: /^\/services(?:\/|$)/, href: "/services/" },
  { pattern: /^\/industries(?:\/|$)/, href: "/industries/" },
  { pattern: /^\/locations(?:\/|$)/, href: "/locations/" },
  { pattern: /^\/work(?:\/|$)/, href: "/work/" },
  { pattern: /^\/insights(?:\/|$)/, href: "/insights/" },
  { pattern: /^\/contact(?:\/|$)/, href: "/contact/" },
];

const EXPERTISE_SERVICE_PATHS: Record<string, string> = {
  "software-engineering": "/services/software-development/",
  "agentic-ai": "/services/agentic-ai-development/",
  "cloud-devops": "/services/cloud-engineering/",
  "custom-digital-solutions": "/services/custom-software-development/",
  "robotics-hardware": "/services/robotics-software-development/",
  "digital-experience": "/services/frontend-development/",
};

function sectionForPath(pathname: string): string {
  return ROUTE_SECTIONS.find(({ pattern }) => pattern.test(pathname))?.href ?? "/";
}

/** Layout effect on the client, passive effect on the server — avoids SSR warnings. */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Isolated so `usePathname` never blocks prerendering of the layout on
 * dynamically generated routes when Cache Components is enabled.
 */
function RouteScrollSync({
  onRouteChange,
}: {
  onRouteChange: (pathname: string) => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    onRouteChange(pathname);
  }, [pathname, onRouteChange]);

  return null;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [routePath, setRoutePath] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaPosition, setMegaPosition] = useState({
    top: 0,
    left: 0,
    width: 860,
  });

  const progressRef = useRef<HTMLDivElement>(null);
  const megaGroupRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLButtonElement>(null);
  const megaFirstLinkRef = useRef<HTMLAnchorElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const { openInquiry } = useInquiry();

  const handleRouteChange = useCallback((pathname: string) => {
    setRoutePath(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }, []);

  /* Single passive, rAF-throttled scroll evaluation; reruns on route change. */
  useIsomorphicLayoutEffect(() => {
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      const y = window.scrollY;
      const nextScrolled = y > SCROLL_THRESHOLD;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        const progress =
          maxScroll > 0 ? Math.min(1, Math.max(0, y / maxScroll)) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("hashchange", schedule);
    window.addEventListener("pageshow", schedule);

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("pageshow", schedule);
    };
  }, [routePath]);

  const activeHref = routePath ? sectionForPath(routePath) : "/";

  const clearMenuTimers = useCallback(() => {
    if (openTimer.current !== null) window.clearTimeout(openTimer.current);
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }, []);

  const openMega = useCallback(() => {
    clearMenuTimers();
    openTimer.current = window.setTimeout(() => setMegaOpen(true), 120);
  }, [clearMenuTimers]);

  const closeMega = useCallback(() => {
    clearMenuTimers();
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 260);
  }, [clearMenuTimers]);

  /** Portal positioning keeps the panel below the fixed header instead of inside it. */
  const updateMegaPosition = useCallback(() => {
    if (window.innerWidth < 1024) {
      setMegaOpen(false);
      return;
    }
    const group = megaGroupRef.current;
    if (!group) return;
    const rect = group.getBoundingClientRect();
    const header = group.closest("header");
    const anchorBottom = header
      ? header.getBoundingClientRect().bottom
      : rect.bottom;
    const width = Math.min(860, window.innerWidth * 0.88);
    const edge = window.innerWidth * 0.06;
    const idealLeft = rect.left + rect.width / 2 - width / 2;
    const left = Math.max(edge, Math.min(idealLeft, window.innerWidth - width - edge));
    setMegaPosition({
      top: Math.round(anchorBottom + 8),
      left: Math.round(left),
      width: Math.round(width),
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!megaOpen) return;
    updateMegaPosition();
    window.addEventListener("resize", updateMegaPosition);
    return () => window.removeEventListener("resize", updateMegaPosition);
  }, [megaOpen, updateMegaPosition]);

  useEffect(() => () => clearMenuTimers(), [clearMenuTimers]);

  useEffect(() => {
    if (!megaOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !megaGroupRef.current?.contains(target) &&
        !megaPanelRef.current?.contains(target)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [megaOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  return (
    <>
      <Suspense fallback={null}>
        <RouteScrollSync onRouteChange={handleRouteChange} />
      </Suspense>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center">
        <a
          href="#main-content"
          className="sr-only pointer-events-auto focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[#FF1724] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#F5F5F5]"
        >
          Skip to main content
        </a>

        <div
          data-scrolled={isScrolled ? "true" : "false"}
          className="navbar-cinematic pointer-events-auto relative flex w-full items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10"
        >
          <div
            aria-hidden="true"
            className="navbar-ambient pointer-events-none absolute inset-0"
          />

          {/* Logo */}
          <Link
            href="/"
            aria-label="SoftwDocs Home"
            className="relative z-10 flex h-11 w-20 shrink-0 items-center justify-start overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:h-12 sm:w-24"
          >
            <Image
              src={BRAND.logoPath}
              alt="SoftwDocs"
              width={118}
              height={118}
              priority
              className="h-[118px] w-[118px] max-w-none shrink-0 -translate-x-3 object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)] sm:-translate-x-2"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="relative z-10 hidden items-center gap-0 lg:flex"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeHref === item.href;
              const hasMega = item.href === "/services/";

              return (
                <div
                  key={item.href}
                  ref={hasMega ? megaGroupRef : undefined}
                  className="relative"
                  onPointerEnter={hasMega ? openMega : undefined}
                  onPointerLeave={hasMega ? closeMega : undefined}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative inline-flex items-center gap-2 rounded-sm px-3 py-2 text-[13px] font-medium tracking-[0.03em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] xl:px-3.5 xl:text-[14px] ${
                      hasMega ? "pr-7" : ""
                    } ${isActive ? "text-white" : "text-[#A1A1A1] hover:text-white"}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-white/10 bg-gradient-to-b from-[#1C1C1C] to-[#0F0F0F]"
                      />
                    )}
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FF1724] xl:left-3.5 xl:right-3.5"
                      />
                    )}
                  </Link>

                  {hasMega && (
                    <>
                      <button
                        ref={megaTriggerRef}
                        type="button"
                        aria-expanded={megaOpen}
                        aria-controls="expertise-mega-menu"
                        aria-label={`${megaOpen ? "Close" : "Open"} expertise menu`}
                        onClick={() => {
                          clearMenuTimers();
                          setMegaOpen((prev) => !prev);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "ArrowDown") {
                            event.preventDefault();
                            setMegaOpen(true);
                            window.requestAnimationFrame(() =>
                              megaFirstLinkRef.current?.focus()
                            );
                          }
                          if (event.key === "Escape") setMegaOpen(false);
                        }}
                        className="absolute right-0.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm text-[#A1A1A1] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            megaOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: CTA and mobile trigger */}
          <div className="relative z-10 flex items-center gap-3">
            <Button
              variant="primary"
              showArrow
              onClick={() => openInquiry()}
              className="hidden font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.14em] sm:inline-flex lg:px-4 lg:py-2.5 lg:text-[11px] xl:px-6 xl:py-3.5 xl:text-sm"
            >
              Let&apos;s Build Something
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-[rgba(245,245,245,0.22)] bg-[#0C0C0C] text-[#F5F5F5] transition-colors hover:border-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Scroll progress — transform-only, no layout or re-render cost */}
          <div
            aria-hidden="true"
            className="navbar-progress-track pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[rgba(192,192,192,0.06)]"
          >
            <div
              ref={progressRef}
              className="crimson-lacquer-bar h-full w-full origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </header>

      {/* Services mega menu portal — rendered outside the header stacking context. */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {megaOpen && (
              <motion.div
                ref={megaPanelRef}
                id="expertise-mega-menu"
                role="group"
                aria-label="Engineering services menu"
                style={{
                  position: "fixed",
                  top: megaPosition.top,
                  left: megaPosition.left,
                  width: megaPosition.width,
                  zIndex: 60,
                  pointerEvents: "auto",
                }}
                initial={{ opacity: 0, y: 10, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.99 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                onPointerEnter={clearMenuTimers}
                onPointerLeave={closeMega}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setMegaOpen(false);
                    megaTriggerRef.current?.focus();
                  }
                }}
                className="obsidian-panel pointer-events-auto fixed z-[60] rounded-sm p-6 sm:p-8"
              >
                <div className="grid gap-7 sm:grid-cols-2 sm:gap-9">
                  <div>
                    <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">
                      Engineering Disciplines
                    </p>
                    <div className="mt-4 flex flex-col">
                      {EXPERTISE_ITEMS.map((item, index) => (
                        <Link
                          key={item.id}
                          ref={index === 0 ? megaFirstLinkRef : undefined}
                          href={
                            EXPERTISE_SERVICE_PATHS[item.id] ?? "/services/"
                          }
                          onClick={() => setMegaOpen(false)}
                          className="group flex items-center gap-3 rounded-sm px-3 py-2.5 text-[13px] text-[#C5C5C5] transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                        >
                          <span className="text-[11px] font-semibold text-[#FF1724]">
                            {item.number}
                          </span>
                          <span>{item.title}</span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="ml-auto h-3.5 w-3.5 shrink-0 text-[#FF1724] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                    <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">
                      Selected Work
                    </p>
                    <div className="mt-4 flex flex-col">
                      {SELECTED_PROJECTS.map((project) => (
                        <Link
                          key={project.id}
                          href={`/work/${project.id}/`}
                          onClick={() => setMegaOpen(false)}
                          className="flex flex-col gap-0.5 rounded-sm px-3 py-2.5 transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                        >
                          <span className="font-[family-name:var(--font-space-grotesk)] text-[13px] font-semibold tracking-[0.08em] text-[#F5F5F5]">
                            {project.name}
                          </span>
                          <span className="text-[11px] text-[#7A7A7A]">
                            {project.industry}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Button
                      variant="primary"
                      showArrow
                      onClick={() => {
                        setMegaOpen(false);
                        openInquiry();
                      }}
                      className="mt-5 w-full justify-center"
                    >
                      Discuss a Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Mobile navigation drawer */}
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
              ref={drawerRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 right-0 top-0 z-10 flex w-full max-w-sm flex-col justify-between border-l border-[rgba(197,197,197,0.15)] bg-[#050505] p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm border border-[rgba(245,245,245,0.22)] bg-[#0C0C0C] text-[#F5F5F5] hover:border-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-1">
                  {NAV_LINKS.map((item, index) => {
                    const isActive = activeHref === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          aria-current={isActive ? "location" : undefined}
                          className={`flex items-center justify-between border-b border-white/[0.08] py-3.5 font-[family-name:var(--font-space-grotesk)] text-lg font-medium transition-colors hover:text-[#FF1724] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724] ${
                            isActive ? "text-white" : "text-[#C5C5C5]"
                          }`}
                        >
                          <span className="inline-flex items-center gap-3">
                            {isActive && (
                              <span
                                aria-hidden="true"
                                className="crimson-beacon h-2 w-2 rounded-full"
                              />
                            )}
                            {item.label}
                          </span>
                          <span className="text-xs font-semibold tracking-[0.2em] text-[#7A7A7A]">
                            0{index + 1}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="border-t border-white/10 pt-6">
                <Button
                  variant="primary"
                  showArrow
                  onClick={() => {
                    setMobileOpen(false);
                    openInquiry();
                  }}
                  className="w-full justify-center"
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
