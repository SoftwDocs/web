import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/");

export default function Page() {
  return <RouteArticle path="/about/" />;
}
