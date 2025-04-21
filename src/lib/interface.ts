import { Dispatch, JSX, SetStateAction } from "react";

export interface ProductInterface {
  id: string;
  name: string;
  creator: string;
  location: string;
  description: string;
  category: string;
  collection: string;
  listing_type: "coming_soon" | "auction" | "fixed_price";
  total_views: number;
  price: number | null;
  image: string;
}

export interface cartItem {
  id: string;
  name: string;
  image: string;
  qty: number;
  price: null | number;
}

export interface alertState {
  type: "success" | "error" | null;
  message: string | null;
}

export interface Filters {
  category: string | undefined;
  priceMin: number;
  priceMax: number;
  search: string;
}

export interface ProductFilterInterface {
  category?: {
    name: string;
    checked: boolean;
  }[];
  setCategory?: Dispatch<
    SetStateAction<
      {
        name: string;
        checked: boolean;
      }[]
    >
  >;
  priceRange: {
    min: number;
    max: number;
  };
  setPriceRange: Dispatch<
    SetStateAction<{
      min: number;
      max: number;
    }>
  >;
}

export interface SortInterface {
  label: string;
  active: boolean;
  tag: string;
  icon: JSX.Element;
}

export interface priceRangeInterface {
  min: number;
  max: number;
}

export interface ShopInterface {
  from: number;
  to: number;
  data: ProductInterface[];
  total: number;
  totalPages: number;
  toggleNav: boolean;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
  priceRange: priceRangeInterface;
  setPriceRange: Dispatch<SetStateAction<priceRangeInterface>>;
  filter: Filters;
  setFilter: Dispatch<SetStateAction<Filters>>;
  setSelectedSort: Dispatch<SetStateAction<string>>;
  NextPage: () => void;
}

export interface CheckoutInterface {
  cartItems: cartItem[];
  totalAmount: number;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  showConfirm: boolean;
  setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  closeConfirmModal: () => void;
  handleRemoveFromCart: (id: string) => void;
  confirmRemove: () => void;
  handleIncreaseQty: (item: cartItem) => void;
  handleReduceQty: (item: cartItem) => void;
  page: JSX.Element;
}
