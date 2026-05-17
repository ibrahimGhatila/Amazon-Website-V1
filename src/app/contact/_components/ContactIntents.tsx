"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Rocket, Handshake, Megaphone, MessageSquare, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const intents = [
  {
    icon: Rocket,
    tag: "HIGH INTENT",
    title: "Work with us",
    body: "Done-for-you brand builds, TikTok Shop programmes, or direct mentorship from Sunny Ali. Every application is read personally.",
    href: "/apply",
    cta: "Start application",
    accent: "yellow",
  },
  {
    icon: Handshake,
    tag: "B2B",
    title: "Partnerships",
    body: "Brand collabs, institutional programmes, co-marketing, supplier and platform partnerships. Routed straight to leadership.",
    href: "mailto:partners@extremecommerce.com",
    cta: "Email partners@",
    accent: "azure",
  },
  {
    icon: Megaphone,
    tag: "MEDIA",
    title: "Press & speaking",
    body: "Interviews, panels, podcasts, and conference invites. Sunny does ~2 of these a month — get in early.",
    href: "mailto:press@extremecommerce.com",
    cta: "Email press@",
    accent: "azure",
  },
  {
    icon: MessageSquare,
    tag: "GENERAL",
    title: "Everything else",
    body: "Questions about our services, the community, careers, or anything not covered above. We answer every one.",
    href: "#form",
    cta: "Send a message",
    accent: "navy",
  },
];

export function ContactIntents() {
  return (
    <section id="intents" className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="CHOOSE YOUR PATH"
          title={
            <>
              Four lanes in.{" "}
              <span className="text-brand-azure">Pick the one that fits.</span>
            </>
          }
          subtitle="The right inbox routes you to the right person. Faster for you, cleaner for us."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {intents.map((intent, i) => {
            const Icon = intent.icon;
            const isExternal = intent.href.startsWith("mailto:");
            const isYellow = intent.accent === "yellow";
            return (
              <motion.div
                key={intent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
              >
                <Link
                  href={intent.href}
                  {...(isExternal ? { target: "_self" } : {})}
                  className={`group relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 transition-all duration-300 ${
                    isYellow
                      ? "bg-brand-yellow border-brand-yellow hover:shadow-xl hover:shadow-brand-yellow/30 hover:-translate-y-1"
                      : "bg-white border-brand-navy/10 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/5"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-5 transition-colors duration-300 ${
                      isYellow
                        ? "bg-brand-navy text-brand-yellow"
                        : "bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <span
                    className={`font-display text-xs tracking-[0.25em] mb-3 ${
                      isYellow ? "text-brand-navy/70" : "text-brand-yellow"
                    }`}
                  >
                    {intent.tag}
                  </span>

                  <h3
                    className={`font-black text-xl sm:text-2xl tracking-tight leading-tight ${
                      isYellow ? "text-brand-navy" : "text-brand-navy"
                    }`}
                  >
                    {intent.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm sm:text-base leading-relaxed text-pretty flex-1 ${
                      isYellow ? "text-brand-navy/75" : "text-brand-navy/65"
                    }`}
                  >
                    {intent.body}
                  </p>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                      isYellow
                        ? "text-brand-navy"
                        : "text-brand-navy group-hover:text-brand-azure"
                    } transition-colors`}
                  >
                    <span>{intent.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  <div
                    className={`absolute top-7 right-7 font-display text-[20px] tracking-[0.06em] ${
                      isYellow ? "text-brand-navy/40" : "text-brand-navy/25"
                    }`}
                  >
                    0{i + 1}
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
