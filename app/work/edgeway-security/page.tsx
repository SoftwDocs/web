import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/work/edgeway-security/");

export default function Page() {
  return <RouteArticle path="/work/edgeway-security/" />;
}
