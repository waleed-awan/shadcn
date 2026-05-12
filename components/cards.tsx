"use client"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"

const blockImages = [
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/hero.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/hero-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/features.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/features-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/pricing.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/pricing-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/testimonials.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/testimonials-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/social-proof.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/social-proof-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/portfolio.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/portfolio-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/team.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/team-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/cta.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/cta-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/logo-cloud.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/logo-cloud-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/faq.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/faq-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/gallery.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/gallery-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/blog.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/blog-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/about-us.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/about-us-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/contact-us.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/contact-us-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/download.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/download-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/timeline.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/timeline-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/navbar.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/navbar-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/footer.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/footer-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/login.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/login-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/register.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/register-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/forgot-password.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/forgot-password-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/reset-password.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/reset-password-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/verify-email.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/verify-email-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/two-factor-authentication.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/two-factor-authentication-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/app-integration.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/app-integration-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/cookies.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/cookies-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/compare.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/compare-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/error.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/error-dark.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/user-schedule.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/marketing-ui/user-schedule-dark.png",
]

const generateBlocks = (baseCount: number) => {
  const blockNames = [
    "Hero Section",
    "Features Section",
    "Pricing Component",
    "Testimonials Component",
    "CTA Section",
    "Navigation Bar",
    "Footer Section",
    "Form Builder",
    "Image Gallery",
    "Social Proof",
    "Team Section",
    "FAQ Section",
  ]

  const newCounts = [30, 19, 20, 15, 12, 25, 18, 22, 16, 28, 14, 21]

  return blockNames.map((name, idx) => ({
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-${idx}`,
    title: name,
    blocks: baseCount + idx,
    image: blockImages[idx % blockImages.length],
    isHot: idx % 3 === 0,
    isNew: idx % 2 === 0,
    newCount: newCounts[idx],
  }))
}

const sections = [
  {
    id: "marketing",
    title: "Marketing",
    heading: "Marketing UI Blocks 🎨",
    description:
      "Marketing UI Blocks are a collection of Shadcn UI Blocks that are designed to help you create stunning and user-friendly marketing websites.",
    blocks: generateBlocks(35),
  },
  {
    id: "dashboard",
    title: "Dashboard & App",
    heading: "Dashboard & App Components 📊",
    description:
      "Professional dashboard and app components for creating powerful admin interfaces and applications.",
    blocks: generateBlocks(28),
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    heading: "eCommerce Solutions 🛍️",
    description:
      "Complete eCommerce components for building stunning online stores and shopping experiences.",
    blocks: generateBlocks(32),
  },
  {
    id: "datatable",
    title: "Datatable",
    heading: "Data Table Components 📈",
    description:
      "Powerful and flexible data table components for displaying and managing large datasets.",
    blocks: generateBlocks(18),
  },
  {
    id: "bento",
    title: "Bento",
    heading: "Bento Grid Layouts 🎯",
    description:
      "Beautiful bento grid layout components for modern and creative web designs.",
    blocks: generateBlocks(22),
  },
  {
    id: "free",
    title: "Free",
    heading: "Free Components 🎁",
    description:
      "Explore our collection of free, open-source UI components for your projects.",
    blocks: generateBlocks(12),
  },
]

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("marketing")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})


  
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      setActiveSection(sectionId)
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filteredSections = sections
    .map((section) => ({
      ...section,
      blocks: section.blocks.filter((block) =>
        block.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.blocks.length > 0 || searchQuery === "")

  useEffect(() => {
    const handleScroll = () => {
      for (const [id, element] of Object.entries(sectionRefs.current)) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className=" absolute -z-10 min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-20 z-50 w-full border-b border-white/30 bg-white/60 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-lg font-normal transition-colors ${
                    activeSection === section.id
                      ? "border-b-2 border-black pb-4 text-black"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            {/* Search */}
            <div className="relative w-64">
              <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300/50 bg-white/40 py-2 pr-4 pl-10 text-black backdrop-blur-md transition-all focus:bg-white/70 focus:ring-2 focus:ring-gray-200 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-8 py-12">
        {filteredSections.map((section) => (
          <section
            key={section.id}
            ref={(el) => {
              if (el) sectionRefs.current[section.id] = el
            }}
            className="mb-16"
          >
            {/* Section Header */}
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold text-black">
                {section.heading}
              </h1>
              <p className="max-w-2xl text-lg text-gray-600">
                {section.description}
              </p>
            </div>

            {/* Blocks Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
              {section.blocks.map((card) => (
                <div
                  key={card.id}
                  className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
                >
                  {/* Card Image Container */}
                  <div className="relative flex min-h-40 w-full flex-1 items-center justify-center overflow-hidden bg-gray-50 p-3 sm:min-h-48 sm:p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-contain"
                    />
                    {/* HOT Badge */}
                    {card.isHot && (
                      <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white sm:top-3 sm:right-3 sm:px-2.5 sm:py-1">
                        <span>🔥</span>
                        <span>HOT</span>
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-gray-200 p-3 sm:p-4">
                    <h3 className="mb-2 line-clamp-2 text-sm font-bold text-gray-900 sm:mb-3 sm:text-base">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs sm:text-sm">
                      <span className="font-medium text-gray-700">
                        {card.blocks} blocks
                      </span>
                      {card.isNew && card.newCount && (
                        <span className="font-medium text-gray-500">
                          +{card.newCount} New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {section.blocks.length === 0 && searchQuery && (
              <div className="py-12 text-center">
                <p className="text-gray-500">
                  No blocks found matching &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}
