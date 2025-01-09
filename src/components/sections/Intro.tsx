import HorizontalRule from "../layout/HorizontalRule";
export default function Intro() {
  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="inline font-mono font-bold text-5xl border-b-2 border-indigo-300 pb-4  mb-8">
        WHO AM I?
      </h1>
      <p className="text-lg mx-5 text-center">
        I'm a software developer with a B.S. in Computer Science and a minor in
        Business Analytics from Biola University. I love to solve problems that
        provide real, tangible value for end-users while uplifting the
        organizations I work with. I love to create technology that has a focus
        on the UX and efficiency, so I always aim to make sure everything I
        write "just works."
      </p>
      <HorizontalRule></HorizontalRule>
    </div>
  );
}
