import { motion } from 'motion/react';
import { KINETIC_TICKER_ITEMS } from '../data/softwdocsData';

export function KineticMarqueeSection() {
  const repeated = [...KINETIC_TICKER_ITEMS, ...KINETIC_TICKER_ITEMS, ...KINETIC_TICKER_ITEMS];

  return (
    <section
      aria-label="SoftwDocs Capabilities Ticker"
      className="relative bg-black border-y border-white/10 py-6 md:py-8 overflow-hidden select-none"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="space-y-3 md:space-y-4">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 md:gap-14 whitespace-nowrap will-change-transform"
          >
            {repeated.map((label, idx) => (
              <div key={`top-${idx}`} className="flex items-center gap-8 md:gap-14">
                <span className="text-sm sm:text-base md:text-lg font-serif font-bold tracking-[0.22em] text-white/80 hover:text-red-500 transition-colors">
                  {label}
                </span>
                <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(255,13,0,0.6)]" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['-33.333%', '0%'] }}
            transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 md:gap-14 whitespace-nowrap will-change-transform"
          >
            {[...repeated].reverse().map((label, idx) => (
              <div key={`bot-${idx}`} className="flex items-center gap-8 md:gap-14">
                <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.35em] text-zinc-500 uppercase">
                  {label}
                </span>
                <span className="w-4 h-[1px] bg-red-600/60" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
