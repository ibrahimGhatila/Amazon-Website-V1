"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  BarChart2,
  MessageSquare,
  Users,
  ShoppingBag,
  Package,
  ChevronDown,
  Send,
  Sparkles,
  ClipboardList,
  PhoneCall,
  FileText,
  Zap,
  AlertTriangle,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Counter } from "@/components/ui/Counter";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─── Audit categories ─── */
const AUDIT_AREAS = [
  {
    icon: Search,
    title: "Listing Quality",
    desc: "Title, bullets, description, A+ content — scored against 1,000+ winning listings.",
    color: "text-brand-azure",
    bg: "bg-brand-azure/8",
  },
  {
    icon: TrendingUp,
    title: "PPC & Advertising",
    desc: "Keyword bids, campaign structure, ACoS, wasted spend — the full ad account teardown.",
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/8",
  },
  {
    icon: Target,
    title: "Keyword Rankings",
    desc: "Organic rank gaps, indexing issues, and the exact keywords worth chasing.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: BarChart2,
    title: "Pricing Strategy",
    desc: "Price position vs. competitors, Buy Box win rate, and margin optimisation.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: MessageSquare,
    title: "Reviews & Reputation",
    desc: "Review velocity, negative patterns, and a legal action plan to improve your rating.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    desc: "Direct competitor teardown — what they're doing right and where to undercut them.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: ShoppingBag,
    title: "Brand Store",
    desc: "Store layout, conversion rate, internal traffic flow, and missed cross-sell opportunities.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Package,
    title: "Inventory & Fulfilment",
    desc: "IPI score, reorder triggers, FBA fee analysis, and stranded inventory flags.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
];

/* ─── Process steps ─── */
const PROCESS_STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Submit Your Store",
    desc: "Fill out the short form below. Your store URL, monthly revenue, and biggest pain point is all we need to get started.",
  },
  {
    num: "02",
    icon: Search,
    title: "We Analyse Everything",
    desc: "Our team runs your store through the full 8-point audit framework — listings, ads, SEO, pricing, reviews, competitors.",
  },
  {
    num: "03",
    icon: PhoneCall,
    title: "Strategy Call",
    desc: "A 45-minute Zoom with a senior operator. We walk through every finding, answer every question.",
  },
  {
    num: "04",
    icon: FileText,
    title: "Report Delivered",
    desc: "You receive a detailed PDF report with prioritised fixes, estimated revenue impact, and a 90-day action plan.",
  },
];

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    name: "Tariq Hassan",
    role: "Private Label Seller",
    category: "Kitchen & Home",
    quote:
      "The PPC audit alone saved me $3,200/month in wasted ad spend. I had no idea my campaigns were structured so poorly. Within 60 days of fixing what they found, my ACoS dropped from 42% to 18%.",
    revenue: "+$8,400/mo",
    metric: "after implementing fixes",
    stars: 5,
  },
  {
    name: "Sana Mirza",
    role: "Brand Owner",
    category: "Beauty & Personal Care",
    quote:
      "I'd been selling for two years and thought I was doing well. The audit showed me I was leaving roughly $6K per month on the table through bad keyword targeting and pricing. Game-changing.",
    revenue: "+$6,200/mo",
    metric: "additional monthly revenue",
    stars: 5,
  },
  {
    name: "Bilal Qureshi",
    role: "Wholesale Seller",
    category: "Sports & Outdoors",
    quote:
      "Free audit, paid results. The team found three critical listing issues I'd been blind to for 18 months. Fixed them in a weekend. Conversion rate went from 9% to 14.5% in 30 days.",
    revenue: "+61%",
    metric: "conversion rate increase",
    stars: 5,
  },
];

const REVENUE_RANGES = [
  "Under $2,000/mo",
  "$2,000 – $5,000/mo",
  "$5,000 – $10,000/mo",
  "$10,000 – $25,000/mo",
  "$25,000 – $50,000/mo",
  "$50,000+/mo",
];

const CHALLENGES = [
  "Low organic ranking / visibility",
  "High ACoS / unprofitable ads",
  "Poor conversion rate",
  "Negative reviews hurting sales",
  "Losing the Buy Box",
  "Stuck revenue / plateau",
  "Just starting out",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

/* ─── Form ─── */
function AuditForm({ className }: { className?: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    storeUrl: "",
    revenue: "",
    challenge: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (!form.storeUrl.trim()) e.storeUrl = "Required";
    if (!form.revenue) e.revenue = "Required";
    if (!form.challenge) e.challenge = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1400));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className={cn("rounded-3xl bg-brand-navy p-8 flex flex-col items-center text-center gap-5", className)}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow"
        >
          <CheckCircle2 className="h-10 w-10 text-brand-navy" strokeWidth={2.5} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="font-black text-white text-2xl mb-2">Audit Request Received</h3>
          <p className="text-white/65 leading-relaxed">
            We'll review your store and reach out within <span className="text-brand-yellow font-semibold">24–48 hours</span> to schedule your strategy call. Check your inbox for a confirmation email.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full pt-4 border-t border-white/10"
        >
          <p className="text-white/40 text-sm">While you wait, explore what happens inside the Elite Program</p>
          <Link
            href="/elite"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow hover:text-white transition-colors"
          >
            View Elite Program
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "rounded-3xl bg-brand-navy p-6 sm:p-8 space-y-5",
        className
      )}
    >
      {/* Form header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-3.5 py-1.5 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
          <span className="font-display text-[11px] tracking-[0.2em] text-brand-yellow uppercase">100% Free · No Obligation</span>
        </div>
        <h3 className="font-black text-white text-xl sm:text-2xl leading-tight">
          Request Your Free Audit
        </h3>
        <p className="text-white/55 text-sm mt-1.5 leading-snug">
          Takes 2 minutes. We'll handle the rest.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide">
            Full Name <span className="text-brand-yellow">*</span>
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className={cn(
              "w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition",
              errors.name ? "border-rose-500/70" : "border-white/10 focus:border-brand-yellow/40"
            )}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide">
            Email Address <span className="text-brand-yellow">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@email.com"
            className={cn(
              "w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition",
              errors.email ? "border-rose-500/70" : "border-white/10 focus:border-brand-yellow/40"
            )}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
        </div>
      </div>

      {/* Phone + Store URL */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+92 300 000 0000"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/40 transition"
          />
        </div>
        <div>
          <label className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide">
            Amazon Store URL <span className="text-brand-yellow">*</span>
          </label>
          <input
            value={form.storeUrl}
            onChange={(e) => setForm({ ...form, storeUrl: e.target.value })}
            placeholder="amazon.com/stores/..."
            className={cn(
              "w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition",
              errors.storeUrl ? "border-rose-500/70" : "border-white/10 focus:border-brand-yellow/40"
            )}
          />
          {errors.storeUrl && <p className="mt-1 text-xs text-rose-400">{errors.storeUrl}</p>}
        </div>
      </div>

      {/* Monthly Revenue */}
      <div>
        <label className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide">
          Monthly Revenue <span className="text-brand-yellow">*</span>
        </label>
        <div className="relative">
          <select
            value={form.revenue}
            onChange={(e) => setForm({ ...form, revenue: e.target.value })}
            className={cn(
              "w-full appearance-none rounded-xl bg-white/5 border px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition cursor-pointer",
              !form.revenue && "text-white/30",
              errors.revenue ? "border-rose-500/70" : "border-white/10 focus:border-brand-yellow/40"
            )}
          >
            <option value="" className="bg-brand-navy text-white/50">Select range…</option>
            {REVENUE_RANGES.map((r) => (
              <option key={r} value={r} className="bg-brand-navy text-white">{r}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
        </div>
        {errors.revenue && <p className="mt-1 text-xs text-rose-400">{errors.revenue}</p>}
      </div>

      {/* Main Challenge */}
      <div>
        <label className="block text-white/60 text-xs font-medium mb-1.5 tracking-wide">
          Biggest Challenge <span className="text-brand-yellow">*</span>
        </label>
        <div className="relative">
          <select
            value={form.challenge}
            onChange={(e) => setForm({ ...form, challenge: e.target.value })}
            className={cn(
              "w-full appearance-none rounded-xl bg-white/5 border px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition cursor-pointer",
              !form.challenge && "text-white/30",
              errors.challenge ? "border-rose-500/70" : "border-white/10 focus:border-brand-yellow/40"
            )}
          >
            <option value="" className="bg-brand-navy text-white/50">Select challenge…</option>
            {CHALLENGES.map((c) => (
              <option key={c} value={c} className="bg-brand-navy text-white">{c}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
        </div>
        {errors.challenge && <p className="mt-1 text-xs text-rose-400">{errors.challenge}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-brand-yellow text-brand-navy font-bold py-4 px-6 text-base hover:bg-brand-yellow-light shadow-[0_10px_30px_-8px_rgba(244,205,29,0.55)] hover:shadow-[0_15px_40px_-8px_rgba(244,205,29,0.75)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
      >
        {state === "submitting" ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Get My Free Audit
          </>
        )}
      </button>

      <p className="text-white/30 text-xs text-center leading-relaxed">
        No credit card. No sales pitch. Just an honest audit delivered within 48 hours.
      </p>
    </form>
  );
}

/* ─── PAGE ─── */
export default function AmazonAuditPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-brand-navy overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Background texture */}
        <div aria-hidden className="absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_80%)]" />
        <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — hero copy */}
            <div className="max-w-xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 mb-6"
              >
                <Zap className="h-3.5 w-3.5 text-brand-yellow" />
                <span className="font-display text-[11px] tracking-[0.22em] text-brand-yellow uppercase">
                  Free · No Obligation · 48-Hour Turnaround
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
                className="font-black text-white text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.04] tracking-tight"
              >
                Your Amazon Store Is Leaking Revenue.{" "}
                <span className="text-brand-yellow">We'll Find Where.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
                className="mt-5 text-white/65 text-lg leading-relaxed"
              >
                Our experts audit your listings, ads, rankings, pricing, reviews, and competitors. One call. A full PDF report. Zero cost.
              </motion.p>

              {/* Trust stars */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
                className="mt-7 flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm font-medium">4.9/5 from 200+ sellers</span>
                </div>
                <div className="h-4 w-px bg-white/15 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                  <span className="text-white/70 text-sm font-medium">1,000+ audits completed</span>
                </div>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
                className="mt-10 grid grid-cols-3 gap-4"
              >
                {[
                  { value: 1000, suffix: "+", label: "Audits done" },
                  { value: 8, suffix: "-point", label: "Framework" },
                  { value: 48, suffix: "hr", label: "Turnaround" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <div className="font-black text-white text-2xl leading-none">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/45 text-xs mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Warning callout */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.36 }}
                className="mt-8 flex items-start gap-3 rounded-2xl border border-rose-500/25 bg-rose-500/8 p-4"
              >
                <AlertTriangle className="h-5 w-5 flex-none text-rose-400 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-white font-semibold">95% of Amazon sellers are leaving money on the table.</span> The average audit we complete uncovers{" "}
                  <span className="text-rose-300 font-semibold">3–5 critical revenue leaks</span> the seller had no idea existed.
                </p>
              </motion.div>
            </div>

            {/* Right — form (desktop: sticky-ish, positioned at top) */}
            <motion.div
              id="request-audit"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="lg:sticky lg:top-28 scroll-mt-28"
            >
              <AuditForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What We Audit ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-display text-sm tracking-[0.22em] text-brand-navy/45 uppercase mb-3"
            >
              The Full Picture
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
              className="font-black text-brand-navy text-3xl sm:text-4xl tracking-tight leading-tight"
            >
              8 areas. Zero blind spots.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
              className="mt-4 text-brand-navy/60 text-lg leading-relaxed"
            >
              Every audit covers all eight pillars of a successful Amazon store. Nothing is skipped.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUDIT_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
                  className="group rounded-2xl border border-brand-navy/8 bg-white p-5 hover:border-brand-navy/20 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300"
                >
                  <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-110", area.bg)}>
                    <Icon className={cn("h-5 w-5", area.color)} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-1.5 leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-brand-navy/55 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What You Get band ── */}
      <section className="bg-brand-navy py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: FileText, title: "Detailed PDF Report", desc: "Every finding documented, scored, and prioritised by revenue impact." },
              { icon: PhoneCall, title: "45-Min Strategy Call", desc: "A 1:1 with a senior operator to walk through your report in full." },
              { icon: Target, title: "90-Day Action Plan", desc: "Exact fixes ranked by effort vs. impact so you know what to do first." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-display text-sm tracking-[0.22em] text-brand-navy/45 uppercase mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
              className="font-black text-brand-navy text-3xl sm:text-4xl tracking-tight"
            >
              From form to report in 4 steps
            </motion.h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:flex items-start gap-0 relative">
            {/* Connector line */}
            <div aria-hidden className="absolute top-[2.625rem] left-[calc(12.5%_-_0.5px)] right-[calc(12.5%_-_0.5px)] h-px bg-brand-navy/10" />
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center px-6"
                >
                  <div className="relative z-10 flex h-[5.25rem] w-[5.25rem] flex-col items-center justify-center rounded-full bg-brand-navy text-brand-yellow mb-5 shadow-xl shadow-brand-navy/20">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                    <span className="font-display text-[10px] tracking-widest text-brand-yellow/60 mt-0.5">{step.num}</span>
                  </div>
                  <h3 className="font-black text-brand-navy text-lg mb-2 leading-tight">{step.title}</h3>
                  <p className="text-brand-navy/55 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: vertical */}
          <div className="flex lg:hidden flex-col gap-0 relative pl-6">
            <div aria-hidden className="absolute left-[2.75rem] top-0 bottom-0 w-px bg-brand-navy/10" />
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  className="flex gap-5 pb-8 last:pb-0"
                >
                  <div className="relative z-10 flex h-14 w-14 flex-none flex-col items-center justify-center rounded-full bg-brand-navy text-brand-yellow shadow-lg shadow-brand-navy/20 shrink-0">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                    <span className="font-display text-[9px] tracking-widest text-brand-yellow/60 mt-0.5">{step.num}</span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-black text-brand-navy text-lg mb-1.5">{step.title}</h3>
                    <p className="text-brand-navy/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-brand-navy/3 border-y border-brand-navy/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-display text-sm tracking-[0.22em] text-brand-navy/45 uppercase mb-3"
            >
              Seller Results
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
              className="font-black text-brand-navy text-3xl sm:text-4xl tracking-tight"
            >
              Audits that changed businesses
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col rounded-3xl bg-white border border-brand-navy/8 p-6 shadow-sm hover:shadow-lg hover:shadow-brand-navy/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                <blockquote className="text-brand-navy/70 text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </blockquote>

                {/* Result callout */}
                <div className="rounded-xl bg-brand-navy/3 border border-brand-navy/8 p-3.5 mb-4">
                  <div className="font-black text-brand-navy text-2xl leading-none">{t.revenue}</div>
                  <div className="text-brand-navy/50 text-xs mt-0.5">{t.metric}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-navy/8 flex items-center justify-center text-brand-navy font-black text-base">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy text-sm">{t.name}</div>
                    <div className="text-brand-navy/45 text-xs">{t.role} · {t.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why trust us ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {[
              { icon: Award, value: "1,000+", label: "Audits completed", color: "text-brand-yellow", bg: "bg-brand-yellow/8" },
              { icon: TrendingUp, value: "1,000+", label: "Amazon launches led", color: "text-brand-azure", bg: "bg-brand-azure/8" },
              { icon: Shield, value: "100%", label: "Free, no strings", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: Users, value: "10+", label: "Years on Amazon", color: "text-purple-500", bg: "bg-purple-50" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  className="rounded-2xl border border-brand-navy/8 bg-white p-6"
                >
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-4", item.bg)}>
                    <Icon className={cn("h-6 w-6", item.color)} strokeWidth={1.75} />
                  </div>
                  <div className="font-black text-brand-navy text-2xl">{item.value}</div>
                  <div className="text-brand-navy/50 text-sm mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-brand-navy py-16 sm:py-20 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid-white/[0.03]" />
        <div aria-hidden className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-display text-sm tracking-[0.22em] text-brand-yellow/70 uppercase mb-4"
          >
            Ready?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.06 }}
            className="font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05]"
          >
            Stop guessing.{" "}
            <span className="text-brand-yellow">Start fixing.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
            className="mt-5 text-white/60 text-lg leading-relaxed mx-auto max-w-xl"
          >
            Most sellers spend months (or years) wondering why their store isn&apos;t growing. One audit changes that. It&apos;s free. There&apos;s no catch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto text-left"
          >
            {[
              "Full 8-area audit framework",
              "45-minute 1:1 strategy call",
              "Detailed PDF report",
              "90-day prioritised action plan",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/75 text-sm">
                <CheckCircle2 className="h-5 w-5 flex-none text-brand-yellow" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
            className="mt-10"
          >
            <Link
              href="#request-audit"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-navy font-bold px-8 py-4 text-base hover:bg-brand-yellow-light shadow-[0_10px_30px_-8px_rgba(244,205,29,0.55)] hover:shadow-[0_15px_40px_-8px_rgba(244,205,29,0.75)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Your Free Audit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
