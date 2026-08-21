import styles from "./MenuIcon.module.css";

type MenuIconProps = {
  isOpen: boolean;
};

export default function MenuIcon({ isOpen }: MenuIconProps) {
  return (
    <span
      className={`${styles.icon} ${isOpen ? styles.open : ""}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </span>
  );
}
