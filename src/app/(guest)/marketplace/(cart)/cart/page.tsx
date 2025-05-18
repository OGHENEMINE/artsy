"use client";
import {
  CheckoutProvider,
  useCheckoutContext,
} from "@/app/context/CheckoutContext";
import CartNav from "../components/CartNav";
import ConfirmModal from "@/components/ConfirmModal";

const Index = () => {
  const { page, activeStep } = useCheckoutContext();

  return (
    <div className="w-full max-w-6xl mx-auto px-5 space-y-10">
      <CheckoutProvider>
        <ConfirmModal />
        {activeStep < 3 && <CartNav />}
        {page}
      </CheckoutProvider>
    </div>
  );
};

export default Index;
