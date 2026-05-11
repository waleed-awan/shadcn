"use client"

import GridBackground from "./ui/grid-background"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { BorderBeam } from "./ui/border-beam"
import TypingText from "./Typingtext"
import Image from "next/image"
import HeroHeading from "./ui/Flipwords"
import AvatarHover from "./ui/avatarhover"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-white">
      <GridBackground />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-start px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex w-full max-w-5xl flex-col items-center"
        >
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-8 flex flex-wrap items-center justify-center gap-2 overflow-hidden rounded-full border bg-white px-4 py-1 text-sm shadow-sm"
          >
            <BorderBeam duration={8} size={100} />

            <span className="rounded-2xl border border-black bg-black px-1.5 text-[12px] text-white">
              New
            </span>

            <span className="text-gray-800">
              🎉 Dashboard & Marketing UI Blocks, AI Theme Generator, Shadcn MCP
              & more... 🪄
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HeroHeading />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mt-6 max-w-4xl text-lg text-gray-500 sm:text-xl">
              Accelerate your project development with ready-to-use, and fully
              customizable shadcn ui
            </p>

            <p className="mt-1 text-base sm:text-lg">
              <span className="font-medium text-black">
                Components, Blocks, UI Kits, Boilerplates, Templates and Themes
              </span>{" "}
              <span className="text-gray-500">with AI Tools ✨.</span>
            </p>
          </motion.div>

          {/* TYPING TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <TypingText />
          </motion.div>

          {/* SOCIAL PROOF */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            <AvatarHover />

            {/* STARS */}
            <div className="flex flex-col items-center gap-1">
              {/* SVG GRADIENT */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </svg>

              {/* STARS */}
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill="url(#starGradient)"
                    stroke="url(#starGradient)"
                  />
                ))}

                {/* HALF STAR */}
                <div className="relative h-4 w-4">
                  <Star className="absolute h-4 w-4 text-gray-300" />

                  <div className="absolute w-1/2 overflow-hidden">
                    <Star
                      className="h-4 w-4"
                      fill="url(#starGradient)"
                      stroke="url(#starGradient)"
                    />
                  </div>
                </div>

                <span className="ml-2 font-medium text-black">4.5</span>
              </div>

              <p className="text-sm text-gray-500">
                Loved by industry creators
              </p>
            </div>

            {/* DIVIDER */}
            <div className="hidden h-6 w-px bg-gray-300 md:block" />

            {/* ICONS */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Image
                src="/hero-motion-icon.png"
                alt=""
                width={28}
                height={28}
              />
              <Image src="/hero-react-icon.png" alt="" width={28} height={28} />
              <Image
                src="/hero-radix-ui-icon.png"
                alt=""
                width={28}
                height={28}
              />
              <Image
                src="/hero-nextjs-icon.png"
                alt=""
                width={28}
                height={28}
              />
              <Image
                src="/hero-tailwindcss-icon.png"
                alt=""
                width={28}
                height={28}
              />
            </div>
          </motion.div>

          {/* BUTTONS */}
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
      </div>
    </section>
  )
}
