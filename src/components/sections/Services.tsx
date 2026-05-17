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
    tag: "AMAZON",
    title: "Elite Program — Amazon",
    description:
      "Done-for-you Amazon brand. We build, launch, and run it. You own the upside.",
    href: "/elite",
    icon: Rocket,
    variant: "featured",
  },
  {
    tag: "TIKTOK SHOP",
    title: "Elite Program — TikTok",
    description:
      "Your TikTok Shop brand, built and operated for you. Creator commerce, done right.",
    href: "/elite-tiktok",
    icon: Play,
    variant: "yellow",
  },
  {
    tag: "MENTORSHIP",
    title: "Ask Sunny Ali",
    description:
      "Direct access to Sunny Ali — monthly strategy Zooms, WhatsApp voice notes, and the full playbook from a decade of launches.",
    href: "/ask-sunny-ali",
    icon: MessageCircle,
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
    <section id="services" className="relative bg-white py-20 sm:py-28 overflow-hidden">
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
          subtitle="Done-for-you Amazon brands, TikTok Shop builds, and direct mentorship from Sunny Ali — pick the engagement that fits your stage."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className="group"
              >
                <Link
                  href={service.href}
                  className={cn(
                    "relative flex flex-col h-full min-h-[280px] rounded-3xl border p-5 sm:p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 overflow-hidden",
                    variantStyles[variant]
                  )}
                >
                  <div className="relative flex items-start justify-between">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-3 py-1 font-display text-[20px] tracking-[0.06em]",
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

                  <div className="relative mt-auto pt-6">
                    <Icon
                      className={cn(
                        "h-7 w-7 mb-3",
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
                    <h3 className="font-black tracking-tight leading-[1.05] text-2xl sm:text-[28px]">
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-snug text-pretty max-w-md",
                        variant === "featured" || variant === "azure"
                          ? "text-white/70"
                          : "text-brand-navy/70"
                      )}
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
