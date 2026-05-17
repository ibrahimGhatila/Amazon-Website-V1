"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Compass,
  Search,
  Factory,
  Rocket,
  TrendingUp,
  Infinity as InfinityIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const phases = [
  { num: "01", name: "Onboarding", icon: Compass },
  { num: "02", name: "Research", icon: Search },
  { num: "03", name: "Source", icon: Factory },
  { num: "04", name: "Launch", icon: Rocket },
  { num: "05", name: "Scale", icon: TrendingUp },
  { num: "06", name: "Compound", icon: InfinityIcon },
];

export function ProcessHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white h-screen flex items-center pt-24 pb-12 texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(54,128,195,0.20)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(244,205,29,0.12)_0%,_transparent_55%)]"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-7"
            >
              <span className="font-display text-[17px] tracking-[0.08em] text-brand-yellow uppercase">
                The Operating System
              </span>
              <span className="h-px w-10 bg-brand-yellow/40" />
            </motion.div>

            <h1 className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[60px] xl:text-[70px]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="block text-white"
              >
                Six phases.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
                className="block text-white"
              >
                One{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-yellow">playbook</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.9 }}
                    className="absolute left-0 -bottom-1 h-[5px] w-full bg-brand-yellow/25 origin-left rounded-full -z-10"
                  />
                </span>
                .
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              className="mt-7 text-lg sm:text-xl max-w-xl text-white/80 leading-relaxed text-pretty"
            >
              The same operating system runs every engagement — done-for-you
              Amazon, TikTok Shop builds, or direct mentorship from Sunny Ali.
              Scaled to your stage, never improvised.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button href="#paths" size="lg" variant="primary" arrow>
                See your options
              </Button>
              <Link
                href="#process"
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white px-3 py-3"
              >
                <span className="font-semibold text-sm">See the playbook</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div>
                  <div className="font-display text-[11px] tracking-[0.3em] text-white/45 uppercase">
                    Engagement Flow
                  </div>
                  <div className="mt-1 font-display text-base sm:text-lg text-white">
                    From signed to compounding
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-display tracking-[0.2em] text-emerald-300/90 uppercase text-[10px]">
                    Active
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[26px] top-3 bottom-3 w-px bg-gradient-to-b from-brand-yellow via-brand-yellow/40 to-brand-azure/40" />

                <ul className="space-y-2.5">
                  {phases.map((phase, i) => {
                    const Icon = phase.icon;
                    return (
                      <motion.li
                        key={phase.num}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: EASE,
                          delay: 0.6 + i * 0.1,
                        }}
                        className="relative flex items-center gap-4"
                      >
                        <div className="relative z-10 flex h-[44px] w-[44px] flex-none items-center justify-center rounded-xl bg-brand-navy border border-brand-yellow/40 shadow-[0_0_16px_rgba(244,205,29,0.15)]">
                          <Icon className="h-4 w-4 text-brand-yellow" strokeWidth={2} />
                        </div>
                        <div className="flex-1 flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
                          <div className="flex items-baseline gap-2.5">
                            <span className="font-display text-xs tracking-[0.2em] text-white/40 tabular-nums">
                              {phase.num}
                            </span>
                            <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                              {phase.name}
                            </span>
                          </div>
                          {i === phases.length - 1 && (
                            <span className="text-[10px] font-display tracking-[0.2em] text-brand-yellow uppercase">
                              Ongoing
                            </span>
                          )}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-center"
              >
                <div>
                  <div className="font-display text-xl text-brand-yellow leading-none">3</div>
                  <div className="mt-1.5 text-[10px] tracking-[0.2em] text-white/45 uppercase">Engagements</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="font-display text-xl text-brand-yellow leading-none">6</div>
                  <div className="mt-1.5 text-[10px] tracking-[0.2em] text-white/45 uppercase">Phases</div>
                </div>
                <div>
                  <div className="font-display text-xl text-brand-yellow leading-none">1.4M+</div>
                  <div className="mt-1.5 text-[10px] tracking-[0.2em] text-white/45 uppercase">Community</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
