"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { TarjetaParallax } from "../cards/tarjeta-parallax";
import { tarjetas } from "@/lib/data";

export default function PaginaPrincipal() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Reducción de la duración para una respuesta más rápida
      easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), // Easing cuadrático suave
      orientation: "horizontal",
      smoothWheel: true,
      gestureOrientation: "horizontal", // Permitir gestos horizontales
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
      <div className="bg-red-400">
          <h1 className=" text-3xl font-bold text-white">Bienvenido
            </h1>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {tarjetas.map((tarjeta, i) => (
          <TarjetaParallax key={tarjeta.id} {...tarjeta} indice={i} />
        ))}
      </div>
    </main>
  );
}
