export default function Intro() {
    return (
        <section
            id="about-me"
            className="py-10 flex flex-col items-center mx-1 scroll-mt-16"
        >
            <h1 className="inline mx-2 font-bold text-4xl text-center border-b-2 border-indigo-300 pb-4 mb-8">
                Who Am I?
            </h1>
            <div className="flex flex-col items-center drop-shadow-sm p-4 mx-2 rounded-md">
                <img
                    src="/src/assets/heropic.jpg"
                    alt="JD Giovannetti"
                    className="max-h-60 rounded-full shadow-md shadow-indigo-200"
                ></img>
                <p className="m-5 text-center text-lg text-slate-600">
                    I'm a software developer with a B.S. in Computer Science and
                    a minor in Business Analytics from Biola University. It's my
                    jam to solve problems that provide real, tangible value for
                    end-users while uplifting the organizations I work with.
                </p>
                <p className="m-5 text-center text-lg text-slate-600">
                    I love to create technology with a focus on user interface
                    and user experience. I always aim to ensure that everything
                    I develop feels like it "just works."
                </p>
            </div>
        </section>
    );
}
