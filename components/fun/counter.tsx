import styles from './counter.module.css';

import firebase from 'firebase';

import { useObjectVal } from 'react-firebase-hooks/database';

var firebaseConfig = {
  //Firebase API keys are not secret, since they only identify the project in the same way a domain does for a website.
  //otherwise API keys should be kept in env variables.
  // https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public/37484053#37484053

  apiKey:
    'AIzaSyBnvARgHBbQ2jCJ6V9wNDcb7d_-QI-xcd4',
  authDomain: 'simonelnahas-com.firebaseapp.com',
  projectId: 'simonelnahas-com',
  storageBucket: 'simonelnahas-com.appspot.com',
  messagingSenderId: '799541553822',
  appId:
    '1:799541553822:web:d0b8fdaaed2a7ddd02298f',
  measurementId: 'G-672WL29LPB',
};
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
var database = firebase.database();

const counterRef = database.ref(
  'buttonClickCounter/count',
);

export default function Counter() {
  const [count, loading, error] = useObjectVal(
    firebase
      .database()
      .ref('buttonClickCounter/count'),
  );

  const click = async () => {
    await firebase
      .database()
      .ref('buttonClickCounter/count')
      .transaction(
        (currentCount) => currentCount + 1,
      );
    firebase
      .analytics()
      .logEvent('incremented_counter');
  };

  return (
    <h1>
      This{' '}
      <button
        onClick={click}
        className={styles.button}
      >
        Button
      </button>{' '}
      has been clicked {loading ? '...' : count}{' '}
      times.
    </h1>
  );
}
