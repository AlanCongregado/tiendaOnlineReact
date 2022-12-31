// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7B4W7FIYS_sZw3AiJlDnSXLN42lxupaY",
  authDomain: "ecommerce-f99a6.firebaseapp.com",
  projectId: "ecommerce-f99a6",
  storageBucket: "ecommerce-f99a6.appspot.com",
  messagingSenderId: "875195077440",
  appId: "1:875195077440:web:806766fdd7f40d4e5f20a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
