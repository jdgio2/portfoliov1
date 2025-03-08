import MyDialog from "../../layout/MyDialog";
import Carousel from "./Carousel";
import { useState } from "react";
import tester from "/assets/projects/testerimage.jpg";
import tester2 from "/assets/projects/tester2.png";
import tester3 from "/assets/projects/tester3.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface ProjectButtonProps {
    title: string;
    logoPath: string;
    setProjOpen: (arg0: boolean) => void;
}
function ProjectButton({ title, logoPath, setProjOpen }: ProjectButtonProps) {
    return (
        <button
            className="bg-slate-100 border-indigo-100 h-60 w-60 rounded-full cursor-pointer py-6 px-8 mx-2 drop-shadow-md transition-[scale] hover:shadow-xs hover:drop-shadow-lg"
            onClick={() => setProjOpen(true)}
        >
            <img
                className="w-full h-full object-contain"
                src={logoPath}
                alt={title}
            />
        </button>
    );
}

interface ProjectModalInfoProps {
    title: string;
    skills: Array<string>;
    description: string;
    images: Array<string>;
    url: string;
}
function ProjectModalInfo({
    title,
    skills,
    description,
    images,
    url,
}: ProjectModalInfoProps) {
    return (
        <>
            <Carousel images={images}></Carousel>
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <div className="flex flex-wrap gap-1 mb-4">
                {skills.map((item) => (
                    <span
                        className="px-2 rounded-full text-xs 
                        border-solid border border-violet-400 text-violet-800 bg-violet-200 font-light"
                    >
                        {item}
                    </span>
                ))}
            </div>
            <p className="mb-8">{description}</p>

            <a href={url} target="_blank">
                <button className="transition ease-in-out cursor-pointer bg-slate-200 py-1 px-6 rounded-sm font-semibold drop-shadow-xs hover:bg-slate-300 active:bg-slate-500">
                    Visit Site
                </button>
            </a>
        </>
    );
}

export default function Projects() {
    const [proj1Open, setProj1Open] = useState(false);
    const [proj2Open, setProj2Open] = useState(false);
    const [proj3Open, setProj3Open] = useState(false);

    const proj1Skills = [
        "React",
        "Tailwind",
        "Node.js",
        "TypeScript",
        "Electron",
    ];
    const proj2Skills = ["Java", "Android Studio"];
    const proj3Skills = ["C++", "Python"];

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
            className="my-10 py-10 flex flex-col items-center mx-1 scroll-mt-16"
        >
            <h1 className="text-center mx-2 inline font-bold text-4xl border-b-2 border-indigo-300 pb-4 mb-8">
                PROJECTS
            </h1>

            {/* The dialogs themselves */}
            <MyDialog open={proj1Open} setOpen={setProj1Open}>
                <ProjectModalInfo
                    title="Entask"
                    skills={proj1Skills}
                    description="Entask is an entirely local smart todo list/calendar app that does helps prioritize tasks based on deadlines and time needed, so you can just look at your tasks today and get cracking!"
                    images={[tester, tester2, tester3]}
                    url="https://github.com/matt-bowlby/entask"
                />
            </MyDialog>
            <MyDialog open={proj2Open} setOpen={setProj2Open}>
                <ProjectModalInfo
                    title="Python to C++ Interpreter"
                    skills={proj2Skills}
                    description="Details for Project 2"
                    images={[]}
                    url="#"
                />
            </MyDialog>
            <MyDialog open={proj3Open} setOpen={setProj3Open}>
                <ProjectModalInfo
                    title="Sudoku App"
                    skills={proj3Skills}
                    description="Details for Project 3"
                    images={[]}
                    url="#"
                />
            </MyDialog>

            {/* Buttons to open dialogs */}
            <div className="flex flex-col md:flex-row items-center justify-items-center p-2 gap-12">
                <ProjectButton
                    title="Entask"
                    logoPath="/assets/projects/logos/entask.svg"
                    setProjOpen={setProj1Open}
                />
                <ProjectButton
                    title="Python to C++ Interpreter"
                    logoPath="/assets/projects/logos/pythontocpp.svg"
                    setProjOpen={setProj2Open}
                />
                <ProjectButton
                    title="Sudoku App"
                    logoPath="/assets/projects/logos/sudokuapp.svg"
                    setProjOpen={setProj3Open}
                />
            </div>
        </section>
    );
}
