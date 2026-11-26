import { RouteContact, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/contact/");

export default function Page() {
  return <RouteContact path="/contact/" />;
}
