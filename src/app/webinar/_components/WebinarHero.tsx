"use client";

import { motion } from "motion/react";
import { Star, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WebinarCountdown } from "./WebinarCountdown";
import { WEBINAR, LEARN_POINTS } from "./event";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WebinarHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(54,128,195,0.25),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-25" />

      {/* First view — title + video side by side */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 min-h-[100svh] flex flex-col pt-24 pb-10">
        {/* Attention bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 px-5 py-3 text-center"
        >
          <p className="text-xs sm:text-sm text-brand-yellow-light leading-snug">
            <span className="font-bold text-brand-yellow">Attention!</span> This
            webinar includes Amazon Private Label frameworks worth{" "}
            <span className="font-bold text-brand-yellow">$500+</span> — for a
            limited time, access it completely{" "}
            <span className="font-bold text-brand-yellow">FREE</span>.
          </p>
        </motion.div>

        <div className="flex-1 grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-center py-8">
          {/* Left — title + CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm px-4 py-1.5 mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span className="font-display text-xs sm:text-sm tracking-[0.16em] text-white/85 uppercase">
                Free Live Webinar · For Serious Investors Only
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-black tracking-tight leading-[0.98] text-[34px] sm:text-5xl lg:text-[58px]"
            >
              <span className="block text-white">Build an Amazon Brand That</span>
              <span className="block text-brand-yellow">
                Generates Consistent Monthly Income.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
              className="mt-5 text-white/70 text-base sm:text-lg leading-snug max-w-xl"
            >
              A free live masterclass with{" "}
              <span className="font-semibold text-white">Sunny Ali</span> — the exact
              roadmap to build, launch, and scale a profitable Amazon Private Label
              brand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="mt-7 flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <Button href="#register" size="lg" variant="primary" arrow>
                Register Free
              </Button>
              <div>
                <p className="font-display text-[10px] tracking-[0.22em] text-white/55 uppercase mb-1.5">
                  Starts in
                </p>
                <WebinarCountdown targetISO={WEBINAR.dateISO} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="mt-7 flex items-center gap-3"
            >
              <div className="flex gap-0.5 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-yellow" strokeWidth={0} />
                ))}
              </div>
              <p className="text-white/75 text-sm">
                <span className="font-bold text-white">400+ entrepreneurs</span>{" "}
                attended the previous webinar
              </p>
            </motion.div>
          </div>

          {/* Right — video */}
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
            <p className="mt-4 text-center font-display text-xs tracking-[0.18em] text-white/55 uppercase">
              {WEBINAR.dateLabel} · {WEBINAR.time} · {WEBINAR.timezone}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Below the fold — what you'll learn */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-2 text-white/60 mb-6"
        >
          <Play className="h-4 w-4 text-brand-yellow" />
          <h2 className="font-display text-base tracking-[0.16em] text-white uppercase">
            What you&rsquo;ll learn in the webinar
          </h2>
        </motion.div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {LEARN_POINTS.map((point, i) => (
            <motion.li
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
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
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
