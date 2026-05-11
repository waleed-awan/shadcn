"use client"

import { motion } from "framer-motion"
import {
  ChartNoAxesCombined,
  LayoutGrid,
  PanelsTopLeft,
  MousePointerClick,
  SwatchBook,
  Plus,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import FigmaColumnsShowcase from "./FigmaColumnsShowcase"

/* ================= DATA ================= */

const leftItems = [
  { icon: ChartNoAxesCombined, text: "1000+ Components Variants" },
  { icon: LayoutGrid, text: "700+ Pre-Built Website Blocks" },
  { icon: PanelsTopLeft, text: "10 Ready-to-Launch Landing Pages" },
]

const rightItems = [
  { icon: ChartNoAxesCombined, text: "9 Premium Dashboard Templates" },
  { icon: MousePointerClick, text: "Intuitive Drag & Drop Builder" },
  { icon: SwatchBook, text: "9 Fully Functional Workable Themes" },
]

/* ================= FEATURE CARD ================= */

function FeatureCard({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="relative z-10 flex h-12 items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 shadow-sm">
      <Icon className="size-4 text-neutral-600" />
      <span className="text-sm font-medium whitespace-nowrap text-neutral-900">
        {text}
      </span>
    </div>
  )
}

/* ================= RIPPLE ================= */

function RippleRing({ delay, size }: { delay: number; size: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 0.25, 0], scale: [0.8, 1, 1.2] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="absolute rounded-[30px] border border-neutral-500"
      style={{ inset: -size }}
    />
  )
}

/* ================= BEAM ================= */

function Beam({ direction }: { direction: "x" | "y" }) {
  return (
    <motion.div
      className={`absolute inset-0 ${
        direction === "x"
          ? "bg-gradient-to-r from-transparent via-neutral-900/50 to-transparent"
          : "bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent"
      }`}
      animate={
        direction === "x"
          ? { x: ["-100%", "100%"] }
          : { y: ["-100%", "100%"] }
      }
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

/* ================= MAIN ================= */

export default function HeroWithFeatureShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-16 border-y border-gray-300 border-dashed bg-white py-20"
    >
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-[Caveat] text-lg font-extrabold text-neutral-700 underline underline-offset-4">
            shadcn/ui for Figma
          </span>

          <h2 className="max-w-4xl text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-4xl lg:leading-[1.4]">
            The Ultimate Design System
          </h2>

          <p className="max-w-3xl text-lg text-neutral-600">
            1000+ components, 700+ blocks, 10+ templates, 9 dashboards.
          </p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 py-10"
          >
            {/* BLACK BUTTON */}
            <Link
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#0d0d0d] px-6 py-3 text-base font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gray-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="pointer-events-none absolute inset-[3px] rounded-lg border border-gray-400" />

              <span className="relative z-10">Get all access</span>
            </Link>

            {/* WHITE BUTTON */}
            <Link
              href="#features"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gray-200 px-6 py-3 text-base font-medium text-black shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.02]"
            >
              Explore more
            </Link>
          </motion.div>
      </motion.div>

      {/* SHOWCASE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 max-lg:flex-col max-lg:gap-16"
      >
        {/* LEFT */}
        <div className="relative flex flex-col gap-6">
          {leftItems.map((item, i) => (
            <div key={i} className="relative flex justify-end">
              <div className="absolute top-1/2 left-full hidden h-px w-[140px] -translate-y-1/2 overflow-hidden bg-neutral-200 lg:block">
                <Beam direction="x" />
              </div>

              {i !== 1 && (
                <div
                  className={`absolute hidden w-px overflow-hidden bg-neutral-200 lg:block ${
                    i === 0
                      ? "top-1/2 right-[-140px] h-[72px]"
                      : "right-[-140px] bottom-1/2 h-[72px]"
                  }`}
                >
                  <Beam direction="y" />
                </div>
              )}

              <FeatureCard icon={item.icon} text={item.text} />
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="relative hidden items-center justify-center lg:flex">
          <div className="absolute top-1/2 left-[-420px] h-px w-[840px] -translate-y-1/2 overflow-hidden bg-neutral-200">
            <Beam direction="x" />
          </div>

          <div className="relative">
            <RippleRing delay={0} size={8} />
            <RippleRing delay={0.3} size={20} />
            <RippleRing delay={1.6} size={20} />

            <div className="relative z-10 rounded-[28px] border border-neutral-200 bg-white shadow-sm">
              <div className="flex items-center gap-4 p-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-black">
                    <img
                      src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/shadcn-logo.png"
                      className="size-5"
                    />
                  </div>
                </div>

                <Plus className="size-4 text-neutral-500" />

                <div className="flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-black">
                    <img
                      src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png"
                      className="size-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col gap-6">
          {rightItems.map((item, i) => (
            <div key={i} className="relative flex justify-start">
              <div className="absolute top-1/2 right-full hidden h-px w-[140px] -translate-y-1/2 overflow-hidden bg-neutral-200 lg:block">
                <Beam direction="x" />
              </div>

              {i !== 1 && (
                <div
                  className={`absolute hidden w-px overflow-hidden bg-neutral-200 lg:block ${
                    i === 0
                      ? "top-1/2 left-[-140px] h-[72px]"
                      : "bottom-1/2 left-[-140px] h-[72px]"
                  }`}
                >
                  <Beam direction="y" />
                </div>
              )}

              <FeatureCard icon={item.icon} text={item.text} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ✅ FIGMA SHOWCASE WITH ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <FigmaColumnsShowcase />
      </motion.div>
    </motion.section>
  )
}