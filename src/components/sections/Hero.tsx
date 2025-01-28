import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(MotionPathPlugin);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".blob1", {
        duration: 10,
        repeat: -1,
        ease: "sine.inOut",
        motionPath: {
          path: "M150,150 A100,100 0 1,1 149.9,150",
          align: "self",
          alignOrigin: [0.5, 0.5],
        },
        yoyoEase: true,
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      id="hero"
      className="flex flex-col items-center mb-10 h-[95vh] justify-center z-10 overflow-hidden relative"
    >
      <div className="blob1 w-48 h-48 rounded-full absolute blur-3xl bg-red-200 -z-10 top-20 right-10"></div>
      <div className="blob2 w-48 h-48 rounded-full absolute blur-3xl bg-purple-200 -z-10 bottom-0 left-10 "></div>
      <div className="blob3 w-24 h-24 rounded-full absolute blur-3xl bg-red-200 -z-10 top-20 right-10"></div>
      <div className="blob4 w-24 h-24 rounded-full absolute blur-3xl bg-purple-200 -z-10 bottom-0 right-10"></div>
      <div className="blob5 w-48 h-48 rounded-full absolute blur-3xl bg-red-200 -z-10 top-20"></div>

      <h1 className="font-black my-10 mx-1 text-5xl text-center justify-self-center">
        howdy! i'm JD
      </h1>
      <h2 className="text-center text-xl my-8 mx-2 text-gray-500">
        A software developer with a love for delivering value in all that I
        create.
      </h2>
      <a href="#intro">
        <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
            <div className="relative z-10 flex items-center space-x-3">
              <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                Begin Journey
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
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
