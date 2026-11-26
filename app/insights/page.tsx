import { RouteIndex, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/insights/");

export default function Page() {
  return <RouteIndex path="/insights/" prefix="/insights/" />;
}
