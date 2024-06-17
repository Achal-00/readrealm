"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tween } from "gsap/gsap-core";

const variants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document
        .querySelector(".menu-icon")
        .setAttribute("src", "close-icon.svg");
    } else {
      document
        .querySelector(".menu-icon")
        .setAttribute("src", "hamburger-icon.svg");
    }
  }, [menu]);

  return (
    <div className="sticky top-0 left-0 z-50 navbar lg:px-20 px-4 other-content border-b border-b-transparent bg-main-bg transition-colors duration-1000">
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
      <AnimatePresence>
        {menu && (
          <motion.div
            className="absolute top-0 right-0 z-40 h-screen w-[80%] bg-light-black text-white grid content-center md:hidden text-center gap-8 py-4 mob-nav px-8"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ type: Tween }}
          >
            <Link href="#" className="text-light-white text-xl">
              Home
            </Link>
            <Link href="#" className="text-light-white text-xl">
              Books
            </Link>
            <Link href="#" className="text-light-white text-xl">
              Rent
            </Link>
            <Link href="#" className="text-light-white text-xl">
              Community
            </Link>
            <button className="bg-white text-light-black text-lg rounded-full py-3">
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:flex py-4 items-center justify-between">
        <div>
          <img src="logo.svg" alt="logo" className="w-33 logo-icon block" />
        </div>
        <div className="flex items-center gap-12">
          <Link
            href={"#"}
            className="relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Home
          </Link>
          <Link
            href={"#"}
            className="relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Books
          </Link>
          <Link
            href={"#"}
            className="relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Rent
          </Link>
          <Link
            href={"#"}
            className="relative hover:after:opacity-100 after:w-full after:h-[2px] after:bg-light-black after:opacity-0 after:absolute after:top-full after:left-0 after:rounded-full after:transition-opacity after:duration-300"
          >
            Community
          </Link>
          <button className="bg-light-black text-white text-sm rounded-full py-2 px-7 border border-transparent hover:border-light-black hover:bg-transparent hover:text-black transition-all duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
