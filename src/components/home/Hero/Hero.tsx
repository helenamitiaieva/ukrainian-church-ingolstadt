import Image from "next/image";

import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/home/hero.webp"
        alt="Свято-Покровська церква в Інгольштадті"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Українська Православна Церква в діаспорі
          </h1>

          <p className={styles.subtitle}>
            Вселенський Патріархат Свято-Покровська Парафія м. Інгольштадт
          </p>

          <Button href="tel:+491728820478">Зателефонувати настоятелю</Button>
        </div>
      </Container>
    </section>
  );
}
