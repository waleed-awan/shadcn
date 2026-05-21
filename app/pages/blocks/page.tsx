
import ComponentLibrary from "@/components/cards";
import BlocksContent from "@/components/blockscontent";
import HeroBlocks from "@/components/heroblocks";

export default function HeroBlocksSection() {
  return (
    <section className="mx-auto w-full max-w-7xl border-x border-dashed border-zinc-200/10 ">
      
      {/* HERO SECTION */}
      <HeroBlocks/>

      {/* COMPONENT LIBRARY SECTION (FIXED OUTSIDE GRID ISSUE) */}
      <div>
        <ComponentLibrary />
        <BlocksContent/>
      </div>

    </section>
  );
}