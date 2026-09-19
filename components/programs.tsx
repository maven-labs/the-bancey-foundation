import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./ui/section-header";
import { buttonVariants } from "./ui/button";

interface Program {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  link: string;
}

async function getData() {
  const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query MyQuery {
                programs {
                  id
                  title
                  description
                  image {
                    url
                  }
                    link
        }
      }`,
    }),
  });
  const json = await res.json();
  return json.data.programs;
}

async function Programs() {
  const programs: Program[] = await getData();
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader
              title="Programs"
              action={
                <Link
                  href="/programs"
                  className={buttonVariants({ variant: "link", size: "lg" })}
                >
                  View All
                </Link>
              }
            />
            <p className="text-lg max-w-4xl">
              We fund diverse groups of leaders driving lasting change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {programs.map((program: Program) => (
              <div
                className="group relative block aspect-3/2 w-full overflow-hidden cursor-pointer"
                key={program.id}
              >
                <Link href={program.link} className="absolute inset-0" />
                <Image
                  src={program.image.url}
                  alt={program.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/20 to-black/85" />
                <div className="absolute inset-0 flex items-end p-4 md:p-6">
                  <div className="max-w-2xl text-white">
                    <h3 className="text-xl md:text-[1.375rem] md:leading-6 xl:text-3xl font-heading font-semibold underline-offset-4 group-hover:underline">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base line-clamp-2">
                      {program.description}
                    </p>
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

export default Programs;
