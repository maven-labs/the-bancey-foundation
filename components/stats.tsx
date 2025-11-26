import React from "react";
import SectionHeader from "./ui/section-header";

function Stats() {
  // https://www.bloomberg.org/
  // https://www.growyourgiving.org/
  return (
    <section className="bg-[#181C26]">
      <div className="pt-10 pb-12 md:py-15 lg:py-17.5 xl:py-20">
        <div className="container">
          {/* <SectionHeader title="Our Impact" /> */}
          <h2 className="text-white text-lg">Our Impact</h2>
          <div className="mt-10 flex flex-col lg:flex-row gap-6">
            <div className="relative w-full">
              <div className="text-center md:text-start py-5 text-white">
                <span className="text-5xl lg:text-[55px] font-light">
                  9 Billion+
                </span>
                <p className="text-lg leading-normal mt-2">
                  Since 1978, our donors have granted more than $9 billion to
                  charities that mean the most to them.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="text-center md:text-start py-5 text-white">
                <span className="text-5xl lg:text-[55px] font-light">
                  8,000+
                </span>
                <p className="text-lg leading-normal mt-2">
                  We thoughtfully administer more than 8,000 funds for donors
                  across the country.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="text-center md:text-start py-5 text-white">
                <span className="text-5xl lg:text-[55px] font-light">
                  $8 Billion+
                </span>
                <p className="text-lg leading-normal mt-2">
                  Our $8 billion in assets are held in charitable funds
                  established by donors with unique goals and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="">
    //   <div>By the Numbers/Our Impact</div>
    //   <div className="">Beneficiaries</div>
    //   <div className="">Donors</div>
    //   <div className="">Beneficiaries</div>
    //   <div className="">
    //     Women enrolled in job training and education programs
    //   </div>
    //   <div className="">
    //     high achieving, lower-income students provided with free college
    //     education
    //   </div>
    //   <div className=""></div>
    //   <div className=""></div>
    // </section>
  );
}

export default Stats;
