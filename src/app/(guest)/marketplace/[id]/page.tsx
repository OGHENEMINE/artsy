"use client";
import BreadCrumb from "../components/BreadCrumb";
import { useParams } from "next/navigation";
import ProductList from "@/app/data/products";
import Image from "next/image";
import { productInterface } from "@/interface";
import {
  ArrowRight, Minus,
  Plus
} from "lucide-react";
import ProductCardButton from "../components/ProductCardButton";
import DropdownSection from "./components/DropdownSection";
import currencyFormatter from "@/app/helpers/currencyFormatter";
import CollectionSlider from "./components/CollectionSlider";
import Link from "next/link";
import NotFound from "@/app/not-found";

const ProductPage = () => {
  const { id } = useParams();
  const product = ProductList.find(
    (item) => item.id === id
  ) as productInterface;

  if (!product) {
    return NotFound();
  }
  const similarCollection = ProductList.filter(
    (item) => item.collection === product.collection
  ) as productInterface[];

  return (
    <>
      <section className="max-w-6xl w-full mx-auto px-5 space-y-10">
        <BreadCrumb category={product?.category} product={product?.name} />

        <div className="flex flex-col md:flex-row md:border md:dark:border-neutral-800">
          <div className="relative md:dark:border-neutral-800 md:border-r w-full max-sm:h-96 md:max-w-3/5 md:p-5">
            <div className="relative h-full">
              <Image
                src={product?.image}
                fill
                className="object-cover md:object-fit w-full"
                alt="product image"
              />
            </div>
          </div>
          <div className="w-full grid grid-rows-[auto_1fr_auto]">
            <h2 className="md:px-10 md:dark:border-neutral-800 md:border-b flex items-center justify-between py-6 md:text-2xl">
              {product?.name}
              <span className="md:text-lg">
                {typeof product.price === "number"
                  ? currencyFormatter("USD", product?.price)
                  : product.price}
              </span>
            </h2>
            <div className="md:px-10 space-y-5 mt-10">
              <p>
                Creator: <span>{product.creator}</span>
              </p>
              <p>{product.location}</p>
              <p>
                Total views: <span>{product.total_views}</span>
              </p>
              {product.listing_type != "coming_soon" && (
                <div className="flex items-center gap-x-5">
                  <button
                    className={`p-2 rounded cursor-pointer ${
                      product.listing_type === "auction"
                        ? "bg-rose-500 dark:hover:bg-rose-600"
                        : "bg-indigo-500 dark:hover:bg-indigo-600"
                    }`}
                  >
                    <Minus className="size-5" />
                  </button>

                  <input
                    type="text"
                    className="dark:border-neutral-800 border h-10 w-10 text-white"
                  />

                  <button
                    className={`p-2 rounded cursor-pointer ${
                      product.listing_type === "auction"
                        ? "bg-rose-500 dark:hover:bg-rose-600"
                        : "bg-indigo-500 dark:hover:bg-indigo-600"
                    }`}
                  >
                    <Plus className="size-5" />
                  </button>
                </div>
              )}
              <ProductCardButton
                className="mb-5 py-3"
                type={product.listing_type}
              />
            </div>
            <DropdownSection product={product} />
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-5 mt-20">
        <CollectionSlider products={similarCollection} />
        <div className="mt-20 flex items-center justify-center">
          <Link
            href="/marketplace"
            className="border cursor-pointer flex items-center gap-x-2 dark:border-neutral-700 text-sm rounded-md py-4 px-10"
          >
            Explore all <ArrowRight className="size-6" strokeWidth={1} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
