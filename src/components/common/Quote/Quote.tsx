import { useId } from "react";
import styles from "./Quote.module.css";
import QuoteDecor from "./QuoteDecor";
import QuoteLine from "./QuoteLine";

type QuoteProps = {
  text: string;
  source: string;
};

export default function Quote({ text, source }: QuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <div className={styles.quoteContent}>
        <QuoteDecor className={styles.decor} />

        <p className={styles.text}>{text}</p>
      </div>

      <QuoteLine className={styles.line} />

      <cite className={styles.source}>{source}</cite>
    </blockquote>
  );
}
