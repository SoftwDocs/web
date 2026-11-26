import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/engineering-philosophy/");

export default function Page() {
  return <RouteArticle path="/about/engineering-philosophy/" />;
}
