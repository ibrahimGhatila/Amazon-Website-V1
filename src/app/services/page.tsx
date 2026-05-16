"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  Play,
  MessageCircle,
} from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────
   Services data
───────────────────────────────────────── */
const services = [
  {
    tag: "AMAZON",
    title: "Elite Program — Amazon",
    description:
      "Done-for-you Amazon brand. Three launches, one dedicated team, profit split only on results.",
    href: "/elite",
    icon: Rocket,
    variant: "navy" as const,
  },
  {
    tag: "NEW",
    title: "Elite Program — TikTok",
    description:
      "Your TikTok Shop brand, built and operated for you. Creator commerce, done right.",
    href: "/elite-tiktok",
    icon: Play,
    variant: "yellow" as const,
  },
  {
    tag: "MENTORSHIP",
    title: "Ask Sunny Ali",
    description:
      "Direct access to Sunny Ali. Monthly strategy Zooms, WhatsApp voice notes, and the playbook from 1,000+ launches.",
    href: "/ask-sunny-ali",
    icon: MessageCircle,
    variant: "azure" as const,
  },
];

type Variant = "navy" | "yellow" | "azure" | "outline";

const cardStyles: Record<Variant, string> = {
  navy: "bg-brand-navy text-white border-white/10",
  yellow: "bg-brand-yellow text-brand-navy border-brand-navy/10 hover:bg-brand-yellow-light",
  azure: "bg-brand-azure text-white border-brand-azure-dark",
  outline: "bg-white text-brand-navy border-brand-navy/10 hover:border-brand-navy/25",
};

const tagStyles: Record<Variant, string> = {
  navy: "bg-brand-yellow text-brand-navy",
  yellow: "bg-brand-navy text-brand-yellow",
  azure: "bg-white/15 text-white border border-white/25 backdrop-blur-sm",
  outline: "bg-brand-navy/5 text-brand-navy border border-brand-navy/10",
};

const arrowStyles: Record<Variant, string> = {
  navy: "bg-white/10 border border-white/20 text-white",
  yellow: "bg-brand-navy/10 text-brand-navy",
  azure: "bg-white/10 border border-white/20 text-white",
  outline: "bg-brand-navy/5 text-brand-navy",
};

const iconStyles: Record<Variant, string> = {
  navy: "text-brand-yellow",
  yellow: "text-brand-navy",
  azure: "text-white",
  outline: "text-brand-azure",
};

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
function ServicesHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-brand-navy text-white min-h-screen flex items-center pt-24 pb-12 texture-grain"
    >
      {/* Ambient gradients */}
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

      {/* eX watermark — bottom-right */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute -right-24 sm:-right-40 bottom-0 -z-10 pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">
          eX
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* ── LEFT COLUMN ── */}
          <div>
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
              <span className="font-display text-sm tracking-[0.22em] text-white/90">
                OUR SERVICES
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] text-white"
            >
              Three services.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-yellow">One</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.95 }}
                  className="absolute left-0 -bottom-1 h-[5px] w-full bg-brand-yellow/20 origin-left rounded-full -z-10"
                />
              </span>{" "}
              mission.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="mt-7 text-lg sm:text-xl max-w-2xl text-white/65 leading-relaxed text-pretty"
            >
              Amazon, TikTok Shop, or direct mentorship with Sunny Ali — pick
              the right level of involvement for you.
            </motion.p>

            {/* Quick nav pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:border-brand-yellow/30 hover:text-white transition-all duration-300"
                >
                  <s.icon className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={2} />
                  {s.title}
                </Link>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN — floating card visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative hidden lg:block h-[520px] w-full"
          >
            {/* Card 1 — yellow, top-right */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-3xl p-6 shadow-2xl shadow-brand-yellow/20 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark"
            >
              <p className="font-display text-[10px] tracking-[0.22em] text-brand-navy/60">
                ACTIVE CLIENTS
              </p>
              <Counter
                to={247}
                duration={2.2}
                className="font-black text-brand-navy text-5xl tracking-tight mt-2 block"
              />
              <p className="text-xs text-brand-navy/55 mt-2">
                Businesses currently managed
              </p>
              <div className="mt-4 flex gap-1.5">
                {[true, false, true, true].map((filled, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 flex-1 rounded-full ${filled ? "bg-brand-navy/80" : "bg-brand-navy/20"}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Card 2 — glass dark, middle-left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[26%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl"
            >
              <p className="font-display text-[10px] tracking-[0.2em] text-white/50 mb-3">
                OUR SERVICES
              </p>
              {(
                [
                  { Icon: Rocket,        name: "Elite — Amazon",  tag: "AMAZON"     },
                  { Icon: Play,          name: "Elite — TikTok",  tag: "TIKTOK"     },
                  { Icon: MessageCircle, name: "Ask Sunny Ali",   tag: "MENTORSHIP" },
                ] as { Icon: React.ElementType; name: string; tag: string }[]
              ).map(({ Icon, name, tag }) => (
                <div key={name} className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-brand-yellow" />
                    <span className="text-xs text-white/75">{name}</span>
                  </div>
                  <span className="text-[10px] font-display text-brand-yellow/60">{tag}</span>
                </div>
              ))}
            </motion.div>

            {/* Card 3 — azure, bottom-right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[5%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30"
            >
              <p className="text-white/70 text-xs font-display tracking-[0.2em]">
                AVG ROAS
              </p>
              <Counter
                to={32}
                duration={2}
                formatFn={(n) => (n / 10).toFixed(1) + "x"}
                className="font-black text-white text-4xl mt-2 block"
              />
              <p className="text-white/60 text-xs mt-1">
                Across managed ad accounts
              </p>
            </motion.div>

            {/* Orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="h-[380px] w-[380px] rounded-full border border-white/5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em]"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Services Grid Section
───────────────────────────────────────── */
function ServicesGrid() {
  return (
    <section className="relative bg-white py-10 sm:py-14 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-navy opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section eyebrow */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-sm tracking-[0.2em] text-brand-navy mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            WHAT WE DO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.07 }}
            className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
          >
            Everything your Amazon
            <br />
            <span className="text-brand-azure">business needs to win.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
            className="mt-5 text-lg text-brand-navy/75 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            From done-for-you launches to trained virtual assistants — pick
            your level of involvement.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const variant = service.variant;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.09 }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
              >
                <Link
                  href={service.href}
                  className={`group relative flex flex-col h-full rounded-3xl border p-6 transition-all duration-500 overflow-hidden ${cardStyles[variant]}`}
                >
                  {/* Navy card: decorative eX watermark */}
                  {variant === "navy" && (
                    <>
                      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
                      <div className="absolute right-4 bottom-4 font-display text-[8rem] leading-none text-white/[0.05] pointer-events-none select-none">
                        eX
                      </div>
                    </>
                  )}

                  {/* Card header: tag + arrow */}
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 font-display text-[11px] tracking-[0.2em] ${tagStyles[variant]}`}
                    >
                      {service.tag}
                    </span>
                    <span
                      className={`flex h-9 w-9 flex-none items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 ${arrowStyles[variant]}`}
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="relative mt-auto pt-8">
                    <Icon
                      className={`h-6 w-6 mb-3 ${iconStyles[variant]}`}
                      strokeWidth={1.75}
                    />
                    <h3
                      className={`font-black tracking-tight leading-[1.05] text-xl sm:text-2xl`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-snug text-pretty ${
                        variant === "navy" || variant === "azure"
                          ? "text-white/70"
                          : "text-brand-navy/65"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CTA Section
───────────────────────────────────────── */
function ServicesCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
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

      {/* eX watermark */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0"
      >
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.04] tracking-tighter">
          eX
        </span>
      </motion.div>

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-sm tracking-[0.2em] text-brand-yellow mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            GET MATCHED TO THE RIGHT SERVICE
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tight leading-[1.0] text-3xl sm:text-4xl lg:text-[44px] text-balance"
          >
            Not sure where to start?
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="font-black tracking-tight leading-[1.0] text-3xl sm:text-4xl lg:text-[44px] text-brand-yellow mt-1 text-balance"
          >
            We&rsquo;ll point you in the right direction.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
            className="mt-6 text-base sm:text-lg text-white/65 max-w-xl mx-auto leading-relaxed text-pretty"
          >
            Book a free 30-minute call. We&rsquo;ll match you to the right
            service based on your goals and capital.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button href="/apply" size="lg" variant="primary" arrow>
              Start an application
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Talk to us
            </Button>
          </motion.div>

          {/* Trust micro-row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          >
            {[
              { k: "Free", v: "30-min call" },
              { k: "< 48h", v: "Response time" },
              { k: "No pitch", v: "Just clarity" },
            ].map((item) => (
              <div key={item.k} className="text-center">
                <div className="font-display text-2xl sm:text-3xl text-brand-yellow tracking-tight leading-none">
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
export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
