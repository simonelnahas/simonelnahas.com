import { useState } from 'react';
import Layout from '../components/layout';
import styles from './art.module.css';

function greyShadow(distanceX, distanceY) {
  return (
    distanceX +
    'px ' +
    distanceY +
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

function boxShadowCss(mousePosition) {
  const directions = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const distance = 52;
  const blackShadows = directions.map(
    ([x, y]) => {
      return greyShadow(
        x * distance + mousePosition.x,
        y * distance + mousePosition.y,
      );
    },
  );
  const whiteShadows = directions.map(
    ([x, y]) => {
      return whiteShadow(
        distance,
        mousePosition.x + x,
        mousePosition.y + y,
      );
    },
  );
  const allShadows = [
    ...blackShadows,
    // ...whiteShadows,
  ].join(', ');

  return allShadows;
}

export default function Art() {
  const [mousePosition, setMousePosition] =
    useState({
      x: 20,
      y: 20,
    });
  const handleMouseMove = (e) => {
    var rect = e.target.getBoundingClientRect();
    console.log(rect);
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <Layout>
      <h1> Art</h1>
      <div
        className={styles.sphereHolder}
        onMouseMove={handleMouseMove}
      >
        <div
          className={styles.sphere}
          style={{
            boxShadow: boxShadowCss(
              mousePosition,
            ),
          }}
        />
      </div>
    </Layout>
  );
}
