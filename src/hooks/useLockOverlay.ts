"use client";

import { useEffect } from "react";

type UseLockOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function useLockOverlay({ isOpen, onClose }: UseLockOverlayProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
}
