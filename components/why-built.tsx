"use client";

import Image from "next/image";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function WhyBuilt() {
  return (
    <section className="relative mt-10 w-full overflow-hidden border-y border-dashed border-gray-300 bg-white py-20">
      {/* Vertical Lines */}
   

      {/* Main Container */}
      <div className="mx-auto border-x-1 border-dashed border-gray-300  max-w-[1000px] px-8">
        {/* Heading */}
        <div className="mb-12 flex justify-center">
          <div className="inline-block">
            <h2
              className={`${caveat.className} text-[27px] font-semibold text-black`}
            >
              Why We Built shadcn/studio?
            </h2>

            <div className="mt-[2px] h-[2px] w-full bg-black" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-9 text-left text-[16px] leading-[1.9] tracking-[-0.01em] text-black md:text-[17px]">
          <p>
            With over a decade of experience creating UI components,
            themes, and templates - and earning the{" "}
            <span className="underline underline-offset-4">
              Envato Power Elite Author
            </span>{" "}
            badge - we saw huge potential in shadcn/ui.
          </p>

          <p>
            But when we looked for a single reliable platform for both
            designers and developers, everything felt scattered,
            outdated, or inconsistent.
          </p>

          <p>
            So we built shadcn/studio - a unified ecosystem with
            quality-tested resources, active support, and modern AI
            tools to help you stop reinventing the wheel and make every
            shadcn/ui project truly unique.
          </p>

          <p>
            Shadcn Studio unites the best tools for designers and
            developers - featuring{" "}
            <span className="underline underline-offset-4">
              shadcn/ui Components
            </span>
            ,{" "}
            <span className="underline underline-offset-4">
              Figma Design System
            </span>
            , Animated Variants with Motion,{" "}
            <span className="underline underline-offset-4">
              Templates
            </span>
            ,{" "}
            <span className="underline underline-offset-4">
              Theme Generator
            </span>
            ,{" "}
            <span className="underline underline-offset-4">
              MCP Integration
            </span>
            , and the{" "}
            <span className="underline underline-offset-4">
              Figma to Code Plugin
            </span>{" "}
            all built to help you ship faster.
          </p>
        </div>

        {/* Authors */}
        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left Author */}
          <div className="flex items-center gap-4">
            {/* Image Avatar */}
            <div className="relative h-[56px] w-[56px] overflow-hidden rounded-full border border-neutral-200">
              <Image
                src="/avatar-33.png"
                alt="Ajay Patel"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-[18px] font-semibold text-black">
                  Ajay Patel
                </h4>

                <FaXTwitter className="h-4 w-4 text-neutral-500" />
                <FaLinkedinIn className="h-4 w-4 text-neutral-500" />
              </div>

              <p className="mt-1 text-[14px] text-neutral-500">
                Developer & Co-founder
              </p>
            </div>
          </div>

          {/* Right Author */}
          <div className="flex items-center gap-4">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 md:justify-end">
                <FaXTwitter className="h-4 w-4 text-neutral-500" />
                <FaLinkedinIn className="h-4 w-4 text-neutral-500" />

                <h4 className="text-[18px] font-semibold text-black">
                  Anand Patel
                </h4>
              </div>

              <p className="mt-1 text-[14px] text-neutral-500 md:text-right">
                Designer & Co-founder
              </p>
            </div>

            {/* Image Avatar */}
            <div className="relative order-1 h-[56px] w-[56px] overflow-hidden rounded-full border border-neutral-200 md:order-2">
              <Image
                src="/avatar-32.png"
                alt="Anand Patel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}