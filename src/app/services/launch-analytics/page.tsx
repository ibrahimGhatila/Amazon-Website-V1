"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import {
  Rocket,
  BarChart2,
  FileText,
  TrendingUp,
  ArrowLeft,
  DollarSign,
  Target,
  Package,
  AlertCircle,
  Search,
  PieChart,
} from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ExploreServices } from "@/components/ui/ExploreServices";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Hero ──────────────────────────────────────────────────────────────────────

function LaunchHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 pb-12 texture-grain overflow-hidden bg-brand-navy"
    >
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(244,205,29,0.12)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(2,39,102,0.8)_0%,transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />

      {/* eX watermark */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute -right-16 sm:-right-24 bottom-0 pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition mb-10"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </motion.div>

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-sm tracking-[0.2em] text-brand-yellow mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
              LAUNCH &amp; ANALYTICS
            </motion.span>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="font-black tracking-tight leading-[0.95] text-white"
            >
              <span className="block text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px]">
                Launch fast.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] text-brand-yellow mt-2">
                Scale on data.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed"
            >
              From product launch strategy to weekly performance reporting — we give
              you the clarity to make confident decisions at every stage.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {["12-week launch", "Weekly reports", "Real-time data"].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="mt-8"
            >
              <Button href="#contact" size="lg" variant="primary" arrow>
                Plan My Launch
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

            {/* Yellow card — top right: WEEK 8 REVENUE */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <p className="font-display text-[10px] tracking-[0.22em] text-brand-navy/60">
                WEEK 8 REVENUE
              </p>
              <Counter
                to={18400}
                prefix="$"
                duration={2.4}
                className="font-black text-brand-navy text-4xl sm:text-5xl tracking-tight mt-2 block"
              />
              <div className="flex items-center gap-1 text-emerald-700 text-xs mt-1">
                <TrendingUp className="h-3 w-3" />
                +340% vs pre-launch
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1 mt-4 h-10">
                {[20, 35, 48, 55, 70, 78, 92].map((h, i) => (
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

            {/* Glass card — middle left: BSR TRACKER */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[28%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-[10px] tracking-[0.2em] text-white/50">
                  BSR TRACKER
                </span>
                <span className="text-brand-yellow text-[10px] font-display tracking-[0.15em]">
                  #1,240 NOW
                </span>
              </div>
              {/* Product info */}
              <p className="font-bold text-white text-sm mt-2">Kitchen &amp; Dining</p>
              <p className="text-white/50 text-xs">USA · Amazon</p>
              {/* BSR milestone rows */}
              {[
                { week: "Week 1", bsr: "#48,200" },
                { week: "Week 2", bsr: "#22,400" },
                { week: "Week 4", bsr: "#8,900" },
                { week: "Week 8", bsr: "#1,240" },
              ].map(({ week, bsr }) => (
                <div
                  key={week}
                  className="flex justify-between py-1 text-xs border-b border-white/[0.08] last:border-0"
                >
                  <span className="text-white/50">{week}</span>
                  <span className="text-brand-yellow font-semibold">{bsr} ↓</span>
                </div>
              ))}
            </motion.div>

            {/* Azure card — bottom right: LAUNCH SPEED */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[5%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <p className="text-white/70 text-xs font-display tracking-[0.2em]">
                LAUNCH SPEED
              </p>
              <p className="font-black text-white text-4xl mt-2">
                {"< 12"} <span className="text-xl">wks</span>
              </p>
              <p className="text-white/60 text-xs mt-1">First product live</p>
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

// ── What's Included ───────────────────────────────────────────────────────────

const deliverables = [
  {
    icon: Target,
    title: "Launch Strategy",
    bullets: [
      "Market sizing & competitor landscape",
      "Positioning & go-to-market roadmap",
      "Pricing & unit economics modelling",
    ],
  },
  {
    icon: Rocket,
    title: "Velocity Campaigns",
    bullets: [
      "Rank-boost PPC strategy",
      "Giveaway sequencing & review funnel",
      "BSR acceleration plan",
    ],
  },
  {
    icon: FileText,
    title: "Weekly Reporting",
    bullets: [
      "P&L dashboard with ad performance",
      "BSR tracking & inventory alerts",
      "Keyword ranking movement",
    ],
  },
  {
    icon: TrendingUp,
    title: "Scale Decisions",
    bullets: [
      "What to cut vs. double down on",
      "Reinvestment roadmap by milestone",
      "Expansion market analysis",
    ],
  },
];

function WhatIsIncluded() {
  return (
    <section className="bg-white py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-sm tracking-[0.2em] mb-4 bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            THE SYSTEM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]"
          >
            A launch engine. And the data to run it.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="rounded-2xl border border-brand-navy/10 p-6 hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-navy text-brand-yellow">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-brand-navy tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-brand-navy/65 leading-snug"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Weekly Report ─────────────────────────────────────────────────────────────

const reportMetrics = [
  {
    icon: DollarSign,
    title: "Revenue & Units",
    detail: "Daily/weekly/monthly comparison",
  },
  {
    icon: BarChart2,
    title: "ACOS / TACOS",
    detail: "Advertising cost of sale breakdown",
  },
  {
    icon: TrendingUp,
    title: "BSR Tracking",
    detail: "Best Seller Rank movement by ASIN",
  },
  {
    icon: Package,
    title: "Inventory Forecast",
    detail: "Days of cover, reorder alerts",
  },
  {
    icon: Search,
    title: "Keyword Rankings",
    detail: "Top 50 tracked keywords with movement",
  },
  {
    icon: PieChart,
    title: "Profit Snapshot",
    detail: "Estimated net margin after fees and ad spend",
  },
];

function WeeklyReport() {
  return (
    <section className="relative bg-brand-navy py-10 sm:py-14 overflow-hidden texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(244,205,29,0.07)_0%,transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-sm tracking-[0.2em] text-brand-yellow mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            WEEKLY REPORT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="font-black tracking-tight text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]"
          >
            You&rsquo;ll never guess what&rsquo;s happening
            <br className="hidden sm:block" /> in your account again.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="mt-3 text-base text-white/60 leading-relaxed max-w-2xl"
          >
            Every week, you receive a clear snapshot of everything that matters
            — no jargon, no noise, just the numbers that drive decisions.
          </motion.p>
        </div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reportMetrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="font-bold text-sm text-white leading-tight">
                    {m.title}
                  </div>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-12">
                  {m.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-6 flex items-start gap-4 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 p-5"
        >
          <AlertCircle className="h-5 w-5 flex-none text-brand-yellow mt-0.5" />
          <p className="text-sm text-white/80 leading-relaxed">
            Reports are delivered every Monday morning. No waiting, no chasing.
            You always know where you stand before the week begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function LaunchCTA() {
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
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.12)_0%,_transparent_60%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-sm tracking-[0.2em] text-brand-yellow mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            GET STARTED
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-balance"
          >
            Know your numbers.{" "}
            <span className="text-brand-yellow">Grow your business.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Book a free strategy session. We&rsquo;ll map your product, your
            market, and what a data-driven launch with us actually looks like.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button href="#" size="lg" variant="primary" arrow>
              Book a Strategy Call
            </Button>
            <Button href="/services" size="lg" variant="ghost">
              View all services
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { k: "Free call", v: "No cost to you" },
              { k: "Data-driven", v: "Evidence-based approach" },
              { k: "No guesswork", v: "Clear roadmap from day 1" },
            ].map((item) => (
              <div key={item.k} className="text-center">
                <div className="font-display text-xl sm:text-2xl text-brand-yellow tracking-tight leading-none">
                  {item.k}
                </div>
                <div className="mt-1 text-xs text-white/50">{item.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Page export ───────────────────────────────────────────────────────────────

export default function LaunchAnalyticsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <LaunchHero />
        <WhatIsIncluded />
        <WeeklyReport />
        <ExploreServices current="launch-analytics" />
        <LaunchCTA />
      </main>
      <Footer />
    </>
  );
}
