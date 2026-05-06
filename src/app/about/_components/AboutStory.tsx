"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const milestones = [
  {
    year: "2015",
    title: "Founded",
    body: "Sunny Ali launches Extreme Commerce as an operator-first answer to the Amazon gold rush — built on real launches, not theory.",
  },
  {
    year: "2017",
    title: "First 100 launches",
    body: "Cross 100 successful private-label launches. The playbook that becomes Elite is being written in real time.",
  },
  {
    year: "2019",
    title: "100K community",
    body: "Free training and operator content scale to a 100K-strong community of sellers across Pakistan, the UK, and the Gulf.",
  },
  {
    year: "2021",
    title: "Government partnerships",
    body: "Selected by NAVTTC, PVTC, and the Kamyab Jawan programme to train the next wave of national e-commerce talent.",
  },
  {
    year: "2023",
    title: "Elite Program",
    body: "Done-for-you Amazon brand-building productized into Elite — three launches, profit share, full ownership.",
  },
  {
    year: "2026",
    title: "1M+ ecosystem",
    body: "1M+ community members, 1,200+ launches, 50+ institutional partners — the largest e-commerce ecosystem out of South Asia.",
  },
];

export function AboutStory() {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="font-display text-xs tracking-[0.22em] text-brand-navy/45 uppercase">
            Our story
          </span>
          <h2 className="mt-2 font-black text-brand-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance max-w-2xl">
            From a single launch to a thousand brands.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Spine */}
          <div aria-hidden className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-yellow/60 via-brand-navy/15 to-transparent" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                className="relative grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-5 sm:gap-8"
              >
                {/* Dot */}
                <div className="relative pt-1.5">
                  <div className="relative h-8 w-8 rounded-full bg-brand-yellow flex items-center justify-center shadow-md shadow-brand-yellow/40">
                    <span className="h-2 w-2 rounded-full bg-brand-navy" />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="font-display text-sm tracking-[0.2em] text-brand-yellow/80 mb-1">
                    {m.year}
                  </div>
                  <h3 className="font-black text-brand-navy text-xl sm:text-2xl tracking-tight leading-tight">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-brand-navy/65 text-sm sm:text-base leading-relaxed text-pretty max-w-2xl">
                    {m.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
