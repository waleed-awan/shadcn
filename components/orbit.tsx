"use client"

import Image from "next/image"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const Orbit = () => {
  const innerImages = ["/logo1.png", "/logo2.png", "/logo3.png"]

  const outerImages = [
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
    "/logo9.png",
  ]

  return (
    <section className="w-full overflow-hidden bg-[#f7f7f7] py-12">
      <div className="mx-auto flex  flex-col items-center gap-14 px-4 lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold leading-tight text-black md:text-4xl">
            Seamless Integration with any React stack
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-500 md:text-lg">
            Effortlessly integrate our components, blocks, templates,
            and themes into any React.js stack for a streamlined and
            efficient development experience.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex h-[420px] w-[420px] items-center justify-center">

          {/* CENTER LOGO */}
          <div className="z-20 flex h-16 w-16 items-center justify-center rounded-full bg-black shadow-lg">
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
            radius={95}
            duration={20}
            path
            iconSize={52}
          >
            {innerImages.map((img, index) => (
              <div
                key={index}
                className="flex h-full w-full items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm"
              >
                <Image
                  src={img}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            ))}
          </OrbitingCircles>

          {/* OUTER ORBIT */}
          <OrbitingCircles
            radius={175}
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
                <Image
                  src={img}
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            ))}
          </OrbitingCircles>

        </div>
      </div>
    </section>
  )
}

export default Orbit