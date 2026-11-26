import { RouteTeam, routeMetadata } from "@/components/content/RoutePage";

export const generateMetadata = () => routeMetadata("/about/our-team/");

export default function Page() {
  return <RouteTeam path="/about/our-team/" />;
}
