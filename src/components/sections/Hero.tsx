export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <h1 className="my-10 mx-1 text-7xl font-hero text-center justify-self-center">
          howdy! i'm JD
        </h1>
        <div className="p-[3px] bg-gradient-to-br from-indigo-300 rounded-lg">
          <img
            src="/src/assets/heropic.jpg"
            alt="JD Giovannetti"
            className="max-h-60 shadow-md rounded-lg"
          ></img>
        </div>
        <h2 className="text-center text-2xl my-8">
          A software developer with a love for delivering value in all that I
          create.
        </h2>
        <button className="bg-slate-200 p-4 rounded-md text-2xl font-mono font-normal">
          ABOUT ME
        </button>
      </div>
    </>
  );
}
