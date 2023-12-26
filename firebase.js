// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
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
  measurementId: "G-GVEGKT68RK",
};

//Initialize App
export const app =
  getApps.length === 0 ? initializeApp(firebaseConfig) : getApp;
  
//Analytics
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

//Create Firestore instance
export const database = getFirestore(app);

//Create Collection Reference
export const EmailCollectionRef = collection(database, "users-email");
export const UsersCollectionRef = collection(database, "users");
export const RoomsCollectionRef = collection(database, "rooms");
