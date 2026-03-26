import Link from "next/link";
import SectionHeader from "./ui/section-header";

function ContactUs() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <SectionHeader title="Connect With Us" />
          </div>
          <div className="relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-0 gap-4 md:gap-6 lg:gap-8 pt-2 lg:pt-8">
            <div className="col-span-full lg:col-span-6">
              <p className="md:text-lg lg:text-xl">
                Stay in touch and connect with The Bancey Foundation
              </p>
            </div>
            <div className="col-span-full lg:col-span-6 grid md:grid-cols-2 lg:divide-x divide-border">
              <div className="flex flex-col">
                <div className="pt-2 mt-9 md:pt-0 md:mt-0">
                  <ul className="text-primary font-normal lg:text-xl">
                    <li className="hover:underline">
                      <Link href="">Contact & Connect</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="">The Bancey Foundation Relief Fund</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 after:absolute after:top-0 after:right-0 after:left-0 afer:h-px after:content-[''] after:bg-foreground">
                <div className="pt-2 mt-9 md:pt-0 md:mt-0">
                  <ul className="text-primary font-normal lg:text-xl">
                    <li className="hover:underline">
                      <Link href="">Facebook</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="">X</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="">Instagram</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="">LinkedIn</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-span-4 relative max-md:pb-7.5 max-md:[&amp;:not(:nth-last-child(2))]:pt-7.5 md:[&amp;:nth-last-of-type(2)]:pb-0 md:col-span-6 after:absolute after:-right-grid-gutter-half after:top-0 after:h-full after:w-0 after:content-[''] lg:after:w-px md:after:[&amp;:not(:last-child)]:border-r-thin">
          <div className="bg-transparent text-black  p-0 h-full min-h-110 md:min-h-112 lg:min-h-92 xl:min-h-132 relative flex w-full flex-col">
            <figure className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover object-center transition-all duration-400 ease-in-out scale-[103%]"
                src="//images.ctfassets.net/l7h59hfnlxjx/5cUqmmhkHtMdi0J95NXWn/820e14a72d26313b553d56586974de17/05-29-2019JL036-e1559325369849.jpg"
                alt=""
              />
            </figure>
            <div className="flex flex-col grow">
              <p className="text-2xl leading-none -tracking-[0.8px] font-semibold pt-6 md:pt-7 lg:pt-7.5 xl:pt-8">
                <Link
                  id="cta-45qsdc9GMx66BoI1YEwBDe"
                  href="/about/ways-to-give/"
                  aria-describedby="cta-45qsdc9GMx66BoI1YEwBDe"
                  className="no-underline outline-none after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-card focus-visible:outline-none"
                  data-sveltekit-reload=""
                >
                  Ways to Give
                </Link>
              </p>
              <div
                className="body-md pt-3 lg:pt-4 whitespace-pre-wrap"
                id="link-card-description"
              >
                Support the Bancey Foundation and learn more about our
                fundraising goals for the future.
              </div>{" "}
              <span
                id="cta-45qsdc9GMx66BoI1YEwBDe"
                aria-hidden="true"
                className="link outline-2 outline-offset-4 focus-visible:outline-dashed cursor-pointer relative outline-current focus-visible:border-current cta-md flex items-center text-black pt-15 lg:pt-20 mt-auto is-link-hovered svelte-o0huki"
              >
                <span>
                  <span className="animate-underline svelte-o0huki">
                    {" "}
                    <span className=" svelte-o0huki">Learn more</span>{" "}
                    <span className="inline whitespace-nowrap   svelte-o0huki">
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          className="ml-1 xl:ml-2 xl:w-6 xl:h-6"
                          width="16"
                          height="16"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="m12.48 6.933-2.827-3.6L11.288 2 16 8l-4.712 6-1.635-1.333 2.827-3.6H0V6.933z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </span>{" "}
              </span>
            </div>
          </div>{" "}
        </div> */}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
