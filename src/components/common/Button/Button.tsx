import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className ?? ""}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${styles.button} ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
