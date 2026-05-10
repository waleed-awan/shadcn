import GridBackground from "./ui/grid-background"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { BorderBeam } from "./ui/border-beam"
import TypingText from "./Typingtext"
import Image from "next/image"
import HeroHeading from "./ui/Flipwords"
import AvatarHover from "./ui/avatarhover"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-white">
      <GridBackground />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-start px-6 pt-32 pb-20 text-center">
        {/* INNER CONTENT WIDTH */}
        <div className="flex w-full max-w-5xl flex-col items-center">
          {/* TOP BADGE */}
          <div className="relative mb-8 flex flex-wrap items-center justify-center gap-2 overflow-hidden rounded-full border bg-white px-4 py-1 text-sm shadow-sm">
            {/* BEAM */}
            <BorderBeam duration={8} size={100} />

            <span className="rounded-2xl border border-black bg-black px-1.5 text-[12px] text-white">
              New
            </span>

            <span className="text-gray-800">
              🎉 Dashboard & Marketing UI Blocks, AI Theme Generator, Shadcn MCP
              & more... 🪄
            </span>
          </div>

          {/* MAIN HEADING */}
          <HeroHeading />

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-4xl text-lg text-gray-500 sm:text-xl">
            Accelerate your project development with ready-to-use, and fully
            customizable shadcn ui
          </p>

          <p className="mt-1 text-base sm:text-lg">
            <span className="font-medium text-black">
              Components, Blocks, UI Kits, Boilerplates, Templates and Themes
            </span>{" "}
            <span className="text-gray-500">with AI Tools ✨.</span>
          </p>

          {/* TAGLINE */}
          <TypingText />

          {/* SOCIAL PROOF */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {/* AVATARS */}
            <AvatarHover />

            {/* STARS */}
            <div className="flex flex-col items-center gap-1">
              {/* SVG GRADIENT */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </svg>

              {/* STARS */}
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill="url(#starGradient)"
                    stroke="url(#starGradient)"
                  />
                ))}

                {/* HALF STAR */}
                <div className="relative h-4 w-4">
                  <Star className="absolute h-4 w-4 text-gray-300" />

                  <div className="absolute w-1/2 overflow-hidden">
                    <Star
                      className="h-4 w-4"
                      fill="url(#starGradient)"
                      stroke="url(#starGradient)"
                    />
                  </div>
                </div>

                <span className="ml-2 font-medium text-black">4.5</span>
              </div>

              <p className="text-sm text-gray-500">
                Loved by industry creators
              </p>
            </div>

            {/* DIVIDER */}
            <div className="hidden h-6 w-px bg-gray-300 md:block" />

            {/* LOGOS */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-gray-600">
              <Image
                src="/hero-motion-icon.png"
                alt="motion"
                width={28}
                height={28}
              />

              <Image
                src="/hero-react-icon.png"
                alt="react"
                width={28}
                height={28}
              />

              <Image
                src="/hero-radix-ui-icon.png"
                alt="radix"
                width={28}
                height={28}
              />

              <Image
                src="/hero-nextjs-icon.png"
                alt="nextjs"
                width={28}
                height={28}
              />

              <Image
                src="/hero-motion-icon.png"
                alt="motion"
                width={28}
                height={28}
              />

              <Image
                src="/hero-tailwindcss-icon.png"
                alt="tailwind"
                width={28}
                height={28}
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-10">
            {/* BLACK BUTTON */}
            <Link
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#0d0d0d] px-6 py-3 text-base font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Hover Blur Light Overlay */}
              <span className="absolute inset-0 bg-gray-500 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Inner Glow Border */}
              <div className="pointer-events-none absolute inset-[3px] rounded-lg border-[1.5px] border-gray-400" />

              <span className="relative z-10">Get all access</span>

              {/* SVG */}
              <svg
                className="relative z-10"
                width="20"
                height="20"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.6734 24.8486V49.3899C63.6734 57.4589 57.1322 64.0001 49.0632 64.0001H25.2041"
                  stroke="currentColor"
                  strokeWidth="8.11681"
                />
                <path
                  d="M64.3266 103.152L64.3266 78.6106C64.3266 70.5416 70.8678 64.0003 78.9368 64.0003L102.796 64.0004"
                  stroke="currentColor"
                  strokeWidth="8.11681"
                />
                <line
                  x1="93.3468"
                  y1="35.6108"
                  x2="76.555"
                  y2="52.205"
                  stroke="currentColor"
                  strokeWidth="8.11681"
                />
                <line
                  x1="51.7697"
                  y1="77.0624"
                  x2="34.9778"
                  y2="93.6567"
                  stroke="currentColor"
                  strokeWidth="8.11681"
                />
                <line
                  x1="50.9584"
                  y1="51.3189"
                  x2="34.2651"
                  y2="34.6256"
                  stroke="currentColor"
                  strokeWidth="8.11681"
                />
                <line
                  x1="93.1625"
                  y1="93.6397"
                  x2="76.4692"
                  y2="76.9464"
                  stroke="currentColor"
                  strokeWidth="8.11681"
                />
              </svg>
            </Link>

            {/* WHITE BUTTON */}
            <Link
              href="#features"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gray-200 px-6 py-3 text-base font-medium text-black shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore more</span>

              <svg
                className="transition-transform duration-300 group-hover:translate-x-1"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12H19" />
                <path d="M12 5L19 12L12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
