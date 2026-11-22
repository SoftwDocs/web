import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe2, Layers, Sparkles } from 'lucide-react';
import { BRAND, GLOBAL_REGIONS } from '../data/softwdocsData';

interface GlobalTechReachSectionProps {
  onOpenSeoPage: (path: '/services' | '/external-work' | '/global-tech-services' | '/seo-hub') => void;
  onInquiry: (message: string) => void;
}

export function GlobalTechReachSection({
  onOpenSeoPage,
  onInquiry,
}: GlobalTechReachSectionProps) {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(GLOBAL_REGIONS[0].id);
  const activeRegion =
    GLOBAL_REGIONS.find((r) => r.id === selectedRegionId) ?? GLOBAL_REGIONS[0];

  return (
    <section
      id="global-reach"
      className="py-20 md:py-36 bg-black relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Clarity Grid: Official Core Tech vs Side Division */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[2rem] bg-zinc-950 border border-red-600/40 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-600/40 text-red-500 text-[9px] font-bold uppercase tracking-[0.3em] mb-5">
                <Globe2 size={13} />
                Official Core Business · Worldwide
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-[1.02] tracking-tight mb-4">
                Tech Services Delivered <span className="text-red-600 italic font-normal">Worldwide</span>.
              </h2>
              <p className="text-white/65 text-sm md:text-base leading-relaxed font-light mb-6">
                {BRAND.officialStatement}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => onOpenSeoPage('/services')}
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-white hover:text-black text-white text-[10px] font-bold uppercase tracking-[0.25em] transition-colors flex items-center gap-2"
              >
                Explore Official Tech Page <ArrowRight size={13} />
              </button>
              <button
                type="button"
                onClick={() => onOpenSeoPage('/global-tech-services')}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-[10px] font-bold uppercase tracking-[0.25em] transition-colors"
              >
                Global Delivery Page
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-5 rounded-[2rem] bg-zinc-950 border border-white/15 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/80 text-[9px] font-bold uppercase tracking-[0.3em] mb-5">
                <Layers size={13} className="text-red-500" />
                Side Division · Print &amp; Fabrication
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-4">
                UV Printing, Signage &amp; Custom Craft.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed font-light mb-6">
                {BRAND.sideStatement}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => onOpenSeoPage('/external-work')}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-red-600 border border-white/15 hover:border-red-600 text-white text-[10px] font-bold uppercase tracking-[0.25em] transition-colors flex items-center gap-2 w-fit"
              >
                Open Side Division Page <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Interactive Global Delivery Regions */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-red-600" />
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.38em]">
                Global Tech Presence
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Serving Tech Clients Across <span className="text-red-600 italic font-normal">Every Timezone</span>
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onOpenSeoPage('/seo-hub')}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-red-500 transition-colors"
          >
            <Sparkles size={14} className="text-red-500" />
            Browse Full SEO Index
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {GLOBAL_REGIONS.map((region) => {
              const isSelected = region.id === activeRegion.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white shadow-[0_12px_32px_rgba(255,13,0,0.2)]'
                      : 'bg-zinc-950 border-white/10 text-white/75 hover:border-white/30'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.28em] block mb-1 ${
                        isSelected ? 'text-white/85' : 'text-red-500'
                      }`}
                    >
                      {region.badge}
                    </span>
                    <span className="text-lg font-serif font-bold block">{region.name}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isSelected ? 'translate-x-1 text-white' : 'text-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-red-600/15 border border-red-600/35 text-red-500 text-[10px] font-bold uppercase tracking-[0.28em]">
                    {activeRegion.timezoneWindow}
                  </span>
                  <span className="text-xs font-medium text-white/50">{activeRegion.hubCities}</span>
                </div>

                <h4 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  {activeRegion.name} <span className="text-red-500 italic font-normal">Engineering Desk</span>
                </h4>

                <p className="text-white/65 text-base md:text-lg font-light leading-relaxed">
                  {activeRegion.deliveryFocus}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activeRegion.highlights.map((item) => (
                    <div
                      key={item}
                      className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-semibold text-white/85 flex items-center gap-2.5"
                    >
                      <CheckCircle2 size={15} className="text-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-white/45">
                    Ready to launch a software, AI, cloud, or robotics engagement in {activeRegion.name}?
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onInquiry(
                        `Global Tech Inquiry for ${activeRegion.name} (${activeRegion.timezoneWindow}). Please share availability.`
                      )
                    }
                    className="px-6 py-3.5 rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-sm rounded-bl-sm bg-white text-black hover:bg-red-600 hover:text-white text-[10px] font-bold uppercase tracking-[0.28em] transition-colors flex items-center gap-2"
                  >
                    Book {activeRegion.name} Call <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
