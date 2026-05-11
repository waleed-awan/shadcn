"use client"

import InteractiveCard from "./interactive-card"
import { Caveat } from "next/font/google"
import { motion } from "framer-motion"

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
})

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function LandingSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full border-b border-dashed border-gray-300 py-10 flex items-center justify-center">
        <motion.div
          className="max-w-5xl text-center px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Copy Paste Label */}
          <motion.div variants={fadeUp} className="inline-block mb-8">
            <p className={`${caveat.className} text-lg text-gray-700`}>
              Ready-to-Use Templates
            </p>
            <div className="h-0.5 bg-black mt-1 w-full"></div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl leading-tight font-semibold tracking-tight text-black whitespace-nowrap"
          >
            Explore{" "}
            <span className="relative inline-block">
              10+ Premium
              <svg
                className="absolute left-2 right-2 -bottom-3 w-[calc(100%-16px)]"
                height="20"
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
            </span>{" "}
            Shadcn UI Templates
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            Quickly build stunning web interfaces - from landing pages and marketing sites to e-commerce and dashboards with unlimited theme options.
          </motion.p>
        </motion.div>
      </section>

      {/* CARDS SECTION */}
      <section className="w-full pt-5 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[0.6fr_1.4fr] items-center gap-7">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-4 font-semibold text-black">
              Landing Pages
            </h2>

            <p className="text-gray-600 max-w-md">
              Engaging landing pages designed to convert, tailored for any business or personal project.
            </p>

            <ul className="space-y-2 text-gray-600 mt-3">
              <li>• Creative motion to enhance user interaction and engagement.</li>
              <li>• Fully customizable with multiple theme support.</li>
            </ul>

            <button className="mt-4 px-5 py-2.5 text-black bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center gap-2 text-lg">
              Explore more →
            </button>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            className="flex gap-8 cursor-pointer overflow-x-auto pb-4"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <InteractiveCard leftImg="/landing1.png" rightImg="/landing01.png" />
            <InteractiveCard leftImg="/landing2.png" rightImg="/landing02.png" />
            <InteractiveCard leftImg="/landing3.png" rightImg="/landing03.png" />
          </motion.div>

        </div>
      </section>
    </>
  )
}