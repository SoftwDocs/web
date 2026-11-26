import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import type { SeoPage, TeamProfile } from "@/lib/content/types";
import {
  ContentBlocks,
  FaqSection,
  PageArticle,
  PageCta,
  PageHeader,
  RelatedLinks,
  TableOfContents,
} from "./PageTemplate";

function ExternalLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-[#C5C5C5] transition-colors hover:border-[#FF1724]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
    </a>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamProfile;
  index: number;
}) {
  return (
    <article className="overflow-hidden border border-white/10 bg-[#0C0C0C]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <span className="absolute left-4 top-4 border border-[#FF1724]/50 bg-[#080808]/85 px-3 py-1.5 font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold tracking-[0.18em] text-[#F5F5F5]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-[#080808]/85 px-3 py-1.5 text-[11px] text-[#C5C5C5]">
          <MapPin aria-hidden="true" className="h-3 w-3 text-[#FF1724]" />
          {member.location}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <p className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF1724]">
          Source-documented profile
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#F5F5F5]">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-[#E4E4E4]">{member.role}</p>

        <div className="mt-5 border-l-2 border-[#FF1724]/60 bg-white/[0.02] px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A]">
            Published background
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#C5C5C5]">
            {member.summary}
          </p>
        </div>

        <section className="mt-7" aria-label={`${member.name} engineering focus`}>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
            Engineering focus
          </h4>
          <div className="mt-4 space-y-4">
            {member.skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[11px] font-medium text-[#8A8A8A]">
                  {group.label}
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-[#C5C5C5]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {member.organizations && member.organizations.length > 0 && (
          <section className="mt-7" aria-label={`${member.name} source-listed organizations`}>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
              Source-listed organizations
            </h4>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {member.organizations.map((organization) => (
                <li
                  key={organization}
                  className="border border-[#FF1724]/30 bg-[#FF1724]/[0.06] px-2.5 py-1.5 text-[11px] text-[#E4E4E4]"
                >
                  {organization}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-7" aria-label={`${member.name} education`}>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
            Education listed in source
          </h4>
          <ul className="mt-3 space-y-1.5 text-sm text-[#A1A1A1]">
            {member.education.map((school) => (
              <li key={school} className="flex gap-2">
                <span aria-hidden="true" className="text-[#FF1724]">
                  ·
                </span>
                {school}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7" aria-label={`${member.name} public links`}>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]">
            Public links
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <ExternalLink label="Portfolio" href={member.portfolioUrl} />
            {member.links.map((link) => (
              <ExternalLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
        </section>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-xs">
          <a
            href={member.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#FF1724] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
          >
            View {member.sourceLabel}
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/work/fujifenix/"
            className="inline-flex items-center gap-1.5 text-[#C5C5C5] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1724]"
          >
            Related project dossier
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function TeamArticle({ page }: { page: SeoPage }) {
  if (!page.team || page.team.length === 0) return <PageArticle page={page} />;

  return (
    <article className="w-full px-5 pb-16 pt-24 sm:px-8 lg:px-10">
      <PageHeader page={page} />

      <section className="mt-10 scroll-mt-28" aria-labelledby="team-profiles">
        <p className="font-[family-name:var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF1724]">
          Team evidence
        </p>
        <h2
          id="team-profiles"
          className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#F5F5F5] sm:text-2xl"
        >
          Source-backed profiles
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#A1A1A1] sm:text-[15px]">
          The following profiles are taken from the FUJIFENIX developers page,
          the public source that identifies the two developers behind that
          verified project. Skills and background notes remain attributed to
          that source.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {page.team.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
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
          <PageCta
            page={page}
            message="Discuss an engineering team with the right focus"
          />
        </div>
      </div>
    </article>
  );
}
