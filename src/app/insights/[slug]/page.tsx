import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getInsight, insights, type Insight } from "@/content/insights";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCard, formatDate } from "@/components/sections/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.description,
      publishedTime: `${insight.date}T00:00:00Z`,
      tags: [insight.category],
    },
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const related = insights
    .filter((i) => i.slug !== insight.slug)
    .filter((i) => i.category === insight.category)
    .concat(insights.filter((i) => i.slug !== insight.slug && i.category !== insight.category))
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line">
          <Container className="max-w-3xl py-16 sm:py-20 lg:py-24">
            <Reveal>
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All insights
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Pill tone={insight.featured ? "accent" : "neutral"}>
                  {insight.category}
                </Pill>
                <span className="text-sm text-faint">
                  {formatDate(insight.date)} · {insight.readTime} read
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                {insight.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
                {insight.description}
              </p>
            </Reveal>
          </Container>
        </header>

        <div className="py-14 sm:py-16">
          <Container className="max-w-3xl">
            <Reveal>
              <Body blocks={insight.body} />
            </Reveal>
            <Divider className="mt-14" />
            <Reveal delay={0.05}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-faint">
                  <span className="font-medium text-ink">{site.name}</span> —
                  AI-powered business consulting.
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                >
                  Discuss a similar problem
                </Link>
              </div>
            </Reveal>
          </Container>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-line bg-surface/40 py-20 sm:py-24">
          <Container>
            <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
              Continue reading
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} insight={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: insight.title,
          description: insight.description,
          datePublished: insight.date,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: `${site.url}/insights/${insight.slug}`,
        }}
      />
    </>
  );
}

function Body({ blocks }: { blocks: Insight["body"] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-6 text-2xl font-medium tracking-tight text-ink"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-pretty text-lg leading-[1.8] text-muted">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg leading-[1.7] text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-6 font-serif text-xl italic leading-relaxed text-ink"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
