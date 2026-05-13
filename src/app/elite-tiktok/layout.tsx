import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite TikTok — Done-for-you TikTok Shop brand building",
  description:
    "TikTok Shop is the new gold rush. We build, launch, and scale TikTok Shop brands end-to-end — content, creators, ads, and operations. Limited intake.",
  keywords: [
    "Elite TikTok Program",
    "TikTok Shop agency",
    "done-for-you TikTok Shop",
    "TikTok Shop brand building",
    "TikTok creator commerce",
    "TikTok Shop launch",
  ],
  alternates: { canonical: "/elite-tiktok" },
  openGraph: {
    title: "Elite TikTok — Done-for-you TikTok Shop brand building",
    description:
      "Content, creators, ads, and operations. We build and scale TikTok Shop brands end-to-end.",
    url: "/elite-tiktok",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
