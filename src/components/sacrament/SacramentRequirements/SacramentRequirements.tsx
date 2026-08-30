import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";
import type { SacramentRequirements as SacramentRequirementsType } from "@/data/sacraments/types";

import styles from "../sacrament.module.css";

type SacramentRequirementsProps = {
  data: SacramentRequirementsType;
};

export default function SacramentRequirements({
  data,
}: SacramentRequirementsProps) {
  return (
    <Section id="requirements">
      <Container>
        <h2 className={styles.titleReq}>{data.title}</h2>

        {data.intro && <p className={styles.intro}>{data.intro}</p>}

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3 className={styles.titleReqCard}>{card.title}</h3>

              <ul className={styles.list}>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
