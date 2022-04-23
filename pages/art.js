import Layout from '../components/layout';
import styles from './art.module.css';

function greyShadow(distance, x, y) {
  return (
    distance * x +
    'px ' +
    distance * y +
    'px 2px 12px rgba(0,0,0, 0.3)'
  );
}

function whiteShadow(distance, x, y) {
  return (
    distance * x +
    'px ' +
    distance * y +
    'px 50px 50px rgba(249, 249, 249,0.5)'
  );
}

function boxShadowCss() {
  const directions = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const distance = 52;
  const blackShadows = directions.map(
    ([x, y]) => {
      return greyShadow(distance, x, y);
    },
  );
  const whiteShadows = directions.map(
    ([x, y]) => {
      return whiteShadow(distance, x, y);
    },
  );
  const allShadows = [
    ...blackShadows,
    ...whiteShadows,
  ].join(', ');

  return allShadows;
}

export default function Art() {
  return (
    <Layout>
      <h1> Art</h1>
      <div className={styles.sphereHolder}>
        <div
          className={styles.sphere}
          style={{
            boxShadow: boxShadowCss(),
          }}
        />
      </div>
    </Layout>
  );
}
