import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { ContentBlock, SeoPage } from "@/lib/content/types";
import { getPublishedPage } from "@/lib/content/registry";
import { breadcrumbsFor } from "@/lib/seo/schema";

const CATEGORY_LABELS: Record<string, string> = {
  company: "Company",
  service: "Engineering service",
  industry: "Industry perspective",
  country: "Global market",
  "country-service": "Market + capability",
  "city-service": "Local market",
  insight: "Technical insight",
  "article-index": "Knowledge base",
  taxonomy: "Overview",
};

export function Breadcrumbs({ path }: { path: string }) {
  const crumbs = breadcrumbsFor(path);
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#8A8A8A]">
        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === crumbs.length - 1 ? (
              <span aria-current="page" className="text-[#C5C5C5]">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.path}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ page }: { page: SeoPage }) {
  return (
    <header className="border-b border-white/[0.08] pb-12">
      <Breadcrumbs path={page.path} />
      <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF1724]">
        {CATEGORY_LABELS[page.category] ?? "Engineering"}
      </p>
      <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#F5F5F5] sm:text-4xl lg:text-[52px]">
        {page.h1}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-[#A1A1A1] sm:text-lg">
        {page.intro}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[#7A7A7A]">
        <span className="border border-white/10 bg-white/[0.03] px-3 py-1.5 uppercase tracking-[0.14em]">
          {page.intent}
        </span>
        <span>Updated {page.updatedAt}</span>
        {page.article && <span>Published {page.publishedAt ?? page.updatedAt}</span>}
      </div>
    </header>
  );
}

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <aside className="mb-12 border border-white/10 bg-[#0C0C0C] p-6" aria-label="On this page">
      <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm text-[#A1A1A1]">
        {blocks.map((block, index) => (
          <li key={block.heading} className="flex gap-3">
            <span className="text-[#FF1724]">{String(index + 1).padStart(2, "0")}</span>
            <a
              href={`#${slugifyHeading(block.heading)}`}
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
            >
              {block.heading}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block) => (
        <section key={block.heading} className="scroll-mt-28">
          <h2
            id={slugifyHeading(block.heading)}
            className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5] sm:text-2xl"
          >
            {block.heading}
          </h2>
          {block.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-sm leading-[1.85] text-[#A1A1A1] sm:text-[15px]"
            >
              {paragraph}
            </p>
          ))}
          {block.bullets && block.bullets.length > 0 && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {block.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="border-l-2 border-[#FF1724]/70 bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-[#C5C5C5]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {block.code && (
            <pre className="mt-6 overflow-x-auto border border-white/10 bg-[#080808] p-5 text-xs leading-relaxed text-[#C5C5C5]">
              <code>{block.code}</code>
            </pre>
          )}
        </section>
      ))}
    </div>
  );
}

export function FaqSection({ faqs }: { faqs: SeoPage["faqs"] }) {
  return (
    <section className="border-t border-white/[0.08] pt-14">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5] sm:text-2xl">
        Frequently asked questions
      </h2>
      <div className="mt-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[#F5F5F5] marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]">
              {faq.question}
              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#FF1724] transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 pr-8 text-sm leading-relaxed text-[#A1A1A1]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({ paths }: { paths: string[] }) {
  const links = paths
    .map((path) => getPublishedPage(path))
    .filter((page): page is SeoPage => Boolean(page));

  if (links.length === 0) return null;

  return (
    <section className="border-t border-white/[0.08] pt-14">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5] sm:text-2xl">
        Continue exploring
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {links.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className="group flex items-center justify-between gap-4 border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-[#FF1724]/60 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
          >
            <span className="text-sm text-[#C5C5C5] transition-colors group-hover:text-white">
              {page.h1}
            </span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[#FF1724] transition-transform group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PageCta({ page, message }: { page: SeoPage; message?: string }) {
  return (
    <section className="relative overflow-hidden border border-[#FF1724]/25 bg-gradient-to-br from-[#160A0B] via-[#0C0C0C] to-[#080808] px-6 py-10 sm:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#FF1724]/10 blur-3xl"
      />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF1724]">
            Engineering conversation
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5]">
            {message ?? "Turn this question into a working system"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#A1A1A1]">
            Share a bounded brief. We will identify the highest-risk decisions and propose a first slice you can review.
          </p>
        </div>
        <Link
          href="/contact/"
          className="cta-button cta-button--primary crimson-gloss-surface specular-sweep inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-[#FF7A82]/45 px-6 py-3.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
        >
          Start a conversation
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
      <span className="sr-only">Related page: {page.h1}</span>
    </section>
  );
}

export function PageArticle({ page }: { page: SeoPage }) {
  return (
    <article className="w-full px-5 pb-16 pt-24 sm:px-8 lg:px-10">
      <PageHeader page={page} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents blocks={page.blocks} />
          </div>
        </div>
        <div className="min-w-0 space-y-12">
          <div className="lg:hidden">
            <TableOfContents blocks={page.blocks} />
          </div>
          <ContentBlocks blocks={page.blocks} />
          <FaqSection faqs={page.faqs} />
          <RelatedLinks paths={page.related} />
          <PageCta page={page} />
        </div>
      </div>
    </article>
  );
}
