"use client";

import { motion } from "motion/react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const tier1 = [
  { name: "Google", logo: "/brand/partners/google.svg" },
  { name: "Payoneer", logo: "/brand/partners/payoneer.svg" },
  { name: "foodpanda", logo: "/brand/partners/foodpanda.svg" },
  { name: "Daraz", logo: "/brand/partners/daraz.svg" },
];

const government = [
  "Kamyab Jawan",
  "NAVTTC",
  "PVTC Punjab",
  "PSDF",
  "Govt. of AJK",
];

const universities = [
  "NUML",
  "University of Central Punjab",
  "Iqra University",
  "COMSATS Islamabad",
  "Bahria University",
  "Institute of Business Management",
  "ICMA International",
  "University of Swat",
  "National Textile University",
  "UET Lahore",
  "Whales College",
];

const industry = [
  "Brandverse",
  "Dukan",
  "All Pakistan Memon Federation",
  "Al Qadir Welfare Foundation",
];

export function AboutPartners() {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="font-display text-sm tracking-[0.22em] text-brand-navy/45 uppercase">
            Trusted by leaders
          </span>
          <h2 className="mt-2 font-black text-brand-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] max-w-3xl mx-auto text-balance">
            Backed by the brands and institutions building Pakistan&rsquo;s digital economy.
          </h2>
        </motion.div>

        {/* Tier 1 — global brands */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <div className="text-center mb-7">
            <span className="font-display text-[11px] tracking-[0.25em] text-brand-navy/40 uppercase">
              Global partners
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {tier1.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                className="group relative flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-brand-navy/10 bg-white hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={48}
                  className="h-8 sm:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tier 2 — government */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <div className="text-center mb-7">
            <span className="font-display text-[11px] tracking-[0.25em] text-brand-navy/40 uppercase">
              Government partnerships
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {government.map((g, i) => (
              <motion.div
                key={g}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.05 }}
                className="rounded-full border border-brand-navy/12 bg-brand-navy/[0.02] px-5 py-3 text-sm font-semibold text-brand-navy/80 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors"
              >
                {g}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tier 3 — universities (marquee) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <div className="text-center mb-7">
            <span className="font-display text-[11px] tracking-[0.25em] text-brand-navy/40 uppercase">
              Education &amp; academia · {universities.length} institutions
            </span>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-3 animate-[marquee_40s_linear_infinite] w-max">
              {[...universities, ...universities].map((u, i) => (
                <div
                  key={`${u}-${i}`}
                  className="flex-none rounded-full border border-brand-navy/10 bg-white px-5 py-2.5 text-sm font-medium text-brand-navy/70"
                >
                  {u}
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>

        {/* Tier 4 — industry */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="text-center mb-7">
            <span className="font-display text-[11px] tracking-[0.25em] text-brand-navy/40 uppercase">
              Industry &amp; community
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {industry.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.04 }}
                className="rounded-full border border-brand-navy/8 bg-white px-4 py-2 text-xs font-medium text-brand-navy/60"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
