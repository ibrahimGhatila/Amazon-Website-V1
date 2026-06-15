"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  passed: boolean;
};

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  }
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    passed: false,
  };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function WebinarCountdown({
  targetISO,
  variant = "dark",
}: {
  targetISO: string;
  variant?: "dark" | "light";
}) {
  const target = new Date(targetISO).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(target));
    // Defer the first update out of the effect body to avoid a synchronous
    // setState, then keep it live on a 1s interval.
    const raf = requestAnimationFrame(tick);
    const id = setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, [target]);

  const units = [
    { label: "Days", value: time ? pad(time.days) : "--" },
    { label: "Hours", value: time ? pad(time.hours) : "--" },
    { label: "Minutes", value: time ? pad(time.minutes) : "--" },
    { label: "Seconds", value: time ? pad(time.seconds) : "--" },
  ];

  const isLight = variant === "light";

  return (
    <div
      className="flex items-stretch gap-2 sm:gap-3"
      role="timer"
      aria-label="Time remaining until the webinar"
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-stretch gap-2 sm:gap-3">
          <div className="flex flex-col items-center">
            <span
              className={
                isLight
                  ? "font-black tabular-nums text-brand-navy text-2xl sm:text-3xl leading-none tracking-tight"
                  : "font-black tabular-nums text-white text-2xl sm:text-3xl leading-none tracking-tight"
              }
            >
              {u.value}
            </span>
            <span
              className={
                isLight
                  ? "mt-1.5 font-display text-[10px] sm:text-xs tracking-[0.18em] text-brand-navy/55 uppercase"
                  : "mt-1.5 font-display text-[10px] sm:text-xs tracking-[0.18em] text-white/55 uppercase"
              }
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              className={
                isLight
                  ? "font-black text-2xl sm:text-3xl leading-none text-brand-navy/25 self-start"
                  : "font-black text-2xl sm:text-3xl leading-none text-white/25 self-start"
              }
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
