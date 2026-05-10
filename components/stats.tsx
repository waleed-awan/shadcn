"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Caveat } from "next/font/google"

import { FaGithub, FaUsers } from "react-icons/fa"
import { BsGrid3X3Gap } from "react-icons/bs"
import { HiOutlineSquares2X2 } from "react-icons/hi2"

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
})

function Counter({
  end,
  suffix = "",
  duration = 4000,
  startAnimation,
}: {
  end: number
  suffix?: string
  duration?: number
  startAnimation: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, startAnimation])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-150px",
  })

  const stats = [
    {
      icon: FaGithub,
      value: 1537,
      label: "GitHub Stars",
      suffix: "",
    },
    {
      icon: BsGrid3X3Gap,
      value: 1000,
      label: "Component Variants",
      suffix: "+",
    },
    {
      icon: HiOutlineSquares2X2,
      value: 700,
      label: "Blocks",
      suffix: "+",
    },
    {
      icon: FaUsers,
      value: 3500,
      label: "Figma Plugin Users",
      suffix: "+",
    },
  ]

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden  bg-white"
    >
      {/* TOP SECTION */}
      <div className="border-b border-dashed border-gray-300 px-4 py-14 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* SMALL TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 flex flex-col items-center"
          >
            <span
              className={`${caveat.className} text-[28px] text-black sm:text-[28px]`}
            >
              Stats
            </span>

            <div className="h-0.5 w-14 bg-black" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-end justify-center gap-2 text-center sm:gap-3"
          >
            {/* shadcn/studio */}
            <div className="relative inline-block">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
                shadcn/studio
              </h2>

              {/* UNDERLINE */}
              <svg
                className="absolute right-2 -bottom-4 left-2 w-[calc(100%-16px)]"
                height="18"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15 C 70 5, 230 5, 295 15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Impact */}
            <span className="text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
              Impact
            </span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base text-gray-500 sm:text-lg"
          >
            Celebrating the milestones achieved with shadcn/studio.
          </motion.p>
        </motion.div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 border-dashed border-gray-300 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="flex min-h-[250px] flex-col items-center justify-center border-r border-b border-dashed border-gray-300 px-5 py-10 text-center last:border-r-0 sm:min-h-[280px]"
            >
              {/* ICON */}
              <Icon className="mb-6 text-[32px] text-gray-500" />

              {/* NUMBER */}
              <h3 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                <Counter
                  end={item.value}
                  suffix={item.suffix}
                  startAnimation={isInView}
                />
              </h3>

              {/* LABEL */}
              <p className="mt-4 text-lg text-gray-500 sm:text-xl">
                {item.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}