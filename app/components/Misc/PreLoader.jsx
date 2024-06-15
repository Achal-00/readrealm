"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function PreLoader() {
  useEffect(() => {
    const onPageLoad = () => {
      let tl = gsap.timeline();

      tl.to(".preloader", {
        y: "100dvh",
        duration: 2,
        ease: "power4.inOut",
        display: "none",
      })
        .fromTo(
          ".heading",
          { y: "20dvh", opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ".sub-heading",
          { y: "10dvh", opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo(".other-content", { opacity: 0 }, { opacity: 1, duration: 2 });
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 bg-light-black w-[100dvw] h-[100dvh] grid preloader place-content-center cursor-wait">
      <div class="w-full gap-x-2 flex justify-center items-center">
        <div class="w-5 bg-header-text animate-pulse h-5 rounded-full"></div>
        <div class="w-5 animate-pulse h-5 bg-main-bg rounded-full"></div>
        <div class="w-5 h-5 animate-pulse bg-footer-bg rounded-full"></div>
      </div>
    </div>
  );
}
