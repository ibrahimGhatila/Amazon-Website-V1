import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Amazon launches, PPC, listings, VAs, and mentorship",
  description:
    "Pick the engagement that fits: launch & analytics, PPC management, creative listings, trained virtual assistants, or 1:1 mentorship. À-la-carte or full-stack.",
  keywords: [
    "Amazon services",
    "Amazon launch service",
    "Amazon PPC service",
    "Amazon listing service",
    "Amazon virtual assistant",
    "Amazon mentorship",
    "Extreme Commerce services",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Amazon launches, PPC, listings, VAs, and mentorship",
    description:
      "À-la-carte or full-stack. Pick the engagement that fits your stage.",
    url: "/services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
