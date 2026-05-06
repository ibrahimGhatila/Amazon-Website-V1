"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: 10, suffix: "+", label: "Years operating" },
  { value: 1, suffix: "M+", label: "Community" },
  { value: 1200, suffix: "+", label: "Launches" },
  { value: 32, suffix: "", label: "Countries served" },
  { value: 50, suffix: "+", label: "Partner orgs" },
  { value: 420, prefix: "$", suffix: "M+", label: "Seller GMV" },
];

export function AboutStats() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-y border-brand-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-12"
        >
          <span className="font-display text-sm tracking-[0.22em] text-brand-navy/45 uppercase">
            By the numbers
          </span>
          <h2 className="mt-2 font-black text-brand-navy text-3xl sm:text-4xl tracking-tight">
            A decade. Measured in outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl text-brand-navy leading-none tracking-tight">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-[13px] text-brand-navy/55 tracking-wide font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
