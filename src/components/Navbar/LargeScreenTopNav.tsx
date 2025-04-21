"use client";
import useWindowScrollHeight from "@/hooks/ScrollHook";
import { Bell, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LargeScreenTopNav = () => {
  const scrollY = useWindowScrollHeight();
  const path = usePathname();

  const NavItems = [
    {
      title: "Home",
      href: "/",
      active: path === "/",
    },
    {
      title: "MarketPlace",
      href: "/marketplace",
      active: path.startsWith("/marketplace"),
    },
    {
      title: "Auctions",
      href: "/auctions",
      active: path.startsWith("/auctions"),
    },
    {
      title: "Drops",
      href: "/drop",
      active: path.startsWith("/drop"),
    },
  ];

  return (
    <nav
      className={`max-w-6xl mx-auto px-5 transition-transform duration-200 hidden md:block ${
        scrollY > 200
          ? "fixed bg-white/20 backdrop-blur-xl z-30 top-2 left-5 shadow-lg right-5 py-5 rounded-xl text-black"
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
                className={`transition-colors duration-200 ${
                  active
                    ? "text-black dark:text-white"
                    : scrollY > 200
                    ? "dark:text-black hover:text-gray-300"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-500"
                }`}
              >
                {title}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                    active
                      ? "bg-black dark:bg-white"
                      : "bg-transparent group-hover:bg-black dark:group-hover:bg-gray-400"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className={`flex items-center gap-x-3 ${
            scrollY > 200 ? "dark:text-black" : "dark:text-gray-500"
          }`}
        >
          <li className="group  cursor-pointer relative">
            <Search className="size-5" />
            <span className="absolute bottom-full mb-0.5 text-xs text-white bg-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Search
            </span>
          </li>
          <li className="group  cursor-pointer relative">
            <Link
              href="/marketplace/cart"
              className="inline-flex hover:text-gray-500 items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 bg-transparent hover:shadow-xl hover:bg-neutral-900"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute bottom-full mb-0.5 text-xs text-white bg-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Cart
              </span>
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
