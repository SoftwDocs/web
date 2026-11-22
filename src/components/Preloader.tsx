import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND } from '../data/softwdocsData';

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center gap-4"
            >
              <img
                src={BRAND.logo}
                alt="SoftwDocs Logo"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_10px_30px_rgba(255,13,0,0.2)]"
              />
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Softw<span className="text-red-600">Docs</span>
              </span>
            </motion.div>

            <div className="mt-10 w-44 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-6 text-[8px] font-bold uppercase tracking-[0.75em] text-zinc-500"
            >
              Engineering Prestige
            </motion.p>
          </div>

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'url("/noise.svg")' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
