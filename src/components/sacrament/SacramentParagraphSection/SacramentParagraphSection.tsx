import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

import type { SacramentParagraphSection as SacramentParagraphSectionType } from "@/data/sacraments/types";

import styles from "../sacrament.module.css";

type SacramentParagraphSectionProps = {
  data: SacramentParagraphSectionType;
};

export default function SacramentParagraphSection({
  data,
}: SacramentParagraphSectionProps) {
  return (
    <Section>
      <Container>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.sectionTitle}>{data.title}</h2>

          <div className={styles.cards}>
            {data.paragraphs.map((paragraph) => (
              <article className={styles.card} key={paragraph}>
                <p className={`${styles.text} ${styles.godparentsText}`}>
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
