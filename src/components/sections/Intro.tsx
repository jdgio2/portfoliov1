import HorizontalRule from "../layout/HorizontalRule";
export default function Intro() {
  return (
    <section
      id="intro"
      className="py-10 flex flex-col items-center mx-1 scroll-mt-32"
    >
      <h1 className="text-center mx-2 inline font-black font-bold text-5xl border-b-2 border-onahau-300 pb-4 mb-8">
        WHO AM I?
      </h1>
      <div className="p-[3px] bg-linear-to-br  from-onahau-300 rounded-lg">
        <img
          src="/src/assets/heropic.jpg"
          alt="JD Giovannetti"
          className="max-h-60 shadow-md rounded-lg"
        ></img>
      </div>
      <p className="text-md mx-5 text-center">
        I'm a software developer with a B.S. in Computer Science and a minor in
        Business Analytics from Biola University. I love to solve problems that
        provide real, tangible value for end-users while uplifting the
        organizations I work with. I love to create technology that has a focus
        on the UX and efficiency, so I always aim to make sure everything I
        write "just works."
      </p>
      <HorizontalRule></HorizontalRule>
    </section>
  );
}
