"use client";

import FAQItem from "./FAQItem";
import { faqData, type FAQPageKey } from "./faqData";

import styles from "./FAQ.module.css";

type FAQProps = {
  page: FAQPageKey;
  title?: string;
};

export default function FAQ({ page, title = "Питання — відповіді" }: FAQProps) {
  const items = faqData[page];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.list}>
          {items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
