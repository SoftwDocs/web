import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { ALL_SERVICES, BRAND, type ServiceDetail } from '../data/softwdocsData';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onBackHome: (sectionId?: string) => void;
  onSelectService: (service: ServiceDetail) => void;
  onRequestQuote: (message: string) => void;
}

export function ServiceDetailPage({
  service,
  onBackHome,
  onSelectService,
  onRequestQuote,
}: ServiceDetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamically update document SEO tags & Service JSON-LD for this single page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const prevTitle = document.title;
    document.title = service.seoTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) metaDesc.setAttribute('content', service.seoDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    if (ogTitle) ogTitle.setAttribute('content', service.seoTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    if (ogDesc) ogDesc.setAttribute('content', service.seoDescription);

    const scriptId = 'softwdocs-service-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: service.title,
          description: service.seoDescription,
          serviceType: service.shortTag,
          category:
            service.division === 'external'
              ? 'Side Division · Print & Fabrication'
              : 'Official Core Business · Worldwide Tech Services',
          provider: {
            '@type': 'Organization',
            name: BRAND.name,
            email: BRAND.email,
            telephone: BRAND.phone,
          },
          areaServed: service.division === 'core' ? 'Worldwide' : 'Regional & Custom Shipping',
          url: window.location.href,
        },
        ...(service.faqs.length > 0
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: service.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.answer,
                  },
                })),
              },
            ]
          : []),
      ],
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      scriptEl?.remove();
    };
  }, [service]);

  const currentIndex = ALL_SERVICES.findIndex((s) => s.id === service.id);
  const prevService = ALL_SERVICES[(currentIndex - 1 + ALL_SERVICES.length) % ALL_SERVICES.length];
  const nextService = ALL_SERVICES[(currentIndex + 1) % ALL_SERVICES.length];

  const relatedServices = ALL_SERVICES.filter(
    (s) => s.id !== service.id && s.division === service.division
  ).slice(0, 3);

  return (
    <motion.article
      key={service.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb & Back */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-6 border-b border-white/10">
          <button
            type="button"
            onClick={() =>
              onBackHome(service.division === 'external' ? 'external-work' : 'services')
            }
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/70 hover:text-red-500 transition-colors"
          >
            <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <ArrowLeft size={14} />
            </span>
            Back to {service.division === 'external' ? 'Side Work (UV/Print)' : 'Official Tech Services'}
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            <button
              type="button"
              onClick={() => onBackHome()}
              className="hover:text-white transition-colors"
            >
              SoftwDocs
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() =>
                onBackHome(service.division === 'external' ? 'external-work' : 'services')
              }
              className="hover:text-white transition-colors"
            >
              {service.division === 'external' ? 'Side Division' : 'Official Worldwide Tech'}
            </button>
            <span>/</span>
            <span className="text-red-500">{service.title}</span>
          </nav>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-28">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-red-600" />
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.35em]">
                {service.division === 'external'
                  ? 'Side Division · External Work'
                  : 'Official Core Work · Worldwide Delivery'}{' '}
                · {service.number}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[0.95] tracking-tighter mb-6"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-lg sm:text-xl text-red-500/95 font-serif italic mb-6 leading-snug"
            >
              {service.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/65 text-base md:text-lg font-light leading-relaxed mb-8"
            >
              {service.fullOverview}
            </motion.p>

            <div className="flex flex-wrap gap-3 mb-10">
              {service.features.map((feat) => (
                <div
                  key={feat}
                  className="px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  {feat}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  onRequestQuote(
                    `Requesting a custom proposal for ${service.title} (${service.shortTag}).`
                  )
                }
                className="group relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.28em] flex items-center justify-center gap-3 active:scale-95 px-9 py-4 text-[11px] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md bg-red-600 text-white hover:text-black shadow-[0_15px_40px_rgba(255,13,0,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Request {service.title} Quote
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white" />
              </button>

              <button
                type="button"
                onClick={() => onBackHome('pricing')}
                className="px-7 py-4 rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-sm rounded-bl-sm border border-white/15 text-[10px] font-bold uppercase tracking-[0.28em] text-white/75 hover:border-white hover:text-white transition-colors"
              >
                View Packages
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] md:rounded-[2.75rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 bg-black/70 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full">
                  <ShieldCheck size={14} className="text-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    SoftwDocs Certified Execution
                  </span>
                </div>
                <span className="text-3xl font-serif font-bold text-white/25 select-none">
                  {service.number}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Deliverables + Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-7 bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Layers size={18} className="text-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                Scope &amp; Deliverables
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.deliverables.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-black/60 border border-white/10 hover:border-red-600/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-red-500 mb-3">
                    <CheckCircle2 size={16} />
                    <h2 className="text-sm font-serif font-bold text-white">{item.title}</h2>
                  </div>
                  <p className="text-white/55 text-xs sm:text-sm leading-relaxed font-light">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-red-600" />
                <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                  Technical Specifications
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {service.specs.map((spec) => (
                  <div key={spec.label} className="py-4 first:pt-0 last:pb-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-1.5">
                      {spec.label}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white tabular-nums">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-red-600/10 border border-red-600/30">
              <p className="text-xs text-white/75 leading-relaxed mb-4">
                Need custom dimensions, API integrations, or bundled software + fabrication pricing?
              </p>
              <button
                type="button"
                onClick={() =>
                  onRequestQuote(
                    `Custom technical inquiry for ${service.title}. Please connect me with an engineer.`
                  )
                }
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 hover:text-white flex items-center gap-2 transition-colors"
              >
                Speak With SoftwDocs Engineering <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        {service.faqs.length > 0 && (
          <div className="mb-16 md:mb-24 bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-8">
              Questions About <span className="text-red-600 italic font-normal">{service.title}</span>
            </h2>

            <div className="divide-y divide-white/10">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.question} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left"
                    >
                      <span className="text-base sm:text-lg font-serif font-semibold text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-red-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm sm:text-base text-white/60 leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Services in Same Division */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              More From{' '}
              <span className="text-red-600 italic font-normal">
                {service.division === 'external' ? 'External Work' : 'Core Services'}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onSelectService(rel)}
                className="group text-left rounded-2xl bg-zinc-950 border border-white/10 hover:border-red-600/50 overflow-hidden transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500">
                    {rel.shortTag} · {rel.number}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1 mb-2 group-hover:text-red-500 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Previous / Next Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10">
          <button
            type="button"
            onClick={() => onSelectService(prevService)}
            className="group p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-red-600/50 flex items-center gap-4 text-left transition-colors"
          >
            <ArrowLeft
              size={18}
              className="text-red-500 group-hover:-translate-x-1 transition-transform shrink-0"
            />
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 block">
                Previous Service
              </span>
              <span className="text-base font-serif font-bold text-white group-hover:text-red-500 transition-colors">
                {prevService.title}
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onSelectService(nextService)}
            className="group p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-red-600/50 flex items-center justify-end gap-4 text-right transition-colors"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 block">
                Next Service
              </span>
              <span className="text-base font-serif font-bold text-white group-hover:text-red-500 transition-colors">
                {nextService.title}
              </span>
            </div>
            <ArrowRight
              size={18}
              className="text-red-500 group-hover:translate-x-1 transition-transform shrink-0"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
