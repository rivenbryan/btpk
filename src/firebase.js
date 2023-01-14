import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCRHxpjvtWk2kQ-Afp0XBLmuEgqs7danE",
  authDomain: "btpk-167be.firebaseapp.com",
  projectId: "btpk-167be",
  storageBucket: "btpk-167be.appspot.com",
  messagingSenderId: "731193637710",
  appId: "1:731193637710:web:20e0066eea7afae51b3c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {app ,db}