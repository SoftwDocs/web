import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/softwdocsData';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next, index]);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-40 bg-zinc-950 text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-start lg:items-center">
          <div className="w-full lg:w-1/3">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
              <Star size={12} className="fill-red-500" />
              Client Testimonials
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-[6vw] font-serif font-bold tracking-tighter mb-8 lg:mb-12 leading-[0.9] text-white">
              THE <br />
              <span className="text-red-600 italic font-normal">VOICES</span> <br />
              OF IMPACT.
            </h2>

            <p className="text-base md:text-xl text-white/40 leading-relaxed font-light mb-12 md:mb-16">
              Listen to what our clients say about our service quality.
            </p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 group"
              >
                <ChevronLeft size={24} className="group-hover:text-white transition-colors" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 group"
              >
                <ChevronRight size={24} className="group-hover:text-white transition-colors" />
              </button>
            </div>

            <div className="flex gap-3 mt-12">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`View testimonial from ${item.name}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? 'w-12 bg-red-600' : 'w-4 bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            className="w-full lg:w-2/3 relative min-h-[320px] md:min-h-[520px] flex items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.name}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-14 rounded-[28px] md:rounded-[56px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
                    <Star size={300} className="fill-white" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-5 md:gap-8 mb-10 md:mb-14">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-red-600/20 p-1 bg-zinc-800 shrink-0">
                        <img
                          src={current.avatar}
                          alt={current.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale rounded-full"
                        />
                      </div>
                      <div>
                        <div className="text-white font-serif text-2xl md:text-3xl font-bold mb-1">
                          {current.name}
                        </div>
                        <div className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                          {current.role}
                        </div>
                      </div>
                    </div>

                    <p className="text-lg md:text-2xl lg:text-4xl font-serif italic text-white leading-[1.3] tracking-tight mb-8 md:mb-14">
                      &quot;{current.text}&quot;
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 md:pt-12 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                          Organization
                        </span>
                        <span className="text-white font-serif text-xl font-bold">
                          {current.company}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex flex-col items-end text-right">
                          <span className="text-red-600 font-serif text-3xl md:text-4xl font-bold">
                            {current.metric}
                          </span>
                          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                            Performance Impact
                          </span>
                        </div>
                        <div className="w-10 md:w-12 h-[1px] bg-red-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
