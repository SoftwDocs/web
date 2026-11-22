import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Accessibility,
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Palette,
  Search,
  ShoppingCart,
} from 'lucide-react';
import {
  CORE_SERVICES,
  type ServiceCategory,
  type ServiceDetail,
} from '../data/softwdocsData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onOpenHub?: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'full-stack-development': <Code2 size={28} />,
  'agentic-ai-development': <Bot size={28} />,
  'devops-cloud': <Cloud size={28} />,
  'robotics-hardware': <Cpu size={28} />,
  'web-design': <Globe size={28} />,
  ecommerce: <ShoppingCart size={28} />,
  seo: <Search size={28} />,
  aoda: <Accessibility size={28} />,
  'graphic-design': <Palette size={28} />,
};

const CATEGORY_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'software-ai', label: 'Software & Agentic AI' },
  { id: 'cloud-robotics', label: 'DevOps & Robotics' },
  { id: 'design-growth', label: 'Web, SEO & Design' },
];

export function ServicesSection({ onSelectService, onOpenHub }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices =
    activeCategory === 'all'
      ? CORE_SERVICES
      : CORE_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 md:py-40 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-3 mb-6 md:mb-8"
            >
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.38em]">
                Official Core Work · Delivered Worldwide
              </span>
              <span className="px-3 py-1 rounded-full bg-red-600/15 border border-red-600/35 text-red-500 text-[9px] font-bold uppercase tracking-[0.25em]">
                Global Primary Business
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter"
            >
              OFFICIAL TECH <br />
              <span className="text-red-600 italic font-normal">SERVICES</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md space-y-4"
          >
            <p className="text-white/55 text-sm md:text-lg font-light italic leading-relaxed">
              &quot;Technology engineering is our official worldwide business—delivering Full-Stack
              Software, Agentic AI, DevOps Cloud, Robotics, Web, SEO &amp; Design across the globe.&quot;
            </p>
            {onOpenHub && (
              <button
                type="button"
                onClick={onOpenHub}
                className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-500 hover:text-white inline-flex items-center gap-2 transition-colors"
              >
                Open Dedicated Tech SEO Directory <ArrowRight size={13} />
              </button>
            )}
          </motion.div>
        </div>

        {/* Animated Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 md:mb-16">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                  isSelected ? 'text-white' : 'text-white/50 hover:text-white border border-white/10'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="softwdocs-service-tab"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 bg-red-600 rounded-xl -z-0"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.article
              key={service.id}
              layout
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.06 * idx, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectService(service)}
              className="group relative cursor-pointer bg-zinc-900/70 hover:bg-zinc-900 border border-white/10 hover:border-red-600/60 p-8 md:p-10 overflow-hidden min-h-[430px] flex flex-col justify-between rounded-3xl transition-colors duration-500"
            >
              {/* Subtle background image reveal on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover grayscale scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300"
                  >
                    {SERVICE_ICONS[service.id] ?? <Code2 size={26} />}
                  </motion.div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-red-400 transition-colors">
                    {service.shortTag}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/55 text-sm md:text-base font-light leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                <ul className="space-y-3.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45 group-hover:text-white/80 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-10 pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service);
                  }}
                  className="group/btn relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.28em] flex items-center justify-center gap-3 active:scale-95 px-6 py-3 text-[10px] rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-transparent border border-white/15 text-white hover:border-red-600"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    Explore Service
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1.5 transition-transform duration-300"
                    />
                  </span>
                  <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-red-600" />
                </button>

                <span className="text-white/10 font-serif text-4xl font-bold group-hover:text-red-600/25 transition-colors select-none">
                  {service.number}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
