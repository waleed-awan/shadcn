"use client";

import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Chánh Đại",
    handle: "@iamncadi",
    text: "Congrats bro && shadcn/studio!",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Shri Vatz",
    handle: "@shri_vatz",
    text: "Thanks Ajay! shadcnstudio looks amazing 😍",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "JD Solanki",
    handle: "@me_jd_solanki",
    text: "It fills the gap of missing customised demos. Great part, you can copy-paste like shadcn docs 🔥",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Ali Bey",
    handle: "@alibey_10",
    text: "This is one of the few premium blocks that's worth paying for. Great job!",
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "OrcDev",
    handle: "@orcdev",
    text: "Keep up the good work Ajay! Shadcn Studio is awesome!",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Vishal Lohar",
    handle: "@yourcodedbuddy",
    text: "I loved the random style feature. Good work!",
    img: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Shounak Ghosh",
    handle: "@shahankk42",
    text: "i love this. it's gonna be my go-to now for theming",
    img: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "shadcn",
    handle: "@shadcn",
    text: "Nice.",
    img: "https://i.pravatar.cc/100?img=8",
  },
];

function ReviewCard({ name, handle, text, img }:any) {
  return (
    <Card className="w-72 shrink-0 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{handle}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
}

export default function WallOfLove() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">Reviews</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">The Wall of Love</h2>
        <p className="mt-2 text-gray-500">
          Here's what some of our users have to say about shadcn/studio.
        </p>
      </div>

      {/* Vertical columns */}
      <div className="relative mt-12 flex justify-center gap-6 overflow-hidden">
        {/* Column 1 */}
        <Marquee vertical pauseOnHover className="h-[500px] [--duration:25s]">
          {reviews.map((review, i) => (
            <div key={i} className="mb-6">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Column 2 (reverse) */}
        <Marquee vertical reverse pauseOnHover className="h-[500px] [--duration:30s]">
          {reviews.map((review, i) => (
            <div key={i} className="mb-6">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Column 3 */}
        <Marquee vertical pauseOnHover className="h-[500px] [--duration:35s]">
          {reviews.map((review, i) => (
            <div key={i} className="mb-6">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Gradient fade top/bottom */}
        <div className="pointer-events-none absolute top-0 h-24 w-full bg-gradient-to-b from-white"></div>
        <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white"></div>
      </div>
    </section>
  );
}
