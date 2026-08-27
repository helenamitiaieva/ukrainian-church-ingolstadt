import Image from "next/image";

import type { Sacrament } from "./sacramentsData";

import styles from "./Sacraments.module.css";

type SacramentHeroProps = {
  sacrament: Sacrament;
  showImage?: boolean;
  showText?: boolean;
};

export default function SacramentHero({
  sacrament,
  showImage = true,
  showText = true,
}: SacramentHeroProps) {
  return (
    <div className={styles.hero}>
      {showImage && (
        <>
          <Image
            src={sacrament.heroImage}
            alt={sacrament.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className={styles.heroImage}
            priority
          />

          <div className={styles.heroOverlay} />
        </>
      )}

      {showText && (
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>{sacrament.title}</h2>

          <p className={styles.heroSubtitle}>{sacrament.subtitle}</p>
        </div>
      )}
    </div>
  );
}
