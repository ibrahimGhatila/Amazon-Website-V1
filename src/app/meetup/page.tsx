"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Mic,
  Network,
  Sparkles,
  Coffee,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

function MeetupHero() {
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
      className="relative isolate bg-brand-navy min-h-[88vh] flex items-center pt-24 pb-12 texture-grain overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(54,128,195,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_85%_75%,rgba(244,205,29,0.1),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[22rem] sm:text-[34rem] leading-none text-white/[0.035] tracking-tighter">
          MEETUP
        </span>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-5 py-2 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              <span className="font-display text-sm tracking-[0.22em] text-brand-yellow">
                FREE COMMUNITY EVENT
              </span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] text-white"
              >
                Meet the people{" "}
                <span className="text-brand-yellow">building real brands.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="text-base sm:text-lg lg:text-xl text-white/65 font-light leading-snug text-pretty max-w-2xl"
            >
              Free, in-person meetups across Karachi, Lahore, Dubai, and beyond.
              Real conversations with operators, investors, and Sunny Ali — no
              pitch decks, no gatekeeping, just the people behind the launches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button href="#upcoming" size="lg" variant="primary" arrow>
                See upcoming meetups
              </Button>
              <Link
                href="#what-happens"
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white px-3 py-3 font-semibold text-sm"
              >
                What actually happens
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
              className="mt-10 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl text-brand-yellow leading-none">
                  <Counter to={50} suffix="+" duration={2.2} />
                </div>
                <div className="mt-2 text-xs text-white/55 font-display tracking-[0.18em]">
                  MEETUPS HOSTED
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl text-brand-yellow leading-none">
                  <Counter to={12} suffix="+" duration={2.2} />
                </div>
                <div className="mt-2 text-xs text-white/55 font-display tracking-[0.18em]">
                  CITIES
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl text-brand-yellow leading-none">
                  <Counter to={10000} suffix="+" duration={2.4} />
                </div>
                <div className="mt-2 text-xs text-white/55 font-display tracking-[0.18em]">
                  ATTENDEES
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sunny Ali portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-yellow/15 via-transparent to-brand-azure/15 blur-2xl" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-700">
              <Image
                src="/brand/SA-1-(2).png"
                alt="Sunny Ali hosting an Extreme Commerce meetup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent p-6">
                <div className="font-display text-xs tracking-[0.22em] text-brand-yellow">
                  HOSTED BY
                </div>
                <div className="mt-1 font-black text-white text-xl tracking-tight">
                  Sunny Ali
                </div>
                <div className="text-white/60 text-sm">
                  Founder, Extreme Commerce
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── What happens ─────────────────────────────────────────────────────────────

const moments = [
  {
    icon: Mic,
    title: "A real talk, not a sales pitch",
    desc: "Sunny shares what's actually working — recent launches, what failed, what changed in the market this quarter. Honest, current, useful.",
  },
  {
    icon: Network,
    title: "Operators in the room",
    desc: "You'll meet sellers running 6 and 7-figure brands, sourcing agents, freight folks, and PPC specialists. The kind of people you can't find on LinkedIn.",
  },
  {
    icon: Lightbulb,
    title: "Open Q&A",
    desc: "Bring your problem. Ask in front of the room or 1-on-1 after. We've answered everything from cold-start to scale to exit.",
  },
  {
    icon: Coffee,
    title: "Hang out",
    desc: "Food, coffee, no agenda. The best deals and partnerships happen in the second hour, not the first.",
  },
];

function MeetupWhat() {
  return (
    <section
      id="what-happens"
      className="relative bg-white py-24 sm:py-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT ACTUALLY HAPPENS"
          title={
            <>
              Free to attend.
              <br />
              <span className="text-brand-azure">No pitch deck.</span>
            </>
          }
          subtitle="Every meetup runs the same way: an hour of honest insight, an hour of real conversation."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {moments.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="relative rounded-3xl border border-brand-navy/10 bg-white p-7 hover:border-brand-navy/25 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow/15 text-brand-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-xs tracking-[0.22em] text-brand-navy/40 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-black text-brand-navy text-xl sm:text-2xl tracking-tight leading-tight">
                  {m.title}
                </h3>
                <p className="mt-2 text-brand-navy/65 text-sm sm:text-base leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Upcoming meetups ─────────────────────────────────────────────────────────

const cities = [
  {
    city: "Karachi",
    country: "Pakistan",
    status: "Next up",
    timing: "Quarterly",
    note: "Our biggest crowd — typically 500+ operators.",
    primary: true,
  },
  {
    city: "Lahore",
    country: "Pakistan",
    status: "Recurring",
    timing: "Twice a year",
    note: "Strong creator and sourcing community.",
  },
  {
    city: "Islamabad",
    country: "Pakistan",
    status: "Recurring",
    timing: "Annual",
    note: "Smaller, founder-heavy crowd.",
  },
  {
    city: "Dubai",
    country: "UAE",
    status: "Recurring",
    timing: "Twice a year",
    note: "Capital meets operators — investor-rich room.",
  },
  {
    city: "London",
    country: "UK",
    status: "On request",
    timing: "Pop-up",
    note: "Hosted when Sunny is in the UK for events.",
  },
  {
    city: "Toronto",
    country: "Canada",
    status: "On request",
    timing: "Pop-up",
    note: "Strong diaspora seller community.",
  },
];

function MeetupCities() {
  return (
    <section
      id="upcoming"
      className="relative bg-brand-navy/[0.02] py-24 sm:py-28 border-y border-brand-navy/5"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHERE WE MEET"
          title={
            <>
              From Karachi to Dubai,
              <br />
              <span className="text-brand-azure">we come to you.</span>
            </>
          }
          subtitle="Pakistan and the Gulf are our home base. We pop up in the UK, Canada, and the US when there's a crowd."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((c, i) => (
            <motion.div
              key={c.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              className={`relative rounded-3xl border p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 ${
                c.primary
                  ? "bg-brand-navy text-white border-brand-navy"
                  : "bg-white border-brand-navy/10 hover:border-brand-navy/25"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-[11px] tracking-[0.22em] ${
                    c.primary
                      ? "bg-brand-yellow text-brand-navy"
                      : "bg-brand-navy/5 text-brand-navy/70"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      c.primary ? "bg-brand-navy" : "bg-brand-yellow"
                    }`}
                  />
                  {c.status.toUpperCase()}
                </span>
                <MapPin
                  className={`h-5 w-5 ${
                    c.primary ? "text-brand-yellow" : "text-brand-navy/30"
                  }`}
                />
              </div>
              <h3
                className={`mt-6 font-black text-3xl sm:text-[32px] tracking-tight leading-none ${
                  c.primary ? "text-white" : "text-brand-navy"
                }`}
              >
                {c.city}
              </h3>
              <div
                className={`mt-1 text-sm ${
                  c.primary ? "text-white/60" : "text-brand-navy/55"
                }`}
              >
                {c.country}
              </div>
              <div
                className={`mt-5 flex items-center gap-2 text-xs font-display tracking-[0.18em] ${
                  c.primary ? "text-brand-yellow" : "text-brand-azure"
                }`}
              >
                <Calendar className="h-3.5 w-3.5" />
                {c.timing.toUpperCase()}
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  c.primary ? "text-white/70" : "text-brand-navy/65"
                }`}
              >
                {c.note}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 text-center text-sm text-brand-navy/55"
        >
          Want us in your city? Register your interest below — we'll let you know
          when 25+ operators ask for the same spot.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Who shows up ─────────────────────────────────────────────────────────────

const audience = [
  {
    icon: Users,
    label: "Operators",
    desc: "Active Amazon, Walmart, and TikTok Shop sellers — from first launch to 8 figures.",
  },
  {
    icon: Sparkles,
    label: "Investors",
    desc: "Family offices, HNW operators, and capital allocators looking at e-commerce.",
  },
  {
    icon: Network,
    label: "Service providers",
    desc: "Freight, sourcing, photography, PPC, design — vetted by the people in the room.",
  },
];

function MeetupAudience() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 px-4 py-1.5 font-display text-sm tracking-[0.2em] text-brand-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              WHO'S IN THE ROOM
            </span>
            <h2 className="mt-5 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance">
              The room you wish
              <br />
              <span className="text-brand-azure">existed online.</span>
            </h2>
            <p className="mt-5 text-lg text-brand-navy/60 leading-relaxed max-w-md">
              Anyone curious about e-commerce can attend. But the room is mostly
              people who've already done it — or are seriously about to.
            </p>
          </div>

          <div className="space-y-4">
            {audience.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  className="relative rounded-3xl border border-brand-navy/10 bg-white p-6 sm:p-7 flex gap-5 items-start"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-azure/10 text-brand-azure">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-black text-brand-navy text-xl tracking-tight">
                      {a.label}
                    </h3>
                    <p className="mt-1 text-brand-navy/65 text-sm sm:text-base leading-relaxed">
                      {a.desc}
                    </p>
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

// ─── CTA ─────────────────────────────────────────────────────────────────────

function MeetupCTA() {
  return (
    <section className="relative bg-brand-navy py-24 sm:py-28 overflow-hidden texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,205,29,0.12),transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-black tracking-tight text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
        >
          Get the next invite
          <br />
          <span className="text-brand-yellow">before it sells out.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-6 text-lg text-white/65 max-w-xl mx-auto leading-relaxed"
        >
          Drop your details and we'll send you the date, venue, and RSVP link as
          soon as the next meetup in your region is locked in.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-yellow/60 transition"
          />
          <select
            defaultValue=""
            className="rounded-full bg-white/10 border border-white/15 px-5 py-3 text-white focus:outline-none focus:border-brand-yellow/60 transition appearance-none"
          >
            <option value="" disabled className="text-brand-navy">
              Pick a city
            </option>
            {cities.map((c) => (
              <option key={c.city} value={c.city} className="text-brand-navy">
                {c.city}
              </option>
            ))}
          </select>
          <Button type="submit" size="lg" variant="primary" arrow>
            Notify me
          </Button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-6 text-xs text-white/45"
        >
          No spam. One email per meetup. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Page composition ────────────────────────────────────────────────────────

export default function MeetupPage() {
  return (
    <>
      <Nav />
      <main>
        <MeetupHero />
        <MeetupWhat />
        <MeetupCities />
        <MeetupAudience />
        <MeetupCTA />
      </main>
      <Footer />
    </>
  );
}
