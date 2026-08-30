"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Container from "@/components/common/Container/Container";
import MenuIcon from "../MenuIcon/MenuIcon";
import { useHeader } from "@/hooks/useHeader";

import {
  homeNavigation,
  getSacramentNavigation,
  sacramentsNavigation,
} from "@/data/navigation";

import { useEffect, useState } from "react";

import styles from "./Header.module.css";

const sacramentNames: Record<string, string> = {
  baptism: "Хрещення",
  chrismation: "Миропомазання",
  eucharist: "Євхаристію",
  confession: "Сповідь",
  marriage: "Вінчання",
  "holy-orders": "Священство",
  anointing: "Єлеопомазання",
};

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeader();

  const pathname = usePathname();
  const [isDesktopSacramentsOpen, setIsDesktopSacramentsOpen] = useState(false);

  const [isMobileSacramentsOpen, setIsMobileSacramentsOpen] = useState(false);

  useEffect(() => {
    if (!isDesktopSacramentsOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDesktopSacramentsOpen]);

  const isSacramentPage = pathname.startsWith("/sacraments/");

  const sacramentSlug = pathname.split("/")[2];

  const sacramentName = sacramentNames[sacramentSlug];

  const navigation =
    isSacramentPage && sacramentName
      ? getSacramentNavigation(sacramentName)
      : homeNavigation;

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
            {navigation.map((item) => {
              if (item.label === "Таїнства") {
                return (
                  <div
                    key={item.href}
                    className={styles.dropdown}
                    onMouseEnter={() => setIsDesktopSacramentsOpen(true)}
                    onMouseLeave={() => setIsDesktopSacramentsOpen(false)}
                  >
                    <button
                      type="button"
                      className={styles.dropdownButton}
                      onClick={() =>
                        setIsDesktopSacramentsOpen((prev) => !prev)
                      }
                    >
                      Таїнства
                      <span
                        className={`${styles.dropdownArrow} ${
                          isDesktopSacramentsOpen
                            ? styles.dropdownArrowOpen
                            : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`${styles.dropdownMenu} ${
                        isDesktopSacramentsOpen ? styles.dropdownMenuOpen : ""
                      }`}
                    >
                      {sacramentsNavigation.map((sacrament) => (
                        <Link
                          key={sacrament.href}
                          href={sacrament.href}
                          onClick={() => setIsMobileSacramentsOpen(false)}
                        >
                          {sacrament.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              );
            })}
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
            {navigation.map((item) => {
              if (item.label === "Таїнства") {
                return (
                  <div key={item.href} className={styles.mobileDropdown}>
                    <button
                      type="button"
                      className={styles.mobileDropdownButton}
                      onClick={() => setIsMobileSacramentsOpen((prev) => !prev)}
                      aria-expanded={isMobileSacramentsOpen}
                    >
                      <span>Таїнства</span>

                      <span
                        className={`${styles.dropdownArrow} ${
                          isMobileSacramentsOpen ? styles.dropdownArrowOpen : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`${styles.mobileDropdownMenu} ${
                        isMobileSacramentsOpen
                          ? styles.mobileDropdownMenuOpen
                          : ""
                      }`}
                    >
                      <div className={styles.mobileDropdownContent}>
                        {sacramentsNavigation.map((sacrament) => (
                          <Link
                            key={sacrament.href}
                            href={sacrament.href}
                            className={styles.mobileDropdownLink}
                            onClick={() => {
                              setIsMobileSacramentsOpen(false);
                              closeMenu();
                            }}
                          >
                            {sacrament.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
