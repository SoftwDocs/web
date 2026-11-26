import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/our-process/");

export default function Page() {
  return <RouteArticle path="/about/our-process/" />;
}
