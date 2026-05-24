import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { meetups, getMeetupBySlug } from "../_data/meetups";
import { MeetupDetailHero } from "./_components/MeetupDetailHero";
import { MeetupExpect } from "../_components/MeetupExpect";
import { MeetupFounder } from "../_components/MeetupFounder";
import { MeetupBanner } from "../_components/MeetupBanner";
import { MeetupRegister } from "./_components/MeetupRegister";
import { OtherMeetups } from "./_components/OtherMeetups";

export function generateStaticParams() {
  return meetups.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const meetup = getMeetupBySlug(slug);
  if (!meetup) return { title: "Meetup not found" };

  const title = `${meetup.city} Meetup — ${meetup.dateLabel}`;
  const description = `Join Sunny Ali in ${meetup.city}, ${meetup.country} on ${meetup.dateLabel}. Free in-person meetup with practical Amazon brand-building strategy, e-commerce growth insights, and live Q&A.`;

  return {
    title,
    description,
    alternates: { canonical: `/meetup/${meetup.slug}` },
    openGraph: { title, description, url: `/meetup/${meetup.slug}` },
  };
}

export default async function MeetupDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const meetup = getMeetupBySlug(slug);
  if (!meetup) notFound();

  const others = meetups.filter((m) => m.slug !== meetup.slug);

  return (
    <>
      <Nav />
      <main>
        <MeetupDetailHero meetup={meetup} />
        <MeetupExpect />
        <MeetupFounder />
        <MeetupBanner />
        <MeetupRegister meetup={meetup} />
        <OtherMeetups meetups={others} />
      </main>
      <Footer />
    </>
  );
}
