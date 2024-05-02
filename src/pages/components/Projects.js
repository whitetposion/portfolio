import { useEffect, useRef } from "react";
import styles from "../../../styles/Projects.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Mouse from "./icons/mouse";
import Github from "./icons/github";
import Link from "./icons/link";
import projects from "../../projects.json"
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
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
  }, []);

  

  return (
    <section id="projects" className="mt-64 relative">
      <h2 className="section-title" ref={ref}>
        Projects
      </h2>

      <div className="mt-20 mb-10 flex items-center">
        <div className="flex items-center title">
          <Mouse />
          <h3 className="ml-4 md:text-2xl text-lg w-max font-semibold">
            Projects / Live link
          </h3>
        </div>
        <div className="line ml-6 w-full"></div>
      </div>

      <div className="md:px-4 px-0 grid md:grid-cols-2 md:gap-4">
        {projects.map((project, index) => (
          <div
            className={`${styles.project} md:mt-10 mt-4 overflow-hidden relative md:px-8 px-5 py-6 rounded-2xl`}
            key={index}
          >
            <div className="md:flex-row justify-between items-center w-full relative z-10">
              <div className="">
                <div className="flex flex-row items-center">
                  <h3 className="font-bold text-xl">{project.name}</h3>
                </div>

                <div className="flex flex-row mt-4">
                  <a
                    href={project.repo}
                    aria-label="github"
                    className="rounded-full bg-dark p-2 mr-2 cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                  
                  <a
                    href={project.homepage}
                    aria-label="link"
                    className="rounded-full bg-dark p-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link />
                  </a>
                  
                </div>

                <div className="my-6 min-h-[265px] max-w-[408px] rounded px-4 py-4 relative z-10 ">
                  <Image src={project.image} fill />
                </div>

                <div className="flex flex-row flex-wrap">
                  {project.topics.map((topic, index) => (
                    <span
                      className="px-2 py-1 font-normal text-sm text-tertiary rounded-md mr-2 mt-2"
                      key={index}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="noise"></div>
          </div>
        ))}
      </div>

      <a
        className="button mt-10 max-w-max flex items-center mx-auto mb-10"
        href="https://github.com/whitetposion"
        target="_blank"
        rel="noreferrer"
      >
        <Github /> <span className="ml-2">My Repositries</span>
      </a>
      <div className="w-full flex justify-center ">
        <GitHubCalendar username="whitetposion" />
      </div>
    </section>
  );
}
