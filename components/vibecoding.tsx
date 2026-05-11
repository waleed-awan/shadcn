"use client"

import { BorderBeam } from "@/components/ui/border-beam"

export default function MCPServerCard() {
  return (
    <div className="flex flex-1 flex-col justify-between gap-12 overflow-hidden px-4 pt-8 pb-12 sm:px-6 md:max-lg:w-1/2 md:max-lg:gap-6 md:max-lg:pb-4.5 lg:px-8">

      {/* TEXT SECTION */}
      <div className="space-y-3.5">
        <h3 className="text-xl font-semibold">MCP Server</h3>

        <p className="text-muted-foreground text-pretty">
          Seamlessly integrates into your favorite IDE,
          generating stunning components, blocks, and pages
          by leveraging shadcn/studio premium components.
        </p>
      </div>

      {/* VISUAL SECTION */}
      <div className="relative flex shrink-0 flex-col items-center pb-6">

        {/* TOP ICON CLUSTER */}
        <div className="relative z-10">
          <span className="bg-background flex items-center gap-1 rounded-full border border-gray-200 p-2.5">

            {/* LEFT ICON */}
            <span className="bg-card flex size-11.5 items-center justify-center rounded-full border border-gray-200">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 328 329"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
              >
                <rect width="328" height="328" rx="164" fill="black" />

                <path
                  d="M165 72V132C165 152 149 168 129 168H70"
                  stroke="white"
                  strokeWidth="20"
                />

                <path
                  d="M166 265V204C166 184 182 168 202 168H261"
                  stroke="white"
                  strokeWidth="20"
                />
              </svg>
            </span>

            {/* PLUS ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>

            {/* RIGHT ICON */}
            <span className="bg-card flex size-11.5 items-center justify-center rounded-full border border-gray-200">
              <img
                alt="MCP Icon"
                className="size-8 dark:invert"
                src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/mcp-icon.png?width=32&format=auto"
              />
            </span>
          </span>
        </div>

        {/* CONNECTOR LINES + BEAMS */}
        <div className="absolute top-[68px] h-[180px] w-full max-w-[420px]">

          {/* SVG LINES */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 420 180"
            fill="none"
          >
            {/* Main Vertical */}
            <path
              d="M210 0V72"
              stroke="#D4D4D4"
              strokeWidth="1.5"
            />

            {/* Horizontal */}
            <path
              d="M70 72H350"
              stroke="#D4D4D4"
              strokeWidth="1.5"
            />

            {/* Bottom Verticals */}
            <path
              d="M70 72V122"
              stroke="#D4D4D4"
              strokeWidth="1.5"
            />

            <path
              d="M163 72V122"
              stroke="#D4D4D4"
              strokeWidth="1.5"
            />

            <path
              d="M257 72V122"
              stroke="#D4D4D4"
              strokeWidth="1.5"
            />

            <path
              d="M350 72V122"
              stroke="#D4D4D4"
              strokeWidth="1.5"
            />
          </svg>

          {/* TOP VERTICAL BEAM */}
          <div className="absolute left-1/2 top-0 h-[72px] w-[2px] -translate-x-1/2 overflow-hidden">
            <BorderBeam
              size={100}
              duration={2}
              className="from-transparent via-black to-transparent"
            />
          </div>

          {/* HORIZONTAL BEAM */}
          <div className="absolute left-[70px] top-[71px] h-[2px] w-[280px] overflow-hidden">
            <BorderBeam
              size={200}
              duration={3}
              className="from-transparent via-black to-transparent"
            />
          </div>

          {/* LEFT VERTICAL */}
          <div className="absolute left-[69px] top-[72px] h-[50px] w-[2px] overflow-hidden">
            <BorderBeam
              size={80}
              duration={2}
              delay={0.2}
              className="from-transparent via-black to-transparent"
            />
          </div>

          {/* CENTER LEFT VERTICAL */}
          <div className="absolute left-[162px] top-[72px] h-[50px] w-[2px] overflow-hidden">
            <BorderBeam
              size={80}
              duration={2}
              delay={0.4}
              className="from-transparent via-black to-transparent"
            />
          </div>

          {/* CENTER RIGHT VERTICAL */}
          <div className="absolute left-[256px] top-[72px] h-[50px] w-[2px] overflow-hidden">
            <BorderBeam
              size={80}
              duration={2}
              delay={0.6}
              className="from-transparent via-black to-transparent"
            />
          </div>

          {/* RIGHT VERTICAL */}
          <div className="absolute left-[349px] top-[72px] h-[50px] w-[2px] overflow-hidden">
            <BorderBeam
              size={80}
              duration={2}
              delay={0.8}
              className="from-transparent via-black to-transparent"
            />
          </div>
        </div>

        {/* BOTTOM ROW ICONS */}
        <div className="relative z-10 mt-28 flex items-center gap-5 sm:gap-7.5">

          <span className="bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <img
              src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/cline-icon.png?width=34&format=auto"
              className="size-8.5 dark:invert"
            />
          </span>

          <span className="bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <img
              src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/vs-code-icon.png?width=34&format=auto"
              className="size-8.5"
            />
          </span>

          <span className="bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <img
              src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/cursor-icon.png?width=34&format=auto"
              className="size-8.5 dark:invert"
            />
          </span>

          <span className="bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <img
              src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/windsurf-icon.png?width=34&format=auto"
              className="size-8.5 dark:invert"
            />
          </span>

        </div>
      </div>
    </div>
  )
}