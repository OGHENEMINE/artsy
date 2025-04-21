import { Slash } from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({
  category,
  product,
}: {
  category?: string;
  product?: string;
}) => {
  return (
    <div className="flex items-center gap-x-1 text-gray-500 max-sm:text-sm">
      <Link href="/">Home</Link>
      <Slash className="size-4" strokeWidth={1} />
      <Link href="/marketplace">MarketPlace</Link>
      {category && (
        <>
          <Slash className="size-4" strokeWidth={1} />
          <span className="text-white capitalize">{category}</span>
        </>
      )}
      {product && (
        <>
          <Slash className="size-4" strokeWidth={1} />
          <span className="text-white capitalize">{product}</span>
        </>
      )}
    </div>
  );
};

export default BreadCrumb;
