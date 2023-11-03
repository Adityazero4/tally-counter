import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfJh4a_-F1t5i9Ng6-2QTLVAQNrMgxXp4",
  authDomain: "tally-counter-ae4e5.firebaseapp.com",
  projectId: "tally-counter-ae4e5",
  storageBucket: "tally-counter-ae4e5.appspot.com",
  messagingSenderId: "706570914314",
  appId: "1:706570914314:web:38477bceb66194ae4e6df3",
  measurementId: "G-LWSHWQQR5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };
