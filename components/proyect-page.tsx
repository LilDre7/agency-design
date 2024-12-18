"use client";

import Modal from "./modal";
import { useState } from "react";
import { projects } from "@/lib/data";
import Project from "../components/project";
import styles from "./project/style.module.css";

export default function Proyects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <section className="p-5 sm:p-11">
        <h1 className="text-5xl max-w-2 pb-6 md:w-full md:text-7xl">
          Our Services
        </h1>
        <a className="relative flex justify-end w-full translate-y-2" href="">
          <span className="hidden lg:flex absolute underline uppercase">
            VIEW ALL SERVICES
          </span>
        </a>
        <p className="p-1 text-2xl md:p-2 md:text-xl max-w-3xl">
          Our services are more than just solutions, they&apos;re opportunities
          to transform your digital presence and achieve your business
          objectives. We&apos;re here to make your digital dreams a reality.
        </p>
      </section>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            info={project.info}
            src={project.src}
            setModal={setModal}
            key={index}
          />
        ))}
      </div>
      <div className="hidden md:flex">
        <Modal modal={modal} projects={projects} />
      </div>
      <div className="relative mx-5 my-10 h-16 md:hidden">
        <a className="absolute right-0 uppercase underline">
          VIEW ALL SERVICES
        </a>
      </div>
    </main>
  );
}
