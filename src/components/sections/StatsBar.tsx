"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { Users, Rocket, TrendingUp, Handshake } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    label: "Community strong",
    value: 14,
    prefix: "",
    suffix: "M+",
    icon: Users,
    accent: "text-brand-yellow",
    formatFn: (n: number) => (n / 10).toFixed(1),
  },
  {
    label: "Economic impact",
    value: 200,
    prefix: "$",
    suffix: "M+",
    icon: TrendingUp,
    accent: "text-brand-yellow",
  },
  {
    label: "Product launches",
    value: 1200,
    prefix: "",
    suffix: "+",
    icon: Rocket,
    accent: "text-brand-yellow",
  },
  {
    label: "Brand partners",
    value: 50,
    prefix: "",
    suffix: "+",
    icon: Handshake,
    accent: "text-brand-yellow",
  },
];

export function StatsBar() {
  return (
    <section className="relative bg-brand-navy py-16 sm:py-20 overflow-hidden texture-grain">
      {/* Continue the hero's yellow bottom-right glow into this section so the seam disappears */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 sm:h-96 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,205,29,0.15)_0%,_transparent_50%)]"
      />

      {/* Continue the hero's grid texture across the seam, fading out as we move down */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 sm:h-80 bg-grid opacity-60"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      {/* Diagonal stripes — fade in from the top so they don't slam in at the section boundary */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.8) 0 1px, transparent 1px 22px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%)",
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
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-display text-sm tracking-widest">
              01
            </span>
            <span className="font-display text-sm tracking-[0.25em] text-white/60">
              BY THE NUMBERS
            </span>
          </div>
          <h2 className="font-black text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight max-w-xl text-right sm:text-left">
            Real traction. Real results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: i * 0.1,
                }}
                className="relative bg-white/[0.04] p-6 sm:p-10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <div className="relative flex flex-col h-full">
                  <Icon className="h-7 w-7 text-brand-yellow group-hover:text-brand-navy transition-colors duration-500" />
                  <div className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-brand-yellow group-hover:text-brand-navy transition-colors duration-500 leading-none tracking-tight">
                    <Counter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      formatFn={stat.formatFn}
                    />
                  </div>
                  <div className="mt-3 text-white/60 group-hover:text-brand-navy/80 transition-colors duration-500 text-sm sm:text-base font-medium">
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
