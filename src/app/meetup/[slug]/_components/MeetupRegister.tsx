"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Meetup } from "../../_data/meetups";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MeetupRegister({ meetup }: { meetup: Meetup }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="register"
      className="relative bg-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 font-display text-sm tracking-[0.18em] text-brand-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-azure" />
            Reserve your seat
          </span>
          <h2 className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance">
            Save your spot for the {meetup.city}{" "}
            <span className="text-brand-azure">meetup.</span>
          </h2>
          <p className="mt-4 text-brand-navy/70 text-base sm:text-lg">
            Free to attend · Limited seats · We&rsquo;ll email you the venue details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="mt-10 rounded-3xl border border-brand-navy/10 bg-white p-6 sm:p-8 shadow-xl shadow-brand-navy/5"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                <CheckCircle2 className="h-7 w-7" strokeWidth={2.25} />
              </span>
              <h3 className="mt-5 font-black text-brand-navy text-2xl tracking-tight">
                You&rsquo;re on the list.
              </h3>
              <p className="mt-2 text-brand-navy/70 max-w-md">
                We&rsquo;ll send your confirmation and the venue details to your inbox.
                See you in {meetup.city} on {meetup.dateLabel}.
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
                  What are you hoping to learn? <span className="text-brand-navy/40 normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Tell us what you're working on or what you'd like to ask Sunny."
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
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 font-display text-sm tracking-[0.12em] text-brand-navy uppercase font-bold hover:bg-brand-yellow/90 transition-colors"
                >
                  Confirm registration
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
