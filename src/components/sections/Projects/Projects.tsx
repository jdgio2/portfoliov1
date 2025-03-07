import MyDialog from "../../layout/MyDialog";
import Carousel from "./Carousel";
import { useState } from "react";
import tester from "../../../assets/projects/testerimage.jpg";
import tester2 from "../../../assets/projects/tester2.png";
import tester3 from "../../../assets/projects/tester3.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const [proj1Open, setProj1Open] = useState(false);
    const [proj2Open, setProj2Open] = useState(false);
    const [proj3Open, setProj3Open] = useState(false);

    useGSAP(() => {
        gsap.utils.toArray("#projects *").forEach((el) =>
            gsap.from(el as gsap.TweenTarget, {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top 40% center",
                },
            })
        );
    });

    return (
        <section
            id="projects"
            className="py-10 flex flex-col items-center mx-1 scroll-mt-16"
        >
            <h1 className="text-center mx-2 inline font-bold text-4xl border-b-2 border-indigo-300 pb-4 mb-8">
                PROJECTS
            </h1>

            <MyDialog open={proj1Open} setOpen={setProj1Open}>
                <Carousel images={[tester, tester2, tester3]}></Carousel>
                <p>Deets</p>
            </MyDialog>
            <MyDialog open={proj2Open} setOpen={setProj2Open}>
                <p>Details for Project 2</p>
            </MyDialog>
            <MyDialog open={proj3Open} setOpen={setProj3Open}>
                <p>Details for Project 3</p>
            </MyDialog>

            <div className="flex flex-col items-center justify-items-center p-2 gap-12">
                <button
                    className="bg-slate-100 border-indigo-100 h-60 w-60 rounded-full cursor-pointer py-6 px-8 mx-2 drop-shadow-md transition-[scale] hover:shadow-xs hover:drop-shadow-lg"
                    onClick={() => setProj1Open(true)}
                >
                    <img
                        className="w-full h-full object-contain"
                        src="src/assets/projects/logos/pythontocpp.svg"
                        alt="Python to C++ Interpreter"
                    />
                </button>
                <button
                    className="bg-slate-100 border-indigo-100 h-60 w-60 rounded-full cursor-pointer py-6 px-8 mx-2 drop-shadow-md transition-[scale] hover:shadow-xs hover:drop-shadow-lg"
                    onClick={() => setProj2Open(true)}
                >
                    <img
                        className="w-full h-full object-contain"
                        src="src/assets/projects/logos/sudokuapp.svg"
                        alt="Sudoku App"
                    />
                </button>
                <button
                    className="bg-slate-100 border-indigo-100 h-60 w-60 rounded-full cursor-pointer py-6 px-8 mx-2 drop-shadow-md transition-[scale] hover:shadow-xs hover:drop-shadow-lg"
                    onClick={() => setProj3Open(true)}
                >
                    <img
                        className="w-full h-full object-contain"
                        src="src/assets/projects/logos/entask.svg"
                        alt="Entask"
                    />
                </button>
            </div>
        </section>
    );
}
