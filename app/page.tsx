"use client";

import { MouseFollower } from "@/components/mouse-follower";
import Hero from "@/components/hero";
import { MiniHero } from "@/components/mini-hero";
import PortfolioSlider from "@/components/proyect-slider";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import Proyects from "@/components/proyect-page";
import Lenis from "@studio-freight/lenis";
import { TarjetaParallax } from "../components/cards/tarjeta-parallax";
import { tarjetas } from "@/lib/data";

export default function Page() {
  const container: RefObject<HTMLDivElement> = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative h-[200vh] max-w-full">
      <MouseFollower size={70} />
      <Hero scrollYProgress={scrollYProgress} />
      <MiniHero scrollYProgress={scrollYProgress} />
      <PortfolioSlider />
      <div className="hidden lg:block">
        <Proyects />
      </div>
      <div className="bg-bgProyect bg-cover bg-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {tarjetas.map((tarjeta, i) => (
          <TarjetaParallax key={tarjeta.id} {...tarjeta} indice={i} />
        ))}
      </div>
    </main>
  );
}
