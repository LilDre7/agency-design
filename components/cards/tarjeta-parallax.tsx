"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface PropsTarjetaParallax {
  titulo: string;
  descripcion: string;
  imagen: string;
  indice: number;
}

export function TarjetaParallax({
  titulo,
  descripcion,
  imagen,
  indice,
}: PropsTarjetaParallax) {
  const contenedor = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contenedor,
    offset: ["end start", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={contenedor}
      className="min-h-[10vh] sm:min-h-[70vh] md:min-h-[100vh] flex items-center justify-center relative my-12 sm:my-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: indice * 0.2,
      }}
    >
      <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#D8D3D3] rounded-lg overflow-hidden shadow-xl">
        <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-between z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif">
            {titulo}
          </h2>
          <p className="max-w-full sm:max-w-[80%] md:max-w-[60%] text-xs sm:text-sm md:text-base">
            {descripcion}
          </p>
        </div>
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image src={imagen} alt={titulo} fill className="object-cover object-center" />
        </motion.div>
      </div>
    </motion.div>
  );
}
