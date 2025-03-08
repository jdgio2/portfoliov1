import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import Contact from "./components/sections/Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function App() {
    useGSAP(() => {
        // make ultrablob follow mouse
        const xTo = gsap.quickTo("#ultrablob", "x", {
            ease: "elastic.out",
            duration: 1,
        });
        const yTo = gsap.quickTo("#ultrablob", "y", {
            ease: "elastic.out",
            duration: 1,
        });
        window.addEventListener("mousemove", (e) => {
            const offsetX =
                document.querySelector<HTMLDivElement>(
                    "#ultrablob"
                )!.offsetWidth;
            const offsetY =
                document.querySelector<HTMLDivElement>(
                    "#ultrablob"
                )!.offsetHeight;
            xTo(e.clientX - offsetX / 2);
            yTo(e.clientY - offsetY / 2);
        });
        // change color
        // gsap will freak out if you try to interpolate between oklch values, but hex works
        gsap.to("#ultrablob", {
            backgroundColor: "#e9d4ff",
            repeat: -1,
            repeatDelay: 10,
            duration: 3,
            yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
        });
    });

    return (
        <>
            <div
                id="ultrablob"
                className="w-24 h-24 rounded-full fixed -z-10 bg-[#d5848e] pointer-events-none blur-3xl"
            ></div>
            <Header></Header>
            <Hero></Hero>
            <Intro></Intro>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}
