"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Rocket,
  Play,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const paths = [
  {
    tag: "DONE-FOR-YOU",
    title: "Elite Program — Amazon",
    description:
      "We build, launch, and operate a profitable Amazon brand for you. You own the brand. We run the operation.",
    bestFor: "Capital-serious operators ready to deploy.",
    href: "/elite",
    icon: Rocket,
    accent: "yellow",
  },
  {
    tag: "DONE-FOR-YOU",
    title: "Elite Program — TikTok",
    description:
      "Your TikTok Shop brand, built and operated for you. Creator commerce, done right — affiliate seeding, live shopping, and viral SKUs.",
    bestFor: "Operators chasing the next big channel.",
    href: "/elite-tiktok",
    icon: Play,
    accent: "azure",
  },
  {
    tag: "MENTORSHIP",
    title: "Ask Sunny Ali",
    description:
      "Direct access to Sunny's playbook — monthly strategy Zooms, WhatsApp voice notes, and the lessons from a decade of launches.",
    bestFor: "Operators running their own show who want a sharper edge.",
    href: "/ask-sunny-ali",
    icon: MessageCircle,
    accent: "navy",
  },
];

const accentStyles = {
  yellow: {
    card: "bg-brand-yellow text-brand-navy",
    tag: "bg-brand-navy text-brand-yellow",
    icon: "bg-brand-navy/10 text-brand-navy",
    arrow: "bg-brand-navy/10 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-yellow",
    text: "text-brand-navy/75",
    label: "text-brand-navy/60",
  },
  azure: {
    card: "bg-brand-azure text-white",
    tag: "bg-white/15 text-white border border-white/25 backdrop-blur-sm",
    icon: "bg-white/15 text-white",
    arrow: "bg-white/15 text-white group-hover:bg-white group-hover:text-brand-azure",
    text: "text-white/75",
    label: "text-white/60",
  },
  navy: {
    card: "bg-brand-navy text-white",
    tag: "bg-brand-yellow text-brand-navy",
    icon: "bg-white/10 text-brand-yellow border border-white/15",
    arrow: "bg-white/10 text-white group-hover:bg-brand-yellow group-hover:text-brand-navy",
    text: "text-white/75",
    label: "text-white/60",
  },
};

export function ProcessPaths() {
  return (
    <section
      id="paths"
      className="relative bg-white py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-navy opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="THREE WAYS IN"
          title={
            <>
              Pick the engagement
              <br />
              <span className="text-brand-azure">that fits your stage.</span>
            </>
          }
          subtitle="Same operating system, different intensity. Done-for-you brand builds for capital-serious operators, or direct mentorship for those running their own."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paths.map((p, i) => {
            const Icon = p.icon;
            const accent = p.accent as keyof typeof accentStyles;
            const styles = accentStyles[accent];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="group"
              >
                <Link
                  href={p.href}
                  className={`relative flex flex-col h-full min-h-[340px] rounded-3xl p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${styles.card}`}
                >
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 font-display text-[11px] tracking-[0.22em] ${styles.tag}`}
                    >
                      {p.tag}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 ${styles.arrow}`}
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-8">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-4 ${styles.icon}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-black tracking-tight leading-[1.05] text-2xl sm:text-[28px]">
                      {p.title}
                    </h3>
                    <p className={`mt-3 text-sm sm:text-base leading-relaxed text-pretty ${styles.text}`}>
                      {p.description}
                    </p>
                    <div className={`mt-5 pt-5 border-t border-current/10 text-xs font-display tracking-[0.18em] ${styles.label}`}>
                      BEST FOR
                    </div>
                    <p className={`mt-1.5 text-sm leading-relaxed ${styles.text}`}>
                      {p.bestFor}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mt-10 text-center text-sm text-brand-navy/55"
        >
          Not sure which fits?{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-navy hover:text-brand-azure transition-colors underline-offset-4 hover:underline"
          >
            Book a call
          </Link>{" "}
          and we&rsquo;ll walk you through it.
        </motion.p>
      </div>
    </section>
  );
}
