"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import TemplatesPage from "@/components/TemplatesPage"

export default function AnimatedHero() {
  return (
    <section className="mx-auto w-full max-w-7xl border-x border-dashed border-border bg-background text-foreground">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative mx-auto grid max-w-screen-2xl grid-cols-12 gap-6
          border-b border-dashed border-border
          bg-[url(https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-bg.png)]
          bg-cover bg-center
          px-4 sm:gap-8 sm:px-6 lg:px-8
        "
      >

        {/* 🔥 DARK MODE OVERLAY FIX */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black" />

        {/* CONTENT WRAPPER (IMPORTANT Z-INDEX) */}
        <div className="relative z-10 col-span-full xl:col-span-6 flex flex-col gap-4 py-12 max-xl:text-center">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground max-xl:justify-center">
            <Link href="/" className="hover:text-foreground transition">
              Home
            </Link>

            <ChevronRight className="h-4 w-4 opacity-60" />

            <span className="text-foreground">Templates</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-semibold">
            <span className="font-bold">10+</span> Shadcn Templates - Free & Pro
          </h1>

          {/* Description */}
          <p className="max-w-xl text-muted-foreground text-lg">
            Explore premium & free <strong>Shadcn UI templates</strong> for dashboards,
            landing pages & more.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 max-xl:justify-center">

            <Link
              href="/figma"
              className="inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] p-[1px]"
            >
              <span className="flex items-center gap-2 rounded-md bg-background px-4 py-2 text-xs font-medium">
                Get Figma File
              </span>
            </Link>

            <Link
              href="/#pricing"
              className="rounded-lg bg-foreground text-background px-4 py-2 text-xs font-medium hover:opacity-90 transition"
            >
              Get all access
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10 col-span-full xl:col-span-6 flex justify-center">
          <Image
            src="https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/header-image.png"
            alt="Hero"
            width={600}
            height={400}
            className="w-full max-w-[600px] object-contain"
            priority
          />
        </div>

      </motion.div>

      <TemplatesPage />

    </section>
  )
}