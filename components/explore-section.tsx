"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { ArrowUpRight } from "lucide-react";
import { Caveat } from "next/font/google";
import DashboardApplicationBlock from "./FigmaHeroSection";
import { motion } from "framer-motion";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

const lightImages = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];
const darkImages = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

export default function BlocksSection() {
  return (
    <div className="w-full border-t border-gray-300 border-dashed bg-white dark:bg-black dark:border-white/10">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16 flex items-center justify-center"
      >
        <div className="max-w-5xl text-center px-4">

          {/* Copy Paste Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <p
              className={`${caveat.className} text-lg text-gray-700 dark:text-gray-300`}
            >
              Copy-Paste Blocks
            </p>

            <div className="h-0.5 bg-black dark:bg-white mt-1 w-full"></div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl leading-tight font-semibold tracking-tight text-black dark:text-white whitespace-nowrap"
          >
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
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-black dark:text-white"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Quickly build stunning web interfaces - from landing pages and
            marketing sites to e-commerce and dashboards with unlimited theme
            options.
          </motion.p>
        </div>
      </motion.section>

      {/* MERGED BLOCK SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="w-full bg-white dark:bg-black"
      >
        <div className="mx-auto max-w-7xl overflow-hidden border-y border-dashed border-gray-300 dark:border-white/10">
          <div className="grid divide-x divide-dashed divide-gray-300 dark:divide-white/10 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative space-y-6 p-8"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  Marketing UI Blocks
                </h2>

                <div className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="max-w-md text-gray-500 dark:text-gray-400">
                Boost conversions with stunning marketing UI blocks that enhance
                your site's design and user experience.
              </p>

              {/* MARQUEE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: true }}
                className="relative mt-6 overflow-hidden"
              >
                {/* LIGHT */}
                <div className="dark:hidden">
                  <Marquee
                    pauseOnHover
                    className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [--duration:20s]"
                  >
                    {lightImages.map((src, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="relative mx-3 h-36 w-60 overflow-hidden rounded-xl border shadow-sm transition hover:scale-105"
                      >
                        <Image
                          src={src}
                          alt="preview"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </Marquee>
                </div>

                {/* DARK */}
                <div className="hidden dark:block">
                  <Marquee
                    pauseOnHover
                    className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [--duration:20s]"
                  >
                    {darkImages.map((src, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="relative mx-3 h-36 w-60 overflow-hidden rounded-xl border border-white/10 shadow-sm transition hover:scale-105"
                      >
                        <Image
                          src={src}
                          alt="preview"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </Marquee>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <DashboardApplicationBlock />
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}