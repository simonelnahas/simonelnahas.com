import styles from './zoomButton.module.css';

export default function ZoomButton() {
  return (
    <>
      <h2>Simon's Meeting Room</h2>
      <a
        className={styles.button}
        href='https://meet.google.com/rbw-huzt-aud'
        target='_blank'
      >
        Join Meeting
      </a>
    </>
  );
}
