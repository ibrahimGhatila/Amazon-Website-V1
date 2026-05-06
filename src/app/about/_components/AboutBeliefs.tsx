"use client";

import { motion } from "motion/react";
import { Compass, Coins, Target } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const beliefs = [
  {
    icon: Compass,
    title: "Operators, not gurus",
    body: "Everything we ship is built by people who launch products on Amazon every week. No theory, no hype — just the playbook we run for ourselves.",
  },
  {
    icon: Coins,
    title: "Capital + capability",
    body: "We don't sell courses to people starting from zero. We deploy capital, build real brands, and share the upside with people who can match it.",
  },
  {
    icon: Target,
    title: "Outcomes, not promises",
    body: "Every relationship is measured by P&L, BSR, and exit value — not testimonials. If a launch underperforms, the math is on the table.",
  },
];

export function AboutBeliefs() {
  return (
    <section className="relative bg-brand-navy/[0.02] py-20 sm:py-24 border-y border-brand-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="font-display text-xs tracking-[0.22em] text-brand-navy/45 uppercase">
            What we believe
          </span>
          <h2 className="mt-2 font-black text-brand-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] max-w-3xl mx-auto text-balance">
            Three principles. No exceptions.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {beliefs.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
                className="group relative rounded-3xl bg-white border border-brand-navy/10 p-7 sm:p-8 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-yellow mb-5 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="font-black text-brand-navy text-xl sm:text-2xl tracking-tight leading-tight">
                  {b.title}
                </h3>
                <p className="mt-3 text-brand-navy/65 text-sm sm:text-base leading-relaxed text-pretty">
                  {b.body}
                </p>
                <div className="absolute top-7 right-7 font-display text-xs tracking-[0.2em] text-brand-navy/25">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
