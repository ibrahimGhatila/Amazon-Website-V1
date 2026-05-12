"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Check,
  X,
  TrendingUp,
  ShoppingBag,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { ExploreServices } from "@/components/ui/ExploreServices";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

function TikTokHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate bg-brand-navy min-h-screen flex items-center pt-24 pb-12 texture-grain overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(54,128,195,0.25),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_85%_75%,rgba(244,205,29,0.12),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <motion.div aria-hidden style={{ y }} className="absolute inset-0 -z-10 flex items-center justify-end pointer-events-none select-none pr-8 sm:pr-16">
        <span className="font-display text-[22rem] sm:text-[32rem] leading-none text-white/[0.03] tracking-tighter">TT</span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mb-8"
        >
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-5 py-2 mb-6"
            >
              <Play className="h-3.5 w-3.5 text-brand-yellow fill-brand-yellow" strokeWidth={0} />
              <span className="font-display text-sm tracking-[0.22em] text-brand-yellow">ELITE PROGRAM — TIKTOK</span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black text-4xl sm:text-5xl lg:text-[60px] leading-[0.95] tracking-tight text-white"
              >
                Your TikTok Shop brand.{" "}
                <span className="text-brand-yellow">We build it.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="text-base sm:text-lg lg:text-xl text-white/65 font-light leading-snug text-pretty max-w-2xl"
            >
              TikTok Shop is the fastest-growing commerce channel in the world.
              We run your product launches — creator strategy, affiliate network,
              live selling, and fulfilment — end to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {["Creator collabs", "Affiliate network", "Live selling ops", "80/20 profit share"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/apply" size="lg" variant="primary" arrow>Apply for TikTok Elite</Button>
              <Link href="#how-it-works" className="group inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white/80 hover:text-white transition">
                See how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative hidden lg:block h-[500px] w-full"
          >
            {/* GMV card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <p className="font-display text-[10px] tracking-[0.22em] text-brand-navy/60">MONTHLY GMV</p>
              <div className="font-black text-brand-navy text-5xl tracking-tight mt-2 leading-none">
                $<Counter to={84} />K
              </div>
              <p className="text-xs text-brand-navy/55 mt-1">Average across active shops</p>
              <div className="h-px bg-brand-navy/15 my-3" />
              <div className="flex justify-between text-brand-navy/70 text-xs">
                <span>Creator collabs</span>
                <span className="font-bold text-brand-navy">200+</span>
              </div>
            </motion.div>

            {/* Creator network card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[30%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-[10px] tracking-[0.2em] text-white/50">YOUR SHOP</span>
                <span className="text-[10px] text-green-400 font-medium">● LIVE</span>
              </div>
              <div className="space-y-0">
                {[
                  { label: "Product research", pct: 100 },
                  { label: "Creator outreach", pct: 100 },
                  { label: "Affiliate setup", pct: 100 },
                  { label: "Live selling", pct: 78 },
                ].map((step) => (
                  <div key={step.label} className="py-2.5 border-b border-white/10 last:border-0">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/70">{step.label}</span>
                      <span className="text-brand-yellow font-semibold">{step.pct}%</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-azure" style={{ width: `${step.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profit share card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[5%] w-[190px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <p className="text-white/70 text-xs font-display tracking-[0.2em]">YOUR SHARE</p>
              <div className="font-black text-white text-4xl mt-2 leading-none">80%</div>
              <p className="text-white/60 text-xs mt-1">Of all profit generated</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em] z-10"
      >
        <span>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── What's Included ──────────────────────────────────────────────────────────

const inclusions = [
  { icon: ShoppingBag, title: "Product Research & Sourcing", body: "We find products with TikTok-native demand, high viral potential, and healthy margins. Full supplier vetting included." },
  { icon: Users, title: "Creator & Affiliate Network", body: "Access to our network of TikTok creators. We handle outreach, contracts, content briefs, and commission structures." },
  { icon: Play, title: "Live Selling Operations", body: "Scripted live sessions, host coordination, and real-time performance management — the fastest route to TikTok Shop GMV." },
  { icon: TrendingUp, title: "Growth & Scaling", body: "PPC on TikTok, Spark Ads, trending audio strategy, and weekly performance reviews. Winners get aggressive reinvestment." },
  { icon: Zap, title: "Fulfilment & Ops", body: "Inventory planning, FBT (Fulfilled by TikTok) coordination, and returns management — handled by our ops team." },
  { icon: Check, title: "80/20 Profit Share", body: "Same model as Amazon Elite. You keep 80%. Our share unlocks only once your ROI crosses 50%." },
];

function TikTokInclusions() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-sm tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT WE RUN FOR YOU
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Every part of TikTok Shop.{" "}
            <span className="text-brand-azure">Done for you.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inclusions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="rounded-2xl border border-brand-navy/10 p-6 bg-white hover:border-brand-azure/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300 mb-4">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-brand-navy text-base leading-tight mb-2">{item.title}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Who It's For ─────────────────────────────────────────────────────────────

function TikTokFit() {
  const forYou = [
    "Capital ready to deploy ($10K+ per launch)",
    "Want exposure to the fastest-growing sales channel",
    "Happy to let a team run the operation",
    "Interested in creator-led commerce",
  ];
  const notForYou = [
    "Want to manage creators yourself day-to-day",
    "Not comfortable with video-first commerce",
    "Looking for an Amazon-only strategy",
    "Need results within 30 days",
  ];

  return (
    <section className="bg-brand-navy/[0.03] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Right for you?{" "}
            <span className="text-brand-azure">Check these.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative rounded-3xl bg-brand-navy p-7 sm:p-8 overflow-hidden"
          >
            <div aria-hidden className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none">✓</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 mb-6">
                <Check className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={3} />
                <span className="font-display text-sm tracking-[0.2em] text-brand-yellow">FOR YOU</span>
              </div>
              <ul className="space-y-3">
                {forYou.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-brand-navy/10 bg-white p-7 sm:p-8 overflow-hidden"
          >
            <div aria-hidden className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-brand-navy/[0.04] pointer-events-none select-none">✗</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 mb-6">
                <X className="h-3.5 w-3.5 text-brand-navy/50" strokeWidth={3} />
                <span className="font-display text-sm tracking-[0.2em] text-brand-navy/60">NOT FOR YOU</span>
              </div>
              <ul className="space-y-3">
                {notForYou.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-brand-navy/15 text-brand-navy/40">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-brand-navy/60 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────

function TikTokStats() {
  return (
    <section className="bg-brand-yellow py-14 sm:py-16 texture-grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: <><Counter to={1} />B+</>, label: "TikTok Shop active buyers" },
            { value: <><Counter to={200} />+</>, label: "Creator collabs per month" },
            { value: <>$<Counter to={10} />K</>, label: "Launch budget per product" },
            { value: <>80%</>, label: "Your profit share" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
            >
              <div className="font-black text-brand-navy text-4xl sm:text-5xl tracking-tight leading-none">{stat.value}</div>
              <div className="mt-2 text-brand-navy/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function TikTokCTA() {
  return (
    <section
      id="apply"
      className="relative text-white py-16 sm:py-24 texture-grain overflow-hidden"
      style={{ background: "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)", marginBottom: "-2px" }}
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,205,29,0.1),transparent_60%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-black tracking-tight text-3xl sm:text-4xl lg:text-[48px] leading-[1.05] text-balance"
        >
          TikTok Shop is moving fast.{" "}
          <span className="text-brand-yellow">So are we.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          className="mt-6 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
        >
          Limited launch slots. Apply to check availability and see if your
          product category is a fit for our TikTok programme.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/apply" size="lg" variant="primary" arrow>Apply for TikTok Elite</Button>
          <Button href="/services" size="lg" variant="ghost">View all services</Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EliteTikTokPage() {
  return (
    <>
      <Nav />
      <main>
        <TikTokHero />
        <TikTokStats />
        <TikTokInclusions />
        <TikTokFit />
        <ExploreServices current="elite-tiktok" />
        <TikTokCTA />
      </main>
      <Footer />
    </>
  );
}
