"use client"

import { useEffect, useState } from "react"
import { Menu, Search, Moon } from "lucide-react"
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

  const btn =
    "cursor-pointer flex items-center justify-center transition-all duration-200 ease-out hover:scale-105 active:scale-95"

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full">
        {/* OUTER WRAPPER */}
        <div className="w-full border-b border-white/20 bg-white/30 backdrop-blur-xl">
          
          {/* CONTAINER */}
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-5">
            
            {/* LEFT */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* LOGO */}
              <div
                className={`${btn} size-9 overflow-hidden rounded-full sm:size-10`}
              >
                <svg
                  viewBox="0 0 328 329"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-full"
                >
                  <rect
                    y="0.5"
                    width="328"
                    height="328"
                    rx="164"
                    fill="black"
                  />

                  <path
                    d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <path
                    d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="238.136"
                    y1="98.8184"
                    x2="196.76"
                    y2="139.707"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="135.688"
                    y1="200.957"
                    x2="94.3128"
                    y2="241.845"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="133.689"
                    y1="137.524"
                    x2="92.5566"
                    y2="96.3914"
                    stroke="white"
                    strokeWidth="20"
                  />

                  <line
                    x1="237.679"
                    y1="241.803"
                    x2="196.547"
                    y2="200.671"
                    stroke="white"
                    strokeWidth="20"
                  />
                </svg>
              </div>

              {/* TEXT */}
              <h1 className="hidden cursor-pointer text-lg font-semibold text-black sm:block sm:text-xl">
                shadcn/studio
              </h1>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-1 sm:gap-2">
              
              {/* MENU */}
              <button
                onClick={() => setOpen(true)}
                className={`${btn} size-8 rounded-sm border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md sm:size-9`}
              >
                <Menu className="size-4 text-black" />
              </button>

              {/* SEARCH */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`${btn} size-8 rounded-sm border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md sm:size-9`}
              >
                <Search className="size-4 text-black" />
              </button>

              {/* DARK MODE */}
              <button
                className={`${btn} hidden size-9 rounded-sm border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md sm:flex`}
              >
                <Moon className="size-4 text-black" />
              </button>

              {/* DIVIDER */}
              <div className="mx-1 hidden h-6 w-px bg-zinc-300/50 sm:block" />

              {/* SOCIALS */}
              <div className="hidden items-center gap-2 md:flex">
                <button className={`${btn} size-8`}>
                  <FaGithub className="size-5 fill-black text-black" />
                </button>

                <button className={`${btn} size-8`}>
                  <FaXTwitter className="size-5 fill-black text-black" />
                </button>

                <button className={`${btn} size-8`}>
                  <FaDiscord className="size-5 fill-black text-black" />
                </button>
              </div>

              {/* SIGN IN */}
              <button className="cursor-pointer rounded-sm border border-zinc-200 bg-white/70 px-2 py-1.5 text-xs text-black backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white hover:shadow-md active:scale-95 sm:px-4 sm:py-2 sm:text-sm">
                Sign in
              </button>

              {/* GET ACCESS */}
              <button className="hidden cursor-pointer items-center gap-2 rounded-sm border border-zinc-800 bg-black px-5 py-2 text-sm text-white transition-all duration-200 hover:scale-105 hover:opacity-90 hover:shadow-lg active:scale-95 md:flex">
                Get all access
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SPACING */}
      <div className="h-16 sm:h-20" />

      {/* SIDEBAR */}
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />

      {/* SEARCH MODAL */}
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </>
  )
}