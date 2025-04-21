"use client"
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import PriceRangeSlider from "../PriceRangeSlider";
import Link from "next/link";

const LargeFilterNav = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [filterNav, setFilterNav] = useState([
    {
      id: 1,
      show: true,
    },
    {
      id: 2,
      show: true,
    },
    {
      id: 3,
      show: true,
    },
    {
      id: 4,
      show: true,
    },
  ]);

  const handleShowDropdown = (id: number) => {
    setFilterNav((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };
  return (
    <div className="hidden md:flex flex-col w-full h-full">
      {/* Filter Nav Header */}
      <div className="flex-shrink-0">
        <p className="relative flex items-center gap-x-3 text-lg">
          <SlidersHorizontal className="size-6 text-gray-400" />
          Filter
        </p>
        <span className="h-0.5 w-full dark:bg-neutral-700 rounded-full  inline-block" />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="my-2 space-y-4">
        <div>
          <p
            onClick={() => handleShowDropdown(1)}
            className="flex items-center justify-between cursor-pointer"
          >
            By category
            <ChevronDown
              className={`size-5 transform transition-transform duration-300 ease-in-out ${
                filterNav[0].show ? "-rotate-180" : "rotate-0"
              }`}
            />
          </p>
          <ul
            className={`mt-4 space-y-4 overflow-hidden h-full transition-[max-height] duration-300 ease-in-out ${
              filterNav[0].show ? "max-h-96" : "max-h-0"
            }`}
          >
            {["editorials", "fashion", "optics", "arts & museum", "nature"].map(
              (item) => (
                <li key={item} className="flex items-center gap-x-4">
                  <div className="flex items-center relative">
                    <input
                      type="checkbox"
                      id={item}
                      className="appearance-none w-5 h-5 rounded bg-neutral-800 border dark:border-neutral-700 peer"
                    />
                    <Check className="size-4 absolute top-1/2 left-1/2 -translate-1/2 peer-checked:visible invisible pointer-events-none" />
                  </div>
                  <label htmlFor={item} className="capitalize">
                    {item}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <p
            onClick={() => handleShowDropdown(2)}
            className="flex items-center justify-between cursor-pointer"
          >
            By price
            <ChevronDown
              className={`size-5 transform transition-transform duration-300 ease-in-out ${
                filterNav[1].show ? "-rotate-180" : "rotate-0"
              }`}
            />
          </p>
          <div
            className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              filterNav[1].show ? "max-h-[58px]" : "max-h-0"
            }`}
          >
            <PriceRangeSlider
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </div>
        <div>
          <p
            onClick={() => handleShowDropdown(3)}
            className="flex items-center justify-between cursor-pointer"
          >
            By artist
            <ChevronDown
              className={`size-5 transform transition-transform duration-300 ease-in-out ${
                filterNav[2].show ? "-rotate-180" : "rotate-0"
              }`}
            />
          </p>
          <ul
            className={`mt-4 space-y-4 text-sm overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              filterNav[2].show ? "max-h-96" : "max-h-0"
            }`}
          >
            {[
              "all",
              "below $100.00",
              "$100.00 - $150.00",
              "$150.00 - $200.00",
              "Above $200.00",
            ].map((item) => (
              <li
                key={item}
                className="flex capitalize text-base items-center gap-x-4"
              >
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeFilterNav;
