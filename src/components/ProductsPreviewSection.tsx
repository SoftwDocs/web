import { motion } from 'motion/react';
import { ArrowRight, Box, Cpu, Sparkles } from 'lucide-react';
import { UPCOMING_PRODUCTS, type UpcomingProduct } from '../data/softwdocsData';

interface ProductsPreviewSectionProps {
  onRequestEarlyAccess: (product: UpcomingProduct) => void;
}

const PRODUCT_ICONS = [
  <Sparkles key="ai" size={24} />,
  <Box key="cloud" size={24} />,
  <Cpu key="hw" size={24} />,
];

export function ProductsPreviewSection({ onRequestEarlyAccess }: ProductsPreviewSectionProps) {
  return (
    <section
      id="products"
      className="py-20 md:py-36 bg-zinc-950 relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                SoftwDocs R&amp;D Labs
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[0.94] tracking-tighter uppercase"
            >
              UPCOMING <br />
              <span className="text-red-600 italic font-normal">PRODUCTS</span>.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/45 max-w-md text-sm md:text-base font-light italic leading-relaxed"
          >
            &quot;Soon we are launching our own proprietary suite of AI, Cloud, and Hardware QA
            products forged from real-world engineering.&quot;
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {UPCOMING_PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2rem] bg-black border border-white/10 hover:border-red-600/60 p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-colors duration-500"
            >
              {/* Animated top bar highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                    {PRODUCT_ICONS[idx]}
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-600/30 text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                    {product.eta}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-500 block mb-2">
                  {product.code} · {product.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>

                <p className="text-white/55 text-sm leading-relaxed mb-8">{product.summary}</p>

                <ul className="space-y-3 mb-10">
                  {product.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onRequestEarlyAccess(product)}
                className="group/btn relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.28em] flex items-center justify-center gap-3 active:scale-95 px-6 py-4 text-[10px] rounded-tl-[1.75rem] rounded-br-[1.75rem] rounded-tr-sm rounded-bl-sm bg-white/5 border border-white/15 text-white hover:border-red-600 w-full"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Request Early Access
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1.5 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-red-600" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
