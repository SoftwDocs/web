import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Expertise } from "@/components/home/Expertise";
import { Approach } from "@/components/home/Approach";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Technology } from "@/components/home/Technology";
import { WhySoftwDocs } from "@/components/home/WhySoftwDocs";
import { Industries } from "@/components/home/Industries";
import { EngineeringPrinciples } from "@/components/home/EngineeringPrinciples";
import { Insights } from "@/components/home/Insights";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#080808]">
      <main id="main-content" className="flex-1">
        <Hero />
        <Manifesto />
        <Expertise />
        <Approach />
        <FeaturedWork />
        <Technology />
        <WhySoftwDocs />
        <Industries />
        <EngineeringPrinciples />
        <Insights />
        <FinalCTA />
      </main>
    </div>
  );
}
