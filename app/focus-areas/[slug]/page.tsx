import PageHeader from "@/components/ui/page-header";

type FocusAreaDetailProps = {
  params: Promise<{ slug: string }>;
};

async function getFocusArea(slug: string) {
  const query = `
query FocusArea($slug: String!) {
  focusArea(where: { link: $slug }) {
    title
    headerImage {
      url
    }
    content {
      __typename

      ... on TextBlock {
        id
        body {
          html
        }
      }

      ... on QuoteBlock {
        id
        quote
        author
      }

      ... on SectionBlock {
        id
        heading
        body {
          html
        }
        listItems {
          html
        }
      }
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
  return json.data.focusArea;
}

async function FocusAreaDetail({ params }: FocusAreaDetailProps) {
  const { slug } = await params;

  const data = await getFocusArea(slug);

  return (
    <>
      <PageHeader title={data.title} image={data.headerImage.url} />
      <section>
        <div className="w-full">
          <div className="flex flex-col">
            <div className="p-6"></div>
          </div>
          <div className="container max-w-3xl px-4">
            <ContentRenderer content={data.content} />
          </div>
        </div>
      </section>
    </>
  );
}

type ContentBlock = any;

function ContentRenderer({ content }: { content: ContentBlock[] }) {
  return (
    <div className="">
      {content.map((block) => {
        switch (block.__typename) {
          case "TextBlock":
            return <TextBlock key={block.id} {...block} />;

          case "QuoteBlock":
            return <QuoteBlock key={block.id} {...block} />;

          case "SectionBlock":
            return <SectionBlock key={block.id} {...block} />;

          case "ImageBlock":
            return <ImageBlock key={block.id} {...block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

function TextBlock({ body }: { body: { html: string } }) {
  return (
    <div
      className="text-base lg:text-lg prose prose-neutral max-w-none mb-8"
      dangerouslySetInnerHTML={{ __html: body.html }}
    />
  );
}

function QuoteBlock({ quote, author }: any) {
  return (
    <div className="my-12 text-center border-y border-accent">
      <div className="text-lg italic font-medium my-14">
        <span>{quote}</span>
        {author && (
          <footer className="mt-4 text-sm text-muted-foreground">
            {author}
          </footer>
        )}
      </div>
    </div>
  );
}

function SectionBlock({ heading, body, listItems }: any) {
  return (
    <section className="my-12">
      <h2 className="mt-12 text-2xl lg:text-3xl font-heading font-medium tracking-wide mb-4">
        {heading}
      </h2>

      <div
        className="prose prose-neutral max-w-none mb-4 text-base lg:text-lg"
        dangerouslySetInnerHTML={{ __html: body.html }}
      />

      {listItems?.length > 0 && (
        <ul className="list-disc flex flex-col text-base lg:text-lg pl-5 space-y-2">
          {listItems.map((item: any, i: number) => (
            <li
              key={i}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function ImageBlock({ image, caption }: any) {
  return (
    <figure className="my-12">
      <img
        src={image.url}
        alt={caption || ""}
        className="w-full h-auto object-cover"
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default FocusAreaDetail;
