import { notFound } from "next/navigation";
import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";
import {
  PUBLISHED_PATHS,
  publishedPathsUnderPrefix,
} from "@/lib/content/registry";

export function generateStaticParams() {
  return publishedPathsUnderPrefix("/services/")
    .filter((path) => path !== "/services/")
    .map((path) => ({ slug: path.split("/")[2] }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return routeMetadata(`/services/${slug}/`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const path = `/services/${slug}/`;
  if (!PUBLISHED_PATHS.has(path)) notFound();
  return <RouteArticle path={path} />;
}
