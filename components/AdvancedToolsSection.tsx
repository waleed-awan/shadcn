"use client"

import { motion } from "framer-motion"

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="advance-tools"
      className="overflow-hidden bg-white pt-10 sm:pt-16 lg:pt-24"
    >

      {/* TOP GRID */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid divide-y divide-dashed border-y border-dashed md:grid-cols-2 xl:grid-cols-4"
      >
        {tools.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex cursor-pointer items-center gap-4 border-t border-r border-b border-dashed border-gray-200 px-4 py-8 transition hover:bg-gray-50"
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
            </motion.div>
          )
        })}
      </motion.div>

      {/* MAIN SECTION */}
      <div className="py-12 sm:py-16 lg:py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-4 text-center"
        >
          <h2 className="text-2xl leading-relaxed font-semibold text-black sm:text-3xl lg:text-3xl">
            No Code. Just Drag, Drop &{" "}
            <span className="relative inline-block font-bold">
              Build Your Landing Page
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
            Create landing pages by dragging blocks, preview in real-time and export production-ready code.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-1 rounded-md bg-black px-6 py-2 text-base font-medium text-white transition hover:bg-black/80"
            >
              Get all access
            </a>

            <a
              href="/builder"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-200 px-6 py-2 text-base font-medium text-black shadow-sm transition hover:bg-gray-50"
            >
              Explore more
            </a>
          </div>
        </motion.div>

        {/* CONTENT GRID */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid border-y border-dashed border-gray-300 lg:grid-cols-2"
        >

          {/* LEFT */}
          <div>
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer border-r border-b border-dashed border-gray-200 p-6 transition hover:bg-gray-50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="size-5 text-black" />
                    <h3 className="text-lg font-semibold text-black">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-6"
          >
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
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}