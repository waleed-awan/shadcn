"use client"

import { useEffect, useState } from "react"
import { Menu, Search, Moon, Palette } from "lucide-react"
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6"

import { Sidebar } from "./sidebar"
import { SearchModal } from "./search-modal"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // 🔥 COMMON BUTTON STYLE
  const btn =
    "cursor-pointer flex items-center justify-center transition-all duration-200 ease-out hover:scale-105 active:scale-95"

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="flex items-center justify-between border-b border-white/20 bg-white/30 px-3 sm:px-5 py-3 sm:py-4 shadow-sm backdrop-blur-xl">

          {/* LEFT */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* LOGO */}
            <div className={`${btn} size-9 sm:size-10 rounded-full bg-black`}>
              <div className="relative size-3 sm:size-4">
                <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-white" />
                <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-white" />
                <span className="absolute top-1/2 left-1/2 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute top-1/2 left-1/2 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
              </div>
            </div>

            {/* TEXT */}
            <h1 className="hidden sm:block cursor-pointer text-lg sm:text-xl font-semibold text-black">
              shadcn/studio
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* MENU */}
            <button
              onClick={() => setOpen(true)}
              className={`${btn} size-8 sm:size-9 rounded-xl border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md`}
            >
              <Menu className="size-4 text-black" />
            </button>

            {/* SEARCH */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`${btn} size-8 sm:size-9 rounded-xl border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md`}
            >
              <Search className="size-4 text-black" />
            </button>

            {/* DARK MODE */}
            <button
              className={`${btn} hidden sm:flex size-9 rounded-xl border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md`}
            >
              <Moon className="size-4 text-black" />
            </button>

            {/* THEME (GRADIENT BORDER) */}
            <div className="p-[1.5px] rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
              <button
                className={`${btn} size-8 sm:size-9 rounded-xl bg-black hover:scale-110 hover:shadow-lg`}
              >
                <Palette className="size-4 text-white" />
              </button>
            </div>

            {/* DIVIDER */}
            <div className="hidden sm:block mx-1 h-6 w-px bg-zinc-300/50" />

            {/* SOCIALS */}
            <div className="hidden md:flex items-center gap-2">
              <button className={`${btn} size-8 rounded-lg border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white`}>
                <FaGithub className="text-black fill-black" />
              </button>

              <button className={`${btn} size-8 rounded-lg border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white`}>
                <FaXTwitter className="text-black fill-black" />
              </button>

              <button className={`${btn} size-8 rounded-lg border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white`}>
                <FaDiscord className="text-black fill-black" />
              </button>
            </div>

            {/* SIGN IN (ALWAYS VISIBLE) */}
            <button className="cursor-pointer text-black px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border border-zinc-200 bg-white/70 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white hover:shadow-md active:scale-95">
              Sign in
            </button>

            {/* GET ACCESS (DESKTOP ONLY) */}
            <button className="hidden md:block cursor-pointer px-5 py-2 text-sm rounded-xl border border-zinc-800 bg-black text-white transition-all duration-200 hover:scale-105 hover:opacity-90 hover:shadow-lg active:scale-95">
              Get all access ✳
            </button>

          </div>
        </div>
      </header>

      {/* spacing */}
      <div className="h-16 sm:h-20" />

      {/* SIDEBAR */}
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />

      {/* SEARCH MODAL */}
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </>
  )
}