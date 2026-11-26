import { RouteArticle, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/work/fujifenix/");

export default function Page() {
  return <RouteArticle path="/work/fujifenix/" />;
}
