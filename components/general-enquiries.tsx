import { Icons } from "./ui/icons";
import Link from "next/link";

function GeneralEnquiries() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <div className="relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 border-t-3 border-foreground mb-4 md:mb-6 pt-2 lg:pt-8">
              <div className="col-span-full lg:col-span-3 text-xl md:text-[1.375rem] xl:text-[2rem] leading-6 md:leading-6.25 xl:leading-9 font-heading font-semibold">
                General Enquiries
              </div>
              <div className="col-span-full lg:col-span-9">
                <div className="text-base lg:text-lg space-y-3">
                  <p>
                    Please use the contact information below to connect with a
                    specific office or department that can best meet your needs.
                  </p>
                  <p>
                    While it is important to us to be available to our partners,
                    potential grantees, and the public, due to the large number
                    of emails received, we may be unable to respond directly to
                    your inquiry.
                  </p>
                </div>
                <div className="mt-4 lg:mt-8">
                  <h4 className="font-medium">Follow Us:</h4>
                  <ul className="flex gap-x-4 mt-3">
                    <li className="group relative size-8 grid place-items-center rounded-sm hover:bg-muted">
                      <Link
                        href=""
                        className="[&>svg]:group-hover:text-primary"
                      >
                        <span className="absolute inset-0"></span>
                        <Icons.facebook className="size-5 lg:size-6" />
                      </Link>
                    </li>
                    <li className="group relative size-8 grid place-items-center rounded-sm hover:bg-muted">
                      <Link
                        href=""
                        className="[&>svg]:group-hover:text-primary"
                      >
                        <span className="absolute inset-0"></span>
                        <Icons.instagram className="size-5 lg:size-6" />
                      </Link>
                    </li>
                    <li className="group relative size-8 grid place-items-center rounded-sm hover:bg-muted">
                      <Link
                        href=""
                        className="[&>svg]:group-hover:text-primary"
                      >
                        <span className="absolute inset-0"></span>
                        <Icons.x className="size-5 lg:size-6" />
                      </Link>
                    </li>
                    <li className="group relative size-8 grid place-items-center rounded-sm hover:bg-muted">
                      <Link
                        href=""
                        className="[&>svg]:group-hover:text-primary"
                      >
                        <span className="absolute inset-0"></span>
                        <Icons.linkedIn className="size-5 lg:size-6" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralEnquiries;
