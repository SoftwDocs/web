import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Cpu,
  FileSpreadsheet,
  Layers,
  Maximize2,
  Monitor,
  PenTool,
  Printer,
  Sparkles,
} from 'lucide-react';
import { EXTERNAL_WORK_SERVICES, type ServiceDetail } from '../data/softwdocsData';

interface ExternalWorkSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onOpenHub?: () => void;
}

const EXTERNAL_ICONS: Record<string, React.ReactNode> = {
  'uv-printing': <Sparkles size={24} />,
  'printing-services': <Printer size={24} />,
  signage: <Monitor size={24} />,
  'large-format-printing': <Maximize2 size={24} />,
  'promotional-items': <Award size={24} />,
  'brand-collateral': <FileSpreadsheet size={24} />,
  'retail-event-exhibition': <Layers size={24} />,
  'cnc-laser-cutting': <Cpu size={24} />,
  'digital-design': <PenTool size={24} />,
};

export function ExternalWorkSection({ onSelectService, onOpenHub }: ExternalWorkSectionProps) {
  const [featured, ...gridServices] = EXTERNAL_WORK_SERVICES;

  return (
    <section
      id="external-work"
      className="py-20 md:py-40 bg-black relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.38em]">
                Side Division · External Work
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/75 text-[9px] font-bold uppercase tracking-[0.25em]">
                Auxiliary Print &amp; Fabrication
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-white leading-[0.92] tracking-tighter uppercase"
            >
              SIDE WORK: <br />
              <span className="text-red-600 italic font-normal">UV PRINT &amp; SIGNAGE</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md space-y-4"
          >
            <p className="text-white/55 text-sm md:text-base font-light leading-relaxed">
              While Software, AI &amp; Tech is our official worldwide business, this{' '}
              <span className="text-white font-medium">dedicated Side Division</span> handles UV
              printing, 2D/3D &amp; SMD signage, wraps, promotional merch, collateral &amp; CNC
              laser fabrication—each with its own SEO specification page.
            </p>
            {onOpenHub && (
              <button
                type="button"
                onClick={onOpenHub}
                className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-500 hover:text-white inline-flex items-center gap-2 transition-colors"
              >
                Open Side Division Hub Page <ArrowRight size={13} />
              </button>
            )}
          </motion.div>
        </div>

        {/* Flagship UV Printing Feature Banner */}
        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-[2rem] md:rounded-[3rem] bg-zinc-950 border border-white/10 hover:border-red-600/50 overflow-hidden mb-10 md:mb-14 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden bg-zinc-900">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent lg:bg-gradient-to-l lg:from-zinc-950 lg:via-zinc-950/30 lg:to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                  {featured.shortTag} · {featured.number}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-red-600 mb-5">
                  {EXTERNAL_ICONS[featured.id]}
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em]">
                    Industrial Print Lab
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 group-hover:text-red-500 transition-colors">
                  {featured.title}
                </h3>

                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {featured.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(featured)}
                className="group/btn relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.28em] flex items-center justify-center gap-3 active:scale-95 px-8 py-4 text-[10px] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md bg-white text-black hover:text-white w-full sm:w-fit"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore UV Printing Page
                  <ArrowRight
                    size={15}
                    className="group-hover/btn:translate-x-1.5 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-red-600" />
              </button>
            </div>
          </div>
        </motion.article>

        {/* 8 External Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridServices.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer rounded-3xl bg-zinc-950 border border-white/10 hover:border-red-600/50 overflow-hidden flex flex-col justify-between transition-colors duration-500"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
                    {EXTERNAL_ICONS[service.id]}
                  </div>
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    {service.number}
                  </span>
                </div>

                <div className="p-6 pb-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-500 block mb-2">
                    {service.shortTag}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-red-500 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-xs sm:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 group-hover:text-white transition-colors">
                  Open Service Page
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
