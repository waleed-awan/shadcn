import GridBackground from "./ui/grid-background"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { BorderBeam } from "./ui/border-beam"
import TypingText from "./Typingtext"
import Image from "next/image"
import HeroHeading from "./ui/Flipwords"
import AvatarHover from "./ui/avatarhover"

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 text-center">
      <GridBackground />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        {/* TOP BADGE */}
        <div className="relative mb-8 flex items-center gap-2 overflow-hidden rounded-full border bg-white px-4 py-1 text-sm shadow-sm">
          {/* BEAM (OUTSIDE TEXT FLOW) */}
          <BorderBeam duration={8} size={100} />

          <span className="rounded-2xl border border-black bg-black px-1.5 text-[12px] text-white">
            New
          </span>

          <span className="text-gray-800">
            🎉 Dashboard & Marketing UI Blocks, AI Theme Generator, Shadcn MCP &
            more... 🪄
          </span>
        </div>

        {/* MAIN HEADING */}
        <HeroHeading />

        {/* DESCRIPTION (2 lines like screenshot) */}
        <p className="mt-6 max-w-4xl text-xl text-gray-500">
          Accelerate your project development with ready-to-use, and fully
          customizable shadcn ui
        </p>

        <p className="mt-1 text-lg">
          <span className="font-medium text-black">
            Components, Blocks, UI Kits, Boilerplates, Templates and Themes
          </span>{" "}
          <span className="text-gray-500">with AI Tools ✨.</span>
        </p>

        {/* TAGLINE */}
        <TypingText />

        {/* SOCIAL PROOF ROW */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {/* AVATARS */}
          <AvatarHover />

          {/* STARS */}
          <div className="flex flex-col items-center gap-1">
            {/* SVG GRADIENT DEFINE */}
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f97316" /> {/* orange */}
                  <stop offset="100%" stopColor="#facc15" /> {/* yellow */}
                </linearGradient>
              </defs>
            </svg>

            {/* STARS */}
            <div className="flex items-center gap-1">
              {/* 4 FULL STARS */}
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
                {/* empty */}
                <Star className="absolute h-4 w-4 text-gray-300" />

                {/* half gradient */}
                <div className="absolute w-1/2 overflow-hidden">
                  <Star
                    className="h-4 w-4"
                    fill="url(#starGradient)"
                    stroke="url(#starGradient)"
                  />
                </div>
              </div>

              {/* rating */}
              <span className="ml-2 font-medium text-black">4.5</span>
            </div>

            {/* TEXT */}
            <p className="text-sm text-gray-500">Loved by industry creators</p>
          </div>

          {/* DIVIDER */}
          <div className="hidden h-6 w-px bg-gray-300 md:block" />

          {/* LOGOS */}
          <div className="flex items-center gap-5 text-gray-600">
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
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button className="rounded-xl bg-black px-8 py-6 text-lg text-white shadow-lg hover:bg-black/90">
            Get all access ✳
          </Button>

          <Button className="rounded-xl px-8 py-6 text-lg text-black">
            Explore more →
          </Button>
        </div>
      </div>
    </section>
  )
}
