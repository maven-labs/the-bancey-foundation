import Hero from "@/components/hero";
import ArticleCard from "@/components/ui/article-card";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";

const articles = [
  {
    date: "10 Feb 2026",
    title:
      "What the 2026 cars will demand from drivers - and what fans can expect to see",
    image:
      "https://cdn.sanity.io/images/fnx611yr/productionv2/de82e236609e3be2d820c4e75cd8fb8e4d31b168-5021x3347.jpg?rect=252,0,4463,3347&w=800&h=600&auto=format",
    description:
      "Matt Harman and Angelos Tsiaparas offer an insight into what racing might look like in 2026",
  },
  {
    date: "9 Feb 2026",
    title:
      "Atlassian Williams F1 Team toasts new partnership with Estrella Galicia 0,0",
    image:
      "https://cdn.sanity.io/images/fnx611yr/productionv2/1e3bd08db43d9649324187feb3155696dcf5ba8a-5036x2832.jpg?rect=632,0,3776,2832&w=800&h=600&auto=format",
    description:
      '"It is great to have them join Williams and cheer us on in this exciting moment for both the team and the sport.\”',
  },
  {
    date: "9 Feb 2026",
    title: "Get to grips with Formula 1 Testing Terminology",
    image:
      "https://cdn.sanity.io/images/fnx611yr/productionv2/598bcd979037e2847b8434c7a63de2bf6ef63800-3406x2725.jpg?rect=0,170,3406,2555&w=800&h=600&auto=format",
    description:
      "You’ll hear plenty of buzzwords over the next couple of weeks, but what do they mean?",
  },
  {
    date: "10 Feb 2026",
    title: "How Atlassian Williams F1 Team reshaped its identity for 2026",
    image:
      "https://cdn.sanity.io/images/fnx611yr/productionv2/c609fdfd1590c7a32d6168a0cad3de971d215fa8-5120x4096.jpg?rect=0,256,5120,3840&w=800&h=600&auto=format",
    description:
      "We sat down with our Head of Creative Design who gives insight into how the team delivered a new look heading into a new era",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="uppercase max-w-xs text-5xl font-bold font-heading leading-10 tracking-tight text-black dark:text-zinc-50">
              Create Impact Where Everyday Kids Stay In School
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
      <div className="p-4 md:p-6 xl:p-8">
        <SectionHeader title="Latest News" />
        <div className="flex gap-4">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.title} />
          ))}
        </div>
      </div>
    </main>
  );
}
