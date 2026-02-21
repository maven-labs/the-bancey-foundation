"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  ["About", "/about"],
  ["Our Work", "/work"],
  ["Projects", "/projects"],
  ["Events", "/events"],
  ["Contact", "/contact"],
];

function Navbar() {
  const [isScrolled, setisScrolled] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setisScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "-64px 0px 0px 0px", // Trigger after scrolling 64px
        threshold: 0,
      },
    );

    const el = triggerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 flex-none h-16 z-20 transition-colors duration-200",
          isScrolled ? "bg-white shadow-sm" : "bg-transparent",
        )}
      >
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
              {links.map(([name, path]) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={cn(
                      "group flex flex-col gap-0.5 font-body font-medium tracking-wide text-sm uppercase",
                      isScrolled ? "text-primary" : "text-white",
                    )}
                  >
                    {name}
                    <div
                      className={`${isScrolled ? "bg-primary" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center">
              <Link
                href="/donate"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "px-10",
                )}
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="h-16" ref={triggerRef}></div>
    </>
  );
}

export default Navbar;
