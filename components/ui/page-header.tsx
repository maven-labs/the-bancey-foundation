import React from "react";

interface PageHeaderProps {
  prefix?: string;
  title: string;
  image: string;
}

function PageHeader({ prefix, title, image }: PageHeaderProps) {
  return (
    <section className="bg-[#f7f4f3]">
      <div className="pt-17.5">
        <div className="container">
          <div className="mb-5">
            <p className="font-bold text-secondary text-sm uppercase tracking-widest">
              {prefix}
            </p>
          </div>
          <div className="py-4 grid grid-cols-1 gap-4">
            <div className="mb-4">
              <h1 className="font-heading font-light text-4xl">{title}</h1>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </section>
    // <section className="bg-primary">
    //   <div className="pt-28 pb-4 md:pt-60 md:pb-8">
    //     <div className="container flex flex-col flex-nowrap">
    //       <h1 className="text-white text-[1.75rem] md:text-4xl lg:text-[2.625rem] leading-[1.15] font-heading font-semibold line-clamp-1">
    //         {title}
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="flex flex-col flex-nowrap h-full min-h-35 aspect-3/1">
    //     <div className="h-full overflow-hidden">
    //       <img
    //         src={image}
    //         alt="Header Image"
    //         className="w-full h-full object-cover object-[0%_25%] overflow-hidden"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}

export default PageHeader;
