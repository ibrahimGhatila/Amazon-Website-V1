import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Amazon Audit — Find the leaks in your listings, PPC, and brand",
  description:
    "Get a free expert audit of your Amazon store. We'll surface the wasted ad spend, weak listings, and conversion gaps that are costing you sales — no obligation, no fluff.",
  keywords: [
    "free Amazon audit",
    "Amazon store audit",
    "Amazon PPC audit",
    "Amazon listing audit",
    "Amazon brand audit",
    "Amazon seller audit",
    "Extreme Commerce audit",
  ],
  alternates: { canonical: "/amazon-audit" },
  openGraph: {
    title: "Free Amazon Audit — Find what's costing you sales",
    description:
      "Expert audit of your Amazon listings, PPC, and brand. Free, no obligation.",
    url: "/amazon-audit",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
