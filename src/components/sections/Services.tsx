"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  Play,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    tag: "FLAGSHIP",
    title: "Elite Program — Amazon",
    description:
      "Done-for-you Amazon brand. Three launches, one dedicated team, profit split only on results.",
    href: "/elite",
    icon: Rocket,
    span: "lg:col-span-1 lg:row-span-2",
    variant: "featured",
    bullets: [
      "$10K budget per launch",
      "3 launches / 18 months",
      "80/20 profit share",
    ],
  },
  {
    tag: "NEW",
    title: "Elite Program — TikTok",
    description:
      "Your TikTok Shop brand, built and operated for you. Creator commerce, done right.",
    href: "/elite-tiktok",
    icon: Play,
    span: "lg:col-span-2",
    variant: "yellow",
  },
  {
    tag: "MENTORSHIP",
    title: "Ask Sunny Ali",
    description:
      "Direct access to Sunny Ali. Monthly strategy Zooms, WhatsApp voice notes, and the full playbook from 1,000+ launches.",
    href: "/ask-sunny-ali",
    icon: MessageCircle,
    span: "lg:col-span-2",
    variant: "azure",
  },
];

const variantStyles = {
  featured:
    "bg-gradient-to-br from-brand-navy to-brand-navy-700 text-white border-white/10",
  yellow:
    "bg-brand-yellow text-brand-navy border-brand-navy/10 hover:bg-brand-yellow-light",
  azure: "bg-brand-azure text-white border-brand-azure-dark hover:bg-brand-azure-light",
  outline:
    "bg-white text-brand-navy border-brand-navy/10 hover:border-brand-navy/25",
};

const tagStyles = {
  featured: "bg-brand-yellow text-brand-navy",
  yellow: "bg-brand-navy text-brand-yellow",
  azure: "bg-white/15 text-white border border-white/25 backdrop-blur-sm",
  outline: "bg-brand-navy/5 text-brand-navy border border-brand-navy/10",
};

export function Services() {
  return (
    <section id="services" className="relative bg-white py-10 sm:py-14 overflow-hidden">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-navy opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title={
            <>
              Three services.
              <br />
              One mission.
            </>
          }
          subtitle="Whether you want us to run it, want TikTok Shop, or want direct access to Sunny — here's what we offer."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const variant = service.variant as keyof typeof variantStyles;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: i * 0.08,
                }}
                className={cn("group", service.span)}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "relative flex flex-col h-full rounded-3xl border p-4 sm:p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 overflow-hidden",
                    variantStyles[variant]
                  )}
                >
                  {/* Decorative orbit for featured */}
                  {service.variant === "featured" && (
                    <>
                      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl" />
                      <div className="absolute right-10 bottom-10 font-display text-[14rem] leading-none text-white/[0.04] pointer-events-none select-none">
                        eX
                      </div>
                    </>
                  )}

                  <div className="relative flex items-start justify-between">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-3 py-1 font-display text-[14px] tracking-[0.2em]",
                        tagStyles[variant]
                      )}
                    >
                      {service.tag}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12",
                        variant === "featured" || variant === "azure"
                          ? "bg-white/10 border border-white/20 text-white"
                          : variant === "yellow"
                            ? "bg-brand-navy/10 text-brand-navy"
                            : "bg-brand-navy/5 text-brand-navy"
                      )}
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-4">
                    <Icon
                      className={cn(
                        "h-6 w-6 mb-2",
                        variant === "featured"
                          ? "text-brand-yellow"
                          : variant === "azure"
                            ? "text-white"
                            : variant === "yellow"
                              ? "text-brand-navy"
                              : "text-brand-azure"
                      )}
                      strokeWidth={1.75}
                    />
                    <h3
                      className={cn(
                        "font-black tracking-tight leading-[1.05]",
                        service.variant === "featured"
                          ? "text-2xl sm:text-3xl lg:text-4xl"
                          : "text-xl sm:text-2xl"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-snug text-pretty max-w-md",
                        variant === "featured" || variant === "azure"
                          ? "text-white/70"
                          : "text-brand-navy/70"
                      )}
                    >
                      {service.description}
                    </p>

                    {service.bullets && (
                      <ul className="mt-2 space-y-1">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-2 text-sm text-white/80"
                          >
                            <svg
                              className="h-4 w-4 flex-none text-brand-yellow"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M3 8l3 3 7-7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
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
