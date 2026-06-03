"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Search,
  Crown,
  TrendingUp,
  Cog,
  Trophy,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const expectations = [
  {
    icon: Search,
    title: "Winning Product Research",
    desc: "Learn how to identify profitable products with real market demand.",
  },
  {
    icon: Crown,
    title: "Amazon Brand Building",
    desc: "Turn simple products into strong, recognizable brands.",
  },
  {
    icon: TrendingUp,
    title: "Sales & PPC Growth",
    desc: "Scale your revenue using proven Amazon advertising strategies.",
  },
  {
    icon: Cog,
    title: "Scaling & Automation Systems",
    desc: "Build processes that allow your store to grow efficiently.",
  },
  {
    icon: Trophy,
    title: "Exit & Cash-Out Strategy",
    desc: "Understand how successful sellers sell their Amazon brands for large exits.",
  },
  {
    icon: MessageCircle,
    title: "Live Q&A & Networking",
    desc: "Connect with ambitious Amazon sellers and get your questions answered.",
  },
];

export function MeetupExpect() {
  return (
    <section
      id="what-to-expect"
      className="relative bg-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHAT TO EXPECT"
          title={
            <>
              A transformative{" "}
              <span className="text-brand-azure">experience.</span>
            </>
          }
          subtitle="Our meetups are designed to provide you with actionable insights and real-world strategies to scale your business."
        />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-4">
            {expectations.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                  className="group flex gap-4 items-start rounded-2xl border border-brand-navy/8 bg-white p-5 hover:border-brand-navy/20 hover:bg-brand-navy/[0.02] transition-all"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-navy/8 text-brand-navy group-hover:bg-brand-azure/10 group-hover:text-brand-azure transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="pt-1">
                    <h3 className="font-black text-brand-navy text-base sm:text-lg tracking-tight leading-tight">
                      {e.title}
                    </h3>
                    <p className="mt-1.5 text-brand-navy/70 text-sm sm:text-[15px] leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-azure/15 via-brand-azure/8 to-brand-navy/10 blur-xl" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy-600 via-brand-navy to-brand-navy-700 border-4 border-white shadow-2xl shadow-brand-navy/20 rotate-[1.5deg]">
              <Image
                src="/brand/SA-1-(2).png"
                alt="Sunny Ali speaking at a meetup"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display text-xs tracking-[0.22em] text-white/60 uppercase">
                  Hosted by
                </div>
                <div className="mt-1 font-black text-white text-2xl tracking-tight">
                  Sunny Ali
                </div>
                <div className="mt-1 text-white/65 text-sm">
                  Founder &amp; CEO, Extreme Commerce
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
