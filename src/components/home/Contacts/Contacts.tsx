import Image from "next/image";
import { contactData } from "./contactData";

import styles from "./Contacts.module.css";

export default function ContactSection() {
  return (
    <section id="contacts" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>{contactData.title}</h2>

        <p className={styles.description}>{contactData.description}</p>

        <div className={styles.contacts}>
          <ContactItem
            icon={contactData.address.icon}
            lines={contactData.address.lines}
          />

          <ContactItem
            icon={contactData.phone.icon}
            lines={contactData.phone.lines}
          />

          <ContactItem
            icon={contactData.email.icon}
            lines={contactData.email.lines}
          />
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Ukrainische+Orthodoxe+Kirche+in+Ingolstadt"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}
          aria-label="Відкрити храм у Google Maps"
        >
          <Image
            src="/images/home/map.webp"
            alt="Розташування храму в Інгольштадті"
            fill
            className={styles.mapImage}
          />
        </a>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: string;
  lines: string[];
};

function ContactItem({ icon, lines }: ContactItemProps) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.iconWrapper}>
        <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true">
          <use href={`/icons/sprite.svg#${icon}`} />
        </svg>
      </div>

      <div className={styles.contactText}>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
