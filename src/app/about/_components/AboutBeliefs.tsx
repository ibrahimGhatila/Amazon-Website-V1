"use client";

import { motion } from "motion/react";
import { Compass, Coins, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const beliefs = [
  {
    icon: Compass,
    title: "Operators, not gurus",
    body: "Everything we ship is built by people who launch products every week. The playbook we run for ourselves.",
  },
  {
    icon: Coins,
    title: "Capital + capability",
    body: "We deploy capital, build real brands, and share the upside with people who can match it.",
  },
  {
    icon: Target,
    title: "Outcomes, not promises",
    body: "Every relationship is measured by P&L, BSR, and exit value — not testimonials.",
  },
];

export function AboutBeliefs() {
  return (
    <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT WE BELIEVE"
          title={
            <>
              Three principles.{" "}
              <span className="text-brand-azure">No exceptions.</span>
            </>
          }
          subtitle="The operating system behind every launch, hire, and partnership we take on."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
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
                <p className="mt-3 text-brand-navy/75 text-sm sm:text-base leading-relaxed text-pretty">
                  {b.body}
                </p>
                <div className="absolute top-7 right-7 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-navy/25">
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
