"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ComponentLibrary from "@/components/cards";
import BlocksContent from "@/components/blockscontent";

export default function HeroBlocksSection() {
  return (
    <section className="mx-auto w-full max-w-7xl border-x border-dashed border-zinc-200 bg-white">
      
      {/* HERO SECTION */}
      <div
        className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-6 border-b border-dashed border-gray-200 
        bg-[url(https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-bg.png)] 
        bg-cover bg-center px-4 max-xl:place-items-center sm:gap-8 sm:px-6 lg:px-8"
      >
        {/* LEFT CONTENT */}
        <div className="col-span-full my-auto flex flex-col gap-3 py-10 max-xl:items-center max-xl:text-center xl:col-span-6">
          
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-black transition">
                  Home
                </Link>
              </li>

              <li className="text-gray-400">
                <ChevronRight className="w-4 h-4" />
              </li>

              <li className="text-black">Blocks</li>
            </ol>
          </nav>

          {/* Heading */}
          <h1 className="text-2xl font-semibold leading-tight text-black sm:text-4xl">
            <span className="text-black font-bold">700+</span> Shadcn Blocks - Free & Pro
          </h1>

          {/* Description */}
          <p className="max-w-lg text-base text-gray-600">
            Explore 700+ premium & free{" "}
            <strong className="text-black">Shadcn UI blocks</strong> to speed up your development.
            Fully customizable, easy to use, and dark mode ready.
          </p>

          {/* Buttons */}
          <div className="mt-2 flex flex-wrap gap-3 max-xl:justify-center">
            
            {/* Figma Button */}
            <Link
              href="/figma"
              className="inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] p-[1px]"
            >
              <span className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-gray-800">
                
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 16 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.7963 13C15.7963 14.9862 14.1865 16.5977 12.2037 16.5977C10.2208 16.5977 8.61099 14.9862 8.61099 13C8.61099 11.0139 10.2208 9.40237 12.2037 9.40237C14.1865 9.40237 15.7963 11.0139 15.7963 13Z" fill="#1ABCFE" />
                  <path d="M8.61099 1H12.2037C14.1865 1 15.7963 2.5967 15.7963 4.5828C15.7963 6.56891 14.1865 8.18047 12.2037 8.18047H8.61099V1Z" fill="#F24E1E" />
                  <path d="M7.38915 21.4172C7.38915 23.4033 5.77933 25.0149 3.79648 25.0149C1.81364 25.0149 0.203809 23.4033 0.203809 21.4172C0.203809 19.4311 1.81364 17.8195 3.79648 17.8195H7.38915V21.4172Z" fill="#0ACF83" />
                  <path d="M0.203809 13C0.203809 11.0139 1.81364 9.40237 3.79648 9.40237H7.38915V16.5977H3.79648C1.81364 16.5977 0.203809 14.9862 0.203809 13Z" fill="#A259FF" />
                  <path d="M0.203641 4.5828C0.203641 2.5967 1.81347 1 3.79631 1H7.38899V8.18047H3.79631C1.81347 8.18047 0.203641 6.56891 0.203641 4.5828Z" fill="#F24E1E" />
                </svg>

                Get Figma File
              </span>
            </Link>

            {/* Access Button */}
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-xs font-medium text-white hover:bg-gray-800 transition"
            >
              Get all access
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-span-full flex justify-center xl:col-span-6">
          <Image
            src="https://cdn.shadcnstudio.com/ss-assets/landing-page/blocks-pages/header-image.png?height=368&format=auto"
            alt="Shadcn Blocks"
            width={600}
            height={420}
            priority
            className="w-full max-w-[600px] object-cover"
          />
        </div>
      </div>

      {/* COMPONENT LIBRARY SECTION (FIXED OUTSIDE GRID ISSUE) */}
      <div>
        <ComponentLibrary />
        <BlocksContent/>
      </div>

    </section>
  );
}