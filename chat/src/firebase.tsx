// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG3xvTvSLZnp7hxI7lVydEMQUI3U17two",
  authDomain: "react-chat-75ed3.firebaseapp.com",
  projectId: "react-chat-75ed3",
  storageBucket: "react-chat-75ed3.firebasestorage.app",
  messagingSenderId: "114289626368",
  appId: "1:114289626368:web:13c7dfd7edf7ae1f1177e5",
  measurementId: "G-YYJKK890CJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);