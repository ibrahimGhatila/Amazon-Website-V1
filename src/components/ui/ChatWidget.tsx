"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, Send, ArrowRight, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── CONFIG ────────────────────────────────────────────────────────────────────
// Swap these two values to point the widget at your real channels.
const WHATSAPP_NUMBER = "+923000000000"; // include country code, no spaces
const CONTACT_EMAIL = "hello@extremecommerce.com";

const WHATSAPP_PREFILL =
  "Hi Extreme Commerce, I'd like to learn more about your services.";

// Pages where we don't want the widget to appear
const HIDE_ON_PATHS = ["/apply"];

type View = "menu" | "form";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const pathname = usePathname();

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reset to menu view when closing
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setView("menu"), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (HIDE_ON_PATHS.includes(pathname)) return null;

  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      {/* Floating bubble */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 1.2 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-navy shadow-2xl shadow-brand-yellow/40 hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-navy opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-navy" />
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed bottom-24 right-5 sm:right-6 z-[60] w-[calc(100vw-2.5rem)] sm:w-[440px] origin-bottom-right"
          >
            <div className="rounded-3xl bg-gradient-to-b from-brand-navy via-[#011a45] to-brand-navy-800 backdrop-blur-xl border border-white/10 shadow-2xl shadow-brand-navy/40 overflow-hidden">

              {/* Header */}
              <div className="relative px-6 pt-6 pb-5">
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_85%_0%,rgba(244,205,29,0.14),transparent)]" />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-bold text-sm">
                      EX
                      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-brand-navy" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm leading-tight">Extreme Commerce</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <AnimatePresence mode="wait" initial={false}>
                {view === "menu" ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-5"
                  >
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      Hey there 👋 How would you like to reach us?
                    </p>

                    {/* WhatsApp */}
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-400/40 p-3.5 transition-all duration-200 mb-2"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-200">
                        <WhatsAppIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm leading-tight">Chat on WhatsApp</div>
                        <div className="text-white/55 text-xs mt-0.5">Fastest reply — usually under an hour</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </a>

                    {/* Email/Form */}
                    <button
                      onClick={() => setView("form")}
                      className="group w-full flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-yellow/40 p-3.5 transition-all duration-200 text-left"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-200">
                        <Send className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm leading-tight">Send us a message</div>
                        <div className="text-white/55 text-xs mt-0.5">We'll reply by email within 24h</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </button>

                    {/* Footer link */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white/40 text-[11px]">
                        <Clock className="h-3 w-3" />
                        Mon–Fri, 9am–6pm GMT
                      </div>
                      <Link
                        href="/apply"
                        onClick={() => setOpen(false)}
                        className="text-brand-yellow text-xs font-semibold hover:text-white transition-colors flex items-center gap-1"
                      >
                        Apply for Elite
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="p-5"
                  >
                    <button
                      onClick={() => setView("menu")}
                      className="text-white/50 hover:text-white text-xs font-medium mb-3 inline-flex items-center gap-1 transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 rotate-180" />
                      Back
                    </button>
                    <form onSubmit={handleEmailSubmit} className="space-y-2.5">
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-brand-yellow/50 transition"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-brand-yellow/50 transition"
                      />
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we help?"
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-brand-yellow/50 transition resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-yellow text-brand-navy font-bold text-sm py-3 hover:bg-amber-400 transition-colors"
                      >
                        Send message
                        <Send className="h-3.5 w-3.5" />
                      </button>
                      <p className="text-white/40 text-[10px] text-center pt-1">
                        Opens your email client to send to {CONTACT_EMAIL}
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
