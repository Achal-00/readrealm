"use client";

import { motion } from "framer-motion";

export default function Card(props) {
  const zoomIn = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="w-[261.78px] min-h-[437.08px] bg-[#FFFEF0] shadow-[4px_4px_15.1px_0px_#0000002B] rounded-[17px] flex flex-col p-4 gap-2"
    >
      <div className="overflow-hidden rounded-[14px]">
        <motion.img
          src={`popular-book/${props.image}.png`}
          alt="book cover"
          variants={zoomIn}
          transition={{ duration: 0.5 }}
        />
      </div>
      <h1 className="text-xl">{props.header}</h1>
      <div className="flex gap-1 items-center">
        <img src="star-icon.svg" alt="star" />
        <p className="text-[13px] text-[#434343A1]">4.5</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#62564A]">${props.price}</p>
        <button className="bg-[#333333] rounded-full">
          <img
            src="cart-icon.svg"
            alt="add to cart"
            className="w-20 px-8 py-2"
          />
        </button>
      </div>
    </motion.div>
  );
}
