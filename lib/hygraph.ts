// Single place for all Hygraph communication.
// Uses native fetch — no Apollo, no extra client library needed.
// All queries run server-side in Next.js App Router (async RSC).

// ─── Client ───────────────────────────────────────────────────────────────────

const HYGRAPH_URL = process.env.NEXT_HYGRAPH_ENDPOINT ?? "";

if (!HYGRAPH_URL) {
  throw new Error("Missing env: NEXT_HYGRAPH_ENDPOINT");
}

interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

async function hygraph<T>(
  query: string,
  variables: Record<string, unknown> = {},
  // ISR: revalidate every 60 s by default; pass 0 for no-store
  revalidate: number | false = 60,
): Promise<T> {
  const res = await fetch(HYGRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: revalidate === false
      ? { revalidate: 0 }
      : { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Hygraph fetch failed: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(
      `Hygraph GraphQL error: ${json.errors.map((e) => e.message).join(", ")}`,
    );
  }

  return json.data;
}

// ─── Types ────────────────────────────────────────────────────────────────────
//
// Mirror your Hygraph content model here.
// Field names must match exactly what you've created in Hygraph.
//
// Required fields on your "Article" model:
//   slug          — Single line text, unique index
//   title         — Single line text
//   subtitle      — Single line text
//   category      — Single line text  (e.g. "Clean Water")
//   location      — Single line text  (e.g. "Domeabra, Ghana") — optional
//   readingTime   — Integer
//   publishedAt   — DateTime (Hygraph system field, always available)
//   heroImage     — Asset
//   body          — Rich Text
//   pullQuotes    — Component (repeater), max 2:
//                     text   — Single line text
//                     source — Single line text
//   photoGallery  — Asset (allow multiple)
//   references    — Component (repeater):
//                     number — Integer
//                     text   — Single line text (rich citation text)
//                     url    — Single line text (optional link)
//   author        — Relation → Author model:
//                     name   — Single line text
//                     role   — Single line text
//                     bio    — Single line text
//                     photo  — Asset
//                     initials — Single line text

export interface HygraphAsset {
  url: string;
  width: number;
  height: number;
  alt?: string;   // add a custom "alt" field to your Asset model, or handle below
}

export interface HygraphRichText {
  raw: Record<string, unknown>; // AST for @hygraph/rich-text-react-renderer
  text: string;                  // plain text fallback / reading-time calc
}

export interface PullQuote {
  text: string;
  source: string;
}

export interface Reference {
  number: number;
  text: string;
  url?: string;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  photo?: HygraphAsset;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  location?: string;
  // readingTime: number;
  publishedOn: string;         // ISO string
  heroImage: HygraphAsset;
  body: HygraphRichText;
  // pullQuotes: PullQuote[];    // max 2
  photoGallery: HygraphAsset[];
  // references: Reference[];
  author: Author;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const ARTICLE_FRAGMENT = /* GraphQL */ `
  fragment ArticleFields on Article {
    slug
    title
    subtitle
    category
    location
    readingTime
    publishedAt
    heroImage {
      url
      width
      height
    }
    body {
      raw
      text
    }
    pullQuotes {
      text
      source
    }
    photoGallery {
      url
      width
      height
    }
    references {
      number
      text
      url
    }
    author {
      name
      role
      bio
      initials
      photo {
        url
        width
        height
      }
    }
  }
`;

// Single article by slug
const GET_ARTICLE = /* GraphQL */ `
  ${ARTICLE_FRAGMENT}
  query GetArticle($slug: String!) {
    article(where: { slug: $slug }) {
      ...ArticleFields
    }
  }
`;

// All slugs — used for generateStaticParams
const GET_ALL_SLUGS = /* GraphQL */ `
  query GetAllSlugs {
    articles(first: 500) {
      slug
    }
  }
`;

// ─── Data access functions ────────────────────────────────────────────────────

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const data = await hygraph<{ article: Article | null }>(
    GET_ARTICLE,
    { slug },
    60,
  );
  return data.article;
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const data = await hygraph<{ articles: { slug: string }[] }>(
    GET_ALL_SLUGS,
    {},
    3600, // slugs change rarely — cache for 1 hour
  );
  return data.articles.map((a) => a.slug);
}