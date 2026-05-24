"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MeetupHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-brand-navy text-white lg:min-h-[100svh] flex items-center pt-28 pb-16 texture-grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.18]"
      >
        <Image
          src="/brand/SA-1-(2).png"
          alt=""
          fill
          priority
          className="object-cover object-top scale-110 blur-sm"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(54,128,195,0.35),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_120%,rgba(244,205,29,0.18),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-30" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[20rem] sm:text-[30rem] leading-none text-white/[0.04] tracking-tighter">
          SA
        </span>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-5 py-2 mb-10"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          <span className="font-display text-[15px] sm:text-[17px] tracking-[0.12em] text-brand-yellow uppercase">
            Free Community Event
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="font-black tracking-tight leading-[0.92] text-[34px] sm:text-6xl lg:text-[88px] xl:text-[104px] uppercase"
        >
          <span className="block text-white">Launch your own</span>
          <span className="block text-brand-yellow">Amazon Brand</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="mt-7 font-display text-sm sm:text-base tracking-[0.22em] text-white/75 uppercase"
        >
          Join Sunny Ali&rsquo;s Exclusive Ecommerce Meetup
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="#upcoming" size="lg" variant="primary" arrow>
            Register Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
