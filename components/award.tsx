"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Imagesx from "../public/me.jpeg";

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const image = Imagesx;

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, scale }}
      className="bg-black min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      <motion.h1
        style={{ y }}
        className="text-white text-pretty tracking-wider text-4xl md:text-6xl font-light mb-16 max-w-4xl px-4"
      >
        Nominated as the Agency of the Year among the top Digital Agencies
        globally.
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
        <motion.div
          className="w-64 h-64 relative"
          style={{
            rotateY: useTransform(scrollYProgress, [0, 0.5], [-45, 0]),
          }}
        >
          <div className="relative w-full h-full  transform rotate-12 shadow-2xl">
            <div className="absolute inset-0 flex items-end justify-center">
              <span>
                <Image
                  className="rounded-sm"
                  width={0}
                  height={0}
                  alt="image"
                  src={image}
                ></Image>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 flex-1">
          <motion.div
            className="bg-[#E8F1F9] p-6 rounded-sm"
            style={{
              x: useTransform(scrollYProgress, [0.3, 0.5], [100, 0]),
              opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
            }}
          >
            <h3 className="text-black text-xl font-medium">
              AWWWARDS SITE OF THE DAY & DEVELOPER AWARD
            </h3>
          </motion.div>

          <motion.div
            className="bg-[#E8F8F4] p-6 rounded-sm"
            style={{
              x: useTransform(scrollYProgress, [0.4, 0.6], [100, 0]),
              opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
            }}
          >
            <h3 className="text-black text-xl font-medium">
              FWA SITE OF THE DAY
            </h3>
          </motion.div>
        </div>
      </div>

      <motion.img
        src="/placeholder.svg?height=48&width=48"
        alt="Agency of the Year Nominee Badge"
        className="mt-12 w-12 h-12"
        style={{
          opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 0.5]),
          scale: useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]),
        }}
      />
    </motion.div>
  );
}
