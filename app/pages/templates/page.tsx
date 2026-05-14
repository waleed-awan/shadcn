"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import TemplatesPage from "@/components/TemplatesPage"

export default function AnimatedHero() {
  return (
    <section className="mx-auto w-full max-w-7xl border-x border-dashed border-zinc-200 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-6 border-b border-dashed border-gray-200 bg-[url(https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-bg.png)] bg-cover bg-center px-4 sm:gap-8 sm:px-6 lg:px-8"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="col-span-full my-auto flex flex-col gap-4 py-12 max-xl:items-center max-xl:text-center xl:col-span-6"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition hover:text-black">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-black">Templates</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-black sm:text-4xl">
            <span className="font-bold text-black">10+</span> Shadcn Templates -
            Free & Pro
          </h1>

          {/* Description */}
          <p className="max-w-xl text-lg text-gray-600">
            Explore premium & free <strong>Shadcn UI templates</strong> for
            dashboards, landing pages & more. Fully customizable & easy to use.
          </p>

          {/* Buttons */}
          <div className="mt-2 flex flex-wrap gap-3 max-xl:justify-center">
            {/* Figma Button */}
            <Link
              href="/figma"
              className="inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] p-[1px]"
            >
              <span className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-gray-800">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 16 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7963 13C15.7963 14.9862 14.1865 16.5977 12.2037 16.5977C10.2208 16.5977 8.61099 14.9862 8.61099 13C8.61099 11.0139 10.2208 9.40237 12.2037 9.40237C14.1865 9.40237 15.7963 11.0139 15.7963 13Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M8.61099 1H12.2037C14.1865 1 15.7963 2.5967 15.7963 4.5828C15.7963 6.56891 14.1865 8.18047 12.2037 8.18047H8.61099V1Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M7.38915 21.4172C7.38915 23.4033 5.77933 25.0149 3.79648 25.0149C1.81364 25.0149 0.203809 23.4033 0.203809 21.4172C0.203809 19.4311 1.81364 17.8195 3.79648 17.8195H7.38915V21.4172Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M0.203809 13C0.203809 11.0139 1.81364 9.40237 3.79648 9.40237H7.38915V16.5977H3.79648C1.81364 16.5977 0.203809 14.9862 0.203809 13Z"
                    fill="#A259FF"
                  />
                  <path
                    d="M0.203641 4.5828C0.203641 2.5967 1.81347 1 3.79631 1H7.38899V8.18047H3.79631C1.81347 8.18047 0.203641 6.56891 0.203641 4.5828Z"
                    fill="#F24E1E"
                  />
                </svg>
                Get Figma File
              </span>
            </Link>

            {/* Access Button */}
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-gray-900"
            >
              <span>Get all access</span>

              <span className="flex h-6 w-6 items-center justify-center">
                <svg
                  viewBox="0 0 328 329"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <rect
                    y="0.5"
                    width="328"
                    height="328"
                    rx="164"
                    fill="black"
                  />

                  <path
                    d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <path
                    d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="238.136"
                    y1="98.8184"
                    x2="196.76"
                    y2="139.707"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="135.688"
                    y1="200.957"
                    x2="94.3128"
                    y2="241.845"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="133.689"
                    y1="137.524"
                    x2="92.5566"
                    y2="96.3914"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="237.679"
                    y1="241.803"
                    x2="196.547"
                    y2="200.671"
                    stroke="white"
                    strokeWidth="20"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-span-full flex justify-center xl:col-span-6"
        >
          <Image
            src="https://cdn.shadcnstudio.com/ss-assets/landing-page/template-page/header-image.png"
            alt="Hero"
            width={600}
            height={400}
            className="w-full max-w-[600px] object-contain"
            priority
          />
        </motion.div>
      </motion.div>
      <div>
        <TemplatesPage/>
      </div>
    </section>
  )
}
