import styles from './date.module.css';

export type Date = {
  month: string;
  year: string;
  day: string;
  day_week: string;
};

export function Date(date: Date) {
  const { month, year, day, day_week } = date;
  return (
    <div className={styles.dateWrapper}>
      <div className={styles.date}>
        <div>{day}</div>
        <div className={styles.monthAndYear}>
          <div className={styles.month}>{month}</div>
          <div className={styles.year}>{year}</div>
        </div>
      </div>
      <div className={styles.dayWeek}>{day_week}</div>
    </div>
  );
}
