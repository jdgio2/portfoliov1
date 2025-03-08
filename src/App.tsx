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
            duration: 6,
            ease: "power3",
        });
        const yTo = gsap.quickTo("#ultrablob", "y", {
            duration: 6,
            ease: "power3",
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

        gsap.fromTo(
            "#ultrablob",
            { backgroundColor: "oklch(0.885 0.062 18.334)" },
            {
                backgroundColor: "oklch(0.902 0.063 306.703)",
                yoyo: true,
                repeat: Infinity,
                duration: 8,
            }
        );
    });
    return (
        <>
            <div
                id="ultrablob"
                className="w-48 h-48 rounded-full fixed bg-red-200 -z-10 pointer-events-none blur-3xl"
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
