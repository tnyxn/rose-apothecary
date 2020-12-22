import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAAjlb7YhEn-Mh4K1enWeYSq4gkpi1jypA',
  authDomain: 'rose-apothecary-db.firebaseapp.com',
  projectId: 'rose-apothecary-db',
  storageBucket: 'rose-apothecary-db.appspot.com',
  messagingSenderId: '403767145947',
  appId: '1:403767145947:web:057b6456d42b0214b363fe',
  measurementId: 'G-MTE7B4TZWV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
