import styles from './index.module.css';
import Link from 'next/link';

export default function Exhibition({
  children,
  author,
  date,
  title,
  description,
  href,
}) {
  return (
    <div>
      {children}
      <div className={styles.info}>
        <p className={styles.name}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}
