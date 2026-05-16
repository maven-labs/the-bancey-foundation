"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "./ui/section-header";

const workImages = [
  {
    src: "https://images.pexels.com/photos/18919384/pexels-photo-18919384.jpeg",
    alt: "Community members gathered during a foundation outreach program",
    title: "Community Outreach Day",
    description:
      "Community members gathering for a local outreach program supported by the foundation.",
    href: "/programs",
    orientation: "landscape",
    className: "md:col-[1/3] md:row-[1/2]",
  },
  {
    src: "https://images.pexels.com/photos/19233298/pexels-photo-19233298.jpeg",
    alt: "Young people taking part in an education and mentorship session",
    title: "Youth Mentorship Session",
    description:
      "Young people taking part in an education and mentorship session.",
    href: "/programs",
    orientation: "portrait",
    className: "md:col-[3/4] md:row-[1/3]",
  },
  {
    src: "https://images.pexels.com/photos/12958468/pexels-photo-12958468.jpeg",
    alt: "Women connecting through a community empowerment initiative",
    title: "Women Empowerment Initiative",
    description:
      "Women connecting through a community empowerment initiative.",
    href: "/programs",
    orientation: "square",
    className: "md:col-[4/5] md:row-[1/2]",
  },
  {
    src: "https://images.pexels.com/photos/36976924/pexels-photo-36976924.jpeg",
    alt: "A participant smiling during a local charity event",
    title: "Local Charity Event",
    description: "A participant smiling during a local charity event.",
    href: "/events",
    orientation: "landscape",
    className: "md:col-[5/7] md:row-[1/2]",
  },
  {
    src: "https://images.pexels.com/photos/19978754/pexels-photo-19978754.jpeg",
    alt: "Volunteers supporting a hands-on community program",
    title: "Volunteer Support Program",
    description: "Volunteers supporting a hands-on community program.",
    href: "/programs",
    orientation: "portrait",
    className: "md:col-[1/2] md:row-[2/4]",
  },
  {
    src: "https://images.pexels.com/photos/30900415/pexels-photo-30900415.jpeg",
    alt: "Foundation work supporting young women and families",
    title: "Family Support Work",
    description: "Foundation work supporting young women and families.",
    href: "/programs",
    orientation: "square",
    className: "md:col-[2/3] md:row-[2/3]",
  },
  {
    src: "https://images.pexels.com/photos/34885189/pexels-photo-34885189.jpeg",
    alt: "A community moment from the foundation's outreach work",
    title: "Foundation Outreach Work",
    description: "A community moment from the foundation's outreach work.",
    href: "/programs",
    orientation: "landscape",
    className: "md:col-[4/6] md:row-[2/3]",
  },
  {
    src: "https://images.pexels.com/photos/36710527/pexels-photo-36710527.jpeg",
    alt: "People participating in a local resilience program",
    title: "Local Resilience Program",
    description: "People participating in a local resilience program.",
    href: "/programs",
    orientation: "portrait",
    className: "md:col-[6/7] md:row-[2/4]",
  },
  {
    src: "https://images.pexels.com/photos/34056447/pexels-photo-34056447.jpeg",
    alt: "A participant photographed during foundation field work",
    title: "Foundation Field Work",
    description: "A participant photographed during foundation field work.",
    href: "/events",
    orientation: "landscape",
    className: "md:col-[2/4] md:row-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/36834297/pexels-photo-36834297.jpeg",
    alt: "Local community members engaged in a shared activity",
    title: "Shared Community Activity",
    description: "Local community members engaged in a shared activity.",
    href: "/events",
    orientation: "square",
    className: "md:col-[4/5] md:row-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/36659832/pexels-photo-36659832.jpeg",
    alt: "A community member supported by foundation programming",
    title: "Community Programming",
    description: "A community member supported by foundation programming.",
    href: "/programs",
    orientation: "square",
    className: "md:col-[5/6] md:row-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/36828837/pexels-photo-36828837.jpeg",
    alt: "People gathering for a community impact initiative",
    title: "Community Impact Initiative",
    description: "People gathering for a community impact initiative.",
    href: "/events",
    orientation: "landscape",
    className: "md:col-[1/3] md:row-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/31613549/pexels-photo-31613549.jpeg",
    alt: "A candid moment from a community support program",
    title: "Community Support Program",
    description: "A candid moment from a community support program.",
    href: "/programs",
    orientation: "square",
    className: "md:col-[3/4] md:row-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/36575838/pexels-photo-36575838.jpeg",
    alt: "Foundation participants working together",
    title: "Participants Working Together",
    description: "Foundation participants working together.",
    href: "/events",
    orientation: "landscape",
    className: "md:col-[4/6] md:row-[4/5]",
  },
  {
    src: "https://images.pexels.com/photos/35139496/pexels-photo-35139496.jpeg",
    alt: "A community member photographed during outreach",
    title: "Community Outreach Portrait",
    description: "A community member photographed during outreach.",
    href: "/programs",
    orientation: "square",
    className: "md:col-[6/7] md:row-[4/5]",
  },
];

function getPexelsImage(src: string, width: number) {
  return `${src}?auto=compress&cs=tinysrgb&w=${width}`;
}

function getImageDimensions(orientation: string) {
  if (orientation === "portrait") {
    return { width: 360, height: 540 };
  }

  if (orientation === "square") {
    return { width: 360, height: 360 };
  }

  return { width: 540, height: 360 };
}

function CTA() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof workImages)[number] | null
  >(null);
  const galleryImages = [...workImages, ...workImages, ...workImages.slice(0, 8)];

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="overflow-hidden">
      <div className="pt-8 lg:pt-12 xl:pt-14">
        <div className="container">
          <SectionHeader title="Our Work in Action" />
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A glimpse into the communities, programs, and people we support.
          </p>
        </div>

        <div className="relative left-1/2 mt-6 h-[50svh] min-h-80 w-screen -translate-x-1/2 overflow-hidden bg-foreground p-1 md:mt-8 md:min-h-88 lg:min-h-96">
          <div className="columns-3 gap-1 sm:columns-4 md:columns-6 lg:columns-8">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                data-orientation={image.orientation}
                onClick={() => setSelectedImage(image)}
                className="group relative mb-1 block w-full break-inside-avoid overflow-hidden bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={`View ${image.title}`}
              >
                <Image
                  src={getPexelsImage(image.src, 360)}
                  alt={image.alt}
                  {...getImageDimensions(image.orientation)}
                  sizes="(min-width: 1024px) 13vw, (min-width: 768px) 17vw, (min-width: 640px) 25vw, 33vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-auto w-full transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-image-title"
          aria-describedby="work-image-description"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-h-[92svh] w-full max-w-4xl overflow-hidden bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b p-4 md:p-5">
              <div>
                <h3
                  id="work-image-title"
                  className="font-heading text-xl font-semibold md:text-2xl"
                >
                  {selectedImage.title}
                </h3>
                <p
                  id="work-image-description"
                  className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {selectedImage.description}
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 text-2xl leading-none text-muted-foreground transition hover:text-foreground"
                onClick={() => setSelectedImage(null)}
                aria-label="Close dialog"
              >
                X
              </button>
            </div>
            <div className="max-h-[60svh] bg-muted">
              <Image
                src={getPexelsImage(selectedImage.src, 1200)}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[60svh] w-full object-contain"
              />
            </div>
            <div className="flex justify-end border-t p-4 md:p-5">
              <Link
                href={selectedImage.href}
                className="font-medium underline-offset-4 hover:underline"
              >
                View related program/event
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default CTA;
