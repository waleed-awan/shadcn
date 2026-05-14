"use client"

import { useEffect, useState } from "react"
import {
  Menu,
  Search,
  Moon,
  ChevronDown,
} from "lucide-react"

import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sidebar } from "./sidebar"
import { SearchModal } from "./search-modal"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const [aiOpen, setAiOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

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

  const menuClass =
    "text-[13px] font-medium text-zinc-500 transition-all duration-200 hover:text-black"

  return (
    <>
      {/* NAVBAR */}
      <header className="border-dashed border-b border-gray-200 fixed top-0 left-0 z-50 w-full">
        <div className="border-b border-white/20 bg-white/30 backdrop-blur-xl">
          <div className="border-dashed border-x border-gray-200 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">

            {/* LEFT */}
            <div className="flex items-center gap-3">

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

              {/* TITLE */}
              <h1 className="hidden text-lg font-semibold text-black sm:block">
                shadcn/studio
              </h1>

              {/* MENU */}
              <nav className="ml-5 hidden items-center gap-5 2xl:flex">

                <a
                  href="#"
                  className={menuClass}
                >
                  Components
                </a>

                <a
                  href="#"
                  className={menuClass}
                >
                  Blocks
                </a>

                <a
                  href="#"
                  className="text-[13px] font-medium text-black"
                >
                  Templates
                </a>

                <a
                  href="#"
                  className={menuClass}
                >
                  Figma
                </a>

                <a
                  href="#"
                  className={menuClass}
                >
                  Theme Generator
                </a>

               {/* AI TOOLS */}
<DropdownMenu
  open={aiOpen}
  onOpenChange={setAiOpen}
>
  <div
    onMouseEnter={() => setAiOpen(true)}
    onMouseLeave={() => setAiOpen(false)}
  >
    <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] font-medium text-black outline-none transition">
      AI Tools
      <ChevronDown className="size-3.5 text-black" />
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      className="mt-3 w-52 rounded-xl border border-zinc-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl"
    >
      <DropdownMenuItem className="cursor-pointer rounded-lg px-3 py-2 text-sm text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black">
        AI Builder
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor-pointer rounded-lg px-3 py-2 text-sm text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black">
        AI Components
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor-pointer rounded-lg px-3 py-2 text-sm text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black">
        AI Templates
      </DropdownMenuItem>
    </DropdownMenuContent>
  </div>
</DropdownMenu>

{/* RESOURCES */}
<DropdownMenu
  open={resourcesOpen}
  onOpenChange={setResourcesOpen}
>
  <div
    onMouseEnter={() => setResourcesOpen(true)}
    onMouseLeave={() => setResourcesOpen(false)}
  >
    <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] font-medium text-black outline-none transition">
      Resources
      <ChevronDown className="size-3.5 text-black" />
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      className="mt-3 w-52 rounded-xl border border-zinc-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl"
    >
      <DropdownMenuItem className="cursor-pointer rounded-lg px-3 py-2 text-sm text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black">
        Documentation
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor-pointer rounded-lg px-3 py-2 text-sm text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black">
        Blog
      </DropdownMenuItem>

      <DropdownMenuItem className="cursor-pointer rounded-lg px-3 py-2 text-sm text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black">
        Community
      </DropdownMenuItem>
    </DropdownMenuContent>
  </div>
</DropdownMenu>
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2">

              {/* HAMBURGER */}
              <button
                onClick={() => setOpen(true)}
                className={`${btn} flex size-8 rounded-sm border border-zinc-200 bg-white/70 backdrop-blur hover:bg-white hover:shadow-md 2xl:hidden sm:size-9`}
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
              <div className="mx-1 hidden h-6 w-px bg-zinc-300/50 lg:block" />

              {/* SOCIALS */}
              <div className="hidden items-center gap-2 lg:flex">
                <button className={`${btn} size-8`}>
                  <FaGithub className="size-4 text-black" />
                </button>

                <button className={`${btn} size-4`}>
                  <FaXTwitter className="size-4 text-black" />
                </button>

                <button className={`${btn} size-4`}>
                  <FaDiscord className="size-4 text-black" />
                </button>
              </div>

              {/* SIGN IN */}
              <button className="rounded-sm border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-black backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white hover:shadow-md">
                Sign in
              </button>

              {/* ACCESS */}
              <button className="hidden items-center gap-2 rounded-sm bg-black px-5 py-2 text-sm text-white transition-all duration-200 hover:scale-105 hover:opacity-90 md:flex">
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