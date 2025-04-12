"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const images = [
  { image: "/images/mini-carousel1.png", height: "h-[300px]" },
  { image: "/images/mini-carousel2.png", height: "h-[350px]" },
  { image: "/images/mini-carousel3.png", height: "h-[350px]" },
];

export function MobileCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      setCurrentIndex(emblaApi.selectedScrollSnap());
      emblaApi.on("select", () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="md:hidden my-10 max-w-6xl mx-auto px-5">
      <div className="relative h-[300px] " ref={emblaRef}>
        <span className="bg-blue-400/95 blur-md w-8 h-8 inline-block absolute -top-6 right-0" />
        {images.map(({ image, height }, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`inline-block absolute top-1/2 -translate-y-1/2 inset-x-0 bg-cover bg-center transition-transform duration-500 ${height} 
                ${isActive ? "z-50 scale-100" : "z-20 scale-[0.95]"} `}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          );
        })}
        <span className="bg-rose-400 blur-sm w-8 h-8 inline-block absolute bottom-2 left-0" />
        <span className="bg-rose-400/95 blur-md w-5 h-5 inline-block absolute -bottom-6 right-1" />
      </div>
      <div className="flex items-center gap-10 justify-center mt-5">
        <button
          onClick={scrollPrev}
          className="cursor-pointer rounded-full p-3 bg-white/15 backdrop-blur-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={scrollNext}
          className="cursor-pointer rounded-full p-3 bg-white/15 backdrop-blur-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
