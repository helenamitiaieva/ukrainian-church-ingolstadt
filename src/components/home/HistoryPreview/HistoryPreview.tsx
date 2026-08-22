import Image from "next/image";

import Container from "@/components/common/Container/Container";
import Section from "@/components/common/Section/Section";
import Button from "@/components/common/Button/Button";

import styles from "./HistoryPreview.module.css";

export default function HistoryPreview() {
  return (
    <Section id="history" className={styles.history}>
      <Container>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Історія храму</h2>

            <p className={styles.subtitle}>
              Понад 80 років молитви, віри та служіння українській громаді.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/home/history-church.webp"
              alt="Церква Покрови Пресвятої Богородиці в Інгольштадті"
              fill
              sizes="(max-width: 767px) 100vw, 700px"
              className={styles.image}
            />
          </div>

          <p className={styles.description}>1945 р. – заснування храму</p>

          <Button href="/history">Читати повну історію</Button>
        </div>
      </Container>
    </Section>
  );
}
