import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/softwdocsData';

export function ProcessSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-16 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4 md:mb-8"
            >
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                Our Methodology
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-zinc-900 leading-[0.9] tracking-tighter"
            >
              A SYSTEMATIC <br />
              <span className="text-red-600 italic font-normal">APPROACH</span> TO <br />
              EXCELLENCE.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-sm text-lg md:text-xl font-light italic leading-relaxed"
          >
            &quot;SoftwDocs engineers full-stack platforms, autonomous AI, robotics hardware, and
            precision physical fabrication through one unified blueprint.&quot;
          </motion.p>
        </div>

        <div className="grid border-t border-zinc-100">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="group grid grid-cols-1 lg:grid-cols-12 py-8 md:py-16 border-b border-zinc-100 items-start lg:items-center gap-6 md:gap-4 hover:bg-zinc-50 transition-colors duration-700 px-4 md:px-12 -mx-4 md:-mx-12"
            >
              <div className="lg:col-span-1 text-red-600 font-serif text-3xl md:text-4xl font-bold opacity-20 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                {step.number}
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-zinc-900 mb-2 md:mb-3 group-hover:text-red-600 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-zinc-500 font-light text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap gap-2 md:gap-4">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-zinc-100 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="lg:col-span-2 flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={scrollToContact}
                  aria-label={`Discuss ${step.title}`}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-zinc-200 text-zinc-900 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-700"
                >
                  <ArrowRight
                    size={20}
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
