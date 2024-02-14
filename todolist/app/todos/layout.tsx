import { Metadata } from 'next';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'todos',
  description: 'todo list app',
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={styles.main}>
      <section className={styles.section}>{children}</section>
    </main>
  );
}
