"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5000,
    }),
  ]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(4);
    }
  }, [emblaApi, currentIndex]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [emblaApi, currentIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    // Set the initial index
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="mt-5 h-[400px] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {["01", "02", "03", "04"].map((item, index) => (
            <div
              key={index}
              className="md:p-5 flex-none basis-[100%] h-full bg-[url('/images/slider1.png')] bg-cover bg-center"
            >
              <div className="p-2 md:p-0 flex flex-col md:flex-row h-full gap-y-5 justify-center items-center md:items-end md:justify-between">
                <div className="flex items-center gap-x-2 max-w-2xl text-xs">
                  <span className="text-3xl md:text-6xl">{item}</span>
                  <div className="space-y-4 md:space-y-3">
                    <h6 className="font-light text-xl md:text-2xl">
                      MONALISA REDEFINED IN STYLE.
                    </h6>
                    <p className="font-extralight text-xs uppercase">
                      Start on : 08:00 GTS . Monday{" "}
                    </p>
                    <p className="md:text-base sm:text-sm">
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </p>
                  </div>
                </div>
                <div className="flex text-sm text-nowrap items-center md:justify-start justify-between gap-x-10 max-sm:w-full max-sm:pl-10">
                  <span className="border-b cursor-pointer">See more</span>
                  <button className="border cursor-pointer border-neutral-400 rounded-md  font-medium p-2">
                    Set a reminder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 md:mt-5">
        {/* Progress Bar */}
        <div className="relative bg-neutral-800 w-28 md:w-52 h-1.5 md:h-2 rounded-full overflow-hidden">
          <span
            className="bg-white absolute h-full left-0 transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentIndex + 1) * 100) / 4}%`,
            }}
          ></span>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-x-3">
          <button
            onClick={scrollPrev}
            className="cursor-pointer rounded-full p-2 md:p-3 bg-white/20 backdrop-blur-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="size-4 md:size-5" />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer rounded-full p-2 md:p-3 bg-white/20 backdrop-blur-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="size-4 md:size-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
