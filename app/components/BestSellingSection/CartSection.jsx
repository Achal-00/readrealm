"use client";

import { motion } from "framer-motion";

export default function CartSection() {
  return (
    <div className="grid grid-cols-2 gap-2 pt-4">
      <motion.button
        className="bg-white text-black py-4 md:text-lg"
        initial={{ borderRadius: "10rem" }}
        whileHover={{ borderRadius: "0.5rem" }}
      >
        Buy Now
      </motion.button>
      <motion.button
        className="border border-white rounded-full bg-[#BFAC97] text-white md:text-lg"
        initial={{ borderRadius: "10rem" }}
        whileHover={{ borderRadius: "0.5rem" }}
      >
        Add to Cart
      </motion.button>
    </div>
  );
}
