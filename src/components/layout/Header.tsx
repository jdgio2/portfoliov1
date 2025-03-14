import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
    const container = useRef(null);

    const tl = gsap.timeline();

    useGSAP(() => {
        tl.from("#logo-bg", {
            delay: 1,
            scale: 0,
            transformOrigin: "50% 50%",
            duration: 1.5,
            ease: "bounce.in",
        })
            .from("#logo-j", {
                scale: 0,
                transformOrigin: "50% 50%",
                duration: 0.3,
                ease: "power2.out",
            })
            .from("#logo-d", {
                scale: 0,
                transformOrigin: "50% 50%",
                duration: 0.3,
                ease: "power2.out",
            })
            .from(".nav-item", {
                opacity: 0,
                y: -20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });
    });

    return (
        <section
            ref={container}
            id="header"
            className="sticky top-0 left-0 right-0 z-50"
        >
            <nav className="justify-center md:justify-around items-center p-1 shadow-xs backdrop-blur-lg bg-linear-to-t via-white/50 via-20% from-white/20 to-white/100 flex flex-row">
                <a
                    href="#"
                    className="md:block text-lg font-semibold transition-[scale]"
                    aria-label="Logo"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="64.93"
                        height="64"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 225 225"
                    >
                        <path
                            id="logo-bg"
                            d="M225 112.5C225 174.632 174.632 225 112.5 225C50.368 225 0 174.632 0 112.5C0 50.368 50.368 0 112.5 0C174.632 0 225 50.368 225 112.5Z"
                            fill="black"
                        />
                        <path
                            id="logo-j"
                            d="M58.8 65.15C58.8 60.95 60.15 57.5 62.85 54.8C65.55 52.1 69.25 50.75 73.95 50.75C78.95 50.75 82.65 52.1 85.05 54.8C87.55 57.4 88.8 60.8 88.8 65C88.8 69.2 87.55 72.6 85.05 75.2C82.65 77.7 78.95 78.95 73.95 78.95C69.05 78.95 65.3 77.7 62.7 75.2C60.1 72.6 58.8 69.25 58.8 65.15ZM66.75 192.2C61.85 192.2 57.6 190.7 54 187.7C50.5 184.7 48.75 180.6 48.75 175.4C48.75 170.4 50.15 166.55 52.95 163.85C55.75 161.25 59.1 159.95 63 159.95C65.9 159.95 68.3 160.4 70.2 161.3C72.2 162.2 73.9 163.2 75.3 164.3C77.5 165.9 79.1 166.75 80.1 166.85C81.2 166.95 82 166.65 82.5 165.95C83.5 164.45 82.5 162.5 79.5 160.1L70.5 153.05C66.7 150.05 64 146.65 62.4 142.85C60.8 138.95 60 133.8 60 127.4L60.15 95.75C60.15 91.55 61.3 88.2 63.6 85.7C65.9 83.2 69.3 81.95 73.8 81.95C78.5 81.95 82 83.2 84.3 85.7C86.7 88.2 87.9 91.5 87.9 95.6L87.75 167.9C87.75 176.3 85.75 182.45 81.75 186.35C77.75 190.25 72.75 192.2 66.75 192.2Z"
                            fill="white"
                        />
                        <path
                            id="logo-d"
                            d="M122.982 161C104.782 161 95.6824 147.6 95.6824 120.8C95.6824 109.2 97.9324 99.95 102.432 93.05C106.932 86.05 113.682 82.55 122.682 82.55C127.582 82.55 131.532 83.55 134.532 85.55C137.632 87.55 140.032 90.3 141.732 93.8C143.532 97.2 144.832 101.15 145.632 105.65L146.082 105.5V60.05C146.082 55.95 147.282 52.5 149.682 49.7C152.182 46.8 155.782 45.35 160.482 45.35C165.082 45.35 168.482 46.8 170.682 49.7C172.982 52.5 174.132 56.05 174.132 60.35V127.85C174.132 131.25 174.382 134.4 174.882 137.3C175.482 140.1 175.932 142.9 176.232 145.7C176.532 149.5 175.732 152.8 173.832 155.6C172.032 158.3 168.782 160.05 164.082 160.85C157.982 161.85 153.432 160.8 150.432 157.7C147.532 154.6 146.082 150 146.082 143.9V138.35H143.232C143.232 145.65 141.382 151.25 137.682 155.15C134.082 159.05 129.182 161 122.982 161ZM120.732 119.45C120.732 122.55 121.682 124.85 123.582 126.35C125.482 127.85 128.882 128.6 133.782 128.6C138.782 128.6 142.232 127.85 144.132 126.35C146.032 124.85 146.982 122.55 146.982 119.45C146.982 116.25 146.032 113.95 144.132 112.55C142.332 111.05 138.932 110.3 133.932 110.3C128.932 110.3 125.482 111.05 123.582 112.55C121.682 113.95 120.732 116.25 120.732 119.45Z"
                            fill="white"
                        />
                    </svg>
                </a>
                <a
                    href="#about-me"
                    className="nav-item hidden md:block text-lg font-semibold hover:text-slate-600 transition-[scale]"
                >
                    About Me
                </a>
                <a
                    href="#skills"
                    className="nav-item hidden md:block text-lg font-semibold hover:text-slate-600"
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    className="nav-item hidden md:block text-lg font-semibold hover:text-slate-600"
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="nav-item hidden md:block text-lg font-semibold hover:text-slate-600"
                >
                    Contact
                </a>
            </nav>
        </section>
    );
}
