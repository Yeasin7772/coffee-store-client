// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz07o_4migacyiM35oi0H24wLm29vjdbA",
  authDomain: "coffee-store-998df.firebaseapp.com",
  projectId: "coffee-store-998df",
  storageBucket: "coffee-store-998df.appspot.com",
  messagingSenderId: "781167422354",
  appId: "1:781167422354:web:324adf2f25fbb94e5c6f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app