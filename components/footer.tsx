import Image from "next/image";
import Link from "next/link";
import { Icons } from "./ui/icons";

const sections = [
  {
    name: "The Foundation",
    children: [
      {
        name: "About Us",
        href: "about",
      },
      {
        name: "Our Mission & Values",
        href: "about#mission",
      },
      {
        name: "Leadership",
        href: "about#leadership",
      },
      {
        name: "Press & Media",
        href: "contact#media",
      },
      {
        name: "Terms of Service",
        href: "",
      },
      {
        name: "Privacy Policy",
        href: "",
      },
    ],
  },
  {
    name: "Engage",
    children: [
      {
        name: "Ways to Give",
        href: "",
      },
      {
        name: "Newsletter",
        href: "",
      },
      {
        name: "FAQs",
        href: "contact#enquiry",
      },
      {
        name: "Contact Us",
        href: "contact",
      },
      {
        name: "Reporting Scams",
        href: "contact#report",
      },
    ],
  },
  {
    name: "Financial",
    children: [
      {
        name: "Annual Reports",
        href: "contact#enquiry",
      },
      {
        name: "Financial Information",
        href: "contact#enquiry",
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#f2f0ee]">
      <div className="py-8 md:py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            {/* Leading */}
            <div className="col-span-full lg:col-span-3">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-12">
                <div className="h-8 lg:h-12 flex items-center gap-2">
                  <Image
                    src="/images/tbf-logo.svg"
                    alt="The Bancey Foundation logo"
                    className="w-auto h-full"
                    width="256"
                    height="128"
                  />
                  <span className="sr-only">The Bancey Foundation</span>
                </div>
                {/* Social Media */}
                <div className="flex gap-4 text-foreground">
                  <div className="cursor-pointer hover:text-primary">
                    <Link href="">
                      <Icons.facebook className="" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-primary">
                    <Link href="">
                      <Icons.instagram className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-primary">
                    <Link href="">
                      <Icons.x className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-primary">
                    <Link href="">
                      <Icons.threads className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-primary">
                    <Link href="">
                      <Icons.linkedIn className="size-6" />
                    </Link>
                  </div>
                  <div className="cursor-pointer hover:text-primary">
                    <Link href="">
                      <Icons.youtube className="size-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* The Foundation */}
            {sections.map((section) => (
              <div
                className="col-span-full md:col-span-4 lg:col-span-3"
                key={section.name}
              >
                <div className="flex flex-col gap-4">
                  {section.children.map((link) => (
                    <Link
                      href={link.href}
                      className="max-w-min hover:underline underline-offset-4"
                      key={link.name}
                    >
                      <span className="text-nowrap">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {/* Contact */}
            <div className="col-span-full">
              <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
                <div className="w-full flex flex-col gap-4">
                  <Link
                    href="tel:0000000"
                    target="_blank"
                    className="max-w-min"
                  >
                    <span className="text-nowrap">+233 54 503 3909</span>
                  </Link>
                  <Link href="mailto:" target="_blank" className="max-w-min">
                    <span className="text-nowrap">
                      contact@thebanceyfoundation.org
                    </span>
                  </Link>
                </div>
                <div className="w-full flex flex-col gap-6 lg:gap-12">
                  <div className="flex gap-4 self-end">
                    <span className="text-muted-foreground text-xs">
                      Designed and Developed by:
                    </span>
                    <Link
                      href="https://abassmutala.github.io/"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <div className="group h-6 flex items-center justify-end gap-2 cursor-pointer">
                        <svg
                          width="150"
                          height="71"
                          viewBox="0 0 150 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-auto h-full transition-all duration-300"
                        >
                          <path
                            d="M122.547 0.0224609H127.354L143.997 21.4053V0.0224609H149.567V30.5693H144.783L128.14 9.20898V30.5693H122.547V0.0224609Z"
                            fill="currentColor"
                          />
                          <path
                            d="M96.3125 0.0224609H117.246V5.03125H101.905V12.6904H115.157V17.4072H101.905V25.5605H117.448V30.5693H96.3125V0.0224609Z"
                            fill="currentColor"
                          />
                          <path
                            d="M61.6104 0H67.5176L76.9287 23.2695L77.0186 23.2246L86.4072 0H92.3369L79.5117 30.5693H74.4131L61.6104 0Z"
                            fill="currentColor"
                          />
                          <path
                            d="M57.0957 24.6621H43.0352L40.6094 30.5693H34.7021L47.415 0H52.7158L65.4287 30.5693H59.5215L57.0957 24.6621ZM55.1865 19.9902L50.2451 7.95117L50.1104 7.20996H50.043L49.8633 7.95117L44.9443 19.9902H55.1865Z"
                            fill="currentColor"
                          />
                          <path
                            d="M0 0.0224609H4.87402L15.4082 14.2627L26.0098 0.0224609H30.8838V30.5693H25.291V8.98438L16.1494 21.4727H14.6445L5.59277 8.93945V30.5693H0V0.0224609Z"
                            fill="currentColor"
                          />
                          <path
                            d="M92.7637 70.1758C90.8171 70.1758 89.11 69.9062 87.6426 69.3672C86.1901 68.8281 84.9772 68.1243 84.0039 67.2559C83.0456 66.3874 82.3268 65.4066 81.8477 64.3135C81.3685 63.2054 81.1289 62.0898 81.1289 60.9668H83.8018C83.8018 61.8353 84.0039 62.6888 84.4082 63.5273C84.8125 64.3509 85.3965 65.0846 86.1602 65.7285C86.9388 66.3574 87.8822 66.8665 88.9902 67.2559C90.0983 67.6452 91.3561 67.8398 92.7637 67.8398C94.2012 67.8398 95.4814 67.7051 96.6045 67.4355C97.7425 67.151 98.7008 66.7318 99.4795 66.1777C100.273 65.6237 100.872 64.9349 101.276 64.1113C101.696 63.2878 101.905 62.3294 101.905 61.2363C101.905 60.1732 101.673 59.2822 101.209 58.5635C100.745 57.8298 100.116 57.2233 99.3223 56.7441C98.5286 56.265 97.6003 55.8831 96.5371 55.5986C95.474 55.3141 94.3434 55.097 93.1455 54.9473C91.8727 54.7676 90.57 54.5205 89.2373 54.2061C87.9196 53.8916 86.7142 53.4274 85.6211 52.8135C84.543 52.1995 83.6595 51.3984 82.9707 50.4102C82.2819 49.4219 81.9375 48.179 81.9375 46.6816C81.9375 45.6185 82.1247 44.5928 82.499 43.6045C82.8734 42.6012 83.4798 41.7103 84.3184 40.9316C85.1719 40.153 86.2799 39.5316 87.6426 39.0674C89.0202 38.6032 90.7048 38.3711 92.6963 38.3711C94.4033 38.3711 95.9157 38.5807 97.2334 39C98.5511 39.4193 99.6517 40.0033 100.535 40.752C101.434 41.4857 102.115 42.3617 102.579 43.3799C103.043 44.3831 103.275 45.4837 103.275 46.6816H100.625C100.625 45.7832 100.438 44.9746 100.063 44.2559C99.7041 43.5221 99.18 42.9007 98.4912 42.3916C97.8174 41.8675 96.9863 41.4707 95.998 41.2012C95.0247 40.9167 93.9167 40.7744 92.6738 40.7744C91.1165 40.7744 89.8138 40.9391 88.7656 41.2686C87.7324 41.598 86.9014 42.0397 86.2725 42.5938C85.6585 43.1478 85.2243 43.7842 84.9697 44.5029C84.7152 45.2067 84.5879 45.9329 84.5879 46.6816C84.5879 47.61 84.7975 48.4111 85.2168 49.085C85.651 49.7588 86.265 50.3353 87.0586 50.8145C87.8672 51.2786 88.848 51.6605 90.001 51.96C91.154 52.2445 92.4492 52.4691 93.8867 52.6338C94.6654 52.7386 95.4665 52.8734 96.29 53.0381C97.1136 53.2028 97.9222 53.4274 98.7158 53.7119C99.5094 53.9964 100.258 54.3483 100.962 54.7676C101.681 55.1868 102.31 55.696 102.849 56.2949C103.388 56.8939 103.814 57.6051 104.129 58.4287C104.443 59.2373 104.601 60.1732 104.601 61.2363C104.601 62.6289 104.331 63.8792 103.792 64.9873C103.268 66.0804 102.497 67.0163 101.479 67.7949C100.475 68.5586 99.2399 69.1501 97.7725 69.5693C96.305 69.9736 94.6354 70.1758 92.7637 70.1758Z"
                            fill="currentColor"
                          />
                          <path
                            d="M54.3555 39.0225H67.1807C68.3486 39.0225 69.4342 39.2246 70.4375 39.6289C71.4408 40.0182 72.3092 40.5648 73.043 41.2686C73.7767 41.9574 74.3532 42.7809 74.7725 43.7393C75.1917 44.6976 75.4014 45.7458 75.4014 46.8838C75.4014 47.6025 75.2965 48.2988 75.0869 48.9727C74.8773 49.6465 74.5853 50.2754 74.2109 50.8594C73.8366 51.4284 73.3949 51.9375 72.8857 52.3867C72.3766 52.821 71.8151 53.1729 71.2012 53.4424C72.0547 53.667 72.8483 54.0264 73.582 54.5205C74.3158 54.9997 74.9521 55.5762 75.4912 56.25C76.0303 56.9238 76.4495 57.68 76.749 58.5186C77.0635 59.3421 77.2207 60.2181 77.2207 61.1465C77.2207 62.4193 76.9811 63.5798 76.502 64.6279C76.0228 65.6611 75.3789 66.5446 74.5703 67.2783C73.7767 68.012 72.8483 68.5811 71.7852 68.9854C70.737 69.3747 69.6289 69.5693 68.4609 69.5693H54.3555V39.0225ZM67.0684 52.6787C67.847 52.6787 68.5807 52.5365 69.2695 52.252C69.9583 51.9525 70.5573 51.5482 71.0664 51.0391C71.5755 50.5299 71.9723 49.931 72.2568 49.2422C72.5563 48.5534 72.7061 47.8122 72.7061 47.0186C72.7061 46.2399 72.5563 45.5062 72.2568 44.8174C71.9723 44.1286 71.5755 43.5296 71.0664 43.0205C70.5573 42.5114 69.9583 42.1146 69.2695 41.8301C68.5957 41.5306 67.8695 41.3809 67.0908 41.3809H57.0283V52.6787H67.0684ZM68.2812 67.1436C69.1497 67.1436 69.9583 66.9863 70.707 66.6719C71.4557 66.3574 72.1071 65.9232 72.6611 65.3691C73.2301 64.8151 73.6719 64.1637 73.9863 63.415C74.3158 62.6514 74.4805 61.8353 74.4805 60.9668C74.4805 60.1283 74.3158 59.3421 73.9863 58.6084C73.6719 57.8597 73.2376 57.2083 72.6836 56.6543C72.1445 56.1003 71.5007 55.666 70.752 55.3516C70.0033 55.0221 69.2021 54.8574 68.3486 54.8574H57.0283V67.1436H68.2812Z"
                            fill="currentColor"
                          />
                          <path
                            d="M43.2598 61.8428H26.7061L23.4043 69.5693H20.5967L33.6689 39.0225H36.2969L49.3916 69.5693H46.5615L43.2598 61.8428ZM42.2715 59.5293L35.084 42.7061L34.9941 42.3691H34.9717L34.8818 42.7061L27.6943 59.5293H42.2715Z"
                            fill="currentColor"
                          />
                          <path
                            d="M0.943359 39.0225H3.59375V67.1211H19.2939V69.5693H0.943359V39.0225Z"
                            fill="currentColor"
                          />
                        </svg>

                        <span className="sr-only">Maven Labs</span>
                      </div>
                    </Link>
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
