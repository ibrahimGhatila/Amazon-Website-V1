"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Wallet, Layers, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProcessHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-brand-navy text-white min-h-screen flex items-center pt-24 pb-12 texture-grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.25)_0%,_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(244,205,29,0.15)_0%,_transparent_50%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-60" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute -left-20 sm:-left-32 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"
      >
        <span className="font-display text-[22rem] sm:text-[32rem] lg:text-[44rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <div
        aria-hidden
        className="absolute top-1/4 right-[10%] h-72 w-72 rounded-full bg-brand-azure/20 blur-3xl animate-blob -z-10"
      />
      <div
        aria-hidden
        className="absolute bottom-[15%] right-[25%] h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl animate-blob -z-10"
        style={{ animationDelay: "-8s" }}
      />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/15 px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              <span className="font-display text-sm tracking-[0.2em] text-white/90">
                How the Elite Program works
              </span>
            </motion.div>

            <h1 className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="block text-white"
              >
                You{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-yellow">own</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.9 }}
                    className="absolute left-0 -bottom-1 h-[5px] w-full bg-brand-yellow/20 origin-left rounded-full -z-10"
                  />
                </span>{" "}
                the brand.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
                className="block text-white"
              >
                We build it.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              className="mt-7 text-lg sm:text-xl max-w-xl text-white/70 leading-relaxed text-pretty"
            >
              An end-to-end Amazon launch programme built for capital-serious
              operators. You bring the ambition. We run the operation. The math
              is on the table from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button href="/apply" size="lg" variant="primary" arrow>
                Apply for Elite
              </Button>
              <Link
                href="#process"
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white px-3 py-3"
              >
                <span className="font-semibold text-sm">See the process</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Quick fact strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
              className="mt-12 grid grid-cols-3 gap-3 max-w-md"
            >
              {[
                { value: "3", label: "Launches" },
                { value: "18mo", label: "Cycle" },
                { value: "80/20", label: "Profit share" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-3"
                >
                  <div className="font-display text-2xl text-brand-yellow leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[11px] tracking-[0.2em] text-white/55 uppercase font-display">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-[600px] w-full"
          >
            {/* Capital card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[280px] rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark p-6 shadow-2xl shadow-brand-yellow/20"
            >
              <div className="flex items-center justify-between text-brand-navy/70 text-xs font-display tracking-[0.2em]">
                <span>PER LAUNCH</span>
                <span className="flex items-center gap-1 text-brand-navy/80">
                  <Wallet className="h-3 w-3" />
                  CAPITAL
                </span>
              </div>
              <div className="mt-4 font-black text-brand-navy text-6xl tracking-tight leading-none">
                $<Counter to={7} />k
              </div>
              <div className="mt-3 text-brand-navy/70 text-sm font-medium">
                Allocated strategically. Winners get reinvestment.
              </div>
            </motion.div>

            {/* Process card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[30%] left-0 w-[320px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between text-white/60 text-xs font-display tracking-[0.2em]">
                <span>PROCESS</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  RUNNING
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-6xl text-white tracking-tight leading-none">
                  <Counter to={6} />
                </span>
                <Layers className="h-5 w-5 text-brand-yellow ml-2" />
                <span className="text-white/55 text-sm ml-1">phases</span>
              </div>
              <div className="mt-3 text-white/60 text-sm leading-relaxed">
                Onboarding → Research → Source → Launch → Scale → Compound.
              </div>
              <div className="mt-4 grid grid-cols-6 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full bg-brand-yellow"
                    style={{ opacity: 0.3 + i * 0.12 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* ROI card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-0 right-[10%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <div className="text-white/70 text-xs font-display tracking-[0.2em] flex items-center gap-1.5">
                <BarChart3 className="h-3 w-3" />
                ROI MILESTONE
              </div>
              <div className="mt-2 font-black text-white text-4xl">
                <Counter to={50} suffix="%" />
              </div>
              <div className="mt-1 text-white/70 text-xs">
                Where our profit share unlocks
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="h-[400px] w-[400px] rounded-full border border-white/5" />
            </motion.div>
          </motion.div>
        </div>

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
