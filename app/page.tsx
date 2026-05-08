import AnimatedCardStack from "@/components/card-stack"
import { BentoDemo } from "@/components/bento-section"
import UIBlocksSection from "@/components/blocks-section"
import DashboardSection from "@/components/dashboardsection"
import BlocksSection from "@/components/explore-section"
import FAQPage from "@/components/FAQ"
import FrontendSection from "@/components/frontend-section"
import Hero from "@/components/hero-section"
import LandingSection from "@/components/landing-section"
import ShowcaseMarquee from "@/components/marquee-section"
import Navbar from "@/components/navbar"
import OrbitAnimation from "@/components/orbit"
import StatsSection from "@/components/stats"
import WallOfLove from "@/components/walloflove"
import WhyBuilt from "@/components/why-built"
import FeaturesGrid from "@/components/featuregrid"
import CTASection from "@/components/CTASection"
import Footer from "@/components/footer"
import FigmaHeroSection from "@/components/FigmaHeroSection"
import AdvancedToolsSection from "@/components/AdvancedToolsSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* GLOBAL BOXED LAYOUT */}
      <div className="mx-auto w-full max-w-7xl border-x border-zinc-200 ">
        <Navbar />
        <Hero />
        <ShowcaseMarquee />
        <AnimatedCardStack />
        <FeaturesGrid />
        <WallOfLove />
        <AdvancedToolsSection />
        <BlocksSection />
        <UIBlocksSection />
        <LandingSection />
        <DashboardSection />
        <FrontendSection />
        <StatsSection />
        <WhyBuilt />
        <FAQPage />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
