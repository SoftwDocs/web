import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

function AnimatedLetters({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split('').map((char, idx) => (
        <motion.span
          key={`${char}-${idx}`}
          initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.48,
            delay: delay + idx * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : undefined,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

interface ParticleProps {
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
}

const DESKTOP_PARTICLES: ParticleProps[] = [
  { x: '12%', y: '20%', size: 3, duration: 4.5, delay: 0 },
  { x: '85%', y: '15%', size: 2, duration: 5.2, delay: 0.8 },
  { x: '70%', y: '75%', size: 4, duration: 3.9, delay: 1.5 },
  { x: '25%', y: '80%', size: 2, duration: 5.8, delay: 2.1 },
  { x: '50%', y: '10%', size: 3, duration: 4.8, delay: 0.4 },
  { x: '92%', y: '55%', size: 2, duration: 4.2, delay: 1.1 },
  { x: '8%', y: '60%', size: 3, duration: 5.5, delay: 1.9 },
];

const MOBILE_PARTICLES: ParticleProps[] = [
  { x: '15%', y: '20%', size: 3, duration: 4.2, delay: 0 },
  { x: '80%', y: '15%', size: 2, duration: 5.1, delay: 0.8 },
  { x: '75%', y: '75%', size: 4, duration: 3.8, delay: 1.6 },
  { x: '20%', y: '80%', size: 2, duration: 6, delay: 2.2 },
  { x: '50%', y: '10%', size: 3, duration: 4.7, delay: 0.4 },
];

function FloatingParticle({ x, y, size, duration, delay }: ParticleProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: 'radial-gradient(circle, rgba(255,13,0,0.45) 0%, transparent 70%)',
      }}
      animate={{ y: [0, -20, 0], opacity: [0, 0.55, 0], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function DesktopHero() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    restDelta: 1e-4,
  });

  const rotate = useTransform(smooth, [0, 0.45], [90, 0]);
  const scale = useTransform(smooth, [0, 0.45, 0.8, 1], [0.4, 0.72, 2.2, 2.6]);
  const brightnessVal = useTransform(smooth, [0.5, 0.8], [0.7, 1]);
  const videoFilter = useTransform(brightnessVal, (v) => `brightness(${v})`);
  const sideOpacity = useTransform(smooth, [0, 0.06, 0.38, 0.52], [1, 1, 1, 0]);
  const hudOpacity = useTransform(smooth, [0.38, 0.62], [1, 0]);
  const leftX = useTransform(smooth, [0, 0.32], [0, -100]);
  const rightX = useTransform(smooth, [0, 0.32], [0, 100]);
  const scrollHintOpacity = useTransform(smooth, [0, 0.1], [1, 0]);
  const progressBarWidth = useTransform(smooth, [0, 1], ['0%', '100%']);
  const progressBarOpacity = useTransform(smooth, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative bg-black hidden lg:block"
      style={{ height: '360vh', position: 'relative' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {DESKTOP_PARTICLES.map((p, idx) => (
            <FloatingParticle key={idx} {...p} />
          ))}
        </div>

        {/* Center rotating & scaling video stage */}
        <motion.div
          style={{ scale, rotate }}
          className="absolute inset-0 flex items-center justify-center z-10 origin-center px-4"
        >
          <div className="relative aspect-video w-full max-w-[920px] lg:w-[76vw]">
            <motion.div
              style={{ opacity: hudOpacity }}
              className="absolute -inset-[2px] rounded-sm"
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-red-600/25 via-transparent to-red-600/15" />
            </motion.div>

            <div className="relative w-full h-full overflow-hidden bg-zinc-950 rounded-sm">
              {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => {
                const isTop = corner.startsWith('t');
                const isLeft = corner.endsWith('l');
                const vPos = isTop ? 'top-0' : 'bottom-0';
                const hPos = isLeft ? 'left-0' : 'right-0';
                return (
                  <motion.div
                    key={corner}
                    style={{ opacity: hudOpacity }}
                    className={`absolute ${vPos} ${hPos} z-20 p-3`}
                  >
                    <div className="w-12 h-12 relative">
                      <div
                        className={`absolute ${vPos} ${hPos} w-10 h-[1.5px] ${
                          isLeft
                            ? 'bg-gradient-to-r from-red-600 to-transparent'
                            : 'bg-gradient-to-l from-red-600 to-transparent'
                        }`}
                      />
                      <div
                        className={`absolute ${vPos} ${hPos} w-[1.5px] h-10 ${
                          isTop
                            ? 'bg-gradient-to-b from-red-600 to-transparent'
                            : 'bg-gradient-to-t from-red-600 to-transparent'
                        }`}
                      />
                      <div
                        className={`absolute ${isTop ? 'top-[9px]' : 'bottom-[9px]'} ${
                          isLeft ? 'left-[9px]' : 'right-[9px]'
                        } w-1 h-1 rounded-full bg-red-600/70`}
                      />
                      <div
                        className={`absolute ${isTop ? 'top-3' : 'bottom-3'} ${
                          isLeft ? 'left-3' : 'right-3'
                        } w-3 h-3 ${isLeft ? 'border-l' : 'border-r'} ${
                          isTop ? 'border-t' : 'border-b'
                        } border-white/20`}
                      />
                    </div>
                  </motion.div>
                );
              })}

              <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{ filter: videoFilter }}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/assets/aistudio/b_High-end_dark_commer_cb79c346.mp4"
                  type="video/mp4"
                />
              </motion.video>

              <div
                className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)',
                  backgroundSize: '100% 3px',
                }}
              />

              <motion.div
                style={{ opacity: hudOpacity }}
                className="absolute inset-0 border border-white/[0.06] rounded-sm z-20"
              />

              <motion.div
                style={{ opacity: hudOpacity }}
                className="absolute top-3 left-3 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white/50 text-[6px] font-bold uppercase tracking-[0.35em]">
                  SOFTWDOCS LABS
                </span>
              </motion.div>

              <motion.div
                style={{ opacity: hudOpacity }}
                className="absolute bottom-0 left-0 right-0 z-30 px-4 py-2 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent"
              >
                <span className="text-white/25 text-[6px] uppercase tracking-[0.2em]">
                  AI · CLOUD · UV PRINT
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-[2px] rounded-full bg-white/10" />
                  ))}
                  <div className="w-10 h-[2px] rounded-full bg-red-600/70" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Left Column */}
        <motion.div
          style={{ opacity: sideOpacity, x: leftX }}
          className="absolute lg:left-[8%] top-[12%] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 z-20 w-full lg:max-w-md px-6 lg:px-0 pointer-events-none text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-gradient-to-r from-red-600 to-red-600/30 hidden lg:block" />
            <span className="font-sans text-red-500 text-[9px] font-semibold uppercase tracking-[0.35em] mx-auto lg:mx-0">
              Official Work · Worldwide Tech
            </span>
          </motion.div>

          <h1 className="font-serif text-[11vw] lg:text-[4.2vw] font-bold leading-[1.0] tracking-tight text-white">
            {ready && <AnimatedLetters text="We Engineer" delay={0.15} />}
            <br />
            <span className="text-zinc-500 font-extralight">
              {ready && <AnimatedLetters text="Global Tech" delay={0.45} />}
            </span>
            <br />
            <span className="text-red-500 italic font-light text-[12vw] lg:text-[4.8vw]">
              {ready && <AnimatedLetters text="Excellence" delay={0.75} />}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-zinc-400 text-[13px] leading-[1.85] max-w-[310px] mx-auto lg:mx-0 font-light"
          >
            Our core work is worldwide technology delivery: Full-Stack, Agentic AI, DevOps Cloud,
            Robotics &amp; SEO—with UV Print &amp; Signage as our dedicated side division.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
            transition={{ duration: 0.7, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex justify-center lg:justify-start gap-8"
          >
            {[
              ['480+', 'Systems'],
              ['920+', 'UV Prints'],
              ['99%', 'Uptime'],
            ].map(([val, label]) => (
              <div key={label} className="group relative">
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300" />
                <span className="font-sans text-white text-2xl font-bold tracking-tight tabular-nums">
                  {val}
                </span>
                <p className="font-sans text-zinc-500 text-[8px] font-semibold uppercase tracking-[0.22em] mt-1">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          style={{ opacity: sideOpacity, x: rightX }}
          className="absolute lg:right-[8%] bottom-[12%] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 z-20 w-full lg:max-w-sm px-6 lg:px-0 text-center lg:text-right pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-end gap-3 mb-6"
          >
            <span className="font-sans text-red-500 text-[9px] font-semibold uppercase tracking-[0.35em]">
              Serving 40+ Countries Worldwide
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-red-600 to-red-600/30 hidden lg:block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-2xl lg:text-[1.75vw] font-light leading-[1.4] tracking-tight"
          >
            Global software &amp; AI systems, plus{' '}
            <span className="text-white font-semibold italic">side UV &amp; signage craft</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-zinc-500 text-[13px] leading-[1.9] max-w-[260px] ml-auto font-light"
          >
            Engineering complete digital platforms, hardware prototypes, and physical brand
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center lg:items-end gap-4 pointer-events-auto"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="group relative inline-flex items-center bg-white h-14 px-10 overflow-hidden w-[260px] transition-all rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md hover:shadow-[0_20px_40px_rgba(255,13,0,0.2)]"
            >
              <span className="absolute inset-0 flex items-center justify-center group-hover:translate-y-[-110%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <span className="font-sans text-black font-semibold uppercase text-[9px] tracking-[0.35em]">
                  Start Your Project
                </span>
              </span>
              <span className="absolute inset-0 bg-red-600 translate-y-[110%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center gap-2 text-white">
                <span className="font-sans text-white font-semibold uppercase text-[9px] tracking-[0.35em]">
                  Build With Us
                </span>
                <ArrowRight size={12} />
              </span>
            </a>

            <div className="flex items-center gap-5">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('services');
                }}
                className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
              >
                <span className="relative font-sans text-[8px] font-semibold uppercase tracking-[0.28em]">
                  Tech Services
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowUpRight size={11} />
              </a>

              <span className="text-white/20 text-[8px]">·</span>

              <a
                href="#external-work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('external-work');
                }}
                className="group flex items-center gap-2 text-red-500/80 hover:text-red-400 transition-colors duration-300"
              >
                <span className="relative font-sans text-[8px] font-semibold uppercase tracking-[0.28em]">
                  UV &amp; External Work
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowUpRight size={11} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom HUD */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative px-6 py-5 flex justify-between items-end">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-red-600" />
                <span className="text-white/40 text-[7px] font-bold uppercase tracking-[0.26em]">
                  SoftwDocs Studio
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
                <span className="text-white/40 text-[7px] uppercase tracking-wider">
                  Products Launching Soon
                </span>
              </div>
            </div>

            <motion.div
              style={{ opacity: scrollHintOpacity }}
              className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-1.5"
            >
              <span className="text-white/30 text-[6px] uppercase tracking-[0.18em]">Scroll</span>
              <div className="w-px h-5 bg-gradient-to-b from-white/40 to-transparent origin-top" />
            </motion.div>

            <div className="flex gap-5 pointer-events-auto">
              {[
                ['TECH', 'services'],
                ['UV PRINT', 'external-work'],
                ['PRODUCTS', 'products'],
                ['CONTACT', 'contact'],
              ].map(([label, target]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => scrollTo(target)}
                  className="relative text-white/30 text-[7px] font-bold uppercase tracking-[0.25em] hover:text-white cursor-pointer transition-colors duration-300 group"
                >
                  {label}
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Top Scroll Progress Line */}
        <motion.div
          style={{ opacity: progressBarOpacity }}
          className="absolute top-0 left-0 right-0 z-50 h-[1.5px] bg-white/5"
        >
          <motion.div
            style={{ width: progressBarWidth }}
            className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-400"
          />
        </motion.div>
      </div>
    </section>
  );
}

function MobileHero() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    restDelta: 1e-4,
  });

  const rotate = useTransform(smooth, [0.15, 0.55], [0, 90]);
  const scale = useTransform(smooth, [0, 0.25, 0.55, 0.75, 1], [0.85, 0.9, 1.2, 1.8, 2.8]);
  const textOpacity = useTransform(smooth, [0, 0.06, 0.28, 0.42], [1, 1, 0.8, 0]);
  const hudOpacity = useTransform(smooth, [0.25, 0.5], [1, 0]);
  const brightnessVal = useTransform(smooth, [0.4, 0.7], [0.7, 1]);
  const videoFilter = useTransform(brightnessVal, (v) => `brightness(${v})`);
  const scrollHintOpacity = useTransform(smooth, [0, 0.08], [1, 0]);
  const progressBarWidth = useTransform(smooth, [0, 1], ['0%', '100%']);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-mobile"
      ref={ref}
      className="relative bg-black lg:hidden"
      style={{ height: '320vh', position: 'relative' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-4">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {MOBILE_PARTICLES.map((p, idx) => (
            <FloatingParticle key={idx} {...p} />
          ))}
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-20 flex flex-col items-center text-center px-2 pt-[10svh] pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-2"
          >
            <span className="font-sans text-red-500 text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.35em]">
              Official Work · Worldwide Tech
            </span>
          </motion.div>

          <h1 className="font-serif text-[10.5vw] md:text-[7.5vw] font-bold leading-[1.0] tracking-tight text-white mb-3 md:mb-5">
            {ready && <AnimatedLetters text="We Engineer" delay={0.15} />}
            <br />
            <span className="text-zinc-500 font-extralight">
              {ready && <AnimatedLetters text="Global Tech" delay={0.4} />}
            </span>
            <br />
            <span className="text-red-500 italic font-light text-[11.5vw] md:text-[8.5vw]">
              {ready && <AnimatedLetters text="Excellence" delay={0.65} />}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-zinc-400 text-[11px] md:text-[14px] leading-relaxed max-w-[300px] md:max-w-[440px] font-light"
          >
            Worldwide Tech Services (AI, DevOps, Robotics, Full-Stack) + Side UV Print Division.
          </motion.p>
        </motion.div>

        <div className="flex-1 w-full flex items-center justify-center relative z-10 pointer-events-none my-[2svh]">
          <motion.div style={{ scale, rotate }} className="absolute origin-center">
            <div className="relative aspect-video w-[85vw] max-w-[320px] md:max-w-[560px] pointer-events-auto">
              <motion.div
                style={{ opacity: hudOpacity }}
                className="absolute -inset-[2px] rounded-sm"
                animate={{ opacity: [0.35, 0.75, 0.35] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-red-600/25 via-transparent to-red-600/15" />
              </motion.div>
              <div className="relative w-full h-full overflow-hidden bg-zinc-950 rounded-sm">
                <motion.video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ filter: videoFilter }}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="/assets/aistudio/b_High-end_dark_commer_cb79c346.mp4"
                    type="video/mp4"
                  />
                </motion.video>
                <motion.div
                  style={{ opacity: hudOpacity }}
                  className="absolute top-2 left-2 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-0.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white/60 text-[7px] font-bold uppercase tracking-[0.25em]">
                    SOFTWDOCS LABS
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-20 w-full flex flex-col items-center pb-12"
        >
          <div className="flex justify-center gap-6 mb-5">
            {[
              ['480+', 'Systems'],
              ['920+', 'UV Prints'],
              ['99%', 'Uptime'],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <span className="font-sans text-white text-lg font-bold tracking-tight tabular-nums">
                  {val}
                </span>
                <p className="font-sans text-zinc-500 text-[7px] font-semibold uppercase tracking-[0.2em]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="bg-white text-black px-6 py-3 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm font-sans text-[9px] font-bold uppercase tracking-[0.25em]"
            >
              Start Project
            </a>
            <a
              href="#external-work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('external-work');
              }}
              className="flex items-center gap-1 text-red-500 text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              External Work <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-3 left-0 right-0 px-5 flex justify-between items-center z-20 pointer-events-none">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/35 text-[7px] uppercase tracking-wider">SoftwDocs</span>
          </div>
          <motion.span
            style={{ opacity: scrollHintOpacity }}
            className="text-white/30 text-[7px] uppercase tracking-[0.2em]"
          >
            Scroll
          </motion.span>
          <div className="flex gap-3 text-white/30 text-[7px] font-bold uppercase tracking-[0.2em]">
            <span>AI</span>
            <span>DEV</span>
            <span>UV</span>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 z-50 h-[1.5px] bg-white/5">
          <motion.div
            style={{ width: progressBarWidth }}
            className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-400"
          />
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  );
}
