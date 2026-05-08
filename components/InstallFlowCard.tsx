"use client";

import { Asterisk, FileText } from "lucide-react";

export default function InstallFlowCard() {
  return (
    <div className="w-full max-w-[430px] bg-white border-2 border-dotted border-gray-200 px-5 sm:px-7 py-6 sm:py-7 mx-auto">

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
      <div className="relative mt-10 sm:mt-14 h-[110px] sm:h-[130px] w-full">

        {/* Left Card */}
        <div className="absolute top-[46px] -left-2 sm:-left-6 z-20 flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)] scale-90 sm:scale-100">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            <Asterisk size={10} strokeWidth={3} />
          </div>

          <span className="text-[13px] font-medium text-black">Blocks</span>
        </div>

        {/* Right */}
        <div className="absolute top-[38px] -right-1 sm:-right-3 z-20 flex flex-col items-center scale-90 sm:scale-100">
          <FileText
            size={18}
            className="mb-1 text-zinc-500"
            strokeWidth={1.8}
          />
          <span className="text-[13px] font-medium text-zinc-500">
            Your Project
          </span>
        </div>

        {/* SVG FLOW */}
        <svg
          className="absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 420 130"
          fill="none"
        >
          {/* BASE LINES */}
          <path d="M85 64 H330" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M145 64 V28" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M245 64 V28" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M190 64 V96" stroke="#d4d4d8" strokeWidth="1.5" />
          <path d="M290 64 V96" stroke="#d4d4d8" strokeWidth="1.5" />

          {/* HORIZONTAL BEAM */}
          <path
            d="M85 64 H330"
            stroke="#000"
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

          {/* VERTICAL BEAMS */}
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

        {/* TOP LABELS */}
        <div className="absolute top-[8px] left-[90px] sm:left-[115px] scale-90 sm:scale-100 rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          CLI
        </div>

        <div className="absolute top-[8px] left-[175px] sm:left-[204px] scale-90 sm:scale-100 rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          V0
        </div>

        {/* BOTTOM LABELS */}
        <div className="absolute bottom-[15px] left-[95px] sm:left-[124px] scale-90 sm:scale-100 rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          Copy Prompt
        </div>

        <div className="absolute bottom-[15px] left-[190px] sm:left-[235px] scale-90 sm:scale-100 rounded-md border border-zinc-200 bg-white px-2 py-[2px] text-[11px] font-medium text-zinc-600 shadow-sm">
          MCP
        </div>

      </div>
    </div>
  );
}