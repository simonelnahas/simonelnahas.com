import styles from './zoomButton.module.css';

export default function ZoomButton() {
  return (
    <>
      <h2>Simon's Meeting Room</h2>
      <a
        className={styles.button}
        href='https://dtudk.zoom.us/j/4542427774'
        target='_blank'
      >
        Join Zoom Meeting
      </a>
    </>
  );
}
