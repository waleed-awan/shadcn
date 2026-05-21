"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Search, ChevronDown } from "lucide-react"
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sidebar } from "./sidebar"
import { SearchModal } from "./search-modal"
import ThemeToggle from "./theme-toggle"

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
    "text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:text-foreground"

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-dashed border-border/80 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl border-dashed border-x border-border/80 items-center justify-between px-4 sm:h-20 sm:px-6">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <Link
              href="/"
              className={`${btn} size-9 overflow-hidden rounded-full sm:size-10`}
            >
              <svg
                viewBox="0 0 328 329"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-full"
              >
                <rect y="0.5" width="328" height="328" rx="164" fill="black" />

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

                <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="white" strokeWidth="20" />
                <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="white" strokeWidth="20" />
                <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="white" strokeWidth="20" />
                <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="white" strokeWidth="20" />
              </svg>
            </Link>

            {/* TITLE */}
            <h1 className="hidden text-lg font-semibold text-foreground sm:block">
              shadcn/studio
            </h1>

            {/* MENU */}
            <nav className="ml-5 hidden items-center gap-5 2xl:flex">

              <Link href="/components" className={menuClass}>
                Components
              </Link>

              <Link href="/pages/blocks" className={menuClass}>
                Blocks
              </Link>

              <Link href="/pages/templates" className="text-[13px] font-medium text-foreground">
                Templates
              </Link>

              <Link href="/figma" className={menuClass}>
                Figma
              </Link>

              <Link href="/theme-generator" className={menuClass}>
                Theme Generator
              </Link>

              {/* AI */}
              <DropdownMenu open={aiOpen} onOpenChange={setAiOpen}>
                <div onMouseEnter={() => setAiOpen(true)} onMouseLeave={() => setAiOpen(false)}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] font-medium text-foreground outline-none">
                    AI Tools
                    <ChevronDown className="size-3.5" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="mt-3 w-52 rounded-xl border border-border/40 bg-background/95 p-2 backdrop-blur-xl">
                    <DropdownMenuItem asChild>
                      <Link className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted" href="/ai-builder">
                        AI Builder
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted" href="/ai-components">
                        AI Components
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>

              {/* RESOURCES */}
              <DropdownMenu open={resourcesOpen} onOpenChange={setResourcesOpen}>
                <div onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] font-medium text-foreground outline-none">
                    Resources
                    <ChevronDown className="size-3.5" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="mt-3 w-52 rounded-xl border border-border/40 bg-background/95 p-2 backdrop-blur-xl">
                    <DropdownMenuItem asChild>
                      <Link className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted" href="/docs">
                        Documentation
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted" href="/blog">
                        Blog
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>

            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">

            <button onClick={() => setOpen(true)} className={`${btn} 2xl:hidden`}>
              <Menu className="size-5 text-foreground" />
            </button>

            <button onClick={() => setSearchOpen(true)} className={btn}>
              <Search className="size-5 text-foreground" />
            </button>

            <ThemeToggle />

            <div className="mx-1 hidden h-6 w-px bg-border/40 lg:block" />

            <div className="hidden items-center gap-2 lg:flex">
              <Link href="https://github.com" className={btn}>
                <FaGithub className="size-4 text-foreground" />
              </Link>

              <Link href="https://x.com" className={btn}>
                <FaXTwitter className="size-4 text-foreground" />
              </Link>

              <Link href="https://discord.com" className={btn}>
                <FaDiscord className="size-4 text-foreground" />
              </Link>
            </div>

            <Link
              href="/signin"
              className="rounded-md border border-border/40 bg-background px-3 py-2 text-sm text-foreground hover:bg-muted transition"
            >
              Sign in
            </Link>

            <Link
              href="/pricing"
              className="hidden md:flex rounded-md bg-foreground px-5 py-2 text-sm text-background hover:opacity-90 transition"
            >
              Get all access
            </Link>

          </div>
        </div>
      </header>

      {/* spacing */}
      <div className="h-16 sm:h-20" />

      <Sidebar isOpen={open} onClose={() => setOpen(false)} />
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </>
  )
}