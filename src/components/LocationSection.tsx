import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { BRAND } from '../data/softwdocsData';

export function LocationSection() {
  return (
    <section id="location" className="bg-zinc-950 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-red-600" />
            <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
              Studio &amp; Fabrication Hub
            </span>
            <div className="w-12 h-[1px] bg-red-600" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight tracking-tighter uppercase mb-4">
            OUR <span className="text-red-600 italic font-normal">Location</span>.
          </h2>

          <div className="flex items-center gap-2 mt-4 text-white/45">
            <MapPin size={16} className="text-red-600" />
            <span className="text-sm font-light tracking-widest uppercase">
              {BRAND.name} Studio — Toronto &amp; Global Remote Delivery
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
          style={{ height: '480px' }}
        >
          <iframe
            src="https://maps.google.com/maps?cid=2209298707670505438&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SoftwDocs Location on Google Maps"
          />
        </motion.div>
      </div>
    </section>
  );
}
