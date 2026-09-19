// app/blog/[slug]/ArticleContent.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import type { Article } from "@/lib/hygraph";
import { Badge } from "./ui/badge";
import { a } from "framer-motion/client";
import { Icons } from "./ui/icons";
import { Button, buttonVariants } from "./ui/button";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function shareUrl(platform: "x" | "facebook" | "whatsapp" | "copy") {
  if (typeof window === "undefined") return "#";
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  const map = {
    x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
    copy: "#",
  };
  return map[platform];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function BackButton() {
  return (
    <Link
      href="/blog"
      aria-label="Back to stories"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-800"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 2L4 7l5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function ShareSidebar() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* silent */
    }
  };

  return (
    <aside className="sticky top-24 hidden lg:flex flex-col items-center gap-4 pt-1">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400 [writing-mode:vertical-rl] rotate-180 select-none">
        Share
      </span>
      <div className="h-10 w-px bg-neutral-200" />
      <div className="flex flex-col gap-2.5 items-center">
        {[
          {
            href: shareUrl("x"),
            icon: "x",
            label: "Share on X",
          },
          {
            href: shareUrl("facebook"),
            icon: "facebook",
            label: "Share on Facebook",
          },
          {
            href: shareUrl("whatsapp"),
            icon: "whatsapp",
            label: "Share on WhatsApp",
          },
        ].map(({ href, icon, label }) => {
          const Icon = Icons[icon as keyof typeof Icons];
          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "icon" })}
            >
              <Icon className="size-5" />
            </Link>
          );
        })}
        <Button
          onClick={handleCopy}
          aria-label="Copy link"
          variant="outline"
          size="icon"
        >
          <Icons.copy className="w-5 h-5" />
        </Button>
      </div>
    </aside>
  );
}

function MetaSidebar({ article }: { article: Article }) {
  return (
    <aside className="sticky top-24 hidden lg:block space-y-4">
      {/* Details card */}
      <div className="">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Details
        </p>
        {[
          ["Date", formatDate(article.publishedOn)],
          ["Category", article.category],
          // ["Reading", `${article.readingTime} min`],
          ...(article.location ? [["Location", article.location]] : []),
        ].map(([key, val]) => (
          <div
            key={key}
            className="flex items-center justify-between border-b border-neutral-100 py-2.5 last:border-0"
          >
            <span className="text-[12px] font-medium text-neutral-400">
              {key}
            </span>
            <span className="text-right text-[12px] font-medium text-neutral-800">
              {val}
            </span>
          </div>
        ))}
      </div>

      {/* Author card */}
      <div className="">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Author
        </p>
        <div className="mb-3 flex items-center gap-3">
          {article.author.photo ? (
            <Image
              src={article.author.photo.url}
              alt={article.author.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-[13px] font-semibold text-green-700">
              {article.author.name[0].toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-[14px] font-semibold text-neutral-900">
              {article.author.name}
            </p>
            <p className="text-[12px] text-neutral-500">
              {article.author.role}
            </p>
          </div>
        </div>
        <p className="text-[12px] leading-relaxed text-neutral-500">
          {article.author.bio}
        </p>
      </div>
    </aside>
  );
}

function PullQuote({ text, source }: { text: string; source: string }) {
  return (
    <blockquote className="my-12 border-0 not-prose">
      {/* Large opening mark — image 2 style */}
      <span
        aria-hidden="true"
        className="block font-serif text-[80px] leading-[0.75] text-neutral-200 select-none mb-3"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        &ldquo;
      </span>
      <p
        className="font-serif text-[24px] font-normal italic leading-[1.45] text-neutral-900"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {text}
        {/* Inline closing mark */}
        <span
          aria-hidden="true"
          className="inline text-[40px] leading-none align-[-0.2em] text-neutral-200 ml-1 not-italic"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          &rdquo;
        </span>
      </p>
      {source && (
        <footer className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-neutral-400 not-italic">
          {source}
        </footer>
      )}
    </blockquote>
  );
}

function PhotoStrip({ photos }: { photos: Article["photoGallery"] }) {
  if (!photos || !photos.length) return null;

  return (
    <div className="my-12 not-prose">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        From the field
      </p>

      {/* 
        - w-[calc(100vw-1.5rem)] on mobile or dynamic calc for desktop 
        - Using a negative right margin or max-w-[calc(100vw-24px)] to reach the screen edge 
      */}
      <div className="w-[calc(100vw-2rem)] max-w-none overflow-x-auto scrollbar-hide snap-x snap-mandatory -ml-0 lg:w-[calc(100vw-(100vw-min(100%,700px))/2-48px)]">
        <div className="flex w-max gap-3 pb-4 pr-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative h-50 w-75 shrink-0 snap-start overflow-hidden rounded-[4px] border border-neutral-100 bg-neutral-100"
            >
              <Image
                src={photo.url}
                alt={`Field photo ${i + 1}`}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// function References({ references }: { references: Article["references"] }) {
//   if (!references.length) return null;
//   return (
//     <section className="mt-14 border-t border-neutral-100 pt-8 not-prose">
//       <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
//         References
//       </p>
//       <ol className="space-y-3.5">
//         {references.map((ref) => (
//           <li key={ref.number} className="flex gap-3 items-baseline">
//             <span className="min-w-5 text-[11px] font-semibold tabular-nums text-neutral-400">
//               {ref.number}.
//             </span>
//             <span className="text-[13px] leading-relaxed text-neutral-600">
//               {ref.text}
//               {ref.url && (
//                 <>
//                   {" "}
//                   <a
//                     href={ref.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-700 hover:underline"
//                   >
//                     {ref.url.replace(/^https?:\/\//, "")}
//                   </a>
//                 </>
//               )}
//             </span>
//           </li>
//         ))}
//       </ol>
//     </section>
//   );
// }

// ─── Rich text renderer config ────────────────────────────────────────────────
//
// Maps Hygraph rich text AST nodes → your exact Tailwind classes.
// Add more renderers as needed (code, table, etc.)

const richTextRenderers = {
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-6 text-[17px] font-light leading-[1.8] text-neutral-800">
      {children}
    </p>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2
      className="mb-5 mt-12 font-serif text-[26px] font-normal leading-[1.3] tracking-tight text-neutral-900"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-4 mt-8 text-[19px] font-semibold leading-snug text-neutral-900">
      {children}
    </h3>
  ),
  bold: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-neutral-900">{children}</strong>
  ),
  italic: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a
      href={href}
      className="border-b border-green-300 text-green-800 transition-colors hover:border-green-700"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-6 ml-5 space-y-2 text-[17px] font-light leading-relaxed text-neutral-800 list-disc">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-6 ml-5 space-y-2 text-[17px] font-light leading-relaxed text-neutral-800 list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="pl-1">{children}</li>
  ),
  // Embedded images from Hygraph rich text
  img: ({
    src,
    altText,
    width,
    height,
  }: {
    src?: string;
    altText?: string;
    width?: number;
    height?: number;
  }) =>
    src ? (
      <figure className="my-10 not-prose">
        <div className="relative overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={src}
            alt={altText ?? ""}
            width={width ?? 1200}
            height={height ?? 630}
            className="w-full object-cover"
          />
        </div>
        {altText && (
          <figcaption className="mt-3 text-center text-[12px] text-neutral-400">
            {altText}
          </figcaption>
        )}
      </figure>
    ) : null,
  // Block quote from Hygraph editor (different from our custom PullQuote)
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-8 border-l-2 border-green-300 pl-6 text-[16px] italic leading-relaxed text-neutral-600">
      {children}
    </blockquote>
  ),
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function ArticleContent({ article }: { article: Article }) {
  // Interleave pull quotes into body rendering.
  // Strategy: render body normally using RichText, and render pull quotes
  // as their own standalone blocks between the body sections.
  // Hygraph approach: store pull quotes as a separate field (not inline in rich text),
  // then split body into paragraphs and inject pull quotes at natural break points.
  //
  // Simplest reliable split: inject quote 1 after the first ~40% of text,
  // quote 2 after ~70%. We achieve this by splitting the raw AST children array.

  const bodyChildren =
    (article.body.raw as { children?: unknown[] }).children ?? [];
  const total = bodyChildren.length;
  const split1 = Math.floor(total * 0.4);
  const split2 = Math.floor(total * 0.7);

  const part1Raw = { children: bodyChildren.slice(0, split1) };
  const part2Raw = { children: bodyChildren.slice(split1, split2) };
  const part3Raw = { children: bodyChildren.slice(split2) };

  // const [quote1, quote2] = article.pullQuotes;

  return (
    <div className="min-h-screen">
      {/* ── Article header ────────────────────────────────────────────────── */}
      <header className="mx-auto max-w-3xl px-6 pb-10 pt-12 text-center">
        {/* <div className="mb-7 flex items-center justify-center gap-3">
          <BackButton />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
            Stories
            <span className="mx-2 text-neutral-200">|</span>
            {article.readingTime} min read
          </span>
        </div> */}

        <h1 className="mb-5 font-heading text-[48px] font-normal leading-[1.12] tracking-[-0.02em] md:text-[54px]">
          {article.title}
        </h1>

        <p className="mx-auto mb-8 max-w-130 leading-relaxed text-muted-foreground">
          {article.subtitle}
        </p>

        {/* Author + meta row */}
        {/* <div className="flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-muted-foreground">
          {article.author.photo ? (
            <Image
              src={article.author.photo.url}
              alt={article.author.name}
              width={32}
              height={32}
              className="mr-1 h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <div className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {article.author.name.charAt(0).toUpperCase()}
            </div>
          )}
          <span className="font-medium text-neutral-800">
            {article.author.name}
          </span>
          <span className="text-muted-foreground">·</span>
          <span>{article.author.role}</span>
          <span className="text-muted-foreground">·</span>
          <time dateTime={article.publishedOn}>
            {formatDate(article.publishedOn)}
          </time>
        </div> */}

        {/* Tags */}
        {/* <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <Badge variant="outline" className="border-primary text-primary">
            {article.category}
          </Badge>
          {article.location && (
            <Badge variant="outline">
              <Icons.location data-icon="inline-start" />
              {article.location}
            </Badge>
          )}
        </div> */}
      </header>

      {/* ── Hero image — full width within max container ────────────────── */}
      <div className="mx-auto mb-16">
        <div className="relative aspect-16/7 overflow-hidden bg-muted">
          <Image
            src={article.heroImage.url}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1060px) 100vw, 1060px"
            className="object-cover"
          />
        </div>
      </div>

      {/* ── Three-column body layout ─────────────────────────────────────── */}
      <div className="mx-auto grid max-w-280 grid-cols-1 gap-0 px-6 lg:grid-cols-[48px_minmax(0,1fr)_276px] lg:gap-x-12">
        {/* LEFT — share sidebar */}
        <ShareSidebar />

        {/* CENTER — article body */}
        <article className="w-full overflow-visible">
          {/* Body part 1 */}
          <RichText
            content={part1Raw as Parameters<typeof RichText>[0]["content"]}
            renderers={richTextRenderers}
          />

          {/* Pull quote 1 */}
          {/* {quote1 && <PullQuote text={quote1.text} source={quote1.source} />} */}

          {/* Body part 2 */}
          <RichText
            content={part2Raw as Parameters<typeof RichText>[0]["content"]}
            renderers={richTextRenderers}
          />

          {/* Photo strip */}
          <PhotoStrip photos={article.photoGallery} />

          {/* Body part 3 */}
          <RichText
            content={part3Raw as Parameters<typeof RichText>[0]["content"]}
            renderers={richTextRenderers}
          />

          {/* Pull quote 2 */}
          {/* {quote2 && <PullQuote text={quote2.text} source={quote2.source} />} */}

          {/* References */}
          {/* <References references={article.references} /> */}
        </article>

        {/* RIGHT — meta + author sidebar */}
        <MetaSidebar article={article} />
      </div>

      {/* ── Bottom padding ────────────────────────────────────────────────── */}
      <div className="h-24" />
    </div>
  );
}
