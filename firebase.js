// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjbIga8Tac4Jhq6r9r4TKlblJeuY3ZdgI",
  authDomain: "nobr-52208.firebaseapp.com",
  projectId: "nobr-52208",
  storageBucket: "nobr-52208.appspot.com",
  messagingSenderId: "917229872453",
  appId: "1:917229872453:web:82852695c85b28f7164a2c",
};

//Initialize App
export const app =
  getApps.length === 0 ? initializeApp(firebaseConfig) : getApp;

//Create Firestore instance
const database = getFirestore();

//Create Collection Reference
export const collectionRef = collection(database, "users-email");
