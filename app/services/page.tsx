import { RouteIndex, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/services/");

export default function Page() {
  return <RouteIndex path="/services/" prefix="/services/" />;
}
