"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import {
  Users,
  TrendingUp,
  Rocket,
  Globe2,
  Calendar,
  Building2,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    label: "Years operating",
    value: 10,
    prefix: "",
    suffix: "+",
    icon: Calendar,
  },
  {
    label: "Community strong",
    value: 14,
    prefix: "",
    suffix: "M+",
    formatFn: (n: number) => (n / 10).toFixed(1),
    icon: Users,
  },
  {
    label: "Product launches",
    value: 1200,
    prefix: "",
    suffix: "+",
    icon: Rocket,
  },
  {
    label: "Countries served",
    value: 32,
    prefix: "",
    suffix: "",
    icon: Globe2,
  },
  {
    label: "Partner organizations",
    value: 50,
    prefix: "",
    suffix: "+",
    icon: Building2,
  },
  {
    label: "Economic impact",
    value: 200,
    prefix: "$",
    suffix: "M+",
    icon: TrendingUp,
  },
];

export function AboutStats() {
  return (
    <section className="relative bg-brand-navy py-16 sm:py-20 overflow-hidden texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.8) 0 1px, transparent 1px 22px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center justify-between mb-10 flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-azure text-white font-display text-sm tracking-widest">
              01
            </span>
            <span className="font-display text-sm tracking-[0.25em] text-white/60">
              BY THE NUMBERS
            </span>
          </div>
          <h2 className="font-black text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight max-w-xl text-right sm:text-left">
            A decade. Measured in outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="relative bg-white/[0.04] p-6 sm:p-10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-azure translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <div className="relative flex flex-col h-full">
                  <Icon className="h-7 w-7 text-brand-azure group-hover:text-white transition-colors duration-500" />
                  <div className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-500 leading-none tracking-tight">
                    <Counter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      formatFn={"formatFn" in stat ? stat.formatFn : undefined}
                    />
                  </div>
                  <div className="mt-3 text-white/60 group-hover:text-white/90 transition-colors duration-500 text-sm sm:text-base font-medium">
                    {stat.label}
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
