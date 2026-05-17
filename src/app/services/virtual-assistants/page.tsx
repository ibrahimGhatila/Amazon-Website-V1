"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import {
  Settings,
  TrendingUp,
  FileText,
  MessageSquare,
  Package,
  BarChart3,
  Check,
  ArrowLeft,
} from "lucide-react";
import { ExploreServices } from "@/components/ui/ExploreServices";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Section 1: Hero ────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative isolate bg-brand-navy min-h-[100svh] flex items-center pt-24 pb-12 texture-grain overflow-hidden">
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(244,205,29,0.16),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(54,128,195,0.14),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      {/* eX watermark */}
      <div
        aria-hidden
        className="absolute -right-10 bottom-0 pointer-events-none select-none -z-10"
      >
        <span className="font-display text-[22rem] sm:text-[34rem] leading-none text-white/[0.03] tracking-tighter">
          eX
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
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

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
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
                HIRE TALENT
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
                Expert Amazon VAs.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
                className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[56px] xl:text-[66px] text-brand-yellow"
              >
                Ready to deploy.
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.52 }}
              className="text-base sm:text-lg text-white/65 max-w-2xl leading-relaxed mb-8"
            >
              Full-time or part-time. Trained on real Amazon operations. Placed
              inside your existing setup within days.
            </motion.p>

            {/* Stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.64 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { top: "Full-time", bottom: "or Part-time" },
                { top: "Trained", bottom: "Amazon specialists" },
                { top: "< 7 days", bottom: "Placement time" },
              ].map((stat) => (
                <div
                  key={stat.top}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3.5 min-w-[140px]"
                >
                  <div className="font-display text-xl text-brand-yellow leading-none">
                    {stat.top}
                  </div>
                  <div className="text-sm text-white/55 mt-1.5 font-medium">
                    {stat.bottom}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.76 }}
            >
              <Button href="#apply" size="lg" variant="primary" arrow>
                Apply for a VA
              </Button>
            </motion.div>
          </div>

          {/* Right column — floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative hidden lg:block h-[500px] w-full"
          >
            {/* Yellow card — top right: Placement Time */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <p className="font-display text-[10px] tracking-[0.22em] text-brand-navy/60">
                PLACEMENT TIME
              </p>
              <p className="font-black text-brand-navy text-6xl tracking-tight mt-2 leading-none">
                7<span className="text-2xl"> days</span>
              </p>
              <p className="text-xs text-brand-navy/55 mt-2">
                From briefing to your VA going live
              </p>
              <div className="flex items-center gap-1.5 mt-4">
                {["Brief", "Match", "Onboard", "Live"].map((label, i) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-navy/50 flex-none" />
                    <span className="text-[9px] text-brand-navy/60 font-medium">
                      {label}
                    </span>
                    {i < 3 && (
                      <span className="text-[9px] text-brand-navy/35">→</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Glass card — middle left: VA Skill Set */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[28%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-[10px] tracking-[0.2em] text-white/50">
                  VA SKILL SET
                </span>
                <span className="text-brand-yellow font-display text-[10px]">
                  TRAINED
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Account Mgmt",
                  "PPC Campaigns",
                  "Inventory Ops",
                  "Listings",
                  "Customer Service",
                  "Reporting",
                  "Sourcing",
                  "Brand Reg",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-white/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs text-white/45 mt-3">
                8 core Amazon disciplines
              </p>
            </motion.div>

            {/* Azure card — bottom right: VAs Placed */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-0 right-[5%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <p className="text-white/70 text-xs font-display tracking-[0.2em]">
                VAs PLACED
              </p>
              <Counter
                to={47}
                duration={2}
                className="font-black text-white text-4xl mt-2 block"
              />
              <p className="text-white/60 text-xs mt-1">Across 12 countries</p>
            </motion.div>
          </motion.div>
        </div>
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
    </section>
  );
}

// ─── Section 2: What They Handle ────────────────────────────────────────────

const taskCategories = [
  {
    icon: Settings,
    title: "Account Management",
    bullets: [
      "Seller Central daily management",
      "Case management & escalations",
      "Policy compliance monitoring",
      "Account health maintenance",
    ],
  },
  {
    icon: TrendingUp,
    title: "PPC Oversight",
    bullets: [
      "Campaign monitoring & optimisation",
      "Bid adjustments across ad types",
      "Keyword harvesting & negation",
      "ACoS & TACoS reporting",
    ],
  },
  {
    icon: FileText,
    title: "Listing Management",
    bullets: [
      "Content updates & copy refreshes",
      "A/B testing on titles & images",
      "Suppression fixes & reinstatement",
      "Keyword ranking tracking",
    ],
  },
  {
    icon: MessageSquare,
    title: "Customer Service",
    bullets: [
      "Review management & responses",
      "Buyer messages & dispute handling",
      "Returns coordination",
      "Feedback removal requests",
    ],
  },
  {
    icon: Package,
    title: "Inventory & Logistics",
    bullets: [
      "Reorder alerts & stock monitoring",
      "FBA shipment creation & labelling",
      "Stock level forecasting",
      "Stranded & unfulfillable inventory",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analysis",
    bullets: [
      "Weekly performance reports",
      "Competitor tracking & benchmarking",
      "Dashboard updates & data hygiene",
      "BSR & ranking trend analysis",
    ],
  },
];

function WhatTheyHandle() {
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT YOUR VA HANDLES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Everything that eats{" "}
            <span className="text-brand-azure">your time.</span>
          </motion.h2>
        </div>

        {/* Task grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {taskCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
                className="rounded-2xl border border-brand-navy/10 p-5 hover:border-brand-navy/20 hover:shadow-sm transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy mb-4">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <h3 className="font-bold text-brand-navy text-base mb-3 leading-snug">
                  {cat.title}
                </h3>

                <ul className="space-y-2">
                  {cat.bullets.map((bullet) => (
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

// ─── Section 3: Who It's For ─────────────────────────────────────────────────

const checklist = [
  "You're doing $10K+/mo and need to delegate",
  "You want Amazon expertise without hiring full-time staff",
  "You need someone trained, not someone to train",
  "Your time is better spent on strategy, not operations",
];

function WhoItsFor() {
  return (
    <section className="relative bg-brand-navy text-white py-10 sm:py-14 texture-grain overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(54,128,195,0.14),transparent_50%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-azure/15 border border-brand-azure/30 px-5 py-2 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-azure mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              IS THIS FOR YOU?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-black tracking-tight text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]"
            >
              Right for you{" "}
              <span className="text-brand-yellow">if...</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
              className="mt-4 text-white/80 leading-relaxed"
            >
              Our VAs are not entry-level hires. They come pre-trained and
              slot directly into your business — no ramp-up required.
            </motion.p>
          </div>

          {/* Right: checklist + callout */}
          <div>
            <ul className="space-y-4 mb-8">
              {checklist.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.09 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-white/85 leading-snug pt-0.5">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Certification callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="rounded-2xl border border-brand-yellow/20 bg-brand-yellow/5 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow mt-0.5">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <p className="text-sm text-white/75 leading-relaxed">
                  <span className="text-brand-yellow font-semibold">
                    Certification guaranteed:
                  </span>{" "}
                  All our VAs complete a 40-hour Amazon Operations certification
                  before placement. You get an expert — not a trainee.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: CTA ──────────────────────────────────────────────────────────

function CTA() {
  return (
    <section
      id="apply"
      className="relative text-white py-14 sm:py-20 texture-grain overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,205,29,0.16),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      {/* eX watermark */}
      <div
        aria-hidden
        className="absolute -right-10 bottom-0 pointer-events-none select-none opacity-60"
      >
        <span className="font-display text-[20rem] sm:text-[32rem] leading-none text-white/[0.03] tracking-tighter">
          eX
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-5 py-2 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
          MATCHED WITHIN 72 HOURS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="font-black tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
        >
          Ready to get{" "}
          <span className="text-brand-yellow">your time back?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Tell us your requirements. We&rsquo;ll match you with a trained VA
          within 72 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#" size="lg" variant="primary" arrow>
            Apply for a VA
          </Button>
          <Button href="/services" size="lg" variant="ghost">
            View all services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page Export ─────────────────────────────────────────────────────────────

export default function VirtualAssistantsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatTheyHandle />
        <WhoItsFor />
        <ExploreServices current="virtual-assistants" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
