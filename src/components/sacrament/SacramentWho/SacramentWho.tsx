import type { SacramentWhoItem } from "@/data/sacraments/types";
import styles from "../sacrament.module.css";

import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

type SacramentWhoProps = {
  title: string;
  items: SacramentWhoItem[];
};

export default function SacramentWho({ title, items }: SacramentWhoProps) {
  return (
    <Section className={styles.sacramentSection} id="who">
      <Container>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.cards}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>

              {item.text && (
                <p className={`${styles.text} ${styles.textWho}`}>
                  {item.text}
                </p>
              )}

              {item.mainItems && (
                <ul className={styles.list}>
                  {item.mainItems.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                  ))}
                </ul>
              )}

              {item.preparationTitle && (
                <h4 className={styles.preparationTitle}>
                  {item.preparationTitle}
                </h4>
              )}

              <ul className={styles.list}>
                {item.preparationItems.map((listItem) => (
                  <li key={listItem}>{listItem}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
