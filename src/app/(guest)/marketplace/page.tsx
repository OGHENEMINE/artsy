"use client";
import { useSearchParams } from "next/navigation";
import LargeFilterNav from "./components/FilterNav.tsx/LargeFilterNav";
import ResponsiveMarketNav from "./components/TopNav/ResponsiveMarketNav";
import Products from "./Products";

const Marketplace = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams?.get('page') || "1");
  const limit = 9;

  return (
    <>
      <section className="max-w-6xl w-full mx-auto px-5">
        <ResponsiveMarketNav currentPage={currentPage} limit={limit} />
      </section>
      <section className="relative mt-10 max-w-6xl w-full mx-auto px-5 md:flex items-start gap-x-10 h-full">
        <aside className="md:min-w-[200px]">
          <LargeFilterNav />
        </aside>
        <div className="flex-1 overflow-hidden">
          <Products currentPage={currentPage} limit={limit} />
        </div>
      </section>
    </>
  );
};

export default Marketplace;
