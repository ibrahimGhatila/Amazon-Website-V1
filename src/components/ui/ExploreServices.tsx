"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  Users,
  MessageSquare,
  Target,
  Megaphone,
  BarChart3,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const ALL_SERVICES = [
  { title: "Elite Program", href: "/elite", icon: Rocket, tag: "FLAGSHIP", slug: "elite" },
  { title: "Virtual Assistants", href: "/services/virtual-assistants", icon: Users, tag: "HIRE TALENT", slug: "virtual-assistants" },
  { title: "Mentorship", href: "/services/mentorship", icon: MessageSquare, tag: "1:1", slug: "mentorship" },
  { title: "PPC & Advertising", href: "/services/ppc-advertising", icon: Target, tag: "FULL STACK", slug: "ppc-advertising" },
  { title: "Creative & Listings", href: "/services/creative-listings", icon: Megaphone, tag: "BRAND", slug: "creative-listings" },
  { title: "Launch Analytics", href: "/services/launch-analytics", icon: BarChart3, tag: "OPS", slug: "launch-analytics" },
];

interface Props {
  /** Slug of the current page to exclude (e.g. "virtual-assistants") */
  current: string;
}

export function ExploreServices({ current }: Props) {
  const others = ALL_SERVICES.filter((s) => s.slug !== current).slice(0, 3);

  return (
    <section className="bg-white py-10 sm:py-12 border-t border-brand-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-display text-[10px] tracking-[0.22em] text-brand-navy/35 uppercase"
            >
              More from Extreme Commerce
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
              className="font-black text-brand-navy text-xl sm:text-2xl mt-1 tracking-tight leading-tight"
            >
              Explore other services
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-brand-navy/45 hover:text-brand-navy transition-colors"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-3 gap-3">
          {others.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
              >
                <Link
                  href={s.href}
                  className="group flex items-center justify-between rounded-2xl border border-brand-navy/10 bg-white p-5 hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-navy/5 text-brand-azure group-hover:bg-brand-navy group-hover:text-brand-yellow transition-colors duration-300">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-display text-[9px] tracking-[0.2em] text-brand-navy/35 uppercase mb-0.5">
                        {s.tag}
                      </div>
                      <div className="font-bold text-sm text-brand-navy leading-tight">
                        {s.title}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-none text-brand-navy/25 group-hover:text-brand-navy group-hover:rotate-45 transition-all duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
