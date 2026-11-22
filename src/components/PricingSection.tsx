import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRICING_PLANS, type PricingPlan } from '../data/softwdocsData';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 md:py-40 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                Investment
              </span>
              <div className="w-12 h-[1px] bg-red-600" />
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter mb-8 md:mb-12">
              THE COST OF <br />
              <span className="text-red-600 italic font-normal">EXCELLENCE</span>.
            </h2>

            <p className="text-white/40 max-w-2xl mx-auto text-base md:text-xl font-light italic leading-relaxed">
              &quot;This is not a do-it-yourself service, but it still stays in budget.&quot;
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isHighlighted = Boolean(plan.highlighted);
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * idx }}
                className={`relative p-8 md:p-12 rounded-[32px] md:rounded-[48px] border transition-all duration-700 group flex flex-col justify-between min-h-[460px] md:min-h-[640px] ${
                  isHighlighted
                    ? 'bg-red-600 border-red-600 shadow-2xl shadow-red-600/20 xl:scale-105 z-10'
                    : 'bg-zinc-900 border-white/5 hover:border-red-600/30'
                }`}
              >
                {plan.badge && (
                  <div className="mb-4">
                    <span className="bg-white text-red-600 text-[9px] font-bold uppercase tracking-[0.4em] px-5 py-2 rounded-full shadow-lg inline-block">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${
                      isHighlighted ? 'text-white/60' : 'text-red-600'
                    }`}
                  >
                    {plan.name}
                  </div>

                  <div className="mb-6 md:mb-8">
                    {plan.prefix && (
                      <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">
                        {plan.prefix}
                      </div>
                    )}
                    <div className="text-white font-serif text-5xl md:text-6xl font-bold tracking-tighter leading-tight tabular-nums">
                      {plan.price}
                    </div>
                    <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mt-2 flex items-center gap-3">
                      <div className="w-4 h-[1px] bg-white/20" />
                      {plan.cadence}
                    </div>
                  </div>

                  <p
                    className={`text-base md:text-lg mb-8 font-light italic leading-relaxed ${
                      isHighlighted ? 'text-white/80' : 'text-white/40'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="w-full h-[1px] bg-white/10 mb-8" />

                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest ${
                          isHighlighted ? 'text-white' : 'text-white/60'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isHighlighted ? 'bg-white' : 'bg-red-600'
                          }`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative inline-block w-full">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`group/btn relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 active:scale-95 px-12 py-5 text-[11px] rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-md rounded-bl-md w-full ${
                      isHighlighted
                        ? 'bg-white text-zinc-950 hover:text-white shadow-[0_20px_60px_rgba(255,255,255,0.05)]'
                        : 'bg-red-600 text-white hover:text-white shadow-[0_20px_60px_rgba(255,13,0,0.1)]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Select Plan
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-2 transition-transform duration-500 ease-out"
                      />
                    </span>
                    <div
                      className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHighlighted ? 'bg-zinc-950' : 'bg-zinc-950'
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
