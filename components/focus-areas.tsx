import Link from "next/link";
import SectionHeader from "./ui/section-header";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FocusArea {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  linkButtonTitle: string;
  link: string;
}

async function getData() {
  const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query MyQuery {
                focusAreas {
                  id
                  title
                  description
                  image {
                    url
                  }
                  linkButtonTitle
                  link
                }
              }`,
    }),
  });
  const json = await res.json();
  return json.data.focusAreas;
}

async function FocusAreas() {
  const focusAreas: FocusArea[] = await getData();

  return (
    <section className="bg-[#faf7ec]">
      <div className="py-6 md:py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader title="Areas of work" />
            <p className="text-lg max-w-4xl">
              We believe inequality is at the root of nearly every injustice. To
              create meaningful, lasting change, we focus on three
              interconnected areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 xl:gap-6 mt-12">
            {focusAreas.map((area: FocusArea) => (
              <div className="w-full flex flex-col" key={area.title}>
                <div className="mb-2 lg:mb-3">
                  <div className="aspect-3/2">
                    <Image
                      src={area.image.url}
                      alt=""
                      width={920}
                      height={480}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">
                  {area.title}
                </h4>
                {/* <p className="text-sm">{area.description}</p> */}
                <div className="mt-auto">
                  <div className="mt-4">
                    <Link
                      href={`focus-areas/${area.link}`}
                      className={cn(
                        buttonVariants({ variant: "link" }),
                        "cursor-pointer py-0 hover:no-underline",
                        "group flex flex-col gap-0.5 items-start whitespace-nowrap max-w-min",
                      )}
                    >
                      {area.linkButtonTitle}
                      <div className="bg-primary h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
