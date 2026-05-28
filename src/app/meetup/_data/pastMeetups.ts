export type PastMeetup = {
  id: string;
  city: string;
  country: string;
  dateLabel: string;
  monthLabel: string;
  yearLabel: string;
  image: string;
  imageAlt: string;
  attendees?: number;
};

export const pastMeetups: PastMeetup[] = [
  {
    id: "lahore-2026",
    city: "Lahore",
    country: "Pakistan",
    dateLabel: "January 2026",
    monthLabel: "JAN",
    yearLabel: "2026",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Badshahi Mosque illuminated at dusk in Lahore, Pakistan",
    attendees: 420,
  },
  {
    id: "dubai-2025",
    city: "Dubai",
    country: "UAE",
    dateLabel: "November 2025",
    monthLabel: "NOV",
    yearLabel: "2025",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Burj Khalifa and Dubai skyline at night",
    attendees: 380,
  },
  {
    id: "karachi-2025",
    city: "Karachi",
    country: "Pakistan",
    dateLabel: "September 2025",
    monthLabel: "SEP",
    yearLabel: "2025",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Karachi Port Trust building and city waterfront",
    attendees: 510,
  },
  {
    id: "islamabad-2025",
    city: "Islamabad",
    country: "Pakistan",
    dateLabel: "July 2025",
    monthLabel: "JUL",
    yearLabel: "2025",
    image:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Faisal Mosque surrounded by Margalla Hills in Islamabad",
    attendees: 340,
  },
  {
    id: "singapore-2025",
    city: "Singapore",
    country: "Singapore",
    dateLabel: "May 2025",
    monthLabel: "MAY",
    yearLabel: "2025",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Marina Bay Sands and Singapore skyline at dusk",
    attendees: 290,
  },
  {
    id: "istanbul-2025",
    city: "Istanbul",
    country: "Turkey",
    dateLabel: "March 2025",
    monthLabel: "MAR",
    yearLabel: "2025",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Blue Mosque and Hagia Sophia against the Istanbul sunset skyline",
    attendees: 260,
  },
  {
    id: "bangkok-2025",
    city: "Bangkok",
    country: "Thailand",
    dateLabel: "January 2025",
    monthLabel: "JAN",
    yearLabel: "2025",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Wat Arun temple reflecting on the Chao Phraya river at sunrise",
    attendees: 310,
  },
  {
    id: "jakarta-2024",
    city: "Jakarta",
    country: "Indonesia",
    dateLabel: "November 2024",
    monthLabel: "NOV",
    yearLabel: "2024",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Jakarta city skyline with National Monument at dusk",
    attendees: 275,
  },
];

export const pastMeetupStats = {
  cities: pastMeetups.length,
  countries: [...new Set(pastMeetups.map((m) => m.country))].length,
  totalAttendees: pastMeetups.reduce((sum, m) => sum + (m.attendees ?? 0), 0),
};
