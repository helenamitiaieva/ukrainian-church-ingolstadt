"use client";

import { useState } from "react";

import styles from "./FAQ.module.css";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.question}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        <span
          className={`${styles.plus} ${isOpen ? styles.plusOpen : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
        <div className={styles.answerContent}>{answer}</div>
      </div>
    </div>
  );
}
