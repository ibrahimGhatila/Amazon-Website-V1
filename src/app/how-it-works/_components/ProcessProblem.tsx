"use client";

import { motion } from "motion/react";
import { TrendingDown, Flame, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const failures = [
  {
    icon: TrendingDown,
    stat: "95%",
    label: "Of solo sellers fail",
    body: "Across Amazon, Walmart, and TikTok Shop, only 5% of independent operators reach sustainable profitability. The market isn't broken — solo operators are. Systems beat solo hustle every time.",
  },
  {
    icon: Flame,
    stat: "$8.4k",
    label: "Average wasted on PPC",
    body: "Without a campaign architecture and bid management system, ad spend bleeds. Most quit before their listings are even ranked.",
  },
  {
    icon: AlertTriangle,
    stat: "1 in 5",
    label: "Get hit with supplier fraud",
    body: "Bait-and-switch MOQs, quality slippage between samples and bulk, missed shipping windows. Operating overseas without a sourcing team is roulette.",
  },
];

export function ProcessProblem() {
  return (
    <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE REALITY"
          title={
            <>
              E-commerce is saturated.{" "}
              <span className="text-brand-azure">Solo sellers are losing.</span>
            </>
          }
          subtitle="On Amazon, Walmart, or TikTok Shop — 95% of solo operators never reach sustainable profit. The answer isn't to quit. It's to stop operating alone."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {failures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
                className="group relative rounded-3xl bg-brand-navy/[0.03] border border-brand-navy/10 p-7 sm:p-8 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="font-display text-[14px] sm:text-[20px] tracking-[0.06em] text-brand-navy/30">
                    0{i + 1}
                  </span>
                </div>

                <div className="font-black text-brand-navy text-5xl sm:text-6xl tracking-tight leading-none">
                  {f.stat}
                </div>
                <div className="mt-3 font-bold text-brand-navy text-lg tracking-tight">
                  {f.label}
                </div>
                <p className="mt-3 text-brand-navy/75 text-sm sm:text-base leading-relaxed text-pretty">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Resolution band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-12 relative overflow-hidden rounded-3xl bg-brand-navy text-white p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="absolute -right-12 -top-12 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none"
          >
            eX
          </div>
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(244,205,29,0.12)_0%,_transparent_60%)]"
          />
          <div className="relative grid sm:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy font-display text-2xl">
              ✓
            </div>
            <div>
              <div className="font-display text-sm tracking-[0.25em] text-brand-yellow mb-2">
                THE FIX
              </div>
              <h3 className="font-black tracking-tight text-2xl sm:text-3xl leading-tight text-balance">
                Our partners ship at 6&times; the industry success rate. Same marketplace.
                Different system.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
