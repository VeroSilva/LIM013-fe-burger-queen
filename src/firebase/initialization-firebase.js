import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDTLbzCMYBOP8YToX7vyZQWtrs6KtDCUI',
  authDomain: 'burguer-queen-d21f6.firebaseapp.com',
  projectId: 'burguer-queen-d21f6',
  storageBucket: 'burguer-queen-d21f6.appspot.com',
  messagingSenderId: '110811223073',
  appId: '1:110811223073:web:5c8954850d5a100071ff60',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
export default db;
