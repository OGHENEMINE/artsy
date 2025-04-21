import ProductCardButton from "./ProductCardButton";
import Image from "next/image";
import Link from "next/link";
import currencyFormatter from "@/app/utils/currencyFormatter";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { addToWishlist, cartSelector } from "@/app/store/cartSlice";
import { setAlert } from "@/app/store/alertSlice";

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
  price: number | null;
  type: "fixed_price" | "coming_soon" | "auction";
}) => {
  const dispatch = useAppDispatch();
  const { favourite } = useAppSelector(cartSelector);
  const handleAddToWishlist = (id: string) => {
    if (!favourite.includes(id)) {
      dispatch(addToWishlist(id));
      dispatch(
        setAlert({
          message: "Product has been added to wishlist",
          type: "success",
        })
      );
    } else {
      dispatch(addToWishlist(id));
      dispatch(
        setAlert({
          message: "Product has been removed from wishlist",
          type: "success",
        })
      );
    }
  };

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
          {type === "fixed_price" && price !== null
            ? currencyFormatter("USD", price)
            : type === "auction"
            ? "Highest Bid"
            : "Coming Soon"}
        </p>
        <ProductCardButton
          handleAddToWishlist={handleAddToWishlist}
          type={type}
          item={{
            id: id,
            image: image,
            name: name,
            price: price,
            qty: 1,
          }}
        />
      </div>
      <Link className="absolute inset-0 z-0" href={`marketplace/${id}`}></Link>
    </div>
  );
};

export default ProductCard;
