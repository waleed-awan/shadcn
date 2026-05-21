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
      "Marketing UI Blocks are a collection of Shadcn UI Blocks designed for modern websites.",
    blocks: generateBlocks(35),
  },
  {
    id: "dashboard",
    title: "Dashboard & App",
    heading: "Dashboard & App Components 📊",
    description:
      "Professional dashboard and app components for admin interfaces.",
    blocks: generateBlocks(28),
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    heading: "eCommerce Solutions 🛍️",
    description:
      "Complete eCommerce UI components for online stores.",
    blocks: generateBlocks(32),
  },
  {
    id: "datatable",
    title: "Datatable",
    heading: "Data Table Components 📈",
    description:
      "Powerful data table components for large datasets.",
    blocks: generateBlocks(18),
  },
  {
    id: "bento",
    title: "Bento",
    heading: "Bento Grid Layouts 🎯",
    description:
      "Modern bento grid layouts for creative UI.",
    blocks: generateBlocks(22),
  },
  {
    id: "free",
    title: "Free",
    heading: "Free Components 🎁",
    description:
      "Free open-source UI components.",
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
      element.scrollIntoView({ behavior: "smooth", block: "start" })
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full bg-background text-foreground">

      {/* HEADER */}
      <header className="sticky top-20 z-10 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* NAV */}
            <nav className="flex flex-wrap items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition sm:text-base ${
                    activeSection === section.id
                      ? "border-b-2 border-foreground pb-2 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            {/* SEARCH */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute top-3 left-3 h-5 w-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search Blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none focus:border-foreground"
              />
            </div>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {filteredSections.map((section) => (
          <section
            key={section.id}
            ref={(el) => {
              if (el) sectionRefs.current[section.id] = el
            }}
            className="mb-20 scroll-mt-28"
          >

            <div className="mb-10">
              <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                {section.heading}
              </h1>

              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                {section.description}
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {section.blocks.map((card) => (
                <div
                  key={card.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="relative flex min-h-48 items-center justify-center bg-muted p-4">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {card.isHot && (
                      <div className="absolute top-3 right-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                        🔥 HOT
                      </div>
                    )}

                  </div>

                  <div className="border-t border-border p-4">

                    <h3 className="mb-3 text-base font-bold text-foreground">
                      {card.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{card.blocks} blocks</span>

                      {card.isNew && (
                        <span>+{card.newCount} New</span>
                      )}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </section>
        ))}

      </main>

    </div>
  )
}