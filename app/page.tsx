import AboutUs from "@/components/about-us";
import Gallery from "@/components/gallery";
import FocusAreas from "@/components/focus-areas";
import Hero from "@/components/hero";
import Stories from "@/components/stories";
import Programs from "@/components/programs";
import Quote from "@/components/quote";
import Stats from "@/components/stats";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <AboutUs /> */}
      {/* <Stats /> */}
      {/* <FocusAreas /> */}

      {/* Featured Initiative

Instead of a generic card:

Large editorial section

Positive Masculinity Campaign

Helping Junior High School students
understand sexual and gender-based
violence through education.

Image on one side.

CTA:

Learn more */}

      {/* <Quote /> */}
      {/* Mentorship Program

This is actually huge.

Don't hide it.

Give it its own section.

Become a mentee

Become a mentor

Two CTAs.

Then:

Register now

This is one of your biggest conversion opportunities. */}
      {/* <Programs /> */}
      {/* <Stories /> */}
      {/* <Gallery /> */}
      {/* Get Involved

I would create this.

Contains:

Donate

Volunteer

Become a Mentor

Partner with us

instead of scattering these across pages. */}
      <CTA />
    </main>
  );
}
