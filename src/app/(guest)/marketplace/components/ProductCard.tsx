import React from "react";
import ProductCardButton from "./ProductCardButton";
import Image from "next/image";
import Link from "next/link";
import currencyFormatter from "@/app/helpers/currencyFormatter";

const ProductCard = ({
  id,
  name,
  image,
  price,
  type,
}: {
  id: string;
  name: string;
  image: string;
  price: number | number;
  type: "fixed_price" | "coming_soon" | "auction";
}) => {
  return (
    <div className="space-y-5 w-full relative">
      <div className="relative max-sm:hidden h-[200px]">
        <Image
          src={image}
          fill
          className="absolute inset-x-0 h-full w-full"
          alt="a product image"
        />
      </div>
      <div className="md:hidden relative h-[200px] w-full">
        <Image src={image} fill alt="a product image" />
      </div>
      <div className="space-y-2">
        <p className="uppercase text-sm text-nowrap">{name}</p>
        <p>
          {typeof price === "number" ? currencyFormatter("USD", price) : price}
        </p>
        <ProductCardButton type={type} />
      </div>
      <Link className="absolute inset-0 z-10" href={`marketplace/${id}`}></Link>
    </div>
  );
};

export default ProductCard;
