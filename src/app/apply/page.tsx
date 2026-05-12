"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { getCurrentSpots } from "@/lib/applyConfig";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Zap,
  TrendingUp,
  Shield,
  ChevronDown,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Hero ──────────────────────────────────────────────────────────────────────

function ApplyHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Spots are computed from today's date so the card never feels static.
  // Default mirrors what the build emits so SSR/hydration stays in sync.
  const [spots, setSpots] = useState({ total: 8, remaining: 4, filled: 4 });
  useEffect(() => {
    setSpots(getCurrentSpots());
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen flex items-center pt-24 pb-12 texture-grain overflow-hidden bg-brand-navy text-white"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(244,205,29,0.18),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_50%_at_85%_80%,rgba(54,128,195,0.15),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-50" />

      <motion.div aria-hidden style={{ y: watermarkY }}
        className="absolute -right-24 sm:-right-40 bottom-0 -z-10 pointer-events-none select-none">
        <span className="font-display text-[16rem] sm:text-[22rem] leading-none text-white/[0.035] tracking-tighter">eX</span>
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              <span className="font-display text-sm tracking-[0.22em] text-brand-yellow">NOW ACCEPTING APPLICATIONS</span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] text-white">
                Start your
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-7">
              <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
                className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] text-brand-yellow">
                application.
              </motion.h1>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="text-base sm:text-lg text-white/65 max-w-xl leading-relaxed mb-8">
              Takes under 3 minutes. Every application is reviewed personally by our team — no automation, no bots.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-6 text-sm text-white/50">
              {[
                { icon: Clock, text: "< 3 min to complete" },
                { icon: Users, text: "Personal review" },
                { icon: Zap, text: "< 24h response" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-yellow" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative hidden lg:block h-[480px] w-full">

            {/* Yellow — spots */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[250px] rounded-3xl bg-gradient-to-br from-brand-yellow to-amber-400 p-6 shadow-2xl shadow-brand-yellow/20">
              <div className="flex items-center justify-between">
                <div className="font-display text-[10px] tracking-[0.22em] text-brand-navy/60">SPOTS AVAILABLE</div>
                <span className="flex items-center gap-1 font-display text-[9px] tracking-[0.2em] text-brand-navy/55">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-navy/60 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-navy" />
                  </span>
                  LIVE
                </span>
              </div>
              <motion.div
                key={spots.remaining}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mt-3 font-black text-brand-navy text-6xl leading-none tracking-tight tabular-nums"
              >
                {spots.remaining}
              </motion.div>
              <div className="mt-2 text-xs text-brand-navy/55">Remaining this month</div>
              <div className="mt-4 flex gap-1.5">
                {Array.from({ length: spots.total }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0.6, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
                    className={`h-2 flex-1 rounded-full origin-left ${
                      i < spots.filled ? "bg-brand-navy/80" : "bg-brand-navy/20"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 text-[10px] text-brand-navy/45 tabular-nums">
                {spots.filled} of {spots.total} spots filled this cycle
              </div>
            </motion.div>

            {/* Glass — next steps */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[26%] left-0 w-[300px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 p-5 shadow-2xl">
              <div className="font-display text-[10px] tracking-[0.2em] text-white/50 mb-4">WHAT HAPPENS NEXT</div>
              {[
                { step: "01", label: "Submit application", time: "Today", done: false, active: true },
                { step: "02", label: "Team review", time: "< 24 hours", done: false, active: false },
                { step: "03", label: "Discovery call", time: "30 min", done: false, active: false },
                { step: "04", label: "Get started", time: "Week 1", done: false, active: false },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-3 py-2 border-b border-white/8 last:border-0">
                  <div className={`flex h-6 w-6 flex-none items-center justify-center rounded-full font-display text-[10px] font-bold
                    ${s.active ? "bg-brand-yellow text-brand-navy" : "bg-white/10 text-white/40"}`}>
                    {s.step}
                  </div>
                  <div className="flex-1 text-xs text-white/75">{s.label}</div>
                  <div className="text-[10px] text-white/35">{s.time}</div>
                </div>
              ))}
            </motion.div>

            {/* Azure — promise */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-[5%] w-[200px] rounded-2xl bg-brand-azure p-5 shadow-2xl shadow-brand-azure/30">
              <Shield className="h-5 w-5 text-white/70 mb-2" />
              <div className="font-black text-white text-2xl leading-tight">No fee.<br />No pitch.</div>
              <div className="mt-2 text-white/60 text-xs leading-relaxed">We only earn when your business does.</div>
            </motion.div>

            {/* Orbit ring */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="h-[380px] w-[380px] rounded-full border border-white/5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 text-xs font-display tracking-[0.2em] z-10">
          <span>SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── Application Form ──────────────────────────────────────────────────────────

const services = ["Elite Program", "Virtual Assistants", "Mentorship with Sunny", "PPC & Advertising", "Creative & Listings", "Launch Analytics"];
const budgets = ["Under $10K", "$10K – $25K", "$25K – $50K", "$50K – $100K", "$100K+", "Prefer not to say"];
const experiences = ["Complete beginner", "I've sold on Amazon before", "I have an active Amazon account", "I run a 7-figure+ account"];

type FormData = {
  firstName: string; lastName: string; email: string; phone: string; country: string;
  services: string[]; budget: string; experience: string; message: string;
};

function ApplicationForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "", country: "",
    services: [], budget: "", experience: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (s: string) =>
    setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s] }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputCls = "w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder-brand-navy/35 focus:outline-none focus:border-brand-navy/40 focus:ring-2 focus:ring-brand-navy/10 transition-all duration-200";
  const labelCls = "block text-xs font-semibold text-brand-navy/60 mb-1.5 tracking-wide uppercase";

  if (submitted) {
    return (
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-brand-yellow mb-6">
              <CheckCircle2 className="h-10 w-10 text-brand-navy" strokeWidth={2.5} />
            </div>
            <h2 className="font-black text-brand-navy text-3xl sm:text-4xl tracking-tight mb-3">Application received.</h2>
            <p className="text-brand-navy/65 text-lg leading-relaxed mb-8">
              Our team will review your application and reach out within 24 hours. Check your inbox — we reply personally.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/elite" variant="secondary" arrow>Explore Elite Program</Button>
              <Button href="/" variant="outline">Back to Home</Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

          {/* Sidebar */}
          <div className="lg:sticky lg:top-32">
            <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-sm tracking-[0.2em] mb-4 bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              YOUR APPLICATION
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
              className="font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]">
              Tell us about yourself.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              className="mt-3 text-base text-brand-navy/65 leading-relaxed">
              No fluff, no sales pitch. We review every application ourselves and only reach out when we believe we can genuinely help.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-8 space-y-4">
              {[
                { icon: Clock, title: "< 24h response", desc: "Personal reply from our team" },
                { icon: Shield, title: "Fully confidential", desc: "Your information is never shared" },
                { icon: TrendingUp, title: "No obligation", desc: "Applying costs nothing" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-navy/5 text-brand-azure">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-brand-navy">{title}</div>
                    <div className="text-xs text-brand-navy/50 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Testimonial snippet */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="mt-8 rounded-2xl bg-brand-navy p-5">
              <p className="text-white/80 text-sm leading-relaxed italic">
                &ldquo;I filled this form on a Tuesday. By Thursday I was on a call with the team. By the following Monday, I had signed.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-navy text-xs">AH</div>
                <div>
                  <div className="text-xs font-semibold text-white">Ahmed H.</div>
                  <div className="text-[10px] text-white/45">Elite Member · Dubai</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Personal info */}
              <div className="rounded-2xl border border-brand-navy/10 p-6 sm:p-7">
                <h3 className="font-bold text-brand-navy text-base mb-5 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-display text-xs font-bold">1</span>
                  About you
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>First name *</label>
                    <input required type="text" placeholder="John" value={form.firstName}
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Last name *</label>
                    <input required type="text" placeholder="Smith" value={form.lastName}
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email address *</label>
                    <input required type="email" placeholder="john@example.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone number</label>
                    <input type="tel" placeholder="+1 555 000 0000" value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Country / Region *</label>
                    <input required type="text" placeholder="United States" value={form.country}
                      onChange={e => setForm(f => ({ ...f, country: e.target.value }))} className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Service interest */}
              <div className="rounded-2xl border border-brand-navy/10 p-6 sm:p-7">
                <h3 className="font-bold text-brand-navy text-base mb-5 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-display text-xs font-bold">2</span>
                  What are you interested in?
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {services.map(s => (
                    <button type="button" key={s} onClick={() => toggleService(s)}
                      className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm text-left transition-all duration-200
                        ${form.services.includes(s)
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-brand-navy/12 bg-white text-brand-navy/70 hover:border-brand-navy/30"}`}>
                      <div className={`flex h-4 w-4 flex-none items-center justify-center rounded border transition-all
                        ${form.services.includes(s) ? "bg-brand-yellow border-brand-yellow" : "border-brand-navy/25"}`}>
                        {form.services.includes(s) && <CheckCircle2 className="h-3 w-3 text-brand-navy" strokeWidth={3} />}
                      </div>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background */}
              <div className="rounded-2xl border border-brand-navy/10 p-6 sm:p-7">
                <h3 className="font-bold text-brand-navy text-base mb-5 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-display text-xs font-bold">3</span>
                  Your background
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className={labelCls}>Investment budget</label>
                    <div className="relative">
                      <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                        className={inputCls + " appearance-none cursor-pointer pr-10"}>
                        <option value="">Select a range...</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-navy/40 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Amazon experience</label>
                    <div className="space-y-2 mt-1">
                      {experiences.map(exp => (
                        <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                          <div onClick={() => setForm(f => ({ ...f, experience: exp }))}
                            className={`flex h-4 w-4 flex-none items-center justify-center rounded-full border-2 transition-all cursor-pointer
                              ${form.experience === exp ? "border-brand-navy bg-brand-navy" : "border-brand-navy/25 group-hover:border-brand-navy/50"}`}>
                            {form.experience === exp && <div className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />}
                          </div>
                          <span className="text-sm text-brand-navy/70">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="rounded-2xl border border-brand-navy/10 p-6 sm:p-7">
                <h3 className="font-bold text-brand-navy text-base mb-5 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-brand-navy font-display text-xs font-bold">4</span>
                  Anything else?
                </h3>
                <label className={labelCls}>Tell us about your goals</label>
                <textarea rows={4} placeholder="What does success look like for you? Any context about your situation helps us prepare for your discovery call."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className={inputCls + " resize-none"} />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button type="submit" disabled={loading || form.services.length === 0 || !form.firstName || !form.email}
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-yellow px-8 py-4 text-sm font-bold text-brand-navy
                    hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-brand-yellow/25">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 rounded-full border-2 border-brand-navy/30 border-t-brand-navy" />
                      Submitting…
                    </span>
                  ) : (
                    <>Submit Application <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
                  )}
                </button>
                <p className="text-xs text-brand-navy/40 max-w-xs leading-relaxed">
                  By submitting, you agree to be contacted by our team. No spam, ever.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── What Happens Next ─────────────────────────────────────────────────────────

function WhatHappensNext() {
  const steps = [
    { n: "01", icon: CheckCircle2, title: "We review your application", desc: "Every application is read personally by a member of our team — usually within a few hours, always within 24." },
    { n: "02", icon: Users, title: "Discovery call (30 min)", desc: "If we think there's a fit, we'll invite you to a short call. No pitch — just an honest conversation about your goals and what we can build together." },
    { n: "03", icon: Zap, title: "Proposal & agreement", desc: "If both sides are aligned, we'll send over a clear program agreement and onboarding pack. You pick your start date." },
  ];
  return (
    <section className="relative bg-brand-navy py-10 sm:py-14 texture-grain overflow-hidden" style={{ marginBottom: "-2px" }}>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(244,205,29,0.07)_0%,transparent_70%)]" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-1.5 font-display text-sm tracking-[0.2em] text-brand-yellow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            AFTER YOU APPLY
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
            className="font-black tracking-tight text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]">
            What happens next.
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="font-display text-sm tracking-[0.2em] text-brand-yellow">{s.n}</span>
                </div>
                <h3 className="font-bold text-white text-base leading-tight mb-2">{s.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main>
        <ApplyHero />
        <ApplicationForm />
        <WhatHappensNext />
      </main>
      <Footer />
    </>
  );
}
