// NOTE: You can only use up to 10 images in this carousel. See safelist in tailwind.config for info
import { useEffect, useState } from "react";

interface Props {
  images: Array<string>;
}

export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(1);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  useEffect(() => {
    if (autoScroll) {
      // use setTimeout here because we want the user's input to reset the timer
      const timedUpdate = setTimeout(
        () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
        5000
      );

      return () => {
        clearTimeout(timedUpdate);
      };
    }
  }, [images.length, currentIndex, autoScroll]);

  return (
    <div
      className="relative w-full h-42 bg-orange-700"
      onMouseEnter={() => setAutoScroll(0)}
      onMouseLeave={() => setAutoScroll(1)}
    >
      <div className="flex flex-row overflow-hidden bg-indigo-400">
        {images.map((item) => (
          <img
            key={item}
            className={`duration-300 transition-transform ease-in-out object-cover w-full h-full -translate-x-[${
              100 * currentIndex
            }%]`}
            src={item}
            alt=""
          />
        ))}
      </div>
      {/* arrow buttons only appear if there's more than one image*/}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl"
            onClick={handlePrev}
          >
            <div
              className="flex justify-center items-center w-9 h-9 rounded-full bg-slate-400 
        opacity-80 transition ease-in-out hover:bg-slate-500 hover:scale-110 active:bg-slate-700 font-mono"
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
        opacity-80 transition ease-in-out hover:bg-slate-500 hover:scale-110 active:bg-slate-700 font-mono"
            >
              <p>{">"}</p>
            </div>
          </button>
        </>
      )}
    </div>
  );
}
