import emailjs from "@emailjs/browser";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    useGSAP(() => {
        gsap.utils.toArray("#contact *").forEach((el) =>
            gsap.from(el as gsap.TweenTarget, {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                scrollTrigger: { trigger: "#contact", start: "top 40% center" },
            })
        );
    });
    const [submissionStatus, setSubmissionStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.currentTarget;

        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const email = form.email.value;
        const message = form.message.value;

        // check for empty fields and valid email address
        // maybe add some toast notifications later
        const newErrors = {
            firstName: firstName.trim() === "",
            lastName: lastName.trim() === "",
            email:
                email.trim() === "" ||
                !email.includes("@") ||
                !email.includes("."),
            message: message.trim() === "",
        };
        if (Object.values(newErrors).some((error) => error)) {
            setSubmissionStatus("error");
            return;
        }

        // else no errors
        setSubmissionStatus("submitting");
        emailjs
            .sendForm("portfolio_contact", "portfolio_contact_form", form, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setSubmissionStatus("success");
                },
                (error) => {
                    setTimeout(() => {
                        console.log("FAILED...", error.text);
                        setSubmissionStatus("error");
                    }, 1000);
                }
            );
    }
    return (
        <section
            id="contact"
            className="py-10 mt-10 flex flex-col items-center mx-1 scroll-mt-16"
        >
            <h1 className="inline mx-2 font-bold text-4xl text-center border-b-2 border-indigo-300 pb-4 mb-8">
                CONTACT ME
            </h1>
            <form
                onSubmit={sendEmail}
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6"
            >
                <div className="sm:col-span-3">
                    <label
                        htmlFor="first_name"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base
                             text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                             placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
                             focus:outline-indigo-600 sm:text-sm/6"
                            required
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label
                        htmlFor="last_name"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
                            text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                            placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
                            focus:outline-indigo-600 sm:text-sm/6"
                            required
                        />
                    </div>
                </div>
                <div className="sm:col-span-full">
                    <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Your email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
              text-gray-900 outline-1 -outline-offset-1 outline-gray-300
              placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
              focus:outline-indigo-600 sm:text-sm/6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:outline-pink-500 invalid:text-pink-600
      focus:invalid:outline-pink-500 focus:invalid:ring-pink-500 peer"
                        />
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                        </p>
                    </div>
                </div>
                <div className="col-span-full">
                    <label
                        htmlFor="message"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        Message
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            className="block w-full rounded-md h-36 bg-white px-3 py-1.5 
              text-base text-gray-900 outline-1 -outline-offset-1 
              outline-gray-300 placeholder:text-gray-400 focus:outline-2 
              focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white font-semibold rounded-2xl shadow-2xl backdrop-blur-3xl p-2 cursor-pointer bg-neutral-900 shadow-indigo-900 hover:shadow-indigo-600 transition-shadow duration-300"
                >
                    {/* Show different types of  button depending on form submission state */}
                    {submissionStatus === "success" && "Success!"}
                    {submissionStatus === "error" && "ERROR"}
                    {submissionStatus === "idle" && "Submit"}
                    {submissionStatus === "submitting" && (
                        // spinner animation
                        <svg
                            aria-hidden="true"
                            className="justify-self-center w-8 h-8 text-gray-200 animate-spin fill-slate-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    )}
                </button>
            </form>
        </section>
    );
}
