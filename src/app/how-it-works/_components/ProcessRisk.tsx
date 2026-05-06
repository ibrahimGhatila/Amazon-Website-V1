"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Shield, AlertTriangle, Repeat, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const objections = [
  {
    icon: AlertTriangle,
    q: "What happens if a product flops?",
    a: "Every cycle is 3 launches, not 1. We retire underperformers fast (no ego, no sunk cost), document the lesson, and double down on winners. Across 1,200+ launches, the portfolio model has consistently outperformed single-bet operators — even when individual products miss.",
  },
  {
    icon: Repeat,
    q: "What if I want out partway through?",
    a: "The brand, trademark, and Seller Central account are yours from day one. If you want to take it in-house mid-cycle, we hand it over with a full ops playbook. Capital reconciliation follows a clear formula in the operating agreement — no hostage situations.",
  },
  {
    icon: Shield,
    q: "How is my capital protected?",
    a: "Capital sits in a launch-specific escrow that you control. Disbursement requires your sign-off at each stage. We carry insurance against supplier default and freight loss, and every supplier we work with goes through factory audit before bulk POs.",
  },
];

export function ProcessRisk() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE RISK QUESTION"
          title={
            <>
              The honest answers,{" "}
              <span className="text-brand-azure">before you ask.</span>
            </>
          }
          subtitle="Every operator we onboard wants to know how this fails. Here's the math, the protections, and the structure."
        />

        <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12">
          {/* Left — interactive Q&A */}
          <div className="space-y-3">
            {objections.map((o, i) => {
              const Icon = o.icon;
              const isOpen = open === i;
              return (
                <motion.div
                  key={o.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                  className={`rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "border-brand-navy/30 bg-white shadow-xl shadow-brand-navy/5"
                      : "border-brand-navy/10 bg-white hover:border-brand-navy/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 p-5 sm:p-6 text-left"
                  >
                    <div
                      className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-brand-yellow text-brand-navy"
                          : "bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-brand-navy text-lg sm:text-xl tracking-tight leading-tight">
                        {o.q}
                      </h3>
                    </div>
                    <span
                      className={`font-display text-sm tracking-[0.2em] ${
                        isOpen ? "text-brand-yellow" : "text-brand-navy/30"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pl-[80px] sm:pl-[88px] text-brand-navy/70 text-[15px] sm:text-base leading-relaxed text-pretty">
                      {o.a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — testimonial pull-quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-brand-navy text-white p-8 sm:p-10 self-start lg:sticky lg:top-28"
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none"
            >
              eX
            </div>
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,205,29,0.12)_0%,_transparent_55%)]"
            />

            <div className="relative">
              <Quote className="h-10 w-10 text-brand-yellow mb-6" strokeWidth={1.5} />
              <p className="font-display text-xl sm:text-2xl leading-snug text-white text-balance">
                &ldquo;Two of my three launches printed. One missed by a mile.
                What surprised me was how fast they killed the loser — no
                emotion, just data. The portfolio model is the whole game.&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-bold">
                  AM
                </div>
                <div>
                  <div className="font-bold text-white">Aamir M.</div>
                  <div className="text-white/55 text-sm">
                    Elite member · 3-launch cycle, year 2
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <Stat value="2 of 3" label="Profitable" />
                <Stat value="6 wks" label="To kill loser" />
                <Stat value="184%" label="Portfolio ROI" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-14 max-w-3xl mx-auto text-center rounded-3xl bg-brand-navy/[0.03] border border-brand-navy/10 p-8"
        >
          <div className="font-display text-sm tracking-[0.25em] text-brand-yellow mb-3">
            BOTTOM LINE
          </div>
          <p className="font-black text-brand-navy text-xl sm:text-2xl tracking-tight leading-tight text-balance">
            We make money when you make money. Until then, our skin is in the
            game alongside yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-center">
      <div className="font-display text-lg text-brand-yellow leading-none tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-[10px] tracking-[0.2em] text-white/55 uppercase font-display">
        {label}
      </div>
    </div>
  );
}
