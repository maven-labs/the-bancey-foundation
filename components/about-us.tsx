import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import SectionHeader from "./ui/section-header";
import Image from "next/image";

function AboutUs() {
  return (
    <section>
      {/* <div className="py-6 md:py-8 lg:py-12"> */}
      <div className="py-12 lg:py-20 xl:py-28">
        <div className="container">
          <SectionHeader title="The Foundation" />
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-34">
            <div className="block flex-1">
              <div className="aspect-video">
                <img
                  src="https://media.carnegie.org/filer_public_thumbnails/filer_public/95/29/95295d4b-e5e4-4d07-9983-c63d97fbc4ad/2025-americorps-seniors-workforce.jpg__810x540_q85_crop_subsampling-2_upscale.jpg"
                  alt=""
                  width={1024}
                  height={768}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="block flex-1">
              <p className="text-base lg:text-lg">
                The Bancey Foundation (TBF) in Ghana, Africa is a youth-led
                organization using storytelling, education and community impact
                to advance gender equality, economic empowerment, and climate
                resilience across communities in Africa.
              </p>
              <p className="text-base lg:text-lg mt-4">
                The Bancey Foundation's mission aligns with the United Nations
                Sustainable Development&nbsp;
                <Link
                  href="https://sdgs.un.org/goals/goal5"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Goals 5 (Gender Equality)
                </Link>
                ,&nbsp;
                <Link
                  href="https://sdgs.un.org/goals/goal8"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  8 (Decent Work and Economic Growth)
                </Link>
                , and&nbsp;
                <Link
                  href="https://sdgs.un.org/goals/goal13"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  13 (Climate Action)
                </Link>
                . We aim to build inclusive systems that empower marginalized
                groups, strengthen community resilience, and inspire collective
                action toward a fairer, greener, and more sustainable future for
                all.
              </p>
              <div className="mt-6">
                <Link
                  href="about"
                  className={buttonVariants({
                    variant: "link",
                    size: "lg",
                  })}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
