"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, X, Smartphone } from "lucide-react";
import { ExploreServices } from "@/components/ui/ExploreServices";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

function AskSunnyHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate bg-brand-navy h-screen flex items-center pt-24 pb-12 texture-grain overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(54,128,195,0.22),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_85%_75%,rgba(244,205,29,0.1),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <motion.div aria-hidden style={{ y }} className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[28rem] sm:text-[38rem] leading-none text-white/[0.04] tracking-tighter">SA</span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mb-8"
        >
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-azure/30 bg-brand-azure/10 backdrop-blur-sm px-5 py-2 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              <span className="font-display text-sm tracking-[0.22em] text-brand-azure">ASK SUNNY ALI</span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] text-white"
              >
                Direct access to{" "}
                <span className="text-brand-yellow">Sunny Ali.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="text-base sm:text-lg lg:text-xl text-white/65 font-light leading-snug text-pretty max-w-2xl"
            >
              Monthly strategy sessions. WhatsApp voice notes. The playbook from
              1,000+ launches — applied directly to your business, not a generic
              framework.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {["Monthly Zooms", "WhatsApp access", "1,000+ launches", "Direct feedback"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-white/80 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" />
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
              className="mt-8"
            >
              <Button href="#apply" size="lg" variant="primary" arrow>Apply for Ask Sunny Ali</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="relative h-full w-full rounded-[2rem] bg-gradient-to-br from-brand-navy-600 via-brand-navy to-brand-navy-700 overflow-hidden border border-white/10">
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none">
                <Image
                  src="/brand/SA-1-(2).png"
                  alt="Sunny Ali"
                  width={640}
                  height={960}
                  priority
                  className="h-[82%] w-auto object-contain object-bottom select-none mix-blend-lighten"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent pointer-events-none" />

              <div className="relative h-full p-6 sm:p-7 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 px-3 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-display text-[10px] tracking-[0.22em] text-white/80 uppercase">
                      Replies within 24h
                    </span>
                  </div>
                </div>

                <div>
                  <div className="font-display text-[15px] tracking-[0.1em] text-brand-yellow uppercase">
                    Your mentor
                  </div>
                  <div className="mt-2 font-black text-white text-3xl sm:text-4xl tracking-tight leading-[0.95]">
                    Sunny Ali
                  </div>
                  <div className="mt-1.5 text-white/65 text-sm">
                    Founder, Extreme Commerce · 10+ years on Amazon
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1 }}
              className="absolute -left-3 sm:-left-6 bottom-20 max-w-[260px] rounded-2xl bg-white p-4 shadow-2xl shadow-black/40 rotate-[-3deg]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="h-3.5 w-3.5 text-emerald-600" />
                <span className="font-display text-[10px] tracking-[0.2em] text-brand-navy/60 uppercase">
                  Whatsapp · Yesterday
                </span>
              </div>
              <div className="text-sm text-brand-navy leading-snug font-medium">
                &ldquo;Pause the PPC on ASIN-3. Push the budget to ASIN-1 — your conversion just jumped 18%. Move now.&rdquo;
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] text-brand-navy/45">
                <span className="font-display tracking-[0.18em] uppercase">Voice note</span>
                <span>· 0:47</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
              className="absolute -right-3 sm:-right-5 top-12 rounded-2xl bg-brand-yellow px-4 py-3 shadow-xl shadow-brand-yellow/30 rotate-[4deg]"
            >
              <div className="font-display text-2xl text-brand-navy leading-none font-black tracking-tight">
                <Counter to={1000} suffix="+" />
              </div>
              <div className="mt-1 text-[10px] tracking-[0.18em] text-brand-navy/70 uppercase font-display">
                Launches advised
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em] z-10"
      >
        <span>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── What's Included ──────────────────────────────────────────────────────────

const inclusions = [
  { title: "Monthly Strategy Zoom", body: "60-minute 1:1 session. Recorded. Action-item driven. No fluff." },
  { title: "WhatsApp Voice Notes", body: "Direct strategic guidance between sessions. Async but fast." },
  { title: "Launch Review", body: "Sunny reviews your active or upcoming launch and gives direct feedback." },
  { title: "Resource Access", body: "Playbooks, SOP templates, supplier checklists from the EC operation." },
];

function AskSunnyInclusions() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-[17px] tracking-[0.08em] text-brand-navy"
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
            Advice that moves the needle.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                <h3 className="font-bold text-brand-navy text-base leading-tight mb-2">{card.title}</h3>
                <p className="text-sm text-brand-navy/75 leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative rounded-3xl bg-brand-navy text-white p-7 overflow-hidden"
          >
            <div aria-hidden className="absolute -right-4 -top-4 font-display text-[12rem] leading-none text-white/[0.04] pointer-events-none select-none">&ldquo;</div>
            <div className="relative">
              <div className="h-1 w-10 rounded-full bg-brand-yellow mb-6" />
              <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed font-light text-pretty">
                &ldquo;I don&rsquo;t teach a framework. I look at your specific
                numbers, your specific product, and tell you exactly what
                I&rsquo;d do.&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow font-display text-brand-navy font-black text-sm">SA</div>
                <div>
                  <div className="font-bold text-white text-sm">Sunny Ali</div>
                  <div className="text-white/50 text-xs">Founder &amp; CEO, Extreme Commerce</div>
                </div>
              </footer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Who It's For ─────────────────────────────────────────────────────────────

function AskSunnyFit() {
  const forYou = [
    "Already selling on Amazon ($5K+/mo)",
    "Want to break through a revenue plateau",
    "Need strategic guidance, not day-to-day ops",
    "Value directness and specific feedback",
  ];
  const notForYou = [
    "Just starting out with no product yet",
    "Need someone to run your account day-to-day",
    "Looking for a course or programme",
    "Prefer group coaching over 1:1 access",
  ];

  return (
    <section className="bg-brand-navy/[0.03] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
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

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative rounded-3xl bg-brand-navy p-7 sm:p-8 overflow-hidden"
          >
            <div aria-hidden className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none">✓</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 mb-6">
                <Check className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={3} />
                <span className="font-display text-[17px] tracking-[0.08em] text-brand-yellow">FOR YOU</span>
              </div>
              <ul className="space-y-3">
                {forYou.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-brand-navy/10 bg-white p-7 sm:p-8 overflow-hidden"
          >
            <div aria-hidden className="absolute -right-10 -top-10 font-display text-[14rem] leading-none text-brand-navy/[0.04] pointer-events-none select-none">✗</div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 mb-6">
                <X className="h-3.5 w-3.5 text-brand-navy/50" strokeWidth={3} />
                <span className="font-display text-[17px] tracking-[0.08em] text-brand-navy/60">NOT FOR YOU</span>
              </div>
              <ul className="space-y-3">
                {notForYou.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-brand-navy/15 text-brand-navy/40">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-brand-navy/75 leading-snug">{item}</span>
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

// ─── CTA ──────────────────────────────────────────────────────────────────────

function AskSunnyCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="apply"
      ref={ref}
      className="relative text-white py-16 sm:py-24 texture-grain overflow-hidden"
      style={{ background: "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)", marginBottom: "-2px" }}
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,128,195,0.18),transparent_60%)]" />
      <motion.div aria-hidden style={{ y: bgY }} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20rem] sm:text-[32rem] leading-none text-white/[0.04] tracking-tighter">SA</span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-black tracking-tight text-3xl sm:text-4xl lg:text-[48px] leading-[1.05] text-balance"
        >
          Work directly with{" "}
          <span className="text-brand-yellow">Sunny.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          className="mt-6 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
        >
          Limited spots. Apply to check availability and see if this is the right fit.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/apply" size="lg" variant="primary" arrow>Apply for Ask Sunny Ali</Button>
          <Button href="/services" size="lg" variant="ghost">View all services</Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AskSunnyAliPage() {
  return (
    <>
      <Nav />
      <main>
        <AskSunnyHero />
        <AskSunnyInclusions />
        <AskSunnyFit />
        <ExploreServices current="ask-sunny-ali" />
        <AskSunnyCTA />
      </main>
      <Footer />
    </>
  );
}
