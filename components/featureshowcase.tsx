import Image from "next/image"

export default function FeatureShowcase() {
  return (
    <div className="flex flex-col justify-between h-1/2 gap-6 border-b border-r border-dotted border-zinc-300 dark:border-zinc-800 overflow-hidden pt-8 w-full bg-white dark:bg-black">

      {/* Text */}
      <div className="space-y-3.5 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Extended Shadcn UI Library: Component, Blocks & Templates
        </h3>

        <p className="text-zinc-500 dark:text-zinc-400 text-pretty">
          A comprehensive, fully customizable Shadcn UI library of component variants, blocks, & templates to speed up development.
        </p>
      </div>

      {/* Images */}
      <div className="relative flex h-40 sm:h-44 md:h-48 items-start justify-center px-4 sm:px-6 lg:px-8">

        {/* MAIN IMAGE (LIGHT = 8.png) */}
        <Image
          src="/8.png"
          alt="Light Mode UI"
          width={400}
          height={300}
          className="absolute w-[calc(100%-2rem)] max-w-72 sm:max-w-80 md:max-w-92 rounded-md border border-zinc-200 dark:hidden"
        />

        {/* MAIN IMAGE (DARK = 5.png) */}
        <Image
          src="/5.png"
          alt="Dark Mode UI"
          width={400}
          height={300}
          className="absolute hidden w-[calc(100%-2rem)] max-w-72 sm:max-w-80 md:max-w-92 rounded-md border border-zinc-700 dark:block"
        />

        {/* LEFT FLOATING */}
        <Image
          src="/4.png"
          alt="Left Floating Block"
          width={160}
          height={160}
          className="absolute bottom-2 left-1/2 w-20 sm:w-24 md:w-28 -translate-x-1/2 sm:-translate-x-40 md:-translate-x-58 -rotate-12 rounded-sm shadow-lg border border-zinc-200 dark:border-zinc-700"
        />

        {/* RIGHT FLOATING */}
        <Image
          src="/2.png"
          alt="Right Floating Block"
          width={160}
          height={160}
          className="absolute right-1/2 bottom-3 w-20 sm:w-24 md:w-28 translate-x-1/2 sm:translate-x-40 md:translate-x-58 rotate-12 rounded-sm shadow-lg border border-zinc-200 dark:border-zinc-700"
        />

      </div>
    </div>
  )
}