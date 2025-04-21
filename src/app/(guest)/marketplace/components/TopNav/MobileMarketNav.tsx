"use client";
import { ChevronDown } from "lucide-react";
import BreadCrumb from "../BreadCrumb";
import { getPaginatedProducts } from "@/lib/getProducts";

const MobileMarketNav = ({
  currentPage,
  limit,
}: {
  currentPage: number;
  limit: number;
}) => {
  const { from, to, total } = getPaginatedProducts(
    currentPage,
    limit
  );

  return (
    <div className="md:hidden">
      <BreadCrumb />
      <p className="mt-10 mb-5">
        Showing {from} - {to} of {total} results
      </p>
      <div className="flex text-lg items-center justify-between bg-gray-500 px-3 py-2 dark:bg-neutral-900 shadow-md rounded-md">
        <button className="border dark:border-neutral-800 rounded-md px-3 py-1.5 flex items-center gap-x-1">
          Filters
          <ChevronDown className="size-5" />
        </button>
        <button className="border dark:border-neutral-800 rounded-md px-3 py-1.5 flex items-center gap-x-1">
          Sort by
          <ChevronDown className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default MobileMarketNav;
