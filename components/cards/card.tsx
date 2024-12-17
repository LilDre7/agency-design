"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { TarjetaParallax } from "../cards/tarjeta-parallax";
import { tarjetas } from "@/lib/data";

export default function PaginaPrincipal() {
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
    <main className="bg-[#E8E5E5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {tarjetas.map((tarjeta, i) => (
          <TarjetaParallax key={tarjeta.id} {...tarjeta} indice={i} />
        ))}
      </div>
    </main>
  );
}
