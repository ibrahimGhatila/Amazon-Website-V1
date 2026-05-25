"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  id?: string;
  eyebrow?: string;
  heading: ReactNode;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  watermark?: string;
};

export function PageCTA({
  id,
  eyebrow,
  heading,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  watermark = "eX",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative text-white pt-20 pb-6 sm:pt-24 sm:pb-8 overflow-hidden texture-grain"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 40%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.08)_0%,_transparent_60%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[11rem] sm:text-[13rem] lg:text-[15rem] leading-none text-white/[0.04] tracking-tighter">
          {watermark}
        </span>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-brand-yellow mb-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
              {eyebrow}
            </motion.span>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-black tracking-tight leading-[0.95] text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl text-balance"
          >
            {heading}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={primaryHref} size="md" variant="primary" arrow>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} size="md" variant="ghost">
                {secondaryLabel}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
