import Image from "next/image";

import type { Sacrament } from "./sacramentsData";

import styles from "./Sacraments.module.css";

type SacramentIntroProps = {
  sacrament: Sacrament;
};

export default function SacramentIntro({ sacrament }: SacramentIntroProps) {
  return (
    <div className={styles.intro}>
      <div className={styles.introText}>
        <p>{sacrament.introText}</p>
      </div>

      <div className={styles.introImageWrapper}>
        <Image
          src={sacrament.introImage}
          alt={sacrament.introImageAlt}
          fill
          sizes="50vw"
          className={styles.introImage}
        />
      </div>
    </div>
  );
}
