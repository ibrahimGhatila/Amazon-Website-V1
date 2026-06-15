// Single source of truth for the live webinar details.
export const WEBINAR = {
  // June 17 2026, 8:00 PM (UTC+8 — Taipei / Kuala Lumpur / Singapore)
  dateISO: "2026-06-17T20:00:00+08:00",
  dateLabel: "Wednesday, June 17 2026",
  time: "8:00 PM",
  timezone: "Taipei · Kuala Lumpur · Singapore",
  youtubeId: "hcR1xYyV6hI",
} as const;

export const LEARN_POINTS: { title: string; body: string }[] = [
  {
    title: "Turn capital into a structured business",
    body: "How to turn your investment into a structured Amazon Private Label business.",
  },
  {
    title: "Find winning products",
    body: "A proven approach to finding high-demand, low-competition products.",
  },
  {
    title: "The exact growth framework",
    body: "The framework used to build profitable, scalable Amazon brands.",
  },
  {
    title: "Avoid costly beginner mistakes",
    body: "How to sidestep the errors that cost new sellers thousands of dollars.",
  },
  {
    title: "Build a sellable asset",
    body: "The roadmap to creating an ecommerce asset you can eventually sell.",
  },
];

export const ATTENDEES = ["E-commerce sellers", "Amazon sellers", "Investors", "Entrepreneurs"];
