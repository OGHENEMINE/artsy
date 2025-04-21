import { useCheckoutContext } from "@/app/context/CheckoutContext";
import currencyFormatter from "@/app/utils/currencyFormatter";
import Input from "@/components/Input";
import { ArrowLeft, LockKeyhole } from "lucide-react";

const Payment = () => {
    const { cartItems, totalAmount, setActiveStep } = useCheckoutContext();
  
  return (
    <div>
      <p className="flex w-full justify-between mb-5">
        <span className="font-bold">Payment method</span>
        <span className="text-sm flex items-center gap-x-1.5">
          <LockKeyhole className="size-4" />
          Secure server
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <div className="border dark:border-neutral-800 rounded-md p-5">
          <div className="flex items-start gap-x-2">
            <input id="wallet" type="radio" />
            <label htmlFor="wallet">
              <p className="block">Select your wallet</p>
              <p className="block text-sm mt-2">
                Connect with one of our available wallet providers or add and
                connect a new wallet.
              </p>
            </label>
          </div>

          <form action="" className="space-y-3 mt-5">
            <Input label="Wallet type" id="wallet-type" />
            <Input label="key" id="key" />
            <div className="flex items-center gap-x-4">
              <Input id="expiry-date" label="Expiry date" />
              <Input id="CVV" label="CVV" />
            </div>
          </form>
          <div className="text-sm flex items-center gap-x-2 mt-5">
            <input id="save" type="checkbox" />
            <label htmlFor="save">
              Save my wallet details & information for future transactions
            </label>
          </div>
        </div>
        <div>
          <p>Payment Summary</p>
          <div className="space-y-4 mt-5">
            <p className="flex items-center justify-between">
              <span className="block">Products in cart:</span>
              <span className="block"> {cartItems.length}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="block">Shipping:</span>{" "}
              <span className="block">
                {currencyFormatter("USD", Number(2.5))}
              </span>
            </p>
            <p className="flex items-center justify-between">
              <span className="block">Total:</span>{" "}
              <span className="block">
                {currencyFormatter("USD", Number(totalAmount))}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-5 mt-5">
        <button
          onClick={() => setActiveStep(1)}
          className="underline text-sm flex gap-x-2 items-center justify-center"
        >
          <ArrowLeft className="size-5" />
          Back to shipping
        </button>
        <button
          onClick={() => setActiveStep(3)}
          className="py-3.5 px-20 cursor-pointer bg-black font-bold text-white rounded-sm hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Payment;
