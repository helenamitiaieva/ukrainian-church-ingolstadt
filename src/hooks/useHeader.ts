"use client";

import { useEffect, useState } from "react";

export function useHeader() {
  // const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   let previousScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     if (isMenuOpen) {
  //       setIsVisible(true);
  //       return;
  //     }

  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY < 20) {
  //       setIsVisible(true);
  //     } else if (currentScrollY > previousScrollY) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }

  //     previousScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return {
    // isVisible,
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };
}
