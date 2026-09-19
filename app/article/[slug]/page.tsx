import { notFound } from "next/navigation";
import type { Metadata } from "next";
// import { getArticleBySlug, getAllArticleSlugs } from "@/lib/hygraph";
import ArticleContent from "@/components/article-content";

// // ─── Static params ─────────────────────────────────────────────────────────────
// // Pre-renders every published article at build time.
// // New articles published after deploy are picked up at next revalidation (60 s).

// export async function generateStaticParams() {
//   const slugs = await getAllArticleSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

// // ─── Metadata ─────────────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: `${article.title} — The Bancey Foundation`,
    description: article.subtitle,
    //     openGraph: {
    //       title:       article.title,
    //       description: article.subtitle,
    //       type:        "article",
    //       publishedTime: article.publishedAt,
    //       authors:     [article.author.name],
    //       images: [
    //         {
    //           url:    article.heroImage.url,
    //           width:  article.heroImage.width,
    //           height: article.heroImage.height,
    //           alt:    article.title,
    //         },
    //       ],
    //     },
    //     twitter: {
    //       card:        "summary_large_image",
    //       title:       article.title,
    //       description: article.subtitle,
    //       images:      [article.heroImage.url],
    //     },
  };
}

// // ─── Page ──────────────────────────────────────────────────────────────────────

async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  // return <>{article.title}</>;

  return <ArticleContent article={article} />;
}

async function getArticleBySlug(slug: string) {
  const query = `
query Article($slug: String!) {
  article(where: { slug: $slug }) {
    slug
    title
    subtitle
    publishedOn
    category
    location
    author {
      name
      id
      role
      photo {
        url
      }
    }
    category
    photoGallery {
      url
    }
      heroImage {
      url
      }
    body {
      raw
    }
  }
}
  `;
  const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: { slug },
    }),
  });
  const json = await res.json();

  return json.data.article;
}

export default ArticlePage;
