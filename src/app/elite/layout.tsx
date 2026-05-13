import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Program — Done-for-you Amazon brand building",
  description:
    "Our flagship done-for-you program: we build, launch, and scale Amazon brands for entrepreneurs and investors. $10K per launch, 80/20 profit share, 18-month cycle.",
  keywords: [
    "Elite Program Amazon",
    "done-for-you Amazon brand",
    "Amazon investment program",
    "Amazon brand partnership",
    "Amazon DFY launch",
    "Extreme Commerce Elite",
    "Amazon 80/20 profit share",
  ],
  alternates: { canonical: "/elite" },
  openGraph: {
    title: "Elite Program — Done-for-you Amazon brand building",
    description:
      "We build, launch, and scale Amazon brands. $10K per launch, 80/20 profit share, 18-month cycle.",
    url: "/elite",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
