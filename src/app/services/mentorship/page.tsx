"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";
import { ExploreServices } from "@/components/ui/ExploreServices";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function MentorshipHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate bg-brand-navy min-h-screen flex items-center pt-24 pb-12 texture-grain overflow-hidden"
    >
      {/* Ambient gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(54,128,195,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_85%_75%,rgba(244,205,29,0.1),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-40"
      />

      {/* "SA" watermark */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[28rem] sm:text-[38rem] leading-none text-white/[0.04] tracking-tighter">
          SA
        </span>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
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
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </motion.div>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-azure/30 bg-brand-azure/10 backdrop-blur-sm px-5 py-2 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            <span className="font-display text-xs tracking-[0.22em] text-brand-azure">
              1:1 MENTORSHIP
            </span>
          </motion.div>

          {/* H1 */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-black text-4xl sm:text-5xl lg:text-[60px] leading-[0.95] tracking-tight text-white"
            >
              Direct access to{" "}
              <span className="text-brand-yellow">Sunny Ali.</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
            className="text-base sm:text-lg lg:text-xl text-white/65 font-light leading-snug text-pretty max-w-2xl"
          >
            Monthly strategy sessions. WhatsApp voice notes. The playbook from
            1,000+ launches — applied directly to your business.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {["Monthly Zooms", "WhatsApp access", "1,000+ launches"].map(
              (pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80 font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                  {pill}
                </span>
              )
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
            className="mt-8"
          >
            <Button href="#apply" size="lg" variant="primary" arrow>
              Apply for Mentorship
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/35 text-xs font-display tracking-[0.2em] z-10"
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-white/35 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Section 2: What's included ───────────────────────────────────────────────

const inclusions = [
  {
    title: "Monthly Strategy Zoom",
    body: "60-minute 1:1 session. Recorded. Action-item driven. No fluff.",
  },
  {
    title: "WhatsApp Voice Notes",
    body: "Direct strategic guidance between sessions. Async but fast.",
  },
  {
    title: "Launch Review",
    body: "Sunny reviews your active or upcoming launch and gives direct feedback.",
  },
  {
    title: "Resource Access",
    body: "Playbooks, SOP templates, supplier checklists from the EC operation.",
  },
];

function MentorshipInclusions() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-xs tracking-[0.2em] text-brand-navy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT YOU GET
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Mentorship that moves the needle.
          </motion.h2>
        </div>

        {/* Two-col layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: inclusion cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {inclusions.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.09 }}
                className="rounded-2xl border border-brand-navy/10 p-5 bg-white hover:border-brand-azure/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-navy mb-4">
                  <Check className="h-4 w-4 text-brand-yellow" strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-brand-navy text-base leading-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: quote block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative rounded-3xl bg-brand-navy text-white p-7 overflow-hidden"
          >
            {/* Decorative quotation mark */}
            <div
              aria-hidden
              className="absolute -right-4 -top-4 font-display text-[12rem] leading-none text-white/[0.04] pointer-events-none select-none"
            >
              &ldquo;
            </div>

            <div className="relative">
              <div className="h-1 w-10 rounded-full bg-brand-yellow mb-6" />
              <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed font-light text-pretty">
                &ldquo;I don&rsquo;t teach a framework. I look at your specific
                numbers, your specific product, and tell you exactly what
                I&rsquo;d do.&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow font-display text-brand-navy font-black text-sm">
                  SA
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Sunny Ali</div>
                  <div className="text-white/50 text-xs">Founder &amp; CEO</div>
                </div>
              </footer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Who it's for ──────────────────────────────────────────────────

const forYouItems = [
  "Already selling on Amazon ($5K+/mo)",
  "Want to break through a plateau",
  "Need strategic not operational help",
  "Value directness over hand-holding",
];

const notForYouItems = [
  "Just starting out with no product yet",
  "Need someone to run your account day-to-day",
  "Looking for a course or programme",
  "Prefer group coaching",
];

function MentorshipFit() {
  return (
    <section className="bg-brand-navy/5 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Built for sellers who are{" "}
            <span className="text-brand-azure">already moving.</span>
          </motion.h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative rounded-3xl bg-brand-navy p-6 sm:p-8 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none"
            >
              ✓
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 mb-6">
                <Check className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={3} />
                <span className="font-display text-xs tracking-[0.2em] text-brand-yellow">
                  FOR YOU
                </span>
              </div>
              <ul className="space-y-3">
                {forYouItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* NOT FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-brand-navy/10 bg-white p-6 sm:p-8 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-brand-navy/[0.04] pointer-events-none select-none"
            >
              ✗
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 mb-6">
                <X className="h-3.5 w-3.5 text-brand-navy/50" strokeWidth={3} />
                <span className="font-display text-xs tracking-[0.2em] text-brand-navy/60">
                  NOT FOR YOU
                </span>
              </div>
              <ul className="space-y-3">
                {notForYouItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-brand-navy/15 text-brand-navy/40">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-brand-navy/60 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: CTA ───────────────────────────────────────────────────────────

function MentorshipCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="apply"
      ref={ref}
      className="relative text-white py-14 sm:py-20 texture-grain overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      {/* Backgrounds */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,128,195,0.18),transparent_60%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[20rem] sm:text-[32rem] leading-none text-white/[0.04] tracking-tighter">
          SA
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-black tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
        >
          Work directly with{" "}
          <span className="text-brand-yellow">Sunny.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          className="mt-6 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Limited spots. Apply to check availability and see if this is the
          right fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#" size="lg" variant="primary" arrow>
            Apply for Mentorship
          </Button>
          <Button href="/services" size="lg" variant="ghost">
            View all services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────

export default function MentorshipPage() {
  return (
    <>
      <Nav />
      <main>
        <MentorshipHero />
        <MentorshipInclusions />
        <MentorshipFit />
        <ExploreServices current="mentorship" />
        <MentorshipCTA />
      </main>
      <Footer />
    </>
  );
}
