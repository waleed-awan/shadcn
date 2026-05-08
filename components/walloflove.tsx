"use client";

import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "JD Solanki",
    handle: "@me_jd_solanki",
    img: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-28.png",
    content: (
      <>
        <p className="mb-3">
          Just found{" "}
          <span className="font-medium text-sky-600">
            @ShadcnStudio
          </span>{" "}
          👀
        </p>

        <p className="mb-3">
          It fills the gap of missing customised demos which are not
          available in shadcn blocks or docs. Great part, you can
          copy-paste like shadcn docs 🤘🏻
        </p>

        <p>
          E.g. pre-made user combobox which shows user avatar, email
          and name in options.
        </p>
      </>
    ),
  },

  {
    name: "Ali Bey",
    handle: "@alibey_10",
    img: "https://i.pravatar.cc/100?img=12",
    content: (
      <>
        <p className="mb-3">
          This is one of the few premium blocks that’s worth paying
          for. Great job!
        </p>

        <p>
          Beautiful UI & Great UX while using it. Highly recommend to
          everyone 👏🏻
        </p>
      </>
    ),
  },

  {
    name: "OrcDev",
    handle: "@orcdev",
    img: "https://i.pravatar.cc/100?img=15",
    content: (
      <>
        <p className="mb-3">
          Keep up the good work Ajay! Shadcn Studio is awesome!
        </p>

        <p>
          The components quality and animations are seriously top
          notch 🔥
        </p>
      </>
    ),
  },

  {
    name: "Richard Thermo",
    handle: "@RThermo56",
    img: "https://i.pravatar.cc/100?img=22",
    content: (
      <>
        <p className="mb-3">
          Great work. You should be very proud of this.
        </p>

        <p>
          I’m really enjoying it and look forward to the new additions
          that come to it.
        </p>
      </>
    ),
  },

  {
    name: "Nour Rouas",
    handle: "@rouas_nour",
    img: "https://i.pravatar.cc/100?img=31",
    content: (
      <>
        <p className="mb-3">My SaaS tech stack in one tweet:</p>

        <div className="space-y-1.5">
          <p>📝 PRD: Claude @AnthropicAI</p>
          <p>🎨 UI: @lovable_dev</p>
          <p>🧑‍💻 Refined: @cursor_ai</p>
          <p>🧩 Components: @ShadcnStudio</p>
          <p>🎯 Styling: @tailwindcss</p>
          <p>🔐 Backend/Auth: @supabase</p>
          <p>💳 Payments: @stripe</p>
          <p>🚀 Deploy: @vercel</p>
        </div>

        <p className="mt-3">
          Still building. Follow for updates.
        </p>
      </>
    ),
  },
];

function ReviewCard({
  name,
  handle,
  img,
  content,
}: {
  name: string;
  handle: string;
  img: string;
  content: React.ReactNode;
}) {
  return (
    <div
      className="
        w-[380px]
        rounded-[26px]
        border
        border-[#e7e7e7]
        bg-[#fafafa]
        p-5
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
      "
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        {/* Left */}
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 border border-gray-200">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>

          <div className="space-y-0.5">
            <h4 className="flex items-center gap-1 text-[18px] font-semibold leading-none tracking-[-0.02em] text-black">
              <span>{name}</span>

              {/* verified */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1d9bf0"
                className="h-4 w-4"
              >
                <path d="M22.25 12c0-.69-.1-1.36-.26-2l2.01-1.57-1.92-3.32-2.48 1a9.13 9.13 0 0 0-3.46-2l-.38-2.65h-3.84l-.38 2.65a9.13 9.13 0 0 0-3.46 2l-2.48-1-1.92 3.32L2 10c-.16.64-.26 1.31-.26 2s.1 1.36.26 2l-2.01 1.57 1.92 3.32 2.48-1a9.13 9.13 0 0 0 3.46 2l.38 2.65h3.84l.38-2.65a9.13 9.13 0 0 0 3.46-2l2.48 1 1.92-3.32L21.99 14c.16-.64.26-1.31.26-2Zm-11.5 3.5-3-3 1.06-1.06 1.94 1.94 4.44-4.44 1.06 1.06-5.5 5.5Z" />
              </svg>
            </h4>

            <p className="text-[13px] text-gray-500">
              {handle}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5">
          <img
            src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png"
            alt="x.com"
            className="h-4 w-4"
          />

          <span className="text-[13px] text-gray-700">
            x.com
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 text-[15px] leading-[1.7] text-gray-600">
        {content}
      </div>
    </div>
  );
}

export default function WallOfLove() {
  return (
    <section className="overflow-hidden bg-white py-16">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center">
        <p className="text-sm font-medium text-gray-500">
          Testimonials
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-black">
          The Wall of Love
        </h2>

        <p className="mt-3 text-base text-gray-500">
          Here&apos;s what some of our users have to say
          about Shadcn Studio.
        </p>
      </div>

      {/* Marquee Columns */}
      <div className="relative mx-auto flex max-w-[1500px] justify-center gap-4 px-4">
        {/* Column 1 */}
        <Marquee
          vertical
          pauseOnHover
          className="h-[780px] [--duration:35s]"
        >
          {reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Column 2 */}
        <Marquee
          vertical
          reverse
          pauseOnHover
          className="hidden h-[780px] [--duration:40s] md:flex"
        >
          {reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Column 3 */}
        <Marquee
          vertical
          pauseOnHover
          className="hidden h-[780px] [--duration:45s] xl:flex"
        >
          {reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Top Fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}