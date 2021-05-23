import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrvzLwDy6WcGGfH0y98BpSFYrOM4u7izo",
  authDomain: "amz-challenge-13d5e.firebaseapp.com",
  projectId: "amz-challenge-13d5e",
  storageBucket: "amz-challenge-13d5e.appspot.com",
  messagingSenderId: "577278130495",
  appId: "1:577278130495:web:ebe789a89da281eefc7b8a",
  measurementId: "G-YND1XKHQ1K",
};

const app = firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
