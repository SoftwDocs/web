import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/technology-stack/");

export default function Page() {
  return <RouteArticle path="/about/technology-stack/" />;
}
