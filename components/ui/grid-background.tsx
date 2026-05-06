export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full 
      bg-white 
      bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] 
      bg-[size:60px_60px] 
      [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
    />
  )
}