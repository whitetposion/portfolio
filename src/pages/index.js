import Head from "next/head";
import Navbar from "./components/Navbar";

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
      
    </>
  );
}
