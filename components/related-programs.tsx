"use client";

import Link from "next/link";
import ArticleCard from "./ui/article-card";
import SectionHeader from "./ui/section-header";

const articles = [
  {
    date: "10 Feb 2026",
    image:
      "https://www.svcf.org/assets/img/excerpts/early-childhood-development/_relatedContentDtSquareWebp/104855/Early_Childhood_Development.webp",
    title: "Early Childhood Initiatives",
    description:
      "Every child deserves the best possible start in life. The care and education children receive in their first years of life are the building blocks to future success. Yet, in Silicon Valley, one of the wealthiest regions in the nation, inequities deeply rooted in long-standing systems stack the deck against many of our youngest children, particularly those from underserved and under-resourced communities.",
  },
  {
    date: "10 Feb 2026",
    image:
      "https://media.carnegie.org/filer_public_thumbnails/filer_public/7a/16/7a16d336-ecce-414e-a276-604e9487dd76/dame_louise_richardson_2025.jpg__810x540_q85_crop_subsampling-2_upscale.jpg",
    title: "Annual Girl-child Scholarship",
    description:
      "Dame Louise Richardson identifies grounds for optimism as she leads philanthropic efforts to understand and mitigate political polarization in America",
  },
  {
    date: "10 Feb 2026",
    image:
      "https://media.carnegie.org/filer_public_thumbnails/filer_public/df/bc/dfbc5aad-c547-46c6-9207-19de91c5dba9/nobel_prize_research_bar_graph.jpg__810x540_q85_crop_subsampling-2_upscale.jpg",
    title: "Ramadhaan Program",
    description:
      "Why are the richest 20 percent of countries 30 times richer than the poorest? Three researchers have an answer, and it won them a Nobel Prize",
  },
];

function RelatedPrograms() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <SectionHeader title="Related Programs" />
          <div className="relative mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-8">
              {articles.map((article) => (
                <div
                  className="group relative flex-none shrink-0"
                  key={article.title}
                >
                  <div className="aspect-3/2 overflow-hidden">
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="pt-5 pb-3 xl:pt-8 xl:pb-4 flex flex-col gap-2 xl:gap-4">
                    {/* <div className="flex items-center flex-wrap gap-1">
                      <span className="text-xs leading-none font-muted-foreground uppercase">
                        Article
                      </span>
                      <span className="text-xs font-muted-foreground uppercase">
                        -
                      </span>
                      <span className="text-xs font-muted-foreground uppercase">
                        {article.date}
                      </span>
                    </div> */}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedPrograms;
