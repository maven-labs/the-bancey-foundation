"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavChild {
  label: string;
  description: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
  featured?: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    href: string;
  };
}

const NAV_ITEMS: NavItem[] = [
  { label: "Who We Are", href: "/about" },
  {
    label: "What We Do",
    featured: {
      eyebrow: "What we stand for",
      heading: "Building a more equitable world",
      body: "The Bancey Foundation (TBF) in Ghana, Africa is a youth-led organization using storytelling, education and community impact to advance gender equity, youth empowerment, and climate resilience across communities in Africa.",
      cta: "See all focus areas",
      href: "/focus-areas",
    },
    children: [
      {
        label: "Gender Equity & Inclusion",
        description:
          "TBF is dedicated to dismantling barriers and fostering an environment where every individual, regardless of gender, has the opportunity to contribute and succeed.",
        href: "gender-equality",
      },
      {
        label: "Youth Empowerment & Skill Development.",
        description:
          "The Bancey Foundation is committed to creating equitable opportunities for young people to thrive.",
        href: "youth-empowerment",
      },
      {
        label: "Climate Action & Education",
        description:
          "At The Bancey Foundation (TBF), we believe that sustainable change begins with informed action.",
        href: "climate-action",
      },
    ],
  },
  { label: "Impact Stories", href: "/impact-stories" },
  // { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1l16 16M17 1L1 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 1h22M0 8h22M0 15h22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Desktop nav link (plain) ─────────────────────────────────────────────────

function DesktopLink({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href ?? "#"}
      className="group flex flex-col gap-0.5 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors duration-150 text-foreground hover:text-primary"
    >
      {item.label}
      <span
        className={cn(
          "h-px w-0 group-hover:w-full transition-all duration-300 bg-white",
        )}
      />
    </Link>
  );
}

// ─── Desktop mega dropdown ────────────────────────────────────────────────────

function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    onOpen();
  }, [onOpen]);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(onClose, 100);
  }, [onClose]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger button */}
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors duration-150 text-foreground hover:text-primary"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0",
          )}
        />
      </button>

      {/*
        Full-viewport-width panel anchored to the bottom of the fixed header.
        "fixed left-0 right-0 top-16" makes it span the full width regardless
        of where the trigger button sits in the layout.
        Content is constrained by the `container` class inside.
      */}
      <div
        aria-hidden={!isOpen}
        className={cn(
          "fixed left-0 right-0 top-16 z-30",
          // White panel, 2px primary top border — obama.org style
          "bg-white border-t-2 border-primary shadow-2xl",
          // Fade + slide in
          "transition-all duration-200 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container py-12">
          {/*
            Two-column grid:
            Left  → featured editorial block (obama.org style)
            Right → 3-column link grid
          */}
          <div className="grid grid-cols-[280px_1fr] gap-16">
            {/* Left: featured block */}
            {item.featured && (
              <div className="flex flex-col justify-between border-r border-border pr-12">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {item.featured.eyebrow}
                  </p>
                  <h2 className="mb-4 text-[22px] font-bold leading-tight tracking-tight text-foreground">
                    {item.featured.heading}
                  </h2>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {item.featured.body}
                  </p>
                </div>
                {/* <Link
                  href={item.featured.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={onClose}
                  className="group mt-8 inline-flex items-center gap-2 text-[13px] font-bold text-primary"
                >
                  {item.featured.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link> */}
              </div>
            )}

            <div className="grid grid-cols-3 gap-x-8 gap-y-1 content-start">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={`/focus-areas/${child.href}`}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={onClose}
                  className="group -mx-4 flex flex-col gap-1 rounded-none px-4 py-4 transition-colors duration-150 hover:bg-muted"
                >
                  <span className="flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-150">
                    {child.label}
                    <span className="-translate-x-1 text-sm text-primary opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                  <span className="text-sm leading-snug text-muted-foreground">
                    {child.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile panel ─────────────────────────────────────────────────────────────

function MobilePanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Slide-in panel */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          // Slides in from the right
          "fixed right-0 top-0 bottom-0 z-40 flex w-full flex-col bg-white shadow-2xl",
          "transition-transform duration-280 ease-[cubic-bezier(0.32,0,0.15,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Panel header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-100 px-6">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 font-bold text-foreground"
          >
            <Image
              src="/logoipsum-404.svg"
              alt="The Bancey Foundation"
              className="h-8 w-auto"
              width={256}
              height={128}
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-neutral-100"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable link list */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto">
          <ul>
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = expanded === item.label;

              return (
                <li key={item.label} className="border-b border-neutral-100">
                  {hasChildren ? (
                    <>
                      {/* Accordion trigger */}
                      <button
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.label)
                        }
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                      >
                        <span className="text-lg font-medium tracking-tight text-foreground">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-muted-foreground transition-transform duration-200",
                            isExpanded ? "rotate-180" : "rotate-0",
                          )}
                        />
                      </button>

                      {/*
                        Accordion body.
                        max-height trick: we animate from 0 → a large enough value.
                        opacity also transitions for a smoother feel.
                      */}
                      <div
                        className={cn(
                          "overflow-hidden bg-neutral-50 transition-all duration-300 ease-out",
                          isExpanded
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <ul className="pb-2 pt-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="group flex flex-col gap-1 px-8 py-4 transition-colors hover:bg-white"
                              >
                                <span className="text-[15px] font-bold text-foreground transition-colors group-hover:text-primary">
                                  {child.label}
                                </span>
                                <span className="text-[12px] leading-snug text-muted-foreground">
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          ))}

                          {/* {item.featured && (
                            <li className="border-t border-neutral-100 px-8 py-4">
                              <Link
                                href={item.featured.href}
                                onClick={onClose}
                                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary"
                              >
                                {item.featured.cta} →
                              </Link>
                            </li>
                          )} */}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      onClick={onClose}
                      className="flex items-center px-6 py-5 text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-neutral-100 p-6">
          <Link
            href="/donate"
            onClick={onClose}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full justify-center",
            )}
          >
            Donate
          </Link>
        </div>
      </div>
    </>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpen = useCallback((label: string) => {
    setOpenDropdown(label);
  }, []);

  const handleClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return (
    <>
      <header
        className={cn(
          "relative h-16 transition-colors duration-200",
          openDropdown ? "bg-white shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container h-full">
          <nav
            aria-label="Main navigation"
            className="flex h-full items-center justify-between"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/tbf-logo.svg"
                alt="The Bancey Foundation"
                className="h-8 w-auto"
                width={256}
                height={128}
              />
              <span className="sr-only">The Bancey Foundation</span>
            </Link>

            {/* Desktop: links + CTA */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onOpen={() => handleOpen(item.label)}
                    onClose={handleClose}
                  />
                ) : (
                  <DesktopLink key={item.label} item={item} />
                ),
              )}

              <Link
                href="/donate"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "ml-4 px-8",
                )}
              >
                Donate
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden text-foreground hover:bg-neutral-100"
            >
              <HamburgerIcon />
            </button>
          </nav>
        </div>
      </header>
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
