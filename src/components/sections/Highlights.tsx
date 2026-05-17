"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const highlights = [
  {
    tag: "FREE AUDIT",
    title: "Get a free Amazon audit",
    description:
      "We'll surface the wasted ad spend, weak listings, and conversion gaps that are costing you sales. No fluff, no obligation.",
    cta: "Request your audit",
    href: "/amazon-audit",
    icon: ClipboardCheck,
  },
  {
    tag: "COMMUNITY",
    title: "Join an Extreme Commerce meetup",
    description:
      "Real conversations with operators, investors, and Sunny Ali — across Karachi, Lahore, Dubai, and more. Free to attend.",
    cta: "See upcoming meetups",
    href: "/meetup",
    icon: Users,
  },
];

export function Highlights() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="MORE WAYS IN"
          title="Not ready for done-for-you?"
          subtitle="Two low-commitment ways to engage with Extreme Commerce — start with what fits."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="group"
              >
                <Link
                  href={item.href}
                  className="relative flex flex-col h-full min-h-[220px] rounded-3xl border border-brand-navy/10 bg-white p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-navy/25 hover:shadow-xl overflow-hidden"
                >
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex items-center rounded-full bg-brand-navy/5 text-brand-navy border border-brand-navy/10 px-3 py-1 font-display text-[13px] sm:text-[18px] tracking-[0.06em]">
                      {item.tag}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-brand-yellow">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-6">
                    <Icon className="h-7 w-7 mb-3 text-brand-azure" strokeWidth={1.75} />
                    <h3 className="font-black tracking-tight leading-[1.1] text-2xl sm:text-[28px] text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-brand-navy/70 max-w-md">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-azure transition">
                      {item.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
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
