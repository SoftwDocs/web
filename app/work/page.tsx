import { RouteIndex, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/work/");

export default function Page() {
  return <RouteIndex path="/work/" prefix="/work/" />;
}
