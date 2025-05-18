import React from "react";
import CartNav from "./CartNav";
import { useCheckoutContext } from "@/app/context/CheckoutContext";

const CheckoutPages = () => {
    const { page, activeStep } = useCheckoutContext();
  return (
    <>
      {activeStep < 3 && <CartNav />}
      {page}
    </>
  );
};

export default CheckoutPages;
