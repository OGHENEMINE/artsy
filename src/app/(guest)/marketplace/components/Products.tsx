"use client";
import { ArrowRight, Package } from "lucide-react";
import ProductCard from "./ProductCard";
import { useShopContext } from "@/app/context/ShopContext";

const Products = () => {
  const { data, NextPage } = useShopContext();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
      {data.length > 0 ? (
        <>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              type={item?.listing_type}
            />
          ))}

          <div className="col-span-full flex items-center justify-center">
            <button
              onClick={NextPage}
              className="max-sm:w-full flex items-center max-sm:justify-center gap-x-3 rounded-md py-3 px-5 cursor-pointer text-sm font-medium transition-colors duration-300 ease-in-out bg-neutral-700 hover:bg-gray-500"
            >
              Load More <ArrowRight className="size-6" />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center col-span-full space-y-2">
          <Package className="size-40 mx-auto stroke-1" />
          <p className="w-full">No product to display</p>
        </div>
      )}
    </div>
  );
};

export default Products;
