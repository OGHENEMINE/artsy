import currencyFormatter from "@/app/helpers/currencyFormatter";
import { productInterface } from "@/interface";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({ item }: { item: productInterface }) => {
  return (
    <div className="z-0 relative flex-none w-full md:w-80  border rounded-sm px-5 py-3 dark:border-neutral-800">
      <div className="text-neutral-600 flex items-center justify-end mb-2">
        <button className="z-20 cursor-pointer dark:hover:text-gray-300 rounded-full">
          <Heart className="size-5" />
        </button>
      </div>
      <div className="relative w-full h-56">
        <Image
          src="/images/carousel1.png"
          fill
          className="absolute inset-0 rounded w-full h-full object-cover"
          alt="an image"
        />
      </div>

      <div className="flex items-center justify-between mt-5 text-xs text-nowrap gap-x-5">
        <p>{item.name}</p>
        <p>
          {typeof item.price === "number"
            ? currencyFormatter("USD", item?.price)
            : item.price}
        </p>
      </div>
      <Link
        className="absolute inset-0 z-10"
        href={`/marketplace/${item.id}`}
      ></Link>
    </div>
  );
};

export default CollectionCard;
