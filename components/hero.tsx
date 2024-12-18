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

      <div className="relative z-10">
        <NavMenu />

        <div className="flex flex-col w-full justify-center mx-auto px-7  pb-12">
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
            className="text-white text-left sm:text-start text-6xl font-light leading-[1.1] tracking-tight max-w-6xl md:text-9xl lg:text- mt-7 sm:mt-20"
          >
            Digital Agency
            <br />
            Based in Costa Rica.
          </motion.h1>

          <p className="w-full text-balance text-white/70 text-xl md:text-2xl mt-8 sm:mt-10 sm:text-right ">
            We&apos;re not just a design agency; we&apos;re your friendly design
            companions. Let&apos;s embark on this creative adventure together
            and bring your vision to life with a friendly, modern, and
            innovative touch.
          </p>

          <div className="mt-10 sm:mt-6">
            <ScrollButton />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
