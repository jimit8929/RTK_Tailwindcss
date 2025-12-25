import { Container } from "@/components/Container";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen pt-4 pb-10 lg:pt-4 lg:pb-10 [--background-width:308.4%] lg:[--background-width:198.96%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="max-w-7xl mx-auto absolute inset-0 min-h-screen w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-400 via-transparent to-neutral-400 pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-400 via-transparent to-neutral-400 pointer-events-none z-0" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>

      <div className="relative w-full ">
        <div className="absolute inset-x-0 h-px w-full bg-linear-to-r from-neutral-400 via-transparent to-neutral-400 pointer-events-none z-0" />
        <div className="max-w-5xl mx-auto mt-6">
          <Image
            src="/hero-ui-v6.webp"
            height={1000}
            width={1000}
            alt="hero_img"
            draggable={false}
            loading="lazy"
            className="rounded-2xl w-full object-cover object-left
            border border-neutral-200 shadow-2xl mask-[linear-gradient(to_bottom,black_40%,transparent_100%)]
            "
          />
        </div>
      </div>
    </div>
  );
}
