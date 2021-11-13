import { initializeApp } from "firebase/app";
import "firebase/firestore";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0CyDxx1OBavvuFvxp0G-1kRkNNjjC2EU",
  authDomain: "fpgelato.firebaseapp.com",
  projectId: "fpgelato",
  storageBucket: "fpgelato.appspot.com",
  messagingSenderId: "16494505347",
  appId: "1:16494505347:web:16c27808204f71636e9ab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};


