"use client"

import { motion } from "framer-motion"

export default function LineAnimation() {
  return (
    <div className="flex flex-col gap-8 overflow-hidden border-b border-r border-dotted border-zinc-300 dark:border-zinc-800 bg-white dark:bg-black pt-8 pb-6 w-full">

      {/* Content */}
      <div className="w-full space-y-3.5 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Stunning Animations with Motion
        </h3>

        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Bring your user interfaces to life with creative, beautifully
          crafted motion components, blocks, and templates.
        </p>
      </div>

      {/* Animation Area */}
      <div className="relative flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 w-full">

        {/* Lines */}
        <div className="absolute inset-x-4 top-0 h-px bg-zinc-200 dark:bg-zinc-800" />
        <div className="absolute inset-x-4 top-1/2 h-px bg-zinc-200 dark:bg-zinc-800" />
        <div className="absolute inset-x-4 bottom-0 h-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="relative w-full flex items-center justify-center">

          {/* SVG Path */}
          <svg
            viewBox="0 0 405 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[405px] h-auto text-black dark:text-white"
          >
            <path
              d="M0.728516 1.11438C42.4438 4.4697 84.159 22.105 125.863 69.3697C167.566 116.634 194.75 20.5854 261.5 29.5C325.938 38.1058 403.938 101.601 403.938 101.601"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeWidth="1.3"
            />

            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0.728515"
                y1="2.49043"
                x2="403.938"
                y2="100.224"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0.2" />
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0.6" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Moving SVG */}
          <motion.div
            className="absolute top-0 left-0"
            animate={{
              offsetDistance: ["0%", "88%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              offsetPath:
                'path("M 1 1 C 42.7153 4.35532 84.4305 21.9906 126.134 69.2553 C 167.838 116.52 195.021 20.471 261.771 29.3856 C 326.209 37.9914 404.21 101.486 404.21 101.486")',
            }}
          >
            <div className="relative scale-75 sm:scale-90 md:scale-100">

              {/* glow */}
              <div className="absolute inset-0 scale-125 rounded-full bg-black/10 dark:bg-white/10 blur-2xl" />

              {/* icon */}
              <svg
                viewBox="0 0 328 329"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative size-10 sm:size-12"
              >
                <rect y="0.5" width="328" height="328" rx="164" fill="#111" />
                <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="white" strokeWidth="20" />
                <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="white" strokeWidth="20" />
                <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="white" strokeWidth="20" />
                <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="white" strokeWidth="20" />
                <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="white" strokeWidth="20" />
                <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="white" strokeWidth="20" />
              </svg>

            </div>
          </motion.div>
        </div>

        {/* Side fade */}
        <div className="absolute -inset-y-6 left-0 w-[15%] bg-gradient-to-r from-white dark:from-black to-transparent" />
        <div className="absolute -inset-y-6 right-0 w-[15%] bg-gradient-to-l from-white dark:from-black to-transparent" />

      </div>
    </div>
  )
}