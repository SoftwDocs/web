import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/our-expertise/");

export default function Page() {
  return <RouteArticle path="/about/our-expertise/" />;
}
