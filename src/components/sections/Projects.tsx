import MyDialog from "../layout/MyDialog";
import Carousel from "../layout/Carousel";
import { useState } from "react";

export default function Projects() {
  const [proj1Open, setProj1Open] = useState(false);
  const [proj2Open, setProj2Open] = useState(false);
  const [proj3Open, setProj3Open] = useState(false);

  return (
    <section className="py-10 flex flex-col items-center mx-1">
      <h1 className="text-center mx-2 inline font-mono font-bold text-5xl border-b-2 border-indigo-300 pb-4 mb-8">
        PROJECTS
      </h1>

      {/* Dialogs */}
      <MyDialog open={proj1Open} setOpen={setProj1Open}>
        <Carousel></Carousel>
        <p>Deets</p>
      </MyDialog>
      <MyDialog open={proj2Open} setOpen={setProj2Open}>
        <p>Details for Project 2</p>
      </MyDialog>
      <MyDialog open={proj3Open} setOpen={setProj3Open}>
        <p>Details for Project 3</p>
      </MyDialog>

      <div className="flex flex-col items-center justify-items-center p-2 gap-12">
        <button
          className="bg-slate-100 border-indigo-100 h-60 w-60 drop-shadow-md hover:shadow-sm hover:drop-shadow-lg rounded-full"
          onClick={() => setProj1Open(true)}
        >
          Project 1
        </button>
        <button
          className="bg-slate-100 border-indigo-100 h-60 w-60 drop-shadow-md hover:shadow-sm hover:drop-shadow-lg rounded-full"
          onClick={() => setProj2Open(true)}
        >
          Project 2
        </button>
        <button
          className="bg-slate-100 border-indigo-100 h-60 w-60 drop-shadow-md hover:shadow-sm hover:drop-shadow-lg rounded-full"
          onClick={() => setProj3Open(true)}
        >
          Project 3
        </button>
      </div>
    </section>
  );
}
