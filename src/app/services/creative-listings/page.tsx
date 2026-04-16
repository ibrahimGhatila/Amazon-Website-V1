"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import {
  FileText,
  LayoutTemplate,
  Camera,
  Store,
  SearchCheck,
  ClipboardList,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────
   Deliverable cards data
───────────────────────────────────────── */
type Deliverable = {
  icon: React.ElementType;
  title: string;
  bullets: [string, string, string];
};

const deliverables: Deliverable[] = [
  {
    icon: FileText,
    title: "Listing Copywriting",
    bullets: [
      "Keyword-optimised title & bullet points",
      "Backend search terms & indexing",
      "Persuasive, conversion-first copy",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "A+ Content (EBC)",
    bullets: [
      "Brand story modules & hero banners",
      "Product comparison charts",
      "Lifestyle imagery integration",
    ],
  },
  {
    icon: Camera,
    title: "Product Photography",
    bullets: [
      "White-background hero shots",
      "Lifestyle & in-context photography",
      "Infographic & callout overlays",
    ],
  },
  {
    icon: Store,
    title: "Brand Storefront",
    bullets: [
      "Custom storefront design & layout",
      "Multi-page architecture & sub-pages",
      "Video integration & brand immersion",
    ],
  },
  {
    icon: SearchCheck,
    title: "Keyword Research",
    bullets: [
      "Deep keyword mining & opportunity scoring",
      "Competitor gap & reverse-ASIN analysis",
      "Backend optimisation & indexing checks",
    ],
  },
  {
    icon: ClipboardList,
    title: "Listing Audit & Fixes",
    bullets: [
      "Full diagnosis of existing listings",
      "Quick-win prioritisation roadmap",
      "Complete copy & creative refresh",
    ],
  },
];

/* ─────────────────────────────────────────
   Before / After stats data
───────────────────────────────────────── */
const stats = [
  {
    value: "+84%",
    label: "CTR",
    description: "Click-through rate improvement",
  },
  {
    value: "+61%",
    label: "CVR",
    description: "Conversion rate improvement",
  },
  {
    value: "+2.3x",
    label: "Sales",
    description: "Revenue growth first 60 days",
  },
];

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
function CreativeListingsHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen flex items-center pt-24 pb-12 texture-grain overflow-hidden bg-brand-navy text-white"
    >
      {/* Ambient radial gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(54,128,195,0.22)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(244,205,29,0.14)_0%,_transparent_50%)]"
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-55" />

      {/* Animated blobs */}
      <div
        aria-hidden
        className="absolute top-1/3 right-[8%] h-80 w-80 rounded-full bg-brand-azure/15 blur-3xl animate-blob -z-10"
      />
      <div
        aria-hidden
        className="absolute bottom-[20%] left-[15%] h-60 w-60 rounded-full bg-brand-yellow/10 blur-3xl animate-blob -z-10"
        style={{ animationDelay: "-10s" }}
      />

      {/* eX watermark — bottom-right parallax */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute -right-24 sm:-right-40 bottom-0 -z-10 pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mb-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Services
          </Link>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/15 px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
          </span>
          <span className="font-display text-xs tracking-[0.22em] text-white/90">
            CREATIVE &amp; LISTINGS
          </span>
        </motion.div>

        {/* H1 */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="font-black tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-[64px] text-white"
          >
            Listings that rank.
            <br />
            <span className="text-brand-yellow">Content that converts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mt-7 text-lg sm:text-xl max-w-2xl text-white/65 leading-relaxed text-pretty"
          >
            From keyword-optimised copy to A+ content and product photography —
            we craft every listing to stop the scroll and drive the sale.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Top-3 ranking", "A+ content", "Studio quality"].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-1.5 text-sm text-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="mt-10"
          >
            <Button href="#contact" size="lg" variant="primary" arrow>
              Upgrade My Listings
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   What's Included Section
───────────────────────────────────────── */
function WhatsIncluded() {
  return (
    <section className="relative bg-white py-10 sm:py-14 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-navy opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT WE DELIVER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.07 }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Every element.{" "}
            <span className="text-brand-azure">Crafted to convert.</span>
          </motion.h2>
        </div>

        {/* Deliverable cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="rounded-2xl border border-brand-navy/10 p-5 bg-white hover:border-brand-navy/20 hover:shadow-sm transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-navy/5 mb-4">
                  <Icon className="h-5 w-5 text-brand-azure" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="font-black tracking-tight text-brand-navy text-lg leading-[1.1] mb-3">
                  {item.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-brand-navy/60 leading-snug"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-brand-azure flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Before / After Section
───────────────────────────────────────── */
function BeforeAfter() {
  return (
    <section className="relative py-10 sm:py-14 overflow-hidden bg-brand-navy/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            THE DIFFERENCE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.07 }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Average results after a full listing overhaul.
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="rounded-2xl border border-brand-navy/10 bg-white p-8 text-center"
            >
              <div className="font-display text-5xl sm:text-6xl text-brand-navy tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-black text-brand-azure text-lg tracking-tight mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-brand-navy/55">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature callout card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
          className="relative rounded-2xl overflow-hidden bg-brand-navy px-8 py-8 sm:py-10 text-white"
        >
          {/* Subtle glow */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(54,128,195,0.25)_0%,_transparent_60%)]"
          />
          <div
            aria-hidden
            className="absolute right-0 bottom-0 font-display text-[10rem] leading-none text-white/[0.04] tracking-tighter pointer-events-none select-none"
          >
            eX
          </div>

          <div className="relative max-w-3xl">
            <div className="h-1 w-12 bg-brand-yellow rounded-full mb-6" />
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-pretty font-medium">
              We don&rsquo;t just make it look good. Every word, every image,
              every module is engineered for ranking and conversion — backed by
              data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CTA Section
───────────────────────────────────────── */
function CreativeListingsCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative text-white py-14 sm:py-20 overflow-hidden texture-grain"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.14)_0%,_transparent_60%)]"
      />

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      {/* eX watermark parallax */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            GET STARTED
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-[44px] text-balance"
          >
            Your best listing is the one{" "}
            <span className="text-brand-yellow">you haven&rsquo;t built yet.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.22 }}
            className="mt-6 text-base sm:text-lg text-white/65 max-w-xl mx-auto leading-relaxed text-pretty"
          >
            Book a free listing audit. We&rsquo;ll score your current content
            and show you exactly what&rsquo;s costing you clicks and
            conversions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button href="#contact" size="lg" variant="primary" arrow>
              Get a Free Audit
            </Button>
            <Button href="/services" size="lg" variant="ghost">
              View all services
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          >
            {[
              { k: "Free audit", v: "No strings attached" },
              { k: "48h turnaround", v: "Quick delivery" },
              { k: "No obligation", v: "Zero pressure" },
            ].map((item) => (
              <div key={item.k} className="text-center">
                <div className="font-display text-brand-yellow text-lg sm:text-xl tracking-tight leading-none">
                  {item.k}
                </div>
                <div className="mt-1 text-xs text-white/45">{item.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function CreativeListingsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <CreativeListingsHero />
        <WhatsIncluded />
        <BeforeAfter />
        <CreativeListingsCTA />
      </main>
      <Footer />
    </>
  );
}
