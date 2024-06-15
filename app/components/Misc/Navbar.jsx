"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document
        .querySelector(".menu-icon")
        .setAttribute("src", "close-icon.svg");
      document
        .querySelector(".overlay-navbar")
        .classList.replace("hidden", "block");
      document.querySelector(".logo-icon").classList.replace("block", "hidden");
    } else {
      document
        .querySelector(".menu-icon")
        .setAttribute("src", "hamburger-icon.svg");
      document
        .querySelector(".overlay-navbar")
        .classList.replace("block", "hidden");
      document.querySelector(".logo-icon").classList.replace("hidden", "block");
    }
  }, [menu]);

  return (
    <div className="sticky top-0 left-0 z-50 navbar lg:px-20 px-4 other-content">
      <div className="md:hidden flex justify-between items-center py-4">
        <div>
          <img
            src="logo-only.svg"
            alt="logo"
            className="w-33 logo-icon block"
          />
        </div>
        <button onClick={() => setMenu((menu) => !menu)} className="z-50">
          <img src="hamburger-icon.svg" alt="menu" className="w-8 menu-icon" />
        </button>
      </div>
      <div className="hidden md:flex pt-6 pb-4 items-center justify-between">
        <div>
          <img src="logo.svg" alt="logo" className="w-33 logo-icon block" />
        </div>
        <div className="flex items-center gap-12">
          <Link
            href={"#"}
            className="font-medium relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Home
          </Link>
          <Link
            href={"#"}
            className="font-medium relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Books
          </Link>
          <Link
            href={"#"}
            className="font-medium relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Rent
          </Link>
          <Link
            href={"#"}
            className="font-medium relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Community
          </Link>
          <button className="bg-light-black text-white font-light text-sm rounded-full py-2 px-7 border border-transparent hover:border-light-black hover:bg-transparent hover:text-black transition-all duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
