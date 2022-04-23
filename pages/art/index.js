import Layout from '../../components/layout';
import styles from './index.module.css';

import FourShadows, {
  info,
} from './4SHADOWS/index.js';

function Exhibition({
  children,
  author,
  date,
  title,
  description,
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

export default function Art() {
  return (
    <Layout>
      <h1> Art</h1>
      <Exhibition {...info}>
        <FourShadows />
      </Exhibition>
    </Layout>
  );
}
