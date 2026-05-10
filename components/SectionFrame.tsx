export default function SectionFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">

      {/* TOP LEFT RHOMBUS */}
      <span className="absolute left-0 top-0 -translate-x-1/2 border border-gray-300 -translate-y-1/2 h-3 w-3 rotate-45 bg-neutral-100" />

      {/* TOP RIGHT RHOMBUS */}
      <span className="absolute right-0 top-0 translate-x-1/2 border border-gray-300 -translate-y-1/2 h-3 w-3 rotate-45 bg-neutral-100" />

      {children}
    </div>
  )
}