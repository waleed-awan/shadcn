"use client"

import {
  MousePointer2,
  SwatchBook,
  CodeXml,
  Blocks,
  Search,
  Copy,
  Share2,
} from "lucide-react"

const tools = [
  {
    icon: MousePointer2,
    title: "Shadcn Builder",
    subtitle: "Drag & Drop",
  },
  {
    icon: SwatchBook,
    title: "Shadcn Theme Generator",
    subtitle: "Visual Theme Generator",
  },
  {
    icon: CodeXml,
    title: "Shadcn Code in Seconds",
    subtitle: "Figma to Code",
  },
  {
    icon: Blocks,
    title: "shadcn/studio MCP",
    subtitle: "Innovative MCP",
  },
]

const steps = [
  {
    icon: Search,
    title: "Search → Drag → Preview",
    desc: "Find the exact block you need, drag it into your canvas, and see everything update in real time.",
  },
  {
    icon: Copy,
    title: "Copy CLI or Export Code",
    desc: "Save your page, copy CLI commands, or export the full project ready to use.",
  },
  {
    icon: Share2,
    title: "Create, Save, Load & Share",
    desc: "Create projects, save progress, and share with team or clients easily.",
  },
]

export default function AdvancedToolsSection() {
  return (
    <section
      id="advance-tools"
      className="overflow-hidden bg-white pt-10 sm:pt-16 lg:pt-24"
    >
      {/* TOP GRID */}
      <div className="grid divide-y divide-dashed border-y border-dashed md:grid-cols-2 xl:grid-cols-4">
        {tools.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="flex cursor-pointer items-center gap-4 border border-dashed border-gray-300 px-4 py-8 transition hover:bg-gray-50"
            >
              <div className="hidden size-12 place-items-center rounded-lg border bg-white lg:grid">
                <Icon className="size-6 text-black" />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>

      {/* MAIN SECTION */}
      <div className="py-12 sm:py-16 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl leading-relaxed font-semibold text-black sm:text-3xl lg:text-3xl">
            No Code. Just Drag, Drop &{" "}
            <span className="relative inline-block font-bold">
              Build Your Landing Page
              {/* SVG UNDERLINE (FIXED) */}
              <svg
                className="pointer-events-none absolute -bottom-2 left-0 h-[18px] w-full"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15 C 70 5, 230 5, 295 15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Create landing pages by dragging blocks, preview in real-time and
            export production-ready code.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* Get all access */}
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-1 rounded-md bg-black px-6 py-2 text-base font-medium text-white transition hover:bg-black/80"
            >
              Get all access
              <svg
                width="20"
                height="20"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M63.6734 24.8486V49.3899C63.6734 57.4589 57.1322 64.0001 49.0632 64.0001H25.2041"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <path
                  d="M64.3266 103.152L64.3266 78.6106C64.3266 70.5416 70.8678 64.0003 78.9368 64.0003L102.796 64.0004"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <line
                  x1="93"
                  y1="35"
                  x2="76"
                  y2="52"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <line
                  x1="51"
                  y1="77"
                  x2="34"
                  y2="93"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <line
                  x1="50"
                  y1="51"
                  x2="34"
                  y2="34"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <line
                  x1="93"
                  y1="93"
                  x2="76"
                  y2="76"
                  stroke="currentColor"
                  strokeWidth="8"
                />
              </svg>
            </a>

            {/* Explore more */}
            <a
              href="/builder"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-200 px-6 py-2 text-base font-medium text-black shadow-sm transition hover:bg-gray-50"
            >
              Explore more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-12 border border-gray-300 border-dashed grid lg:grid-cols-2">
          {/* LEFT */}
          <div className=" ">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="cursor-pointer border border-gray-300 border-dashed p-6 transition hover:bg-gray-50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="size-5 text-black" />
                    <h3 className="text-lg font-semibold text-black">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              )
            })}
          </div>

          {/* RIGHT VIDEO */}
          <div className="flex border border-gray-300 border-dashed items-center justify-center p-6">
            <video
              className="w-full max-w-xl rounded-lg border"
              autoPlay
              playsInline
              muted
              loop
            >
              <source
                src="https://cdn.shadcnstudio.com/ss-assets/landing-page-videos/drag-and-drop/dnd-1.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
