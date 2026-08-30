import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

import styles from "../sacrament.module.css";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

type SacramentFeaturesProps = {
  items: Feature[];
};

export default function SacramentFeatures({ items }: SacramentFeaturesProps) {
  return (
    <Section>
      <Container>
        <div className={styles.grid}>
          {items.map((item) => (
            <article className={styles.card} key={item.title}>
              <svg className={styles.icon} aria-hidden="true">
                <use href={`/icons/sprite.svg#${item.icon}`} />
              </svg>

              <h3 className={styles.title}>{item.title}</h3>

              <p className={styles.text}>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
