"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaYoutube, FaXTwitter, FaDiscord } from "react-icons/fa6";

const products: string[] = [
  "Shadcn Blocks",
  "Shadcn Templates",
  "Shadcn Figma UI Kit",
  "Shadcn Builder",
  "Shadcn Theme Generator",
  "Shadcn MCP Server",
  "Shadcn Components",
  "Shadcn Figma to Code",
];

const resources: string[] = [
  "Documentation",
  "Blog",
  "Changelog",
  "Roadmap",
  "Community Resources",
  "Credits",
];

const support: string[] = [
  "Support",
  "About Us",
  "Become Ambassador",
  "Affiliation Program",
  "Contact Us",
  "Hire Us",
];

const legal: string[] = [
  "License",
  "Privacy policy",
  "Terms & Condition",
  "Affiliation Terms & Condition",
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 border-dashed bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-dashed border-x border-gray-200 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-6 lg:px-8">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-start gap-5 lg:col-span-2">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <svg width="20" height="20" viewBox="0 0 128 128" fill="none">
                <path d="M63.67 24.84V49.38C63.67 57.45 57.13 64 49.06 64H25.2"
                  stroke="currentColor" strokeWidth="8" />
                <path d="M64.32 103.15V78.61C64.32 70.54 70.86 64 78.93 64L102.79 64"
                  stroke="currentColor" strokeWidth="8" />
                <line x1="93.34" y1="35.61" x2="76.55" y2="52.20"
                  stroke="currentColor" strokeWidth="8" />
                <line x1="51.76" y1="77.06" x2="34.97" y2="93.65"
                  stroke="currentColor" strokeWidth="8" />
                <line x1="50.95" y1="51.31" x2="34.26" y2="34.62"
                  stroke="currentColor" strokeWidth="8" />
                <line x1="93.16" y1="93.63" x2="76.46" y2="76.94"
                  stroke="currentColor" strokeWidth="8" />
              </svg>
            </div>

            <span className="text-xl font-semibold text-gray-900">
              shadcn/studio
            </span>
          </Link>

          {/* DESCRIPTION */}
          <p className="text-sm leading-7 text-gray-600">
            An open-source collection of copy-and-paste shadcn/ui components,
            blocks, and templates - paired with a powerful Shadcn theme generator
            to craft, customize, and ship faster.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link href="#"><FaGithub className="size-5 hover:text-black" /></Link>
            <Link href="#"><FaYoutube className="size-5 hover:text-black" /></Link>
            <Link href="#"><FaDiscord className="size-5 hover:text-black" /></Link>
            <Link href="#"><FaXTwitter className="size-5 hover:text-black" /></Link>
          </div>

          {/* TEXT */}
          <p className="text-sm text-gray-500">
            This project is independent and not affiliated with Figma or shadcn/ui.
          </p>

          {/* BUTTON */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
          >
            <FaGithub className="size-4" />
            Sponsor shadcn/ui on GitHub
            <ArrowUpRight className="size-4" />
          </Link>

          <p className="text-sm text-gray-500">
            This project wouldn&apos;t be possible without the open-source ecosystem.
          </p>
        </div>

        {/* COLUMNS */}
        <FooterColumn title="Products" items={products} />
        <FooterColumn title="Resources" items={resources} />
        <FooterColumn title="Help and Support" items={support} />
        <FooterColumn title="Legal" items={legal} />

      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  items: string[];
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <ul className="space-y-3 text-gray-600">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="transition hover:text-black"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}