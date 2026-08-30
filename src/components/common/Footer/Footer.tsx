"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import Button from "../Button/Button";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  let contactText = "Залишились питання? З радістю відповімо!";

  if (pathname === "/sacraments/baptism") {
    contactText = "Для запису на Хрещення — зв’яжіться з настоятелем";
  }

  if (pathname === "/sacraments/marriage") {
    contactText = "Для запису на Вінчання — зв’яжіться з настоятелем";
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link
          href="/#top"
          className={styles.logoLink}
          aria-label="На головну сторінку"
        >
          <Image
            src="/images/logo.png"
            alt="Свято-Покровська Парафія"
            width={90}
            height={90}
            className={styles.logo}
          />
        </Link>

        <p className={styles.question}>{contactText}</p>
        <p className={styles.question}>
          Настоятель ієрей Александр Смоктунович
        </p>

        <Button href="tel:+491728820478" className={styles.contactButton}>
          Зв’язатися з настоятелем
        </Button>

        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/uocingolstadt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg className={styles.socialIcon}>
              <use href="/icons/sprite.svg#icon-facebook" />
            </svg>
          </a>

          <a
            href="https://chat.whatsapp.com/EiOSS2qLfnQHw9Ogpbr8YJ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg className={styles.socialIcon}>
              <use href="/icons/sprite.svg#icon-whatsapp" />
            </svg>
          </a>

          <a
            href="https://t.me/uocingolstadt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <svg className={styles.socialIcon}>
              <use href="/icons/sprite.svg#icon-telegram" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/uocingolstadt?igsh=MWsycTF0bHVjYnNqag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg className={styles.socialIcon}>
              <use href="/icons/sprite.svg#icon-instagram" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Свято-Покровська Парафія</p>
        <p>м. Інгольштадт. Усі права захищені.</p>
      </div>
    </footer>
  );
}
