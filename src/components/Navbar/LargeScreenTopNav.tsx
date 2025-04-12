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
      active: path === "/marketplace",
    },
    {
      title: "Auctions",
      href: "/auctions",
      active: path === "/auctions",
    },
    {
      title: "Drops",
      href: "/drop",
      active: path === "/drop",
    },
  ];

  return (
    <nav
      className={`max-w-6xl mx-auto px-5 transition-transform duration-200 hidden md:block ${
        scrollY > 200
          ? "fixed bg-white/20 backdrop-blur-xl z-30 top-2 left-0 shadow-lg right-0 py-5 rounded-xl px-5 text-black"
          : "py-10"
      }`}
    >
      <div className="flex items-center justify-between text-sm">
        <p className="font-bold font-monospace">ARTSY.</p>
        <ul className="flex items-center gap-x-10 text-sm font-medium">
          {NavItems.map(({ title, href, active }) => (
            <li className="relative group" key={title}>
              <Link
                href={href}
                className={`transition-colors duration-200 ${
                  active
                    ? "text-black dark:text-white"
                    : scrollY > 200? "dark:text-black hover:text-gray-400": "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-500"
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

        <ul className={`flex items-center gap-x-5 ${scrollY >200? "dark:text-black": "dark:text-gray-500"}`}>
          <li className="hover:text-gray-400 cursor-pointer">
            <Search className="size-5" />
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <ShoppingCart className="size-5" />
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <Bell className="size-5" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LargeScreenTopNav;
