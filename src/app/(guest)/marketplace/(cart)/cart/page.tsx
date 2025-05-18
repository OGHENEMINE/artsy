"use client";
import {
  CheckoutProvider
} from "@/app/context/CheckoutContext";
import ConfirmModal from "@/components/ConfirmModal";
import CheckoutPages from "../components/CheckoutPages";

const Index = () => {
  

  return (
    <div className="w-full max-w-6xl mx-auto px-5 space-y-10">
      <CheckoutProvider>
        <ConfirmModal />
        <CheckoutPages/>
      </CheckoutProvider>
    </div>
  );
};

export default Index;
