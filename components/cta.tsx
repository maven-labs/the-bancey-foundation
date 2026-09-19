import { Button } from "./ui/button";

function CTA() {
  return (
    <section className="bg-[#f8f9fd]">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-34">
          <div className="relative block h-60 flex-1 overflow-hidden lg:h-auto">
            <img
              src="https://static.change.org/homepageV3/homepage-contribute@2x.webp"
              alt=""
              className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
            />
          </div>
          <div className="block flex-1">
            <div className="flex flex-col items-start gap-6 p-8 md:p-12">
              <div>
                <h2 className="text-xl md:text-[1.375rem] xl:text-[2rem] leading-6 md:leading-6.25 xl:leading-9 font-heading font-semibold">
                  Join us in creating <br />
                  lasting change.
                </h2>
              </div>
              <p className="text-base">
                Change.org is an independent, nonprofit-owned organization,
                funded entirely by millions of users just like you. Stand with
                Change to protect the power of everyday people making a
                difference.
              </p>
              <Button variant="outline" size="lg">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   <div className="flex items-stretch overflow-hidden max-md:flex-col md:flex-row-reverse rounded-xl bg-background-raised text-typography-strong" data-testid="homepage-sunrise-contribute-section"><div className="overflow-hidden md:ml-0 h-[220px] md:h-auto md:basis-1/2"><picture className="block h-full w-full"><source type="image/webp" srcSet="https://static.change.org/homepageV3/homepage-contribute@1x.webp 1x, https://static.change.org/homepageV3/homepage-contribute@2x.webp 2x, https://static.change.org/homepageV3/homepage-contribute@3x.webp 3x" /><img className="aspect-video bg-background-raised h-full w-full object-cover" src="https://static.change.org/homepageV3/homepage-sunrise-contribute@1x.png" alt="Diverse group of people’s faces arranged in a circle around a yellow icon showing hands holding a heart" srcSet="https://static.change.org/homepageV3/homepage-sunrise-contribute@1x.png 1x, https://static.change.org/homepageV3/homepage-sunrise-contribute@2x.png 2x, https://static.change.org/homepageV3/homepage-sunrise-contribute@3x.png 3x," loading="lazy" /></picture></div><div className="overflow-hidden md:mt-0 md:rounded-r-none md:basis-1/2"><div className="flex flex-col items-start gap-6 p-8 md:p-12"><div><span style={{fontSize: "0", lineHeight: "0"}}></span><h2 className="font-sans text-size-heading-large-sm md:text-size-heading-large-md lg:text-size-heading-large" data-size="large" data-truncate="false" data-underline="false" data-variant="heading" data-qa="contribute-section-title">Support Change<br />Contribute Today</h2></div><span className="text-size-body [&amp;_b]:text-size-body-bold [&amp;_strong]:text-size-body-bold font-sans" data-size="medium" data-truncate="false" data-underline="false" data-variant="body">Change.org is an independent, nonprofit-owned organization, funded entirely by millions of users just like you. Stand with Change to protect the power of everyday people making a difference.</span><a className="box-border inline-flex items-center justify-center gap-1.5 rounded-lg no-underline outline-hidden enabled:cursor-pointer relative before:absolute before:content-[&quot;&quot;] before:pointer-events-none before:inset-0 before:rounded-lg before:border border-none text-typography-strong before:border-stroke-weak border active:bg-fill-press! hover:bg-fill-hover px-6 py-4" data-qa="homepage-contribute-section-cta" href="/member/join" data-discover="true"><div className="font-sans text-size-heading-xs text-center" data-size="x-small" data-truncate="false" data-underline="false" data-variant="heading">Contribute</div></a></div></div></div>
  );
}

export default CTA;
