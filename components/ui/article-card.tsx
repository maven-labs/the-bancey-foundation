import Link from "next/link";

function ArticleCard({ article }: any) {
  return (
    <div className="group relative w-[292.75px] md:w-65 lg:w-89 xl:w-83 flex-none shrink-0">
      <div className="aspect-3/2 overflow-hidden">
        <img
          src={article.image}
          alt=""
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="pt-5 pb-3 xl:pt-8 xl:pb-4 flex flex-col gap-2 xl:gap-4">
        <div className="flex items-center flex-wrap gap-1">
          <span className="text-xs leading-none font-muted-foreground uppercase">
            Article
          </span>
          <span className="text-xs font-muted-foreground uppercase">-</span>
          <span className="text-xs font-muted-foreground uppercase">
            {article.date}
          </span>
        </div>
        <Link href="/article/what-the-2026-cars-will-demand-from-drivers-and-what-fans-can-expect-to-see">
          <span className="absolute inset-0"></span>
          <p className="group-hover:underline text-base xl:text-2xl leading-5 xl:leading-7.5 font-semibold line-clamp-2">
            {article.title}
          </p>
        </Link>
        <div className="text-sm xl:text-base font-muted-foreground leading-4.5 xl:leading-5 line-clamp-2">
          <span>{article.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
