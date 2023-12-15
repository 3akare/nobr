// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUnCOpA5BRp34k6rM7zpAloJyRmfFYXP4",
  authDomain: "nobr-9f674.firebaseapp.com",
  projectId: "nobr-9f674",
  storageBucket: "nobr-9f674.appspot.com",
  messagingSenderId: "1011287997099",
  appId: "1:1011287997099:web:270c3ebff5e809e8d515ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
