"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DashboardSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-6 border-y border-dotted border-gray-300 py-10 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-white border border-gray-300 px-4 py-1 text-sm text-gray-700">
            Coming Soon
          </span>

          <h2 className="text-xl font-semibold text-black mb-4">
            Dashboard & Application
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl">
            Customizable dashboards and app templates for eCommerce, CRM, SAAS, logistics, and more.
          </p>

          <ul className="space-y-2 text-gray-600 text-sm mb-8">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Simple integration with your business logic or API.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Charts, widgets, and stats to visualize key insights.</span>
            </li>
          </ul>

          <button className="flex text-sm items-center gap-2 bg-gray-100 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl transition">
            Explore more
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-3 overflow-x-visible">
          {["/1.png", "/2.png", "/3.png"].map((src, i) => (
            <div
              key={i}
              className="group relative bg-gray-200 rounded-lg overflow-hidden w-[280px] h-52"
            >
              <div className="absolute inset-0 pl-4 pt-4 transition-all duration-300 group-hover:pl-0 group-hover:pt-0">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image src={src} alt="dashboard" fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}