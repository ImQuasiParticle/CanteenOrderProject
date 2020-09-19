import firebase from "firebase";

const firebaseconfig = {
  apiKey: "AIzaSyDT1OD7JkSRg9qUtDd7QhSZdjQ6ZH6G8mY",
  authDomain: "q-particle-order-system.firebaseapp.com",
  databaseURL: "https://q-particle-order-system.firebaseio.com",
  projectId: "q-particle-order-system",
  storageBucket: "q-particle-order-system.appspot.com",
  messagingSenderId: "719941073535",
  appId: "1:719941073535:web:94971a02ea81ddcda69d4a"
};
const fire = firebase.initializeApp(firebaseconfig);
const db = fire.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  fire,
  db,
  auth,
  storage
};