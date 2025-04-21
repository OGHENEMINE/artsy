"use client";
import ResponsiveMarketNav from "./components/TopNav/ResponsiveMarketNav";
import Products from "./components/Products";
import ResponsiveFilterNav from "./components/FilterNav.tsx/ResponsiveFilterNav";
import { ShopProvider } from "@/app/context/ShopContext";

const Marketplace = () => {

  return (
    <ShopProvider>
      <section className="max-w-6xl w-full mx-auto px-5">
        <ResponsiveMarketNav />
      </section>
      <section className="relative mt-10 max-w-6xl w-full mx-auto px-5 md:flex items-start gap-x-10 h-full">
        <ResponsiveFilterNav />
        <div className="flex-1 overflow-hidden">
          <Products />
        </div>
      </section>
    </ShopProvider>
  );
};

export default Marketplace;
