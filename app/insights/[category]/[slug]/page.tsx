import { notFound } from "next/navigation";
import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";
import {
  PUBLISHED_PATHS,
  publishedPathsUnderPrefix,
} from "@/lib/content/registry";

export function generateStaticParams() {
  return publishedPathsUnderPrefix("/insights/")
    .filter((path) => path.split("/").filter(Boolean).length === 3)
    .map((path) => ({
      category: path.split("/")[2],
      slug: path.split("/")[3],
    }));
}

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params;
  return routeMetadata(`/insights/${category}/${slug}/`);
}

export default async function Page({ params }: Props) {
  const { category, slug } = await params;
  const path = `/insights/${category}/${slug}/`;
  if (!PUBLISHED_PATHS.has(path)) notFound();
  return <RouteArticle path={path} />;
}
