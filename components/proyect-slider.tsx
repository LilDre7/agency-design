"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  services: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/info.jpg",
    services: [
      "Branding Design",
      "Website Design",
      "App Design",
      "Development",
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/hero.webp",
    services: ["UI/UX Design", "Development", "Marketing"],
  },
];

export default function PortfolioSlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentProject = projects[Math.abs(page) % projects.length];

  return (
    <motion.div
      className="relative sm:mt-0 min-h-screen w-full overflow-hidden bg-gray-900"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <div
            className="relative h-full w-full"
            style={{
              backgroundImage: `url(${currentProject.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative h-full p-8 md:p-16">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-white md:text-6xl"
                  >
                    {currentProject.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-xl text-gray-300"
                  >
                    {currentProject.description}
                  </motion.p>
                </div>

                <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2"
                  >
                    {currentProject.services.map((service, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-800/50 px-4 py-2 text-sm text-white backdrop-blur-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="group relative h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                      View
                      <br />
                      Details
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </motion.div>
  );
}
