import { getPaginatedProducts } from "@/lib/getProducts";
import { ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const LargeMarketNav = ({
  currentPage,
  limit,
}: {
  currentPage: number;
  limit: number;
}) => {
  const { from, to, total, totalPages } = getPaginatedProducts(
    currentPage,
    limit
  );
  const router = useRouter();

  return (
    <div className="hidden w-full md:flex items-center justify-between gap-x-10">
      <div className="flex max-w-52 w-full items-center gap-x-2 relative dark:bg-neutral-800/70 border dark:border-neutral-800 rounded-md px-3 py-2">
        <Search className="size-5 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none placeholder:text-sm outline-none"
        />
      </div>
      <div className="w-full flex items-center justify-between bg-gray-500 px-4 py-2 dark:bg-neutral-900 shadow-md rounded-md">
        <div className="flex items-center gap-x-5">
          <p>
            See {from} - {to} of {total} results
          </p>
          <button
            aria-label="Previous page"
            onMouseEnter={() =>
              currentPage > 1 &&
              router.prefetch(`/marketplace?page=${currentPage - 1}`)
            }
            onClick={() =>
              currentPage > 1 &&
              router.push(`/marketplace?page=${currentPage - 1}`)
            }
            disabled={currentPage <= 1}
            className={`p-2 border rounded-md text-sm font-medium transition-colors duration-150 hover:bg-gray-600 dark:hover:bg-neutral-800 ${
              currentPage <= 1
               ? "bg-neutral-200 text-neutral-500 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-500"
                : "cursor-pointer dark:border-neutral-800 bg-gray-500 dark:bg-neutral-900"
            }`}
          >
            Prev
          </button>

          <button
            aria-label="Next page"
            onMouseEnter={() =>
              currentPage < totalPages &&
              router.prefetch(`/marketplace?page=${currentPage + 1}`)
            }
            onClick={() =>
              currentPage < totalPages &&
              router.push(`/marketplace?page=${currentPage + 1}`)
            }
            disabled={currentPage >= totalPages}
            className={`p-2 border rounded-md text-sm font-medium transition-colors duration-150 hover:bg-gray-600 dark:hover:bg-neutral-800 ${
              currentPage >= totalPages
                ? "bg-neutral-200 text-neutral-500 cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-500"
                : "cursor-pointer dark:border-neutral-800 bg-gray-500 dark:bg-inherit"
            }`}
          >
            Next
          </button>
        </div>
        <div className="relative group">
          <button className="border cursor-pointer dark:border-neutral-800 rounded-md px-3 py-2 flex items-center gap-x-2 text-sm font-medium transition-colors duration-150 bg-gray-500 dark:bg-neutral-900 hover:bg-gray-600 dark:hover:bg-neutral-800 focus:outline-none focus:border-none focus:ring-2">
            Sort by{" "}
            <ChevronDown className="size-4 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform" />
          </button>

          {/* Dropdown menu */}
          <div className="absolute left-0 mt-2 w-40 rounded-md border bg-white dark:bg-neutral-900 shadow-lg z-10 hidden group-open:block">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer">
                Price: Low to High
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer">
                Price: High to Low
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeMarketNav;
