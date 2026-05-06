"use client"

import Image from "next/image"

type User = {
  name: string
  role: string
  img: string
}

const users: User[] = [
  {
    name: "Richard Thermo",
    role: "Senior Developer",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ali Khan",
    role: "UI Designer",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Omar",
    role: "Frontend Dev",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Sara",
    role: "Product Manager",
    img: "https://i.pravatar.cc/100?img=4",
  },
]

export default function AvatarHover() {
  return (
    <div className="flex -space-x-4 items-center">
      {users.map((user, i) => (
        <div key={i} className="relative group">
          
          {/* AVATAR */}
          <Image
            src={user.img}
            alt={user.name}
            width={48}
            height={48}
            className="rounded-full border-2 border-white cursor-pointer"
          />

          {/* POPUP */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2 
              -top-16 
              opacity-0 scale-90 
              group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1
              transition-all duration-200 ease-out delay-75
              pointer-events-none z-20
            "
          >
            <div
              className="
                bg-black text-white px-4 py-2 rounded-xl
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                whitespace-nowrap
                transform -rotate-6
              "
            >
              <p className="text-sm font-semibold leading-none">
                {user.name}
              </p>
              <p className="text-xs text-gray-300">
                {user.role}
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}