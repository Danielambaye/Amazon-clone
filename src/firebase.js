// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDpxEc3uWaEtpqeeGHW9dS7jdobvm9rNbg",
    authDomain: "sept-f2d7d.firebaseapp.com",
    projectId: "sept-f2d7d",
    storageBucket: "sept-f2d7d.appspot.com",
    messagingSenderId: "41788726976",
    appId: "1:41788726976:web:efd86959d8885a5c9b9725",
    measurementId: "G-KLQ0HM2BK2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };