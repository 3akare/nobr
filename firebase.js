// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7pYSOidoPCBKql4rFoiHCJZC81fystic",
  authDomain: "production-nobr.firebaseapp.com",
  projectId: "production-nobr",
  storageBucket: "production-nobr.appspot.com",
  messagingSenderId: "961040177271",
  appId: "1:961040177271:web:2ff3437885c39f4e7d4e72",
  measurementId: "G-NE44KX33PN",
};

// Initialize Firebase
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
