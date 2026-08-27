import Image from "next/image";

import type { Sacrament } from "./sacramentsData";

import styles from "./Sacraments.module.css";

type SacramentIntroProps = {
  sacrament: Sacrament;
};

export function SacramentIntroText({ sacrament }: SacramentIntroProps) {
  return (
    <div className={styles.introTextContent}>
      <p>{sacrament.introText}</p>
    </div>
  );
}

export function SacramentIntroImage({ sacrament }: SacramentIntroProps) {
  return (
    <div className={styles.introImageWrapper}>
      <Image
        src={sacrament.introImage}
        alt={sacrament.introImageAlt}
        fill
        sizes="50vw"
        className={styles.introImage}
      />
    </div>
  );
}
