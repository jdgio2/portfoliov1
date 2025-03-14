import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    useGSAP(() => {
        gsap.utils.toArray("#about-me *").forEach((el) =>
            gsap.from(el as gsap.TweenTarget, {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#about-me",
                    start: "top 40% center",
                },
            })
        );
    });
    return (
        <section
            id="about-me"
            className="py-10 my-10 flex flex-col items-center mx-1 scroll-mt-16"
        >
            <h1 className="text-center mx-2 inline font-bold text-4xl border-b-2 border-indigo-300 pb-4 mb-8">
                WHO AM I?
            </h1>
            <div className="flex flex-col items-center p-4 mx-2 md:flex-row max-w-[1024px] gap-2 md:gap-16 rounded-xl bg-white/0 backdrop-blur-3xl shadow-lg ring-1 ring-black/5">
                <img
                    src="/assets/heropic.jpg"
                    alt="JD Giovannetti"
                    className="max-h-60 rounded-xl shadow-md shadow-indigo-200"
                ></img>
                <p className="m-5 text-center md:text-left text-lg text-neutral-900">
                    I'm a software developer with a B.S. in Computer Science and
                    a minor in Business Analytics from Biola University. It's my
                    jam to solve problems that provide real, tangible value for
                    end-users while uplifting the organizations I work with.
                    <br />
                    <br />I love to create technology with a focus on user
                    interface and user experience. I always aim to ensure that
                    everything I develop feels like it "just works."
                </p>
            </div>
        </section>
    );
}
