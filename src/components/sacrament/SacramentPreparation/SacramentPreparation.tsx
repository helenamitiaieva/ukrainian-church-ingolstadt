import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

import type { SacramentPreparation as SacramentPreparationType } from "@/data/sacraments/types";

import styles from "../sacrament.module.css";

type SacramentPreparationProps = {
  data: SacramentPreparationType;
  id?: string;
};

export default function SacramentPreparation({
  data,
  id,
}: SacramentPreparationProps) {
  return (
    <Section id={id}>
      <Container>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.sectionTitle}>{data.title}</h2>

          <div className={styles.cards}>
            {data.steps.map((step) => (
              <article className={styles.card} key={step.title}>
                <h3 className={styles.goldTitle}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
