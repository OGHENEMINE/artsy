import { useCheckoutContext } from "@/app/context/CheckoutContext";
import currencyFormatter from "@/app/utils/currencyFormatter";
import Input from "@/components/Input";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

const Shipping = () => {
  const {
    cartItems,
    totalAmount,
    setActiveStep,
    handleIncreaseQty,
    handleReduceQty,
    handleRemoveFromCart,
  } = useCheckoutContext();

  return (
    <>
      <div className="grid grid-cols-2 gap-x-10">
        <div>
          <form action="" className="space-y-4">
            <Input
              label="Your email"
              id="email"
              type="text"
              placeholder="willywonka@gmail.com"
            />
            <div className="flex items-center text-sm gap-x-2">
              <input id="update" type="checkbox" className="" />
              <label htmlFor="update">
                Get updates about new drops & exclusive offers
              </label>
            </div>
            <Input
              label="Your full name"
              id="fullname"
              type="text"
              placeholder="Willy Wonka"
            />
            <Input
              label="Wallet"
              id="wallet"
              type="text"
              placeholder="Choose wallet"
            />
            <Input
              label="City"
              id="city"
              type="text"
              placeholder="Choose a city"
            />
            <div className="flex items-center gap-x-4">
              <Input
                label="Country"
                id="country"
                type="text"
                placeholder="Choose a country"
              />
              <Input
                label="Postal code"
                id="postal code"
                type="text"
                placeholder="00101"
              />
            </div>
            <Input
              label="Phone number"
              id="phone"
              type="text"
              placeholder="000-xxx-xxx"
            />
          </form>
        </div>
        <div className="w-full ">
          <div className="border-y dark:border-neutral-800 divide-y">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full dark:border-neutral-800 py-5 flex gap-10"
              >
                <div className="relative w-[500px] h-[280px] rounded overflow-hidden">
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
      </div>
      <div className="space-y-5">
        <button
          onClick={() => setActiveStep(0)}
          className="underline text-sm flex gap-x-2 items-center justify-center"
        >
          <ArrowLeft className="size-5" />
          Back to cart
        </button>
        <button
          onClick={() => setActiveStep(2)}
          className="py-3.5 px-20 cursor-pointer bg-black font-bold text-white rounded-sm hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Proceed to payment
        </button>
      </div>
    </>
  );
};

export default Shipping;
