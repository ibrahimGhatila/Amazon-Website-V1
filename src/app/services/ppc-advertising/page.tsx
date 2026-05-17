"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Megaphone,
  Monitor,
  Globe,
  Video,
  Shield,
} from "lucide-react";
import { ExploreServices } from "@/components/ui/ExploreServices";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────
   Campaign type data
───────────────────────────────────────── */
const campaignTypes = [
  {
    icon: ShoppingCart,
    title: "Sponsored Products",
    bullets: [
      "Keyword targeting & harvesting",
      "Bid management & optimisation",
      "Placement strategy & tuning",
    ],
  },
  {
    icon: Megaphone,
    title: "Sponsored Brands",
    bullets: [
      "Brand awareness campaigns",
      "Custom headline ad creative",
      "Sponsored Brands Video ads",
    ],
  },
  {
    icon: Monitor,
    title: "Sponsored Display",
    bullets: [
      "Retargeting past visitors",
      "Audience-based targeting",
      "Off-Amazon reach & remarketing",
    ],
  },
  {
    icon: Globe,
    title: "DSP Campaigns",
    bullets: [
      "Programmatic display buying",
      "Lookalike audience creation",
      "Full-funnel campaign strategy",
    ],
  },
  {
    icon: Video,
    title: "Video Ads",
    bullets: [
      "Product demo video ads",
      "Lifestyle & brand videos",
      "Streaming TV (OTT) ads",
    ],
  },
  {
    icon: Shield,
    title: "Brand Defence",
    bullets: [
      "Competitor conquesting",
      "Branded keyword protection",
      "ASIN defence campaigns",
    ],
  },
];

/* ─────────────────────────────────────────
   Process steps data
───────────────────────────────────────── */
const processSteps = [
  {
    number: "01",
    title: "Audit & Research",
    description:
      "We analyse your existing campaigns, audit competitor ads, and map out your full keyword universe before touching a single bid.",
  },
  {
    number: "02",
    title: "Structure & Build",
    description:
      "Clean campaign architecture from the ground up — correct match types, tightly themed ad groups, and robust negative lists.",
  },
  {
    number: "03",
    title: "Launch & Optimise",
    description:
      "Daily bid adjustments, continuous search term harvesting, and placement tuning to keep ACoS moving in the right direction.",
  },
  {
    number: "04",
    title: "Scale & Report",
    description:
      "Weekly performance reports, intelligent budget scaling, and ongoing creative testing to compound your results over time.",
  },
];

/* ─────────────────────────────────────────
   Section 1 — Hero
───────────────────────────────────────── */
function PPCHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] flex items-center pt-24 pb-12 texture-grain overflow-hidden bg-brand-navy"
    >
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(244,205,29,0.16),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_45%_at_85%_80%,rgba(54,128,195,0.16),transparent)]"
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      {/* Animated blobs */}
      <div
        aria-hidden
        className="absolute top-1/3 right-[8%] h-80 w-80 rounded-full bg-brand-azure/15 blur-3xl animate-blob -z-10"
      />
      <div
        aria-hidden
        className="absolute bottom-[20%] left-[12%] h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl animate-blob -z-10"
        style={{ animationDelay: "-8s" }}
      />

      {/* eX watermark — bottom-right parallax */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute -right-24 sm:-right-40 bottom-0 -z-10 pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="mb-8"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Services
              </Link>
            </motion.div>

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-5 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              <span className="font-display text-sm tracking-[0.22em] text-brand-yellow">
                PPC &amp; ADVERTISING
              </span>
            </motion.div>

            {/* H1 */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[56px] xl:text-[66px] text-white"
              >
                Turn ad spend into
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
                className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[56px] xl:text-[66px] text-brand-yellow"
              >
                profitable growth.
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed mb-8"
            >
              We build, manage, and scale Amazon advertising campaigns that
              convert — from Sponsored Products to DSP.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.64 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { label: "3.2x avg ROAS" },
                { label: "DSP certified" },
                { label: "Daily optimization" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3"
                >
                  <span className="font-display text-sm text-brand-yellow leading-none">
                    {pill.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.76 }}
            >
              <Button href="#contact" size="lg" variant="primary" arrow>
                Start Advertising
              </Button>
            </motion.div>
          </div>

          {/* Right column: floating card visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative hidden lg:block h-[500px] w-full"
          >
            {/* Orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="h-[380px] w-[380px] rounded-full border border-white/5" />
            </motion.div>

            {/* Yellow card — top right: AVERAGE ROAS */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <p className="font-display text-[10px] tracking-[0.22em] text-brand-navy/60">
                AVERAGE ROAS
              </p>
              <div className="font-black text-brand-navy text-6xl tracking-tight mt-2">
                <Counter to={3.2} duration={2} formatFn={(n) => n.toFixed(1) + "x"} />
              </div>
              <p className="text-xs text-brand-navy/55 mt-2">
                Across all managed accounts
              </p>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1 mt-4 h-10">
                {[55, 70, 65, 80, 72, 88, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.07, ease: EASE }}
                    className="flex-1 rounded-sm bg-brand-navy/25"
                    style={{ minHeight: 2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Glass card — middle left: LIVE CAMPAIGNS */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[28%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-[10px] tracking-[0.2em] text-white/50">
                  LIVE CAMPAIGNS
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] text-emerald-400 font-display tracking-[0.15em]">
                    ACTIVE
                  </span>
                </div>
              </div>
              {/* Campaign rows */}
              {[
                { label: "Sponsored Products", pct: 94 },
                { label: "Sponsored Brands", pct: 78 },
                { label: "DSP / Display", pct: 61 },
              ].map(({ label, pct }, i) => (
                <div key={label} className="mb-3 last:mb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/70">{label}</span>
                    <span className="text-brand-yellow font-semibold text-xs">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: EASE }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-azure"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Azure card — bottom right: AVG ACoS */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[5%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <p className="text-white/70 text-xs font-display tracking-[0.2em]">
                AVG ACoS
              </p>
              <p className="font-black text-white text-4xl mt-2">18%</p>
              <p className="text-white/60 text-xs mt-1">Below category average</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em] z-10"
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

/* ─────────────────────────────────────────
   Section 2 — What We Manage
───────────────────────────────────────── */
function WhatWeManage() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[14px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT WE MANAGE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Every ad type. Every placement.{" "}
            <span className="text-brand-azure">Fully managed.</span>
          </motion.h2>
        </div>

        {/* Campaign cards — 3-col grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {campaignTypes.map((campaign, i) => {
            const Icon = campaign.icon;
            return (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="rounded-2xl border border-brand-navy/10 p-5 hover:border-brand-navy/20 hover:shadow-sm transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-azure mb-4">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <h3 className="font-bold text-brand-navy text-base mb-3 leading-snug">
                  {campaign.title}
                </h3>

                <ul className="space-y-2">
                  {campaign.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-brand-navy/75"
                    >
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 3 — Our Process
───────────────────────────────────────── */
function OurProcess() {
  return (
    <section className="bg-brand-navy/5 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[14px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            HOW WE DO IT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            A data-driven system{" "}
            <span className="text-brand-azure">that scales.</span>
          </motion.h2>
        </div>

        {/* 2×2 process grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="rounded-2xl border border-brand-navy/10 bg-white p-6 hover:border-brand-navy/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Numbered badge */}
              <div className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-3 py-1 mb-4">
                <span className="font-display text-xs tracking-[0.18em] text-brand-navy font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="font-bold text-brand-navy text-lg mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-sm text-brand-navy/75 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 4 — CTA
───────────────────────────────────────── */
function PPCCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative text-white py-14 sm:py-20 overflow-hidden texture-grain"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,205,29,0.14),transparent_60%)]"
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      {/* eX watermark — parallax */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-5 py-2 font-display text-[14px] sm:text-[20px] tracking-[0.06em] text-brand-yellow mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
          GET STARTED
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="font-black tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
        >
          Ready to make your ad spend{" "}
          <span className="text-brand-yellow">work harder?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Book a free 30-min audit. We&rsquo;ll review your current campaigns
          and show you exactly where you&rsquo;re leaving money on the table.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Button href="#" size="lg" variant="primary" arrow>
            Book a Free Audit
          </Button>
          <Button href="/services" size="lg" variant="ghost">
            View all services
          </Button>
        </motion.div>

        {/* Trust micro-row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {["Free audit", "No commitment", "< 48h response"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function PPCAdvertisingPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PPCHero />
        <WhatWeManage />
        <OurProcess />
        <ExploreServices current="ppc-advertising" />
        <PPCCTA />
      </main>
      <Footer />
    </>
  );
}
