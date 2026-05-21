"use client"

import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

type FlipWordsProps = Omit<React.ComponentProps<"span">, "children"> & {
  words: string[]
  duration?: number
  letterDelay?: number
  wordDelay?: number
}

function FlipWords({
  words,
  duration = 3000,
  letterDelay = 0.05,
  wordDelay = 0.3,
  className,
  ...props
}: FlipWordsProps) {
  const [currentWord, setCurrentWord] = React.useState(words[0])
  const [isAnimating, setIsAnimating] = React.useState(false)

  const startAnimation = React.useCallback(() => {
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length
    setCurrentWord(words[nextIndex])
    setIsAnimating(true)
  }, [currentWord, words])

  React.useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation()
      }, duration)

      return () => clearTimeout(timeout)
    }
  }, [isAnimating, duration, startAnimation])

  return (
    <span {...props}>
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 2,
            position: "absolute",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className={`inline-block px-2 ${className}`}
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              className="inline-block whitespace-nowrap"
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * wordDelay,
                duration: 0.3,
              }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${word}-${letterIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * wordDelay + letterIndex * letterDelay,
                    duration: 0.2,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <span>&nbsp;</span>
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function HeroHeading() {
  return (
    <h1 className="text-xl leading-[1.2] font-bold tracking-tight text-black dark:text-white md:text-4xl">
      Build Futuristic UIs with Shadcn{" "}

      <FlipWords
        words={["Themes", "Components", "Animations"]}
        className="
          relative inline-block px-1
          before:absolute before:-bottom-[4px] before:left-[2px]
          before:h-[5px] before:w-[97%]
          before:rotate-[1.2deg]
          before:rounded-[100%]
          before:border-b-2
          before:border-zinc-700 dark:before:border-zinc-300
          before:opacity-50

          after:absolute after:-bottom-2 after:left-0
          after:h-[6px] after:w-full
          after:rotate-[-1.5deg]
          after:rounded-[100%]
          after:border-b-[3px]
          after:border-black dark:after:border-white
          after:opacity-90
        "
      />

      <br />
      at Warp Speed ⚡
    </h1>
  )
}