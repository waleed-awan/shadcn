"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface HeroBlocksSectionProps {
  title?: string
  subtitle?: string
  image?: string
}

export default function HeroBlocks({
  title = "700+ Shadcn Blocks - Free & Pro",
  subtitle = "Explore premium & free Shadcn UI blocks to speed up your development.",
  image = "https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-image.png?height=368&format=auto",
}: HeroBlocksSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* HERO WRAPPER */}
      <div className="relative grid grid-cols-12 gap-6 bg-[url(https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-bg.png)] bg-cover bg-center px-4 max-xl:place-items-center sm:gap-8 sm:px-6 lg:px-8">
        {/* DARK MODE OVERLAY (IMPORTANT FIX) */}
        <div className="pointer-events-none absolute inset-0 bg-white/40 dark:bg-black" />

        {/* LEFT SIDE */}
        <div className="relative col-span-full flex flex-col gap-4 py-12 text-center xl:col-span-6 xl:text-left">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-600 xl:justify-start dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Home
                </Link>
              </li>

              <ChevronRight className="h-4 w-4 text-gray-600 opacity-60 dark:text-gray-400" />

              <li className="text-black dark:text-white">Blocks</li>
            </ol>
          </nav>

          {/* TITLE */}
          <h1 className="text-2xl leading-tight font-semibold sm:text-4xl">
            <span className="font-bold">{title}</span>
          </h1>

          {/* SUBTITLE */}
          <p className="max-w-lg text-base text-gray-700 dark:text-gray-300">
            {subtitle}
          </p>

          {/* BUTTONS */}
          <div className="mt-2 flex flex-wrap justify-center gap-3 xl:justify-start">
            <Link
              href="/figma"
              className="inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] p-[1px]"
            >
              <span className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-black dark:bg-black dark:text-white">
                Get Figma File
              </span>
            </Link>

            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-xs font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-black"
            >
              Get All Access
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative col-span-full flex justify-center xl:col-span-6">
          <Image
            src={image}
            alt="Hero"
            width={600}
            height={420}
            priority
            className="w-full max-w-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
