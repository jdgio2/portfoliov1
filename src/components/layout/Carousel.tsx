import tester from "../../assets/projects/testerimage.jpg";
export default function Carousel() {
  return (
    <div className="relative w-full h-42 bg-orange-700">
      <img className="object-cover" src={tester} alt="" />
      <button className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl">
        <div className="flex justify-center items-center w-9 h-9 rounded-full bg-slate-400 opacity-80">
          <p>{"<"}</p>
        </div>
      </button>
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl">
        <div className="flex justify-center items-center w-9 h-9 rounded-full bg-slate-400 opacity-80">
          <p>{">"}</p>
        </div>
      </button>
    </div>
  );
}
