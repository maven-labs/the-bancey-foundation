function Vision() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <div className="relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 border-t-3 border-foreground mb-4 md:mb-6 pt-2 lg:pt-8">
              <div className="col-span-full lg:col-span-3 text-xl md:text-[1.375rem] xl:text-[2rem] leading-6 md:leading-6.25 xl:leading-9 font-heading font-semibold">
                Our Vision
              </div>
              <div className="col-span-full lg:col-span-9">
                <p className="text-base lg:text-lg max-w-4xl">
                  A world where the people lead with confidence, live
                  sustainably with the environment and have unrestricted access
                  to transformative education, innovative opportunities and
                  climate-resilient futures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section>
    //  // <div className="py-6 md:py-8 lg:py-12">
    //     <div className="py-12 lg:py-20 xl:py-28">
    //     <div className="container flex flex-col lg:flex-row">
    //       <div className="block flex-1"></div>
    //       <div className="block flex-2">
    //         <div className="relative flex items-center justify-between gap-4 basis-auto shrink-0 p-0 mb-4 md:mb-6 border-t-[0.5px] border-foreground" />
    //         <div className="flex flex-col lg:flex-row gap-6 lg:gap-34">
    //           <span className="text-md">02</span>
    //           <h3 className="text-xl md:text-[1.375rem] xl:text-2xl leading-6 md:leading-6.25 xl:leading-9 font-medium whitespace-nowrap">
    //             Our Vision
    //           </h3>
    //           <p className="text-md lg:text-base">
    //             A world where the people lead with confidence, live sustainably
    //             with the environment and have unrestricted access to
    //             transformative education, innovative opportunities and
    //             climate-resilient futures
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Vision;
