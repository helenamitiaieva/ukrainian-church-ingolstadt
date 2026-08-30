import styles from "@/components/sacrament/sacrament.module.css";

export default function SacramentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.sacramentPage}>{children}</div>;
}
