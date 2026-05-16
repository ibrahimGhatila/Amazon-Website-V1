import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to work with Extreme Commerce",
  description:
    "Apply to partner with Extreme Commerce — done-for-you Amazon, TikTok Shop, mentorship, or VA services. We review every application personally and respond within 24 hours.",
  keywords: [
    "Apply Extreme Commerce",
    "Amazon partnership application",
    "TikTok Shop agency application",
    "Sunny Ali mentorship apply",
  ],
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply to work with Extreme Commerce",
    description:
      "Apply to partner with Extreme Commerce across any of our services. Response within 24 hours.",
    url: "/apply",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
