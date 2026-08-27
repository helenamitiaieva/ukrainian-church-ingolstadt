"use client";

import type { ReactNode } from "react";

import styles from "./AnimatedSwap.module.css";

export type SlideDirection = "left" | "right" | "top" | "bottom";

type AnimatedSwapProps = {
  previousBackground: ReactNode;
  previousContent: ReactNode;

  currentBackground: ReactNode;
  currentContent: ReactNode;

  direction: SlideDirection;
  isChanging: boolean;
  className?: string;
};

export default function AnimatedSwap({
  previousBackground,
  previousContent,
  currentBackground,
  currentContent,
  direction,
  isChanging,
  className,
}: AnimatedSwapProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {isChanging && (
        <>
          <div
            className={`${styles.layer} ${styles.previous} ${
              styles[`previous-${direction}`]
            }`}
          >
            {previousBackground}
          </div>

          <div
            className={`${styles.layer} ${styles.previousContent} ${
              styles[`previous-${direction}`]
            }`}
          >
            {previousContent}
          </div>
        </>
      )}

      <div
        className={`${styles.layer} ${
          isChanging ? styles.currentBackground : styles.static
        } ${isChanging ? styles[`current-${direction}`] : ""}`}
      >
        {currentBackground}
      </div>

      <div
        className={`${styles.layer} ${
          isChanging ? styles.currentContent : styles.static
        } ${isChanging ? styles[`current-${direction}`] : ""}`}
      >
        {currentContent}
      </div>
    </div>
  );
}
