import SectionHeader from "./ui/section-header";

const programs = [
  {
    image: "https://cdn.buttercms.com/resize=width:2400/tzzIHkDRcmcf33jvRwUA",
    title: "Mentorship Program",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    image: "https://cdn.buttercms.com/resize=width:2400/kPvJksDmTm6vdcP3v4pc",
    title: "Ramadhan Program",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error aliquam quam.",
  },
];

function Programs() {
  // https://hewlett.org/
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader title="Programs/Community Impact/Stories" />
            <p className="text-lg max-w-4xl">
              We fund diverse groups of leaders driving lasting change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {/* Card */}
            {/* Use padding-top trick to enforce 3:2 (width:height = 3:2) aspect ratio = height = 66.666...% */}
            {programs.map((program) => (
              <div className="w-full" key={program.title}>
                <div className="relative w-full pt-[60%]">
                  <div className="absolute inset-0 grid">
                    <div className="col-span-full row-span-full overflow-hidden">
                      <img
                        src={program.image}
                        alt=""
                        className="w-full h-full object-cover object-center select-none"
                      />
                    </div>
                    <div className="col-span-full row-span-full bg-linear-to-b from-transparent via-60% via-transparent to-black"></div>
                    <div className="col-span-full row-span-full p-4 md:p-6">
                      <div className="h-full flex flex-col justify-end gap-2">
                        <h3 className="text-xl md:text-[1.375rem] md:leading-6 xl:text-3xl text-white">
                          {program.title}
                        </h3>
                        <p className="text-white text-sm line-clamp-2">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="w-full flex flex-col flex-1">
              <div className="w-full max-w-none flex-1 aspect-3/2">
                <div className="w-full h-full grid">
                  <div className="w-full h-full relative col-span-full row-span-full">
                    <img
                      src="https://cdn.buttercms.com/resize=width:2400/ddCi2OdhSKeeROHdrkWK"
                      alt=""
                      className="w-full h-full object-cover object-center overflow-hidden select-none"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
