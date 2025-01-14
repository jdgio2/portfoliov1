import tester from "../../assets/projects/testerimage.jpg";
import tester2 from "../../assets/projects/tester2.png";
import tester3 from "../../assets/projects/tester3.jpg";
import { useEffect, useState } from "react";

export default function Carousel() {
  const images = [tester, tester2, tester3];
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  useEffect(() => {
    const timedUpdate = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      5000
    );

    return () => {
      clearInterval(timedUpdate);
    };
  }, [images.length, currentIndex]);

  return (
    <div className="relative w-full h-42 bg-orange-700">
      <div className="flex flex-row overflow-hidden bg-indigo-400">
        {images.map((item) => (
          <img
            className={`duration-300 transition-transform ease-in-out object-cover w-full h-full -translate-x-[${
              currentIndex * 100
            }%]`}
            src={item}
            alt=""
          />
        ))}
      </div>

      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl "
        onClick={handlePrev}
      >
        <div
          className="flex justify-center items-center w-9 h-9 rounded-full bg-slate-400 
        opacity-80 transition ease-in-out hover:bg-slate-500 hover:scale-110 active:bg-slate-700 "
        >
          <p>{"<"}</p>
        </div>
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
        onClick={handleNext}
      >
        <div
          className="flex justify-center items-center w-9 h-9 rounded-full bg-slate-400 
        opacity-80 transition ease-in-out hover:bg-slate-500 hover:scale-110 active:bg-slate-700 "
        >
          <p>{">"}</p>
        </div>
      </button>
    </div>
  );
}
