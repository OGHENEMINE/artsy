"use client";
import { SortInterface } from "@/lib/interface";
import LargeMarketNav from "./LargeMarketNav";
import { useState } from "react";
import MobileMarketNav from "./MobileMarketNav";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  BarChart,
  BarChart2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useShopContext } from "@/app/context/ShopContext";

const ResponsiveMarketNav = () => {
  const { setSelectedSort } = useShopContext();
  const [sort, setSort] = useState<SortInterface[]>([
    {
      label: "Price: Low to High",
      active: true,
      tag: "price_asc",
      icon: <TrendingUp className="size-4" />,
    },
    {
      label: "Price: High to Low",
      active: false,
      tag: "price_desc",
      icon: <TrendingDown className="size-4" />,
    },
    {
      label: "Name: A - Z",
      active: false,
      tag: "name_asc",
      icon: <ArrowUpAZ className="size-4" />,
    },
    {
      label: "Name: Z - A",
      active: false,
      tag: "name_desc",
      icon: <ArrowDownAZ className="size-4" />,
    },
    {
      label: "Most viewed",
      active: false,
      tag: "views_asc",
      icon: <BarChart className="size-4" />,
    },
    {
      label: "Least viewed",
      active: false,
      tag: "views_desc",
      icon: <BarChart2 className="size-4" />,
    },
  ]);

  const handleChooseSorting = (tag: string) => {
    const updatedSorting = sort.map((item) =>
      item.tag === tag ? { ...item, active: true } : { ...item, active: false }
    );
    setSort(updatedSorting);
    setSelectedSort(
      updatedSorting.find((item) => {
        return item.active === true;
      })?.tag || "price_asc"
    );
  };

  return (
    <>
      <LargeMarketNav sort={sort} ChooseSorting={handleChooseSorting}  />
      <MobileMarketNav sort={sort} ChooseSorting={handleChooseSorting} />
    </>
  );
};

export default ResponsiveMarketNav;
