"use client";

import { Button } from "@/components/ui/Button";
import { Check, X, Search, Factory, Paintbrush, Rocket, TrendingUp, RefreshCw, Info, Plus } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { PageCTA } from "@/components/sections/PageCTA";

const EASE = [0.16, 1, 0.3, 1] as const;

export function EliteHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate lg:min-h-[100svh] flex items-center bg-brand-navy text-white overflow-hidden texture-grain pt-24 pb-14 lg:pb-10"
    >
      {/* Backgrounds */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(244,205,29,0.18),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(54,128,195,0.15),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-50" />

      {/* Parallax watermark */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[32rem] leading-none text-white/[0.025] tracking-tighter">
          ELITE
        </span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left column — existing content */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-3 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-5 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow">
                ACCEPTING APPLICATIONS · LIMITED SPOTS
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[56px] xl:text-[66px] text-white"
              >
                This is not
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
                className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[56px] xl:text-[66px] text-brand-yellow"
              >
                a course.
              </motion.h1>
            </div>

            {/* Sub-statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 font-light leading-snug text-pretty max-w-3xl"
            >
              It&rsquo;s a <span className="text-white font-semibold">fully-operated Amazon business</span> — researched,
              launched, and scaled by our team. You own the brand.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <Button href="#apply" size="lg" variant="primary" arrow>
                Apply for Elite
              </Button>
              <Button href="#model" size="lg" variant="ghost">
                See the model
              </Button>
            </motion.div>

          </div>

          {/* Right column — floating card visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative hidden lg:block h-[520px] w-full"
          >
            {/* Card 1 — Profit Share (yellow, top-right) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <p className="font-display text-xs tracking-[0.22em] text-brand-navy/60">YOUR PROFIT SHARE</p>
              <p className="font-black text-brand-navy text-6xl tracking-tight mt-3">80%</p>
              {/* Profit bar */}
              <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full">
                <div className="h-full bg-brand-navy/80" style={{ width: "80%" }} />
                <div className="h-full bg-brand-navy/20" style={{ width: "20%" }} />
              </div>
              <p className="text-xs text-brand-navy/55 mt-3">We earn only after you hit ROI</p>
            </motion.div>

            {/* Card 2 — Launch Timeline (glass dark, middle-left) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[28%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-xs tracking-[0.2em] text-white/50">LAUNCH TIMELINE</span>
                <span className="rounded-full bg-brand-yellow/20 px-2 py-0.5 text-xs font-semibold text-brand-yellow">18 MONTHS</span>
              </div>
              {/* Launch rows */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Launch 1</p>
                    <p className="text-white/50 text-xs">Home &amp; Kitchen · USA</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    LIVE
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Launch 2</p>
                    <p className="text-white/40 text-xs">Beauty · USA</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-brand-yellow/20 px-2 py-0.5 text-xs font-semibold text-brand-yellow">
                    <span className="h-1.5 w-1.5 rounded-full border border-brand-yellow" />
                    MONTH 7
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/40 text-sm">Launch 3</p>
                    <p className="text-white/30 text-xs">Sports · CA</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-white/40">
                    <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
                    PLANNED
                  </span>
                </div>
              </div>
              {/* Animated progress bar */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.5, ease: EASE, delay: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-azure"
                />
              </div>
            </motion.div>

            {/* Card 3 — Capital Deployed (azure, bottom-right) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[5%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <p className="text-white/70 text-xs font-display tracking-[0.2em]">CAPITAL DEPLOYED</p>
              <Counter
                to={21}
                prefix="$"
                suffix="K"
                className="font-black text-white text-4xl mt-2 block"
              />
              <p className="text-white/60 text-xs mt-1">Total capital deployed</p>
            </motion.div>

            {/* Decorative orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="h-[380px] w-[380px] rounded-full border border-white/5" />
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em]"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


const forYou = [
  "You have capital to deploy and want it working harder",
  "You want a real business asset, not a side hustle",
  "You understand that real returns take 12–18 months",
  "You value delegation over micromanagement",
];

const notForYou = [
  "You're looking for a course to learn Amazon yourself",
  "You need returns within 90 days to cover living costs",
  "You want full daily control of every decision",
  "You have under $25,000 in deployable capital",
];

export function EliteQualifier() {
  return (
    <section className="relative bg-white py-10 sm:py-14 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            IS THIS FOR YOU?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Honest about who
            <br />
            <span className="text-brand-azure">we&rsquo;re built for.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/75 max-w-2xl mx-auto"
          >
            Every client gets our full team&rsquo;s attention. We only work with people we can win with.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative rounded-3xl bg-brand-navy p-6 sm:p-8 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none">✓</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 mb-5">
                <Check className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={3} />
                <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow">BUILT FOR YOU IF...</span>
              </div>
              <ul className="space-y-3">
                {forYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* NOT FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-brand-navy/10 bg-white p-6 sm:p-8 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-brand-navy/[0.04] pointer-events-none select-none">✗</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 mb-5">
                <X className="h-3.5 w-3.5 text-brand-navy/50" strokeWidth={3} />
                <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy/60">NOT THE RIGHT FIT IF...</span>
              </div>
              <ul className="space-y-3">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-brand-navy/15 text-brand-navy/40">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-brand-navy/75 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bridge line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 text-center text-brand-navy/75 text-lg"
        >
          If the left column describes you —{" "}
          <span className="text-brand-navy font-semibold">keep reading.</span>
        </motion.p>
      </div>
    </section>
  );
}


export function EliteModel() {
  return (
    <section id="model" className="relative bg-brand-navy text-white py-10 sm:py-14 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(54,128,195,0.15),transparent_50%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-azure/15 border border-brand-azure/30 px-5 py-2 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-azure"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            THE MODEL, EXPLAINED
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Capital in. Profit out.
            <br />
            <span className="text-brand-yellow">Everything else — on us.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0 }}
            className="rounded-3xl bg-brand-yellow p-6 sm:p-8 text-brand-navy flex flex-col"
          >
            <div className="font-display text-xs tracking-[0.22em] text-brand-navy/50 mb-3">STEP 01</div>
            <div className="font-black text-2xl tracking-tight leading-tight">You invest</div>
            <div className="mt-3 text-brand-navy/75 text-sm leading-relaxed">
              Bring your capital from $10K per launch. That&apos;s your only requirement.
            </div>
            <div className="mt-auto pt-6 font-display text-4xl font-bold tracking-tight">$10K+</div>
            <div className="text-xs text-brand-navy/55 mt-1">per product launch</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 flex flex-col"
          >
            <div className="font-display text-xs tracking-[0.22em] text-white/40 mb-3">STEP 02</div>
            <div className="font-black text-2xl tracking-tight leading-tight text-white">We build everything</div>
            <div className="mt-4 space-y-2.5">
              {["Product research & validation", "Supplier vetting & sourcing", "Brand, creative & launch", "PPC, scaling & reporting"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-azure flex-none" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="rounded-3xl border border-brand-yellow/25 bg-brand-yellow/10 p-6 sm:p-8 flex flex-col"
          >
            <div className="font-display text-xs tracking-[0.22em] text-brand-yellow/50 mb-3">STEP 03</div>
            <div className="font-black text-2xl tracking-tight leading-tight text-white">You earn 80%</div>
            <div className="mt-3 text-white/70 text-sm leading-relaxed">
              Of every dollar of net profit.
            </div>
            <div className="mt-auto pt-6 font-display text-4xl font-bold tracking-tight text-brand-yellow">80%</div>
            <div className="text-xs text-white/50 mt-1">your profit share</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-8 text-center"
        >
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            <span className="text-brand-yellow font-semibold">Milestone-based:</span> we earn 10% at 50% ROI, the full 20% at 100% ROI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


const milestones = [
  {
    range: "Month 1–3",
    title: "Research & Validation",
    icon: Search,
    color: "brand-yellow",
    timeframe: "Foundation",
    items: [
      "Market opportunity analysis",
      "Competitor landscape deep-dive",
      "Margin modelling & supplier benchmarking",
      "Product 1 shortlisted & validated",
    ],
    launch: null,
  },
  {
    range: "Month 3–6",
    title: "Sourcing & Manufacturing",
    icon: Factory,
    color: "brand-azure",
    timeframe: "Build",
    items: [
      "Supplier vetting & sample ordering",
      "Quality control inspections",
      "Freight planning & fulfilment setup",
      "Inventory to Amazon warehouse",
    ],
    launch: null,
  },
  {
    range: "Month 6–7",
    title: "Creative & Launch Prep",
    icon: Paintbrush,
    color: "brand-yellow",
    timeframe: "Prepare",
    items: [
      "Brand identity & packaging",
      "A+ content & listing copy",
      "Photography & video",
      "PPC campaign architecture",
    ],
    launch: null,
  },
  {
    range: "Month 7+",
    title: "Launch #1 Goes Live",
    icon: Rocket,
    color: "brand-yellow",
    timeframe: "Go live",
    items: [
      "Day-1 launch execution",
      "Review velocity strategy",
      "PPC spend optimisation",
      "Weekly reporting begins",
    ],
    launch: 1,
  },
  {
    range: "Month 12+",
    title: "Launch #2 + Scaling",
    icon: TrendingUp,
    color: "brand-azure",
    timeframe: "Scale",
    items: [
      "Product 2 launches",
      "Winner from L1 scaled aggressively",
      "Reinvestment strategy refined",
      "Portfolio momentum builds",
    ],
    launch: 2,
  },
  {
    range: "Month 17+",
    title: "Launch #3 + Compound",
    icon: RefreshCw,
    color: "brand-yellow",
    timeframe: "Compound",
    items: [
      "Product 3 launches",
      "Multi-product portfolio active",
      "Profit distributions in motion",
      "Exit or reinvest decision point",
    ],
    launch: 3,
  },
];

export function EliteTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            YOUR 18-MONTH ROADMAP
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            You always know
            <br />
            <span className="text-brand-azure">exactly where you are.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/60 max-w-2xl mx-auto"
          >
            Every phase is planned, reported, and accountable. No black boxes. No vague updates.
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] hidden sm:block">
            <div className="absolute inset-0 bg-brand-navy/10 rounded-full" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-yellow via-brand-yellow to-brand-azure rounded-full"
            />
          </div>

          <div className="space-y-16 sm:space-y-24">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-center ${
                    isEven ? "" : "sm:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Range side */}
                  <div className={`flex flex-col ${isEven ? "sm:items-end sm:text-right" : "sm:items-start"}`}>
                    <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-none tracking-tight font-black">
                      {m.range}
                    </span>
                    <span className="mt-3 inline-block font-display text-sm tracking-[0.25em] text-brand-azure">
                      {m.timeframe}
                    </span>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-8 sm:left-1/2 top-4 -translate-x-1/2 z-10 hidden sm:block">
                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 shadow-[0_0_0_8px_rgba(255,255,255,1),0_0_30px_rgba(244,205,29,0.15)] ${
                      m.color === "brand-yellow" ? "border-brand-yellow" : "border-brand-azure"
                    }`}>
                      <Icon className={`h-6 w-6 ${m.color === "brand-yellow" ? "text-brand-yellow" : "text-brand-azure"}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content card side */}
                  <div>
                    <div className="group relative rounded-3xl border border-brand-navy/10 bg-brand-navy/[0.02] p-6 sm:p-8 hover:border-brand-yellow/40 hover:bg-brand-yellow/[0.02] transition-all duration-500">
                      <div className="sm:hidden mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10">
                        <Icon className={`h-5 w-5 ${m.color === "brand-yellow" ? "text-brand-yellow" : "text-brand-azure"}`} />
                      </div>
                      <h3 className="font-black text-2xl sm:text-3xl tracking-tight text-brand-navy flex flex-wrap items-center gap-3">
                        {m.title}
                        {m.launch && (
                          <span className="inline-flex items-center rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-navy">
                            Launch #{m.launch}
                          </span>
                        )}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {m.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-brand-navy/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="absolute -right-1 -top-1 h-8 w-8 rounded-tr-3xl border-t-2 border-r-2 border-brand-yellow/0 group-hover:border-brand-yellow transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative mt-14 flex flex-col items-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-brand-yellow shadow-2xl shadow-brand-yellow/20">
              <span className="font-display text-brand-yellow text-sm tracking-widest">18M</span>
            </div>
            <p className="mt-4 font-bold text-brand-navy text-center">
              Portfolio built. Profit in motion.
            </p>
            <p className="text-sm text-brand-navy/50 text-center mt-1">
              Reinvest, exit, or extend — your call.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


const scenarios = [
  {
    label: "Conservative",
    tag: "50% avg ROI",
    capital: 30,
    revenue: 45,
    gross: 15,
    yourShare: 12,
    color: "bg-white border-brand-navy/10",
    textColor: "text-brand-navy",
    subColor: "text-brand-navy/60",
    tagColor: "bg-brand-navy/5 text-brand-navy/60",
    numColor: "text-brand-navy",
  },
  {
    label: "Base Case",
    tag: "150% avg ROI",
    capital: 30,
    revenue: 75,
    gross: 45,
    yourShare: 36,
    color: "bg-brand-navy",
    textColor: "text-white",
    subColor: "text-white/60",
    tagColor: "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30",
    numColor: "text-brand-yellow",
    featured: true,
  },
  {
    label: "Strong",
    tag: "250% avg ROI",
    capital: 30,
    revenue: 105,
    gross: 75,
    yourShare: 60,
    color: "bg-white border-brand-navy/10",
    textColor: "text-brand-navy",
    subColor: "text-brand-navy/60",
    tagColor: "bg-brand-azure/10 text-brand-azure",
    numColor: "text-brand-navy",
  },
];

export function EliteMath() {
  return (
    <section className="relative bg-white py-10 sm:py-14 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-navy opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            THE NUMBERS, HONESTLY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            What $30K deployed
            <br />
            <span className="text-brand-azure">can realistically look like.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/75 max-w-2xl mx-auto"
          >
            Three scenarios modelled from real launch data.
          </motion.p>
        </div>

        {/* Capital deployed callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex items-center justify-center gap-6 flex-wrap"
        >
          {[
            { label: "Launches", value: "3" },
            { label: "Capital per launch", value: "$10K" },
            { label: "Total deployed", value: "$30K" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-center">
                <div className="font-display text-3xl text-brand-navy leading-none">{item.value}</div>
                <div className="text-xs text-brand-navy/50 mt-1">{item.label}</div>
              </div>
              {i < 2 && <span className="text-brand-navy/20 text-2xl hidden sm:block">×</span>}
            </div>
          ))}
        </motion.div>

        {/* Scenario cards */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-4 lg:gap-6">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className={`relative rounded-3xl border p-5 sm:p-6 ${s.color} ${s.featured ? "shadow-2xl shadow-brand-navy/20 scale-[1.02] z-10" : ""}`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold text-brand-navy whitespace-nowrap">
                  Most likely outcome
                </div>
              )}

              {/* Label */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className={`font-black text-xl ${s.textColor}`}>{s.label}</div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${s.tagColor}`}>
                  {s.tag}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {[
                  { label: "Capital deployed", value: s.capital, prefix: "$", suffix: "K", note: "" },
                  { label: "Total revenue", value: s.revenue, prefix: "$", suffix: "K", note: "" },
                  { label: "Gross profit", value: s.gross, prefix: "$", suffix: "K", note: "" },
                  { label: "Your share (80%)", value: s.yourShare, prefix: "$", suffix: "K", note: "highlight" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className={`flex items-center justify-between py-2.5 border-b last:border-0 ${
                      s.featured ? "border-white/10" : "border-brand-navy/8"
                    } ${metric.note === "highlight" ? "pt-4 mt-2" : ""}`}
                  >
                    <span className={`text-sm ${s.subColor}`}>{metric.label}</span>
                    <span className={`font-display text-2xl leading-none ${
                      metric.note === "highlight" ? s.numColor : s.textColor
                    } ${metric.note === "highlight" ? "text-3xl" : ""}`}>
                      <Counter to={metric.value} prefix={metric.prefix} suffix={metric.suffix} duration={1.8} formatFn={(n) => n.toString()} />
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-8 flex items-start gap-2 max-w-2xl mx-auto text-center justify-center"
        >
          <Info className="h-4 w-4 text-brand-navy/30 mt-0.5 flex-none" />
          <p className="text-xs text-brand-navy/40 leading-relaxed text-pretty">
            Illustrative projections from portfolio data. Past results don&rsquo;t guarantee future returns.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


const launches = [
  {
    id: "L-084",
    category: "Premium Skincare",
    marketplace: "Amazon USA",
    launched: "Q2 2024",
    timeToProfit: "11 weeks",
    roi: 218,
    revenue: "$284K",
    status: "Scaling",
    accent: "navy",
  },
  {
    id: "L-091",
    category: "Home Organisation",
    marketplace: "Amazon UK",
    launched: "Q3 2024",
    timeToProfit: "9 weeks",
    roi: 174,
    revenue: "$143K",
    status: "Scaling",
    accent: "yellow",
  },
  {
    id: "L-078",
    category: "Sports & Outdoors",
    marketplace: "Amazon USA",
    launched: "Q1 2024",
    timeToProfit: "14 weeks",
    roi: 132,
    revenue: "$198K",
    status: "Profitable",
    accent: "azure",
  },
  {
    id: "L-103",
    category: "Pet Accessories",
    marketplace: "Amazon Canada",
    launched: "Q4 2024",
    timeToProfit: "8 weeks",
    roi: 291,
    revenue: "$97K",
    status: "Scaling",
    accent: "navy",
  },
];

const accentStyles = {
  navy: { card: "bg-brand-navy", text: "text-white", sub: "text-white/60", tag: "bg-brand-yellow text-brand-navy", num: "text-brand-yellow" },
  yellow: { card: "bg-brand-yellow", text: "text-brand-navy", sub: "text-brand-navy/60", tag: "bg-brand-navy text-brand-yellow", num: "text-brand-navy" },
  azure: { card: "bg-brand-azure", text: "text-white", sub: "text-white/60", tag: "bg-white/20 text-white border border-white/30", num: "text-white" },
};

export function EliteLaunches() {
  return (
    <section className="relative bg-brand-navy text-white py-10 sm:py-14 overflow-hidden texture-grain">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(54,128,195,0.12),transparent_50%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-azure/15 border border-brand-azure/30 px-5 py-2 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-azure"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            FROM THE LAUNCH ARCHIVE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Real launches.
            <br />
            <span className="text-brand-yellow">Real data.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-white/60 max-w-2xl mx-auto"
          >
            Anonymised snapshots from our portfolio. No embellishment.
          </motion.p>
        </div>

        {/* Launch cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {launches.map((launch, i) => {
            const style = accentStyles[launch.accent as keyof typeof accentStyles];
            return (
              <motion.div
                key={launch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden ${style.card}`}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`rounded-full px-3 py-1 font-display text-xs tracking-[0.15em] ${style.tag}`}>
                      {launch.status}
                    </span>
                    <span className={`font-display text-xs tracking-widest ${style.sub}`}>
                      {launch.id}
                    </span>
                  </div>

                  <h3 className={`font-black text-xl leading-tight ${style.text}`}>
                    {launch.category}
                  </h3>
                  <div className={`text-sm mt-1 ${style.sub}`}>{launch.marketplace}</div>
                </div>

                {/* Divider */}
                <div className={`mx-6 h-[1px] ${launch.accent === "yellow" ? "bg-brand-navy/10" : "bg-white/10"}`} />

                {/* Metrics */}
                <div className="p-6 pt-4 space-y-3">
                  {[
                    { label: "Launched", value: launch.launched },
                    { label: "Time to profit", value: launch.timeToProfit },
                    { label: "Total revenue", value: launch.revenue },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <span className={`text-xs ${style.sub}`}>{metric.label}</span>
                      <span className={`text-sm font-semibold ${style.text}`}>{metric.value}</span>
                    </div>
                  ))}

                  {/* ROI big number */}
                  <div className={`mt-4 pt-4 border-t ${launch.accent === "yellow" ? "border-brand-navy/10" : "border-white/10"}`}>
                    <div className={`text-xs mb-1 ${style.sub}`}>ROI achieved</div>
                    <div className="flex items-end gap-2">
                      <div className={`font-display text-5xl leading-none ${style.num}`}>
                        <Counter to={launch.roi} suffix="%" duration={2} />
                      </div>
                      <TrendingUp className={`h-5 w-5 mb-1 ${style.num} opacity-70`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 text-center text-white/30 text-sm"
        >
          Product names and client details withheld for confidentiality. Data verified internally.
        </motion.p>
      </div>
    </section>
  );
}


const faqs = [
  {
    q: "How much capital do I actually need beyond the $10K per launch?",
    a: "The $10K covers sourcing, creation, and launch — you'll also need $5–12K for inventory depending on category and MOQ. We walk you through the full capital plan on your onboarding call.",
  },
  {
    q: "Who owns the Amazon account and the brand?",
    a: "You do, entirely — the Seller Central account, brand registration, and all IP are in your name. We operate inside your account as an authorised team.",
  },
  {
    q: "What happens if a launch fails?",
    a: "Three launches means no single bet sinks the model — underperformers are retired within 60–90 days and budget redirected to what's working. Diversification is built into the programme by design.",
  },
  {
    q: "When do I start seeing returns?",
    a: "First profitability typically arrives around week 9–14 post-launch — month 8–10 from your start date once sourcing is factored in. Anyone promising 30-day results isn't being honest.",
  },
  {
    q: "How is the 80/20 split tracked and distributed?",
    a: "You receive a monthly P&L showing revenue, fees, ad spend, and net profit — your 80% is transferred monthly once profitable. Split milestones and timings are documented in your agreement.",
  },
  {
    q: "Can I be involved in product decisions?",
    a: "Yes — you approve product selection, brand direction, and major creative decisions at every stage. Day-to-day operations are entirely on us.",
  },
  {
    q: "What happens after the 18 months?",
    a: "You own a revenue-generating portfolio with three options: continue under our management, take over with your own team, or sell — FBA businesses typically trade at 3–5× annual net profit.",
  },
];

export function EliteFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            ELITE PROGRAM FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            The questions investors
            <br />
            <span className="text-brand-azure">actually ask.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-brand-navy/8 border-y border-brand-navy/8">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 sm:py-7 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow pt-1 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-brand-navy tracking-tight group-hover:text-brand-azure transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen
                      ? "bg-brand-navy border-brand-navy text-brand-yellow rotate-[135deg]"
                      : "bg-white border-brand-navy/15 text-brand-navy group-hover:border-brand-navy/30"
                  }`}>
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-9 sm:pl-11 pr-14 text-brand-navy/75 text-[15px] sm:text-base leading-relaxed text-pretty">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export function EliteCTA() {
  return (
    <PageCTA
      id="apply"
      eyebrow="APPLICATIONS OPEN NOW"
      heading={
        <>
          Ready to stop{" "}
          <span className="text-brand-yellow">wondering</span> and start?
        </>
      }
      primaryLabel="Book Your Discovery Call"
      primaryHref="#"
      secondaryLabel="Still have questions?"
      secondaryHref="/#faq"
    />
  );
}


export default function ElitePage() {
  return (
    <>
      <Nav />
      <main>
        <EliteHero />
        <EliteQualifier />
        <EliteModel />
        <EliteTimeline />
        <EliteMath />
        <EliteLaunches />
        <EliteFAQ />
        <EliteCTA />
      </main>
      <Footer />
    </>
  );
}