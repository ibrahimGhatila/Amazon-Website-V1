import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extreme Commerce Meetups — Free Community Events",
  description:
    "Join a free Extreme Commerce meetup in Karachi, Lahore, Dubai, and beyond. Real conversations with operators, investors, and Sunny Ali. Network, learn, and grow.",
  keywords: [
    "Extreme Commerce meetup",
    "Sunny Ali meetup",
    "Amazon seller community Pakistan",
    "e-commerce event Karachi",
    "e-commerce event Dubai",
    "Extreme Commerce event",
  ],
  alternates: { canonical: "/meetup" },
  openGraph: {
    title: "Extreme Commerce Meetups — Free Community Events",
    description:
      "Free community events with Sunny Ali and 1.4M+ strong Extreme Commerce network. Karachi, Lahore, Dubai, and more.",
    url: "/meetup",
  },
};

export default function MeetupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
