import { Mail, MapPin, Phone } from 'lucide-react';
import {
  BRAND,
  CORE_SERVICES,
  EXTERNAL_WORK_SERVICES,
  type ServiceDetail,
} from '../data/softwdocsData';
import type { HubRoutePath } from './CollectionSeoPage';

interface FooterProps {
  onSelectService?: (service: ServiceDetail) => void;
  onNavigateSection?: (sectionId?: string) => void;
  onOpenSeoPage?: (path: HubRoutePath) => void;
}

export function Footer({ onSelectService, onNavigateSection, onOpenSeoPage }: FooterProps) {
  const goSection = (id?: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }
    if (!id || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 md:pt-36 pb-12 md:pb-16 relative overflow-hidden border-t border-white/10">
      <div className="absolute -bottom-24 -right-24 opacity-[0.04] pointer-events-none select-none">
        <img
          src={BRAND.logoWhite}
          alt=""
          aria-hidden="true"
          className="h-[34vw] max-h-[480px] w-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-14 mb-12 md:mb-24">
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                goSection();
              }}
              className="flex items-center gap-4 mb-8 md:mb-10 group w-fit"
            >
              <img
                src={BRAND.logo}
                alt={BRAND.name}
                loading="lazy"
                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Softw<span className="text-red-600">Docs</span>
              </span>
            </a>

            <p className="text-lg md:text-2xl font-serif text-white/55 max-w-lg mb-6 leading-snug italic">
              &quot;Our official core business is delivering Full-Stack, Agentic AI, Cloud &amp;
              Robotics tech services worldwide.&quot;
            </p>
            <p className="text-xs text-white/40 max-w-md mb-10 leading-relaxed">
              Side Division: Industrial UV Printing, 2D/3D &amp; SMD Signage, Wraps, Promotional Merch
              &amp; CNC Laser Cutting.
            </p>

            <div className="flex flex-wrap gap-5 md:gap-7">
              {[
                ['Official Tech', '/services'],
                ['Worldwide Hub', '/global-tech-services'],
                ['Side UV/Print', '/external-work'],
                ['SEO Directory', '/seo-hub'],
              ].map(([label, path]) => (
                <button
                  key={path}
                  type="button"
                  onClick={() => onOpenSeoPage && onOpenSeoPage(path as HubRoutePath)}
                  className="group relative text-white/55 hover:text-white transition-all duration-300 text-[10px] font-bold uppercase tracking-[0.25em] py-2"
                >
                  <span className="relative z-10">{label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 md:mb-8 flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-red-600" />
              Official Tech
            </h4>
            <div className="flex flex-col gap-3">
              {CORE_SERVICES.slice(0, 6).map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => onSelectService && onSelectService(svc)}
                  className="text-left text-sm font-medium text-white/55 hover:text-red-500 transition-colors"
                >
                  {svc.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 md:mb-8 flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-red-600" />
              Side Division
            </h4>
            <div className="flex flex-col gap-3">
              {EXTERNAL_WORK_SERVICES.slice(0, 6).map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => onSelectService && onSelectService(svc)}
                  className="text-left text-sm font-medium text-white/55 hover:text-red-500 transition-colors"
                >
                  {svc.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 md:mb-8 flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-red-600" />
              Worldwide Desk
            </h4>
            <div className="space-y-5">
              <button
                type="button"
                onClick={() => onOpenSeoPage && onOpenSeoPage('/global-tech-services')}
                className="flex items-start gap-4 text-left text-white/60 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <MapPin size={18} className="text-red-600" />
                </div>
                <span className="text-sm font-light leading-relaxed group-hover:text-white transition-colors">
                  Worldwide Tech Delivery — North America · EU/UK · GCC · APAC
                </span>
              </button>

              <a
                href="tel:+18447773273"
                className="flex items-center gap-4 text-white/60 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <Phone size={18} className="text-red-600" />
                </div>
                <span className="text-sm font-light group-hover:text-white transition-colors">
                  {BRAND.phone}
                </span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 text-white/60 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <Mail size={18} className="text-red-600" />
                </div>
                <span className="text-sm font-light group-hover:text-white transition-colors">
                  {BRAND.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-white/35 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-center md:text-left">
              Global Tech Systems Operational • © 2026 {BRAND.name}.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/35">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              Sitemap XML
            </a>
            <button
              type="button"
              onClick={() => onOpenSeoPage && onOpenSeoPage('/seo-hub')}
              className="hover:text-red-600 transition-colors"
            >
              SEO Directory
            </button>
            <button
              type="button"
              onClick={() => goSection('aoda')}
              className="hover:text-red-600 transition-colors"
            >
              AODA Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
