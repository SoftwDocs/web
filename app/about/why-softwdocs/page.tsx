import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/why-softwdocs/");

export default function Page() {
  return <RouteArticle path="/about/why-softwdocs/" />;
}
