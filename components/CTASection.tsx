"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="overflow-hidden border-t border-dashed border-gray-300 bg-white pt-12 pb-24 sm:pt-14 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ANIMATED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-visible rounded-[34px] bg-black px-6 pt-14 pb-20 sm:px-10 sm:pt-16 sm:pb-24 lg:px-16"
        >

          {/* TOP RIGHT SHAPE */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, x: 80, y: -80 }}
            whileInView={{ opacity: 0.12, rotate: 90, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -top-20 -right-20"
          >
            <svg
              viewBox="0 0 128 128"
              className="h-[240px] w-[240px] text-white"
              fill="none"
            >
              <path
                d="M63.67 24.84V49.38C63.67 57.45 57.13 64 49.06 64H25.2"
                stroke="currentColor"
                strokeWidth="8"
              />
              <path
                d="M64.32 103.15V78.61C64.32 70.54 70.86 64 78.93 64L102.79 64"
                stroke="currentColor"
                strokeWidth="8"
              />
              <line x1="93.34" y1="35.61" x2="76.55" y2="52.20" stroke="currentColor" strokeWidth="8" />
              <line x1="51.76" y1="77.06" x2="34.97" y2="93.65" stroke="currentColor" strokeWidth="8" />
              <line x1="50.95" y1="51.31" x2="34.26" y2="34.62" stroke="currentColor" strokeWidth="8" />
              <line x1="93.16" y1="93.63" x2="76.46" y2="76.94" stroke="currentColor" strokeWidth="8" />
            </svg>
          </motion.div>

          {/* BOTTOM LEFT SHAPE */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, x: -80, y: 80 }}
            whileInView={{ opacity: 0.12, rotate: 90, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -bottom-20 -left-20"
          >
            <svg
              viewBox="0 0 128 128"
              className="h-[240px] w-[240px] text-white"
              fill="none"
            >
              <path
                d="M63.67 24.84V49.38C63.67 57.45 57.13 64 49.06 64H25.2"
                stroke="currentColor"
                strokeWidth="8"
              />
              <path
                d="M64.32 103.15V78.61C64.32 70.54 70.86 64 78.93 64L102.79 64"
                stroke="currentColor"
                strokeWidth="8"
              />
              <line x1="93.34" y1="35.61" x2="76.55" y2="52.20" stroke="currentColor" strokeWidth="8" />
              <line x1="51.76" y1="77.06" x2="34.97" y2="93.65" stroke="currentColor" strokeWidth="8" />
              <line x1="50.95" y1="51.31" x2="34.26" y2="34.62" stroke="currentColor" strokeWidth="8" />
              <line x1="93.16" y1="93.63" x2="76.46" y2="76.94" stroke="currentColor" strokeWidth="8" />
            </svg>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-sm font-medium text-white">
              Subscribe now
            </span>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Stay Updated with Shadcn Studio
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
              Want to be the first to know when we add new components,
              features, blocks, or releases?
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute left-1/2 top-full z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-4 "
          >
            <div className="rounded-[20px] border-2 border-[#2d2d2d] bg-[#f3f3f3] p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.20)]">

              <div className="flex items-center gap-2.5">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black outline-none placeholder:text-black/45"
                />

                {/* DESKTOP */}
                <button
                  type="submit"
                  className="hidden h-12 min-w-[145px] items-center justify-center rounded-lg bg-[#171717] px-5 text-base font-semibold text-white transition hover:bg-black sm:flex"
                >
                  Subscribe
                </button>

                {/* MOBILE */}
                <button
                  type="submit"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#171717] text-white sm:hidden"
                >
                  <Send className="h-4 w-4" />
                </button>

              </div>
            </div>
          </motion.form>

        </motion.div>
      </div>
    </section>
  );
}