import HeroSlider from "./hero-slider";

export interface Slide {
  id: string;
  title: string;
  description: string;
  image: { url: string };
  video: { url: string } | null;
  alt: string;
  ctaLink: string;
  ctaTitle: string;
}

async function getData(): Promise<Slide[]> {
  const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query MyQuery {
        homeSlides {
          id
          title
          description
          image { url }
          video { url }
          alt
          ctaTitle
          ctaLink
        }
      }`,
    }),
    // ISR — revalidate every 60 s; remove/adjust to taste
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data.homeSlides;
}

async function Hero() {
  const slides = await getData();

  return (
    <section
      className="-mt-16 relative w-full aspect-3/4 md:aspect-[2.1] overflow-hidden bg-black"
      aria-label="Hero slideshow"
    >
      <HeroSlider slides={slides} />
    </section>
  );
}

export default Hero;
