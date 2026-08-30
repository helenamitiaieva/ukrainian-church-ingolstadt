import Image from "next/image";

import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";

import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  buttonText: string;
  buttonHref: string;
};

export default function Hero({
  title,
  subtitle,
  image,
  alt,
  buttonText,
  buttonHref,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.subtitle}>{subtitle}</p>

          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </Container>
    </section>
  );
}
