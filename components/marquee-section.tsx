"use client";

import { Marquee } from "@/components/ui/marquee";

const items = [
  { img: "/1.png" },
  { img: "/2.png" },
  { img: "/3.png" },
  { img: "/4.png" },
  { img: "/5.png" },
  { img: "/6.png" },
  { img: "/7.png" },
  { img: "/8.png" },
  { img: "/9.png" },
  { img: "/10.png" },
  { img: "/11.png" },
  { img: "/12.png" },
];

function Card({ img }: { img: string }) {
  return (
    <div className="w-[220px] h-[140px] bg-white rounded-2xl border shadow-sm overflow-hidden mx-2">
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

export default function ShowcaseMarquee() {
  return (
    <div className="w-full py-10 bg-white overflow-hidden">

      {/* Slower First Row */}
      <Marquee pauseOnHover className="[--duration:70s]">
        {items.map((item, i) => (
          <Card key={i} img={item.img} />
        ))}
      </Marquee>

      {/* Slower Reverse Row */}
      <Marquee reverse pauseOnHover className="[--duration:70s] mt-6">
        {items.map((item, i) => (
          <Card key={i} img={item.img} />
        ))}
      </Marquee>

    </div>
  );
}