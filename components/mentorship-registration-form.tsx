import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

function MentorshipRegistrationForm() {
  return (
    <section className="">
      <div className="py-12 lg:py-20 xl:py-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            {/* <div className="min-h-full lg:min-h-[37.25rem] xl:min-h-[46.5rem] p-8 md:px-10 lg:p-12.5 xl:p-15 relative flex flex-col gap-7.5 md:gap-15 lg:flex-row lg:gap-9 lg:pr-12 xl:gap-18 xl:pr-18"> */}
            <div className="flex flex-1 flex-col gap-y-4 md:gap-y-5 ">
              <h2 className="text-3xl lg:text-6xl font-semibold font-heading tracking-wide">
                Join the Programme
              </h2>
              <div className="text-lg xl:text-xl whitespace-pre-wrap">
                Send us a message to apply, inquire, or have a chat on this
                programme. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quibusdam animi, officia dignissimos autem numquam illo
                reiciendis quisquam eum impedit quos temporibus voluptas
                accusantium veniam eveniet dicta tempore ea totam aliquam.
              </div>
            </div>
            <div className="flex flex-1 gap-6">
              <form className="w-full flex flex-col gap-6">
                <div className="grid gap-5 w-full flex-wrap">
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      required
                      name="firstName"
                      type="text"
                      className="block"
                      inputSize="lg"
                      placeholder=""
                    />
                    {/* <div
                        id="form-view-701Rm00000xV4Tb-first-name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        &nbsp;
                      </div> */}
                  </div>
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      required
                      name="lastName"
                      type="text"
                      className="block"
                      inputSize="lg"
                      placeholder=""
                    />
                    {/* <div
                        id="form-view-701Rm00000xV4Tb-first-name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        &nbsp;
                      </div> */}
                  </div>
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      required
                      name="email"
                      type="email"
                      className="block"
                      inputSize="lg"
                      placeholder=""
                    />
                    {/* <div
                        id="form-view-701Rm00000xV4Tb-first-name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        &nbsp;
                      </div> */}
                  </div>
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      required
                      name="phone"
                      type="tel"
                      className="block"
                      inputSize="lg"
                      placeholder=""
                    />
                    {/* <div
                        id="form-view-701Rm00000xV4Tb-first-name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        &nbsp;
                      </div> */}
                  </div>
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      required
                      name="message"
                      className="block"
                      placeholder=""
                      rows={6}
                    />
                    {/* <div
                        id="form-view-701Rm00000xV4Tb-first-name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        &nbsp;
                      </div> */}
                  </div>
                </div>
                <div className="">
                  <p className="text-sm">
                    By providing a phone number, you confirm that you are an
                    adult and consent to receive automated marketing and
                    informational SMS messages from The Bancey Foundation at the
                    phone number you provided. To learn more about how The
                    Foundation would use your information, read the Foundation's
                    Privacy Statement. Message and data rates may apply. Message
                    frequency varies. You may opt out at any time by texting
                    “STOP“ to (773) 915-0096. Consent is not a condition of
                    purchase or service.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div></div>
                  {/* <div id="termsOfService" className="mb-5 md:mb-0 ">
                        <label className="inline-block cursor-pointer ">
                          <div className="relative flex items-center">
                            <Input
                              id="checkbox-termsOfService"
                              name="termsOfService"
                              type="checkbox"
                              aria-invalid="false"
                              className="cursor-pointer relative h-6 w-6 shrink-0 appearance-none rounded-none bg-transparent before:absolute before:top-[50%] before:left-[50%] before:-translate-y-1/2 before:-translate-x-1/2 not:disabled:hover:before:top-[1px] not:disabled:hover:before:left-[1px] before:h-[0.625rem] before:w-[0.625rem] before:bg-black before:rounded-full before:opacity-[0] before:transition-opacity not:disabled:hover:border-[2px] border-unset border-thin outline-none checked:before:opacity-[10] hover:border-[2px]"
                              value="checked"
                              required
                            />
                            <span className="label ml-3">
                              <span>
                                Yes, I agree to the
                                <a
                                  href="/terms-of-service"
                                  data-sveltekit-reload="true"
                                  aria-hidden="false"
                                  className="link outline-2 outline-offset-4 focus-visible:outline-dashed cursor-pointer relative outline-current focus-visible:border-current inline text-black underline hover:before:w-[0px] hover:text-cobalt-blue svelte-o0huki"
                                >
                                  <span>
                                    <span className=" svelte-o0huki">
                                      <span className="underline  svelte-o0huki">
                                        Terms of Service
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </span>
                            </span>
                          </div>
                        </label>
                      </div> */}
                  <Button
                    type="submit"
                    role="button"
                    variant="outline"
                    size="lg"
                    className="hover:bg-foreground hover:text-background"
                  >
                    <span className="">Submit</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorshipRegistrationForm;
