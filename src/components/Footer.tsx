import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="md:mt-20">
      <div className="max-w-6xl text-sm mx-auto px-5 py-5  dark:text-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-4 text-center md:text-start gap-5">
          <p className="font-bold text-lg text-white flex items-center justify-center">
            ARTSY.
          </p>
          <ul className="space-y-5">
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Drops
              </Link>
            </li>
          </ul>
          <ul className="space-y-5">
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Wallets
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                Rates
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="cursor-pointer relative hover:before:bg-white hover:before:w-full hover:before:h-0.5 hover:before:absolute hover:before:left-0  hover:before:-bottom-1 hover:before:rounded-full hover:text-gray-300 transition-colors duration-200"
              >
                High bids
              </Link>
            </li>
          </ul>
          <ul className="space-y-5">
            <li className="flex items-center justify-center md:justify-start gap-x-2">
              <Mail className="size-5 md:size-7" strokeWidth={1} />
              artsystudios@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-x-2">
              <MapPin className="size-5 md:size-7" strokeWidth={1} />
              Lagos, Nigeria.
            </li>
          </ul>
        </div>
        <p className="mt-20 text-center w-full text-sm">
          Artsystudios © 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
