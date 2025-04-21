"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export function HeaderCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, }),
  ]);

  return (
    <div className="mt-10 max-w-screen overflow-hidden" ref={emblaRef}>
      <div className="flex items-center gap-5 px-5 max-w-full">
        <div className="flex-none w-full md:basis-[25%] h-[300px] bg-[url('/images/carousel1.png')] bg-cover bg-center" />
        <div className="flex-none w-full md:basis-[25%] h-[380px] bg-[url('/images/carousel2.png')] bg-cover bg-center" />
        <div className="mb-10 flex-none w-full md:basis-[25%] h-[350px] bg-[url('/images/carousel3.png')] bg-cover bg-center" />
        <div className="flex-none w-full md:basis-[25%] h-[380px] bg-[url('/images/carousel4.png')] bg-cover bg-center" />
        <div className="flex-none w-full md:basis-[25%] h-[300px] bg-[url('/images/carousel5.png')] bg-cover bg-center" />
      </div>
    </div>
  );
}
