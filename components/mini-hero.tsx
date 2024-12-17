"use client";

import { motion, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { miniHeroSocial, miniHeroSocialDesktop } from "@/lib/data";
import Image from "next/image";
import image from "../public/info.jpg";

export function MiniHero({ scrollYProgress }) {
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-0, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative min-h-screen w-full bg-white z-50 -mt-8 sm:-mt-0"
    >
      <div className="flex items-center justify-between p-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-base"
        >
          Digital Agency Based in
          <span className="pl-1 font-bold uppercase underline">
            Costa Rica, CR
          </span>
        </motion.p>
        <Button
          variant="outline"
          className="hidden sm:flex text-black border-black hover:bg-black hover:text-white transition-colors rounded-full"
        >
          GET IN TOUCH →
        </Button>
      </div>
      <div className="">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-8 text-2xl -tracking-tighter font-medium text-balance hover:text-gray-400 transition-all duration-300 sm:text-balance sm:text-3xl"
        >
          Based in the vibrant heart of Sydney, Australia, Kreativy is not just
          a digital agency; we&apos;re your partners in creativity. Our mission
          is to turn your dreams into reality, one pixel at a time. With a
          <span className="relative w-[40.5vw]">
            <Image
              src={image}
              alt="img"
              className="sm:max-w-80 w-90 h-16 bg-cover"
            />
          </span>
          diverse team of designers, developers, and innovators, we&apos;re
          constantly pushing the boundaries of what&apos;s possible in the
          digital world.
        </motion.p>
      </div>
      <div className="p-6 sm:p-0">
        <Button
          variant="outline"
          className="sm:hidden w-full flex text-black border-black hover:bg-black hover:text-white transition-colors rounded-full"
        >
          GET IN TOUCH →
        </Button>
      </div>
      <div className="m-3 sm:flex sm:justify-evenly">
        {/* mobile */}
        {miniHeroSocial.map((item, index) => (
          <motion.a
            key={index}
            className="sm:hidden flex flex-col pl-4 pb-4 underline font-medium text-xl"
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      {/* Desktop */}
      <div className="w-full sm:absolute sm:bottom-0 sm:flex sm:justify-between sm:items-center sm:p-5">
        <div className="hidden sm:flex sm:pt-5">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 underline text-xl cursor-pointer"
          >
            ABOUT US
          </motion.a>
        </div>
        <div className="flex flex-col items-end ">
          {miniHeroSocialDesktop.map((item, index) => (
            <motion.a
              key={index}
              className="pr-4 hidden sm:flex sm:flex-col pl-4 pb-4 underline font-medium cursor-pointer"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
