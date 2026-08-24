"use client";

import { useState } from "react";
import { useLockOverlay } from "./useLockOverlay";

export function useHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useLockOverlay({
    isOpen: isMenuOpen,
    onClose: closeMenu,
  });

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };
}
