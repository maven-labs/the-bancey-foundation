import Image from "next/image";

interface PageHeaderProps {
  prefix?: string;
  title: string;
  image?: string;
}

function PageHeader({ prefix, title, image }: PageHeaderProps) {
  return (
    <section className="">
      <div className="pt-28 pb-4 md:pt-46 md:pb-8">
        <div className="container flex flex-col flex-nowrap">
          <h1 className="text-[1.75rem] md:text-4xl lg:text-[2.625rem] xl:text-[4rem] leading-[1.15] font-heading font-normal line-clamp-2">
            {title}
          </h1>
        </div>
      </div>
      {image && (
        <div className="flex flex-col flex-nowrap h-full min-h-35 aspect-[2.375] lg:aspect-3/1">
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
