import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/our-approach/");

export default function Page() {
  return <RouteArticle path="/about/our-approach/" />;
}
