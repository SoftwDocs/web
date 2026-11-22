import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { AODA_POINTS } from '../data/softwdocsData';

interface AodaSectionProps {
  onOpenAudit: () => void;
}

export function AodaSection({ onOpenAudit }: AodaSectionProps) {
  return (
    <section
      id="aoda"
      className="pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 xl:py-48 px-4 md:px-6 lg:px-8 xl:px-12 bg-zinc-950 overflow-hidden relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-8 h-[1px] bg-red-600" />
                <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                  Legal Compliance
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[0.95] md:leading-[0.9] tracking-tighter mb-6 md:mb-8 lg:mb-10 uppercase">
                AODA Website <br />
                <span className="text-red-600 italic font-normal">Compliance.</span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-white/40 font-serif font-light leading-relaxed mb-8 md:mb-10 lg:mb-12 max-w-xl italic">
                &quot;The Accessibility for Ontarians with Disabilities Act (AODA) is a mandatory
                standard. SoftwDocs engineers code-level WCAG compliance so your brand stays
                accessible and protected.&quot;
              </p>

              <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-8 md:mb-10 lg:mb-12">
                {AODA_POINTS.map((pt, idx) => (
                  <motion.div
                    key={pt.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3 md:gap-4 group"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_8px_rgba(220,38,38,0.4)] shrink-0" />
                    <div>
                      <h4 className="font-bold text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white mb-1 leading-none">
                        {pt.title}
                      </h4>
                      <p className="text-white/40 text-xs md:text-sm font-light">
                        — {pt.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] xl:aspect-square max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] xl:rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/50 bg-zinc-900"
            >
              <img
                src="/src/assets/images/aoda_strategy_1795346423250.jpg"
                alt="SoftwDocs Accessibility Compliance Strategy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-700" />
              <div className="absolute inset-0 p-6 md:p-8 lg:p-10 xl:p-16 flex flex-col justify-end text-white">
                <div className="max-w-md">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-3 md:mb-4 lg:mb-6 leading-none tracking-tight uppercase">
                    Does it affect <br />
                    <span className="text-red-600 italic font-normal">your business?</span>
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg opacity-80 font-serif font-light leading-relaxed mb-6 md:mb-8 lg:mb-10 italic">
                    Non-compliance isn&apos;t just unethical—it&apos;s expensive. Fines reach{' '}
                    <span className="text-red-600 font-bold">$100k per day</span>. Let SoftwDocs
                    handle the complexity.
                  </p>
                  <button
                    type="button"
                    onClick={onOpenAudit}
                    className="bg-red-600 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-bold uppercase tracking-[0.15em] text-[9px] md:text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 md:gap-3 active:scale-95 group/btn w-full sm:w-auto"
                  >
                    Verify Your Status
                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-8 lg:-top-10 xl:-right-8 lg:right-0 right-2 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-zinc-900 rounded-full flex items-center justify-center p-4 md:p-5 lg:p-6 border border-white/10 shadow-2xl hidden md:flex z-20">
              <span className="text-[8px] md:text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-center text-red-600 leading-tight">
                WCAG 2.1 AA <br /> Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
