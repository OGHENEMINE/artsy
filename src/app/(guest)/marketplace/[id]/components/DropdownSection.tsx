import { productInterface } from "@/interface";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DropdownSection = ({ product }: { product: productInterface }) => {
  const [openDropdown, setOpenDropdown] = useState([
    {
      id: 1,
      show: false,
    },
    {
      id: 2,
      show: false,
    },
    {
      id: 3,
      show: false,
    },
  ]);

  const handleShowDropdown = (id: number) => {
    setOpenDropdown((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <>
      <div className="max-sm:mt-5 space-y-2 md:px-10 py-6 border-y dark:border-neutral-800">
        <p className="text-lg flex items-center justify-between ">
          Description
          <button className="cursor-pointer" onClick={()=> handleShowDropdown(1)}>
          <ChevronDown className={`text-gray-500 hover:text-gray-300 transform-3d duration-300 ease-in-out ${openDropdown[0].show? "-rotate-180": ""}`} />
          </button>
        </p>
        <p className={`text-sm mt-2 overflow-hidden h-full transition-[max-height] duration-300 ease-in-out ${openDropdown[0].show? "max-h-10": "max-h-0"}`}>{product.description}</p>
      </div>
      <div className="space-y-2 md:px-10 py-6 border-b dark:border-neutral-800">
        <p className="text-lg flex items-center justify-between ">
          Listings
          <button className="cursor-pointer" onClick={()=> handleShowDropdown(2)}>
          <ChevronDown className={`text-gray-500 hover:text-gray-300 transform-3d duration-300 ease-in-out ${openDropdown[1].show? "-rotate-180": ""}`} />
          </button>
        </p>
        <p className={`text-sm mt-2 overflow-hidden h-full transition-[max-height] duration-300 ease-in-out ${openDropdown[1].show? "max-h-10": "max-h-0"}`}>
          {product.listing_type === "coming_soon"
            ? "Coming soon"
            : product.listing_type === "auction"
            ? "Auction"
            : "Fixed Price"}
        </p>
      </div>
      <div className="md:px-10 py-6">
        <p className="text-lg flex items-center justify-between">
          Status
          <button className="cursor-pointer" onClick={()=> handleShowDropdown(3)}>
            <ChevronDown className={`text-gray-500 hover:text-gray-300 transform-3d duration-300 ease-in-out ${openDropdown[2].show? "-rotate-180": ""}`} />
          </button>
        </p>
        <p className={`text-sm mt-2 overflow-hidden h-full transition-[max-height] duration-300 ease-in-out ${openDropdown[2].show? "max-h-10": "max-h-0"}`}>
          {product.listing_type === "coming_soon"
            ? "Coming soon"
            : product.listing_type === "auction"
            ? "Auction"
            : "Fixed Price"}
        </p>
      </div>
    </>
  );
};

export default DropdownSection;
