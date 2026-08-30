import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

import type { SacramentCardSection as SacramentCardSectionType } from "@/data/sacraments/types";

import styles from "../sacrament.module.css";

type SacramentCardSectionProps = {
  data: SacramentCardSectionType;
  id?: string;
};

export default function SacramentCardSection({
  data,
  id,
}: SacramentCardSectionProps) {
  return (
    <Section id={id}>
      <Container>
        <div className={styles.sectionWrapper}>
          {data.title && <h2 className={styles.sectionTitle}>{data.title}</h2>}

          <div className={styles.cards}>
            {data.cards.map((card, index) => (
              <article className={styles.card} key={card.title ?? index}>
                {card.title && (
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                )}

                <p className={styles.text}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
