"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { User, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

type Side = "you" | "us";

const responsibilities = [
  {
    area: "Capital allocation",
    you: "Wire launch capital. Approve major reinvestment decisions.",
    us: "Hold capital in escrow. Recommend optimal deployment per launch.",
    primary: "you",
  },
  {
    area: "Product selection",
    you: "Final approval on the product chosen for each launch.",
    us: "Mine 1,000+ historical launches. Build a 3-product shortlist with full P&L.",
    primary: "us",
  },
  {
    area: "Sourcing & QC",
    you: "Sign off on the sample. Approve the bulk PO.",
    us: "RFQ, supplier vetting, samples, third-party QC, freight, FBA prep.",
    primary: "us",
  },
  {
    area: "Listing & creative",
    you: "Brand-voice approval on copy, visuals, and the unboxing experience.",
    us: "Photography, A+ content, video, A/B-tested copy, brand store build.",
    primary: "us",
  },
  {
    area: "PPC & advertising",
    you: "Review monthly spend report. Approve campaigns above 30% TACoS.",
    us: "Daily campaign management across exact, broad, ASIN-targeting & DSP.",
    primary: "us",
  },
  {
    area: "Operations & support",
    you: "Stay reachable for the strategy call. That's it.",
    us: "Customer service, returns, account health, replenishment, BSR tracking.",
    primary: "us",
  },
  {
    area: "Reporting & strategy",
    you: "30-min monthly strategy call. Read the digest.",
    us: "Weekly ops digest, monthly P&L, quarterly strategy memo.",
    primary: "us",
  },
  {
    area: "Brand & IP ownership",
    you: "100% equity in the trademark, brand, and Seller Central account.",
    us: "We operate. We don't own. The brand is yours from day one.",
    primary: "you",
  },
];

export function ProcessRoles() {
  const [side, setSide] = useState<Side>("us");

  const yourCount = responsibilities.filter((r) => r.primary === "you").length;
  const ourCount = responsibilities.filter((r) => r.primary === "us").length;

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
          subtitle="On a done-for-you engagement, here's exactly how work splits. Toggle to see who owns what across eight working areas."
        />

        {/* Toggle */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            className="inline-flex items-center rounded-full bg-brand-navy/[0.05] border border-brand-navy/10 p-1.5"
          >
            <button
              role="tab"
              aria-selected={side === "you"}
              onClick={() => setSide("you")}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                side === "you"
                  ? "text-brand-navy"
                  : "text-brand-navy/55 hover:text-brand-navy"
              }`}
            >
              {side === "you" && (
                <motion.span
                  layoutId="role-pill"
                  className="absolute inset-0 rounded-full bg-brand-yellow"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
              <User className="relative h-4 w-4" />
              <span className="relative">YOUR side ({yourCount})</span>
            </button>
            <button
              role="tab"
              aria-selected={side === "us"}
              onClick={() => setSide("us")}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                side === "us"
                  ? "text-white"
                  : "text-brand-navy/55 hover:text-brand-navy"
              }`}
            >
              {side === "us" && (
                <motion.span
                  layoutId="role-pill"
                  className="absolute inset-0 rounded-full bg-brand-navy"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
              <Users className="relative h-4 w-4" />
              <span className="relative">OUR side ({ourCount})</span>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-brand-navy/55">
          Tip: most rows are on us. That&rsquo;s the point of the model.
        </p>

        {/* Responsibility grid */}
        <div className="mt-12 rounded-3xl border border-brand-navy/10 bg-brand-navy/[0.02] overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.2fr_1fr_1fr] divide-x divide-brand-navy/5">
            <div className="bg-white px-4 sm:px-6 py-4 font-display text-xs sm:text-sm tracking-[0.25em] text-brand-navy/60">
              AREA
            </div>
            <div
              className={`px-4 sm:px-6 py-4 font-display text-xs sm:text-sm tracking-[0.25em] flex items-center gap-2 transition-colors duration-300 ${
                side === "you"
                  ? "bg-brand-yellow text-brand-navy"
                  : "bg-white text-brand-navy/70"
              }`}
            >
              <User className="h-4 w-4" />
              YOU
            </div>
            <div
              className={`px-4 sm:px-6 py-4 font-display text-xs sm:text-sm tracking-[0.25em] flex items-center gap-2 transition-colors duration-300 ${
                side === "us"
                  ? "bg-brand-navy text-white"
                  : "bg-white text-brand-navy/70"
              }`}
            >
              <Users className="h-4 w-4" />
              EXTREME COMMERCE
            </div>
          </div>

          <div className="divide-y divide-brand-navy/5">
            {responsibilities.map((r, i) => {
              const isPrimary = r.primary === side;
              return (
                <motion.div
                  key={r.area}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.2fr_1fr_1fr] divide-x divide-brand-navy/5 items-stretch"
                >
                  <div className="bg-white px-4 sm:px-6 py-5 sm:py-6 flex items-center">
                    <div>
                      <div className="font-display text-xs tracking-[0.2em] text-brand-yellow mb-1">
                        0{i + 1}
                      </div>
                      <div className="font-bold text-brand-navy text-sm sm:text-base tracking-tight leading-tight">
                        {r.area}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300 ${
                      side === "you"
                        ? isPrimary
                          ? "bg-brand-yellow/15"
                          : "bg-white"
                        : "bg-brand-navy/[0.02]"
                    }`}
                  >
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        side === "you"
                          ? isPrimary
                            ? "text-brand-navy font-medium"
                            : "text-brand-navy/75"
                          : "text-brand-navy/70"
                      }`}
                    >
                      {r.you}
                    </p>
                  </div>
                  <div
                    className={`px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300 ${
                      side === "us"
                        ? isPrimary
                          ? "bg-brand-navy text-white"
                          : "bg-white"
                        : "bg-brand-navy/[0.02]"
                    }`}
                  >
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        side === "us"
                          ? isPrimary
                            ? "text-white font-medium"
                            : "text-brand-navy/75"
                          : "text-brand-navy/70"
                      }`}
                    >
                      {r.us}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom truth bar */}
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
            One strategy call, a few approvals, a digest read. The rest is
            staffed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
