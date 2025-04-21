import { useShopContext } from "@/app/context/ShopContext";
import { SortInterface } from "@/lib/interface";
import { Search, Settings2 } from "lucide-react";
import { ChangeEvent, useState } from "react";

const LargeMarketNav = ({
  sort,
  ChooseSorting,
}: {
  sort: SortInterface[];
  ChooseSorting: (tag: string) => void;
}) => {
  const [search, setsearch] = useState<string>("");
  const { filter, setFilter, from, to, total } =
    useShopContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setsearch(value);
    setFilter({
      ...filter,
      search: value,
    });
  };

  return (
    <div className="hidden w-full md:flex items-center justify-between gap-x-10">
      <div className="flex max-w-52 w-full items-center gap-x-2 relative dark:bg-neutral-800/70 border dark:border-neutral-800 rounded-md px-3 py-2">
        <Search className="size-5 dark:text-gray-500" />
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
          className="w-full border-none placeholder:text-sm outline-none"
        />
      </div>
      <div className="w-full flex items-center justify-between bg-gray-500 px-4 py-2 dark:bg-neutral-900 shadow-md rounded-md">
        <p>
          See {from} - {to} of {total} results
        </p>
        <details className="relative">
          <summary className="list-none border cursor-pointer dark:border-neutral-800 rounded-md px-3 py-2 flex items-center gap-x-2 text-sm font-medium transition-colors duration-150 bg-gray-500 dark:bg-neutral-900 hover:bg-gray-600 dark:hover:bg-neutral-800 focus:outline-none">
            <span>Sort by</span>
            <Settings2 className="size-4 transition-transform open:rotate-180" />
          </summary>

          <div className="absolute mt-2 top-full right-0 z-10 bg-gray-400 dark:bg-neutral-900 border dark:border-neutral-800 rounded-sm">
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

export default LargeMarketNav;
