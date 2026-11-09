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
          <h2 className={styles.title}>Історія храму</h2>
          <div className={styles.contentWrap}>
            <div className={styles.heading}>
              <p className={styles.subtitle}>
                Парафія заснована у 1945 році є найстарішою українською
                православною громадою в Німеччині. Протягом понад восьми
                десятиліть вона обʼєднує українців, зберігаючи православну віру,
                національні традиції, культуру та рідну мову.
              </p>
              <Button href="/history" className={styles.button}>
                Читати повну історію
              </Button>
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
