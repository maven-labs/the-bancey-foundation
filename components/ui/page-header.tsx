import Image from "next/image";

interface PageHeaderProps {
  prefix?: string;
  title: string;
  image?: string;
}

function PageHeader({ prefix, title, image }: PageHeaderProps) {
  return (
    // <section className="bg-[#f7f4f3] -mt-16">
    //   <div className="pt-28">
    //     <div className="container">
    //       <div className="mb-5">
    //         <p className="font-bold text-secondary text-sm uppercase tracking-widest">
    //           {prefix}
    //         </p>
    //       </div>
    //       <div className="py-4 md:pt-8 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 lg:gap-20 md:min-h-75">
    //         <div className="col-span-2 lg:col-span-1">
    //           <h1 className="font-heading font-normal leading-none text-4xl md:text-[4rem] mb-4 md:mb-9 ">
    //             {title}
    //           </h1>
    //         </div>
    //         <div className="col-span-2 lg:col-span-1"></div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-[#0b69d5]">
      <div className="pt-28 pb-4 md:pt-60 md:pb-8">
        <div className="container flex flex-col flex-nowrap">
          <h1 className="text-white text-[1.75rem] md:text-4xl lg:text-[2.625rem] xl:text-[4rem] leading-[1.15] font-heading font-normal line-clamp-1">
            {title}
          </h1>
        </div>
      </div>
      {image && (
        <div className="flex flex-col flex-nowrap h-full min-h-35 aspect-3/1">
          <div className="h-full overflow-hidden">
            <Image
              src={image}
              alt="Header Image"
              width={1024}
              height={768}
              className="w-full h-full object-cover object-[0%_25%] overflow-hidden"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default PageHeader;
