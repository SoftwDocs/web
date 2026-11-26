import { RouteIndex, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/locations/");

export default function Page() {
  return <RouteIndex path="/locations/" prefix="/locations/" />;
}
