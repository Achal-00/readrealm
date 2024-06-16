"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import ContentPart from "./ContentPart";
import ImagePart from "./ImagePart";

export default function HomeSection() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.on("change", (latest) => {
      if (latest > 0.03) {
        document
          .querySelector(".navbar")
          .classList.replace("border-b-transparent", "border-b-light-black");
        document
          .querySelector(".navbar")
          .classList.replace("bg-main-bg", "bg-[#fefbe3]");
      } else {
        document
          .querySelector(".navbar")
          .classList.replace("border-b-light-black", "border-b-transparent");
        document
          .querySelector(".navbar")
          .classList.replace("bg-[#fefbe3]", "bg-main-bg");
      }
    });
  }, [scrollYProgress]);

  return (
    <section className="min-h-[93dvh] grid lg:grid-cols-2 md:min-h-[90dvh] lg:min-h-[87dvh] gap-2 md:gap-12 lg:gap-0">
      <ContentPart />
      <ImagePart />
    </section>
  );
}
