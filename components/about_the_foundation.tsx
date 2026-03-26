import Link from "next/link";

function AboutTheFoundation() {
  return (
    <section className="">
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container max-w-3xl">
          <div className="flex flex-col">
            <h4 className="leading-tight text-lg md:text-xl xl:text-2xl font-semibold">
              TBF is an organization dedicated to creating positive change
              through education, climate action and social innovation.
            </h4>
            <p className="text-base lg:text-lg mt-4">
              We cultivate transformative leadership, advance environmental
              sustainability, and create equitable opportunities so that every
              individual can thrive and contribute to build a more just and
              resilient future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTheFoundation;
