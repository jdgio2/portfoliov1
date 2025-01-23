export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center mb-10 h-full">
      <h1 className="my-10 mx-1 text-5xl font-black text-center justify-self-center">
        howdy! i'm JD
      </h1>
      <div className="p-[3px] bg-gradient-to-br  from-onahau-300 rounded-lg">
        <img
          src="/src/assets/heropic.jpg"
          alt="JD Giovannetti"
          className="max-h-60 shadow-md rounded-lg"
        ></img>
      </div>
      <h2 className="text-center text-2xl my-8 mx-2">
        A software developer with a love for delivering value in all that I
        create.
      </h2>

      <a href="#intro">
        <button className="btn btn-outline btn-accent">ABOUT ME</button>
      </a>
    </section>
  );
}
