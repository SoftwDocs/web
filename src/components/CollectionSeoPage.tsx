import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Layers,
  Sparkles,
} from 'lucide-react';
import {
  BLOG_POSTS,
  BRAND,
  CORE_SERVICES,
  EXTERNAL_WORK_SERVICES,
  GLOBAL_REGIONS,
  SEO_HUB_PAGES,
  UPCOMING_PRODUCTS,
  type BlogPost,
  type ServiceDetail,
} from '../data/softwdocsData';

export type HubRoutePath = '/services' | '/external-work' | '/global-tech-services' | '/seo-hub';

interface CollectionSeoPageProps {
  routePath: HubRoutePath;
  onBackHome: (sectionId?: string) => void;
  onSelectService: (service: ServiceDetail) => void;
  onOpenSeoPage: (path: HubRoutePath) => void;
  onSelectBlogPost: (post: BlogPost) => void;
  onRequestQuote: (message: string) => void;
}

export function CollectionSeoPage({
  routePath,
  onBackHome,
  onSelectService,
  onOpenSeoPage,
  onSelectBlogPost,
  onRequestQuote,
}: CollectionSeoPageProps) {
  const meta =
    routePath === '/services'
      ? SEO_HUB_PAGES.services
      : routePath === '/external-work'
        ? SEO_HUB_PAGES.externalWork
        : routePath === '/global-tech-services'
          ? SEO_HUB_PAGES.globalTech
          : SEO_HUB_PAGES.seoHub;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const prevTitle = document.title;
    document.title = meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) metaDesc.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const scriptId = 'softwdocs-collection-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: meta.title,
      description: meta.description,
      url: window.location.origin + routePath,
      isPartOf: {
        '@type': 'WebSite',
        name: BRAND.name,
        url: window.location.origin,
      },
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      scriptEl?.remove();
    };
  }, [meta, routePath]);

  return (
    <motion.section
      key={routePath}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <button
            type="button"
            onClick={() => onBackHome()}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/75 hover:text-red-500 transition-colors"
          >
            <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
              <ArrowLeft size={14} />
            </span>
            Back to Home
          </button>

          <div className="flex flex-wrap gap-2">
            {(
              [
                ['/services', 'Official Tech'],
                ['/global-tech-services', 'Worldwide Delivery'],
                ['/external-work', 'Side Division (UV/Print)'],
                ['/seo-hub', 'SEO Directory'],
              ] as const
            ).map(([path, label]) => (
              <button
                key={path}
                type="button"
                onClick={() => onOpenSeoPage(path)}
                className={`px-3.5 py-2 rounded-lg text-[9px] font-bold uppercase tracking-[0.22em] border transition-colors ${
                  routePath === path
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-zinc-950 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Route Header */}
        <header className="mb-14 md:mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-red-600" />
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.38em]">
              {routePath === '/services' && 'Official Core Work · Global Tech Services'}
              {routePath === '/external-work' && 'Side Auxiliary Division · Fabrication & Print'}
              {routePath === '/global-tech-services' && 'Global Engineering Delivery · 40+ Countries'}
              {routePath === '/seo-hub' && 'Indexed Architecture & SEO Directory'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[0.95] tracking-tighter mb-6">
            {routePath === '/services' && (
              <>
                Official Tech Services{' '}
                <span className="text-red-600 italic font-normal">Worldwide</span>.
              </>
            )}
            {routePath === '/external-work' && (
              <>
                Side Division:{' '}
                <span className="text-red-600 italic font-normal">UV Print &amp; Signage</span>.
              </>
            )}
            {routePath === '/global-tech-services' && (
              <>
                Global Tech Delivery Across{' '}
                <span className="text-red-600 italic font-normal">Every Timezone</span>.
              </>
            )}
            {routePath === '/seo-hub' && (
              <>
                SoftwDocs Complete{' '}
                <span className="text-red-600 italic font-normal">SEO Hub</span>.
              </>
            )}
          </h1>

          <p className="text-white/65 text-base sm:text-xl font-light leading-relaxed">
            {meta.description}
          </p>
        </header>

        {/* Official Tech Services Grid (shown on /services and /seo-hub) */}
        {(routePath === '/services' || routePath === '/seo-hub') && (
          <div className="mb-16 md:mb-24">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Globe2 size={18} className="text-red-500" />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Official Core Work — Global Tech Services ({CORE_SERVICES.length})
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-600/35 text-red-500 text-[9px] font-bold uppercase tracking-[0.28em]">
                Primary Worldwide Focus
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_SERVICES.map((svc) => (
                <article
                  key={svc.id}
                  onClick={() => onSelectService(svc)}
                  className="group cursor-pointer rounded-3xl bg-zinc-950 border border-white/10 hover:border-red-600/60 overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500 block mb-1.5">
                        {svc.shortTag} · /services/{svc.slug}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                      Open Service Page
                    </span>
                    <ArrowUpRight size={15} className="text-red-500" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Global Regions Section (shown on /global-tech-services and /seo-hub) */}
        {(routePath === '/global-tech-services' || routePath === '/seo-hub') && (
          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles size={18} className="text-red-500" />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Worldwide Tech Engineering Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GLOBAL_REGIONS.map((region) => (
                <div
                  key={region.id}
                  className="p-8 rounded-3xl bg-zinc-950 border border-white/10 hover:border-red-600/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-red-600/15 border border-red-600/35 text-red-500 text-[9px] font-bold uppercase tracking-[0.25em]">
                        {region.badge}
                      </span>
                      <span className="text-xs text-white/45">{region.timezoneWindow}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{region.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                      {region.hubCities}
                    </p>
                    <p className="text-sm text-white/65 leading-relaxed mb-6">
                      {region.deliveryFocus}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {region.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2.5 text-xs text-white/80 font-medium"
                        >
                          <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onRequestQuote(
                        `Global Tech Services inquiry for ${region.name} (${region.timezoneWindow}).`
                      )
                    }
                    className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white text-[10px] font-bold uppercase tracking-[0.28em] transition-colors flex items-center justify-center gap-2"
                  >
                    Engage {region.name} Team <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Side Division: External Work Grid (shown on /external-work and /seo-hub) */}
        {(routePath === '/external-work' || routePath === '/seo-hub') && (
          <div className="mb-16 md:mb-24">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Layers size={18} className="text-red-500" />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Side Division — UV Printing, Signage &amp; Fabrication ({EXTERNAL_WORK_SERVICES.length})
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/75 text-[9px] font-bold uppercase tracking-[0.28em]">
                Auxiliary Side Work
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXTERNAL_WORK_SERVICES.map((svc) => (
                <article
                  key={svc.id}
                  onClick={() => onSelectService(svc)}
                  className="group cursor-pointer rounded-3xl bg-zinc-950 border border-white/10 hover:border-red-600/60 overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500 block mb-1.5">
                        {svc.shortTag} · /external-work/{svc.slug}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                      Open Service Page
                    </span>
                    <ArrowUpRight size={15} className="text-red-500" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* SEO Hub Extra Links: Upcoming Products + Editorial Insights */}
        {routePath === '/seo-hub' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10">
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.35em] block mb-4">
                Upcoming SoftwDocs Products
              </span>
              <div className="space-y-4">
                {UPCOMING_PRODUCTS.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-base font-serif font-bold text-white">{p.name}</h3>
                      <p className="text-xs text-white/50">{p.category}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onRequestQuote(`Early Access Request for ${p.name} (${p.category}).`)
                      }
                      className="px-4 py-2 rounded-lg bg-red-600 text-white text-[9px] font-bold uppercase tracking-[0.22em]"
                    >
                      Join Beta
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10">
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.35em] block mb-4">
                Engineering &amp; Fabrication Insights
              </span>
              <div className="space-y-4">
                {BLOG_POSTS.map((post) => (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => onSelectBlogPost(post)}
                    className="w-full text-left p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-red-600/50 transition-colors flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-red-500 block">
                        {post.tag}
                      </span>
                      <span className="text-sm font-serif font-bold text-white block mt-0.5">
                        {post.title}
                      </span>
                    </div>
                    <ArrowUpRight size={16} className="text-red-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
