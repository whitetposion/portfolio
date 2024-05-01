import { useEffect, useRef } from "react";
import styles from "../../../styles/About.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import User from "./icons/user";
import Image from "next/image";
import me from "/public/me.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { x: "-200px", opacity: 0 },
      {
        x: "0px",
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );

    gsap.fromTo(
      `.${styles.imgBox}`,
      { scale: 0.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 150%",
          end: "bottom 0%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="mt-64 relative">
      <h2 className="section-title mt-60" ref={ref}>
        Abhishek
      </h2>
      <div className="mt-20 flex items-center">
        <div className="title flex items-center">
          <User />
          <h3 className="min-w-max md:ml-4 ml-2 md:text-2xl text-lg font-semibold">
            About me
          </h3>
        </div>
        <div className="line ml-6 w-full"></div>
      </div>

      <div className="md:mt-20 mt-10 md:grid grid-flow-col grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-secondary leading-relaxed">
          Hello! 👋 I'm Abhishek Purohit, a Mumbai-based BE graduate fueled by innovation. As a Frontend Developer, 
          I bring hands-on experience on React, Redux and various libraries.
          </p>

          <div className="mt-4 text-secondary leading-relaxed">
          
            <h4 className={`${styles.about_heading}`}>Tech Journey:</h4>
            <br/>
            <h4 className={`${styles.about_title}`}>Frontend:</h4>
              In the frontend realm, my expertise extends to designing React hooks for a streamlined design system, seamlessly integrating Formik, Zod, Supabase Auth, and leveraging the magic of GSAP, Chart.js for visually stunning websites.
          </div>

          <div className="mt-4 text-secondary leading-relaxed">
          
            <h4 className={`${styles.about_title}`}>Front-end libraries:</h4>
            Shadcn, Acceternity UI, Material UI, and Tailwind CSS. I'm all about making slick and user-friendly interfaces from design concepts. Troubleshooting and optimizing performance are my jam, ensuring top-notch frontend solutions. 
          </div>
          
          <div className="mt-4 text-secondary leading-relaxed mb-4">
      
            <h4 className={`${styles.about_title}`}></h4>
              
          </div>
          
          <ul
            className={`${styles.topics} grid md:grid-cols-3 grid-cols-2 gap-3 text-sm text-left`}
          >
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>UI/UX Designing</li>
            <li>Typescript</li>
          </ul>
        </div>

        <div className="md:col-span-1 md:mt-0 mt-20">
          <div className={`${styles.imgBox} mx-auto`}>
            <Image className={styles.img} src={me} alt="photo of abhishek purohit" />
            <Image
              className={styles.imgGlass}
              src={me}
              alt="photo of abhishek purohit"
            />
            <div className={styles.squareImg}>
              <div
                className={`${styles.xBox} ${styles.animate} ${styles.delay3}`}
              >
                <div className={styles.x}></div>
              </div>
              <div
                className={`${styles.xBox} ${styles.animate} ${styles.delay7}`}
              >
                <div className={styles.x}></div>
              </div>
              <div
                className={`${styles.xBox} ${styles.animate} ${styles.delay11}`}
              >
                <div className={styles.x}></div>
              </div>
              <div className={`${styles.xBox} ${styles.animate}`}>
                <div className={styles.x}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
