import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for the Elite Program",
  description:
    "Apply to partner with Extreme Commerce. We'll review your application and respond within 48 hours. Limited intake — we only take on partners we can win with.",
  keywords: [
    "Apply Elite Program",
    "Amazon partnership application",
    "Extreme Commerce apply",
    "Amazon investment partner",
  ],
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply for the Elite Program",
    description:
      "Apply to partner with Extreme Commerce. Response within 48 hours.",
    url: "/apply",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
