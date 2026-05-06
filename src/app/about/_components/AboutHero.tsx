"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88svh] flex items-center bg-brand-navy text-white overflow-hidden texture-grain pt-28 pb-16"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(244,205,29,0.18),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(54,128,195,0.15),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[28rem] sm:text-[36rem] leading-none text-white/[0.025] tracking-tighter">
          eX
        </span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            ABOUT EXTREME COMMERCE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-5 font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] text-balance"
          >
            We build{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-yellow">profitable</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
                className="absolute left-0 -bottom-1 h-1.5 w-full bg-brand-yellow/25 origin-left rounded-full -z-10"
              />
            </span>{" "}
            Amazon brands — at scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed text-pretty"
          >
            A decade of operator-led launches, capital deployed into real
            inventory, and a 1M+ community that powers the largest
            e-commerce ecosystem of its kind out of South Asia.
          </motion.p>

          {/* Above-the-fold pull-stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
            className="mt-10 inline-flex items-end gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 py-5"
          >
            <div>
              <div className="font-display text-5xl sm:text-6xl text-brand-yellow leading-none tracking-tight">
                $<Counter to={420} />M+
              </div>
              <div className="mt-2 text-xs text-white/50 tracking-wider uppercase">
                Seller GMV powered
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="hidden sm:block">
              <div className="font-display text-3xl text-white leading-none tracking-tight">
                <Counter to={32} /> countries
              </div>
              <div className="mt-2 text-xs text-white/50 tracking-wider uppercase">
                Sellers served
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em]">
        <span>SCROLL</span>
        <span className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
