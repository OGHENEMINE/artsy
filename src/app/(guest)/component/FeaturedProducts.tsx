import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const FeaturedProducts = () => {
  return (
    <section className="max-w-6xl mx-auto px-5">
      <h2 className="mt-10 md:mt-20 pb-4 font-medium text-2xl">
        Featured products
      </h2>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        className="border-t py-10 border-neutral-800 gap-y-5 gap-x-10 grid grid-cols-1 md:grid-cols-2 text-sm"
      >
        <div className="relative">
          <Image
            width={610}
            height={305}
            className=""
            src="/images/featured-product1.png"
            alt="a lady posing on backdrop"
          />
          <h4 className="absolute top-3 left-1/2 -translate-x-1/2 text-nowrap text-xl md:text-2xl font-bold md:font-medium mb-4 md:hidden">
            Boolean Egyptian
          </h4>

          <button
            className="absolute bottom-4 right-5 cursor-pointer md:hidden flex items-center justify-center rounded-full p-3 border border-neutral-100 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg active:scale-95"
            aria-label="Next"
          >
            <ArrowRight className="size-5 text-white transition-transform duration-300 transform hover:translate-x-2" />
          </button>
        </div>
        <div className="text-sm md:text-lg">
          <h4 className="text-lg md:text-2xl font-medium mb-4 md:block hidden">
            The Boolean Egyptian
          </h4>
          <motion.p
            initial={{
              opacity: 0,
              skewX: -20,
            }}
            whileInView={{
              opacity: 1,
              skewX: 0,
              transition: {
                duration: 0.2,
                delay: 0.5,
                ease: easeInOut,
              },
            }}
            className="text-gray-500 "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </motion.p>
          <div className="mt-5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <span>image</span> <span> 64 major creators</span>
            </div>

            <button
              className="cursor-pointer hidden md:flex items-center justify-center rounded-full p-3 border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-neutral-600 shadow-lg active:scale-95"
              aria-label="Next"
            >
              <ArrowRight
                className="size-6 text-white transition-transform duration-300 transform hover:translate-x-2"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        className="border-y py-10 border-neutral-800 gap-y-5 gap-x-10 grid grid-cols-1 md:grid-cols-2 text-sm"
      >
        <div className="text-sm md:text-lg md:order-1 order-2">
          <h4 className="text-lg md:text-2xl font-medium mb-4 hidden md:block">
            Are We There Yet?
          </h4>
          <motion.p
            initial={{
              opacity: 0,
              skewX: -20,
            }}
            whileInView={{
              opacity: 1,
              skewX: 0,
              transition: {
                duration: 0.2,
                delay: 0.5,
                ease: easeInOut,
              },
            }}
            className="text-gray-500 "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </motion.p>
          <div className="flex items-center justify-between text-sm">
            <div className="mt-5 flex items-center gap-x-3">
              <span>image</span> <span> 64 major creators</span>
            </div>

            <button
              className="cursor-pointer hidden md:flex items-center justify-center rounded-full p-3 border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-neutral-600 shadow-lg active:scale-95"
              aria-label="Next"
            >
              <ArrowRight
                className="size-6 text-white transition-transform duration-300 transform hover:translate-x-2"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <Image
            width={610}
            height={305}
            src="/images/featured-product2.png"
            alt="an image of hlygerph"
          />
          <h4 className="absolute top-3 left-1/2 -translate-x-1/2 text-nowrap text-xl md:text-2xl font-bold md:font-medium mb-4 md:hidden">
            Are We There Yet?
          </h4>
          <button
            className="absolute bottom-4 right-5 cursor-pointer md:hidden flex items-center justify-center rounded-full p-3 border border-neutral-100 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg active:scale-95"
            aria-label="Next"
          >
            <ArrowRight className="size-5 text-white transition-transform duration-300 transform hover:translate-x-2" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        className="pt-10 gap-y-5 gap-x-10 grid grid-cols-1 md:grid-cols-2 text-sm "
      >
        <div className="relative">
          <Image
            width={610}
            height={305}
            src="/images/featured-product3.png"
            alt="a lady posing on backdrop"
          />
          <h4 className="absolute top-3 left-1/2 -translate-x-1/2 text-nowrap text-xl md:text-2xl font-bold md:font-medium mb-4 md:hidden">
            Oloibiri 1997
          </h4>
          <button
            className="absolute bottom-4 right-5 cursor-pointer md:hidden flex items-center justify-center rounded-full p-3 border border-neutral-100 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg active:scale-95"
            aria-label="Next"
          >
            <ArrowRight className="size-5 text-white transition-transform duration-300 transform hover:translate-x-2" />
          </button>
        </div>
        <div className="text-sm md:text-lg">
          <h4 className="hidden md:block text-lg md:text-2xl font-medium mb-4">
            Oloibiri 1997
          </h4>
          <motion.p
            initial={{
              opacity: 0,
              skewX: -20,
            }}
            whileInView={{
              opacity: 1,
              skewX: 0,
              transition: {
                duration: 0.2,
                delay: 0.5,
                ease: easeInOut,
              },
            }}
            className="text-gray-500 "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </motion.p>
          <div className="flex items-center justify-between text-sm">
            <div className="mt-5 flex items-center gap-x-3">
              <span>image</span> <span> 64 major creators</span>
            </div>

            <button
              className="cursor-pointer hidden md:flex items-center justify-center rounded-full p-3 border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-neutral-600 shadow-lg active:scale-95"
              aria-label="Next"
            >
              <ArrowRight
                className="size-6 text-white transition-transform duration-300 transform hover:translate-x-2"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
