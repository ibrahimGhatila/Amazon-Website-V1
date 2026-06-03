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
    id: "singapore-2026",
    city: "Singapore",
    country: "Singapore",
    dateLabel: "May 2026",
    monthLabel: "MAY",
    yearLabel: "2026",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Marina Bay Sands and Singapore skyline at dusk",
    attendees: 320,
  },
  {
    id: "mexico-city-2025",
    city: "Mexico City",
    country: "Mexico",
    dateLabel: "May 2025",
    monthLabel: "MAY",
    yearLabel: "2025",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Palacio de Bellas Artes in Mexico City",
    attendees: 285,
  },
  {
    id: "manchester-2022",
    city: "Manchester",
    country: "UK",
    dateLabel: "March 2022",
    monthLabel: "MAR",
    yearLabel: "2022",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Manchester Town Hall and St Peter's Square",
    attendees: 240,
  },
  {
    id: "kuala-lumpur-2022",
    city: "Kuala Lumpur",
    country: "Malaysia",
    dateLabel: "April 2022",
    monthLabel: "APR",
    yearLabel: "2022",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Petronas Twin Towers in Kuala Lumpur at night",
    attendees: 310,
  },
  {
    id: "london-2022",
    city: "London",
    country: "UK",
    dateLabel: "March 2022",
    monthLabel: "MAR",
    yearLabel: "2022",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Big Ben and Houses of Parliament in London",
    attendees: 270,
  },
];

export const pastMeetupStats = {
  cities: pastMeetups.length,
  countries: [...new Set(pastMeetups.map((m) => m.country))].length,
  totalAttendees: pastMeetups.reduce((sum, m) => sum + (m.attendees ?? 0), 0),
};
