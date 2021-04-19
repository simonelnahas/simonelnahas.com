import Layout from '../components/layout';

import firebase from 'firebase';

import { useObjectVal } from 'react-firebase-hooks/database';
import Counter from '../components/fun/counter';

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

export default function Fun() {
  return (
    <Layout>
      <Counter />
    </Layout>
  );
}
