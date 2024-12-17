"use client";

import { MouseFollower } from "@/components/mouse-follower";
import Hero from "@/components/hero";
import { MiniHero } from "@/components/mini-hero";
import PortfolioSlider from "@/components/proyect-slider";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import type { RefObject } from "react";
import Proyects from "@/components/proyect-page";
import { ProyectMobileDesign } from "@/components/proyects-mobile";

export default function Page() {
  const container: RefObject<HTMLDivElement> = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative h-[200vh] max-w-full">
      <Hero scrollYProgress={scrollYProgress} />
      <MouseFollower size={70} />
      <MiniHero scrollYProgress={scrollYProgress} />
      <PortfolioSlider />
      <div className="hidden lg:block">
        <Proyects />
      </div>
      <div className="lg:hidden">
        <ProyectMobileDesign /> F
      </div>
    </main>
  );
}
