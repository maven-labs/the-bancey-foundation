import Link from "next/link";
import SectionHeader from "./ui/section-header";
import { buttonVariants } from "./ui/button";

const focusAreas = [
  {
    image:
      "https://www.clevelandfoundation.org/files/news/preview/motogoselect3-large.png",
    title: "Gender Equality",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam accusamus ex nisi commodi excepturi unde.",
    link: "",
  },
  {
    image:
      "https://www.rockefellerfoundation.org/wp-content/uploads/2020/01/Title-Image-1-23-1440x810.png",
    title: "Decent Work and Economic Growth",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam accusamus ex nisi commodi excepturi unde. Itaque amet, cum ea nobis quis velit necessitatibus, similique eos sit eum consectetur ut?",
    link: "",
  },
  {
    image:
      "https://cdn.prod.website-files.com/665f17d0fb4bfc1e811460d3/69400ca87fd1b0c0e6661dcc_report_photo_3.webp",
    title: "Climate Action",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
  },
];

function FocusAreas() {
  return (
    <section className="bg-[#faf7ec]">
      {/* <div className="pt-12 lg:pt-20 xl:pt-28"> */}
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
            {focusAreas.map((area) => (
              <div className="w-full flex flex-col" key={area.title}>
                <div className="mb-2 lg:mb-3">
                  <div className="aspect-3/2">
                    <img
                      src={area.image}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">
                  {area.title}
                </h4>
                <p className="text-sm">{area.description}</p>
                <div className="mt-auto">
                  <div className="mt-9 md:mt-12 lg:mt-14">
                    <Link
                      href={area.link}
                      className={buttonVariants({ variant: "link" })}
                    >
                      Learn More
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
