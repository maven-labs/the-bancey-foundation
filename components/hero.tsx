import { buttonVariants } from "./ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  video: {
    url: string;
  } | null;
  alt: string;
  ctaLink: string;
  ctaTitle: string;
}

async function getData() {
  const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query MyQuery {
                homeSlides {
                  id
                  title
                  description
                  image {
                    url
                  }
                  video {
                    url
                  }
                  alt
                  ctaTitle
                  ctaLink
  }
}`,
    }),
  });
  const json = await res.json();
  return json.data.homeSlides;
}

async function Hero() {
  const slides: Slide[] = await getData();

  return (
    <section className="-mt-16">
      <div className="relative w-full overflow-hidden">
        <Carousel className="relative">
          <CarouselContent className="col-span-full row-span-full">
            {slides.map((slide: Slide) => {
              return (
                <CarouselItem key={slide.title}>
                  {slide.video ? (
                    <div className="grid w-full aspect-video">
                      <div className="col-span-full row-span-full">
                        <video
                          src={slide.video.url}
                          className="w-full h-full object-center object-fill"
                          muted
                          playsInline
                          loop
                          autoPlay
                          controls={false}
                        />
                      </div>
                      <div className="col-span-full row-span-full z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="col-span-full row-span-full relative z-10 flex h-full items-end">
                        <div className="container">
                          <div className="max-w-4xl py-8 lg:py-16">
                            <h1 className="font-heading text-4xl md:text-8xl font-bold leading-none text-white">
                              {slide.title}
                            </h1>

                            <p className="mt-5 text-base md:text-lg text-muted">
                              {slide.description}
                            </p>

                            <div className="mt-6 flex gap-4">
                              <Link
                                href={slide.ctaLink}
                                className={cn(
                                  buttonVariants({
                                    variant: "default",
                                    size: "lg",
                                  }),
                                  "px-10 h-11 text-base",
                                )}
                              >
                                {slide.ctaTitle}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid w-full aspect-video">
                      <div className="col-span-full row-span-full">
                        <Image
                          src={slide.image.url}
                          alt={slide.alt}
                          className="w-full h-full object-center object-cover"
                          fill
                        />
                      </div>
                      <div className="col-span-full row-span-full z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="col-span-full row-span-full relative z-10 flex h-full items-end">
                        <div className="container">
                          <div className="max-w-3xl py-8 lg:py-16">
                            <h1 className="font-heading text-4xl md:text-8xl font-bold leading-none text-white line-clamp-2">
                              {slide.title}
                            </h1>

                            <p className="mt-5 text-base md:text-lg text-muted">
                              {slide.description}
                            </p>

                            <div className="mt-6 flex gap-4">
                              <Link
                                href={slide.ctaLink}
                                className={cn(
                                  buttonVariants({
                                    variant: "default",
                                    size: "lg",
                                  }),
                                  "px-10 h-11 text-base",
                                )}
                              >
                                {slide.ctaTitle}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <div className="absolute bottom-4 right-6 z-10 flex gap-4 text-white/80">
            <button className="text-sm uppercase tracking-wide hover:text-white">
              Gender Equality
            </button>
            <button className="text-sm uppercase tracking-wide hover:text-white">
              Education
            </button>
            <button className="text-sm uppercase tracking-wide hover:text-white">
              Social Justice
            </button>
          </div> */}
      </div>
    </section>
  );
}

export default Hero;
