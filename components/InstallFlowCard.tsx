
"use client"

import { Asterisk, FileText } from "lucide-react"

export default function InstallFlowCard() {
  return (
    <div className="w-full max-w-[430px] bg-white border-2 border-dotted border-gray-200     px-7 py-7">
      {/* Heading */}
      <div className="max-w-[340px]">
        <h3 className="text-[15px] leading-[1.35] font-semibold text-black">
          Install via Shadcn UI CLI or just copy-paste
        </h3>

        <p className="mt-4 text-[13px] leading-[1.7] text-zinc-500">
          Easily install anything into your app - Use CLI or simply copy-paste
          components, blocks, themes, & boilerplates directly into your project.
        </p>
      </div>

      {/* Flow Section */}
      <div className="relative mt-14 h-[130px] w-full">
        {/* Left Card */}
        <div className="absolute top-[46px] -left-6 z-20 flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            <Asterisk size={10} strokeWidth={3} />
          </div>

          <span className="text-[13px] font-medium text-black">Blocks</span>
        </div>

        {/* Right */}
        <div className="absolute top-[38px] -right-3 z-20 flex flex-col items-center">
          <FileText
            size={18}
            className="mb-1 text-zinc-500"
            strokeWidth={1.8}
          />

          <span className="text-[13px] font-medium text-zinc-500">
            Your Project
          </span>
        </div>

        {/* SVG FLOW WITH BEAM EFFECT */}
        <svg
          className="absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 420 130"
          fill="none"
        >
          {/* BASE GREY LINES */}
          <path d="M85 64 H330" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M145 64 V28" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M245 64 V28" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M190 64 V96" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M290 64 V96" stroke="#d4d4d8" strokeWidth="1.5" />

          {/* THIN SLOW BLACK BEAM */}
          <path
            d="M85 64 H330"
            stroke="#000"
            strokeWidth="1" // 👈 thinner
            strokeLinecap="round"
            strokeDasharray="25 300"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="400"
              to="-400"
              dur="9s" // 👈 very slow
              repeatCount="indefinite"
            />
          </path>

          {/* VERTICAL LINES (same style) */}
          {["M145 64 V28", "M245 64 V28", "M190 64 V96", "M290 64 V96"].map(
            (d, i) => (
              <path
                key={i}
                d={d}
                stroke="#000"
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

        {/* Top Labels */}
        <div className="absolute top-[8px] left-[115px] rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          CLI
        </div>

        <div className="absolute top-[8px] left-[204px] rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          V0
        </div>

        {/* Bottom Labels */}
        <div className="absolute bottom-[15px] left-[124px] rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          Copy Prompt
        </div>

        <div className="absolute bottom-[15px] left-[235px] rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          MCP
        </div>
      </div>
    </div>
  )
}
