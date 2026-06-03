"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "Most messages get a real reply within 24 hours on weekdays (Mon–Fri PKT). Service applications are reviewed in 3–5 days. If it's urgent, the live chat in the bottom-right is the fastest path.",
  },
  {
    q: "Can I drop in to your office?",
    a: "Sure — by appointment. We don't run a walk-in front desk. Email the relevant office and we'll book a slot.",
  },
  {
    q: "Do you take cold-call partnership pitches?",
    a: "We read everything sent to info@. The ones that get a response open with a clear ask, what you bring, and one paragraph on commercial terms. Decks are fine. Generic outreach gets archived.",
  },
  {
    q: "Are you hiring?",
    a: "Always — for senior operators, designers, PPC analysts, and engineers. We don't list every role publicly. Email info@extremecommerce.com with a one-line summary and your portfolio or résumé.",
  },
  {
    q: "I'm a journalist on deadline. Who do I reach?",
    a: "info@extremecommerce.com — flag the deadline in the subject line and we'll route to Sunny or our comms lead within hours.",
  },
];

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-brand-navy/[0.02] py-24 sm:py-28 border-y border-brand-navy/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="BEFORE YOU EMAIL"
          title={
            <>
              Quick answers to{" "}
              <span className="text-brand-azure">the usual ones.</span>
            </>
          }
          subtitle="Five common questions we get every week. If yours isn't here, the form above takes 30 seconds."
        />

        <div className="mt-14 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 sm:py-8 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow pt-1.5 tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-brand-navy tracking-tight group-hover:text-brand-azure transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "bg-brand-navy border-brand-navy text-brand-yellow rotate-[135deg]"
                        : "bg-white border-brand-navy/15 text-brand-navy group-hover:border-brand-navy/30"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pl-10 sm:pl-14 pr-16 text-brand-navy/75 text-[15px] sm:text-base leading-relaxed text-pretty">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
