"use client";
import { ChevronDown, Settings2 } from "lucide-react";
import BreadCrumb from "../BreadCrumb";
import { useShopContext } from "@/app/context/ShopContext";
import { SortInterface } from "@/lib/interface";

const MobileMarketNav = ({
  sort,
  ChooseSorting,
}: {
  sort: SortInterface[];
  ChooseSorting: (tag: string) => void;
}) => {
  const { toggleNav, setToggleNav, from, to, total } = useShopContext();

  return (
    <div className="md:hidden">
      <BreadCrumb />
      <p className="mt-10 mb-5">
        Showing {from} - {to} of {total} results
      </p>
      <div className="flex text-lg items-center justify-between bg-gray-500 px-3 py-2 dark:bg-neutral-900 shadow-md rounded-md">
        <button
          onClick={() => setToggleNav(!toggleNav)}
          className="border dark:border-neutral-800 rounded-md px-3 py-1.5 flex items-center gap-x-1"
        >
          Filters
          <ChevronDown className="size-5" />
        </button>
        <details className="relative">
          <summary className="list-none border cursor-pointer dark:border-neutral-800 rounded-md px-3 py-2 flex items-center gap-x-2 text-sm font-medium transition-colors duration-150 bg-gray-500 dark:bg-neutral-900 hover:bg-gray-600 dark:hover:bg-neutral-800 focus:outline-none">
            <span>Sort by</span>
            <Settings2 className="size-4 transition-transform open:rotate-180" />
          </summary>

          <div className="absolute mt-2 top-full right-0 z-10 bg-gray-400 dark:bg-neutral-900 border dark:border-neutral-800 rounded-sm w-48">
            <ul className="text-sm text-nowrap text-gray-700 dark:text-gray-200 divide-y divide-neutral-800">
              {sort.map((item) => (
                <li
                  key={item.label}
                  onClick={() => ChooseSorting(item.tag)}
                  className={`flex items-center gap-x-2 px-3 py-2 cursor-pointer ${
                    item.active
                      ? "bg-gray-100 dark:bg-neutral-800"
                      : "hover:bg-gray-100 dark:hover:bg-neutral-800/70"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default MobileMarketNav;
