"use client";
import { createContext, JSX, ReactNode, useContext, useState } from "react";
import Confirmation from "../(guest)/marketplace/(cart)/steps/Confirmation";
import Cart from "../(guest)/marketplace/(cart)/steps/Cart";
import Payment from "../(guest)/marketplace/(cart)/steps/Payment";
import Shipping from "../(guest)/marketplace/(cart)/steps/Shipping";
import { setAlert } from "../store/alertSlice";
import { cartSelector, removeItem, updateQty } from "../store/cartSlice";
import { cartItem, CheckoutInterface } from "@/lib/interface";
import { useAppDispatch, useAppSelector } from "../store/hook";
export const CheckoutContext = createContext<CheckoutInterface | null>(null);
export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const { cartItems, totalAmount } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const stepComponents: Record<number, () => JSX.Element> = {
    0: () => <Cart />,
    1: () => <Shipping />,
    2: () => <Payment />,
    3: () => <Confirmation />,
  };
  const [activeStep, setActiveStep] = useState(0);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const closeConfirmModal = () => {
    setShowConfirm(false);
    setConfirmId("");
  };
  const handleRemoveFromCart = (id: string) => {
    setShowConfirm(true);
    setConfirmId(id);
  };
  const confirmRemove = () => {
    if (confirmId) {
      dispatch(removeItem(confirmId));
      dispatch(
        setAlert({
          type: "success",
          message: "Product has been removed.",
        })
      );
      setShowConfirm(false);
      setConfirmId(null);
    }
  };
  const handleIncreaseQty = (item: cartItem) => {
    dispatch(
      updateQty({
        id: item.id,
        qty: 1,
        fn: "increase",
      })
    );
    dispatch(
      setAlert({
        type: "success",
        message: "Quantity has been increased.",
      })
    );
  };
  const handleReduceQty = (item: cartItem) => {
    dispatch(
      updateQty({
        id: item.id,
        qty: 1,
        fn: "decrease",
      })
    );
    dispatch(
      setAlert({
        type: "success",
        message: "Quantity has been reduced.",
      })
    );
  };

  const page = (stepComponents[activeStep] || stepComponents[0])();

  return (
    <CheckoutContext.Provider
      value={{
        page,
        cartItems,
        totalAmount,
        activeStep,
        setActiveStep,
        closeConfirmModal,
        confirmRemove,
        handleIncreaseQty,
        handleReduceQty,
        handleRemoveFromCart,
        showConfirm,
        setShowConfirm,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckoutContext must be within a CheckoutProvider!");
  }
  return context;
};
