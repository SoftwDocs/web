import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SeoPage } from "@/lib/content/types";
import { pagesUnderPrefix } from "@/lib/content/registry";
import { ContentBlocks, FaqSection, PageCta, PageHeader } from "./PageTemplate";

export function LinkGrid({ pages }: { pages: SeoPage[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pages.map((page) => (
        <Link
          key={page.path}
          href={page.path}
          className="group flex min-h-[150px] flex-col justify-between border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#FF1724]/60 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold leading-snug text-[#F5F5F5]">
              {page.h1}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[#FF1724] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
          <p className="mt-5 line-clamp-3 text-xs leading-relaxed text-[#8A8A8A]">
            {page.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

export function IndexArticle({
  page,
  prefix,
  excludeSelf = true,
}: {
  page: SeoPage;
  prefix: string;
  excludeSelf?: boolean;
}) {
  const pages = pagesUnderPrefix(prefix).filter(
    (candidate) => !excludeSelf || candidate.path !== page.path
  );

  return (
    <article className="w-full px-5 pb-16 pt-24 sm:px-8 lg:px-10">
      <PageHeader page={page} />
      <div className="mt-10 space-y-12">
        <ContentBlocks blocks={page.blocks} />
        <section>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5] sm:text-2xl">
            Published pages
          </h2>
          <p className="mt-2 text-sm text-[#8A8A8A]">{pages.length} indexed routes</p>
          <div className="mt-6">
            <LinkGrid pages={pages} />
          </div>
        </section>
        <FaqSection faqs={page.faqs} />
        <PageCta page={page} />
      </div>
    </article>
  );
}
