"use client";

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/Container/Container";
import MenuIcon from "../MenuIcon/MenuIcon";
import { useHeader } from "@/hooks/useHeader";

import styles from "./Header.module.css";

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Свято-Покровська парафія"
              width={60}
              height={60}
              priority
            />
          </Link>

          <nav className={styles.desktopNav}>
            <Link href="/#top">Головна</Link>
            <Link href="/#history">Історія</Link>
            <Link href="/#schedule">Розклад</Link>
            <Link href="/#sacraments">Таїнства</Link>
            <Link href="/#contacts">Контакти</Link>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </Container>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <Container>
          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/#top" onClick={closeMenu}>
                Головна
              </Link>
            </li>

            <li>
              <Link href="/#history" onClick={closeMenu}>
                Історія
              </Link>
            </li>
            <li>
              <Link href="/#schedule" onClick={closeMenu}>
                Розклад
              </Link>
            </li>

            <li>
              <Link href="/#sacraments" onClick={closeMenu}>
                Таїнства
              </Link>
            </li>

            <li>
              <Link href="/#contacts" onClick={closeMenu}>
                Контакти
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
