"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "What does Extreme Commerce actually do?",
    a: "We build and operate e-commerce businesses for our partners. That means product research, sourcing, listings, advertising, and day-to-day management — fully done for you. We also offer direct mentorship from Sunny Ali and trained VA placements for teams who want to run things themselves.",
  },
  {
    q: "Which service is right for me?",
    a: "If you want a hands-off brand built and run for you, the Elite Program is your fit — choose Amazon or TikTok Shop. If you already have an operation and want strategic guidance, Ask Sunny Ali gives you direct access to Sunny's playbook. If you need execution capacity inside your own team, our VA service fills that gap.",
  },
  {
    q: "What platforms do you operate on?",
    a: "Amazon USA, UK, Canada, and UAE — plus Walmart, TikTok Shop, Etsy, and Amazon Wholesale. We match the platform to your product and market, not the other way around.",
  },
  {
    q: "Do I need capital to work with you?",
    a: "It depends on the engagement. Done-for-you brand builds require capital for inventory and launch. Mentorship and VA services don't. We'll walk you through what's needed for your specific situation on a call.",
  },
  {
    q: "Can I hire just a virtual assistant?",
    a: "Yes. Our VA service is standalone — full-time or part-time, trained on Amazon operations, and placed directly inside your existing setup. It's the fastest way to add Amazon expertise to your team without a full-service engagement.",
  },
  {
    q: "Who is behind Extreme Commerce?",
    a: "Extreme Commerce was founded by Sunny Ali, one of Pakistan's most recognized e-commerce entrepreneurs. The community has grown to 1.4 million members across South Asia and the Gulf. The team behind every launch has managed hundreds of Amazon brands over the past decade.",
  },
  {
    q: "How do I get started?",
    a: "Book a free strategy call. We'll learn about your goals, walk you through the right engagement, and give you a clear picture of next steps — no pressure, no pitch deck.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-white py-24 sm:py-32 border-t border-brand-navy/5"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED"
          title={
            <>
              Answers, before you ask.
            </>
          }
          subtitle="What you need to know about working with Extreme Commerce."
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
                    <span className="font-display text-sm tracking-[0.2em] text-brand-yellow pt-1.5 tabular-nums">
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
                      <div className="pb-6 sm:pb-8 pl-10 sm:pl-14 pr-16 text-brand-navy/70 text-[15px] sm:text-base leading-relaxed text-pretty">
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
