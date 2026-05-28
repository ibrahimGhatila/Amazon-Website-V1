"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "What does Extreme Commerce actually do?",
    a: "We build and operate Amazon and TikTok Shop brands for our partners — research, sourcing, listings, ads, and daily management, fully done for you. We also offer mentorship and VA placements for teams running things themselves.",
  },
  {
    q: "Which service is right for me?",
    a: "Want it built for you? Elite Program (Amazon or TikTok). Already running and need strategy? Ask Sunny Ali.",
  },
  {
    q: "What platforms do you operate on?",
    a: "Amazon USA, UK, Canada, and UAE — plus Walmart, TikTok Shop, Etsy, and Amazon Wholesale. We match the platform to your product and market, not the other way around.",
  },
  {
    q: "Do I need capital to work with you?",
    a: "Done-for-you brand builds need capital for inventory and launch. Mentorship doesn't.",
  },
  {
    q: "How do I get started?",
    a: "Book a free strategy call. We'll match you to the right engagement and outline next steps — no pitch deck.",
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
          title={<>Answers, before you ask.</>}
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
