"use client";
import { useCheckoutContext } from "@/app/context/CheckoutContext";
import CartNav from "../components/CartNav";
import ConfirmModal from "@/components/ConfirmModal";

const Index = () => {
  const { page, activeStep } = useCheckoutContext();

  return (
    <div className="w-full max-w-6xl mx-auto px-5 space-y-10">
      <ConfirmModal />
      {activeStep < 3 && <CartNav />}
      {page}
    </div>
  );
};

export default Index;
