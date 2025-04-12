"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export function LargeScreenCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
    }),
  ]);

  return (
    <div className="max-sm:hidden mt-10 overflow-hidden" ref={emblaRef}>
      <div className="flex items-center gap-5 px-5">
        <div className="flex-none basis-[25%] h-[280px] bg-[url('/images/carousel1.png')] bg-cover bg-center" />
        <div className="flex-none basis-[25%] h-[320px] bg-[url('/images/carousel2.png')] bg-cover bg-center" />
        <div className="mb-12 flex-none basis-[25%] h-[300px] bg-[url('/images/carousel3.png')] bg-cover bg-center" />
        <div className="flex-none basis-[25%] h-[320px] bg-[url('/images/carousel4.png')] bg-cover bg-center" />
        <div className="flex-none basis-[25%] h-[280px] bg-[url('/images/carousel5.png')] bg-cover bg-center" />
      </div>
    </div>
  );
}
