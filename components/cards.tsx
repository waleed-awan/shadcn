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

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
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

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full bg-white">
      {/* HEADER */}
      <header className="sticky top-20 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* NAVIGATION */}
            <nav className="flex flex-wrap items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-all sm:text-base ${
                    activeSection === section.id
                      ? "border-b-2 border-black pb-2 text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            {/* SEARCH */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search Blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pr-4 pl-10 text-sm text-black outline-none transition-all focus:border-black"
              />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {filteredSections.map((section) => (
          <section
            key={section.id}
            ref={(el) => {
              if (el) {
                sectionRefs.current[section.id] = el
              }
            }}
            className="mb-20 scroll-mt-28"
          >
            {/* SECTION HEADER */}
            <div className="mb-10">
              <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
                {section.heading}
              </h1>

              <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
                {section.description}
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.blocks.map((card) => (
                <div
                  key={card.id}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative flex min-h-48 items-center justify-center overflow-hidden bg-gray-50 p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {card.isHot && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                        <span>🔥</span>
                        <span>HOT</span>
                      </div>
                    )}
                  </div>

                  {/* FOOTER */}
                  <div className="border-t border-gray-200 p-4">
                    <h3 className="mb-3 text-base font-bold text-gray-900">
                      {card.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-gray-700">
                        {card.blocks} blocks
                      </span>

                      {card.isNew && (
                        <span className="font-medium text-gray-500">
                          +{card.newCount} New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* EMPTY STATE */}
            {section.blocks.length === 0 && searchQuery && (
              <div className="py-12 text-center">
                <p className="text-gray-500">
                  No blocks found matching "{searchQuery}"
                </p>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}