import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Reflecting on 10 Years of Philantropy in Ghana",
    description:
      "The world’s population is growing, but it is in Africa where this challenge is particularly acute. We know Africa as the place where human life began - a place with an ancient and noble history, but today it is also a place that is becoming home to more children than any other place on earth. Already, 77% of the population is below the age of 35.",
    // description:
    //   "A message from our founder, Dame Louise Richardson as The Bancey Foundation celebrates a meaningful milestone for our work. A decade of philanthropy in Ghana.",
    image:
      "https://assets.weforum.org/article/image/large_WWtFI3NBh9fKgsKMRdAYJhMLk0T0NSr-wtRgZdyAqm0.jpg",
    category: "Article",
    date: "Sept 20, 2026",
  },
  {
    title: "What can volunteering teach us about compassionate leadership?",
    description: "",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_e8t8nMZ2fbkRaXzKtRedsSXs0BUD6Jpq91fWiOJ1zqQ.webp",
    category: "Climate Action & Education",
    date: "Sept 20, 2026",
  },
  {
    title:
      "Closing the loop on plastics: How youth-led action is driving circularity",
    description: "",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_My44DW3W4XT-TUNaZZnUCSIfw9rsy0YfgQ5KdAlyJuI.webp",
    category: "Climate Action & Education",
    date: "Sept 19, 2026",
  },
  {
    title:
      "Building skills isn't enough for young people: what the future of work is missing",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_XNOg2YMsPCuHvqBKpQVOYVX0o0FMOiGktRzaLpsrf3s.webp",
    category: "Gender Equity & Inclusion",
    date: "Sept 19, 2026",
  },
  {
    title:
      "Innovation Prize 2026: 8 ways young leaders are transforming their communities",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_IaqFO9fd2ytBZTdzj6mBQmNcg7UaeSarl3-FSIZ45QM.webp",
    category: "Gender Equity & Inclusion",
    date: "Sept 19, 2026",
  },
  {
    title: "Meet the Young Global Leaders Class of 2026",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_7M087Z2Q3z4QVYGknxw1LJdE2m-XiNP5jSwEkTaP5MU.webp",
    category: "Gender Equity & Inclusion",
    date: "Sept 18, 2026",
  },
  {
    title: "Why a Spirit of Dialogue needs the next generation",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_NCZSJgfcWdZhux0QEy_utMGcXjLzFFHc1-0XuADUMGM.webp",
    category: "Gender Equity & Inclusion",
    date: "Sept 17, 2026",
  },
  {
    title:
      "When it comes to money matters, young people who know better, do better",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_-0mJBotzlQpulfQIXVXWyPZOx4W3rqRpQ3mxARXQEXI.webp",
    category: "Gender Equity & Inclusion",
    date: "Sept 16, 2026",
  },
  {
    title:
      "UN says 'overshoot, peak, decline' is new climate goal – and other nature and climate news",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_ypx1rNsXOwhQAiAKgx18mrVKw-tQV1SpTA6XT7TB_8g.webp",
    category: "Climate Action & Education",
    date: "Sept 15, 2026",
  },
  {
    title:
      "How 3D-printed prostheses are bringing mobility and hope to conflict zones",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_ZI64FftW2RtzfpOS29mFVRj0yX2A_w3WHrrMyScZa64.webp",
    category: "Climate Action & Education",
    date: "Sept 15, 2026",
  },
  {
    title:
      "The copper we need may already have been mined. Here's how to get it into global supply chains",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_yU1WK_qU0MVs3HtxXgn_QGCk44YNoW9zPplVwYw6bqY.webp",
    category: "Climate Action & Education",
    date: "Sept 14, 2026",
  },
  {
    title: "Citizen-first AI: How young people can shape AI in public services",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_Hs6C7GwUQy1wq5dFNqCHmA39HaLWK_S099hoksAc0B8.webp",
    category: "Climate Action & Education",
    date: "Oct 10, 2025",
  },
  {
    title:
      "From classrooms to global impact: how Tamale built an inclusive startup ecosystem",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp__vXszX4uoKQSfYXjDYGzt9nVoeU5VJiPurPRquA39xk.webp",
    category: "Gender Equity & Inclusion",
    date: "Jun 09, 2025",
  },
  {
    title:
      "Why intergenerational leadership is redefining business performance, innovation and resilience",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_HRltLgHQASv_T8q69RgzpF-goVJTe1S51u1rRP685FM.webp",
    category: "Gender Equity & Inclusion",
    date: "May 20, 205",
  },
  {
    title:
      "Young people have the power to break barriers to women’s empowerment",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_G4AaedjG6St4dx6poouGC8JMUI6UwRw58pqwFyalndE.webp",
    category: "Gender Equity & Inclusion",
    date: "Mar 07, 2025",
  },
  {
    title:
      "Net zero planning needs an AI update. COP31 is the right moment to do that",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_KqI1YrMixYeAbbIItDOgt1IP1xbR0dVDJoF4GtvzqhM.webp",
    category: "Climate Action & Education",
    date: "Mar 20, 2025",
  },
  {
    title:
      "Young people’s voices are key to securing global peace and security",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_G2GiSl8EL_FQdleXn5gcsI9lYJ0HQQxnQXwWZgra6Ac.webp",
    category: "Gender Equity & Inclusion",
    date: "Feb 18, 2025",
  },
  {
    title: "4 emerging trends from Wa's booming entrepreneur ecosystem",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_AEQ84DKDWc3D1Kiqy7qGrZHkXAfsc0nT0Zgafa6_dlQ.webp",
    category: "Gender Equity & Inclusion",
    date: "Dec 05, 2024",
  },
  {
    title:
      "Empowering the future: how Global Shapers are advancing the youth agenda",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_V13Q55rDog2YpL64iFeHdZkb-3AX2P3FHz77jvm7PYY.webp",
    category: "Gender Equity & Inclusion",
    date: "Jul 10, 2024",
  },
  {
    title:
      "Why we need to rebuild our social contract with the world's children",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_kZgCzyh5ftSrebll1-1oxo7cB6KTNbL4C_vCNNNmajc.webp",
    category: "Climate Action & Education",
    date: "Jan 17, 2024",
  },
  {
    title:
      "The real risk of the energy transition is delaying it: Lessons from India",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_aiMtoTXEquwI5K7ceNb9sAYsF-Hdvy0RZLF_xDMMSsU.webp",
    category: "Climate Action & Education",
    date: "Jan 17, 2024",
  },
];

function AllStories() {
  return (
    <div>
      <FeaturedStory />
      <OtherStories />
    </div>
  );
}

const FeaturedStory = () => {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <article className="group relative w-full hover:bg-muted flex gap-4 lg:gap-6 cursor-pointer">
            <div className="aspect-3/2 max-h-100 overflow-hidden">
              <Image
                src={stories[0].image}
                alt=""
                width={920}
                height={480}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="flex-1 p-4 lg:p-6">
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <span className="text-sm text-primary font-medium">
                  {stories[0].category}
                </span>
                <h3 className="text-lg md:text-xl xl:text-3xl font-semibold line-clamp-2">
                  {stories[0].title}
                </h3>
                <p className="text-center mb-4">{stories[0].description}</p>
                <span className="text-sm text-muted-foreground">
                  {stories[0].date}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const OtherStories = () => {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
            {stories.slice(1, stories.length).map((story) => (
              <article
                className="group relative w-full flex flex-col cursor-pointer"
                key={story.title}
              >
                <div className="mb-2 lg:mb-3">
                  <div className="aspect-3/2 overflow-hidden">
                    <Image
                      src={story.image}
                      alt=""
                      width={920}
                      height={480}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-medium text-primary">
                    {story.category}
                  </span>
                  <Link
                    href="#"
                    className="after:absolute after:inset-0 after:z-10"
                  >
                    <h4 className="font-semibold text-lg leading-tight mb-1 group-hover:underline line-clamp-2">
                      {story.title}
                    </h4>
                  </Link>
                  <div className="mt-auto">
                    <div className="mt-4">
                      <span className="text-sm">{story.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllStories;
