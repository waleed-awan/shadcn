"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const blocks = [
  {
    title: "eCommerce UI Blocks",
    desc: "Trending e-commerce blocks from product list to checkout, shopping cart, product overview and everything you need to build high-converting online store.",
    img: "/01.png",
  },
  {
    title: "Datatable UI Blocks",
    desc: "Enhance your app's data display with our powerful Datatable Blocks-perfect for organizing and visualizing complex datasets.",
    img: "/ecommerce-light.png",
  },
  {
    title: "Bento Grid UI Blocks",
    desc: "Create dynamic grid-based pages effortlessly using Bento Grid UI blocks, designed for a clean, organized display of content.",
    img: "/datatable-light.png",
  },
]

export default function UIBlocksSection() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden border-b border-dashed border-gray-300">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col justify-between border-r border-b border-dashed border-gray-300 px-8 pt-8 ${i === blocks.length - 1 ? "border-r-0" : ""} `}
            >
              {/* HEADER + ARROW */}
              <div className="mb-4 flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-black">
                  {item.title}
                </h2>

                <div className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mb-6 leading-relaxed text-gray-500">{item.desc}</p>

              {/* IMAGE */}
              <div className="relative mt-auto">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg border border-gray-300 border-b-0">
  <Image
    src={item.img}
    alt={item.title}
    fill
    className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-110"
  />
</div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 CENTER BUTTON */}
        <div className="flex justify-center py-10">
          <button className="group flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-80">
            Explore all blocks
            <ArrowUpRight
              size={16}
              className="relative -top-[2px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
