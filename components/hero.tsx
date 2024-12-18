/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import { NavMenu } from "./nav-menu";
import { ScrollButton } from "./scroll-button";
import { motion, useTransform } from "framer-motion";

const MouseFollower = dynamic(
  () => import("./mouse-follower").then((mod) => mod.MouseFollower),
  { ssr: true }
);

export default function Hero({ scrollYProgress }: { scrollYProgress: any }) {
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <motion.section
      style={{ scale, opacity, rotate }}
      className="sticky top-0 h-screen max-w-full bg-hero w-full bg-cover z-10"
    >
      <div className="hidden">
        <MouseFollower />
      </div>
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]" /> */}

      <div className="relative z-10">
        <NavMenu />

        <div className="flex flex-col w-full justify-center mx-auto px-8 pt-20 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-left text-5xl font-light leading-[1.1] tracking-tight max-w-6xl sm:mx-auto md:text-8xl lg:text-9xl"
          >
            Digital Agency
            <br />
            Based in Costa Rica.
          </motion.h1>

          <p className="w-full text-balance text-white/70 text-xl md:text-2xl mt-8 sm:text-right">
            At Kreativy, we&apos;re more than just a design agency—we&apos;re
            your creative companions on the journey to design excellence.
          </p>

          <div className="mt-10 sm:mt-6">
            <ScrollButton />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
