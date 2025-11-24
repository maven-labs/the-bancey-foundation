interface ArticleHeaderProps {
  title: string;
  description: string;
  image: string;
  publishDate: string;
  readTime: string;
}

function ArticleHeader({
  title,
  description,
  image,
  publishDate,
  readTime,
}: ArticleHeaderProps) {
  return (
    <div>
      <div className="py-10">
        <div className="flex flex-col gap-6 xl:gap-10">
          <div className="flex flex-col max-w-3xl mx-auto px-4 py-3">
            <h1 className="text-xl md:text-[1.75rem] md:leading-8 xl:text-[2.5rem] xl:leading-11.5 font-heading font-semibold mb-2">
              {title}
            </h1>
            <p className="text-sm leading-4 md:text-lg md:leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="w-full aspect-video md:aspec-[7/3]">
            <img
              src={image}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="w-full flex max-w-3xl px-4 mt-4 mx-auto divide-x">
            <div className="w-full max-w-32 flex flex-col gap-2">
              <div className="text-xs leading-none text-muted-foreground font-bold">
                Published on
              </div>
              <div className="text-sm leading-4.5 uppercase">{publishDate}</div>
            </div>
            <div className="w-full max-w-32 flex flex-col gap-2 pl-4">
              <div className="text-xs leading-none text-muted-foreground font-bold">
                Est. reading time
              </div>
              <div className="text-sm leading-4.5">{readTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleHeader;
