import Link from "next/link";

function GettingInvolved() {
  return (
    <section>
      <div className="py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col">
            <div className="relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 border-t-3 border-foreground pt-2 lg:pt-8">
              <div className="col-span-full xl:col-span-3 text-xl md:text-[1.375rem] xl:text-[2rem] leading-6 md:leading-6.25 xl:leading-9 font-heading font-semibold">
                Getting Involved
              </div>
              <div className="col-span-full xl:col-span-9">
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 [&>li:not(:last-child)]:border-b">
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">General inquiries</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        While it is important to us to be available to our
                        partners, potential grantees, and the public, due to the
                        large number of emails received, we may be unable to
                        respond directly to your inquiry.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <Link href="" className="text-primary">
                            Write to us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">Give with us</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        If you would like to support the work of the Bancey
                        Foundation beyond giving to one of our grantees, you can
                        give through Bancey Philanthropy Partners.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <Link href="" className="text-primary">
                            Learn more
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">Media inquiries</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        If you are a member of the news media, please use the
                        phone number or email address below to leave a detailed
                        message. Include your name, press affiliation, phone
                        number, questions, and deadline.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <span className="font-semibold">Phone:</span>
                          <Link href="tel:+1234567890" className="text-primary">
                            +1 206.709.3400
                          </Link>
                        </li>
                        <li className="flex flex-col text-sm">
                          <span className="font-semibold">Email:</span>
                          <Link href="tel:+1234567890" className="text-primary">
                            media@banceyfoundation.org
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">Career Seekers</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        We'd love to have you make a difference with us at the
                        Bancey Foundation.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <Link href="tel:+1234567890" className="text-primary">
                            Browse our job openings
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">Volunteer</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        Note: If you are a member of the news media, please use
                        the phone number or email address below to leave a
                        detailed message. Include your name, press affiliation,
                        phone number, questions, and deadline.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <span className="font-semibold">Phone:</span>
                          <Link href="tel:+1234567890" className="text-primary">
                            +1 (234) 567-890
                          </Link>
                        </li>
                        <li className="flex flex-col text-sm">
                          <span className="font-semibold">Email:</span>
                          <Link
                            href="mailto:media@banceyfoundation.org"
                            className="text-primary"
                          >
                            media@banceyfoundation.org
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">Ethics reporting</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        Employees and partners such as grantees, vendors, or
                        other third parties, may visit EthicsPoint, an anonymous
                        reporting service, to confidentially report issues that
                        raise ethical concerns.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <Link href="tel:+1234567890" className="text-primary">
                            Learn more
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="col-span-full md:col-span-1 pb-4 md:pb-6 lg:pb-8 flex flex-col">
                    <h4 className="font-semibold mb-3">Reporting scams</h4>
                    <div className="mt-1">
                      <p className="text-sm">
                        Visit our Reporting Scams page for information about
                        correspondence claiming to be from, or associated with,
                        the Bancey Foundation.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <ul className="mt-4 space-y-3">
                        <li className="flex flex-col text-sm">
                          <Link href="tel:+1234567890" className="text-primary">
                            Learn More
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GettingInvolved;
