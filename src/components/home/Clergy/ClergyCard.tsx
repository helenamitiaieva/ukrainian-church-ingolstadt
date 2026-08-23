import Image from "next/image";

import styles from "./ClergyCard.module.css";

type ClergyCardProps = {
  image: string;
  role: string;
  name: string;
};

export default function ClergyCard({ image, role, name }: ClergyCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`${role} ${name}`}
          fill
          className={styles.image}
          sizes="(max-width: 767px) 100vw, 320px"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.role}>
          <span className={styles.line} />
          <p>{role}</p>
          <span className={styles.line} />
        </div>

        <p className={styles.name}>{name}</p>
      </div>
    </article>
  );
}
