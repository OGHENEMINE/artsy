"use client";
import { Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import PriceRangeSlider from "../PriceRangeSlider";
import { useShopContext } from "@/app/context/ShopContext";

interface props {
  filterNav: {
    id: number;
    show: boolean;
  }[];
  handleShowDropdown: (id: number) => void;
  handleCheck: (name: string) => void;
  handlePriceOption: (id: number) => void;
  category: {
    name: string;
    checked: boolean;
  }[];
  priceOptions: {
    active: boolean;
    label: string;
    priceMin: number;
    priceMax: number;
  }[];
  priceRange: {
    min: number;
    max: number;
  };
  setPriceRange: Dispatch<
    SetStateAction<{
      min: number;
      max: number;
    }>
  >;
}

const MobileFilterNav = ({
  filterNav,
  handlePriceOption,
  handleShowDropdown,
  category,
  handleCheck,
  priceOptions,
  priceRange,
  setPriceRange,
}: props) => {
  const {toggleNav, setToggleNav} = useShopContext();
  
  return (
    <nav
      className={`md:hidden fixed left-0 right-0 flex flex-col h-full px-5 py-10 z-20 bg-gray-50 dark:bg-neutral-900 ${
        toggleNav ? "top-0 " : "-top-full"
      }`}
    >
      <div className="absolute top-4 right-4">
        <button onClick={() => setToggleNav(false)}>
          <X className="size-8 stroke-1" />
        </button>
      </div>
      {/* Filter Nav Header */}
      <div className="flex-shrink-0">
        <p className="relative flex items-center gap-x-3 text-lg">
          <SlidersHorizontal className="size-6 text-gray-400" />
          Filter
        </p>
        <span className="h-0.5 w-full dark:bg-neutral-700 rounded-full inline-block" />
      </div>
      {/* SCROLLABLE CONTENT */}
      <div className="mt-5 space-y-4 overflow-y-scroll pr-5">
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
            {category.map((item) => (
              <li key={item.name} className="flex items-center gap-x-4">
                <div className="flex items-center relative">
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={item.checked}
                    onChange={() => {
                      handleCheck(item.name);
                      setToggleNav(false);
                    }}
                    id={item.name}
                    className="appearance-none w-5 h-5 rounded bg-neutral-800 border dark:border-neutral-700 peer"
                  />
                  <Check className="size-4 absolute top-1/2 left-1/2 -translate-1/2 peer-checked:visible invisible pointer-events-none" />
                </div>
                <label
                  onClick={() => setToggleNav(false)}
                  htmlFor={item.name}
                  className="capitalize"
                >
                  {item.name}
                </label>
              </li>
            ))}
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
            {priceOptions.map((item, index) => (
              <li
                key={item.label}
                onClick={() => {
                  handlePriceOption(index);
                  setToggleNav(false);
                }}
                className="capitalize text-base relative"
              >
                <Link
                  className={`relative ${
                    item.active
                      ? "before:inline-block before:absolute before:h-[1px] before:bg-white before:w-full before:-bottom-1 before:left-0"
                      : ""
                  }`}
                  href="#"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileFilterNav;
