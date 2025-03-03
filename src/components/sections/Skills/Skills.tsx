import { useState } from "react";
import MyDialog from "./MyDialog";
import SkillHoverableIcon from "./SkillHoverableIcon";
import { DialogTitle } from "@headlessui/react";
import { validIcons, IconKey } from "../../../assets/validicons";
export default function Skills() {
    const [open, setOpen] = useState(false);

    return (
        <section
            id="skills"
            className="py-10 flex flex-col items-center mx-1 scroll-mt-32"
        >
            <h1 className="inline mx-2 font-bold text-4xl text-center border-b-2 border-indigo-300 pb-4 mb-8">
                Skills and Technologies
            </h1>

            <MyDialog open={open} setOpen={setOpen}>
                <DialogTitle className="text-center font-bold text-xl mb-4">
                    Technologies
                </DialogTitle>
                <div className="flex flex-row justify-center gap-10 flex-wrap">
                    {Object.keys(validIcons).map((item) => {
                        if (
                            validIcons[item as IconKey].iconType ===
                            "full-stack"
                        ) {
                            return (
                                <SkillHoverableIcon
                                    icon={item as IconKey}
                                    key={item}
                                ></SkillHoverableIcon>
                            );
                        }
                    })}
                </div>
                <DialogTitle className="text-center font-bold text-xl mb-4 mt-20 ">
                    Other Languages and Tools
                </DialogTitle>
                <div className="flex flex-row justify-center gap-10 flex-wrap">
                    {Object.keys(validIcons).map((item) => {
                        if (validIcons[item as IconKey].iconType === "other") {
                            return (
                                <SkillHoverableIcon
                                    icon={item as IconKey}
                                    key={item}
                                ></SkillHoverableIcon>
                            );
                        }
                    })}
                </div>
                <p className="md:hidden font-black mt-6 text-xl text-slate-400 text-center">
                    TAP TO SEE TITLES
                </p>
                <p className="hidden md:block font-black mt-6 text-xl text-slate-400 text-center">
                    HOVER TO SEE TITLES
                </p>
            </MyDialog>

            <button
                className="bg-slate-100 border-indigo-100 rounded-md cursor-pointer py-6 px-8 mx-2 drop-shadow-md transition-[scale] hover:shadow-xs hover:scale-105 hover:drop-shadow-lg"
                onClick={() => setOpen(true)}
            >
                <div className="flex flex-row justify-center gap-10 flex-wrap">
                    <i className="text-8xl devicon-html5-plain colored"></i>
                    <i className="text-8xl devicon-css3-plain colored"></i>
                    <i className="text-8xl devicon-javascript-plain colored"></i>
                    <i className="text-8xl devicon-typescript-plain colored"></i>
                    <i className="text-8xl devicon-react-plain colored"></i>
                    <i className="text-8xl devicon-nodejs-plain-wordmark colored"></i>
                    <i className="text-8xl devicon-express-original colored"></i>
                    <i className="text-8xl devicon-tailwindcss-plain colored"></i>
                    <i className="text-8xl devicon-postgresql-plain colored"></i>
                </div>
                <p className="font-black mt-6 text-xl text-slate-400">
                    CLICK TO EXPAND
                </p>
            </button>
        </section>
    );
}
