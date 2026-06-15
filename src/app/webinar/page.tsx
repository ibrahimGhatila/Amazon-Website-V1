import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { WebinarHero } from "./_components/WebinarHero";
import { WebinarHost } from "./_components/WebinarHost";
import { WebinarRegister } from "./_components/WebinarRegister";
import { WebinarStickyBar } from "./_components/WebinarStickyBar";

export default function WebinarPage() {
  return (
    <>
      <Nav />
      <main className="pb-24">
        <WebinarHero />
        <WebinarHost />
        <WebinarRegister />
      </main>
      <Footer />
      <WebinarStickyBar />
    </>
  );
}
