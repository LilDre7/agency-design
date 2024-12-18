"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "../components/header";
import hello from "../public/me.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      tl.from(
        ".hero-image",
        {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tl.from(
        ".nav-item",
        {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=1"
      );

      // Animación de desplazamiento
      gsap.to(".hero-image", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 50,
        scale: 1.05,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <Header />

      <div
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        <div
          ref={textRef}
          className="hero-title absolute w-full text-center text-[20vw] leading-none font-bold text-black z-0"
        >
          MONOLITH
        </div>

        <Image
          ref={imageRef}
          src={hello}
          alt="Classical statue"
          className="hero-image relative z-10 h-[80vh] object-contain mix-blend-multiply"
        />
      </div>

      <div className="px-6 py-12">
        <div className="max-w-xl">
          <h2 className="text-xl font-medium mb-4">MONOLITH STUDIO</h2>
          <p className="text-lg mb-2">CONTEMPORARY TATTOO STUDIO</p>
          <p className="text-lg">BASED IN BROOKLYN, NYC</p>
        </div>
      </div>
    </main>
  );
}
