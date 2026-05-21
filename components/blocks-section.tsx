"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const blocks = [
  {
    title: "eCommerce UI Blocks",
    desc: "Trending e-commerce blocks from product list to checkout, shopping cart, product overview and everything you need to build high-converting online store.",
    lightImg: "/01.png",
    darkImg: "/1.png",
  },
  {
    title: "Datatable UI Blocks",
    desc: "Enhance your app's data display with our powerful Datatable Blocks-perfect for organizing and visualizing complex datasets.",
    lightImg: "/4.png",
    darkImg: "/3.png",
  },
  {
    title: "Bento Grid UI Blocks",
    desc: "Create dynamic grid-based pages effortlessly using Bento Grid UI blocks, designed for a clean, organized display of content.",
    lightImg: "/6.png",
    darkImg: "/7.png",
  },
]

export default function UIBlocksSection() {
  const { theme } = useTheme()

  return (
    <div className="w-full bg-white dark:bg-black">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-7xl overflow-hidden border-b border-dashed border-gray-300 dark:border-white/10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3">

          {blocks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col justify-between border-r border-b border-dashed border-gray-300 dark:border-white/10 px-8 pt-8"
            >

              {/* HEADER */}
              <div className="mb-4 flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  {item.title}
                </h2>

                <div className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* DESC */}
              <p className="mb-6 leading-relaxed text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>

              {/* IMAGE (LIGHT / DARK SWITCH) */}
              <div className="relative mt-auto">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg border border-gray-300 dark:border-white/10">

                  {/* LIGHT IMAGE */}
                  <Image
                    src={item.lightImg}
                    alt={item.title}
                    fill
                    className="object-cover object-bottom dark:hidden"
                  />

                  {/* DARK IMAGE */}
                  <Image
                    src={item.darkImg}
                    alt={item.title}
                    fill
                    className="hidden object-cover object-bottom dark:block"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center py-10">
          <button className="group flex items-center gap-2 rounded-lg bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition hover:opacity-80">
            Explore all blocks
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

      </motion.div>
    </div>
  )
}