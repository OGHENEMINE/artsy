"use client";
import Image from "next/image";
import ResponsiveCarousel from "./component/carousel/ResponsiveCarousel";
import { ArrowRight } from "lucide-react";
import Slider from "./component/Slider";
import { motion } from "motion/react";
import CreatorSlide from "./component/CreatorSlide";
import FeaturedProducts from "./component/FeaturedProducts";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="space-y-10 text-center max-w-4xl mx-auto px-5">
          <motion.h1
            initial={{
              opacity: 0,
              y: 120,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-3xl md:text-7xl"
          >
            Photography is poetry and beautiful untold stories
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              skewX: -20,
            }}
            whileInView={{
              opacity: 1,
              skewX: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
            className="md:max-w-2xl mx-auto w-full"
          >
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </motion.p>
        </div>
        <ResponsiveCarousel />
      </section>
      <FeaturedProducts />
      <section className="bg-[url('/images/slider-background.png')] bg-cover bg-center my-20 px-5">
        <div className="max-w-4xl mx-auto py-5">
          <div className="relative">
            <h2 className="text-xl md:text-3xl font-medium">
              See Upcoming Auctions and Exhibitions
            </h2>
            <Image
              width={667}
              height={305}
              className="absolute inset-x-0 -bottom-2 md:max-w-[520px] md:pl-4"
              src="/images/Arrow 3.png"
              alt="image of an arrow"
            />
          </div>
          <Slider />
        </div>
      </section>
      <section className="max-w-4xl mx-auto md:px-5">
        <div className="flex items-center justify-between px-5 py-5 border-y border-neutral-800">
          <h2 className="md:text-2xl font-medium">Explore marketplace</h2>
          <button className="p-2 md:p-3 rounded-full border dark:text-gray-400 dark:border-neutral-800 focus:ring">
            <ArrowRight className="size-5" />
          </button>
        </div>
        <div className="flex items-center justify-between px-5 py-5 border-b border-neutral-800">
          <h2 className="md:text-2xl font-medium">See auctions</h2>
          <button className="p-2 md:p-3 rounded-full border dark:text-gray-400 dark:border-neutral-800 focus:ring">
            <ArrowRight className="size-5" />
          </button>
        </div>
      </section>
      <section className="z-0 bg-[url('/images/creator-slider-bg.png')] py-5 md:pt-20 px-5 bg-cover bg-center dark:text-neutral-900">
        <CreatorSlide />
      </section>
      <section className="max-w-4xl mx-auto px-5">
        <div className="md:border dark:border-neutral-700 pt-12 md:mt-28 md:py-20 md:px-40 md:text-center space-y-4">
          <h2 className="text-3xl">NEWSLETTER</h2>
          <p className="text-sm md:text-lg text-gray-500">
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <div className="flex flex-col lg:flex-row items-start md:items-center gap-3 md:mx-40 md:max-w-2xl p-2 rounded-lg shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full px-4 py-3 rounded-md border border-neutral-800 bg-neutral-900 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
            <button className=" bg-gray-500 font-medium dark:bg-white dark:text-black px-5 py-3 rounded-sm hover:bg-gray-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-700 focus:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
