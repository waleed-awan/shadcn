"use client"

import Image from "next/image"

const showcaseImages = [
  {
    alt: "Portfolio",
    src: "https://cdn.shadcnstudio.com/ss-assets/landing-page/figma-column-1-light.png?width=390&format=auto",
  },
  {
    alt: "Dashboard",
    src: "https://cdn.shadcnstudio.com/ss-assets/landing-page/figma-column-2-light.png?width=390&format=auto",
  },
  {
    alt: "Bento Grid",
    src: "https://cdn.shadcnstudio.com/ss-assets/landing-page/figma-column-3-light.png?width=390&format=auto",
  },
]

export default function FigmaColumnsShowcase() {
  return (
    <div className="relative flex items-end justify-center gap-4 overflow-hidden bg-white px-4 pt-6 sm:gap-6 sm:px-6 md:gap-7.5 lg:gap-8 lg:px-8 xl:gap-9">

      {showcaseImages.map((item, index) => (
        <div
          key={index}
          className="relative transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={390}
            height={700}
            className="max-w-56 origin-bottom rounded-t-md border border-gray-300 border-b-0 sm:max-w-68.5 md:max-w-74.25 lg:max-w-86 xl:max-w-98"
          />
        </div>
      ))}

      {/* WHITE GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-[23%] bg-gradient-to-b from-transparent to-white" />
    </div>
  )
}