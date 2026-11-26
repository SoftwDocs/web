import { notFound } from "next/navigation";
import { RouteIndex, routeMetadata } from "@/components/content/RoutePage";
import {
  PUBLISHED_PATHS,
  publishedPathsUnderPrefix,
} from "@/lib/content/registry";

export function generateStaticParams() {
  return publishedPathsUnderPrefix("/insights/")
    .filter((path) => path.split("/").filter(Boolean).length === 2)
    .map((path) => ({ category: path.split("/")[2] }));
}

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return routeMetadata(`/insights/${category}/`);
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const path = `/insights/${category}/`;
  if (!PUBLISHED_PATHS.has(path)) notFound();
  return <RouteIndex path={path} prefix={path} />;
}
