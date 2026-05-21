"use client"

import { Asterisk, FileText } from "lucide-react"

export default function InstallFlowCard() {
  return (
    <div className="w-full max-w-[430px] bg-white dark:bg-black border-b border-dotted border-zinc-300 dark:border-zinc-800 px-7 py-7">

      {/* Heading */}
      <div className="max-w-[340px]">
        <h3 className="text-[15px] leading-[1.35] font-semibold text-black dark:text-white">
          Install via Shadcn UI CLI or just copy-paste
        </h3>

        <p className="mt-4 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400">
          Easily install anything into your app - Use CLI or simply copy-paste
          components, blocks, themes, & boilerplates directly into your project.
        </p>
      </div>

      {/* Flow Section */}
      <div className="relative mt-14 h-[130px] w-full">

        {/* Left Card */}
        <div className="absolute top-[46px] -left-6 z-20 flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 shadow-sm">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
            <Asterisk size={10} strokeWidth={3} />
          </div>

          <span className="text-[13px] font-medium text-black dark:text-white">
            Blocks
          </span>
        </div>

        {/* Right Card */}
        <div className="absolute top-[38px] -right-3 z-20 flex flex-col items-center">
          <FileText
            size={18}
            className="mb-1 text-zinc-500 dark:text-zinc-400"
            strokeWidth={1.8}
          />

          <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">
            Your Project
          </span>
        </div>

        {/* SVG FLOW */}
        <svg
          className="absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 420 130"
          fill="none"
        >

          {/* BASE GREY LINES */}
          <path d="M85 64 H330" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.5" />
          <path d="M145 64 V28" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.5" />
          <path d="M245 64 V28" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.5" />
          <path d="M190 64 V96" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.5" />
          <path d="M290 64 V96" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeWidth="1.5" />

          {/* BEAM ANIMATION */}
          <path
            d="M85 64 H330"
            stroke="currentColor"
            className="text-black dark:text-white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="25 300"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="400"
              to="-400"
              dur="9s"
              repeatCount="indefinite"
            />
          </path>

          {/* VERTICAL LINES */}
          {["M145 64 V28", "M245 64 V28", "M190 64 V96", "M290 64 V96"].map(
            (d, i) => (
              <path
                key={i}
                d={d}
                stroke="currentColor"
                className="text-black dark:text-white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="15 120"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="250"
                  to="-250"
                  dur="9s"
                  repeatCount="indefinite"
                />
              </path>
            )
          )}
        </svg>

        {/* Labels */}
        <div className="absolute top-[8px] left-[115px] rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-[2px] text-[11px] font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
          CLI
        </div>

        <div className="absolute top-[8px] left-[204px] rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-[2px] text-[11px] font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
          V0
        </div>

        <div className="absolute bottom-[15px] left-[124px] rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-[2px] text-[11px] font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
          Copy Prompt
        </div>

        <div className="absolute bottom-[15px] left-[235px] rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-[2px] text-[11px] font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
          MCP
        </div>

      </div>
    </div>
  )
}