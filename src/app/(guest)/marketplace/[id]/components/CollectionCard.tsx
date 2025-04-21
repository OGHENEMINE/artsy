import { cartSelector } from "@/app/store/cartSlice";
import { useAppSelector } from "@/app/store/hook";
import currencyFormatter from "@/app/utils/currencyFormatter";
import { ProductInterface } from "@/lib/interface";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({
  item,
  handleAddToWishlist,
}: {
  item: ProductInterface;
  handleAddToWishlist: (id: string) => void;
}) => {
  const { favourite } = useAppSelector(cartSelector);

  return (
    <div className="relative flex-none w-full md:w-80 border rounded-sm px-5 py-3 dark:border-neutral-800 group">
      {/* Heart button */}
      <div className="relative z-10 flex items-center justify-end mb-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToWishlist(item.id);
          }}
          className="cursor-pointer dark:hover:text-gray-300 rounded-full"
        >
          <Heart
            className={`size-10 md:size-5 stroke-1 ${
              favourite.includes(item?.id)
                ? "fill-red-500 stroke-red-500"
                : "fill-transparent stroke-neutral-500 hover:fill-neutral-100 hover:stroke-neutral-300 dark:hover:fill-neutral-900 dark:hover:stroke-neutral-800"
            }`}
          />
        </button>
      </div>

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src="/images/carousel1.png"
          fill
          className="absolute rounded inset-0 object-cover"
          alt="an image"
        />
      </div>

      {/* Product info */}
      <div className="flex items-center justify-between mt-5 text-xs text-nowrap gap-x-5">
        <p>{item.name}</p>
        <p>
          {typeof item.price === "number"
            ? currencyFormatter("USD", item?.price)
            : item.price}
        </p>
      </div>

      {/* Make the whole card clickable */}
      <Link
        className="absolute inset-0 z-0 pointer-events-auto"
        href={`/marketplace/${item.id}`}
      />
    </div>
  );
};

export default CollectionCard;
