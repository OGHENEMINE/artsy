import React from "react";
import { Gavel, Heart, Hourglass, ShoppingCart } from "lucide-react";

interface ProductCardButtonProps {
  type?: "fixed_price" | "coming_soon" | "auction";
  className?: string;
}

const ProductCardButton: React.FC<ProductCardButtonProps> = ({
  type = "fixed_price",
  className = "",
}) => {
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

  // Disable the button if type is coming_soon
  const isDisabled = type === "coming_soon";

  return (
    <div className="z-10 relative flex items-center gap-x-2 text-white">
      <button
        className={`h-11 w-full rounded text-sm transition-colors flex items-center justify-center gap-x-2 ${variant[type]} ${className}`}
        disabled={isDisabled}
        aria-label={text[type]}
      >
        <span>{text[type]}</span>
        <span>{icon[type]}</span>
      </button>
      <button
        className={`rounded flex items-center h-11 px-3 justify-center cursor-pointer transition-colors ${className} ${
          type === "coming_soon"
            ? "bg-gray-500 dark:hover:bg-gray-600"
            : type === "auction"
            ? "bg-rose-500 dark:hover:bg-rose-600"
            : "bg-indigo-500 dark:hover:bg-indigo-600"
        }`}
        aria-label="Add to wishlist"
      >
        <Heart className="size-5" />
      </button>
    </div>
  );
};

export default ProductCardButton;
