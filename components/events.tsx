"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./ui/section-header";

const articles = [
  {
    date: "10 Feb 2026",
    image:
      "https://www.svcf.org/assets/img/excerpts/_relatedContentDtLargeWebp/1507/Stocksy_comp_1266992-2.webp",
    title: "Our commitment to equity spans multiple initiatives.",
    description:
      "Addressing systemic disparities is preeminent among our core strategic priorities, and it is the unifying goal of our key funding initiatives. All of our work is centered on building equity and transforming systems to create a Silicon Valley where everyone can thrive.",
  },
  {
    date: "10 Feb 2026",
    image:
      "https://www.svcf.org/assets/img/excerpts/_relatedContentDtSquareWebp/1512/Stocksy_comp_1266992-6.webp",
    title:
      "We launch and participate in initiatives and cross-sector solutions that multiply our reach and impact.",
    description:
      "Most of these targeted initiatives are three to six years in length. We occasionally take on shorter, high-impact projects.",
  },
  {
    date: "10 Feb 2026",
    image:
      "https://www.nemours.org/_jcr_content/root/container/container/two_panel_block_left_83337711396627/col1/image.coreimg.85.1600.jpeg/1763618903160/block-transplant-doctor-high-five-boy-with-mom.jpeg",
    title: "What Parents Should Know About Childhood Vaccines",
    description:
      "Get clear, trusted answers on common questions from our medically reviewed KidsHealth library.",
  },
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
    title: "Why Polarization Is a Problem",
    description:
      "Dame Louise Richardson identifies grounds for optimism as she leads philanthropic efforts to understand and mitigate political polarization in America",
  },
  {
    date: "10 Feb 2026",
    image:
      "https://media.carnegie.org/filer_public_thumbnails/filer_public/df/bc/dfbc5aad-c547-46c6-9207-19de91c5dba9/nobel_prize_research_bar_graph.jpg__810x540_q85_crop_subsampling-2_upscale.jpg",
    title: "Want Greater Prosperity? Mind the Gap",
    description:
      "Why are the richest 20 percent of countries 30 times richer than the poorest? Three researchers have an answer, and it won them a Nobel Prize",
  },
];

function Events() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollByAmount = 400; // amount to scroll per click

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;

      // enable/disable buttons
      setCanScrollLeft(currentScroll > 0);
      setCanScrollRight(currentScroll < maxScroll - 1);
    };

    handleScroll(); // run once on mount
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <SectionHeader title="Events" />
        </div>
        <div className="relative mt-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-x-4 overflow-x-auto scroll-smooth px-5 sm:px-8 lg:px-[calc((100vw-1024px)/2+2rem)] xl:lg:px-[calc((100vw-1536px)/2+2rem)] no-scrollbar"
          >
            {/* {articles.map((article) => (
              <ArticleCard article={article} key={article.title} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
