import { BentoDemo } from "@/components/bento-section";
import UIBlocksSection from "@/components/blocks-section";
import DashboardSection from "@/components/dashboardsection";
import BlocksSection from "@/components/explore-section";
import FAQPage from "@/components/FAQ";
import Hero from "@/components/hero-section";
import LandingSection from "@/components/landing-section";
import ShowcaseMarquee from "@/components/marquee-section";
import Navbar from "@/components/navbar";
import WallOfLove from "@/components/walloflove";
import WhyBuilt from "@/components/why-built";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <ShowcaseMarquee/>
      <WallOfLove/>
      <BentoDemo/>
      <BlocksSection/>
      <UIBlocksSection/>
      <LandingSection/>
      <WhyBuilt/>
      <DashboardSection/>
      <FAQPage/>
    </main>
  );
}