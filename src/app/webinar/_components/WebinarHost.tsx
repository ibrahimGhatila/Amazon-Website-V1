"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check, Award, Briefcase, Target } from "lucide-react";
import { ATTENDEES } from "./event";

const EASE = [0.16, 1, 0.3, 1] as const;

const credentials = [
  {
    icon: Award,
    label: "Host",
    value: "Sunny Ali — renowned Amazon entrepreneur & mentor",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "18+ years in Amazon Private Label & ecommerce",
  },
  {
    icon: Target,
    label: "Expertise",
    value: "Building scalable, sellable Amazon brands",
  },
];

export function WebinarHost() {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-navy opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative aspect-[4/5] max-w-md w-full mx-auto lg:mx-0"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-brand-navy/5 shadow-2xl shadow-brand-navy/15 bg-brand-navy">
              <Image
                src="/brand/SA-1-(2).png"
                alt="Sunny Ali — founder of Extreme Commerce"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display text-xs tracking-[0.22em] text-brand-yellow uppercase">
                  Presenter
                </div>
                <div className="mt-1 font-black text-white text-3xl tracking-tight leading-none">
                  Sunny Ali
                </div>
                <div className="mt-1.5 text-white/80 text-sm">
                  Founder, Extreme Commerce
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 font-display text-sm tracking-[0.18em] text-brand-navy uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-azure" />
              Your Webinar Host
            </span>

            <h2 className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance">
              A leading eCommerce expert with a{" "}
              <span className="text-brand-azure">proven track record.</span>
            </h2>

            <div className="mt-8 space-y-3">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="flex items-start gap-4 rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-sm shadow-brand-navy/5"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-navy text-brand-yellow">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-display text-xs tracking-[0.22em] text-brand-navy/55 uppercase">
                        {c.label}
                      </div>
                      <div className="mt-1 font-semibold text-brand-navy text-[15px] leading-tight">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-navy/10 bg-brand-navy/[0.03] p-6">
              <div className="font-display text-sm tracking-[0.18em] text-brand-navy uppercase">
                Who should attend?
              </div>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ATTENDEES.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-brand-navy/80">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-azure/15 text-brand-azure">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
