"use client";
import { getPaginatedProducts } from "@/lib/getProducts";
import { Filters, ShopInterface } from "@/lib/interface";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

export const ShopContext = createContext<ShopInterface | null>(null);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams?.get("page") || "1");
  const limit = 9;
  const [toggleNav, setToggleNav] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [filter, setFilter] = useState<Filters>({
    category: "",
    search: "",
    priceMin: priceRange.min,
    priceMax: priceRange.max,
  });
  const [selectedSort, setSelectedSort] = useState<string>("");
  const { from, to, total, data, totalPages } = getPaginatedProducts(
    currentPage,
    limit,
    filter,
    selectedSort
  );

  const NextPage = () =>
    currentPage < totalPages
      ? router.push(`/marketplace?page=${currentPage + 1}`)
      : router.push(`/marketplace?page=1`);
  return (
    <ShopContext.Provider
      value={{
        toggleNav,
        setToggleNav,
        filter,
        setFilter,
        priceRange,
        setPriceRange,
        from,
        to,
        total,
        data,
        totalPages,
        NextPage,
        setSelectedSort
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};
