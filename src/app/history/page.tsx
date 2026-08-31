import Container from "@/components/common/Container/Container";
import styles from "./page.module.css";

export default function HistoryPage() {
  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.content}>
          <span className={styles.label}>Історія парафії</span>

          <h1 className={styles.title}>Цей розділ зараз у розробці</h1>

          <p className={styles.text}>
            Ми готуємо повну історію Свято-Покровської парафії — від заснування
            громади до сьогодення. Незабаром вона з’явиться на цій сторінці.
          </p>
        </div>
      </Container>
    </main>
  );
}
