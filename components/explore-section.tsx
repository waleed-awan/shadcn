"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { ArrowUpRight } from "lucide-react";
import { Caveat } from "next/font/google";
import DashboardApplicationBlock from "./FigmaHeroSection";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

export default function BlocksSection() {
  return (
    <div className="w-full border-t border-gray-300 border-dashed bg-white">

      {/* HERO SECTION */}
      <section className="w-full py-16 flex items-center justify-center">
        <div className="max-w-5xl text-center px-4">

          {/* Copy Paste Label */}
          <div className="inline-block mb-8">
            <p className={`${caveat.className} text-lg text-gray-700`}>
              Copy-Paste Blocks
            </p>
            <div className="h-0.5 bg-black mt-1 w-full"></div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl leading-tight font-semibold tracking-tight text-black whitespace-nowrap">
            Explore 700+ Free & Pro{" "}
            <span className="relative inline-block">
              Shadcn UI Blocks

              <svg
                className="absolute left-0 -bottom-3 w-full"
                height="20"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15 C 70 5, 230 5, 295 15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Quickly build stunning web interfaces - from landing pages and marketing sites to e-commerce and dashboards with unlimited theme options.
          </p>
        </div>
      </section>

      {/* MERGED BLOCK SECTION */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden border-y border-dashed border-gray-300">
          <div className="grid divide-x divide-dashed divide-gray-300 lg:grid-cols-2">

            {/* LEFT */}
            <div className="group relative space-y-6 p-8">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-black">
                  Marketing UI Blocks
                </h2>

                <div className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="max-w-md text-gray-500">
                Boost conversions with stunning marketing UI blocks that enhance
                your site's design and user experience.
              </p>

              <div className="relative mt-6 overflow-hidden">
                <Marquee
                  pauseOnHover
                  className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [--duration:20s]"
                >
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="relative mx-3 h-36 w-60 overflow-hidden rounded-xl border shadow-sm transition hover:scale-105"
                    >
                      <Image
                        src={src}
                        alt="preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* RIGHT */}
            <DashboardApplicationBlock/>

          </div>
        </div>
      </div>

    </div>
  );
}
