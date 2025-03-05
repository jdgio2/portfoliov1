import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export default function Hero() {
    const tl = gsap.timeline();
    useGSAP(() => {
        gsap.to(".blob0", {
            x: "random(-10, 300, 25)",
            y: "random(-100, 200, 25)",
            duration: 3.7,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob1", {
            x: "random(-400, 100, 25)",
            y: "random(-100, 200, 25)",
            duration: 5,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob2", {
            x: "random(-400, 100, 25)",
            y: "random(-100, 200, 25)",
            duration: 3.5,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob3", {
            x: "random(-400, 100, 25)",
            y: "random(-100, 200, 25)",
            duration: 3,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob4", {
            x: "random(-50, 400, 25)",
            y: "random(-400, 50, 25)",
            duration: 5,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob5", {
            x: "random(-400, 100, 25)",
            y: "random(-400, 50, 25)",
            duration: 3.9,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob6", {
            x: "random(-400, 100, 25)",
            y: "random(-400, 50, 25)",
            duration: 2.8,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.to(".blob7", {
            x: "random(-100, 300, 25)",
            y: "random(-400, 50, 25)",
            duration: 3.4,
            repeat: -1,
            repeatRefresh: true,
            ease: "sine.inOut",
        });
        gsap.from(".blob", { opacity: 0, duration: 4, stagger: 0.3 });
    });

    useGSAP(() => {
        tl.from(".h1-letter", {
            delay: 1,
            y: 100,
            opacity: 0,
            stagger: 0.1,
        })
            .from("#hero-h2", {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            })
            .from("#about-me-btn", {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            });
    });
    return (
        <section
            id="hero"
            className="flex flex-col items-center mb-10 h-[95vh] justify-center z-10 overflow-hidden relative"
        >
            <div className="blob blob0 w-72 h-72 rounded-full blur-3xl absolute bg-red-200 -z-10 top-20 left-10">
                blob0
            </div>
            <div className="blob blob1 w-72 h-72 rounded-full blur-3xl absolute bg-red-200 -z-10 top-20 right-10">
                blob1
            </div>
            <div className="blob blob2 w-24 h-24 rounded-full blur-2xl absolute bg-red-200 -z-10 top-20 right-100">
                blob2
            </div>
            <div className="blob blob3 w-48 h-48 rounded-full blur-3xl absolute bg-red-200 -z-10 top-20">
                blob3
            </div>
            <div className="blob blob4 w-48 h-48 rounded-full blur-3xl absolute bg-purple-200 -z-10 bottom-0 left-10 ">
                blob4
            </div>
            <div className="blob blob5 w-24 h-24 rounded-full blur-2xl absolute bg-purple-200 -z-10 bottom-0 right-10">
                blob5
            </div>
            <div className="blob blob6 w-72 h-72 rounded-full blur-3xl absolute bg-purple-200 -z-10 bottom-0 right-100">
                blob6
            </div>
            <div className="blob blob7 w-72 h-72 rounded-full blur-3xl absolute bg-purple-200 -z-10 bottom-0 left-50">
                blob7
            </div>

            <h1 className="font-black my-10 mx-1 text-6xl text-center justify-self-center">
                <span className="h1-letter inline-block">H</span>
                <span className="h1-letter inline-block">i</span>
                <span className="h1-letter inline-block">!</span>
                <span className="h1-letter inline-block">&nbsp;</span>
                <br />
                <span className="h1-letter inline-block">I</span>
                <span className="h1-letter inline-block">'</span>
                <span className="h1-letter inline-block">m</span>
                <span className="h1-letter inline-block">&nbsp;</span>
                <span className="h1-letter inline-block">J</span>
                <span className="h1-letter inline-block">D</span>
                <span className="h1-letter inline-block">.</span>
            </h1>

            <h2
                id="hero-h2"
                className="text-center text-xl my-8 mx-2 text-gray-500"
            >
                A software developer with a love for delivering value in all
                that I create.
            </h2>
            <a href="#about-me" id="about-me-btn">
                <button
                    className="relative inline-block p-px font-semibold leading-6 text-white 
                bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-indigo-900 transition-all 
                duration-300 ease-in-out active:scale-95 hover:shadow-indigo-600"
                >
                    <span
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500
                     via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 
                     group-hover:opacity-100"
                    />
                    <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                        <div className="relative z-10 flex items-center space-x-3">
                            <span
                                className="transition-all duration-500 group-hover:translate-x-1.5 
                            group-hover:text-indigo-300"
                            >
                                About Me
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 
                                group-hover:text-indigo-300"
                            >
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                            </svg>
                        </div>
                    </span>
                </button>
            </a>
        </section>
    );
}
