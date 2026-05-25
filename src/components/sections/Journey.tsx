"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    year: "Year 1",
    theme: "Test & Find Winners",
    description:
      "Three test launches spaced across the cycle. We run the research, sourcing, and PPC. You sign off on key decisions. By the end of year one, we know your winning product.",
    milestone: "First profitable SKU identified",
    accent: "yellow",
  },
  {
    year: "Year 2",
    theme: "Scale the Winners",
    description:
      "Aggressive reinvestment into your proven product. Variant expansion, BSR domination, PPC efficiency. Revenue climbs. Month-over-month profit starts to compound.",
    milestone: "Consistent monthly income",
    accent: "azure",
  },
  {
    year: "Year 3",
    theme: "Profit Optimisation",
    description:
      "Margin expansion, brand authority, cross-marketplace growth. We tighten every lever — supplier pricing, ad efficiency, listing conversion. Profit per unit grows.",
    milestone: "Net margin improvement",
    accent: "yellow",
  },
  {
    year: "Year 4+",
    theme: "Compound & Scale",
    description:
      "The portfolio runs itself. At this stage, operators are targeting $10,000–$25,000 per month in passive income — hold and compound, or pursue an aggregator exit.",
    milestone: "$10k–$25k/mo target",
    accent: "azure",
  },
];

export function Journey() {
  return (
    <section className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(54,128,195,0.1)_0%,_transparent_50%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE 5-YEAR JOURNEY"
          variant="dark"
          title={
            <>
              Where you&rsquo;re going,{" "}
              <span className="text-brand-azure">phase by phase.</span>
            </>
          }
          subtitle="Amazon success isn't a sprint — it's a compounding system. Here's the realistic path from first launch to $10k–$25k/month."
        />

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-white/10"
          />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-brand-azure/50 via-brand-azure to-brand-azure/50"
          />

          {phases.map((phase, i) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Node */}
              <div
                className={`relative z-10 flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border-2 ${
                  phase.accent === "yellow"
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-brand-azure bg-brand-azure text-white"
                } font-display text-xs tracking-[0.15em] shadow-lg`}
              >
                {i + 1 < 4 ? `0${i + 1}` : "04+"}
              </div>

              {/* Year label */}
              <div
                className={`mt-5 font-display text-xs tracking-[0.25em] ${
                  phase.accent === "yellow" ? "text-white/55" : "text-brand-azure"
                }`}
              >
                {phase.year.toUpperCase()}
              </div>

              <h3 className="mt-2 font-black text-white text-lg tracking-tight leading-tight">
                {phase.theme}
              </h3>

              <p className="mt-3 text-white/60 text-sm leading-relaxed text-pretty">
                {phase.description}
              </p>

              {/* Milestone badge */}
              <div
                className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-display tracking-[0.15em] border ${
                  phase.accent === "yellow"
                    ? "border-white/15 bg-white/[0.05] text-white/65"
                    : "border-brand-azure/30 bg-brand-azure/10 text-brand-azure"
                }`}
              >
                <span className="h-1 w-1 rounded-full bg-current" />
                {phase.milestone}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="lg:hidden mt-12 space-y-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
              className="flex gap-5"
            >
              {/* Left: node + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 font-display text-[10px] tracking-[0.15em] ${
                    phase.accent === "yellow"
                      ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                      : "border-brand-azure bg-brand-azure text-white"
                  }`}
                >
                  {i + 1 < 4 ? `0${i + 1}` : "04+"}
                </div>
                {i < phases.length - 1 && (
                  <div className="mt-2 flex-1 w-[2px] bg-white/10 min-h-[40px]" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-6 flex-1">
                <div
                  className={`font-display text-[10px] tracking-[0.25em] ${
                    phase.accent === "yellow" ? "text-white/55" : "text-brand-azure"
                  }`}
                >
                  {phase.year.toUpperCase()}
                </div>
                <h3 className="mt-1 font-black text-white text-base tracking-tight">
                  {phase.theme}
                </h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">
                  {phase.description}
                </p>
                <div
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-display tracking-[0.15em] border ${
                    phase.accent === "yellow"
                      ? "border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow"
                      : "border-brand-azure/30 bg-brand-azure/10 text-brand-azure"
                  }`}
                >
                  <span className="h-1 w-1 rounded-full bg-current" />
                  {phase.milestone}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
        >
          <div>
            <div className="font-display text-xs tracking-[0.25em] text-brand-azure mb-2">
              THE GOAL
            </div>
            <p className="font-black text-white text-2xl sm:text-3xl tracking-tight leading-tight text-balance">
              $10,000–$25,000 per month.{" "}
              <span className="text-white/50">Five years of compounding.</span>
            </p>
          </div>
          <a
            href="/apply"
            className="group flex items-center gap-3 rounded-2xl bg-white text-brand-navy px-7 py-4 font-bold text-sm whitespace-nowrap hover:bg-white/90 transition"
          >
            Start the journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
