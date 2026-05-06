"use client"

import { motion } from "framer-motion"

export function ScrollReveal({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}