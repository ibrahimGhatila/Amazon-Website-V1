import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { PageCTA } from "@/components/sections/PageCTA";
import { MeetupHero } from "./_components/MeetupHero";
import { MeetupGrid } from "./_components/MeetupGrid";
import { MeetupFounder } from "./_components/MeetupFounder";
import { MeetupBanner } from "./_components/MeetupBanner";
import { MeetupExpect } from "./_components/MeetupExpect";
import { meetups } from "./_data/meetups";

export default function MeetupPage() {
  return (
    <>
      <Nav />
      <main>
        <MeetupHero />
        <MeetupGrid meetups={meetups} />
        <MeetupFounder />
        <MeetupBanner />
        <MeetupExpect />
        <PageCTA
          eyebrow="LIMITED SEATS"
          heading={
            <>
              Reserve your spot{" "}
              <span className="text-brand-yellow">before it&rsquo;s full.</span>
            </>
          }
          primaryLabel="Register Now"
          primaryHref="#upcoming"
          secondaryLabel="View all services"
          secondaryHref="/services"
          watermark="MEETUP"
        />
      </main>
      <Footer />
    </>
  );
}
