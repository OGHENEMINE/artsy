"use client";
import { useShopContext } from "@/app/context/ShopContext";
import LargeFilterNav from "./LargeFilterNav";
import MobileFilterNav from "./MobileFilterNav";
import { SetStateAction, Dispatch, useState } from "react";
interface props {
  category?: {
    name: string;
    checked: boolean;
  }[];
  setCategory?: Dispatch<
    SetStateAction<
      {
        name: string;
        checked: boolean;
      }[]
    >
  >;
}

const ResponsiveFilterNav = ({
}: props) => {
  const {priceRange, setPriceRange, setFilter} = useShopContext()
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
  const [category, setCategory] = useState([
    {
      name: "editorials",
      checked: false,
    },
    {
      name: "fashion",
      checked: false,
    },
    {
      name: "optics",
      checked: false,
    },
    {
      name: "arts & museum",
      checked: false,
    },
    {
      name: "nature",
      checked: false,
    },
  ]);
  const [priceOptions, setPriceOptions] = useState([
    { active: true, label: "All", priceMin: 0, priceMax: 1000 },
    { active: false, label: "Below $100.00", priceMin: 0, priceMax: 99.99 },
    { active: false, label: "$100.00 - $150.00", priceMin: 100, priceMax: 150 },
    { active: false, label: "$150.00 - $200.00", priceMin: 150, priceMax: 200 },
    {
      active: false,
      label: "Above $200.00",
      priceMin: 200.01,
      priceMax: priceRange.max,
    },
  ]);
  const handlePriceOption = (id: number) => {
    setPriceOptions((prev) =>
      prev.map((item) =>
        priceOptions[id].label === item.label
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
    setPriceRange({
      min: priceOptions[id].priceMin,
      max: priceOptions[id].priceMax,
    });
    setFilter((Prev) => ({
      ...Prev,
      priceMax: priceOptions[id].priceMax,
      priceMin: priceOptions[id].priceMin,
    }));
  };
  const handleCheck = (name: string) => {
    const updatedCategory = category.map((item) =>
      item.name === name
        ? { ...item, checked: !item.checked }
        : { ...item, checked: false }
    );
    setCategory(updatedCategory);
    setFilter((prev) => ({
      ...prev,
      category: updatedCategory.find((item) => item.checked === true)?.name,
    }));
  };
  const handleShowDropdown = (id: number) => {
    setFilterNav((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <>
      <aside className="min-w-[200px]">
        <LargeFilterNav
          filterNav={filterNav}
          priceOptions={priceOptions}
          category={category}
          handleCheck={handleCheck}
          handleShowDropdown={handleShowDropdown}
          handlePriceOption={handlePriceOption}
        />
      </aside>
      <MobileFilterNav
        filterNav={filterNav}
        priceOptions={priceOptions}
        category={category}
        handleCheck={handleCheck}
        handleShowDropdown={handleShowDropdown}
        handlePriceOption={handlePriceOption}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </>
  );
};

export default ResponsiveFilterNav;
