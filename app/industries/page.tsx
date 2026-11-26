import { RouteIndex, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/industries/");

export default function Page() {
  return <RouteIndex path="/industries/" prefix="/industries/" />;
}
