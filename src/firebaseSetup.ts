import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXlwfq0nWvalQ5gtc2CxxUBERfgjzvnVg",
  authDomain: "pixelpool-interview.firebaseapp.com",
  projectId: "pixelpool-interview",
  storageBucket: "pixelpool-interview.appspot.com",
  messagingSenderId: "926606752666",
  appId: "1:926606752666:web:1d75157ad93e64d0e75823",
  measurementId: "G-9HQFS23RFK",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();
