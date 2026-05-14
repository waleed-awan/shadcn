"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

type Template = {
  id: string
  title: string
  description: string
  badge?: string
  tags?: string[]
  images: string[]
  link: string
  status?: "Free" | "Pro" | "Updated" | "New"
}

export const dashboardLightImages = [
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/dashboard/default-dashboard-1.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/dashboard/default-dashboard-2.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/dashboard/default-dashboard-3.png",

  "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/dashboard/eCommerce-dashboard-1.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/dashboard/eCommerce-dashboard-2.png",
  "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/dashboard/eCommerce-dashboard-3.png",
]

const websiteTemplateImages = {
  brandly: [
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/brandly-template-1.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/brandly-template-2.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/brandly-template-3.png",
  ],

  shopix: [
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/shopix-template-1.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/shopix-template-2.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/shopix-template-3.png",
  ],

  skillsphere: [
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/skillsphere-template-1.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/skillsphere-template-2.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/skillsphere-template-3.png",
  ],

  promptly: [
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/promptly-template-1.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/promptly-template-2.png",
    "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/template/promptly-template-3.png",
  ],
}

const Badge = ({ text }: { text: string }) => {
  const color =
    text === "Free"
      ? "bg-red-50 text-red-600 border-red-200"
      : text === "Pro"
        ? "bg-amber-50 text-amber-600 border-amber-200"
        : text === "New"
          ? "bg-blue-50 text-blue-600 border-blue-200"
          : "bg-green-50 text-green-600 border-green-200"

  return (
    <span className={`rounded border px-2.5 py-1 text-xs font-medium ${color}`}>
      {text}
    </span>
  )
}

const TemplateCard = ({
  id,
  title,
  description,
  images,
  link,
  status = "Free",
}: Template) => {
  return (
    <div
      id={id}
      className="relative scroll-mt-36 border-b border-dashed border-gray-200 py-10"
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
          {/* LEFT */}
          <div className="flex flex-col items-start">
            <div className="mb-3 flex items-center gap-2">
              <Badge text={status} />

              <div className="flex gap-2">
                <div className="grid h-7 w-7 place-items-center rounded border bg-white">
                  <Image
                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png"
                    alt="figma"
                    width={16}
                    height={16}
                  />
                </div>

                <div className="grid h-7 w-7 place-items-center rounded border bg-white">
                  <Image
                    src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/nextjs-logo.png"
                    alt="nextjs"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              <a href={link} className="hover:underline">
                {title}
              </a>
            </h3>

            <p className="mt-2 text-gray-600">{description}</p>

            <a
              href={link}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800 sm:w-fit"
            >
              View Template
              <span>→</span>
            </a>
          </div>

          {/* DESKTOP IMAGES */}
          <div className="hidden grid-cols-3 gap-4 sm:grid lg:col-span-2">
            {images.map((img, i) => (
              <div key={i}>
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={250}
                  className="rounded-xl border border-gray-200 shadow-sm transition duration-300 hover:-translate-y-1"
                />
              </div>
            ))}
          </div>

          {/* MOBILE */}
          <div className="sm:hidden">
            <Image
              src={images[0]}
              alt={title}
              width={600}
              height={400}
              className="rounded-xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingTemplatesSection() {
  const [activeTab, setActiveTab] = useState("Landing Page")
  const [filter, setFilter] = useState("All")

  /* ================= LANDING ================= */

  const landingData: Template[] = [
    {
      id: "ink",
      title: "Ink - Blog Landing Page Template",
      description:
        "Share ideas and stories on a stylish landing page designed for creators.",
      status: "Free",
      link: "#",
      images: [
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/blog-landing-page-1.png",
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/blog-landing-page-2.png",
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/blog-landing-page-3.png",
      ],
    },
    {
      id: "track",
      title: "Track - Changelog Landing Page",
      description:
        "Present product updates clearly with a crisp changelog layout.",
      status: "Free",
      link: "#",
      images: [
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/changelog-landing-page-1.png",
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/changelog-landing-page-2.png",
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/changelog-landing-page-3.png",
      ],
    },
    {
      id: "grow",
      title: "Grow - Marketing Landing Page",
      description:
        "Boost marketing performance with a strong conversion-focused layout.",
      status: "Pro",
      link: "#",
      images: [
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/marketing-landing-page-1.png",
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/marketing-landing-page-2.png",
        "https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/landing-page/marketing-landing-page-3.png",
      ],
    },
  ]

  /* ================= DASHBOARD ================= */

  const dashboardData: Template[] = [
    {
      id: "analytics",
      title: "Pulse - Analytics Dashboard",
      description:
        "Modern analytics dashboard with charts, metrics and clean data visualization.",
      status: "Pro",
      link: "#",
      images: dashboardLightImages.slice(0, 3),
    },
    {
      id: "finance",
      title: "Finance - SaaS Dashboard",
      description:
        "Track revenue, subscriptions and performance with an elegant dashboard UI.",
      status: "Pro",
      link: "#",
      images: dashboardLightImages.slice(3, 6),
    },
  ]

  /* ================= TEMPLATES ================= */

  const templateData: Template[] = [
    {
      id: "brandly",
      title: "Brandly - Modern Website Template",
      description:
        "Clean and modern multi-purpose website template for startups and brands.",
      status: "Pro",
      link: "#",
      images: websiteTemplateImages.brandly,
    },
    {
      id: "shopix",
      title: "Shopix - E-commerce Website Template",
      description:
        "High-conversion eCommerce template with modern product layouts.",
      status: "Pro",
      link: "#",
      images: websiteTemplateImages.shopix,
    },
    {
      id: "skillsphere",
      title: "SkillSphere - Education Website Template",
      description:
        "Learning platform template for courses, tutors and online education.",
      status: "Pro",
      link: "#",
      images: websiteTemplateImages.skillsphere,
    },
    {
      id: "promptly",
      title: "Promptly - AI SaaS Website Template",
      description:
        "AI SaaS landing page template designed for modern AI tools and startups.",
      status: "Pro",
      link: "#",
      images: websiteTemplateImages.promptly,
    },
  ]

  /* ================= FILTER ================= */

  const filterItems = (items: Template[]) => {
    if (filter === "Free") {
      return items.filter((item) => item.status === "Free")
    }

    if (filter === "Premium") {
      return items.filter((item) => item.status === "Pro")
    }

    return items
  }

  const landingFiltered = useMemo(() => filterItems(landingData), [filter])

  const dashboardFiltered = useMemo(() => {
    if (filter === "Free") return []
    return filterItems(dashboardData)
  }, [filter])

  const templateFiltered = useMemo(() => {
    if (filter === "Free") return []
    return filterItems(templateData)
  }, [filter])

  /* ================= SCROLL ================= */

  const scrollToSection = (id: string, tab: string) => {
    setActiveTab(tab)

    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="bg-white">
      {/* ================= HEADER ================= */}

      <div className="sticky top-20 z-10 border-b border-neutral-200 backdrop-blur-xl">
        <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          {/* LEFT MENU */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-neutral-500">
            {[
              {
                label: "Landing Page",
                id: "landing-section",
              },
              {
                label: "Dashboard & Application",
                id: "dashboard-section",
              },
              {
                label: "Templates",
                id: "templates-section",
              },
            ]
              .filter((item) => {
                if (filter === "Free") {
                  return item.label === "Landing Page"
                }
                return true
              })
              .map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id, item.label)}
                  className={`relative pb-3 transition ${
                    activeTab === item.label ? "text-black" : "hover:text-black"
                  }`}
                >
                  {item.label}

                  {activeTab === item.label && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black" />
                  )}
                </button>
              ))}
          </div>

          {/* RIGHT FILTER */}
          <div className="flex w-fit items-center overflow-hidden rounded-xl border border-neutral-200 bg-white">
            {["All", "Premium", "Free"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setFilter(item)

                  if (item === "Free") {
                    setActiveTab("Landing Page")
                  }
                }}
                className={`border-r px-5 py-2 text-sm font-medium last:border-r-0 ${
                  filter === item
                    ? "bg-neutral-100 text-black"
                    : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        {/* ================= LANDING ================= */}

        {landingFiltered.length > 0 && (
          <section
            id="landing-section"
            className="scroll-mt-32 pt-10 sm:pt-16 lg:pt-24"
          >
            <div className="space-y-4 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Shadcn UI Landing Page Templates
              </h2>

              <p className="mb-10 text-lg text-gray-600">
                Landing page templates for creating engaging, conversion-focused
                pages.
              </p>
            </div>

            <div className="flex flex-col border-t border-dashed border-gray-200">
              {landingFiltered.map((item) => (
                <TemplateCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* ================= DASHBOARD ================= */}

        {dashboardFiltered.length > 0 && (
          <section
            id="dashboard-section"
            className="scroll-mt-32 pt-16 lg:pt-24"
          >
            <div className="space-y-4 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Dashboard & Application Templates
              </h2>

              <p className="mb-10 text-lg text-gray-600">
                Modern dashboard and app templates with clean layouts and
                beautiful UI components.
              </p>
            </div>

            <div className="flex flex-col border-t border-dashed border-gray-200">
              {dashboardFiltered.map((item) => (
                <TemplateCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* ================= TEMPLATES ================= */}

        {templateFiltered.length > 0 && (
          <section
            id="templates-section"
            className="scroll-mt-32 pt-16 lg:pt-24"
          >
            <div className="space-y-4 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                Website Templates Collection
              </h2>

              <p className="mb-10 text-lg text-gray-600">
                Professionally designed templates for startups, agencies and
                modern businesses.
              </p>
            </div>

            <div className="flex flex-col border-t border-dashed border-gray-200">
              {templateFiltered.map((item) => (
                <TemplateCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
