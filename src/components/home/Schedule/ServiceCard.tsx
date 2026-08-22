import Image from "next/image";

import styles from "./ServiceCard.module.css";

type Service = {
  time: string;
  title: string;
};

type ServiceCardProps = {
  day: string;
  date: string;
  icon: string;
  services: Service[];
};

export default function ServiceCard({
  day,
  date,
  icon,
  services,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true">
            <use href={icon} />
          </svg>
        </div>

        <h3 className={styles.date}>
          {day}, {date}
        </h3>
      </div>

      <div className={styles.services}>
        {services.map((service) => (
          <div
            className={styles.service}
            key={`${service.time}-${service.title}`}
          >
            <span className={styles.time}>{service.time}</span>

            <span aria-hidden="true"> — </span>

            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
