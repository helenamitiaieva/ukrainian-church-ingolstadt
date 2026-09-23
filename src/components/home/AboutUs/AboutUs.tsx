import Section from "@/components/common/Section/Section";

import styles from "./AboutUs.module.css";

export default function About() {
  return (
    <Section id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Про нас</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.textCard}>
              <p className={styles.subtitle}>
                Наша Свято-Покровська Парафія належить до Української
                Православної Церкви в Діаспорі, яка є частиною Вселенського
                (Константинопольского) Патріархату і перебуває у канонічній і
                євхаристичній єдності з усіма канонічними Православними
                Помісними Церквами. Наша Українська Православна Церква належить
                до Конференції Православних (канонічних) Єпископів у Німеччині
                (Orthodoxe Bischofskonferenz in Deutschland (OBKD))
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
