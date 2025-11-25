import React from "react";
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

function Hero() {
  const slides = [
    {
      title: "We can't stop at almost",
      description:
        "2025 marks a heartbreaking milestone: for the first time this century, child deaths are set to rise. But the world has made incredible progress improving children’s health—and we have to keep going.",
      image:
        "https://www.gatesfoundation.org/-/media/gfo/5ideas_articles/articles/20250804-2-billion-womens-health-innovations/hero_ghana_oa138193-jpg-325383_1600x1000.jpg?rev=08922a2c39b34d8b97564b6203d16be7&w=800&hash=F74B550EDC8C43D6D0AD05C6ABCC4113",
      alt: "",
      ctaTitle: "Read the new Goalkeepers report",
      ctaLink: "#",
    },
    {
      title: "Our efforts strive toward one goal",
      description:
        "That every child, no matter where they are born, can reach their full potential.",
      image:
        "https://www.gatesfoundation.org/-/media/gfo/4our-work/areas-of-impact/gender-equality_ga17574144_fm689855_1600x1000.jpg?rev=2a9308816f58435387e872832cc66b1c&w=1600&hash=B2891AAF7AD2D63229B6EF923B53C793",
      alt: "",
      ctaTitle: "See our three focus areas",
      ctaLink: "#",
    },
    {
      title: "Climate resilience is essential",
      description:
        "Investing in resilience is urgent and is one of the smartest choices we can make—it unlocks a positive feedback loop, protecting people and progress.",
      image: "",
      video: "https://videos.planetwild.com/web/pw_hero_bg_optimized.mp4",
      alt: "Planet conservation video",
      ctaTitle: "Read our CEO's thoughts on climate",
      ctaLink: "#",
    },
  ];

  return (
    <section>
      <div className="m-2">
        <div className="relative w-full overflow-hidden rounded-xl">
          <Carousel className="relative">
            <CarouselContent className="col-span-full row-span-full">
              {slides.map((slide) => {
                return (
                  <CarouselItem key={slide.title}>
                    {slide.video ? (
                      <div className="grid h-[calc(100vh-1rem)]">
                        <div className="col-span-full row-span-full">
                          <video
                            src={slide.video}
                            className="w-full h-full object-center object-fill rounded-xl"
                            muted
                            playsInline
                            loop
                            autoPlay
                          />
                        </div>
                        <div className="col-span-full row-span-full z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-xl" />
                        <div className="col-span-full row-span-full relative z-10 flex h-full items-end">
                          <div className="container">
                            <div className="max-w-3xl py-8 lg:py-16">
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
                      <div className="grid h-[calc(100vh-1rem)]">
                        <div className="col-span-full row-span-full">
                          <Image
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-center object-cover"
                            fill
                          />
                        </div>
                        <div className="col-span-full row-span-full z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-xl" />
                        <div className="col-span-full row-span-full relative z-10 flex h-full items-end">
                          <div className="container">
                            <div className="max-w-3xl py-8 lg:py-16">
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
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* Background image */}
          {/* <img
            src="https://images.squarespace-cdn.com/content/v1/68a5e292a4b996360626d043/00d51a7c-0c10-481f-945f-df55084c0227/NAL+grasshopper.JPG?format=2500w"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          /> */}

          {/* Slide navigation (example) */}
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
      </div>
    </section>
  );
}

export default Hero;
