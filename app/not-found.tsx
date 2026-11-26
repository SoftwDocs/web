import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen w-full flex-col justify-center px-5 py-24 sm:px-8 lg:px-10"
    >
      <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF1724]">
        404 — Route unavailable
      </p>
      <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold text-[#F5F5F5]">
        This page is not published
      </h1>
      <p className="mt-5 text-sm leading-relaxed text-[#A1A1A1]">
        The URL may be a draft, an unpublished location variant or a mistyped path. Draft pages are intentionally excluded from routes, navigation and the sitemap.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-[#FF7A82]/45 bg-[#FF1724] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#E0141F]"
        >
          Return home
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <Link
          href="/services/"
          className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-[#C5C5C5] transition-colors hover:border-white/40 hover:text-white"
        >
          Browse services
        </Link>
      </div>
    </main>
  );
}
