"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { motion } from "framer-motion"
import { Caveat } from "next/font/google"

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"] })

const faqSections = {
  general: {
    title: "General Question",
    questions: [
      "Do you have a trial / free version?",
      "What do I get with premium version?",
      "Which framework/technologies do you support?",
      "What is shadon/studio AI tools and how they can help me?",
      "Do you provide design file (Figma)?",
      "What does free feature updates includes?",
      "How do I access my purchase and what's included?",
    ],
  },
  license: {
    title: "License",
    questions: [
      "Can I use shadon/studio for commercial projects?",
      "Can I use shadon/studio Pro for client projects?",
      "Which license type is suitable for me?",
      'What does "Lifetime Access" mean?',
      'What does "Unlimited Projects" mean?',
      "Can I sell templates/themes/blocks derived from shadon/studio Pro?",
      "How does team/enterprise license work?",
      "Can I upgrade to team/enterprise license later, how?",
    ],
  },
  payment: {
    title: "Payment",
    questions: [
      "Is it a one-time payment?",
      "What are the available payment options?",
      "Can I generate/modify Invoice?",
      "What if I am facing an issue while making the payment?",
      "Do you offer discounts for students or non-profit organizations?",
      "Do you offer refund?",
    ],
  },
  support: {
    title: "Support",
    questions: [
      "Do you provide support?",
      "How does support work?",
      "How do I get in touch?",
      "How long is support valid for?",
      "Are you available for hire?",
    ],
  },
}

function FAQBlock({ title, questions }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="mb-6 text-2xl font-semibold text-black">{title}</h2>

      <Accordion type="single" collapsible className="w-full">
        {questions.map((q: string, i: number) => (
          <AccordionItem
            key={i}
            value={`${title}-${i}`}
            className="border-b border-dashed border-gray-300 transition hover:bg-gray-50"
          >
            <AccordionTrigger className="py-5 text-left text-base text-black hover:no-underline">
              {q}
            </AccordionTrigger>

            <AccordionContent className="pb-5 text-base text-gray-600">
              This is the answer to: {q}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

export default function FAQPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <section className="flex w-full flex-col items-center justify-center">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl px-4 text-center"
          >
            <div className="mb-8 inline-block">
              <p className={`${caveat.className} text-2xl tracking-wide text-gray-800`}>
                FAQ
              </p>
              <div className="mt-1 h-0.5 w-full bg-black"></div>
            </div>

            <h1 className="text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
              Any{" "}
              <span className="relative mx-1 sm:mx-2 md:mx-1 inline-block">
                Questions?
                <svg
                  className="absolute -bottom-3 left-0 w-full"
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

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              Browse through these FAQs to find answers to commonly asked questions.
            </p>
          </motion.div>

          {/* FAQ SECTION */}
          <div className="mt-16 grid w-full max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2">
            
            {/* LEFT */}
            <div className="space-y-12 border-dashed border-gray-300 lg:border-r lg:pr-12">
              <FAQBlock
                title={faqSections.general.title}
                questions={faqSections.general.questions}
              />

              <FAQBlock
                title={faqSections.payment.title}
                questions={faqSections.payment.questions}
              />
            </div>

            {/* RIGHT */}
            <div className="space-y-12">
              <FAQBlock
                title={faqSections.license.title}
                questions={faqSections.license.questions}
              />

              <FAQBlock
                title={faqSections.support.title}
                questions={faqSections.support.questions}
              />
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}