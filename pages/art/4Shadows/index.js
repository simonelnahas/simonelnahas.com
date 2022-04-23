import styles from './index.module.css';
import { useState } from 'react';

function greyShadow(x, y) {
  return (
    x + 'px ' + y + 'px 1px 12px rgba(0,0,0, 0.3)'
  );
}

function whiteShadow(x, y) {
  return (
    x +
    'px ' +
    y +
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
  const distance = 100;
  const factor = 250;
  const blackShadows = directions.map(
    ([x, y]) => {
      return greyShadow(
        (x * (distance * mousePosition.x)) /
          factor,
        (y * (distance * mousePosition.y)) /
          factor,
      );
    },
  );
  const whiteShadows = directions.map(
    ([x, y]) => {
      return whiteShadow(
        (x * (distance * mousePosition.x)) /
          factor,
        (y * (distance * mousePosition.y)) /
          factor,
      );
    },
  );
  const allShadows = [
    ...blackShadows,
    ...whiteShadows,
  ].join(', ');

  return allShadows;
}

export default function FourShadows() {
  const defaultCoordinates = { x: -188, y: -188 };
  const [mousePosition, setMousePosition] =
    useState(defaultCoordinates);
  const handleMouseMove = (e) => {
    var rect = e.target.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };
  return (
    <div
      className={styles.sphereHolder}
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        setMousePosition(defaultCoordinates)
      }
    >
      <div
        className={styles.sphere}
        style={{
          boxShadow: boxShadowCss(mousePosition),
        }}
      />
    </div>
  );
}

export const info = {
  author: 'Simon El Nahas',
  date: '2022-04-23',
  title: '4 shadows',
  description:
    'Inspired by Robert Irwin. Untitled. 1968. Seen at Copenhagen Contemporary. Interact with the artwork using your computermouse to create your own unique experience.',
};
