"use client"

import { motion } from "framer-motion"
import InteractiveCard from "./interactive-card"

export default function FrontendSection() {
  return (
    <>
      {/* CARDS SECTION */}
      <section className="w-full border-y border-dotted border-gray-300 bg-white px-4 py-5 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[0.6fr_1.4fr]">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full"
          >
            <h2 className="mb-4 text-2xl font-semibold text-black sm:text-3xl">
              Frontend Templates
            </h2>

            <p className="max-w-md text-sm text-gray-600 sm:text-base">
              Ready-to-use frontend templates for eCommerce, agencies, LMS, and
              more - all-in-one solutions.
            </p>

            <ul className="mt-3 space-y-2 text-sm text-gray-600 sm:text-base">
              <li>
                • Multi-page, fully functional templates with real-use UX.
              </li>
              <li>• Easily integrates with our dashboard templates.</li>
            </ul>

            <button className="mt-4 flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-base text-black transition hover:bg-gray-200 sm:text-lg">
              Explore more →
            </button>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex cursor-pointer gap-5 overflow-x-auto pb-4 sm:gap-6 md:gap-8"
          >
            <InteractiveCard
              leftImg="/landing3.png"
              rightImg="/landing03.png"
            />

            <InteractiveCard
              leftImg="/landing2.png"
              rightImg="/landing02.png"
            />

            <InteractiveCard
              leftImg="/landing1.png"
              rightImg="/landing01.png"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}