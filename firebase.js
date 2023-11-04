import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgaVyhRr-HVSRX9Q-zpQ0D0lSXEe_8FlE",
  authDomain: "fir-demo-1dd65.firebaseapp.com",
  projectId: "fir-demo-1dd65",
  storageBucket: "fir-demo-1dd65.appspot.com",
  messagingSenderId: "871874380877",
  appId: "1:871874380877:web:cd68c52018f2510ff5c804",
};

export const app =
  getApps.length === 0 ? initializeApp(firebaseConfig) : getApp;

export const database = getFirestore();
