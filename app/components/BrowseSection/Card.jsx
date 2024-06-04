"use client";

import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <motion.button
      initial={{ borderRadius: "10rem" }}
      whileHover={{ borderRadius: "0.5rem" }}
      className="border border-black py-[10px] px-[29px]"
    >
      {props.genre}
    </motion.button>
  );
}
