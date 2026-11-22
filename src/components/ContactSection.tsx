import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe2, Loader2, Mail, Phone } from 'lucide-react';
import { BRAND } from '../data/softwdocsData';

interface ContactSectionProps {
  prefilledMessage?: string;
}

export function ContactSection({ prefilledMessage }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [division, setDivision] = useState<'official-tech' | 'side-fabrication'>('official-tech');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      setReferenceId(null);
      if (/uv|signage|print|laser|cnc|promo|collateral|wrap|exhibition/i.test(prefilledMessage)) {
        setDivision('side-fabrication');
      } else {
        setDivision('official-tech');
      }
    }
  }, [prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email, and project brief.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          country: country.trim() || 'Worldwide Remote',
          division,
          message: message.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
      setReferenceId(data.referenceId || 'SD-NEW');
      setName('');
      setEmail('');
      setCountry('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit inquiry right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-48 bg-zinc-950 text-white overflow-hidden relative border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                Worldwide Tech Desk
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 md:mb-10 uppercase">
              Establish <br />
              <span className="text-red-600 italic font-normal">Contact</span>.
            </h2>

            <p className="text-lg md:text-xl text-white/50 font-serif font-light leading-relaxed mb-10 md:mb-12 max-w-xl italic">
              &quot;We deliver our Official Tech Services globally across every timezone—plus side
              UV printing, signage, and CNC fabrication.&quot;
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-white/75">
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/35 flex items-center justify-center shrink-0">
                  <Globe2 size={18} className="text-red-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 block">
                    Service Territory
                  </span>
                  <span className="text-base font-serif font-bold text-white">
                    Worldwide Delivery — North America · Europe · GCC · APAC
                  </span>
                </div>
              </div>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 group/link cursor-pointer w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-red-600 transition-all duration-500">
                  <Mail size={18} className="text-red-600 group-hover/link:text-white" />
                </div>
                <span className="text-lg font-serif font-bold text-white/70 group-hover/link:text-white transition-colors uppercase tracking-wider">
                  {BRAND.email}
                </span>
              </a>

              <a
                href="tel:+18447773273"
                className="flex items-center gap-4 group/link cursor-pointer w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-red-600 transition-all duration-500">
                  <Phone size={18} className="text-red-600 group-hover/link:text-white" />
                </div>
                <span className="text-lg font-serif font-bold text-white/70 group-hover/link:text-white transition-colors uppercase tracking-wider">
                  {BRAND.phone}
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 lg:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden">
              {referenceId ? (
                <div className="py-12 text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center mx-auto text-red-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-500 block mb-2">
                      Ticket Logged · {referenceId}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white uppercase tracking-tight">
                      Brief Transmitted
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                    Your inquiry is recorded with {BRAND.name}. Our global engineering or side
                    fabrication lead will reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setReferenceId(null)}
                    className="px-8 py-3 rounded-full border border-white/15 text-xs font-bold uppercase tracking-[0.3em] text-white hover:bg-red-600 hover:border-red-600 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit} noValidate>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/45 block mb-2.5">
                      Select Division
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setDivision('official-tech')}
                        className={`py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                          division === 'official-tech'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white/5 border-white/10 text-white/65 hover:text-white'
                        }`}
                      >
                        Official Tech (Global)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDivision('side-fabrication')}
                        className={`py-3 px-4 rounded-xl border text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                          division === 'side-fabrication'
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white/5 border-white/10 text-white/65 hover:text-white'
                        }`}
                      >
                        Side Work (UV &amp; Signage)
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="YOUR NAME"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-[11px] font-bold tracking-widest focus:outline-none focus:border-red-600 focus:bg-white/10 transition-all placeholder:text-white/25 uppercase"
                    />
                    <input
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="COUNTRY / CITY (OPTIONAL)"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-[11px] font-bold tracking-widest focus:outline-none focus:border-red-600 focus:bg-white/10 transition-all placeholder:text-white/25 uppercase"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-[11px] font-bold tracking-widest focus:outline-none focus:border-red-600 focus:bg-white/10 transition-all placeholder:text-white/25 uppercase"
                  />

                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="PROJECT BRIEF (SOFTWARE, AGENTIC AI, CLOUD, ROBOTICS, OR UV PRINT)..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white text-[11px] font-bold tracking-widest focus:outline-none focus:border-red-600 focus:bg-white/10 transition-all placeholder:text-white/25 uppercase resize-none"
                  />

                  {error && (
                    <p className="text-red-500 text-xs font-bold uppercase tracking-widest">
                      {error}
                    </p>
                  )}

                  <div className="relative inline-block w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 active:scale-95 px-14 py-6 text-xs md:text-sm rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-lg rounded-bl-lg bg-white text-zinc-950 hover:text-white shadow-[0_20px_60px_rgba(255,255,255,0.05)] w-full disabled:opacity-60"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Transmit Brief
                            <ArrowRight
                              size={16}
                              className="group-hover:translate-x-2 transition-transform duration-500 ease-out"
                            />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-red-600" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
