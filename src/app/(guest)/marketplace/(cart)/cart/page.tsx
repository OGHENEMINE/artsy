import { ArrowRight, Package, Store } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Package size={120} strokeWidth={0.5} className="text-neutral-700" />

      <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        Your cart is empty
      </h2>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 ">
        Looks like you haven’t added anything yet.
      </p>

      <Link
        href="/marketplace"
        className="flex items-center gap-x-2 mt-4 px-4 py-2 rounded-md text-sm font-bold bg-black text-white hover:bg-neutral-800 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200"
      >
        <ArrowRight className="size-5"/>
        Continue Shopping
      </Link>
    </div>
  );
};

export default page;
