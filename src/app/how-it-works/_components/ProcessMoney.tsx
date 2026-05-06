"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Wallet, Package, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

const flow = [
  {
    icon: Wallet,
    label: "Capital in",
    sub: "Per launch",
    value: "$7K",
    detail:
      "Allocated for inventory, sample cycles, listing build, and launch-week PPC. Held in escrow.",
  },
  {
    icon: Package,
    label: "Goods produced",
    sub: "Vetted supplier + QC",
    value: "Shipped",
    detail:
      "Sample → bulk PO → freight → FBA. We move the goods. You sign off at the sample stage.",
  },
  {
    icon: ShoppingCart,
    label: "Listing live",
    sub: "First sale",
    value: "Ranked",
    detail:
      "Listing, A+ content, brand store, PPC architecture, and review velocity all firing on day one.",
  },
  {
    icon: TrendingUp,
    label: "Profit split",
    sub: "Aligned incentives",
    value: "80 / 20",
    detail:
      "You keep 80%. Our 20% only unlocks once your ROI clears 50%. We profit when you profit first.",
  },
];

export function ProcessMoney() {
  const flowRef = useRef<HTMLDivElement>(null);
  const flowInView = useInView(flowRef, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(244,205,29,0.12)_0%,_transparent_55%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE MONEY"
          variant="dark"
          title={
            <>
              How capital flows{" "}
              <span className="text-brand-yellow">through the system.</span>
            </>
          }
          subtitle="Numbers, not words. The exact path your money takes from wire to profit — and where we get paid."
        />

        {/* Headline numbers */}
        <div className="mt-16 grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <NumberCard
            value={
              <span>
                $<Counter to={7} />k
              </span>
            }
            label="Per-launch capital"
            sub="Test phase"
            accent="yellow"
          />
          <NumberCard
            value={
              <span>
                <Counter to={3} />×
              </span>
            }
            label="Launches per cycle"
            sub="Portfolio model"
            accent="white"
          />
          <NumberCard
            value={
              <span>
                <Counter to={80} />/<Counter to={20} />
              </span>
            }
            label="Profit share"
            sub="You / Us"
            accent="azure"
          />
        </div>

        {/* Flow */}
        <div ref={flowRef} className="mt-20 max-w-6xl mx-auto">
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3">
            {flow.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={
                      flowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                    }
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: i * 0.18,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                      <span className="font-display text-xs tracking-[0.2em] text-brand-azure">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="font-display text-3xl text-white mt-5 leading-none tracking-tight">
                      {f.value}
                    </div>
                    <div className="mt-2 font-bold text-white text-sm tracking-tight">
                      {f.label}
                    </div>
                    <div className="text-white/45 text-[11px] tracking-[0.2em] uppercase font-display mt-0.5">
                      {f.sub}
                    </div>
                    <p className="mt-3 text-white/60 text-xs leading-relaxed flex-1">
                      {f.detail}
                    </p>
                  </motion.div>
                  {i < flow.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={
                        flowInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.6 }
                      }
                      transition={{
                        duration: 0.4,
                        ease: EASE,
                        delay: 0.3 + i * 0.18,
                      }}
                      className="flex items-center justify-center"
                      aria-hidden
                    >
                      <ArrowRight className="h-5 w-5 text-brand-yellow/60" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden grid gap-4">
            {flow.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-bold text-white text-sm">
                          {f.label}
                        </div>
                        <div className="font-display text-lg text-brand-yellow leading-none">
                          {f.value}
                        </div>
                      </div>
                      <div className="text-white/45 text-[10px] tracking-[0.2em] uppercase font-display mt-0.5">
                        {f.sub}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-white/60 text-xs leading-relaxed pl-14">
                    {f.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Milestone band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          <Milestone
            tag="MILESTONE 01"
            title="Below 50% ROI"
            body="We earn 0% of your profit. Capital is being recovered first."
            highlight={false}
          />
          <Milestone
            tag="MILESTONE 02"
            title="ROI clears 50%"
            body="Our profit share unlocks at 10%. You still keep 90% of every dollar."
            highlight={true}
          />
          <Milestone
            tag="MILESTONE 03"
            title="ROI clears 100%"
            body="Our share moves to 20%. Your share moves to 80%. Compounding from here."
            highlight={false}
          />
        </motion.div>

        <p className="mt-10 text-center text-white/55 text-sm max-w-xl mx-auto leading-relaxed">
          Plain English: we get paid after you do. The split is structured so
          our incentive is your ROI — not a course sale or a retainer.
        </p>
      </div>
    </section>
  );
}

function NumberCard({
  value,
  label,
  sub,
  accent,
}: {
  value: React.ReactNode;
  label: string;
  sub: string;
  accent: "yellow" | "azure" | "white";
}) {
  const styles =
    accent === "yellow"
      ? "bg-brand-yellow text-brand-navy"
      : accent === "azure"
      ? "bg-brand-azure text-white"
      : "bg-white/[0.04] border border-white/10 text-white backdrop-blur-md";

  return (
    <div className={`rounded-3xl p-7 ${styles}`}>
      <div className="font-black text-5xl sm:text-6xl tracking-tight leading-none">
        {value}
      </div>
      <div className="mt-4 font-bold text-base">{label}</div>
      <div
        className={`mt-1 font-display text-xs tracking-[0.2em] ${
          accent === "white" ? "text-white/45" : "text-current opacity-70"
        }`}
      >
        {sub}
      </div>
    </div>
  );
}

function Milestone({
  tag,
  title,
  body,
  highlight,
}: {
  tag: string;
  title: string;
  body: string;
  highlight: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        highlight
          ? "bg-brand-yellow/10 border-brand-yellow/40"
          : "bg-white/[0.03] border-white/10"
      }`}
    >
      <div
        className={`font-display text-xs tracking-[0.25em] mb-2 ${
          highlight ? "text-brand-yellow" : "text-brand-azure"
        }`}
      >
        {tag}
      </div>
      <div className="font-bold text-white text-lg tracking-tight">{title}</div>
      <p className="mt-2 text-white/65 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
