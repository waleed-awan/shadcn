"use client"

import Image from "next/image"
import { BadgeCheck, Ellipsis } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const cards = [
  {
    name: "Shadcn",
    username: "@shadcn",
    image: "https://github.com/shadcn.png",
    text1: "Not a component library. A component distribution system.",
    text2: "Pull components from anywhere. Add code that looks like your own.",
  },
  {
    name: "Vercel",
    username: "@vercel",
    image: "https://github.com/vercel.png",
    text1: "Build fast, ship faster with the best developer experience.",
    text2: "Deploy instantly to our global edge network.",
  },
  {
    name: "Tailwind CSS",
    username: "@tailwindcss",
    image: "https://github.com/tailwindcss.png",
    text1: "Rapidly build modern websites without ever leaving your HTML.",
    text2: "A utility-first CSS framework packed with classes.",
  },
]

const OrbitAndCards = () => {
  const innerImages = ["/logo1.png", "/logo2.png", "/logo3.png"]

  const outerImages = [
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
    "/logo9.png",
  ]

  return (
    <>
      <section className="w-full overflow-hidden border-y border-dashed border-neutral-300 dark:border-zinc-800 bg-white dark:bg-black">
        <div className="mx-auto flex max-w-[1700px] flex-col lg:flex-row">

          {/* LEFT */}
          <div className="flex flex-1 border-b border-dashed border-neutral-300 dark:border-zinc-800 lg:border-r lg:border-b-0">

            {/* TEXT */}
            <div className="flex w-full max-w-[390px] flex-col justify-start px-10 py-14">
              <h2 className="text-[30px] leading-[1.15] font-semibold tracking-[-1px] text-black dark:text-white">
                Seamless Integration with any React stack
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-neutral-500 dark:text-neutral-400">
                Effortlessly integrate our components, blocks, templates, and
                themes into any React.js stack for a streamlined and efficient
                development experience.
              </p>
            </div>

            {/* ORBIT */}
            <div className="relative hidden flex-1 items-center justify-center lg:flex">
              <div className="relative flex h-[360px] w-[360px] items-center justify-center">

                {/* CENTER */}
                <div className="z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black dark:bg-white">
                  <Image
                    src="/logo1.png"
                    alt="center"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* INNER */}
                <OrbitingCircles radius={68} duration={20} path iconSize={34}>
                  {innerImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex h-full w-full items-center justify-center rounded-full border border-neutral-200 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                    >
                      <Image
                        src={img}
                        alt=""
                        width={14}
                        height={14}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </OrbitingCircles>

                {/* OUTER */}
                <OrbitingCircles
                  radius={145}
                  duration={35}
                  reverse
                  path
                  iconSize={38}
                >
                  {outerImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex h-full w-full items-center justify-center rounded-full border border-neutral-200 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                    >
                      <Image
                        src={img}
                        alt=""
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </OrbitingCircles>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 flex-col max-w-[460px] justify-between">

            {/* TEXT */}
            <div className="relative mt-8 px-5 py-14 gap-6 items-end justify-center overflow-hidden">

              <h3 className="text-[30px] leading-[1.15] font-semibold tracking-[-1px] text-black dark:text-white">
                Complete Code Ownership
              </h3>

              <p className="mt-6 text-[15px] text-neutral-500 dark:text-neutral-400">
                No hidden dependencies or vendor lock-in. Use trusted npm
                packages, install via shadcn ui CLI or copy-paste, and own
                your codebase.
              </p>

              {/* STACK CARDS */}
              <div className="relative h-[145px] px-5 py-14 gap-6 w-full max-w-[430px]">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`absolute inset-x-0 animate-stack-${index + 1}`}
                  >
                    <div className="rounded-[18px] border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-black/40">

                      <div className="space-y-3 p-4">

                        {/* TOP */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={card.image}
                              alt={card.name}
                              className="h-7 w-7 rounded-full object-cover"
                            />

                            <div>
                              <div className="flex items-center gap-1">
                                <h4 className="text-[13px] font-semibold text-black dark:text-white">
                                  {card.name}
                                </h4>

                                <BadgeCheck className="size-3 fill-sky-500 text-white" />
                              </div>

                              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                                {card.username}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <img
                              src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/grok-icon.png?width=16&format=auto"
                              alt="logo"
                              className="size-3"
                            />

                            <Ellipsis className="size-3 text-neutral-500 dark:text-neutral-400" />
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="space-y-2 text-[11px] leading-5 text-neutral-600 dark:text-neutral-400">
                          <p>{card.text1}</p>
                          <p>{card.text2}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS SAME (UNCHANGED) */}
      <style jsx>{`
        .animate-stack-1 {
          animation: stack1 6s infinite ease-in-out;
        }

        .animate-stack-2 {
          animation: stack2 6s infinite ease-in-out;
        }

        .animate-stack-3 {
          animation: stack3 6s infinite ease-in-out;
        }

        @keyframes stack1 {
          0%,100% { transform: translateY(0px) scale(1); z-index: 30; opacity: 1; }
          33% { transform: translateY(-12px) scale(0.95); z-index: 20; opacity: 0.9; }
          66% { transform: translateY(-24px) scale(0.9); z-index: 10; opacity: 0.75; }
        }

        @keyframes stack2 {
          0%,100% { transform: translateY(-12px) scale(0.95); z-index: 20; opacity: 0.9; }
          33% { transform: translateY(-24px) scale(0.9); z-index: 10; opacity: 0.75; }
          66% { transform: translateY(0px) scale(1); z-index: 30; opacity: 1; }
        }

        @keyframes stack3 {
          0%,100% { transform: translateY(-24px) scale(0.9); z-index: 10; opacity: 0.75; }
          33% { transform: translateY(0px) scale(1); z-index: 30; opacity: 1; }
          66% { transform: translateY(-12px) scale(0.95); z-index: 20; opacity: 0.9; }
        }
      `}</style>
    </>
  )
}

export default OrbitAndCards