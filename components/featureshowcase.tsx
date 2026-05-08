import Image from "next/image";

export default function FeatureShowcase() {
  return (
    <div className="flex flex-col justify-between h-1/2 gap-6 border-y-2 border-dotted border-gray-200 overflow-hidden pt-8 w-full">

      {/* Text */}
      <div className="space-y-3.5 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl text-black font-semibold">
          Extended Shadcn UI Library: Component, Blocks & Templates
        </h3>
        <p className="text-muted-foreground text-pretty">
          A comprehensive, fully customizable Shadcn UI library of component variants, blocks, & templates to speed up development.
        </p>
      </div>

      {/* Images */}
      <div className="relative flex h-40 sm:h-44 md:h-48 items-start justify-center px-4 sm:px-6 lg:px-8">

        {/* MAIN IMAGE */}
        <Image
          src="/5.png"
          alt="Main UI Block"
          width={400}
          height={300}
          className="absolute w-[calc(100%-2rem)] max-w-72 sm:max-w-80 md:max-w-92 rounded-md border dark:hidden"
        />

        <Image
          src="/8.png"
          alt="Main UI Block Dark"
          width={400}
          height={300}
          className="absolute hidden w-[calc(100%-2rem)] max-w-72 sm:max-w-80 md:max-w-92 rounded-md border-[1px] border-gray-300 dark:inline-block"
        />

        {/* LEFT FLOATING (INCREASED SIZE) */}
        <Image
          src="/4.png"
          alt="Left Floating Block"
          width={160}
          height={160}
          className="absolute bottom-2 left-1/2 w-20 sm:w-24 md:w-28 -translate-x-1/2 sm:-translate-x-40 md:-translate-x-58 -rotate-12 rounded-sm shadow-lg dark:hidden"
        />

        <Image
          src="/2.png"
          alt="Left Floating Block Dark"
          width={160}
          height={160}
          className="absolute bottom-2 left-1/2 hidden w-20 sm:w-24 md:w-28 -translate-x-1/2 sm:-translate-x-40 md:-translate-x-58 -rotate-12 rounded-sm shadow-lg border border-gray-300 dark:inline-block"
        />

        {/* RIGHT FLOATING (INCREASED SIZE) */}
        <Image
          src="/2.png"
          alt="Right Floating Block"
          width={160}
          height={160}
          className="absolute right-1/2 bottom-3 w-20 sm:w-24 md:w-28 translate-x-1/2 sm:translate-x-40 md:translate-x-58 rotate-12 rounded-sm shadow-lg dark:hidden"
        />

        <Image
          src="/2.png"
          alt="Right Floating Block Dark"
          width={160}
          height={160}
          className="absolute right-1/2 bottom-3 hidden w-20 sm:w-24 md:w-28 translate-x-1/2 sm:translate-x-40 md:translate-x-58 rotate-12 rounded-sm shadow-lg border border-gray-300 dark:inline-block"
        />

      </div>
    </div>
  );
}