
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPHmJACy5kUW3qM9WIB5Zin6JtaPBv4g8",
  authDomain: "totalqualityproduction-4d592.firebaseapp.com",
  projectId: "totalqualityproduction-4d592",
  storageBucket: "totalqualityproduction-4d592.appspot.com",
  messagingSenderId: "305895645708",
  appId: "1:305895645708:web:e21df789da2906514bc429",
  measurementId: "G-8GWXJ2CJXC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);