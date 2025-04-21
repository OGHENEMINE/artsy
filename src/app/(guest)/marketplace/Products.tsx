"use client"
import { ArrowRight } from "lucide-react";
import ProductCard from "./components/ProductCard";
import { getPaginatedProducts } from "@/lib/getProducts";
import { useRouter } from "next/navigation";

const Products = ({
  currentPage,
  limit,
}: {
  currentPage: number;
  limit: number;
}) => {
  const { data, totalPages } = getPaginatedProducts(currentPage, limit);
  const router = useRouter();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price as number}
          type={item?.listing_type as "fixed_price" | "coming_soon" | "auction"}
        />
      ))}

      <div className="md:col-span-3 flex items-center justify-end">
        <button
          onClick={() =>
            currentPage < totalPages
              ? router.push(`/marketplace?page=${currentPage + 1}`)
              : router.push(`/marketplace?page=1`)
          }
          className="flex items-center gap-x-5 rounded-md px-3 py-4 dark:bg-neutral-800"
        >
          Load More <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default Products;
