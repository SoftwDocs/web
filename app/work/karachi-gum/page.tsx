import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/work/karachi-gum/");

export default function Page() {
  return <RouteArticle path="/work/karachi-gum/" />;
}
