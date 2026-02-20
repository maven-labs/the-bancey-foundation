import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Navbar() {
  const links = [
    ["About", "/about"],
    ["Our Work", "/work"],
    ["Projects", "/projects"],
    ["Events", "/events"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container">
        <nav
          aria-label="Main navigation"
          className="h-16 flex items-center justify-between text-foreground"
        >
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/logoipsum-404.svg"
                alt="The Bancey Foundation logo"
                className="h-8 w-auto"
                width="256"
                height="128"
              />
              <span className="sr-only">The Bancey Foundation</span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="font-body text-sm font-semibold uppercase tracking-wide text-white hover:underline underline-offset-2 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <Link
              href="/donate"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-white text-primary px-10",
              )}
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
