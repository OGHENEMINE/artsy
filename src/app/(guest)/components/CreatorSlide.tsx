"use client";
import { useEffect, useState } from "react";

const CreatorSlide = () => {
  const [activeSlide, setActiveSlide] = useState([
    {
      title: "EDITORIAL VISIONARIES", // Editorial
      content: `“A picture is worth a thousand words — but a well-told story holds timeless value. Editorials breathe life into the unseen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni veritatis fugiat, officiis eos sapiente incidunt mollitia tempore quibusdam nostrum!”`,
      active: false,
    },
    {
      title: "FASHION FORWARD MINDS", // Fashion
      content: `“Style is a way to say who you are without having to speak. Fashion is the armor to survive the reality of everyday life. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni veritatis fugiat, officiis eos sapiente incidunt mollitia tempore quibusdam nostrum!”`,
      active: false,
    },
    {
      title: "LIFESTYLE CURATORS", // Lifestyle
      content: `“Design your life like you design your art — with balance, beauty, and purpose. Lifestyle is the reflection of your inner world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magni veritatis fugiat, officiis eos sapiente incidunt mollitia tempore quibusdam nostrum!”`,
      active: false,
    },
    {
      title: "TOP CREATORS OF THE WEEK", // Blueprint
      content: `“Everything always looked better in black and white. Everything always
              as if it were the first time; there’s always more people in a black and
              white photograph. It just makes it seem that there were more people at a
              gig, more people at a football match, than with colour photography.
              Everything looks more exciting.” – Jack Lowden`,
      active: true,
    },
  ]);

  const handleSetActiveSlide = (id: number) => {
    setActiveSlide((prevSlides) =>
      prevSlides.map((slide, index) => ({
        ...slide,
        active: index === id,
      }))
    );
  };

  useEffect(() => {
    let currentIndex = activeSlide.length - 1;
    const interval = setInterval(() => {
      handleSetActiveSlide(currentIndex);
      currentIndex =
        currentIndex > 0 ? currentIndex - 1 : activeSlide.length - 1;
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide.length]);

  return (
    <div className="relative h-[59vh] md:h-[85vh] max-w-6xl md:pt-20 mx-auto">
      {activeSlide.map(({ title, content, active }) => (
        <div
          key={title}
          className={`${active ? "space-y-5 md:space-y-20" : "hidden"}`}
        >
          <h2 className="max-sm:pt-10 font-bold text-xl md:text-5xl md:leading-[50px] max-w-60 md:max-w-lg">
            {title}
          </h2>
          <p className="max-w-6xl text-sm md:text-2xl font-light">{content}</p>
        </div>
      ))}
      <div className="z-10 inline-block absolute -bottom-32 md:bottom-10 right-0 md:right-60 w-[55vw] h-[55vh] md:w-[20vw] md:h-[20vh] bg-[url('/images/1985.png')] bg-no-repeat bg-center bg-contain" />
      <div className="z-10 inline-block absolute -bottom-16 right-0 md:top-32 md:right-10 w-[45vh] h-[50vh] md:w-[80vw] md:h-[75vh] bg-[url('/images/creator.png')] bg-no-repeat bg-center bg-contain" />
      <div className="absolute top-0 right-0">
        <ul className="flex flex-wrap md:flex-col relative gap-3 md:gap-5 font-medium text-xs md:text-2xl">
          {["Editorials", "Fashion", "Lifestyle", "Blueprint"].map(
            (item, index) => (
              <li
                key={item}
                onClick={() => handleSetActiveSlide(index)}
                className={`relative cursor-pointer z-10 ${
                  activeSlide[index].active
                    ? "before:absolute before:w-3 before:h-3 md:before:h-full md:before:w-1 before:rounded-full before:-top-3 md:before:top-0 before:-left-1 md:before:-left-5 before:inline-block before:bg-neutral-800"
                    : ""
                }`}
              >
                {item}
              </li>
            )
          )}
          <span className="absolute top-0 bottom-0 overflow-hidden -left-5 w-1 rounded-full bg-neutral-400/95 hidden md:inline-block" />
        </ul>
      </div>
    </div>
  );
};

export default CreatorSlide;
