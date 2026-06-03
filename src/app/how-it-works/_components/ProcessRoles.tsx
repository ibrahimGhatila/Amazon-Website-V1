"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const yourItems = [
  "Wire launch capital",
  "Final approval on product shortlist",
  "Brand & trademark ownership",
];

const ourItems = [
  "Product research & selection",
  "Supplier vetting, QC & freight",
  "Brand identity & creative",
  "Listing copy, A+ content & video",
  "Daily PPC management",
  "Customer service & operations",
  "Weekly digest & monthly P&L",
];

export function ProcessRoles() {
  return (
    <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHO DOES WHAT"
          title={
            <>
              You stay the operator.{" "}
              <span className="text-brand-azure">We do the operating.</span>
            </>
          }
          subtitle="On a done-for-you engagement, your time commitment is roughly 4 hours a month."
        />

        <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-3xl border-2 border-brand-navy/10 bg-white p-7 sm:p-8"
          >
            <div className="font-display text-xs tracking-[0.22em] text-brand-navy/40 mb-4">YOUR ROLE</div>
            <div className="font-black text-4xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
              3 things.<br />That&apos;s it.
            </div>
            <ul className="mt-6 space-y-3">
              {yourItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-navy/75 text-sm sm:text-base">
                  <span className="mt-0.5 h-5 w-5 flex-none flex items-center justify-center rounded-full bg-brand-yellow/20">
                    <Check className="h-3 w-3 text-brand-navy" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="rounded-3xl bg-brand-navy p-7 sm:p-8"
          >
            <div className="font-display text-xs tracking-[0.22em] text-brand-yellow/60 mb-4">OUR ROLE</div>
            <div className="font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Everything<br />else.
            </div>
            <ul className="mt-6 space-y-3">
              {ourItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/75 text-sm sm:text-base">
                  <span className="mt-0.5 h-5 w-5 flex-none flex items-center justify-center rounded-full bg-brand-yellow/20">
                    <Check className="h-3 w-3 text-brand-yellow" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          <p className="text-brand-navy/75 text-base sm:text-lg leading-relaxed">
            Our promise:{" "}
            <span className="text-brand-navy font-bold">
              your time commitment is roughly 4 hours a month.
            </span>{" "}
            One strategy call, a few approvals, a digest read. The rest is staffed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
