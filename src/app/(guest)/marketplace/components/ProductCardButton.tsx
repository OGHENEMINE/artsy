import { FC } from "react";
import { Gavel, Heart, Hourglass, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { cartItem } from "@/lib/interface";
import { addItem, cartSelector } from "@/app/store/cartSlice";
import { setAlert } from "@/app/store/alertSlice";

interface ProductCardButtonProps {
  type: "fixed_price" | "coming_soon" | "auction";
  className?: string;
  item: cartItem;
  handleAddToWishlist: (id: string) => void
}

const ProductCardButton: FC<ProductCardButtonProps> = ({
  type = "fixed_price",
  className = "",
  item,
  handleAddToWishlist
}) => {
  const { favourite } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (item) {
      dispatch(
        addItem({
          id: item?.id,
          image: item?.image,
          name: item?.name,
          price: item?.price,
          qty: item?.qty,
        })
      );
      dispatch(
        setAlert({
          message: "Product has been added",
          type: "success",
        })
      );
    }
  };

  const variant = {
    fixed_price: "bg-indigo-500 cursor-pointer hover:bg-indigo-600",
    coming_soon: "bg-gray-500 cursor-not-allowed",
    auction: "bg-rose-500 cursor-pointer hover:bg-rose-600",
  };

  const icon = {
    fixed_price: <ShoppingCart className="size-5" />,
    coming_soon: <Hourglass className="size-5" />,
    auction: <Gavel className="size-5" />,
  };

  const text = {
    fixed_price: "Add to Cart",
    coming_soon: "Coming Soon",
    auction: "Bid Now",
  };

  const isDisabled = type === "coming_soon";

  const button = {
    fixed_price: (
      <button
        onClick={handleAddToCart}
        className={`h-10 w-full rounded text-sm transition-colors flex items-center justify-center gap-x-2 z-20 ${variant[type]} ${className}`}
        aria-label={text[type]}
      >
        <span>{text[type]}</span>
        <span>{icon[type]}</span>
      </button>
    ),
    coming_soon: (
      <button
        className={`h-10 w-full rounded text-sm transition-colors flex items-center justify-center gap-x-2 ${variant[type]} ${className}`}
        disabled={isDisabled}
        aria-label={text[type]}
      >
        <span>{text[type]}</span>
        <span>{icon[type]}</span>
      </button>
    ),
    auction: (
      <Link
        href="/auction"
        className={`h-10 w-full rounded text-sm transition-colors flex items-center justify-center gap-x-2 ${variant[type]} ${className}`}
      >
        <span>{text[type]}</span>
        <span>{icon[type]}</span>
      </Link>
    ),
  };

  return (
    <div className="z-10 relative flex items-center gap-x-2 md:gap-x-4 text-white">
      {button[type]}
      <button
        className={`rounded bg-clip-text bg-white flex items-center justify-center cursor-pointer transition-colors ${className}`}
        onClick={()=>handleAddToWishlist(item.id)}
        aria-label="Add to wishlist"
      >
        <Heart
          className={`size-9 transition-all duration-200 ease-in-out stroke-1 ${
            item?.id && favourite.includes(item?.id)
              ? "fill-red-500 stroke-red-500"
              : "fill-transparent stroke-neutral-500 hover:fill-neutral-100 hover:stroke-neutral-300 dark:hover:fill-neutral-900 dark:hover:stroke-neutral-800"
          }
  `}
        />
      </button>
    </div>
  );
};

export default ProductCardButton;
