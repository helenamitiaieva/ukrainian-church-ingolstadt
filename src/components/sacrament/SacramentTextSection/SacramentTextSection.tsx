import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

import styles from "../sacrament.module.css";

type SacramentTextSectionProps = {
  title: string;
  text: string;
  id?: string;
};

export default function SacramentTextSection({
  title,
  text,
  id,
}: SacramentTextSectionProps) {
  return (
    <Section id={id}>
      <Container>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.sectionTitle}>{title}</h2>

          <div className={styles.card}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
