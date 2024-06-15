"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -5,
  },
};

export default function SecFive() {
  return (
    <div className="flex justify-evenly pt-8 lg:col-start-1 lg:col-end-5 lg:justify-center lg:gap-10">
      <motion.div initial="initial" whileHover="animate" className="relative">
        <Link href="#">
          <motion.img
            src="social/instagram-icon.svg"
            alt="instagram"
            className="w-6 relative"
            variants={variants}
          />
        </Link>
      </motion.div>
      <motion.div initial="initial" whileHover="animate" className="relative">
        <Link href="#">
          <motion.img
            src="social/linkedin-icon.svg"
            alt="linkedin"
            className="w-6 relative"
            variants={variants}
          />
        </Link>
      </motion.div>
      <motion.div initial="initial" whileHover="animate" className="relative">
        <Link href="#">
          <motion.img
            src="social/x-icon.svg"
            alt="x"
            className="w-6 relative"
            variants={variants}
          />
        </Link>
      </motion.div>
      <motion.div initial="initial" whileHover="animate" className="relative">
        <Link href="#">
          <motion.img
            src="social/facebook-icon.svg"
            alt="facebook"
            className="w-6 relative"
            variants={variants}
          />
        </Link>
      </motion.div>
    </div>
  );
}
