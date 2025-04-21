"use client";

import useWindowScrollHeight from "@/hooks/ScrollHook";
import { Bell, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cartSelector } from "@/app/store/cartSlice";
import { useAppSelector } from "@/app/store/hook";

const LargeScreenTopNav = () => {
  const scrollY = useWindowScrollHeight();
  const path = usePathname();
  const { cartItems } = useAppSelector(cartSelector);

  const NavItems = [
    { title: "Home", href: "/", active: path === "/" },
    {
      title: "MarketPlace",
      href: "/marketplace",
      active: path.startsWith("/marketplace"),
    },
    {
      title: "Auctions",
      href: "/auction",
      active: path.startsWith("/auction"),
    },
    { title: "Drops", href: "/drop", active: path.startsWith("/drop") },
  ];

  return (
    <nav
      className={`max-w-6xl mx-auto px-5 transition-transform duration-200 hidden md:block ${
        scrollY > 100
          ? "fixed bg-white/20 backdrop-blur-xl z-20 top-2 left-5 shadow-lg right-5 py-5 rounded-xl text-black"
          : "py-10"
      }`}
    >
      <div className="flex items-center justify-between text-sm">
        <Link href="/" className="font-bold text-lg font-monospace">
          ARTSY.
        </Link>
        <ul className="flex items-center gap-x-10 text-sm font-medium">
          {NavItems.map(({ title, href, active }) => (
            <li className="relative group" key={title}>
              <Link
                href={href}
                className={`relative transition-all ease-in-out duration-300 before:absolute before:left-0 before:inline-block before:right-0 before:-bottom-1 before:h-0.5 before:rounded-full ${
                  active
                    ? "text-black dark:text-white before:bg-black before:dark:bg-white"
                    : scrollY > 100
                    ? "dark:text-black hover:text-gray-300 before:bg-transparent hover:before:bg-black hover:before:dark:bg-gray-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-500 before:bg-transparent hover:before:bg-black hover:before:dark:bg-gray-400"
                }`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className={`flex items-center gap-x-3 ${
            scrollY > 100 ? "dark:text-black" : "dark:text-gray-500"
          }`}
        >
          <li className="group cursor-pointer relative">
            <Search className="size-5" />
            <span className="absolute bottom-full mb-0.5 text-xs text-white bg-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Search
            </span>
          </li>
          <li className="group cursor-pointer relative">
            <Link
              href="/marketplace/cart"
              className="inline-flex relative hover:text-gray-500 items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 bg-transparent hover:shadow-xl hover:bg-neutral-900"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute bottom-full mb-0.5 text-xs text-white bg-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Cart
              </span>
              {cartItems.length > 0 && (
                <span className="inline-block bg-red-600 rounded-full w-3 h-3 absolute top-1.5 right-1" />
              )}
            </Link>
          </li>
          <li className="group cursor-pointer relative">
            <Bell className="size-5" />
            <span className="absolute bottom-full mb-0.5 text-xs text-white bg-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Notification
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LargeScreenTopNav;
