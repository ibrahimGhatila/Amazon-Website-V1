export type Meetup = {
  slug: string;
  city: string;
  country: string;
  dateISO: string;
  dateLabel: string;
  dayLabel: string;
  monthLabel: string;
  dayNumber: string;
  time: string;
  venue?: string;
  venueAddress?: string;
  description: string;
  image: string;
  imageAlt: string;
  gradient: { from: string; via?: string; to: string };
  accent: string;
  highlight?: string;
  registerHref?: string;
};

export const meetups: Meetup[] = [
  {
    slug: "kuala-lumpur",
    city: "Kuala Lumpur",
    country: "Malaysia",
    dateISO: "2026-06-14",
    dateLabel: "Sunday — June 14th, 2026",
    dayLabel: "SUN",
    monthLabel: "JUN",
    dayNumber: "14",
    time: "1:00 PM — 5:30 PM",
    venue: "Venue announced upon registration",
    venueAddress: "Kuala Lumpur, Malaysia",
    description:
      "Join Sunny Ali and the Extreme Commerce community for an exclusive in-person meetup in Kuala Lumpur. A full afternoon of practical Amazon brand-building strategy, e-commerce growth playbooks, and a live Q&A — all in one room.",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Petronas Towers lighting up the Kuala Lumpur skyline at dusk",
    gradient: { from: "from-sky-700", via: "via-indigo-800", to: "to-brand-navy" },
    accent: "text-sky-300",
    highlight: "Twin Towers · KLCC",
  },
  {
    slug: "bali",
    city: "Bali",
    country: "Indonesia",
    dateISO: "2026-06-21",
    dateLabel: "Sunday — June 21st, 2026",
    dayLabel: "SUN",
    monthLabel: "JUN",
    dayNumber: "21",
    time: "1:00 PM — 5:30 PM",
    venue: "Venue announced upon registration",
    venueAddress: "Bali, Indonesia",
    description:
      "Join Sunny Ali and the Extreme Commerce community for an exclusive in-person meetup in Bali. A full afternoon of practical Amazon brand-building strategy, e-commerce growth playbooks, and a live Q&A — all in one room.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Pura Ulun Danu Bratan temple reflected on a Bali lake at sunset",
    gradient: { from: "from-orange-500", via: "via-pink-600", to: "to-purple-800" },
    accent: "text-orange-200",
    highlight: "Tanah Lot · Ubud",
  },
  {
    slug: "ho-chi-minh-city",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    dateISO: "2026-06-28",
    dateLabel: "Sunday — June 28th, 2026",
    dayLabel: "SUN",
    monthLabel: "JUN",
    dayNumber: "28",
    time: "1:00 PM — 5:30 PM",
    venue: "Venue announced upon registration",
    venueAddress: "Ho Chi Minh City, Vietnam",
    description:
      "Join Sunny Ali and the Extreme Commerce community for an exclusive in-person meetup in Ho Chi Minh City. A full afternoon of practical Amazon brand-building strategy, e-commerce growth playbooks, and a live Q&A — all in one room.",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Saigon City Hall in Ho Chi Minh City at golden hour",
    gradient: { from: "from-emerald-700", via: "via-teal-700", to: "to-cyan-800" },
    accent: "text-emerald-200",
    highlight: "District 1 · Saigon",
  },
  {
    slug: "phuket",
    city: "Phuket",
    country: "Thailand",
    dateISO: "2026-07-05",
    dateLabel: "Sunday — July 5th, 2026",
    dayLabel: "SUN",
    monthLabel: "JUL",
    dayNumber: "05",
    time: "1:00 PM — 5:30 PM",
    venue: "Venue announced upon registration",
    venueAddress: "Phuket, Thailand",
    description:
      "Join Sunny Ali and the Extreme Commerce community for an exclusive in-person meetup in Phuket. A full afternoon of practical Amazon brand-building strategy, e-commerce growth playbooks, and a live Q&A — all in one room.",
    image:
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "The Big Buddha of Phuket on a hilltop overlooking the island",
    gradient: { from: "from-teal-500", via: "via-cyan-600", to: "to-blue-800" },
    accent: "text-cyan-200",
    highlight: "Big Buddha · Patong",
  },
];

export function getMeetupBySlug(slug: string): Meetup | undefined {
  return meetups.find((m) => m.slug === slug);
}
