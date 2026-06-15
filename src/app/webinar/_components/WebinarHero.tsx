"use client";

import { motion } from "motion/react";
import { Star, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WebinarCountdown } from "./WebinarCountdown";
import { WEBINAR, LEARN_POINTS } from "./event";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WebinarHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white pt-28 pb-16 texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(54,128,195,0.25),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-25" />

      {/* Attention bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 px-5 py-3.5 text-center">
          <p className="text-sm sm:text-[15px] text-brand-yellow-light leading-snug">
            <span className="font-bold text-brand-yellow">Attention!</span> This
            webinar includes Amazon Private Label strategies and frameworks worth{" "}
            <span className="font-bold text-brand-yellow">$500+</span> — for a
            limited time, access it completely{" "}
            <span className="font-bold text-brand-yellow">FREE</span>.
          </p>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm px-4 py-1.5 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
          <span className="font-display text-sm sm:text-[15px] tracking-[0.16em] text-white/85 uppercase">
            Free Live Webinar · For Serious Investors Only
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="font-black tracking-tight leading-[0.98] text-[34px] sm:text-5xl lg:text-[64px] max-w-4xl"
        >
          <span className="block text-white">Build an Amazon Brand That</span>
          <span className="block text-brand-yellow">
            Generates Consistent Monthly Income.
          </span>
        </motion.h1>

        <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left — video + social proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] border-4 border-white/15 shadow-2xl shadow-black/40 bg-brand-navy-700">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${WEBINAR.youtubeId}`}
                title="Build a Profitable Amazon Brand — Free Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex gap-0.5 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-yellow" strokeWidth={0} />
                ))}
              </div>
              <p className="text-white/80 text-sm sm:text-base">
                <span className="font-bold text-white">400+ entrepreneurs</span>{" "}
                attended the previous webinar
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-5">
              <p className="font-display text-sm tracking-[0.16em] text-brand-yellow uppercase">
                Live Session · June 17 · Limited Seats
              </p>
              <p className="mt-3 text-white/70 text-sm sm:text-[15px] leading-relaxed">
                Led by <span className="font-semibold text-white">Sunny Ali</span>,
                founder of Extreme Commerce, known for building and scaling Amazon
                Private Label brands. With{" "}
                <span className="font-semibold text-white">18+ years</span> in the
                Amazon ecosystem, he has helped thousands turn their capital into
                structured, profitable ecommerce businesses.
              </p>
            </div>
          </motion.div>

          {/* Right — what you'll learn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          >
            <div className="flex items-center gap-2 text-white/60 mb-5">
              <Play className="h-4 w-4 text-brand-yellow" />
              <h2 className="font-display text-base tracking-[0.16em] text-white uppercase">
                What you&rsquo;ll learn in the webinar
              </h2>
            </div>

            <ul className="space-y-3">
              {LEARN_POINTS.map((point) => (
                <li
                  key={point.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-bold text-white text-[15px] leading-tight">
                      {point.title}
                    </p>
                    <p className="mt-1 text-white/60 text-sm leading-snug">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-display text-xs tracking-[0.22em] text-white/55 uppercase">
                    Starts in
                  </p>
                  <div className="mt-2">
                    <WebinarCountdown targetISO={WEBINAR.dateISO} />
                  </div>
                </div>
                <Button href="#register" size="lg" variant="primary" arrow>
                  Register Free
                </Button>
              </div>
              <p className="mt-4 text-white/55 text-xs">
                {WEBINAR.dateLabel} · {WEBINAR.time} · {WEBINAR.timezone}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
