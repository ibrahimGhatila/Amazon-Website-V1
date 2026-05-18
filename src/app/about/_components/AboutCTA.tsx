"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative text-white py-10 sm:py-12 overflow-hidden texture-grain"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.15)_0%,_transparent_60%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[16rem] sm:text-[24rem] lg:text-[32rem] leading-none text-white/[0.04] tracking-tighter">
          eX
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-5 py-2 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            BUILD WITH US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl text-balance"
          >
            Build with the team that&rsquo;s{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-yellow">already done it.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
                className="absolute left-0 -bottom-1 h-1.5 w-full bg-brand-yellow/25 origin-left rounded-full -z-10"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Whether you want capital deployed for you, talent to run your
            account, or 1:1 mentorship — there&rsquo;s a path in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button href="/services" size="lg" variant="primary" arrow>
              Explore our services
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Talk to us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
