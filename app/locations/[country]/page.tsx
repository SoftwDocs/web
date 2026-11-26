import { notFound } from "next/navigation";
import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";
import {
  PUBLISHED_PATHS,
  publishedPathsUnderPrefix,
} from "@/lib/content/registry";

export function generateStaticParams() {
  return publishedPathsUnderPrefix("/locations/")
    .filter((path) => path.split("/").filter(Boolean).length === 2)
    .map((path) => ({ country: path.split("/")[2] }));
}

type Props = { params: Promise<{ country: string }> };

export async function generateMetadata({ params }: Props) {
  const { country } = await params;
  return routeMetadata(`/locations/${country}/`);
}

export default async function Page({ params }: Props) {
  const { country } = await params;
  const path = `/locations/${country}/`;
  if (!PUBLISHED_PATHS.has(path)) notFound();
  return <RouteArticle path={path} />;
}
