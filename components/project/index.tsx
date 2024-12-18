/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Index({ index, title, setModal, src }: any) {
  const projectRef = useRef(null); // Referencia al contenedor principal del proyecto
  const imageRef = useRef(null); // Referencia a la imagen
  const textRef = useRef(null); // Referencia al contenedor de texto

  useEffect(() => {
    const element = projectRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Animación para la imagen
    gsap.fromTo(
      image,
      { opacity: 0, y: -100 }, // Desde opacidad 0 y posición -100 en Y
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.out", // Efecto de rebote al caer
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animación para el texto (título y subtítulo)
    gsap.fromTo(
      text,
      { opacity: 0, x: -100 }, // Desde opacidad 0 y posición -100 en X (izquierda)
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={projectRef}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <div ref={textRef} className={styles.textContainer}>
        <h2>{title}</h2>
        <p>Design & Development</p>
      </div>

      <div className="overflow-hidden md:hidden">
        <Image
          ref={imageRef}
          className=""
          src={src}
          alt="image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
