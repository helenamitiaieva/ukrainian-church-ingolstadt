import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  href,
  type = "button",
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}
