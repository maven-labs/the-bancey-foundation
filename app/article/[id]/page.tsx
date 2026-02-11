import ArticleHeader from "@/components/ui/article-header";

function Article() {
  return (
    <>
      <div className="mt-16"></div>
      <ArticleHeader
        title="What $2.5 billion can do: Four innovations advancing women’s health"
        description="The Gates Foundation today announced a $2.5 billion commitment through 2030 to accelerate research and development (R&D) focused exclusively on women’s health. The funding will support more than 40 innovations in five critical, underfunded areas—particularly those affecting women in low- and middle-income countries."
        image="https://www.gatesfoundation.org/-/media/gfo/4our-work/programs/global-policy/thumbnail_20250811_sc_195_16x9.jpg?rev=aaf8225ac5a941b6ba4447187584fb1b&w=2400&hash=E917465EB85DC3FFE5B90F99F080BE6E"
        publishDate="09 Feb 2026"
        readTime="6 min."
      />
      {/* Overall, the prevalence of tobacco use is decreasing globally, but the number of people using tobacco is on the rise in regions such as Africa, where an increase from 63 million in 2020 to 69 million by 2030 is projected. Photo credit: SKY Girls Senegal */}
      <section>
        <div className="pb-12 w-full">
          <div className="container max-w-3xl px-4">
            <div className="flex flex-col">
              <div className="p-6"></div>
            </div>
            <p className="text-base mt-3.5">
              <span>
                When I first began practicing as an obstetrician-gynecologist, I
                was surprised to find that most medications commonly given to
                pregnant women hadn&apos;t been specifically formulated for use
                in pregnancy. But it was only when I transitioned to the
                biopharmaceutical industry that I saw how little health R&D
                funding goes toward women&apos;s health conditions beyond
                cancer—less than 2% as recently as 2021, according to McKinsey &
                Company. The U.S. didn&apos;t require federally funded clinical
                research to include women until 1993! Today, women&apos;s health
                issues are still too often misunderstood, misdiagnosed, or
                ignored. Although women generally live longer than men, they
                spend 25% more of their lives in poor health. Our
                foundation&apos;s US$2.5 billion commitment aims to center
                women&apos;s needs in a cutting-edge research
                agenda—particularly for those in underserved communities.
              </span>
            </p>
            <div className="my-12">
              <div className="flex flex-col gap-1">
                <div className="aspect-3/2 w-full h-full">
                  <img
                    src="https://www.gatesfoundation.org/-/media/gfo/5ideas_articles/articles/20250611-pph-drape-early-detection/nurse-photo_1600x10000.jpg?rev=f47a690aad764ae58dff87ff0736638a&w=1600&hash=B6CDA6BBC2CBC60ACA319E568B37E717"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-sm leading-none tracking-normal">
                  This simple tool is helping prevent maternal deaths worldwide.
                </div>
              </div>
            </div>
            <p className="text-base mt-3.5">
              <span>
                Our support will enable brilliant research teams around the
                world to advance more than 40 innovative women&apos;s health
                solutions—explicitly designed for low-resource settings, where
                the needs are the greatest and the gaps are most urgent. This
                commitment is intended as a transformative opportunity for the
                field—and a call to action for governments and other funders who
                care about protecting women&apos;s health.
              </span>
            </p>
            <hr className="border-accent my-14" />
            <div className="py-6">
              <div className="text-lg italic font-medium">
                <span>
                  Here are four of the potentially groundbreaking innovations
                  this funding will support.
                </span>
              </div>
            </div>
            <div className="mt-12 text-2xl font-semibold">
              A self-administered contraceptive patch
            </div>
            <p className="text-base mt-3.5">
              <span>
                Imagine getting six months of contraceptive protection by
                pressing a small patch onto your skin. Discreet and
                self-administered, the patch is embedded with microneedles
                containing progestin, the same hormone many women take in pill
                form to prevent pregnancy. The patch painlessly and gradually
                delivers protection over the ensuing months.
              </span>
            </p>
            <p className="text-base mt-3.5">
              <span>
                In many low-resource settings, women face significant barriers
                to consistent and reliable contraception. Many women in these
                communities want to have control over their reproductive health
                but do not use existing contraceptive methods because of male
                interference, concerns about side effects, or lack of access to
                options that meet their specific needs.
              </span>
            </p>
            <p className="text-base mt-3.5">
              <span>
                As a result, nearly half of all pregnancies worldwide—about
                45%—are unplanned. The self-administered microarray patch
                addresses many of those concerns and puts the power in
                women&apos;s hands.
              </span>
            </p>
            <div className="mt-12 text-2xl font-semibold">
              Vaginal health therapies
            </div>
            <p className="text-base mt-3.5">
              <span>
                Like the gut, the vagina has its own microbiome, and if it gets
                out of balance a woman can develop bacterial vaginosis—a risk
                factor for preterm birth and acquisition of STIs, including HIV.
                We support researchers who are studying the vaginal microbiome
                in women in Africa and Southeast Asia, yielding knowledge about
                differences between populations and how the microbiome can
                change in response to environmental conditions or location. The
                ultimate goal is to develop therapies that can restore and
                maintain an optimal vaginal environment.
              </span>
            </p>
            {/* <div className="py-4">
              <div className="flex flex-col gap-1">
                <div className="aspect-3/2 w-full h-full">
                  <img
                    src="https://cdn.sanity.io/images/fnx611yr/productionv2/8072ebae2151cc2ee8d9c2a764cb42b6afbf95f6-5185x3461.jpg?auto=format"
                    alt=""
                    className=""
                  />
                </div>
                <div className="text-sm leading-none tracking-normal">
                  Alex Albon runs Aero Rakes on the FW47 in 2025 Pre-Season
                  Testing.
                </div>
              </div>
            </div> */}
            <hr className="border-accent my-14" />
            <p className="text-base mt-3.5">
              <span>
                Investing in women&apos;s health is one of the most powerful
                ways to create a better world for all. As an OB-GYN, I&apos;ve
                seen firsthand that when women are healthier, they are better
                able to make choices for their own lives and shape their
                communities. The benefits ripple outward toward everyone.
              </span>
            </p>
            <p className="text-base mt-3.5">
              <span>
                Closing the women&apos;s health gap will save and improve
                millions of lives. It could also unlock US$1 trillion in global
                economic gains each year by 2040, according to a McKinsey Heath
                Institute report.
              </span>
            </p>
            <p className="text-base mt-3.5">
              <span>
                Our US$2.5 billion commitment over the next five years, is
                rooted in a simple but urgent belief: Women and girls in low-
                and middle-income countries deserve access to the care, tools,
                and innovations that can protect their health and unlock their
                potential. With sustained support from governments,
                philanthropies, multilateral institutions, and the private
                sector, we can help bring about a new era of progress and
                discovery and a more equal world.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Article;
