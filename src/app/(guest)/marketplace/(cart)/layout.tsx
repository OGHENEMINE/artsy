"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  const PATH = usePathname();
  const navItems = [
    {
      label: "Shopping cart",
      active: PATH === "/marketplace/cart",
      href: "/marketplace/cart",
    },
    {
      label: "Shipping details",
      active: PATH === "/marketplace/shipping",
      href: "/marketplace/shipping",
    },
    {
      label: "payment details",
      active: PATH === "/marketplace/payment",
      href: "/marketplace/payment",
    },
  ];
  return (
    <>
      <nav className="w-full max-w-6xl mx-auto">
        <ul className="border-b dark:border-neutral-800 pb-1 flex items-center justify-between max-w-[50%] mx-auto">
          {navItems.map((item) => (
            <li className="inline-block text-nowrap" key={item.label}>
              <Link
                className={`inline-block relative before:absolute before:inline-block before:left-0 before:-bottom-1 transition-discrete duration-500 ease-in-out ${
                  item.active
                    ? "dark:before:bg-white before:h-0.5 before:w-full "
                    : "text-gray-400 hover:before:h-0.5 hover:before:w-full before:bg-gray-400"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-full max-w-6xl mx-auto mt-10">{children}</main>
    </>
  );
};

export default CheckoutLayout;
