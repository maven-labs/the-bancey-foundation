import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./ui/icons";

function Footer() {
  return (
    <footer className="bg-sidebar-primary">
      <div className="py-8 md:py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            {/* Leading */}
            <div className="col-span-full lg:col-span-3">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-12">
                <div className="h-8 lg:h-12 flex items-center gap-2">
                  <Image
                    src="/logoipsum-404.svg"
                    alt="The Bancey Foundation logo"
                    className="w-auto h-full invert"
                    width="256"
                    height="128"
                  />
                  <span className="sr-only">The Bancey Foundation</span>
                </div>
                {/* Social Media */}
                <div className="flex gap-4 text-sidebar-primary-foreground">
                  <div className="cursor-pointer hover:text-muted-foreground">
                    <Link href="">
                      <Icons.facebook className="" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-muted-foreground">
                    <Link href="">
                      <Icons.instagram className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-muted-foreground">
                    <Link href="">
                      <Icons.x className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-muted-foreground">
                    <Link href="">
                      <Icons.threads className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-muted-foreground">
                    <Link href="">
                      <Icons.linkedIn className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-muted-foreground">
                    <Link href="">
                      <Icons.youtube className="size-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* The Foundation */}
            <div className="col-span-full md:col-span-4 lg:col-span-3">
              <div className="flex flex-col gap-4 text-sidebar">
                <Link href="" className="hover:underline underline-offset-4">
                  <span>About Us</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Our Mission & Values</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Leadership</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Press & Media</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Terms of Service</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Privacy Policy</span>
                </Link>
              </div>
            </div>
            {/* Engage */}
            <div className="col-span-full md:col-span-4 lg:col-span-3">
              <div className="flex flex-col gap-4 text-sidebar">
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Ways to Give</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Newsletter</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>FAQs</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Contact Us</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Reporting Scams</span>
                </Link>
              </div>
            </div>
            {/* Financial */}
            <div className="col-span-full md:col-span-4 lg:col-span-3">
              <div className="flex flex-col gap-4 text-sidebar">
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Annual Reports</span>
                </Link>
                <Link href="" className="hover:underline underline-offset-4">
                  <span>Financial Information</span>
                </Link>
              </div>
            </div>
            {/* Contact */}
            <div className="col-span-full">
              <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
                <div className="flex flex-col gap-4 text-sidebar">
                  <Link href="tel:0000000" target="_blank">
                    <span>+233 54 503 3909</span>
                  </Link>
                  <Link href="mailto:" target="_blank">
                    <span>contact@thebanceyfoundation.org</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-6 lg:gap-12">
                  <div className="flex gap-4 self-end">
                    <span className="text-muted-foreground text-xs">
                      Designed and Developed by:
                    </span>
                    <div className="h-6 flex items-center justify-end gap-2">
                      <Image
                        src="/images/maven-labs-logo.svg"
                        alt="Maven Labs logo"
                        className="w-auto h-full invert"
                        width="256"
                        height="128"
                      />
                      <span className="sr-only">Maven Labs</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground text-end">
                      The Bancey Foundation is non-profit organisation
                      registered in Ghana. Company No. 05433951
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
