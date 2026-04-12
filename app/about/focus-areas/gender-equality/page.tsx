import RelatedPrograms from "@/components/related-programs";
import PageHeader from "@/components/ui/page-header";

function GenderEquality() {
  return (
    <>
      <PageHeader
        title="Gender Equality"
        image="https://www.fordfoundation.org/wp-content/uploads/2015/01/PP_Civic_Engagement_V2Option-4_V2.jpg"
      />
      <section>
        <div className="pb-12 w-full">
          <div className="container max-w-3xl px-4">
            <div className="flex flex-col">
              <div className="p-6"></div>
            </div>
            <p className="text-base lg:text-lg mt-3.5 lg:mt-6">
              <span>
                The nature of work is changing—and at a magnitude that we have
                yet to fully grasp, let alone respond to. Over the past several
                decades, the workplace has been transformed by globalization,
                changing power dynamics, and the growing economic role of
                financial markets. New and emerging technologies—including
                artificial intelligence, robotics, and big data—are playing an
                increasingly important role in shaping the jobs of the future,
                by shifting jobs between sectors, transforming the kinds of
                tasks that are done in existing jobs, and changing how people
                connect to work. Traditional employment is beginning to look
                more and more like “gig” work, with unpredictable work schedules
                and more precarious working conditions and rewards.
              </span>
            </p>
            <p className="text-base lg:text-lg mt-3.5 lg:mt-6">
              <span>
                These changes have broad implications. As technological
                innovation upends more sectors of the economy—displacing jobs
                and changing the nature of work tasks—deep economic anxiety
                fuels mistrust of democratic institutions and magnifies age-old
                prejudices and discrimination. Labor market policies, which
                regulate and help determine the nature of employment and
                employer-worker arrangements, have not kept up. Millions of
                workers can&apos;t afford to simply cope with a changing
                marketplace and growing economic risk.
              </span>
            </p>
            <p className="text-base lg:text-lg mt-3.5 lg:mt-6">
              <span>
                Worldwide, many types of workers are affected by these seismic
                changes, from the creative professional working “gig to gig” to
                the retail or restaurant worker, the home care worker
                negotiating price and availability with customers through an
                app, the construction worker, and the long-haul trucker worried
                about a future of driverless vehicles. But the changes are not
                impacting people equally: women, people of color, migrants and
                people with disabilities disproportionately bear the brunt,
                exacerbating inequality overall.
              </span>
            </p>
            <p className="text-base lg:text-lg mt-3.5 lg:mt-6">
              <span>
                If harnessed properly, new technologies have the potential to
                create new industries, occupations, and jobs. Rather than simply
                replacing human labor, technology can augment it. Tech can also
                be a boon to people with disabilities, and has the potential to
                help increase human productivity as well as job quality.
                Maximizing this potential will require strong policies,
                regulations, standards, and innovative business practices that
                increase quality work and economic security. It will mean
                building a broad coalition of workers and their advocates, the
                private sector, and policy makers across levels of government to
                generate ideas and promote action. And it will take leadership
                from robust organizations focused on amplifying the power of
                workers.
              </span>
            </p>
            <hr className="border-accent my-14" />
            <div className="py-6 text-center">
              <div className="text-lg italic font-medium mb-4">
                <span>
                  Here are four of the potentially groundbreaking innovations
                  this funding will support.
                </span>
              </div>
              <span className="">Bill Gates</span>
            </div>
            <hr className="border-accent my-14" />
            <div className="mt-12 text-2xl lg:text-4xl font-heading font-semibold">
              What we don't fund
            </div>
            <p className="text-base italic lg:text-lg mt-3.5 lg:mt-6">
              <span>
                We know our partners&apos; time is valuable, so we discourage
                using it to submit proposals that don&apos;t fall within funding
                guidelines. In this spirit, we aim to be transparent about what
                our grantmaking does not support.
              </span>
            </p>
            <p className="text-base lg:text-lg mt-3.5 lg:mt-6">
              <span>
                We do not make grants to support efforts to strengthen economic
                and financial security outside the context of work for example
                in areas such food and nutrition assistance. We do not fund
                scientific or technological research that is disconnected from
                work and workers. And we do not fund workforce development and
                skill-building, or entrepreneurship training and financing.
              </span>
            </p>
            <p className="text-base lg:text-lg mt-3.5 lg:mt-6">
              <span>
                Note: The foundation&apos;s Mission Investments team does invest
                in enterprises, including funds that emphasize job quality.
              </span>
            </p>
          </div>
        </div>
      </section>
      <RelatedPrograms />
    </>
  );
}

export default GenderEquality;
