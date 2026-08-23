import Image from "next/image";

import Container from "@/components/common/Container/Container";
import Section from "@/components/common/Section/Section";

import ClergyCard from "./ClergyCard";

import styles from "./Clergy.module.css";

const clergy = [
  {
    image: "/images/home/clergy/alexander.webp",
    role: "Настоятель храму",
    name: "Ієрей Олександр",
  },
  {
    image: "/images/home/clergy/pavlo.webp",
    role: "Священник",
    name: "Ієрей Павло",
  },
];

export default function Clergy() {
  return (
    <Section id="clergy" className={styles.clergy}>
      <Image
        src="/images/home/clergy/clergy-bg.webp"
        alt=""
        width={300}
        height={500}
        className={styles.backgroundTop}
        aria-hidden="true"
      />

      <Image
        src="/images/home/clergy/clergy-bg.webp"
        alt=""
        width={300}
        height={500}
        className={styles.backgroundBottom}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.content}>
          <svg className={styles.decor} viewBox="0 0 373 32" aria-hidden="true">
            <use href="/icons/sprite.svg#icon-clergy" />
          </svg>

          <h2 className={styles.title}>
            Духовенство
            <br />
            храму
          </h2>

          <div className={styles.cards}>
            {clergy.map((person) => (
              <ClergyCard
                key={person.name}
                image={person.image}
                role={person.role}
                name={person.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
