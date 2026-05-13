import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Sunny Ali — 1:1 Amazon mentorship",
  description:
    "Get unstuck on your Amazon business. Direct 1:1 sessions with Sunny Ali — a decade of operator experience, 1,200+ launches, brutally honest advice you can act on tomorrow.",
  keywords: [
    "Sunny Ali mentorship",
    "Ask Sunny Ali",
    "Amazon 1-on-1 coaching",
    "Amazon mentor Pakistan",
    "Amazon FBA mentorship",
    "Amazon expert consultation",
  ],
  alternates: { canonical: "/ask-sunny-ali" },
  openGraph: {
    title: "Ask Sunny Ali — 1:1 Amazon mentorship",
    description:
      "Direct sessions with Sunny Ali. 10+ years operating, 1,200+ launches, advice you can act on tomorrow.",
    url: "/ask-sunny-ali",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
