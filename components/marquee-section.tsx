"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"

const items = [
  { href: "/blocks/marketing-ui/hero-section", img: "1" },
  { href: "/blocks/marketing-ui/team-section", img: "2" },
  { href: "/blocks/marketing-ui/portfolio", img: "3" },
  { href: "/blocks/marketing-ui/about-us-page", img: "4" },
  { href: "/blocks/dashboard-and-application/dashboard-shell", img: "5" },
  { href: "/blocks/marketing-ui/blog-component", img: "6" },
  { href: "/blocks/marketing-ui/testimonials-component", img: "7" },
  { href: "/blocks/marketing-ui/pricing-component", img: "8" },
  { href: "/blocks/marketing-ui/contact-us-page", img: "9" },
  { href: "/blocks/marketing-ui/app-integration", img: "10" },
]

function MarqueeItem({ item }: any) {
  return (
    <Link href={item.href} className="mx-3">
      <Image
        src={`/${item.img}.png`}
        alt="block"
        width={260}
        height={160}
        className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto rounded-md border bg-white shadow-sm"
      />
    </Link>
  )
}

export default function MagicMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-white py-6"
    >

      {/* TOP ROW */}
      <Marquee pauseOnHover className="[--duration:40s]">
        {items.map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </Marquee>

      {/* BOTTOM ROW (reverse direction) */}
      <Marquee pauseOnHover reverse className="[--duration:45s]">
        {items.map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </Marquee>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

    </motion.div>
  )
}