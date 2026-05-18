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
    <section className="relative isolate overflow-hidden bg-brand-navy text-white lg:min-h-[100svh] flex items-center pt-24 pb-14 lg:pb-12 texture-grain">
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
              <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow uppercase">
                The Operating System
              </span>
              <span className="h-px w-10 bg-brand-yellow/40" />
            </motion.div>

            <h1 className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[60px] xl:text-[70px]">
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
            className="hidden lg:block relative"
          >
            <div className="relative pl-2">
              <div className="absolute left-[34px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-yellow via-brand-yellow/40 to-brand-azure/20" />

              <ul className="space-y-7">
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
                        delay: 0.55 + i * 0.08,
                      }}
                      className="relative flex items-center gap-6"
                    >
                      <div className="relative z-10 flex h-[54px] w-[54px] flex-none items-center justify-center rounded-2xl bg-brand-navy border border-brand-yellow/30">
                        <Icon className="h-5 w-5 text-brand-yellow" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-display text-[11px] tracking-[0.28em] text-white/40 tabular-nums">
                          PHASE {phase.num}
                        </div>
                        <div className="mt-1 font-bold text-xl xl:text-2xl text-white tracking-tight">
                          {phase.name}
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
