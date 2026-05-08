"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const Orbit = () => {
  const innerImages = ["/logo1.png", "/logo2.png", "/logo3.png"];

  const outerImages = [
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
    "/logo9.png",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f7f7] py-12">
      <div className="mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-black">
            Seamless Integration with any React stack
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg leading-7 text-neutral-500">
            Effortlessly integrate our components, blocks, templates,
            and themes into any React.js stack.
          </p>
        </div>

        {/* RIGHT ORBIT */}
        <div
          className="
            relative flex items-center justify-center
            w-full max-w-[320px] aspect-square
            sm:max-w-[380px]
            md:max-w-[420px]
            lg:w-[420px] lg:h-[420px] lg:max-w-none
          "
        >

          {/* CENTER LOGO */}
          <div className="z-20 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-black shadow-lg">
            <Image
              src="/logo1.png"
              alt="center"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>

          {/* INNER ORBIT */}
          <OrbitingCircles
            radius={window?.innerWidth >= 1024 ? 95 : 75}
            duration={20}
            path
            iconSize={52}
          >
            {innerImages.map((img, index) => (
              <div
                key={index}
                className="flex h-full w-full items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm"
              >
                <Image src={img} alt="" width={24} height={24} />
              </div>
            ))}
          </OrbitingCircles>

          {/* OUTER ORBIT */}
          <OrbitingCircles
            radius={window?.innerWidth >= 1024 ? 175 : 130}
            duration={35}
            reverse
            path
            iconSize={58}
          >
            {outerImages.map((img, index) => (
              <div
                key={index}
                className="flex h-full w-full items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm"
              >
                <Image src={img} alt="" width={28} height={28} />
              </div>
            ))}
          </OrbitingCircles>

        </div>
      </div>
    </section>
  );
};

export default Orbit;