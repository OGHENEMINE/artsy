"use client";
import {
  AlignLeft,
  MessageSquare,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/app/store/hook";
import { cartSelector } from "@/app/store/cartSlice";

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const MobileTopNav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const path = usePathname();
  const { cartItems} = useAppSelector(cartSelector);

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
      className={`md:hidden p-5 transition-all duration-300 ease-in-out transform-gpu space-y-5 ${
        toggleNav
          ? "fixed top-0 bottom-0 left-0 w-full z-30 bg-inherit backdrop-blur-md shadow-lg"
          : ""
      }`}
    >
      <div className=" flex items-center justify-between">
        <button
          onClick={() => setToggleNav(!toggleNav)}
          className="p-2 rounded-md hover:bg-neutral-800 transition"
        >
          {toggleNav ? (
            <X className="size-10" />
          ) : (
            <AlignLeft className="size-6" />
          )}
        </button>

        <p className="text-xl font-bold">ARTSY.</p>

        <ul className="flex items-center gap-x-2">
          <li className="p-2 rounded-md hover:bg-neutral-800 transition">
            <Search className="size-6" />
          </li>
          <li className="relative p-2 rounded-md hover:bg-neutral-800 transition">
            <ShoppingCart className="size-6" />
            {cartItems.length > 0 && (
              <span className="inline-block bg-red-600 rounded-full w-3 h-3 absolute top-1.5 right-1" />
            )}
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {toggleNav && (
          <motion.ul
            key="nav-dropdown"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
            transition={{ duration: 0.2 }}
            className="space-y-5 text-2xl mt-20"
          >
            {NavItems.map(({ active, href, title }) => (
              <li key={title}>
                <Link
                  href={href}
                  onClick={() => setToggleNav(!toggleNav)}
                  className={`block py-4 px-1 font-medium transition-all duration-200 relative
                    ${
                      active
                        ? "dark:text-white font-semibold rounded pl-3 bg-[#3341C1]"
                        : "dark:text-gray-500 hover:text-white"
                    }`}
                >
                  {title}
                </Link>
              </li>
            ))}
            <motion.button
              key="nav-dropdown"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={navVariants}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="absolute bottom-10 right-10 dark:bg-[#3341C1] shadown rounded-full p-3"
            >
              <MessageSquare className="size-8" fill="white" />
            </motion.button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileTopNav;
