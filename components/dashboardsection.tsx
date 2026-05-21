"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardSection() {
  return (
    <section className="w-full bg-white dark:bg-black py-10">
      <div className="max-w-[1400px] mx-auto px-6 border-y border-dotted border-gray-300 dark:border-zinc-700 py-10 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">

        {/* LEFT CONTENT (bottom to top animation) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 rounded-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 px-4 py-1 text-sm text-gray-700 dark:text-gray-300">
            Coming Soon
          </span>

          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            Dashboard & Application
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
            Customizable dashboards and app templates for eCommerce, CRM, SAAS, logistics, and more.
          </p>

          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-8">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Simple integration with your business logic or API.</span>
            </li>

            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Charts, widgets, and stats to visualize key insights.</span>
            </li>
          </ul>

          <button className="flex text-sm items-center gap-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-800 dark:text-white px-6 py-3 rounded-xl transition">
            Explore more
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* RIGHT IMAGES (bottom to top animation) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex gap-3 overflow-x-visible"
        >
          {["/1.png", "/2.png", "/3.png"].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-gray-200 dark:bg-zinc-900 rounded-lg overflow-hidden w-[280px] h-52 border border-gray-200 dark:border-zinc-700"
            >
              <div className="absolute inset-0 pl-4 pt-4 transition-all duration-300 group-hover:pl-0 group-hover:pt-0">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt="dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}