import { useState } from "react";
import MyDialog from "../../layout/MyDialog";
import SkillHoverableIcon from "./SkillHoverableIcon";
import { DialogTitle } from "@headlessui/react";
import { validIcons, IconKey } from "../../../assets/validicons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
    const [open, setOpen] = useState(false);

    useGSAP(() => {
        gsap.utils.toArray("#skills *").forEach((el) =>
            gsap.from(el as gsap.TweenTarget, {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: { trigger: "#skills", start: "top 40% center" },
            })
        );
    });

    return (
        <section
            id="skills"
            className="py-10 my-10 flex flex-col items-center mx-1 scroll-mt-16"
        >
            <h1 className="text-center mx-2 inline font-bold text-4xl border-b-2 border-indigo-300 pb-4 mb-8">
                SKILLS AND TECHNOLOGIES
            </h1>

            {/* The dialog itself */}
            <MyDialog open={open} setOpen={setOpen}>
                <div>
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
                            if (
                                validIcons[item as IconKey].iconType === "other"
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
                    <p className="md:hidden font-black mt-6 text-xl text-slate-400 text-center">
                        TAP TO SEE TITLES
                    </p>
                    <p className="hidden md:block font-black mt-6 text-xl text-slate-400 text-center">
                        HOVER TO SEE TITLES
                    </p>
                </div>
            </MyDialog>

            {/* The container to click to open the dialog */}
            <button
                className="bg-slate-100 border-indigo-100 rounded-2xl cursor-pointer 
                py-6 px-8 mx-2 max-w-[800px]
                drop-shadow-md transition-[scale] hover:shadow-xs hover:drop-shadow-lg"
                onClick={() => setOpen(true)}
            >
                <div className="flex flex-row justify-center gap-10 flex-wrap">
                    {Object.keys(validIcons).map((item, i) =>
                        i <= 9 ? (
                            <img
                                className="h-24 w-24"
                                src={validIcons[item as IconKey].imgUrl}
                                alt={validIcons[item as IconKey].name}
                            />
                        ) : (
                            <></>
                        )
                    )}
                </div>
                <p className="hidden md:block font-black mt-6 text-xl text-slate-400">
                    CLICK TO EXPAND
                </p>
                <p className="md:hidden font-black mt-6 text-xl text-slate-400">
                    TAP TO EXPAND
                </p>
            </button>
        </section>
    );
}
