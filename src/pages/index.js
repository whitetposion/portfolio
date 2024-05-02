import Head from "next/head";
import Navbar from "@/pages/components/Navbar";
import Header from "@/pages/components/Header";
import About from "@/pages/components/About";
import Knowledge from "@/pages/components/Knowledge";
import Experience from "@/pages/components/JobExperience";
import Projects from "@/pages/components/Projects";

export default function Home() {
  const changeMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    localStorage.getItem("color-theme") === "light"
      ? localStorage.setItem("color-theme", "light")
      : localStorage.setItem("color-theme", "dark");
  };

  return (
    <>
      <Head>
        <title>Abhishek - Frontend Engineer</title>

        <meta name="author" content="Abhishek Purohit" />

        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <main className="overflow-hidden pb-10 w-full relative">
        <div className="md:mt-48 mt-24 mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-3xl md:px-4 px-6 w-full sm:px-6 lg:px-8 relative">
        <Header />
        <About/>
        <Knowledge/>
        <Experience/>
        <Projects/>
        </div>
        
      </main>
    </>
  );
}
