"use client";

import { motion } from "motion/react";
import {
  ClipboardCheck,
  Search,
  Factory,
  Rocket,
  TrendingUp,
  Crown,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

type Step = {
  num: string;
  title: string;
  short: string;
  timeframe: string;
  icon: typeof ClipboardCheck;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Onboarding & capital plan",
    short: "We meet, we vet, we set the financial runway together.",
    timeframe: "Week 0 – 1",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Research & product validation",
    short: "We mine 1,000+ past launches to find products with proven margin.",
    timeframe: "Week 1 – 3",
    icon: Search,
  },
  {
    num: "03",
    title: "Source, sample & ship",
    short: "Vetted suppliers, QC inspections, freight — all run for you.",
    timeframe: "Week 4 – 10",
    icon: Factory,
  },
  {
    num: "04",
    title: "Launch with precision",
    short: "Listing, creative, PPC ramp, and review velocity from day one.",
    timeframe: "Week 11 – 14",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Optimise & scale",
    short: "Weekly tuning, monthly strategy, aggressive reinvestment in winners.",
    timeframe: "Month 4 – 12",
    icon: TrendingUp,
  },
  {
    num: "06",
    title: "Compound & exit optionality",
    short: "Stack 3 launches. Decide whether to hold, scale further, or exit.",
    timeframe: "Month 12 – 18+",
    icon: Crown,
  },
];

export function ProcessSteps() {
  return (
    <section
      id="process"
      className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.15)_0%,_transparent_50%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE OPERATING SYSTEM"
          variant="dark"
          title={
            <>
              Six phases.{" "}
              <span className="text-brand-yellow">One proven playbook.</span>
            </>
          }
          subtitle="The same operating system runs every engagement — done-for-you brand builds, mentorship advice, and the playbook we apply across Amazon, Walmart, and TikTok Shop."
        />

        <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 hover:border-brand-yellow/40 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-brand-yellow leading-none tracking-tight">
                    {step.num}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow/10 border border-brand-yellow/25">
                    <Icon
                      className="h-5 w-5 text-brand-yellow"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="mt-6 font-black text-2xl tracking-tight leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-white/65 text-base leading-relaxed text-pretty">
                  {step.short}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-display tracking-[0.22em] text-brand-azure">
                  <span className="h-px w-6 bg-brand-azure/50" />
                  {step.timeframe}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
