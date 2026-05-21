"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function BlocksContent() {
  return (
    <section className="flex flex-col dark:bg-black px-4 pb-14 text-[15px] leading-6 text-muted-foreground sm:px-6 lg:px-8">

      {/* TOP LINE */}
      <div className="mx-auto h-px w-3/5 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="space-y-10">

        {/* TITLE SECTION */}
        <div>
          <h2 className="mt-10 text-lg font-bold text-foreground sm:text-xl">
            Shadcn Blocks
          </h2>

          <p className="mt-3">
            Shadcn Blocks are pre-built UI components designed to help
            developers build modern websites and applications faster. Built
            using{" "}
            <strong className="font-semibold text-foreground">
              Shadcn UI, Tailwind CSS, and React
            </strong>
            , these blocks provide reusable layouts for marketing pages,
            dashboards, e-commerce interfaces, and application components.
          </p>

          <p className="mt-3">
            Instead of building complex layouts from scratch, developers can use
            ready-made blocks to quickly assemble responsive user interfaces.
            Each block includes structured code, design elements, and layout
            patterns that can be easily customized.
          </p>

          <p className="mt-3">
            At <span className="font-semibold text-foreground">Shadcn Studio</span>,
            developers can explore a large collection of UI blocks organized
            into marketing, dashboards, e-commerce, and data tables.
          </p>
        </div>

        {/* WHAT ARE */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            What Are Shadcn Blocks?
          </h3>

          <p className="mt-2">
            A Shadcn Block is a reusable UI section built with React and
            Tailwind CSS that provides a complete layout for a specific part of
            a website or application.
          </p>

          <p className="mt-2">Unlike individual components, blocks represent larger UI sections such as:</p>

          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>Landing page sections</li>
            <li>Dashboard modules</li>
            <li>Product pages</li>
            <li>Authentication screens</li>
            <li>Navigation systems</li>
          </ul>

          <p className="mt-2">Blocks are copy-paste friendly and fully customizable.</p>
        </div>

        {/* WHY USE */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Why Use Shadcn Blocks?
          </h3>

          <div className="mt-2 space-y-2">
            <p><strong className="text-foreground">Rapid UI Development</strong> — Build pages faster using ready layouts.</p>
            <p><strong className="text-foreground">Built with React & Tailwind</strong> — Works perfectly with Next.js.</p>
            <p><strong className="text-foreground">Highly Customizable</strong> — Easy styling with Tailwind.</p>
            <p><strong className="text-foreground">Modern Design Patterns</strong> — SaaS-ready UI structure.</p>
            <p><strong className="text-foreground">Consistent Design System</strong> — Uniform UI across project.</p>
          </div>
        </div>

        {/* KEY ELEMENTS */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Key Elements of Shadcn Blocks
          </h3>

          <div className="mt-2 space-y-2">
            <p><strong>Reusable Layout</strong> — Complete UI sections like hero, pricing, dashboards.</p>
            <p><strong>Responsive Design</strong> — Works on all devices.</p>
            <p><strong>Component Integration</strong> — Buttons, cards, forms, etc.</p>
            <p><strong>Modern Styling</strong> — Tailwind utility-based design.</p>
            <p><strong>Developer Friendly</strong> — Clean React structure.</p>
          </div>
        </div>

        {/* TYPES */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Types of Shadcn Blocks
          </h3>

          <div className="mt-2 space-y-2">
            <p><strong>Marketing Blocks</strong> — Landing pages, hero, pricing, testimonials.</p>
            <p><strong>Dashboard Blocks</strong> — Analytics UI and admin panels.</p>
            <p><strong>eCommerce Blocks</strong> — Product, cart, checkout pages.</p>
            <p><strong>Datatable Blocks</strong> — Sortable tables and filters.</p>
            <p><strong>Bento Blocks</strong> — Modern grid layouts.</p>
            <p><strong>Free Blocks</strong> — Ready-to-use free UI sections.</p>
          </div>
        </div>

        {/* USE CASES */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Use Cases for Shadcn Blocks
          </h3>

          <div className="mt-2 space-y-2">
            <p><strong>SaaS Websites</strong> — Landing pages & pricing.</p>
            <p><strong>Admin Dashboards</strong> — Analytics systems.</p>
            <p><strong>E-commerce</strong> — Stores and checkout flows.</p>
            <p><strong>Developer Tools</strong> — Auth and settings pages.</p>
            <p><strong>Startup Sites</strong> — Fast product launches.</p>
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Features of Shadcn Blocks
          </h3>

          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>Responsive UI layouts</li>
            <li>React component structure</li>
            <li>Tailwind CSS system</li>
            <li>Reusable components</li>
            <li>Dark mode support</li>
            <li>Next.js ready</li>
            <li>Copy-paste workflow</li>
          </ul>
        </div>

        {/* WHY DEVELOPERS */}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Why Developers Love Shadcn Blocks
          </h3>

          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>Clean React architecture</li>
            <li>Easy Tailwind customization</li>
            <li>Fast development workflow</li>
            <li>Reusable UI system</li>
            <li>Production-ready components</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mt-10 text-lg font-bold text-foreground sm:text-xl">
            FAQs
          </h2>

          <Accordion type="single" collapsible className="mt-4 w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are Shadcn Blocks?</AccordionTrigger>
              <AccordionContent>
                Shadcn Blocks are reusable UI sections built with React and Tailwind CSS.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What types are available?</AccordionTrigger>
              <AccordionContent>
                Marketing, dashboards, eCommerce, datatables, bento grids, etc.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Next.js compatible?</AccordionTrigger>
              <AccordionContent>
                Yes, fully compatible with Next.js and React.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Are they customizable?</AccordionTrigger>
              <AccordionContent>
                Yes, fully customizable with Tailwind CSS.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

      </div>
    </section>
  )
}