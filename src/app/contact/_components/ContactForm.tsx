"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const intentOptions = [
  "Apply for Elite Program",
  "Hire a Virtual Assistant",
  "Mentorship with Sunny",
  "Partnership inquiry",
  "Press / speaking",
  "Careers",
  "Something else",
];

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [intent, setIntent] = useState(intentOptions[0]);
  const [intentOpen, setIntentOpen] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder: pretend to send. Real backend wiring is a follow-up task.
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section
      id="form"
      className="relative bg-brand-navy/[0.02] py-24 sm:py-28 border-y border-brand-navy/5"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="DROP US A LINE"
          title={
            <>
              Tell us what you&rsquo;re{" "}
              <span className="text-brand-azure">working on.</span>
            </>
          }
          subtitle="One short message. We&rsquo;ll route it to the right person and reply in plain English."
        />

        <div className="mt-14 relative rounded-3xl bg-white border border-brand-navy/10 shadow-xl shadow-brand-navy/5 p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/15 text-brand-yellow mb-6">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={2.2} />
                </div>
                <h3 className="font-black text-3xl text-brand-navy tracking-tight">
                  Message received.
                </h3>
                <p className="mt-3 max-w-md text-brand-navy/75 leading-relaxed">
                  We&rsquo;ll get back to you within 24 hours on weekdays. If
                  it&rsquo;s urgent, the live chat in the bottom-right is the
                  fastest path.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-semibold text-brand-azure hover:text-brand-navy transition-colors"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid gap-5"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 outline-none focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/20 transition"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 outline-none focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/20 transition"
                    />
                  </Field>
                </div>

                <Field label="What&rsquo;s this about?" htmlFor="intent">
                  <button
                    type="button"
                    id="intent"
                    onClick={() => setIntentOpen((v) => !v)}
                    aria-expanded={intentOpen}
                    aria-haspopup="listbox"
                    className="flex w-full items-center justify-between rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-left text-brand-navy outline-none focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/20 transition"
                  >
                    <span>{intent}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-brand-navy/50 transition-transform duration-300 ${
                        intentOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {intentOpen && (
                      <motion.ul
                        role="listbox"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="absolute z-10 mt-2 w-[calc(100%-1px)] rounded-xl border border-brand-navy/10 bg-white shadow-xl shadow-brand-navy/5 overflow-hidden"
                      >
                        {intentOptions.map((opt) => (
                          <li key={opt}>
                            <button
                              type="button"
                              role="option"
                              aria-selected={opt === intent}
                              onClick={() => {
                                setIntent(opt);
                                setIntentOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                opt === intent
                                  ? "bg-brand-yellow/15 text-brand-navy font-semibold"
                                  : "text-brand-navy/80 hover:bg-brand-navy/5"
                              }`}
                            >
                              {opt}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  <input type="hidden" name="intent" value={intent} />
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="A short paragraph is plenty. Tell us what you're working on, and what you'd like from us."
                    className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 outline-none focus:border-brand-azure focus:ring-2 focus:ring-brand-azure/20 transition resize-none"
                  />
                </Field>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-brand-navy/50">
                    By sending you agree to our terms. We never share your details.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    arrow={status !== "submitting"}
                  >
                    {status === "submitting" ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-brand-navy animate-pulse" />
                        Sending…
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send message
                      </span>
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: React.ReactNode;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={htmlFor}
        className="font-display text-xs tracking-[0.2em] text-brand-navy/60 uppercase mb-2 block"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
