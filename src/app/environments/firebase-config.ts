// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLmrfLzViR03gBWCqQoOweaj5zldL7N3Y",
  authDomain: "lab5-8297b.firebaseapp.com",
  projectId: "lab5-8297b",
  storageBucket: "lab5-8297b.appspot.com",
  messagingSenderId: "388656392083",
  appId: "1:388656392083:web:463311b8ba91d085a3aa66",
  measurementId: "G-0FTBP1HKBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };