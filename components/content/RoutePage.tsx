import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublishedPage } from "@/lib/content/registry";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSchemas } from "@/lib/seo/schema";
import { PageArticle } from "./PageTemplate";
import { IndexArticle } from "./Listing";
import { ContactBrief } from "./ContactBrief";
import { TeamArticle } from "./TeamArticle";

export function routeMetadata(path: string): Metadata {
  const page = getPublishedPage(path);
  return page ? buildPageMetadata(page) : {};
}

function Schemas({ path }: { path: string }) {
  const page = getPublishedPage(path);
  return page ? <JsonLd schemas={pageSchemas(page)} /> : null;
}

export function RouteArticle({ path }: { path: string }) {
  const page = getPublishedPage(path);
  if (!page) notFound();
  return (
    <>
      <Schemas path={path} />
      <PageArticle page={page} />
    </>
  );
}

export function RouteIndex({
  path,
  prefix,
}: {
  path: string;
  prefix: string;
}) {
  const page = getPublishedPage(path);
  if (!page) notFound();
  return (
    <>
      <Schemas path={path} />
      <IndexArticle page={page} prefix={prefix} />
    </>
  );
}

export function RouteTeam({ path }: { path: string }) {
  const page = getPublishedPage(path);
  if (!page) notFound();
  return (
    <>
      <Schemas path={path} />
      <TeamArticle page={page} />
    </>
  );
}

export function RouteContact({ path }: { path: string }) {
  const page = getPublishedPage(path);
  if (!page) notFound();
  return (
    <>
      <Schemas path={path} />
      <PageArticle page={page} />
      <div className="-mt-8 w-full px-5 pb-16 sm:px-8 lg:px-10">
        <ContactBrief />
      </div>
    </>
  );
}
