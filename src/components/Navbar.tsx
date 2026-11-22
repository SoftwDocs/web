import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import {
  BRAND,
  CORE_SERVICES,
  EXTERNAL_WORK_SERVICES,
  NAV_ITEMS,
  type ServiceDetail,
} from '../data/softwdocsData';
import type { HubRoutePath } from './CollectionSeoPage';

interface NavbarProps {
  onSelectService: (service: ServiceDetail) => void;
  onNavigateSection: (sectionId?: string) => void;
  onOpenSeoPage: (path: HubRoutePath) => void;
  isDetailView?: boolean;
}

export function Navbar({
  onSelectService,
  onNavigateSection,
  onOpenSeoPage,
  isDetailView,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>('Home');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30 || Boolean(isDetailView));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDetailView]);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (item: (typeof NAV_ITEMS)[number]) => {
    setActiveNav(item.name);
    setMobileOpen(false);
    setOpenDropdown(null);

    if (item.route === '/seo-hub' || item.route === '/global-tech-services') {
      onOpenSeoPage(item.route as HubRoutePath);
      return;
    }

    const id = item.target.replace('#', '');
    onNavigateSection(id === 'hero' ? undefined : id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ${
          scrolled ? 'pt-3 sm:pt-5' : 'pt-0'
        }`}
      >
        <div
          className={`transition-all duration-500 flex items-center justify-between pointer-events-auto ${
            scrolled
              ? 'w-[95%] max-w-7xl px-5 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#d40a00] via-[#ff0d00] to-[#d40a00] border border-white/15 shadow-[0_20px_50px_rgba(255,13,0,0.28)] backdrop-blur-md rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-lg rounded-bl-lg'
              : 'container-wide w-full py-4 sm:py-8 bg-transparent'
          }`}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveNav('Home');
              onNavigateSection(undefined);
            }}
            className="flex items-center gap-3 group relative z-50 shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <img
                src={scrolled ? BRAND.logoWhite : BRAND.logo}
                alt={BRAND.name}
                className={`h-7 sm:h-8 w-auto object-contain transition-all duration-300 ${
                  scrolled
                    ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]'
                    : 'drop-shadow-[0_2px_10px_rgba(255,13,0,0.2)]'
                }`}
              />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white">
                Softw
                <span className={scrolled ? 'text-white/85 font-light' : 'text-red-500'}>
                  Docs
                </span>
              </span>
            </motion.div>
          </a>

          <div
            className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2"
            ref={navRef}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.name;
              const hasMenu = Boolean(item.hasDropdown || item.hasExternalDropdown);
              const menuServices = item.hasExternalDropdown
                ? EXTERNAL_WORK_SERVICES
                : CORE_SERVICES;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredItem(item.name);
                    if (hasMenu) setOpenDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    if (hasMenu) setOpenDropdown(null);
                  }}
                >
                  <a
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`relative flex items-center gap-1.5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap shrink-0 transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? 'text-white opacity-100'
                          : 'text-red-400'
                        : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {hasMenu && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </a>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    initial={{ width: 0 }}
                    animate={{
                      width: isActive || hoveredItem === item.name ? '100%' : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {hasMenu && (
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px] z-50"
                        >
                          <div className="bg-zinc-950 rounded-2xl shadow-2xl border border-white/15 overflow-hidden">
                            <div className="bg-red-600 px-5 py-3.5 flex items-center justify-between gap-4">
                              <div>
                                <span className="text-white/85 text-[8px] font-bold uppercase tracking-widest block">
                                  {item.hasExternalDropdown
                                    ? 'Side Division · Auxiliary Studio'
                                    : 'Official Core Business · Worldwide'}
                                </span>
                                <p className="text-white text-sm font-serif font-bold mt-0.5">
                                  {item.hasExternalDropdown
                                    ? 'UV Printing, Signage & Fabrication'
                                    : 'Global Tech, Agentic AI, Cloud & Robotics'}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  onOpenSeoPage(
                                    item.hasExternalDropdown ? '/external-work' : '/services'
                                  );
                                }}
                                className="text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-black/30 hover:bg-black/60 px-3 py-1.5 rounded-full shrink-0 transition-colors"
                              >
                                View All ({menuServices.length})
                              </button>
                            </div>

                            <div className="p-2.5 grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto custom-scrollbar">
                              {menuServices.map((sub, idx) => (
                                <motion.div
                                  key={sub.id}
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.025 * idx }}
                                >
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setOpenDropdown(null);
                                      setActiveNav(item.name);
                                      onSelectService(sub);
                                    }}
                                    className="w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 group"
                                  >
                                    <div className="min-w-0 pr-2">
                                      <span className="text-white text-[11px] font-semibold block group-hover:text-red-500 transition-colors truncate">
                                        {sub.title}
                                      </span>
                                      <span className="text-zinc-500 text-[9px] uppercase tracking-wider truncate block">
                                        {sub.shortTag}
                                      </span>
                                    </div>
                                    <ArrowUpRight
                                      size={14}
                                      className="text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                                    />
                                  </button>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <div className="hidden sm:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  onNavigateSection('contact');
                }}
                className="group relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 active:scale-95 px-6 py-3 text-[10px] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-sm rounded-bl-sm bg-white text-zinc-950 hover:text-white shadow-[0_10px_30px_rgba(255,255,255,0.08)] whitespace-nowrap shrink-0"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-zinc-950" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className={`lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-white/20 hover:bg-white/30' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-zinc-950 border-l border-white/10 z-[60] lg:hidden flex flex-col text-white"
            >
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    onNavigateSection(undefined);
                  }}
                  className="flex items-center gap-2.5"
                >
                  <img src={BRAND.logo} alt={BRAND.name} className="h-7 w-auto object-contain" />
                  <span className="font-serif text-lg font-bold">
                    Softw<span className="text-red-500">Docs</span>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close mobile menu"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
                <div className="flex flex-col gap-1.5">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = activeNav === item.name;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.3 }}
                      >
                        <a
                          href={item.route}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item);
                          }}
                          className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 group ${
                            isActive
                              ? 'bg-red-600/15 text-red-500 border border-red-600/30'
                              : 'hover:bg-white/5 text-white'
                          }`}
                        >
                          <span className="text-[15px] font-semibold">{item.name}</span>
                          <ArrowRight
                            size={16}
                            className={`transition-transform duration-300 ${
                              isActive
                                ? 'translate-x-1 text-red-500'
                                : 'text-zinc-500 group-hover:translate-x-1 group-hover:text-red-500'
                            }`}
                          />
                        </a>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-7 pt-5 border-t border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-3 px-2">
                    Official Core · Global Tech Services
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    {CORE_SERVICES.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => {
                          setMobileOpen(false);
                          onSelectService(sub);
                        }}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-left"
                      >
                        <span className="text-xs font-semibold text-white/85">{sub.title}</span>
                        <ArrowUpRight size={14} className="text-red-500" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-3 px-2">
                    Side Division · UV Print &amp; Signage
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    {EXTERNAL_WORK_SERVICES.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => {
                          setMobileOpen(false);
                          onSelectService(sub);
                        }}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-left"
                      >
                        <span className="text-xs font-semibold text-white/75">{sub.title}</span>
                        <ArrowUpRight size={14} className="text-red-500" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 border-t border-white/10 bg-black">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    onNavigateSection('contact');
                  }}
                  className="w-full py-4 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md bg-red-600 text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3"
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
