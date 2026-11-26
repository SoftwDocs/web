import { notFound } from "next/navigation";
import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";
import {
  PUBLISHED_PATHS,
  publishedPathsUnderPrefix,
} from "@/lib/content/registry";

export function generateStaticParams() {
  return publishedPathsUnderPrefix("/locations/")
    .filter((path) => path.split("/").filter(Boolean).length === 3)
    .map((path) => ({
      country: path.split("/")[2],
      slug: path.split("/")[3],
    }));
}

type Props = { params: Promise<{ country: string; slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { country, slug } = await params;
  return routeMetadata(`/locations/${country}/${slug}/`);
}

export default async function Page({ params }: Props) {
  const { country, slug } = await params;
  const path = `/locations/${country}/${slug}/`;
  if (!PUBLISHED_PATHS.has(path)) notFound();
  return <RouteArticle path={path} />;
}
