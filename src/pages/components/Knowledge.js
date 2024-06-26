import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "../../../styles/Knowledge.module.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Computer from "./icons/computer";
import React from "./icons/react";

import Js from "./icons/js";
// import Node from "./icons/node";
import Jss from "./icons/jss";
import Next from "./icons/next"
import Redux from "./icons/redux";
import Sass from "./icons/sass";
import Tailwind from "./icons/tailwind";
import Typescript from "./icons/typescript";

import Triangle from "./icons/triangle";

gsap.registerPlugin(ScrollTrigger);

export default function Knowledge() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: "200px", opacity: 0, scale: 0.7 },
      {
        y: "0px",
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );
  }, []);

  return (
    <section id="knowlodge" className="mt-64 md:pt-20 relative">
      <div
        className={`${styles.box} relative rounded-2xl md:py-20 py-10 overflow-hidden z-10`}
        ref={ref}
      >
        <div className="md:grid grid-cols-4 items-center relative z-10">
          <div className="md:block hidden line w-full left-0 relative"></div>
          <div className="flex items-center title justify-center col-span-2 text-center">
            <Computer />
            <h2 className="ml-4 md:text-2xl text-lg font-semibold">
              What I have worked on
            </h2>
          </div>
          <div className="md:block hidden line w-full invert-side"></div>
        </div>

        <p className="md:my-16 my-8 md:text-base text-sm md:px-0 px-3 text-center text-secondary">
          These are some of the technologies I have used and have great
          familiarity with:
        </p>

        <div className="mt-10 grid md:grid-rows-4 grid-rows-6 grid-flow-col justify-center gap-4">
          <div className={styles.technology}>
            <React />
            <p className="text-lg text-secondary">React</p>
          </div>
          <div className={styles.technology}>
            <Redux />
            <p className="text-lg text-secondary">Redux</p>
          </div>
          <div className={styles.technology}>
            <Js />
            <p className="text-lg text-secondary">JS (ES6+)</p>
          </div>
          <div className={styles.technology}>
            <Tailwind/>
            <p className="text-lg text-secondary">Tailwind</p>
          </div>
          <div className={styles.technology}>
            <Next/>
            <p className="text-lg text-secondary">Nextjs</p>
          </div>
          <div className={styles.technology}>
            <Typescript />
            <p className="text-lg text-secondary">Typescript</p>
          </div>
          <div className={styles.technology}>
            <Jss/>
            <p className="text-lg text-secondary">Jss</p>
          </div>
          <div className={styles.technology}>
            <Sass/>
            <p className="text-lg text-secondary">Sass</p>
          </div>
        </div>
        <div className="noise"></div>
      </div>
      <div className={styles.triangle}>
        <Triangle />
      </div>
    </section>
  );
}
