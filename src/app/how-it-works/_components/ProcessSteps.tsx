"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ClipboardCheck,
  Search,
  Factory,
  Rocket,
  TrendingUp,
  Crown,
  CheckCircle2,
  User,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

type Step = {
  num: string;
  title: string;
  short: string;
  long: string;
  timeframe: string;
  icon: typeof ClipboardCheck;
  yourRole: string;
  ourRole: string;
  deliverables: string[];
};

const steps: Step[] = [
  {
    num: "01",
    title: "Onboarding & capital plan",
    short: "We meet, we vet, we set the financial runway together.",
    long:
      "A 90-minute kickoff call with your account lead and our investment team. We walk you through the capital plan, profit-share mechanics, IP ownership, and operating cadence. Capital is escrowed on a launch-by-launch basis — you control disbursement.",
    timeframe: "Week 0 – 1",
    icon: ClipboardCheck,
    yourRole:
      "Approve the capital plan. Sign the operating agreement. Wire first-launch capital.",
    ourRole:
      "Vet your financial position. Assemble your launch team. Share the playbook.",
    deliverables: [
      "Operating agreement & capital plan",
      "Dedicated account lead + Slack channel",
      "Onboarding deck with milestones",
    ],
  },
  {
    num: "02",
    title: "Research & product validation",
    short: "We mine 1,000+ past launches to find products with proven margin.",
    long:
      "Our research team runs proprietary scans across Amazon, competitor data, Helium 10, and our own historical wins. We score opportunities on demand stability, margin floor, IP defensibility, and supplier reliability. You get a top-3 shortlist with full P&L modelling.",
    timeframe: "Week 1 – 3",
    icon: Search,
    yourRole:
      "Review the shortlist. Approve the launch product (or request revisions).",
    ourRole:
      "Niche analysis, demand modelling, competitor teardown, P&L projection.",
    deliverables: [
      "3-product shortlist with rationale",
      "Full P&L per candidate (12 months)",
      "Supplier longlist with country & MOQ",
    ],
  },
  {
    num: "03",
    title: "Source, sample & ship",
    short: "Vetted suppliers, QC inspections, freight — all run for you.",
    long:
      "Sourcing team runs a full RFQ, negotiates MOQ and unit economics, brings in 3 supplier samples, and arranges third-party QC inspection before bulk. Freight, customs, FBA prep — handled. You sign off on the sample. We move the goods.",
    timeframe: "Week 4 – 10",
    icon: Factory,
    yourRole:
      "Approve the sample. Sign the bulk PO. Stay informed via weekly ops digests.",
    ourRole:
      "Supplier RFQ, sample sourcing, QC, freight, customs clearance, FBA prep.",
    deliverables: [
      "3 vetted samples delivered to your office",
      "Final supplier contract & PO",
      "Inbound shipment to FBA with tracking",
    ],
  },
  {
    num: "04",
    title: "Launch with precision",
    short: "Listing, creative, PPC ramp, and review velocity from day one.",
    long:
      "Listing copy, A+ content, photography, and explainer video are built before goods hit FBA. Launch week: structured PPC ramp across exact, broad, and ASIN-targeted campaigns. Review velocity managed inside Amazon ToS. We're chasing best-seller flag, not just impressions.",
    timeframe: "Week 11 – 14",
    icon: Rocket,
    yourRole:
      "Approve the listing & creative. Watch the launch dashboard in real time.",
    ourRole:
      "Listing build, creative production, PPC architecture, launch-week ops.",
    deliverables: [
      "Live listing with A+ content + brand store",
      "Launch-week PPC campaign suite",
      "Daily-cadence launch dashboard",
    ],
  },
  {
    num: "05",
    title: "Optimise & scale",
    short: "Weekly tuning. Monthly strategy. Winners get aggressive reinvestment.",
    long:
      "Once stable, we move into operating mode. PPC tuning, listing iteration, BSR tracking, inventory replenishment, variant expansion. We push winners hard and retire underperformers without ego — that's the portfolio model. You get a monthly P&L and a strategy call.",
    timeframe: "Month 4 – 12",
    icon: TrendingUp,
    yourRole:
      "Monthly strategy call. Approve major capital re-allocation. Track P&L.",
    ourRole:
      "Daily PPC management, listing optimization, replenishment, expansion strategy.",
    deliverables: [
      "Weekly ops report + monthly P&L",
      "Strategy call with account lead",
      "Variant & SKU expansion roadmap",
    ],
  },
  {
    num: "06",
    title: "Compound & exit optionality",
    short: "Stack 3 launches. Decide whether to hold, scale further, or exit.",
    long:
      "By month 18 you have a 3-product portfolio with mature P&L and a documented operating system. From here it's your call — keep us running it on retainer, take it in-house, or pursue an aggregator exit. We've supported sellers on all three paths.",
    timeframe: "Month 12 – 18+",
    icon: Crown,
    yourRole:
      "Decide the next chapter — hold, scale, or exit. The brand is yours.",
    ourRole:
      "Exit-readiness audit. Aggregator introductions if you want them. Continue operating if you don't.",
    deliverables: [
      "3-product portfolio with full ops history",
      "Exit-readiness pack & valuation memo",
      "Aggregator intros (if pursuing exit)",
    ],
  },
];

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative bg-brand-navy text-white py-24 sm:py-32 overflow-hidden texture-grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(54,128,195,0.15)_0%,_transparent_50%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE OPERATING SYSTEM"
          variant="dark"
          title={
            <>
              Six phases.{" "}
              <span className="text-brand-yellow">One proven playbook.</span>
            </>
          }
          subtitle="The same operating system runs every engagement — done-for-you brand builds, mentorship advice, and the playbook we apply across Amazon, Walmart, and TikTok Shop. Click any phase to open the detail."
        />

        {/* Phase chip nav (desktop) */}
        <div className="mt-12 hidden lg:flex items-center justify-center gap-2 flex-wrap">
          {steps.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-2.5 rounded-full px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-brand-yellow text-brand-navy"
                    : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span
                  className={`font-display text-xs tracking-[0.2em] ${
                    isActive ? "text-brand-navy/60" : "text-brand-yellow"
                  }`}
                >
                  {s.num}
                </span>
                <span className="font-semibold text-sm tracking-tight">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active step deep-dive (desktop) */}
        <motion.div
          key={steps[active].num}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 hidden lg:grid lg:grid-cols-[1.1fr_1fr] gap-6"
        >
          {/* Left — narrative */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8">
            <div className="flex items-center gap-4">
              <span className="font-display text-7xl text-brand-yellow leading-none tracking-tight">
                {steps[active].num}
              </span>
              <span className="inline-block font-display text-sm tracking-[0.25em] text-brand-azure">
                {steps[active].timeframe}
              </span>
            </div>
            <h3 className="mt-5 font-black text-3xl xl:text-4xl tracking-tight leading-tight text-white">
              {steps[active].title}
            </h3>
            <p className="mt-4 text-white/75 text-lg leading-relaxed text-pretty">
              {steps[active].long}
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <RoleCard
                icon={User}
                label="YOUR ROLE"
                body={steps[active].yourRole}
                accent="yellow"
              />
              <RoleCard
                icon={Users}
                label="OUR ROLE"
                body={steps[active].ourRole}
                accent="azure"
              />
            </div>
          </div>

          {/* Right — deliverables */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8">
            <div className="font-display text-sm tracking-[0.25em] text-brand-yellow mb-6">
              WHAT YOU&rsquo;LL RECEIVE
            </div>
            <ul className="space-y-4">
              {steps[active].deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-white/85">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy mt-0.5">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-2">
              <button
                onClick={() => setActive((a) => (a > 0 ? a - 1 : a))}
                disabled={active === 0}
                className="flex-1 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.08] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition"
              >
                ← Previous
              </button>
              <button
                onClick={() =>
                  setActive((a) => (a < steps.length - 1 ? a + 1 : a))
                }
                disabled={active === steps.length - 1}
                className="flex-1 rounded-xl bg-brand-yellow px-4 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-yellow-light disabled:opacity-30 disabled:pointer-events-none transition"
              >
                Next phase →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile / tablet: scrolling timeline (matches AboutStory) */}
        <div ref={ref} className="lg:hidden relative mt-16 max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-[2px]">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-yellow via-brand-yellow to-brand-azure rounded-full"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy border-2 border-brand-yellow shadow-[0_0_0_8px_rgba(2,39,102,1),0_0_40px_rgba(244,205,29,0.3)]">
                    <Icon
                      className="h-6 w-6 text-brand-yellow"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-4xl text-brand-yellow leading-none tracking-tight">
                        {step.num}
                      </span>
                      <span className="font-display text-xs tracking-[0.25em] text-brand-azure">
                        {step.timeframe}
                      </span>
                    </div>
                    <h3 className="mt-4 font-black text-xl tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed text-pretty">
                      {step.long}
                    </p>

                    <div className="mt-5 grid gap-2">
                      <div className="rounded-xl border border-brand-yellow/25 bg-brand-yellow/5 p-3">
                        <div className="font-display text-[10px] tracking-[0.25em] text-brand-yellow mb-1">
                          YOUR ROLE
                        </div>
                        <div className="text-white/85 text-sm leading-snug">
                          {step.yourRole}
                        </div>
                      </div>
                      <div className="rounded-xl border border-brand-azure/30 bg-brand-azure/5 p-3">
                        <div className="font-display text-[10px] tracking-[0.25em] text-brand-azure mb-1">
                          OUR ROLE
                        </div>
                        <div className="text-white/85 text-sm leading-snug">
                          {step.ourRole}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleCard({
  icon: Icon,
  label,
  body,
  accent,
}: {
  icon: typeof User;
  label: string;
  body: string;
  accent: "yellow" | "azure";
}) {
  const isYellow = accent === "yellow";
  return (
    <div
      className={`rounded-2xl p-5 border ${
        isYellow
          ? "border-brand-yellow/25 bg-brand-yellow/5"
          : "border-brand-azure/30 bg-brand-azure/5"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            isYellow
              ? "bg-brand-yellow text-brand-navy"
              : "bg-brand-azure text-white"
          }`}
        >
          <Icon className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <span
          className={`font-display text-xs tracking-[0.25em] ${
            isYellow ? "text-brand-yellow" : "text-brand-azure"
          }`}
        >
          {label}
        </span>
      </div>
      <p className="text-white/85 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
