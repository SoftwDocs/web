import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Cpu, Layers, Printer, Rocket } from 'lucide-react';
import { STATS } from '../data/softwdocsData';

const STAT_ICONS = [
  <Layers key="layers" size={32} />,
  <Rocket key="rocket" size={32} />,
  <Printer key="printer" size={32} />,
  <Cpu key="cpu" size={32} />,
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-40 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-x-12 md:gap-y-20">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="group flex flex-col items-center text-center"
            >
              <div className="text-red-600 mb-6 transition-all duration-500 transform drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] group-hover:scale-110">
                {STAT_ICONS[idx]}
              </div>
              <div className="w-8 h-[1px] bg-white/10 mb-6 group-hover:w-16 group-hover:bg-red-600 transition-all duration-700" />
              <div className="text-white font-serif text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter transition-all duration-700 group-hover:text-red-600 leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/40 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:text-white transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
