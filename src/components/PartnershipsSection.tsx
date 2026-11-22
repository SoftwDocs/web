import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { PARTNER_LOGOS } from '../data/softwdocsData';

function SplitReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className="inline-block" aria-label={text}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block">
          {word.split('').map((char, cIdx) => (
            <motion.span
              key={cIdx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.4,
                delay: delay + (wIdx * 4 + cIdx) * 0.02,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
          {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

function LogoCard({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div className="relative flex-shrink-0 group h-20 w-40 md:h-28 md:w-56 flex items-center justify-center bg-zinc-950/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-600/30">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-3/4 h-1/2 flex items-center justify-center transition-all duration-500 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-105 opacity-50 group-hover:opacity-100">
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = 'left',
  speed = 30,
}: {
  items: { name: string; src: string }[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden py-3">
      <div
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
          width: 'fit-content',
        }}
        className="flex whitespace-nowrap gap-4 md:gap-6"
      >
        {repeated.map((logo, idx) => (
          <LogoCard key={`${logo.name}-${idx}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function PartnershipsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.01,
  });
  const rotateX = useTransform(smooth, [0, 1], [8, -8]);
  const skewX = useTransform(smooth, [0, 1], [1, -1]);

  return (
    <section
      id="partnerships"
      ref={ref}
      className="py-20 md:py-28 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-1/3 w-[50%] h-[50%] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,13,0,0.12) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 -right-1/3 w-[50%] h-[50%] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,13,0,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-wide relative z-10 mb-12 md:mb-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-5"
        >
          <div className="w-6 h-px bg-red-600/50" />
          <span className="font-sans text-red-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em]">
            Our Partnerships
          </span>
          <div className="w-6 h-px bg-red-600/50" />
        </motion.div>

        <h2 className="font-serif text-[9vw] md:text-[4.5vw] lg:text-[3.5vw] font-bold text-white leading-tight tracking-tight">
          <SplitReveal text="Driving Value for" delay={0.1} />
          <br />
          <span className="text-red-500 italic font-light">
            <SplitReveal text="Industry Leaders" delay={0.3} />
          </span>
        </h2>
      </div>

      <motion.div
        style={{ perspective: '1000px', rotateX, skewX }}
        className="relative py-6 md:py-8"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-20 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

        <div className="space-y-2 md:space-y-3">
          <MarqueeRow items={PARTNER_LOGOS} direction="left" speed={30} />
          <MarqueeRow items={[...PARTNER_LOGOS].reverse()} direction="right" speed={40} />
        </div>
      </motion.div>
    </section>
  );
}
