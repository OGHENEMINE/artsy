import { useCheckoutContext } from "@/app/context/CheckoutContext";
import currencyFormatter from "@/app/utils/currencyFormatter";
import { ArrowRight, Minus, Package, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const {
    cartItems,
    totalAmount,
    setActiveStep,
    handleIncreaseQty,
    handleReduceQty,
    handleRemoveFromCart,
  } = useCheckoutContext();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {cartItems.length > 0 ? (
        <div className="w-full ">
          <div className="border-y dark:border-neutral-800 divide-y">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full  dark:border-neutral-800 py-5 flex gap-10"
              >
                <div className="relative w-60 h-60 rounded overflow-hidden">
                  <Image
                    src="/images/carousel1.png"
                    fill
                    className="object-cover"
                    sizes="320px"
                    alt={`image for ${item.name}`}
                  />
                </div>
                <div className="space-y-4 w-full relative">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-2xl">
                    {currencyFormatter("USD", Number(item.price))}
                  </p>
                  <div className="flex items-center gap-5">
                    <button
                      onClick={() => handleReduceQty(item)}
                      className="cursor-pointer"
                    >
                      <Minus className="size-5" />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => handleIncreaseQty(item)}
                      className="cursor-pointer"
                    >
                      <Plus className="size-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 absolute top-0 right-0 cursor-pointer"
                  >
                    <Trash2 className="size-7" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mt-5 flex justify-between">
            <div className="space-y-5">
              <button
                onClick={() => setActiveStep(1)}
                className="py-3.5 px-20 cursor-pointer bg-black font-bold text-white rounded-sm hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                Proceed to checkout
              </button>
              <Link
                href="/marketplace"
                className="underline text-sm block text-center"
              >
                Continue Shopping
              </Link>
            </div>
            <div className="font-medium space-y-2 text-neutral-600 dark:text-neutral-400">
              <p>
                Products in cart:
                {cartItems.length > 1
                  ? `${cartItems.length} items`
                  : `${cartItems.length} item`}
              </p>
              <p>Shipping: {currencyFormatter("USD", 2.4)}</p>
              <p>Total: {currencyFormatter("USD", totalAmount)}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Package size={120} strokeWidth={0.5} className="text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Your cart is empty
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Looks like you haven’t added anything yet.
          </p>
          <Link
            href="/marketplace"
            className="flex items-center gap-x-2 mt-4 px-4 py-2 rounded-md text-sm font-bold bg-black text-white hover:bg-neutral-800 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <ArrowRight className="size-5" />
            Continue Shopping
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
