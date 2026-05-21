import AnimatedCardStack from "@/components/card-stack"
import UIBlocksSection from "@/components/blocks-section"
import DashboardSection from "@/components/dashboardsection"
import BlocksSection from "@/components/explore-section"
import FAQPage from "@/components/FAQ"
import FrontendSection from "@/components/frontend-section"
import Hero from "@/components/hero-section"
import LandingSection from "@/components/landing-section"
import ShowcaseMarquee from "@/components/marquee-section"
import StatsSection from "@/components/stats"
import WallOfLove from "@/components/walloflove"
import WhyBuilt from "@/components/why-built"
import FeaturesGrid from "@/components/featuregrid"
import CTASection from "@/components/CTASection"
import AdvancedToolsSection from "@/components/AdvancedToolsSection"
import AnimatedBeamNetworkUI from "@/components/node-connection"

import SectionFrame from "@/components/SectionFrame"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* GLOBAL BOXED LAYOUT */}
      <div
        className="
          mx-auto w-full max-w-7xl
          border-x border-dashed
          border-zinc-200/70 dark:border-zinc-800/70
        "
      >
        <Hero />

        <ShowcaseMarquee />

        <SectionFrame>
          <AnimatedCardStack />
        </SectionFrame>

        <SectionFrame>
          <FeaturesGrid />
        </SectionFrame>

        <SectionFrame>
          <WallOfLove />
        </SectionFrame>

        <SectionFrame>
          <AnimatedBeamNetworkUI />
        </SectionFrame>

        <SectionFrame>
          <AdvancedToolsSection />
        </SectionFrame>

        <SectionFrame>
          <BlocksSection />
        </SectionFrame>

        <SectionFrame>
          <UIBlocksSection />
        </SectionFrame>

        <SectionFrame>
          <LandingSection />
        </SectionFrame>

        <SectionFrame>
          <DashboardSection />
        </SectionFrame>

        <SectionFrame>
          <FrontendSection />
        </SectionFrame>

        <SectionFrame>
          <StatsSection />
        </SectionFrame>

        <SectionFrame>
          <WhyBuilt />
        </SectionFrame>

        <SectionFrame>
          <FAQPage />
        </SectionFrame>

        <SectionFrame>
          <CTASection />
        </SectionFrame>
      </div>
    </main>
  )
}
