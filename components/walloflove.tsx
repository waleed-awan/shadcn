"use client"

import React from "react"
import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reviews = [
  {
    name: "JD Solanki",
    handle: "@me_jd_solanki",
    img: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-28.png",
    content: (
      <>
        <p className="mb-3">
          Just found{" "}
          <span className="font-medium text-sky-600">@ShadcnStudio</span> 👀
        </p>

        <p className="mb-3">
          It fills the gap of missing customised demos which are not available in shadcn blocks or docs.
        </p>

        <p>
          E.g. pre-made user combobox which shows user avatar, email and name.
        </p>
      </>
    ),
  },
  {
    name: "Ali Bey",
    handle: "@alibey_10",
    img: "https://i.pravatar.cc/100?img=12",
    content: (
      <>
        <p className="mb-3">
          This is one of the few premium blocks that’s worth paying for.
        </p>
        <p>Beautiful UI & Great UX 👏🏻</p>
      </>
    ),
  },
  {
    name: "OrcDev",
    handle: "@orcdev",
    img: "https://i.pravatar.cc/100?img=15",
    content: (
      <>
        <p className="mb-3">Keep up the good work! 🔥</p>
        <p>Animations are top notch.</p>
      </>
    ),
  },
  {
    name: "Richard Thermo",
    handle: "@RThermo56",
    img: "https://i.pravatar.cc/100?img=22",
    content: (
      <>
        <p className="mb-3">Great work. You should be proud.</p>
        <p>Looking forward to new updates.</p>
      </>
    ),
  },
  {
    name: "Nour Rouas",
    handle: "@rouas_nour",
    img: "https://i.pravatar.cc/100?img=31",
    content: (
      <>
        <p className="mb-3">My SaaS tech stack:</p>
        <p>🧩 Components: Shadcn Studio</p>
        <p>🚀 Deploy: Vercel</p>
      </>
    ),
  },
]

function ReviewCard({
  name,
  handle,
  img,
  content,
}: {
  name: string
  handle: string
  img: string
  content: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-[380px] rounded-[26px] border border-[#e7e7e7] bg-[#fafafa] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 border border-gray-200">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>

          <div>
            <h4 className="text-[18px] font-semibold text-black">
              {name}
            </h4>
            <p className="text-[13px] text-gray-500">{handle}</p>
          </div>
        </div>

        <span className="text-[13px] text-gray-700">x.com</span>
      </div>

      {/* Content */}
      <div className="mt-5 text-[15px] leading-[1.7] text-gray-600">
        {content}
      </div>
    </motion.div>
  )
}

export default function WallOfLove() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden bg-white py-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto mb-10 max-w-3xl px-4 text-center"
      >
        <p className="text-sm font-medium text-gray-500">
          Testimonials
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-black">
          The Wall of Love
        </h2>

        <p className="mt-3 text-base text-gray-500">
          Here&apos;s what users say about us.
        </p>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-[1500px] justify-center gap-4 px-4"
      >
        <Marquee vertical pauseOnHover className="h-[780px] [--duration:35s]">
          {reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        <Marquee
          vertical
          reverse
          pauseOnHover
          className="hidden h-[780px] [--duration:40s] md:flex"
        >
          {reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        <Marquee
          vertical
          pauseOnHover
          className="hidden h-[780px] [--duration:45s] xl:flex"
        >
          {reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Fade overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </motion.div>
    </motion.section>
  )
}