import Document from "./icons/document";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "../../../styles/Navbar.module.scss";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Link from "next/link";	


export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const timeLine = gsap.timeline({ defaults: {ease: "power4.out" } });
        timeLine.fromTo(
            `.${styles.bar}`,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
            `.${styles.link}`,
            { opacity: 0, stagger: 0.1 },
            { opacity: 1, stagger: 0.2, duration: 0.4 },
            '<.5'
        )
        .fromTo(
            `.abhishek`,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.4 },
            '<.5'
        )
        .fromTo(
            `.purohit`,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4 },
            '<.0'
        )
    }, []);

    return (
        <>
            <nav className={`${styles.bar} md:py-5 py-3 px-6 md:px-0 backdrop-blur-md z-50`}>
                <div className="md:px-12 mx-auto">
                    <div className="flex justify-between relative  z-30">
                        <Link href="/" className={`flex items-center ${styles.logo}`}>
                            <span className="abhishek mr-1">Abhishek</span>
                            {/* <span className={`text-tertiary text-5xl font-bold ${styles.logoX}`}></span> */}
                            <span className="purohit ml-1">Purohit</span>
                        </Link>
                        <div className="md:flex hidden space-x-3 items-center">
                            <AnchorLink className={styles.link} href='#about'>About</AnchorLink>
                            <AnchorLink className={styles.link} href='#knowlodge'>Knowledge</AnchorLink>
                            <AnchorLink className={styles.link} href='#experience'>Experience</AnchorLink>
                            <AnchorLink className={styles.link} href='#projects'>Projects</AnchorLink>
                            <AnchorLink className={styles.link} href='#contact'>Contact</AnchorLink>
                            <a className={`${styles.curriculum} flex items-center rounded-lg text-sm px-4 py-2`} href="/resume.pdf" target="_blank" rel="noreferrer">
                                <Document></Document>
                                <p className="ml-3">Resume</p>
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button 
                                className={menuActive? `${styles.box} ${styles.active}` : `${styles.box}`} 
                                onClick={() => setMenuActive(!menuActive)}
                                type="button"
                                aria-label="hamburguer menu">
                                <div className={styles.hamburguer}></div>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="noise"></div>
            </nav>
            <aside className={menuActive? `${styles.mobile} ${styles.on} backdrop-blur-md` : `${styles.mobile}`}>
                <div className="flex flex-col gap-3 justify-end text-right m-0 ml-auto relative z-10">
                    <AnchorLink onClick={() => setMenuActive(!menuActive)} className="text-xl py-2 " href='#about'>About</AnchorLink>
                    <AnchorLink onClick={() => setMenuActive(!menuActive)} className="text-xl py-2 " href='#knowlodge'>Knowledge</AnchorLink>
                    <AnchorLink onClick={() => setMenuActive(!menuActive)} className="text-xl py-2 " href='#experience'>Experience</AnchorLink>
                    <AnchorLink onClick={() => setMenuActive(!menuActive)} className="text-xl py-2 " href='#projects'>Projects</AnchorLink>
                    <AnchorLink onClick={() => setMenuActive(!menuActive)} className="text-xl py-2 " href='#contact'>Contact</AnchorLink>
                    <a className={`${styles.curriculum} flex items-center text-sm px-4 py-3 justify-center mt-10 rounded-lg`}  href="/resume.pdf" target="_blank" rel="noreferrer">
                        <Document></Document>
                        <p className="ml-3">Resume</p>
                    </a>
                </div>
                <div className="noise"></div>
            </aside>
        </>
    )
}