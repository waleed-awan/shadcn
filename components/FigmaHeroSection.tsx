"use client"

import Image from "next/image"
import { CircleArrowUp } from "lucide-react"

export default function DashboardApplicationBlock() {
  return (
    <div className="group flex h-full flex-col justify-between gap-10 bg-white">
      
      {/* TEXT SECTION */}
      <div className=" px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-black">
            Dashboard & Application Blocks
          </h3>

          <button className="hidden size-7 items-center justify-center rounded-full bg-black text-white transition-all group-hover:inline-flex hover:bg-black/80">
            <CircleArrowUp className="size-4.5 rotate-45" />
            <span className="sr-only">Redirect Link</span>
          </button>
        </div>

        <p className="text-pretty text-gray-600">
          Build intuitive dashboards and web apps with pre-designed blocks that
          fit your needs-ready to use and easy to customize.
        </p>
      </div>

      {/* IMAGE SECTION */}
      <div className="
        relative flex items-start justify-center overflow-hidden bg-white
        gap-3 sm:gap-6
        h-28 sm:h-32 md:h-36 lg:h-38
      ">

        {/* LEFT */}
        <Image
          src="/1.png"
          alt="Dashboard 1"
          width={294}
          height={200}
          className="
            absolute right-1/2
            w-28 sm:w-40 md:w-56 lg:w-75
            -translate-x-6 sm:-translate-x-20 md:-translate-x-32 lg:-translate-x-43.5
            translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-5
            rounded-md border border-gray-200 shadow-sm
          "
        />

        {/* CENTER (BIGGEST) */}
        <Image
          src="/8.png"
          alt="Dashboard 2"
          width={294}
          height={200}
          className="
            w-32 sm:w-48 md:w-64 lg:w-75
            rounded-md border border-gray-200 shadow-sm
            z-10
          "
        />

        {/* RIGHT */}
        <Image
          src="/4.png"
          alt="Dashboard 3"
          width={294}
          height={200}
          className="
            absolute left-1/2
            w-28 sm:w-40 md:w-56 lg:w-75
            translate-x-6 sm:translate-x-20 md:translate-x-32 lg:translate-x-43.5
            translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-5
            rounded-md border border-gray-200 shadow-sm
          "
        />

        {/* ARROWS (same positioning but responsive safe) */}
        <Arrow className="top-8 sm:top-10 md:top-12 lg:top-14 left-1/2 -translate-x-1/2 sm:-translate-x-10 md:-translate-x-20 lg:-translate-x-43.5" />
        <Arrow className="bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 sm:-translate-x-10 md:-translate-x-20 lg:-translate-x-43.5" />

        <Arrow className="top-8 sm:top-10 md:top-12 lg:top-14 right-1/2 translate-x-1/2 sm:translate-x-10 md:translate-x-20 lg:translate-x-43.5" />
        <Arrow className="bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 right-1/2 translate-x-1/2 sm:translate-x-10 md:translate-x-20 lg:translate-x-43.5" />

        {/* GRADIENTS */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}

/* Arrow helper */
function Arrow({ className = "" }) {
  return (
    <div className={`absolute ${className}`}>
      <svg
        width="22"
        height="8"
        viewBox="0 0 22 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
      >
        <path
          d="M5 3L0 0.613249V6.38675L5 4V3ZM17 4L22 6.38675V0.613249L17 3V4ZM4.5 3.5V4H17.5V3.5V3H4.5V3.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}