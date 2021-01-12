import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1IQgIs83X70fTM09G99JqQ3IrX36KRdg",
  authDomain: "burguer-queen-428af.firebaseapp.com",
  projectId: "burguer-queen-428af",
  storageBucket: "burguer-queen-428af.appspot.com",
  messagingSenderId: "124064613385",
  appId: "1:124064613385:web:96b731517426de8796e4d8"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
