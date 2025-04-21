"use client";
import { productInterface } from "@/interface";
import useEmblaCarousel from "embla-carousel-react";
import CollectionCard from "./CollectionCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

const CollectionSlider = ({ products }: { products: productInterface[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    console.log(emblaApi?.canScrollPrev());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    console.log(emblaApi?.canScrollNext());
  }, [emblaApi]);

  return (
    <>
      <div className="hidden md:flex items-center justify-between shadow rounded-md py-3 px-5 md:bg-gray-400 dark:bg-neutral-800">
        <p>Explore more from this collection</p>
        <div className="flex items-center gap-x-5">
          <button
            // disabled={!emblaApi?.canScrollPrev()}
            onClick={scrollPrev}
            className="border dark:border-neutral-700 dark:text-neutral-500 dark:hover:border-neutral-600 transition-all duration-300 ease-in-out dark:hover:text-white hover:bg-neutral-600 cursor-pointer rounded-full p-2 disabled:cursor-not-allowed disabled:bg-neutral-800"
          >
            <ChevronLeft className="pointer-events-none" />
          </button>

          <button
            // disabled={!emblaApi?.canScrollNext()}
            onClick={scrollNext}
            className="border dark:border-neutral-700 dark:text-neutral-500 dark:hover:border-neutral-600 transition-all duration-300 ease-in-out dark:hover:text-white hover:bg-neutral-600 cursor-pointer rounded-full p-2 disabled:cursor-not-allowed disabled:bg-neutral-800"
          >
            <ChevronRight className="pointer-events-none" />
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <p>Explore more from this collection</p>
      </div>

      <div className="relative overflow-hidden mt-10" ref={emblaRef}>
        <div className=" flex items-center gap-5 max-w-6xl mx-auto w-full">
          {products.map((item: productInterface) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
        <div className="md:hidden absolute z-10 inset-0 flex items-center justify-between">
          <button
            // disabled={!emblaApi?.canScrollPrev()}
            onClick={scrollPrev}
            className="border dark:border-neutral-700 dark:text-neutral-500 dark:hover:border-neutral-600 transition-all duration-300 ease-in-out dark:bg-neutral-800 cursor-pointer rounded-full p-4"
          >
            <ChevronLeft className="pointer-events-none size-6" />
          </button>

          <button
            // disabled={!emblaApi?.canScrollNext()}
            onClick={scrollNext}
            className="border dark:border-neutral-700 dark:text-neutral-500 dark:hover:border-neutral-600 transition-all duration-300 ease-in-out dark:bg-neutral-800 cursor-pointer rounded-full p-4"
          >
            <ChevronRight className="pointer-events-none size-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectionSlider;
