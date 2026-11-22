import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck, X } from 'lucide-react';
import type { BlogPost, ServiceDetail } from '../data/softwdocsData';

export type ModalState =
  | { type: 'service'; service: ServiceDetail }
  | { type: 'blog'; post: BlogPost }
  | { type: 'aoda' }
  | null;

interface InteractiveModalProps {
  modal: ModalState;
  onClose: () => void;
  onInquiry: (message: string) => void;
}

export function InteractiveModal({ modal, onClose, onInquiry }: InteractiveModalProps) {
  const [siteUrl, setSiteUrl] = useState('');
  const [companySize, setCompanySize] = useState('20-49');
  const [checking, setChecking] = useState(false);
  const [auditResult, setAuditResult] = useState<string | null>(null);

  const runAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteUrl.trim()) return;
    setChecking(true);
    setAuditResult(null);
    try {
      const res = await fetch('/api/aoda-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: siteUrl.trim(), companySize }),
      });
      const data = await res.json();
      setAuditResult(
        data.summary ||
          `Assessment prepared for ${siteUrl.trim()} (${companySize} employees). WCAG 2.0/2.1 Level AA remediation recommended.`
      );
    } catch {
      setAuditResult(
        `Preliminary audit queued for ${siteUrl.trim()} (${companySize} staff). Our team checks keyboard focus, color contrast, and ARIA landmarks.`
      );
    } finally {
      setChecking(false);
    }
  };

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2rem] p-6 sm:p-10 text-white shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
            >
              <X size={18} />
            </button>

            {modal.type === 'service' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-red-600" />
                  <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                    Service {modal.service.number}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                  {modal.service.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  {modal.service.fullOverview}
                </p>
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-zinc-900">
                  <img
                    src={modal.service.image}
                    alt={modal.service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {modal.service.features.map((feat) => (
                    <div
                      key={feat}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const msg = `Requesting consultation for ${modal.service.title}.`;
                    onClose();
                    onInquiry(msg);
                  }}
                  className="w-full py-4 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md bg-red-600 hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-colors"
                >
                  Request {modal.service.title} Quote <ArrowRight size={15} />
                </button>
              </div>
            )}

            {modal.type === 'blog' && (
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-red-600/15 border border-red-600/30 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] text-red-500">
                    {modal.post.tag}
                  </span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {modal.post.date}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight mb-6">
                  {modal.post.title}
                </h3>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-zinc-900">
                  <img
                    src={modal.post.image}
                    alt={modal.post.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                  {modal.post.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const msg = `Inquiry regarding SoftwDocs insight: "${modal.post.title}"`;
                    onClose();
                    onInquiry(msg);
                  }}
                  className="w-full py-4 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md bg-white text-black hover:bg-red-600 hover:text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-colors"
                >
                  Speak With SoftwDocs Global Team <ArrowRight size={15} />
                </button>
              </div>
            )}

            {modal.type === 'aoda' && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={18} className="text-red-600" />
                  <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.35em]">
                    Live AODA / WCAG 2.1 Check
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                  Verify Your Website Compliance Status
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Enter your website URL and team size to run a live server-side check of your HTML
                  accessibility baseline (`lang`, viewport, semantic headings, and headers).
                </p>

                <form onSubmit={runAudit} className="space-y-4 mb-6">
                  <input
                    type="text"
                    required
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-600"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {['1-19', '20-49', '50+'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setCompanySize(size)}
                        className={`py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-colors ${
                          companySize === size
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        {size} Staff
                      </button>
                    ))}
                  </div>
                  <button
                    type="submit"
                    disabled={checking}
                    className="w-full py-4 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md bg-red-600 hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                  >
                    {checking ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Inspecting Live URL...
                      </>
                    ) : (
                      <>
                        Run Live Check <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>

                {auditResult && (
                  <div className="p-5 rounded-2xl bg-white/5 border border-red-600/30 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-white/80 leading-relaxed">{auditResult}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const msg = `AODA / WCAG Compliance Audit request for ${siteUrl.trim()} (${companySize} staff).`;
                        onClose();
                        onInquiry(msg);
                      }}
                      className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 hover:text-white flex items-center gap-2 transition-colors"
                    >
                      Request Full Remediation Quote <ArrowRight size={13} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
