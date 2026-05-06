"use client"

import Image from "next/image"

interface Props {
  leftImg: string
  rightImg: string
}

export default function InteractiveCard({ leftImg, rightImg }: Props) {
  return (
    <div className="group relative w-[300px] h-[200px] bg-[#f3f3f3] rounded-sm border border-gray-200 overflow-hidden">

     

      {/* LEFT IMAGE */}
      <div
        className="
          absolute -bottom-8 left-0 z-20 pl-2
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:left-1/2
          group-hover:bottom-1/6
          group-hover:-translate-x-1/2
          group-hover:translate-y-1/2
          group-hover:scale-150
        "
      >
        <div className="bg-white border rounded-sm shadow-md overflow-hidden transition-transform duration-700 group-hover:scale-110">
          <Image
            src={leftImg}
            alt="preview"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          absolute -top-8 right-0 w-[45%] pr-2 z-10
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:opacity-0
          group-hover:scale-75
          group-hover:translate-x-4
          group-hover:-translate-y-4
        "
      >
        <div className="bg-white border rounded-sm shadow-sm overflow-hidden transition-transform duration-700 group-hover:scale-110">
          <Image
            src={rightImg}
            alt="preview"
            width={400}
            height={250}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}