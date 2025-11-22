// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmhIGOCrGn5ejd46269Tb1QXLcJQ69suE",
  authDomain: "netflixgpt-1c760.firebaseapp.com",
  projectId: "netflixgpt-1c760",
  storageBucket: "netflixgpt-1c760.firebasestorage.app",
  messagingSenderId: "813829013702",
  appId: "1:813829013702:web:ae0e98773e07145c4257c7",
  measurementId: "G-M8JN1TRBFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Fixed line — pass the app instance
export const auth = getAuth(app);

export default app;