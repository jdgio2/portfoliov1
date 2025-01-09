export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <h1 className="my-10 mx-1 text-5xl font-hero text-center justify-self-center">
          howdy! i'm JD
        </h1>
        <div className="p-[3px] bg-gradient-to-br from-indigo-300 rounded-lg">
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
        <button
          className="transition ease-in-out bg-slate-200 p-4 
        rounded-md text-2xl font-mono font-normal hover:bg-slate-300 hover:slate-800 shadow-md
        active:bg-slate-500"
        >
          ABOUT ME
        </button>
      </div>
    </>
  );
}
