import Section from "@/components/common/Section/Section";
import Container from "@/components/common/Container/Container";

import styles from "../sacrament.module.css";

type SacramentAboutProps = {
  data: {
    title: string;
    text: string;
  };
};

export default function SacramentAbout({ data }: SacramentAboutProps) {
  return (
    <Section id="about">
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h2 className={styles.titleAbout}>{data.title}</h2>
            <p className={styles.textAbout}>{data.text}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
