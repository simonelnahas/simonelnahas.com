import Layout from '../../components/layout';
import styles from './index.module.css';

import FourShadows from './fourShadows/index.js';

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
  const me = 'Simon El Nahas';

  return (
    <Layout>
      <h1> Art</h1>
      <Exhibition
        author={me}
        date='2022-04-23'
        title='4 shadows'
        description='Inspired by Robert Irwin. Untitled. 1968. Seen at Copenhagen Contemporary. Interact with the artwork using your computer mouse to create your own unique experience.'
      >
        <FourShadows />
      </Exhibition>
    </Layout>
  );
}
