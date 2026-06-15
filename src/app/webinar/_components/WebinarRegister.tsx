"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WebinarCountdown } from "./WebinarCountdown";
import { WEBINAR } from "./event";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WebinarRegister() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="register"
      className="relative bg-brand-navy text-white py-20 sm:py-24 overflow-hidden texture-grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(54,128,195,0.22),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-25" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/15 px-4 py-1.5 font-display text-sm tracking-[0.18em] text-white/85 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Reserve your seat
          </span>
          <h2 className="mt-5 font-black tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance">
            Save your spot for the{" "}
            <span className="text-brand-yellow">free live webinar.</span>
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            {WEBINAR.dateLabel} · {WEBINAR.time} · {WEBINAR.timezone}
          </p>

          <div className="mt-6 flex justify-center">
            <WebinarCountdown targetISO={WEBINAR.dateISO} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white p-6 sm:p-8 shadow-2xl shadow-black/30 text-brand-navy"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                <CheckCircle2 className="h-7 w-7" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 font-black text-brand-navy text-2xl tracking-tight">
                You&rsquo;re registered.
              </h3>
              <p className="mt-2 text-brand-navy/70 max-w-md">
                We&rsquo;ll email your access link and a reminder before we go live
                on {WEBINAR.dateLabel}. See you there.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block font-display text-xs tracking-[0.18em] text-brand-navy/65 uppercase mb-2">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="e.g. Sara Khan"
                  className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/15 outline-none transition"
                />
              </div>
              <div>
                <label className="block font-display text-xs tracking-[0.18em] text-brand-navy/65 uppercase mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/15 outline-none transition"
                />
              </div>
              <div>
                <label className="block font-display text-xs tracking-[0.18em] text-brand-navy/65 uppercase mb-2">
                  WhatsApp
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="+60 ..."
                  className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/15 outline-none transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block font-display text-xs tracking-[0.18em] text-brand-navy/65 uppercase mb-2">
                  What are you hoping to learn?{" "}
                  <span className="text-brand-navy/40 normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Tell us what you're working on or what you'd like Sunny to cover."
                  className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/15 outline-none transition resize-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-brand-navy/55 max-w-sm">
                  By registering, you agree to receive event updates from Extreme
                  Commerce. We&rsquo;ll never share your details.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 font-display text-sm tracking-[0.12em] text-brand-navy uppercase font-bold hover:bg-brand-yellow-light transition-colors"
                >
                  Register Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
