import AboutUs from "@/components/about-us";
import CTA from "@/components/cta";
import Events from "@/components/events";
import FocusAreas from "@/components/focus-areas";
import Hero from "@/components/hero";
import LatestNews from "@/components/latest-news";
import Programs from "@/components/programs";
import Quote from "@/components/quote";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Stats />
      <FocusAreas />
      <Quote />
      <Programs />
      <Events />
      <LatestNews />
      <CTA />
    </main>
  );
}
