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
                <span className="text-5xl lg:text-[55px] font-light">500+</span>
                <p className="text-lg leading-normal mt-2">
                  Since 2025, our donors have enabled us impact the lives of
                  more than 500 young people that mean the most to them.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="text-center md:text-start py-5 text-white">
                <span className="text-5xl lg:text-[55px] font-light">15</span>
                <p className="text-lg leading-normal mt-2">
                  We thoughtfully administer more than 15 community engagements
                  across the country.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="text-center md:text-start py-5 text-white">
                <span className="text-5xl lg:text-[55px] font-light">25+</span>
                <p className="text-lg leading-normal mt-2">
                  Our valiant volunteers help in identifying and soliciting
                  charitable funds established by donors with unique goals and
                  interests.
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
