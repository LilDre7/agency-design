"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export function ScrollButton() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        360;
      setRotation(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200/20 backdrop-blur-sm text-sm text-white/70 hover:bg-gray-200/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      animate={{ rotate: rotation }}
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <Linkedin />
    </motion.button>
  );
}
