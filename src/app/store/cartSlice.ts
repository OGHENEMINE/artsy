import { cartItem } from "@/lib/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: {
  cartItems: cartItem[];
  totalAmount: number;
  favourite: string[];
} = {
  cartItems: [],
  totalAmount: 0,
  favourite: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.cartItems.push(newItem);
      } else {
        existingItem.qty += action.payload.qty;
      }

      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.qty,
        0
      );
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.qty,
        0
      );
    },
    updateQty: (
      state,
      action: PayloadAction<{
        id: string;
        qty: number;
        fn: "increase" | "decrease";
      }>
    ) => {
      const Item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!Item) return;
      if (action.payload.fn === "increase") {
        Item.qty += action.payload.qty;
      } else {
        Item.qty = Math.max(1, Item.qty - action.payload.qty);
      }

      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.qty,
        0
      );
    },
    addToWishlist: (state, action: PayloadAction<string>) => {
      if (!state.favourite.includes(action.payload)) {
        state.favourite.push(action.payload);
      } else {
        state.favourite = state.favourite.filter(
          (item) => item !== action.payload
        );
      }
    },
  },
});

export const { addItem, removeItem, updateQty, addToWishlist } =
  cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
